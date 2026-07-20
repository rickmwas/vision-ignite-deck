import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Show how we will acquire our first 1,000 users using a dual high-trust onboarding model.",
  headline: "Go-to-Market: Acquiring our first 1,000 caregivers.",
  emotionalGoal: "Feasibility. Clear execution plan. This is a realistic roadmap.",
};

const GTM_STEPS = [
  {
    step: "01",
    phase: "CHV Home Outreach",
    target: "500 Mothers",
    kicker: "Grassroots trust",
    details: "Each of our 10 community health volunteers (CHVs) maps their assigned villages and registers 50 mothers door-to-door using our installable PWA.",
  },
  {
    step: "02",
    phase: "Clinic Point-of-Care",
    target: "400 Mothers",
    kicker: "In-facility intake",
    details: "Nurses onboard caregivers directly at the clinic gate during routine antenatal care (ANC) visits and baby immunization clinic days.",
  },
  {
    step: "03",
    phase: "NGO & Partner Referral",
    target: "100 Mothers",
    kicker: "Coordinated campaigns",
    details: "Leverage existing maternal health networks and partners like Britam (Lea Mama policyholders) to register mothers directly.",
  },
];

export default function Slide09GTM({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Go-to-Market Strategy</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1200 }}>
          Acquiring our first <span style={{ color: "#F26A21" }}>1,000 caregivers</span>.
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* GTM Steps Grid */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 120,
          display: "flex",
          gap: 40,
          zIndex: 10,
        }}
      >
        {GTM_STEPS.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "white",
              borderRadius: 24,
              padding: "40px 36px",
              boxShadow: "0 8px 40px -10px rgba(20,90,42,0.08)",
              border: "1px solid rgba(20,90,42,0.06)",
              display: "flex",
              flexDirection: "column",
              height: 480,
              position: "relative",
            }}
          >
            {/* Step Number in Background */}
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 36,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: 80,
                color: "rgba(31,122,58,0.05)",
                lineHeight: 1,
              }}
            >
              {s.step}
            </div>

            {/* Kicker */}
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F26A21",
                marginBottom: 16,
              }}
            >
              {s.kicker}
            </div>

            {/* Phase Title */}
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 28,
                color: "#145A2A",
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              {s.phase}
            </div>

            {/* Target Metric */}
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#1F7A3A",
                marginBottom: 24,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#8BC34A" }} />
              Target: {s.target}
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
                color: "rgba(26,26,26,0.65)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {s.details}
            </p>

            {/* Arrow connector between cards (on desktop) */}
            {i < GTM_STEPS.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  right: -28,
                  top: "45%",
                  fontSize: 32,
                  color: "rgba(20,90,42,0.2)",
                  fontWeight: 300,
                  zIndex: 20,
                }}
              >
                ➔
              </div>
            )}
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
