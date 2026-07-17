import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { ChevronLeft, ChevronRight, Maximize2, StickyNote, Printer } from "lucide-react";
import { slides } from "@/components/deck/slideRegistry";

const searchSchema = z.object({
  slide: z.coerce.number().int().min(1).catch(1),
});

export const Route = createFileRoute("/deck")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "TotoAfya Digital — Investor Pitch" },
      { name: "description", content: "The digital backbone of maternal care in Africa." },
      { property: "og:title", content: "TotoAfya Digital — Investor Pitch" },
      { property: "og:description", content: "The digital backbone of maternal care in Africa." },
    ],
  }),
  component: DeckRoute,
});

function DeckRoute() {
  const { slide } = useSearch({ from: "/deck" });
  const navigate = useNavigate({ from: "/deck" });
  const total = slides.length;
  const idx = Math.max(0, Math.min(total - 1, slide - 1));
  const [showNotes, setShowNotes] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function computeScale() {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1080;
      setScale(Math.min(sx, sy));
    }
    computeScale();
    window.addEventListener("resize", computeScale);
    return () => window.removeEventListener("resize", computeScale);
  }, []);

  const go = (next: number) => {
    const n = Math.max(1, Math.min(total, next));
    navigate({ search: { slide: n }, replace: false });
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(idx + 2);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(idx);
      } else if (e.key === "n" || e.key === "N") {
        setShowNotes((v) => !v);
      } else if (e.key === "f" || e.key === "F" || e.key === "F5") {
        e.preventDefault();
        document.documentElement.requestFullscreen?.();
      } else if (e.key === "Home") {
        go(1);
      } else if (e.key === "End") {
        go(total);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, total]);

  useEffect(() => {
    document.title = `${idx + 1}/${total} — ${slides[idx].meta.headline}`;
  }, [idx, total]);

  const { Component, meta } = slides[idx];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0f0c",
        overflow: "hidden",
      }}
    >
      {/* Scaled slide */}
      <div
        style={{
          position: "absolute",
          width: 1920,
          height: 1080,
          left: "50%",
          top: "50%",
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          boxShadow: "0 40px 120px -20px rgba(0,0,0,0.6)",
        }}
      >
        <Component index={idx} total={total} />
      </div>

      {/* Nav pills */}
      <NavPill dir="prev" onClick={() => go(idx)} disabled={idx === 0} />
      <NavPill dir="next" onClick={() => go(idx + 2)} disabled={idx === total - 1} />

      {/* Top toolbar */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          display: "flex",
          gap: 8,
          zIndex: 100,
        }}
      >
        <ToolbarButton onClick={() => setShowNotes((v) => !v)} title="Notes (N)">
          <StickyNote size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => document.documentElement.requestFullscreen?.()}
          title="Fullscreen (F)"
        >
          <Maximize2 size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => window.open("/deck/print", "_blank")}
          title="Print / PDF"
        >
          <Printer size={18} />
        </ToolbarButton>
      </div>

      {/* Speaker notes overlay */}
      {showNotes && <NotesPanel meta={meta} index={idx} total={total} />}
    </div>
  );
}

function NavPill({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let t: number;
    function reset() {
      setVisible(true);
      window.clearTimeout(t);
      t = window.setTimeout(() => setVisible(false), 2200);
    }
    reset();
    window.addEventListener("mousemove", reset);
    return () => {
      window.removeEventListener("mousemove", reset);
      window.clearTimeout(t);
    };
  }, []);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        [dir === "prev" ? "left" : "right"]: 24,
        width: 52,
        height: 52,
        borderRadius: 999,
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.18)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.25 : visible ? 1 : 0,
        transition: "opacity 300ms ease",
        zIndex: 100,
      } as React.CSSProperties}
    >
      {dir === "prev" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
    </button>
  );
}

function ToolbarButton({
  children,
  onClick,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: "rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(8px)",
      }}
    >
      {children}
    </button>
  );
}

function NotesPanel({
  meta,
  index,
  total,
}: {
  meta: { objective: string; headline: string; emotionalGoal: string };
  index: number;
  total: number;
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        right: 20,
        maxWidth: 900,
        margin: "0 auto",
        padding: "20px 28px",
        background: "rgba(20,20,20,0.9)",
        color: "white",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        zIndex: 90,
        fontSize: 15,
        lineHeight: 1.5,
      }}
    >
      <div style={{ display: "flex", gap: 24, opacity: 0.55, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
        <span>Slide {index + 1} / {total}</span>
        <span>Emotional goal: {meta.emotionalGoal}</span>
      </div>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Objective</div>
      <div style={{ opacity: 0.85, marginBottom: 12 }}>{meta.objective}</div>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Headline</div>
      <div style={{ opacity: 0.85 }}>{meta.headline}</div>
    </div>
  );
}
