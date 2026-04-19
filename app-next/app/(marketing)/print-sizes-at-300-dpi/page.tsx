import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { Button } from "@/components/Button";
import { Check, ArrowRight } from "lucide-react";
import { ContextualCTA } from "@/components/ContextualCTA";

// Title: 48 chars ✓
// Description: 153 chars ✓
export const metadata: Metadata = {
  title: "Print Sizes at 300 DPI — Complete Pixel Chart",
  description:
    "Every Etsy print size at 300 DPI with exact pixel dimensions, grouped by ratio pack. The complete reference for digital wall art sellers.",
  alternates: { canonical: "https://snaptosize.com/print-sizes-at-300-dpi" },
  openGraph: {
    title: "Print Sizes at 300 DPI — Complete Pixel Chart",
    description:
      "Every Etsy print size at 300 DPI with exact pixel dimensions, grouped by ratio pack. The complete reference for digital wall art sellers.",
    url: "https://snaptosize.com/print-sizes-at-300-dpi",
    images: [
      {
        url: "/assets/og/print-sizes-at-300-dpi.png",
        width: 1200,
        height: 630,
        alt: "Print Sizes at 300 DPI — Complete Pixel Chart for Etsy Sellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Sizes at 300 DPI — Complete Pixel Chart",
    description:
      "Every Etsy print size at 300 DPI with exact pixel dimensions, grouped by ratio pack.",
    images: ["/assets/og/print-sizes-at-300-dpi.png"],
  },
};

export default function PrintSizesAt300DpiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Print Sizes at 300 DPI — Complete Pixel Chart for Etsy Sellers",
    description:
      "Every Etsy print size at 300 DPI with exact pixel dimensions, grouped by ratio pack. The complete reference for digital wall art sellers.",
    url: "https://snaptosize.com/print-sizes-at-300-dpi",
    datePublished: "2026-04-19",
    dateModified: "2026-04-19",
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
        name: "Print Sizes at 300 DPI",
        item: "https://snaptosize.com/print-sizes-at-300-dpi",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for a 300 DPI print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiply each inch dimension by 300. An 8×10 print at 300 DPI needs 2400×3000 pixels. A 12×18 needs 3600×5400 pixels. A 16×20 needs 4800×6000 pixels.",
        },
      },
      {
        "@type": "Question",
        name: "Is 300 DPI good for large wall art prints like 24×36?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — a 24×36 at 300 DPI requires 7200×10800 pixels. 300 DPI is the Etsy standard buyers expect and professional print shops require. Delivering anything lower risks blurry results and negative reviews.",
        },
      },
      {
        "@type": "Question",
        name: "What is 300 DPI in pixels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DPI (dots per inch) means 300 pixels per inch of print. A 4×6 inch print at 300 DPI = 1200×1800 pixels. DPI only has meaning when tied to a physical print size — a pixel count alone doesn't tell you the DPI.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell 300 DPI files on Etsy if they're over 20MB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — Etsy has a 20MB file limit per file. Large 300 DPI files (especially A1/A0/24×36) often exceed this as PNG. The solution is to export as high-quality JPEG at 300 DPI, which compresses file size without visible quality loss at print.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between 72 DPI and 300 DPI for prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "72 DPI is screen resolution — fine for digital display, looks pixelated and blurry when printed. 300 DPI is the print standard: crisp edges, sharp text, true color. Never sell 72 DPI files as printables.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need 300 DPI for all Etsy print sizes or just large ones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All sizes. Even small prints like 4×6 and 5×7 benefit from 300 DPI — buyers print at home on inkjet printers that expose low resolution. Consistent 300 DPI across all sizes protects your reviews and shop reputation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the pixel size of an A4 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A4 at 300 DPI is 2480×3508 pixels (portrait). This is 8.27×11.69 inches × 300 = exact pixel count. A3 is 3508×4961, A2 is 4961×7016, A1 is 7016×9933.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check if my file is 300 DPI before uploading to Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Photoshop: Image → Image Size — check Resolution field shows 300 pixels/inch. In Canva: File size and dimensions panel shows DPI when exporting PDF. In Affinity Designer/Photo: Document Setup shows DPI. Always verify before uploading.",
        },
      },
    ],
  };


  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Check Your File Is 300 DPI Before Uploading to Etsy",
    description: "Verify that your digital art file is 300 DPI before uploading to Etsy, using Photoshop, Canva, or Affinity Designer.",
    step: [
      { "@type": "HowToStep", name: "Open Image Size in Photoshop", text: "Go to Image → Image Size. Check the Resolution field shows 300 pixels/inch. If wrong, change resolution without resampling first." },
      { "@type": "HowToStep", name: "Check DPI in Canva", text: "Go to File → Download, choose PDF Print or PNG. The DPI is shown in the quality panel. Always select High quality." },
      { "@type": "HowToStep", name: "Check DPI in Affinity Designer", text: "Go to File → Document Setup and check the DPI or PPI field. Should read 300. Also verifiable at export in the dialog." },
    ],
  };

  const faqs = [
    {
      q: "What pixel dimensions do I need for a 300 DPI print?",
      a: "Multiply each inch dimension by 300. An 8×10 print at 300 DPI needs 2400×3000 pixels. A 12×18 needs 3600×5400 pixels. A 16×20 needs 4800×6000 pixels.",
    },
    {
      q: "Is 300 DPI good for large wall art prints like 24×36?",
      a: "Yes — a 24×36 at 300 DPI requires 7200×10800 pixels. 300 DPI is the Etsy standard buyers expect and professional print shops require. Delivering anything lower risks blurry results and negative reviews.",
    },
    {
      q: "What is 300 DPI in pixels?",
      a: "DPI (dots per inch) means 300 pixels per inch of print. A 4×6 inch print at 300 DPI = 1200×1800 pixels. DPI only has meaning when tied to a physical print size — a pixel count alone doesn't tell you the DPI.",
    },
    {
      q: "Can I sell 300 DPI files on Etsy if they're over 20MB?",
      a: "No — Etsy has a 20MB file limit per file. Large 300 DPI files (especially A1/A0/24×36) often exceed this as PNG. The solution is to export as high-quality JPEG at 300 DPI, which compresses file size without visible quality loss at print.",
    },
    {
      q: "What's the difference between 72 DPI and 300 DPI for prints?",
      a: "72 DPI is screen resolution — fine for digital display, looks pixelated and blurry when printed. 300 DPI is the print standard: crisp edges, sharp text, true color. Never sell 72 DPI files as printables.",
    },
    {
      q: "Do I need 300 DPI for all Etsy print sizes or just large ones?",
      a: "All sizes. Even small prints like 4×6 and 5×7 benefit from 300 DPI — buyers print at home on inkjet printers that expose low resolution. Consistent 300 DPI across all sizes protects your reviews and shop reputation.",
    },
    {
      q: "What is the pixel size of an A4 print at 300 DPI?",
      a: "A4 at 300 DPI is 2480×3508 pixels (portrait). This is 8.27×11.69 inches × 300 = exact pixel count. A3 is 3508×4961, A2 is 4961×7016, A1 is 7016×9933.",
    },
    {
      q: "How do I check if my file is 300 DPI before uploading to Etsy?",
      a: "In Photoshop: Image → Image Size — check the Resolution field shows 300 pixels/inch. In Canva: the File size and dimensions panel shows DPI when exporting PDF. In Affinity Designer/Photo: Document Setup shows DPI. Always verify before uploading.",
    },
  ];

  const CTA_URL =
    "https://app.snaptosize.com?source=seo_print-sizes-at-300-dpi&kind=guide";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* ── HERO ── */}
      <div
        className="border-b border-border"
        style={{
          background: "#080d0d",
          backgroundImage:
            "linear-gradient(rgba(45,212,191,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.035) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* ── Left: text ── */}
            <div>
              <nav className="mb-5 flex items-center gap-1.5 text-xs text-foreground-60/60">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <Link href="/etsy-print-sizes" className="hover:text-foreground transition-colors">Etsy Print Sizes</Link>
                <span>/</span>
                <span className="text-foreground-60">300 DPI Reference</span>
              </nav>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#2DD4BF" }}>
                Print Resolution Reference
              </p>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                Print Sizes at 300 DPI{" "}
                <span style={{ color: "#2DD4BF" }}>—</span>{" "}
                Complete Pixel Chart
              </h1>

              <p className="text-lg text-foreground-60 mb-7 max-w-[520px]">
                Every standard Etsy print size with exact pixel dimensions at 300 DPI, grouped by ratio pack. Bookmark this — you&apos;ll use it every upload.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["70 print-ready files", "5 ratio packs", "Portrait & landscape"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      border: "1px solid rgba(45,212,191,0.3)",
                      background: "rgba(45,212,191,0.08)",
                      color: "#2DD4BF",
                    }}
                  >
                    <Check className="h-3 w-3" />
                    {pill}
                  </span>
                ))}
              </div>

              <a href={CTA_URL} className="inline-block mb-6">
                <Button>
                  Try SnapToSize Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              {/* QuickAnswer */}
              <div
                className="rounded-xl p-5"
                style={{
                  border: "1px solid rgba(45,212,191,0.2)",
                  background: "rgba(45,212,191,0.05)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#2DD4BF" }}>
                  Quick Answer
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>Inches × 300 = pixels.</strong> An <strong>8×10 = 2,400×3,000 px</strong>, a{" "}
                  <strong>12×18 = 3,600×5,400 px</strong>, an <strong>A4 = 2,480×3,508 px</strong>. Full table below for all 28+ sizes.
                </p>
              </div>
            </div>

            {/* ── Right: pixel counter card ── */}
            <div className="hidden md:block">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(145deg, #0a1f1e 0%, #061210 100%)",
                  border: "1px solid rgba(45,212,191,0.18)",
                  boxShadow: "0 0 60px rgba(45,212,191,0.06), inset 0 1px 0 rgba(45,212,191,0.1)",
                }}
              >
                <p
                  className="text-xs font-mono font-medium tracking-[0.2em] mb-5"
                  style={{ color: "rgba(45,212,191,0.55)" }}
                >
                  PIXEL DIMENSIONS @ 300 DPI
                </p>
                <div className="space-y-3">
                  {[
                    { size: '8×10"', px: "2400×3000 px" },
                    { size: '12×18"', px: "3600×5400 px" },
                    { size: "A4", px: "2480×3508 px" },
                    { size: '16×20"', px: "4800×6000 px" },
                    { size: '24×36"', px: "7200×10800 px" },
                    { size: "A1", px: "7016×9933 px" },
                  ].map((row, i) => (
                    <div
                      key={row.size}
                      className="flex items-center justify-between py-2"
                      style={{
                        borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      }}
                    >
                      <span
                        className="font-mono text-xs"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {row.size}
                      </span>
                      <span
                        className="font-mono text-xs font-semibold"
                        style={{ color: "#2DD4BF" }}
                      >
                        {row.px}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-5 text-xs font-mono"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  SnapToSize exports all of these automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">

        {/* ── SECTION 1: What does 300 DPI mean? ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What Does 300 DPI Mean for Etsy Prints?
          </h2>
          <p className="text-foreground-60 mb-4">
            DPI stands for <em>dots per inch</em> — the number of ink dots your printer lays down per inch of paper. At 300 DPI, each inch contains 300 pixels, which produces crisp edges, sharp text, and accurate color at typical viewing distances.
          </p>
          <p className="text-foreground-60 mb-4">
            The formula is simple: <strong>inches × 300 = pixels</strong>. An 8×10 print needs 2,400×3,000 pixels. A 12×18 needs 3,600×5,400. A 24×36 poster needs 7,200×10,800.
          </p>
          <p className="text-foreground-60">
            For Etsy sellers, 300 DPI is the industry standard buyers and professional print shops expect. Delivering anything lower risks bad reviews, refund requests, and listing takedowns for &quot;not as described.&quot; See the{" "}
            <Link href="/best-resolution-for-etsy-printables" className="text-accent underline hover:no-underline">
              best resolution for Etsy printables guide
            </Link>{" "}
            for a full comparison of 72 vs 150 vs 300 DPI.
          </p>
        </section>

        {/* ── SECTION 2: Complete pixel map (THE SIZE TABLE) ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Complete 300 DPI Pixel Dimensions — All Etsy Print Sizes
          </h2>
          <p className="text-foreground-60 mb-8">
            The table below covers every size in each{" "}
            <Link href="/etsy-print-ratios" className="text-accent underline hover:no-underline">
              Etsy print ratio pack
            </Link>
            . Sizes marked <span className="inline-block rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-accent">Popular</span> are the top sellers on Etsy.
          </p>

          <div className="space-y-8">
            {/* 2:3 Pack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground-60">2:3 ratio</span>
                Pack 1 — 2×3 Ratio
              </h3>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Size (inches)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Width (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Height (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { size: "4×6", w: 1200, h: 1800, popular: false },
                      { size: "6×9", w: 1800, h: 2700, popular: false },
                      { size: "8×12", w: 2400, h: 3600, popular: false },
                      { size: "10×15", w: 3000, h: 4500, popular: false },
                      { size: "12×18", w: 3600, h: 5400, popular: true },
                      { size: "16×24", w: 4800, h: 7200, popular: false },
                      { size: "20×30", w: 6000, h: 9000, popular: false },
                    ].map((row) => (
                      <tr key={row.size} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{row.size}&quot;</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.w.toLocaleString()}</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.h.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {row.popular && (
                            <span className="rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-accent">Popular</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3:4 Pack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground-60">3:4 ratio</span>
                Pack 2 — 3×4 Ratio
              </h3>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Size (inches)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Width (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Height (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { size: "6×8", w: 1800, h: 2400, popular: false },
                      { size: "9×12", w: 2700, h: 3600, popular: false },
                      { size: "12×16", w: 3600, h: 4800, popular: true },
                      { size: "15×20", w: 4500, h: 6000, popular: false },
                      { size: "18×24", w: 5400, h: 7200, popular: false },
                    ].map((row) => (
                      <tr key={row.size} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{row.size}&quot;</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.w.toLocaleString()}</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.h.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {row.popular && (
                            <span className="rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-accent">Popular</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4:5 Pack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground-60">4:5 ratio</span>
                Pack 3 — 4×5 Ratio
              </h3>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Size (inches)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Width (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Height (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { size: "8×10", w: 2400, h: 3000, popular: true },
                      { size: "12×15", w: 3600, h: 4500, popular: false },
                      { size: "16×20", w: 4800, h: 6000, popular: true },
                      { size: "20×25", w: 6000, h: 7500, popular: false },
                      { size: "24×30", w: 7200, h: 9000, popular: false },
                    ].map((row) => (
                      <tr key={row.size} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{row.size}&quot;</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.w.toLocaleString()}</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.h.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {row.popular && (
                            <span className="rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-accent">Popular</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-foreground-60">
                See the dedicated{" "}
                <Link href="/etsy-8x10-print-size" className="text-accent underline hover:no-underline">
                  8×10 print size guide
                </Link>{" "}
                for buyer framing tips and common questions.
              </p>
            </div>

            {/* ISO Pack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground-60">ISO A-series</span>
                Pack 4 — ISO A-Series (International)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Size</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Inches</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Width (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Height (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { size: "A5", inches: "5.83×8.27\"", w: 1748, h: 2480, popular: false },
                      { size: "A4", inches: "8.27×11.69\"", w: 2480, h: 3508, popular: true },
                      { size: "A3", inches: "11.69×16.54\"", w: 3508, h: 4961, popular: true },
                      { size: "A2", inches: "16.54×23.39\"", w: 4961, h: 7016, popular: false },
                      { size: "A1", inches: "23.39×33.11\"", w: 7016, h: 9933, popular: false },
                    ].map((row) => (
                      <tr key={row.size} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{row.size}</td>
                        <td className="px-4 py-3 text-foreground-60 text-xs">{row.inches}</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.w.toLocaleString()}</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.h.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {row.popular && (
                            <span className="rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-accent">Popular</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-foreground-60">
                ISO sizes serve European, Australian, and Asian buyers. See the{" "}
                <Link href="/etsy-a4-print-size" className="text-accent underline hover:no-underline">
                  A4 print size guide
                </Link>{" "}
                for country-specific framing and buyer FAQ.
              </p>
            </div>

            {/* Extras Pack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground-60">Extras</span>
                Pack 5 — Extras (US Standard & Specialty)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Size (inches)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Width (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60">Height (px)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground-60"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { size: "5×7", w: 1500, h: 2100, popular: true },
                      { size: "8.5×11", w: 2550, h: 3300, popular: true },
                      { size: "11×14", w: 3300, h: 4200, popular: true },
                      { size: "11×17", w: 3300, h: 5100, popular: false },
                      { size: "13×19", w: 3900, h: 5700, popular: false },
                      { size: "20×24", w: 6000, h: 7200, popular: false },
                    ].map((row) => (
                      <tr key={row.size} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{row.size}&quot;</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.w.toLocaleString()}</td>
                        <td className="px-4 py-3 font-mono text-foreground-60">{row.h.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {row.popular && (
                            <span className="rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-accent">Popular</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-foreground-60">
            All sizes are portrait (height &gt; width). Each file is also available in landscape orientation — doubling the total file count. Learn more about{" "}
            <Link href="/etsy-print-sizes" className="text-accent underline hover:no-underline">
              all Etsy print sizes
            </Link>{" "}
            and the{" "}
            <Link href="/etsy-print-ratios" className="text-accent underline hover:no-underline">
              ratio pack system
            </Link>
            .
          </p>
        </section>

        {/* ── CTA 1 — After size table ── */}
        <div className="mb-16">
          <ContextualCTA
            problem="Manual resizing means calculating these pixel numbers for every size, exporting each file individually, and checking every ZIP stays under 20MB."
            solution="Skip the math — SnapToSize exports 30+ sizes at 300 DPI automatically. One upload, all ratio packs, every ZIP under 20MB."
            appUrl={CTA_URL}
            buttonText="Try it free — no account needed"
          />
        </div>

        {/* ── ListingOutputShowcase ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            See What Buyers Actually Download
          </h2>
          <p className="text-foreground-60 mb-8">
            One upload — 30+ sizes across 5 ratio packs. Every file at 300 DPI, organized into ZIP files ready for Etsy upload.
          </p>
          <ListingOutputShowcase artwork="misty_lake" />
        </section>

        {/* ── SECTION 3: Why 300 DPI is the standard ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why 300 DPI Is the Print Standard
          </h2>
          <p className="text-foreground-60 mb-4">
            Most inkjet and laser printers are calibrated for 300 DPI input. Below this threshold, individual pixels become visible as a &quot;jagged&quot; or &quot;pixelated&quot; texture — most noticeable on text, fine lines, and high-contrast edges.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { dpi: "72 DPI", verdict: "Screen only", desc: "Looks fine on monitor. Blurry and blocky when printed. Never use for Etsy printables.", color: "border-red-400/40 bg-red-500/5" },
              { dpi: "150 DPI", verdict: "Not recommended for Etsy", desc: "Buyers printing at home may notice softness. Home inkjet printers expose low resolution on anything under A2. Risks negative reviews.", color: "border-yellow-400/40 bg-yellow-500/5" },
              { dpi: "300 DPI", verdict: "Etsy standard", desc: "Sharp, crisp, professional. The resolution buyers expect and printers prefer for all sizes.", color: "border-accent/40 bg-accent/5" },
            ].map((item) => (
              <div key={item.dpi} className={`rounded-xl border p-4 ${item.color}`}>
                <p className="text-2xl font-bold mb-1">{item.dpi}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-60 mb-2">{item.verdict}</p>
                <p className="text-sm text-foreground-60">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground-60">
            Bottom line: always deliver 300 DPI across all sizes — even small prints. Buyers print 5×7s on home inkjet printers that will expose every low-resolution pixel. One blurry print = one bad review.
          </p>
        </section>

        {/* ── SECTION 4: Large prints and the Etsy 20MB limit ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Large Prints at 300 DPI and the Etsy 20MB File Limit
          </h2>
          <p className="text-foreground-60 mb-4">
            Here&apos;s where Etsy sellers hit a wall:{" "}
            <Link href="/etsy-20mb-file-limit" className="text-accent underline hover:no-underline">
              Etsy limits each uploaded file to 20MB
            </Link>
            . A 24×36 at 300 DPI is 7,200×10,800 pixels — as a PNG, that can exceed 100MB. A1 (7,016×9,933 px) easily hits 60MB as PNG.
          </p>
          <p className="text-foreground-60 mb-4">
            The solution: <strong>export as high-quality JPEG instead of PNG.</strong> JPEG compresses dramatically without visible quality loss at print. A 24×36 JPEG at 300 DPI typically falls between 8–15MB — well inside Etsy&apos;s limit.
          </p>
          <div className="rounded-xl border border-border bg-muted/30 p-5 mb-4">
            <p className="text-sm font-semibold mb-3">JPEG file sizes at 300 DPI — all within Etsy&apos;s 20MB limit:</p>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-foreground-60 mb-2">
              <span>Size</span><span>JPEG at 300 DPI</span>
            </div>
            {[
              { size: '8×10"', jpg: "~3–5MB ✓" },
              { size: '12×18"', jpg: "~7–10MB ✓" },
              { size: '24×36"', jpg: "~10–16MB ✓" },
              { size: "A1", jpg: "~8–14MB ✓" },
            ].map((row) => (
              <div key={row.size} className="grid grid-cols-2 gap-2 text-xs border-t border-border py-2">
                <span className="font-medium">{row.size}</span>
                <span className="text-accent">{row.jpg}</span>
              </div>
            ))}
          </div>
          <p className="text-foreground-60 text-sm">
            JPEG at 90–95% quality is indistinguishable from lossless at print viewing distances. See our{" "}
            <Link href="/best-file-format-etsy-printables" className="text-accent underline hover:no-underline">
              best file format for Etsy printables guide
            </Link>{" "}
            for the full breakdown.
          </p>
          <p className="text-foreground-60 text-sm mt-3">
            Also see our{" "}
            <Link href="/etsy-digital-download-file-size" className="text-accent underline hover:no-underline">
              Etsy digital download file size guide
            </Link>{" "}
            — with a full JPEG vs PNG file size comparison table.
          </p>
        </section>

        {/* ── SECTION 5: Source resolution vs print resolution ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Source Resolution vs Print Resolution — Design Big, Export Smart
          </h2>
          <p className="text-foreground-60 mb-4">
            Your source file (the master PSD, AI, or PDF) should be as large as possible — 300 DPI at your largest intended print size. For a 24×36 poster, that means a 7,200×10,800 px source. This might be a 100MB+ PNG.
          </p>
          <p className="text-foreground-60 mb-4">
            At export, you scale down to each ratio size and save as JPEG. The result: 28 individual files, each under 20MB, all at 300 DPI from the same high-res source. No quality lost.
          </p>
          <p className="text-foreground-60">
            This is exactly what SnapToSize does automatically: takes your high-res upload and exports every size in every ratio pack at proper 300 DPI, as Etsy-ready JPEG ZIPs. See the full{" "}
            <Link href="/what-files-to-include-etsy-digital-download" className="text-accent underline hover:no-underline">
              guide on what files to include in Etsy digital downloads
            </Link>
            .
          </p>
        </section>

        {/* ── SECTION 6: JPEG vs PNG for Etsy ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            JPEG vs PNG at 300 DPI — Which Format for Etsy?
          </h2>
          <p className="text-foreground-60 mb-4">
            Both JPEG and PNG can carry 300 DPI metadata — but their file sizes differ dramatically at large print dimensions.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong>Use JPEG</strong> for all large sizes (12×18 and above, A3 and above). Same 300 DPI quality, fraction of the file size.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong>PNG is fine</strong> for small sizes (5×7, A5, 4×6) where file size stays under 20MB. Useful if your art has transparency or fine hairlines.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong>Never sell 72 DPI JPEG files</strong> — buyers will notice the blurriness the moment they print. Resolution metadata and actual pixel count must both be 300 DPI.
              </div>
            </li>
          </ul>
          <p className="text-foreground-60">
            See the{" "}
            <Link href="/best-file-format-etsy-printables" className="text-accent underline hover:no-underline">
              best file format for Etsy printables
            </Link>{" "}
            for a complete JPEG vs PNG comparison with real Etsy seller scenarios.
          </p>
        </section>

        {/* ── SECTION 7: How to check DPI ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to Check Your File Is 300 DPI Before Uploading
          </h2>
          <p className="text-foreground-60 mb-5">
            Different tools show DPI in different places. Here&apos;s where to look:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tool: "Photoshop",
                steps: ["Image → Image Size", "Check 'Resolution' field", "Must show: 300 pixels/inch", "If wrong: change resolution (no resample) first"],
              },
              {
                tool: "Canva",
                steps: ["File → Download", "Choose PDF Print or PNG", "DPI shown in the quality panel", "Always download at 'High quality'"],
              },
              {
                tool: "Affinity Designer / Photo",
                steps: ["File → Document Setup", "Check 'DPI' or 'PPI' field", "Should read 300", "Or check at export in the dialog"],
              },
            ].map((item) => (
              <div key={item.tool} className="rounded-xl border border-border bg-muted/20 p-4">
                <p className="font-semibold mb-3">{item.tool}</p>
                <ol className="space-y-1.5">
                  {item.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground-60">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ── Lifestyle image ── */}
        <section className="mb-16">
          <div className="relative aspect-[4/3] md:aspect-[16/7] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src="/assets/visuals/print-sizes-at-300-dpi-lifestyle.jpg"
              alt="Art prints in white frames on a light wall, showing different print sizes at 300 DPI"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          <p className="mt-3 text-xs text-center text-foreground-60">
            Professional wall art prints — all at 300 DPI, all delivered automatically by SnapToSize
          </p>
        </section>

        {/* ── FinalCTA before FAQ ── */}
        <div className="mb-16">
          <FinalCTA
            heading="Stop resizing manually. One upload, every Etsy size at 300 DPI."
            stat="30+ sizes · 5 ratio packs · all under 20MB"
            description="SnapToSize generates every size at correct 300 DPI from a single upload. No Photoshop, no manual exports — just ready-to-sell ZIP files for Etsy."
            buttonText="Generate all sizes free"
            appUrl={CTA_URL}
          />
        </div>

        {/* ── FAQ ── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion
            items={faqs.map((f) => ({ question: f.q, answer: f.a }))}
          />
        </section>

        {/* ── Related pages ── */}
        <RelatedPages currentSlug="print-sizes-at-300-dpi" />
      </div>
    </>
  );
}
