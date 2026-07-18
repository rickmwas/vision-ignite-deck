import { type ReactNode } from "react";
import { LogoMark } from "./LogoMark";

type Props = {
  children: ReactNode;
  index: number;
  total: number;
  tone?: "light" | "cream" | "dark" | "brand";
  className?: string;
  showChrome?: boolean;
};

/**
 * 1920x1080 slide canvas with persistent TotoAfya logo (top-left) and slide
 * counter (bottom-right). Tone controls background + logo variant.
 */
export function SlideLayout({
  children,
  index,
  total,
  tone = "light",
  className = "",
  showChrome = true,
}: Props) {
  const bg =
    tone === "dark"
      ? "#0E1A12"
      : tone === "brand"
        ? "#1F7A3A"
        : tone === "cream"
          ? "#FFF9F0"
          : "#FFFFFF";
  const fg = tone === "dark" || tone === "brand" ? "#FFFFFF" : "#1A1A1A";
  const logoVariant = tone === "dark" || tone === "brand" ? "knockout" : "full";
  const chromeColor = tone === "dark" || tone === "brand" ? "rgba(255,255,255,0.65)" : "rgba(26,26,26,0.55)";

  return (
    <div
      className={`slide-content ${className}`}
      style={{ backgroundColor: bg, color: fg }}
    >
      {children}

      {showChrome && (
        <>
          {/* Logo — top left, present on every slide */}
          <div
            style={{
              position: "absolute",
              top: 56,
              left: 72,
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <LogoMark variant={logoVariant} width={180} />
          </div>

          {/* Slide counter — bottom right */}
          <div
            className="slide-page"
            style={{
              position: "absolute",
              bottom: 56,
              right: 72,
              color: chromeColor,
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 500,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontVariantNumeric: "tabular-nums" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span style={{ width: 32, height: 1, background: chromeColor, opacity: 0.5 }} />
            <span style={{ fontVariantNumeric: "tabular-nums" }}>{String(total).padStart(2, "0")}</span>
          </div>
        </>
      )}
    </div>
  );
}

/** Accent orange bar — the single accent motif carried across the deck */
export function AccentBar({ width = 96, className = "" }: { width?: number; className?: string }) {
  return (
    <div
      className={className}
      style={{ width, height: 6, background: "#F26A21", borderRadius: 3 }}
    />
  );
}
