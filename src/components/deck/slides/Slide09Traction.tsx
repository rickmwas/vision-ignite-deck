import { SlideLayout, AccentBar } from "../SlideLayout";
import { traction } from "../content";

export const meta = {
  objective: "Present actual pilot results clearly alongside 12-month projections to show immediate scaling targets.",
  headline: "Traction: Validated pilot results transitioning to scale.",
  emotionalGoal: "Credibility. Momentum. Trust that we have real field data.",
};

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ flex: 1, borderLeft: "3px solid #1F7A3A", paddingLeft: 16 }}>
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontSize: 48,
          color: "#F26A21",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 6,
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "rgba(26,26,26,0.6)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Slide09({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 130, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Traction</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          Real results today. <span style={{ color: "#F26A21" }}>Scalable targets</span> tomorrow.
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
        {/* Left Column - Actual Results */}
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: 24,
            padding: "36px 40px",
            boxShadow: "0 8px 40px -10px rgba(20,90,42,0.12)",
            border: "2px solid #1F7A3A",
            display: "flex",
            flexDirection: "column",
            height: 520,
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(31,122,58,0.1)",
              border: "1px solid rgba(31,122,58,0.3)",
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: "#1F7A3A",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {traction.actuals.label}
          </div>

          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              color: "#145A2A",
              marginBottom: 8,
              marginTop: 12,
            }}
          >
            Clinical Validation Pilot
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "rgba(26,26,26,0.6)",
              lineHeight: 1.5,
              margin: 0,
              marginBottom: 40,
            }}
          >
            Testing core offline syncing, workflow speed, and caregiver retention in clinics with unstable connectivity.
          </p>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 24px", flex: 1 }}>
            <MiniStat value={traction.actuals.mothers} label="Mothers registered" />
            <MiniStat value={traction.actuals.chvs} label="CHVs onboarded" />
            <MiniStat value={traction.actuals.facilities} label="Live facilities" />
            <MiniStat value={traction.actuals.counties} label="Active counties" />
          </div>

          {/* Footnote */}
          <div
            style={{
              marginTop: 24,
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "rgba(26,26,26,0.4)",
              fontStyle: "italic",
            }}
          >
            * {traction.actuals.footnote}
          </div>
        </div>

        {/* Right Column - 12-Month Projections */}
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: 24,
            padding: "36px 40px",
            boxShadow: "0 8px 40px -10px rgba(20,90,42,0.12)",
            border: "1px solid rgba(20,90,42,0.08)",
            display: "flex",
            flexDirection: "column",
            height: 520,
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(242,106,33,0.1)",
              border: "1px solid rgba(242,106,33,0.3)",
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: "#F26A21",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {traction.projections.label}
          </div>

          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              color: "#145A2A",
              marginBottom: 8,
              marginTop: 12,
            }}
          >
            12-Month Scaled Expansion
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "rgba(26,26,26,0.6)",
              lineHeight: 1.5,
              margin: 0,
              marginBottom: 40,
            }}
          >
            Scaling across county public clinic clusters using B2G licenses, targeting high-volume maternal care corridors.
          </p>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 24px", flex: 1 }}>
            <MiniStat value={traction.projections.mothers} label="Target mothers" />
            <MiniStat value={traction.projections.chvs} label="CHV scaling" />
            <MiniStat value={traction.projections.facilities} label="Facility integrations" />
            <MiniStat value={traction.projections.counties} label="County expansions" />
          </div>

          {/* Footnote */}
          <div
            style={{
              marginTop: 24,
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "rgba(26,26,26,0.4)",
              fontStyle: "italic",
            }}
          >
            * {traction.projections.footnote}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
