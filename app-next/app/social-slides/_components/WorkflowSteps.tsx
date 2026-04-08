import SlideWrapper from "./SlideWrapper";

interface WorkflowStepsProps {
  ratio: "pinterest" | "instagram";
}

const SCALE = {
  pinterest: {
    titleSize: "text-[2.6rem]",
    subtitleSize: "text-xl",
    stepNumSize: "text-6xl",
    stepTitleSize: "text-2xl",
    stepDescSize: "text-lg",
    imageH: "h-[180px]",
    imageW: "w-[135px]",
    arrowSize: 32,
    outerPad: "px-12 pt-14",
    stepGap: "gap-10",
    fanGap: "gap-3",
    fanCardH: "h-[120px]",
    fanCardW: "w-[80px]",
    fanLabel: "text-[9px]",
  },
  instagram: {
    titleSize: "text-[2.2rem]",
    subtitleSize: "text-lg",
    stepNumSize: "text-5xl",
    stepTitleSize: "text-xl",
    stepDescSize: "text-base",
    imageH: "h-[150px]",
    imageW: "w-[112px]",
    arrowSize: 28,
    outerPad: "px-10 pt-12",
    stepGap: "gap-8",
    fanGap: "gap-2",
    fanCardH: "h-[100px]",
    fanCardW: "w-[68px]",
    fanLabel: "text-[8px]",
  },
} as const;

function DownArrow({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14m0 0l-5-5m5 5l5-5"
        stroke="url(#arrowGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="arrowGrad" x1="12" y1="5" x2="12" y2="19">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 8l-5-5-5 5" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3v12" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ZipIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="#2DD4BF" strokeWidth="1.5" />
      <path d="M10 2v4h4V2" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 12h6M9 15h6" stroke="#2DD4BF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const FAN_RATIOS = [
  { label: "2:3", rotate: "-rotate-6" },
  { label: "4:5", rotate: "-rotate-1" },
  { label: "3:4", rotate: "rotate-4" },
  { label: "ISO", rotate: "rotate-8" },
];

export default function WorkflowSteps({ ratio }: WorkflowStepsProps) {
  const s = SCALE[ratio];

  return (
    <SlideWrapper id={`workflow-steps-${ratio}`} ratio={ratio} bgVariant="default">
      <div className={`flex-1 flex flex-col ${s.outerPad}`}>
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className={`${s.titleSize} font-bold text-white leading-tight`}>
            How It Works
          </h2>
          <p className={`${s.subtitleSize} text-white/40 mt-2`}>
            3 steps. 60 seconds. Every size.
          </p>
        </div>

        <div className={`flex-1 flex flex-col items-center justify-center ${s.stepGap}`}>
          {/* Step 1: Upload */}
          <div className="flex items-center gap-6 w-full max-w-[85%]">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <UploadIcon />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-violet-400 font-mono font-bold text-sm">01</span>
                <span className={`${s.stepTitleSize} font-bold text-white`}>Upload your artwork</span>
              </div>
              <p className={`${s.stepDescSize} text-white/40`}>
                Any high-res image. JPG or PNG.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <DownArrow size={s.arrowSize} />

          {/* Step 2: Process — show single artwork */}
          <div className="flex items-center gap-6 w-full max-w-[85%]">
            <div className={`flex-shrink-0 ${s.imageW} ${s.imageH} rounded-xl overflow-hidden border border-violet-500/20 shadow-xl shadow-purple-900/20`}>
              <img
                src="/assets/Composition_Pictures/poppies_orginal_2x3.jpg"
                alt="Original artwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-purple-400 font-mono font-bold text-sm">02</span>
                <span className={`${s.stepTitleSize} font-bold text-white`}>We resize everything</span>
              </div>
              <p className={`${s.stepDescSize} text-white/40`}>
                5 ratio packs. Portrait + landscape. All at 300 DPI.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <DownArrow size={s.arrowSize} />

          {/* Step 3: Download — show fan of output cards */}
          <div className="flex items-center gap-6 w-full max-w-[85%]">
            <div className={`flex-shrink-0 flex items-end ${s.fanGap}`}>
              {FAN_RATIOS.map((card) => (
                <div
                  key={card.label}
                  className={`${s.fanCardW} ${s.fanCardH} rounded-lg overflow-hidden border border-emerald-500/25 ${card.rotate} flex-shrink-0 relative shadow-lg shadow-black/40`}
                >
                  <img
                    src="/assets/Composition_Pictures/poppies_orginal_2x3.jpg"
                    alt={`Output ${card.label}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-1.5 py-1">
                    <span className={`${s.fanLabel} font-mono font-bold text-emerald-300`}>
                      {card.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-teal-400 font-mono font-bold text-sm">03</span>
                <span className={`${s.stepTitleSize} font-bold text-white`}>Download ZIPs</span>
              </div>
              <p className={`${s.stepDescSize} text-white/40`}>
                Up to 70 files. Organized. Etsy-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA pill */}
        <div className="text-center mt-8 mb-4">
          <span className="inline-block bg-gradient-to-r from-violet-600/20 to-teal-600/20 border border-violet-500/20 rounded-full px-6 py-3 text-white/80 text-lg font-medium">
            Try free → snaptosize.com
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
