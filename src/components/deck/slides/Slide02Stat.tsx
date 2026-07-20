import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Present an unexpected insight. Create instant curiosity. Why does this number exist?",
  headline: "99% of pregnancy happens outside hospitals.",
  emotionalGoal: "Intellectual intrigue. A realization of the silent gap.",
};

export default function Slide02({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
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
        {/* The number — massive, confident, clean */}
        <div
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 280,
            lineHeight: 0.88,
            letterSpacing: "-0.065em",
            color: "#FFF9F0",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          99
          <span style={{ color: "#F26A21", fontSize: 220 }}>%</span>
        </div>

        {/* The reveal */}
        <p
          style={{
            marginTop: 70,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 42,
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.01em",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          of pregnancy happens <span style={{ color: "#F26A21", fontWeight: 500 }}>outside hospitals</span>.
        </p>

        <p
          style={{
            marginTop: 40,
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Care happens at home. In the community. Between clinical visits.
        </p>
      </div>
    </SlideLayout>
  );
}
