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
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Etsy Sticker Sheet Size: Exact Pixels & DPI Guide (2026)",
  description:
    'Standard Etsy sticker sheet sizes: 8.5×11" (2550×3300px), A4 (2480×3508px), 6×9" for Cricut. 300 DPI guide for print-ready sheets and digital planner stickers.',
  alternates: { canonical: "https://snaptosize.com/etsy-sticker-sheet-size" },
  openGraph: {
    title: "Etsy Sticker Sheet Size: Exact Pixels & DPI Guide | SnapToSize",
    description:
      'Standard Etsy sticker sheet sizes: 8.5×11" (2550×3300px), A4 (2480×3508px), 6×9" for Cricut. 300 DPI guide for print-ready sheets and digital planner stickers.',
    url: "https://snaptosize.com/etsy-sticker-sheet-size",
    images: [
      {
        url: "/assets/og/etsy-sticker-sheet-size.png",
        width: 1200,
        height: 630,
        alt: "Etsy Sticker Sheet Size — Exact Pixels & DPI Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Sticker Sheet Size: Exact Pixels & DPI Guide",
    description:
      '8.5×11" (2550×3300px), A4 (2480×3508px), 6×9" Cricut-friendly. Complete 300 DPI guide for Etsy sticker sellers.',
    images: ["/assets/og/etsy-sticker-sheet-size.png"],
  },
};

const appUrl = "https://app.snaptosize.com";

const faqItems = [
  {
    question: "What is the standard Etsy sticker sheet size?",
    answer:
      'The most common Etsy sticker sheet size is 8.5×11" (US Letter) at 300 DPI, which equals 2550×3300 pixels. This fits standard home printers and is the format most buyers expect. A4 (2480×3508 px) is preferred if you sell to European customers.',
  },
  {
    question: "What DPI should Etsy sticker sheets be?",
    answer:
      "Use 300 DPI for all print-ready sticker sheets. This ensures sharp edges, clear text, and accurate cut lines for Cricut and Silhouette machines. Digital stickers for planners (GoodNotes, Notability) can be 72–150 PPI since they are viewed on screen only.",
  },
  {
    question: "What is the maximum file size for Etsy digital downloads?",
    answer:
      "Etsy allows up to 20 MB per file and up to 5 files per listing. A single 300 DPI sticker sheet as a high-quality JPEG typically stays under 5 MB. PDF and PNG files can be larger — compress or split sheets if needed.",
  },
  {
    question: "What size should I use for Cricut Print & Cut sticker sheets?",
    answer:
      '6×9" (1800×2700 px at 300 DPI) is the safest Cricut-friendly sheet size. Cricut machines have a maximum print area of 9.25×6.75" — larger sheets will be cropped. Always use bleed and keep cut lines at least 0.125" from the sheet edge.',
  },
  {
    question: "Should sticker sheets be PNG or JPEG?",
    answer:
      "Use PNG with a transparent background for die-cut sticker files and digital planner stickers. Use JPEG or PDF for print-ready sheets where a white background is acceptable. Avoid TIFF for Etsy uploads — most buyers cannot open them without design software.",
  },
  {
    question: "Can I sell digital stickers and print-ready sheets in the same Etsy listing?",
    answer:
      "Yes. Etsy allows up to 5 files per listing, so you can include both a 300 DPI print-ready PDF and a lower-resolution PNG pack for digital planners. Clearly label each file in your listing description so buyers know which to use.",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Etsy Sticker Sheet Size: Exact Pixels & DPI Guide (2026)",
  description:
    'Standard Etsy sticker sheet sizes: 8.5×11" (2550×3300px), A4 (2480×3508px), 6×9" for Cricut. 300 DPI guide for print-ready sheets and digital planner stickers.',
  url: "https://snaptosize.com/etsy-sticker-sheet-size",
  author: {
    "@type": "Organization",
    name: "SnapToSize",
    url: "https://snaptosize.com",
  },
  publisher: {
    "@type": "Organization",
    name: "SnapToSize",
    url: "https://snaptosize.com",
  },
  datePublished: "2026-01-01",
  dateModified: "2026-04-10",
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
      name: "Etsy Sticker Sheet Size",
      item: "https://snaptosize.com/etsy-sticker-sheet-size",
    },
  ],
};

