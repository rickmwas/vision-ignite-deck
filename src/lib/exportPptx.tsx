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

  // Capture original getComputedStyle to restore in finally block
  const originalGetComputedStyle = window.getComputedStyle;

  // OKLCH to RGB converter for html2canvas compatibility (Tailwind v4 support)
  const oklchToRgb = (oklchStr: string): string => {
    const regex = /oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)/i;
    const match = oklchStr.match(regex);
    if (!match) return "rgb(0, 0, 0)";

    let L = parseFloat(match[1]);
    if (match[1].includes("%")) L /= 100;
    const C = parseFloat(match[2]);
    const H = parseFloat(match[3]);
    let A = match[4] !== undefined ? parseFloat(match[4]) : 1;
    if (match[4] && match[4].includes("%")) A /= 100;

    const hRad = (H * Math.PI) / 180;
    const a = C * Math.cos(hRad);
    const b = C * Math.sin(hRad);

    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

    const l_l = l_ * l_ * l_;
    const m_l = m_ * m_ * m_;
    const s_l = s_ * s_ * s_;

    const r = +4.0767416621 * l_l - 3.3077115913 * m_l + 0.2309699292 * s_l;
    const g = -1.2684380046 * l_l + 2.6097574011 * m_l - 0.3413193965 * s_l;
    const b_val = -0.0041960863 * l_l - 0.7034186147 * m_l + 1.7076147010 * s_l;

    const fn = (x: number) => (x > 0.0031308 ? 1.055 * Math.pow(x, 1 / 2.4) - 0.055 : 12.92 * x);
    const R = Math.round(Math.max(0, Math.min(1, fn(r))) * 255);
    const G = Math.round(Math.max(0, Math.min(1, fn(g))) * 255);
    const B = Math.round(Math.max(0, Math.min(1, fn(b_val))) * 255);

    return A === 1 ? `rgb(${R}, ${G}, ${B})` : `rgba(${R}, ${G}, ${B}, ${A})`;
  };

  const cleanOklch = (val: any): any => {
    if (typeof val !== "string" || !val.includes("oklch")) return val;
    return val.replace(/oklch\([^)]+\)/gi, (match) => {
      try {
        return oklchToRgb(match);
      } catch {
        return "rgb(0, 0, 0)";
      }
    });
  };

  // Temporarily monkey-patch getComputedStyle to translate oklch format colors
  window.getComputedStyle = function (elt, pseudoElt) {
    const style = originalGetComputedStyle(elt, pseudoElt);
    return new Proxy(style, {
      get(target, prop) {
        if (prop === "getPropertyValue") {
          return (key: string) => cleanOklch(target.getPropertyValue(key));
        }
        const val = Reflect.get(target, prop);
        return typeof val === "function" ? val.bind(target) : cleanOklch(val);
      },
    });
  };

  // Create a style element to disable animations/transitions during export
  const disableAnimStyle = document.createElement("style");
  disableAnimStyle.id = "export-disable-animations";
  disableAnimStyle.innerHTML = `
    #export-host-container, #export-host-container * {
      animation: none !important;
      transition: none !important;
      animation-delay: 0s !important;
      animation-duration: 0s !important;
    }
  `;
  document.head.appendChild(disableAnimStyle);

  // Off-screen host at exact slide resolution
  const host = document.createElement("div");
  host.id = "export-host-container";
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
      console.log(`exportToPptx: rendering slide ${i + 1}/${total}...`);
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
        allowTaint: false,
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
    // Make sure we restore getComputedStyle and clean up elements
    window.getComputedStyle = originalGetComputedStyle;
    const styleTag = document.getElementById("export-disable-animations");
    if (styleTag) styleTag.remove();
    root.unmount();
    document.body.removeChild(host);
  }
}
