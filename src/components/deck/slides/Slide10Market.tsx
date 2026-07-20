import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Show the scale of opportunity as a geographic expansion story — not a donut chart.",
  headline: "Kenya → East Africa → Africa.",
  emotionalGoal: "Scale. Inevitability. This scales.",
};

const STAGES = [
  {
    geo: "Kenya",
    detail: "47 counties · 15M women",
    value: "$85M",
    note: "SOM",
    color: "#F26A21",
  },
  {
    geo: "East Africa",
    detail: "4 countries · 100M women",
    value: "$1.2B",
    note: "SAM",
    color: "#8BC34A",
  },
  {
    geo: "Africa",
    detail: "54 countries · 600M+ women",
    value: "$8.5B",
    note: "TAM",
    color: "#1F7A3A",
  },
];

export default function Slide10({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 140, left: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Market</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          The path to <span style={{ color: "#F26A21" }}>continental scale</span>.
        </h1>
      </div>

      {/* Horizontal geographic scaling */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 180,
          top: 310,
          display: "flex",
          gap: 60,
          zIndex: 10,
        }}
      >
        {STAGES.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "white",
              borderRadius: 24,
              padding: "48px 40px",
              boxShadow: "0 10px 40px -15px rgba(20,90,42,0.12)",
              border: `1px solid rgba(20,90,42,0.08)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* Index number indicator on top-right */}
            <div
              style={{
                position: "absolute",
                top: 36,
                right: 36,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: 20,
                color: s.color,
                opacity: 0.8,
              }}
            >
              0{i + 1}
            </div>

            <div>
              {/* Geographic Name */}
              <div
                style={{
                  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: 48,
                  color: "#145A2A",
                  letterSpacing: "-0.03em",
                }}
              >
                {s.geo}
              </div>

              {/* Demographic Details */}
              <div
                style={{
                  marginTop: 10,
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 18,
                  color: "rgba(26,26,26,0.5)",
                }}
              >
                {s.detail}
              </div>
            </div>

            {/* Sizing metric */}
            <div style={{ marginTop: 40 }}>
              <div
                style={{
                  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: 64,
                  color: s.color,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.4)",
                }}
              >
                {s.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
