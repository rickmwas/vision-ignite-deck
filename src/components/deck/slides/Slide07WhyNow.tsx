import { SlideLayout, AccentBar } from "../SlideLayout";
import { Zap, Users, Signal, HeartPulse } from "lucide-react";

export const meta = {
  objective: "Answer why now and why us in one balanced slide.",
  headline: "Why now. Why us.",
  emotionalGoal: "Conviction. Timing.",
};

const WHY_NOW = [
  {
    icon: Zap,
    title: "Kenya's eCHIS strategy",
    body: "The Ministry of Health is digitising community care nationwide — counties are actively looking for partners.",
  },
  {
    icon: Signal,
    title: "Rural connectivity is real",
    body: "Smartphone reach in rural counties finally makes an offline-first, CHV-led platform viable.",
  },
];

const WHY_US = [
  {
    icon: Users,
    title: "Embedded in the field",
    body: "We've trained CHVs in Naivasha and Kilifi. We know the workflows because we've walked them.",
  },
  {
    icon: HeartPulse,
    title: "Clinical + technical + local",
    body: "OB-GYN leadership, offline-first engineering, and Ministry-level relationships in one team.",
  },
];

function Column({
  kicker,
  items,
}: {
  kicker: string;
  items: { icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>; title: string; body: string }[];
}) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32 }}>
      <div className="slide-kicker" style={{ color: "#F26A21" }}>{kicker}</div>
      {items.map(({ icon: Icon, title, body }, i) => (
        <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#1F7A3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={26} color="#FFFFFF" strokeWidth={2} />
          </div>
          <div style={{ flex: 1 }}>
            <div
              className="slide-subtitle"
              style={{ fontSize: 26, color: "#145A2A", fontWeight: 600 }}
            >
              {title}
            </div>
            <div className="slide-body" style={{ marginTop: 8, color: "rgba(26,26,26,0.75)", maxWidth: 520 }}>
              {body}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Slide07WhyNow({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 180,
          zIndex: 10,
        }}
      >
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Moment</div>
        <h1 className="slide-title" style={{ marginTop: 20, color: "#145A2A" }}>
          Why <span style={{ color: "#F26A21" }}>now</span>. Why <span style={{ color: "#F26A21" }}>us</span>.
        </h1>
        <AccentBar width={90} className="mt-6" />
      </div>

      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 460,
          bottom: 160,
          display: "flex",
          gap: 100,
          zIndex: 10,
        }}
      >
        <Column kicker="Why Now" items={WHY_NOW} />
        <div style={{ width: 1, background: "rgba(20,90,42,0.15)" }} />
        <Column kicker="Why Us" items={WHY_US} />
      </div>
    </SlideLayout>
  );
}
