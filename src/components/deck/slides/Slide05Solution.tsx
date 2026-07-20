import { useEffect, useState } from "react";
import { SlideLayout } from "../SlideLayout";
import { LogoMark } from "../LogoMark";

export const meta = {
  objective: "The reveal. Transition from chaos to continuity. Let them feel the connection.",
  headline: "The journey becomes connected.",
  emotionalGoal: "Aha. Relief. Seamless order.",
};

const NODES = [
  { label: "Mother",   sub: "at home",         color: "#F26A21" },
  { label: "CHV",      sub: "in the field",    color: "#8BC34A" },
  { label: "Clinic",   sub: "referral care",   color: "#1F7A3A" },
  { label: "Hospital", sub: "specialist care", color: "#145A2A" },
  { label: "Baby",     sub: "new life begins", color: "#F26A21" },
];

const W = 1920;
const H = 1080;
const nodeR = 80;
const nodeY = H / 2 - 30;
const totalW = W - 280;
const startX = 140 + nodeR;
const gap = (totalW - nodeR * 2) / (NODES.length - 1);

export default function Slide05({ index, total }: { index: number; total: number }) {
  const [phase, setPhase] = useState(0); // 0: broken red, 1: healed green, 2: logo reveal

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 140, left: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#1F7A3A" }}>The Solution</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          The journey becomes{" "}
          <span style={{ color: "#1F7A3A" }}>connected</span>.
        </h1>
      </div>

      <svg
        width={W}
        height={H}
        style={{ position: "absolute", inset: 0, zIndex: 5 }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {/* Connector lines */}
        {NODES.slice(0, -1).map((_, i) => {
          const x1 = startX + i * gap + nodeR;
          const x2 = startX + (i + 1) * gap - nodeR;
          const isGreen = phase >= 1;
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={nodeY}
              x2={x2}
              y2={nodeY}
              stroke={isGreen ? "#1F7A3A" : "#E53E3E"}
              strokeWidth={isGreen ? 6 : 3}
              strokeDasharray={isGreen ? "none" : "8 8"}
              strokeOpacity={isGreen ? 0.9 : 0.4}
              style={{
                transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => {
          const x = startX + i * gap;
          return (
            <g key={`node-${i}`}>
              {/* Glow ring */}
              <circle
                cx={x}
                cy={nodeY}
                r={nodeR + 16}
                fill="#1F7A3A"
                fillOpacity={phase >= 1 ? 0.08 : 0}
                style={{ transition: "fill-opacity 800ms ease" }}
              />
              <circle cx={x} cy={nodeY} r={nodeR} fill="white" stroke={n.color} strokeWidth={5} />
              <circle cx={x} cy={nodeY} r={nodeR - 12} fill={n.color} fillOpacity={0.12} />

              {/* Label */}
              <text
                x={x}
                y={nodeY - 8}
                textAnchor="middle"
                fill={n.color}
                fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
                fontWeight={700}
                fontSize={28}
              >
                {n.label}
              </text>
              <text
                x={x}
                y={nodeY + 26}
                textAnchor="middle"
                fill="rgba(26,26,26,0.5)"
                fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                fontSize={17}
              >
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Magical Logo Reveal */}
      <div
        style={{
          position: "absolute",
          top: nodeY - 90,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 15,
          opacity: phase >= 2 ? 1 : 0,
          transformOrigin: "center center",
          transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          background: "white",
          border: "4px solid #1F7A3A",
          boxShadow: "0 20px 50px -12px rgba(31,122,58,0.3)",
          borderRadius: 24,
          padding: "16px 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoMark variant="full" width={180} />
      </div>

      {/* Bottom sentence */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          bottom: 110,
          left: 120,
          right: 120,
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 30,
            color: "rgba(26,26,26,0.6)",
            margin: 0,
          }}
        >
          One shared record.{" "}
          <span style={{ color: "#1F7A3A", fontWeight: 600 }}>
            Every step of the journey.
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
