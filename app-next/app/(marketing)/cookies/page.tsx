import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "SnapToSize Cookie Policy — what cookies we use and why. Minimal tracking, no advertising cookies.",
  alternates: { canonical: "https://snaptosize.com/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Cookie Policy
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
                  What cookies are
                </h2>
                <p>
                  Cookies are small text files stored on your device when you
                  visit a website. They help the site remember things like
                  whether you&apos;re signed in or what your preferences are.
                  We use only the cookies we need to operate the service —
                  nothing for advertising, nothing sold to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  Cookies we use
                </h2>
                <ul className="list-disc ml-5 space-y-3 mt-2">
                  <li>
                    <strong>Authentication (Clerk):</strong> Session cookies
                    that keep you signed in to your account at app.snaptosize.com.
                    Strictly necessary — the app can&apos;t function without
                    them.
                  </li>
                  <li>
                    <strong>Payments (Stripe):</strong> Stripe sets cookies
                    during the checkout flow for fraud prevention and to
                    maintain your subscription session. Strictly necessary for
                    Pro purchases.
                  </li>
                  <li>
                    <strong>Analytics (PostHog):</strong> Anonymous event
                    tracking to understand which features are used and where
                    users drop off. Hosted on EU servers. We do not use this
                    data for advertising or sell it to third parties.
                  </li>
                  <li>
                    <strong>UTM attribution:</strong> First-party cookies that
                    remember which marketing channel referred you, so we can
                    attribute conversions accurately. No personal data
                    attached.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  What we don&apos;t do
                </h2>
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  <li>No advertising cookies or pixels (no Meta Pixel, no Google Ads tags)</li>
                  <li>No cross-site tracking</li>
                  <li>No selling of cookie data to third parties</li>
                  <li>No use of your uploaded images for AI training</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  Managing cookies
                </h2>
                <p>
                  You can disable cookies in your browser settings, but doing
                  so will prevent you from signing in to the app or completing
                  purchases. The marketing site (snaptosize.com) functions
                  without cookies if analytics is blocked — you&apos;ll just
                  see the same content without us measuring how you got there.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  Changes to this policy
                </h2>
                <p>
                  If we add new cookies or services that set them, we&apos;ll
                  update this page. Material changes will be reflected in the
                  &ldquo;Last updated&rdquo; date.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-foreground-40">
                  See also: our{" "}
                  <Link href="/privacy" className="text-accent-light hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for how we handle data more broadly, and our{" "}
                  <Link href="/terms" className="text-accent-light hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
