import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "SnapToSize Refund Policy — 14-day money-back guarantee on first Pro purchase. Cancel anytime.",
  alternates: { canonical: "https://snaptosize.com/refund" },
};

export default function RefundPage() {
  return (
    <>
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Refund Policy
            </h1>
            <p className="text-sm text-foreground-60 mb-8">
              Last updated: May 1, 2026
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
                  14-day money-back guarantee
                </h2>
                <p>
                  We offer a <strong>14-day money-back guarantee on your first
                  Pro purchase</strong>. If SnapToSize doesn&apos;t work for
                  your workflow, email{" "}
                  <a
                    href="mailto:support@snaptosize.com"
                    className="text-accent-light hover:underline"
                  >
                    support@snaptosize.com
                  </a>{" "}
                  within 14 days of your first Pro charge and we&apos;ll process
                  a full refund. No questions asked on first-time purchases.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  Try free first
                </h2>
                <p>
                  We strongly recommend trying the free plan before upgrading.
                  Free includes 5 quick exports and 2 full ratio packs per day,
                  watermarked — enough to verify the tool fits your workflow
                  before paying anything.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  Cancel anytime
                </h2>
                <p>
                  You can cancel your Pro subscription anytime via the Stripe
                  Customer Portal. Your access continues through the end of the
                  current billing period, and you keep any files you&apos;ve
                  already downloaded.
                </p>
                <p className="mt-2">
                  Subscription renewals (monthly or annual) are non-refundable
                  for unused time after the initial 14-day window. There&apos;s
                  no lock-in — cancel whenever it stops being useful.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  Technical issues outside the 14-day window
                </h2>
                <p>
                  If you hit a technical problem that prevents you from using
                  the service after the 14-day window has passed, contact
                  support and we&apos;ll review on a case-by-case basis. We
                  want SnapToSize to actually work for you — if it&apos;s
                  broken on our end, we&apos;ll make it right.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  Refund abuse
                </h2>
                <p>
                  We reserve the right to decline refunds in cases of clear
                  abuse — for example, bulk-generating large amounts of output
                  and immediately requesting a refund, or repeatedly purchasing
                  and refunding the service. The 14-day guarantee is for
                  genuine evaluation, not for harvesting output.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  How to request a refund
                </h2>
                <p>
                  Email{" "}
                  <a
                    href="mailto:support@snaptosize.com"
                    className="text-accent-light hover:underline"
                  >
                    support@snaptosize.com
                  </a>{" "}
                  from the email address on your Pro subscription. Include your
                  Stripe receipt or the date of purchase. Refunds are processed
                  via Stripe and typically appear in 5–10 business days.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-foreground-40">
                  This Refund Policy supplements our{" "}
                  <Link
                    href="/terms"
                    className="text-accent-light hover:underline"
                  >
                    Terms of Service
                  </Link>
                  . In any conflict, the Terms of Service govern.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
