import { SlideLayout, AccentBar } from "../SlideLayout";
import { RefreshCw, Wifi } from "lucide-react";

export const meta = {
  objective: "Show our core competitive moats that prevent competitors from replicating our solution.",
  headline: "Defensibility: Our technical and operational moat.",
  emotionalGoal: "Uniqueness. Confidence. This is a highly defensible platform with strong network effects.",
};

const MOATS = [
  {
    title: "1. The Caregiver Loop Network Effect",
    subtitle: "Unified Patient Record Flow",
    description: "Unlike standalone text lines (e.g. SMS alert systems) or clinical software (e.g. clinic EMRs), we close the care loop. By linking the Mother (onboarding), the CHV (community checkups), and the Nurse (clinical delivery) to a single record, we create a network effect. The more stakeholders in the system, the more valuable it becomes to county health departments.",
    icon: RefreshCw,
  },
  {
    title: "2. Offline-First Sync Architecture",
    subtitle: "Ruggedized for Rural Kenya",
    description: "Rural clinics and community visits have highly unstable internet. Our custom database engine supports robust offline-first operations. Nurses and CHVs capture data locally on client devices (tablets/phones). The system automatically queues, encrypts, and handles multi-master data sync once a signal is detected, avoiding merge conflicts.",
    icon: Wifi,
  },
];

export default function Slide11Moat({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Competitive Advantage</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1200 }}>
          Why our solution is <span style={{ color: "#F26A21" }}>highly defensible</span>.
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* Moat Details */}
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
        {MOATS.map((m, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "white",
              borderRadius: 24,
              padding: "48px 44px",
              boxShadow: "0 8px 40px -10px rgba(20,90,42,0.08)",
              border: "1px solid rgba(20,90,42,0.06)",
              display: "flex",
              flexDirection: "column",
              height: 520,
              position: "relative",
            }}
          >
            {/* Large Icon in Top Corner */}
            <div
              style={{
                color: "#1F7A3A",
                marginBottom: 24,
              }}
            >
              <m.icon size={48} />
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 26,
                color: "#145A2A",
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              {m.title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#F26A21",
                marginBottom: 24,
              }}
            >
              {m.subtitle}
            </div>

            {/* Divider */}
            <div style={{ height: 2, width: 60, background: "#1F7A3A", marginBottom: 28 }} />

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                color: "rgba(26,26,26,0.7)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {m.description}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
