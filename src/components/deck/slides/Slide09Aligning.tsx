import { useEffect, useState } from "react";
import { SlideLayout } from "../SlideLayout";
import { LogoMark } from "../LogoMark";

export const meta = {
  objective: "Show convergence. The timing is inevitable. Not one breakthrough, but many aligning.",
  headline: "Everything is finally aligning.",
  emotionalGoal: "Aha. Momentum. The time is now.",
};

const CIRCLES = [
  { label: "AI",                    outerX: 420,  outerY: 340,  innerX: 960 - 120, innerY: 560 - 110, color: "#1F7A3A" },
  { label: "Offline Technology",    outerX: 1480, outerY: 300,  innerX: 960 + 120, innerY: 560 - 110, color: "#8BC34A" },
  { label: "Community Healthcare",  outerX: 320,  outerY: 680,  innerX: 960 - 220, innerY: 560 + 10,  color: "#F26A21" },
  { label: "Digital Health Policy", outerX: 1580, outerY: 660,  innerX: 960 + 220, innerY: 560 + 10,  color: "#1F7A3A" },
  { label: "Smartphones",           outerX: 620,  outerY: 820,  innerX: 960 - 110, innerY: 560 + 140, color: "#8BC34A" },
  { label: "Interoperability",      outerX: 1280, outerY: 840,  innerX: 960 + 110, innerY: 560 + 140, color: "#F26A21" },
];

export default function Slide09Aligning({ index, total }: { index: number; total: number }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const intervals = CIRCLES.map((_, i) =>
      setTimeout(() => setStep(i + 1), (i + 1) * 350)
    );
    const finalT = setTimeout(() => setStep(7), (CIRCLES.length + 1) * 350);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(finalT);
    };
  }, []);

  const isConverged = step >= 7;

  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Convergence</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          Everything is finally aligning.
        </h1>
      </div>

      {/* Floating/Converging Circles Container */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 5 }}>
        {CIRCLES.map((c, i) => {
          const visible = step > i;
          const posX = isConverged ? c.innerX : c.outerX;
          const posY = isConverged ? c.innerY : c.outerY;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: posX,
                top: posY,
                transform: "translate(-50%, -50%)",
                width: 170,
                height: 170,
                borderRadius: "50%",
                background: "white",
                border: `3px solid ${c.color}`,
                boxShadow: isConverged 
                  ? "0 10px 24px -10px rgba(20,90,42,0.15)"
                  : "0 15px 40px -12px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 16,
                opacity: visible ? 1 : 0,
                transition: "opacity 400ms ease, left 1200ms cubic-bezier(0.25, 1, 0.5, 1), top 1200ms cubic-bezier(0.25, 1, 0.5, 1)",
                zIndex: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#145A2A",
                  lineHeight: 1.2,
                }}
              >
                {c.label}
              </span>
            </div>
          );
        })}

        {/* Converged Center Logo */}
        <div
          style={{
            position: "absolute",
            left: 960,
            top: 560,
            transform: "translate(-50%, -50%)",
            opacity: isConverged ? 1 : 0,
            transition: "opacity 1000ms ease-in-out",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo Icon Mark without text */}
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "white",
              border: "5px solid #1F7A3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 36px -8px rgba(31,122,58,0.4)",
            }}
          >
            {/* Minimal logo mark icon */}
            <LogoMark variant="full" width={76} />
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          bottom: 100,
          left: 120,
          right: 120,
          zIndex: 10,
          textAlign: "center",
          opacity: isConverged ? 1 : 0,
          transition: "opacity 800ms ease",
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 26,
            color: "rgba(26,26,26,0.6)",
            margin: 0,
          }}
        >
          The future isn't one breakthrough.{" "}
          <span style={{ color: "#F26A21", fontWeight: 700 }}>It's the convergence of many.</span>
        </p>
      </div>
    </SlideLayout>
  );
}
