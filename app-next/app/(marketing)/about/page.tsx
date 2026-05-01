import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Lock, Clock, ShieldOff, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "About SnapToSize — Built for Etsy print sellers",
  description:
    "SnapToSize is a focused tool for Etsy print sellers. Built and tested in working Etsy shops, with security and craft taken seriously.",
  alternates: { canonical: "https://snaptosize.com/about" },
  openGraph: {
    title: "About SnapToSize",
    description:
      "Built and tested in working Etsy shops. Focused on solving one thing well: getting Etsy print sellers from a single image to a complete, listed-ready print pack.",
    url: "https://snaptosize.com/about",
    images: [
      {
        url: "/assets/og/home.png",
        width: 1200,
        height: 630,
        alt: "About SnapToSize",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-mono tracking-[0.15em] uppercase text-foreground-60 mb-4">
              About SnapToSize
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              We build the tool we wished existed when we listed our first
              print on Etsy.
            </h1>
            <p className="text-lg text-foreground-60 leading-relaxed">
              SnapToSize turns a single image into a complete, listing-ready
              Etsy print pack — every required ratio, every common frame size,
              organized and named, in under a minute. We exist because manual
              resizing is the single biggest waste of time for digital print
              sellers, and the tools built for graphic designers are
              over-priced and under-fit for this specific job.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission / what we do */}
      <section className="py-12">
        <Container>
          <div className="max-w-3xl grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-bold mb-3">What we do</h2>
              <p className="text-sm text-foreground-60 leading-relaxed">
                One job, done well: take any artwork at any aspect ratio and
                produce a complete Etsy-ready print pack. 30+ sizes across
                every standard ratio, 300 DPI, organized ZIPs under Etsy&apos;s
                20MB limit. No cropping. No manual exports. No Photoshop.
              </p>
            </Card>
            <Card className="p-6">
              <h2 className="text-lg font-bold mb-3">What we don&apos;t do</h2>
              <p className="text-sm text-foreground-60 leading-relaxed">
                We&apos;re not a design tool. Not a mockup generator. Not an
                AI art platform. SnapToSize stops where Etsy&apos;s upload
                form starts — that focus is what lets us do the resize job
                better than tools that try to be everything.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Built in working shops */}
      <section className="py-12 bg-surface/30">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Built and tested in working Etsy shops
            </h2>
            <p className="text-foreground-60 leading-relaxed mb-4">
              Every feature in SnapToSize comes from real shop pain. Before
              the tool existed, our team manually resized prints across 5
              aspect ratios for every new listing — measuring frames, opening
              Photopea, exporting one size at a time, naming files, zipping
              folders, hoping the ZIP stayed under 20MB.
            </p>
            <p className="text-foreground-60 leading-relaxed mb-4">
              SnapToSize is the workflow we built for ourselves first. It runs
              daily in working Etsy shops including{" "}
              <a
                href="https://www.etsy.com/shop/NordicCrafters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:underline"
              >
                NordicCrafters
              </a>{" "}
              (5.0★ on Etsy), where the tool produces every size variant for
              every listing. If something breaks for our own shop, we feel it
              the same day a customer would.
            </p>
            <p className="text-foreground-60 leading-relaxed">
              That feedback loop — building for the same workflow we run
              ourselves — is why SnapToSize ships small, focused improvements
              instead of generic feature bloat.
            </p>
          </div>
        </Container>
      </section>

      {/* Security & privacy */}
      <section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Security and privacy, taken seriously
            </h2>
            <p className="text-foreground-60 leading-relaxed mb-8">
              Your artwork is your livelihood. We treat it that way.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 rounded-lg border border-white/[0.06] bg-surface/40">
                <div className="w-10 h-10 rounded-lg bg-accent-15 border border-accent-30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Files auto-delete in 7 days</p>
                  <p className="text-xs text-foreground-60">
                    Inputs and outputs are temporary. We don&apos;t hold your
                    artwork.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-lg border border-white/[0.06] bg-surface/40">
                <div className="w-10 h-10 rounded-lg bg-accent-15 border border-accent-30 flex items-center justify-center flex-shrink-0">
                  <ShieldOff className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Never used to train AI</p>
                  <p className="text-xs text-foreground-60">
                    Your work is never sold, scraped, or fed into model
                    training pipelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-lg border border-white/[0.06] bg-surface/40">
                <div className="w-10 h-10 rounded-lg bg-accent-15 border border-accent-30 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Stripe-secured payments</p>
                  <p className="text-xs text-foreground-60">
                    PCI-compliant checkout. We never store credit card details.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-lg border border-white/[0.06] bg-surface/40">
                <div className="w-10 h-10 rounded-lg bg-accent-15 border border-accent-30 flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Built on Cloudflare</p>
                  <p className="text-xs text-foreground-60">
                    Enterprise-grade infrastructure. EU-hosted analytics via
                    PostHog.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-foreground-40 mt-6">
              See our{" "}
              <Link href="/privacy" className="text-accent-light hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookies" className="text-accent-light hover:underline">
                Cookie Policy
              </Link>{" "}
              for full details.
            </p>
          </div>
        </Container>
      </section>

      {/* Where we're going */}
      <section className="py-12 bg-surface/30">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Where we&apos;re going
            </h2>
            <p className="text-foreground-60 leading-relaxed mb-4">
              SnapToSize is built around one bet: that Etsy print sellers are
              underserved by generic design tools, and that a focused,
              well-built tool for this specific workflow is worth paying $11.99
              a month for.
            </p>
            <p className="text-foreground-60 leading-relaxed">
              We&apos;re not chasing scale at any cost. We&apos;re focused on
              shipping small improvements that matter to working sellers —
              ratio coverage, output formats, frame-size guides — and on
              keeping the security, privacy, and reliability bar high enough
              that you don&apos;t have to think about it.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Try it on your next listing
            </h2>
            <p className="text-foreground-60 mb-8">
              Free plan, no credit card required. 14-day money-back guarantee
              on Pro.
            </p>
            <a
              href="https://app.snaptosize.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Create Your First Print Pack — Free
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
