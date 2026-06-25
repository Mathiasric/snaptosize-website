/**
 * ComparisonProof — real output proof for "X vs Y" comparison pages.
 * Mirrors the homepage ModesSection two-mode framing (Size Packs primary, Perfect Fit
 * positive complement), using the same approved wording so neither mode is downtalked:
 *   Size Packs  = your whole image kept, every ratio, up to 70 files, under 20MB.
 *   Perfect Fit = a focal crop you control, proportions exact, you choose what stays.
 * Shows ONE real artwork rendered at BOTH compared sizes (each at its true ratio) so the
 * page's claim becomes something the buyer can SEE. Dark band → pops as a product moment
 * inside the light comparison content. Static.
 */

import Link from "next/link";

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
}: {
  subject?: string;
  a: ProofItem;
  b: ProofItem;
  /** deprecated — copy is now driven by the homepage two-mode framing */
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
        {/* ===== Size Packs ===== */}
        <div className="text-center mb-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF]">
            Size Packs
          </span>
          <h3 className="mt-3 mb-2 text-lg md:text-xl font-bold text-white">
            One upload becomes both sizes
          </h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-white/60">
            Drop in your art once. Get {a.label} and {b.label} back, your whole image kept,
            each file named and 300 DPI — plus every other Etsy ratio in the same export.
          </p>
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

        <p className="mx-auto mt-7 max-w-lg text-center text-xs leading-relaxed text-white/50">
          Every standard Etsy ratio — 2:3, 3:4, 4:5, ISO A, plus extras — up to{" "}
          <span className="font-medium text-white/80">70 print-ready files</span> from one
          upload, each ZIP under Etsy&apos;s 20&nbsp;MB limit.
        </p>

        {/* ===== Perfect Fit — positive complement ===== */}
        <div className="mt-7 border-t border-white/[0.06] pt-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
            Perfect Fit
          </span>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/60">
            Want one exact ratio instead? Perfect Fit reframes with a focal crop you control —
            your proportions stay exact, and you decide what stays in frame.{" "}
            <Link
              href="/distortion-free-crop"
              className="whitespace-nowrap font-medium text-[#A78BFA] underline-offset-4 hover:underline"
            >
              See how it works &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
