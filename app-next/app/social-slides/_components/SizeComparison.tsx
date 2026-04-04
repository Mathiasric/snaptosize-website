import SlideWrapper from "./SlideWrapper";

interface SizeComparisonProps {
  ratio: "pinterest" | "instagram";
}

interface FrameData {
  w: number;
  h: number;
  label: string;
  px: string;
  badge: string;
  hl?: boolean;
}

const frames: FrameData[] = [
  { w: 4, h: 6, label: "4×6", px: "1200×1800", badge: "2:3" },
  { w: 5, h: 7, label: "5×7", px: "1500×2100", badge: "Extras" },
  { w: 8, h: 10, label: "8×10", px: "2400×3000", badge: "4:5", hl: true },
  { w: 11, h: 14, label: "11×14", px: "3300×4200", badge: "Extras" },
  { w: 12, h: 16, label: "12×16", px: "3600×4800", badge: "3:4" },
];

function Frame({
  frame,
  scale,
}: {
  frame: FrameData;
  scale: number;
}) {
  const widthPx = Math.round(frame.w * scale);
  const heightPx = Math.round(frame.h * scale);
  const isHighlighted = frame.hl;

  return (
    <div className="flex flex-col items-center">
      {/* Frame rectangle */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          width: widthPx,
          height: heightPx,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: isHighlighted
            ? "rgba(45,212,191,0.4)"
            : "rgba(255,255,255,0.15)",
          borderRadius: 3,
          background: isHighlighted
            ? "rgba(45,212,191,0.04)"
            : "rgba(255,255,255,0.02)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Inner border */}
        <div
          className="absolute"
          style={{
            inset: 5,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: isHighlighted
              ? "rgba(45,212,191,0.1)"
              : "rgba(255,255,255,0.06)",
            borderRadius: 2,
          }}
        />

        {/* Size label */}
        <span
          className="z-10 font-mono font-bold"
          style={{
            fontSize: heightPx < 80 ? 13 : heightPx < 110 ? 15 : 18,
            color: isHighlighted
              ? "rgba(45,212,191,0.7)"
              : "rgba(255,255,255,0.5)",
          }}
        >
          {frame.label}
        </span>

        {/* Pixel dimensions */}
        <span
          className="z-10 font-mono mt-0.5"
          style={{
            fontSize: 10,
            color: isHighlighted
              ? "rgba(45,212,191,0.35)"
              : "rgba(255,255,255,0.2)",
          }}
        >
          {frame.px}
        </span>

        {/* Badge */}
        <span
          className="absolute font-mono"
          style={{
            top: -9,
            right: -9,
            borderRadius: 4,
            padding: "2px 7px",
            fontSize: 9,
            letterSpacing: "0.05em",
            background: isHighlighted
              ? "rgba(45,212,191,0.12)"
              : "rgba(255,255,255,0.06)",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: isHighlighted
              ? "rgba(45,212,191,0.3)"
              : "rgba(255,255,255,0.15)",
            color: isHighlighted
              ? "rgba(45,212,191,0.7)"
              : "rgba(255,255,255,0.4)",
          }}
        >
          {frame.badge}
        </span>
      </div>

      {/* Label below frame */}
      <span className="mt-2.5 text-xs text-white/40 font-medium">
        {frame.label}
      </span>
    </div>
  );
}

export default function SizeComparison({ ratio }: SizeComparisonProps) {
  const isPinterest = ratio === "pinterest";
  const scale = isPinterest ? 10 : 8;

  return (
    <SlideWrapper
      id={`size-comparison-${ratio}`}
      ratio={ratio}
      bgVariant="center"
      orbs={false}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-10">
        {/* Title */}
        <p className="text-sm tracking-widest text-white/40 mb-4">
          PRINT SIZE COMPARISON
        </p>

        {/* Headline */}
        <h2
          className={`${isPinterest ? "text-4xl" : "text-3xl"} font-bold text-white mb-12`}
        >
          How 8×10 Compares
        </h2>

        {/* Frames */}
        <div
          className={`flex ${isPinterest ? "items-end gap-6" : "items-end gap-4"}`}
        >
          {frames.map((frame) => (
            <Frame key={frame.label} frame={frame} scale={scale} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-white/25 text-sm mt-10 text-center">
          All sizes at 300 DPI · 4:5 aspect ratio · Part of the 4:5 ratio pack
        </p>
      </div>
    </SlideWrapper>
  );
}
