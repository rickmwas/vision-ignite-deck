import { SlideLayout } from "../SlideLayout";
import img from "@/assets/deck/01-mother-alone.jpg";

export const meta = {
  objective: "Open with silence and a single human moment.",
  headline: "Somewhere in Kenya, a mother just missed her appointment.",
  emotionalGoal: "Silence, presence, human focus.",
};

export default function Slide01({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
      <img
        src={img}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(14,26,18,0.85) 0%, rgba(14,26,18,0.55) 45%, rgba(14,26,18,0.15) 100%)",
        }}
      />
      <div className="slide-enter" style={{ position: "absolute", left: 120, top: 340, width: 1000, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>A True Story · Kilifi County</div>
        <h1 className="slide-title-lg" style={{ marginTop: 40, color: "white", maxWidth: 960 }}>
          Somewhere in Kenya, a mother just missed her appointment.
        </h1>
        <p className="slide-body-lg" style={{ marginTop: 32, color: "rgba(255,255,255,0.82)", maxWidth: 780 }}>
          She doesn't know it yet. Neither does her nurse.
        </p>
      </div>
    </SlideLayout>
  );
}
