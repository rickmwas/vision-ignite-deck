import { LogoMark } from "../LogoMark";

export const meta = {
  objective: "End with silence. One sentence. Nothing else.",
  headline: "Every mother deserves one connected healthcare journey.",
  emotionalGoal: "Stillness. Inevitability. They remember the sentence, not the slides.",
};

/**
 * The closing slide intentionally bypasses SlideLayout — no slide counter,
 * no chrome. Just the sentence, the logo, and silence.
 */
export default function Slide14Final({ index, total }: { index: number; total: number }) {
  void index;
  void total;
  return (
    <div
      className="slide-content"
      style={{
        backgroundColor: "#0E1A12",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* The sentence */}
      <p
        style={{
          fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 96,
          lineHeight: 1.1,
          letterSpacing: "-0.045em",
          color: "white",
          textAlign: "center",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        Every mother deserves one{" "}
        <span style={{ color: "#F26A21" }}>connected</span>{" "}
        healthcare journey.
      </p>

      {/* Logo — bottom center, enlarged */}
      <div
        style={{
          position: "absolute",
          bottom: 72,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.85,
        }}
      >
        <LogoMark variant="knockout" width={260} />
      </div>
    </div>
  );
}
