"use client";

import { Container } from "@/components/Container";
import { useEffect, useRef, useState } from "react";

const FILES = [
  { name: "salmon_chart_4x6in_10x15cm_1200x1800px.jpg",   dims: "1200×1800px", pack: "2:3" },
  { name: "salmon_chart_8x12in_20x30cm_2400x3600px.jpg",  dims: "2400×3600px", pack: "2:3" },
  { name: "salmon_chart_16x24in_41x61cm_4800x7200px.jpg", dims: "4800×7200px", pack: "2:3" },
  { name: "salmon_chart_6x8in_15x20cm_1800x2400px.jpg",   dims: "1800×2400px", pack: "3:4" },
  { name: "salmon_chart_9x12in_23x30cm_2700x3600px.jpg",  dims: "2700×3600px", pack: "3:4" },
  { name: "salmon_chart_8x10in_20x25cm_2400x3000px.jpg",  dims: "2400×3000px", pack: "4:5" },
  { name: "salmon_chart_5x7in_13x18cm_1500x2100px.jpg",   dims: "1500×2100px", pack: "Common" },
  { name: "salmon_chart_A4_21x30cm_2480x3508px.jpg",      dims: "2480×3508px", pack: "A"   },
  { name: "salmon_chart_A3_30x42cm_3508x4961px.jpg",      dims: "3508×4961px", pack: "A"   },
];

const PACK_COLORS: Record<string, string> = {
  "2:3": "text-teal-400",
  "3:4": "text-violet-400",
  "4:5": "text-sky-400",
  "Common": "text-amber-400",
  "A":   "text-rose-400",
};

const FLAGS = [
  "🇺🇸","🇬🇧","🇳🇴","🇦🇺","🇩🇪","🇨🇦","🇮🇹","🇮🇳","🇷🇴","🇲🇩","🇫🇷","🇪🇸",
];

export function FounderStorySection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: "rgba(45,212,191,0.4)" }} />
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-foreground-60">
              By Etsy sellers, for Etsy sellers
            </span>
            <div className="h-px w-8" style={{ background: "rgba(45,212,191,0.4)" }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            One upload. Every size named and ready.
          </h2>
          <p className="text-foreground-60 text-sm max-w-lg mx-auto">
            Upload once — SnapToSize outputs every print size your buyers order. Named, 300&nbsp;DPI, under 20&nbsp;MB. Ready to list on Etsy.
          </p>
        </div>

        {/* Demo: artwork → file grid */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 max-w-5xl mx-auto">

          {/* Artwork input */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-foreground-40 uppercase tracking-widest">
              Your artwork
            </span>
            <div className="relative w-36 md:w-40 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/assets/listings/salmon/Salmon.jpg"
                alt="Example artwork — salmon chart print"
                className="w-full object-cover aspect-[2/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-teal-400/20 rounded-xl pointer-events-none" />
            </div>
            <span className="text-[10px] font-mono text-foreground-40">salmon_chart.jpg</span>
          </div>

          {/* Arrow connector */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 md:pt-16">
            <div className="md:hidden flex flex-col items-center gap-0.5">
              <div className="h-5 w-px bg-teal-400/30" />
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span className="text-[9px] font-mono text-teal-400/50">60 sec</span>
            </div>
            <div className="hidden md:flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1">
                <div className="w-6 h-px bg-teal-400/30" />
                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[9px] font-mono text-teal-400/50 whitespace-nowrap">~60 seconds</span>
            </div>
          </div>

          {/* File output grid */}
          <div className="flex-1 w-full">
            <span className="text-[10px] font-mono text-foreground-40 uppercase tracking-widest block mb-3 text-center md:text-left">
              Output files <span className="normal-case opacity-50">— examples</span>
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {FILES.map((file, i) => (
                <div
                  key={file.name}
                  className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-2.5 transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: `${i * 65}ms`,
                  }}
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <div className="flex items-start gap-1.5 min-w-0">
                      <svg
                        className="w-3 h-3 text-teal-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span className="font-mono text-[8px] leading-tight text-teal-400 break-all">
                        {file.name}
                      </span>
                    </div>
                    <span className={`text-[8px] font-mono flex-shrink-0 ${PACK_COLORS[file.pack]}`}>
                      {file.pack}
                    </span>
                  </div>
                  <div className="pl-[18px] font-mono text-[8px] text-foreground-40">
                    {file.dims} · 300 DPI
                  </div>
                </div>
              ))}
            </div>

            {/* Export modes */}
            <div className="mt-4 flex flex-wrap gap-1.5 justify-center md:justify-start">
              {["Print packs", "Landscape sizes", "Square sizes", "Quick Export", "My Packs"].map((mode) => (
                <span
                  key={mode}
                  className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-white/[0.08] text-foreground-40"
                >
                  {mode}
                </span>
              ))}
            </div>

            {/* Delivery line */}
            <p className="mt-3 text-[10px] font-mono text-foreground-40 text-center md:text-left">
              All delivered as named, 300 DPI ZIP files — ready to upload to Etsy.
            </p>
          </div>
        </div>

        {/* Country flag strip */}
        <div className="mt-14 text-center">
          <p className="text-[10px] font-mono text-foreground-40 uppercase tracking-widest mb-3">
            Sellers using SnapToSize
          </p>
          <div className="flex justify-center flex-wrap items-center gap-2">
            {FLAGS.map((flag) => (
              <span
                key={flag}
                className="text-xl opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {flag}
              </span>
            ))}
            <span className="text-[10px] font-mono text-foreground-40 ml-1">& more</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://app.snaptosize.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200 group"
          >
            Stop resizing. Start selling.
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="mt-1 text-[10px] font-mono text-foreground-40">No account needed</p>
        </div>
      </Container>
    </section>
  );
}
