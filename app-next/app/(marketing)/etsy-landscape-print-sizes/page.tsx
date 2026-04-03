import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Layers } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Tabs } from "@/components/Tabs";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Etsy Landscape Print Sizes — Horizontal Sizing Guide",
  description:
    "Complete horizontal print size reference for Etsy sellers. All landscape sizes, pixel dimensions at 300 DPI, and which ratios work best for wall art.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-landscape-print-sizes",
  },
  openGraph: {
    title: "Etsy Landscape Print Sizes — Horizontal Sizing Guide",
    description:
      "Complete horizontal print size reference for Etsy sellers. All landscape sizes, pixel dimensions at 300 DPI, and which ratios work best for wall art.",
    url: "https://snaptosize.com/etsy-landscape-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-landscape-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Landscape Print Sizes — Horizontal Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Landscape Print Sizes — Horizontal Sizing Guide",
    description:
      "Complete horizontal print size reference for Etsy sellers. All landscape sizes, pixel dimensions at 300 DPI, and which ratios work best for wall art.",
    images: ["/assets/og/etsy-landscape-print-sizes.png"],
  },
};

export default function EtsyLandscapePrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy Landscape Print Sizes — The Complete Horizontal Sizing Guide",
    description:
      "Complete horizontal print size reference for Etsy digital download sellers. All landscape sizes with pixel dimensions at 300 DPI, framing guidance, and common mistakes to avoid.",
    url: "https://snaptosize.com/etsy-landscape-print-sizes",
    datePublished: "2026-04-01",
    dateModified: "2026-04-01",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://snaptosize.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Etsy Print Sizes",
        item: "https://snaptosize.com/etsy-print-sizes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Landscape Print Sizes",
        item: "https://snaptosize.com/etsy-landscape-print-sizes",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the most popular landscape print size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10×8 (the landscape version of 8×10) is the most popular horizontal print size, followed by 14×11 and 20×16. These match the most common frame sizes available at Target, IKEA, and Amazon in both orientations.",
        },
      },
      {
        "@type": "Question",
        name: "Are landscape print sizes just portrait sizes rotated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Landscape 10×8 is the same physical dimensions as portrait 8×10, just oriented horizontally (width > height). The pixel dimensions at 300 DPI swap: 3000×2400 pixels instead of 2400×3000. The total pixel count is identical.",
        },
      },
      {
        "@type": "Question",
        name: "Should I offer both landscape and portrait versions of my Etsy prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Offering both orientations effectively doubles your catalog and serves buyers who need art for different wall spaces. Some rooms — above sofas, above beds, wide hallways — naturally call for horizontal art. SnapToSize generates both portrait and landscape from a single upload.",
        },
      },
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for landscape prints at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Swap the portrait dimensions. For example, an 8×10 portrait at 300 DPI is 2400×3000 pixels; the landscape 10×8 version is 3000×2400 pixels. For 20×16, the portrait 16×20 is 4800×6000 pixels, so landscape 20×16 is 6000×4800 pixels.",
        },
      },
      {
        "@type": "Question",
        name: "Can buyers find frames for landscape prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Standard frames like 8×10, 11×14, and 16×20 can be used in either orientation. Most retailers stock frames that work both ways. Just ensure your listing clearly states the orientation so buyers know what they’re getting.",
        },
      },
      {
        "@type": "Question",
        name: "How do I label landscape prints in my Etsy listings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Include "Landscape" or "Horizontal" in your title and tags. List dimensions as width × height (e.g., "10×8" not "8×10") and write "Landscape / Horizontal orientation" in the description. Include a mockup showing the art in a horizontal frame so buyers immediately understand the orientation.',
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between landscape and panoramic prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Landscape prints use standard aspect ratios (2:3, 3:4, 4:5) in horizontal orientation. Panoramic prints use wider ratios (1:2, 1:3) for extra-wide compositions. Standard landscape sizes fit standard frames; panoramic sizes require specialty framing and are less common on Etsy.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_etsy-landscape-print-sizes&kind=guide";

  const faqItems = [
    {
      question: "What is the most popular landscape print size?",
      answer:
        "10×8 (the landscape version of 8×10) is the most popular horizontal print size, followed by 14×11 and 20×16. These match the most common frame sizes available at Target, IKEA, and Amazon in both orientations.",
    },
    {
      question: "Are landscape print sizes just portrait sizes rotated?",
      answer:
        "Yes. Landscape 10×8 is the same physical dimensions as portrait 8×10, just oriented horizontally (width > height). The pixel dimensions at 300 DPI swap: 3000×2400 pixels instead of 2400×3000. The total pixel count is identical.",
    },
    {
      question:
        "Should I offer both landscape and portrait versions of my Etsy prints?",
      answer:
        "Yes. Offering both orientations effectively doubles your catalog and serves buyers who need art for different wall spaces. Some rooms — above sofas, above beds, wide hallways — naturally call for horizontal art. SnapToSize generates both portrait and landscape from a single upload.",
    },
    {
      question:
        "What pixel dimensions do I need for landscape prints at 300 DPI?",
      answer:
        "Swap the portrait dimensions. For example, an 8×10 portrait at 300 DPI is 2400×3000 pixels; the landscape 10×8 version is 3000×2400 pixels. For 20×16, the portrait 16×20 is 4800×6000 pixels, so landscape 20×16 is 6000×4800 pixels.",
    },
    {
      question: "Can buyers find frames for landscape prints?",
      answer:
        "Yes. Standard frames like 8×10, 11×14, and 16×20 can be used in either orientation. Most retailers stock frames that work both ways. Just ensure your listing clearly states the orientation so buyers know what they’re getting.",
    },
    {
      question: "How do I label landscape prints in my Etsy listings?",
      answer:
        'Include “Landscape” or “Horizontal” in your title and tags. List dimensions as width × height (e.g., “10×8” not “8×10”) and write “Landscape / Horizontal orientation” in the description. Include a mockup showing the art in a horizontal frame so buyers immediately understand the orientation.',
    },
    {
      question: "What’s the difference between landscape and panoramic prints?",
      answer:
        "Landscape prints use standard aspect ratios (2:3, 3:4, 4:5) in horizontal orientation. Panoramic prints use wider ratios (1:2, 1:3) for extra-wide compositions. Standard landscape sizes fit standard frames; panoramic sizes require specialty framing and are less common on Etsy.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Gradient blobs */}
        <div
          className="absolute top-[-10%] right-[-8%] w-[480px] h-[320px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #2DD4BF, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[280px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* Landscape orientation visualizer — CSS only, right side */}
        <div className="absolute right-[4%] top-[15%] hidden lg:block">
          <div className="relative" style={{ width: "300px", height: "380px" }}>
            {/* Large landscape frame 30×20 */}
            <div
              className="absolute border border-teal-400/20 rounded-sm"
              style={{ width: "180px", height: "120px", top: "0", left: "0" }}
            >
              <div className="absolute inset-1.5 border border-teal-400/10 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-teal-300/30 tracking-wider">
                30&times;20
              </span>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-0.5">
                <div className="h-px w-5 bg-teal-400/25" />
                <div
                  className="w-0 h-0"
                  style={{
                    borderTop: "3px solid transparent",
                    borderBottom: "3px solid transparent",
                    borderLeft: "4px solid rgba(45,212,191,0.25)",
                  }}
                />
              </div>
            </div>
            {/* Medium landscape 20×16 */}
            <div
              className="absolute border border-white/[0.10] rounded-sm"
              style={{ width: "125px", height: "100px", top: "140px", left: "20px" }}
            >
              <div className="absolute inset-1.5 border border-white/[0.06] rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white/20 tracking-wider">
                20&times;16
              </span>
            </div>
            {/* Small landscape 14×11 */}
            <div
              className="absolute border border-white/[0.08] rounded-sm"
              style={{ width: "110px", height: "79px", top: "145px", left: "165px" }}
            >
              <div className="absolute inset-1.5 border border-white/[0.05] rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-white/15 tracking-wider">
                14&times;11
              </span>
            </div>
            {/* ISO landscape A4 */}
            <div
              className="absolute border border-white/[0.08] rounded-sm"
              style={{ width: "140px", height: "99px", top: "265px", left: "0" }}
            >
              <div className="absolute inset-1.5 border border-indigo-400/10 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white/15 tracking-wider">
                A4 landscape
              </span>
            </div>
            {/* Highlighted 10×8 */}
            <div
              className="absolute border border-teal-400/30 rounded-sm"
              style={{ width: "108px", height: "86px", top: "272px", left: "155px" }}
            >
              <div className="absolute inset-1.5 border border-teal-400/15 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-teal-300/40 tracking-wider">
                10&times;8
              </span>
            </div>
            {/* Label */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] whitespace-nowrap">
              <span className="text-[10px] font-mono text-teal-300/40 tracking-[0.12em]">
                HORIZONTAL &middot; ALL RATIOS
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-teal-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-teal-300/60 uppercase">
                Etsy Print Size Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                Etsy Landscape Print Sizes
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                The complete horizontal sizing reference for digital download sellers
              </span>
            </h1>

            <p className="text-base text-white/60 mb-8 max-w-lg">
              Most Etsy print size guides assume portrait orientation. This one
              doesn&apos;t. Here&apos;s every standard landscape size, the pixel
              dimensions at 300 DPI, and which horizontal formats sell best
              &mdash; so you can offer both orientations without doubling your
              workload.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Landscape Sizes Free
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, get portrait &amp; landscape in every
                ratio.
              </p>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  Up to 70 print-ready files
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  All 5 ratio packs
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  Portrait, landscape &amp; square
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">

            <QuickAnswer question="What are the most popular landscape print sizes for Etsy?">
              <strong>10&times;8, 14&times;11, and 20&times;16</strong> are the three
              most popular horizontal sizes &mdash; the landscape versions of 8&times;10,
              11&times;14, and 16&times;20. These match the most widely available frames
              and cover desk art, kitchen/dining, and above-sofa placement.
            </QuickAnswer>

            {/* Section 1: Orientation basics */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Makes a Print &ldquo;Landscape&rdquo;?
              </h2>
              <p className="text-foreground-60 mb-4">
                A landscape print is one where width exceeds height &mdash; the
                horizontal orientation. The same physical dimensions apply; only
                the axis flips. An 8&times;10 portrait becomes a 10&times;8
                landscape. A{" "}
                <Link
                  href="/etsy-12x18-print-size"
                  className="text-accent-light hover:underline"
                >
                  12&times;18 portrait
                </Link>{" "}
                becomes an 18&times;12 landscape.
              </p>
              <p className="text-foreground-60 mb-4">
                The naming convention follows width &times; height. So 10&times;8
                means 10 inches wide, 8 inches tall &mdash; landscape. This matters
                for pixel dimensions: portrait 8&times;10 at 300 DPI is
                2400&times;3000 pixels, while landscape 10&times;8 is
                3000&times;2400. Width and height swap, but the total pixel count
                stays the same.
              </p>
              <p className="text-foreground-60">
                Understanding{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  print ratios
                </Link>{" "}
                is key here: the 2:3 ratio in portrait becomes a 3:2 ratio in
                landscape. The same ratio pack covers both orientations &mdash;
                you&apos;re rotating the output, not changing the ratio family.
              </p>
            </div>

            {/* Visual: Portrait vs Landscape comparison */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/portrait-vs-landscape-comparison.png"
                alt="Portrait vs landscape print comparison — portrait 16×20 leaves empty wall space above a sofa, while landscape 30×20 matches the sofa width for visual harmony"
                width={1200}
                height={680}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Section 2: Full reference tables */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Complete Landscape Print Size Reference
              </h2>
              <p className="text-foreground-60 mb-6">
                Every standard size in landscape orientation, organized by ratio
                pack. Pixel dimensions at 300 DPI &mdash; the professional print
                standard. For the full portrait reference, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes chart
                </Link>
                . Use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                for custom dimensions.
              </p>

              <Tabs tabs={[
                { label: "2:3 Ratio", content: (
                  <div className="overflow-x-auto">
                    <p className="text-foreground-60 text-sm mb-3">7 sizes &mdash; most common for wall art. Wide panoramic feel in landscape.</p>
                    <table className="w-full border-collapse text-sm">
                      <thead><tr className="border-b border-white/20"><th className="text-left py-2.5 px-4 font-semibold">Landscape Size</th><th className="text-left py-2.5 px-4 font-semibold">Portrait Equiv.</th><th className="text-left py-2.5 px-4 font-semibold">Pixels @ 300 DPI</th></tr></thead>
                      <tbody>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">6&times;4</td><td className="py-2.5 px-4 text-foreground-60">4&times;6</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">1800&times;1200</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">9&times;6</td><td className="py-2.5 px-4 text-foreground-60">6&times;9</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">2700&times;1800</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">12&times;8</td><td className="py-2.5 px-4 text-foreground-60">8&times;12</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">3600&times;2400</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">15&times;10</td><td className="py-2.5 px-4 text-foreground-60">10&times;15</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">4500&times;3000</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">18&times;12</td><td className="py-2.5 px-4 text-foreground-60"><Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12&times;18</Link></td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">5400&times;3600</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">24&times;16</td><td className="py-2.5 px-4 text-foreground-60">16&times;24</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">7200&times;4800</td></tr>
                        <tr><td className="py-2.5 px-4 font-medium">30&times;20</td><td className="py-2.5 px-4 text-foreground-60"><Link href="/etsy-20x30-print-size" className="text-accent-light hover:underline">20&times;30</Link></td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">9000&times;6000</td></tr>
                      </tbody>
                    </table>
                  </div>
                )},
                { label: "3:4 Ratio", content: (
                  <div className="overflow-x-auto">
                    <p className="text-foreground-60 text-sm mb-3">5 sizes &mdash; classic photo frame ratio.</p>
                    <table className="w-full border-collapse text-sm">
                      <thead><tr className="border-b border-white/20"><th className="text-left py-2.5 px-4 font-semibold">Landscape Size</th><th className="text-left py-2.5 px-4 font-semibold">Portrait Equiv.</th><th className="text-left py-2.5 px-4 font-semibold">Pixels @ 300 DPI</th></tr></thead>
                      <tbody>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">8&times;6</td><td className="py-2.5 px-4 text-foreground-60">6&times;8</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">2400&times;1800</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">12&times;9</td><td className="py-2.5 px-4 text-foreground-60">9&times;12</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">3600&times;2700</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">16&times;12</td><td className="py-2.5 px-4 text-foreground-60">12&times;16</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">4800&times;3600</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">20&times;15</td><td className="py-2.5 px-4 text-foreground-60">15&times;20</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">6000&times;4500</td></tr>
                        <tr><td className="py-2.5 px-4 font-medium">24&times;18</td><td className="py-2.5 px-4 text-foreground-60"><Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">18&times;24</Link></td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">7200&times;5400</td></tr>
                      </tbody>
                    </table>
                  </div>
                )},
                { label: "4:5 Ratio", content: (
                  <div className="overflow-x-auto">
                    <p className="text-foreground-60 text-sm mb-3">5 sizes &mdash; traditional art ratio. Home of the popular 10&times;8.</p>
                    <table className="w-full border-collapse text-sm">
                      <thead><tr className="border-b border-white/20"><th className="text-left py-2.5 px-4 font-semibold">Landscape Size</th><th className="text-left py-2.5 px-4 font-semibold">Portrait Equiv.</th><th className="text-left py-2.5 px-4 font-semibold">Pixels @ 300 DPI</th></tr></thead>
                      <tbody>
                        <tr className="border-b border-white/10 bg-teal-400/[0.06]"><td className="py-2.5 px-4 font-medium">10&times;8 <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">Popular</span></td><td className="py-2.5 px-4 text-foreground-60"><Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link></td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">3000&times;2400</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">15&times;12</td><td className="py-2.5 px-4 text-foreground-60">12&times;15</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">4500&times;3600</td></tr>
                        <tr className="border-b border-white/10 bg-teal-400/[0.06]"><td className="py-2.5 px-4 font-medium">20&times;16 <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">Popular</span></td><td className="py-2.5 px-4 text-foreground-60"><Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link></td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">6000&times;4800</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">25&times;20</td><td className="py-2.5 px-4 text-foreground-60">20&times;25</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">7500&times;6000</td></tr>
                        <tr><td className="py-2.5 px-4 font-medium">30&times;24</td><td className="py-2.5 px-4 text-foreground-60">24&times;30</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">9000&times;7200</td></tr>
                      </tbody>
                    </table>
                  </div>
                )},
                { label: "ISO A-Series", content: (
                  <div className="overflow-x-auto">
                    <p className="text-foreground-60 text-sm mb-3">5 sizes &mdash; international standard. Europe, Australia, and most of the world. See <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link> and <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link> for portrait.</p>
                    <table className="w-full border-collapse text-sm">
                      <thead><tr className="border-b border-white/20"><th className="text-left py-2.5 px-4 font-semibold">Size</th><th className="text-left py-2.5 px-4 font-semibold">mm (W&times;H)</th><th className="text-left py-2.5 px-4 font-semibold">Pixels @ 300 DPI</th></tr></thead>
                      <tbody>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">A5 landscape</td><td className="py-2.5 px-4 text-foreground-60">210&times;148</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">2480&times;1748</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">A4 landscape</td><td className="py-2.5 px-4 text-foreground-60">297&times;210</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">3508&times;2480</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">A3 landscape</td><td className="py-2.5 px-4 text-foreground-60">420&times;297</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">4961&times;3508</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">A2 landscape</td><td className="py-2.5 px-4 text-foreground-60">594&times;420</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">7016&times;4961</td></tr>
                        <tr><td className="py-2.5 px-4 font-medium">A1 landscape</td><td className="py-2.5 px-4 text-foreground-60">841&times;594</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">9933&times;7016</td></tr>
                      </tbody>
                    </table>
                  </div>
                )},
                { label: "Extras", content: (
                  <div className="overflow-x-auto">
                    <p className="text-foreground-60 text-sm mb-3">6 common sizes that don&apos;t fit standard ratios.</p>
                    <table className="w-full border-collapse text-sm">
                      <thead><tr className="border-b border-white/20"><th className="text-left py-2.5 px-4 font-semibold">Landscape Size</th><th className="text-left py-2.5 px-4 font-semibold">Portrait Equiv.</th><th className="text-left py-2.5 px-4 font-semibold">Pixels @ 300 DPI</th></tr></thead>
                      <tbody>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">7&times;5</td><td className="py-2.5 px-4 text-foreground-60">5&times;7</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">2100&times;1500</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">11&times;8.5</td><td className="py-2.5 px-4 text-foreground-60">8.5&times;11</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">3300&times;2550</td></tr>
                        <tr className="border-b border-white/10 bg-teal-400/[0.06]"><td className="py-2.5 px-4 font-medium">14&times;11 <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">Popular</span></td><td className="py-2.5 px-4 text-foreground-60"><Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link></td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">4200&times;3300</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">17&times;11</td><td className="py-2.5 px-4 text-foreground-60">11&times;17</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">5100&times;3300</td></tr>
                        <tr className="border-b border-white/10"><td className="py-2.5 px-4 font-medium">19&times;13</td><td className="py-2.5 px-4 text-foreground-60">13&times;19</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">5700&times;3900</td></tr>
                        <tr><td className="py-2.5 px-4 font-medium">24&times;20</td><td className="py-2.5 px-4 text-foreground-60">20&times;24</td><td className="py-2.5 px-4 text-foreground-60 font-mono text-xs">7200&times;6000</td></tr>
                      </tbody>
                    </table>
                  </div>
                )},
              ]} />
            </div>

            {/* Visual: Size comparison diagram */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/landscape-size-comparison.png"
                alt="Landscape print size comparison showing 10×8, 14×11, 20×16, and 30×20 at actual scale with pixel dimensions at 300 DPI"
                width={1200}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Section 3: Which sizes sell best */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Which Landscape Sizes Sell Best?
              </h2>
              <p className="text-foreground-60 mb-6">
                Not every horizontal size has equal demand. These are the formats
                Etsy buyers actually look for, organized by art type.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-teal-400" />
                    Photography, nature scenes &amp; cityscapes
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Wide horizontal compositions are the natural home for landscape
                    photography. The 2:3 ratio in landscape (30&times;20, 24&times;16,
                    18&times;12) gives that cinematic panoramic feel matching how
                    photographers capture wide scenes. See our full <Link href="/etsy-photography-print-sizes" className="text-accent-light hover:underline">photography print sizes guide</Link> for camera-native ratios.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    For{" "}
                    <Link href="/etsy-botanical-print-sizes" className="text-accent-light hover:underline">
                      botanical print sellers
                    </Link>
                    , horizontal formats work especially well for wide meadow scenes
                    and horizontal branch compositions.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Abstract &amp; modern wall art
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Contemporary abstract sellers frequently offer horizontal
                    compositions for a gallery feel. The 4:5 ratio in landscape
                    (10&times;8,{" "}
                    <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">
                      20&times;16
                    </Link>
                    ) gives that slightly wide proportion that works well in modern
                    interiors. For{" "}
                    <Link href="/etsy-minimalist-wall-art-sizes" className="text-accent-light hover:underline">
                      minimalist wall art
                    </Link>
                    , horizontal formats are particularly strong above furniture.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Above-sofa &amp; above-bed placement
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    These wall spaces are inherently horizontal, making them the
                    top use case for landscape prints. Buyers searching for art to
                    fill these spaces specifically want horizontal formats. Larger
                    sizes work best:{" "}
                    <Link href="/etsy-20x30-print-size" className="text-accent-light hover:underline">
                      30&times;20
                    </Link>
                    ,{" "}
                    <Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">
                      24&times;18
                    </Link>
                    , and 20&times;16 are the standouts.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Kitchen, dining room &amp; hallway art
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Mid-range horizontal formats perform well in kitchens and dining
                    rooms where wall space is between fixtures.{" "}
                    <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">
                      14&times;11
                    </Link>
                    , 12&times;9, and{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">
                      10&times;8
                    </Link>{" "}
                    are the most practical sizes.{" "}
                    <Link href="/etsy-quote-wall-art-sizes" className="text-accent-light hover:underline">
                      Quote and typography art
                    </Link>{" "}
                    in landscape orientation also performs well in kitchen spaces.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Gallery walls with mixed orientations
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Sellers who offer both portrait and landscape per design give
                    buyers flexibility for dynamic{" "}
                    <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">
                      gallery wall arrangements
                    </Link>
                    . Mixing horizontal and vertical pieces creates visual interest.
                    For{" "}
                    <Link href="/etsy-nursery-wall-art-sizes" className="text-accent-light hover:underline">
                      nursery wall art
                    </Link>
                    , mixed orientation sets are especially popular.
                  </p>
                </Card>
              </div>
            </div>

            {/* CTA 1: automation/speed angle */}
            <Card accent className="p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold mb-2">
                Get Every Landscape Size Automatically
              </h3>
              <p className="text-foreground-60 mb-6">
                Upload one image &mdash; get portrait and landscape versions of all
                30+ sizes in seconds. No manually rotating files, no separate
                landscape exports, no resizing one orientation at a time.
              </p>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate Landscape Sizes Free
                </Button>
              </a>
            </Card>

            {/* Section 4: Frame availability */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frame Availability for Landscape Sizes
              </h2>
              <p className="text-foreground-60 mb-4">
                A common seller concern: &ldquo;Can buyers actually find landscape
                frames?&rdquo; The answer is yes &mdash; standard frames work in both
                orientations.
              </p>
              <p className="text-foreground-60 mb-4">
                An 8&times;10 frame holds both an 8&times;10 portrait print AND a
                10&times;8 landscape print. The frame doesn&apos;t change &mdash; just the
                print orientation inside it. IKEA, Target, and Amazon all stock
                their most popular frame sizes (8&times;10, 11&times;14, 16&times;20)
                as orientation-neutral.
              </p>
              <p className="text-foreground-60 mb-6">
                The practical rule: stick to standard sizes from the table above
                and buyers will be able to frame them easily. Custom dimensions
                are where landscape framing gets complicated.
              </p>

              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-sm font-semibold mb-3 text-foreground">
                  Listing tips for landscape prints:
                </p>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    Include &ldquo;Landscape&rdquo; or &ldquo;Horizontal&rdquo; in your listing title and tags
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    List dimensions as width &times; height: write &ldquo;10&times;8&rdquo;, not &ldquo;8&times;10&rdquo;
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    Add &ldquo;Landscape / Horizontal orientation&rdquo; in your listing description
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    Include a mockup showing the art in a horizontal frame &mdash; buyers need visual confirmation
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: Common mistakes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Landscape Sizing Mistakes
              </h2>
              <p className="text-foreground-60 mb-6">
                These are the errors that lead to refund requests, bad reviews,
                and buyer confusion. For more on correct pixel dimensions, the{" "}
                <Link href="/how-to-resize-images-for-etsy" className="text-accent-light hover:underline">
                  image resize guide
                </Link>{" "}
                covers this in depth.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
                  <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Wrong pixel dimensions</p>
                    <p className="text-sm text-foreground-60">
                      10&times;8 at 300 DPI is 3000&times;2400 pixels (width &times; height).
                      The most common mistake is delivering 2400&times;3000 instead &mdash;
                      that&apos;s portrait 8&times;10, not landscape 10&times;8. Check your
                      pixel order before exporting. See{" "}
                      <Link href="/best-resolution-for-etsy-printables" className="text-accent-light hover:underline">
                        300 DPI requirements
                      </Link>{" "}
                      for the full breakdown.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
                  <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Rotating portrait art instead of composing horizontally</p>
                    <p className="text-sm text-foreground-60">
                      Landscape art should be composed horizontally from the start.
                      Simply rotating a portrait piece 90 degrees doesn&apos;t produce
                      good landscape art &mdash; the composition was designed vertically.
                      Your source file should be horizontal before you export any
                      landscape sizes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
                  <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Offering only a few landscape sizes</p>
                    <p className="text-sm text-foreground-60">
                      Buyers expect the same range horizontally as they see in portrait
                      listings. Offering just 10&times;8 without 14&times;11, 20&times;16,
                      or the 2:3 range leaves gaps. Read{" "}
                      <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
                        how many sizes to include
                      </Link>{" "}
                      for the professional standard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
                  <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Not labeling orientation in listings</p>
                    <p className="text-sm text-foreground-60">
                      Buyers who receive a landscape print when they expected portrait
                      request refunds. Always state orientation explicitly in the title,
                      description, and via mockup. Never assume buyers will infer
                      orientation from dimensions alone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
                  <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Creating landscape files as a separate workflow</p>
                    <p className="text-sm text-foreground-60">
                      Many sellers manually create portrait files first, then go back and
                      create landscape versions separately &mdash; effectively doubling
                      production time. Check the{" "}
                      <Link href="/what-files-to-include-etsy-digital-download" className="text-accent-light hover:underline">
                        file organization guide
                      </Link>{" "}
                      for how to structure your downloads properly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: How to create landscape files */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create Landscape Print Files for Etsy
              </h2>
              <p className="text-foreground-60 mb-4">
                The manual approach requires creating each landscape file separately
                &mdash; rotating, resizing, checking pixel dimensions, and organizing
                by size. For 28 sizes across 5 packs, that&apos;s 28 landscape files
                on top of 28 portrait files: 56 total before you add square formats.
              </p>
              <p className="text-foreground-60 mb-4">
                SnapToSize handles both orientations from a single upload. Upload
                your artwork once and receive portrait and{" "}
                <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
                  landscape versions of all 30+ sizes
                </Link>
                , each at 300 DPI, JPG (also called JPEG), organized in ratio packs
                and under Etsy&apos;s 20MB limit per ZIP. Files are named clearly &mdash;{" "}
                <code className="text-xs font-mono bg-white/[0.06] px-1.5 py-0.5 rounded">artwork_10x8_300dpi.jpg</code>{" "}
                for landscape,{" "}
                <code className="text-xs font-mono bg-white/[0.06] px-1.5 py-0.5 rounded">artwork_8x10_300dpi.jpg</code>{" "}
                for portrait.
              </p>
              <p className="text-foreground-60">
                This turns &ldquo;should I offer landscape?&rdquo; from a production
                question into a zero-effort default. Up to 70 print-ready files from
                one upload: 31 portrait + 31 landscape + 8 square. See the full list
                in{" "}
                <Link href="/what-files-to-include-etsy-digital-download" className="text-accent-light hover:underline">
                  what files to include in your Etsy digital download
                </Link>
                .
              </p>
            </div>

            {/* Section 7: Gallery wall layouts */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Gallery Wall Layouts with Landscape Prints
              </h2>
              <p className="text-foreground-60 mb-4">
                Horizontal prints are a key ingredient in dynamic gallery wall
                arrangements. A single large landscape print anchors a wall, while
                smaller portraits around it create visual rhythm.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl border border-border bg-surface">
                  <p className="font-semibold mb-1 text-sm">1 large landscape + 2 small portraits</p>
                  <p className="text-sm text-foreground-60">
                    Classic asymmetric arrangement. One 30&times;20 or 24&times;18
                    landscape flanked by two vertical prints creates a natural focal point.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface">
                  <p className="font-semibold mb-1 text-sm">Alternating orientation grid</p>
                  <p className="text-sm text-foreground-60">
                    A 2&times;3 or 3&times;2 grid where every other piece is horizontal.
                    Works well with same-series art where the buyer downloads both portrait
                    and landscape versions.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface">
                  <p className="font-semibold mb-1 text-sm">Stacked landscape pair</p>
                  <p className="text-sm text-foreground-60">
                    Two landscape prints stacked vertically &mdash; 20&times;16 over
                    14&times;11, for example. Fills tall narrow walls while keeping the
                    horizontal feel throughout.
                  </p>
                </div>
              </div>

              <p className="text-foreground-60">
                Sellers who offer both orientations per design effectively double their
                catalog and serve buyers who need layout flexibility. For detailed{" "}
                <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">
                  gallery wall size arrangements
                </Link>
                , the gallery wall guide covers common formulas in depth.
              </p>
            </div>

            {/* CTA 2: FinalCTA — catalog growth angle */}
            <FinalCTA
              heading="Double Your Catalog Without Doubling Your Work"
              stat="Up to 70 files from a single upload"
              description="SnapToSize generates portrait and landscape versions of every size automatically. Offer both orientations across all 30+ sizes — without creating landscape files manually."
              buttonText="Generate All Sizes Free"
              appUrl={appUrl}
            />

            {/* FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

          </div>
        </Container>
      </section>

      {/* Related pages */}

      {/* Related pages */}
      <section className="py-12 md:py-16">
        <Container>
          <RelatedPages currentSlug="etsy-landscape-print-sizes" />
        </Container>
      </section>
    </>
  );
}
