import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Partner Program — Earn 25% Recurring Commission for Life",
  description:
    "Join the SnapToSize partner program. Get free Pro access, earn 25% recurring commission for life, and help Etsy sellers resize images faster.",
  alternates: { canonical: "https://snaptosize.com/partners" },
  openGraph: {
    title: "Partner Program — Earn 25% Recurring Commission for Life | SnapToSize",
    description:
      "Get free Pro access, earn 25% recurring commission for life, and help Etsy sellers resize images faster.",
    url: "https://snaptosize.com/partners",
  },
};

export default function PartnersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SnapToSize Partner Program",
    url: "https://snaptosize.com/partners",
    description:
      "Join the SnapToSize partner program. Free Pro access and 25% recurring commission for life for Etsy educators.",
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
  };

  const steps = [
    {
      number: "1",
      title: "Apply",
      description:
        "Send us an email with your channel or platform. We'll review and get back within 48 hours.",
    },
    {
      number: "2",
      title: "Get Your Link",
      description:
        "You'll receive a unique referral link (snaptosize.com/ref/your-name) and free Pro access.",
    },
    {
      number: "3",
      title: "Earn Commission",
      description:
        "Share your link with your audience. Earn 25% recurring commission on every Pro signup — for life.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent-light uppercase tracking-wide mb-4">
              Partner Program
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Teach Etsy Sellers.{" "}
              <span className="text-accent-light">Earn 25% for Life.</span>
            </h1>
            <p className="text-lg text-foreground-60 mb-8 max-w-2xl mx-auto">
              You already help Etsy sellers succeed. Now recommend the tool that
              handles print sizing — and earn commission for every Pro
              signup.
            </p>
            <a href="mailto:support@snaptosize.com?subject=Partner%20Program%20Application">
              <Button>Apply to Become a Partner</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* What You Get */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-accent-light mb-2">
                  25%
                </div>
                <h3 className="font-semibold mb-2">Lifetime Commission</h3>
                <p className="text-sm text-foreground-60">
                  Earn 25% of every Pro subscription you refer — monthly or
                  yearly — for as long as they stay subscribed.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-accent-light mb-2">
                  Free
                </div>
                <h3 className="font-semibold mb-2">Pro Access Forever</h3>
                <p className="text-sm text-foreground-60">
                  Full Pro access so you can demo SnapToSize in your content
                  without limitations or watermarks.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-accent-light mb-2">
                  /ref
                </div>
                <h3 className="font-semibold mb-2">Your Referral Link</h3>
                <p className="text-sm text-foreground-60">
                  A clean, branded link like snaptosize.com/ref/your-name that
                  tracks every signup you drive.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-surface-raised">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-foreground-60">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Who Is This For?
            </h2>
            <p className="text-foreground-60 text-center mb-8">
              The partner program is designed for creators who already serve the
              Etsy seller community.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "YouTube educators teaching Etsy print-on-demand",
                "Course creators covering digital product setup",
                "Blog writers in the Etsy seller niche",
                "Community leaders in Etsy seller groups",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border"
                >
                  <span className="text-accent-light mt-0.5">&#10003;</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-surface-raised">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Partner FAQ
            </h2>
            <div className="space-y-4">
              <Accordion question="How do I track my referrals?">
                <p>
                  We track signups via your unique referral link. You'll receive
                  monthly reports showing signups and commission earned.
                </p>
              </Accordion>
              <Accordion question="When do I get paid?">
                <p>
                  Commission is paid monthly via PayPal or bank transfer for
                  as long as the referral stays subscribed, with a 30-day delay
                  to account for refunds. Minimum payout is $25.
                </p>
              </Accordion>
              <Accordion question="Is there a minimum audience size?">
                <p>
                  No strict minimum. We look for genuine engagement with the Etsy
                  seller community rather than follower counts.
                </p>
              </Accordion>
              <Accordion question="Can I use SnapToSize in paid courses?">
                <p>
                  Absolutely. Partners are encouraged to feature SnapToSize in
                  tutorials, courses, and guides. We can provide assets and
                  talking points.
                </p>
              </Accordion>
              <Accordion question="What if a referral cancels?">
                <p>
                  Commission stops when the referred user cancels their
                  subscription. There are no clawbacks on previously paid
                  commission.
                </p>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card accent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Partner Up?</h2>
              <p className="text-foreground-60 mb-6">
                Send us a quick email with your channel or platform. We'll
                review your application and get back within 48 hours.
              </p>
              <a href="mailto:support@snaptosize.com?subject=Partner%20Program%20Application">
                <Button>Apply Now</Button>
              </a>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
