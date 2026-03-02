import type { Metadata } from "next";
import {
  HeroSection,
  TimeSavedSection,
  AuthoritySection,
  TestimonialsSection,
  CompositionSection,
  HowItWorksSection,
  TrustSection,
  PricingTeaserSection,
  FAQTeaserSection,
  FinalCTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Turn one image into a complete Etsy print set — in seconds",
  description:
    "Generate all required ratios and download ready-to-upload ZIPs. No Photoshop. No manual resizing. Built for Etsy print sellers.",
  alternates: { canonical: "https://snaptosize.com" },
  openGraph: {
    title: "SnapToSize — Turn one image into a complete Etsy print set",
    description:
      "Generate all required ratios and download ready-to-upload ZIPs. No Photoshop. No manual resizing.",
    url: "https://snaptosize.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnapToSize",
    url: "https://snaptosize.com/",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    description:
      "Turn one image into a complete Etsy print set. Generate all required ratios and download ready-to-upload ZIPs.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "97",
      offerCount: "3",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TimeSavedSection />
      <AuthoritySection />
      <TestimonialsSection />
      <CompositionSection />
      <HowItWorksSection />
      <TrustSection />
      <PricingTeaserSection />
      <FAQTeaserSection />
      <FinalCTASection />
    </>
  );
}
