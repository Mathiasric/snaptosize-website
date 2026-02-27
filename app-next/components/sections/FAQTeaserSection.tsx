import Link from "next/link";
import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";

export function FAQTeaserSection() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Common questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion question="Does this crop my images?">
            <p>
              No. SnapToSize stretches images to exact dimensions without
              cropping. Your entire composition stays intact.
            </p>
          </Accordion>

          <Accordion question="What file quality do I get?">
            <p>
              All exports are 300 DPI JPEG with quality optimization. Files
              stay under Etsy's 20MB limit per ZIP.
            </p>
          </Accordion>

          <Accordion question="Can I use this for commercial work?">
            <p>
              Yes. Pro users can use outputs commercially without
              restrictions. Your files remain yours.
            </p>
          </Accordion>

          <Accordion question="How does the free plan work?">
            <p>
              Free users get 3 Quick Exports and 1 Pack per day with a
              watermark. Perfect for testing before upgrading.
            </p>
          </Accordion>

          <Accordion question="Can I cancel anytime?">
            <p>
              Yes. Pro subscriptions can be canceled anytime via Stripe
              Customer Portal. Access continues until period end.
            </p>
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-sm text-accent-light hover:underline"
          >
            View all FAQs →
          </Link>
        </div>
      </Container>
    </section>
  );
}
