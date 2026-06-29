import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { QuickAnswer } from "@/components/QuickAnswer";
import RelatedPages from "@/components/RelatedPages";
import { ContextualCTA } from "@/components/ContextualCTA";
import { RatioPackFan, type FanPrint } from "@/components/RatioPackFan";

export const metadata: Metadata = {
  title: "A4 at 300 DPI: 2480×3508 Pixels — Full Size Chart",
  description:
    "A4 at 300 DPI is exactly 2480×3508 pixels. Pixel chart for 16 standard print sizes at 300 DPI — A3, A5, US Letter, 8×10, 5×7, and more.",
  alternates: {
    canonical: "https://snaptosize.com/a4-300-dpi-pixels",
  },
  openGraph: {
    title: "A4 at 300 DPI: 2480×3508 Pixels — Full Size Chart | SnapToSize",
    description:
      "A4 at 300 DPI is exactly 2480×3508 pixels. Pixel chart for 16 standard print sizes at 300 DPI — A3, A5, US Letter, 8×10, 5×7, and more.",
    url: "https://snaptosize.com/a4-300-dpi-pixels",
    images: [
      {
        url: "/assets/og/a4-300-dpi-pixels.png",
        width: 1200,
        height: 630,
        alt: "A4 at 300 DPI: 2480×3508 pixels — complete print size chart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A4 at 300 DPI: 2480×3508 Pixels — Full Size Chart",
    description:
      "A4 at 300 DPI is exactly 2480×3508 pixels. Pixel chart for 16 standard print sizes — A-series, US, and common print sizes.",
    images: ["/assets/og/a4-300-dpi-pixels.png"],
  },
};

export default function A4300DpiPixelsPage() {
  const appUrl =
    "https://app.snaptosize.com?source=seo_a4-300-dpi-pixels&kind=guide";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A4 at 300 DPI: 2480×3508 Pixels — Complete Print Size Chart",
    description:
      "A4 at 300 DPI is exactly 2480×3508 pixels. Full pixel dimension chart for 16 standard print sizes at 300 DPI including A-series and US sizes.",
    url: "https://snaptosize.com/a4-300-dpi-pixels",
    datePublished: "2026-06-28",
    dateModified: "2026-06-28",
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
        name: "Print Size Guides",
        item: "https://snaptosize.com/sizes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "A4 at 300 DPI Pixels",
        item: "https://snaptosize.com/a4-300-dpi-pixels",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is A4 at 300 DPI in pixels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A4 at 300 DPI is 2480×3508 pixels in portrait orientation, or 3508×2480 in landscape. This is the standard for high-quality print output and what professional print services expect.",
        },
      },
      {
        "@type": "Question",
        name: "What resolution should I use for Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "300 DPI is the standard for Etsy printables. At 300 DPI, your file will print sharply at the exact dimensions. A 2480×3508px file prints as a crisp A4. Lower DPI (72-150) looks fine on screen but blurs when printed.",
        },
      },
      {
        "@type": "Question",
        name: "Is 300 DPI the same as 300 PPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For digital files destined for print, yes. DPI (dots per inch) refers to printer output; PPI (pixels per inch) refers to digital files. When setting up your Etsy printable, set your canvas to 300 PPI — print shops interpret that as 300 DPI.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate pixels for any print size at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiply each dimension in inches by 300. For 8×10: 8×300=2400px, 10×300=3000px → 2400×3000px. For A4 (8.27×11.69 inches): 8.27×300=2480px, 11.69×300=3508px.",
        },
      },
      {
        "@type": "Question",
        name: "What file size is a 300 DPI A4 in Photoshop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An A4 at 300 DPI (2480×3508px) saved as a high-quality JPEG is typically 3-8 MB. As a PNG it's 8-25 MB depending on content complexity. As a PDF with embedded image, 5-15 MB. Etsy's 20MB file limit accommodates A4 PDFs easily.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell A4 prints on Etsy if I'm in the US?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — A4 is the standard paper size in Europe, Australia, and most of Asia, so US Etsy sellers offering A4 sizes reach international buyers. Many sellers offer both A4 (8.27×11.69) and US Letter (8.5×11) in one listing to serve both markets.",
        },
      },
    ],
  };

  const sizes = [
    { name: "A5", inches: "5.83×8.27", pixels: "1748×2480", ratio: "√2" },
    { name: "A4", inches: "8.27×11.69", pixels: "2480×3508", ratio: "√2", highlight: true },
    { name: "A3", inches: "11.69×16.54", pixels: "3508×4961", ratio: "√2" },
    { name: "A2", inches: "16.54×23.39", pixels: "4961×7016", ratio: "√2" },
    { name: "A1", inches: "23.39×33.11", pixels: "7016×9933", ratio: "√2" },
    { name: "US Letter", inches: "8.5×11", pixels: "2550×3300", ratio: "~4:5" },
    { name: "US Legal", inches: "8.5×14", pixels: "2550×4200", ratio: "~3:5" },
    { name: "4×6", inches: "4×6", pixels: "1200×1800", ratio: "2:3" },
    { name: "5×7", inches: "5×7", pixels: "1500×2100", ratio: "~5:7" },
    { name: "8×10", inches: "8×10", pixels: "2400×3000", ratio: "4:5" },
    { name: "11×14", inches: "11×14", pixels: "3300×4200", ratio: "11:14" },
    { name: "12×16", inches: "12×16", pixels: "3600×4800", ratio: "3:4" },
    { name: "16×20", inches: "16×20", pixels: "4800×6000", ratio: "4:5" },
    { name: "18×24", inches: "18×24", pixels: "5400×7200", ratio: "3:4" },
    { name: "20×30", inches: "20×30", pixels: "6000×9000", ratio: "2:3" },
    { name: "24×36", inches: "24×36", pixels: "7200×10800", ratio: "2:3" },
  ];

  const deerPrints: FanPrint[] = [
    { src: "/assets/modes-demo/resize/deer-3x4.jpg", size: "6×8 in", tag: "3:4", ratio: 0.75 },
    { src: "/assets/modes-demo/resize/deer-iso.jpg", size: "A4", tag: "ISO A", ratio: 0.707 },
    { src: "/assets/modes-demo/resize/deer-2x3.jpg", size: "8×12 in", tag: "2:3", ratio: 0.667 },
    { src: "/assets/modes-demo/resize/deer-4x5.jpg", size: "8×10 in", tag: "4:5", ratio: 0.8 },
    { src: "/assets/modes-demo/resize/deer-extras.jpg", size: "11×14 in", tag: "Extras", ratio: 0.786 },
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
        className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden"
        style={{ background: "#080C14" }}
      >
        {/* Blueprint grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.06) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Corner accent lines */}
        <div
          className="absolute top-0 left-0 w-24 h-24 opacity-20"
          style={{
            borderRight: "1px solid rgba(45,212,191,0.5)",
            borderBottom: "1px solid rgba(45,212,191,0.5)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-24 h-24 opacity-20"
          style={{
            borderLeft: "1px solid rgba(45,212,191,0.5)",
            borderTop: "1px solid rgba(45,212,191,0.5)",
          }}
        />

        {/* CSS-only A4 diagram — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block select-none">
          <div className="relative" style={{ width: "260px", height: "368px" }}>
            {/* A4 rectangle outline */}
            <div
              className="absolute inset-0"
              style={{
                border: "1.5px solid rgba(45,212,191,0.85)",
                background: "rgba(45,212,191,0.06)",
              }}
            />
            {/* Corner ticks */}
            {[
              { top: -6, left: -6 },
              { top: -6, right: -6 },
              { bottom: -6, left: -6 },
              { bottom: -6, right: -6 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3"
                style={{
                  ...pos,
                  borderColor: "rgba(45,212,191,0.95)",
                  borderStyle: "solid",
                  borderWidth: i === 0 ? "1px 0 0 1px" : i === 1 ? "1px 1px 0 0" : i === 2 ? "0 0 1px 1px" : "0 1px 1px 0",
                }}
              />
            ))}
            {/* Width label */}
            <div
              className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-1"
              style={{ color: "rgba(45,212,191,0.8)" }}
            >
              <div className="h-px flex-1" style={{ background: "rgba(45,212,191,0.4)" }} />
              <span className="font-mono text-[10px] whitespace-nowrap">2480 px</span>
              <div className="h-px flex-1" style={{ background: "rgba(45,212,191,0.4)" }} />
            </div>
            {/* Height label */}
            <div
              className="absolute -right-14 top-0 bottom-0 flex flex-col items-center justify-center gap-1"
              style={{ color: "rgba(45,212,191,0.8)" }}
            >
              <div className="w-px flex-1" style={{ background: "rgba(45,212,191,0.4)" }} />
              <span
                className="font-mono text-[10px] whitespace-nowrap"
                style={{ writingMode: "vertical-rl" }}
              >
                3508 px
              </span>
              <div className="w-px flex-1" style={{ background: "rgba(45,212,191,0.4)" }} />
            </div>
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <span
                className="font-mono text-xs font-bold"
                style={{ color: "rgba(45,212,191,0.9)" }}
              >
                A4
              </span>
              <span
                className="font-mono text-[9px]"
                style={{ color: "rgba(45,212,191,0.5)" }}
              >
                8.27 × 11.69 in
              </span>
              <span
                className="font-mono text-[9px]"
                style={{ color: "rgba(45,212,191,0.5)" }}
              >
                @ 300 DPI
              </span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <Container>
          <div className="relative z-10 max-w-[640px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "rgba(45,212,191,0.5)" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(45,212,191,0.7)" }}
              >
                300 DPI Reference
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              A4 at 300 DPI:{" "}
              <span style={{ color: "#2DD4BF" }}>2480&times;3508</span>
              <br /> Pixels
            </h1>

            <p className="text-base md:text-lg mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              The exact pixel dimensions you need for print-ready files. A4 at
              300 DPI = 2480&times;3508 pixels. Below: a complete chart for 16
              standard sizes.
            </p>

            <QuickAnswer question="What is A4 at 300 DPI in pixels?">
              A4 at 300 DPI = <strong>2480 &times; 3508 pixels</strong> (portrait).
              The formula: multiply each inch by 300. A4 is 8.27&times;11.69
              inches &rarr; 8.27&times;300=2480px wide, 11.69&times;300=3508px
              tall. For landscape: 3508&times;2480px.
            </QuickAnswer>

            <div className="mt-6">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-3">
                  Export All Sizes at 300 DPI Free
                </Button>
              </a>
              <div className="flex flex-wrap gap-2 mt-4">
                {["16-size DPI chart", "ISO A-series + US", "300 DPI formulas"].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(45,212,191,0.08)",
                      color: "rgba(45,212,191,0.7)",
                      border: "1px solid rgba(45,212,191,0.2)",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Section 1: The calculation */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The A4 300 DPI Calculation
              </h2>
              <p className="text-foreground-60 mb-4">
                300 DPI means 300 dots (pixels) per inch. To find pixel
                dimensions, multiply each physical dimension by 300:
              </p>
              <div
                className="rounded-lg p-5 md:p-6 font-mono text-sm space-y-2"
                style={{ background: "rgba(45,212,191,0.05)", border: "1px solid rgba(45,212,191,0.15)" }}
              >
                <p style={{ color: "rgba(45,212,191,0.9)" }}>
                  A4 width: 8.27 in &times; 300 = <strong>2480 px</strong>
                </p>
                <p style={{ color: "rgba(45,212,191,0.9)" }}>
                  A4 height: 11.69 in &times; 300 = <strong>3508 px</strong>
                </p>
                <p className="pt-2" style={{ color: "rgba(255,255,255,0.4)", borderTop: "1px solid rgba(45,212,191,0.1)" }}>
                  Portrait: 2480 &times; 3508 &nbsp;|&nbsp; Landscape: 3508 &times; 2480
                </p>
              </div>
              <p className="text-foreground-60 mt-4">
                This formula works for any size. Take any inch measurement,
                multiply by 300, and you have the pixel count needed for sharp
                print output. The chart below does the math for 16 standard
                sizes.
              </p>
            </div>

            {/* Section 2: Full pixel chart */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Complete Pixel Chart at 300 DPI
              </h2>
              <p className="text-foreground-60 mb-6">
                All 16 sizes below are calculated at exactly 300 DPI. Use these
                dimensions when creating your Etsy printable files in Photoshop,
                Illustrator, Canva, or Affinity Designer.
              </p>
              <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      <th className="text-left py-3 px-4 font-semibold text-white">Size</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Inches</th>
                      <th className="text-left py-3 px-4 font-semibold" style={{ color: "#2DD4BF" }}>Pixels @ 300 DPI</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size, i) => (
                      <tr
                        key={size.name}
                        style={{
                          borderBottom: i < sizes.length - 1 ? "1px solid rgba(255,255,255,0.05)" : undefined,
                          background: size.highlight ? "rgba(45,212,191,0.05)" : undefined,
                        }}
                      >
                        <td className="py-3 px-4 font-semibold" style={{ color: size.highlight ? "#2DD4BF" : "white" }}>
                          {size.name}
                          {size.highlight && (
                            <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: "rgba(45,212,191,0.15)", color: "rgba(45,212,191,0.8)" }}>
                              this page
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-foreground-60 font-mono text-xs">{size.inches}</td>
                        <td className="py-3 px-4 font-mono font-semibold" style={{ color: size.highlight ? "#2DD4BF" : "rgba(255,255,255,0.85)" }}>
                          {size.pixels}
                        </td>
                        <td className="py-3 px-4 text-foreground-60 text-xs">{size.ratio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- CTA 1 --- */}
            <Card accent className="p-6 md:p-8 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Stop calculating pixel dimensions manually
              </h3>
              <p className="text-foreground-60 mb-4 text-sm md:text-base">
                Upload your artwork once &mdash; SnapToSize outputs every size
                in this chart at exactly 300 DPI. No math, no manual exports,
                no missed sizes.
              </p>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Calculate All Sizes Free
                </Button>
              </a>
            </Card>

            {/* Mid-page conversion: pack output proof */}
            <div className="py-2">
              <p className="text-center text-sm text-foreground-60 mb-2 uppercase tracking-widest font-mono" style={{ color: "rgba(45,212,191,0.5)" }}>
                What SnapToSize exports from one upload
              </p>
              <RatioPackFan prints={deerPrints} subject="Deer art at every print ratio" />
              <p className="text-center text-sm text-foreground-60 mt-8 mb-2 max-w-xl mx-auto">
                One upload → <span className="text-foreground font-medium">up to 70 print-ready files</span> across 5 ratio packs, all at 300 DPI, each ZIP under Etsy&apos;s 20 MB limit. A4 (ISO pack) is always included.
              </p>
              <div className="mt-6">
                <ContextualCTA
                  problem="Manually calculating pixels and resizing for A4, A3, US Letter — every time you list new artwork?"
                  solution="SnapToSize exports your full ISO A-series (A5 → A1) plus US sizes and common prints in one click — all at exactly 300 DPI, named and ready to upload to Etsy."
                  buttonText="Export ISO + US Pack Free"
                  appUrl={appUrl}
                />
              </div>
            </div>

            {/* Section 3: ISO A-series */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ISO A-Series Sizes at 300 DPI
              </h2>
              <p className="text-foreground-60 mb-4">
                The ISO A-series (A1&ndash;A5) follows a consistent pattern:
                each size is exactly half the area of the one above it, and
                both share the same aspect ratio (&radic;2, approximately
                1:1.414). This means cropping is never needed when scaling
                between A-sizes.
              </p>
              <div className="space-y-3">
                {sizes.filter(s => ["A5","A4","A3","A2","A1"].includes(s.name)).map(s => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between rounded-lg px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="font-semibold text-white">{s.name}</span>
                    <span className="font-mono text-sm" style={{ color: "#2DD4BF" }}>{s.pixels}</span>
                    <span className="text-foreground-60 text-xs font-mono">{s.inches} in</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground-60 mt-4 text-sm">
                A4 is the most requested size from international buyers.
                If you sell on Etsy and ship to the UK, Europe, Australia, or
                Asia, offering A4 and A3 alongside US sizes significantly
                expands your buyer pool. A simple pack covering A5, A4, and A3
                serves the entire ISO market.
              </p>
            </div>

            {/* Section 4: US sizes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                US and Common Print Sizes at 300 DPI
              </h2>
              <p className="text-foreground-60 mb-4">
                US sellers typically lead with inch-based sizes. Here are the
                most common US print dimensions converted to pixels at 300 DPI:
              </p>
              <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      <th className="text-left py-3 px-4 font-semibold text-white">Size</th>
                      <th className="text-left py-3 px-4 font-semibold" style={{ color: "#2DD4BF" }}>Pixels @ 300 DPI</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Common use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "4×6", pixels: "1200×1800", use: "Photo prints, cards" },
                      { name: "5×7", pixels: "1500×2100", use: "Greeting cards, prints" },
                      { name: "8×10", pixels: "2400×3000", use: "Most popular wall art size" },
                      { name: "US Letter", pixels: "2550×3300", use: "Home printing, planners" },
                      { name: "11×14", pixels: "3300×4200", use: "Gallery wall anchor" },
                      { name: "16×20", pixels: "4800×6000", use: "Large statement prints" },
                      { name: "18×24", pixels: "5400×7200", use: "Poster size" },
                      { name: "24×36", pixels: "7200×10800", use: "Large format / movie poster" },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.name}
                        style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : undefined }}
                      >
                        <td className="py-3 px-4 font-semibold text-white">{row.name}</td>
                        <td className="py-3 px-4 font-mono font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{row.pixels}</td>
                        <td className="py-3 px-4 text-foreground-60 text-xs">{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-foreground-60 mt-4 text-sm">
                Most successful Etsy printable sellers offer both US and ISO
                sizes. A complete listing might include 8&times;10, 5&times;7,
                4&times;6 (US buyers) plus A4, A3, A5 (international buyers)
                &mdash; six sizes from one upload.
              </p>
            </div>

            {/* Section 5: Below 300 DPI */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Happens Below 300 DPI?
              </h2>
              <p className="text-foreground-60 mb-4">
                If your file has fewer pixels than the 300 DPI equivalent, the
                print will be softer or visibly blurry. Here&rsquo;s a quick
                reference showing what A4 looks like at common DPI settings:
              </p>
              <div className="space-y-3">
                {[
                  { dpi: "72 DPI (screen)", pixels: "595×842", note: "Screen only — blurry when printed", warn: true },
                  { dpi: "150 DPI", pixels: "1240×1754", note: "Acceptable for small prints, soft at full size", warn: true },
                  { dpi: "200 DPI", pixels: "1654×2339", note: "Passable for casual prints", warn: false },
                  { dpi: "300 DPI", pixels: "2480×3508", note: "Standard — sharp at any print service", warn: false, good: true },
                  { dpi: "400 DPI", pixels: "3307×4677", note: "Excellent — overkill for most print services", warn: false },
                ].map(row => (
                  <div
                    key={row.dpi}
                    className="flex items-center gap-3 rounded-lg px-4 py-3"
                    style={{
                      background: row.good ? "rgba(45,212,191,0.05)" : row.warn ? "rgba(239,68,68,0.04)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${row.good ? "rgba(45,212,191,0.2)" : row.warn ? "rgba(239,68,68,0.1)" : "rgba(255,255,255,0.06)"}`,
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: row.good ? "#2DD4BF" : row.warn ? "#ef4444" : "rgba(255,255,255,0.2)" }}
                    />
                    <span className="font-mono text-xs w-28 flex-shrink-0" style={{ color: row.good ? "#2DD4BF" : "rgba(255,255,255,0.6)" }}>
                      {row.dpi}
                    </span>
                    <span className="font-mono text-xs flex-shrink-0" style={{ color: row.good ? "#2DD4BF" : "rgba(255,255,255,0.5)" }}>
                      {row.pixels}
                    </span>
                    <span className="text-xs text-foreground-60 ml-auto text-right">{row.note}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground-60 mt-4 text-sm">
                For Etsy digital downloads, create your files at 300 DPI from
                the start. Upscaling a 72 DPI file to 300 DPI adds pixels but
                does not recover detail — the file will appear sharp but still
                print blurry. Work at 300 DPI natively.
              </p>
            </div>

            {/* Section 6: Internal links */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Size Guides
              </h2>
              <p className="text-foreground-60 mb-4">
                If you need pixel dimensions for specific sizes or want to
                understand DPI concepts further:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { slug: "print-sizes-at-300-dpi", label: "Print Sizes at 300 DPI — Full Chart" },
                  { slug: "dpi-vs-pixel-dimensions", label: "DPI vs Pixel Dimensions Explained" },
                  { slug: "best-resolution-for-etsy-printables", label: "Best Resolution for Etsy Printables" },
                  { slug: "etsy-a4-print-size", label: "A4 Print Size for Etsy Sellers" },
                ].map(link => (
                  <Link
                    key={link.slug}
                    href={`/${link.slug}`}
                    className="rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {link.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>

            {/* --- CTA 2: FinalCTA --- */}
            <FinalCTA
              heading="Upload once, get every size at 300 DPI"
              stat="16+ sizes from a single upload"
              description="SnapToSize outputs every size in this chart at exactly 300 DPI. Upload your artwork once — no manual resizing, no pixel calculations."
              buttonText="Generate All Sizes Free"
              appUrl={appUrl}
            />

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={[
                  {
                    question: "What is A4 at 300 DPI in pixels?",
                    answer:
                      "A4 at 300 DPI is 2480×3508 pixels in portrait orientation, or 3508×2480 in landscape. This is the standard for high-quality print output and what professional print services expect.",
                  },
                  {
                    question: "What resolution should I use for Etsy printables?",
                    answer:
                      "300 DPI is the standard for Etsy printables. At 300 DPI, your file will print sharply at the exact dimensions. A 2480×3508px file prints as a crisp A4. Lower DPI (72-150) looks fine on screen but blurs when printed.",
                  },
                  {
                    question: "Is 300 DPI the same as 300 PPI?",
                    answer:
                      "For digital files destined for print, yes. DPI (dots per inch) refers to printer output; PPI (pixels per inch) refers to digital files. When setting up your Etsy printable, set your canvas to 300 PPI — print shops interpret that as 300 DPI.",
                  },
                  {
                    question: "How do I calculate pixels for any print size at 300 DPI?",
                    answer:
                      "Multiply each dimension in inches by 300. For 8×10: 8×300=2400px, 10×300=3000px → 2400×3000px. For A4 (8.27×11.69 inches): 8.27×300=2480px, 11.69×300=3508px.",
                  },
                  {
                    question: "What file size is a 300 DPI A4 in Photoshop?",
                    answer:
                      "An A4 at 300 DPI (2480×3508px) saved as a high-quality JPEG is typically 3-8 MB. As a PNG it's 8-25 MB depending on content complexity. As a PDF with embedded image, 5-15 MB. Etsy's 20MB file limit accommodates A4 PDFs easily.",
                  },
                  {
                    question: "Can I sell A4 prints on Etsy if I'm in the US?",
                    answer:
                      "Yes — A4 is the standard paper size in Europe, Australia, and most of Asia, so US Etsy sellers offering A4 sizes reach international buyers. Many sellers offer both A4 (8.27×11.69) and US Letter (8.5×11) in one listing to serve both markets.",
                  },
                ]}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="a4-300-dpi-pixels" />
          </div>
        </Container>
      </section>
    </>
  );
}
