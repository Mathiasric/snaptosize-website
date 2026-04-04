import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Hunt — SnapToSize",
  robots: { index: false, follow: false },
};

/* ─────────────────────────────────────────────
   Product Hunt Showcase — 5 standalone slides
   Each is exactly 1270×760 for PH gallery.
   Designed for THUMBNAIL readability (~300px).
   Screenshot individually with Playwright.
   ───────────────────────────────────────────── */

const koi = {
  "2x3": "/assets/Composition_Pictures/Koi_2x3_12x18.jpg",
  "3x4": "/assets/Composition_Pictures/Koi_3x4_18x24.jpg",
  "4x5": "/assets/Composition_Pictures/Koi_4x5_15x20.jpg",
  iso: "/assets/Composition_Pictures/Koi_a2.jpg",
  common: "/assets/Composition_Pictures/Koi_common_11x14.jpg",
};

const poppies = {
  original: "/assets/Composition_Pictures/poppies_orginal_2x3.jpg",
  badCrop: "/assets/Composition_Pictures/poppies_BAD_crop_2700x3600.png",
};

/* ═══════════ SLIDE 1 — HERO (THE HOOK) ═══════════ */
function SlideHero() {
  return (
    <section
      id="slide-1"
      className="w-[1270px] h-[760px] relative overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #0B0B12 0%, #110E1F 40%, #0F0D1A 100%)" }}
    >
      {/* Glow orbs */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 right-10 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex items-center w-full px-20 gap-16">
        {/* Left — Copy */}
        <div className="flex-1 min-w-0">
          {/* Social proof badge — large enough to read */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-lg font-semibold text-emerald-300">18,000+ packs generated</span>
          </div>

          <h1 className="text-[4.5rem] leading-[1.05] font-bold tracking-tight text-white mb-6 font-display">
            1 Image In.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              70 Files Out.
            </span>
          </h1>

          <p className="text-2xl text-white/55 leading-relaxed max-w-lg">
            Every Etsy print size. 300 DPI.
            <br />
            No cropping. <span className="text-white/80 font-semibold">60 seconds.</span>
          </p>
        </div>

        {/* Right — Fanned artwork gallery */}
        <div className="relative w-[480px] h-[520px] flex-shrink-0">
          {/* Card 1 — 2:3 */}
          <div
            className="absolute rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08]"
            style={{ width: 200, height: 300, top: 60, left: 0, transform: "rotate(-8deg)", zIndex: 1 }}
          >
            <img src={koi["2x3"]} alt="2:3 ratio" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <span className="text-sm font-mono font-bold text-white/90">2:3</span>
            </div>
          </div>

          {/* Card 2 — 4:5 (center, hero) */}
          <div
            className="absolute rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 border-2 border-purple-500/40"
            style={{ width: 230, height: 288, top: 20, left: 140, transform: "rotate(0deg)", zIndex: 3 }}
          >
            <img src={koi["4x5"]} alt="4:5 ratio" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <span className="text-sm font-mono font-bold text-white">4:5 · 8×10</span>
            </div>
          </div>

          {/* Card 3 — 3:4 */}
          <div
            className="absolute rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08]"
            style={{ width: 190, height: 253, top: 90, left: 310, transform: "rotate(6deg)", zIndex: 2 }}
          >
            <img src={koi["3x4"]} alt="3:4 ratio" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <span className="text-sm font-mono font-bold text-white/90">3:4</span>
            </div>
          </div>

          {/* Card 4 — ISO (bottom left) */}
          <div
            className="absolute rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08]"
            style={{ width: 170, height: 240, top: 300, left: 30, transform: "rotate(-3deg)", zIndex: 2 }}
          >
            <img src={koi.iso} alt="ISO A2" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <span className="text-sm font-mono font-bold text-white/90">A2</span>
            </div>
          </div>

          {/* Card 5 — Common (bottom right) */}
          <div
            className="absolute rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08]"
            style={{ width: 175, height: 222, top: 320, left: 230, transform: "rotate(4deg)", zIndex: 2 }}
          >
            <img src={koi.common} alt="11×14" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <span className="text-sm font-mono font-bold text-white/90">11×14</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ SLIDE 2 — BEFORE / AFTER ═══════════ */
function SlideBeforeAfter() {
  return (
    <section
      id="slide-2"
      className="w-[1270px] h-[760px] relative overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #0B0B12 0%, #0F0D1A 100%)" }}
    >
      {/* Divider */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent z-10" />

      <div className="relative z-10 flex w-full h-full">
        {/* LEFT — Before */}
        <div className="flex-1 flex flex-col items-center justify-center px-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/15 border border-red-500/30 mb-6">
            <span className="text-red-400 text-xl font-bold">BEFORE</span>
          </div>
          <h2 className="text-4xl font-bold text-white/90 mb-8 font-display text-center">
            Manual Resizing
          </h2>

          {/* Cropped image */}
          <div className="relative mb-8">
            <div className="rounded-xl overflow-hidden border-2 border-red-500/40 w-[260px] h-[340px] relative">
              <img src={poppies.badCrop} alt="Cropped artwork" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-red-950/30">
                <svg width="100" height="100" viewBox="0 0 80 80" fill="none">
                  <line x1="15" y1="15" x2="65" y2="65" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
                  <line x1="65" y1="15" x2="15" y2="65" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Pain points — large text */}
          <div className="space-y-4">
            {[
              "1–3 hours per listing",
              "Cropping ruins composition",
              "Wrong sizes = refunds",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.6" />
                  <line x1="5" y1="5" x2="11" y2="11" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="11" y1="5" x2="5" y2="11" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-xl text-white/60">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — After */}
        <div className="flex-1 flex flex-col items-center justify-center px-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 text-xl font-bold">AFTER</span>
          </div>
          <h2 className="text-4xl font-bold text-white/90 mb-8 font-display text-center">
            One Click. Done.
          </h2>

          {/* Multi-ratio fan — POPPIES for visual variety */}
          <div className="relative w-[400px] h-[300px] mb-8">
            {[
              { src: poppies.original, w: 110, h: 165, top: 30, left: 0, rot: -6, label: "2:3" },
              { src: poppies.original, w: 110, h: 147, top: 40, left: 85, rot: -2, label: "3:4" },
              { src: poppies.original, w: 130, h: 163, top: 10, left: 165, rot: 0, label: "4:5" },
              { src: poppies.original, w: 110, h: 156, top: 35, left: 270, rot: 3, label: "A4" },
              { src: poppies.original, w: 100, h: 127, top: 50, left: 345, rot: 6, label: "11×14" },
            ].map((c) => (
              <div
                key={c.label}
                className="absolute rounded-lg overflow-hidden shadow-xl shadow-black/40 border border-emerald-500/25"
                style={{ width: c.w, height: c.h, top: c.top, left: c.left, transform: `rotate(${c.rot}deg)` }}
              >
                <img src={c.src} alt={c.label} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1">
                  <span className="text-xs font-mono font-bold text-emerald-300">{c.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits — large text */}
          <div className="space-y-4">
            {[
              "70 files in 60 seconds",
              "Composition preserved",
              "300 DPI, Etsy-ready ZIPs",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#22C55E" strokeWidth="1.5" strokeOpacity="0.6" />
                  <path d="M5 8l2 2 4-4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xl text-white/75">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-900/40">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ SLIDE 3 — HOW IT WORKS ═══════════ */
function SlideHowItWorks() {
  return (
    <section
      id="slide-3"
      className="w-[1270px] h-[760px] relative overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0B0B12 0%, #110E1F 50%, #0B0B12 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
      />

      <h2 className="relative z-10 text-5xl font-bold text-white mb-16 font-display text-center">
        How It Works
      </h2>

      <div className="relative z-10 flex items-start justify-center gap-6">
        {/* Step 1 — Upload */}
        <div className="flex flex-col items-center w-[320px]">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/30 to-purple-600/20 border border-violet-500/30 flex items-center justify-center mb-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <div className="text-sm font-mono text-purple-400/70 mb-2">STEP 1</div>
          <h3 className="text-2xl font-bold text-white mb-2">Upload</h3>
          <p className="text-lg text-white/45 text-center">Drop your artwork — any size, any format</p>
          <div className="mt-5 rounded-xl overflow-hidden border border-white/10 w-[140px] h-[190px] shadow-lg">
            <img src={koi["4x5"]} alt="Upload" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center pt-32">
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
            <path d="M0 10h42m0 0l-6-6m6 6l-6 6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </svg>
        </div>

        {/* Step 2 — Pick packs */}
        <div className="flex flex-col items-center w-[320px]">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/30 to-purple-600/20 border border-violet-500/30 flex items-center justify-center mb-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <div className="text-sm font-mono text-purple-400/70 mb-2">STEP 2</div>
          <h3 className="text-2xl font-bold text-white mb-2">Pick Packs</h3>
          <p className="text-lg text-white/45 text-center">Choose ratio groups — 2:3, 3:4, 4:5, ISO, Common</p>
          <div className="mt-5 flex flex-wrap gap-2 justify-center max-w-[260px]">
            {["2:3 Ratio", "3:4 Ratio", "4:5 Ratio", "ISO A-Series", "Common"].map((p, i) => (
              <div
                key={p}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  i < 3
                    ? "bg-purple-500/20 border border-purple-500/30 text-purple-300"
                    : "bg-white/5 border border-white/10 text-white/50"
                }`}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center pt-32">
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
            <path d="M0 10h42m0 0l-6-6m6 6l-6 6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </svg>
        </div>

        {/* Step 3 — Download */}
        <div className="flex flex-col items-center w-[320px]">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-teal-600/20 border border-emerald-500/30 flex items-center justify-center mb-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="text-sm font-mono text-emerald-400/70 mb-2">STEP 3</div>
          <h3 className="text-2xl font-bold text-white mb-2">Download ZIPs</h3>
          <p className="text-lg text-white/45 text-center">70 files, organized by ratio, ready for Etsy</p>
          <div className="mt-5 space-y-2">
            {["2x3_ratio.zip", "3x4_ratio.zip", "4x5_ratio.zip"].map((f) => (
              <div key={f} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="1" width="12" height="14" rx="2" stroke="#2DD4BF" strokeWidth="1.2" />
                  <path d="M6 4h4M6 7h4" stroke="#2DD4BF" strokeWidth="1" />
                </svg>
                <span className="text-sm font-mono text-emerald-300/80">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ SLIDE 4 — RATIO SHOWCASE ═══════════ */
function SlideRatios() {
  const ratios = [
    { name: "2:3", sizes: "4×6 → 20×30", count: "7 sizes", src: koi["2x3"], w: 155, h: 232 },
    { name: "3:4", sizes: "6×8 → 18×24", count: "5 sizes", src: koi["3x4"], w: 165, h: 220 },
    { name: "4:5", sizes: "8×10 → 24×30", count: "5 sizes", src: koi["4x5"], w: 180, h: 225, primary: true },
    { name: "ISO", sizes: "A5 → A1", count: "5 sizes", src: koi.iso, w: 155, h: 219 },
    { name: "Common", sizes: "5×7 → 20×24", count: "6 sizes", src: koi.common, w: 150, h: 190 },
  ];

  return (
    <section
      id="slide-4"
      className="w-[1270px] h-[760px] relative overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0B0B12 0%, #110E1F 50%, #0B0B12 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-3 font-display">
          Same artwork. Every ratio.{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            No cropping.
          </span>
        </h2>
        <p className="text-xl text-white/40">
          30+ sizes across 5 ratio packs — composition perfectly preserved
        </p>
      </div>

      {/* Ratio cards */}
      <div className="relative z-10 flex items-end justify-center gap-6">
        {ratios.map((r) => (
          <div key={r.name} className="flex flex-col items-center">
            <div
              className={`rounded-xl overflow-hidden shadow-2xl shadow-black/40 ${
                r.primary ? "border-2 border-purple-500/50 -translate-y-3" : "border border-white/[0.08]"
              }`}
              style={{ width: r.w, height: r.primary ? 240 : 215 }}
            >
              <img src={r.src} alt={r.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <div className={`text-xl font-bold ${r.primary ? "text-white" : "text-white/70"}`}>
                {r.name}
              </div>
              <div className="text-sm text-white/35 font-mono">{r.sizes}</div>
              <div className="text-sm text-purple-400/60 mt-0.5 font-semibold">{r.count}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════ SLIDE 5 — PRICING + PH EXCLUSIVE ═══════════ */
function SlidePricing() {
  return (
    <section
      id="slide-5"
      className="w-[1270px] h-[760px] relative overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0B0B12 0%, #0F0D1A 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* PH exclusive badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 mb-6">
          <span className="text-orange-400 text-lg font-bold">Product Hunt Exclusive</span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-3 font-display text-center">
          30 Days of Pro — Free
        </h2>
        <p className="text-xl text-white/40 mb-12 text-center">No credit card. Cancel anytime.</p>

        <div className="flex gap-8 items-stretch">
          {/* Free plan */}
          <div className="w-[340px] rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col">
            <div className="text-lg text-white/40 uppercase tracking-wider mb-3 font-bold">Free</div>
            <div className="text-5xl font-bold text-white mb-1 font-display">$0</div>
            <div className="text-base text-white/35 mb-8">Forever free</div>

            <div className="space-y-4 flex-1">
              {[
                { text: "5 Quick Exports / day", ok: true },
                { text: "2 Pack downloads / day", ok: true },
                { text: "All 30+ print sizes", ok: true },
                { text: "300 DPI output", ok: true },
                { text: "Watermark on outputs", ok: false },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  {f.ok ? (
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8l3 3 5-5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="3" fill="#EF4444" fillOpacity="0.4" />
                    </svg>
                  )}
                  <span className={`text-base ${f.ok ? "text-white/60" : "text-white/35"}`}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro plan */}
          <div className="w-[340px] rounded-2xl border-2 border-purple-500/40 bg-gradient-to-b from-purple-500/[0.08] to-transparent p-8 flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-bold shadow-lg shadow-purple-900/40">
              Best Value
            </div>

            <div className="text-lg text-purple-400 uppercase tracking-wider mb-3 font-bold">Pro</div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold text-white font-display">$11.99</span>
              <span className="text-lg text-white/35">/mo</span>
            </div>
            <div className="text-base text-emerald-400/70 mb-8 font-semibold">or $97/year (save 33%)</div>

            <div className="space-y-4 flex-1">
              {[
                "Unlimited exports",
                "Unlimited packs",
                "All 30+ print sizes",
                "300 DPI output",
                "No watermark",
                "Priority processing",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8l3 3 5-5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base text-white/70">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 gradient-btn rounded-xl px-5 py-3.5 text-center text-lg font-bold text-white shadow-lg shadow-purple-900/30">
              Start Free — 30 Days Pro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ PAGE ═══════════ */
export default function ProductHuntPage() {
  return (
    <main className="bg-[#0B0B12]">
      {/* Each slide is fixed 1270×760 — screenshot individually */}
      <div className="flex flex-col items-center gap-16 py-16">
        <SlideHero />
        <SlideBeforeAfter />
        <SlideHowItWorks />
        <SlideRatios />
        <SlidePricing />
      </div>
    </main>
  );
}
