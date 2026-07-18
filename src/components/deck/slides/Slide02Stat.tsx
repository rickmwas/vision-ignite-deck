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
        <div className="slide-kicker" style={{ color: "#1F7A3A" }}>
          Sub-Saharan Africa · Lifetime Risk
        </div>
        <div
          className="slide-title-xl"
          style={{
            marginTop: 28,
            fontSize: 220,
            lineHeight: 0.9,
            fontWeight: 800,
            letterSpacing: "-0.06em",
            color: "#1F7A3A",
            display: "flex",
            alignItems: "baseline",
            gap: 24,
          }}
        >
          <span>1</span>
          <span style={{ fontSize: 130, color: "#1A1A1A", opacity: 0.35 }}>in</span>
          <span style={{ color: "#F26A21" }}>39</span>
        </div>
        <AccentBar width={120} className="mt-10" />
        <p className="slide-body-lg" style={{ marginTop: 48, maxWidth: 1000, color: "#1A1A1A" }}>
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
