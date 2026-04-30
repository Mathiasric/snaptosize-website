import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, Frame } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Canvas Print Sizes for Etsy — 8×10 to 30×40: Best Sellers (2026)",
  description:
    "The 8 canvas print sizes Etsy buyers actually purchase: 8×10 through 30×40 at 300 DPI. Inches, cm, pixels, aspect ratios, and how to prepare a canvas-ready master.",
  alternates: {
    canonical: "https://snaptosize.com/canvas-print-sizes-for-etsy",
  },
  openGraph: {
    title: "Canvas Print Sizes for Etsy — Best Sellers + Pixel Chart | SnapToSize",
    description:
      "8 canvas print sizes for Etsy POD: 8×10 to 30×40 at 300 DPI. Inches, cm, pixels, ratios, bleed, and how to prepare one master that prints on canvas and paper.",
    url: "https://snaptosize.com/canvas-print-sizes-for-etsy",
    images: [
      {
        url: "/assets/og/canvas-print-sizes-for-etsy.png",
        width: 1200,
        height: 630,
        alt: "Canvas Print Sizes for Etsy — 8×10 to 30×40 at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas Print Sizes for Etsy — 8×10 to 30×40 at 300 DPI",
    description:
      "8 canvas print sizes for Etsy POD: inches, cm, pixels, aspect ratios, and how to prepare a canvas-ready master from one upload.",
    images: ["/assets/og/canvas-print-sizes-for-etsy.png"],
  },
};

export default function CanvasPrintSizesForEtsyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Canvas Print Sizes for Etsy — Complete Size, Ratio, and File Prep Guide",
    description:
      "The 8 standard canvas print sizes Etsy buyers request — 8×10 through 30×40 — with pixel dimensions at 300 DPI, aspect ratios, bleed/wrap guidance, and how to prepare one master file that prints cleanly on canvas and paper.",
    url: "https://snaptosize.com/canvas-print-sizes-for-etsy",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
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
        name: "Canvas Print Sizes for Etsy",
        item: "https://snaptosize.com/canvas-print-sizes-for-etsy",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What canvas size sells best on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "16×20 and 12×18 are the volume leaders for mid-priced canvas POD on Etsy — they hit a comfortable price point and fit common wall spaces. 24×36 wins on average order value because the larger footprint commands a higher price. Most successful sellers list at least 8×10, 12×12, 16×20, and 24×36 to cover the demand curve.",
        },
      },
      {
        "@type": "Question",
        name: "Do canvas prints need bleed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Canvas prints are stretched around a wooden frame, which wraps 0.75″–1.5″ of your image around the edges. Add at least 1″ of bleed on every side of your master file so nothing important sits in the wrap zone. Most POD providers spec exact bleed on their templates — always confirm before exporting.",
        },
      },
      {
        "@type": "Question",
        name: "What DPI should canvas prints be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aim for 300 DPI at the final canvas size. For very large canvases (24×36 and above) 240 DPI is acceptable for most POD canvas printers because viewing distance compensates for slightly lower resolution. Below 200 DPI, edges and gradients start to look soft — the print will sell once and refund.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the same file for paper and canvas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — if the aspect ratio matches and you’ve added enough bleed for the canvas wrap. A 16×20 master with 1″ bleed prints cleanly as a paper poster (the bleed is trimmed) and as a wrapped canvas (the bleed becomes the wrap). Mismatched ratios force a crop, so plan ratios up front.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is canvas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Canvas isn’t a single ratio. The most common canvas ratios on Etsy are 4:5 (8×10, 16×20), 2:3 (20×30, 24×36), 3:4 (18×24, 30×40), and 1:1 (12×12, square gallery). Panoramic canvases at 1:2 or wider are a niche category for landscapes and abstracts.",
        },
      },
      {
        "@type": "Question",
        name: "RGB or CMYK for canvas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use RGB (sRGB color profile). Canvas POD printers ingest RGB and convert internally to their own ink profile — a CMYK file you converted yourself usually prints duller because the conversion is happening twice. For a deeper walkthrough see the CMYK vs RGB for Etsy printables guide.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?utm_source=marketing&utm_medium=organic&utm_campaign=canvas-print-sizes";

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
            "linear-gradient(150deg, #0f0d1a 0%, #141228 30%, #0f0c1c 55%, #131020 80%, #0c0a16 100%)",
        }}
      >
        {/* Fine grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Teal glow — top left */}
        <div
          className="absolute top-[-8%] left-[-5%] w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #2dd4bf, transparent 70%)",
          }}
        />
        {/* Purple glow — bottom right */}
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent 70%)",
          }}
        />

        {/* CSS-only Canvas Frame Mosaic — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-[55%] hidden lg:block">
          <div className="relative" style={{ width: "340px", height: "340px" }}>
            {/* 24×36 (2:3 portrait, large) */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "110px",
                height: "165px",
                top: "0",
                left: "0",
                background: "rgba(45,212,191,0.03)",
                border: "2px solid rgba(45,212,191,0.28)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.35), inset 0 0 0 4px rgba(45,212,191,0.03)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Frame
                  className="w-5 h-5 mb-1"
                  style={{ color: "rgba(45,212,191,0.4)" }}
                />
                <span
                  className="text-[9px] font-mono tracking-wider"
                  style={{ color: "rgba(45,212,191,0.45)" }}
                >
                  24&times;36
                </span>
                <span
                  className="text-[8px] font-mono mt-0.5"
                  style={{ color: "rgba(45,212,191,0.25)" }}
                >
                  7200&times;10800px
                </span>
              </div>
            </div>

            {/* 16×20 (4:5) */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "120px",
                height: "150px",
                top: "8px",
                left: "130px",
                background: "rgba(167,139,250,0.03)",
                border: "2px solid rgba(167,139,250,0.28)",
                boxShadow:
                  "0 4px 18px rgba(0,0,0,0.3), inset 0 0 0 4px rgba(167,139,250,0.03)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <span
                  className="text-[9px] font-mono tracking-wider"
                  style={{ color: "rgba(167,139,250,0.45)" }}
                >
                  16&times;20
                </span>
                <span
                  className="text-[8px] font-mono mt-0.5"
                  style={{ color: "rgba(167,139,250,0.25)" }}
                >
                  4800&times;6000px
                </span>
              </div>
            </div>

            {/* 12×12 (1:1) */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "96px",
                height: "96px",
                top: "188px",
                left: "20px",
                background: "rgba(45,212,191,0.025)",
                border: "2px solid rgba(45,212,191,0.22)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.28)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <span
                  className="text-[9px] font-mono tracking-wider"
                  style={{ color: "rgba(45,212,191,0.4)" }}
                >
                  12&times;12
                </span>
                <span
                  className="text-[8px] font-mono mt-0.5"
                  style={{ color: "rgba(45,212,191,0.22)" }}
                >
                  3600&times;3600px
                </span>
              </div>
            </div>

            {/* 20×30 (2:3 landscape feature) */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "150px",
                height: "100px",
                top: "188px",
                left: "140px",
                background: "rgba(167,139,250,0.025)",
                border: "2px solid rgba(167,139,250,0.22)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <span
                  className="text-[9px] font-mono tracking-wider"
                  style={{ color: "rgba(167,139,250,0.4)" }}
                >
                  20&times;30
                </span>
                <span
                  className="text-[7px] font-mono mt-0.5"
                  style={{ color: "rgba(167,139,250,0.22)" }}
                >
                  6000&times;9000px
                </span>
              </div>
            </div>

            {/* 8×10 accent */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "44px",
                height: "55px",
                top: "298px",
                left: "260px",
                background: "rgba(45,212,191,0.015)",
                border: "1.5px solid rgba(45,212,191,0.16)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-[8px] font-mono"
                  style={{ color: "rgba(45,212,191,0.3)" }}
                >
                  8&times;10
                </span>
              </div>
            </div>

            {/* Ratio label */}
            <div
              className="absolute text-[9px] font-mono tracking-widest uppercase"
              style={{
                bottom: "-26px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(45,212,191,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              4:5 &middot; 2:3 &middot; 3:4 &middot; 1:1
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <Container>
          <div className="relative z-10 max-w-[640px]">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="h-px w-8"
                style={{ background: "rgba(45,212,191,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(45,212,191,0.7)" }}
              >
                Canvas POD &mdash; size + ratio guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-1"
                style={{ color: "#f0eefa" }}
              >
                Canvas Print Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(240,238,250,0.55)" }}
              >
                The 8 sizes buyers actually purchase &mdash; in inches, cm, and pixels
              </span>
            </h1>

            <p
              className="text-sm md:text-base mb-8 max-w-lg"
              style={{ color: "rgba(240,238,250,0.5)" }}
            >
              Canvas is a different beast from paper: it wraps around a frame,
              demands bleed, and crosses four aspect ratios in a single shop.
              This guide covers the 8 canvas sizes Etsy buyers request most,
              the ratios behind them, and how to prepare one master that
              works across all of them. Pairs with the broader{" "}
              <Link
                href="/etsy-print-sizes"
                className="hover:underline"
                style={{ color: "rgba(45,212,191,0.7)" }}
              >
                Etsy print sizes guide
              </Link>
              .
            </p>

            {/* Mobile size preview */}
            <div className="flex flex-wrap gap-2 mb-6 lg:hidden">
              {["8×10", "12×12", "16×20", "18×24", "20×30", "24×36", "30×40"].map(
                (s) => (
                  <div
                    key={s}
                    className="px-2 py-1 rounded text-[11px] font-mono"
                    style={{
                      border: "1px solid rgba(45,212,191,0.2)",
                      color: "rgba(45,212,191,0.7)",
                      background: "rgba(45,212,191,0.05)",
                    }}
                  >
                    {s}
                  </div>
                ),
              )}
            </div>

            <div className="mb-8">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Canvas Sizes Free
                </Button>
              </a>
              <p
                className="text-sm mt-1.5"
                style={{ color: "rgba(240,238,250,0.3)" }}
              >
                Free &rarr; one master, all canvas sizes at 300&nbsp;DPI.
              </p>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span
                  className="text-[11px] sm:text-xs font-medium"
                  style={{ color: "rgba(240,238,250,0.6)" }}
                >
                  4:5, 2:3, 3:4, 1:1 covered
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span
                  className="text-[11px] sm:text-xs font-medium"
                  style={{ color: "rgba(240,238,250,0.6)" }}
                >
                  300 DPI pixel chart
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span
                  className="text-[11px] sm:text-xs font-medium"
                  style={{ color: "rgba(240,238,250,0.6)" }}
                >
                  Canvas + paper from one master
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">
            <div className="mx-auto space-y-16">

              <QuickAnswer question="What are the most popular canvas sizes on Etsy?">
                <strong>16&times;20, 12&times;18, and 24&times;36</strong> dominate
                Etsy canvas POD: 16&times;20 hits the affordable mid-range, 12&times;18
                rounds out apartment-scale walls, and 24&times;36 drives average
                order value. List all 8 standard sizes (8&times;10 through
                30&times;40) to cover every buyer.
              </QuickAnswer>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground-60 -mt-8">
                <span className="inline-flex items-center gap-2"><span className="text-[#2DD4BF]">✓</span> 8 canvas sizes covered</span>
                <span className="inline-flex items-center gap-2"><span className="text-[#2DD4BF]">✓</span> 300 DPI, ratio-correct</span>
                <span className="inline-flex items-center gap-2"><span className="text-[#2DD4BF]">✓</span> POD-ready (Printful, Printify, Gelato)</span>
              </div>

              <ListingOutputShowcase
                artwork="wildflower"
                heading="One canvas master. Every Etsy size, ratio-matched."
                subtext="Upload your artwork once. SnapToSize generates 8×10, 12×12, 16×20, 18×24, 20×30, 24×36, and 30×40 at 300 DPI — each cropped to the right ratio, ready for canvas POD or digital download."
              />

              {/* --- H2 #1 — Buyer demand snapshot --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  The most-requested canvas sizes on Etsy (buyer demand snapshot)
                </h2>
                <p className="text-foreground-60 mb-4">
                  Canvas demand on Etsy isn&apos;t spread evenly. The volume
                  sits in three buckets: small accent canvases (8&times;10,
                  11&times;14) for desks and shelves, mid-priced wall canvases
                  (12&times;18, 16&times;20, 18&times;24) for living rooms and
                  bedrooms, and oversized statement canvases (24&times;36,
                  30&times;40) that drive higher average order value.
                </p>
                <p className="text-foreground-60 mb-4">
                  16&times;20 is the workhorse. It fits the price range most
                  buyers expect for a quality canvas, and it&apos;s the size
                  most often referenced in Etsy seller communities as the
                  &ldquo;safe default&rdquo; to list first. 12&times;18 is the
                  apartment-scale companion &mdash; smaller wall, smaller price,
                  same buyer.
                </p>
                <p className="text-foreground-60 mb-4">
                  At the top of the curve, 24&times;36 is the AOV winner. It
                  sells less often than 16&times;20, but each sale is worth
                  more, and buyers searching specifically for &ldquo;large
                  canvas wall art&rdquo; are mid-funnel &mdash; they know they
                  want oversized and they&apos;re comparing on style, not price.
                </p>
                <p className="text-foreground-60">
                  The square 12&times;12 deserves its own mention: it pairs
                  with the rest of your shop if you also offer{" "}
                  <Link
                    href="/etsy-square-print-sizes"
                    className="text-accent-light hover:underline"
                  >
                    square print sizes
                  </Link>
                  , and it&apos;s a popular accent canvas for gallery walls
                  built around a rectangular hero piece.
                </p>
              </div>

              {/* --- H2 #2 — Size table --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Standard canvas print sizes &mdash; inches, cm, and pixels at 300 DPI
                </h2>
                <p className="text-foreground-60 mb-6">
                  Eight sizes cover the full Etsy canvas demand curve. Pixel
                  dimensions are calculated at 300 DPI &mdash; the resolution
                  every reputable canvas POD provider expects. For sizes
                  24&times;36 and above, 240 DPI is acceptable because viewing
                  distance on large canvases compensates. Want to verify any
                  other size? See the{" "}
                  <Link
                    href="/print-sizes-at-300-dpi"
                    className="text-accent-light hover:underline"
                  >
                    full 300 DPI pixel chart
                  </Link>
                  .
                </p>

                <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr
                        className="border-b border-white/[0.08]"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <th className="text-left px-4 py-3 font-semibold text-foreground">
                          Size (inches)
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-foreground">
                          Size (cm)
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-foreground">
                          Pixels @ 300 DPI
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-foreground">
                          Aspect ratio
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-foreground">
                          Best use
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.05]">
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-mono text-foreground">8&times;10</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">20&times;25</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">2400&times;3000</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">4:5</td>
                        <td className="px-4 py-3 text-foreground-60">Small accent / desk</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-mono text-foreground">11&times;14</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">28&times;36</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">3300&times;4200</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">~4:5</td>
                        <td className="px-4 py-3 text-foreground-60">Bedside / nook</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]" style={{ background: "rgba(45,212,191,0.03)" }}>
                        <td className="px-4 py-3 font-mono text-foreground">
                          12&times;12{" "}
                          <span
                            className="ml-1 text-[10px] font-sans px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(45,212,191,0.12)", color: "#2dd4bf" }}
                          >
                            Square
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-foreground-60">30&times;30</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">3600&times;3600</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">1:1</td>
                        <td className="px-4 py-3 text-foreground-60">Square gallery</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]" style={{ background: "rgba(45,212,191,0.03)" }}>
                        <td className="px-4 py-3 font-mono text-foreground">
                          16&times;20{" "}
                          <span
                            className="ml-1 text-[10px] font-sans px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(45,212,191,0.12)", color: "#2dd4bf" }}
                          >
                            Most Popular
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-foreground-60">40&times;50</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">4800&times;6000</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">4:5</td>
                        <td className="px-4 py-3 text-foreground-60">Living-room hero</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-mono text-foreground">18&times;24</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">45&times;60</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">5400&times;7200</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">3:4</td>
                        <td className="px-4 py-3 text-foreground-60">Portrait statement</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-mono text-foreground">20&times;30</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">50&times;75</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">6000&times;9000</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">2:3</td>
                        <td className="px-4 py-3 text-foreground-60">Landscape feature</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]" style={{ background: "rgba(45,212,191,0.03)" }}>
                        <td className="px-4 py-3 font-mono text-foreground">
                          24&times;36{" "}
                          <span
                            className="ml-1 text-[10px] font-sans px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(45,212,191,0.12)", color: "#2dd4bf" }}
                          >
                            AOV winner
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-foreground-60">60&times;90</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">7200&times;10800</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">2:3</td>
                        <td className="px-4 py-3 text-foreground-60">Oversized statement</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-mono text-foreground">30&times;40</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">75&times;100</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">9000&times;12000</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">3:4</td>
                        <td className="px-4 py-3 text-foreground-60">Gallery wall anchor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-foreground-60 text-sm mt-4">
                  Centimetre values are rounded to the nearest standard
                  international canvas size used by EU and UK POD providers.
                  For ratio-only references see the{" "}
                  <Link
                    href="/2-3-vs-4-5-ratio"
                    className="text-accent-light hover:underline"
                  >
                    2:3 vs 4:5 ratio comparison
                  </Link>
                  .
                </p>
              </div>

              {/* --- H2 #3 — Ratios --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Canvas aspect ratios Etsy buyers expect (square, portrait, landscape, panoramic)
                </h2>
                <p className="text-foreground-60 mb-4">
                  Canvas crosses four ratios. A buyer who wants a 24&times;36
                  living-room feature is shopping a 2:3 ratio; a buyer who
                  wants 16&times;20 above the sofa is shopping 4:5. The same
                  artwork in both formats requires different crops &mdash; you
                  cannot stretch or squash without ruining the composition.
                </p>
                <ul className="text-foreground-60 mb-4 space-y-2 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">4:5</strong> &mdash;
                    8&times;10, 16&times;20. The dominant Etsy canvas ratio.
                    Tighter than 2:3, fits standard living-room walls.
                  </li>
                  <li>
                    <strong className="text-foreground">2:3</strong> &mdash;
                    20&times;30, 24&times;36. Classic landscape/portrait poster
                    ratio &mdash; same as a 35mm photo. Strong for photography
                    and modern abstract canvases.
                  </li>
                  <li>
                    <strong className="text-foreground">3:4</strong> &mdash;
                    18&times;24, 30&times;40. Slightly taller than 4:5, common
                    in fine-art reproductions and oversized statement pieces.
                  </li>
                  <li>
                    <strong className="text-foreground">1:1 (square)</strong>{" "}
                    &mdash; 12&times;12. Ideal for gallery walls, typography,
                    and Instagram-influenced compositions.
                  </li>
                  <li>
                    <strong className="text-foreground">Panoramic 1:2 or wider</strong>{" "}
                    &mdash; niche. Sells in landscape photography and abstract
                    triptychs but isn&apos;t a default size to list first.
                  </li>
                </ul>
                <p className="text-foreground-60">
                  If a single composition has to work across multiple ratios,
                  design with a safe centre zone &mdash; nothing critical in
                  the outer 15% of the canvas. That way the same artwork can
                  produce a 4:5 16&times;20 and a 2:3 24&times;36 without
                  losing a focal element to the crop.
                </p>
              </div>

              {/* --- CTA 1: Mid-content card after ratios H2 (per brief cta_placements) --- */}
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  One upload. Every canvas ratio &mdash; cropped automatically.
                </h3>
                <p className="text-foreground-60 mb-4 text-sm md:text-base">
                  SnapToSize takes one master and outputs 4:5, 2:3, 3:4, and
                  1:1 versions at every standard canvas size &mdash; each at
                  300 DPI, each ratio-correct, no manual cropping.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Canvas Ratios Free
                  </Button>
                </a>
              </Card>

              {/* --- H2 #4 — Master file prep --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  How to prepare a canvas master file (DPI, bleed wrap, color mode)
                </h2>
                <p className="text-foreground-60 mb-4">
                  A canvas master is built differently from a paper poster
                  because the canvas wraps around a wooden stretcher bar. That
                  wrap takes 0.75&Prime;&ndash;1.5&Prime; of your image, depending
                  on the provider&apos;s frame depth. Anything in the wrap
                  zone disappears around the side of the canvas.
                </p>
                <p className="text-foreground-60 mb-4">
                  Three rules cover almost every canvas POD scenario:
                </p>
                <ul className="text-foreground-60 mb-4 space-y-2 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">300 DPI at final canvas size.</strong>{" "}
                    Build to the exact pixel dimensions in the table above.
                    For 24&times;36 and larger, 240 DPI is acceptable but
                    don&apos;t go below 200 DPI.
                  </li>
                  <li>
                    <strong className="text-foreground">1&Prime; bleed minimum on every side.</strong>{" "}
                    Add at least an inch of safe wrap area outside your visible
                    composition. The full guide to{" "}
                    <Link
                      href="/etsy-printable-bleed-and-crop-marks"
                      className="text-accent-light hover:underline"
                    >
                      bleed and crop marks for Etsy
                    </Link>{" "}
                    walks through the math.
                  </li>
                  <li>
                    <strong className="text-foreground">RGB sRGB color mode.</strong>{" "}
                    Canvas POD ingests RGB and converts to its own ink profile.
                    Don&apos;t pre-convert to CMYK &mdash; see{" "}
                    <Link
                      href="/cmyk-vs-rgb-for-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      CMYK vs RGB for Etsy printables
                    </Link>{" "}
                    for the reasoning.
                  </li>
                </ul>
                <p className="text-foreground-60">
                  Save your master as a high-quality JPG (or PNG if you have
                  transparency in the source). Most canvas POD providers cap
                  uploads at 50&ndash;100 MB per file, so a 300 DPI 30&times;40
                  master at 9000&times;12000 should be exported with sensible
                  JPG compression.
                </p>
              </div>

              {/* --- H2 #5 — Canvas vs paper --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Canvas vs paper print: what changes in your file
                </h2>
                <p className="text-foreground-60 mb-4">
                  The same artwork can sell as both a canvas POD listing and a
                  paper digital download &mdash; if you build the master for
                  canvas first. Paper is the easier format: it doesn&apos;t
                  wrap, doesn&apos;t need bleed, and trims to size. Canvas is
                  the constrained format that drives the master file design.
                </p>
                <p className="text-foreground-60 mb-4">
                  Build for canvas, deliver for both. A 16&times;20 canvas
                  master with 1&Prime; bleed is a 5400&times;6600 file at 300
                  DPI &mdash; the trimmed paper version at 16&times;20 is just
                  the inner 4800&times;6000 region. Same artwork, two
                  deliverables, one master.
                </p>
                <p className="text-foreground-60">
                  The differences buyers care about are downstream: paper sells
                  as instant-download digital art, canvas sells as a
                  print-on-demand product that ships physically. Both can live
                  in the same Etsy shop. For sellers weighing the two business
                  models, see{" "}
                  <Link
                    href="/etsy-print-on-demand-vs-digital-download"
                    className="text-accent-light hover:underline"
                  >
                    Etsy print on demand vs digital download
                  </Link>
                  .
                </p>
              </div>

              {/* --- H2 #6 — POD providers --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  POD canvas providers Etsy sellers use (Printful, Printify, Gelato &mdash; neutral overview)
                </h2>
                <p className="text-foreground-60 mb-4">
                  Three POD providers cover the majority of Etsy canvas
                  fulfilment. The differences worth knowing are size range,
                  frame depth, and turnaround &mdash; not branding.
                </p>
                <div className="space-y-4 mb-6">
                  <div
                    className="rounded-lg border border-white/[0.07] p-4"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <h3 className="font-semibold text-foreground mb-1">Printful</h3>
                    <p className="text-foreground-60 text-sm">
                      Wide canvas size range from 8&times;8 up to 36&times;48.
                      Standard 1.25&Prime; wrap depth. Strong North America +
                      EU fulfilment. File spec is 300 DPI RGB with 1&Prime;
                      bleed.
                    </p>
                  </div>
                  <div
                    className="rounded-lg border border-white/[0.07] p-4"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <h3 className="font-semibold text-foreground mb-1">Printify</h3>
                    <p className="text-foreground-60 text-sm">
                      Marketplace of canvas suppliers &mdash; sizes and bleed
                      vary by supplier. Always download the specific
                      supplier&apos;s template before exporting. Useful for
                      hitting price points Printful can&apos;t.
                    </p>
                  </div>
                  <div
                    className="rounded-lg border border-white/[0.07] p-4"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <h3 className="font-semibold text-foreground mb-1">Gelato</h3>
                    <p className="text-foreground-60 text-sm">
                      Localised production in 30+ countries &mdash; faster EU
                      and Australia delivery than US-only providers. Canvas
                      sizes lean toward metric (50&times;70 cm, 70&times;100 cm)
                      alongside imperial.
                    </p>
                  </div>
                </div>
                <p className="text-foreground-60">
                  Whichever provider you use, the master file is the same: 300
                  DPI, RGB, 1&Prime; bleed, ratio-correct. Switching providers
                  later then becomes a re-upload, not a redesign.
                </p>
              </div>

              {/* --- H2 #7 — Common mistakes --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Common canvas-print mistakes that ruin a sale
                </h2>
                <p className="text-foreground-60 mb-4">
                  Canvas refunds are expensive &mdash; the canvas was physically
                  produced, shipped, and now needs replacing. The mistakes
                  below are responsible for the majority of avoidable canvas
                  refunds:
                </p>
                <ul className="text-foreground-60 mb-4 space-y-2 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">Critical content in the wrap zone.</strong>{" "}
                    A buyer&apos;s name, a logo, or the corner of a face
                    disappears around the stretcher bar. Fix: 1&Prime; minimum
                    bleed and a clear safe zone.
                  </li>
                  <li>
                    <strong className="text-foreground">Wrong ratio uploaded.</strong>{" "}
                    A 4:5 master used for a 2:3 canvas POD listing crops 17%
                    off the long edge. Fix: ratio-match every size before
                    publishing.
                  </li>
                  <li>
                    <strong className="text-foreground">Low DPI on large canvases.</strong>{" "}
                    A 24&times;36 file built at 1500&times;2250 (under 100
                    DPI) prints visibly soft. Fix: build to the pixel
                    dimensions in the size table.
                  </li>
                  <li>
                    <strong className="text-foreground">Pre-converted CMYK files.</strong>{" "}
                    Canvas POD profiles re-convert and the print loses
                    saturation. Fix: keep masters in sRGB.
                  </li>
                  <li>
                    <strong className="text-foreground">Mismatched mockups.</strong>{" "}
                    Listing mockup shows a 24&times;36 above a sofa but the
                    file delivered is 16&times;20. Fix: render the actual
                    listed size in the mockup.
                  </li>
                </ul>
                <p className="text-foreground-60">
                  Most of these collapse into one root cause &mdash; manually
                  resizing canvas masters across 4 ratios and 8 sizes is a
                  high-error workflow.
                </p>
              </div>

              {/* --- H2 #8 — SnapToSize positioning --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  How SnapToSize prepares canvas-ready masters from one upload
                </h2>
                <p className="text-foreground-60 mb-4">
                  Canvas POD on Etsy is a one-master-many-sizes problem. A
                  shop with 8 canvas sizes across 4 ratios needs 8 ratio-correct
                  files per artwork &mdash; before you even add paper digital
                  download versions. Doing that by hand in Photoshop or Canva
                  is where most sellers stall.
                </p>
                <p className="text-foreground-60 mb-4">
                  SnapToSize is built for this exact workflow. Upload your
                  highest-resolution master once and the app generates every
                  ratio &mdash; 4:5, 2:3, 3:4, 1:1 &mdash; at every standard
                  size. Each file is 300 DPI, sRGB, ratio-cropped at the
                  centre, and named cleanly (e.g.{" "}
                  <code className="text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">
                    artwork_24x36_300dpi.jpg
                  </code>
                  ). Free accounts get watermarked outputs; Pro accounts
                  remove the watermark and unlock unlimited resize jobs.
                </p>
                <p className="text-foreground-60 mb-4">
                  The output isn&apos;t canvas-only. The same upload also
                  produces paper-print versions of every size, so a single
                  artwork covers your canvas POD listings and your digital
                  download listings from one workflow. &ldquo;Perfect for Etsy
                  canvas sellers&rdquo; isn&apos;t marketing copy &mdash;
                  it&apos;s the literal use case the app was built around.
                </p>
                <p className="text-foreground-60">
                  Curious how it compares to designing canvas masters in Canva?
                  See{" "}
                  <Link
                    href="/snaptosize-vs-canva"
                    className="text-accent-light hover:underline"
                  >
                    SnapToSize vs Canva
                  </Link>{" "}
                  for the side-by-side. Or jump into the app and try it free
                  on your next listing.
                </p>
              </div>

              {/* --- CTA 2: FinalCTA before FAQ (after Snap-angle H2 per brief) --- */}
              <FinalCTA
                heading="One canvas master &rarr; every Etsy size at 300 DPI"
                stat="8 canvas sizes &middot; 4 ratios &middot; one upload"
                description="Stop manually resizing for 24×36, 16×20, 12×12, and the rest. Upload once and SnapToSize delivers every canvas size at 300 DPI in seconds — ratio-cropped, sRGB, ready to upload to your POD provider or Etsy listing."
                buttonText="Generate Canvas Masters Free"
                appUrl={appUrl}
              />

              {/* --- H2 #9 — FAQ --- */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Canvas print sizes for Etsy &mdash; FAQ
                </h2>
                <FAQAccordion
                  items={[
                    {
                      question: "What canvas size sells best on Etsy?",
                      answer:
                        "16×20 and 12×18 are the volume leaders for mid-priced canvas POD on Etsy — they hit a comfortable price point and fit common wall spaces. 24×36 wins on average order value because the larger footprint commands a higher price. Most successful sellers list at least 8×10, 12×12, 16×20, and 24×36 to cover the demand curve.",
                    },
                    {
                      question: "Do canvas prints need bleed?",
                      answer:
                        "Yes. Canvas prints are stretched around a wooden frame, which wraps 0.75″–1.5″ of your image around the edges. Add at least 1″ of bleed on every side of your master file so nothing important sits in the wrap zone. Most POD providers spec exact bleed on their templates — always confirm before exporting.",
                    },
                    {
                      question: "What DPI should canvas prints be?",
                      answer:
                        "Aim for 300 DPI at the final canvas size. For very large canvases (24×36 and above) 240 DPI is acceptable for most POD canvas printers because viewing distance compensates for slightly lower resolution. Below 200 DPI, edges and gradients start to look soft — the print will sell once and refund.",
                    },
                    {
                      question: "Can I use the same file for paper and canvas?",
                      answer:
                        "Yes — if the aspect ratio matches and you've added enough bleed for the canvas wrap. A 16×20 master with 1″ bleed prints cleanly as a paper poster (the bleed is trimmed) and as a wrapped canvas (the bleed becomes the wrap). Mismatched ratios force a crop, so plan ratios up front.",
                    },
                    {
                      question: "What aspect ratio is canvas?",
                      answer:
                        "Canvas isn't a single ratio. The most common canvas ratios on Etsy are 4:5 (8×10, 16×20), 2:3 (20×30, 24×36), 3:4 (18×24, 30×40), and 1:1 (12×12, square gallery). Panoramic canvases at 1:2 or wider are a niche category for landscapes and abstracts.",
                    },
                    {
                      question: "RGB or CMYK for canvas?",
                      answer:
                        "Use RGB (sRGB color profile). Canvas POD printers ingest RGB and convert internally to their own ink profile — a CMYK file you converted yourself usually prints duller because the conversion is happening twice. For a deeper walkthrough see the CMYK vs RGB for Etsy printables guide.",
                    },
                  ]}
                />
              </div>

              {/* --- Related Pages --- */}
              <RelatedPages currentSlug="canvas-print-sizes-for-etsy" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
