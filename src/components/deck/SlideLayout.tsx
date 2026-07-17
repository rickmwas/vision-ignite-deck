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
        ? "var(--brand-green)"
        : tone === "cream"
          ? "var(--brand-cream)"
          : "#FFFFFF";
  const logoVariant = tone === "dark" || tone === "brand" ? "knockout" : "full";
  const chromeColor = tone === "dark" || tone === "brand" ? "rgba(255,255,255,0.65)" : "rgba(26,26,26,0.55)";

  return (
    <div
      className={`slide-content ${className}`}
      style={{ backgroundColor: bg, color: tone === "dark" || tone === "brand" ? "#FFFFFF" : "var(--brand-ink)" }}
    >
      {children}

      {showChrome && (
        <>
          {/* Logo — top left, present on every slide */}
          <div
            style={{
              position: "absolute",
              top: 60,
              left: 80,
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <LogoMark variant={logoVariant} width={240} />
          </div>

          {/* Slide counter — bottom right */}
          <div
            className="slide-page"
            style={{
              position: "absolute",
              bottom: 60,
              right: 80,
              color: chromeColor,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontVariantNumeric: "tabular-nums" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span style={{ width: 40, height: 1, background: chromeColor, opacity: 0.5 }} />
            <span style={{ fontVariantNumeric: "tabular-nums" }}>{String(total).padStart(2, "0")}</span>
          </div>

          {/* Bottom-left brand mark line */}
          <div
            className="slide-chrome"
            style={{
              position: "absolute",
              bottom: 60,
              left: 80,
              color: chromeColor,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              zIndex: 50,
            }}
          >
            TotoAfya Digital · Investor Pitch 2026
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
      style={{ width, height: 6, background: "var(--brand-orange)", borderRadius: 3 }}
    />
  );
}
