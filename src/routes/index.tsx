import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/deck/logo.asset.json";
import { ArrowRight, Play, Printer } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TotoAfya Digital — Investor Pitch" },
      {
        name: "description",
        content:
          "TotoAfya Digital: an offline-first maternal and child healthcare ecosystem connecting mothers, CHVs, nurses, and facilities into one continuous care journey.",
      },
      { property: "og:title", content: "TotoAfya Digital — Investor Pitch" },
      {
        property: "og:description",
        content:
          "TotoAfya Digital: an offline-first maternal and child healthcare ecosystem connecting mothers, CHVs, nurses, and facilities into one continuous care journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF9F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 960, width: "100%" }}>
        <img src={logoAsset.url} alt="TotoAfya Digital" style={{ width: 300, height: "auto" }} />

        <div
          style={{
            marginTop: 60,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(14px, 1.4vw, 18px)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#F26A21",
            fontWeight: 600,
          }}
        >
          Investor Pitch · 2026
        </div>
        <h1
          style={{
            marginTop: 24,
            fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(48px, 7vw, 108px)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            fontWeight: 700,
            color: "#145A2A",
            maxWidth: 900,
          }}
        >
          The digital backbone of{" "}
          <span style={{ color: "#F26A21" }}>maternal care</span> in
          Africa.
        </h1>
        <p
          style={{
            marginTop: 32,
            fontSize: "clamp(18px, 1.8vw, 24px)",
            color: "rgba(26,26,26,0.7)",
            maxWidth: 720,
            lineHeight: 1.5,
          }}
        >
          An offline-first ecosystem connecting mothers, Community Health
          Volunteers, nurses, and facilities into one continuous care journey.
        </p>

        <div style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Link
            to="/deck"
            search={{ slide: 1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "18px 32px",
              borderRadius: 999,
              background: "#1F7A3A",
              color: "white",
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 18,
              textDecoration: "none",
              boxShadow: "0 12px 40px -12px rgba(20,90,42,0.5)",
            }}
          >
            <Play size={18} fill="white" /> Start the pitch
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/deck/print"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "18px 32px",
              borderRadius: 999,
              background: "transparent",
              color: "#145A2A",
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 18,
              textDecoration: "none",
              border: "2px solid #1F7A3A",
            }}
          >
            <Printer size={18} /> Print / PDF view
          </Link>
        </div>

        <div
          style={{
            marginTop: 80,
            fontSize: 14,
            color: "rgba(26,26,26,0.5)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Press <kbd style={kbd}>→</kbd> / <kbd style={kbd}>←</kbd> to navigate
          · <kbd style={kbd}>F</kbd> fullscreen · <kbd style={kbd}>N</kbd> speaker notes
        </div>
      </div>
    </div>
  );
}

const kbd: React.CSSProperties = {
  display: "inline-block",
  padding: "2px 8px",
  margin: "0 2px",
  border: "1px solid rgba(26,26,26,0.2)",
  borderBottomWidth: 2,
  borderRadius: 4,
  fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
  fontSize: 12,
  color: "#145A2A",
  background: "white",
};
