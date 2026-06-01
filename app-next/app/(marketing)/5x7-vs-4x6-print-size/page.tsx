import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { Check, ArrowRight, Ruler } from "lucide-react";

const CTA_URL =
  "https://app.snaptosize.com?source=seo_5x7-vs-4x6-print-size&kind=guide";

const SLUG = "5x7-vs-4x6-print-size";

export const metadata: Metadata = {
  title: "5×7 vs 4×6 Print Size — Which Is Bigger and What Are the Pixels?",
  description:
    "5×7 is 46% larger than 4×6. See exact pixel dimensions at 300 DPI for both sizes, which sells better on Etsy, and why they need separate files to avoid cropping.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "5×7 vs 4×6 Print Size — Which Is Bigger and What Are the Pixels?",
    description:
      "5×7 is 46% larger than 4×6. Exact pixel dimensions at 300 DPI, Etsy selling guide, and how to export both without cropping.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: ["/assets/og/5x7-vs-4x6-print-size.png"],
    modifiedTime: "2026-05-30T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "5×7 vs 4×6 Print Size — Which Is Bigger and What Are the Pixels?",
    description:
      "5×7 is 46% larger than 4×6. Exact pixel dimensions at 300 DPI for Etsy digital prints.",
    images: ["/assets/og/5x7-vs-4x6-print-size.png"],
  },
};

const sizeTable = [
  {
    label: "4×6 (portrait)",
    inches: '4×6"',
    ratio: "2:3",
    pixels: "1200×1800",
    area: "24 sq in",
    pack: "2:3 Pack",
    inPack: true,
  },
  {
    label: "4×6 (landscape)",
    inches: '6×4"',
    ratio: "3:2",
    pixels: "1800×1200",
    area: "24 sq in",
    pack: "2:3 Pack",
    inPack: true,
  },
  {
    label: "5×7 (portrait)",
    inches: '5×7"',
    ratio: "5:7",
    pixels: "1500×2100",
    area: "35 sq in",
    pack: "Single Export",
    inPack: false,
  },
  {
    label: "5×7 (landscape)",
    inches: '7×5"',
    ratio: "7:5",
    pixels: "2100×1500",
    area: "35 sq in",
    pack: "Single Export",
    inPack: false,
  },
];

const faqs = [
  {
    question: "Is 5×7 bigger than 4×6?",
    answer:
      "Yes. A 5×7 print is 35 square inches vs 24 square inches for 4×6, about 46% more surface area. In practice, 5×7 is noticeably larger: it fits better on a desk stand or mid-wall display, while 4×6 is a compact snapshot size.",
  },
  {
    question: "What are the pixel dimensions for 4×6 and 5×7 at 300 DPI?",
    answer:
      "At 300 DPI: a 4×6 print requires 1200×1800 pixels (portrait) or 1800×1200 pixels (landscape). A 5×7 print requires 1500×2100 pixels (portrait) or 2100×1500 pixels (landscape). These are the minimum dimensions for Etsy-quality printable files.",
  },
  {
    question: "Can I use the same file for both 4×6 and 5×7?",
    answer:
      "No. They have different aspect ratios: 4×6 is 2:3 and 5×7 is 5:7. Scaling a 2:3 file to fill a 5:7 space will either crop part of your artwork or leave white bars on the sides. You need two separate exports: one at 1200×1800 px and one at 1500×2100 px.",
  },
  {
    question: "Does SnapToSize generate 5×7 files?",
    answer:
      "Yes. Use the Single Export option and select 5×7, or add it to a custom pack. The 4×6 size is auto-included in the standard 2:3 ratio pack (which also generates 8×12, 12×18, 16×24, and more from one upload). For 5×7, use a single export or build a custom saved pack that includes both sizes.",
  },
  {
    question: "Which sells better on Etsy: 4×6 or 5×7?",
    answer:
      "Both are consistently top-selling Etsy digital print sizes. 4×6 drives more impulse purchases due to its standard photo print size; buyers can print at any drugstore. 5×7 is popular for wall art, greeting-card-sized displays, and desk frames. Offering both in one listing maximizes reach. Most successful Etsy print sellers include 4×6, 5×7, and at least one larger size like 8×10 or 8×12.",
  },
  {
    question: "What frame fits a 5×7 print?",
    answer:
      "Any frame labeled 5×7 inches — widely available at IKEA (Ribba 5×7), Target, Walmart, and Amazon. The 5×7 IKEA Ribba frame uses the same 5:7 aspect ratio. If you're creating prints for IKEA Ribba frames, the 5×7 and 20×28 Ribba sizes both use a 5:7 ratio.",
  },
  {
    question: "What is the aspect ratio of 5×7 and 4×6?",
    answer:
      "4×6 is a 2:3 ratio (the same as most digital camera sensors, which is why 4×6 photo prints require no cropping). 5×7 is a 5:7 ratio, which doesn't match most camera sensors, so converting from a 2:3 file always requires cropping or letterboxing. For Etsy listings, always export each size at its correct native ratio.",
  },
];

export default function FiveBySevenVsFourBySixPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "5×7 vs 4×6 Print Size: Which Is Bigger, Exact Pixels at 300 DPI, and Etsy Selling Guide",
    description:
      "Complete comparison of 5×7 and 4×6 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, which sells better on Etsy, and how to export both without cropping.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
      logo: {
        "@type": "ImageObject",
        url: "https://snaptosize.com/logo.png",
      },
    },
    image: `https://snaptosize.com/assets/og/${SLUG}.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://snaptosize.com/${SLUG}`,
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
        name: "5×7 vs 4×6 Print Size",
        item: `https://snaptosize.com/${SLUG}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {/* JSON-LD */}
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

      <AuthorByline lastUpdated="May 30, 2026" />

      {/* ===== HERO ===== */}
      <section
        className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f0fdf9 0%, #f8faff 50%, #fdf4ff 100%)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(45,212,191,0.06) 39px, rgba(45,212,191,0.06) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(45,212,191,0.06) 39px, rgba(45,212,191,0.06) 40px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Blob accents */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative container mx-auto px-4 md:px-8 max-w-[1200px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/etsy-print-sizes"
              className="hover:text-slate-600 transition-colors"
            >
              Etsy Print Sizes
            </Link>
            <span>/</span>
            <span className="text-slate-600">5×7 vs 4×6</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-xs font-semibold tracking-wide uppercase"
                style={{ background: "rgba(45,212,191,0.12)", color: "#0f766e" }}
              >
                <Ruler className="w-3.5 h-3.5" />
                Size Comparison
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                5×7 vs 4×6 Print Size:{" "}
                <span style={{ color: "#2DD4BF" }}>Which Is Bigger</span> and
                What Are the Pixels?
              </h1>

              <p
                className="text-lg text-slate-600 leading-relaxed mb-8"
                style={{ maxWidth: "42rem" }}
              >
                5×7 is 46% larger than 4×6, but they use different aspect
                ratios, so the same file doesn&apos;t work for both. Here are
                exact pixel dimensions at 300 DPI, which sells better on Etsy,
                and how to export both from one upload.
              </p>

              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border mb-8"
                style={{
                  background: "rgba(45,212,191,0.08)",
                  borderColor: "rgba(45,212,191,0.25)",
                }}
              >
                <Check className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  4×6 is auto-covered by the 2:3 pack. 5×7 exports in one click
                  via Single Export.
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Export Both Sizes Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: visual size comparison */}
            <div className="flex items-end justify-center gap-8 pt-8 pb-4">
              {/* 4×6 block */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-lg border-2 flex items-center justify-center"
                  style={{
                    width: 96,
                    height: 144,
                    borderColor: "rgba(45,212,191,0.5)",
                    background: "rgba(45,212,191,0.07)",
                  }}
                >
                  <span className="text-xs font-semibold text-teal-700 text-center leading-tight px-2">
                    4×6
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-800">4×6&quot;</p>
                  <p className="text-xs text-slate-500">1200×1800 px</p>
                  <p className="text-xs text-slate-400">24 sq in</p>
                </div>
              </div>

              {/* vs label */}
              <div className="pb-16 text-slate-400 font-medium text-sm">vs</div>

              {/* 5×7 block */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-lg border-2 flex items-center justify-center"
                  style={{
                    width: 120,
                    height: 168,
                    borderColor: "rgba(167,139,250,0.6)",
                    background: "rgba(167,139,250,0.08)",
                  }}
                >
                  <span className="text-xs font-semibold text-purple-700 text-center leading-tight px-2">
                    5×7
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-800">5×7&quot;</p>
                  <p className="text-xs text-slate-500">1500×2100 px</p>
                  <p className="text-xs text-slate-400">35 sq in · 46% larger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">
        {/* QuickAnswer */}
        <QuickAnswer question="Which is bigger: 5×7 or 4×6?">
          5×7 is bigger. A 5×7 print is 35 square inches; a 4×6 is 24 square
          inches, giving 5×7 46% more surface area. At 300 DPI: 4×6 requires
          1200×1800 pixels and 5×7 requires 1500×2100 pixels. They have
          different aspect ratios (2:3 vs 5:7) so you need separate files;
          one size cannot be cropped from the other without losing part of your
          artwork.
        </QuickAnswer>

        {/* SECTION 1: Size chart */}
        <section className="mb-16 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            4×6 and 5×7 Pixel Dimensions at 300 DPI
          </h2>
          <p className="text-slate-500 mb-6 text-sm">
            Portrait and landscape both listed. SnapToSize generates all
            orientations automatically from one upload.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Inches
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Ratio
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Pixels at 300 DPI
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Area
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    SnapToSize
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeTable.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3.5 font-medium text-slate-800">
                      {row.label}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 font-mono text-xs">
                      {row.inches}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 font-mono text-xs">
                      {row.ratio}
                    </td>
                    <td className="px-4 py-3.5 text-slate-800 font-semibold font-mono text-xs">
                      {row.pixels}
                    </td>
                    <td className="px-4 py-3.5 text-slate-500 text-xs">
                      {row.area}
                    </td>
                    <td className="px-4 py-3.5">
                      {row.inPack ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                          {row.pack}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400">
                          {row.pack}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            300 DPI is the Etsy standard for sharp printable files. Pixel
            dimensions scale linearly with DPI: 150 DPI = half the pixels.
          </p>
        </section>

        {/* SECTION 2: Why they can't share a file */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why You Need Separate Files for 4×6 and 5×7
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            4×6 is a 2:3 ratio (width to height). 5×7 is a 5:7 ratio. Those
            look close, but they aren&apos;t interchangeable. If you take a 1200×1800
            px file (4×6) and try to fit it into a 5×7 space, something has to
            give: either you crop the top and bottom of your artwork, or you add
            white bars on the sides.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For Etsy digital art (wall art, quote prints, portraits especially),
            cropping is not acceptable. A seller who uploads once
            and then crops the 5×7 version will end up with a file that cuts off
            the composition. Buyers notice, and reviews suffer.
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              The ratio difference, visualized:
            </p>
            <div className="flex items-end gap-6">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="rounded border-2"
                  style={{
                    width: 60,
                    height: 90,
                    borderColor: "#2DD4BF",
                    background: "rgba(45,212,191,0.08)",
                  }}
                />
                <span className="text-xs text-slate-500">4×6 (2:3)</span>
              </div>
              <div className="pb-8 text-slate-400 text-lg font-light">&ne;</div>
              <div className="flex flex-col items-center gap-2">
                <div
                  className="rounded border-2"
                  style={{
                    width: 60,
                    height: 84,
                    borderColor: "#A78BFA",
                    background: "rgba(167,139,250,0.08)",
                  }}
                />
                <span className="text-xs text-slate-500">5×7 (5:7)</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs pb-2">
                The height difference is small but real. Cropping a 2:3 file to
                5:7 removes about 4% from the top and bottom of your artwork.
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            The correct approach: export each size at its own ratio from the
            same source image. SnapToSize does this automatically: upload once,
            and the tool generates both a 1200×1800 px (4×6) and a 1500×2100 px
            (5×7) file, both with the full composition preserved and zero
            cropping.
          </p>
        </section>

        {/* SECTION 3: Which sells better */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Which Sells Better on Etsy: 4×6 or 5×7?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Both are consistently top sellers. The difference is buyer intent:
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div className="rounded-xl border border-slate-200 p-5 bg-white">
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "#0f766e" }}
              >
                4×6 buyers
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Want a compact display print: desk frames, fridge magnets,
                scrapbooking. They can print at any drugstore (Walgreens, CVS,
                Target) for under $1. Lower price point, impulse purchase. Works
                well for quote prints, affirmation cards, and minimalist art.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5 bg-white">
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "#6d28d9" }}
              >
                5×7 buyers
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Want a more prominent display: gallery walls, desk stands,
                gift-framing. Fits standard 5×7 frames from IKEA, Target, and
                Walmart. Popular for portraits, botanical prints, and illustrated
                art where detail matters. Slightly higher perceived value.
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Most successful Etsy digital print sellers offer{" "}
            <strong className="text-slate-800">both sizes in the same listing</strong>{" "}
            alongside larger formats like 8×10 and 8×12. Buyers who find your
            listing filter by the frame they already own. Covering all common
            sizes removes the friction of &ldquo;this size doesn&apos;t fit my frame&rdquo; and
            reduces abandoned purchases. See{" "}
            <Link
              href="/etsy-print-sizes"
              className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
            >
              all Etsy print sizes
            </Link>{" "}
            for a complete list.
          </p>
        </section>

        {/* Mid-page CTA */}
        <div className="mb-16">
          <ContextualCTA
            problem="Listing both 4×6 and 5×7? You need two separate files. Different ratios mean different exports."
            solution="SnapToSize generates both from one upload. No cropping, no guessing. Just download and list."
            appUrl={CTA_URL}
            buttonText="Try Free: Export Both Sizes"
          />
        </div>

        {/* SECTION 4: How SnapToSize handles both */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How to Export 4×6 and 5×7 Without Cropping
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The manual workflow: open Photoshop or Canva, duplicate your file,
            resize to 4×6, save. Reopen, resize to 5×7 (different canvas size),
            save. Rename both files. Zip. Repeat for every new design. For a shop with 50 listings, that&apos;s hours of repetitive
            resizing that contributes nothing to your creative work.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                step: "1",
                title: "Upload your artwork once",
                desc: "Drop any high-res file into SnapToSize. JPEG, PNG, or TIFF up to 100 MB. The source image never gets modified.",
              },
              {
                step: "2",
                title: "Select your sizes",
                desc: "Pick the 2:3 pack (auto-includes 4×6 portrait and landscape) and add a 5×7 Single Export. Or build a saved custom pack with both; reuse it on every new design.",
              },
              {
                step: "3",
                title: "Download your ZIP",
                desc: "Both files come out at 300 DPI, correctly named, ready to attach to your Etsy listing. Full composition, no cropping, no white bars.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 items-start rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "#2DD4BF" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed">
            Once you&apos;ve built a custom pack with your preferred sizes, SnapToSize
            reuses it on every upload. For sellers who list new designs weekly,
            this cuts per-listing prep time from 20+ minutes to under a minute.
            See also:{" "}
            <Link
              href="/resize-image-without-cropping-etsy"
              className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
            >
              how to resize without cropping for Etsy
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Common Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related pages */}
        <section className="mb-16">
          <RelatedPages currentSlug={SLUG} max={5} />
        </section>

        {/* Final CTA */}
        <div className="mb-12">
          <FinalCTA
            heading="Stop exporting 4×6 and 5×7 separately by hand"
            stat="One upload generates both sizes at 300 DPI, correctly cropped, named, and zipped."
            description="SnapToSize handles 4×6, 5×7, and 30+ other Etsy sizes from a single image upload. Free to try, no account needed."
            buttonText="Try SnapToSize Free"
            appUrl={CTA_URL}
          />
        </div>
      </div>
    </>
  );
}
