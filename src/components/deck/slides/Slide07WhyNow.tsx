import { SlideLayout } from "../SlideLayout";
import img from "@/assets/deck/08-offline-chv.jpg";

export const meta = {
  objective: "Show outcome 3 — the CHV. Complete the product story arc.",
  headline: "Care continued even without internet.",
  emotionalGoal: "Confidence. The system is complete. Every person in the chain is connected.",
};

export default function Slide07WhyNow({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
      {/* Background image */}
      <img
        src={img}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(270deg, rgba(14,26,18,0.95) 0%, rgba(14,26,18,0.78) 42%, rgba(14,26,18,0.2) 100%)",
        }}
      />

      {/* Right — story */}
      <div
        className="slide-enter"
        style={{ position: "absolute", right: 120, top: 240, width: 820, zIndex: 10, textAlign: "right" }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>
          The CHV · Naivasha · No signal
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
            marginLeft: "auto",
          }}
        >
          "Care continued even without internet."
        </h1>
      </div>

      {/* UI mockup — bottom right */}
      <div
        style={{
          position: "absolute",
          right: 120,
          bottom: 140,
          zIndex: 10,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 20,
          padding: "28px 36px",
          width: 780,
          backdropFilter: "blur(8px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif", fontWeight: 600, fontSize: 15, color: "#8BC34A", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              CHV Dashboard · Offline mode
            </div>
            <div style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
              Last sync 4h ago · 3 visits recorded
            </div>
          </div>
          {/* Offline pill */}
          <div style={{ padding: "6px 16px", borderRadius: 999, background: "rgba(139,195,74,0.18)", border: "1px solid rgba(139,195,74,0.4)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 13, color: "#8BC34A", fontWeight: 600 }}>
            ● Offline · syncing when connected
          </div>
        </div>

        {/* Visit list */}
        {[
          { name: "Mama Akinyi", week: "32 wks", status: "Visited", flag: false },
          { name: "Mama Ochieng", week: "28 wks", status: "Visited", flag: false },
          { name: "Mama Wanjiku", week: "36 wks", status: "BP elevated", flag: true },
        ].map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 0",
              borderTop: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}
          >
            <div>
              <div style={{ fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif", fontWeight: 600, fontSize: 18, color: "rgba(255,255,255,0.9)" }}>
                {r.name}
              </div>
              <div style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>
                {r.week}
              </div>
            </div>
            <div
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                background: r.flag ? "rgba(242,106,33,0.18)" : "rgba(31,122,58,0.2)",
                border: `1px solid ${r.flag ? "rgba(242,106,33,0.4)" : "rgba(31,122,58,0.4)"}`,
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: 14,
                color: r.flag ? "#F26A21" : "#8BC34A",
                fontWeight: 600,
              }}
            >
              {r.status}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
