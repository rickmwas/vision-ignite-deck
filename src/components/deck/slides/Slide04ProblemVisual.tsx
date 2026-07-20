import { SlideLayout } from "../SlideLayout";

export const meta = {
  objective: "Make the system's failure personal. People remember stories, not systems.",
  headline: "Mama Akinyi's story.",
  emotionalGoal: "Empathy. Personal connection. This could be anyone.",
};

const EVENTS = [
  {
    week: "Week 12",
    event: "First ANC visit",
    detail: "CHV logs in paper book.",
    status: "ok",
  },
  {
    week: "Week 24",
    event: "Missed follow-up",
    detail: "CHV leaves. Record is lost.",
    status: "fail",
  },
  {
    week: "Week 28",
    event: "Clinic visit",
    detail: "Nurse has zero history.",
    status: "fail",
  },
  {
    week: "Week 34",
    event: "Danger signs",
    detail: "Rising BP. No base readings.",
    status: "critical",
  },
  {
    week: "Week 36",
    event: "Emergency referral",
    detail: "Hospital starts from scratch.",
    status: "critical",
  },
];

const STATUS_COLOR: Record<string, string> = {
  ok: "#1F7A3A",
  fail: "#F26A21",
  critical: "#E53E3E",
};

export default function Slide04({ index, total }: { index: number; total: number }) {
  const W = 1920;
  const lineY = 520;
  const startX = 180;
  const endX = W - 180;
  const step = (endX - startX) / (EVENTS.length - 1);

  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div
        className="slide-enter"
        style={{ position: "absolute", top: 140, left: 120, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>
          A True Story · Kilifi County
        </div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          Mama Akinyi's journey.
        </h1>
      </div>

      <svg
        width={W}
        height={1080}
        style={{ position: "absolute", inset: 0, zIndex: 5 }}
        viewBox={`0 0 ${W} 1080`}
      >
        {/* Timeline baseline */}
        <line
          x1={startX}
          y1={lineY}
          x2={endX}
          y2={lineY}
          stroke="rgba(26,26,26,0.15)"
          strokeWidth={2}
        />

        {EVENTS.map((ev, i) => {
          const x = startX + i * step;
          const color = STATUS_COLOR[ev.status];
          const isAbove = i % 2 === 0;
          const dotY = lineY;
          const textTopY = isAbove ? dotY - 180 : dotY + 60;

          return (
            <g key={i}>
              {/* Connector */}
              <line
                x1={x}
                y1={dotY + (isAbove ? -24 : 24)}
                x2={x}
                y2={isAbove ? textTopY + 140 : textTopY - 12}
                stroke={color}
                strokeWidth={ev.status === "critical" ? 3 : 1.5}
                strokeOpacity={ev.status === "critical" ? 0.9 : 0.4}
                strokeDasharray={ev.status === "ok" ? "none" : "6 5"}
              />

              {/* Dot */}
              <circle
                cx={x}
                cy={dotY}
                r={ev.status === "critical" ? 20 : 14}
                fill={color}
                fillOpacity={ev.status === "critical" ? 1 : 0.85}
              />
              {ev.status === "critical" && (
                <>
                  <circle cx={x} cy={dotY} r={30} fill="none" stroke={color} strokeWidth={2} strokeOpacity={0.35} />
                </>
              )}

              {/* Week label */}
              <text
                x={x}
                y={isAbove ? textTopY : textTopY}
                textAnchor="middle"
                fill={color}
                fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
                fontWeight={700}
                fontSize={20}
                letterSpacing="0.05em"
              >
                {ev.week}
              </text>

              {/* Event */}
              <text
                x={x}
                y={isAbove ? textTopY + 38 : textTopY + 38}
                textAnchor="middle"
                fill="#1A1A1A"
                fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
                fontWeight={600}
                fontSize={24}
              >
                {ev.event}
              </text>

              {/* Detail — wrapped manually */}
              {ev.detail.split(". ").map((line, j) => (
                <text
                  key={j}
                  x={x}
                  y={isAbove ? textTopY + 78 + j * 26 : textTopY + 78 + j * 26}
                  textAnchor="middle"
                  fill="rgba(26,26,26,0.6)"
                  fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                  fontSize={18}
                >
                  {line}{j < ev.detail.split(". ").length - 1 ? "." : ""}
                </text>
              ))}
            </g>
          );
        })}
      </svg>

      {/* Bottom anchor */}
      <div
        style={{
          position: "absolute",
          bottom: 90,
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
            fontSize: 22,
            color: "rgba(26,26,26,0.45)",
            fontStyle: "italic",
          }}
        >
          She didn't fall through a crack. She fell through a system designed without her in mind.
        </p>
      </div>
    </SlideLayout>
  );
}
