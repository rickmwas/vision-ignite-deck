import { SlideLayout, AccentBar } from "../SlideLayout";
import { market } from "../content";

export const meta = {
  objective: "Scale the vision without a boring chart.",
  headline: "The opportunity is continental.",
  emotionalGoal: "Scale.",
};

export default function Slide10({ index, total }: { index: number; total: number }) {
  const cx = 1360;
  const cy = 540;
  return (
    <SlideLayout index={index} total={total} tone="light">
      <div
        className="slide-enter"
        style={{ position: "absolute", left: 120, top: 260, width: 800, zIndex: 10 }}
      >
        <div className="slide-kicker" style={{ color: "var(--brand-orange)" }}>Market</div>
        <h1 className="slide-title" style={{ marginTop: 32, color: "var(--brand-green-deep)" }}>
          The opportunity is <span style={{ color: "var(--brand-orange)" }}>continental</span>.
        </h1>
        <AccentBar width={110} className="mt-10" />

        <div style={{ marginTop: 60, display: "flex", flexDirection: "column", gap: 32 }}>
          {[market.tam, market.sam, market.som].map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  background: i === 0 ? "var(--brand-green)" : i === 1 ? "var(--brand-leaf)" : "var(--brand-orange)",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  className="slide-body"
                  style={{ fontWeight: 600, fontFamily: "var(--font-display)", color: "var(--brand-green-deep)" }}
                >
                  {row.label}
                </div>
                <div className="slide-caption" style={{ color: "rgba(26,26,26,0.6)", marginTop: 6 }}>
                  {row.note}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 60,
                  fontWeight: 700,
                  color: "var(--brand-green-deep)",
                  letterSpacing: "-0.03em",
                }}
              >
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concentric circles */}
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0, zIndex: 5 }}>
        <circle cx={cx} cy={cy} r={340} fill="var(--brand-green)" fillOpacity="0.10" stroke="var(--brand-green)" strokeOpacity="0.4" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={220} fill="var(--brand-leaf)" fillOpacity="0.18" stroke="var(--brand-leaf)" strokeOpacity="0.6" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={110} fill="var(--brand-orange)" fillOpacity="0.9" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontFamily="var(--font-display)" fontWeight={700} fontSize={30}>
          SOM
        </text>
        <text x={cx} y={cy + 28} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="var(--font-sans)" fontSize={18}>
          Kenya · 5 yr
        </text>

        <text x={cx} y={cy - 190} textAnchor="middle" fill="var(--brand-leaf)" fontFamily="var(--font-display)" fontWeight={700} fontSize={26}>
          SAM
        </text>
        <text x={cx} y={cy - 310} textAnchor="middle" fill="var(--brand-green)" fontFamily="var(--font-display)" fontWeight={700} fontSize={26}>
          TAM
        </text>
      </svg>
    </SlideLayout>
  );
}
