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
  openGraph: {
    title: "SnapToSize — Turn one image into a complete Etsy print set",
    description:
      "Generate all required ratios and download ready-to-upload ZIPs. No Photoshop. No manual resizing.",
    url: "https://snaptosize.com",
    siteName: "SnapToSize",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
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
