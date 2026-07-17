import { SlideLayout } from "../SlideLayout";
import img from "@/assets/deck/04-triptych.jpg";

export const meta = {
  objective: "Show the disconnect with imagery, not words.",
  headline: "Three people. One mother. Zero shared record.",
  emotionalGoal: "Feel the gap.",
};

export default function Slide04({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
      <img
        src={img}
        alt="Mother, CHV, nurse — disconnected"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14,26,18,0.55) 0%, rgba(14,26,18,0.25) 45%, rgba(14,26,18,0.85) 100%)",
        }}
      />
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 180,
          zIndex: 10,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 80,
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <div className="slide-kicker" style={{ color: "#F26A21" }}>The Reality</div>
          <h1 className="slide-title" style={{ marginTop: 32, color: "white" }}>
            Three people. One mother.<br />
            <span style={{ color: "#F26A21" }}>Zero shared record.</span>
          </h1>
        </div>
        <div
          className="slide-body"
          style={{
            display: "flex",
            gap: 48,
            color: "rgba(255,255,255,0.82)",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontSize: 22,
          }}
        >
          <span>Mother</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>CHV</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Nurse</span>
        </div>
      </div>
    </SlideLayout>
  );
}
