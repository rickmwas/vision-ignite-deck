import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "One number. No context yet. Let it land in silence.",
  headline: "280,000+",
  emotionalGoal: "Weight. Shock. The audience must wonder why.",
};

export default function Slide02({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 60,
        }}
      >
        {/* The number — massive, nothing else above it */}
        <div
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 260,
            lineHeight: 0.88,
            letterSpacing: "-0.065em",
            color: "#1F7A3A",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          280,000
          <span style={{ color: "#F26A21", fontSize: 200 }}>+</span>
        </div>

        {/* The reveal — small, below, after the pause */}
        <p
          style={{
            marginTop: 80,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 38,
            color: "rgba(26,26,26,0.72)",
            letterSpacing: "0.01em",
            textAlign: "center",
            maxWidth: 860,
            lineHeight: 1.4,
          }}
        >
          mothers die every year from pregnancy-related causes.
        </p>

        <p
          style={{
            marginTop: 36,
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: 17,
            color: "rgba(26,26,26,0.35)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Source: WHO Maternal Mortality Report, 2023
        </p>
      </div>
    </SlideLayout>
  );
}
