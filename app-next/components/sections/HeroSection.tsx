import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background Image with Refined Purple Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero_image.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(1.15) contrast(1.08)' }}
        />
        {/* Top vignette - dark navy at top, transparent at bottom for purple glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,5,10,0.95) 0%, rgba(5,5,10,0.7) 35%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0) 65%)'
          }}
        />
        {/* Side vignette - darker edges for premium control */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(5,5,15,0.85) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(5,5,15,0.85) 100%)'
          }}
        />
        {/* Concentrated glow at bottom center - 15% narrower */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 600px 350px at 50% 75%, rgba(124, 58, 237, 0.12) 0%, rgba(124, 58, 237, 0.04) 50%, transparent 75%)'
          }}
        />
        {/* Subtle depth behind headline */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Primary Messaging */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3" style={{ textShadow: '0 8px 40px rgba(0,0,0,0.45), 0 2px 20px rgba(11, 11, 18, 0.9)' }}>
                Launch a complete, professional Etsy print set from a single image — in seconds.
              </h1>

              <p className="text-base md:text-lg text-white/85 mb-5 max-w-lg mx-auto leading-snug" style={{ textShadow: '0 2px 15px rgba(11, 11, 18, 0.9), 0 0 30px rgba(11, 11, 18, 0.7)' }}>
                What normally takes 1–3 hours of manual resizing becomes seconds. Generate all required Etsy ratios at 300 DPI with zero quality loss — perfectly organized and ready to upload.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-2.5 justify-center">
                <a
                  href="https://app.snaptosize.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-base px-7 py-3">Start Free</Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="secondary" className="text-base px-7 py-3">
                    See how it works
                  </Button>
                </a>
              </div>

              {/* Microcopy */}
              <p className="text-xs text-white/80 mb-5">
                No credit card required.
              </p>

              {/* Proof Bullets */}
              <div className="space-y-1.5 inline-flex flex-col items-start mx-auto" style={{ textShadow: '0 2px 10px rgba(11, 11, 18, 0.8)' }}>
                <div className="flex items-center gap-3 text-sm text-foreground-80">
                  <Check className="h-4 w-4 text-white/90 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))' }} />
                  <span>Professional Etsy-ready structure</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground-80">
                  <Check className="h-4 w-4 text-white/90 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))' }} />
                  <span>Full ratio packs + single & square exports</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground-80">
                  <Check className="h-4 w-4 text-white/90 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))' }} />
                  <span>300 DPI print-ready quality</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground-80">
                  <Check className="h-4 w-4 text-white/90 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))' }} />
                  <span>Save hours per listing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
