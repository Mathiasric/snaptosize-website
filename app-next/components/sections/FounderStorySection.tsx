import { Container } from "@/components/Container";
import { Star } from "lucide-react";

export function FounderStorySection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left — Story */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="h-px w-8"
                  style={{ background: "rgba(45,212,191,0.5)" }}
                />
                <span className="text-xs font-mono tracking-[0.15em] uppercase text-foreground-60">
                  Built by a seller
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                I built this because I needed it myself.
              </h2>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/assets/founder/mathias.webp"
                  alt="Mathias Richardsen — Founder of SnapToSize and NordicCrafters Etsy shop"
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-white/10"
                />
                <div>
                  <p className="font-semibold">Mathias Richardsen</p>
                  <p className="text-sm text-foreground-60">
                    Founder, SnapToSize &middot; Etsy seller at{" "}
                    <a
                      href="https://www.etsy.com/shop/NordicCrafters"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-light hover:underline"
                    >
                      NordicCrafters
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-foreground-60 text-sm md:text-base leading-relaxed">
                <p>
                  I run NordicCrafters &mdash; a nature-inspired digital wall
                  art shop on Etsy with 100+ listings. Every design I create
                  needs to be resized into 10+ print sizes before I can list
                  it.
                </p>
                <p>
                  That meant hours in Photoshop, manually exporting each size,
                  organizing files into ZIPs, making sure everything stayed
                  under 20MB. For every single listing. I knew there had to be
                  a faster way.
                </p>
                <p>
                  So I built SnapToSize. Now I upload one design and get every
                  size in seconds &mdash; organized, named, and ready for Etsy.
                  I use it for every listing in my own shop.
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-8 space-y-4">
                <div className="rounded-lg border border-white/[0.08] bg-surface/50 p-4">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground-60 italic">
                    &ldquo;Print is as picture. Lots of printing sizes which
                    was great.&rdquo;
                  </p>
                  <p className="text-xs text-foreground-40 mt-1">
                    Sophie &mdash; NordicCrafters buyer
                  </p>
                </div>

                <div className="rounded-lg border border-white/[0.08] bg-surface/50 p-4">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground-60 italic">
                    &ldquo;Cutest design ever!! And the files are excellent!! So
                    easy to pick your size.&rdquo;
                  </p>
                  <p className="text-xs text-foreground-40 mt-1">
                    5-star Etsy buyer review
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Artwork grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/assets/founder/listing-salmon.png"
                  alt="The Pacific Salmon — vintage scientific fish poster by NordicCrafters, framed in a minimalist room"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/assets/founder/listing-fanta.jpg"
                  alt="Fanta Peach pop art print by NordicCrafters — retro kitchen wall art with orange tree"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/assets/founder/listing-forest.png"
                  alt="Emerald forest silhouette art by NordicCrafters — mystical green woodland scene"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="col-span-2 text-center text-xs text-foreground-40 mt-1">
                Artwork from{" "}
                <a
                  href="https://www.etsy.com/shop/NordicCrafters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light hover:underline"
                >
                  NordicCrafters
                </a>{" "}
                &mdash; all sized with SnapToSize
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
