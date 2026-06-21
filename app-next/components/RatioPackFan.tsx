"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

export type FanPrint = { src: string; size: string; tag: string; ratio: number };
type Zoom = { src: string; alt: string; caption: string };

const BASE_H = 320; // px height of the center print; siblings scale down

// Per-slot fan geometry, index 0..4 (center = 2). Wide enough that each ratio's distinct shape peeks out.
const SLOT = [
  { x: -288, y: 42, rot: -13, scale: 0.8, z: 1, op: 0.88 },
  { x: -150, y: 14, rot: -7, scale: 0.9, z: 2, op: 0.96 },
  { x: 0, y: 0, rot: 0, scale: 1, z: 5, op: 1 },
  { x: 150, y: 14, rot: 7, scale: 0.9, z: 2, op: 0.96 },
  { x: 288, y: 42, rot: 13, scale: 0.8, z: 1, op: 0.88 },
];

/**
 * Reusable Size Packs "pack spread" — five REAL SnapToSize exports of one upload,
 * each at its true ratio, whole image kept (no crop). Built to mirror the homepage
 * ModesSection fan so SEO pages get the same proof-of-output visual with their own artwork.
 * Pass exactly 5 prints, ordered so index 2 is the recognizable original (2:3 center).
 */
export function RatioPackFan({
  prints,
  subject,
}: {
  prints: FanPrint[];
  subject: string;
}) {
  const [zoom, setZoom] = useState<Zoom | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <>
      {/* responsive height frame; inner fan keeps exact geometry and scales down on small screens */}
      <div className="relative mx-auto w-full max-w-5xl h-[260px] sm:h-[376px] overflow-x-clip">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[19%] scale-[0.52] sm:scale-90 lg:scale-100">
          <div className="relative" style={{ height: BASE_H, width: 1 }}>
            {prints.map((p, idx) => {
              const s = SLOT[idx];
              const h = BASE_H * s.scale;
              const w = h * p.ratio;
              const isCenter = idx === 2;
              return (
                <button
                  key={p.src}
                  onClick={() =>
                    setZoom({
                      src: p.src,
                      alt: `${subject} as a ${p.size} ${p.tag} print`,
                      caption: `${p.size} · ${p.tag} pack · 300 DPI · named & print-ready`,
                    })
                  }
                  aria-label={`Enlarge ${p.size} ${p.tag} print`}
                  className={`group absolute left-0 top-0 origin-center overflow-hidden rounded-lg border border-white/10 ring-1 ring-white/[0.05] shadow-2xl shadow-black/60 cursor-zoom-in hover:!z-20 hover:ring-[#2DD4BF]/40 transition-[box-shadow] ${
                    isCenter ? "rpf-float" : ""
                  }`}
                  style={{
                    height: h,
                    width: w,
                    zIndex: s.z,
                    opacity: s.op,
                    transform: `translate(calc(-50% + ${s.x}px), calc(-50% + ${s.y}px)) rotate(${s.rot}deg)`,
                  }}
                >
                  <img
                    src={p.src}
                    alt={`${subject} as a ${p.size} ${p.tag} print`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  {/* printed-paper sheen */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/[0.04]"
                  />
                  {/* ratio-group badge — pinned to each card's exposed outer edge so overlap never hides it */}
                  <span
                    className={`absolute bottom-2.5 whitespace-nowrap rounded-full bg-black/60 font-semibold tracking-wide text-white/90 backdrop-blur-sm ${
                      isCenter
                        ? "left-1/2 -translate-x-1/2 px-3 py-1 text-[11px]"
                        : idx < 2
                          ? "left-2 px-2 py-0.5 text-[9px]"
                          : "right-2 px-2 py-0.5 text-[9px]"
                    }`}
                  >
                    {p.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <style>{`@keyframes rpf-float{0%,100%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,calc(-50% - 10px)) rotate(0deg)}}.rpf-float{animation:rpf-float 7s ease-in-out infinite}@media (prefers-reduced-motion:reduce){.rpf-float{animation:none}}`}</style>
      </div>

      {zoom && (
        <div
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-6 cursor-zoom-out"
        >
          <button
            onClick={() => setZoom(null)}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/70 hover:text-white"
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={zoom.src}
            alt={zoom.alt}
            className="max-h-[82vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
          <p className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <ZoomIn className="w-3.5 h-3.5" />
            {zoom.caption}
          </p>
        </div>
      )}
    </>
  );
}
