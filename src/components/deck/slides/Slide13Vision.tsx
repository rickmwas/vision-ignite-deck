import { SlideLayout, AccentBar } from "../SlideLayout";
import img from "@/assets/deck/13-vision.jpg";
import { deckMeta } from "../content";

export const meta = {
  objective: "End with a vision, an ask, and a feeling.",
  headline: "The digital backbone of maternal care in Africa.",
  emotionalGoal: "Inspiration.",
};

export default function Slide13({ index, total }: { index: number; total: number }) {
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
            "linear-gradient(180deg, rgba(14,26,18,0.35) 0%, rgba(14,26,18,0.55) 55%, rgba(14,26,18,0.9) 100%)",
        }}
      />
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 200,
          zIndex: 10,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 100,
        }}
      >
        <div style={{ maxWidth: 1100 }}>
          <div className="slide-kicker" style={{ color: "#F26A21" }}>2030 Vision</div>
          <h1 className="slide-title-lg" style={{ marginTop: 32, color: "white" }}>
            The digital backbone of<br />
            <span style={{ color: "#F26A21" }}>maternal care in Africa.</span>
          </h1>
          <AccentBar width={110} className="mt-10" />
        </div>
        <div style={{ minWidth: 480, textAlign: "right" }}>
          <div className="slide-kicker" style={{ color: "rgba(255,255,255,0.7)" }}>The Ask</div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 128,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginTop: 16,
            }}
          >
            {deckMeta.askAmount}
          </div>
          <div className="slide-body" style={{ marginTop: 12, color: "rgba(255,255,255,0.85)" }}>
            {deckMeta.askUse}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
