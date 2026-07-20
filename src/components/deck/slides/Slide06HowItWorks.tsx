import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Reveal the contrarian insight. This is the intellectual centerpiece that investors remember.",
  headline: "Everyone is solving the wrong problem.",
  emotionalGoal: "Aha. Conviction. The founder sees the structural gap.",
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
            fontSize: 76,
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
          bottom: 180,
          left: 160,
          right: 160,
          display: "flex",
          gap: 100,
          zIndex: 10,
        }}
      >
        {/* Left — current thinking */}
        <div
          style={{
            flex: 1,
            borderRight: "1px solid rgba(255,255,255,0.12)",
            paddingRight: 60,
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
              marginBottom: 32,
            }}
          >
            Current thinking
          </div>
          
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {["Pregnancy Apps", "Hospital Systems", "Reporting", "Education"].map((item, idx) => (
              <li
                key={idx}
                style={{
                  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: 32,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(242,106,33,0.6)",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — our belief */}
        <div
          style={{
            flex: 1,
            paddingLeft: 40,
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
              marginBottom: 32,
            }}
          >
            Our belief
          </div>
          
          <div
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 52,
              color: "white",
              lineHeight: 1.15,
              marginTop: 10,
            }}
          >
            Continuity of Care
          </div>
          <p
            style={{
              marginTop: 24,
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              fontSize: 22,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.5,
              maxWidth: 600,
            }}
          >
            Connecting mother, CHV, nurse, and hospital into one shared record.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
