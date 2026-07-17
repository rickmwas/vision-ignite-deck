import { SlideLayout, AccentBar } from "../SlideLayout";
import img from "@/assets/deck/03-fragmented.jpg";

export const meta = {
  objective: "Name the root problem in three words.",
  headline: "Care is fragmented.",
  emotionalGoal: "Frustration. Recognition.",
};

export default function Slide03({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="light">
      <div style={{ position: "absolute", inset: 0, display: "flex" }}>
        <div style={{ width: "50%", position: "relative" }}>
          <img
            src={img}
            alt="Overwhelmed nurse with paper records in a rural Kenyan clinic"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          className="slide-enter"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 140px",
          }}
        >
          <div className="slide-kicker" style={{ color: "#F26A21" }}>The Problem</div>
          <h1 className="slide-title-lg" style={{ marginTop: 40, color: "#145A2A" }}>
            Care is<br />fragmented.
          </h1>
          <AccentBar width={120} className="mt-10" />
          <p className="slide-body-lg" style={{ marginTop: 40, maxWidth: 640 }}>
            Paper records. Missed follow-ups. Broken referrals.
          </p>
          <p className="slide-body" style={{ marginTop: 20, maxWidth: 640, color: "rgba(26,26,26,0.7)" }}>
            Mothers fall through the cracks between home, community, and clinic.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
