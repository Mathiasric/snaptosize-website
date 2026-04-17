import SlideWrapper from "./SlideWrapper";

interface Pairing {
  frame: { w: number; h: number; label: string };
  print: { w: number; h: number; label: string };
  mat: string;
  hl?: boolean;
}

const pairings: Pairing[] = [
  {
    frame: { w: 8, h: 10, label: "8×10 FRAME" },
    print: { w: 5, h: 7, label: "5×7 PRINT" },
    mat: '1.5" MAT',
  },
  {
    frame: { w: 11, h: 14, label: "11×14 FRAME" },
    print: { w: 8, h: 10, label: "8×10 PRINT" },
    mat: '2" MAT',
    hl: true,
  },
  {
    frame: { w: 16, h: 20, label: "16×20 FRAME" },
    print: { w: 11, h: 14, label: "11×14 PRINT" },
    mat: '2.5" MAT',
  },
];

function NestedFrame({ pairing, scale }: { pairing: Pairing; scale: number }) {
  const fw = Math.round(pairing.frame.w * scale);
  const fh = Math.round(pairing.frame.h * scale);
  const pw = Math.round(pairing.print.w * scale);
  const ph = Math.round(pairing.print.h * scale);
  const accent = pairing.hl ? "rgba(45,212,191," : "rgba(167,139,250,";

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: fw,
          height: fh,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: `${accent}0.45)`,
          borderRadius: 4,
          background: "rgba(255,255,255,0.015)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
        }}
      >
        {/* Frame corner ticks */}
        {[
          { top: -10, left: -10, bt: true, bl: true },
          { top: -10, right: -10, bt: true, br: true },
          { bottom: -10, left: -10, bb: true, bl: true },
          { bottom: -10, right: -10, bb: true, br: true },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              ...pos,
              width: 14,
              height: 14,
              borderTop: pos.bt ? `1px solid ${accent}0.5)` : undefined,
              borderBottom: pos.bb ? `1px solid ${accent}0.5)` : undefined,
              borderLeft: pos.bl ? `1px solid ${accent}0.5)` : undefined,
              borderRight: pos.br ? `1px solid ${accent}0.5)` : undefined,
            }}
          />
        ))}

        {/* Mat (dashed) */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: pw + 20,
            height: ph + 20,
            border: `1px dashed ${accent}0.35)`,
            background: "rgba(255,255,255,0.012)",
            borderRadius: 2,
          }}
        />

        {/* Print */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: pw,
            height: ph,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "rgba(212,165,116,0.55)",
            background: "rgba(212,165,116,0.06)",
            borderRadius: 2,
          }}
        >
          <span
            className="font-mono font-bold"
            style={{
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "rgba(212,165,116,0.75)",
            }}
          >
            {pairing.print.label}
          </span>
        </div>

        {/* Frame label top */}
        <span
          className="absolute font-mono"
          style={{
            top: 8,
            left: 10,
            fontSize: 9,
            letterSpacing: "0.18em",
            color: `${accent}0.7)`,
          }}
        >
          {pairing.frame.label}
        </span>

        {/* Mat label bottom */}
        <span
          className="absolute font-mono"
          style={{
            bottom: 8,
            right: 10,
            fontSize: 9,
            letterSpacing: "0.15em",
            color: `${accent}0.55)`,
          }}
        >
          {pairing.mat}
        </span>
      </div>
    </div>
  );
}

export default function FrameMatrixVisual() {
  return (
    <SlideWrapper
      id="frame-matrix-visual"
      ratio="pinterest"
      bgVariant="center"
      orbs
    >
      <div className="flex-1 flex flex-col items-center px-10 pt-20">
        <p className="text-xs tracking-[0.25em] text-white/40 mb-4 font-mono">
          PRINT-TO-FRAME PAIRINGS
        </p>
        <h2 className="text-4xl font-bold text-white mb-3 text-center">
          Frame + Mat Math
        </h2>
        <p className="text-white/50 text-base text-center max-w-sm mb-14 leading-relaxed">
          Every print has two frame options: edge-to-edge, or the next size up with a mat.
        </p>

        <div className="flex flex-col items-center gap-14">
          {pairings.map((p, i) => (
            <NestedFrame key={i} pairing={p} scale={22} />
          ))}
        </div>

        <p className="text-white/30 text-xs mt-12 font-mono tracking-widest">
          STOCK SIZES · IKEA · TARGET · MICHAELS
        </p>
      </div>
    </SlideWrapper>
  );
}
