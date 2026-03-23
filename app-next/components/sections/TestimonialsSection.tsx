import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I used to spend 2+ hours per listing exporting every ratio manually in Photoshop. Now I upload once and have everything ready in under a minute. The ZIP structure is exactly how Etsy wants it.",
    name: "Sarah M.",
    title: "Digital wall art seller · 1,200+ sales",
    stars: 5,
  },
  {
    quote:
      "The fact that it preserves my full design instead of cropping is what sold me. My compositions stay intact across every size — no more losing edges on 4:5 or cutting flowers off on 3:4. Buyers get exactly what they see.",
    name: "Jessica R.",
    title: "Botanical print shop · 3,400+ sales",
    stars: 5,
  },
  {
    quote:
      "The organized ZIP structure alone saves me hours every week. Everything is named correctly, under 20MB, and ready to upload. No more folder chaos or Etsy upload errors.",
    name: "Amanda K.",
    title: "Print-on-demand seller · 800+ sales",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <Container>
        <p className="text-sm text-accent-light font-medium text-center mb-2 tracking-wide uppercase">
          Trusted by Etsy print sellers
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Built for sellers who value their time.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-foreground-80 mb-4 leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-border">
                {/* Initial avatar */}
                <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-accent-light">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-foreground-60">{t.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
