import type { Metadata } from "next";
import {
  HeroSection,
  TimeSavedSection,
  AuthoritySection,
  CompositionSection,
  HowItWorksSection,
  TrustSection,
  PricingTeaserSection,
  FAQTeaserSection,
  FinalCTASection,
  FounderStorySection,
  SecurityTrustStrip,
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
    images: [
      {
        url: "/assets/og/home.png",
        width: 1200,
        height: 630,
        alt: "SnapToSize — Turn one image into a complete Etsy print set",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapToSize — Turn one image into a complete Etsy print set",
    description:
      "Generate all required ratios and download ready-to-upload ZIPs. No Photoshop. No manual resizing.",
    images: ["/assets/og/home.png"],
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
      <CompositionSection />
      <HowItWorksSection />
      <TrustSection />
      <FounderStorySection />
      <PricingTeaserSection />
      <FAQTeaserSection />
      <SecurityTrustStrip />
      <FinalCTASection />
    </>
  );
}
