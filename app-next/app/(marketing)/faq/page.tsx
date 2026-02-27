import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Common questions about SnapToSize: file quality, cropping, commercial use, refunds, and Etsy integration.",
};

export default function FAQPage() {
  return (
    <>
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-foreground-60 text-center mb-12">
              Everything you need to know about using SnapToSize.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Product Questions */}
            <Accordion question="Does SnapToSize crop my images?">
              <p className="mb-3">
                No. SnapToSize uses a <strong>stretch-only resize policy</strong>.
                Images are resized to exact dimensions without cropping.
              </p>
              <p>
                This is a deliberate design choice to ensure your entire
                composition stays intact. If you need cropping, pre-crop your
                source image before uploading.
              </p>
            </Accordion>

            <Accordion question="What file quality and DPI do I get?">
              <p className="mb-3">
                All exports are <strong>300 DPI JPEG</strong> files with quality
                optimization to stay under Etsy's 20MB ZIP limit.
              </p>
              <p>
                The quality fallback chain is: 80 → 76 → 72 → 68 → 64 → 60. Most
                files export at quality 80.
              </p>
            </Accordion>

            <Accordion question="Can I use SnapToSize outputs commercially?">
              <p>
                <strong>Yes, for Pro users.</strong> Pro plan outputs have no
                watermark and can be used commercially without restrictions.
              </p>
              <p className="mt-3">
                Free plan outputs include a watermark and are intended for
                testing only.
              </p>
            </Accordion>

            <Accordion question="Is this only for Etsy?">
              <p>
                No. SnapToSize is optimized for Etsy print sellers, but outputs
                can be used on any platform: Shopify, WooCommerce, Creative
                Market, etc.
              </p>
            </Accordion>

            <Accordion question="Do I need to create an account?">
              <p>
                No account required for the free plan. Just visit the app and
                start uploading.
              </p>
              <p className="mt-3">
                Pro users authenticate via Stripe Checkout for subscription
                management.
              </p>
            </Accordion>

            {/* Pricing & Plans */}
            <Accordion question="How does the free plan work?">
              <p className="mb-3">
                Free users get:
              </p>
              <ul className="space-y-1 ml-5 list-disc">
                <li>3 Quick Exports per day</li>
                <li>1 Pack per day</li>
                <li>All ratios and sizes included</li>
                <li>Watermark on all outputs</li>
              </ul>
              <p className="mt-3">
                Limits reset daily at midnight UTC.
              </p>
            </Accordion>

            <Accordion question="What's included in Pro?">
              <p className="mb-3">
                Pro ($11.99/month or $97/year):
              </p>
              <ul className="space-y-1 ml-5 list-disc">
                <li>Unlimited Quick Exports</li>
                <li>Unlimited Packs</li>
                <li>All ratios and sizes</li>
                <li><strong>No watermark</strong></li>
                <li>Priority processing</li>
              </ul>
            </Accordion>

            <Accordion question="Can I cancel my Pro subscription?">
              <p>
                Yes, anytime. Manage your subscription via Stripe Customer
                Portal (link in your receipt email).
              </p>
              <p className="mt-3">
                Your access continues until the end of your billing period.
              </p>
            </Accordion>

            <Accordion question="Do you offer refunds?">
              <p>
                We recommend trying the free plan before upgrading. If you
                encounter technical issues with Pro, contact{" "}
                <a
                  href="mailto:support@snaptosize.com"
                  className="text-accent-light hover:underline"
                >
                  support@snaptosize.com
                </a>{" "}
                within 7 days.
              </p>
            </Accordion>

            {/* Technical Questions */}
            <Accordion question="Why do ZIP files take time to process?">
              <p>
                Packs generate multiple sizes (5-7 files per pack). Each file is
                resized, optimized, and packaged into a ZIP. This takes 10-30
                seconds.
              </p>
              <p className="mt-3">
                SnapToSize includes auto-retry logic if processing fails.
              </p>
            </Accordion>

            <Accordion question="What image formats are supported?">
              <p>
                JPEG and PNG. Recommended: high-resolution source images (at
                least 3000px on the shortest side) for best output quality.
              </p>
            </Accordion>

            <Accordion question="What's the maximum file size I can upload?">
              <p>
                Upload size limits are set to handle typical high-res artwork
                (up to 50MB source files). Larger files may time out.
              </p>
            </Accordion>

            <Accordion question="How long are my files stored?">
              <p>
                Generated files are stored temporarily on Cloudflare R2 for
                download. Files are automatically cleaned up after a short
                retention period.
              </p>
              <p className="mt-3">
                We don't store your source images long-term.
              </p>
            </Accordion>

            {/* Etsy-Specific */}
            <Accordion question="How do I upload SnapToSize files to Etsy?">
              <p className="mb-3">
                In your Etsy listing editor:
              </p>
              <ol className="space-y-1 ml-5 list-decimal">
                <li>Go to the "Digital files" section</li>
                <li>Upload the entire ZIP (Etsy accepts up to 20MB ZIPs)</li>
                <li>Or extract and upload individual JPEGs</li>
              </ol>
              <p className="mt-3">
                SnapToSize ZIPs are designed to stay under Etsy's 20MB limit.
              </p>
            </Accordion>

            <Accordion question="Will buyers get the watermark?">
              <p>
                <strong>Only if you upload free plan outputs.</strong> If you
                upload watermarked files to Etsy, buyers will receive those
                watermarked files.
              </p>
              <p className="mt-3">
                Upgrade to Pro to get clean, watermark-free outputs for your
                listings.
              </p>
            </Accordion>

            <Accordion question="Does SnapToSize integrate directly with Etsy?">
              <p>
                No. SnapToSize is a standalone tool. You download files from
                SnapToSize and manually upload them to Etsy.
              </p>
              <p className="mt-3">
                This keeps the workflow simple and gives you full control.
              </p>
            </Accordion>

            {/* Support */}
            <Accordion question="How do I get support?">
              <p>
                Email{" "}
                <a
                  href="mailto:support@snaptosize.com"
                  className="text-accent-light hover:underline"
                >
                  support@snaptosize.com
                </a>{" "}
                for technical issues or billing questions.
              </p>
              <p className="mt-3">
                SnapToSize is intentionally simple with minimal support
                overhead. Most questions are answered in the{" "}
                <a href="/guide" className="text-accent-light hover:underline">
                  User Guide
                </a>
                .
              </p>
            </Accordion>

            <Accordion question="Is SnapToSize affiliated with Etsy?">
              <p>
                No. SnapToSize is an independent tool built by an Etsy seller
                for Etsy sellers. We are not affiliated with or endorsed by
                Etsy, Inc.
              </p>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mt-16">
            <Card accent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-foreground-60 mb-6">
                Try the free plan or contact support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://app.snaptosize.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Start Free</Button>
                </a>
                <a href="mailto:support@snaptosize.com">
                  <Button variant="secondary">Contact Support</Button>
                </a>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
