import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { EmailCapture } from "@/components/EmailCapture";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy Digital Planner Sizes — Complete Size Guide",
  description:
    "Exact pixel dimensions for digital planner sizes on Etsy. A4, A5, US Letter, Half Letter, GoodNotes and iPad-optimized sizes at 300 DPI.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-digital-planner-sizes",
  },
  openGraph: {
    title: "Etsy Digital Planner Sizes | SnapToSize",
    description:
      "Exact pixel dimensions for digital planner sizes on Etsy. A4, A5, US Letter, Half Letter, GoodNotes and iPad-optimized sizes at 300 DPI.",
    url: "https://snaptosize.com/etsy-digital-planner-sizes",
    images: [
      {
        url: "/assets/og/etsy-digital-planner-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Digital Planner Sizes — Complete Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Digital Planner Sizes — Complete Size Guide",
    description:
      "Exact pixel dimensions for digital planner sizes on Etsy. A4, A5, US Letter, Half Letter, GoodNotes and iPad-optimized sizes at 300 DPI.",
    images: ["/assets/og/etsy-digital-planner-sizes.png"],
  },
};

export default function EtsyDigitalPlannerSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy Digital Planner Sizes — The Complete Size Guide for Sellers",
    description:
      "Complete digital planner size guide for Etsy sellers. Covers the 4 standard page sizes, GoodNotes and iPad-optimized sizes, planner cover vs interior pages, how to package multiple sizes without manual resizing, and hyperlinked planner considerations.",
    url: "https://snaptosize.com/etsy-digital-planner-sizes",
    datePublished: "2026-04-11",
    dateModified: "2026-04-11",
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
        name: "Etsy Digital Planner Sizes",
        item: "https://snaptosize.com/etsy-digital-planner-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What are the most common digital planner sizes on Etsy?",
      answer:
        "The four standard sizes are A4 (2480\u00d73508 px), A5 (1748\u00d72480 px), US Letter (2550\u00d73300 px), and Half Letter (1275\u00d71650 px) — all at 300 DPI. Most top-selling Etsy planners include all four sizes in a single listing to cover both US and international buyers.",
    },
    {
      question: "What size should a digital planner be for GoodNotes?",
      answer:
        "GoodNotes uses an iPad screen ratio of approximately 3:4. A5 (1748\u00d72480 px) works well for most iPad models. For the iPad Pro 12.9\u2033, you can use a slightly larger file — 2048\u00d72732 px — which matches the native display resolution. US Letter also works but shows small side margins in GoodNotes.",
    },
    {
      question: "Do I need both A4 and US Letter for my Etsy planner listing?",
      answer:
        "Yes. A4 is standard in Europe, Australia, and most of the world. US Letter is standard in the US and Canada. If you only offer one, you exclude a large portion of your buyers. Including both (plus A5 and Half Letter) covers 95%+ of planner users globally.",
    },
    {
      question: "Are digital planner cover pages a different size than interior pages?",
      answer:
        "Not technically — they use the same pixel dimensions. However, some sellers design cover pages at A4 or US Letter even when interior pages are A5, creating a slight proportional difference when viewed in GoodNotes. For a seamless experience, use consistent dimensions across the entire planner.",
    },
    {
      question: "Can I sell a digital planner on Etsy without the 20MB file limit causing issues?",
      answer:
        "Yes, but multi-size planner bundles can easily exceed 20MB per file. The solution is to split sizes into separate ZIP files (one per size) or compress PDFs before zipping. Etsy allows up to 5 digital files per listing, so you can deliver A4, A5, Letter, and Half Letter as four separate downloads.",
    },
    {
      question: "What DPI should I use for digital planners on Etsy?",
      answer:
        "300 DPI is the standard for all print-ready digital products on Etsy, including planners. Even though planners are primarily used digitally on screens, 300 DPI ensures buyers can print individual pages at full quality if they want a physical copy — a common request.",
    },
    {
      question: "What ratio is A5 and is it the same as iPad ratio?",
      answer:
        "A5 is an ISO paper size with a ratio of approximately 1:1.41 (A-series ratio). iPad screens use a 3:4 ratio. These are close but not identical — A5 (1748\u00d72480 px) will show thin side margins in GoodNotes on most iPads. For a zero-margin fit, use a custom 1668\u00d72224 px file sized to the iPad Air display.",
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
    "https://app.snaptosize.com?source=seo_etsy-digital-planner-sizes&kind=guide";

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
            "linear-gradient(155deg, #0d0b1a 0%, #100d1f 30%, #0b0916 60%, #0f0c1c 100%)",
        }}
      >
        {/* Purple glow — top right */}
        <div
          className="absolute top-[-8%] right-[12%] w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)" }}
        />
        {/* Deep teal glow — bottom left */}
        <div
          className="absolute bottom-[-10%] left-[-4%] w-[380px] h-[380px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2DD4BF, transparent 70%)" }}
        />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #A78BFA 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* CSS-only planner pages visual — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative" style={{ width: "340px", height: "360px" }}>

            {/* A4 page — large, left, slight tilt */}
            <div
              className="absolute"
              style={{ width: "110px", height: "156px", top: "20px", left: "0px", transform: "rotate(-3deg)" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(167,139,250,0.45)",
                  background: "linear-gradient(160deg, #1a1535 0%, #120f28 100%)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                {/* Horizontal lines — planner interior */}
                {[22, 38, 54, 70, 86, 102, 118].map((top) => (
                  <div
                    key={top}
                    style={{
                      position: "absolute",
                      top: `${top}px`,
                      left: "10px",
                      right: "10px",
                      height: "1px",
                      background: "rgba(167,139,250,0.18)",
                    }}
                  />
                ))}
                {/* Margin line */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "24px",
                    width: "1px",
                    bottom: "12px",
                    background: "rgba(167,139,250,0.15)",
                  }}
                />
                {/* Label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    right: "6px",
                    fontSize: "7px",
                    fontFamily: "monospace",
                    color: "rgba(167,139,250,0.6)",
                    letterSpacing: "0.03em",
                  }}
                >
                  A4
                </div>
              </div>
            </div>

            {/* US Letter page — center, straight */}
            <div
              className="absolute"
              style={{ width: "108px", height: "140px", top: "50px", left: "120px", transform: "rotate(1deg)" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(45,212,191,0.40)",
                  background: "linear-gradient(160deg, #0f1e1c 0%, #091615 100%)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                {[18, 32, 46, 60, 74, 88, 102, 116].map((top) => (
                  <div
                    key={top}
                    style={{
                      position: "absolute",
                      top: `${top}px`,
                      left: "10px",
                      right: "10px",
                      height: "1px",
                      background: "rgba(45,212,191,0.18)",
                    }}
                  />
                ))}
                <div
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    right: "6px",
                    fontSize: "7px",
                    fontFamily: "monospace",
                    color: "rgba(45,212,191,0.6)",
                    letterSpacing: "0.03em",
                  }}
                >
                  LETTER
                </div>
              </div>
            </div>

            {/* A5 page — smaller, right, tilted */}
            <div
              className="absolute"
              style={{ width: "78px", height: "110px", top: "30px", left: "248px", transform: "rotate(2.5deg)" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(167,139,250,0.35)",
                  background: "linear-gradient(160deg, #1a1535 0%, #120f28 100%)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
                }}
              >
                {[16, 28, 40, 52, 64, 76, 88].map((top) => (
                  <div
                    key={top}
                    style={{
                      position: "absolute",
                      top: `${top}px`,
                      left: "8px",
                      right: "8px",
                      height: "1px",
                      background: "rgba(167,139,250,0.15)",
                    }}
                  />
                ))}
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    fontSize: "6px",
                    fontFamily: "monospace",
                    color: "rgba(167,139,250,0.55)",
                    letterSpacing: "0.03em",
                  }}
                >
                  A5
                </div>
              </div>
            </div>

            {/* Half Letter — bottom, small */}
            <div
              className="absolute"
              style={{ width: "78px", height: "101px", top: "220px", left: "60px", transform: "rotate(-1.5deg)" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(45,212,191,0.30)",
                  background: "linear-gradient(160deg, #0f1e1c 0%, #091615 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                {[14, 26, 38, 50, 62, 74, 86].map((top) => (
                  <div
                    key={top}
                    style={{
                      position: "absolute",
                      top: `${top}px`,
                      left: "8px",
                      right: "8px",
                      height: "1px",
                      background: "rgba(45,212,191,0.15)",
                    }}
                  />
                ))}
                <div
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    right: "5px",
                    fontSize: "6px",
                    fontFamily: "monospace",
                    color: "rgba(45,212,191,0.5)",
                    letterSpacing: "0.03em",
                  }}
                >
                  ½ LTR
                </div>
              </div>
            </div>

            {/* Pixel annotation: A4 */}
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "0px",
                fontSize: "9px",
                fontFamily: "monospace",
                color: "rgba(167,139,250,0.5)",
                letterSpacing: "0.04em",
              }}
            >
              2480 × 3508 px
            </div>

            {/* Pixel annotation: Letter */}
            <div
              style={{
                position: "absolute",
                top: "200px",
                left: "108px",
                fontSize: "9px",
                fontFamily: "monospace",
                color: "rgba(45,212,191,0.45)",
                letterSpacing: "0.04em",
              }}
            >
              2550 × 3300 px
            </div>
          </div>
        </div>

        {/* Hero content */}
        <Container>
          <div className="max-w-[600px]">
            <div
              className="inline-block mb-4 text-[10px] font-mono tracking-[0.18em] uppercase px-3 py-1 rounded"
              style={{
                color: "#A78BFA",
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.18)",
              }}
            >
              Digital Planner Guide
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-white leading-[1.15]">
              Etsy Digital Planner{" "}
              <span style={{ color: "#A78BFA" }}>Sizes</span> — The Complete
              Size Guide
            </h1>

            <p className="text-base md:text-lg mb-7" style={{ color: "rgba(255,255,255,0.65)" }}>
              Exact pixel dimensions for every major digital planner format.
              Stop guessing which size works in GoodNotes — get the right
              dimensions before you upload.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "A4, A5, Letter & Half Letter",
                "GoodNotes-optimized ratios",
                "300 DPI print-ready",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <Check className="w-3.5 h-3.5 shrink-0" style={{ color: "#A78BFA" }} />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              <Button className="text-sm px-6 py-2.5">
                Resize My Planner Files &rarr;
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-14">

            {/* Quick Answer */}
            <QuickAnswer question="What are the standard digital planner sizes for Etsy?">
              The most common digital planner sizes on Etsy are{" "}
              <strong>A4 (2480&times;3508 px)</strong>,{" "}
              <strong>A5 (1748&times;2480 px)</strong>,{" "}
              <strong>US Letter (2550&times;3300 px)</strong>, and{" "}
              <strong>Half Letter (1275&times;1650 px)</strong>. All at 300 DPI.
            </QuickAnswer>

            {/* H2: The 4 Standard Sizes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 4 Standard Digital Planner Page Sizes
              </h2>
              <p className="mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                These four sizes cover the vast majority of Etsy digital planner
                buyers. Including all four in a single listing gives you the
                widest possible audience — US buyers, international buyers, iPad
                users, and print-at-home customers.
              </p>

              <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(167,139,250,0.08)" }}>
                      <th className="text-left px-4 py-3 font-semibold text-white">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Pixels (300 DPI)</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Dimensions</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        size: "A4",
                        pixels: "2480 × 3508 px",
                        dims: "8.27 × 11.69\"",
                        use: "Europe, Australia, global default",
                        highlight: true,
                      },
                      {
                        size: "A5",
                        pixels: "1748 × 2480 px",
                        dims: "5.83 × 8.27\"",
                        use: "GoodNotes, iPad, compact planners",
                        highlight: true,
                      },
                      {
                        size: "US Letter",
                        pixels: "2550 × 3300 px",
                        dims: "8.5 × 11\"",
                        use: "US & Canada buyers",
                        highlight: false,
                      },
                      {
                        size: "Half Letter",
                        pixels: "1275 × 1650 px",
                        dims: "5.5 × 8.5\"",
                        use: "Compact US format, mini planners",
                        highlight: false,
                      },
                    ].map((row) => (
                      <tr
                        key={row.size}
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          background: row.highlight
                            ? "rgba(167,139,250,0.04)"
                            : "transparent",
                        }}
                      >
                        <td className="px-4 py-3 font-mono font-semibold" style={{ color: "#A78BFA" }}>
                          {row.size}
                        </td>
                        <td className="px-4 py-3 font-mono text-white">{row.pixels}</td>
                        <td className="px-4 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                          {row.dims}
                        </td>
                        <td className="px-4 py-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {row.use}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                All sizes at 300 DPI. Portrait orientation (height &gt; width) is standard
                for planners. If your planner has landscape pages (e.g. weekly spreads),
                swap width and height values.
              </p>
            </div>

            {/* H2: GoodNotes & iPad Sizes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                GoodNotes, Notability &amp; iPad-Optimized Sizes
              </h2>
              <p className="mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Most digital planner buyers use GoodNotes or Notability on an
                iPad. These apps display PDFs at the file&apos;s native aspect
                ratio, so the ratio you choose affects how much white border
                the buyer sees. Here&apos;s what works best for each device:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    device: "iPad (standard & Air)",
                    ratio: "3:4",
                    recommended: "1668 × 2224 px",
                    note: "Zero-margin fit in GoodNotes. Custom size, not a standard print format.",
                  },
                  {
                    device: "iPad Pro 11\"",
                    ratio: "~3:4.3",
                    recommended: "1668 × 2388 px",
                    note: "Native display resolution. Slight crop on iPad Air.",
                  },
                  {
                    device: "iPad Pro 12.9\"",
                    ratio: "~3:4",
                    recommended: "2048 × 2732 px",
                    note: "Retina resolution. Largest native iPad display.",
                  },
                  {
                    device: "All iPads (print-compatible)",
                    ratio: "~1:1.41",
                    recommended: "1748 × 2480 px (A5)",
                    note: "Tiny side margins in GoodNotes, but prints to A5 perfectly.",
                  },
                ].map((item) => (
                  <Card key={item.device} className="p-4">
                    <div className="text-xs font-mono mb-1" style={{ color: "#A78BFA" }}>
                      {item.device}
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">
                      {item.recommended}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.note}
                    </div>
                  </Card>
                ))}
              </div>

              <p style={{ color: "rgba(255,255,255,0.65)" }}>
                Most sellers include <strong>A5 (1748&times;2480 px)</strong> as the
                iPad-friendly option because it works in GoodNotes and also prints
                cleanly. If you want a true zero-margin iPad experience, add a
                separate &ldquo;iPad optimized&rdquo; version at 1668&times;2224 px.
              </p>
            </div>

            {/* H2: Hyperlinked vs Non-Hyperlinked */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Hyperlinked vs. Non-Hyperlinked Planners — Does Size Affect It?
              </h2>
              <p className="mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                Hyperlinks in PDFs are size-independent — they work at any pixel
                dimension. What matters is the{" "}
                <strong>aspect ratio</strong>, not the absolute size. A hyperlinked
                A4 planner will have all links intact if you scale it up to A3 or down
                to A5, as long as the ratio stays the same.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>
                Where sellers run into trouble: resizing a hyperlinked planner to a
                different <em>ratio</em> (e.g. from A4 to US Letter) shifts the page
                proportions and misaligns link targets. Keep ratios consistent across
                your size variants, or rebuild links for each ratio separately.
              </p>
            </div>

            {/* CTA 2 — mid-page, after 3-4 sections, EmailCapture angle */}
            <Card accent>
              <p className="text-sm font-mono mb-2" style={{ color: "#A78BFA" }}>
                STOP RESIZING MANUALLY
              </p>
              <h3 className="text-lg font-bold text-white mb-2">
                Upload once. Get A4, A5, Letter, and Half Letter in seconds.
              </h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                SnapToSize generates all four standard planner sizes from a single
                upload — named, zipped, and ready to list on Etsy.
              </p>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">Try It Free &rarr;</Button>
              </a>
            </Card>

            {/* H2: How to Package Multiple Sizes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How to Package Multiple Planner Sizes for Etsy Without Manual Resizing
              </h2>
              <p className="mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Top-selling Etsy planner shops don&apos;t create each size by hand.
                They generate all variants from a single master file. Here&apos;s
                the workflow that eliminates manual resizing:
              </p>

              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Design at A4 (2480 × 3508 px)",
                    desc: "A4 is the safest master size — it's larger than A5 and close to US Letter proportions, so downscaling quality loss is minimal.",
                  },
                  {
                    step: "2",
                    title: "Upload your master file to SnapToSize",
                    desc: "One upload generates A5, US Letter, and Half Letter automatically. No manual resizing, no Photoshop artboards.",
                  },
                  {
                    step: "3",
                    title: "Download the ZIP and split by size",
                    desc: "Each size exports as a separate file. Zip them individually so each Etsy digital download stays under 20MB — Etsy's file size limit.",
                  },
                  {
                    step: "4",
                    title: "List all 4 sizes as separate digital files",
                    desc: "Etsy allows up to 5 digital files per listing. Upload A4, A5, Letter, and Half Letter as four separate files within the same listing.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "rgba(167,139,250,0.15)", color: "#A78BFA" }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {item.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                For more on the 20MB limit, see our guide:{" "}
                <Link href="/etsy-20mb-file-limit" className="underline" style={{ color: "#A78BFA" }}>
                  Etsy 20MB file limit — how to stay under it
                </Link>
                .
              </p>
            </div>

            {/* H2: Cover vs Interior Pages */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Planner Cover vs. Interior Page Sizes — Are They Different?
              </h2>
              <p className="mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                Cover pages and interior pages should use <strong>the same pixel
                dimensions</strong>. Mixing sizes (e.g. an A4 cover with A5 interior
                pages) creates jarring transitions in GoodNotes and Notability, and
                confuses buyers who expect a seamless PDF.
              </p>
              <p className="mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Some sellers design covers with a bleed area — adding 3&ndash;5mm
                on each edge to allow for slight trimming if printed. At 300 DPI, that
                means adding roughly 35&ndash;60 px per edge. This is optional for
                digital-only planners, but useful if you expect print buyers.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>
                The short rule: one consistent size per planner variant. If you
                offer A4 and A5 versions, both the cover and every interior page
                in the A4 file should be{" "}
                <strong>2480&times;3508 px</strong>, and the same logic applies
                to A5, Letter, and Half Letter variants.
              </p>

              <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                Related:{" "}
                <Link href="/etsy-a4-print-size" className="underline" style={{ color: "#A78BFA" }}>
                  Etsy A4 print size — exact pixels, DPI and export settings
                </Link>
              </p>
            </div>

            {/* Email Capture */}
            <div>
              <EmailCapture />
            </div>

            {/* FinalCTA */}
            <FinalCTA
              heading="One upload. Every planner size."
              stat="A4, A5, Letter, Half Letter — all from one upload."
              description="SnapToSize generates every standard digital planner size in seconds. No Photoshop, no artboards, no manual resizing."
              buttonText="Generate All Sizes Free"
              appUrl={appUrl}
            />

            {/* FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            <RelatedPages currentSlug="etsy-digital-planner-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
