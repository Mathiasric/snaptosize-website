import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "A5 Print Size for Etsy — Dimensions, Pixels & International Sizing",
  description:
    "A5 is 1748×2480 pixels at 300 DPI (148×210 mm). Get exact dimensions, A5 vs 5×7 comparison, A-series sizing table, and file setup for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-a5-print-size" },
  openGraph: {
    title:
      "A5 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete A5 print guide for Etsy sellers. 1748×2480 pixels at 300 DPI, ISO A-series ratio, A5 vs 5×7, and international sizing for cards, planners, and small prints.",
    url: "https://snaptosize.com/etsy-a5-print-size",
    images: [
      {
        url: "/assets/og/etsy-a5-print-size.png",
        width: 1200,
        height: 630,
        alt: "A5 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A5 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete A5 print guide for Etsy sellers. 1748×2480 pixels at 300 DPI, ISO A-series ratio, and international file setup for cards and planners.",
    images: ["/assets/og/etsy-a5-print-size.png"],
  },
};

export default function EtsyA5PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A5 Print Size for Etsy — Dimensions, Pixels & International Sizing",
    description:
      "Complete technical guide to A5 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, A5 vs 5×7 comparison, and A-series sizing for greeting cards, planners, and small prints.",
    url: "https://snaptosize.com/etsy-a5-print-size",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
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
        name: "A5 Print Size",
        item: "https://snaptosize.com/etsy-a5-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is A5 size in pixels at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A5 at 300 DPI is exactly 1748×2480 pixels. The calculation: 148mm ÷ 25.4 × 300 = 1748 pixels wide, 210mm ÷ 25.4 × 300 = 2480 pixels tall.",
        },
      },
      {
        "@type": "Question",
        name: "Is A5 the same as 5×7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A5 is 5.83×8.27 inches while 5×7 is 5×7 inches. A5 is both wider and taller. The aspect ratios also differ — A5 is 1:1.414 (ISO) while 5×7 is 1:1.4. They are close but not interchangeable — resizing one to the other will crop or add white bars.",
        },
      },
      {
        "@type": "Question",
        name: "What A-series sizes should I offer on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The essential international bundle is A5 + A4 + A3. A5 (148×210mm) covers greeting cards, planners, and small prints. A4 (210×297mm) is the most popular for home printing. A3 (297×420mm) serves wall art and framed pieces. All three share the same ratio, so one design scales to all of them.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resize my 5×7 design to A5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not without cropping or distortion. 5×7 has a 1:1.4 ratio while A5 has a 1:1.414 ratio. The difference is small but visible — your design will be slightly cropped or have thin white bars. For best results, create a separate A-series master or use SnapToSize for ratio-aware resizing.",
        },
      },
      {
        "@type": "Question",
        name: "What products sell best in A5 on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A5 planner inserts (daily, weekly, monthly layouts) are the top sellers, followed by greeting cards, wedding stationery (invitations, menus, programs), small wall art prints, and journal or notebook covers. Bundling A5 with A4 and A3 increases perceived value.",
        },
      },
      {
        "@type": "Question",
        name: "How do I include A5 in my Etsy digital download listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Package A5 files in your ZIP alongside US sizes. Use a clear folder structure — e.g., International-Sizes/artwork_A5_300dpi.jpg. Mention \"Includes A5, A4, A3 international sizes\" in your listing title and tags. SnapToSize generates all sizes from one upload, correctly named and organized.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com/app/quick-export?source=seo_a5&kind=guide";

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
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-25%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />

        {/* A5 fold visual — A4 sheet folding into A5 (right side, desktop only) */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* A4 ghost outline — full sheet */}
          <div
            className="relative border border-white/[0.04] rounded-sm"
            style={{ width: "212px", height: "300px" }}
          >
            {/* Fold line — horizontal center dashed line */}
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-purple-400/30"
            />

            {/* "A4" label on the faded top half */}
            <div className="absolute top-[20%] left-0 right-0 flex items-center justify-center">
              <span className="text-[10px] font-mono text-white/[0.12] tracking-[0.25em] uppercase">
                A4
              </span>
            </div>

            {/* A5 highlighted bottom half — solid border */}
            <div
              className="absolute bottom-0 left-0 right-0 border border-purple-500/25 rounded-sm bg-purple-500/[0.03]"
              style={{ height: "150px" }}
            >
              {/* Inner frame */}
              <div className="absolute inset-2.5 border border-white/[0.06] rounded-sm" />

              {/* A5 center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-xs font-mono text-purple-300/40 tracking-[0.2em]">
                    A5
                  </span>
                </div>
              </div>

              {/* Corner marks on A5 */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-purple-400/30" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-purple-400/30" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-purple-400/30" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-purple-400/30" />
            </div>

            {/* Dimension label — width */}
            <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap">
                148 mm &middot; 1748 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — A5 height (right side, aligned to bottom half) */}
            <div className="absolute -right-24 bottom-0 flex flex-col items-center justify-center gap-2 w-20" style={{ height: "150px" }}>
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                210 mm &middot; 2480 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Fold arrow indicator */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5">
              <div className="w-px h-6 bg-purple-400/20" />
              <svg width="10" height="6" viewBox="0 0 10 6" className="text-purple-400/30">
                <path d="M0 0 L5 6 L10 0" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Print Size Reference
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                A5 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Dimensions, pixels &amp; international sizing for cards, planners &amp; small prints
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              1748&times;2480 pixels. 148&times;210&nbsp;mm. The international
              standard for greeting cards, planners, and small prints.
              Here&apos;s everything you need to create A5 digital downloads
              for Etsy.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All A-Series Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download A5 + A4 + A3 at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  1748&times;2480 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  ISO A-series ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Cards, planners &amp; stationery
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
            {/* --- Quick Answer --- */}
            <QuickAnswer question="What pixel dimensions for A5 at 300 DPI?">
              <strong>1748 × 2480 pixels</strong> (148 × 210 mm). A5 is half of A4 — popular for small prints, greeting cards, and international buyers.
            </QuickAnswer>

            {/* --- A5 at a Glance --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A5 at a Glance &mdash; Quick Reference
              </h2>

              <Card className="p-6 md:p-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">148 &times; 210 mm (5.83 &times; 8.27 in)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Pixel Dimensions</span>
                    <span className="font-semibold">1748 &times; 2480 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">1:1.414 (ISO A-series)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Orientation</span>
                    <span className="font-semibold">Portrait</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Part Of</span>
                    <span className="font-semibold">ISO A-Series pack (A5, A4, A3, A2, A1)</span>
                  </div>
                </div>
              </Card>

              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/assets/visuals/etsy-a5-size-comparison.png"
                  alt="A5 print size comparison with 4×6, 5×7, 6×8, and A4"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* --- What Is A5 Paper Size? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is A5 Paper Size?
              </h2>

              <p className="text-foreground-60 mb-4">
                A5 is exactly half of{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4
                </Link>
                . Take an A4 sheet, fold it in half along the long edge, and
                you have A5. It measures 148&times;210&nbsp;mm
                (5.83&times;8.27&nbsp;inches) and is defined by the ISO 216
                standard &mdash; the same system that governs all A-series
                paper sizes worldwide.
              </p>
              <p className="text-foreground-60 mb-4">
                A5 is the default stationery and card size across the UK,
                Europe, Australia, New Zealand, and most of Asia. Greeting
                cards, wedding invitations, planner inserts, and small booklets
                are all built around A5 dimensions. If you sell stationery or
                planners on Etsy, A5 is essential.
              </p>
              <p className="text-foreground-60">
                Because A5 belongs to the ISO A-series family, it shares the
                same 1:1.414 aspect ratio as every other A-size. One master
                design scales perfectly across A5, A4, A3, and A2 without any
                cropping. For a complete overview of all sizes, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- A5 in the ISO A-Series Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A5 in the ISO A-Series Family
              </h2>

              <p className="text-foreground-60 mb-6">
                Every A-series size is exactly double the area of the next
                smaller size. Fold A4 in half and you get A5. Fold{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>{" "}
                in half and you get{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4
                </Link>
                . All share the same{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  1:1.414 ratio
                </Link>{" "}
                &mdash; one master design scales across every size without
                cropping.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        A-Series Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Dimensions (mm)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Common Use
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">A5<span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">Popular</span></td>
                      <td className="py-3 px-4 text-foreground-60">
                        148 &times; 210
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748 &times; 2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Greeting cards, planners, small prints
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        210 &times; 297
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 &times; 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Home printing, standard wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large wall art, framed statement pieces
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A2</td>
                      <td className="py-3 px-4 text-foreground-60">
                        420 &times; 594
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961 &times; 7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Poster-size, gallery prints
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A1</td>
                      <td className="py-3 px-4 text-foreground-60">
                        594 &times; 841
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016 &times; 9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized poster, gallery exhibitions
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">A0</td>
                      <td className="py-3 px-4 text-foreground-60">
                        841 &times; 1189
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        9933 &times; 14043
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Maximum size, available via single export
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                SnapToSize generates all five A-series sizes from one
                upload &mdash; A5 through A1 at 300&nbsp;DPI. No manual canvas
                resizing needed.
              </p>
            </div>

            {/* --- Size Comparison Diagram --- */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-a5-size-comparison.png"
                alt="A5 print size comparison showing how it compares to 4×6, 5×7, 6×8, and A4 at correct proportions"
                width={1200}
                height={500}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* --- A5 vs US Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A5 vs US Sizes &mdash; Key Comparisons
              </h2>

              <p className="text-foreground-60 mb-6">
                A5 is close to two popular US sizes but not interchangeable
                with either. Substituting one for the other will result in
                cropping or white bars. International buyers expect exact ISO
                dimensions.
              </p>

              {/* A5 vs 5×7 */}
              <h3 className="text-lg font-semibold mb-4">
                A5 vs 5&times;7
              </h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        &nbsp;
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A5 (ISO)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        5&times;7 (US)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions</td>
                      <td className="py-3 px-4 text-foreground-60">
                        148 &times; 210 mm (5.83 &times; 8.27 in)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        127 &times; 178 mm (5 &times; 7 in)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pixels @ 300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748 &times; 2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500 &times; 2100
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.414 (ISO)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.4
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Shape</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Wider and taller
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Narrower and shorter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-8">
                A5 is 21&nbsp;mm wider and 32&nbsp;mm taller than{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7
                </Link>
                . The ratios are close (1:1.414 vs 1:1.4) but not identical.
                Cropping a 5&times;7 to A5 proportions will cut into your
                design. Always provide separate files for each size.
              </p>

              {/* A5 vs Half-Letter */}
              <h3 className="text-lg font-semibold mb-4">
                A5 vs US Half-Letter
              </h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        &nbsp;
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A5 (ISO)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Half-Letter (US)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions</td>
                      <td className="py-3 px-4 text-foreground-60">
                        148 &times; 210 mm (5.83 &times; 8.27 in)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        139.7 &times; 215.9 mm (5.5 &times; 8.5 in)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pixels @ 300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748 &times; 2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1650 &times; 2550
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.414 (ISO)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.545
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Shape</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Wider, slightly shorter
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Narrower, slightly taller
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Half-Letter (half of{" "}
                <Link
                  href="/etsy-8-5x11-print-size"
                  className="text-accent-light hover:underline"
                >
                  US Letter / 8.5&times;11
                </Link>
                ) is 8.3&nbsp;mm narrower but 5.9&nbsp;mm taller than A5.
                The ratios are quite different. Do not substitute US
                Half-Letter for A5 &mdash; international buyers expect exact
                ISO dimensions and will notice the difference in planner
                binders and card envelopes.
              </p>
            </div>

            {/* --- When to Offer A5 on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                When to Offer A5 on Etsy
              </h2>

              <p className="text-foreground-60 mb-6">
                A5 is the go-to size for stationery, cards, and small-format
                prints. If you sell in any of these categories, A5 should be in
                every listing. Here are the product types where A5 is
                essential:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Greeting Cards &amp; Wedding Stationery
                  </h3>
                  <p className="text-foreground-60">
                    A5 is the standard card size in the UK and Europe. Wedding
                    invitations, save-the-dates, thank-you cards, menus, and
                    programs are all built around A5. If you sell printable
                    stationery, international buyers will search specifically
                    for A5-compatible files.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Planner Inserts
                  </h3>
                  <p className="text-foreground-60">
                    Filofax A5, Kikki-K Large, and dozens of other popular ring
                    binders use A5 inserts. This is a massive Etsy category
                    &mdash; printable daily, weekly, and monthly planner pages
                    in A5 format have dedicated search traffic and loyal repeat
                    buyers.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Small Wall Art &amp; Desk Prints
                  </h3>
                  <p className="text-foreground-60">
                    A5 is perfect for small framed prints on shelves, desks,
                    and gallery walls. Buyers who want a compact botanical,
                    quote print, or minimalist illustration often prefer A5
                    over the larger A4 or A3 sizes.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Journals &amp; Booklets
                  </h3>
                  <p className="text-foreground-60">
                    Bullet journal inserts, recipe cards, small booklets, and
                    notebook covers all use A5 dimensions. Adding A5 to these
                    listings serves both the UK/EU market and the global
                    planner community.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60">
                Bundling A5 with A4 and A3 increases perceived value and
                conversion. For guidance on how many sizes to include per
                listing, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to offer for Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* --- Pixel Dimensions & Source File Requirements --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Pixel Dimensions &amp; Source File Requirements
              </h2>

              <p className="text-foreground-60 mb-4">
                A5 at 300&nbsp;DPI requires a minimum of
                1748&times;2480&nbsp;pixels. The math: 148&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;1748
                pixels wide. 210&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;2480
                pixels tall.
              </p>
              <p className="text-foreground-60 mb-4">
                300&nbsp;DPI is the print industry standard for close-viewing
                materials like greeting cards, planners, and small framed
                prints. Anything below 300&nbsp;DPI will look soft or pixelated
                when held at reading distance. For a deep dive on resolution,
                see{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>
                .
              </p>
              <p className="text-foreground-60 mb-4">
                For future-proofing, consider creating your source artwork at
                2&times; resolution (3496&times;4960&nbsp;pixels) or larger.
                This gives you headroom to scale up if you add larger sizes
                later. SnapToSize handles the downscale to exact A5 dimensions
                automatically.
              </p>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Do not set your canvas in millimeters:
                    </strong>{" "}
                    Software rounding can produce slightly off pixel values.
                    Always set your canvas to exactly 1748&times;2480 pixels
                    at 300&nbsp;DPI. Verify the pixel dimensions before
                    exporting.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- How SnapToSize Handles A5 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How SnapToSize Handles A5
              </h2>

              <p className="text-foreground-60 mb-4">
                A5 is part of the ISO A-Series pack in SnapToSize. Upload one
                image and get A5 + A4 + A3 + A2 + A1 automatically &mdash;
                all at 300&nbsp;DPI, correctly named
                (artwork_A5_300dpi.jpg), and organized in a ready-to-upload
                ZIP pack.
              </p>
              <p className="text-foreground-60 mb-4">
                No manual canvas resizing. No recalculating pixel dimensions.
                No exporting each size individually. SnapToSize also generates
                all US sizes simultaneously, so one upload can produce up to
                70 files covering every standard print size.
              </p>
              <p className="text-foreground-60">
                For a full walkthrough of the resize process, see{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to resize images for Etsy
                </Link>
                .
              </p>
            </div>

            {/* --- Best-Selling A5 Product Types --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best-Selling A5 Product Types on Etsy
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">A5 Planner Inserts</p>
                    <p className="text-foreground-60 text-sm">
                      Daily, weekly, and monthly layouts for Filofax A5 and
                      similar ring binders. One of the highest-volume printable
                      categories on Etsy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">A5 Greeting Cards</p>
                    <p className="text-foreground-60 text-sm">
                      Birthday, holiday, and thank-you cards. The standard card
                      size for UK and European markets. Often sold as printable
                      bundles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">A5 Wedding Stationery</p>
                    <p className="text-foreground-60 text-sm">
                      Invitations, programs, menus, and vow booklets.
                      Printable wedding suites in A5 target the international
                      wedding market.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">A5 Wall Art Prints</p>
                    <p className="text-foreground-60 text-sm">
                      Small botanicals, quotes, and minimalist illustrations.
                      Perfect for shelves, desks, and compact gallery wall
                      arrangements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">A5 Journal &amp; Notebook Covers</p>
                    <p className="text-foreground-60 text-sm">
                      Custom covers for printable journals and notebooks.
                      Popular in the bullet journal and self-care planning
                      niches.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-foreground-60">
                Bundling A5 with{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>{" "}
                increases perceived value. Buyers see &ldquo;3 international
                sizes included&rdquo; and feel they&apos;re getting more for
                their money &mdash; even though the cost to you is near zero
                when all sizes share the same ratio.
              </p>
            </div>

            {/* --- CTA 1 (purple accent) --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  All A-Series Sizes from One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once, get A5 + A4 + A3 + A2 + A1 &mdash;
                  at 300&nbsp;DPI, correctly named, and ready for Etsy. Plus
                  all US sizes in the same pack. Up to 70 files from one image.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate A-Series Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- File Delivery & Packaging --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Delivery: Packaging A5 in Your Etsy Listing
              </h2>

              <p className="text-foreground-60 mb-4">
                International buyers expect to find their sizes immediately.
                Use a clear folder structure in your ZIP download so buyers
                can locate the A5 file without guessing:
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Recommended ZIP Structure
                </h3>
                <div className="font-mono text-sm text-foreground-60 space-y-1">
                  <p>artwork-name.zip</p>
                  <p className="pl-4">{"\u251C\u2500"} US-Sizes/</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_5x7_300dpi.jpg</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_8x10_300dpi.jpg</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_11x14_300dpi.jpg</p>
                  <p className="pl-8">{"\u2514\u2500"} artwork_16x20_300dpi.jpg</p>
                  <p className="pl-4">{"\u2514\u2500"} International-Sizes/</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_A5_300dpi.jpg</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_A4_300dpi.jpg</p>
                  <p className="pl-8">{"\u2514\u2500"} artwork_A3_300dpi.jpg</p>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                Mention &ldquo;Includes A5, A4, A3 international sizes&rdquo;
                prominently in your listing title and description. International
                buyers specifically search for &ldquo;A5&rdquo;,
                &ldquo;A5 planner&rdquo;, and &ldquo;A5 card&rdquo; on
                Etsy &mdash; these terms in your tags improve visibility.
              </p>
              <p className="text-foreground-60">
                Use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  Etsy print size calculator
                </Link>{" "}
                to plan which sizes to include and verify your files stay under
                Etsy&apos;s 20&nbsp;MB per-file limit.
              </p>
            </div>

            <ContextualCTA
              problem="Offering A5 but missing other ISO sizes your international buyers need?"
              solution="Generate A5, A4, A3, A2, and A1 alongside all US sizes. One upload, complete international coverage."
              appUrl={appUrl}
              buttonText="Add All ISO Sizes"
            />

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="ISO A-Series + All US Sizes in Seconds"
                stat="Up to 70 files from one image — A5 through A1 plus every US size"
                description="Upload your artwork and instantly receive A5, A4, A3, plus all US sizes at 300 DPI. Correctly named, organized, and under 20 MB. Production-ready in seconds."
                buttonText="Start Free — Generate All Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "What is A5 size in pixels at 300 DPI?",
                    answer:
                      "A5 at 300 DPI is exactly 1748×2480 pixels. The calculation: 148mm ÷ 25.4 × 300 = 1748 pixels wide, 210mm ÷ 25.4 × 300 = 2480 pixels tall.",
                  },
                  {
                    question:
                      "Is A5 the same as 5×7?",
                    answer:
                      "No. A5 is 5.83×8.27 inches while 5×7 is 5×7 inches. A5 is both wider and taller. The aspect ratios also differ — A5 is 1:1.414 (ISO) while 5×7 is 1:1.4. They are close but not interchangeable — resizing one to the other will crop or add white bars.",
                  },
                  {
                    question:
                      "What A-series sizes should I offer on Etsy?",
                    answer:
                      "The essential international bundle is A5 + A4 + A3. A5 (148×210mm) covers greeting cards, planners, and small prints. A4 (210×297mm) is the most popular for home printing. A3 (297×420mm) serves wall art and framed pieces. All three share the same ratio, so one design scales to all of them.",
                  },
                  {
                    question:
                      "Can I resize my 5×7 design to A5?",
                    answer:
                      "Not without cropping or distortion. 5×7 has a 1:1.4 ratio while A5 has a 1:1.414 ratio. The difference is small but visible — your design will be slightly cropped or have thin white bars. For best results, create a separate A-series master or use SnapToSize for ratio-aware resizing.",
                  },
                  {
                    question:
                      "What products sell best in A5 on Etsy?",
                    answer:
                      "A5 planner inserts (daily, weekly, monthly layouts) are the top sellers, followed by greeting cards, wedding stationery (invitations, menus, programs), small wall art prints, and journal or notebook covers. Bundling A5 with A4 and A3 increases perceived value.",
                  },
                  {
                    question:
                      "How do I include A5 in my Etsy digital download listing?",
                    answer:
                      "Package A5 files in your ZIP alongside US sizes. Use a clear folder structure — e.g., International-Sizes/artwork_A5_300dpi.jpg. Mention \"Includes A5, A4, A3 international sizes\" in your listing title and tags. SnapToSize generates all sizes from one upload, correctly named and organized.",
                  },
                ]}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-a5-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
