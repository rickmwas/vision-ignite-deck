import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Present the cost structure of building, operating, and scaling the TotoAfya platform, highlighting capital efficiency.",
  headline: "Cost Structure: Lean, highly-scalable financials.",
  emotionalGoal: "Viability. Efficiency. Confidence that the company manages capital prudently.",
};

const FIXED_COSTS = [
  {
    title: "Core Software & Product R&D",
    detail: "Maintaining the npm monorepo, web client, Tauri wrappers, and offline synchronization protocols.",
  },
  {
    title: "Cloud Database & Telemetry Infrastructure",
    detail: "Supabase DB, Sentry error tracking, automated daily backup storage, and clinical metadata pipelines.",
  },
  {
    title: "Clinical & Regulatory Compliance",
    detail: "Legal counsel for healthcare records compliance and local data protection audits (ODPC registration).",
  },
];

const VARIABLE_COSTS = [
  {
    title: "Clinical Tablet Provisioning",
    detail: "Providing ruggedized, lock-down Android tablets loaded with the TotoAfya client app directly to facility nurses.",
  },
  {
    title: "Local SMS Reminders Gateway",
    detail: "Transactional cost of sending local automated SMS vaccine and clinic reminders to mothers (escalating with registration volume).",
  },
  {
    title: "CHV Training Workshops & Incentives",
    detail: "Local community health training sessions, learning booklets, and performance bonuses tied to verified registration compliance.",
  },
];

export default function Slide11CostStructure({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Cost Structure</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1200 }}>
          High operational leverage with <span style={{ color: "#F26A21" }}>predictable scaling cost</span>.
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* Columns */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 110,
          display: "flex",
          gap: 60,
          zIndex: 10,
        }}
      >
        {/* Left Column - Fixed Costs */}
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: 24,
            padding: "40px",
            boxShadow: "0 8px 30px -12px rgba(20,90,42,0.06)",
            border: "1px solid rgba(20,90,42,0.05)",
            display: "flex",
            flexDirection: "column",
            height: 520,
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "#145A2A",
              marginBottom: 8,
            }}
          >
            Fixed Costs
          </div>
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1F7A3A",
              marginBottom: 28,
            }}
          >
            Product baseline maintenance
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
            {FIXED_COSTS.map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ color: "#1F7A3A", fontSize: 20, fontWeight: "bold", marginTop: -2 }}>•</span>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#1a1a1a", marginBottom: 4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(26,26,26,0.6)", lineHeight: 1.4 }}>
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Variable Costs */}
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: 24,
            padding: "40px",
            boxShadow: "0 8px 30px -12px rgba(20,90,42,0.06)",
            border: "1px solid rgba(20,90,42,0.05)",
            display: "flex",
            flexDirection: "column",
            height: 520,
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "#145A2A",
              marginBottom: 8,
            }}
          >
            Variable Scaling Costs
          </div>
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#F26A21",
              marginBottom: 28,
            }}
          >
            Regional deployment expansion
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
            {VARIABLE_COSTS.map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ color: "#F26A21", fontSize: 20, fontWeight: "bold", marginTop: -2 }}>•</span>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#1a1a1a", marginBottom: 4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(26,26,26,0.6)", lineHeight: 1.4 }}>
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
