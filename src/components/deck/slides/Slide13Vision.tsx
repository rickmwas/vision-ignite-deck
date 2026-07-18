import { SlideLayout, AccentBar } from "../SlideLayout";
import img from "@/assets/deck/13-vision.jpg";
import { deckMeta } from "../content";

export const meta = {
  objective: "The ask. Make it clear, concrete, and connected to the vision.",
  headline: "Join us. The window is open.",
  emotionalGoal: "Excitement. Urgency. The opportunity is now.",
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
            "linear-gradient(90deg, rgba(14,26,18,0.95) 0%, rgba(14,26,18,0.75) 45%, rgba(14,26,18,0.3) 100%)",
        }}
      />

      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          top: 160,
          width: 900,
          zIndex: 10,
        }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Ask</div>

        {/* Ask amount — prominent */}
        <div
          style={{
            marginTop: 28,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 150,
            lineHeight: 0.9,
            letterSpacing: "-0.055em",
            color: "white",
          }}
        >
          {deckMeta.askAmount}
        </div>

        <AccentBar width={130} className="mt-10" />

        <p
          style={{
            marginTop: 36,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.45,
            maxWidth: 820,
          }}
        >
          {deckMeta.askUse}
        </p>
      </div>

      {/* Use of funds */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          bottom: 120,
          width: 900,
          zIndex: 10,
          display: "flex",
          gap: 48,
        }}
      >
        {[
          { pct: "40%", use: "Product & engineering" },
          { pct: "35%", use: "Field operations & CHV training" },
          { pct: "25%", use: "Partnerships & health system integration" },
        ].map((f, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 40,
                color: "#F26A21",
                letterSpacing: "-0.04em",
              }}
            >
              {f.pct}
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: 17,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.4,
              }}
            >
              {f.use}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
