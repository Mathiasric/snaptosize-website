import SlideWrapper from "./SlideWrapper";

interface StatsCardProps {
  ratio: "pinterest" | "instagram";
}

export default function StatsCard({ ratio }: StatsCardProps) {
  const isPinterest = ratio === "pinterest";

  return (
    <SlideWrapper id={`stats-card-${ratio}`} ratio={ratio} bgVariant="default">
      <div className="flex-1 flex flex-col items-center justify-center px-12">
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full px-5 py-2">
            18,000+ packs generated
          </span>
        </div>

        {/* Huge stat */}
        <div
          className={`${isPinterest ? "text-[12rem]" : "text-[10rem]"} font-bold leading-none bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent`}
        >
          70
        </div>

        {/* Label */}
        <div className={`${isPinterest ? "text-4xl" : "text-3xl"} text-white/70 font-medium mt-2`}>
          print-ready files
        </div>

        {/* Subtitle */}
        <div className={`${isPinterest ? "text-2xl" : "text-xl"} text-white/40 mt-3`}>
          from one single upload
        </div>

        {/* Divider */}
        <div className="w-48 h-px bg-white/10 my-10" />

        {/* Feature pills */}
        <div className="flex gap-3 flex-wrap justify-center">
          {["5 Ratio Packs", "300 DPI", "Portrait + Landscape"].map((label) => (
            <span
              key={label}
              className="bg-white/5 border border-white/10 text-white/50 rounded-lg px-4 py-2 text-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
