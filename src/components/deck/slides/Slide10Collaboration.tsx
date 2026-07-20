import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Answer the investor's silent question: why can't incumbents simply copy this?",
  headline: "The Collaboration Layer",
  emotionalGoal: "Intellectual breakthrough. Conviction of defensibility.",
};

export default function Slide10Collaboration({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Silent Question</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          Why can't existing solutions build this?
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* Two-column analysis */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 160,
          display: "flex",
          gap: 80,
          zIndex: 10,
        }}
      >
        {/* Left column: Incumbents */}
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: 24,
            padding: "40px",
            boxShadow: "0 8px 30px -10px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.4)",
              marginBottom: 24,
            }}
          >
            Standalone applications
          </div>
          <p
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 30,
              color: "#1A1A1A",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Incumbents build moments.
          </p>
          <p
            style={{
              marginTop: 18,
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              fontSize: 18,
              color: "rgba(26,26,26,0.6)",
              lineHeight: 1.5,
            }}
          >
            EMRs stay inside the clinic walls. Pregnancy apps focus only on maternal education. They remain isolated silos.
          </p>
        </div>

        {/* Right column: TotoAfya */}
        <div
          style={{
            flex: 1,
            background: "#0E1A12",
            color: "white",
            borderRadius: 24,
            padding: "40px",
            boxShadow: "0 15px 40px -12px rgba(20,90,42,0.25)",
            border: "1px solid #1F7A3A",
          }}
        >
          <div
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8BC34A",
              marginBottom: 24,
            }}
          >
            TotoAfya's position
          </div>
          <p
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 30,
              color: "white",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            We are the collaboration layer.
          </p>
          <p
            style={{
              marginTop: 18,
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
            }}
          >
            We connect the tools already in use. Offline-first, secure, and multi-tenant—acting as the shared backbone of maternal care.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
