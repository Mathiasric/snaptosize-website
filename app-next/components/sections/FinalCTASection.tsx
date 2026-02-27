import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function FinalCTASection() {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop resizing manually.
          </h2>
          <p className="text-lg text-foreground-60 mb-8">
            Start with the free plan. Upgrade when you're ready.
          </p>
          <a
            href="https://app.snaptosize.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-base px-8 py-4">Start Free →</Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
