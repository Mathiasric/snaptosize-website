import SlideWrapper from "./SlideWrapper";

// Bold, scroll-stopping Pinterest pin
// Hero: "30+ sizes" big stat, then ratio packs with big size text, no px clutter

const packs = [
  {
    ratio: "2:3",
    label: "Most Common",
    color: "teal" as const,
    sizes: ["4×6\"", "6×9\"", "8×12\"", "10×15\"", "12×18\"", "16×24\"", "20×30\""],
  },
  {
    ratio: "3:4",
    label: "Classic Frames",
    color: "purple" as const,
    sizes: ["6×8\"", "9×12\"", "12×16\"", "15×20\"", "18×24\""],
  },
  {
    ratio: "4:5",
    label: "Traditional Art",
    color: "blue" as const,
    sizes: ["8×10\"", "12×15\"", "16×20\"", "20×25\"", "24×30\""],
  },
  {
    ratio: "ISO",
    label: "EU & UK Buyers",
    color: "green" as const,
    sizes: ["A5", "A4", "A3", "A2", "A1"],
  },
  {
    ratio: "Extra",
    label: "Bonus Sizes",
    color: "orange" as const,
    sizes: ["5×7\"", "8.5×11\"", "11×14\"", "11×17\"", "13×19\"", "20×24\""],
  },
];

const C = {
  teal:   { bg: "bg-teal-500/10",   border: "border-teal-500/25",   badge: "bg-teal-400 text-black",    text: "text-teal-300",   dot: "bg-teal-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/25", badge: "bg-purple-400 text-black",  text: "text-purple-300", dot: "bg-purple-400" },
  blue:   { bg: "bg-blue-500/10",   border: "border-blue-500/25",   badge: "bg-blue-400 text-black",    text: "text-blue-300",   dot: "bg-blue-400" },
  green:  { bg: "bg-emerald-500/10",border: "border-emerald-500/25",badge: "bg-emerald-400 text-black", text: "text-emerald-300",dot: "bg-emerald-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/25", badge: "bg-orange-400 text-black",  text: "text-orange-300", dot: "bg-orange-400" },
};

export default function W15GalleryWall() {
  return (
    <SlideWrapper id="w15-p01-gallery-wall" ratio="pinterest" bgVariant="center" orbs={true}>
      <div className="flex-1 flex flex-col px-8 pt-8 pb-2">

        {/* Hero stat */}
        <div className="text-center mb-6">
          <p className="text-sm text-purple-400/70 uppercase tracking-[0.2em] mb-2">Etsy Seller Guide</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-[100px] font-black leading-none bg-gradient-to-br from-teal-300 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              28
            </span>
          </div>
          <p className="text-3xl font-bold text-white">Print Sizes to Offer</p>
          <p className="text-base text-white/45 mt-1">across 5 ratio packs · all 300 DPI · Etsy-ready</p>
        </div>

        {/* Ratio packs */}
        <div className="flex flex-col flex-1 gap-2.5">
          {packs.map((pack) => {
            const c = C[pack.color];
            return (
              <div key={pack.ratio} className={`flex-1 rounded-2xl border px-5 py-3 flex flex-col justify-center ${c.bg} ${c.border}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-black tracking-wider uppercase rounded-full px-2.5 py-1 ${c.badge}`}>
                    {pack.ratio}
                  </span>
                  <span className="text-white/50 text-sm">{pack.label}</span>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {pack.sizes.map((s) => (
                    <span key={s} className={`text-[17px] font-bold ${c.text}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-4 text-center">
          <div className="inline-block bg-teal-400 rounded-full px-7 py-3">
            <span className="text-black font-bold text-base">
              1 upload → all 28 sizes · app.snaptosize.com
            </span>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
