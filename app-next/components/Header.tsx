"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

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

  // Close guides dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-guides-dropdown]')) {
        setGuidesOpen(false);
      }
    };

    if (guidesOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [guidesOpen]);

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
              src="/assets/favicon/favicon.svg"
              alt="SnapToSize"
              className="h-7 w-7"
            />
            SnapToSize
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              {/* Guides dropdown */}
              <div
                className="relative"
                data-guides-dropdown
              >
                <button
                  onClick={() => setGuidesOpen(!guidesOpen)}
                  className="text-foreground-60 transition-colors hover:text-foreground focus-ring flex items-center gap-1"
                >
                  Guides
                  <ChevronDown className={`h-4 w-4 transition-transform ${guidesOpen ? 'rotate-180' : ''}`} />
                </button>

                {guidesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-lg shadow-lg py-2">
                    {/* Size Guides */}
                    <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Size Guides</p>
                    <Link href="/etsy-print-sizes" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Etsy Print Sizes
                    </Link>
                    <Link href="/etsy-8x10-print-size" className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface transition-colors">
                      8×10 Print Size
                    </Link>
                    <Link href="/etsy-5x7-print-size" className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface transition-colors">
                      5×7 Print Size
                    </Link>
                    <Link href="/etsy-16x20-print-size" className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface transition-colors">
                      16×20 Print Size
                    </Link>
                    <Link href="/etsy-print-ratios" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Etsy Print Ratios
                    </Link>
                    <Link href="/how-many-sizes-etsy-printable" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      How Many Sizes to Include
                    </Link>

                    {/* Seller Guides */}
                    <div className="h-px bg-border my-1.5 mx-3" />
                    <p className="px-4 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Seller Guides</p>
                    <Link href="/how-to-sell-digital-downloads-on-etsy" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      How to Sell on Etsy
                    </Link>
                    <Link href="/how-to-sell-printables-on-etsy-without-photoshop" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Sell Without Photoshop
                    </Link>
                    <Link href="/what-files-to-include-etsy-digital-download" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      What Files to Include
                    </Link>
                    <Link href="/how-to-resize-images-for-etsy" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      How to Resize Images
                    </Link>
                    <Link href="/best-resolution-for-etsy-printables" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Best Resolution for Printables
                    </Link>
                    <Link href="/how-to-package-digital-wall-art-for-etsy" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Package Digital Wall Art
                    </Link>
                    <Link href="/best-file-format-etsy-printables" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Best File Format
                    </Link>

                    {/* Troubleshooting */}
                    <div className="h-px bg-border my-1.5 mx-3" />
                    <p className="px-4 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Troubleshooting</p>
                    <Link href="/etsy-20mb-file-limit" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Etsy 20MB File Limit
                    </Link>
                    <Link href="/etsy-digital-download-not-selling" className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface transition-colors">
                      Not Selling? 7 Fixes
                    </Link>
                  </div>
                )}
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
                      <div className="ml-4 mt-1 space-y-0.5">
                        {/* Size Guides */}
                        <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-60/50">Size Guides</p>
                        <Link href="/etsy-print-sizes" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy Print Sizes
                        </Link>
                        <Link href="/etsy-8x10-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          8×10 Print Size
                        </Link>
                        <Link href="/etsy-5x7-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          5×7 Print Size
                        </Link>
                        <Link href="/etsy-16x20-print-size" onClick={closeMenu} className="block pl-7 pr-4 py-1 text-xs text-foreground-60/70 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          16×20 Print Size
                        </Link>
                        <Link href="/etsy-print-ratios" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Etsy Print Ratios
                        </Link>
                        <Link href="/how-many-sizes-etsy-printable" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          How Many Sizes to Include
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
                        <Link href="/how-to-package-digital-wall-art-for-etsy" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Package Digital Wall Art
                        </Link>
                        <Link href="/best-file-format-etsy-printables" onClick={closeMenu} className="block px-4 py-1.5 text-sm text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring">
                          Best File Format
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
