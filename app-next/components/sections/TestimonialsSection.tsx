import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Built for Etsy print sellers who value their time.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <p className="text-foreground-80 mb-4 leading-relaxed">
              "Used to spend 2+ hours per listing doing all the ratio exports manually. Now it takes under 30 seconds and the quality is perfect."
            </p>
            <p className="text-sm text-foreground-60">
              — Digital art shop owner
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-foreground-80 mb-4 leading-relaxed">
              "The organized ZIP structure alone saves me so much time. Everything is named correctly and ready to upload. No more folder chaos."
            </p>
            <p className="text-sm text-foreground-60">
              — Print-on-demand seller
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
