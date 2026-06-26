import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-16">
      <Container>
        {/* Main grid: Product | Size Guides (2×wide) | Etsy Guides | Company */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-[1fr_2fr_1fr_1fr] gap-8">

          {/* ── Product ── */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Product</h3>
            <ul className="space-y-1.5 text-sm text-foreground-60">
              <li><Link href="/guide" className="transition-colors hover:text-accent-light">User Guide</Link></li>
              <li><Link href="/etsy-print-size-calculator" className="transition-colors hover:text-accent-light">Print Size Calculator</Link></li>
              <li><Link href="/sizes" className="transition-colors hover:text-accent-light">All Pack Sizes</Link></li>
              <li><Link href="/distortion-free-crop" className="transition-colors hover:text-accent-light">Perfect Fit — Crop to Ratio</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-accent-light">Pricing</Link></li>
              <li><Link href="/faq" className="transition-colors hover:text-accent-light">FAQ</Link></li>
            </ul>
          </div>

          {/* ── Size Guides — 2-col grid ── */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Size Guides</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-1.5 text-xs text-foreground-60">
                <li className="text-[11px] font-semibold text-foreground/40 uppercase tracking-widest pt-1">Popular</li>
                <li><Link href="/etsy-print-sizes" className="transition-colors hover:text-accent-light">Etsy Print Sizes</Link></li>
                <li><Link href="/etsy-8x10-print-size" className="transition-colors hover:text-accent-light">8×10 Print Size</Link></li>
                <li><Link href="/etsy-5x7-print-size" className="transition-colors hover:text-accent-light">5×7 Print Size</Link></li>
                <li><Link href="/etsy-a4-print-size" className="transition-colors hover:text-accent-light">A4 Print Size</Link></li>
                <li><Link href="/etsy-16x20-print-size" className="transition-colors hover:text-accent-light">16×20 Print Size</Link></li>
                <li><Link href="/etsy-a1-print-size" className="transition-colors hover:text-accent-light">A1 Print Size</Link></li>
                <li><Link href="/etsy-poster-sizes" className="transition-colors hover:text-accent-light">Poster Sizes</Link></li>
                <li className="text-[11px] font-semibold text-foreground/40 uppercase tracking-widest pt-2">Comparisons</li>
                <li><Link href="/5x7-vs-4x6-print-size" className="transition-colors hover:text-accent-light">5×7 vs 4×6</Link></li>
                <li><Link href="/8x10-vs-11x14-print-size" className="transition-colors hover:text-accent-light">8×10 vs 11×14</Link></li>
                <li><Link href="/8x10-vs-5x7-print-size" className="transition-colors hover:text-accent-light">8×10 vs 5×7</Link></li>
                <li><Link href="/8x10-vs-8-5x11-print-size" className="transition-colors hover:text-accent-light">8×10 vs 8.5×11</Link></li>
                <li><Link href="/11x14-vs-12x16-print-size" className="transition-colors hover:text-accent-light">11×14 vs 12×16</Link></li>
                <li><Link href="/11x14-vs-16x20-print-size" className="transition-colors hover:text-accent-light">11×14 vs 16×20</Link></li>
                <li><Link href="/16x20-vs-18x24-print-size" className="transition-colors hover:text-accent-light">16×20 vs 18×24</Link></li>
                <li><Link href="/18x24-vs-24x36-print-size" className="transition-colors hover:text-accent-light">18×24 vs 24×36</Link></li>
                <li><Link href="/12x16-vs-16x20-print-size" className="transition-colors hover:text-accent-light">12×16 vs 16×20</Link></li>
                <li><Link href="/a4-vs-8x10-print-size" className="transition-colors hover:text-accent-light">A4 vs 8×10</Link></li>
                <li><Link href="/8x10-vs-16x20-print-size" className="transition-colors hover:text-accent-light">8×10 vs 16×20</Link></li>
                <li><Link href="/8x10-vs-12x16-print-size" className="transition-colors hover:text-accent-light">8×10 vs 12×16</Link></li>
                <li><Link href="/iso-vs-us-print-sizes" className="transition-colors hover:text-accent-light">ISO vs US Sizes</Link></li>
                <li><Link href="/sizes" className="transition-colors hover:text-accent-light font-medium text-foreground/50">All size guides →</Link></li>
              </ul>
              <ul className="space-y-1.5 text-xs text-foreground-60">
                <li className="text-[11px] font-semibold text-foreground/40 uppercase tracking-widest pt-1">Framing</li>
                <li><Link href="/print-size-for-frame-guide" className="transition-colors hover:text-accent-light">Print-to-Frame Guide</Link></li>
                <li><Link href="/ikea-ribba-frame-print-sizes" className="transition-colors hover:text-accent-light">IKEA Ribba Sizes</Link></li>
                <li><Link href="/canvas-print-sizes-for-etsy" className="transition-colors hover:text-accent-light">Canvas Print Sizes</Link></li>
                <li className="text-[11px] font-semibold text-foreground/40 uppercase tracking-widest pt-2">Niche</li>
                <li><Link href="/etsy-wedding-printable-sizes" className="transition-colors hover:text-accent-light">Wedding Sizes</Link></li>
                <li><Link href="/etsy-sticker-sheet-size" className="transition-colors hover:text-accent-light">Sticker Sheet Size</Link></li>
                <li><Link href="/etsy-floral-print-sizes" className="transition-colors hover:text-accent-light">Floral Print Sizes</Link></li>
                <li><Link href="/etsy-celestial-wall-art-sizes" className="transition-colors hover:text-accent-light">Celestial Wall Art</Link></li>
                <li><Link href="/etsy-typography-wall-art-sizes" className="transition-colors hover:text-accent-light">Typography Art</Link></li>
                <li><Link href="/etsy-line-art-sizes" className="transition-colors hover:text-accent-light">Line Art Sizes</Link></li>
                <li><Link href="/etsy-kids-wall-art-sizes" className="transition-colors hover:text-accent-light">Kids Wall Art</Link></li>
                <li><Link href="/etsy-map-art-print-sizes" className="transition-colors hover:text-accent-light">Map Art Sizes</Link></li>
                <li><Link href="/etsy-black-and-white-art-sizes" className="transition-colors hover:text-accent-light">Black &amp; White Art</Link></li>
                <li><Link href="/etsy-anime-manga-art-sizes" className="transition-colors hover:text-accent-light">Anime &amp; Manga Art</Link></li>
              </ul>
            </div>
          </div>

          {/* ── Etsy Guides ── */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Etsy Guides</h3>
            <ul className="space-y-1.5 text-xs text-foreground-60">
              <li><Link href="/how-to-sell-digital-downloads-on-etsy" className="transition-colors hover:text-accent-light">How to Sell on Etsy</Link></li>
              <li><Link href="/most-popular-etsy-print-sizes-to-sell" className="transition-colors hover:text-accent-light">Popular Sizes to Sell</Link></li>
              <li><Link href="/best-resolution-for-etsy-printables" className="transition-colors hover:text-accent-light">Best Resolution</Link></li>
              <li><Link href="/print-sizes-at-300-dpi" className="transition-colors hover:text-accent-light">300 DPI Print Sizes</Link></li>
              <li><Link href="/dpi-vs-pixel-dimensions" className="transition-colors hover:text-accent-light">DPI vs Pixel Dimensions</Link></li>
              <li><Link href="/best-file-format-etsy-printables" className="transition-colors hover:text-accent-light">Best File Format</Link></li>
              <li><Link href="/resize-image-without-cropping-etsy" className="transition-colors hover:text-accent-light">Resize Without Cropping</Link></li>
              <li><Link href="/what-files-to-include-etsy-digital-download" className="transition-colors hover:text-accent-light">What Files to Include</Link></li>
              <li><Link href="/how-to-upload-more-than-5-files-etsy" className="transition-colors hover:text-accent-light">Upload 5+ Files to Etsy</Link></li>
              <li><Link href="/cmyk-vs-rgb-for-etsy-printables" className="transition-colors hover:text-accent-light">CMYK vs RGB</Link></li>
              <li><Link href="/etsy-printable-bleed-and-crop-marks" className="transition-colors hover:text-accent-light">Bleed &amp; Crop Marks</Link></li>
              <li><Link href="/snaptosize-vs-canva" className="transition-colors hover:text-accent-light">SnapToSize vs Canva</Link></li>
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-1.5 text-sm text-foreground-60">
              <li><Link href="/about" className="transition-colors hover:text-accent-light">About</Link></li>
              <li><Link href="/partners" className="transition-colors hover:text-accent-light">Partner Program</Link></li>
              <li>
                <a href="mailto:support@snaptosize.com" className="transition-colors hover:text-accent-light">
                  Contact
                </a>
              </li>
            </ul>
            <h3 className="font-semibold text-sm mt-5 mb-3">Legal</h3>
            <ul className="space-y-1.5 text-sm text-foreground-60">
              <li><Link href="/privacy" className="transition-colors hover:text-accent-light">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-accent-light">Terms of Service</Link></li>
              <li><Link href="/refund" className="transition-colors hover:text-accent-light">Refund Policy</Link></li>
              <li><Link href="/cookies" className="transition-colors hover:text-accent-light">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="border-t border-border py-5 text-center text-xs text-foreground-60">
          <p>© {new Date().getFullYear()} SnapToSize. All rights reserved. · SnapToSize is not affiliated with Etsy</p>
        </div>
      </Container>
    </footer>
  );
}
