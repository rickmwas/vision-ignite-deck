import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Show the scale of opportunity as a geographic expansion story — not a donut chart.",
  headline: "The opportunity is continental.",
  emotionalGoal: "Scale. Inevitability. This is bigger than Kenya.",
};

const STAGES = [
  {
    geo: "Kenya",
    detail: "47 counties · 15M women of reproductive age",
    value: "$85M",
    note: "5-year SOM",
    color: "#F26A21",
    size: 110,
  },
  {
    geo: "East Africa",
    detail: "Kenya · Uganda · Tanzania · Rwanda",
    value: "$1.2B",
    note: "SAM",
    color: "#8BC34A",
    size: 190,
  },
  {
    geo: "Africa",
    detail: "54 countries · 600M+ women",
    value: "$8.5B",
    note: "TAM · 2030",
    color: "#1F7A3A",
    size: 290,
  },
  {
    geo: "50M+ mothers",
    detail: "within coordinated care by 2035",
    value: "",
    note: "The vision",
    color: "#145A2A",
    size: 0,
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
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Market</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          The opportunity is <span style={{ color: "#F26A21" }}>continental</span>.
        </h1>
      </div>

      {/* Geographic expansion — horizontal arrow progression */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 130,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 0,
          zIndex: 10,
          paddingInline: 80,
        }}
      >
        {STAGES.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              position: "relative",
            }}
          >
            {/* Circle representing geographic scale */}
            {s.size > 0 && (
              <div
                style={{
                  width: s.size,
                  height: s.size,
                  borderRadius: "50%",
                  background: s.color,
                  opacity: 0.12 + i * 0.04,
                  border: `3px solid ${s.color}`,
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.value && (
                    <div
                      style={{
                        fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                        fontWeight: 800,
                        fontSize: i === 2 ? 38 : i === 1 ? 30 : 22,
                        color: s.color,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                  )}
                  <div
                    style={{
                      fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                      fontSize: 12,
                      color: "rgba(26,26,26,0.5)",
                      letterSpacing: "0.05em",
                      marginTop: 4,
                    }}
                  >
                    {s.note}
                  </div>
                </div>
              </div>
            )}

            {/* Final stage — vision */}
            {s.size === 0 && (
              <div
                style={{
                  width: 200,
                  marginBottom: 24,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingBottom: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: 42,
                    color: "#F26A21",
                    letterSpacing: "-0.04em",
                  }}
                >
                  50M+
                </div>
                <div
                  style={{
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                    fontSize: 13,
                    color: "rgba(26,26,26,0.45)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  mothers
                </div>
              </div>
            )}

            {/* Labels */}
            <div
              style={{
                fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 28,
                color: s.color,
                letterSpacing: "-0.02em",
                textAlign: "center",
              }}
            >
              {s.geo}
            </div>
            <div
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: 17,
                color: "rgba(26,26,26,0.5)",
                textAlign: "center",
                marginTop: 8,
                maxWidth: 260,
                lineHeight: 1.4,
              }}
            >
              {s.detail}
            </div>

            {/* Arrow between stages */}
            {i < STAGES.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  right: -18,
                  top: "40%",
                  fontSize: 28,
                  color: "rgba(26,26,26,0.2)",
                  fontWeight: 300,
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
