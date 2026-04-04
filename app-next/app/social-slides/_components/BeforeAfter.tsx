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
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 4V14M9 14L5 10M9 14L13 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    sectionPadding: "px-10 pt-8",
    badgeText: "text-xs",
    titleSize: "text-3xl",
    imageH: "h-[180px]",
    imageW: "w-[135px]",
    fanCardH: "h-[110px]",
    fanCardW: "w-[80px]",
    pointsText: "text-sm",
    pointsGap: "gap-2",
    dividerMy: "my-3",
    afterFanGap: "gap-3",
    fanLabel: "text-[9px]",
  },
  instagram: {
    sectionPadding: "px-10 pt-6",
    badgeText: "text-xs",
    titleSize: "text-2xl",
    imageH: "h-[150px]",
    imageW: "w-[112px]",
    fanCardH: "h-[95px]",
    fanCardW: "w-[70px]",
    pointsText: "text-xs",
    pointsGap: "gap-1.5",
    dividerMy: "my-2",
    afterFanGap: "gap-2.5",
    fanLabel: "text-[8px]",
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
  { label: "2:3", rotate: "-rotate-6", translate: "-translate-x-3" },
  { label: "4:5", rotate: "rotate-0", translate: "translate-x-0 -translate-y-1" },
  { label: "A4", rotate: "rotate-6", translate: "translate-x-3" },
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
          <h2 className={`${s.titleSize} font-bold text-white/90 mb-4 text-center`}>
            Manual Resizing
          </h2>

          {/* Bad crop image */}
          <div className={`relative ${s.imageW} ${s.imageH} rounded-lg overflow-hidden border-2 border-red-500/40 mb-4 flex-shrink-0`}>
            <img
              src="/assets/Composition_Pictures/poppies_BAD_crop_2700x3600.png"
              alt="Badly cropped poppies"
              className="w-full h-full object-cover"
            />
            <BadCropOverlay />
          </div>

          {/* Pain points */}
          <div className={`flex flex-col ${s.pointsGap}`}>
            {PAIN_POINTS.map((point) => (
              <div key={point} className={`flex items-center gap-2 ${s.pointsText} text-white/70`}>
                <RedX />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className={`relative flex items-center justify-center ${s.dividerMy} px-10`}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="mx-4 w-9 h-9 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
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
          <h2 className={`${s.titleSize} font-bold text-white/90 mb-4 text-center`}>
            One Click. Done.
          </h2>

          {/* Fan of images at different aspect ratios */}
          <div className={`flex items-end justify-center ${s.afterFanGap} mb-4`}>
            {FAN_CARDS.map((card) => (
              <div
                key={card.label}
                className={`${s.fanCardW} ${s.fanCardH} rounded-md overflow-hidden border border-emerald-500/25 ${card.rotate} ${card.translate} flex-shrink-0 relative shadow-lg`}
              >
                <img
                  src="/assets/Composition_Pictures/poppies_orginal_2x3.jpg"
                  alt={`Poppies at ${card.label}`}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 ${s.fanLabel} font-mono font-bold text-white bg-black/60 px-1.5 py-0.5 rounded`}
                >
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className={`flex flex-col ${s.pointsGap}`}>
            {BENEFITS.map((benefit) => (
              <div key={benefit} className={`flex items-center gap-2 ${s.pointsText} text-white/70`}>
                <GreenCheck />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
