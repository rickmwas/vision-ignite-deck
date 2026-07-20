import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Build founder credibility. Show deep understanding of maternal workflows through real lessons.",
  headline: "What we learned.",
  emotionalGoal: "Credibility. Alignment. Founder authority.",
};

const OBSERVATIONS = [
  {
    thought: "We thought reminders were enough.",
    learned: "We learned continuity matters more."
  },
  {
    thought: "We thought digitization solved the problem.",
    learned: "We learned coordination is the real challenge."
  },
  {
    thought: "We thought software should replace workflows.",
    learned: "We learned software should strengthen them."
  }
];

export default function Slide09Observations({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Lessons</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          What we learned.
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* Observations List */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 140,
          display: "flex",
          flexDirection: "column",
          gap: 40,
          zIndex: 10,
        }}
      >
        {OBSERVATIONS.map((obs, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 24,
              borderLeft: "4px solid #1F7A3A",
              paddingLeft: 24,
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: 24,
                  color: "rgba(26,26,26,0.45)",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(242,106,33,0.3)"
                }}
              >
                {obs.thought}
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#145A2A",
                  lineHeight: 1.25,
                }}
              >
                {obs.learned}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
