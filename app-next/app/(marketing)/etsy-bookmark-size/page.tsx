import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Etsy Bookmark Size: Exact Dimensions & Pixels (2026)",
  description:
    'Standard Etsy bookmark sizes: 2×6" (600×1800px at 300 DPI), 2×7", 2×8.5". Print-ready guide for Etsy sellers — pixels, DPI, file format, and layout tips.',
  alternates: { canonical: "https://snaptosize.com/etsy-bookmark-size" },
  openGraph: {
    title: "Etsy Bookmark Size: Exact Dimensions & Pixels | SnapToSize",
    description:
      'Standard Etsy bookmark sizes: 2×6" (600×1800px at 300 DPI), 2×7", 2×8.5". Print-ready guide for Etsy sellers.',
    url: "https://snaptosize.com/etsy-bookmark-size",
    images: [
      {
        url: "/assets/og/etsy-bookmark-size.png",
        width: 1200,
        height: 630,
        alt: "Etsy Bookmark Size — Exact Dimensions & Pixels at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Bookmark Size: Exact Dimensions & Pixels (2026)",
    description:
      'Standard Etsy bookmark sizes: 2×6" (600×1800px), 2×7", 2×8.5". Print-ready guide for Etsy sellers.',
    images: ["/assets/og/etsy-bookmark-size.png"],
  },
};

const APP_URL = "https://app.snaptosize.com";

export default function EtsyBookmarkSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Bookmark Size: Exact Dimensions & Pixels (2026)",
    description:
      'Standard Etsy bookmark sizes: 2×6" (600×1800px at 300 DPI), 2×7", 2×8.5". Print-ready guide for Etsy sellers — pixels, DPI, file format, and layout tips.',
    url: "https://snaptosize.com/etsy-bookmark-size",
    datePublished: "2026-04-10",
    dateModified: "2026-04-10",
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
        name: "Etsy Bookmark Size",
        item: "https://snaptosize.com/etsy-bookmark-size",
      },
    ],
  };

  const faqItems = [
    {
      question: "What is the standard bookmark size for Etsy printables?",
      answer: [
        '2×6 inches (600×1800 pixels at 300 DPI) is the most popular standard Etsy bookmark size. It fits standard bookmark sleeves and protective pouches sold on Amazon and craft stores.',
        'If you want a slightly longer bookmark, 2×7" (600×2100 px) is common for fiction and children\'s books. For oversized or decorative bookmarks, 2×8.5" (600×2550 px) works well.',
      ],
    },
    {
      question: "How many pixels should a bookmark be at 300 DPI?",
      answer: [
        'At 300 DPI (print-quality resolution), the pixel dimensions are: 2×6" = 600×1800 px, 2×7" = 600×2100 px, and 2×8.5" = 600×2550 px.',
        "Always design at 300 DPI minimum for sharp, professional results. If you design at 72 DPI, the bookmark will look pixelated and blurry when printed.",
      ],
    },
    {
      question: "Should I save my bookmark as PNG or PDF for Etsy?",
      answer: [
        "Use PNG with transparent background if your design has die-cut edges, rounded corners, or decorative shapes — the transparency preserves clean edges when printed.",
        "Use PDF for ready-to-print layouts, especially if you include multiple bookmarks on a single A4 or Letter sheet. Most print shops accept both formats, but PDF is preferred for professional printing.",
      ],
    },
    {
      question: "What are bleed margins for bookmarks?",
      answer: [
        "Add 0.125 inches (3mm) bleed on all four sides if you plan to submit your file to a print shop or offer a print-ready version. This means a 2×6\" bookmark becomes 2.25×6.25\" with bleeds.",
        "Bleed prevents white edges appearing after trimming. For home printing, bleed is optional but still recommended for a clean cut.",
      ],
    },
    {
      question: "How do I fit multiple bookmarks on one sheet?",
      answer: [
        "Four 2×6\" bookmarks fit perfectly on a single A4 sheet (8.27×11.69\") arranged in two columns side by side with minimal margin. This is called a 4-up layout.",
        "For US Letter paper (8.5×11\"), four 2×7\" bookmarks also fit comfortably in a 2-column layout. A 4-up PDF saves paper and looks professional — customers print the full sheet and cut along guides.",
      ],
    },
    {
      question: "What aspect ratio are bookmarks?",
      answer: [
        '2×6" bookmarks have a 1:3 aspect ratio. 2×7" is 2:7, and 2×8.5" is approximately 1:4.25. These tall, narrow proportions distinguish bookmarks from standard print sizes.',
        "When resizing in SnapToSize, you can enter custom dimensions directly so the aspect ratio is maintained precisely for each bookmark variant.",
      ],
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
        text: Array.isArray(item.answer)
          ? item.answer.join(" ")
          : item.answer,
      },
    })),
  };

  return (
    <>
      {/* ===== JSON-LD ===== */}
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
        className="relative py-20 md:py-28 overflow-hidden"
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
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #2DD4BF, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
        />

        <Container><div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs text-foreground-60 mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/etsy-print-sizes"
                className="hover:text-foreground transition-colors"
              >
                Print Sizes
              </Link>
              <span>/</span>
              <span className="text-foreground">Bookmark Size</span>
            </nav>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {[
                "300 DPI Ready",
                "PNG & PDF",
                "4-Up Layout Tips",
                "Bleed Margins",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/[0.10] bg-white/[0.04] text-foreground-60"
                >
                  <Check className="h-3 w-3 text-teal-400" />
                  {pill}
                </span>
              ))}
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Etsy Bookmark Size:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#a78bfa]">
                Exact Dimensions & Pixels
              </span>
            </h1>

            <p className="text-lg text-foreground-60 mb-8 max-w-2xl mx-auto">
              Standard Etsy bookmark sizes are{" "}
              <strong className="text-foreground">2×6&quot;</strong> (600×1800 px),{" "}
              <strong className="text-foreground">2×7&quot;</strong> (600×2100 px), and{" "}
              <strong className="text-foreground">2×8.5&quot;</strong> (600×2550 px) — all
              at 300 DPI. This guide covers pixels, DPI, file format, bleed
              margins, and how to fit 4 bookmarks per sheet.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-7 py-3">
                  Resize for Bookmarks Free
                </Button>
              </a>
              <a
                href="/etsy-print-sizes"
                className="text-sm text-foreground-60 hover:text-foreground transition-colors underline underline-offset-4"
              >
                See all print sizes →
              </a>
            </div>
          </div>
        </div></Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="py-16 md:py-20"><Container><div className="space-y-16">
        {/* Quick Answer */}
        <QuickAnswer question="What size should Etsy bookmarks be?">
          The standard Etsy bookmark size is <strong>2×6 inches</strong> (600×1800 px at
          300 DPI). For longer bookmarks, use 2×7&quot; (600×2100 px) or 2×8.5&quot; (600×2550 px).
          Save as PNG with transparent background for die-cut designs, or PDF for
          ready-to-print sheet layouts.
        </QuickAnswer>

        {/* Intro */}
        <section className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Standard Etsy Bookmark Dimensions
          </h2>
          <p className="text-foreground-60 mb-4">
            Printable bookmarks are one of the best-selling digital download
            categories on Etsy — low production cost, fast to create, and easy to
            upsell as sets. Getting the dimensions exactly right ensures your
            buyers can print and cut clean results at home or at a print shop.
          </p>
          <p className="text-foreground-60 mb-4">
            The most popular size is <strong className="text-foreground">2×6 inches</strong>,
            which fits standard bookmark sleeves and protective pouches. At 300 DPI,
            that&apos;s <strong className="text-foreground">600×1800 pixels</strong> — a tall,
            narrow file that&apos;s easy to design in Canva, Photoshop, or Illustrator.
          </p>
          <p className="text-foreground-60">
            Metric equivalent: <strong className="text-foreground">51×152 mm</strong>. This
            is the same width as a standard bookmark sleeve found on Etsy and Amazon.
          </p>
        </section>

        {/* Size comparison table */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Bookmark Size Comparison Table
          </h2>
          <p className="text-foreground-60 mb-6">
            All three standard bookmark sizes compared — pixels at 300 DPI, metric
            dimensions, and best use cases.
          </p>
          <div className="rounded-xl overflow-hidden border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{ background: "rgba(255,255,255,0.04)" }}
                  className="border-b border-white/[0.08]"
                >
                  <th className="text-left px-4 py-3 font-semibold">Size</th>
                  <th className="text-left px-4 py-3 font-semibold">
                    Pixels (300 DPI)
                  </th>
                  <th className="text-left px-4 py-3 font-semibold">Metric</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    size: '2×6"',
                    pixels: "600×1800 px",
                    metric: "51×152 mm",
                    use: "Standard — fits bookmark sleeves",
                    highlight: true,
                  },
                  {
                    size: '2×7"',
                    pixels: "600×2100 px",
                    metric: "51×178 mm",
                    use: "Fiction & children's books",
                    highlight: false,
                  },
                  {
                    size: '2×8.5"',
                    pixels: "600×2550 px",
                    metric: "51×216 mm",
                    use: "Oversized & decorative",
                    highlight: false,
                  },
                ].map((row) => (
                  <tr
                    key={row.size}
                    className={`border-b border-white/[0.06] last:border-0 ${
                      row.highlight ? "bg-teal-500/[0.06]" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-mono font-semibold">
                      {row.size}
                      {row.highlight && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-sans">
                          Most popular
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono text-teal-300">
                      {row.pixels}
                    </td>
                    <td className="px-4 py-3 text-foreground-60">{row.metric}</td>
                    <td className="px-4 py-3 text-foreground-60 hidden md:table-cell">
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Inline CTA #1 — ContextualCTA */}
        <ContextualCTA
          problem="Designing at the wrong resolution means blurry prints — and unhappy buyers leaving bad reviews."
          solution="SnapToSize resizes your bookmark artwork to exactly 600×1800 px (or any bookmark size) at 300 DPI in one click."
          appUrl={APP_URL}
          buttonText="Resize My Bookmark File"
        />

        {/* DPI comparison table */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            DPI Comparison for Bookmarks
          </h2>
          <p className="text-foreground-60 mb-6">
            DPI (dots per inch) determines print sharpness. The table below shows
            pixel dimensions for a standard 2×6&quot; bookmark at three common
            resolutions.
          </p>
          <div className="rounded-xl overflow-hidden border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{ background: "rgba(255,255,255,0.04)" }}
                  className="border-b border-white/[0.08]"
                >
                  <th className="text-left px-4 py-3 font-semibold">DPI</th>
                  <th className="text-left px-4 py-3 font-semibold">
                    2×6&quot; Pixels
                  </th>
                  <th className="text-left px-4 py-3 font-semibold">
                    2×7&quot; Pixels
                  </th>
                  <th className="text-left px-4 py-3 font-semibold">
                    2×8.5&quot; Pixels
                  </th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">
                    Quality
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dpi: "72 DPI",
                    s1: "144×432",
                    s2: "144×504",
                    s3: "144×612",
                    quality: "Screen only — blurry if printed",
                    highlight: false,
                  },
                  {
                    dpi: "150 DPI",
                    s1: "300×900",
                    s2: "300×1050",
                    s3: "300×1275",
                    quality: "Acceptable for small prints",
                    highlight: false,
                  },
                  {
                    dpi: "300 DPI",
                    s1: "600×1800",
                    s2: "600×2100",
                    s3: "600×2550",
                    quality: "Print-quality — sharp results",
                    highlight: true,
                  },
                ].map((row) => (
                  <tr
                    key={row.dpi}
                    className={`border-b border-white/[0.06] last:border-0 ${
                      row.highlight ? "bg-teal-500/[0.06]" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-mono font-semibold">
                      {row.dpi}
                      {row.highlight && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-sans">
                          Recommended
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono text-teal-300">{row.s1} px</td>
                    <td className="px-4 py-3 font-mono text-foreground-60">
                      {row.s2} px
                    </td>
                    <td className="px-4 py-3 font-mono text-foreground-60">
                      {row.s3} px
                    </td>
                    <td className="px-4 py-3 text-foreground-60 hidden md:table-cell">
                      {row.quality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Layout tips — 4-up */}
        <section className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            4-Up Layout: Fit 4 Bookmarks Per Sheet
          </h2>
          <p className="text-foreground-60 mb-4">
            One of the most popular Etsy bookmark listing formats is a{" "}
            <strong className="text-foreground">4-up PDF</strong> — four bookmarks
            arranged on a single A4 or US Letter sheet. Customers print the sheet,
            then cut along trim guides.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="p-5">
              <h3 className="font-semibold mb-2">A4 Sheet (8.27×11.69&quot;)</h3>
              <ul className="space-y-1 text-sm text-foreground-60">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                  Four 2×6&quot; bookmarks — 2 columns × 2 rows
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                  Small gap remaining for trim marks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                  Common in Europe &amp; international shops
                </li>
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-2">US Letter (8.5×11&quot;)</h3>
              <ul className="space-y-1 text-sm text-foreground-60">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                  Four 2×5.25&quot; or 2×5.5&quot; bookmarks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                  Standard for US buyers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                  Offer both formats to maximise reach
                </li>
              </ul>
            </Card>
          </div>
          <p className="text-foreground-60 text-sm">
            Tip: include cut guide lines in your PDF design so buyers know exactly
            where to trim. Dashed lines at 0.125&quot; inside the bookmark edge work
            well.
          </p>
        </section>

        {/* File format section */}
        <section className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            File Format: PNG vs PDF for Etsy Bookmarks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5 border-l-2 border-l-[#2DD4BF]">
              <h3 className="font-semibold mb-3 text-teal-300">PNG (Recommended for individual files)</h3>
              <ul className="space-y-2 text-sm text-foreground-60">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Transparent background for die-cut shapes
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Lossless quality — no compression artefacts
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Works with most home printers and print shops
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Save at 300 DPI, sRGB colour space
                </li>
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-3">PDF (Best for sheet layouts)</h3>
              <ul className="space-y-2 text-sm text-foreground-60">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Contains multiple bookmarks on one sheet
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Preferred by print shops and Staples/Officeworks
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Embeds fonts so text renders perfectly
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  Export as PDF/X-1a for professional printing
                </li>
              </ul>
            </Card>
          </div>
          <p className="text-foreground-60 text-sm mt-4">
            Best practice: include <strong className="text-foreground">both PNG and PDF</strong> in
            your Etsy listing ZIP. PNG for buyers who want to print a single bookmark, PDF
            for buyers who want the full-sheet layout.
          </p>
        </section>

        {/* Bleed margins */}
        <section className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bleed Margins for Print-Ready Bookmarks
          </h2>
          <p className="text-foreground-60 mb-4">
            If you offer a print-ready file (or plan to use a print-on-demand
            service), add <strong className="text-foreground">0.125&quot; (3mm) bleed</strong> on
            all four sides. This prevents white edges from appearing after the
            bookmark is trimmed.
          </p>
          <div className="rounded-xl border border-white/[0.08] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{ background: "rgba(255,255,255,0.04)" }}
                  className="border-b border-white/[0.08]"
                >
                  <th className="text-left px-4 py-3 font-semibold">Bookmark Size</th>
                  <th className="text-left px-4 py-3 font-semibold">With 0.125&quot; Bleed</th>
                  <th className="text-left px-4 py-3 font-semibold">Pixels (300 DPI)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { base: '2×6"', bleed: '2.25×6.25"', px: "675×1875 px" },
                  { base: '2×7"', bleed: '2.25×7.25"', px: "675×2175 px" },
                  { base: '2×8.5"', bleed: '2.25×8.75"', px: "675×2625 px" },
                ].map((row) => (
                  <tr
                    key={row.base}
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    <td className="px-4 py-3 font-mono">{row.base}</td>
                    <td className="px-4 py-3 font-mono text-teal-300">{row.bleed}</td>
                    <td className="px-4 py-3 font-mono text-foreground-60">{row.px}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-foreground-60 text-sm mt-4">
            Keep all text and important design elements at least{" "}
            <strong className="text-foreground">0.125&quot; (3mm) inside</strong> the trim
            line (safety margin). Background colours and patterns should extend fully
            into the bleed area.
          </p>
        </section>

        {/* Internal links section */}
        <section className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Related Size Guides
          </h2>
          <p className="text-foreground-60 mb-6">
            Bookmarks are just one of many Etsy printable formats. These guides
            cover other popular sizes and resolution requirements.
          </p>
          <ul className="space-y-3 text-sm">
            {[
              {
                href: "/best-resolution-for-etsy-printables",
                title: "Best Resolution for Etsy Printables",
                desc: "Why 300 DPI is the standard and when 150 DPI is acceptable.",
              },
              {
                href: "/etsy-a4-print-size",
                title: "Etsy A4 Print Size Guide",
                desc: "A4 dimensions, pixels at 300 DPI, and tips for European markets.",
              },
              {
                href: "/etsy-sticker-sheet-size",
                title: "Etsy Sticker Sheet Size",
                desc: "Standard sticker sheet dimensions for Etsy digital downloads.",
              },
              {
                href: "/how-to-resize-images-for-etsy",
                title: "How to Resize Images for Etsy",
                desc: "Step-by-step guide to resizing any image to print-ready dimensions.",
              },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                >
                  <span className="text-teal-400 mt-0.5">→</span>
                  <span>
                    <span className="font-medium group-hover:text-teal-300 transition-colors">
                      {link.title}
                    </span>
                    <span className="block text-foreground-60 text-xs mt-0.5">
                      {link.desc}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* EmailCapture CTA */}
        <EmailCapture />

        {/* FinalCTA before FAQ */}
        <div className="max-w-2xl mx-auto">
          <FinalCTA
            heading="Get Your Bookmark Files Print-Ready"
            stat="600×1800 px · 300 DPI · PNG or PDF"
            description="Upload your bookmark design and SnapToSize outputs the exact pixel dimensions you need — no Photoshop required."
            buttonText="Resize Bookmark Free"
            appUrl={APP_URL}
          />
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Related Pages */}
        <RelatedPages currentSlug="etsy-bookmark-size" />
      </div></Container></div>
    </>
  );
}
