"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-guides-dropdown]')) {
        setGuidesOpen(false);
      }
      if (!target.closest('[data-compare-dropdown]')) {
        setCompareOpen(false);
      }
    };

    if (guidesOpen || compareOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [guidesOpen, compareOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight transition-colors hover:text-accent-light focus-ring"
          >
            <img
              src="/assets/favicon/logo.svg"
              alt="SnapToSize"
              className="h-7 w-7"
            />
            SnapToSize
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              {/* Guides dropdown trigger */}
              <div data-guides-dropdown>
                <button
                  onClick={() => { setGuidesOpen(!guidesOpen); setCompareOpen(false); }}
                  className="text-foreground-60 transition-colors hover:text-foreground focus-ring flex items-center gap-1"
                >
                  Guides
                  <ChevronDown className={`h-4 w-4 transition-transform ${guidesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Compare dropdown trigger */}
              <div data-compare-dropdown>
                <button
                  onClick={() => { setCompareOpen(!compareOpen); setGuidesOpen(false); }}
                  className="text-foreground-60 transition-colors hover:text-foreground focus-ring flex items-center gap-1"
                >
                  Compare
                  <ChevronDown className={`h-4 w-4 transition-transform ${compareOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <Link
                href="/pricing"
                className="text-foreground-60 transition-colors hover:text-foreground focus-ring"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-foreground-60 transition-colors hover:text-foreground focus-ring"
              >
                FAQ
              </Link>
            </div>

            {/* Start Free button (visible on all screens) */}
            <a
              href="https://app.snaptosize.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="hidden md:block">Start Free</Button>
              <Button className="md:hidden text-sm px-4 py-2">Start Free</Button>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-foreground-60 hover:text-foreground transition-colors focus-ring rounded"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </Container>

      {/* Desktop Guides mega menu */}
      {guidesOpen && (
        <div className="hidden md:block absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-lg overflow-y-auto max-h-[calc(100vh-64px)]" data-guides-dropdown>
          <Container>
            <div className="grid grid-cols-6 gap-6 py-6">
              {/* Size Guides */}
              <div className="col-span-2">
                <p className="pb-2.5 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Size Guides</p>
                <div className="space-y-0.5">
                  <Link href="/etsy-print-sizes" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Etsy Print Sizes
                  </Link>
                  <Link href="/etsy-print-ratios" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Etsy Print Ratios
                  </Link>
                  <Link href="/distortion-free-crop" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Reframe Art to Any Ratio
                  </Link>
                  <Link href="/most-popular-etsy-print-sizes-to-sell" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Most Popular Sizes to Sell
                  </Link>
                  <Link href="/how-many-sizes-etsy-printable" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    How Many Sizes to Include
                  </Link>
                  <Link href="/etsy-digital-download-size-variations" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Digital Download Size Variations
                  </Link>
                  <Link href="/etsy-square-print-sizes" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Square Print Sizes
                  </Link>
                  <Link href="/canvas-print-sizes-for-etsy" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Canvas Print Sizes
                  </Link>
                  <Link href="/print-size-for-frame-guide" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Print-to-Frame Guide
                  </Link>
                  <Link href="/print-mat-sizes-for-frames" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Mat Sizes for Frames
                  </Link>
                  <Link href="/ikea-ribba-frame-print-sizes" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    IKEA Ribba Frame Sizes
                  </Link>
                  <Link href="/etsy-sticker-sheet-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Sticker Sheet Size
                  </Link>
                  <Link href="/etsy-bookmark-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    Bookmark Size
                  </Link>
                </div>
                <div className="pt-2 mt-2 border-t border-border/50">
                  <Link href="/etsy-print-size-calculator" className="block py-1.5 text-sm text-[#2DD4BF] hover:text-[#2DD4BF]/80 transition-colors font-medium">
                    Print Size Calculator
                  </Link>
                </div>
              </div>

              {/* Individual Size Reference */}
              <div className="col-span-1">
                <p className="pb-2.5 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">By Size</p>
                <div className="space-y-0.5">
                  <Link href="/etsy-8x10-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    8&times;10 Print Size
                  </Link>
                  <Link href="/etsy-5x7-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    5&times;7 Print Size
                  </Link>
                  <Link href="/etsy-11x14-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    11&times;14 Print Size
                  </Link>
                  <Link href="/etsy-16x20-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    16&times;20 Print Size
                  </Link>
                  <Link href="/etsy-18x24-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    18&times;24 Print Size
                  </Link>
                  <Link href="/etsy-24x36-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    24&times;36 Print Size
                  </Link>
                  <Link href="/etsy-11x17-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    11&times;17 Print Size
                  </Link>
                  <Link href="/etsy-12x18-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    12&times;18 Print Size
                  </Link>
                  <Link href="/etsy-13x19-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    13&times;19 Print Size
                  </Link>
                  <Link href="/etsy-4x6-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    4&times;6 Print Size
                  </Link>
                  <Link href="/etsy-12x16-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    12&times;16 Print Size
                  </Link>
                  <Link href="/etsy-20x24-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    20&times;24 Print Size
                  </Link>
                  <Link href="/etsy-20x30-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    20&times;30 Print Size
                  </Link>
                  <Link href="/etsy-poster-sizes" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    Poster Sizes
                  </Link>
                  <Link href="/etsy-a4-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    A4 Print Size
                  </Link>
                  <Link href="/etsy-a3-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    A3 Print Size
                  </Link>
                  <Link href="/etsy-a5-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    A5 Print Size
                  </Link>
                  <Link href="/etsy-a2-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    A2 Print Size
                  </Link>
                  <Link href="/etsy-a1-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    A1 Print Size
                  </Link>
                  <Link href="/etsy-8-5x11-print-size" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    8.5&times;11 US Letter
                  </Link>
                  <Link href="/a4-300-dpi-pixels" className="block py-0.5 text-xs text-foreground-60 hover:text-foreground transition-colors">
                    A4 at 300 DPI
                  </Link>
                </div>
              </div>

              {/* Seller Guides + Troubleshooting — 2-col split */}
              <div className="col-span-3">
                <p className="pb-2.5 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Seller Guides</p>
                <div className="grid grid-cols-2 gap-x-6">
                  <div className="space-y-0.5">
                    <Link href="/how-to-sell-digital-downloads-on-etsy" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      How to Sell on Etsy
                    </Link>
                    <Link href="/how-to-sell-printables-on-etsy-without-photoshop" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Sell Without Photoshop
                    </Link>
                    <Link href="/what-files-to-include-etsy-digital-download" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      What Files to Include
                    </Link>
                    <Link href="/how-to-resize-images-for-etsy" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      How to Resize Images
                    </Link>
                    <Link href="/best-resolution-for-etsy-printables" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Best Resolution
                    </Link>
                    <Link href="/print-sizes-at-300-dpi" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      300 DPI Print Sizes
                    </Link>
                    <Link href="/dpi-vs-pixel-dimensions" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      DPI vs Pixel Dimensions
                    </Link>
                    <Link href="/resize-image-without-cropping-etsy" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Resize Without Cropping
                    </Link>
                    <Link href="/etsy-digital-download-file-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Etsy File Size Guide
                    </Link>
                    <Link href="/how-to-package-digital-wall-art-for-etsy" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Package Digital Wall Art
                    </Link>
                    <Link href="/how-to-upload-more-than-5-files-etsy" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Upload 5+ Files to Etsy
                    </Link>
                    <Link href="/best-file-format-etsy-printables" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Best File Format
                    </Link>
                    <Link href="/how-to-price-etsy-printables" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      How to Price Printables
                    </Link>
                  </div>
                  <div className="space-y-0.5">
                    <Link href="/snaptosize-vs-canva" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      SnapToSize vs Canva
                    </Link>
                    <Link href="/canva-print-size-for-etsy" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Canva Print Size for Etsy
                    </Link>
                    <Link href="/snaptosize-vs-photoshop" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      SnapToSize vs Photoshop
                    </Link>
                    <Link href="/etsy-print-on-demand-vs-digital-download" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      POD vs Digital Downloads
                    </Link>
                    <Link href="/etsy-listing-photo-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Listing Photo Size Guide
                    </Link>
                    <Link href="/etsy-digital-planner-sizes" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Digital Planner Sizes
                    </Link>
                    <Link href="/etsy-vs-gumroad-vs-creative-market" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Etsy vs Gumroad vs Creative Market
                    </Link>
                    <Link href="/etsy-vs-shopify-digital-downloads" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Etsy vs Shopify for Digital Downloads
                    </Link>
                    <Link href="/how-to-upscale-ai-art-for-etsy-prints" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Upscale AI Art for Etsy Prints
                    </Link>
                    <Link href="/etsy-star-seller-digital-downloads" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                      Star Seller for Digital Downloads
                    </Link>
                    <div className="pt-2 mt-2 border-t border-border/50">
                      <p className="pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Troubleshooting</p>
                      <div className="space-y-0.5">
                        <Link href="/etsy-20mb-file-limit" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                          Etsy 20MB File Limit
                        </Link>
                        <Link href="/etsy-digital-download-not-selling" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                          Not Selling? 7 Fixes
                        </Link>
                        <Link href="/etsy-digital-download-blurry-prints" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                          Blurry Prints? Fix Resolution
                        </Link>
                        <Link href="/etsy-printable-bleed-and-crop-marks" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                          Bleed &amp; Crop Marks Guide
                        </Link>
                        <Link href="/cmyk-vs-rgb-for-etsy-printables" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                          CMYK vs RGB
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Desktop Compare mega menu */}
      {compareOpen && (
        <div className="hidden md:block absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-lg" data-compare-dropdown>
          <Container>
            <div className="grid grid-cols-3 gap-6 py-6">
              <div>
                <p className="pb-2.5 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Standard Sizes</p>
                <div className="space-y-0.5">
                  <Link href="/5x7-vs-4x6-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    5×7 vs 4×6
                  </Link>
                  <Link href="/8x10-vs-5x7-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    8×10 vs 5×7
                  </Link>
                  <Link href="/8x10-vs-11x14-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    8×10 vs 11×14
                  </Link>
                  <Link href="/8x10-vs-8-5x11-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    8×10 vs 8.5×11
                  </Link>
                  <Link href="/11x14-vs-12x16-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    11×14 vs 12×16
                  </Link>
                  <Link href="/11x14-vs-16x20-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    11×14 vs 16×20
                  </Link>
                </div>
              </div>
              <div>
                <p className="pb-2.5 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Large &amp; Poster Sizes</p>
                <div className="space-y-0.5">
                  <Link href="/12x16-vs-16x20-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    12×16 vs 16×20
                  </Link>
                  <Link href="/16x20-vs-18x24-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    16×20 vs 18×24
                  </Link>
                  <Link href="/18x24-vs-24x36-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    18×24 vs 24×36
                  </Link>
                  <Link href="/8x10-vs-16x20-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    8×10 vs 16×20
                  </Link>
                  <Link href="/8x10-vs-12x16-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    8×10 vs 12×16
                  </Link>
                </div>
              </div>
              <div>
                <p className="pb-2.5 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">ISO &amp; Ratios</p>
                <div className="space-y-0.5">
                  <Link href="/a4-vs-8x10-print-size" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    A4 vs 8×10
                  </Link>
                  <Link href="/iso-vs-us-print-sizes" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    ISO vs US Print Sizes
                  </Link>
                  <Link href="/2-3-vs-4-5-ratio" className="block py-1.5 text-sm text-foreground-60 hover:text-foreground transition-colors">
                    2:3 vs 4:5 Ratio
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div
            id="mobile-menu"
            className="fixed top-0 left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden animate-slide-down"
          >
            <Container>
              <div className="py-4">
                {/* Close button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={closeMenu}
                    className="p-2 text-foreground-60 hover:text-foreground transition-colors focus-ring rounded"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col space-y-1">
                  {/* Guides section */}
                  <div>
                    <button
                      onClick={() => setGuidesOpen(!guidesOpen)}
                      className="w-full px-4 py-3 text-base text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring flex items-center justify-between"
                    >
                      Guides
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          guidesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {guidesOpen && (
                      <div className="ml-4 mt-1 space-y-0.5 max-h-[70vh] overflow-y-auto">
                        {/* Size Guides */}
                        <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Size Guides</p>
                        <Link href="/etsy-print-sizes" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy Print Sizes
                        </Link>
                        <Link href="/etsy-print-ratios" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy Print Ratios
                        </Link>
                        <Link href="/distortion-free-crop" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Reframe Art to Any Ratio
                        </Link>
                        <Link href="/most-popular-etsy-print-sizes-to-sell" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Most Popular Sizes to Sell
                        </Link>
                        <Link href="/how-many-sizes-etsy-printable" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          How Many Sizes to Include
                        </Link>
                        <Link href="/etsy-digital-download-size-variations" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Digital Download Size Variations
                        </Link>
                        <Link href="/etsy-square-print-sizes" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Square Print Sizes
                        </Link>
                        <Link href="/canvas-print-sizes-for-etsy" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Canvas Print Sizes
                        </Link>
                        <Link href="/print-size-for-frame-guide" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Print-to-Frame Guide
                        </Link>
                        <Link href="/print-mat-sizes-for-frames" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Mat Sizes for Frames
                        </Link>
                        <Link href="/ikea-ribba-frame-print-sizes" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          IKEA Ribba Frame Sizes
                        </Link>
                        <Link href="/etsy-sticker-sheet-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Sticker Sheet Size
                        </Link>
                        <Link href="/etsy-bookmark-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Bookmark Size
                        </Link>
                        <Link href="/etsy-print-size-calculator" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-[#2DD4BF] hover:text-[#2DD4BF]/80 hover:bg-surface rounded transition-colors focus-ring font-medium">
                          Print Size Calculator
                        </Link>

                        {/* By Size */}
                        <div className="h-px bg-border my-1.5 mx-3" />
                        <p className="px-4 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">By Size</p>
                        <Link href="/etsy-8x10-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          8&times;10 Print Size
                        </Link>
                        <Link href="/etsy-5x7-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          5&times;7 Print Size
                        </Link>
                        <Link href="/etsy-11x14-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          11&times;14 Print Size
                        </Link>
                        <Link href="/etsy-16x20-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          16&times;20 Print Size
                        </Link>
                        <Link href="/etsy-24x36-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          24&times;36 Print Size
                        </Link>
                        <Link href="/etsy-a4-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          A4 Print Size
                        </Link>
                        <Link href="/etsy-a3-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          A3 Print Size
                        </Link>
                        <Link href="/etsy-poster-sizes" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Poster Sizes
                        </Link>

                        {/* Seller Guides */}
                        <div className="h-px bg-border my-1.5 mx-3" />
                        <p className="px-4 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Seller Guides</p>
                        <Link href="/how-to-sell-digital-downloads-on-etsy" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          How to Sell on Etsy
                        </Link>
                        <Link href="/how-to-sell-printables-on-etsy-without-photoshop" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Sell Without Photoshop
                        </Link>
                        <Link href="/what-files-to-include-etsy-digital-download" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          What Files to Include
                        </Link>
                        <Link href="/how-to-resize-images-for-etsy" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          How to Resize Images
                        </Link>
                        <Link href="/best-resolution-for-etsy-printables" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Best Resolution for Printables
                        </Link>
                        <Link href="/print-sizes-at-300-dpi" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          300 DPI Print Sizes
                        </Link>
                        <Link href="/dpi-vs-pixel-dimensions" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          DPI vs Pixel Dimensions
                        </Link>
                        <Link href="/resize-image-without-cropping-etsy" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Resize Without Cropping
                        </Link>
                        <Link href="/etsy-digital-download-file-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy File Size Guide
                        </Link>
                        <Link href="/how-to-package-digital-wall-art-for-etsy" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Package Digital Wall Art
                        </Link>
                        <Link href="/how-to-upload-more-than-5-files-etsy" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Upload 5+ Files to Etsy
                        </Link>
                        <Link href="/best-file-format-etsy-printables" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Best File Format
                        </Link>
                        <Link href="/how-to-price-etsy-printables" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          How to Price Printables
                        </Link>
                        <Link href="/snaptosize-vs-canva" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          SnapToSize vs Canva
                        </Link>
                        <Link href="/snaptosize-vs-photoshop" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          SnapToSize vs Photoshop
                        </Link>
                        <Link href="/etsy-print-on-demand-vs-digital-download" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          POD vs Digital Downloads
                        </Link>
                        <Link href="/etsy-listing-photo-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Listing Photo Size Guide
                        </Link>
                        <Link href="/etsy-vs-gumroad-vs-creative-market" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy vs Gumroad vs Creative Market
                        </Link>
                        <Link href="/etsy-vs-shopify-digital-downloads" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy vs Shopify for Digital Downloads
                        </Link>
                        <Link href="/how-to-upscale-ai-art-for-etsy-prints" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Upscale AI Art for Etsy Prints
                        </Link>
                        <Link href="/etsy-star-seller-digital-downloads" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Star Seller for Digital Downloads
                        </Link>

                        {/* Troubleshooting */}
                        <div className="h-px bg-border my-1.5 mx-3" />
                        <p className="px-4 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Troubleshooting</p>
                        <Link href="/etsy-20mb-file-limit" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy 20MB File Limit
                        </Link>
                        <Link href="/etsy-digital-download-not-selling" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Not Selling? 7 Fixes
                        </Link>
                        <Link href="/etsy-digital-download-blurry-prints" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Blurry Prints? Fix Resolution
                        </Link>
                        <Link href="/etsy-printable-bleed-and-crop-marks" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Bleed &amp; Crop Marks Guide
                        </Link>
                        <Link href="/cmyk-vs-rgb-for-etsy-printables" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          CMYK vs RGB
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Compare section */}
                  <div>
                    <button
                      onClick={() => setCompareOpen(!compareOpen)}
                      className="w-full px-4 py-3 text-base text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring flex items-center justify-between"
                    >
                      Compare
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          compareOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {compareOpen && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Standard Sizes</p>
                        <Link href="/5x7-vs-4x6-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          5×7 vs 4×6
                        </Link>
                        <Link href="/8x10-vs-5x7-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          8×10 vs 5×7
                        </Link>
                        <Link href="/8x10-vs-11x14-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          8×10 vs 11×14
                        </Link>
                        <Link href="/8x10-vs-8-5x11-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          8×10 vs 8.5×11
                        </Link>
                        <Link href="/11x14-vs-12x16-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          11×14 vs 12×16
                        </Link>
                        <Link href="/11x14-vs-16x20-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          11×14 vs 16×20
                        </Link>
                        <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Large &amp; Poster</p>
                        <Link href="/12x16-vs-16x20-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          12×16 vs 16×20
                        </Link>
                        <Link href="/16x20-vs-18x24-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          16×20 vs 18×24
                        </Link>
                        <Link href="/18x24-vs-24x36-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          18×24 vs 24×36
                        </Link>
                        <Link href="/8x10-vs-16x20-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          8×10 vs 16×20
                        </Link>
                        <Link href="/8x10-vs-12x16-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          8×10 vs 12×16
                        </Link>
                        <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">ISO &amp; Ratios</p>
                        <Link href="/a4-vs-8x10-print-size" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          A4 vs 8×10
                        </Link>
                        <Link href="/iso-vs-us-print-sizes" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          ISO vs US Print Sizes
                        </Link>
                        <Link href="/2-3-vs-4-5-ratio" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          2:3 vs 4:5 Ratio
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="px-4 py-3 text-base text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/faq"
                    onClick={closeMenu}
                    className="px-4 py-3 text-base text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring"
                  >
                    FAQ
                  </Link>

                  {/* Divider */}
                  <div className="h-px bg-border my-2" />

                  {/* Start Free CTA */}
                  <a
                    href="https://app.snaptosize.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="mx-4 mt-2"
                  >
                    <Button className="w-full">Start Free</Button>
                  </a>
                </nav>
              </div>
            </Container>
          </div>
        </>
      )}
    </header>
  );
}
