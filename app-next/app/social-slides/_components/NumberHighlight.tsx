import SlideWrapper from "./SlideWrapper";

interface NumberHighlightProps {
  ratio: "pinterest" | "instagram";
  number?: string;
  label?: string;
  subtitle?: string;
  topBadge?: string;
  bullets?: string[];
  ctaText?: string;
  accentColor?: "teal" | "purple" | "coral";
}

const ACCENT = {
  teal: {
    gradient: "from-teal-300 via-emerald-400 to-teal-500",
    badgeBg: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    bulletDot: "bg-teal-400",
    ctaBorder: "border-teal-500/20",
    ctaBg: "from-teal-600/20 to-emerald-600/20",
    glow: "rgba(45,212,191,0.12)",
  },
  purple: {
    gradient: "from-violet-400 via-purple-400 to-fuchsia-400",
    badgeBg: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    bulletDot: "bg-violet-400",
    ctaBorder: "border-violet-500/20",
    ctaBg: "from-violet-600/20 to-purple-600/20",
    glow: "rgba(124,58,237,0.12)",
  },
  coral: {
    gradient: "from-rose-400 via-orange-400 to-amber-400",
    badgeBg: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    bulletDot: "bg-rose-400",
    ctaBorder: "border-rose-500/20",
    ctaBg: "from-rose-600/20 to-orange-600/20",
    glow: "rgba(251,113,133,0.12)",
  },
} as const;

const SCALE = {
  pinterest: {
    numberSize: "text-[13rem]",
    labelSize: "text-4xl",
    subtitleSize: "text-2xl",
    badgeSize: "text-sm",
    bulletSize: "text-xl",
    ctaSize: "text-lg",
    outerPad: "px-14",
  },
  instagram: {
    numberSize: "text-[11rem]",
    labelSize: "text-3xl",
    subtitleSize: "text-xl",
    badgeSize: "text-sm",
    bulletSize: "text-lg",
    ctaSize: "text-base",
    outerPad: "px-12",
  },
} as const;

export default function NumberHighlight({
  ratio,
  number = "70",
  label = "print-ready files",
  subtitle = "from one single upload",
  topBadge = "The Etsy seller shortcut",
  bullets = ["5 ratio packs", "Portrait + Landscape + Square", "300 DPI · Etsy-ready ZIPs"],
  ctaText = "Try free → snaptosize.com",
  accentColor = "teal",
}: NumberHighlightProps) {
  const s = SCALE[ratio];
  const a = ACCENT[accentColor];

  return (
    <SlideWrapper id={`number-highlight-${ratio}-${number}`} ratio={ratio} bgVariant="center">
      <div className={`flex-1 flex flex-col items-center justify-center ${s.outerPad}`}>
        {/* Top badge */}
        {topBadge && (
          <div className="mb-6">
            <span className={`inline-block ${a.badgeBg} border text-sm font-medium rounded-full px-5 py-2`}>
              {topBadge}
            </span>
          </div>
        )}

        {/* Huge number with glow */}
        <div className="relative">
          <div
            className="absolute inset-0 blur-3xl opacity-60"
            style={{ background: `radial-gradient(circle, ${a.glow} 0%, transparent 70%)` }}
          />
          <div
            className={`relative ${s.numberSize} font-extrabold leading-none bg-gradient-to-r ${a.gradient} bg-clip-text text-transparent`}
          >
            {number}
          </div>
        </div>

        {/* Label */}
        <div className={`${s.labelSize} text-white/70 font-medium mt-1`}>
          {label}
        </div>

        {/* Subtitle */}
        <div className={`${s.subtitleSize} text-white/40 mt-2`}>
          {subtitle}
        </div>

        {/* Divider */}
        <div className="w-56 h-px bg-white/10 my-8" />

        {/* Bullet points */}
        <div className="flex flex-col gap-4">
          {bullets.map((bullet) => (
            <div key={bullet} className={`flex items-center gap-3 ${s.bulletSize} text-white/50`}>
              <div className={`w-2 h-2 rounded-full ${a.bulletDot} flex-shrink-0`} />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="mt-10">
            <span className={`inline-block bg-gradient-to-r ${a.ctaBg} border ${a.ctaBorder} rounded-full px-6 py-3 text-white/80 ${s.ctaSize} font-medium`}>
              {ctaText}
            </span>
          </div>
        )}
      </div>
    </SlideWrapper>
  );
}
