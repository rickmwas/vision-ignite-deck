import { SlideLayout, AccentBar } from "../SlideLayout";

export const meta = {
  objective: "Show how the ecosystem connects.",
  headline: "One record. Four hands. Every step of the journey.",
  emotionalGoal: "Clarity.",
};

const NODES = [
  { label: "Mother",    sub: "at home",       angle: -90 },
  { label: "CHV",       sub: "in the field",  angle:   0 },
  { label: "Facility",  sub: "referral care", angle:  90 },
  { label: "Nurse",     sub: "at the clinic", angle: 180 },
];

export default function Slide06({ index, total }: { index: number; total: number }) {
  const cx = 960;
  const cy = 560;
  const r = 300;

  return (
    <SlideLayout index={index} total={total} tone="cream">
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 180, left: 120, width: 1000, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>How it Works</div>
        <h1 className="slide-title" style={{ marginTop: 32, color: "#145A2A", maxWidth: 900 }}>
          One record.<br />
          <span style={{ color: "#F26A21" }}>Every step</span> of the journey.
        </h1>
        <AccentBar width={110} className="mt-10" />
      </div>

      {/* Ecosystem diagram — echoes the heart mark of the logo */}
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0, zIndex: 5 }}
        viewBox="0 0 1920 1080"
      >
        {/* Orbit circle */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1F7A3A" strokeOpacity="0.2" strokeWidth={2} strokeDasharray="6 10" />

        {/* Connection lines */}
        {NODES.map((n, i) => {
          const a = (n.angle * Math.PI) / 180;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          return (
            <line
              key={`l-${i}`}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#1F7A3A"
              strokeOpacity="0.35"
              strokeWidth={2}
            />
          );
        })}

        {/* Center hub */}
        <circle cx={cx} cy={cy} r={130} fill="#1F7A3A" />
        <circle cx={cx} cy={cy} r={130} fill="none" stroke="#F26A21" strokeWidth={3} strokeOpacity="0.9" />
        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          fill="white"
          fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
          fontWeight={700}
          fontSize={38}
          letterSpacing="-0.02em"
        >
          TotoAfya
        </text>
        <text
          x={cx}
          y={cy + 36}
          textAnchor="middle"
          fill="rgba(255,255,255,0.75)"
          fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
          fontSize={20}
          letterSpacing="0.15em"
        >
          SHARED RECORD
        </text>

        {/* Nodes */}
        {NODES.map((n, i) => {
          const a = (n.angle * Math.PI) / 180;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          return (
            <g key={`n-${i}`}>
              <circle cx={x} cy={y} r={70} fill="white" stroke="#1F7A3A" strokeWidth={3} />
              <circle cx={x} cy={y} r={70} fill="none" stroke="#F26A21" strokeWidth={4} strokeOpacity="0" />
              <text
                x={x}
                y={y - 4}
                textAnchor="middle"
                fill="#145A2A"
                fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
                fontWeight={700}
                fontSize={28}
              >
                {n.label}
              </text>
              <text
                x={x}
                y={y + 28}
                textAnchor="middle"
                fill="rgba(26,26,26,0.6)"
                fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                fontSize={18}
              >
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </SlideLayout>
  );
}
