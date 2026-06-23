/**
 * Size ladder — on-intent output proof for size/ratio SEO pages.
 * Shows ONE uploaded artwork rendered at three sizes in a single ratio family,
 * stepped to scale (sizes that share a ratio scale from one source, so a single
 * image is geometrically honest), each labeled with exact pixels at 300 DPI.
 * The middle rung (accent) is the page's subject size.
 * Mirrors the homepage Size Packs visual language (rounded cards, ring, shadow, sheen)
 * so SEO pages show real output instead of an empty wireframe.
 *
 * Defaults to the ISO A-series (A5/A4/A3). Pass `rungs` + `aspect` + `src` for other
 * ratio families (e.g. 4:5 → 8×10 / 16×20 / 20×25). Static by design.
 */

export type LadderRung = {
  id: string;
  label: string;
  px: string;
  /** small secondary line: mm for ISO, inches/use-note for US sizes */
  sub: string;
  /** card height per breakpoint, stepped by ~√2 to mirror real scaling */
  h: string;
  accent?: boolean;
};

const A_SERIES: LadderRung[] = [
  { id: "a5", label: "A5", px: "1748 × 2480", sub: "148 × 210 mm", h: "h-24 sm:h-32" },
  { id: "a4", label: "A4", px: "2480 × 3508", sub: "210 × 297 mm", h: "h-32 sm:h-44", accent: true },
  { id: "a3", label: "A3", px: "3508 × 4961", sub: "297 × 420 mm", h: "h-44 sm:h-60" },
];

export function SizeLadder({
  rungs = A_SERIES,
  aspect = "210/297",
  src = "/assets/modes-demo/ratios/misty-iso.jpg",
  subject = "Your artwork",
  caption = "One upload, every A-size at 300 DPI",
  zipLabel = "A-series.zip",
  zipMeta = "A5 · A4 · A3 · under 20 MB",
}: {
  rungs?: LadderRung[];
  aspect?: string;
  src?: string;
  subject?: string;
  caption?: string;
  zipLabel?: string;
  zipMeta?: string;
}) {
  return (
    <figure className="w-full">
      {/* the ladder — bottoms aligned so the size step reads instantly */}
      <div className="flex items-end justify-center gap-4 sm:gap-7">
        {rungs.map((r) => (
          <div key={r.id} className="flex flex-col items-center">
            <span
              className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
                r.accent
                  ? "bg-[#2DD4BF]/15 text-[#2DD4BF] ring-1 ring-[#2DD4BF]/30"
                  : "bg-white/[0.06] text-white/70 ring-1 ring-white/10"
              }`}
            >
              {r.label}
              {r.accent && (
                <span className="text-[9px] font-medium text-[#2DD4BF]/70">
                  this page
                </span>
              )}
            </span>

            <div
              className={`relative ${r.h} overflow-hidden rounded-lg border shadow-2xl shadow-black/60 ${
                r.accent
                  ? "border-[#2DD4BF]/40 ring-2 ring-[#2DD4BF]/30"
                  : "border-white/10 ring-1 ring-white/[0.05]"
              }`}
              style={{ aspectRatio: aspect }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${subject} exported as a ${r.label} print at ${r.px} px, 300 DPI`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
              {/* printed-paper sheen — matches homepage pack cards */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/[0.04]"
              />
            </div>

            <div className="mt-2 text-center">
              <div
                className={`font-mono text-[11px] sm:text-xs ${
                  r.accent ? "text-white/90" : "text-white/55"
                }`}
              >
                {r.px} px
              </div>
              <div className="font-mono text-[9px] text-white/35">{r.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-white/50">
        <span>{caption}</span>
        <span aria-hidden className="text-white/20">
          •
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-white/60 ring-1 ring-white/10">
          {zipLabel}
          <span className="text-white/30">{zipMeta}</span>
        </span>
      </figcaption>
    </figure>
  );
}
