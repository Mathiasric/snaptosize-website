import SlideWrapper from "./SlideWrapper";

interface ChecklistProps {
  ratio: "pinterest" | "instagram";
}

const items = [
  { ok: false, text: "Offering only one size (8×10)" },
  { ok: false, text: "Using 72 DPI instead of 300 DPI" },
  { ok: false, text: "Generic file names (IMG_4829.jpg)" },
  { ok: true, text: "Include all 5 ratio packs" },
  { ok: true, text: "300 DPI on every file" },
  { ok: true, text: "Professional naming (artwork_8x10_300dpi.jpg)" },
];

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
      <circle cx="11" cy="11" r="10" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" fill="rgba(239,68,68,0.08)" />
      <line x1="7.5" y1="7.5" x2="14.5" y2="14.5" stroke="rgba(239,68,68,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14.5" y1="7.5" x2="7.5" y2="14.5" stroke="rgba(239,68,68,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
      <circle cx="11" cy="11" r="10" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5" fill="rgba(34,197,94,0.08)" />
      <path d="M7 11.5L9.5 14L15 8.5" stroke="rgba(34,197,94,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Checklist({ ratio }: ChecklistProps) {
  const isPinterest = ratio === "pinterest";

  return (
    <SlideWrapper id={`checklist-${ratio}`} ratio={ratio} bgVariant="center">
      <div className="flex-1 flex flex-col items-center justify-center px-12">
        {/* Title */}
        <p className="text-xl text-purple-400/70 uppercase tracking-wider mb-6">
          Etsy Digital Downloads
        </p>

        {/* Headline */}
        <h2 className={`${isPinterest ? "text-5xl" : "text-4xl"} font-bold text-white text-center leading-tight mb-10`}>
          Are You Making
          <br />
          These Mistakes?
        </h2>

        {/* Card */}
        <div className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8">
          <div className={`flex flex-col ${isPinterest ? "gap-5" : "gap-4"}`}>
            {items.map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                {item.ok ? <CheckIcon /> : <XIcon />}
                <span
                  className={`${isPinterest ? "text-lg" : "text-base"} ${
                    item.ok ? "text-white/70" : "text-white/50"
                  }`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <p className="text-teal-400 text-xl mt-8">
          Fix all three in 60 seconds →
        </p>
      </div>
    </SlideWrapper>
  );
}
