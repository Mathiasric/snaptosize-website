import SlideWrapper from "./SlideWrapper";

/* ─────────────────────────────────────────────
   W15-I01: Etsy Size Pack Cheat Sheet
   8-slide Instagram carousel (1080×1350 each)
   ───────────────────────────────────────────── */

// ── Shared helpers ──────────────────────────────────────────

function CheckDot({ color = "teal" }: { color?: string }) {
  const colors: Record<string, string> = {
    teal:   "bg-teal-400",
    purple: "bg-purple-400",
    blue:   "bg-blue-400",
    orange: "bg-orange-400",
    green:  "bg-emerald-400",
    coral:  "bg-rose-400",
  };
  return <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${colors[color] ?? colors.teal}`} />;
}

// ── Slide 1 — Cover (StatsCard style) ──────────────────────

export function W15I01Slide01() {
  return (
    <SlideWrapper id="w15-i01-slide-01" ratio="instagram" bgVariant="default">
      <div className="flex-1 flex flex-col items-center justify-center px-12">
        {/* Eyebrow */}
        <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full px-5 py-2 mb-8">
          Etsy Seller Tips
        </span>

        {/* Big stat */}
        <div className="text-[9rem] font-extrabold leading-none bg-gradient-to-r from-teal-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          28
        </div>
        <div className="text-3xl text-white/70 font-medium mt-1">sizes</div>
        <div className="text-xl text-white/40 mt-2 text-center">
          covered across 5 ratio packs
        </div>

        {/* Divider */}
        <div className="w-48 h-px bg-white/10 my-8" />

        {/* Headline */}
        <h2 className="text-3xl font-bold text-white text-center leading-snug mb-4">
          Etsy buyers ask for different sizes.
          <br />
          <span className="text-white/60 font-normal text-2xl">
            Here&apos;s which ones you actually need.
          </span>
        </h2>

        {/* CTA */}
        <p className="text-teal-400 text-xl font-semibold mt-2">
          Swipe to see each pack →
        </p>
      </div>
    </SlideWrapper>
  );
}

// ── Shared checklist slide ──────────────────────────────────

interface PackSlideProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { label: string; value: string; note?: string }[];
  footerNote: string;
  accentColor: string;
}

function PackSlide({ id, eyebrow, title, subtitle, items, footerNote, accentColor }: PackSlideProps) {
  const accentBadge: Record<string, string> = {
    teal:   "bg-teal-500/15 border-teal-500/30 text-teal-300",
    purple: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    blue:   "bg-blue-500/15 border-blue-500/30 text-blue-300",
    orange: "bg-orange-500/15 border-orange-500/30 text-orange-300",
    green:  "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    coral:  "bg-rose-500/15 border-rose-500/30 text-rose-300",
  };
  const accentTitle: Record<string, string> = {
    teal:   "from-teal-300 to-emerald-400",
    purple: "from-purple-300 to-violet-400",
    blue:   "from-blue-300 to-sky-400",
    orange: "from-orange-300 to-amber-400",
    green:  "from-emerald-300 to-teal-400",
    coral:  "from-rose-300 to-pink-400",
  };

  return (
    <SlideWrapper id={id} ratio="instagram" bgVariant="center">
      <div className="flex-1 flex flex-col px-10 pt-10 pb-4">
        {/* Eyebrow */}
        <span className={`inline-block self-center border rounded-full text-sm font-semibold tracking-wider uppercase px-4 py-1 mb-4 ${accentBadge[accentColor]}`}>
          {eyebrow}
        </span>

        {/* Title */}
        <h2 className={`text-4xl font-bold text-center leading-tight mb-1 bg-gradient-to-r ${accentTitle[accentColor]} bg-clip-text text-transparent`}>
          {title}
        </h2>
        <p className="text-white/40 text-center text-lg mb-7">{subtitle}</p>

        {/* Items */}
        <div className="flex flex-col gap-3 flex-1">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-start justify-between bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3"
            >
              <div className="flex items-start gap-2.5">
                <CheckDot color={accentColor} />
                <div>
                  <span className="text-white/80 font-mono font-bold text-xl">{item.label}</span>
                  {item.note && (
                    <p className="text-white/35 text-sm">{item.note}</p>
                  )}
                </div>
              </div>
              <span className="text-white/35 font-mono text-sm pt-0.5">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-white/30 text-sm text-center mt-5">{footerNote}</p>
      </div>
    </SlideWrapper>
  );
}

// ── Slide 2 — 2:3 Ratio Pack ───────────────────────────────

export function W15I01Slide02() {
  return (
    <PackSlide
      id="w15-i01-slide-02"
      eyebrow="Pack 1 of 5"
      title="2:3 Ratio Pack"
      subtitle="Most common for wall art prints"
      accentColor="teal"
      items={[
        { label: "4×6\"",   value: "1200×1800 px" },
        { label: "6×9\"",   value: "1800×2700 px" },
        { label: "8×12\"",  value: "2400×3600 px" },
        { label: "10×15\"", value: "3000×4500 px" },
        { label: "12×18\"", value: "3600×5400 px" },
        { label: "16×24\"", value: "4800×7200 px" },
        { label: "20×30\"", value: "6000×9000 px" },
      ]}
      footerNote="7 sizes · All 300 DPI · Etsy-ready"
    />
  );
}

// ── Slide 3 — 3:4 Ratio Pack ───────────────────────────────

export function W15I01Slide03() {
  return (
    <PackSlide
      id="w15-i01-slide-03"
      eyebrow="Pack 2 of 5"
      title="3:4 Ratio Pack"
      subtitle="Classic photo frame sizes"
      accentColor="purple"
      items={[
        { label: "6×8\"",   value: "1800×2400 px" },
        { label: "9×12\"",  value: "2700×3600 px" },
        { label: "12×16\"", value: "3600×4800 px" },
        { label: "15×20\"", value: "4500×6000 px" },
        { label: "18×24\"", value: "5400×7200 px" },
      ]}
      footerNote="5 sizes · All 300 DPI · Etsy-ready"
    />
  );
}

// ── Slide 4 — 4:5 Ratio Pack ───────────────────────────────

export function W15I01Slide04() {
  return (
    <PackSlide
      id="w15-i01-slide-04"
      eyebrow="Pack 3 of 5"
      title="4:5 Ratio Pack"
      subtitle="Traditional art — home of the 8×10"
      accentColor="blue"
      items={[
        { label: "8×10\"",  value: "2400×3000 px" },
        { label: "12×15\"", value: "3600×4500 px" },
        { label: "16×20\"", value: "4800×6000 px" },
        { label: "20×25\"", value: "6000×7500 px" },
        { label: "24×30\"", value: "7200×9000 px" },
      ]}
      footerNote="5 sizes · All 300 DPI · Etsy-ready"
    />
  );
}

// ── Slide 5 — ISO A-Series Pack ────────────────────────────

export function W15I01Slide05() {
  return (
    <PackSlide
      id="w15-i01-slide-05"
      eyebrow="Pack 4 of 5"
      title="ISO A-Series Pack"
      subtitle="International standard — EU buyers expect these"
      accentColor="green"
      items={[
        { label: "A5",  value: "1748×2480 px" },
        { label: "A4",  value: "2480×3508 px" },
        { label: "A3",  value: "3508×4961 px" },
        { label: "A2",  value: "4961×7016 px" },
        { label: "A1",  value: "7016×9933 px" },
      ]}
      footerNote="5 sizes · All 300 DPI · Essential for EU/UK shops"
    />
  );
}

// ── Slide 6 — Extra Sizes ──────────────────────────────────

export function W15I01Slide06() {
  return (
    <PackSlide
      id="w15-i01-slide-06"
      eyebrow="Pack 5 of 5"
      title="Extra Sizes"
      subtitle="High-demand single exports"
      accentColor="orange"
      items={[
        { label: "5×7\"",    value: "1500×2100 px",  note: "Cards & small frames" },
        { label: "8.5×11\"", value: "2550×3300 px",  note: "US Letter, home printing" },
        { label: "11×14\"",  value: "3300×4200 px",  note: "Photo mat standard" },
        { label: "11×17\"",  value: "3300×5100 px",  note: "Large format home" },
        { label: "13×19\"",  value: "3900×5700 px",  note: "Fine art poster" },
        { label: "20×24\"",  value: "6000×7200 px",  note: "Large format print" },
      ]}
      footerNote="6 sizes · All 300 DPI"
    />
  );
}

// ── Slide 7 — The Problem Slide (StatsCard style) ──────────

export function W15I01Slide07() {
  return (
    <SlideWrapper id="w15-i01-slide-07" ratio="instagram" bgVariant="default">
      <div className="flex-1 flex flex-col items-center justify-center px-12">
        {/* Eyebrow */}
        <span className="inline-block bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium rounded-full px-5 py-2 mb-8">
          The real problem
        </span>

        {/* Big stat */}
        <div className="text-[8rem] font-extrabold leading-none bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
          2–3
        </div>
        <div className="text-2xl text-white/70 font-medium mt-1 text-center">
          sizes offered by most Etsy sellers
        </div>

        {/* Divider */}
        <div className="w-48 h-px bg-white/10 my-8" />

        {/* Headline */}
        <h2 className="text-2xl font-bold text-white text-center leading-snug mb-3">
          Most Etsy sellers only offer 2–3 sizes.
        </h2>
        <p className="text-white/50 text-lg text-center leading-relaxed">
          Buyers who don&apos;t find their size
          <br />
          → go to a competitor.
        </p>

        {/* Solution stat */}
        <div className="mt-8 bg-teal-500/10 border border-teal-500/20 rounded-2xl px-8 py-4 text-center">
          <p className="text-teal-300 text-xl font-bold">
            28 sizes = more buyers served = more sales
          </p>
        </div>

        <p className="text-teal-400 text-lg font-semibold mt-6">
          There&apos;s a faster way. Swipe →
        </p>
      </div>
    </SlideWrapper>
  );
}

// ── Slide 8 — CTA Slide (NumberHighlight style) ─────────────

export function W15I01Slide08() {
  return (
    <SlideWrapper id="w15-i01-slide-08" ratio="instagram" bgVariant="center">
      <div className="flex-1 flex flex-col items-center justify-center px-12">
        {/* Badge */}
        <span className="inline-block bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium rounded-full px-5 py-2 mb-8">
          SnapToSize — Free to try
        </span>

        {/* Big number */}
        <div className="relative">
          <div
            className="absolute inset-0 blur-3xl opacity-50"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.4) 0%, transparent 70%)" }}
          />
          <div className="relative text-[11rem] font-extrabold leading-none bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
            1
          </div>
        </div>

        <div className="text-3xl text-white/70 font-medium mt-1">upload</div>

        {/* Divider */}
        <div className="w-48 h-px bg-white/10 my-8" />

        {/* Description */}
        <p className="text-2xl text-white/80 text-center font-semibold leading-snug mb-3">
          All 28 sizes. All 5 packs.
          <br />
          All 300 DPI. ZIP ready for Etsy.
        </p>

        {/* Bullets */}
        <div className="flex flex-col gap-2 mt-4 mb-8">
          {["5 ratio packs included", "Portrait + Landscape + Square", "300 DPI · Etsy-ready ZIPs"].map((b) => (
            <div key={b} className="flex items-center gap-3 text-white/50 text-lg">
              <div className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <span className="inline-block bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-full px-8 py-4 text-white/80 text-lg font-semibold">
          Try free → app.snaptosize.com/app/quick-export
        </span>
      </div>
    </SlideWrapper>
  );
}
