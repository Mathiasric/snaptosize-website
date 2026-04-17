import SlideWrapper from "./SlideWrapper";

/* Wedding suite sizes diagram — shows each piece as labeled rectangle
   at correct relative scale. Pinterest 1000x1500, dark brand theme. */

interface Piece {
  name: string;
  sizeLabel: string;
  ratio: string;
  px: string;
  // aspect w/h used for rendering rectangle shape
  aspectW: number;
  aspectH: number;
  // display width in px (relative scale — seating chart is largest at 24x36)
  displayW: number;
  accent: "purple" | "teal" | "pink";
}

const PIECES: Piece[] = [
  // Seating chart 24x36 — 2:3 — biggest
  {
    name: "Seating chart",
    sizeLabel: "24×36",
    ratio: "3:4",
    px: "7200×10800",
    aspectW: 3,
    aspectH: 4,
    displayW: 210,
    accent: "teal",
  },
  // Welcome sign 18x24 — 3:4
  {
    name: "Welcome sign",
    sizeLabel: "18×24",
    ratio: "3:4",
    px: "5400×7200",
    aspectW: 3,
    aspectH: 4,
    displayW: 158,
    accent: "teal",
  },
  // Invitation 5x7 — 5:7
  {
    name: "Invitation",
    sizeLabel: "5×7",
    ratio: "5:7",
    px: "1500×2100",
    aspectW: 5,
    aspectH: 7,
    displayW: 110,
    accent: "purple",
  },
  // RSVP 4x6 — 2:3
  {
    name: "RSVP",
    sizeLabel: "4×6",
    ratio: "2:3",
    px: "1200×1800",
    aspectW: 2,
    aspectH: 3,
    displayW: 88,
    accent: "purple",
  },
  // Menu 4x9 — 4:9 (thin tall)
  {
    name: "Menu",
    sizeLabel: "4×9",
    ratio: "4:9",
    px: "1200×2700",
    aspectW: 4,
    aspectH: 9,
    displayW: 60,
    accent: "pink",
  },
];

const ACCENTS = {
  purple: {
    border: "rgba(167,139,250,0.45)",
    bg: "rgba(167,139,250,0.08)",
    text: "rgba(196,181,253,0.9)",
    glow: "rgba(167,139,250,0.15)",
  },
  teal: {
    border: "rgba(45,212,191,0.45)",
    bg: "rgba(45,212,191,0.08)",
    text: "rgba(94,234,212,0.9)",
    glow: "rgba(45,212,191,0.15)",
  },
  pink: {
    border: "rgba(244,182,203,0.4)",
    bg: "rgba(244,182,203,0.07)",
    text: "rgba(251,207,232,0.9)",
    glow: "rgba(244,182,203,0.15)",
  },
} as const;

function PieceRect({ piece }: { piece: Piece }) {
  const a = ACCENTS[piece.accent];
  const width = piece.displayW;
  const height = Math.round((piece.displayW * piece.aspectH) / piece.aspectW);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          width,
          height,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: a.border,
          borderRadius: 4,
          background: a.bg,
          boxShadow: `0 8px 32px ${a.glow}, 0 2px 8px rgba(0,0,0,0.4)`,
        }}
      >
        {/* Inner outline */}
        <div
          className="absolute"
          style={{
            inset: 6,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgba(255,255,255,0.06)",
            borderRadius: 2,
          }}
        />
        {/* Ratio badge top */}
        <span
          className="absolute font-mono"
          style={{
            top: -10,
            right: -10,
            borderRadius: 4,
            padding: "2px 7px",
            fontSize: 10,
            letterSpacing: "0.05em",
            background: a.bg,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: a.border,
            color: a.text,
          }}
        >
          {piece.ratio}
        </span>
        {/* Size label center */}
        <span
          className="z-10 font-mono font-bold"
          style={{
            fontSize: height < 120 ? 14 : 18,
            color: a.text,
          }}
        >
          {piece.sizeLabel}
        </span>
      </div>
      {/* Name + px below */}
      <span className="mt-3 text-sm font-semibold text-white/80">
        {piece.name}
      </span>
      <span className="mt-0.5 text-[10px] font-mono text-white/30">
        {piece.px}
      </span>
    </div>
  );
}

export default function WeddingSuiteSizes() {
  return (
    <SlideWrapper
      id="wedding-suite-sizes"
      ratio="pinterest"
      bgVariant="center"
      orbs={true}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-10">
        {/* Kicker */}
        <p className="text-[11px] font-mono tracking-[0.25em] text-purple-300/70 uppercase mb-3">
          Wedding Suite Reference
        </p>

        {/* Headline */}
        <h2 className="text-4xl font-bold text-white mb-2 text-center leading-tight">
          One suite. Every size.
        </h2>
        <p className="text-base text-white/50 mb-12 text-center max-w-[600px]">
          Relative scale at 300 DPI — invitations to seating charts
        </p>

        {/* Pieces at relative scale */}
        <div className="flex items-end justify-center gap-6 mb-10">
          {PIECES.map((p) => (
            <PieceRect key={p.name} piece={p} />
          ))}
        </div>

        {/* Ratio family legend */}
        <div className="flex items-center gap-5 mt-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{
                background: ACCENTS.purple.bg,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: ACCENTS.purple.border,
              }}
            />
            <span className="text-xs font-mono text-white/50">5:7 / 2:3</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{
                background: ACCENTS.teal.bg,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: ACCENTS.teal.border,
              }}
            />
            <span className="text-xs font-mono text-white/50">3:4 signage</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{
                background: ACCENTS.pink.bg,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: ACCENTS.pink.border,
              }}
            />
            <span className="text-xs font-mono text-white/50">4:9 menu</span>
          </div>
        </div>

        {/* Footer line */}
        <p className="text-white/25 text-sm mt-10 text-center">
          All sizes at 300 DPI · One upload, every ratio
        </p>
      </div>
    </SlideWrapper>
  );
}
