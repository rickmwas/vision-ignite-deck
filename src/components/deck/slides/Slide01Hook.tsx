import { SlideLayout } from "../SlideLayout";
import img from "@/assets/deck/01-mother-alone.jpg";

export const meta = {
  objective: "Open with silence. One image. Create the question: what happened?",
  headline: "She did everything right.",
  emotionalGoal: "Silence. Presence. Curiosity. The audience must lean in.",
};

export default function Slide01({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
      {/* Full-bleed photo */}
      <img
        src={img}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
        }}
      />

      {/* Subtle gradient — bottom only, so the image breathes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14,26,18,0.08) 0%, rgba(14,26,18,0.18) 55%, rgba(14,26,18,0.78) 100%)",
        }}
      />

      {/* The only text — bottom left, quiet, haunting */}
      <div
        style={{
          position: "absolute",
          bottom: 110,
          left: 120,
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 46,
            color: "rgba(255,255,255,0.93)",
            letterSpacing: "0.005em",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          She did everything right.
        </p>
        <p
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 30,
            color: "rgba(255,255,255,0.38)",
            marginTop: 18,
            letterSpacing: "0.08em",
          }}
        >
          . . .
        </p>
      </div>
    </SlideLayout>
  );
}
