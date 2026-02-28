import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-16 bg-surface/50">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Professional output. Every time.
        </h2>

        {/* Feature Cards - Moved from Hero */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Card 1 - Full Ratio Packs */}
          <Card className="p-5 relative">
            <div className="absolute top-3 right-3">
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent-15 text-accent-light border border-accent-30">
                Most popular
              </span>
            </div>
            <h3 className="text-base font-semibold mb-2 pr-20">
              Full Etsy Ratio Packs
            </h3>
            <p className="text-sm text-foreground-60 leading-relaxed">
              Complete 2:3, 3:4, 4:5, ISO + common print sizes — instantly organized.
            </p>
          </Card>

          {/* Card 2 - Single Exports */}
          <Card className="p-5">
            <h3 className="text-base font-semibold mb-2">Single Exports</h3>
            <p className="text-sm text-foreground-60 leading-relaxed">
              Any individual size — landscape or vertical.
            </p>
          </Card>

          {/* Card 3 - Square Formats */}
          <Card className="p-5">
            <h3 className="text-base font-semibold mb-2">Square Formats</h3>
            <p className="text-sm text-foreground-60 leading-relaxed">
              Perfect square outputs for thumbnails and social.
            </p>
          </Card>
        </div>

        {/* Quality Checklist */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Exact Etsy aspect ratios</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Professional file naming</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Organized ZIP packaging</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">High-quality 300 DPI exports</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Optimized to stay under Etsy's 20MB upload limit</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Artwork stays centered in every format</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
