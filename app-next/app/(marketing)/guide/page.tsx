import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CheckCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "User Guide",
  description:
    "Learn how to use SnapToSize to create Etsy-ready print files. Step-by-step instructions for Quick Export and Packs.",
};

export default function GuidePage() {
  return (
    <>
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
                <a href="#upload-etsy" className="text-sm text-accent-light hover:underline">
                  Upload to Etsy
                </a>
                <a href="#common-mistakes" className="text-sm text-accent-light hover:underline">
                  Common Mistakes
                </a>
                <a href="#troubleshooting" className="text-sm text-accent-light hover:underline">
                  Troubleshooting
                </a>
              </div>
              <p className="text-sm text-foreground-60 mt-3">
                Need the exact size list? <Link href="/sizes" className="text-accent-light hover:underline">See Print Sizes →</Link>
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
                        Expecting cropping
                      </h3>
                      <p className="text-sm text-foreground-60">
                        SnapToSize stretches to exact dimensions — it doesn't
                        crop. If you need cropping, pre-crop your source image.
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
                    Free users get 3 Quick Exports and 1 Pack per day. Upgrade
                    to Pro for unlimited access.
                  </p>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Card accent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to try it?</h2>
                <p className="text-foreground-60 mb-6">
                  Start with the free plan and upgrade when you need more.
                </p>
                <a
                  href="https://app.snaptosize.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Start Free</Button>
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
