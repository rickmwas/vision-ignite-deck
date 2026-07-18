import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Show the broken system — don't describe it. Make them feel the gap.",
  headline: "Every caregiver knows something. Nobody knows everything.",
  emotionalGoal: "Frustration. Recognition. The system is the villain.",
};

const NODES = [
  { label: "Mother",           sub: "at home",           color: "#F26A21" },
  { label: "CHV",              sub: "in the field",      color: "#8BC34A" },
  { label: "Clinic",           sub: "referral care",     color: "#1F7A3A" },
  { label: "Hospital",         sub: "specialist care",   color: "#145A2A" },
  { label: "Baby",             sub: "new life begins",   color: "#F26A21" },
];

const W = 1920;
const H = 1080;
const nodeR = 80;
const nodeY = H / 2 - 30;
const totalW = W - 280;
const startX = 140 + nodeR;
const gap = (totalW - nodeR * 2) / (NODES.length - 1);

export default function Slide03({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      {/* Title */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 140, left: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The System</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1100 }}>
          Care is <span style={{ color: "#F26A21" }}>fragmented</span>.
        </h1>
      </div>

      <svg
        width={W}
        height={H}
        style={{ position: "absolute", inset: 0, zIndex: 5 }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {/* Broken connector lines */}
        {NODES.slice(0, -1).map((_, i) => {
          const x1 = startX + i * gap + nodeR;
          const x2 = startX + (i + 1) * gap - nodeR;
          const midX = (x1 + x2) / 2;
          return (
            <g key={`line-${i}`}>
              {/* dashed broken line */}
              <line
                x1={x1}
                y1={nodeY}
                x2={x2}
                y2={nodeY}
                stroke="#E53E3E"
                strokeWidth={3}
                strokeDasharray="12 14"
                strokeOpacity={0.55}
              />
              {/* Gap / X mark in the middle */}
              <circle cx={midX} cy={nodeY} r={18} fill="#FFF5F5" stroke="#E53E3E" strokeWidth={2} strokeOpacity={0.7} />
              <line x1={midX - 9} y1={nodeY - 9} x2={midX + 9} y2={nodeY + 9} stroke="#E53E3E" strokeWidth={2.5} strokeOpacity={0.85} />
              <line x1={midX + 9} y1={nodeY - 9} x2={midX - 9} y2={nodeY + 9} stroke="#E53E3E" strokeWidth={2.5} strokeOpacity={0.85} />

              {/* "Different record" label */}
              <text
                x={midX}
                y={nodeY + 56}
                textAnchor="middle"
                fill="rgba(200,50,50,0.65)"
                fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                fontSize={16}
                letterSpacing="0.05em"
              >
                no shared record
              </text>
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => {
          const x = startX + i * gap;
          return (
            <g key={`node-${i}`}>
              {/* Circle */}
              <circle cx={x} cy={nodeY} r={nodeR} fill="white" stroke={n.color} strokeWidth={4} />
              <circle cx={x} cy={nodeY} r={nodeR - 10} fill={n.color} fillOpacity={0.1} />

              {/* Label */}
              <text
                x={x}
                y={nodeY - 8}
                textAnchor="middle"
                fill={n.color}
                fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
                fontWeight={700}
                fontSize={28}
                letterSpacing="-0.01em"
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

              {/* Notebook icon suggestion — small stack of lines */}
              <rect x={x - 18} y={nodeY - nodeR - 44} width={36} height={28} rx={4} fill="rgba(26,26,26,0.08)" />
              <line x1={x - 10} y1={nodeY - nodeR - 36} x2={x + 10} y2={nodeY - nodeR - 36} stroke="rgba(26,26,26,0.3)" strokeWidth={1.5} />
              <line x1={x - 10} y1={nodeY - nodeR - 28} x2={x + 10} y2={nodeY - nodeR - 28} stroke="rgba(26,26,26,0.3)" strokeWidth={1.5} />
              <line x1={x - 10} y1={nodeY - nodeR - 20} x2={x + 10} y2={nodeY - nodeR - 20} stroke="rgba(26,26,26,0.3)" strokeWidth={1.5} />
            </g>
          );
        })}
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
            fontWeight: 500,
            fontSize: 30,
            color: "rgba(26,26,26,0.6)",
            letterSpacing: "0.005em",
            margin: 0,
          }}
        >
          Every caregiver knows something.{" "}
          <span style={{ color: "#E53E3E", fontWeight: 600 }}>Nobody knows everything.</span>
        </p>
      </div>
    </SlideLayout>
  );
}
