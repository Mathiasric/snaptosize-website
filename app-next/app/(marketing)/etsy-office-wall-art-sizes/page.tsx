import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";
import RelatedPages from "@/components/RelatedPages";
import { Check, ArrowRight, Monitor, Frame } from "lucide-react";

export const metadata: Metadata = {
  title: "Etsy Office Wall Art Sizes — WFH Print Size Guide",
  description:
    "Best office wall art sizes for Etsy: behind-desk, gallery wall, WFH backdrop. Portrait vs landscape, pixel dimensions at 300 DPI, all ratios covered.",
  alternates: { canonical: "https://snaptosize.com/etsy-office-wall-art-sizes" },
  openGraph: {
    title: "Etsy Office Wall Art Sizes — WFH Print Size Guide",
    description:
      "Best office wall art sizes for Etsy: behind-desk, gallery wall, WFH backdrop. Portrait vs landscape, pixel dimensions at 300 DPI, all ratios covered.",
    url: "https://snaptosize.com/etsy-office-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-office-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Office Wall Art Sizes — behind-desk, gallery wall, WFH backdrop print guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Office Wall Art Sizes — WFH Print Size Guide",
    description:
      "Best office wall art sizes for Etsy: behind-desk, gallery wall, WFH backdrop. Portrait vs landscape, pixel dimensions at 300 DPI, all ratios covered.",
    images: ["/assets/og/etsy-office-wall-art-sizes.png"],
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Etsy Office Wall Art Sizes: The Complete WFH Print Size Guide",
  description:
    "Which print sizes sell best for office and WFH wall art on Etsy, portrait vs landscape orientation by placement, pixel dimensions at 300 DPI, and how to offer every ratio without manual resizing.",
  url: "https://snaptosize.com/etsy-office-wall-art-sizes",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  author: { "@type": "Organization", name: "SnapToSize" },
  publisher: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
    { "@type": "ListItem", position: 2, name: "Etsy Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
    { "@type": "ListItem", position: 3, name: "Office Wall Art Sizes", item: "https://snaptosize.com/etsy-office-wall-art-sizes" },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size wall art is best behind a desk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a single piece behind a desk or monitor, 18×24 or 24×30 portrait are the most popular. These fill the vertical space above the monitor without extending beyond the desk width. For wider desks, a 24×36 landscape print or a pair of 12×16 portrait frames side by side works well.",
      },
    },
    {
      "@type": "Question",
      name: "What size art looks best on a WFH video call backdrop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For video call backdrops, horizontal compositions work best since cameras see the wall in landscape mode. A 24×36 or 20×30 landscape print centered behind the desk is ideal. Alternatively, a small gallery wall with three 8×10 portrait prints creates visual interest without dominating the frame.",
      },
    },
    {
      "@type": "Question",
      name: "What pixel dimensions for office wall art at 300 DPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common office sizes at 300 DPI: 8×10 = 2,400×3,000 px | 11×14 = 3,300×4,200 px | 16×20 = 4,800×6,000 px | 18×24 = 5,400×7,200 px | 24×30 = 7,200×9,000 px | 24×36 = 7,200×10,800 px. Your source file should meet or exceed these dimensions for sharp professional prints.",
      },
    },
    {
      "@type": "Question",
      name: "Should office wall art be portrait or landscape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on placement. Behind a desk or monitor: portrait (vertical) is the default — it fills vertical wall space above furniture. WFH video backdrop: landscape (horizontal) is preferred for camera framing. Gallery walls: mix of portrait sizes like 8×10 and 11×14 creates the best composition. Sellers who list both orientations cover all buyer scenarios.",
      },
    },
    {
      "@type": "Question",
      name: "What sizes do Etsy buyers expect in an office art listing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Competitive office listings include: 8×10 and 11×14 portrait (small accent prints), 16×20 and 18×24 portrait (desk backdrop), 24×30 and 24×36 landscape (wide backdrop, feature wall), and A4 (international buyers with metric frames). Adding both portrait and landscape packs in one listing makes your listing attractive for every desk setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI tools like ChatGPT or Claude tell me the right size for office wall art?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI tools can give general size guidance, but they cannot generate the actual resized print files for you. SnapToSize closes that gap — you upload one file and it outputs every ratio pack (portrait, landscape, ISO) at 300 DPI, ready to attach to your Etsy listing.",
      },
    },
    {
      "@type": "Question",
      name: "How many sizes should I include in an Etsy office art listing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Include at least five size ranges: small accent (5×7, 8×10), medium desk backdrop (11×14, 16×20), large statement (18×24, 24×30), landscape option (24×36), and A4 for international buyers. SnapToSize generates five ratio-pack ZIPs from one upload — attach all five for maximum listing coverage.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "What size wall art is best behind a desk?",
    answer:
      "For a single piece behind a desk or monitor, 18×24 or 24×30 portrait are the most popular. These fill the vertical space above the monitor without extending beyond the desk width. For wider desks, a 24×36 landscape print or a pair of 12×16 portrait frames side by side works well.",
  },
  {
    question: "What size art looks best on a WFH video call backdrop?",
    answer:
      "For video call backdrops, horizontal compositions work best since cameras see the wall in landscape mode. A 24×36 or 20×30 landscape print centered behind the desk is ideal. Alternatively, a small gallery wall with three 8×10 portrait prints creates visual interest without dominating the frame.",
  },
  {
    question: "What pixel dimensions for office wall art at 300 DPI?",
    answer:
      "Common office sizes at 300 DPI: 8×10 = 2,400×3,000 px | 11×14 = 3,300×4,200 px | 16×20 = 4,800×6,000 px | 18×24 = 5,400×7,200 px | 24×30 = 7,200×9,000 px | 24×36 = 7,200×10,800 px. Your source file should meet or exceed these dimensions for sharp professional prints.",
  },
  {
    question: "Should office wall art be portrait or landscape?",
    answer:
      "It depends on placement. Behind a desk or monitor: portrait (vertical) is the default — it fills vertical wall space above furniture. WFH video backdrop: landscape (horizontal) is preferred for camera framing. Gallery walls: mix of portrait sizes like 8×10 and 11×14 creates the best composition. Sellers who list both orientations cover all buyer scenarios.",
  },
  {
    question: "What sizes do Etsy buyers expect in an office art listing?",
    answer:
      "Competitive office listings include: 8×10 and 11×14 portrait (small accent prints), 16×20 and 18×24 portrait (desk backdrop), 24×30 and 24×36 landscape (wide backdrop, feature wall), and A4 (international buyers with metric frames). Adding both portrait and landscape packs in one listing makes your listing attractive for every desk setup.",
  },
  {
    question: "Can AI tools like ChatGPT or Claude tell me the right size for office wall art?",
    answer:
      "AI tools can give general size guidance, but they cannot generate the actual resized print files for you. SnapToSize closes that gap — you upload one file and it outputs every ratio pack (portrait, landscape, ISO) at 300 DPI, ready to attach to your Etsy listing.",
  },
  {
    question: "How many sizes should I include in an Etsy office art listing?",
    answer:
      "Include at least five size ranges: small accent (5×7, 8×10), medium desk backdrop (11×14, 16×20), large statement (18×24, 24×30), landscape option (24×36), and A4 for international buyers. SnapToSize generates five ratio-pack ZIPs from one upload — attach all five for maximum listing coverage.",
  },
];

