import { SlideLayout, AccentBar } from "../SlideLayout";
import img from "@/assets/deck/05-solution.jpg";

export const meta = {
  objective: "Reveal the brand. One promise.",
  headline: "TotoAfya. One continuous care journey.",
  emotionalGoal: "Relief. Curiosity.",
};

export default function Slide05({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
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
            "linear-gradient(90deg, rgba(20,90,42,0.9) 0%, rgba(20,90,42,0.55) 50%, rgba(20,90,42,0.1) 100%)",
        }}
      />
      <div
        className="slide-enter"
        style={{ position: "absolute", left: 120, top: 380, width: 1100, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "rgba(255,255,255,0.85)" }}>Introducing</div>
        <h1
          className="slide-title-xl"
          style={{ marginTop: 24, color: "white", fontSize: 140, lineHeight: 0.95 }}
        >
          TotoAfya.
        </h1>
        <AccentBar width={140} className="mt-12" />
        <p
          className="slide-subtitle"
          style={{ marginTop: 40, color: "rgba(255,255,255,0.95)", maxWidth: 880 }}
        >
          One continuous care journey — from home to clinic and back.
        </p>
      </div>
    </SlideLayout>
  );
}
