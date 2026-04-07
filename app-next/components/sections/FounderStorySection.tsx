import { Container } from "@/components/Container";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Print is as picture. Lots of printing sizes which was great.",
    name: "Sophie",
  },
  {
    quote:
      "Great art and design, easy to use files and the seller is kind and communicative!",
    name: "Nicole",
  },
  {
    quote:
      "Cutest design ever!! And the files are excellent!! So easy to pick your size.",
    name: "Etsy buyer",
  },
  {
    quote:
      "Bold colours and clarity came out really well and will look nice filling a space on the wall!",
    name: "Etsy buyer",
  },
  {
    quote:
      "Thank you for the wonderful customer service and the beautiful print!",
    name: "Christine",
  },
  {
    quote:
      "Absolutely beautiful!!! I love my new print. Seller was extremely responsive.",
    name: "Kimberly",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

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
              Built by an Etsy seller
            </span>
            <div
              className="h-px w-8"
              style={{ background: "rgba(45,212,191,0.5)" }}
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Loved by Etsy buyers
          </h2>

          <p className="text-foreground-60 text-sm md:text-base max-w-2xl mx-auto">
            SnapToSize was built by an active Etsy seller with 100+
            listings&mdash;every feature comes from real shop experience.
          </p>
        </div>

        {/* Review cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 max-w-5xl lg:mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-0 snap-start rounded-lg border border-white/[0.08] bg-surface/50 p-5 flex flex-col gap-3"
            >
              <Stars />
              <p className="text-sm text-foreground-60 italic leading-relaxed flex-1">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-xs text-foreground-40">
                {review.name} &mdash; verified Etsy buyer
              </p>
            </div>
          ))}
        </div>

        {/* Compact artwork strip */}
        <div className="mt-10 max-w-3xl mx-auto">
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
