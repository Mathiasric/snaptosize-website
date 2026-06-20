"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, ZoomIn, Package } from "lucide-react";
import { Container } from "@/components/Container";

type Print = { src: string; size: string; tag: string; ratio: number };
type Zoom = { src: string; alt: string; caption: string };

// 5 REAL SnapToSize exports of one bunny upload — each at its true ratio, whole image kept (no crop).
// Ordered for the fan: center slot = the recognizable original 2:3, varied ratios fanning outward.
const PRINTS: Print[] = [
  { src: "/assets/modes-demo/sp-2.jpg", size: "6×8 in", tag: "3:4", ratio: 0.75 },   // far left
  { src: "/assets/modes-demo/sp-4.jpg", size: "A5", tag: "ISO A", ratio: 0.705 },     // left
  { src: "/assets/modes-demo/sp-1.jpg", size: "8×12 in", tag: "2:3", ratio: 0.667 },  // center / front
  { src: "/assets/modes-demo/sp-3.jpg", size: "8×10 in", tag: "4:5", ratio: 0.8 },    // right
  { src: "/assets/modes-demo/sp-5.jpg", size: "11×14 in", tag: "Extras", ratio: 0.786 }, // far right
];

const BASE_H = 320; // px height of the center print; siblings scale down

// Per-slot fan geometry, index 0..4 (center = 2). Wide enough that each ratio's distinct shape peeks out.
const SLOT = [
  { x: -288, y: 42, rot: -13, scale: 0.8, z: 1, op: 0.88 },
  { x: -150, y: 14, rot: -7, scale: 0.9, z: 2, op: 0.96 },
  { x: 0, y: 0, rot: 0, scale: 1, z: 5, op: 1 },
  { x: 150, y: 14, rot: 7, scale: 0.9, z: 2, op: 0.96 },
  { x: 288, y: 42, rot: 13, scale: 0.8, z: 1, op: 0.88 },
];

function PackSpread({ onZoom }: { onZoom: (z: Zoom) => void }) {
  return (
    // responsive height frame; inner fan keeps exact geometry and scales down on small screens
    <div className="relative mx-auto w-full max-w-5xl h-[260px] sm:h-[376px] overflow-x-clip">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[19%] scale-[0.52] sm:scale-90 lg:scale-100">
        <div className="relative" style={{ height: BASE_H, width: 1 }}>
          {PRINTS.map((p, idx) => {
            const s = SLOT[idx];
            const h = BASE_H * s.scale;
            const w = h * p.ratio;
            const isCenter = idx === 2;
            return (
              <button
                key={p.src}
                onClick={() =>
                  onZoom({
                    src: p.src,
                    alt: `Bunny art as a ${p.size} ${p.tag} print`,
                    caption: `${p.size} · ${p.tag} pack · 300 DPI · named & print-ready`,
                  })
                }
                aria-label={`Enlarge ${p.size} ${p.tag} print`}
                className={`group absolute left-0 top-0 origin-center overflow-hidden rounded-lg border border-white/10 ring-1 ring-white/[0.05] shadow-2xl shadow-black/60 cursor-zoom-in hover:!z-20 hover:ring-[#2DD4BF]/40 transition-[box-shadow] ${
                  isCenter ? "sp-float" : ""
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
                  alt={`Bunny art as a ${p.size} ${p.tag} print`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                {/* printed-paper sheen */}
                <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/[0.04]" />
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

      <style>{`@keyframes float{0%,100%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,calc(-50% - 10px)) rotate(0deg)}}.sp-float{animation:float 7s ease-in-out infinite}@media (prefers-reduced-motion:reduce){.sp-float{animation:none}}`}</style>
    </div>
  );
}

export function ModesSection() {
  const [zoom, setZoom] = useState<Zoom | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <section className="py-24">
      <Container>
        {/* ===== Size Packs — hero ===== */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF]">
            Size Packs
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-3">
            One upload becomes every Etsy size
          </h2>
          <p className="text-foreground-60 max-w-xl mx-auto">
            Drop in your art once. Get it back at every ratio, your whole image kept, each file
            named and 300 DPI, ready to list in 45 seconds.
          </p>
        </div>

        <PackSpread onZoom={setZoom} />

        <p className="text-center text-sm text-foreground-60 mt-12 max-w-2xl mx-auto">
          Every standard Etsy ratio, 2:3, 3:4, 4:5, ISO A, plus extras, up to{" "}
          <span className="text-foreground font-medium">70 print-ready files</span> from one upload,
          each ZIP under Etsy&apos;s 20 MB limit.
        </p>

        {/* ===== Perfect Fit — secondary, complementary ===== */}
        <div className="mt-20 sm:mt-28 border-t border-white/[0.06] pt-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
            Perfect Fit
          </span>
          <h3 className="text-xl md:text-2xl font-bold mt-3 mb-3">
            Or choose exactly what stays in frame
          </h3>
          <p className="text-foreground-60 max-w-lg mx-auto mb-8">
            Reframe to any ratio with a focal crop you control. Your proportions stay exact, you
            decide what is kept, with a live preview before you export.
          </p>

          <button
            onClick={() =>
              setZoom({
                src: "/assets/visuals/distortion-free-crop-demo.png",
                alt: "Fox art reframed from 2:3 to 4:5 and 3:4 with Perfect Fit, the fox kept full while empty sky and grass are trimmed",
                caption: "Perfect Fit — reframe to any ratio, you choose what stays in frame",
              })
            }
            aria-label="Enlarge Perfect Fit reframing example"
            className="group relative mx-auto block w-full max-w-2xl overflow-hidden rounded-xl border border-white/[0.08] shadow-2xl shadow-black/40 cursor-zoom-in transition-shadow hover:shadow-black/60"
          >
            <img
              src="/assets/visuals/distortion-free-crop-demo.png"
              alt="Fox art reframed from 2:3 to 4:5 and 3:4 with Perfect Fit, the fox kept full while empty sky and grass are trimmed"
              className="w-full"
              loading="lazy"
              draggable={false}
            />
            <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
              <ZoomIn className="w-3 h-3" /> Enlarge
            </span>
          </button>

          <p className="mt-6 text-sm">
            <a
              href="/distortion-free-crop"
              className="text-[#A78BFA] font-medium underline-offset-4 hover:underline"
            >
              See how Perfect Fit works <ArrowRight className="inline w-3.5 h-3.5 align-middle" />
            </a>
          </p>
        </div>

        <p className="flex items-center justify-center gap-2 text-center text-sm text-foreground-60 mt-16">
          <Package className="w-4 h-4 text-foreground-60 shrink-0" />
          Either way, your files come named, 300 DPI, in a tidy ZIP, ready to upload to Etsy.
        </p>

        <p className="text-center text-sm text-foreground-60 mt-6">
          Free to try.{" "}
          <a href="https://app.snaptosize.com" className="text-[#2DD4BF] font-medium underline-offset-4 hover:underline">
            No signup, no install <ArrowRight className="inline w-3.5 h-3.5 align-middle" />
          </a>
        </p>
      </Container>

      {zoom && (
        <div
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-6 cursor-zoom-out"
        >
          <button onClick={() => setZoom(null)} aria-label="Close" className="absolute top-5 right-5 text-white/70 hover:text-white">
            <X className="w-7 h-7" />
          </button>
          <img src={zoom.src} alt={zoom.alt} className="max-h-[82vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" />
          <p className="mt-4 text-sm text-white/80">{zoom.caption}</p>
        </div>
      )}
    </section>
  );
}
