import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Check, X } from "lucide-react";

export function PricingTeaserSection() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Free vs Pro
        </h2>
        <p className="text-foreground-60 text-sm text-center mb-12 max-w-lg mx-auto">
          Start free, upgrade when you need unlimited exports.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free */}
          <div className="rounded-xl border border-white/[0.08] bg-surface/50 p-6">
            <h3 className="text-xl font-bold mb-1">Free</h3>
            <p className="text-foreground-60 text-sm mb-6">Try before you buy</p>
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                5 Quick Exports per day
              </li>
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                2 Packs per day
              </li>
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                All ratios included
              </li>
              <li className="flex items-center gap-2.5 text-foreground-40">
                <X className="h-4 w-4 text-foreground-40/50 flex-shrink-0" />
                Watermark on outputs
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
            <p className="text-xs text-foreground-40 text-center mt-3">
              No credit card required.
            </p>
          </div>

          {/* Pro */}
          <div className="rounded-xl border border-accent-light/20 bg-accent-light/[0.03] p-6 relative">
            <div className="absolute -top-3 left-6">
              <Badge>Best for sellers</Badge>
            </div>
            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold">$11.99</span>
              <span className="text-foreground-60 text-sm">/month</span>
            </div>
            <p className="text-xs text-foreground-40 mb-6">
              or $97/year (save 33%)
            </p>
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                <strong className="text-foreground">Unlimited</strong>&nbsp;Quick Exports
              </li>
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                <strong className="text-foreground">Unlimited</strong>&nbsp;Packs
              </li>
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                All ratios included
              </li>
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                No watermark
              </li>
              <li className="flex items-center gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                Priority processing
              </li>
            </ul>
            <a
              href="https://app.snaptosize.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">Upgrade to Pro</Button>
            </a>
            <p className="text-xs text-foreground-40 text-center mt-3">
              Cancel anytime.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="text-sm text-accent-light hover:underline"
          >
            See full pricing details →
          </Link>
        </div>
      </Container>
    </section>
  );
}
