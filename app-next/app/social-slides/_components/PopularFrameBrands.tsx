import SlideWrapper from "./SlideWrapper";

interface Brand {
  name: string;
  region: string;
  sizes: string[];
  accent: string;
}

const brands: Brand[] = [
  {
    name: "IKEA Ribba",
    region: "METRIC · GLOBAL",
    sizes: ["13×18 cm", "21×30 cm", "30×40 cm", "40×50 cm", "50×70 cm", "61×91 cm"],
    accent: "rgba(167,139,250,",
  },
  {
    name: "Michaels Belmont",
    region: "INCH · US",
    sizes: ['5×7"', '8×10"', '11×14"', '16×20"', '18×24"', '24×36"'],
    accent: "rgba(45,212,191,",
  },
  {
    name: "Target Room Essentials",
    region: "INCH · US",
    sizes: ['4×6"', '5×7"', '8×10"', '11×14"', '16×20"', '18×24"'],
    accent: "rgba(212,165,116,",
  },
];

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div
      className="flex-1 flex flex-col rounded-xl p-6"
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: `${brand.accent}0.25)`,
        background: `linear-gradient(180deg, ${brand.accent}0.04) 0%, rgba(255,255,255,0.01) 100%)`,
        boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
      }}
    >
      <div className="mb-5">
        <p
          className="font-mono mb-2"
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            color: `${brand.accent}0.7)`,
          }}
        >
          {brand.region}
        </p>
        <h3 className="text-xl font-bold text-white leading-tight">
          {brand.name}
        </h3>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {brand.sizes.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 font-mono"
            style={{ fontSize: 14 }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: 1,
                background: `${brand.accent}0.6)`,
              }}
            />
            <span style={{ color: "rgba(255,255,255,0.78)" }}>{s}</span>
          </div>
        ))}
      </div>

      <div
        className="mt-5 pt-4 font-mono text-[10px] tracking-widest"
        style={{
          borderTop: `1px solid ${brand.accent}0.15)`,
          color: `${brand.accent}0.55)`,
        }}
      >
        {brand.sizes.length} STOCK SIZES
      </div>
    </div>
  );
}

export default function PopularFrameBrands() {
  return (
    <SlideWrapper
      id="frame-brands-visual"
      ratio="pinterest"
      bgVariant="center"
      orbs
    >
      <div className="flex-1 flex flex-col px-10 pt-20">
        <p className="text-xs tracking-[0.25em] text-white/40 mb-4 font-mono text-center">
          WHERE BUYERS BUY FRAMES
        </p>
        <h2 className="text-4xl font-bold text-white mb-3 text-center">
          Popular Frame Brands
        </h2>
        <p className="text-white/50 text-base text-center max-w-md mx-auto mb-12 leading-relaxed">
          Stock sizes from the three retailers that cover 90% of buyer frames.
        </p>

        <div className="flex gap-4 px-1">
          {brands.map((b) => (
            <BrandCard key={b.name} brand={b} />
          ))}
        </div>

        <p className="text-white/30 text-xs mt-10 font-mono tracking-widest text-center">
          MATCH YOUR PRINT RATIO BEFORE YOU BUY
        </p>
      </div>
    </SlideWrapper>
  );
}
