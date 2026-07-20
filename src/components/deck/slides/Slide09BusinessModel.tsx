import { SlideLayout, AccentBar } from "../SlideLayout";
import { pricing } from "../content";

export const meta = {
  objective: "Show how TotoAfya makes money and scales sustainably across Africa with local KES value metrics.",
  headline: "Three diversified, high-margin revenue streams.",
  emotionalGoal: "Viability. Confidence. This is a highly scalable business, not just a charity.",
};

const CHANNELS = [
  {
    kicker: "B2G Government Licensing",
    title: "County Health Licenses",
    price: pricing.b2g.price,
    period: pricing.b2g.period,
    ltv: pricing.b2g.ltv,
    cac: pricing.b2g.cac,
    details: "Paid by County Departments of Health to digitize public clinic networks.",
    bullets: [
      "Unlimited nurse & caregiver logins",
      "County-wide data telemetry dashboard",
      "SMS broadcast integrations",
      "Local offline-first syncing hubs",
    ],
  },
  {
    kicker: "B2B Private Clinic SaaS",
    title: "Private & Faith-Based Clinics",
    price: pricing.b2b.price,
    period: pricing.b2b.period,
    ltv: pricing.b2b.ltv,
    cac: pricing.b2b.cac,
    details: "SaaS model for private and mission level 3/4 health facilities.",
    bullets: [
      "Custom facility branding & setup",
      "Automated clinical risk alerts",
      "Tauri desktop app wrapping",
      "Priority clinical support line",
    ],
  },
  {
    kicker: "NGO & Donor Partnerships",
    title: "Program Integration",
    price: pricing.ngo.price,
    period: pricing.ngo.period,
    ltv: pricing.ngo.ltv,
    cac: pricing.ngo.cac,
    details: "Partnerships with health NGOs to run specialized regional health campaigns.",
    bullets: [
      "Bilingual health campaign management",
      "Specialized developmental milestones tracking",
      "Anonymized compliance & impact reports",
      "Dedicated CHV monitoring dashboards",
    ],
  },
];

export default function Slide09BusinessModel({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Business Model</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1200 }}>
          Three diversified, high-margin revenue streams.
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* Pricing/Revenue Cards */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 110,
          display: "flex",
          gap: 48,
          zIndex: 10,
        }}
      >
        {CHANNELS.map((c, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "white",
              borderRadius: 24,
              padding: "40px 36px",
              boxShadow: "0 8px 40px -10px rgba(20,90,42,0.12)",
              border: "1px solid rgba(20,90,42,0.08)",
              display: "flex",
              flexDirection: "column",
              height: 520,
              position: "relative",
            }}
          >
            {/* Kicker */}
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F26A21",
                marginBottom: 12,
              }}
            >
              {c.kicker}
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 26,
                color: "#145A2A",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              {c.title}
            </div>

            {/* Price */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: c.price.length > 10 ? 32 : 48,
                  color: "#1F7A3A",
                  letterSpacing: "-0.02em",
                }}
              >
                {c.price}
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(26,26,26,0.5)",
                }}
              >
                {c.period}
              </span>
            </div>

            {/* Value Metrics Section */}
            <div
              style={{
                background: "rgba(31,122,58,0.04)",
                border: "1px solid rgba(31,122,58,0.12)",
                borderRadius: 12,
                padding: "12px 16px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(26,26,26,0.5)", textTransform: "uppercase", fontWeight: 600 }}>LTV</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: "#1F7A3A", marginTop: 2 }}>{c.ltv}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(26,26,26,0.5)", textTransform: "uppercase", fontWeight: 600 }}>CAC</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: "#F26A21", marginTop: 2 }}>{c.cac}</div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(26,26,26,0.06)", marginBottom: 20 }} />

            {/* Bullets */}
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {c.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 15,
                    color: "rgba(26,26,26,0.75)",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: "#1F7A3A", fontWeight: "bold" }}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
