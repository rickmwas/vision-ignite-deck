import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Deliver a single shocking statistic.",
  headline: "1 in 39",
  emotionalGoal: "Shock. Weight. Reality.",
};

export default function Slide02({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 200px",
          textAlign: "center",
        }}
      >
        <div className="slide-kicker" style={{ color: "var(--brand-green)" }}>
          Sub-Saharan Africa · Lifetime Risk
        </div>
        <div
          className="slide-title-xl"
          style={{
            marginTop: 40,
            fontSize: 340,
            lineHeight: 0.85,
            fontWeight: 800,
            letterSpacing: "-0.07em",
            color: "var(--brand-green)",
            display: "flex",
            alignItems: "baseline",
            gap: 32,
          }}
        >
          <span>1</span>
          <span style={{ fontSize: 200, color: "var(--brand-ink)", opacity: 0.35 }}>in</span>
          <span style={{ color: "var(--brand-orange)" }}>39</span>
        </div>
        <AccentBar width={160} className="mt-12" />
        <p className="slide-body-lg" style={{ marginTop: 48, maxWidth: 1000, color: "var(--brand-ink)" }}>
          Mothers in Sub-Saharan Africa face a lifetime risk of dying from
          pregnancy or childbirth.
        </p>
        <p className="slide-caption" style={{ marginTop: 24, color: "rgba(26,26,26,0.55)" }}>
          Source: WHO Maternal Mortality Report, 2023
        </p>
      </div>
    </SlideLayout>
  );
}
