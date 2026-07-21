import { SlideLayout } from "../SlideLayout";
import moh216Img from "@/assets/deck/moh216.png";
import { Baby, ClipboardList, Hospital, AlertTriangle } from "lucide-react";

export const meta = {
  objective: "Show fragmentation. Let the audience visually grasp the data silos between Mother, CHV, and Clinic.",
  headline: "Maternal care is trapped in disconnected silos.",
  emotionalGoal: "Frustration. Recognition of the communication gaps in public health.",
};

export default function Slide03({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} tone="cream">
      {/* Header */}
      <div className="slide-enter" style={{ position: "absolute", top: 130, left: 120, zIndex: 10 }}>
        <div className="slide-kicker" style={{ color: "#F26A21" }}>The Problem</div>
        <h1 className="slide-title" style={{ marginTop: 24, color: "#145A2A" }}>
          Care is trapped in <span style={{ color: "#E53E3E" }}>disconnected silos</span>.
        </h1>
      </div>

      {/* Spatially mapped columns & gaps */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 280,
          bottom: 160,
          display: "flex",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        {/* Silo 1: The Caregiver (Mother) */}
        <div
          style={{
            width: 440,
            height: 520,
            background: "white",
            borderRadius: 24,
            padding: "36px",
            boxShadow: "0 8px 30px -10px rgba(26,26,26,0.06)",
            border: "1px solid rgba(26,26,26,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ color: "#145A2A", display: "inline-flex", alignItems: "center" }}><Baby size={32} /></span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#E53E3E",
                  background: "#FFF5F5",
                  padding: "4px 10px",
                  borderRadius: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Silo 01
              </span>
            </div>

            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 24, color: "#145A2A", marginBottom: 6 }}>
              The Caregiver (Mother)
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(26,26,26,0.5)", marginBottom: 20 }}>
              Primary Tool: MOH216 Paper Booklet
            </div>

            {/* Booklet Image */}
            <div style={{ width: "100%", height: 160, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.01)", borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
              <img
                src={moh216Img}
                style={{
                  height: "90%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.08))",
                  transform: "rotate(-1deg)",
                }}
                alt="MOH216"
              />
            </div>
          </div>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(26,26,26,0.65)", lineHeight: 1.5, margin: 0 }}>
            Booklet stays at home. If it gets misplaced, water-damaged, or left behind, her child's entire immunization and risk history is gone.
          </p>
        </div>

        {/* Silo Gap 1 */}
        <div style={{ width: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ borderTop: "2px dashed rgba(229,62,62,0.4)", width: "100%" }} />
          <div
            style={{
              background: "#FFF5F5",
              border: "1px solid rgba(229,62,62,0.25)",
              borderRadius: 12,
              padding: "10px 14px",
              textAlign: "center",
              boxShadow: "0 6px 16px -4px rgba(229,62,62,0.15)",
              zIndex: 10,
              width: 100,
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#C53030", marginBottom: 4 }}><AlertTriangle size={18} /></div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 11, color: "#C53030", textTransform: "uppercase", letterSpacing: "0.05em" }}>Silo Gap</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "rgba(26,26,26,0.5)", marginTop: 2, lineHeight: 1.2 }}>No Home-to-Community Sync</div>
          </div>
          <div style={{ borderTop: "2px dashed rgba(229,62,62,0.4)", width: "100%" }} />
        </div>

        {/* Silo 2: Community (CHV) */}
        <div
          style={{
            width: 440,
            height: 520,
            background: "white",
            borderRadius: 24,
            padding: "36px",
            boxShadow: "0 8px 30px -10px rgba(26,26,26,0.06)",
            border: "1px solid rgba(26,26,26,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ color: "#145A2A", display: "inline-flex", alignItems: "center" }}><ClipboardList size={32} /></span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#E53E3E",
                  background: "#FFF5F5",
                  padding: "4px 10px",
                  borderRadius: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Silo 02
              </span>
            </div>

            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 24, color: "#145A2A", marginBottom: 6 }}>
              Community Health (CHV)
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(26,26,26,0.5)", marginBottom: 20 }}>
              Primary Tool: Physical Black Notebook
            </div>

            {/* Notebook Placeholder Graphic */}
            <div style={{ width: "100%", height: 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f5f5f5", borderRadius: 12, border: "1px solid rgba(0,0,0,0.05)", marginBottom: 20 }}>
              <div style={{ width: 70, height: 90, background: "#1a1a1a", borderRadius: 4, position: "relative", boxShadow: "0 4px 10px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", padding: "10px 8px" }}>
                <div style={{ height: 2, background: "#fff", width: "80%", marginBottom: 6 }} />
                <div style={{ height: 1, background: "rgba(255,255,255,0.3)", width: "100%", marginBottom: 4 }} />
                <div style={{ height: 1, background: "rgba(255,255,255,0.3)", width: "90%", marginBottom: 4 }} />
                <div style={{ height: 1, background: "rgba(255,255,255,0.3)", width: "70%" }} />
                {/* Red binder ring markings */}
                <div style={{ position: "absolute", left: -3, top: "20%", width: 6, height: 4, background: "#888", borderRadius: 2 }} />
                <div style={{ position: "absolute", left: -3, top: "45%", width: 6, height: 4, background: "#888", borderRadius: 2 }} />
                <div style={{ position: "absolute", left: -3, top: "70%", width: 6, height: 4, background: "#888", borderRadius: 2 }} />
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(26,26,26,0.65)", lineHeight: 1.5, margin: 0 }}>
            Assessments are hand-written in a notebook. The clinic has no visibility. If a child defaults on a vaccine in the village, the system remains blind.
          </p>
        </div>

        {/* Silo Gap 2 */}
        <div style={{ width: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ borderTop: "2px dashed rgba(229,62,62,0.4)", width: "100%" }} />
          <div
            style={{
              background: "#FFF5F5",
              border: "1px solid rgba(229,62,62,0.25)",
              borderRadius: 12,
              padding: "10px 14px",
              textAlign: "center",
              boxShadow: "0 6px 16px -4px rgba(229,62,62,0.15)",
              zIndex: 10,
              width: 100,
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#C53030", marginBottom: 4 }}><AlertTriangle size={18} /></div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 11, color: "#C53030", textTransform: "uppercase", letterSpacing: "0.05em" }}>Silo Gap</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "rgba(26,26,26,0.5)", marginTop: 2, lineHeight: 1.2 }}>No Community-to-Clinic Sync</div>
          </div>
          <div style={{ borderTop: "2px dashed rgba(229,62,62,0.4)", width: "100%" }} />
        </div>

        {/* Silo 3: The Clinic (Nurse) */}
        <div
          style={{
            width: 440,
            height: 520,
            background: "white",
            borderRadius: 24,
            padding: "36px",
            boxShadow: "0 8px 30px -10px rgba(26,26,26,0.06)",
            border: "1px solid rgba(26,26,26,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ color: "#145A2A", display: "inline-flex", alignItems: "center" }}><Hospital size={32} /></span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#E53E3E",
                  background: "#FFF5F5",
                  padding: "4px 10px",
                  borderRadius: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Silo 03
              </span>
            </div>

            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 24, color: "#145A2A", marginBottom: 6 }}>
              The Facility (Clinic Nurse)
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(26,26,26,0.5)", marginBottom: 20 }}>
              Primary Tool: Paper Files & Stacks
            </div>

            {/* Folder Stack Graphic */}
            <div style={{ width: "100%", height: 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f5f5f5", borderRadius: 12, border: "1px solid rgba(0,0,0,0.05)", marginBottom: 20 }}>
              <div style={{ position: "relative", width: 80, height: 70 }}>
                {/* Back Folder */}
                <div style={{ position: "absolute", left: 10, top: 0, width: 60, height: 50, background: "#D0D0D0", borderRadius: "4px 4px 0 0", border: "1px solid #B0B0B0" }} />
                {/* Middle Folder */}
                <div style={{ position: "absolute", left: 5, top: 10, width: 65, height: 50, background: "#E2A93E", borderRadius: "4px 4px 0 0", border: "1px solid #C69230", transform: "rotate(-2deg)" }} />
                {/* Front Folder */}
                <div style={{ position: "absolute", left: 0, top: 20, width: 70, height: 50, background: "#F4D068", borderRadius: "4px 4px 0 0", border: "1px solid #DBB64F", transform: "rotate(1deg)", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} />
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(26,26,26,0.65)", lineHeight: 1.5, margin: 0 }}>
            Nurses only see data when the mother arrives. They are completely blind to missed home treatments, danger signs, or community follow-ups.
          </p>
        </div>
      </div>

      {/* Bottom statement */}
      <div
        className="slide-enter"
        style={{
          position: "absolute",
          bottom: 75,
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
            fontSize: 24,
            color: "rgba(26,26,26,0.6)",
            margin: 0,
          }}
        >
          Every caregiver knows something.{" "}
          <span style={{ color: "#E53E3E", fontWeight: 700 }}>Nobody knows everything.</span>
        </p>
      </div>
    </SlideLayout>
  );
}
