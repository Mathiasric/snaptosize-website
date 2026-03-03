import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Etsy Print Sizes Guide — Exact Vertical Ratios + Pixel Dimensions at 300 DPI",
  description:
    "Complete Etsy print sizes reference: exact pixel dimensions at 300 DPI for every vertical ratio (2:3, 3:4, 4:5, ISO A-series, and extras). Includes 20MB ZIP limit rules and file packaging best practices.",
  alternates: { canonical: "https://snaptosize.com/etsy-print-sizes" },
  openGraph: {
    title:
      "Etsy Print Sizes Guide — Exact Vertical Ratios + Pixel Dimensions | SnapToSize",
    description:
      "Every Etsy print size at 300 DPI. Vertical ratios, pixel dimensions, 20MB limit rules, and packaging best practices for professional sellers.",
    url: "https://snaptosize.com/etsy-print-sizes",
  },
};

export default function EtsyPrintSizesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy Print Sizes Guide — Exact Vertical Ratios + Pixel Dimensions at 300 DPI",
    description:
      "Complete Etsy print sizes reference with exact pixel dimensions at 300 DPI for every standard vertical ratio.",
    url: "https://snaptosize.com/etsy-print-sizes",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
  };

  const appUrl = "https://app.snaptosize.com?source=seo_pillar&kind=guide";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Etsy Print Sizes Guide (Exact Vertical Ratios + Pixel Dimensions)
            </h1>
            <p className="text-lg text-foreground-60 mb-6">
              Everything you need to upload print-ready digital files to Etsy
              &mdash; without cropping, resizing 15 times, or breaking the 20MB
              limit. This page covers every standard vertical ratio, exact pixel
              dimensions at 300&nbsp;DPI, and the file packaging rules
              professional sellers follow.
            </p>
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              <Button className="text-base px-7 py-3">
                Generate All Etsy Sizes Instantly
              </Button>
            </a>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-4xl space-y-16">
            {/* ===== SECTION 1: What Size Should I Upload? ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Size Should I Upload to Etsy?
              </h2>
              <p className="text-foreground-60 mb-4">
                Etsy doesn&apos;t have a single &ldquo;correct&rdquo; upload
                size. Every buyer has a different frame, a different wall, and a
                different expectation. If you only offer one size, you lose
                buyers who need a different ratio.
              </p>
              <p className="text-foreground-60 mb-4">
                For vertical wall art &mdash; the most popular category on Etsy
                &mdash; you need to offer <strong>multiple aspect ratios</strong>
                . Each ratio has its own set of standard sizes measured in inches,
                and each size has an exact pixel dimension when exported at
                300&nbsp;DPI (the print industry standard).
              </p>
              <Card accent>
                <p className="text-sm text-foreground-60">
                  <strong>What professional sellers do:</strong> They upload
                  bundled ratio packs &mdash; one ZIP per ratio group &mdash;
                  containing every standard size in that ratio. This gives
                  buyers maximum choice and reduces &ldquo;do you have this in
                  8&times;10?&rdquo; messages to zero.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 2: All Standard Vertical Print Ratios ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                All Standard Vertical Print Ratios
              </h2>
              <p className="text-foreground-60 mb-8">
                Below are the five ratio groups that cover virtually every frame
                and print size sold on Etsy. All pixel dimensions are calculated
                at <strong>300&nbsp;DPI</strong> (inches &times; 300 = pixels).
              </p>

              {/* 2:3 Ratio */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    2:3 Ratio (Most Common for Wall Art)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    The 2:3 ratio is the most widely used for vertical wall art
                    prints. It matches the most common frame sizes available at
                    IKEA, Target, and Amazon.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">4 &times; 6</td>
                            <td className="py-2 pr-4">1200 &times; 1800</td>
                            <td className="py-2">Small prints, cards</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">8 &times; 12</td>
                            <td className="py-2 pr-4">2400 &times; 3600</td>
                            <td className="py-2">Medium wall art</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">10 &times; 15</td>
                            <td className="py-2 pr-4">3000 &times; 4500</td>
                            <td className="py-2">Standard poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">12 &times; 18</td>
                            <td className="py-2 pr-4">3600 &times; 5400</td>
                            <td className="py-2">Large poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">16 &times; 24</td>
                            <td className="py-2 pr-4">4800 &times; 7200</td>
                            <td className="py-2">Statement piece</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">20 &times; 30</td>
                            <td className="py-2 pr-4">6000 &times; 9000</td>
                            <td className="py-2">Extra large</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* 3:4 Ratio */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    3:4 Ratio (Classic Photo Frame)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    The 3:4 ratio matches classic photo and art frames.
                    Essential for buyers who already own standard frames.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">6 &times; 8</td>
                            <td className="py-2 pr-4">1800 &times; 2400</td>
                            <td className="py-2">Small framed print</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">9 &times; 12</td>
                            <td className="py-2 pr-4">2700 &times; 3600</td>
                            <td className="py-2">Medium print</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">12 &times; 16</td>
                            <td className="py-2 pr-4">3600 &times; 4800</td>
                            <td className="py-2">Standard poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">15 &times; 20</td>
                            <td className="py-2 pr-4">4500 &times; 6000</td>
                            <td className="py-2">Large poster</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">18 &times; 24</td>
                            <td className="py-2 pr-4">5400 &times; 7200</td>
                            <td className="py-2">Gallery size</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* 4:5 Ratio */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    4:5 Ratio (Traditional Art)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    The 4:5 ratio is the go-to for traditional art frames. The
                    iconic 8&times;10 lives here &mdash; one of the most
                    requested print sizes on Etsy.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">8 &times; 10</td>
                            <td className="py-2 pr-4">2400 &times; 3000</td>
                            <td className="py-2">Classic frame size</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">12 &times; 15</td>
                            <td className="py-2 pr-4">3600 &times; 4500</td>
                            <td className="py-2">Medium print</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">16 &times; 20</td>
                            <td className="py-2 pr-4">4800 &times; 6000</td>
                            <td className="py-2">Popular poster size</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">20 &times; 25</td>
                            <td className="py-2 pr-4">6000 &times; 7500</td>
                            <td className="py-2">Large format</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* ISO A-Series */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    ISO A-Series (International Standard)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    If you sell to buyers outside the US, ISO A-sizes are
                    essential. These are the standard print sizes in Europe,
                    Australia, and most of the world.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size</th>
                            <th className="pb-2 pr-4">Dimensions (mm)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">A5</td>
                            <td className="py-2 pr-4">148 &times; 210</td>
                            <td className="py-2 pr-4">1748 &times; 2480</td>
                            <td className="py-2">Small prints</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">A4</td>
                            <td className="py-2 pr-4">210 &times; 297</td>
                            <td className="py-2 pr-4">2480 &times; 3508</td>
                            <td className="py-2">Standard document</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">A3</td>
                            <td className="py-2 pr-4">297 &times; 420</td>
                            <td className="py-2 pr-4">3508 &times; 4961</td>
                            <td className="py-2">Medium poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">A2</td>
                            <td className="py-2 pr-4">420 &times; 594</td>
                            <td className="py-2 pr-4">4961 &times; 7016</td>
                            <td className="py-2">Large poster</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">A1</td>
                            <td className="py-2 pr-4">594 &times; 841</td>
                            <td className="py-2 pr-4">7016 &times; 9933</td>
                            <td className="py-2">Extra large</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* Extras */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Extras (Sizes Most Sellers Forget)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    These don&apos;t fit neatly into a single ratio group, but
                    they&apos;re some of the most requested sizes on Etsy. Skip
                    these and you lose sales to sellers who include them.
                  </p>
                  <Card accent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Why It Matters</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">5 &times; 7</td>
                            <td className="py-2 pr-4">1500 &times; 2100</td>
                            <td className="py-2">
                              Greeting cards, small frames
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">8.5 &times; 11</td>
                            <td className="py-2 pr-4">2550 &times; 3300</td>
                            <td className="py-2">
                              US Letter &mdash; home printing
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">11 &times; 14</td>
                            <td className="py-2 pr-4">3300 &times; 4200</td>
                            <td className="py-2">Photo mat standard</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">16 &times; 20</td>
                            <td className="py-2 pr-4">4800 &times; 6000</td>
                            <td className="py-2">
                              Popular standalone poster
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">20 &times; 24</td>
                            <td className="py-2 pr-4">6000 &times; 7200</td>
                            <td className="py-2">Large format print</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </div>

              {/* CTA #2 */}
              <div className="mt-12 text-center">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Generate All These Sizes From One Image
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-3">
                  No signup required. Free watermarked exports to test.
                </p>
              </div>
            </div>

            {/* ===== SECTION 3: Etsy 20MB File Limit ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Etsy&apos;s 20MB File Limit (Critical for Digital Sellers)
              </h2>
              <p className="text-foreground-60 mb-4">
                Etsy enforces a <strong>20MB maximum per digital file</strong>.
                This applies to each individual file you attach to a listing
                &mdash; including ZIPs. If your ZIP exceeds 20MB, the upload
                fails silently or gets rejected.
              </p>

              <Card>
                <h3 className="font-semibold mb-3">
                  Why 300 DPI files can blow the limit
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  A single 20&times;30&Prime; file at 300 DPI is 6000&times;9000
                  pixels. As a high-quality JPEG, that&apos;s 8&ndash;15MB
                  depending on image complexity. Bundle 6 of those into one ZIP
                  and you&apos;re well over 20MB.
                </p>
                <h3 className="font-semibold mb-3">
                  How to stay under the limit
                </h3>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Group by ratio</strong> &mdash; one ZIP per ratio
                      (2:3, 3:4, 4:5, etc.) keeps file counts manageable
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Optimize JPEG quality</strong> &mdash;
                      quality 80 is visually indistinguishable from 100 but
                      40&ndash;60% smaller
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Use a quality fallback chain</strong> &mdash; if a
                      ZIP exceeds 20MB at quality 80, step down: 76 &rarr; 72
                      &rarr; 68 &rarr; 64 &rarr; 60
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Never use PNG for print files</strong> &mdash;
                      PNG files are 3&ndash;5&times; larger than JPEG with no
                      visible quality benefit at print resolution
                    </span>
                  </li>
                </ul>
              </Card>

              {/* CTA #3 */}
              <Card accent className="mt-6 p-6">
                <p className="text-sm text-foreground-60">
                  <strong>SnapToSize handles this automatically.</strong> Every
                  ZIP is optimized with a quality fallback chain to stay under
                  Etsy&apos;s 20MB limit. If a ZIP still exceeds the cap, the
                  app stops and warns you &mdash; no silent failures.
                </p>
                <div className="mt-4">
                  <a href={appUrl} target="_blank" rel="noopener noreferrer">
                    <Button>Try It Free</Button>
                  </a>
                </div>
              </Card>
            </div>

            {/* ===== SECTION 4: Why Cropping Ruins Print Sets ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Cropping Ruins Print Sets
              </h2>
              <p className="text-foreground-60 mb-4">
                Most image resizing tools crop to fit the target ratio. For
                general photos, that&apos;s fine. For wall art and digital
                prints, it&apos;s destructive.
              </p>
              <p className="text-foreground-60 mb-4">
                When you crop a 2:3 artwork to fit a 4:5 frame, the tool cuts
                off the top, bottom, or sides of your composition. Elements you
                carefully positioned near the edges disappear. The print your
                buyer receives doesn&apos;t match the listing preview.
              </p>

              <Card>
                <h3 className="font-semibold mb-3">
                  The stretch-only alternative
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  Instead of cropping, a stretch-only resize scales the entire
                  image to the exact target dimensions. Your full composition is
                  preserved in every size &mdash; nothing is cut off.
                </p>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      Every pixel of your artwork appears in every export
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      Listing preview matches the delivered file exactly
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      No buyer complaints about missing edges or cut-off details
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-foreground-60 mt-4">
                  This is the approach SnapToSize uses. If you need different
                  compositions per ratio, pre-crop your source artwork before
                  uploading.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 5: How Pro Sellers Package Files ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How Professional Etsy Sellers Package Print Files
              </h2>
              <p className="text-foreground-60 mb-4">
                The difference between a $5 listing and a $25 listing is often
                just packaging. Buyers pay more when the files are organized,
                clearly named, and ready to print without confusion.
              </p>

              <Card>
                <h3 className="font-semibold mb-3">
                  Ratio-based ZIP packs
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  Group your files by ratio. One ZIP per group:
                </p>
                <div className="bg-background rounded-lg p-4 font-mono text-sm text-foreground-60 space-y-1 mb-4">
                  <p>2x3.zip</p>
                  <p>3x4.zip</p>
                  <p>4x5.zip</p>
                  <p>ISO.zip</p>
                  <p>EXTRAS.zip</p>
                </div>
                <h3 className="font-semibold mb-3">
                  Clean filename format
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  Inside each ZIP, files are named with the size label and exact
                  pixel dimensions:
                </p>
                <div className="bg-background rounded-lg p-4 font-mono text-sm text-foreground-60 space-y-1 mb-4">
                  <p>12x18in_3600x5400.jpg</p>
                  <p>A4_2480x3508.jpg</p>
                  <p>5x7in_1500x2100.jpg</p>
                </div>
                <p className="text-sm text-foreground-60">
                  No random UUIDs, no &ldquo;final_v2_export&rdquo; names. The
                  buyer instantly knows what each file is. This reduces support
                  messages and increases positive reviews.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 6: Fastest Way to Generate All Sizes ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Fastest Way to Generate All Etsy Print Sizes
              </h2>
              <p className="text-foreground-60 mb-6">
                You can do this manually in Photoshop or Canva. Resize each
                size, export, rename, organize into folders, ZIP, check file
                sizes, re-export if over 20MB. For 25 sizes, that&apos;s
                1&ndash;3 hours per artwork.
              </p>
              <p className="text-foreground-60 mb-6">
                Or you can do it in seconds:
              </p>

              <Card>
                <ul className="space-y-3 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      Upload <strong>one</strong> high-resolution image
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      Get <strong>all vertical ratios</strong> generated
                      automatically
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      Download <strong>organized ZIP packs</strong> (one per
                      ratio)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      Every file is <strong>300 DPI</strong> with Etsy-ready
                      naming
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      ZIPs auto-optimized to stay{" "}
                      <strong>under 20MB</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>No cropping</strong> &mdash; full composition
                      preserved
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* ===== FINAL CTA ===== */}
            <div className="text-center pt-8 pb-8">
              <Card accent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Generate All Etsy Print Sizes &mdash; In Seconds
                </h2>
                <p className="text-foreground-60 mb-6">
                  Stop resizing manually. Upload one image and get every
                  standard Etsy size at 300 DPI, organized in ratio packs and
                  optimized for Etsy&apos;s file limits.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={appUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="text-base px-7 py-3">
                      Start Free
                    </Button>
                  </a>
                  <Link href="/pricing">
                    <Button variant="secondary" className="text-base px-7 py-3">
                      See Pricing
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-foreground-60 mt-4">
                  No credit card required. Free plan includes watermarked
                  exports.
                </p>
              </Card>
            </div>

            {/* Internal links for SEO */}
            <div className="text-sm text-foreground-60 space-y-2 pb-8">
              <p>
                <strong>Related:</strong>{" "}
                <Link
                  href="/sizes"
                  className="text-accent-light hover:underline"
                >
                  Full print sizes &amp; ratio reference
                </Link>
                {" · "}
                <Link
                  href="/pricing"
                  className="text-accent-light hover:underline"
                >
                  Pricing
                </Link>
                {" · "}
                <Link
                  href="/guide"
                  className="text-accent-light hover:underline"
                >
                  User guide
                </Link>
                {" · "}
                <Link
                  href="/faq"
                  className="text-accent-light hover:underline"
                >
                  FAQ
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
