import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SnapToSize Terms of Service — Rules and guidelines.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-foreground-60 mb-8">
              Last updated: February 25, 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="max-w-3xl prose prose-invert">
            <Card className="p-8 space-y-6 text-sm text-foreground-60">
              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By using SnapToSize, you agree to these Terms of Service. If
                  you do not agree, do not use the service.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  2. Service Description
                </h2>
                <p>
                  SnapToSize is a tool for resizing images into Etsy-ready print
                  sizes. The service generates JPEG files organized into ZIPs or
                  individual files based on user selection.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  3. Free and Pro Plans
                </h2>
                <p>
                  <strong>Free Plan:</strong> Includes daily limits (3 Quick
                  Exports, 1 Pack per day) with watermarked outputs.
                </p>
                <p className="mt-2">
                  <strong>Pro Plan:</strong> Unlimited exports with no watermark.
                  Billed monthly ($11.99) or yearly ($97) via Stripe.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  4. Acceptable Use
                </h2>
                <p>You agree not to:</p>
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  <li>Abuse rate limits or attempt to bypass quotas</li>
                  <li>Upload illegal, harmful, or copyrighted content you don't own</li>
                  <li>Reverse engineer or scrape the service</li>
                  <li>Use the service for purposes other than image resizing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  5. Intellectual Property
                </h2>
                <p>
                  <strong>Your content:</strong> You retain all rights to images
                  you upload. By uploading, you grant SnapToSize permission to
                  process and resize your images.
                </p>
                <p className="mt-2">
                  <strong>Generated files:</strong> You own the output files. Pro
                  users can use them commercially without restrictions.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  6. Disclaimer of Warranties
                </h2>
                <p>
                  SnapToSize is provided "as is" without warranties of any kind.
                  We do not guarantee:
                </p>
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  <li>Uninterrupted or error-free operation</li>
                  <li>Suitability for specific commercial purposes</li>
                  <li>Compatibility with all Etsy listing requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  7. Limitation of Liability
                </h2>
                <p>
                  SnapToSize is not liable for:
                </p>
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  <li>Lost revenue or business opportunities</li>
                  <li>Data loss or file corruption</li>
                  <li>Third-party service failures (Cloudflare, Stripe, etc.)</li>
                </ul>
                <p className="mt-2">
                  Maximum liability is limited to the amount you paid in the last
                  12 months.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  8. Subscription and Cancellation
                </h2>
                <p>
                  Pro subscriptions are managed via Stripe. You can cancel
                  anytime via the Stripe Customer Portal.
                </p>
                <p className="mt-2">
                  Upon cancellation, access continues until the end of the
                  billing period. No partial refunds for unused time.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  9. Refunds
                </h2>
                <p>
                  We recommend trying the free plan before upgrading. Refunds are
                  considered on a case-by-case basis for technical issues within
                  7 days of purchase.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  10. Changes to Terms
                </h2>
                <p>
                  We may update these Terms from time to time. Continued use of
                  the service after changes constitutes acceptance.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  11. Termination
                </h2>
                <p>
                  We reserve the right to terminate or suspend access for
                  violations of these Terms, including abuse of rate limits or
                  fraudulent activity.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  12. Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of [Your Jurisdiction].
                  Disputes will be resolved in [Your Jurisdiction] courts.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  13. Contact
                </h2>
                <p>
                  For questions about these Terms:{" "}
                  <a
                    href="mailto:support@snaptosize.com"
                    className="text-accent-light hover:underline"
                  >
                    support@snaptosize.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
