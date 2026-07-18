import { SlideLayout, AccentBar } from "../SlideLayout";
import { team } from "../content";

export const meta = {
  objective: "Show obsession, not credentials. Investors fund obsessed founders.",
  headline: "Built alongside healthcare workers — not for them.",
  emotionalGoal: "Trust. Obsession. These people will not quit.",
};

function Portrait({ initials }: { initials: string }) {
  return (
    <div
      style={{
        width: 160,
        height: 160,
        borderRadius: 999,
        background: "linear-gradient(145deg, #1F7A3A 0%, #8BC34A 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
        fontWeight: 700,
        fontSize: 56,
        color: "white",
        letterSpacing: "-0.03em",
        boxShadow: "0 20px 60px -20px rgba(20,90,42,0.35)",
        border: "4px solid white",
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default function Slide12({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 140, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Team</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A", maxWidth: 1200 }}>
          Built{" "}
          <span style={{ color: "#F26A21" }}>alongside</span>{" "}
          healthcare workers — not for them.
        </h1>
        <AccentBar width={110} className="mt-8" />
      </div>

      {/* Team cards */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 120,
          display: "flex",
          gap: 60,
          zIndex: 10,
        }}
      >
        {team.map((m, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "white",
              borderRadius: 24,
              padding: "36px 36px",
              boxShadow: "0 8px 40px -10px rgba(20,90,42,0.12)",
              border: "1px solid rgba(20,90,42,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <Portrait
                initials={m.name.replace(/[\[\]]/g, "").split(" ").map((w) => w[0]).slice(0, 2).join("")}
              />
              <div>
                <div
                  style={{
                    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    color: "#145A2A",
                    lineHeight: 1.2,
                  }}
                >
                  {m.name}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#F26A21",
                  }}
                >
                  {m.role}
                </div>
              </div>
            </div>

            {/* Obsession quote instead of credential */}
            <div
              style={{
                borderLeft: "3px solid #F26A21",
                paddingLeft: 18,
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: 17,
                color: "rgba(26,26,26,0.7)",
                lineHeight: 1.6,
              }}
            >
              {m.credential}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
