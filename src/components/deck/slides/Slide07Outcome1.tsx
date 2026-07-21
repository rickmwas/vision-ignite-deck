import { SlideLayout } from "../SlideLayout";
import img from "@/assets/deck/07-mother-baby.jpg";

export const meta = {
  objective: "Lead with the outcome story. The UI is evidence — not the hero.",
  headline: "She knew before it became an emergency.",
  emotionalGoal: "Trust. Relief. The system working invisibly.",
};

export default function Slide07({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
      {/* Background image */}
      <img
        src={img}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(14,26,18,0.96) 0%, rgba(14,26,18,0.82) 42%, rgba(14,26,18,0.25) 100%)",
        }}
      />

      {/* Left — story */}
      <div
        className="slide-enter"
        style={{ position: "absolute", left: 120, top: 240, width: 820, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>
          The Nurse · Naivasha Hospital
        </div>
        <h1
          style={{
            marginTop: 36,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 76,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "white",
            maxWidth: 800,
          }}
        >
          "She knew before it became an emergency."
        </h1>
      </div>

      {/* UI Mockup card */}
      <div
        style={{
          position: "absolute",
          left: 120,
          bottom: 140,
          zIndex: 10,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 20,
          padding: "28px 36px",
          width: 760,
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Alert notification mockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#F26A21",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Bell icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif", fontWeight: 600, fontSize: 15, color: "#F26A21", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              TotoAfya Alert
            </div>
            <div style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
              2 minutes ago
            </div>
          </div>
        </div>
        <p style={{ fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif", fontWeight: 500, fontSize: 20, color: "rgba(255,255,255,0.9)", lineHeight: 1.5, margin: 0 }}>
          Mama Akinyi's BP at last CHV visit: <span style={{ color: "#F26A21", fontWeight: 700 }}>148/92</span>. Rising trend across 3 visits. ANC due in 3 days.
        </p>
        <div style={{ marginTop: 18, display: "flex", gap: 14 }}>
          <div style={{ padding: "8px 20px", borderRadius: 999, background: "#1F7A3A", fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif", fontSize: 14, fontWeight: 600, color: "white" }}>
            View full record
          </div>
          <div style={{ padding: "8px 20px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)", fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
            Contact CHV
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
