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
                <Link href="/etsy-8x10-print-size" className="transition-colors hover:text-accent-light">
                  8×10 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-5x7-print-size" className="transition-colors hover:text-accent-light">
                  5×7 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-16x20-print-size" className="transition-colors hover:text-accent-light">
                  16×20 Print Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-a4-print-size" className="transition-colors hover:text-accent-light">
                  A4 Print Size
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
                <Link href="/print-size-for-frame-guide" className="transition-colors hover:text-accent-light">
                  Print-to-Frame Guide
                </Link>
              </li>
              <li>
                <Link href="/etsy-wedding-printable-sizes" className="transition-colors hover:text-accent-light">
                  Wedding Printable Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-digital-download-size-variations" className="transition-colors hover:text-accent-light">
                  Digital Download Size Variations
                </Link>
              </li>
              <li>
                <Link href="/etsy-sticker-sheet-size" className="transition-colors hover:text-accent-light">
                  Sticker Sheet Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-bookmark-size" className="transition-colors hover:text-accent-light">
                  Bookmark Size
                </Link>
              </li>
              <li>
                <Link href="/etsy-mid-century-modern-art-sizes" className="transition-colors hover:text-accent-light">
                  Mid Century Modern Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-celestial-wall-art-sizes" className="transition-colors hover:text-accent-light">
                  Celestial Wall Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-floral-print-sizes" className="transition-colors hover:text-accent-light">
                  Floral Print Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-japandi-art-sizes" className="transition-colors hover:text-accent-light">
                  Japandi Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-line-art-sizes" className="transition-colors hover:text-accent-light">
                  Line Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-typography-wall-art-sizes" className="transition-colors hover:text-accent-light">
                  Typography Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-black-and-white-art-sizes" className="transition-colors hover:text-accent-light">
                  Black &amp; White Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-anime-manga-art-sizes" className="transition-colors hover:text-accent-light">
                  Anime &amp; Manga Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-black-and-white-art-sizes" className="transition-colors hover:text-accent-light">
                  Black &amp; White Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-map-art-print-sizes" className="transition-colors hover:text-accent-light">
                  Map Art Print Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-digital-planner-sizes" className="transition-colors hover:text-accent-light">
                  Digital Planner Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-kids-wall-art-sizes" className="transition-colors hover:text-accent-light">
                  Kids Wall Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-bathroom-wall-art-sizes" className="transition-colors hover:text-accent-light">
                  Bathroom Wall Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-kitchen-wall-art-sizes" className="transition-colors hover:text-accent-light">
                  Kitchen Wall Art Sizes
                </Link>
              </li>
              <li>
                <Link href="/sizes" className="transition-colors hover:text-accent-light font-medium">
                  All size guides →
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
                <Link href="/how-to-upload-more-than-5-files-etsy" className="transition-colors hover:text-accent-light">
                  Upload 5+ Files to Etsy
                </Link>
              </li>
              <li>
                <Link href="/how-to-resize-images-for-etsy" className="transition-colors hover:text-accent-light">
                  How to Resize Images
                </Link>
              </li>
              <li>
                <Link href="/best-resolution-for-etsy-printables" className="transition-colors hover:text-accent-light">
                  Best Resolution
                </Link>
              </li>
              <li>
                <Link href="/print-sizes-at-300-dpi" className="transition-colors hover:text-accent-light">
                  300 DPI Print Sizes
                </Link>
              </li>
              <li>
                <Link href="/etsy-digital-download-file-size" className="transition-colors hover:text-accent-light">
                  Etsy File Size Guide
                </Link>
              </li>
              <li>
                <Link href="/what-files-to-include-etsy-digital-download" className="transition-colors hover:text-accent-light">
                  What Files to Include
                </Link>
              </li>
              <li>
                <Link href="/best-file-format-etsy-printables" className="transition-colors hover:text-accent-light">
                  Best File Format
                </Link>
              </li>
              <li>
                <Link href="/snaptosize-vs-canva" className="transition-colors hover:text-accent-light">
                  SnapToSize vs Canva
                </Link>
              </li>
              <li>
                <Link href="/canva-print-size-for-etsy" className="transition-colors hover:text-accent-light">
                  Canva Print Size for Etsy
                </Link>
              </li>
              <li>
                <Link href="/snaptosize-vs-photoshop" className="transition-colors hover:text-accent-light">
                  SnapToSize vs Photoshop
                </Link>
              </li>
              <li>
                <Link href="/etsy-vs-gumroad-vs-creative-market" className="transition-colors hover:text-accent-light">
                  Etsy vs Gumroad vs Creative Market
                </Link>
              </li>
              <li>
                <Link href="/etsy-star-seller-digital-downloads" className="transition-colors hover:text-accent-light">
                  Star Seller for Digital Downloads
                </Link>
              </li>
              <li>
                <Link href="/guide" className="transition-colors hover:text-accent-light font-medium">
                  All guides →
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
