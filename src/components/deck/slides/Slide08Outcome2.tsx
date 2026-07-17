import { SlideLayout, AccentBar } from "../SlideLayout";
import img from "@/assets/deck/08-offline-chv.jpg";

export const meta = {
  objective: "Offline-first differentiator, expressed as outcome.",
  headline: "Care continues — even without internet.",
  emotionalGoal: "Confidence. Resilience.",
};

export default function Slide08({ index, total }: { index: number; total: number }) {
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
            "linear-gradient(270deg, rgba(14,26,18,0.9) 0%, rgba(14,26,18,0.55) 45%, rgba(14,26,18,0.15) 100%)",
        }}
      />
      <div
        className="slide-enter"
        style={{ position: "absolute", right: 120, top: 340, width: 900, zIndex: 10, textAlign: "right" }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>Built for Reality</div>
        <h1 className="slide-title-lg" style={{ marginTop: 40, color: "white" }}>
          Care continues —<br />
          <span style={{ color: "#F26A21" }}>even without internet.</span>
        </h1>
        <AccentBar width={110} className="ml-auto mt-10" />
        <p
          className="slide-body-lg"
          style={{ marginTop: 40, color: "rgba(255,255,255,0.85)", maxWidth: 780, marginLeft: "auto" }}
        >
          Offline-first from day one. Every visit captured. Every record synced when signal returns.
        </p>
      </div>
    </SlideLayout>
  );
}
