import { Container } from "@/components/Container";

export function FounderStorySection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="h-px w-8"
              style={{ background: "rgba(45,212,191,0.5)" }}
            />
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-foreground-60">
              By Etsy sellers, for Etsy sellers
            </span>
            <div
              className="h-px w-8"
              style={{ background: "rgba(45,212,191,0.5)" }}
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Built from real shop experience
          </h2>

          <p className="text-foreground-60 text-sm md:text-base max-w-2xl mx-auto">
            SnapToSize is built by Etsy sellers who got tired of manual
            resizing&mdash;every feature comes from real shop experience.
          </p>
        </div>

        {/* Artwork strip */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg overflow-hidden border border-white/[0.08] aspect-[3/4]">
              <img
                src="/assets/founder/listing-salmon.png"
                alt="Vintage scientific fish poster — real Etsy listing sized with SnapToSize"
                width={300}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-white/[0.08] aspect-[3/4]">
              <img
                src="/assets/founder/listing-fanta.jpg"
                alt="Retro pop art print — real Etsy listing sized with SnapToSize"
                width={300}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-white/[0.08] aspect-[3/4]">
              <img
                src="/assets/founder/listing-forest.png"
                alt="Forest silhouette art — real Etsy listing sized with SnapToSize"
                width={300}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center text-xs text-foreground-40 mt-3">
            Real Etsy listings &mdash; all sized with SnapToSize
          </p>
        </div>
      </Container>
    </section>
  );
}
