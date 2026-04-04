import SlideWrapper from "./SlideWrapper";

interface PackSpotlightProps {
  ratio: "pinterest" | "instagram";
}

const koi = {
  "2x3": "/assets/Composition_Pictures/Koi_2x3_12x18.jpg",
  "3x4": "/assets/Composition_Pictures/Koi_3x4_18x24.jpg",
  "4x5": "/assets/Composition_Pictures/Koi_4x5_15x20.jpg",
  iso: "/assets/Composition_Pictures/Koi_a2.jpg",
  common: "/assets/Composition_Pictures/Koi_common_11x14.jpg",
};

const CARDS = [
  { src: koi["2x3"], label: "2:3", sublabel: "7 sizes", primary: false },
  { src: koi["3x4"], label: "3:4", sublabel: "5 sizes", primary: false },
  { src: koi["4x5"], label: "4:5", sublabel: "5 sizes", primary: true },
  { src: koi.iso, label: "ISO", sublabel: "5 sizes", primary: false },
  { src: koi.common, label: "Extras", sublabel: "6 sizes", primary: false },
];

const ROTATIONS = [-6, -3, 0, 3, 6];

/* Card positions and sizes per ratio — hand-tuned for each canvas */
const LAYOUT = {
  pinterest: {
    // 1000×1500 — tall canvas, cards can be larger
    cards: [
      { w: 140, h: 210, top: 50, left: 60 },
      { w: 140, h: 187, top: 70, left: 220 },
      { w: 160, h: 200, top: 15, left: 390 },   // primary — larger
      { w: 140, h: 198, top: 55, left: 575 },
      { w: 130, h: 165, top: 80, left: 730 },
    ],
    cardsAreaTop: "28%",
    cardsAreaHeight: 320,
  },
  instagram: {
    // 1080×1350 — squarer, tighter spacing
    cards: [
      { w: 125, h: 188, top: 40, left: 80 },
      { w: 125, h: 167, top: 55, left: 240 },
      { w: 145, h: 181, top: 10, left: 420 },    // primary — larger
      { w: 125, h: 177, top: 45, left: 610 },
      { w: 118, h: 150, top: 65, left: 770 },
    ],
    cardsAreaTop: "30%",
    cardsAreaHeight: 280,
  },
} as const;

export default function PackSpotlight({ ratio }: PackSpotlightProps) {
  const layout = LAYOUT[ratio];
  const isPinterest = ratio === "pinterest";

  return (
    <SlideWrapper id={`pack-spotlight-${ratio}`} ratio={ratio} bgVariant="center">
      {/* ── Header section ── */}
      <div
        className="flex flex-col items-center text-center"
        style={{ paddingTop: isPinterest ? 100 : 70 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
          <span
            className="font-bold tracking-wide"
            style={{ color: "#34d399", fontSize: isPinterest ? 18 : 16 }}
          >
            5 Ratio Packs
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-bold font-display leading-tight mb-4"
          style={{ fontSize: isPinterest ? 52 : 46 }}
        >
          <span className="text-white block">Same Artwork.</span>
          <span
            className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent block"
          >
            Every Ratio.
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-white/45"
          style={{ fontSize: isPinterest ? 22 : 20 }}
        >
          No cropping. Full composition preserved.
        </p>
      </div>

      {/* ── Cards section ── */}
      <div
        className="relative mx-auto"
        style={{
          width: isPinterest ? 920 : 980,
          height: layout.cardsAreaHeight,
          marginTop: isPinterest ? 60 : 45,
        }}
      >
        {CARDS.map((card, i) => {
          const pos = layout.cards[i];
          const rot = ROTATIONS[i];

          return (
            <div
              key={card.label}
              className={`absolute rounded-xl overflow-hidden shadow-2xl shadow-black/50 ${
                card.primary
                  ? "border-2 border-purple-500/40"
                  : "border border-white/[0.08]"
              }`}
              style={{
                width: pos.w,
                height: pos.h,
                top: pos.top,
                left: pos.left,
                transform: `rotate(${rot}deg)`,
                zIndex: card.primary ? 10 : 5,
              }}
            >
              <img
                src={card.src}
                alt={card.label}
                className="w-full h-full object-cover"
              />

              {/* Bottom gradient overlay with label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-2.5">
                <div
                  className={`font-bold font-mono leading-none ${
                    card.primary ? "text-purple-300" : "text-white/80"
                  }`}
                  style={{ fontSize: card.primary ? 18 : 15 }}
                >
                  {card.label}
                </div>
                <div className="text-white/40 text-xs font-mono mt-0.5">
                  {card.sublabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom section ── */}
      <div
        className="flex flex-col items-center text-center mt-auto"
        style={{ paddingBottom: isPinterest ? 80 : 55 }}
      >
        <p
          className="text-white/55 font-medium"
          style={{ fontSize: isPinterest ? 22 : 20 }}
        >
          One upload &rarr; up to 70 print-ready files
        </p>
        <p
          className="text-white/35 mt-2"
          style={{ fontSize: isPinterest ? 17 : 15 }}
        >
          300 DPI &middot; Portrait + Landscape
        </p>
      </div>
    </SlideWrapper>
  );
}
