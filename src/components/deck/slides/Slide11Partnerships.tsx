import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Present our multi-stakeholder partnership strategy to demonstrate scalable distribution and integration.",
  headline: "Partnerships: Collaborating for systemic scale.",
  emotionalGoal: "Credibility. Systemic integration. Showing we leverage existing trusted infrastructure.",
};

const PARTNERS = [
  {
    icon: "🏛️",
    title: "County Health Departments & MoH",
    role: "Integration Rights & Facility Access",
    details: "Provides formal authority to operate inside public clinics, integration rights with KenyaEMR/DHIS2, and endorsement of clinical workflows to build trust with nurses.",
  },
  {
    icon: "🤝",
    title: "Community Health Units (CHVs)",
    role: "On-the-ground Household Enrollment",
    details: "Leveraging trained Community Health Volunteers under county jurisdiction to handle grassroots registration, home visits, and localized health education.",
  },
  {
    icon: "📱",
    title: "Telecom Partners (Safaricom & Airtel)",
    role: "Zero-Rated PWA & Infrastructure",
    details: "Pending discussions to whitelist PWA domain (free data access for mothers/CHVs) and establish discounted bulk SMS bundles for ANC & immunization reminders.",
  },
  {
    icon: "🏥",
    title: "Insurance Partners (e.g., Britam)",
    role: "Micro-Insurance & Commercial Channels",
    details: "Aligning digital logs with maternal coverage programs (e.g., Lea Mama) to reduce risk claims by tracking antenatal visit compliance.",
  },
];

export default function Slide11Partnerships({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Partnership Strategy</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1200 }}>
          Four key partners driving our <span style={{ color: "#F26A21" }}>growth and delivery</span>.
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* 2x2 Grid */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 110,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "36px 48px",
          zIndex: 10,
        }}
      >
        {PARTNERS.map((p, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: 20,
              padding: "32px 36px",
              boxShadow: "0 8px 30px -12px rgba(20,90,42,0.06)",
              border: "1px solid rgba(20,90,42,0.05)",
              display: "flex",
              gap: 24,
              alignItems: "flex-start",
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: 36,
                background: "rgba(31,122,58,0.06)",
                padding: 12,
                borderRadius: 16,
                lineHeight: 1.2,
                flexShrink: 0,
              }}
            >
              {p.icon}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#145A2A",
                  marginBottom: 4,
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#F26A21",
                  marginBottom: 12,
                }}
              >
                Role: {p.role}
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: "rgba(26,26,26,0.65)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {p.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
