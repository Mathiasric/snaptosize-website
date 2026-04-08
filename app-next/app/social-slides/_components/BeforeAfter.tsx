import SlideWrapper from "./SlideWrapper";

interface BeforeAfterProps {
  ratio: "pinterest" | "instagram";
}

/* Inline SVG icons — match the PH slide style */
function RedX({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="#EF4444" strokeWidth="1.5" fill="rgba(239,68,68,0.1)" />
      <line x1="5" y1="5" x2="11" y2="11" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="5" x2="5" y2="11" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GreenCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="#22C55E" strokeWidth="1.5" fill="rgba(34,197,94,0.1)" />
      <path d="M5 8.5L7 10.5L11 5.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
      <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Red X overlay for the bad-crop image */
function BadCropOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
    >
      <line x1="15" y1="15" x2="85" y2="85" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="85" y1="15" x2="15" y2="85" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
    </svg>
  );
}

const SCALE = {
  pinterest: {
    sectionPadding: "px-14 pt-12",
    badgeText: "text-lg",
    titleSize: "text-5xl",
    subtitleSize: "text-xl",
    imageH: "h-[300px]",
    imageW: "w-[225px]",
    fanCardH: "h-[180px]",
    fanCardW: "w-[120px]",
    pointsText: "text-xl",
    pointsGap: "gap-4",
    pointIcon: 22,
    dividerMy: "my-4",
    afterFanGap: "gap-4",
    fanLabel: "text-xs",
  },
  instagram: {
    sectionPadding: "px-14 pt-10",
    badgeText: "text-base",
    titleSize: "text-4xl",
    subtitleSize: "text-lg",
    imageH: "h-[240px]",
    imageW: "w-[180px]",
    fanCardH: "h-[150px]",
    fanCardW: "w-[100px]",
    pointsText: "text-lg",
    pointsGap: "gap-3",
    pointIcon: 20,
    dividerMy: "my-3",
    afterFanGap: "gap-3",
    fanLabel: "text-[10px]",
  },
} as const;

const PAIN_POINTS = [
  "1–3 hours per listing",
  "Cropping ruins composition",
  "Wrong sizes = refunds",
];

const BENEFITS = [
  "70 files in 60 seconds",
  "Composition preserved",
  "300 DPI, Etsy-ready ZIPs",
];

const FAN_CARDS = [
  { label: "2:3", src: "/assets/Composition_Pictures/poppies_orginal_2x3.jpg", rotate: "-rotate-6", translate: "-translate-x-2" },
  { label: "3:4", src: "/assets/Composition_Pictures/poppies_orginal_2x3.jpg", rotate: "-rotate-2", translate: "-translate-x-1 -translate-y-1" },
  { label: "4:5", src: "/assets/Composition_Pictures/poppies_orginal_2x3.jpg", rotate: "rotate-0", translate: "translate-x-0 -translate-y-2" },
  { label: "A4", src: "/assets/Composition_Pictures/poppies_orginal_2x3.jpg", rotate: "rotate-2", translate: "translate-x-1 -translate-y-1" },
  { label: "11×14", src: "/assets/Composition_Pictures/poppies_orginal_2x3.jpg", rotate: "rotate-6", translate: "translate-x-2" },
];

export default function BeforeAfter({ ratio }: BeforeAfterProps) {
  const s = SCALE[ratio];

  return (
    <SlideWrapper id={`before-after-${ratio}`} ratio={ratio} bgVariant="split">
      <div className="flex-1 flex flex-col">
        {/* ── BEFORE Section ── */}
        <div className={`flex-[45] flex flex-col items-center ${s.sectionPadding}`}>
          {/* Badge */}
          <span
            className={`${s.badgeText} font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 mb-3`}
          >
            Before
          </span>

          {/* Title */}
          <h2 className={`${s.titleSize} font-bold text-white/90 mb-2 text-center`}>
            Manual Resizing
          </h2>
          <p className={`${s.subtitleSize} text-white/40 mb-6 text-center`}>The Etsy seller&apos;s nightmare</p>

          {/* Bad crop image */}
          <div className={`relative ${s.imageW} ${s.imageH} rounded-xl overflow-hidden border-2 border-red-500/40 mb-6 flex-shrink-0 shadow-2xl shadow-red-900/20`}>
            <img
              src="/assets/Composition_Pictures/poppies_BAD_crop_2700x3600.png"
              alt="Badly cropped poppies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-red-950/30">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <line x1="15" y1="15" x2="65" y2="65" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
                <line x1="65" y1="15" x2="15" y2="65" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Pain points */}
          <div className={`flex flex-col ${s.pointsGap}`}>
            {PAIN_POINTS.map((point) => (
              <div key={point} className={`flex items-center gap-3 ${s.pointsText} text-white/60`}>
                <RedX size={s.pointIcon} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className={`relative flex items-center justify-center ${s.dividerMy} px-10`}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="mx-4 w-14 h-14 rounded-full bg-gradient-to-b from-violet-600 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-900/40 flex-shrink-0">
            <DownArrow />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* ── AFTER Section ── */}
        <div className={`flex-[45] flex flex-col items-center ${s.sectionPadding} pt-0`}>
          {/* Badge */}
          <span
            className={`${s.badgeText} font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mb-3`}
          >
            After
          </span>

          {/* Title */}
          <h2 className={`${s.titleSize} font-bold text-white/90 mb-2 text-center`}>
            One Click. Every Size.
          </h2>
          <p className={`${s.subtitleSize} text-white/40 mb-6 text-center`}>70 files, 5 ratios, organized ZIPs</p>

          {/* Fan of images at different aspect ratios */}
          <div className={`flex items-end justify-center ${s.afterFanGap} mb-6`}>
            {FAN_CARDS.map((card) => (
              <div
                key={card.label}
                className={`${s.fanCardW} ${s.fanCardH} rounded-lg overflow-hidden border border-emerald-500/25 ${card.rotate} ${card.translate} flex-shrink-0 relative shadow-xl shadow-black/40`}
              >
                <img
                  src={card.src}
                  alt={`Poppies at ${card.label}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                  <span className={`${s.fanLabel} font-mono font-bold text-emerald-300`}>
                    {card.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className={`flex flex-col ${s.pointsGap}`}>
            {BENEFITS.map((benefit) => (
              <div key={benefit} className={`flex items-center gap-3 ${s.pointsText} text-white/75`}>
                <GreenCheck size={s.pointIcon} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
