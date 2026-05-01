"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

import { VideoModal } from "@/components/VideoModal";


export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Pure CSS background — animated gradient orbs */}
      <div className="absolute inset-0 z-0" style={{ background: '#06060F' }}>
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Teal orb — top left */}
        <div
          className="absolute"
          style={{
            width: '700px',
            height: '700px',
            top: '-200px',
            left: '-150px',
            background: 'radial-gradient(circle, rgba(45,212,191,0.18) 0%, rgba(45,212,191,0.06) 50%, transparent 70%)',
            animation: 'glowShift 11s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        />
        {/* Purple orb — bottom right */}
        <div
          className="absolute"
          style={{
            width: '800px',
            height: '800px',
            bottom: '-250px',
            right: '-200px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.07) 50%, transparent 70%)',
            animation: 'glowBreathe 8s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        />
        {/* Center glow — behind content */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 900px 500px at 50% 40%, rgba(124,58,237,0.1) 0%, transparent 70%)',
          }}
        />
        {/* Bottom vignette — blends into page */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(6,6,15,0.95) 100%)'
          }}
        />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '180px 180px',
            opacity: 0.05,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3" style={{ textShadow: '0 8px 40px rgba(0,0,0,0.45), 0 2px 20px rgba(11, 11, 18, 0.9)' }}>
                Launch a complete, professional Etsy print set from a single image —{" "}
                <span style={{ background: 'linear-gradient(90deg, #2DD4BF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>in seconds.</span>
              </h1>

              <p className="text-base md:text-lg text-white/85 mb-5 max-w-lg mx-auto leading-snug" style={{ textShadow: '0 2px 15px rgba(11, 11, 18, 0.9), 0 0 30px rgba(11, 11, 18, 0.7)' }}>
                Upload once. Get every Etsy ratio at 300 DPI — organized, named, and ready to list.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 mb-2 justify-center">
                <a
                  href="https://app.snaptosize.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-base px-7 py-3">Create Your First Print Pack — Free</Button>
                </a>
              </div>
              <p className="text-xs text-white/60 mb-1.5">
                No credit card required.
              </p>
              {/* Social proof counter */}
              <p className="text-xs text-white/55 mb-1 flex items-center justify-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                Used by Etsy sellers worldwide
              </p>
              <p className="text-xs text-white/55 mb-5">
                30+ Etsy print sizes in under 60 seconds. Manually in Photoshop: 1+ hour.
              </p>

              {/* Video Thumbnail — primary visual hook */}
              <button
                onClick={() => setModalOpen(true)}
                className="relative max-w-2xl mx-auto rounded-xl overflow-hidden border border-border block w-full group cursor-pointer mb-5 aspect-[16/8]"
              >
                <video
                  src="/assets/snaptosize_video_showcase.mp4"
                  poster="/assets/video_display_image.webp"
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  Watch demo · 47s
                </span>
              </button>

              {/* Secondary CTA — Calculator */}
              <div>
                <a
                  href="/etsy-print-size-calculator"
                  className="text-sm text-white/60 hover:text-white/90 underline underline-offset-2 transition-colors"
                >
                  Not sure about your image dimensions? Try the free Print Size Calculator →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc="/assets/snaptosize_video_showcase.mp4"
      />
    </section>
  );
}
