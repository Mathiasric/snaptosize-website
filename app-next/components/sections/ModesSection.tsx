"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ZoomIn, X } from "lucide-react";
import { Container } from "@/components/Container";

const HEROES = [
  { src: "/assets/modes-demo/show-bunny.jpg", alt: "Etsy print example, vintage bunny with flowers" },
  { src: "/assets/modes-demo/show-floral.jpg", alt: "Etsy print example, floral vase still life" },
  { src: "/assets/modes-demo/show-fox.jpg", alt: "Etsy print example, woodland fox illustration" },
  { src: "/assets/modes-demo/show-deer.jpg", alt: "Etsy print example, deer portrait" },
];

const PACKS = [
  { ratio: "2:3", sizes: "4×6 · 6×9 · 8×12 · 10×15 · 12×18 · 16×24 · 20×30" },
  { ratio: "3:4", sizes: "6×8 · 9×12 · 12×16 · 15×20 · 18×24" },
  { ratio: "4:5", sizes: "8×10 · 12×15 · 16×20 · 20×25 · 24×30" },
  { ratio: "ISO A", sizes: "A5 · A4 · A3 · A2 · A1" },
  { ratio: "Common", sizes: "5×7 · 8.5×11 · 11×14 · 11×17 · 13×19 · 20×24" },
];

export function ModesSection() {
  const [hero, setHero] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || zoom) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setHero((i) => (i + 1) % HEROES.length), 5000);
    return () => clearInterval(id);
  }, [zoom]);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  const openZoom = useCallback(() => setZoom(true), []);

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            One upload. The whole pack, every size.
          </h2>
          <p className="text-foreground-60 max-w-2xl mx-auto">
            28 print sizes across 5 ratio packs, 300 DPI, named and zipped, ready to list.
            Keep your whole image, or reframe with Perfect Fit. You get the full pack either way.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Hero print — matted, rotating, click to enlarge */}
          <div>
            <button
              onClick={openZoom}
              className="group relative block w-full max-w-[360px] mx-auto rounded-sm bg-[#ECE8DF] p-3 shadow-2xl shadow-black/40 cursor-zoom-in"
              aria-label="Enlarge print example"
            >
              <div className="relative aspect-[11/14] overflow-hidden bg-[#0B0B12]">
                {HEROES.map((h, i) => (
                  <img
                    key={h.src}
                    src={h.src}
                    alt={h.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      i === hero ? "opacity-100" : "opacity-0"
                    }`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>
              <span className="absolute bottom-5 right-5 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                <ZoomIn className="w-3 h-3" /> Click to enlarge
              </span>
            </button>
            <div className="flex justify-center gap-1.5 mt-4">
              {HEROES.map((h, i) => (
                <button
                  key={h.src}
                  onClick={() => setHero(i)}
                  aria-label={`Show example ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === hero ? "w-5 bg-[#2DD4BF]" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* The pack — the full breadth */}
          <div>
            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-3xl font-bold text-foreground">28 sizes</span>
              <span className="text-foreground-60">across 5 ratio packs</span>
            </div>
            <div className="space-y-3">
              {PACKS.map((p) => (
                <div key={p.ratio} className="flex gap-3 items-baseline">
                  <span className="shrink-0 w-16 text-sm font-semibold text-[#2DD4BF]">{p.ratio}</span>
                  <span className="text-sm text-foreground-60">{p.sizes}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground-60 mt-5 pt-4 border-t border-white/[0.06]">
              Plus square and oversized formats in Quick Export, up to 70 files in all. Every file
              named, 300 DPI, each pack a tidy ZIP under Etsy's 20 MB limit.
            </p>
          </div>
        </div>

        {/* The two modes, named confidently */}
        <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/[0.08] bg-surface px-5 py-4">
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-[#2DD4BF]">Size Packs</span>
              <span className="text-foreground-60"> keep your whole image, nothing cropped. Right for most art.</span>
            </p>
          </div>
          <div className="rounded-xl border border-[#8B5CF6]/25 bg-surface px-5 py-4">
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-[#A78BFA]">Perfect Fit</span>
              <span className="text-foreground-60"> reframes to any ratio, you choose the focal point. </span>
              <a href="/distortion-free-crop" className="text-[#A78BFA] font-medium underline-offset-4 hover:underline whitespace-nowrap">
                See how <ArrowRight className="inline w-3 h-3" />
              </a>
            </p>
          </div>
        </div>

        {/* utilities — secondary */}
        <div className="max-w-5xl mx-auto mt-3 grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/[0.06] px-5 py-4">
            <p className="text-sm text-foreground-60 leading-relaxed">
              <span className="text-foreground font-medium">Just one size?</span> Quick Export gives you a single print-ready file in seconds.
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.06] px-5 py-4">
            <p className="text-sm text-foreground-60 leading-relaxed">
              <span className="text-foreground font-medium">Same sizes every time?</span> My Packs saves your set, ready to reuse in one click.
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-foreground-60 mt-8">
          Every mode is free to try.{" "}
          <a href="https://app.snaptosize.com" className="text-[#2DD4BF] font-medium underline-offset-4 hover:underline">
            No signup, no install <ArrowRight className="inline w-3.5 h-3.5 align-middle" />
          </a>
        </p>
      </Container>

      {/* Lightbox */}
      {zoom && (
        <div
          onClick={() => setZoom(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 cursor-zoom-out"
        >
          <button
            onClick={() => setZoom(false)}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/70 hover:text-white"
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={HEROES[hero].src}
            alt={HEROES[hero].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
