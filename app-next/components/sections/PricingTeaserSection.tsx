import Link from "next/link";
import { Container } from "@/components/Container";
import { Check } from "lucide-react";

export function PricingTeaserSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Start free. Go unlimited when ready.
          </h2>
          <p className="text-foreground-60 text-sm max-w-sm mx-auto">
            Both plans include all ratio packs. Upgrade when your shop outgrows the daily limit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto items-start">

          {/* Free */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7">
            <p className="text-[10px] font-mono text-foreground-40 uppercase tracking-widest mb-4">
              Free
            </p>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-foreground-60 text-sm">forever</span>
            </div>
            <p className="text-foreground-40 text-xs mb-8">No credit card needed</p>

            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400/60 flex-shrink-0 mt-0.5" />
                5 Quick Exports per day
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400/60 flex-shrink-0 mt-0.5" />
                2 Packs per day
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400/60 flex-shrink-0 mt-0.5" />
                1 saved pack (My Packs)
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400/60 flex-shrink-0 mt-0.5" />
                All ratio packs included
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400/60 flex-shrink-0 mt-0.5" />
                300 DPI quality exports
              </li>
              <li className="flex items-start gap-2.5 text-foreground-40">
                <Check className="h-4 w-4 text-foreground-40/40 flex-shrink-0 mt-0.5" />
                Small watermark on exports
              </li>
            </ul>

            <a
              href="https://app.snaptosize.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg border border-white/[0.1] bg-white/[0.04] py-2.5 text-sm font-medium text-foreground-60 hover:bg-white/[0.07] hover:text-foreground transition-colors duration-150"
            >
              Start free
            </a>
          </div>

          {/* Pro */}
          <div
            className="rounded-2xl border border-teal-400/25 p-7 relative"
            style={{ background: "oklch(0.18 0.012 185)" }}
          >
            <div className="absolute -top-3.5 left-6">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest bg-teal-400 text-slate-900 px-3 py-1 rounded-full">
                Best for sellers
              </span>
            </div>

            <p className="text-[10px] font-mono text-teal-400/70 uppercase tracking-widest mb-4">
              Pro
            </p>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-3xl font-bold">$11.99</span>
              <span className="text-foreground-60 text-sm">/month</span>
            </div>
            <p className="text-foreground-40 text-xs mb-8">or $97/year — save 33%</p>

            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Unlimited</span> Quick Exports
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Unlimited</span> Packs — export anytime
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                Saved size sets (My Packs)
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                All ratio packs included
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                300 DPI quality exports
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                No watermark — clean, sell-ready files
              </li>
              <li className="flex items-start gap-2.5 text-foreground-60">
                <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                Priority processing
              </li>
            </ul>

            <a
              href="https://app.snaptosize.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg bg-teal-400 text-slate-900 py-2.5 text-sm font-semibold hover:bg-teal-300 transition-colors duration-150"
            >
              Upgrade to Pro
            </a>
            <p className="text-xs text-foreground-40 text-center mt-3">Cancel anytime.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="text-xs font-mono text-foreground-40 hover:text-foreground-60 transition-colors duration-150"
          >
            See full pricing details →
          </Link>
        </div>
      </Container>
    </section>
  );
}
