import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, Globe } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "A1 Print Size for Etsy — Pixels, DPI & Poster Guide",
  description:
    "A1 is 7016×9933 pixels at 300 DPI (594×841mm / 23.39×33.11 in). The largest ISO size in the pack — dimensions, A1 vs 24×36 comparison, framing guide, and file setup for Etsy sellers.",
  alternates: { canonical: "https://snaptosize.com/etsy-a1-print-size" },
  openGraph: {
    title:
      "A1 Print Size for Etsy — Large Format Poster Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete A1 print guide for Etsy sellers. 7016x9933 pixels at 300 DPI, A1 vs 24x36, international sizing, and file setup.",
    url: "https://snaptosize.com/etsy-a1-print-size",
    images: [
      {
        url: "/assets/og/etsy-a1-print-size.png",
        width: 1200,
        height: 630,
        alt: "A1 Print Size for Etsy — Large Format Poster Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A1 Print Size for Etsy — Large Format Poster Dimensions at 300 DPI",
    description:
      "Complete A1 print guide for Etsy sellers. 7016x9933 pixels at 300 DPI, A1 vs 24x36, and international market sizing.",
    images: ["/assets/og/etsy-a1-print-size.png"],
  },
};

export default function EtsyA1PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "A1 Print Size for Etsy — Large Format Poster Dimensions at 300 DPI",
    description:
      "Complete technical guide to A1 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, A1 vs 24x36 comparison, international market opportunity, framing guide, ISO scaling chain, and file setup for digital downloads.",
    url: "https://snaptosize.com/etsy-a1-print-size",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
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
        name: "A1 Print Size",
        item: "https://snaptosize.com/etsy-a1-print-size",
      },
    ],
  };

  const faqItems = [
    {
      question: "What is A1 size in inches?",
      answer:
        "A1 is 23.39 x 33.11 inches (594 x 841 mm). It is the largest ISO size in the SnapToSize pack \u2014 slightly smaller than the US 24x36 poster size but with a different aspect ratio (1:1.414 vs 2:3).",
    },
    {
      question: "What is A1 size in pixels at 300 DPI?",
      answer:
        "A1 at 300 DPI is 7016 x 9933 pixels in portrait orientation. This is the minimum resolution for sharp, print-quality A1 output. The calculation: 594mm \u00f7 25.4 \u00d7 300 = 7016 pixels wide, 841mm \u00f7 25.4 \u00d7 300 = 9933 pixels tall.",
    },
    {
      question: "Is A1 the same as 24x36?",
      answer:
        "No. A1 is 23.39 x 33.11 inches (1:1.414 ratio) while 24x36 is exactly 24 x 36 inches (2:3 ratio). They are close in physical size but different proportions \u2014 A1 is 0.61 inches narrower and 2.89 inches shorter. Offer both to cover international and US buyers.",
    },
    {
      question: "Do Etsy buyers actually want A1 prints?",
      answer:
        "Yes. Etsy has dedicated marketplace categories for A1 poster art. A1 is a standard large-format size in the UK, Europe, and Australia, popular for living room statement pieces, office art, and gallery wall centerpieces.",
    },
    {
      question: "Where can buyers find A1 frames?",
      answer:
        "IKEA LOMVIKEN series (market dependent), Amazon (search 'A1 poster frame' or '594x841mm frame'), and custom framing shops. A1 clip frames are widely available and affordable. Include frame sourcing info in your Etsy listing description.",
    },
    {
      question: "Should I offer A1 alongside US sizes?",
      answer:
        "Yes. Including ISO sizes (A5 through A1) alongside US sizes maximizes your international reach. All A-series sizes share the same 1:1.414 ratio, so one design scales across all of them without cropping. SnapToSize generates both ISO and US sizes from one upload.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_a1&kind=guide";

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
        {/* Blueprint grid background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />

        {/* ISO Nested Frames — A5 center, scaling out to A1 outermost */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* A1 outer frame — 594:841 ratio, the largest */}
          <div
            className="relative border-2 border-white/[0.08] rounded-sm"
            style={{ width: "300px", height: "424px" }}
          >
            {/* Corner crosshair marks — A1 outer */}
            <div className="absolute -top-3.5 -left-3.5 w-7 h-7">
              <div className="absolute top-0 left-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute top-0 left-0 w-px h-7 bg-purple-400/30" />
            </div>
            <div className="absolute -top-3.5 -right-3.5 w-7 h-7">
              <div className="absolute top-0 right-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute top-0 right-0 w-px h-7 bg-purple-400/30" />
            </div>
            <div className="absolute -bottom-3.5 -left-3.5 w-7 h-7">
              <div className="absolute bottom-0 left-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute bottom-0 left-0 w-px h-7 bg-purple-400/30" />
            </div>
            <div className="absolute -bottom-3.5 -right-3.5 w-7 h-7">
              <div className="absolute bottom-0 right-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute bottom-0 right-0 w-px h-7 bg-purple-400/30" />
            </div>

            {/* Dimension callout — width (top, dashed) */}
            <div className="absolute -top-10 left-0 right-0 flex items-center justify-center gap-1.5">
              <div className="h-px flex-1 border-t border-dashed border-purple-300/20" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider whitespace-nowrap px-1">
                594 mm
              </span>
              <div className="h-px flex-1 border-t border-dashed border-purple-300/20" />
            </div>

            {/* Dimension callout — height (right, dashed) */}
            <div className="absolute -right-[7rem] top-0 bottom-0 flex flex-col items-center justify-center gap-1.5 w-20">
              <div className="w-px flex-1 border-l border-dashed border-purple-300/20" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider whitespace-nowrap -rotate-90 px-1">
                841 mm &middot; 9933 px
              </span>
              <div className="w-px flex-1 border-l border-dashed border-purple-300/20" />
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
              {[...Array(14)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4">
              {[...Array(18)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* "A1" watermark label */}
            <div className="absolute top-3 left-3">
              <span className="text-[9px] font-mono text-purple-300/30 tracking-[0.2em]">
                A1
              </span>
            </div>

            {/* A2 nested frame */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 border border-white/[0.07] rounded-sm"
              style={{ width: "212px", height: "300px" }}
            >
              <div className="absolute top-2 left-2">
                <span className="text-[8px] font-mono text-purple-300/25 tracking-[0.2em]">
                  A2
                </span>
              </div>

              {/* A3 nested frame */}
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 border border-white/[0.06] rounded-sm"
                style={{ width: "150px", height: "212px" }}
              >
                <div className="absolute top-1.5 left-1.5">
                  <span className="text-[7px] font-mono text-purple-300/20 tracking-[0.2em]">
                    A3
                  </span>
                </div>

                {/* A4 nested frame */}
                <div
                  className="absolute bottom-2.5 left-1/2 -translate-x-1/2 border border-white/[0.05] rounded-sm"
                  style={{ width: "106px", height: "150px" }}
                >
                  <div className="absolute top-1 left-1">
                    <span className="text-[6px] font-mono text-white/[0.12] tracking-[0.2em]">
                      A4
                    </span>
                  </div>

                  {/* A5 innermost frame */}
                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 border border-white/[0.04] rounded-sm"
                    style={{ width: "75px", height: "106px" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[6px] font-mono text-white/[0.10] tracking-[0.2em]">
                        A5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central "LARGEST ISO" badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="text-center">
                <span className="block text-3xl font-mono font-bold text-white/[0.06] tracking-[0.3em]">
                  A1
                </span>
                <span className="block text-[8px] font-mono text-purple-300/20 tracking-[0.25em] mt-1">
                  LARGEST ISO
                </span>
              </div>
            </div>

            {/* Scaling indicator — left side */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
              <span className="text-[8px] font-mono text-purple-300/50 tracking-wider font-semibold">A1</span>
              <div className="w-px h-4 bg-purple-400/15" />
              <span className="text-[7px] font-mono text-purple-300/30 tracking-wider">A2</span>
              <div className="w-px h-4 bg-purple-400/15" />
              <span className="text-[7px] font-mono text-purple-300/25 tracking-wider">A3</span>
              <div className="w-px h-4 bg-purple-400/15" />
              <span className="text-[7px] font-mono text-purple-300/20 tracking-wider">A4</span>
              <div className="w-px h-4 bg-purple-400/15" />
              <span className="text-[7px] font-mono text-purple-300/15 tracking-wider">A5</span>
            </div>
          </div>

          {/* PRINT SIZE REFERENCE label below frame */}
          <div className="mt-4 text-center">
            <span className="text-[9px] font-mono text-purple-300/30 tracking-[0.3em]">
              ISO SCALING CHAIN
            </span>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Largest ISO Format in Pack
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                A1 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Large format poster dimensions at 300&nbsp;DPI
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              7016&times;9933 pixels. 594&times;841&nbsp;mm. The largest ISO
              A-series size in the pack &mdash; a true statement piece for
              international buyers looking for oversized wall art.
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
                  Up to 70 Print-Ready Files
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  All 5 Ratio Packs
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Portrait, Landscape &amp; Square
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== QUICK ANSWER ===== */}
      <section className="py-8 md:py-10">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <QuickAnswer question="What pixel dimensions for A1 at 300 DPI?">
              <strong>7016 x 9933 pixels</strong> (594 x 841 mm / 23.39 x 33.11 inches). A1 is the largest ISO A-series size in the pack &mdash; twice{" "}
              <Link
                href="/etsy-a2-print-size"
                className="text-accent-light hover:underline"
              >
                A2
              </Link>
              , four times A3. Part of the ISO A-Series pack.
            </QuickAnswer>
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-a1-size-comparison.png"
                alt="A1 print size comparison with A3, A2, 20×30, and 24×36"
                width={1200}
                height={500}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">

            {/* --- What Is A1 Print Size --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is A1 Print Size?
              </h2>

              <p className="text-foreground-60 mb-4">
                A1 measures 594&times;841&nbsp;mm (23.39&times;33.11&nbsp;inches).
                It&apos;s the largest ISO format in the SnapToSize pack &mdash;
                exactly double{" "}
                <Link
                  href="/etsy-a2-print-size"
                  className="text-accent-light hover:underline"
                >
                  A2
                </Link>
                {" "}in area, four times{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>
                , and a true statement piece for living rooms, offices, and
                gallery exhibitions.
              </p>
              <p className="text-foreground-60 mb-4">
                Like every A-series size, A1 uses the 1:1.414 aspect ratio
                (the square root of 2). Fold an A1 in half and you get an A2.
                Fold that A2 in half and you get an{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>
                . Your artwork composition scales perfectly across the entire
                series without cropping &mdash; learn more about how this works
                in the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                For Etsy sellers, A1 anchors the top of the ISO size range.
                It&apos;s the poster-sized format that international buyers
                search for when they want oversized wall art &mdash; the
                equivalent of a{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36
                </Link>
                {" "}in the US market. For a full overview of every Etsy size,
                see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- A1 Pixel Dimensions at 300 DPI --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A1 Pixel Dimensions at 300&nbsp;DPI
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">594 &times; 841 mm (23.39 &times; 33.11 in)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">7016 &times; 9933 px</span>
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
                multiply by 300. Width: 594&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;7016
                pixels. Height: 841&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;9933
                pixels.
              </p>

              <h3 className="text-lg font-semibold mb-4">
                A1 at Different DPI Settings
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
                        1684 &times; 2384
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Screen preview only &mdash; not for print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4967
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Acceptable for posters viewed from 3+ feet
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016 &times; 9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Print standard &mdash; use this for Etsy
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Always create your A1 files at 300&nbsp;DPI. Deliver as JPG
                (also called JPEG) &mdash; this is the professional print
                standard and what buyers expect from Etsy digital downloads.
                Your source image must be at least 7016&times;9933
                pixels &mdash; anything smaller will produce a blurry print
                at A1 size. For more on why resolution matters,
                see{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>
                . You can also{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  calculate any size
                </Link>
                {" "}with our print size calculator.
              </p>
            </div>

            {/* --- Why Offer A1 on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Offer A1 on Etsy?
              </h2>

              <p className="text-foreground-60 mb-6">
                A1 is the largest ISO size in the pack and the format that
                attracts premium, international orders. Here&apos;s why it
                belongs in your listings:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        A1 is the oversized poster format in metric countries
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        In the UK, EU, Australia, and New Zealand, A1 is the
                        go-to size for large statement posters. It fills the same
                        role as{" "}
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                        {" "}does in the US &mdash; but with different dimensions
                        and the ISO 1:1.414 aspect ratio.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Premium positioning = higher revenue per sale
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        A1 is an investment piece. Buyers who want A1 are
                        decorating living rooms, offices, and galleries &mdash;
                        not looking for a small desk print. This means higher
                        price points and buyers with larger budgets, especially
                        for{" "}
                        <Link
                          href="/etsy-gallery-wall-print-sizes"
                          className="text-accent-light hover:underline"
                        >
                          gallery wall sets
                        </Link>
                        {" "}where A1 serves as the centerpiece.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Active demand on Etsy
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Etsy has dedicated marketplace categories for A1 poster
                        art, and buyers actively search for &ldquo;A1
                        poster&rdquo; and &ldquo;A1 print.&rdquo; Including A1
                        in your listing eliminates &ldquo;do you have
                        A1?&rdquo; messages and captures sales you would
                        otherwise miss. For guidance on how many sizes to
                        include, see{" "}
                        <Link
                          href="/how-many-sizes-etsy-printable"
                          className="text-accent-light hover:underline"
                        >
                          how many sizes to offer for Etsy printables
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                The cost of adding A1 is essentially zero. Since all A-series
                sizes share the same ratio, one master design produces{" "}
                <Link
                  href="/etsy-a5-print-size"
                  className="text-accent-light hover:underline"
                >
                  A5
                </Link>
                ,{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4
                </Link>
                ,{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>
                ,{" "}
                <Link
                  href="/etsy-a2-print-size"
                  className="text-accent-light hover:underline"
                >
                  A2
                </Link>
                , and A1 with simple scaling. You&apos;re reaching millions of
                international buyers with minutes of extra work per listing.
              </p>
            </div>

            {/* --- A1 vs 24x36 — Size Comparison --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A1 vs 24&times;36 &mdash; Size Comparison
              </h2>

              <p className="text-foreground-60 mb-6">
                A1 is the closest ISO equivalent to the US{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36
                </Link>
                {" "}poster size, but they are not interchangeable. Here&apos;s
                how they compare:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        &nbsp;
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A1 (ISO)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        24&times;36 (US)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions (in)</td>
                      <td className="py-3 px-4 text-foreground-60">
                        23.39 &times; 33.11
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        24 &times; 36
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions (mm)</td>
                      <td className="py-3 px-4 text-foreground-60">
                        594 &times; 841
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        610 &times; 914
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pixels @ 300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016 &times; 9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 &times; 10800
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.414 (ISO)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2:3
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Primary Market</td>
                      <td className="py-3 px-4 text-foreground-60">
                        UK, EU, Australia, NZ
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US, Canada
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                A1 is 0.61 inches narrower and 2.89 inches shorter than
                24&times;36. More importantly, they have different aspect
                ratios &mdash; you cannot resize one to the other without
                cropping or adding white space. An A1 design printed at
                24&times;36 proportions will look noticeably different.
              </p>
              <p className="text-foreground-60">
                For Etsy sellers, the practical answer is to offer both.
                International buyers search for &ldquo;A1 poster&rdquo; while
                US buyers search for &ldquo;24&times;36 poster.&rdquo;
                Including both in your listing covers both markets &mdash; each
                ratio family needs its own version, and SnapToSize generates
                them all from a single upload.
              </p>
            </div>

            {/* --- How to Frame A1 Prints --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Frame A1 Prints
              </h2>

              <p className="text-foreground-60 mb-4">
                A1 frames are less common at retail stores than A3 or A4 frames.
                Including framing guidance in your Etsy listing reduces buyer
                confusion and support requests. Here is what your A1 buyers
                need to know:
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Exact frame size</span>
                    <span className="font-semibold">594 &times; 841 mm (23.39 &times; 33.11 in)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">IKEA option</span>
                    <span className="font-semibold">LOMVIKEN A1 frame (market dependent)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Clip frames</span>
                    <span className="font-semibold">Widely available &amp; affordable for A1</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Online search</span>
                    <span className="font-semibold">Amazon &ldquo;A1 poster frame&rdquo; or &ldquo;594&times;841mm frame&rdquo;</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Mat options</span>
                    <span className="font-semibold">Uncommon &mdash; most A1 prints displayed unmatted</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                In Europe, the UK, and Australia, A1 frames are available at
                most frame shops and online retailers. In the US, A1 frames are
                harder to find at big-box stores but readily available on Amazon
                and through custom framing services. Clip frames are the most
                affordable and widely available option for A1.
              </p>
              <p className="text-foreground-60">
                Copy this into your listing: &ldquo;This A1 file prints at
                594&times;841&nbsp;mm (23.39&times;33.11 inches). A1 frames are
                available at IKEA (LOMVIKEN, market dependent), Amazon (search
                &lsquo;A1 poster frame&rsquo; or &lsquo;594&times;841mm
                frame&rsquo;), and most European frame shops. Clip frames are
                an affordable alternative for A1 posters.&rdquo;
              </p>
            </div>

            {/* --- A1 in the ISO A-Series — The Complete Scaling Chain --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A1 in the ISO A-Series &mdash; The Complete Scaling Chain
              </h2>

              <p className="text-foreground-60 mb-6">
                Every A-series size is exactly half the next size up. A1 is the
                anchor &mdash; the largest size in the pack. One design scales
                across the entire family without cropping because they all share
                the 1:1.414 ratio:
              </p>

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
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Relation to A1
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">A1<span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">This Page</span></td>
                      <td className="py-3 px-4 text-foreground-60">
                        594 &times; 841
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016 &times; 9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Full size (1&times;)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a2-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A2
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        420 &times; 594
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961 &times; 7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Half A1 (2&times; smaller)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a3-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A3
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Quarter A1 (4&times; smaller)
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
                        Eighth A1 (8&times; smaller)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a5-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A5
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        148 &times; 210
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748 &times; 2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Sixteenth A1 (16&times; smaller)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                All five sizes share the same 1:1.414 aspect ratio. Design at
                A1 resolution (7016&times;9933 pixels) and scale down to A2,
                A3, A4, and A5 without any cropping or distortion. This is the
                most efficient way to reach international buyers alongside
                your US sizes.
              </p>
              <p className="text-foreground-60">
                A1 is the ceiling of the pack &mdash; the biggest format your
                buyers can print. Sellers who include A1 in their listings
                signal professionalism and attract buyers looking for premium,
                oversized wall art.
              </p>
            </div>

            {/* --- How to Create A1 Files for Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create A1 Files for Etsy
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    1. Design at 7016&times;9933 Pixels or Larger
                  </h3>
                  <p className="text-foreground-60">
                    A1 requires a source file of at least 7016&times;9933 pixels
                    at 300&nbsp;DPI. Since A1 is the largest ISO size in the
                    pack, designing at this resolution means every smaller
                    A-series size (A2, A3, A4, A5) will scale down perfectly.
                    Going the other direction &mdash; upscaling an A2 or A3
                    file to A1 &mdash; will make the image look soft or
                    pixelated.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    2. Export as JPG at 300&nbsp;DPI
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
                    . Even at A1 resolution, a well-optimized JPG stays
                    manageable. PDF is an alternative for text-heavy printables.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    3. Generate All Sizes from One Upload
                  </h3>
                  <p className="text-foreground-60">
                    Manually creating A5, A4, A3, A2, and A1 versions &mdash;
                    plus US sizes like 24&times;36, 18&times;24, and
                    8&times;10 &mdash; takes hours per artwork. The alternative
                    is a tool that handles all sizing automatically from one
                    high-resolution source file. For a walkthrough, see{" "}
                    <Link
                      href="/how-to-resize-images-for-etsy"
                      className="text-accent-light hover:underline"
                    >
                      how to resize images for Etsy
                    </Link>
                    .
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
                    SnapToSize generates A1 alongside A2, A3, A4, A5, and all
                    US sizes from one upload &mdash; at 300&nbsp;DPI,
                    professionally named, organized in ZIP packs, and under
                    Etsy&apos;s 20&nbsp;MB limit.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Go Big for International Buyers"
                stat="ISO A-Series + all US sizes — up to 70 files from one image"
                description="Upload your artwork and download A5 through A1 plus all US sizes at 300 DPI. Organized ZIP packs, correctly named, and under 20 MB. Production-ready in seconds."
                buttonText="Start Free — Generate All Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-a1-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