export default function EtSyStickerSheetSizePage() {
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
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.12] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #2dd4bf 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-[0.10] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
          }}
        />

        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-foreground-40 mb-6">
              <Link href="/" className="hover:text-foreground-60 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/etsy-print-sizes"
                className="hover:text-foreground-60 transition-colors"
              >
                Etsy Print Sizes
              </Link>
              <span>/</span>
              <span className="text-foreground-60">Sticker Sheet Size</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 text-teal-300 text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Sticker Sellers Guide
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Etsy Sticker Sheet Size:{" "}
              <span className="text-teal-300">Exact Pixels & DPI</span>
            </h1>

            <p className="text-lg text-foreground-60 mb-8 max-w-2xl mx-auto">
              The three standard sticker sheet sizes for Etsy — US Letter,
              A4, and Cricut-friendly 6×9 — with exact pixel dimensions,
              DPI requirements, and file format rules for both print-ready
              and digital planner stickers.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                "300 DPI for print",
                "Cricut & Silhouette ready",
                "20 MB Etsy limit",
                "PNG & PDF formats",
              ].map((pill) => (
                <span
                  key={pill}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-sm text-foreground-60 whitespace-nowrap"
                >
                  <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                  {pill}
                </span>
              ))}
            </div>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={appUrl}>
                <Button className="w-full sm:w-auto">
                  Resize Sticker Sheets Free
                </Button>
              </a>
              <a href="#sizes">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  See All Sizes →
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Quick Answer */}
            <QuickAnswer question="What is the standard Etsy sticker sheet size in pixels?">
              <strong>8.5×11" at 300 DPI = 2550×3300 pixels</strong> (US Letter) is the
              most common Etsy sticker sheet size. For European buyers, use A4 at 300 DPI
              = 2480×3508 pixels. For Cricut Print &amp; Cut, use 6×9" = 1800×2700
              pixels to stay within the 9.25×6.75" maximum print area.
            </QuickAnswer>

            {/* ===== STANDARD SIZES ===== */}
            <div id="sizes">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Standard Etsy Sticker Sheet Dimensions
              </h2>
              <p className="text-foreground-60 mb-6">
                Three sheet sizes cover 95% of Etsy sticker listings. Choose
                based on your target buyer and cutting machine compatibility.
              </p>

              {/* Size table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Sheet Size
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
                    <tr className="border-b border-white/10 bg-teal-400/[0.06]">
                      <td className="py-3 px-4 font-semibold">
                        8.5×11&rdquo;{" "}
                        <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">
                          Most popular
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550 × 3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US buyers, home printers, standard frames
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">A4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 × 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        European buyers, international listings
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-purple-400/[0.04]">
                      <td className="py-3 px-4 font-semibold">
                        6×9&rdquo;{" "}
                        <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-purple-400/10 text-purple-300/80 border border-purple-400/20">
                          Cricut-safe
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800 × 2700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Cricut &amp; Silhouette Print &amp; Cut
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">4×6&rdquo;</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1200 × 1800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small sticker packs, postcard-size sheets
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Individual size cards */}
              <div className="space-y-6">
                {/* 8.5x11 */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      8.5×11&rdquo; — US Letter (Most Common)
                    </h3>
                    <span className="px-2 py-1 rounded text-xs font-mono bg-teal-400/10 text-teal-300 border border-teal-400/20 whitespace-nowrap">
                      2550 × 3300 px
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm mb-3">
                    The standard US Letter size fits every home inkjet printer and
                    matches sticker paper sold at most craft stores. At 300 DPI,
                    sticker text stays sharp and cut lines are precise enough for
                    kiss-cut and die-cut sheets.
                  </p>
                  <ul className="space-y-1.5 text-sm text-foreground-60">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Fits Canon, Epson, and HP home printers at full bleed
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Compatible with most Etsy sticker paper templates
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Safe maximum for Silhouette Cameo (max printable: 8.5×10.75&rdquo;)
                    </li>
                  </ul>
                </div>

                {/* A4 */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      A4 — International Standard
                    </h3>
                    <span className="px-2 py-1 rounded text-xs font-mono bg-purple-400/10 text-purple-300 border border-purple-400/20 whitespace-nowrap">
                      2480 × 3508 px
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm mb-3">
                    A4 is the default paper size in Europe, Australia, and most
                    of Asia. If your Etsy shop ships or sells internationally, offering
                    an A4 version alongside Letter is a conversion advantage. A4 is
                    slightly narrower and taller than Letter (210×297 mm vs 216×279 mm).
                  </p>
                  <ul className="space-y-1.5 text-sm text-foreground-60">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      2480×3508 px at 300 DPI — exact A4 spec
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Slightly taller than US Letter — do not crop when converting
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Include both Letter and A4 in the same Etsy listing
                    </li>
                  </ul>
                </div>

                {/* 6x9 Cricut */}
                <div className="rounded-xl border border-purple-400/20 bg-purple-400/[0.03] p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      6×9&rdquo; — Cricut & Silhouette Print & Cut
                    </h3>
                    <span className="px-2 py-1 rounded text-xs font-mono bg-purple-400/10 text-purple-300 border border-purple-400/20 whitespace-nowrap">
                      1800 × 2700 px
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm mb-3">
                    Cricut Explore and Maker machines have a <strong className="text-white">
                    maximum print area of 9.25×6.75&rdquo;</strong> for Print &amp; Cut.
                    Uploading a full 8.5×11&rdquo; sheet will cause the machine to crop
                    your design. The 6×9&rdquo; format fits safely within this limit while
                    still providing ample space for multiple sticker rows.
                  </p>
                  <div className="flex gap-3 p-3 rounded-lg bg-amber-400/[0.06] border border-amber-400/20 mb-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-200/80">
                      <strong>Critical:</strong> Cricut max Print &amp; Cut = 9.25×6.75&rdquo;.
                      Always use 6×9&rdquo; landscape or portrait — never full Letter for
                      machine-cut listings.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-sm text-foreground-60">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Works with Cricut Explore Air 2, Maker, and Maker 3
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Compatible with Silhouette Cameo 4 and Portrait 3
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      Mention "Cricut-compatible" explicitly in your listing title
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== CTA 1 — ContextualCTA ===== */}
            <div className="pb-4">
              <ContextualCTA
                problem="Manually resizing sticker sheets for Letter, A4, and Cricut formats?"
                solution="Upload once — get all three sheet sizes at 300 DPI in seconds. No cropping, no manual math."
                buttonText="Resize Sticker Sheets Free"
                appUrl={appUrl}
              />
            </div>

            {/* ===== DIGITAL VS PRINT-READY ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Digital Stickers vs. Print-Ready Sheets
              </h2>
              <p className="text-foreground-60 mb-6">
                Not all sticker files are the same. Digital planner stickers
                (for GoodNotes, Notability, Goodnotes) have different
                requirements than print-ready sheets buyers will print at home.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Digital */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <h3 className="font-semibold text-teal-300 mb-3">
                    Digital Planner Stickers
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      72–150 PPI (screen resolution only)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      PNG with transparent background — required
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      Individual sticker PNGs or full sheets
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      sRGB color profile (iPad/tablet screens)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      Common apps: GoodNotes 5, Notability, Goodnotes 6
                    </li>
                  </ul>
                </div>

                {/* Print-ready */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <h3 className="font-semibold text-purple-300 mb-3">
                    Print-Ready Sticker Sheets
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      300 DPI minimum — mandatory for crisp print
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      PDF or high-quality JPEG (white background)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      PNG if transparent die-cut stickers
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      sRGB color profile — not CMYK
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      Include 0.125&rdquo; bleed for die-cut sheets
                    </li>
                  </ul>
                </div>
              </div>

              <Card className="p-5 border-purple-400/20 bg-purple-400/[0.04]">
                <p className="text-sm text-foreground-60">
                  <strong className="text-white">Pro tip:</strong> Include both file
                  types in a single Etsy listing — one 300 DPI PDF for print buyers
                  and one PNG pack for digital planner users. Etsy&apos;s 5-file limit
                  gives you room for Letter, A4, Cricut, and two digital PNG sheets
                  in one listing.
                </p>
              </Card>
            </div>

            {/* ===== DPI TABLE ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                DPI Comparison: Which Resolution Do You Need?
              </h2>
              <p className="text-foreground-60 mb-6">
                DPI (dots per inch) determines print sharpness. For sticker
                sheets, the difference between 72 and 300 DPI is visible —
                especially on small sticker text and thin cut lines.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">DPI</th>
                      <th className="text-left py-3 px-4 font-semibold">
                        8.5×11&rdquo; Pixels
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A4 Pixels
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-foreground-60">72</td>
                      <td className="py-3 px-4 text-foreground-60">612 × 792</td>
                      <td className="py-3 px-4 text-foreground-60">595 × 842</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Screen preview only — never for print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-foreground-60">
                        150
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1275 × 1650
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1240 × 1754
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Digital planner stickers (GoodNotes)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-teal-400/[0.06]">
                      <td className="py-3 px-4 font-semibold text-white">
                        300{" "}
                        <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">
                          Required
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550 × 3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 × 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        All print-ready &amp; Cricut sheets
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-foreground-60">
                        350
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2975 × 3850
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2894 × 4093
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Commercial print (specialty sticker printers)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm">
                Need to convert your sticker sheet to a different DPI? See our guide on{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-teal-300 hover:text-teal-200 underline underline-offset-2"
                >
                  best resolution for Etsy printables
                </Link>{" "}
                for a complete breakdown.
              </p>
            </div>

            {/* ===== ETSY UPLOAD REQUIREMENTS ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Etsy Upload Requirements for Sticker Sheets
              </h2>
              <p className="text-foreground-60 mb-6">
                Etsy imposes specific limits on digital download files. Sticker
                sheets — especially high-DPI sheets with many individual stickers
                — can easily exceed these limits if not optimized.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <div className="text-3xl font-bold text-teal-300 mb-1">20 MB</div>
                  <div className="text-sm font-medium text-white mb-1">
                    Max file size per file
                  </div>
                  <p className="text-foreground-60 text-sm">
                    A single 8.5×11&rdquo; sheet at 300 DPI as JPEG is usually 3–8 MB.
                    PNG files run larger — compress with TinyPNG or export at quality
                    85% to stay under the limit.
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <div className="text-3xl font-bold text-purple-300 mb-1">5 files</div>
                  <div className="text-sm font-medium text-white mb-1">
                    Max files per listing
                  </div>
                  <p className="text-foreground-60 text-sm">
                    Plan your file slots: Letter PDF + A4 PDF + Cricut PNG +
                    Digital PNG pack = 4 files. Leave one slot for a bonus
                    or alternative colorway.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Card className="p-5">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">PNG files are larger than JPEG</h3>
                      <p className="text-foreground-60 text-sm">
                        A 300 DPI PNG sticker sheet can exceed 20 MB easily. Export
                        print-ready sheets as PDF or JPEG. Reserve PNG only for
                        die-cut and digital planner files that require transparency.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Wrong color profile causes print color shifts
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Export all sticker files in <strong>sRGB</strong> color
                        profile. Adobe RGB and CMYK profiles display incorrectly on
                        most home printers and iPad screens. Check this in
                        Procreate, Canva, or Illustrator before export.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Uploading full Letter size for Cricut listings
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Cricut&apos;s Print &amp; Cut maximum is 9.25×6.75&rdquo;. A
                        full 8.5×11&rdquo; sheet will be cropped. Always include a
                        separate 6×9&rdquo; Cricut-safe version and label it clearly
                        in the filename (e.g., &ldquo;stickers-cricut-6x9.png&rdquo;).
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* ===== EMAIL CAPTURE (teal section) ===== */}
            <div className="rounded-2xl border border-teal-400/20 bg-teal-400/[0.04] p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-teal-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Get the Sticker Sheet Sizing Cheat Sheet
                  </h3>
                  <p className="text-foreground-60 text-sm mb-4">
                    All three formats (Letter, A4, Cricut), pixel dimensions,
                    DPI guide, and Etsy file limits — in a single printable
                    reference. Free for Etsy sellers.
                  </p>
                  <a href={appUrl}>
                    <Button variant="secondary">
                      Get the Free Cheat Sheet →
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== INTERNAL LINKS ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Related Etsy Size Guides
              </h2>
              <p className="text-foreground-60 mb-6">
                Sticker sheets are just one part of your Etsy digital product
                lineup. These guides cover the other common formats.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: "/best-resolution-for-etsy-printables",
                    title: "Best Resolution for Etsy Printables",
                    desc: "300 DPI deep dive — when it matters and when it doesn't",
                  },
                  {
                    href: "/etsy-a4-print-size",
                    title: "Etsy A4 Print Size Guide",
                    desc: "Exact pixels at 300 DPI, Letter vs A4 comparison",
                  },
                  {
                    href: "/etsy-listing-photo-size",
                    title: "Etsy Listing Photo Size",
                    desc: "Thumbnail and mockup dimensions for sticker listings",
                  },
                  {
                    href: "/how-to-resize-images-for-etsy",
                    title: "How to Resize Images for Etsy",
                    desc: "Step-by-step for converting any file to the right size",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex flex-col gap-1 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 hover:border-teal-400/30 hover:bg-teal-400/[0.03] transition-all"
                  >
                    <span className="font-medium text-white group-hover:text-teal-300 transition-colors text-sm">
                      {link.title}
                    </span>
                    <span className="text-xs text-foreground-60">{link.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ===== EmailCapture ===== */}
            <EmailCapture />

            {/* ===== CTA 3 — FinalCTA ===== */}
            <div>
              <FinalCTA
                heading="Get All Three Sticker Sheet Sizes in One Click"
                stat="Letter, A4 & Cricut-safe from a single upload"
                description="Upload your sticker sheet artwork once and instantly receive 8.5×11&quot;, A4, and 6×9&quot; Cricut-safe versions at 300 DPI. No manual resizing, no cropping, no guesswork."
                buttonText="Start Free — Resize Sticker Sheets Now"
                appUrl={appUrl}
              />
            </div>

            {/* ===== FAQ ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-sticker-sheet-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
