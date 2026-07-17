import logoAsset from "@/assets/deck/logo.asset.json";

type Props = {
  variant?: "full" | "knockout";
  className?: string;
  width?: number;
};

/**
 * TotoAfya Digital logo. Full-color variant on light slides, knockout
 * (white-tinted, brightness inverted) on dark/photo backgrounds.
 */
export function LogoMark({ variant = "full", className = "", width = 220 }: Props) {
  const isKnockout = variant === "knockout";
  return (
    <img
      src={logoAsset.url}
      alt="TotoAfya Digital"
      width={width}
      className={className}
      style={{
        width,
        height: "auto",
        filter: isKnockout
          ? "brightness(0) invert(1) drop-shadow(0 2px 12px rgba(0,0,0,0.35))"
          : "none",
      }}
    />
  );
}
