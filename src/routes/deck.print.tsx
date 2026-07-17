import { createFileRoute } from "@tanstack/react-router";
import { slides } from "@/components/deck/slideRegistry";

export const Route = createFileRoute("/deck/print")({
  head: () => ({
    meta: [{ title: "TotoAfya Digital — Pitch (Print)" }],
  }),
  component: PrintRoute,
});

function PrintRoute() {
  return (
    <div style={{ background: "white" }}>
      {slides.map(({ Component }, i) => (
        <div
          key={i}
          className="print-slide"
          style={{
            width: 1920,
            height: 1080,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Component index={i} total={slides.length} />
        </div>
      ))}
    </div>
  );
}
