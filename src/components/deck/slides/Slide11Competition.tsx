import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Show competitors not as a table, but as a care journey map — revealing the gap TotoAfya fills.",
  headline: "Others solve pieces. TotoAfya connects them.",
  emotionalGoal: "Clarity in 5 seconds. TotoAfya is the only one that goes end-to-end.",
};

const STAGES = [
  { label: "Mother", sub: "at home", competitors: ["Pregnancy apps", "Lea Mama"] },
  { label: "CHV", sub: "in the field", competitors: ["Lea Mama", "USSD tools"] },
  { label: "Clinic", sub: "referral care", competitors: ["OpenMRS", "Standalone EMRs"] },
  { label: "Hospital", sub: "specialist care", competitors: ["DHIS2", "KenyaEMR"] },
  { label: "Postpartum", sub: "follow-up care", competitors: [] },
];

export default function Slide11({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 130, left: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Landscape</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1300 }}>
          Others solve <span style={{ color: "rgba(26,26,26,0.45)" }}>pieces</span>.{" "}
          <span style={{ color: "#F26A21" }}>TotoAfya connects them.</span>
        </h1>
      </div>

      {/* Journey map */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 370,
          bottom: 120,
          display: "flex",
          alignItems: "flex-start",
          gap: 0,
          zIndex: 10,
        }}
      >
        {STAGES.map((stage, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Stage node */}
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "white",
                border: "3px solid #1F7A3A",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px -4px rgba(20,90,42,0.15)",
                zIndex: 2,
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#145A2A",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {stage.label}
              </span>
            </div>

            {/* Sub label */}
            <div
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: 14,
                color: "rgba(26,26,26,0.5)",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {stage.sub}
            </div>

            {/* Competitor badges */}
            <div
              style={{
                marginTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "center",
              }}
            >
              {stage.competitors.length > 0 ? (
                stage.competitors.map((c, j) => (
                  <div
                    key={j}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 999,
                      background: "rgba(26,26,26,0.07)",
                      border: "1px solid rgba(26,26,26,0.12)",
                      fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                      fontSize: 13,
                      color: "rgba(26,26,26,0.55)",
                      fontWeight: 500,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {c}
                  </div>
                ))
              ) : (
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "rgba(229,62,62,0.08)",
                    border: "1px solid rgba(229,62,62,0.2)",
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                    fontSize: 13,
                    color: "rgba(229,62,62,0.7)",
                    fontWeight: 500,
                  }}
                >
                  No coverage
                </div>
              )}
            </div>

            {/* Connector to next stage */}
            {i < STAGES.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: 50,
                  right: -1,
                  left: "50%",
                  height: 3,
                  background: "rgba(26,26,26,0.1)",
                  zIndex: 1,
                  width: "100%",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* TotoAfya green line — bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 90,
          left: 80,
          right: 80,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            flex: 1,
            height: 6,
            borderRadius: 3,
            background: "linear-gradient(90deg, #F26A21 0%, #1F7A3A 50%, #8BC34A 100%)",
          }}
        />
        <div
          style={{
            padding: "8px 28px",
            borderRadius: 999,
            background: "#1F7A3A",
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "white",
            whiteSpace: "nowrap",
            letterSpacing: "-0.01em",
          }}
        >
          TotoAfya — end-to-end
        </div>
        <div
          style={{
            flex: 1,
            height: 6,
            borderRadius: 3,
            background: "linear-gradient(90deg, #8BC34A 0%, #1F7A3A 100%)",
          }}
        />
      </div>
    </SlideLayout>
  );
}
