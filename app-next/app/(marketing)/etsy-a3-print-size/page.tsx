import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Globe } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "A3 Print Size for Etsy — Pixels, DPI & Seller Guide",
  description:
    "A3 is 3508×4961 pixels at 300 DPI (297×420mm). Exact dimensions, A3 vs Tabloid comparison, international market guide, and file setup for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-a3-print-size" },
  openGraph: {
    title:
      "A3 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete A3 print guide for Etsy sellers. 3508×4961 pixels at 300 DPI, A3 vs Tabloid, international sizing, and file setup.",
    url: "https://snaptosize.com/etsy-a3-print-size",
    images: [
      {
        url: "/assets/og/etsy-a3-print-size.png",
        width: 1200,
        height: 630,
        alt: "A3 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A3 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete A3 print guide for Etsy sellers. 3508×4961 pixels at 300 DPI, A3 vs Tabloid, and international market sizing.",
    images: ["/assets/og/etsy-a3-print-size.png"],
  },
};

export default function EtsyA3PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A3 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to A3 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, A3 vs Tabloid comparison, international market opportunity, and file setup for digital downloads.",
    url: "https://snaptosize.com/etsy-a3-print-size",
    datePublished: "2026-03-25",
    dateModified: "2026-03-25",
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
        name: "A3 Print Size",
        item: "https://snaptosize.com/etsy-a3-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is A3 size in inches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A3 is 11.69 × 16.54 inches (297 × 420 mm). It is often rounded to 11.7 × 16.5 inches in informal references, but use the exact measurements for print files.",
        },
      },
      {
        "@type": "Question",
        name: "How many pixels is A3 at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A3 at 300 DPI is 3508 × 4961 pixels in portrait orientation. This is the standard resolution for print-quality Etsy digital downloads.",
        },
      },
      {
        "@type": "Question",
        name: "Is A3 the same as 11×17?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A3 (11.69 × 16.54 inches) and Tabloid/11×17 (11 × 17 inches) are close but not identical. A3 is slightly wider and shorter, and they have different aspect ratios — ISO 1:1.414 vs approximately 1:1.545. You cannot resize one to the other without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Is A3 bigger than A4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A3 is exactly double A4 in area. A3 measures 297 × 420 mm while A4 measures 210 × 297 mm. Folding an A3 sheet in half gives you two A4 sheets with the same proportions.",
        },
      },
      {
        "@type": "Question",
        name: "What is A3 good for on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A3 is ideal for wall art posters, botanical prints, nursery art, and gallery wall pieces. It is the standard poster size in UK, EU, and Australian markets — the most popular framed print size in international Etsy shops.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to offer A3 for Etsy digital downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you sell wall art or posters, yes. A3 is the most popular poster size in international markets. Missing it means losing UK, EU, and Australian buyers who specifically search for A3 prints on Etsy.",
        },
      },
      {
        "@type": "Question",
        name: "What frame size do I need for A3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An A3 frame fits 297 × 420 mm prints. IKEA, Amazon, and most frame shops in the UK, EU, and Australia stock A3 frames. In the US, the closest standard frame is 12 × 18 inches with matting adjustment, or IKEA's 40 × 50 cm frame with a mat.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resize A4 to A3 without losing quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upscaling A4 to A3 doubles the area and will cause visible quality loss — the image will look soft or pixelated. Always create your original artwork at A3 resolution (3508 × 4961 pixels) or larger, then scale down for smaller sizes like A4 and A5.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_a3&kind=guide";

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
          className="absolute top-[-15%] right-[-8%] w-[650px] h-[650px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-25%] left-[-8%] w-[550px] h-[550px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />

        {/* A3 Frame blueprint — right side (297:420 ≈ 0.707 ratio, visually larger than A4) */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — A3 proportions: wider and taller than A4 blueprint */}
          <div
            className="relative border-2 border-white/[0.06] rounded-sm"
            style={{ width: "240px", height: "340px" }}
          >
            {/* Inner frame with double-line accent */}
            <div className="absolute inset-3 border border-purple-500/15 rounded-sm" />
            <div className="absolute inset-5 border border-purple-400/10 rounded-sm" />

            {/* Corner crosshair marks — larger than A4's corner marks */}
            <div className="absolute -top-3 -left-3 w-6 h-6">
              <div className="absolute top-0 left-0 w-6 h-px bg-purple-400/25" />
              <div className="absolute top-0 left-0 w-px h-6 bg-purple-400/25" />
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6">
              <div className="absolute top-0 right-0 w-6 h-px bg-purple-400/25" />
              <div className="absolute top-0 right-0 w-px h-6 bg-purple-400/25" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6">
              <div className="absolute bottom-0 left-0 w-6 h-px bg-purple-400/25" />
              <div className="absolute bottom-0 left-0 w-px h-6 bg-purple-400/25" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6">
              <div className="absolute bottom-0 right-0 w-6 h-px bg-purple-400/25" />
              <div className="absolute bottom-0 right-0 w-px h-6 bg-purple-400/25" />
            </div>

            {/* Dimension callout — width (top, dashed) */}
            <div className="absolute -top-10 left-0 right-0 flex items-center justify-center gap-1.5">
              <div className="h-px flex-1 border-t border-dashed border-purple-300/20" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider whitespace-nowrap px-1">
                297 mm
              </span>
              <div className="h-px flex-1 border-t border-dashed border-purple-300/20" />
            </div>

            {/* Dimension callout — height (right, dashed) */}
            <div className="absolute -right-[6.5rem] top-0 bottom-0 flex flex-col items-center justify-center gap-1.5 w-20">
              <div className="w-px flex-1 border-l border-dashed border-purple-300/20" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider whitespace-nowrap -rotate-90 px-1">
                420 mm &middot; 4961 px
              </span>
              <div className="w-px flex-1 border-l border-dashed border-purple-300/20" />
            </div>

            {/* Central "A3" label — large and prominent */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-3xl font-mono font-bold text-white/[0.08] tracking-[0.3em]">
                  A3
                </span>
                <span className="block text-[9px] font-mono text-purple-300/25 tracking-[0.25em] mt-1">
                  ISO 216
                </span>
              </div>
            </div>

            {/* Fold line — horizontal center line showing A4 fold point */}
            <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 border-t border-dashed border-white/[0.04]" />
            <div className="absolute right-5 top-1/2 translate-y-1">
              <span className="text-[8px] font-mono text-white/[0.12] tracking-wider">
                A4 fold
              </span>
            </div>

            {/* Tick marks — top edge (wider spacing than A4) */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
              {[...Array(10)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4">
              {[...Array(14)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* Small A4 outline in bottom-right for size comparison */}
            <div
              className="absolute bottom-4 right-4 border border-white/[0.06] rounded-sm"
              style={{ width: "70px", height: "99px" }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[7px] font-mono text-white/[0.10]">
                A4
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
                International Print Standard
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                A3 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                The poster size that unlocks UK, EU &amp; Australian buyers
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              3508&times;4961 pixels. 297&times;420&nbsp;mm. The #1 poster
              size in international markets. Here&apos;s everything you need to
              create A3 digital downloads that sell globally.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All A-Series Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download A5 + A4 + A3 + A2 + A1 at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  3508&times;4961 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Double A4 in area
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  297&times;420 mm poster format
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
            {/* --- What Is A3 Print Size --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is A3 Print Size?
              </h2>

              <p className="text-foreground-60 mb-4">
                A3 measures 297&times;420&nbsp;mm (11.69&times;16.54&nbsp;inches).
                It&apos;s the international poster size &mdash; exactly double
                A4 in area and the go-to wall art format in the UK, Europe,
                Australia, and New Zealand.
              </p>
              <p className="text-foreground-60 mb-4">
                A3 is part of the ISO 216 standard, which defines all A-series
                paper sizes. The defining feature of this system is the
                aspect ratio: every A-size shares the same 1:1.414 proportions.
                Fold an A2 in half and you get an A3. Fold A3 in half and you
                get an{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4
                </Link>
                . Your artwork composition scales perfectly across the entire
                series without cropping.
              </p>
              <p className="text-foreground-60">
                For Etsy sellers, A3 is the sweet spot between everyday A4
                prints and statement-piece A2 posters. It&apos;s big enough
                for framed wall art but small enough that buyers can print it
                at local shops without specialty pricing. For a full overview
                of every Etsy size, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- A3 Pixel Dimensions at 300 DPI --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A3 Pixel Dimensions at 300&nbsp;DPI
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">297 &times; 420 mm (11.69 &times; 16.54 in)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">3508 &times; 4961 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Orientation</span>
                    <span className="font-semibold">Portrait (taller than wide)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">ISO A-series (1:1.414)</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math: convert millimeters to inches (divide by 25.4), then
                multiply by 300. Width: 297&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3508
                pixels. Height: 420&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;4961
                pixels.
              </p>

              <h3 className="text-lg font-semibold mb-4">
                A3 at Different DPI Settings
              </h3>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Resolution
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels (Portrait)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">72 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        842 &times; 1191
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Screen preview only &mdash; not for print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1754 &times; 2481
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Draft proofing, viewing distance over 2 feet
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Print standard &mdash; use this for Etsy
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Always create your A3 files at 300&nbsp;DPI. This is the
                professional print standard and what buyers expect from Etsy
                digital downloads. For more on why 300&nbsp;DPI matters, see{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* --- A3 vs Tabloid (11×17) --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A3 vs 11&times;17 (Tabloid) &mdash; The US Equivalent
              </h2>

              <p className="text-foreground-60 mb-6">
                If you&apos;re in the US, the closest paper size to A3 is
                Tabloid (also called Ledger or ANSI&nbsp;B) at <Link href="/etsy-11x17-print-size" className="text-accent-light hover:underline">11&times;17</Link>
                {" "}inches. They look similar, but they are not interchangeable.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        &nbsp;
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A3 (ISO)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Tabloid / 11&times;17 (ANSI)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions</td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420 mm (11.69 &times; 16.54 in)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        279 &times; 432 mm (11 &times; 17 in)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pixels @ 300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 &times; 5100
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.414 (ISO A-series)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.545
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Width</td>
                      <td className="py-3 px-4 text-foreground-60">
                        0.69 inches wider
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        0.69 inches narrower
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Height</td>
                      <td className="py-3 px-4 text-foreground-60">
                        0.46 inches shorter
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        0.46 inches taller
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Used In</td>
                      <td className="py-3 px-4 text-foreground-60">
                        UK, EU, Australia, NZ, Asia
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US, Canada
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                The key takeaway: you cannot simply resize an A3 file to
                Tabloid (or vice versa) without cropping or adding white bars.
                The aspect ratios are fundamentally different. An A3 design
                will look slightly squished or require trimming when printed
                on 11&times;17 paper.
              </p>
              <p className="text-foreground-60">
                For Etsy sellers, the practical solution is to offer both.
                International buyers search for &ldquo;A3&rdquo; while US
                buyers search for &ldquo;11&times;17&rdquo;. Including both in
                your listing covers the entire English-speaking market. For
                the{" "}
                <Link
                  href="/etsy-8-5x11-print-size"
                  className="text-accent-light hover:underline"
                >
                  US Letter equivalent of A4
                </Link>
                , the same principle applies.
              </p>
            </div>

            {/* --- A3 vs A4 vs A2 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A3 vs A4 vs A2 &mdash; Size Comparison
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Dimensions (mm)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Dimensions (in)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a4-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A4
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        210 &times; 297
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8.27 &times; 11.69
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 &times; 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Home printing, everyday wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">A3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11.69 &times; 16.54
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Framed wall art, gallery walls
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">A2</td>
                      <td className="py-3 px-4 text-foreground-60">
                        420 &times; 594
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        16.54 &times; 23.39
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961 &times; 7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement pieces, large posters
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                Each step in the A-series doubles the area. A3 is exactly
                twice A4 and exactly half A2. All three share the same
                1:1.414 aspect ratio, so your design composition stays
                identical at every size &mdash; no cropping, no re-composing.
              </p>
              <p className="text-foreground-60 mb-4">
                A3 sits in the sweet spot: it&apos;s large enough to make a
                visual impact on a wall, but small enough that affordable
                frames are widely available. A2 is reserved for statement
                pieces and gallery walls where the buyer is ready to invest
                in custom framing.
              </p>
              <p className="text-foreground-60">
                For an understanding of how these ratios differ from US print
                sizes, see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- Why A3 Matters for Etsy Sellers --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why A3 Matters for Etsy Sellers
              </h2>

              <p className="text-foreground-60 mb-6">
                Most US-based Etsy sellers only offer inch-based sizes. That
                means they are invisible to millions of international buyers
                who search in ISO paper sizes. A3 is where that gap hurts
                the most.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        A3 is the #1 poster size in metric countries
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        In the UK, EU, Australia, and New Zealand, A3 is what
                        buyers search for when they want framed wall art. It
                        fills the same niche as 11&times;14 or 12&times;18 in
                        the US &mdash; but with completely different
                        dimensions.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        A3 frames are everywhere internationally
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        IKEA, Amazon UK, Myer (Australia), and every high
                        street frame shop stock A3 frames. Buyers can order a
                        frame the same day they download your file. This
                        frictionless experience drives repeat purchases and
                        5-star reviews.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Etsy UK has dedicated A3 search categories
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Buyers on Etsy UK specifically search for &ldquo;A3
                        print&rdquo;, &ldquo;A3 poster&rdquo;, and &ldquo;A3
                        wall art&rdquo;. If your listing tags only mention US
                        sizes, you will not appear in these searches. Adding
                        &ldquo;A3&rdquo; to your title and tags is a zero-cost
                        SEO win.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                The cost of adding A3 is essentially zero. Since all A-series
                sizes share the same ratio, one master design produces A5, A4,
                A3, A2, and A1 with simple scaling. You&apos;re doubling your
                addressable market with minutes of extra work per listing
                &mdash; or seconds, if you automate it.
              </p>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  A3 Is Included in Every ISO Pack
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  SnapToSize generates A5, A4, A3, A2, and A1 automatically
                  from one upload &mdash; at 300&nbsp;DPI, correctly named,
                  and packaged in organized ZIPs. Up to 70 files from a
                  single image.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate A3 + All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Which Countries Search for A3 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Which Countries Search for A3 Prints?
              </h2>

              <p className="text-foreground-60 mb-6">
                Every country except the US and Canada uses ISO A-series paper
                as the standard. But some markets are especially active on
                Etsy for A3 poster purchases:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Primary A3 Markets
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">United Kingdom</strong> &mdash; largest Etsy market after US</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">Australia</strong> &mdash; strong wall art culture</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">Germany</strong> &mdash; Europe&apos;s biggest market</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">New Zealand</strong> &mdash; same frame sizes as AU</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Secondary A3 Markets
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">France</strong> &mdash; active Etsy buyer base</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">Netherlands</strong> &mdash; design-conscious market</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">Japan</strong> &mdash; ISO A-series standard</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground-60 text-sm">
                      <Check className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      <span><strong className="text-foreground">South Korea</strong> &mdash; growing digital art demand</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <p className="text-foreground-60">
                Etsy&apos;s global marketplace means both size systems matter.
                Offering ISO sizes (A5, A4, A3) alongside US sizes
                (5&times;7, 8&times;10,{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>
                , 16&times;20) in a single listing maximizes your market
                reach. For guidance on bundling sizes, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to offer for Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* --- How to Create A3 Files --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create A3 Files for Etsy
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    1. Set Your Canvas to 3508&times;4961 Pixels
                  </h3>
                  <p className="text-foreground-60">
                    Create a new document at exactly 3508&times;4961 pixels
                    with 300&nbsp;DPI resolution. Do not set dimensions in
                    millimeters and let the software calculate pixels
                    &mdash; rounding differences between design tools can
                    produce slightly off dimensions. Use exact pixel values.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    2. Design at A3 First, Then Scale Down
                  </h3>
                  <p className="text-foreground-60">
                    Always start with your largest size. Creating at A3
                    resolution means you can scale down to A4 and <Link href="/etsy-a5-print-size" className="text-accent-light hover:underline">A5</Link> without
                    any quality loss. Going the other direction &mdash;
                    upscaling an A4 file to A3 &mdash; doubles the area and
                    will make the image look soft or pixelated.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    3. Export as JPG / JPEG at 300&nbsp;DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) maintains full print quality while
                    keeping files well under{" "}
                    <Link
                      href="/etsy-20mb-file-limit"
                      className="text-accent-light hover:underline"
                    >
                      Etsy&apos;s 20&nbsp;MB upload limit
                    </Link>
                    . PDF is an alternative for text-heavy printables like
                    planners. For detailed format guidance, see{" "}
                    <Link
                      href="/what-files-to-include-etsy-digital-download"
                      className="text-accent-light hover:underline"
                    >
                      what files to include in Etsy digital downloads
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    4. Add Bleed for Professional Printing (Optional)
                  </h3>
                  <p className="text-foreground-60">
                    If your buyers will take A3 files to professional print
                    shops, a 3&nbsp;mm bleed on each side ensures nothing gets
                    cut off at the edges. With bleed, your A3 canvas becomes
                    303&times;426&nbsp;mm (3579&times;5032 pixels). For most
                    Etsy digital downloads, bleed is optional &mdash; mention
                    &ldquo;print at actual size&rdquo; in your listing instead.
                  </p>
                </div>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Skip the manual work:
                    </strong>{" "}
                    SnapToSize generates A3, A4, A5, and all US sizes
                    automatically from one upload &mdash; at 300&nbsp;DPI,
                    professionally named, ready for Etsy. See{" "}
                    <Link
                      href="/how-to-resize-images-for-etsy"
                      className="text-accent-light hover:underline"
                    >
                      how to resize images for Etsy
                    </Link>{" "}
                    for a complete walkthrough.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Packaging A3 with Other Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Packaging A3 with Other Sizes in Your Listing
              </h2>

              <p className="text-foreground-60 mb-4">
                International buyers want to find their sizes immediately.
                The most effective approach is a ZIP file with clear folder
                structure that separates US and international sizes:
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
                With JPG / JPEG files, the full bundle stays well under
                Etsy&apos;s 20&nbsp;MB per-file limit. Mention
                &ldquo;Includes A3, A4, and A5 international sizes&rdquo;
                prominently in your listing title and description &mdash;
                international buyers specifically search for these terms.
              </p>
              <p className="text-foreground-60">
                For a deeper look at how many sizes to include and how to
                organize them, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to offer for Etsy printables
                </Link>{" "}
                and the{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy 20&nbsp;MB file limit guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Manually Resizing for Each Market
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once, get every ISO size (A5 through A1) and every
                  US size (5&times;7 through 20&times;30) as organized,
                  Etsy-ready ZIP packs. Up to 70 print-ready files from one
                  image.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Now
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Common A3 Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common A3 Mistakes Etsy Sellers Make
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Creating at 72 DPI instead of 300 DPI
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        At 72&nbsp;DPI, an A3 file is only 842&times;1191
                        pixels &mdash; a fraction of the 3508&times;4961
                        pixels needed for print quality. The result is a
                        blurry, pixelated poster. Always verify your export
                        is 3508&times;4961 pixels before uploading.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Confusing A3 with 11&times;17 (Tabloid)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        A3 is 11.69&times;16.54 inches. Tabloid is
                        11&times;17 inches. They have different aspect ratios
                        and are not interchangeable. Labeling an 11&times;17
                        file as &ldquo;A3&rdquo; means your international
                        buyer&apos;s print will have incorrect proportions
                        or get cropped by their printer.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Upscaling A4 to A3
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        A3 has double the area of A4. Upscaling a
                        2480&times;3508 pixel A4 file to 3508&times;4961
                        pixels will cause visible quality loss. The image
                        will look soft, especially in detailed areas like text
                        and fine lines. Always create your original at A3
                        resolution or larger, then scale down.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Not offering A3 at all
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        If your listings only include US sizes, you are
                        invisible to international buyers searching for
                        &ldquo;A3 print&rdquo; or &ldquo;A3 poster&rdquo; on
                        Etsy. Adding A3 to your tags, title, and file bundle
                        is a zero-cost way to reach the UK, EU, and
                        Australian markets.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Forgetting that A3 ratio does not match US ratios
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        The ISO A-series ratio (1:1.414) is unique. It does
                        not match 4:5, 2:3, or 3:4 &mdash; the common US
                        frame ratios. You cannot crop a 2:3 file to A3
                        proportions without losing artwork. Each ratio family
                        needs its own version. See{" "}
                        <Link
                          href="/etsy-print-ratios"
                          className="text-accent-light hover:underline"
                        >
                          Etsy print ratios explained
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- A3 Framing Guide --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A3 Framing Guide for Your Listing Description
              </h2>

              <p className="text-foreground-60 mb-4">
                Including framing guidance in your Etsy listing reduces buyer
                confusion and support requests. Here is what your A3 buyers
                need to know:
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Exact frame size</span>
                    <span className="font-semibold">297 &times; 420 mm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">IKEA frame option</span>
                    <span className="font-semibold">40 &times; 50 cm frame with mat</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">US closest frame</span>
                    <span className="font-semibold">12 &times; 18 in (with mat adjustment)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Availability</span>
                    <span className="font-semibold">IKEA, Amazon UK, Myer (AU), frame shops</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                Copy this into your listing description: &ldquo;This A3 file
                prints at 297&times;420&nbsp;mm (11.69&times;16.54 inches).
                Standard A3 frames are available at IKEA, Amazon, and most
                frame shops. In the US, use a 12&times;18 frame with matting
                or IKEA&apos;s 40&times;50&nbsp;cm frame.&rdquo;
              </p>
              <p className="text-foreground-60">
                Providing this detail positions you as a professional seller
                and reduces &ldquo;what frame do I need?&rdquo; messages.
              </p>
            </div>

            {/* --- The Complete ISO A-Series Pack --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Complete ISO A-Series for Etsy
              </h2>

              <p className="text-foreground-60 mb-6">
                A3 is most effective when offered as part of the full ISO
                lineup. Here is each size and its role in your Etsy shop:
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
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        148 &times; 210
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748 &times; 2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small prints, greeting cards, planners
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a4-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A4
                        </Link>
                      </td>
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
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">A3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Framed wall art, gallery walls, poster prints
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
                        Large posters, statement pieces
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">A1</td>
                      <td className="py-3 px-4 text-foreground-60">
                        594 &times; 841
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016 &times; 9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized prints, gallery exhibitions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                All five sizes share the same 1:1.414 aspect ratio. One
                master design scales to every size without cropping. This is
                the most efficient ratio family to add alongside your US
                sizes.
              </p>
              <p className="text-foreground-60">
                For a tool that calculates exact pixel dimensions for any
                print size and DPI, see the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  Etsy print size calculator
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 3 (FinalCTA) --- */}
            <div>
              <FinalCTA
                heading="Go Global with One Upload"
                stat="ISO A-Series + all US sizes — up to 70 files from one image"
                description="Upload your artwork and instantly receive A5, A4, A3, A2, A1, plus all US sizes at 300 DPI. Correctly named, organized in ZIP packs, and under 20 MB. Production-ready in seconds."
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
                      "What is A3 size in inches?",
                    answer:
                      "A3 is 11.69 × 16.54 inches (297 × 420 mm). It is often rounded to 11.7 × 16.5 inches in informal references, but use the exact measurements when creating print files for Etsy.",
                  },
                  {
                    question:
                      "How many pixels is A3 at 300 DPI?",
                    answer:
                      "A3 at 300 DPI is 3508 × 4961 pixels in portrait orientation. This is the standard resolution for print-quality Etsy digital downloads. The calculation: 297mm ÷ 25.4 × 300 = 3508 pixels wide, 420mm ÷ 25.4 × 300 = 4961 pixels tall.",
                  },
                  {
                    question:
                      "Is A3 the same as 11×17?",
                    answer:
                      "No. A3 (11.69 × 16.54 inches) and Tabloid/11×17 (11 × 17 inches) are close but not identical. A3 is slightly wider and shorter, with a different aspect ratio — ISO 1:1.414 vs approximately 1:1.545. You cannot resize one to the other without cropping or adding white space.",
                  },
                  {
                    question:
                      "Is A3 bigger than A4?",
                    answer:
                      "Yes. A3 is exactly double A4 in area. A3 measures 297 × 420 mm while A4 measures 210 × 297 mm. Folding an A3 sheet in half gives you two A4 sheets with the same proportions.",
                  },
                  {
                    question:
                      "What is A3 good for on Etsy?",
                    answer:
                      "A3 is ideal for wall art posters, botanical prints, nursery art, and gallery wall pieces. It is the standard poster size in UK, EU, and Australian markets — the most popular framed print size in international Etsy shops.",
                  },
                  {
                    question:
                      "Do I need to offer A3 for Etsy digital downloads?",
                    answer:
                      "If you sell wall art or posters, yes. A3 is the most popular poster size in international markets. Missing it means losing UK, EU, and Australian buyers who specifically search for A3 on Etsy.",
                  },
                  {
                    question:
                      "What frame size do I need for A3?",
                    answer:
                      "An A3 frame fits 297 × 420 mm prints. IKEA, Amazon, and most frame shops in the UK, EU, and Australia stock A3 frames. In the US, the closest standard frame is 12 × 18 inches with matting, or IKEA's 40 × 50 cm frame with a mat.",
                  },
                  {
                    question:
                      "Can I resize A4 to A3 without losing quality?",
                    answer:
                      "Upscaling A4 to A3 doubles the area and will cause visible quality loss — the image will look soft or pixelated. Always create your original artwork at A3 resolution (3508 × 4961 pixels) or larger, then scale down for smaller sizes like A4 and A5.",
                  },
                ]}
              />
            </div>

            <ContextualCTA
              problem="Offering A3 but missing other ISO sizes your international buyers need?"
              solution="Generate A5, A4, A3, A2, and A1 alongside all US sizes. One upload, complete international coverage."
              appUrl={appUrl}
              buttonText="Add All ISO Sizes"
            />

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-a3-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
