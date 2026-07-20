import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Show competitor landscape as connected vs. fragmented journeys. Do not use standard feature matrices.",
  headline: "Others solve moments. TotoAfya connects them.",
  emotionalGoal: "Clarity in under 3 seconds. TotoAfya is the inevitable layer of continuity.",
};

const STAGES = ["Home", "Field", "Clinic", "Hospital", "Postpartum"];

const COMPETITORS = [
  {
    name: "SMS Alert Tools",
    segment: [0, 1], // Covers Home & Field only
    color: "#E53E3E",
    notes: "Only send messages. No clinical feedback loops."
  },
  {
    name: "Hospital EMRs",
    segment: [2, 3], // Covers Clinic & Hospital only
    color: "#E53E3E",
    notes: "Locked inside facilities. No field or home records."
  },
  {
    name: "Maternity Insurance App",
    segment: [0], // Covers Home only
    color: "#E53E3E",
    notes: "Transactional onboarding. No clinical tracking."
  },
  {
    name: "TotoAfya",
    segment: [0, 1, 2, 3, 4], // Full coverage
    color: "#1F7A3A",
    notes: "End-to-end coordinated care registry.",
    isPrimary: true
  }
];

export default function Slide11({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 140, left: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Landscape</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          Others solve <span style={{ color: "rgba(26,26,26,0.4)" }}>moments</span>.{" "}
          <span style={{ color: "#F26A21" }}>TotoAfya connects them.</span>
        </h1>
      </div>

      {/* Timeline stages indicator */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 290,
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 300, // align with timeline start
          paddingRight: 400, // align with timeline end
          zIndex: 10,
        }}
      >
        {STAGES.map((st, i) => (
          <div
            key={i}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: "#145A2A",
              width: 100,
              textAlign: "center",
              opacity: 0.8,
            }}
          >
            {st}
          </div>
        ))}
      </div>

      {/* Competitor Tracks */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 350,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          zIndex: 5,
        }}
      >
        {COMPETITORS.map((comp, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              background: comp.isPrimary ? "rgba(31,122,58,0.06)" : "white",
              border: comp.isPrimary ? "2px solid #1F7A3A" : "1px solid rgba(26,26,26,0.06)",
              boxShadow: comp.isPrimary 
                ? "0 10px 30px -10px rgba(31,122,58,0.15)"
                : "0 4px 20px -8px rgba(0,0,0,0.03)",
              borderRadius: 16,
              padding: "16px 24px",
              height: 76,
            }}
          >
            {/* Competitor Name */}
            <div
              style={{
                width: 260,
                flexShrink: 0,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: comp.isPrimary ? "#1F7A3A" : "#1A1A1A",
              }}
            >
              {comp.name}
            </div>

            {/* Journey track visualizer */}
            <div
              style={{
                flex: 1,
                position: "relative",
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingInline: 50,
              }}
            >
              {/* Timeline track baseline */}
              <div
                style={{
                  position: "absolute",
                  left: 50,
                  right: 50,
                  height: 3,
                  background: "rgba(26,26,26,0.06)",
                  zIndex: 1,
                }}
              />

              {/* Segment representation */}
              <div
                style={{
                  position: "absolute",
                  left: `${50 + (comp.segment[0] / (STAGES.length - 1)) * (100 - 100 / STAGES.length)}%`,
                  width: `${((comp.segment[comp.segment.length - 1] - comp.segment[0]) / (STAGES.length - 1)) * (100 - 100 / STAGES.length)}%`,
                  height: 6,
                  background: comp.color,
                  borderRadius: 3,
                  zIndex: 2,
                  boxShadow: comp.isPrimary ? "0 0 12px rgba(31,122,58,0.4)" : "none",
                }}
              />

              {/* Dots representing touchpoints */}
              {STAGES.map((_, dotIdx) => {
                const isCovered = comp.segment.includes(dotIdx);
                return (
                  <div
                    key={dotIdx}
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: isCovered ? comp.color : "#E2E8F0",
                      border: `2px solid ${isCovered ? "white" : "#CBD5E1"}`,
                      zIndex: 3,
                      boxShadow: isCovered ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                    }}
                  />
                );
              })}
            </div>

            {/* Competitive Notes */}
            <div
              style={{
                width: 360,
                flexShrink: 0,
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: comp.isPrimary ? "#1F7A3A" : "rgba(26,26,26,0.55)",
                fontWeight: comp.isPrimary ? 600 : 400,
                borderLeft: "1px solid rgba(26,26,26,0.08)",
                paddingLeft: 20,
              }}
            >
              {comp.notes}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
