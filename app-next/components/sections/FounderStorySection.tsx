"use client";

import { Container } from "@/components/Container";
import { useEffect, useRef, useState } from "react";

const FILES = [
  { name: "artwork_4x6_300dpi.jpg",   dims: "1200×1800" },
  { name: "artwork_8x12_300dpi.jpg",  dims: "2400×3600" },
  { name: "artwork_16x24_300dpi.jpg", dims: "4800×7200" },
  { name: "artwork_5x7_300dpi.jpg",   dims: "1500×2100" },
  { name: "artwork_8x10_300dpi.jpg",  dims: "2400×3000" },
  { name: "artwork_11x14_300dpi.jpg", dims: "3300×4200" },
  { name: "artwork_A4_300dpi.jpg",    dims: "2480×3508" },
  { name: "artwork_16x20_300dpi.jpg", dims: "4800×6000" },
  { name: "artwork_A3_300dpi.jpg",    dims: "3508×4961" },
];

const FLAGS = ["🇺🇸", "🇬🇧", "🇳🇴", "🇦🇺", "🇩🇪", "🇨🇦", "🇸🇪", "🇳🇱", "🇫🇷", "🇨🇭"];

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
                src="/assets/founder/listing-salmon.png"
                alt="Example artwork input"
                className="w-full h-full object-cover aspect-[3/4]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-teal-400/20 rounded-xl pointer-events-none" />
            </div>
            <span className="text-[10px] font-mono text-foreground-40">original.png</span>
          </div>

          {/* Arrow connector */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 md:pt-16">
            {/* Mobile: down */}
            <div className="md:hidden flex flex-col items-center gap-0.5">
              <div className="h-5 w-px bg-teal-400/30" />
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span className="text-[9px] font-mono text-teal-400/50">60 sec</span>
            </div>
            {/* Desktop: right */}
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
              Output files
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
                  <div className="flex items-start gap-1.5 mb-1">
                    <svg
                      className="w-3 h-3 text-teal-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span className="font-mono text-[8.5px] leading-tight text-teal-400 break-all">
                      {file.name}
                    </span>
                  </div>
                  <div className="pl-[18px] font-mono text-[8.5px] text-foreground-40">
                    {file.dims}px &middot; 300 DPI
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-foreground-40 font-mono justify-center md:justify-start">
              <span><span className="text-teal-400">✓</span> Etsy-ready names</span>
              <span><span className="text-teal-400">✓</span> 300 DPI guaranteed</span>
              <span><span className="text-teal-400">✓</span> Under 20 MB ZIP</span>
            </div>
          </div>
        </div>

        {/* Country flag strip */}
        <div className="mt-14 text-center">
          <p className="text-[10px] font-mono text-foreground-40 uppercase tracking-widest mb-3">
            Sellers using SnapToSize
          </p>
          <div className="flex justify-center flex-wrap gap-2.5">
            {FLAGS.map((flag) => (
              <span
                key={flag}
                className="text-xl opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {flag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
