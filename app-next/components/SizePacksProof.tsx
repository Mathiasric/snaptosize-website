"use client";

/**
 * SizePacksProof — the homepage Size Packs proof, dropped onto high-traffic guide pages
 * that get real landings but lack a product visual. Mirrors ModesSection wording exactly
 * (so neither mode is downtalked): Size Packs = whole image, every ratio, up to 70 files,
 * under 20MB; Perfect Fit = a focal crop you control. Real artwork fanned across every ratio
 * via RatioPackFan. Dark band → pops as a product moment inside lighter guide content.
 */

import Link from "next/link";
import { RatioPackFan, type FanPrint } from "@/components/RatioPackFan";

const DEFAULT_PRINTS: FanPrint[] = [
  { src: "/assets/modes-demo/ratios/misty-3x4.jpg", size: "6×8 in", tag: "3:4", ratio: 0.75 },
  { src: "/assets/modes-demo/ratios/misty-iso.jpg", size: "A4", tag: "ISO A", ratio: 0.707 },
  { src: "/assets/modes-demo/ratios/misty-2x3.jpg", size: "8×12 in", tag: "2:3", ratio: 0.667 },
  { src: "/assets/modes-demo/ratios/misty-4x5.jpg", size: "8×10 in", tag: "4:5", ratio: 0.8 },
  { src: "/assets/modes-demo/ratios/misty-extras.jpg", size: "11×14 in", tag: "Extras", ratio: 0.786 },
];

export function SizePacksProof({
  prints = DEFAULT_PRINTS,
  subject = "Misty Nordic art",
  heading = "One upload becomes every Etsy size",
}: {
  prints?: FanPrint[];
  subject?: string;
  heading?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0c18] px-4 py-10 md:px-8 md:py-14">
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
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF]">
            Size Packs
          </span>
          <h2 className="mt-3 mb-3 text-2xl md:text-3xl font-bold text-white">
            {heading}
          </h2>
          <p className="mx-auto max-w-xl text-sm md:text-base leading-relaxed text-white/60">
            Drop in your art once. Get it back at every ratio, your whole image kept, each
            file named and 300 DPI, ready to list in 45 seconds.
          </p>
        </div>

        <RatioPackFan prints={prints} subject={subject} />

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/55">
          Every standard Etsy ratio — 2:3, 3:4, 4:5, ISO A, plus extras — up to{" "}
          <span className="font-medium text-white/80">70 print-ready files</span> from one
          upload, each ZIP under Etsy&apos;s 20&nbsp;MB limit.
        </p>

        {/* ===== Perfect Fit — positive complement ===== */}
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
            Perfect Fit
          </span>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-white/60">
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
