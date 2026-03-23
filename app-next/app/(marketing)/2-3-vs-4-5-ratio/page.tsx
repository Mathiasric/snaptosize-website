import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title:
    "2:3 vs 4:5 Ratio — Which Print Sizes Do Etsy Sellers Actually Need?",
  description:
    "Compare 2:3 and 4:5 aspect ratios for Etsy printable wall art. Side-by-side table, pixel dimensions at 300 DPI, cropping math, and why top sellers include both.",
  alternates: { canonical: "https://snaptosize.com/2-3-vs-4-5-ratio" },
  openGraph: {
    title:
      "2:3 vs 4:5 Ratio — Which Print Sizes Do Etsy Sellers Need? | SnapToSize",
    description:
      "Head-to-head comparison of the two most important Etsy print ratios. Sizes, pixel dimensions, frame availability, and the business case for including both.",
    url: "https://snaptosize.com/2-3-vs-4-5-ratio",
    images: [
      {
        url: "/assets/og/2-3-vs-4-5-ratio.png",
        width: 1200,
        height: 630,
        alt: "2:3 vs 4:5 Ratio Comparison for Etsy Printable Sellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2:3 vs 4:5 Ratio — Which Print Sizes Do Etsy Sellers Need?",
    description:
      "Side-by-side comparison of 2:3 and 4:5 print ratios with pixel dimensions, frame availability, and why you need both for Etsy.",
    images: ["/assets/og/2-3-vs-4-5-ratio.png"],
  },
};

export default function TwoThreeVsFourFiveRatioPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "2:3 vs 4:5 Ratio — Which Print Sizes Do Etsy Sellers Actually Need?",
    description:
      "Complete comparison of 2:3 and 4:5 aspect ratios for Etsy printable wall art sellers, including pixel dimensions at 300 DPI, frame availability, and the business case for including both ratios.",
    url: "https://snaptosize.com/2-3-vs-4-5-ratio",
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
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
        name: "Etsy Print Ratios",
        item: "https://snaptosize.com/etsy-print-ratios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "2:3 vs 4:5 Ratio",
        item: "https://snaptosize.com/2-3-vs-4-5-ratio",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What ratio is an 8x10 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8x10 is a 4:5 ratio. Many sellers mistakenly think 8x10 is the same ratio as 4x6 (which is 2:3). They are different ratios and require separate source files to avoid cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Can I crop a 2:3 design to fit a 4:5 frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technically yes, but you lose 16.7% of the image width. For wall art with intentional composition — borders, centered text, balanced whitespace — cropping destroys the design. Professional sellers create dedicated files for each ratio.",
        },
      },
      {
        "@type": "Question",
        name: "Which ratio sells better on Etsy — 2:3 or 4:5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both are essential. 2:3 drives large poster sales (24x36, 16x24), while 4:5 drives traditional frame sales (8x10, 16x20). Top Etsy printable listings include both ratios plus 3:4 and ISO sizes. Omitting either costs you sales.",
        },
      },
      {
        "@type": "Question",
        name: "Do I also need 3:4 and ISO ratios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, for maximum coverage. 3:4 covers sizes like 12x16 and 18x24. ISO (A-series) covers international buyers who print on A4, A3, and A2 paper. Most top sellers include 5 ratio packs total. SnapToSize generates all 5 from a single upload.",
        },
      },
      {
        "@type": "Question",
        name: "How many print sizes should I include per Etsy listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional sellers include 25-30 sizes across 5 ratios. This sounds overwhelming to create manually, but tools like SnapToSize generate all sizes from one image in under 30 seconds. More sizes means fewer customer questions and higher conversion rates.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_2_3_vs_4_5&kind=guide";

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
        className="relative pt-12 pb-36 md:pt-20 md:pb-48 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* Ratio comparison visual — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:flex items-end gap-6">
          {/* 2:3 Frame */}
          <div className="relative">
            <div
              className="border border-white/[0.08] rounded-sm relative"
              style={{ width: "140px", height: "210px" }}
            >
              <div className="absolute inset-2 border border-purple-500/20 rounded-sm" />
              {/* Corner marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-purple-400/30" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-purple-400/30" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-purple-400/30" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-purple-400/30" />
              {/* Ratio badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-2.5 py-1 rounded border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                    2 : 3
                  </span>
                </div>
              </div>
              {/* Tick marks — top */}
              <div className="absolute top-0 left-0 right-0 flex justify-between px-2">
                {[...Array(7)].map((_, i) => (
                  <div key={`t23-${i}`} className="w-px h-1 bg-white/[0.06]" />
                ))}
              </div>
              {/* Tick marks — left */}
              <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-2">
                {[...Array(9)].map((_, i) => (
                  <div key={`l23-${i}`} className="h-px w-1 bg-white/[0.06]" />
                ))}
              </div>
            </div>
            {/* Label below */}
            <div className="text-center mt-3">
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider">
                Taller &middot; Narrower
              </span>
            </div>
          </div>

          {/* VS divider */}
          <div className="flex flex-col items-center justify-center pb-8">
            <span className="text-xs font-mono text-white/15 tracking-[0.3em]">
              VS
            </span>
          </div>

          {/* 4:5 Frame */}
          <div className="relative">
            <div
              className="border border-white/[0.08] rounded-sm relative"
              style={{ width: "168px", height: "210px" }}
            >
              <div className="absolute inset-2 border border-indigo-500/20 rounded-sm" />
              {/* Corner marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-indigo-400/30" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-indigo-400/30" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-indigo-400/30" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-indigo-400/30" />
              {/* Ratio badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-2.5 py-1 rounded border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                    4 : 5
                  </span>
                </div>
              </div>
              {/* Tick marks — top */}
              <div className="absolute top-0 left-0 right-0 flex justify-between px-2">
                {[...Array(9)].map((_, i) => (
                  <div key={`t45-${i}`} className="w-px h-1 bg-white/[0.06]" />
                ))}
              </div>
              {/* Tick marks — left */}
              <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-2">
                {[...Array(9)].map((_, i) => (
                  <div key={`l45-${i}`} className="h-px w-1 bg-white/[0.06]" />
                ))}
              </div>
            </div>
            {/* Label below */}
            <div className="text-center mt-3">
              <span className="text-[10px] font-mono text-indigo-300/50 tracking-wider">
                Squarer &middot; Wider
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Ratio Comparison
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                2:3 vs 4:5 Ratio
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Which print sizes do Etsy sellers actually need?
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              These two ratios cover the most popular frame sizes in the world.
              One is built for statement posters, the other for classic frames.
              Here&apos;s how they compare &mdash; and why top sellers include
              both.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate Both Ratios Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download every 2:3 and 4:5 size.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1.5 px-2 text-[11px] sm:text-xs sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-white/70 font-medium">
                  8 sizes in 2:3
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 text-[11px] sm:text-xs sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-white/70 font-medium">
                  5 sizes in 4:5
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 text-[11px] sm:text-xs sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-white/70 font-medium">
                  All at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 text-[11px] sm:text-xs sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-white/70 font-medium">
                  Side-by-side table
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
            {/* ===== SECTION 1: What Is the 2:3 Ratio? ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is the 2:3 Ratio? (Sizes, Use Cases, Frame Availability)
              </h2>

              <p className="text-foreground-60 mb-4">
                The 2:3 ratio means for every 2 units of width, there are 3
                units of height. It produces a taller, narrower rectangle
                &mdash; the shape you associate with large posters and statement
                wall art. This ratio originates from the 35mm film standard and
                remains the most popular format for large prints.
              </p>

              <p className="text-foreground-60 mb-4">
                The{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24x36 print size
                </Link>{" "}
                is the single most purchased poster size in the United States
                &mdash; and it&apos;s a 2:3 ratio. So is the{" "}
                <Link
                  href="/etsy-4x6-print-size"
                  className="text-accent-light hover:underline"
                >
                  4x6 print
                </Link>
                , the standard photo size. Everything from small snapshots to
                oversized wall art lives in this ratio family.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  All 2:3 Sizes in SnapToSize
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "4x6",
                    "6x9",
                    "8x12",
                    "10x15",
                    "12x18",
                    "16x24",
                    "20x30",
                    "24x36",
                  ].map((size) => (
                    <div
                      key={size}
                      className="flex items-center gap-2 text-sm text-foreground-60"
                    >
                      <Check className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span>{size}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                <strong>Best for:</strong> Large statement pieces, above-sofa
                placements, living room focal walls, and oversized posters.
                The elongated shape draws the eye vertically, making artwork
                feel dramatic and intentional.
              </p>

              <p className="text-foreground-60">
                <strong>Frame availability:</strong> 2:3 frames are stocked at
                every major retailer for popular sizes like 12x18, 16x24, and
                24x36. IKEA, Amazon, and poster frame brands carry these sizes
                in bulk. Smaller 2:3 sizes (4x6, 6x9) are found in standard
                photo frame displays.
              </p>
            </div>

            {/* ===== SECTION 2: What Is the 4:5 Ratio? ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is the 4:5 Ratio? (Sizes, Use Cases, Frame Availability)
              </h2>

              <p className="text-foreground-60 mb-4">
                The 4:5 ratio means for every 4 units of width, there are 5
                units of height. It produces a slightly squarer, wider rectangle
                compared to 2:3 &mdash; the shape you associate with traditional
                framed art, gallery walls, and classic home decor.
              </p>

              <p className="text-foreground-60 mb-4">
                The{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8x10 print size
                </Link>{" "}
                is the single most purchased frame size in the United States,
                and it&apos;s a 4:5 ratio. Ready-made 8x10 frames are
                available at Target, IKEA, Amazon, Walmart, Michaels, and every
                craft store. The{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16x20 print size
                </Link>{" "}
                is the second most popular in this family &mdash; a go-to for
                larger gallery wall pieces.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  All 4:5 Sizes in SnapToSize
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["8x10", "12x15", "16x20", "20x25", "24x30"].map(
                    (size) => (
                      <div
                        key={size}
                        className="flex items-center gap-2 text-sm text-foreground-60"
                      >
                        <Check className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                        <span>{size}</span>
                      </div>
                    )
                  )}
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                <strong>Best for:</strong> Gallery walls, bedrooms, hallways,
                nurseries, and any space where a classic, traditional frame
                aesthetic is desired. The slightly squarer shape feels balanced
                and timeless.
              </p>

              <p className="text-foreground-60">
                <strong>Frame availability:</strong> 4:5 frames &mdash;
                especially 8x10 and 16x20 &mdash; are the easiest frames to
                find anywhere. They dominate the &ldquo;picture frames&rdquo;
                section of every retail store. Buyers often already own 4:5
                frames and are looking for art to fill them.
              </p>
            </div>

            {/* ===== SECTION 3: Side-by-Side Comparison Table ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Side-by-Side Comparison: 2:3 vs 4:5
              </h2>
              <p className="text-foreground-60 mb-6">
                This is the quick reference. Bookmark this table &mdash;
                it answers the most common questions sellers ask about these two
                ratios.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Aspect
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-purple-300">
                        2:3 Ratio
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-indigo-300">
                        4:5 Ratio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Shape</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Taller, narrower
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Squarer, wider
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Decimal value
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        0.667
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        0.800
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Included sizes
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4x6, 6x9, 8x12, 10x15, 12x18, 16x24, 20x30, 24x36
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8x10, 12x15, 16x20, 20x25, 24x30
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Most popular size
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        24x36 (top poster size in US)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8x10 (top frame size in US)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Frame availability
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Poster frames, IKEA, Amazon
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Everywhere &mdash; Target, IKEA, craft stores
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Best wall placement
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Above sofa, living room focal wall
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery wall, bedroom, hallway, nursery
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Common use case
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large statement piece, poster art
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Classic framed art, gallery sets
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">
                        Number of sizes
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8 sizes
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5 sizes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                For the complete breakdown of{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  all four print ratios explained
                </Link>
                , including 3:4 and ISO, see the full ratio guide.
              </p>
            </div>

            {/* ===== SECTION 4: Why You Need Both ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why You Need Both (Not One or the Other)
              </h2>

              <p className="text-foreground-60 mb-4">
                This is where most sellers get it wrong. They pick one ratio and
                assume it covers everything. It doesn&apos;t. 2:3 and 4:5 serve
                completely different buyer segments with completely different
                needs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="p-6">
                  <div className="text-purple-400 font-mono text-sm mb-2">
                    2:3 buyers want...
                  </div>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>Large statement pieces (24x36, 20x30)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>Poster-style wall art</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>Living room focal walls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>Dramatic, elongated aesthetics</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="text-indigo-400 font-mono text-sm mb-2">
                    4:5 buyers want...
                  </div>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Traditional framed art (8x10, 16x20)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Gallery wall collections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Bedroom, hallway, nursery art</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Classic, balanced proportions</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <p className="text-foreground-60 mb-4">
                Skipping either ratio means losing sales from customers who
                can&apos;t use your files. If someone has an 8x10 frame and you
                only offer 2:3 sizes, they leave your listing. If someone wants
                a 24x36 poster and you only offer 4:5, same result.
              </p>

              <p className="text-foreground-60 mb-4">
                Top-selling Etsy printable listings include 5 ratio packs: 2:3,
                3:4, 4:5, ISO, and extras. This means 25-30 individual sizes per
                listing. Sellers who include all ratios see fewer customer
                questions and higher conversion rates because buyers find the
                exact size they need. Learn more about{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include
                </Link>{" "}
                in each listing.
              </p>

              <Card accent className="p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">
                      &ldquo;Can&apos;t my customer just crop?&rdquo;
                    </p>
                    <p className="text-sm text-foreground-60">
                      This is the most common objection &mdash; and the biggest
                      source of 1-star reviews on digital art. When a buyer
                      crops your 2:3 design to fit a 4:5 frame, they lose parts
                      of the composition. Borders get cut, text shifts off-center,
                      and the balanced whitespace you designed disappears.
                      Professional sellers create dedicated files for each ratio.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* ===== CTA 1 — After "Why You Need Both" ===== */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Manually Resizing for Every Ratio
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload one image to SnapToSize and get all 30 sizes across 5
                  ratios in seconds. No cropping, no composition loss, no manual
                  work.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Try Free &mdash; No Signup Required
                  </Button>
                </a>
              </Card>
            </div>

            {/* ===== SECTION 5: The Cropping Problem ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Happens When You Crop a 2:3 Image to 4:5
              </h2>

              <p className="text-foreground-60 mb-4">
                When you force a 2:3 design into a 4:5 frame, something gets
                cut. The math is specific: a 2:3 image cropped to 4:5 loses
                16.7% of the image width. That&apos;s not a small trim &mdash;
                it&apos;s a visible change that damages the artwork.
              </p>

              <Card className="p-6 md:p-8 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  The Cropping Math
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      2:3 width-to-height
                    </span>
                    <span className="font-semibold font-mono">0.667</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      4:5 width-to-height
                    </span>
                    <span className="font-semibold font-mono">0.800</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Difference
                    </span>
                    <span className="font-semibold text-amber-400">
                      16.7% of width lost
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">
                      What gets cut
                    </span>
                    <span className="font-semibold text-foreground-60">
                      Top &amp; bottom edges
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                For wall art with intentional composition &mdash; decorative
                borders, centered text, symmetrical elements, or balanced
                negative space &mdash; losing 16.7% of the height destroys the
                design. The border becomes uneven. The text shifts off-center.
                The whitespace that made the composition work is gone.
              </p>

              <p className="text-foreground-60 mb-6">
                This is exactly why professional Etsy sellers create separate
                files for each ratio rather than asking customers to crop. And
                it&apos;s why &ldquo;please crop to fit your frame&rdquo; in
                your listing description is a recipe for refund requests.
              </p>

              {/* Cropping visual — CSS only */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="mx-auto border border-purple-500/30 rounded-sm bg-purple-500/5 flex items-center justify-center relative" style={{ width: "140px", height: "210px" }}>
                    <span className="text-xs font-mono text-purple-300/60">
                      Full 2:3 design
                    </span>
                    {/* Top/bottom crop indicators */}
                    <div className="absolute top-0 left-0 right-0 h-[17.5px] bg-red-500/10 border-b border-red-400/30 border-dashed" />
                    <div className="absolute bottom-0 left-0 right-0 h-[17.5px] bg-red-500/10 border-t border-red-400/30 border-dashed" />
                  </div>
                  <p className="text-xs text-foreground-60 mt-2">
                    Red zones = lost when cropped to 4:5
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto border border-indigo-500/30 rounded-sm bg-indigo-500/5 flex items-center justify-center" style={{ width: "140px", height: "175px" }}>
                    <span className="text-xs font-mono text-indigo-300/60">
                      After 4:5 crop
                    </span>
                  </div>
                  <p className="text-xs text-foreground-60 mt-2">
                    16.7% of composition removed
                  </p>
                </div>
              </div>
            </div>

            {/* ===== CTA 2 — After cropping problem ===== */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  No Cropping. No Composition Loss.
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  SnapToSize creates dedicated files for every ratio &mdash; your
                  full artwork preserved at every size. No 1-star reviews from
                  customers who cropped incorrectly.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Ratios Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* ===== SECTION 6: Manual Way vs SnapToSize ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create Both Ratios Efficiently
              </h2>

              <p className="text-foreground-60 mb-6">
                Now that you know why both ratios matter, the question is how to
                create all these sizes without spending hours on each design. There
                are two paths.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    The Manual Way
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Open your design tool. Resize the canvas to each 2:3 size.
                    Export 8 files. Then resize for each 4:5 size. Export 5 more
                    files. Organize into folders, create ZIPs, check they&apos;re
                    under 20&nbsp;MB.
                  </p>
                  <div className="space-y-2 text-sm text-foreground-60">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      <span>30-60 minutes per design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      <span>Manual pixel calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      <span>13 individual exports just for 2:3 + 4:5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      <span>Doesn&apos;t scale for 50+ listings</span>
                    </div>
                  </div>
                </Card>

                <Card accent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    With SnapToSize
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Upload one image. SnapToSize generates all 30 sizes across 5
                    ratios automatically &mdash; 2:3, 3:4, 4:5, ISO, and extras.
                    All at 300 DPI, organized into ZIPs, under Etsy&apos;s
                    20&nbsp;MB limit.
                  </p>
                  <div className="space-y-2 text-sm text-foreground-60">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>Under 30 seconds per design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>All pixel dimensions calculated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>30 sizes in 5 organized ZIPs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>Scales to any number of listings</span>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60 mb-4">
                The manual approach works for a handful of listings. But if you
                sell 20, 50, or 100+ designs, the hours add up fast. Each new
                artwork means another 30-60 minutes of resizing, exporting, and
                organizing. Learn more in our guide on{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to resize images for Etsy
                </Link>
                .
              </p>

              <p className="text-foreground-60">
                <Link
                  href="/pricing"
                  className="text-accent-light hover:underline"
                >
                  See SnapToSize Pro pricing
                </Link>{" "}
                &mdash; or start with the free tier (5 quick exports + 2 pack
                downloads per day).
              </p>
            </div>

            {/* ===== SECTION 7: Complete Size Reference ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Complete Size Reference &mdash; Every Size in Both Ratios at
                300&nbsp;DPI
              </h2>
              <p className="text-foreground-60 mb-6">
                Bookmark this section. Every pixel dimension is calculated at 300
                DPI (the professional print standard). Need to{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  calculate exact pixel dimensions
                </Link>{" "}
                for other sizes? Use our calculator. For the science behind why 300
                DPI matters, see{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for printables
                </Link>
                .
              </p>

              {/* 2:3 Reference Table */}
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                2:3 Ratio &mdash; All Sizes at 300 DPI
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Print Size (inches)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Size (cm)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { inches: "4 x 6", cm: "10.2 x 15.2", pixels: "1200 x 1800" },
                      { inches: "6 x 9", cm: "15.2 x 22.9", pixels: "1800 x 2700" },
                      { inches: "8 x 12", cm: "20.3 x 30.5", pixels: "2400 x 3600" },
                      { inches: "10 x 15", cm: "25.4 x 38.1", pixels: "3000 x 4500" },
                      { inches: "12 x 18", cm: "30.5 x 45.7", pixels: "3600 x 5400" },
                      { inches: "16 x 24", cm: "40.6 x 61.0", pixels: "4800 x 7200" },
                      { inches: "20 x 30", cm: "50.8 x 76.2", pixels: "6000 x 9000" },
                      { inches: "24 x 36", cm: "61.0 x 91.4", pixels: "7200 x 10800" },
                    ].map((row, i) => (
                      <tr
                        key={row.inches}
                        className={
                          i < 7
                            ? "border-b border-white/10"
                            : ""
                        }
                      >
                        <td className="py-3 px-4 font-medium">
                          {row.inches}
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          {row.cm}
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          {row.pixels}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 4:5 Reference Table */}
              <h3 className="text-xl font-bold mb-4 text-indigo-300">
                4:5 Ratio &mdash; All Sizes at 300 DPI
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Print Size (inches)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Size (cm)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { inches: "8 x 10", cm: "20.3 x 25.4", pixels: "2400 x 3000" },
                      { inches: "12 x 15", cm: "30.5 x 38.1", pixels: "3600 x 4500" },
                      { inches: "16 x 20", cm: "40.6 x 50.8", pixels: "4800 x 6000" },
                      { inches: "20 x 25", cm: "50.8 x 63.5", pixels: "6000 x 7500" },
                      { inches: "24 x 30", cm: "61.0 x 76.2", pixels: "7200 x 9000" },
                    ].map((row, i) => (
                      <tr
                        key={row.inches}
                        className={
                          i < 4
                            ? "border-b border-white/10"
                            : ""
                        }
                      >
                        <td className="py-3 px-4 font-medium">
                          {row.inches}
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          {row.cm}
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          {row.pixels}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                For the full reference across all 5 ratio packs (2:3, 3:4, 4:5,
                ISO, and extras), see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* ===== FINAL CTA ===== */}
            <div>
              <FinalCTA
                heading="Generate Both Ratios in One Click"
                stat="30 sizes across 5 ratio packs from a single upload"
                description="Upload your artwork and receive every 2:3, 4:5, and more at 300 DPI. No cropping, no manual resizing."
                buttonText="Try SnapToSize Free"
                appUrl={appUrl}
              />
            </div>

            {/* ===== FAQ ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; 2:3 vs 4:5 Ratio for Etsy Sellers
              </h2>
              <FAQAccordion
                items={[
                  {
                    question: "What ratio is an 8x10 print?",
                    answer:
                      "8x10 is a 4:5 ratio. Many sellers mistakenly think 8x10 is the same ratio as 4x6 (which is 2:3). They are different ratios and require separate source files to avoid cropping.",
                  },
                  {
                    question:
                      "Can I crop a 2:3 design to fit a 4:5 frame?",
                    answer:
                      "Technically yes, but you lose 16.7% of the image width. For wall art with intentional composition \u2014 borders, centered text, balanced whitespace \u2014 cropping destroys the design. Professional sellers create dedicated files for each ratio.",
                  },
                  {
                    question:
                      "Which ratio sells better on Etsy \u2014 2:3 or 4:5?",
                    answer:
                      "Both are essential. 2:3 drives large poster sales (24x36, 16x24), while 4:5 drives traditional frame sales (8x10, 16x20). Top Etsy printable listings include both ratios plus 3:4 and ISO sizes. Omitting either costs you sales.",
                  },
                  {
                    question:
                      "Do I also need 3:4 and ISO ratios?",
                    answer:
                      "Yes, for maximum coverage. 3:4 covers sizes like 12x16 and 18x24. ISO (A-series) covers international buyers who print on A4, A3, and A2 paper. Most top sellers include 5 ratio packs total. SnapToSize generates all 5 from a single upload.",
                  },
                  {
                    question:
                      "How many print sizes should I include per Etsy listing?",
                    answer:
                      "Professional sellers include 25-30 sizes across 5 ratios. This sounds overwhelming to create manually, but tools like SnapToSize generate all sizes from one image in under 30 seconds. More sizes means fewer customer questions and higher conversion rates.",
                  },
                ]}
              />
            </div>

            {/* ===== Email Capture ===== */}
            <div>
              <EmailCaptureSection
                heading="Free Etsy Print Size Cheat Sheet"
                description="All Etsy ratios and pixel dimensions at 300 DPI in one PDF."
                placeholder="Enter your email"
                buttonText="Get Free Cheat Sheet"
              />
            </div>

            {/* ===== Related Pages ===== */}
            <RelatedPages currentSlug="2-3-vs-4-5-ratio" />
          </div>
        </Container>
      </section>
    </>
  );
}
