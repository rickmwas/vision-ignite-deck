import { SlideLayout, AccentBar } from "../SlideLayout";
import img from "@/assets/deck/07-mother-baby.jpg";

export const meta = {
  objective: "Show outcome, not feature.",
  headline: "A mother never misses critical care.",
  emotionalGoal: "Warmth. Trust.",
};

export default function Slide07({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      <div style={{ position: "absolute", inset: 0, display: "flex" }}>
        <div
          className="slide-enter"
          style={{
            width: "48%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 120px 0 140px",
          }}
        >
          <div className="slide-kicker" style={{ color: "var(--brand-orange)" }}>Outcome · Not Feature</div>
          <h1
            className="slide-title-lg"
            style={{ marginTop: 40, color: "var(--brand-green-deep)", maxWidth: 720 }}
          >
            A mother never<br />
            misses critical care.
          </h1>
          <AccentBar width={110} className="mt-10" />
          <p className="slide-body-lg" style={{ marginTop: 40, maxWidth: 640, color: "rgba(26,26,26,0.75)" }}>
            SMS in her language. Reminders that reach her.<br />
            A CHV who already knows the plan.
          </p>
        </div>
        <div style={{ width: "52%", position: "relative" }}>
          <img
            src={img}
            alt="A Kenyan mother smiling with her healthy newborn"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
