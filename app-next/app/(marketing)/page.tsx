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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SnapToSize",
    url: "https://snaptosize.com",
    logo: {
      "@type": "ImageObject",
      url: "https://snaptosize.com/logo.png",
    },
    description:
      "SnapToSize is a file preparation tool for Etsy digital print sellers. Upload artwork once and get every standard print size exported at 300 DPI, ratio-correct, and guaranteed under 20MB.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SnapToSize",
    url: "https://snaptosize.com",
    description:
      "Resize Etsy print files to all sizes in one upload — no Photoshop, no manual work, guaranteed under 20MB.",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnapToSize",
    url: "https://snaptosize.com/",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    featureList: [
      "Batch resize art to all Etsy print ratios from one upload",
      "Generate 2:3, 4:5, 3:4, 1:1 and ISO ratio packs automatically",
      "Download ready-to-upload ZIPs under 20MB at 300 DPI",
      "No cropping — full composition preserved across every ratio",
      "Free to start, no Photoshop or design skills required",
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
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