const appUrl =
  "https://app.snaptosize.com?source=seo_etsy-office-wall-art-sizes&kind=guide";

export default function EtsyOfficeWallArtSizesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ===== HERO — Office / WFH Palette ===== */}
      <section
        className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #f0f1f2 0%, #ede9e3 40%, #e8eaed 75%, #eae8e4 100%)",
        }}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4a6fa5 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Steel blue glow top-right */}
        <div
          className="absolute top-[-18%] right-[-10%] w-[550px] h-[550px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #4a6fa5, transparent 70%)" }}
        />
        {/* Warm cream glow bottom-left */}
        <div
          className="absolute bottom-[-22%] left-[-8%] w-[480px] h-[480px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle, #c8b89a, transparent 70%)" }}
        />

        {/* CSS Office Frame Mockup */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative" style={{ width: "360px", height: "340px" }}>

            {/* Large portrait frame — behind desk */}
            <div
              className="absolute"
              style={{
                top: "0px",
                left: "10px",
                width: "140px",
                height: "190px",
                border: "4px solid #4a6fa5",
                borderRadius: "2px",
                background: "rgba(74,111,165,0.06)",
                boxShadow: "0 0 28px -8px rgba(74,111,165,0.3), inset 0 0 30px rgba(74,111,165,0.04)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[9px] font-mono tracking-[0.18em] uppercase"
                  style={{ color: "#4a6fa5", opacity: 0.85 }}
                >
                  18×24
                </span>
              </div>
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
                <span
                  className="text-[8px] font-mono tracking-[0.15em] uppercase"
                  style={{ color: "#4a6fa5", opacity: 0.6 }}
                >
                  desk backdrop
                </span>
              </div>
            </div>

            {/* Wide landscape frame — video call backdrop */}
            <div
              className="absolute"
              style={{
                top: "210px",
                left: "0px",
                width: "220px",
                height: "100px",
                border: "4px solid #4a6fa5",
                borderRadius: "2px",
                background: "rgba(74,111,165,0.04)",
                boxShadow: "0 0 20px -6px rgba(74,111,165,0.2)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[9px] font-mono tracking-[0.18em] uppercase"
                  style={{ color: "#4a6fa5", opacity: 0.8 }}
                >
                  24×36 landscape
                </span>
              </div>
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
                <span
                  className="text-[8px] font-mono tracking-[0.13em] uppercase"
                  style={{ color: "#4a6fa5", opacity: 0.55 }}
                >
                  video backdrop
                </span>
              </div>
            </div>

            {/* Gallery wall — small accent frames stacked right */}
            {[
              { top: "0px", height: "84px", label: "11×14" },
              { top: "96px", height: "68px", label: "8×10" },
              { top: "176px", height: "52px", label: "5×7" },
            ].map(({ top, height, label }, idx) => (
              <div
                key={idx}
                className="absolute"
                style={{
                  top,
                  right: "0px",
                  width: "84px",
                  height,
                  border: "3px solid rgba(74,111,165,0.5)",
                  borderRadius: "1px",
                  background: "rgba(74,111,165,0.03)",
                  boxShadow: "0 0 10px -4px rgba(74,111,165,0.18)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[7px] font-mono tracking-[0.14em] uppercase"
                    style={{ color: "#4a6fa5", opacity: 0.7 }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}

            {/* Gallery wall label */}
            <div className="absolute" style={{ top: "236px", right: "0px" }}>
              <span
                className="text-[8px] font-mono tracking-[0.13em] uppercase"
                style={{ color: "#4a6fa5", opacity: 0.5 }}
              >
                gallery wall
              </span>
            </div>

            {/* Badge */}
            <div
              className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                bottom: "0px",
                left: "20px",
                background: "rgba(74,111,165,0.1)",
                border: "1px solid rgba(74,111,165,0.25)",
              }}
            >
              <Monitor size={10} style={{ color: "#4a6fa5" }} />
              <span
                className="text-[9px] font-mono tracking-[0.12em] uppercase"
                style={{ color: "#4a6fa5" }}
              >
                WFH-ready
              </span>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="max-w-xl relative z-10">
            {/* Mono kicker */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-mono tracking-[0.22em] uppercase font-semibold"
                style={{ color: "#4a6fa5" }}
              >
                Office Wall Art · Size Guide
              </span>
              <div className="h-px w-10" style={{ background: "#4a6fa5", opacity: 0.4 }} />
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-[1.1]"
              style={{ color: "#1a2332", letterSpacing: "-0.02em" }}
            >
              Etsy Office Wall Art Sizes
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "#3d4f63" }}
            >
              The right print size for behind a desk, a WFH video backdrop, or an office gallery
              wall — with pixel dimensions at 300 DPI and every ratio your buyers might need.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Portrait & landscape covered",
                "300 DPI pixel dimensions",
                "All Etsy ratios included",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(74,111,165,0.1)",
                    border: "1px solid rgba(74,111,165,0.22)",
                    color: "#4a6fa5",
                  }}
                >
                  <Check size={12} />
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={appUrl} className="px-6 py-2.5 text-sm">
                Resize for Office — Free
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <p className="mt-3 text-xs" style={{ color: "#6b7a8d" }}>
              No account required · 5 free exports · all ratios included
            </p>
          </div>
        </div>
      </section>

      {/* Lifestyle photo — full-bleed below hero */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 pt-8 pb-2">
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(74,111,165,0.12)" }}>
          <Image
            src="/assets/visuals/etsy-office-wall-art-sizes-lifestyle.jpg"
            alt="Home office with framed wall art prints in various sizes on the wall — large motivational quote, medium landscape, small botanical accent"
            width={1600}
            height={1200}
            className="w-full object-cover"
            style={{ maxHeight: "480px" }}
            priority
          />
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">

        {/* Quick Answer */}
        <div className="mb-12">
          <QuickAnswer question="What sizes should I include in an Etsy office wall art listing?">
            The core set for office listings: 8×10 and 11×14 portrait (accent prints), 16×20 and 18×24 portrait (desk backdrop), 24×30 and 24×36 landscape (wide backdrop, feature wall), and A4 for international buyers. Include both portrait and landscape packs so buyers can match any desk or office layout.
          </QuickAnswer>
        </div>

        {/* Section 1: Why office sizes are different */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Why Office Wall Art Has Different Size Requirements
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Office and WFH buyers are a distinct segment from living room shoppers. Their purchases
            are driven by two things: personal motivation and professional appearance on video calls.
            Both factors point to specific size ranges that differ from general home décor.
          </p>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            A buyer decorating behind their monitor needs a print tall enough to be visible above
            the screen but not so wide it looks mismatched with the desk. A buyer optimizing their
            Zoom background needs something horizontal that fills the camera frame. These are
            different placements that call for different aspect ratios — and your listing needs to
            cover both.
          </p>
          <p className="text-foreground-70 leading-relaxed">
            The good news: most office sizes overlap with standard Etsy print ratios. You don't
            need to create custom sizes. You need to make sure you're offering the right mix — and
            that you're presenting it clearly in your listing.
          </p>
        </section>

        {/* Section 2: Size table by placement */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Office Wall Art Sizes by Placement
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Each office placement has a dominant size range. Use this table to decide which sizes
            your listing must cover — and which are optional extras.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: "rgba(74,111,165,0.08)" }}>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Placement</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Best Sizes</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Orientation</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { placement: "Behind desk / monitor", sizes: "18×24, 16×20", orient: "Portrait", ratio: "3:4" },
                  { placement: "Large desk backdrop", sizes: "24×30, 20×30", orient: "Portrait", ratio: "2:3" },
                  { placement: "WFH video backdrop", sizes: "24×36, 20×30", orient: "Landscape", ratio: "2:3" },
                  { placement: "Accent print (corner)", sizes: "8×10, 5×7", orient: "Portrait", ratio: "4:5" },
                  { placement: "Office gallery wall", sizes: "8×10, 11×14, 5×7", orient: "Portrait mix", ratio: "4:5 / 3:4" },
                  { placement: "International buyers", sizes: "A4 (8.3×11.7)", orient: "Portrait", ratio: "ISO" },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(74,111,165,0.03)" }}>
                    <td className="p-3 font-medium text-foreground border border-border">{row.placement}</td>
                    <td className="p-3 text-foreground-70 border border-border">{row.sizes}</td>
                    <td className="p-3 text-foreground-70 border border-border">{row.orient}</td>
                    <td className="p-3 font-mono text-xs text-foreground-70 border border-border">{row.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-foreground-70 leading-relaxed">
            Internal links for reference: see our{" "}
            <Link href="/etsy-16x20-print-size" className="text-teal-600 underline underline-offset-2 hover:text-teal-700">
              16×20 print size guide
            </Link>
            {" "}and{" "}
            <Link href="/etsy-18x24-print-size" className="text-teal-600 underline underline-offset-2 hover:text-teal-700">
              18×24 print size guide
            </Link>
            {" "}for full pixel dimension tables and DPI breakdowns.
          </p>
        </section>

        {/* Section 3: Pixel dimensions at 300 DPI */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Pixel Dimensions for Office Wall Art at 300 DPI
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Professional prints require 300 DPI. These are the exact pixel dimensions your source
            file must meet for each office size. If your file is smaller, buyers will see blurry
            prints — the most common complaint in office art reviews.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: "rgba(74,111,165,0.08)" }}>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Size (inches)</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Pixels at 300 DPI</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Ratio</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">Use case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "5×7", px: "1,500 × 2,100", ratio: "5:7", use: "Accent print, small gallery" },
                  { size: "8×10", px: "2,400 × 3,000", ratio: "4:5", use: "Desk accent, gallery wall" },
                  { size: "11×14", px: "3,300 × 4,200", ratio: "11:14", use: "Gallery wall centrepiece" },
                  { size: "16×20", px: "4,800 × 6,000", ratio: "4:5", use: "Behind desk, medium backdrop" },
                  { size: "18×24", px: "5,400 × 7,200", ratio: "3:4", use: "Desk backdrop, feature print" },
                  { size: "24×30", px: "7,200 × 9,000", ratio: "4:5", use: "Large desk backdrop" },
                  { size: "24×36", px: "7,200 × 10,800", ratio: "2:3", use: "Landscape, video backdrop" },
                  { size: "A4 (8.3×11.7)", px: "2,480 × 3,508", ratio: "ISO", use: "International buyers" },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(74,111,165,0.03)" }}>
                    <td className="p-3 font-mono font-medium text-foreground border border-border">{row.size}</td>
                    <td className="p-3 font-mono text-foreground-70 border border-border">{row.px}</td>
                    <td className="p-3 font-mono text-xs text-foreground-70 border border-border">{row.ratio}</td>
                    <td className="p-3 text-foreground-70 border border-border">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-foreground-70 leading-relaxed">
            For a full pixel chart across all common print sizes, see our{" "}
            <Link href="/print-sizes-at-300-dpi" className="text-teal-600 underline underline-offset-2 hover:text-teal-700">
              300 DPI pixel dimensions guide
            </Link>
            .
          </p>
        </section>

        {/* CTA 1 */}
        <div className="mb-16">
          <div
            className="rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6"
            style={{
              background: "linear-gradient(135deg, rgba(74,111,165,0.08) 0%, rgba(74,111,165,0.04) 100%)",
              border: "1px solid rgba(74,111,165,0.2)",
            }}
          >
            <div className="flex-1">
              <p className="text-xs font-mono tracking-[0.18em] uppercase mb-2" style={{ color: "#4a6fa5" }}>
                Save hours of resizing
              </p>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Generate every office size from one upload
              </h3>
              <p className="text-foreground-70 text-sm leading-relaxed">
                Upload your design once — SnapToSize outputs portrait, landscape, and ISO packs at
                300 DPI. No Photoshop, no manual exports.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href={appUrl} className="px-6 py-2.5 text-sm">
                Try Free — No Account
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Section 4: Portrait vs Landscape */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Portrait vs Landscape for Office Wall Art
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            The orientation question trips up most sellers. Here's the rule: match the dominant
            orientation of the space, not your personal preference.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(74,111,165,0.06)", border: "1px solid rgba(74,111,165,0.15)" }}
            >
              <h3 className="font-bold mb-3 text-foreground flex items-center gap-2">
                <Frame size={16} style={{ color: "#4a6fa5" }} />
                Portrait (Vertical) — Default for desks
              </h3>
              <ul className="space-y-2">
                {[
                  "Behind a single monitor or laptop",
                  "Narrow desk or standing desk setup",
                  "Gallery wall accent columns",
                  "Corner accent print",
                  "Motivational quote prints (tall format reads better)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground-70">
                    <Check size={14} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(74,111,165,0.06)", border: "1px solid rgba(74,111,165,0.15)" }}
            >
              <h3 className="font-bold mb-3 text-foreground flex items-center gap-2">
                <Frame size={16} style={{ color: "#4a6fa5" }} />
                Landscape (Horizontal) — For backdrops
              </h3>
              <ul className="space-y-2">
                {[
                  "Wide desk with dual monitors",
                  "Zoom / Teams video backdrop",
                  "Above a wide bookshelf or credenza",
                  "Feature wall in a larger office",
                  "Panoramic nature or abstract art",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground-70">
                    <Check size={14} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-foreground-70 leading-relaxed">
            The best-performing Etsy office listings include both. Portrait packs (4:5, 3:4) in
            the standard framing sizes, plus a landscape pack (2:3) for backdrop buyers. This is
            one listing change that can immediately widen your audience. See our{" "}
            <Link href="/etsy-print-ratios" className="text-teal-600 underline underline-offset-2 hover:text-teal-700">
              Etsy print ratios guide
            </Link>
            {" "}for a full breakdown.
          </p>
        </section>

        {/* Section 5: Office listing tips */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            What a Well-Sized Office Listing Looks Like
          </h2>
          <p className="text-foreground-70 mb-4 leading-relaxed">
            A strong office wall art listing communicates size at a glance. Buyers decide in
            seconds — a listing that shows multiple orientations in context (desk backdrop, gallery
            wall, accent corner) converts better than one that lists sizes in the description only.
          </p>
          <p className="text-foreground-70 leading-relaxed">
            The most effective approach: a large statement print (18×24) above the desk, a medium
            piece (11×14) for context, and a small accent (8×10). Your listing ZIP files should
            cover all three — buyers will know exactly which file to download.
          </p>
        </section>

        {/* Section 6: ListingOutputShowcase */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            One Design, All Office Sizes — Automatically
          </h2>
          <p className="text-foreground-70 mb-8 leading-relaxed">
            SnapToSize takes your original file and outputs every ratio pack — portrait, landscape,
            ISO — sized correctly for every office and WFH placement. No Photoshop, no manual
            cropping. Every file is 300 DPI print-ready.
          </p>
          <ListingOutputShowcase
            artwork="neutral_abstract"
            heading="One upload. Every office size covered."
            subtext="Portrait for desks, landscape for backdrops, ISO for international buyers — all five ratio packs generated automatically at 300 DPI."
          />
        </section>

        {/* Section 7: How to structure your listing */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            How to Structure Your Etsy Office Art Listing for Maximum Reach
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Most sellers include two or three sizes and wonder why their listing underperforms.
            The buyers they're missing are the ones who need a specific size — a 24×36 landscape
            for their video backdrop, or an A4 for their metric-frame office. Each missing size
            is a buyer who leaves without purchasing.
          </p>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            The winning approach is to include all five ratio packs as separate ZIP files in one
            listing. Buyers download the pack that matches their frames. Etsy allows up to five
            digital files per listing — use all five.
          </p>
          <ol className="space-y-4 mb-6">
            {[
              {
                step: "1",
                title: "Upload your highest-resolution source file",
                desc: "JPEG or PNG. For 24×36 office prints at 300 DPI, you need at least 7,200×10,800 px. Higher is always better.",
              },
              {
                step: "2",
                title: "Select all five ratio packs",
                desc: "4:5 and 3:4 (portrait desk prints), 2:3 portrait and landscape (backdrop), ISO (A4/A3 for international buyers), and Extras (11×14, 5×7 accent sizes).",
              },
              {
                step: "3",
                title: "Download and attach all five ZIPs to Etsy",
                desc: "Each ZIP is under Etsy's 20MB file limit. Attach all five — buyers get the pack matching their frame. Include a simple size chart in your listing images so buyers know which file to download.",
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-teal-400/15 text-teal-400 border border-teal-400/30">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-foreground-70">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-foreground-70 leading-relaxed">
            For more on packaging digital files for Etsy, see our{" "}
            <Link href="/how-to-package-digital-wall-art-for-etsy" className="text-teal-600 underline underline-offset-2 hover:text-teal-700">
              guide to packaging digital wall art for Etsy
            </Link>
            {" "}and{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-teal-600 underline underline-offset-2 hover:text-teal-700">
              how many sizes to include in Etsy printables
            </Link>
            .
          </p>
        </section>

        {/* CTA 2 — ContextualCTA */}
        <div className="mb-16">
          <ContextualCTA
            problem="Office listings without landscape sizes miss all WFH backdrop buyers — one of the fastest-growing segments in digital wall art."
            solution="SnapToSize generates portrait, landscape, and ISO packs from a single upload — every office size covered in seconds."
            appUrl={appUrl}
            buttonText="Generate All Office Sizes Free"
          />
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <RelatedPages currentSlug="etsy-office-wall-art-sizes" />
        </section>

        {/* Final CTA */}
        <FinalCTA
          heading="Never lose an office wall art sale to the wrong size"
          stat="Every placement. Every ratio. One upload."
          description="SnapToSize generates every size your office buyer might need — 18×24 portrait for the desk backdrop, 24×36 landscape for the video call wall, A4 for international buyers — from a single upload. Cover every placement, every frame, every buyer."
          appUrl={appUrl}
        />
      </div>
    </>
  );
}
