import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Free vs Pro",
  description:
    "SnapToSize pricing: Free plan with 3 Quick Exports and 1 Pack per day. Pro plan at $11.99/month or $97/year for unlimited access.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-foreground-60 mb-12">
              Start free. Upgrade when you need more.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Free</h2>
              <div className="mb-6">
                <div className="text-3xl font-bold">$0</div>
                <div className="text-sm text-foreground-60">Forever</div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    <strong className="text-foreground">
                      3 Quick Exports
                    </strong>{" "}
                    per day
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    <strong className="text-foreground">1 Pack</strong> per day
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">All ratios included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    300 DPI quality exports
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    Watermark on outputs
                  </span>
                </li>
              </ul>

              <a
                href="https://app.snaptosize.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="w-full">
                  Start Free
                </Button>
              </a>
            </Card>

            {/* Pro Monthly */}
            <Card className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Pro Monthly</h2>
              <div className="mb-6">
                <div className="text-3xl font-bold">$11.99</div>
                <div className="text-sm text-foreground-60">per month</div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    <strong className="text-foreground">
                      Unlimited Quick Exports
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    <strong className="text-foreground">Unlimited Packs</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">All ratios included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    <strong className="text-foreground">No watermark</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    Priority processing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    Cancel anytime
                  </span>
                </li>
              </ul>

              <a
                href="https://app.snaptosize.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">Start Pro Monthly</Button>
              </a>
            </Card>

            {/* Pro Yearly */}
            <Card accent className="flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Save 33%</Badge>
              </div>

              <h2 className="text-2xl font-bold mb-2">Pro Yearly</h2>
              <div className="mb-6">
                <div className="text-3xl font-bold">$97</div>
                <div className="text-sm text-foreground-60">
                  per year ($8.08/mo)
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    <strong className="text-foreground">
                      Everything in Pro Monthly
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    <strong className="text-foreground">Save $47/year</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    Lower monthly cost
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    Fewer billing cycles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-60">
                    Cancel anytime
                  </span>
                </li>
              </ul>

              <a
                href="https://app.snaptosize.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">Start Pro Yearly</Button>
              </a>
            </Card>
          </div>
        </Container>
      </section>

      {/* Who is Pro for? */}
      <section className="py-16 bg-surface/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Who is Pro for?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <h3 className="font-semibold mb-2">Active Etsy sellers</h3>
                <p className="text-sm text-foreground-60">
                  Listing multiple products per week and need unlimited
                  exports.
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">Growing shops</h3>
                <p className="text-sm text-foreground-60">
                  Scaling inventory and want watermark-free professional files.
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">Serious sellers</h3>
                <p className="text-sm text-foreground-60">
                  Building a sustainable business and value time over manual
                  work.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Pricing FAQs
            </h2>

            <div className="space-y-6">
              <Card>
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-sm text-foreground-60">
                  Yes. Cancel your Pro subscription anytime via Stripe Customer
                  Portal. Your access continues until the end of your billing
                  period.
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">
                  What happens if I hit the free limit?
                </h3>
                <p className="text-sm text-foreground-60">
                  You'll see a message prompting you to upgrade. Limits reset
                  daily at midnight UTC.
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-sm text-foreground-60">
                  We recommend trying the free plan first. If you upgrade and
                  encounter technical issues, contact support within 7 days.
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">
                  Can I switch from monthly to yearly?
                </h3>
                <p className="text-sm text-foreground-60">
                  Yes. Cancel your monthly plan and subscribe to yearly. You
                  won't be double-charged.
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">
                  Are there any hidden fees?
                </h3>
                <p className="text-sm text-foreground-60">
                  No. The price you see is what you pay. No setup fees, no
                  overage charges.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
