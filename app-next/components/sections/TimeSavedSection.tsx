import { Container } from "@/components/Container";
import { Check } from "lucide-react";

export function TimeSavedSection() {
  return (
    <section className="py-12 border-b border-border">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Stop wasting hours resizing manually.
          </h2>

          <p className="text-base text-foreground-70 mb-8 text-center max-w-2xl mx-auto">
            Manually resizing images for multiple Etsy aspect ratios takes 1–3 hours per listing. Incorrect resizing reduces print quality. SnapToSize handles both instantly.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">All major Etsy aspect ratios generated instantly</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Landscape, vertical and square formats</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">300 DPI print-ready output</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Clean, organized ZIP structure</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
