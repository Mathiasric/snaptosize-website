/* Bright showcase: real artwork in multiple frame sizes on light background.
   Shows "one upload → all these sizes" with actual product artwork. */

import Image from "next/image";

interface BrightPackShowcaseProps {
  ratio: "pinterest" | "instagram";
}

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

const SCALE = {
  pinterest: {
    title: "text-[2.8rem]",
    subtitle: "text-xl",
    badge: "text-sm",
    packLabel: "text-base",
    packSize: "text-xs",
    cta: "text-lg",
    frameGap: "gap-5",
    sectionPad: "px-12 pt-14 pb-10",
    frameArea: "h-[720px]",
    artSize: { main: 240, side: 160, small: 120 },
  },
  instagram: {
    title: "text-[2.4rem]",
    subtitle: "text-lg",
    badge: "text-sm",
    packLabel: "text-sm",
    packSize: "text-xs",
    cta: "text-base",
    frameGap: "gap-4",
    sectionPad: "px-10 pt-12 pb-8",
    frameArea: "h-[600px]",
    artSize: { main: 200, side: 140, small: 100 },
  },
} as const;

function FrameCard({
  width,
  height,
  label,
  sizes,
  highlight,
}: {
  width: number;
  height: number;
  label: string;
  sizes: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`relative rounded-lg overflow-hidden ${
          highlight
            ? "ring-2 ring-teal-500 shadow-lg shadow-teal-500/20"
            : "ring-1 ring-gray-200 shadow-md"
        }`}
        style={{ width, height }}
      >
        <Image
          src="/assets/Composition_Pictures/poppies_orginal_2x3.jpg"
          alt="Artwork preview"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <div
          className={`font-bold ${
            highlight ? "text-teal-600" : "text-gray-800"
          }`}
        >
          {label}
        </div>
        <div className="text-gray-400 text-xs">{sizes}</div>
      </div>
    </div>
  );
}

export default function BrightPackShowcase({ ratio }: BrightPackShowcaseProps) {
  const { w, h } = DIMS[ratio];
  const s = SCALE[ratio];

  return (
    <section
      id={`bright-pack-showcase-${ratio}`}
      className="relative overflow-hidden flex flex-col"
      style={{
        width: w,
        height: h,
        background: "linear-gradient(180deg, #FAFAF9 0%, #F5F3F0 50%, #EFECE8 100%)",
      }}
    >
      {/* Header */}
      <div className={`${s.sectionPad} text-center`}>
        <span
          className={`inline-block bg-teal-50 border border-teal-200 text-teal-700 ${s.badge} font-medium rounded-full px-4 py-1.5 mb-4`}
        >
          One upload. Every size.
        </span>
        <h2 className={`${s.title} font-extrabold text-gray-900 leading-tight`}>
          5 Ratio Packs
        </h2>
        <p className={`${s.subtitle} text-gray-500 mt-2`}>
          from one single artwork
        </p>
      </div>

      {/* Frame showcase — 5 packs as framed artwork */}
      <div
        className={`flex-1 flex items-center justify-center ${s.frameGap} ${s.sectionPad}`}
      >
        {/* Row 1: 3 main packs */}
        <div className="flex flex-col items-center gap-6">
          <div className={`flex items-end justify-center ${s.frameGap}`}>
            <FrameCard
              width={s.artSize.side}
              height={Math.round(s.artSize.side * 1.5)}
              label="2:3"
              sizes="4×6 to 20×30"
            />
            <FrameCard
              width={s.artSize.main}
              height={Math.round(s.artSize.main * 1.25)}
              label="4:5"
              sizes="8×10 to 24×30"
              highlight
            />
            <FrameCard
              width={s.artSize.side}
              height={Math.round(s.artSize.side * 1.33)}
              label="3:4"
              sizes="6×8 to 18×24"
            />
          </div>

          {/* Row 2: 2 smaller packs */}
          <div className={`flex items-end justify-center ${s.frameGap}`}>
            <FrameCard
              width={s.artSize.small}
              height={Math.round(s.artSize.small * 1.41)}
              label="ISO"
              sizes="A5 to A1"
            />
            <FrameCard
              width={s.artSize.small}
              height={Math.round(s.artSize.small * 1.3)}
              label="Extras"
              sizes="5×7, 11×14 + more"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className="bg-teal-600 py-5 text-center">
        <div className={`${s.cta} text-white font-bold`}>
          70 print-ready files → snaptosize.com
        </div>
      </div>

      {/* Footer */}
      <div
        className="py-3 text-center text-xs text-gray-400 tracking-widest"
        style={{ background: "#EFECE8" }}
      >
        snaptosize.com
      </div>
    </section>
  );
}
