import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Common questions about SnapToSize: 30 print sizes, file quality, DPI, commercial use, pricing, and Etsy integration.",
  alternates: { canonical: "https://snaptosize.com/faq" },
  openGraph: {
    title: "FAQ — Frequently Asked Questions | SnapToSize",
    description:
      "Common questions about SnapToSize: 30 print sizes, file quality, DPI, commercial use, pricing, and Etsy integration.",
    url: "https://snaptosize.com/faq",
  },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does SnapToSize crop my images?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. SnapToSize preserves your full design — every pixel, every detail. Your image is resized to exact print dimensions without any cropping. Your buyers get exactly what you designed.",
        },
      },
      {
        "@type": "Question",
        name: "How many sizes does SnapToSize generate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "30 print sizes across 5 ratio packs: 2:3 (8 sizes from 4×6 to 24×36), 3:4 (6 sizes), 4:5 (5 sizes including the popular 8×10), ISO A-series (6 sizes from A5 to A0), and Extras (5 sizes like 5×7, 11×14, 11×17). Plus square sizes via Quick Export.",
        },
      },
      {
        "@type": "Question",
        name: "What file quality and DPI do I get?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every file exports at 300 DPI — the professional print standard. Files are optimized to stay under Etsy's 20MB ZIP limit while maintaining sharp, print-ready quality.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use SnapToSize outputs commercially?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, for Pro users. Pro plan outputs have no watermark and can be used commercially without restrictions. Free plan outputs include a watermark and are intended for testing only.",
        },
      },
      {
        "@type": "Question",
        name: "How does the free plan work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Free users get 5 Quick Exports per day, 2 Packs per day, all ratios and sizes included, with watermark on all outputs. Limits reset daily at midnight UTC.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pro ($11.99/month or $97/year) includes unlimited Quick Exports, unlimited Packs, all ratios and sizes, no watermark, and priority processing.",
        },
      },
      {
        "@type": "Question",
        name: "How do I upload SnapToSize files to Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In your Etsy listing editor, go to the Digital files section and upload the entire ZIP (Etsy accepts up to 20MB ZIPs) or extract and upload individual JPEGs. SnapToSize ZIPs are designed to stay under Etsy's 20MB limit.",
        },
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
                No. SnapToSize <strong>preserves your full design</strong> — every
                pixel, every detail. Your image is resized to exact print
                dimensions without any cropping.
              </p>
              <p>
                Your buyers get exactly what you designed, in every size.
              </p>
            </Accordion>

            <Accordion question="How many sizes does SnapToSize generate?">
              <p className="mb-3">
                <strong>30 print sizes</strong> across 5 ratio packs:
              </p>
              <ul className="space-y-1 ml-5 list-disc text-sm text-foreground-60">
                <li><strong>2:3</strong> — 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36</li>
                <li><strong>3:4</strong> — 6×8, 9×12, 12×16, 15×20, 18×24, 24×32</li>
                <li><strong>4:5</strong> — 8×10, 12×15, 16×20, 20×25, 24×30</li>
                <li><strong>ISO A-Series</strong> — A5, A4, A3, A2, A1, A0</li>
                <li><strong>Extras</strong> — 5×7, 8.5×11, 11×14, 11×17, 20×24</li>
              </ul>
              <p className="mt-3 text-sm text-foreground-60">
                Plus square sizes (8×8, 10×10) via Quick Export. Every file at 300 DPI.
              </p>
            </Accordion>

            <Accordion question="What file quality and DPI do I get?">
              <p className="mb-3">
                Every file exports at <strong>300 DPI</strong> — the professional
                print standard.
              </p>
              <p>
                Files are optimized to stay under Etsy's 20MB ZIP limit while
                maintaining sharp, print-ready quality.
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
                No account needed. Just visit the app and start uploading — it
                works instantly.
              </p>
              <p className="mt-3">
                When you're ready to upgrade, Pro setup takes less than 60
                seconds.
              </p>
            </Accordion>

            {/* Pricing & Plans */}
            <Accordion question="How does the free plan work?">
              <p className="mb-3">
                Free users get:
              </p>
              <ul className="space-y-1 ml-5 list-disc">
                <li>5 Quick Exports per day</li>
                <li>2 Packs per day</li>
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
                SnapToSize handles high-resolution artwork up to 50MB — plenty
                for even the largest source files.
              </p>
              <p className="mt-3">
                For best results, use images at least 3000px on the shortest
                side.
              </p>
            </Accordion>

            <Accordion question="How long are my files stored?">
              <p>
                Your generated files are available for download immediately
                after processing.
              </p>
              <p className="mt-3">
                We recommend downloading your files right away. Source images
                are not stored long-term — your artwork stays private.
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
                We respond to every message. Most questions are answered in
                the{" "}
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

          {/* Related Resources */}
          <div className="max-w-3xl mx-auto mt-12">
            <h2 className="text-lg font-semibold mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <a href="/etsy-print-size-calculator" className="block p-4 rounded-lg border border-border hover:border-accent-light/30 transition-colors">
                <h3 className="font-medium text-sm mb-1">Print Size Calculator</h3>
                <p className="text-xs text-foreground-60">Check DPI and crop analysis for your images</p>
              </a>
              <a href="/etsy-print-sizes" className="block p-4 rounded-lg border border-border hover:border-accent-light/30 transition-colors">
                <h3 className="font-medium text-sm mb-1">All Print Sizes</h3>
                <p className="text-xs text-foreground-60">Complete reference for every Etsy print size</p>
              </a>
              <a href="/how-to-resize-images-for-etsy" className="block p-4 rounded-lg border border-border hover:border-accent-light/30 transition-colors">
                <h3 className="font-medium text-sm mb-1">Resize Guide</h3>
                <p className="text-xs text-foreground-60">Step-by-step resizing for Etsy sellers</p>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <FinalCTA
              heading="Ready to Create Print-Ready Files?"
              stat="30 sizes · 5 ratio packs · 300 DPI"
              description="Upload one image, download every size your Etsy buyers need."
              appUrl="https://app.snaptosize.com"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
