import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Show the difference visually, not with a table.",
  headline: "Others solve pieces. TotoAfya connects them.",
  emotionalGoal: "Aha.",
};

const scattered = [
  { x: 220, y: 220, label: "Pregnancy apps" },
  { x: 380, y: 460, label: "SMS reminders" },
  { x: 180, y: 640, label: "Paper registers" },
  { x: 540, y: 300, label: "Standalone EMRs" },
  { x: 620, y: 620, label: "CHV toolkits" },
];

const connected = [
  { x: 1180, y: 260 },
  { x: 1360, y: 460 },
  { x: 1180, y: 640 },
  { x: 1560, y: 320 },
  { x: 1620, y: 600 },
];

export default function Slide11({ index, total }: { index: number; total: number }) {
  const cx = 1400;
  const cy = 460;
  return (
    <SlideLayout index={index} total={total} tone="cream">
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 130, left: 120, right: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Difference</div>
        <h1 className="slide-title" style={{ marginTop: 32, color: "#145A2A", maxWidth: 1400 }}>
          Others solve pieces.{" "}
          <span style={{ color: "#F26A21" }}>TotoAfya connects them.</span>
        </h1>
        <AccentBar width={110} className="mt-10" />
      </div>

      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0, zIndex: 5 }}>
        {/* LEFT: scattered */}
        <text x={430} y={200} textAnchor="middle" fill="rgba(26,26,26,0.5)" fontFamily="var(--font-display)" fontWeight={600} fontSize={22} letterSpacing="0.2em">
          TODAY
        </text>
        {scattered.map((n, i) => (
          <g key={i}>
            <circle cx={n.x + 470} cy={n.y + 200} r={16} fill="#1A1A1A" opacity={0.5} />
            <text x={n.x + 500} y={n.y + 208} fill="rgba(26,26,26,0.6)" fontFamily="var(--font-sans)" fontSize={20}>
              {n.label}
            </text>
          </g>
        ))}

        {/* RIGHT: connected mesh */}
        <text x={cx} y={200} textAnchor="middle" fill="#1F7A3A" fontFamily="var(--font-display)" fontWeight={700} fontSize={22} letterSpacing="0.2em">
          WITH TOTOAFYA
        </text>
        {/* mesh lines */}
        {connected.map((n, i) =>
          connected.slice(i + 1).map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="#1F7A3A"
              strokeOpacity="0.35"
              strokeWidth={2}
            />
          )),
        )}
        {/* central hub */}
        <circle cx={cx} cy={cy} r={54} fill="#F26A21" />
        <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontFamily="var(--font-display)" fontWeight={700} fontSize={22}>
          TotoAfya
        </text>
        {connected.map((n, i) => (
          <line key={`hub-${i}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="#1F7A3A" strokeWidth={2.5} />
        ))}
        {connected.map((n, i) => (
          <circle key={`node-${i}`} cx={n.x} cy={n.y} r={18} fill="#1F7A3A" />
        ))}
      </svg>
    </SlideLayout>
  );
}
