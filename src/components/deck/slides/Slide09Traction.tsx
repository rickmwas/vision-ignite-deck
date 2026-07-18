import { SlideLayout, AccentBar } from "../SlideLayout";
import { traction } from "../content";

export const meta = {
  objective: "Show momentum with three numbers.",
  headline: "Traction",
  emotionalGoal: "Momentum. Real proof.",
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ flex: 1, borderTop: "3px solid #1F7A3A", paddingTop: 28 }}>
      <div
        className="slide-title-lg"
        style={{ color: "#F26A21", fontSize: 108, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 18,
          fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#145A2A",
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
      <div className="slide-enter" style={{ position: "absolute", top: 200, left: 120, width: 1200, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Where We Are Today</div>
        <h1 className="slide-title-lg" style={{ marginTop: 32, color: "#145A2A" }}>
          Real people. Real care. Real proof.
        </h1>
        <AccentBar width={110} className="mt-10" />
      </div>
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 200,
          display: "flex",
          gap: 80,
          zIndex: 10,
        }}
      >
        <Stat value={traction.mothers} label="Mothers enrolled" />
        <Stat value={traction.chvs} label="CHVs onboarded" />
        <Stat value={traction.facilities} label="Facilities live" />
      </div>
    </SlideLayout>
  );
}
