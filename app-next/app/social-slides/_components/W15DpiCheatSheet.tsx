import SlideWrapper from "./SlideWrapper";

// Bold 300 DPI pin — hero formula first, then key sizes big and readable

const topSizes = [
  { s: "4×6\"",   px: "1200×1800", ratio: "2:3", color: "teal" as const },
  { s: "8×10\"",  px: "2400×3000", ratio: "4:5", color: "blue" as const },
  { s: "8×12\"",  px: "2400×3600", ratio: "2:3", color: "teal" as const },
  { s: "12×16\"", px: "3600×4800", ratio: "3:4", color: "purple" as const },
  { s: "16×20\"", px: "4800×6000", ratio: "4:5", color: "blue" as const },
  { s: "16×24\"", px: "4800×7200", ratio: "2:3", color: "teal" as const },
  { s: "18×24\"", px: "5400×7200", ratio: "3:4", color: "purple" as const },
  { s: "20×30\"", px: "6000×9000", ratio: "2:3", color: "teal" as const },
  { s: "A4",      px: "2480×3508", ratio: "ISO",  color: "green" as const },
  { s: "A3",      px: "3508×4961", ratio: "ISO",  color: "green" as const },
];

const C = {
  teal:   { badge: "bg-teal-500/15 text-teal-300 border border-teal-500/25",   px: "text-teal-300/70" },
  purple: { badge: "bg-purple-500/15 text-purple-300 border border-purple-500/25", px: "text-purple-300/70" },
  blue:   { badge: "bg-blue-500/15 text-blue-300 border border-blue-500/25",   px: "text-blue-300/70" },
  green:  { badge: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25", px: "text-emerald-300/70" },
  orange: { badge: "bg-orange-500/15 text-orange-300 border border-orange-500/25", px: "text-orange-300/70" },
};

export default function W15DpiCheatSheet() {
  return (
    <SlideWrapper id="w15-p03-300dpi-cheat-sheet" ratio="pinterest" bgVariant="center">
      <div className="flex-1 flex flex-col px-8 pt-8 pb-2">

        {/* Hero */}
        <div className="text-center mb-6">
          <p className="text-sm text-teal-400/60 uppercase tracking-[0.2em] mb-2">Etsy Print Sizes</p>
          <h2 className="text-[80px] font-black leading-none text-white">
            300
            <span className="bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent"> DPI</span>
          </h2>
          <p className="text-2xl font-bold text-white mt-1">Cheat Sheet</p>

          {/* Formula box */}
          <div className="mt-4 bg-white/6 border border-white/10 rounded-2xl px-6 py-4 inline-block">
            <p className="text-white/50 text-sm mb-1">The formula:</p>
            <p className="text-xl font-bold text-white">
              inches × 300 = <span className="text-teal-300">pixels needed</span>
            </p>
            <p className="text-white/40 text-sm mt-1">Example: 8×10&quot; → 2400×3000 px</p>
          </div>
        </div>

        {/* Size grid — big and readable */}
        <div className="flex-1 flex flex-col gap-2">
          {topSizes.map((item) => {
            const c = C[item.color];
            return (
              <div key={item.s} className="flex-1 flex items-center justify-between bg-white/[0.04] rounded-xl px-5">
                <span className="text-white text-xl font-bold">{item.s}</span>
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-base font-semibold ${c.px}`}>{item.px} px</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{item.ratio}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-4 text-center">
          <div className="inline-block bg-teal-400 rounded-full px-7 py-3">
            <span className="text-black font-bold text-base">
              SnapToSize handles all of this · 1 upload
            </span>
          </div>
          <p className="text-white/25 text-xs mt-2">app.snaptosize.com</p>
        </div>

      </div>
    </SlideWrapper>
  );
}
