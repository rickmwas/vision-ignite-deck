import { SlideLayout, AccentBar } from "../SlideLayout";
import { team } from "../content";

export const meta = {
  objective: "Trust in the operators.",
  headline: "Built by people who've lived this.",
  emotionalGoal: "Trust.",
};

function Portrait({ initials }: { initials: string }) {
  return (
    <div
      style={{
        width: 260,
        height: 260,
        borderRadius: 999,
        background: "linear-gradient(145deg, #1F7A3A 0%, #8BC34A 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
        fontWeight: 700,
        fontSize: 96,
        color: "white",
        letterSpacing: "-0.03em",
        boxShadow: "0 20px 60px -20px rgba(20,90,42,0.4)",
        border: "6px solid white",
      }}
    >
      {initials}
    </div>
  );
}

export default function Slide12({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      <div className="slide-enter" style={{ position: "absolute", top: 180, left: 120, right: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Team</div>
        <h1 className="slide-title" style={{ marginTop: 32, color: "#145A2A" }}>
          Built by people who've <span style={{ color: "#F26A21" }}>lived this</span>.
        </h1>
        <AccentBar width={110} className="mt-10" />
      </div>

      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 180,
          display: "flex",
          justifyContent: "space-between",
          gap: 80,
          zIndex: 10,
        }}
      >
        {team.map((m, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Portrait initials={m.name.replace(/[\[\]]/g, "").split(" ").map(w => w[0]).slice(0, 2).join("")} />
            </div>
            <div
              className="slide-subtitle"
              style={{ marginTop: 32, color: "#145A2A", fontSize: 40 }}
            >
              {m.name}
            </div>
            <div
              style={{
                marginTop: 8,
                color: "#F26A21",
                fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {m.role}
            </div>
            <div className="slide-caption" style={{ marginTop: 16, color: "rgba(26,26,26,0.7)", maxWidth: 380, marginInline: "auto" }}>
              {m.credential}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
