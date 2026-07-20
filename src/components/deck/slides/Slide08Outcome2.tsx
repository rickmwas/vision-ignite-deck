import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Show outcome 2 — the mother's experience. Simple. Human.",
  headline: "She never missed another visit.",
  emotionalGoal: "Warmth. The system working for her, not against her.",
};

export default function Slide08({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Left — story */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          top: 210,
          width: 780,
          zIndex: 10,
        }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>
          The Mother · Naivasha
        </div>
        <h1
          style={{
            marginTop: 36,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 80,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#145A2A",
            maxWidth: 780,
          }}
        >
          "She never missed another visit."
        </h1>
        <p
          style={{
            marginTop: 36,
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: 24,
            color: "rgba(26,26,26,0.6)",
            lineHeight: 1.55,
            maxWidth: 680,
          }}
        >
          A reminder in her language. Sent the evening before. Her CHV already briefed. The clinic ready.
        </p>
      </div>

      {/* SMS / reminder mockup — right side */}
      <div
        style={{
          position: "absolute",
          right: 140,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: 480,
        }}
      >
        {/* Phone frame */}
        <div
          style={{
            background: "#1A1A1A",
            borderRadius: 40,
            padding: "28px 20px",
            boxShadow: "0 40px 100px -20px rgba(20,90,42,0.3), 0 0 0 2px rgba(255,255,255,0.08)",
          }}
        >
          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", paddingInline: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>9:41</span>
            <span style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>●●●</span>
          </div>

          {/* SMS bubbles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingInline: 8 }}>
            {/* Incoming */}
            <div style={{ alignSelf: "flex-start", maxWidth: "88%" }}>
              <div
                style={{
                  background: "#2A2A2A",
                  borderRadius: "18px 18px 18px 4px",
                  padding: "14px 18px",
                }}
              >
                <p style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.5 }}>
                  <span style={{ color: "#8BC34A", fontWeight: 600 }}>TotoAfya:</span> Mama Akinyi, ANC visit kesho 10am — Kilifi Sub-County Clinic. CHV Grace atakuwa nawe asubuhi. 💚
                </p>
              </div>
              <div style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 6, paddingLeft: 6 }}>
                TotoAfya · 8:12 PM
              </div>
            </div>

            {/* Reply */}
            <div style={{ alignSelf: "flex-end", maxWidth: "75%" }}>
              <div
                style={{
                  background: "#1F7A3A",
                  borderRadius: "18px 18px 4px 18px",
                  padding: "14px 18px",
                }}
              >
                <p style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 15, color: "white", margin: 0, lineHeight: 1.5 }}>
                  Sawa, nitakuwepo 👍
                </p>
              </div>
              <div style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 6, textAlign: "right", paddingRight: 6 }}>
                Akinyi · 8:17 PM · ✓✓
              </div>
            </div>

            {/* Confirmation */}
            <div style={{ alignSelf: "flex-start", maxWidth: "88%" }}>
              <div
                style={{
                  background: "#2A2A2A",
                  borderRadius: "18px 18px 18px 4px",
                  padding: "14px 18px",
                }}
              >
                <p style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.5 }}>
                  ✅ Ahsante! CHV Grace atawasiliana nawe asubuhi.
                </p>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div
            style={{
              marginTop: 20,
              marginInline: 8,
              background: "#2A2A2A",
              borderRadius: 24,
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.25)", flex: 1 }}>
              Message
            </span>
            <div style={{ width: 32, height: 32, borderRadius: 999, background: "#1F7A3A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
