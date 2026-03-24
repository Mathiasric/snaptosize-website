import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-16">
      <Container>
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-foreground-60">
              <li>
                <Link href="/guide" className="transition-colors hover:text-accent-light">
                  User Guide
                </Link>
              </li>
              <li>
                <Link href="/sizes" className="transition-colors hover:text-accent-light">
                  All Pack Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-print-size-calculator" className="transition-colors hover:text-accent-light">
                  Print Size Calculator
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-accent-light">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-accent-light">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Size Guides</h3>
            <ul className="space-y-2 text-sm text-foreground-60">
              <li>
                <Link href="/etsy-print-sizes" className="transition-colors hover:text-accent-light">
                  Etsy Print Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-8x10-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  8×10 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-5x7-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  5×7 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-16x20-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  16×20 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-24x36-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  24×36 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-18x24-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  18×24 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-11x14-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  11×14 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-a4-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  A4 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-4x6-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  4×6 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-12x16-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  12×16 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-8-5x11-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  8.5×11 Print Size (US Letter)
                </Link>
              </li>
              <li>
                <Link href="/etsy-nursery-wall-art-sizes" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  Nursery Wall Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-botanical-print-sizes" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  Botanical Print Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-print-ratios" className="transition-colors hover:text-accent-light">
                  Etsy Print Ratios
                </Link>
              </li>
              <li>
                <Link href="/how-many-sizes-etsy-printable" className="transition-colors hover:text-accent-light">
                  How Many Sizes to Include
                </Link>
              </li>
              <li>
                <Link href="/2-3-vs-4-5-ratio" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                  2:3 vs 4:5 Ratio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Seller Guides</h3>
            <ul className="space-y-2 text-sm text-foreground-60">
              <li>
                <Link href="/how-to-sell-digital-downloads-on-etsy" className="transition-colors hover:text-accent-light">
                  How to Sell on Etsy
                </Link>
              </li>
              <li>
                <Link href="/how-to-sell-printables-on-etsy-without-photoshop" className="transition-colors hover:text-accent-light">
                  Sell Without Photoshop
                </Link>
              </li>
              <li>
                <Link href="/what-files-to-include-etsy-digital-download" className="transition-colors hover:text-accent-light">
                  What Files to Include
                </Link>
              </li>
              <li>
                <Link href="/how-to-resize-images-for-etsy" className="transition-colors hover:text-accent-light">
                  How to Resize Images
                </Link>
              </li>
              <li>
                <Link href="/best-resolution-for-etsy-printables" className="transition-colors hover:text-accent-light">
                  Best Resolution for Printables
                </Link>
              </li>
              <li>
                <Link href="/how-to-package-digital-wall-art-for-etsy" className="transition-colors hover:text-accent-light">
                  Package Digital Wall Art
                </Link>
              </li>
              <li>
                <Link href="/best-file-format-etsy-printables" className="transition-colors hover:text-accent-light">
                  Best File Format
                </Link>
              </li>
              <li>
                <Link href="/how-to-price-etsy-printables" className="transition-colors hover:text-accent-light">
                  How to Price Printables
                </Link>
              </li>
              <li>
                <Link href="/etsy-20mb-file-limit" className="transition-colors hover:text-accent-light">
                  Etsy 20MB File Limit
                </Link>
              </li>
              <li>
                <Link href="/etsy-digital-download-not-selling" className="transition-colors hover:text-accent-light">
                  Not Selling? 7 Fixes
                </Link>
              </li>
              <li>
                <Link href="/etsy-digital-download-blurry-prints" className="transition-colors hover:text-accent-light">
                  Blurry Prints? Fix Resolution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-foreground-60">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-accent-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-accent-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-foreground-60">
              <li>
                <Link href="/partners" className="transition-colors hover:text-accent-light">
                  Partner Program
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@snaptosize.com"
                  className="transition-colors hover:text-accent-light"
                >
                  support@snaptosize.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-sm text-foreground-60">
          <p>© {new Date().getFullYear()} SnapToSize. All rights reserved.</p>
          <p className="mt-2">SnapToSize is not affiliated with Etsy</p>
        </div>
      </Container>
    </footer>
  );
}
