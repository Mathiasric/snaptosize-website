import { Container } from "@/components/Container";
import { Lock, Clock, ShieldOff, RotateCcw, Cloud } from "lucide-react";

const items = [
  {
    Icon: Lock,
    label: "Stripe-secured payments",
    sub: "PCI-compliant checkout",
  },
  {
    Icon: Clock,
    label: "Files auto-delete in 7 days",
    sub: "Your artwork stays yours",
  },
  {
    Icon: ShieldOff,
    label: "Never used to train AI",
    sub: "Your work is never sold or scraped",
  },
  {
    Icon: RotateCcw,
    label: "Cancel anytime",
    sub: "Keep your files. No lock-in.",
  },
  {
    Icon: Cloud,
    label: "Built on Cloudflare",
    sub: "Enterprise-grade uptime",
  },
];

export function SecurityTrustStrip() {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-surface/30">
      <Container>
        <div className="text-center mb-8">
          <p className="text-xs font-mono tracking-[0.15em] uppercase text-foreground-60">
            Trust &amp; Security
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {items.map(({ Icon, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-15 border border-accent-30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent-light" />
              </div>
              <p className="text-sm font-semibold leading-tight">{label}</p>
              <p className="text-xs text-foreground-40 leading-snug">{sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
