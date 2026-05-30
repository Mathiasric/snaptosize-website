import { Container } from "@/components/Container";
import { Check } from "lucide-react";

const checklist = [
  "Exact Etsy aspect ratios — 2:3, 3:4, 4:5, ISO A-series",
  "Professional file naming, organised ZIP packaging",
  "300 DPI exports, well within Etsy's 20 MB limit",
  "Artwork stays centered — composition never cropped",
  "Portrait, landscape, and square all handled",
  "Custom packs saved and reused on every new design",
];

export function TrustSection() {
  return (
    <section className="py-16 bg-surface/50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              What you stop doing the moment you switch.
            </h2>
            <p className="text-foreground-60">
              Every export handles all of this automatically.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-surface/30 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-light/15 flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-accent-light" />
                  </div>
                  <p className="text-sm font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
