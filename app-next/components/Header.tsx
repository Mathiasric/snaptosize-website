"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <Link
                href="/etsy-print-sizes"
                className="text-foreground-60 transition-colors hover:text-foreground focus-ring"
              >
                Print Sizes
              </Link>
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
                  <Link
                    href="/etsy-print-sizes"
                    onClick={closeMenu}
                    className="px-4 py-3 text-base text-foreground-60 hover:text-foreground hover:bg-surface rounded transition-colors focus-ring"
                  >
                    Print Sizes
                  </Link>
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
