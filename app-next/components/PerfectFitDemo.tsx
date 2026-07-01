import { ArrowRight } from "lucide-react";

type Panel = { src: string; tag: string };

/**
 * Perfect Fit story graphic — "your original → reframed to other ratios, you choose
 * what stays in frame." Mirrors the vertical fox demo: the original is shown prominently,
 * an arrow leads to the reframed variants (teal-ringed). Works for any subject/orientation.
 */
export function PerfectFitDemo({
  original,
  reframes,
  subject,
  caption,
}: {
  original: Panel;
  reframes: Panel[];
  subject: string;
  caption: string;
}) {
  const cell = (p: Panel, reframed: boolean) => (
    <figure key={p.src} className="flex flex-col items-center gap-2">
      <div
        className={`w-full overflow-hidden rounded-lg shadow-xl shadow-black/40 ${
          reframed ? "ring-2 ring-[#2DD4BF]/60" : "ring-1 ring-white/10"
        }`}
      >
        <img
          src={p.src}
          alt={`${subject} ${reframed ? "reframed to" : "as the original"} ${p.tag}`}
          className="block w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </div>
      <figcaption className="text-xs text-foreground-60">
        <span className="font-medium text-foreground/80">
          {reframed ? "Reframed" : "Your original"}
        </span>{" "}
        {p.tag}
      </figcaption>
    </figure>
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
        {/* original — prominent */}
        <div className="w-full sm:w-[38%]">{cell(original, false)}</div>

        <ArrowRight
          aria-hidden
          className="h-6 w-6 flex-shrink-0 rotate-90 text-[#2DD4BF]/70 sm:rotate-0"
        />

        {/* reframed variants */}
        <div className="grid w-full flex-1 grid-cols-2 gap-3 sm:gap-4">
          {reframes.map((r) => cell(r, true))}
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-foreground-60">
        {caption}
      </p>
    </div>
  );
}
