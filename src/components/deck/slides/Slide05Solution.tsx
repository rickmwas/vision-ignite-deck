import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "The magic moment. The audience discovers TotoAfya — we don't introduce it.",
  headline: "The journey becomes connected.",
  emotionalGoal: "Relief. Inevitability. The audience sees it before you say it.",
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
  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Header */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 140, left: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#1F7A3A" }}>Introducing</div>
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
        {/* GREEN connector lines — healed */}
        {NODES.slice(0, -1).map((_, i) => {
          const x1 = startX + i * gap + nodeR;
          const x2 = startX + (i + 1) * gap - nodeR;
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={nodeY}
              x2={x2}
              y2={nodeY}
              stroke="#1F7A3A"
              strokeWidth={6}
              strokeOpacity={0.85}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => {
          const x = startX + i * gap;
          return (
            <g key={`node-${i}`}>
              {/* Glow ring */}
              <circle cx={x} cy={nodeY} r={nodeR + 16} fill="#1F7A3A" fillOpacity={0.08} />
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

        {/* TotoAfya label on the green line */}
        <rect
          x={W / 2 - 130}
          y={nodeY - 62}
          width={260}
          height={48}
          rx={24}
          fill="#1F7A3A"
        />
        <text
          x={W / 2}
          y={nodeY - 30}
          textAnchor="middle"
          fill="white"
          fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
          fontWeight={700}
          fontSize={26}
          letterSpacing="-0.01em"
        >
          TotoAfya
        </text>
      </svg>

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
