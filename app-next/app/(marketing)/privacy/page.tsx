import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SnapToSize Privacy Policy — How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Privacy Policy
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
                  1. Information We Collect
                </h2>
                <p>
                  SnapToSize collects minimal information necessary to provide
                  the service:
                </p>
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  <li>
                    <strong>Uploaded images:</strong> Temporarily stored for
                    processing and download
                  </li>
                  <li>
                    <strong>Payment information:</strong> Processed via Stripe
                    (we do not store credit card details)
                  </li>
                  <li>
                    <strong>Usage analytics:</strong> Anonymous event tracking
                    via PostHog (EU-hosted)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc ml-5 space-y-1">
                  <li>To process image resize requests</li>
                  <li>To manage Pro subscriptions via Stripe</li>
                  <li>To monitor system performance and reliability</li>
                  <li>To improve the service based on usage patterns</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  3. Data Storage and Retention
                </h2>
                <p>
                  <strong>Uploaded images:</strong> Temporarily stored on
                  Cloudflare R2 for processing and download. Automatically
                  deleted after a short retention period.
                </p>
                <p className="mt-2">
                  <strong>Generated files:</strong> Available for download
                  temporarily. We do not store your processed files long-term.
                </p>
                <p className="mt-2">
                  <strong>Analytics data:</strong> Anonymized usage events stored
                  in PostHog (EU data center).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  4. Third-Party Services
                </h2>
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Stripe:</strong> Payment processing (see{" "}
                    <a
                      href="https://stripe.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-light hover:underline"
                    >
                      Stripe Privacy Policy
                    </a>
                    )
                  </li>
                  <li>
                    <strong>Cloudflare:</strong> Infrastructure and storage (see{" "}
                    <a
                      href="https://www.cloudflare.com/privacypolicy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-light hover:underline"
                    >
                      Cloudflare Privacy Policy
                    </a>
                    )
                  </li>
                  <li>
                    <strong>PostHog:</strong> Analytics (EU-hosted, see{" "}
                    <a
                      href="https://posthog.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-light hover:underline"
                    >
                      PostHog Privacy Policy
                    </a>
                    )
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  5. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  <li>Request deletion of your data</li>
                  <li>Access information we hold about you</li>
                  <li>Cancel your subscription at any time</li>
                </ul>
                <p className="mt-3">
                  Contact{" "}
                  <a
                    href="mailto:support@snaptosize.com"
                    className="text-accent-light hover:underline"
                  >
                    support@snaptosize.com
                  </a>{" "}
                  for data requests.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  6. Security
                </h2>
                <p>
                  We use industry-standard security practices including HTTPS
                  encryption, secure cloud storage, and minimal data retention.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  7. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated "Last updated"
                  date.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  8. Contact
                </h2>
                <p>
                  For privacy-related questions:{" "}
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
