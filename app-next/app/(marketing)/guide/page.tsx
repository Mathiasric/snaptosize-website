import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FinalCTA } from "@/components/FinalCTA";
import { CheckCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "User Guide",
  description:
    "Learn how to use SnapToSize to create Etsy-ready print files. Step-by-step instructions for Quick Export and Packs.",
  alternates: { canonical: "https://snaptosize.com/guide" },
  openGraph: {
    title: "User Guide | SnapToSize",
    description:
      "Step-by-step instructions for Quick Export and Packs. Create Etsy-ready print files.",
    url: "https://snaptosize.com/guide",
  },
};

export default function GuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use SnapToSize to create Etsy print files",
    description:
      "Step-by-step instructions for using SnapToSize Quick Export and Packs to create Etsy-ready print files at 300 DPI.",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload your artwork",
        text: "Upload a high-resolution JPEG or PNG image to SnapToSize. For best results, use at least 3000px on the shortest side.",
      },
      {
        "@type": "HowToStep",
        name: "Choose your export mode",
        text: "Select Quick Export for a single size, or choose a Ratio Pack to get all sizes in that aspect ratio as a ZIP file.",
      },
      {
        "@type": "HowToStep",
        name: "Download your files",
        text: "Download your 300 DPI print-ready files. Packs come as organized ZIPs with professional file naming.",
      },
      {
        "@type": "HowToStep",
        name: "Upload to Etsy",
        text: "Upload the ZIP directly to your Etsy listing's Digital files section. Each ZIP stays under Etsy's 20MB limit.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              User Guide
            </h1>
            <p className="text-lg text-foreground-60 mb-8">
              Everything you need to know to create perfect Etsy print files
              with SnapToSize.
            </p>

            {/* Authority Intro */}
            <div className="mb-8 p-6 bg-surface/50 rounded-lg border border-border">
              <p className="text-sm text-foreground-70 mb-3">
                Etsy print sizing is confusing — multiple aspect ratios, DPI requirements, and dozens of file variations per listing.
              </p>
              <p className="text-sm text-foreground-70 mb-3">
                Manual resizing wastes 1–3 hours per listing and risks quality loss when done incorrectly.
              </p>
              <p className="text-sm text-foreground-70">
                SnapToSize standardizes your entire workflow: 300 DPI output, organized ZIP structure, and all major Etsy ratios in seconds.
              </p>
            </div>

            {/* Jump Links */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold mb-3 text-foreground-60">Jump to:</h2>
              <div className="flex flex-wrap gap-3">
                <a href="#quick-start" className="text-sm text-accent-light hover:underline">
                  Quick Start
                </a>
                <a href="#export-modes" className="text-sm text-accent-light hover:underline">
                  Export Modes
                </a>
                <a href="#ratio-packs" className="text-sm text-accent-light hover:underline">
                  Ratio Packs
                </a>
                <a href="#zip-structure" className="text-sm text-accent-light hover:underline">
                  ZIP Structure
                </a>
                <a href="#upload-etsy" className="text-sm text-accent-light hover:underline">
                  Upload to Etsy
                </a>
                <a href="#calculator" className="text-sm text-accent-light hover:underline">
                  Calculator
                </a>
                <a href="#common-mistakes" className="text-sm text-accent-light hover:underline">
                  Common Mistakes
                </a>
                <a href="#troubleshooting" className="text-sm text-accent-light hover:underline">
                  Troubleshooting
                </a>
              </div>
              <p className="text-sm text-foreground-60 mt-3">
                Need the exact size list? <Link href="/etsy-print-sizes" className="text-accent-light hover:underline">See Print Sizes →</Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-3xl space-y-16">
            {/* Quick Start */}
            <div id="quick-start">
              <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
              <div className="space-y-4">
                <Card>
                  <h3 className="font-semibold mb-2">1. Upload your image</h3>
                  <p className="text-sm text-foreground-60">
                    Drop a high-resolution JPEG or PNG file. Recommended: at
                    least 3000px on the shortest side for best quality.
                  </p>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-2">
                    2. Choose your export mode
                  </h3>
                  <p className="text-sm text-foreground-60 mb-2">
                    <strong>Quick Export:</strong> Get a single size instantly
                  </p>
                  <p className="text-sm text-foreground-60">
                    <strong>Packs:</strong> Download full ratio groups as ZIPs
                  </p>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-2">3. Download & upload</h3>
                  <p className="text-sm text-foreground-60">
                    Your files are ready for direct Etsy upload. No additional
                    processing needed.
                  </p>
                </Card>
              </div>
            </div>

            {/* Quick Export vs Packs */}
            <div id="export-modes">
              <h2 className="text-2xl font-bold mb-6">
                Quick Export vs Packs
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="font-semibold mb-3">Quick Export</h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Best when you need one specific size right now.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Single file output</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Choose portrait or landscape</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Instant download</span>
                    </li>
                  </ul>
                </Card>

                <Card accent>
                  <h3 className="font-semibold mb-3">Packs (Recommended)</h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Get complete ratio groups for comprehensive Etsy listings.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-light mt-0.5 flex-shrink-0" />
                      <span>Multiple sizes per pack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-light mt-0.5 flex-shrink-0" />
                      <span>Organized ZIP files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-light mt-0.5 flex-shrink-0" />
                      <span>Cover all buyer needs</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* What's in Each Pack */}
            <div id="ratio-packs">
              <h2 className="text-2xl font-bold mb-6">
                What&apos;s in Each Ratio Pack
              </h2>
              <p className="text-foreground-60 mb-6">
                Every pack contains sizes that share the same aspect ratio —
                so your design fits perfectly without any cropping.
              </p>
              <div className="space-y-4">
                <Card>
                  <h3 className="font-semibold mb-2">2:3 Ratio — Most Popular for Wall Art</h3>
                  <p className="text-sm text-foreground-60">
                    4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36
                  </p>
                </Card>
                <Card>
                  <h3 className="font-semibold mb-2">3:4 Ratio — Classic Photo Frames</h3>
                  <p className="text-sm text-foreground-60">
                    6×8, 9×12, 12×16, 15×20, 18×24, 24×32
                  </p>
                </Card>
                <Card>
                  <h3 className="font-semibold mb-2">4:5 Ratio — Home of the 8×10</h3>
                  <p className="text-sm text-foreground-60">
                    8×10, 12×15, 16×20, 20×25, 24×30
                  </p>
                </Card>
                <Card>
                  <h3 className="font-semibold mb-2">ISO A-Series — International Standard</h3>
                  <p className="text-sm text-foreground-60">
                    A5, A4, A3, A2, A1, A0
                  </p>
                </Card>
                <Card>
                  <h3 className="font-semibold mb-2">Extras — Common Sizes</h3>
                  <p className="text-sm text-foreground-60">
                    5×7, 8.5×11, 11×14, 11×17, 20×24
                  </p>
                </Card>
              </div>
              <p className="text-sm text-foreground-60 mt-4">
                <strong>30 sizes total</strong>, all at 300 DPI. Square sizes (8×8, 10×10)
                are available via Quick Export.
              </p>
            </div>

            {/* ZIP Structure */}
            <div id="zip-structure">
              <h2 className="text-2xl font-bold mb-6">
                What Your Download Looks Like
              </h2>
              <Card className="font-mono text-sm text-foreground-60 space-y-1">
                <p className="text-foreground font-semibold mb-2">YourArtwork_2-3_Pack.zip</p>
                <p className="ml-4">YourArtwork_4x6_1200x1800_300dpi.jpg</p>
                <p className="ml-4">YourArtwork_8x12_2400x3600_300dpi.jpg</p>
                <p className="ml-4">YourArtwork_12x18_3600x5400_300dpi.jpg</p>
                <p className="ml-4">YourArtwork_16x24_4800x7200_300dpi.jpg</p>
                <p className="ml-4">YourArtwork_24x36_7200x10800_300dpi.jpg</p>
                <p className="ml-4 text-foreground-60/50">... and more sizes</p>
              </Card>
              <p className="text-sm text-foreground-60 mt-4">
                Every file is named with the size and pixel dimensions — ready to upload
                directly to Etsy without renaming.
              </p>
            </div>

            {/* How to upload to Etsy */}
            <div id="upload-etsy">
              <h2 className="text-2xl font-bold mb-6">
                How to Upload to Etsy
              </h2>
              <Card>
                <ol className="space-y-3 text-sm text-foreground-60">
                  <li>
                    <strong>1.</strong> Download your SnapToSize ZIP or single
                    file
                  </li>
                  <li>
                    <strong>2.</strong> In Etsy, create or edit a digital
                    listing
                  </li>
                  <li>
                    <strong>3.</strong> Upload files in the "Digital files"
                    section
                  </li>
                  <li>
                    <strong>4.</strong> For ZIPs: upload the entire ZIP (Etsy
                    accepts up to 20MB)
                  </li>
                  <li>
                    <strong>5.</strong> For individual files: extract and
                    upload separately if preferred
                  </li>
                </ol>
              </Card>
            </div>

            {/* Calculator Tool */}
            <div id="calculator">
              <h2 className="text-2xl font-bold mb-6">
                Check Your Image First
              </h2>
              <p className="text-foreground-60 mb-4">
                Not sure if your image is high enough resolution? Use our free
                Print Size Calculator to check DPI quality and crop analysis for
                any image dimensions.
              </p>
              <Card accent className="p-6 text-center">
                <p className="text-foreground-60 mb-4">
                  Enter your image&apos;s pixel dimensions and instantly see which
                  sizes will print at professional quality.
                </p>
                <a href="/etsy-print-size-calculator">
                  <Button variant="secondary">Open Print Size Calculator</Button>
                </a>
              </Card>
            </div>

            {/* Common Mistakes */}
            <div id="common-mistakes">
              <h2 className="text-2xl font-bold mb-6">Common Mistakes</h2>

              <div className="space-y-4">
                <Card>
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Uploading low-res source images
                      </h3>
                      <p className="text-sm text-foreground-60">
                        Start with at least 3000px on the shortest side for
                        professional quality. SnapToSize can't add detail that
                        isn't there.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Offering only one ratio
                      </h3>
                      <p className="text-sm text-foreground-60">
                        Different frame sizes use different aspect ratios. A 2:3
                        image won&apos;t fit an 8×10 (4:5) frame without cropping.
                        Include all 5 ratio packs so every buyer gets a perfect fit.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Worrying about DPI
                      </h3>
                      <p className="text-sm text-foreground-60">
                        All outputs are set to 300 DPI automatically. You don't
                        need to check or adjust this.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Troubleshooting */}
            <div id="troubleshooting">
              <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>

              <Card className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    Processing takes longer than expected
                  </h3>
                  <p className="text-sm text-foreground-60">
                    Large files or Packs with multiple ratios can take 10-30
                    seconds. The system auto-retries on failures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    Download link not appearing
                  </h3>
                  <p className="text-sm text-foreground-60">
                    Wait for the "Done" status. If processing fails, you'll see
                    an error message. Try re-uploading with a smaller image.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    Hit free plan limit
                  </h3>
                  <p className="text-sm text-foreground-60">
                    Free users get 5 Quick Exports and 2 Packs per day. Upgrade
                    to Pro for unlimited access.
                  </p>
                </div>
              </Card>
            </div>

            {/* Related */}
            <div className="mt-12">
              <h2 className="text-sm font-semibold mb-3 text-foreground-60">Learn more:</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href="/etsy-print-sizes" className="text-accent-light hover:underline">All Print Sizes →</a>
                <a href="/etsy-print-ratios" className="text-accent-light hover:underline">Understanding Ratios →</a>
                <a href="/how-to-resize-images-for-etsy" className="text-accent-light hover:underline">Resize Guide →</a>
                <a href="/faq" className="text-accent-light hover:underline">FAQ →</a>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <FinalCTA
                heading="Ready to Create Your Print Files?"
                stat="30 sizes · 5 ratio packs · under 30 seconds"
                description="Upload one image, download every size your buyers need."
                appUrl="https://app.snaptosize.com"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
