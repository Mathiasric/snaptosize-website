import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-16">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-foreground-60">
              <li>
                <Link href="/guide" className="transition-colors hover:text-accent-light">
                  User Guide
                </Link>
              </li>
              <li>
                <Link href="/etsy-print-sizes" className="transition-colors hover:text-accent-light">
                  Print Sizes
                </Link>
              </li>
              <li>
                <Link href="/sizes" className="transition-colors hover:text-accent-light">
                  All Pack Sizes
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
            <h3 className="font-semibold mb-3">Guides</h3>
            <ul className="space-y-2 text-sm text-foreground-60">
              <li>
                <Link href="/etsy-print-sizes" className="transition-colors hover:text-accent-light">
                  Etsy Print Sizes
                </Link>
                <ul className="ml-3 mt-1 space-y-1">
                  <li>
                    <Link href="/etsy-8x10-print-size" className="text-xs text-foreground-60/70 transition-colors hover:text-accent-light">
                      8×10 Print Size
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/etsy-print-ratios" className="transition-colors hover:text-accent-light">
                  Etsy Print Ratios
                </Link>
              </li>
              <li>
                <Link href="/how-to-sell-digital-downloads-on-etsy" className="transition-colors hover:text-accent-light">
                  How to Sell Digital Downloads
                </Link>
              </li>
              <li>
                <Link href="/what-files-to-include-etsy-digital-download" className="transition-colors hover:text-accent-light">
                  What Files to Include
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
            <h3 className="font-semibold mb-3">Support</h3>
            <p className="text-sm text-foreground-60">
              <a
                href="mailto:support@snaptosize.com"
                className="transition-colors hover:text-accent-light"
              >
                support@snaptosize.com
              </a>
            </p>
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
