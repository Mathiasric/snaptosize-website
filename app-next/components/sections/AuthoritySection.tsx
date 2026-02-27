import { Container } from "@/components/Container";

export function AuthoritySection() {
  return (
    <section className="py-8 bg-surface/30 border-y border-border">
      <Container>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">
            Built for serious digital print sellers.
          </h2>
          <p className="text-base text-foreground-70 mb-1">
            Because resizing 20+ files manually isn't a business strategy.
          </p>
          <p className="text-sm text-foreground-60 mb-6 max-w-2xl mx-auto">
            Designed specifically for Etsy print shops selling digital downloads.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-foreground-80">
            <span>• Exact Etsy aspect ratios</span>
            <span>• Professional file naming</span>
            <span>• Reliable export structure</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
