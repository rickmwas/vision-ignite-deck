import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { slides } from "@/components/deck/slideRegistry";

export const Route = createFileRoute("/deck/print")({
  head: () => ({
    meta: [{ title: "TotoAfya Digital — Pitch (Print)" }],
  }),
  component: PrintRoute,
});

function PrintRoute() {
  // Automatically trigger browser print dialog once components are loaded
  useEffect(() => {
    const t = setTimeout(() => {
      window.print();
    }, 1500); // 1.5s delay allows images to fully render
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "white" }}>
      {/* CSS style overrides for printing page boundaries */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          * {
            animation: none !important;
            transition: none !important;
            animation-delay: 0s !important;
            animation-duration: 0s !important;
          }
          body, html { 
            margin: 0 !important; 
            padding: 0 !important; 
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-slide { 
            page-break-after: always !important; 
            page-break-inside: avoid !important;
            break-after: page !important;
          }
        }
        @page {
          size: 1920px 1080px landscape;
          margin: 0 !important;
        }
      `}</style>

      {/* Floating Instructions Banner (Hidden on actual print) */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          background: "rgba(14, 26, 18, 0.95)",
          color: "white",
          padding: "16px 28px",
          borderRadius: 16,
          boxShadow: "0 20px 50px -10px rgba(0,0,0,0.5)",
          fontFamily: "Poppins, sans-serif",
          fontSize: 14,
          display: "flex",
          alignItems: "center",
          gap: 24,
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          width: "90%",
          maxWidth: 960,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#8BC34A", marginBottom: 4 }}>
            PDF Print Mode Active
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
            The print dialog has been triggered. If you closed it, click the print button. For the best result, select 
            <strong> Save as PDF</strong>, set Layout to <strong>Landscape</strong>, set Margins to <strong>None</strong>, 
            and enable <strong>Background graphics</strong>.
          </div>
        </div>
        <button
          onClick={() => window.print()}
          style={{
            background: "#1F7A3A",
            border: "none",
            color: "white",
            padding: "12px 24px",
            borderRadius: 8,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
            transition: "background 200ms",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#145A2A")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#1F7A3A")}
        >
          Open Print Dialog
        </button>
      </div>

      {/* Render all slides at exact presentation canvas size */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {slides.map(({ Component }, i) => (
          <div
            key={i}
            className="print-slide"
            style={{
              width: 1920,
              height: 1080,
              position: "relative",
              overflow: "hidden",
              backgroundColor: "white",
              pageBreakAfter: "always",
              breakAfter: "page",
            }}
          >
            <Component index={i} total={slides.length} />
          </div>
        ))}
      </div>
    </div>
  );
}
