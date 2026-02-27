import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

export function PricingTeaserSection() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Free vs Pro
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="text-foreground-60 mb-6">Try before you buy</p>
            <ul className="space-y-3 mb-6 text-sm text-foreground-60">
              <li>• 3 Quick Exports per day</li>
              <li>• 1 Pack per day</li>
              <li>• All ratios included</li>
              <li>• Watermark on outputs</li>
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
            <p className="text-xs text-foreground-60 text-center mt-3">
              No credit card required.
            </p>
          </Card>

          <Card accent className="relative">
            <div className="absolute -top-3 left-6">
              <Badge>Best for sellers</Badge>
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-foreground-60 mb-2">$11.99/month</p>
            <p className="text-sm text-foreground-60 mb-6">
              or $97/year (save 33%)
            </p>
            <ul className="space-y-3 mb-6 text-sm text-foreground-60">
              <li>• Unlimited Quick Exports</li>
              <li>• Unlimited Packs</li>
              <li>• All ratios included</li>
              <li>• No watermark</li>
              <li>• Priority processing</li>
            </ul>
            <a
              href="https://app.snaptosize.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">Upgrade to Pro</Button>
            </a>
            <p className="text-xs text-foreground-60 text-center mt-3">
              Upgrade when you're ready.
            </p>
          </Card>
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
