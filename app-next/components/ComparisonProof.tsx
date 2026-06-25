/**
 * ComparisonProof — real output proof for "X vs Y" comparison pages.
 * Shows ONE uploaded artwork rendered at BOTH compared sizes, each at its true ratio,
 * with exact pixels. Turns the page's text claim ("one upload, both sizes, no cropping")
 * into something the buyer can SEE — the homepage's show-don't-tell proof, recontextualized.
 * Dark band (pops as a product moment inside the light comparison content). Static.
 */

type ProofItem = {
  /** real artwork image at this item's aspect ratio */
  src: string;
  label: string;
  px: string;
  ratio: string;
  /** CSS aspect-ratio, e.g. "4/5" */
  aspect: string;
  /** card height per breakpoint */
  h: string;
};

export function ComparisonProof({
  subject = "Your artwork",
  a,
  b,
  note,
}: {
  subject?: string;
  a: ProofItem;
  b: ProofItem;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0c18] p-6 md:p-10">
      {/* soft teal glow, top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-44 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(45,212,191,0.16), transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="text-center mb-7">
          <span className="mb-3 inline-block rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2DD4BF]">
            One upload, both sizes
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white">
            Same artwork, each at its own ratio
          </h3>
        </div>

        <div className="flex items-end justify-center gap-5 sm:gap-10">
          {[a, b].map((it) => (
            <figure key={it.label} className="flex flex-col items-center">
              <span className="mb-2 inline-block rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-white/80 ring-1 ring-white/10">
                {it.label}
              </span>
              <div
                className={`relative ${it.h} overflow-hidden rounded-lg border border-white/10 ring-1 ring-white/[0.05] shadow-2xl shadow-black/60`}
                style={{ aspectRatio: it.aspect }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.src}
                  alt={`${subject} exported as a ${it.label} print at ${it.px} px, 300 DPI`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/[0.04]"
                />
              </div>
              <figcaption className="mt-2 text-center">
                <div className="font-mono text-[11px] text-white/75">{it.px} px</div>
                <div className="font-mono text-[9px] text-white/40">ratio {it.ratio}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-md text-center text-xs leading-relaxed text-white/55">
          {note ||
            "Upload once. SnapToSize exports both at 300 DPI — the full image kept, no cropping, every file under 20MB."}
        </p>
      </div>
    </section>
  );
}
