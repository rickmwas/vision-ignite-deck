import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Reveal the contrarian insight. This is the slide investors remember.",
  headline: "Everyone is solving the wrong problem.",
  emotionalGoal: "Aha. Intellectual excitement. The founder sees something others don't.",
};

export default function Slide06({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="dark">
      {/* Top kicker */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 140, left: 0, right: 0, zIndex: 10, textAlign: "center" }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21", textAlign: "center" }}>
          The Insight
        </div>
        <h1
          style={{
            marginTop: 28,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 80,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "white",
            textAlign: "center",
          }}
        >
          Everyone is solving the{" "}
          <span style={{ color: "#F26A21" }}>wrong problem</span>.
        </h1>
      </div>

      {/* Two-column contrast */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          bottom: 160,
          left: 120,
          right: 120,
          display: "flex",
          gap: 0,
          zIndex: 10,
        }}
      >
        {/* Left — current thinking */}
        <div
          style={{
            flex: 1,
            borderRight: "1px solid rgba(255,255,255,0.12)",
            paddingRight: 80,
          }}
        >
          <div
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 17,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 28,
            }}
          >
            Current thinking
          </div>
          <p
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 38,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.3,
              margin: 0,
              maxWidth: 680,
              textDecoration: "line-through",
              textDecorationColor: "rgba(242,106,33,0.5)",
            }}
          >
            Maternal health is an information problem.
          </p>
          <p
            style={{
              marginTop: 24,
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              fontSize: 22,
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.5,
              maxWidth: 620,
            }}
          >
            More apps. More dashboards. More data collection. The records exist somewhere — they're just not shared.
          </p>
        </div>

        {/* Right — our belief */}
        <div
          style={{
            flex: 1,
            paddingLeft: 80,
          }}
        >
          <div
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 17,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F26A21",
              marginBottom: 28,
            }}
          >
            Our belief
          </div>
          <p
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 48,
              color: "white",
              lineHeight: 1.2,
              margin: 0,
              maxWidth: 700,
            }}
          >
            Maternal health is a{" "}
            <span style={{ color: "#F26A21" }}>coordination problem</span>.
          </p>
          <p
            style={{
              marginTop: 24,
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              fontSize: 22,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.5,
              maxWidth: 660,
            }}
          >
            Every actor in the care chain — mother, CHV, nurse, hospital — needs to share one story. TotoAfya makes that possible.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
