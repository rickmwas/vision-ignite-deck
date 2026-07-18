import { createElement } from "react";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import PptxGenJS from "pptxgenjs";
import { slides } from "@/components/deck/slideRegistry";

export type ExportProgress = {
  done: number;
  total: number;
};

export async function exportToPptx(
  onProgress?: (p: ExportProgress) => void,
): Promise<void> {
  const total = slides.length;

  const pptx = new PptxGenJS();
  // 16:9 widescreen — 13.33" × 7.5"
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = "TotoAfya Digital — Investor Pitch";
  pptx.author = "TotoAfya";

  // Off-screen host at exact slide resolution
  const host = document.createElement("div");
  Object.assign(host.style, {
    position: "fixed",
    top: "0px",
    left: "-1960px",       // safely off-screen
    width: "1920px",
    height: "1080px",
    overflow: "hidden",
    zIndex: "0",
    pointerEvents: "none",
  });
  document.body.appendChild(host);

  const root = createRoot(host);

  try {
    for (let i = 0; i < total; i++) {
      onProgress?.({ done: i, total });

      const { Component } = slides[i];

      // Mount and wait for two animation frames + a short settle
      await new Promise<void>((resolve) => {
        root.render(createElement(Component, { index: i, total }));
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setTimeout(resolve, 250)),
        );
      });

      const canvas = await html2canvas(host, {
        width: 1920,
        height: 1080,
        // scale 0.5 → 960×540; enough for screen-quality PPTX, keeps file size sane
        scale: 0.5,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#000000",
      });

      const dataUrl = canvas.toDataURL("image/jpeg", 0.88);

      const pptSlide = pptx.addSlide();
      pptSlide.addImage({ data: dataUrl, x: 0, y: 0, w: "100%", h: "100%" });
    }

    onProgress?.({ done: total, total });
    await pptx.writeFile({ fileName: "TotoAfya-Pitch.pptx" });
  } finally {
    root.unmount();
    document.body.removeChild(host);
  }
}
