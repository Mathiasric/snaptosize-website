import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Frame, Layers, LayoutGrid } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title:
    "Gallery Wall Print Sizes for Etsy — Arrangements & Sizing",
  description:
    "Gallery wall sizing guide for Etsy sellers. 5 arrangements with exact sizes, room-by-room combos, ratio packs, and how to generate every size from one upload.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-gallery-wall-print-sizes",
  },
  openGraph: {
    title: "Gallery Wall Print Sizes for Etsy | SnapToSize",
    description:
      "5 gallery wall arrangements with exact sizes, room recommendations, ratio packs, and batch sizing for Etsy sellers.",
    url: "https://snaptosize.com/etsy-gallery-wall-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-gallery-wall-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Gallery Wall Print Sizes for Etsy — Arrangements & Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery Wall Print Sizes for Etsy — Arrangement Guide",
    description:
      "5 gallery wall arrangements with exact sizes, room combos, and how to generate all sizes from one upload.",
    images: ["/assets/og/etsy-gallery-wall-print-sizes.png"],
  },
};

export default function EtsyGalleryWallPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Gallery Wall Print Sizes for Etsy — Arrangements, Sizes & Seller Strategy",
    description:
      "Complete gallery wall sizing guide for Etsy sellers. Covers the 5 most popular arrangements with exact sizes, room-by-room recommendations, ratio pack mapping, common mistakes, and how to generate every size from one upload.",
    url: "https://snaptosize.com/etsy-gallery-wall-print-sizes",
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
        name: "Gallery Wall Print Sizes",
        item: "https://snaptosize.com/etsy-gallery-wall-print-sizes",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the best print sizes for a gallery wall on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The five most popular gallery wall sizes on Etsy are 8\u00d710, 11\u00d714, 16\u00d720, 5\u00d77, and 12\u00d716. Top-selling gallery wall listings include all five sizes plus international options (A4, A3) so buyers can choose the perfect fit for their wall. Including 8\u201315 sizes per listing maximizes conversion.",
        },
      },
      {
        "@type": "Question",
        name: "How many sizes should I offer in a gallery wall set listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The top-performing gallery wall listings on Etsy offer 8\u201315 sizes per print. At minimum, include 5\u00d77, 8\u00d710, 11\u00d714, 16\u00d720, and A4. More sizes means higher perceived value, premium pricing, and fewer \u201cdo you have this in...\u201d messages from buyers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best size for a set of 3 prints above a sofa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a standard sofa (72\u201384\u201d wide), a triptych of 11\u00d714 or 16\u00d720 prints works best. The total gallery wall width should be about 2/3 of the sofa width. Three 16\u00d720 prints with 2\u20133\u201d gaps span about 52\u201354\u201d \u2014 ideal for a 78\u201d sofa. Three 11\u00d714 prints with gaps span about 37\u201339\u201d \u2014 better for loveseats.",
        },
      },
      {
        "@type": "Question",
        name: "Should all prints in a gallery wall set be the same size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the arrangement style. Grid layouts and triptychs require all prints at the same size for a clean, symmetrical look. Salon-style and stepped arrangements intentionally mix sizes (e.g., one 16\u00d720 anchor with 11\u00d714 and 8\u00d710 supporting pieces). The best strategy is to offer your gallery wall set in multiple size options so buyers can choose their preferred arrangement.",
        },
      },
      {
        "@type": "Question",
        name: "What sizes do I need for a salon-style gallery wall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salon-style gallery walls use 5\u201312 prints in 3\u20134 different sizes arranged organically. A popular combination is one 16\u00d720 (anchor), two 11\u00d714 (mid-size), two 8\u00d710 (supporting), and one or two 5\u00d77 (small accents). Having every print available in all sizes lets buyers customize their salon wall arrangement.",
        },
      },
      {
        "@type": "Question",
        name: "How much space should I leave between gallery wall prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard spacing for gallery wall prints is 2\u20133 inches (5\u20137.5 cm) between frames. For small frames (5\u00d77, 8\u00d710), use 2\u201d gaps. For larger frames (16\u00d720+), use 2.5\u20133\u201d gaps. For grid layouts, keep all gaps identical for a clean look. Include this spacing guidance in your Etsy listing description.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should gallery wall digital downloads be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG (also called JPEG) at 300 DPI is the standard for Etsy gallery wall digital downloads. JPG files are compatible with every print service (Walgreens, CVS, Costco, Shutterfly, local print shops) and keep file sizes manageable for Etsy\u2019s 20 MB per file limit. SnapToSize outputs all files as 300 DPI JPGs organized in ratio-based ZIP packs.",
        },
      },
      {
        "@type": "Question",
        name: "How do I price a gallery wall set with multiple sizes on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gallery wall sets with all sizes included typically sell for $5\u201315, while single-size sets sell for $3\u20138. The more sizes you include, the higher the justified price. A set of 6 prints with 10+ sizes each (60+ files total) can command $10\u201315. This is significantly more than single prints ($2\u20135), making gallery wall bundles one of the most profitable formats for Etsy digital download sellers.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_gallery_wall&kind=guide";

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
            "linear-gradient(155deg, #1a1520 0%, #1e1628 25%, #191320 50%, #1c1522 75%, #171218 100%)",
        }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9a88c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Warm amber gradient mesh — top right */}
        <div
          className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, #d4a574, transparent 70%)",
          }}
        />
        {/* Purple accent blob — bottom left */}
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #a78bfa, transparent 70%)",
          }}
        />
        {/* Warm gold blob — center */}
        <div
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #f5c563, transparent 70%)",
          }}
        />

        {/* CSS-only Gallery Wall Arrangement — right side */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative" style={{ width: "340px", height: "310px" }}>
            {/* Large center piece — 16x20 anchor */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "120px",
                height: "150px",
                top: "30px",
                left: "85px",
                background: "rgba(255,255,255,0.03)",
                border: "2px solid rgba(212,165,116,0.35)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 0 0 4px rgba(255,255,255,0.02)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Frame className="w-6 h-6 mx-auto mb-1" style={{ color: "rgba(212,165,116,0.5)" }} />
                  <span
                    className="text-[9px] font-mono tracking-wider block"
                    style={{ color: "rgba(212,165,116,0.45)" }}
                  >
                    16&times;20
                  </span>
                </div>
              </div>
            </div>

            {/* Top-left piece — 8x10 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "72px",
                height: "90px",
                top: "0",
                left: "0",
                background: "rgba(255,255,255,0.025)",
                border: "2px solid rgba(167,139,250,0.3)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25), inset 0 0 0 3px rgba(255,255,255,0.015)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-[8px] font-mono tracking-wider"
                  style={{ color: "rgba(167,139,250,0.45)" }}
                >
                  8&times;10
                </span>
              </div>
            </div>

            {/* Top-right piece — 11x14 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "82px",
                height: "104px",
                top: "5px",
                left: "220px",
                background: "rgba(255,255,255,0.025)",
                border: "2px solid rgba(212,165,116,0.3)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25), inset 0 0 0 3px rgba(255,255,255,0.015)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-[8px] font-mono tracking-wider"
                  style={{ color: "rgba(212,165,116,0.4)" }}
                >
                  11&times;14
                </span>
              </div>
            </div>

            {/* Bottom-left piece — 5x7 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "56px",
                height: "78px",
                top: "110px",
                left: "14px",
                background: "rgba(255,255,255,0.02)",
                border: "2px solid rgba(245,197,99,0.25)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2), inset 0 0 0 3px rgba(255,255,255,0.01)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-[7px] font-mono tracking-wider"
                  style={{ color: "rgba(245,197,99,0.4)" }}
                >
                  5&times;7
                </span>
              </div>
            </div>

            {/* Bottom-center piece — 12x16 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "88px",
                height: "116px",
                top: "195px",
                left: "100px",
                background: "rgba(255,255,255,0.025)",
                border: "2px solid rgba(167,139,250,0.25)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25), inset 0 0 0 3px rgba(255,255,255,0.015)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-[8px] font-mono tracking-wider"
                  style={{ color: "rgba(167,139,250,0.4)" }}
                >
                  12&times;16
                </span>
              </div>
            </div>

            {/* Bottom-right piece — 8x10 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "72px",
                height: "90px",
                top: "130px",
                left: "235px",
                background: "rgba(255,255,255,0.02)",
                border: "2px solid rgba(245,197,99,0.3)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2), inset 0 0 0 3px rgba(255,255,255,0.01)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-[7px] font-mono tracking-wider"
                  style={{ color: "rgba(245,197,99,0.4)" }}
                >
                  8&times;10
                </span>
              </div>
            </div>

            {/* Small decorative connectors */}
            <div
              className="absolute border-t border-dashed"
              style={{
                width: "12px",
                top: "50px",
                left: "73px",
                borderColor: "rgba(212,165,116,0.15)",
              }}
            />
            <div
              className="absolute border-t border-dashed"
              style={{
                width: "14px",
                top: "70px",
                left: "206px",
                borderColor: "rgba(167,139,250,0.15)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ background: "rgba(212,165,116,0.5)" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(212,165,116,0.7)" }}
              >
                Gallery Wall Sizing Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-3">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-1"
                style={{ color: "#f5f0eb" }}
              >
                Gallery Wall Print Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(245,240,235,0.6)" }}
              >
                Every arrangement, every size, every room&nbsp;&mdash; one&nbsp;upload
              </span>
            </h1>
            <p className="text-sm md:text-base mb-4 max-w-lg" style={{ color: "rgba(245,240,235,0.5)" }}>
              Gallery wall sets are Etsy&apos;s highest-value digital download
              format. This guide covers the 5 most popular arrangements with
              exact sizes, room-by-room recommendations, and how to generate
              every size from a single upload.
            </p>

            <div className="mb-3">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Gallery Wall Sizes
                </Button>
              </a>
              <p className="text-sm mt-1.5" style={{ color: "rgba(245,240,235,0.35)" }}>
                Free &rarr; upload once, get every gallery wall size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#a78bfa" }} />
                <span className="text-xs font-medium" style={{ color: "rgba(245,240,235,0.6)" }}>
                  5 arrangement types
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#a78bfa" }} />
                <span className="text-xs font-medium" style={{ color: "rgba(245,240,235,0.6)" }}>
                  Room-by-room sizes
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#a78bfa" }} />
                <span className="text-xs font-medium" style={{ color: "rgba(245,240,235,0.6)" }}>
                  Up to 70 files per upload
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
            <QuickAnswer question="What print sizes do I need for gallery wall sets on Etsy?">
              <strong>8×10, 11×14, 5×7, 12×16, and 16×20</strong> cover most gallery wall arrangements. Mix sizes from at least 2 ratio families and offer both portrait and landscape for maximum flexibility.
            </QuickAnswer>
            {/* --- H2 1: Why Gallery Wall Sizing Is Hard --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Gallery Wall Sizing Is the Hardest Part of Selling Sets on&nbsp;Etsy
              </h2>
              <p className="text-foreground-60 mb-4">
                Single-print sellers resize one artwork into multiple sizes.
                Gallery wall sellers resize <strong className="text-foreground">3 to 9 artworks per listing</strong>,
                each in 8&ndash;15 sizes. The math adds up fast.
              </p>
              <p className="text-foreground-60 mb-4">
                A 6-piece gallery wall set offered in 10 sizes means{" "}
                <strong className="text-foreground">60 individual resize operations</strong> per
                listing. If you have 20 gallery wall listings in your shop,
                that&apos;s 1,200 manual resizes &mdash; each one requiring the
                same DPI, the same crop behavior, and the same aspect ratio
                across every piece in the set.
              </p>
              <p className="text-foreground-60 mb-4">
                One inconsistent crop or mismatched resolution ruins the
                coordinated look that makes gallery wall sets worth the premium
                price. Buyers hang these prints side by side &mdash; quality
                differences are immediately visible.
              </p>
              <p className="text-foreground-60">
                That&apos;s why gallery wall sizing isn&apos;t just a production
                bottleneck. It&apos;s the single biggest constraint on how many
                sizes you can offer, how many listings you can maintain, and how
                much you can charge. See our{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  guide on how many sizes to include in each print
                </Link>{" "}
                for the full strategy.
              </p>
            </div>

            {/* --- H2 2: The 5 Most Popular Arrangements --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 5 Most Popular Gallery Wall Arrangements and Their Sizes
              </h2>
              <p className="text-foreground-60 mb-8">
                Each arrangement style calls for specific print sizes. Here are
                the five layouts Etsy buyers request most, with the exact sizes
                your listing needs.
              </p>

              {/* 1. Triptych */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(167,139,250,0.1)" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#a78bfa" }}>1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        Triptych &mdash; Set of 3, Same Size
                      </h3>
                      <div className="flex items-end justify-start gap-2 mb-3 py-3">
                        {[1,2,3].map((i) => (
                          <div key={i} className="rounded border-2 flex items-center justify-center" style={{ width: "48px", height: "60px", borderColor: "rgba(167,139,250,0.4)", background: "rgba(167,139,250,0.06)" }}>
                            <span className="text-[7px] font-mono" style={{ color: "rgba(167,139,250,0.6)" }}>8&times;10</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-foreground-60 text-sm mb-3">
                        The most popular gallery wall arrangement on Etsy. Works
                        above sofas, beds, and console tables. Portrait triptychs are especially popular for character art &mdash; see our{" "}
                        <Link href="/etsy-anime-manga-art-sizes" className="text-accent-light hover:underline">anime art print sizes guide</Link>{" "}
                        for portrait-ratio sizing.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-12x16-print-size" className="hover:underline">12&times;16</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 2. Stepped / Graduated */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(212,165,116,0.1)" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#d4a574" }}>2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        Stepped / Graduated &mdash; Large + Medium + Small
                      </h3>
                      <div className="flex items-end justify-start gap-2 mb-3 py-3">
                        <div className="rounded border-2 flex items-center justify-center" style={{ width: "32px", height: "40px", borderColor: "rgba(212,165,116,0.3)", background: "rgba(212,165,116,0.04)" }}>
                          <span className="text-[6px] font-mono" style={{ color: "rgba(212,165,116,0.6)" }}>5&times;7</span>
                        </div>
                        <div className="rounded border-2 flex items-center justify-center" style={{ width: "44px", height: "55px", borderColor: "rgba(212,165,116,0.4)", background: "rgba(212,165,116,0.06)" }}>
                          <span className="text-[7px] font-mono" style={{ color: "rgba(212,165,116,0.6)" }}>11&times;14</span>
                        </div>
                        <div className="rounded border-2 flex items-center justify-center" style={{ width: "56px", height: "70px", borderColor: "rgba(212,165,116,0.5)", background: "rgba(212,165,116,0.08)" }}>
                          <span className="text-[7px] font-mono" style={{ color: "rgba(212,165,116,0.7)" }}>16&times;20</span>
                        </div>
                        <div className="rounded border-2 flex items-center justify-center" style={{ width: "44px", height: "55px", borderColor: "rgba(212,165,116,0.4)", background: "rgba(212,165,116,0.06)" }}>
                          <span className="text-[7px] font-mono" style={{ color: "rgba(212,165,116,0.6)" }}>11&times;14</span>
                        </div>
                        <div className="rounded border-2 flex items-center justify-center" style={{ width: "32px", height: "40px", borderColor: "rgba(212,165,116,0.3)", background: "rgba(212,165,116,0.04)" }}>
                          <span className="text-[6px] font-mono" style={{ color: "rgba(212,165,116,0.6)" }}>5&times;7</span>
                        </div>
                      </div>
                      <p className="text-foreground-60 text-sm mb-3">
                        One hero piece in the center flanked by progressively
                        smaller prints. Creates visual hierarchy and depth.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Center: <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Flanking: <Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Outer: <Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 3. Grid */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(167,139,250,0.1)" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#a78bfa" }}>3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        Grid &mdash; 2&times;2, 2&times;3, or 3&times;3
                      </h3>
                      <div className="mb-3 py-3">
                        <div className="inline-grid grid-cols-3 gap-1.5">
                          {[1,2,3,4,5,6].map((i) => (
                            <div key={i} className="rounded border-2 flex items-center justify-center" style={{ width: "36px", height: "45px", borderColor: "rgba(167,139,250,0.35)", background: "rgba(167,139,250,0.05)" }}>
                              <span className="text-[6px] font-mono" style={{ color: "rgba(167,139,250,0.5)" }}>8&times;10</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground-60 text-sm mb-3">
                        All prints the same size in rows and columns. Clean,
                        modern, symmetrical.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 4. Salon Style */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(212,165,116,0.1)" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#d4a574" }}>4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        Salon Style &mdash; Mixed Sizes, Organic Layout
                      </h3>
                      <div className="mb-3 py-3">
                        <div className="flex items-start gap-1.5 flex-wrap" style={{ maxWidth: "220px" }}>
                          <div className="rounded border-2 flex items-center justify-center" style={{ width: "52px", height: "65px", borderColor: "rgba(212,165,116,0.5)", background: "rgba(212,165,116,0.08)" }}>
                            <span className="text-[7px] font-mono" style={{ color: "rgba(212,165,116,0.7)" }}>16&times;20</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <div className="rounded border-2 flex items-center justify-center" style={{ width: "36px", height: "45px", borderColor: "rgba(212,165,116,0.35)", background: "rgba(212,165,116,0.05)" }}>
                              <span className="text-[6px] font-mono" style={{ color: "rgba(212,165,116,0.5)" }}>11&times;14</span>
                            </div>
                            <div className="rounded border-2 flex items-center justify-center" style={{ width: "28px", height: "35px", borderColor: "rgba(212,165,116,0.25)", background: "rgba(212,165,116,0.03)" }}>
                              <span className="text-[5px] font-mono" style={{ color: "rgba(212,165,116,0.4)" }}>8&times;10</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <div className="rounded border-2 flex items-center justify-center" style={{ width: "28px", height: "35px", borderColor: "rgba(212,165,116,0.25)", background: "rgba(212,165,116,0.03)" }}>
                              <span className="text-[5px] font-mono" style={{ color: "rgba(212,165,116,0.4)" }}>5&times;7</span>
                            </div>
                            <div className="rounded border-2 flex items-center justify-center" style={{ width: "36px", height: "45px", borderColor: "rgba(212,165,116,0.35)", background: "rgba(212,165,116,0.05)" }}>
                              <span className="text-[6px] font-mono" style={{ color: "rgba(212,165,116,0.5)" }}>11&times;14</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground-60 text-sm mb-3">
                        The &ldquo;curated&rdquo; look &mdash; 5&ndash;12 prints
                        in 3&ndash;4 different sizes. Especially popular in{" "}
                        <Link href="/etsy-boho-wall-art-sizes" className="text-accent-light hover:underline">
                          boho wall art
                        </Link>{" "}
                        and eclectic decor. Buyers expect all sizes included.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          1&times; <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> anchor
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          2&times; <Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          2&times; <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          2&times; <Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 5. Diptych */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(167,139,250,0.1)" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#a78bfa" }}>5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        Diptych &mdash; Set of 2, Matching
                      </h3>
                      <div className="flex items-end justify-start gap-3 mb-3 py-3">
                        {[1,2].map((i) => (
                          <div key={i} className="rounded border-2 flex items-center justify-center" style={{ width: "48px", height: "60px", borderColor: "rgba(167,139,250,0.4)", background: "rgba(167,139,250,0.06)" }}>
                            <span className="text-[7px] font-mono" style={{ color: "rgba(167,139,250,0.6)" }}>11&times;14</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-foreground-60 text-sm mb-3">
                        Two matching prints side by side. Works above nightstands,
                        sofas, and console tables.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Get Every Gallery Wall Size From One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Download every size above at
                  300&nbsp;DPI &mdash; organized by ratio pack, named for buyers,
                  and ready to list on Etsy.
                </p>
                <a
                  href="https://app.snaptosize.com?source=seo_gallery_wall&kind=arrangements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 3: Exact Sizes Every Listing Needs --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Exact Sizes Every Gallery Wall Listing Needs
              </h2>
              <p className="text-foreground-60 mb-6">
                These are the sizes that top-selling gallery wall listings on Etsy
                consistently include, organized by use case. Every pixel dimension
                is at 300 DPI &mdash; the professional print standard. For the
                complete breakdown of all sizes, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print sizes guide
                </Link>.
              </p>

              <h3 className="text-lg font-semibold mb-3">
                Essential Gallery Wall Sizes (must-have)
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">Size</th>
                      <th className="text-left py-3 px-4 font-semibold">Pixels @ 300 DPI</th>
                      <th className="text-left py-3 px-4 font-semibold">Ratio Pack</th>
                      <th className="text-left py-3 px-4 font-semibold">Gallery Wall Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">5&times;7</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">1500&times;2100</td>
                      <td className="py-3 px-4 text-foreground-60">Extras</td>
                      <td className="py-3 px-4 text-foreground-60">Small accent, grid filler</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">2400&times;3000</td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">The #1 gallery wall size &mdash; works in every arrangement</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3300&times;4200</td>
                      <td className="py-3 px-4 text-foreground-60">Extras</td>
                      <td className="py-3 px-4 text-foreground-60">Mid-size sweet spot for living rooms</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4800&times;6000</td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">Statement piece, gallery wall anchor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold mb-3">
                Large Format Sizes (hero / anchor pieces)
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">Size</th>
                      <th className="text-left py-3 px-4 font-semibold">Pixels @ 300 DPI</th>
                      <th className="text-left py-3 px-4 font-semibold">Ratio Pack</th>
                      <th className="text-left py-3 px-4 font-semibold">Gallery Wall Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">18&times;24</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">5400&times;7200</td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">Large statement, stepped center</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-12x16-print-size" className="text-accent-light hover:underline">12&times;16</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3600&times;4800</td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">Mid-large, popular in 3-piece living room sets</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-24x36-print-size" className="text-accent-light hover:underline">24&times;36</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">7200&times;10800</td>
                      <td className="py-3 px-4 text-foreground-60">Single export</td>
                      <td className="py-3 px-4 text-foreground-60">Oversized focal point</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold mb-3">
                International Sizes (for global buyers)
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">Size</th>
                      <th className="text-left py-3 px-4 font-semibold">Pixels @ 300 DPI</th>
                      <th className="text-left py-3 px-4 font-semibold">Ratio Pack</th>
                      <th className="text-left py-3 px-4 font-semibold">Gallery Wall Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link> (210&times;297 mm)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">2480&times;3508</td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">International equivalent of 8&times;10</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link> (297&times;420 mm)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3508&times;4961</td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">International equivalent of 11&times;14 / 12&times;16</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium"><Link href="/etsy-a2-print-size" className="text-accent-light hover:underline">A2</Link> (420&times;594 mm)</td>
                      <td className="py-3 px-4 text-foreground-60">4961&times;7016</td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">Large format for UK/EU/AUS buyers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold mb-3">
                Grid-Friendly Sizes (uniform arrangements)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">Size</th>
                      <th className="text-left py-3 px-4 font-semibold">Pixels @ 300 DPI</th>
                      <th className="text-left py-3 px-4 font-semibold">Ratio Pack</th>
                      <th className="text-left py-3 px-4 font-semibold">Gallery Wall Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link href="/etsy-4x6-print-size" className="text-accent-light hover:underline">4&times;6</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">1200&times;1800</td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">Mini gallery walls, small grids</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">8&times;12</td>
                      <td className="py-3 px-4 text-foreground-60">2400&times;3600</td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">Medium grids (2:3 ratio)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">10&times;10, 12&times;12</td>
                      <td className="py-3 px-4 text-foreground-60">3000&times;3000, 3600&times;3600</td>
                      <td className="py-3 px-4 text-foreground-60"><Link href="/etsy-square-print-sizes" className="text-accent-light hover:underline">Single export (square)</Link></td>
                      <td className="py-3 px-4 text-foreground-60">Modern square grid layouts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- H2 4: Size Combinations for Every Room --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Size Combinations for Every Room
              </h2>
              <p className="text-foreground-60 mb-8">
                Room-specific gallery wall recommendations that sellers can
                reference in their listing descriptions. Include these details
                and buyers will see your listing as the expert option. Gallery walls should span{" "}
                <strong className="text-foreground">2/3 to 3/4 of the furniture width</strong> below them,
                with the center at 57&ndash;60 inches from the floor (museum standard eye level).
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    <LayoutGrid className="inline w-4 h-4 mr-1.5 text-accent-light" />
                    Above a Sofa (60&ndash;84&quot; wide)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Gallery wall should span 2/3 of sofa width. Bottom of
                    lowest frame 5&ndash;8&quot; above the sofa back.
                  </p>
                  <div className="space-y-1.5 text-sm text-foreground-60">
                    <p>
                      <strong className="text-foreground">Triptych:</strong> Three{" "}
                      <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link> prints
                      (~52&ndash;54&quot; span)
                    </p>
                    <p>
                      <strong className="text-foreground">Grid:</strong> Six{" "}
                      <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link> prints
                      in 2&times;3 grid (~22&quot; &times; 34&quot;)
                    </p>
                    <p>
                      <strong className="text-foreground">Salon:</strong> 1&times;{" "}
                      <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link> + 2&times;{" "}
                      <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link> + 2&times;{" "}
                      <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    <Frame className="inline w-4 h-4 mr-1.5 text-accent-light" />
                    Above a Bed (queen 60&quot;, king 76&quot;)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Gallery wall should span about 2/3 of headboard width.
                    Bottom edge 8&ndash;10&quot; above headboard.
                  </p>
                  <div className="space-y-1.5 text-sm text-foreground-60">
                    <p>
                      <strong className="text-foreground">Triptych:</strong> Three{" "}
                      <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link> or three{" "}
                      <Link href="/etsy-12x16-print-size" className="text-accent-light hover:underline">12&times;16</Link>
                    </p>
                    <p>
                      <strong className="text-foreground">Grid:</strong> Four{" "}
                      <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link> in 2&times;2 grid
                    </p>
                    <p>
                      <strong className="text-foreground">Statement:</strong> Single{" "}
                      <Link href="/etsy-24x36-print-size" className="text-accent-light hover:underline">24&times;36</Link> with two{" "}
                      <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">5&times;7</Link> accents
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    <Layers className="inline w-4 h-4 mr-1.5 text-accent-light" />
                    Hallway
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Linear row of 3&ndash;5 prints along the wall. Staircase walls work
                    well with an ascending diagonal line of mixed sizes.
                  </p>
                  <p className="text-sm text-foreground-60">
                    <strong className="text-foreground">Best sizes:</strong> Row of{" "}
                    <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">5&times;7</Link> or{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link> prints
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    <Frame className="inline w-4 h-4 mr-1.5 text-accent-light" />
                    Nursery
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Soft arrangement above the crib or changing table. See our dedicated{" "}
                    <Link
                      href="/etsy-nursery-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      nursery wall art sizes guide
                    </Link>{" "}
                    for detailed nursery sizing, or our{" "}
                    <Link
                      href="/etsy-kids-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      kids wall art sizes guide
                    </Link>{" "}
                    for playroom and children&apos;s room gallery walls.
                  </p>
                  <p className="text-sm text-foreground-60">
                    <strong className="text-foreground">Best sizes:</strong> Three{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link> or 2&times;{" "}
                    <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link> + 1&times;{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    <LayoutGrid className="inline w-4 h-4 mr-1.5 text-accent-light" />
                    Bathroom / Powder Room
                  </h3>
                  <p className="text-sm text-foreground-60">
                    <strong className="text-foreground">Best sizes:</strong> Pair of{" "}
                    <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">5&times;7</Link> or{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>. Small grid of four{" "}
                    <Link href="/etsy-4x6-print-size" className="text-accent-light hover:underline">4&times;6</Link> prints.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    <Layers className="inline w-4 h-4 mr-1.5 text-accent-light" />
                    Home Office
                  </h3>
                  <p className="text-sm text-foreground-60">
                    <strong className="text-foreground">Best sizes:</strong> 2&times;3 grid of{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link> or{" "}
                    <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link> behind the desk.
                  </p>
                </Card>
              </div>

              <Card className="p-5 mt-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Include room-specific recommendations in your Etsy listing
                    description. For example: &ldquo;Perfect above a queen bed &mdash; hang
                    all three 11&times;14 prints with 2&quot; spacing for a clean, modern
                    look.&rdquo; Buyers who see a clear vision are more likely to
                    purchase.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- H2 5: How to Offer Multiple Arrangement Options --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Offer Multiple Arrangement Options in One Etsy Listing
              </h2>
              <p className="text-foreground-60 mb-6">
                The most successful gallery wall sellers structure their listings to
                give buyers flexibility. There are three approaches, and the best
                sellers use Option C.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Option A: Same-Size Set
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    All prints at one size &mdash; buyer picks 8&times;10, 11&times;14, or
                    16&times;20 for the whole set. Works for grid and triptych layouts.
                  </p>
                  <p className="text-xs text-foreground-60">
                    Typical price range: $3&ndash;8 per set
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Option B: Mixed-Size Set
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    The listing includes prints at multiple sizes (e.g., 2&times;
                    16&times;20 + 2&times; 11&times;14 + 2&times; 8&times;10). Buyer gets
                    a pre-curated salon arrangement.
                  </p>
                  <p className="text-xs text-foreground-60">
                    Typical price range: $5&ndash;10 per set
                  </p>
                </Card>

                <Card className="p-6 border-accent/30">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">
                      Option C: All Sizes Included
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent/15 text-accent-light uppercase tracking-wider">
                      Highest Converting
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm mb-3">
                    Every print delivered in 8&ndash;15 sizes. Buyer picks their
                    preferred arrangement and prints at any size they want.
                    Highest perceived value, commands premium pricing.
                  </p>
                  <ul className="space-y-1.5 text-sm text-foreground-60 mb-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Eliminates &ldquo;do you have this in...&rdquo; messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Works for any wall size or room</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Justified premium price ($8&ndash;15)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        International buyers get A-series sizes automatically
                      </span>
                    </li>
                  </ul>
                  <p className="text-xs text-foreground-60">
                    Typical price range: $8&ndash;15 per set. For pricing strategy details, see our{" "}
                    <Link
                      href="/how-to-price-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      printable pricing guide
                    </Link>.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60">
                Option C sounds like massive work &mdash; a 6-piece set in 10 sizes
                means 60 individual files. But with the right tool, it takes under 3
                minutes. That&apos;s what separates gallery wall sellers who charge $3 from
                those who charge $15.
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Upload Once. Download 30+ Sizes.
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your gallery wall art once. Download up to 70 files &mdash;
                  portrait,{" "}
                  <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">
                    landscape
                  </Link>
                  , and square &mdash; organized by ratio and ready for Etsy.
                </p>
                <a
                  href="https://app.snaptosize.com?source=seo_gallery_wall&kind=strategy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Start Sizing Your Gallery Wall Set
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 6: Ratio Packs for Gallery Wall Sets --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ratio Packs for Gallery Wall Sets &mdash; Which Ratios Cover Every Arrangement
              </h2>
              <p className="text-foreground-60 mb-6">
                SnapToSize organizes sizes by aspect ratio. Each pack contains sizes
                that share the same proportions, so your artwork scales without
                cropping. Here&apos;s how the 5 packs map to gallery wall needs.
                For a deeper explanation of how ratios work, see our{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  print ratios guide
                </Link>.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    4:5 Ratio Pack &mdash; The Gallery Wall Workhorse
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Sizes:{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>,
                    12&times;15,{" "}
                    <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link>,
                    20&times;25, 24&times;30
                  </p>
                  <p className="text-foreground-60 text-xs">
                    Covers the two most popular gallery wall sizes (8&times;10 and
                    16&times;20). Essential for every gallery wall listing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    3:4 Ratio Pack &mdash; Mid-Size &amp; Large Format
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Sizes: 6&times;8, 9&times;12,{" "}
                    <Link href="/etsy-12x16-print-size" className="text-accent-light hover:underline">12&times;16</Link>,
                    15&times;20,{" "}
                    <Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">18&times;24</Link>
                  </p>
                  <p className="text-foreground-60 text-xs">
                    12&times;16 is the go-to for 3-piece living room sets. 18&times;24 for
                    hero anchor pieces in stepped arrangements.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    2:3 Ratio Pack &mdash; Widest Range
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Sizes:{" "}
                    <Link href="/etsy-4x6-print-size" className="text-accent-light hover:underline">4&times;6</Link>,
                    6&times;9, 8&times;12, 10&times;15, 12&times;18, 16&times;24, 20&times;30
                  </p>
                  <p className="text-foreground-60 text-xs">
                    4&times;6 for mini gallery walls, 20&times;30 for oversized statements.
                    Classic tall proportions popular in wall art.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    ISO Pack &mdash; International Coverage
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Sizes: A5, A4, A3, A2, A1
                  </p>
                  <p className="text-foreground-60 text-xs">
                    <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link> and{" "}
                    <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link> are the most requested international gallery wall sizes. Gallery
                    walls are a global trend &mdash; don&apos;t skip these.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Extras Pack &mdash; Critical Gallery Wall Sizes
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Sizes:{" "}
                    <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">5&times;7</Link>,
                    8.5&times;11,{" "}
                    <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link>,
                    11&times;17, 13&times;19, 20&times;24
                  </p>
                  <p className="text-foreground-60 text-xs">
                    5&times;7 and 11&times;14 are top-5 gallery wall sizes &mdash; and they only
                    exist in this pack. Don&apos;t skip it.
                  </p>
                </Card>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">All 5 packs combined</strong> give
                    you up to 70 files from one upload (portrait +{" "}
                    <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">landscape</Link>{" "}
                    + square)
                    &mdash; every gallery wall size your buyers could need. Learn more
                    about the{" "}
                    <Link
                      href="/2-3-vs-4-5-ratio"
                      className="text-accent-light hover:underline"
                    >
                      differences between 2:3 and 4:5 ratios
                    </Link>.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- H2 7: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Gallery Wall Sizing Mistakes That Hurt Etsy Sales
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Only offering one size per set
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Buyers can&apos;t customize for their wall. They&apos;ll
                        move to a competitor who offers 8&ndash;15 sizes.
                        Including all sizes via Option C is the highest-converting
                        strategy.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Inconsistent resolution across set pieces
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Some prints at 300 DPI, others at lower resolution.
                        Customers notice quality differences between framed prints
                        hanging side by side. All pieces in a set must be
                        300 DPI. Read our{" "}
                        <Link
                          href="/best-resolution-for-etsy-printables"
                          className="text-accent-light hover:underline"
                        >
                          resolution guide
                        </Link>{" "}
                        for details.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Mismatched aspect ratios in a &ldquo;same-size&rdquo; set
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Listing says &ldquo;8&times;10&rdquo; but some prints are
                        slightly cropped differently. This ruins the clean grid
                        look. Every print must share the exact same aspect ratio
                        at the exact same pixel dimensions.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Ignoring 11&times;14
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        This is the #2 gallery wall size after 8&times;10, yet many
                        sellers skip it because it doesn&apos;t fit a neat ratio
                        category.{" "}
                        <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">
                          11&times;14
                        </Link>{" "}
                        lives in the Extras pack &mdash; always include it.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        No international sizes
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Gallery walls are a global trend. UK, EU, and Australian
                        buyers need{" "}
                        <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link> and{" "}
                        <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link> options. Skipping A-series sizes means losing 20&ndash;30% of
                        potential international buyers.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Not including a gallery wall preview mockup
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Listings with lifestyle mockups showing the gallery wall
                        arrangement see significantly higher conversion rates.
                        Include at least one listing photo showing the set
                        arranged on a wall.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- H2 8: How to Generate Every Size --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Generate Every Gallery Wall Size From One Upload
              </h2>
              <p className="text-foreground-60 mb-6">
                Here&apos;s the exact workflow for gallery wall sellers. For a more
                general walkthrough, see our{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  complete resize guide
                </Link>.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa" }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Design at Maximum Resolution</h3>
                      <p className="text-foreground-60 text-sm">
                        Create your artwork at the highest resolution you need.
                        For example, 7200&times;10800 pixels covers{" "}
                        <Link href="/etsy-24x36-print-size" className="text-accent-light hover:underline">24&times;36</Link>{" "}
                        at 300 DPI. Larger source files produce better results at all sizes.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa" }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Upload to SnapToSize</h3>
                      <p className="text-foreground-60 text-sm">
                        Upload your artwork once. No account required on the free tier.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa" }}
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Download All 5 Ratio Packs</h3>
                      <p className="text-foreground-60 text-sm">
                        28 sizes across 5 organized ZIP packs, up to 70 files total
                        (portrait + landscape + square). All at 300 DPI, all JPG,
                        all under 20 MB per ZIP (Etsy-compliant).
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa" }}
                    >
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Repeat for Each Print in the Set</h3>
                      <p className="text-foreground-60 text-sm">
                        For a 6-piece gallery wall set, repeat the upload 6 times.
                        Total time: under 3 minutes for the entire set.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa" }}
                    >
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Organize for Etsy</h3>
                      <p className="text-foreground-60 text-sm">
                        Bundle files into ZIP packs per size option or one mega ZIP
                        with all sizes. For Etsy packaging best practices, see our{" "}
                        <Link
                          href="/how-to-package-digital-wall-art-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          packaging guide
                        </Link>.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Time savings:</strong>{" "}
                    A 6-piece gallery wall set in 10 sizes = 60 manual resize
                    operations. With SnapToSize: 6 uploads, under 3 minutes total.
                    All files at 300 DPI, consistent quality across every piece,
                    organized by ratio pack.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Size Your Entire Gallery Wall Set"
                stat="Up to 70 files per upload, all at 300 DPI"
                description="Upload each gallery wall artwork once and get every size your buyers need. Portrait, landscape, and square. Organized by ratio, named for buyers, and ready for Etsy. Free to start, no account required."
                buttonText="Start Free &mdash; Generate Sizes Now"
                appUrl="https://app.snaptosize.com?source=seo_gallery_wall&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Gallery Wall Print Sizes for Etsy
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "What are the best print sizes for a gallery wall on Etsy?",
                    answer:
                      "The five most popular gallery wall sizes on Etsy are 8\u00d710, 11\u00d714, 16\u00d720, 5\u00d77, and 12\u00d716. Top-selling gallery wall listings include all five sizes plus international options (A4, A3) so buyers can choose the perfect fit for their wall. Including 8\u201315 sizes per listing maximizes conversion.",
                  },
                  {
                    question:
                      "How many sizes should I offer in a gallery wall set listing?",
                    answer:
                      "The top-performing gallery wall listings on Etsy offer 8\u201315 sizes per print. At minimum, include 5\u00d77, 8\u00d710, 11\u00d714, 16\u00d720, and A4. More sizes means higher perceived value, premium pricing, and fewer \u201cdo you have this in...\u201d messages from buyers.",
                  },
                  {
                    question:
                      "What is the best size for a set of 3 prints above a sofa?",
                    answer:
                      "For a standard sofa (72\u201384\u201d wide), a triptych of 11\u00d714 or 16\u00d720 prints works best. The total gallery wall width should be about 2/3 of the sofa width. Three 16\u00d720 prints with 2\u20133\u201d gaps span about 52\u201354\u201d \u2014 ideal for a 78\u201d sofa. Three 11\u00d714 prints with gaps span about 37\u201339\u201d \u2014 better for loveseats.",
                  },
                  {
                    question:
                      "Should all prints in a gallery wall set be the same size?",
                    answer:
                      "It depends on the arrangement style. Grid layouts and triptychs require all prints at the same size for a clean, symmetrical look. Salon-style and stepped arrangements intentionally mix sizes (e.g., one 16\u00d720 anchor with 11\u00d714 and 8\u00d710 supporting pieces). The best strategy is to offer your gallery wall set in multiple size options so buyers can choose their preferred arrangement.",
                  },
                  {
                    question:
                      "What sizes do I need for a salon-style gallery wall?",
                    answer:
                      "Salon-style gallery walls use 5\u201312 prints in 3\u20134 different sizes arranged organically. A popular combination is one 16\u00d720 (anchor), two 11\u00d714 (mid-size), two 8\u00d710 (supporting), and one or two 5\u00d77 (small accents). Having every print available in all sizes lets buyers customize their salon wall arrangement.",
                  },
                  {
                    question:
                      "How much space should I leave between gallery wall prints?",
                    answer:
                      "The standard spacing for gallery wall prints is 2\u20133 inches (5\u20137.5 cm) between frames. For small frames (5\u00d77, 8\u00d710), use 2\u201d gaps. For larger frames (16\u00d720+), use 2.5\u20133\u201d gaps. For grid layouts, keep all gaps identical for a clean look. Include this spacing guidance in your Etsy listing description.",
                  },
                  {
                    question:
                      "What file format should gallery wall digital downloads be?",
                    answer:
                      "JPG (also called JPEG) at 300 DPI is the standard for Etsy gallery wall digital downloads. JPG files are compatible with every print service (Walgreens, CVS, Costco, Shutterfly, local print shops) and keep file sizes manageable for Etsy\u2019s 20 MB per file limit. SnapToSize outputs all files as 300 DPI JPGs organized in ratio-based ZIP packs.",
                  },
                  {
                    question:
                      "How do I price a gallery wall set with multiple sizes on Etsy?",
                    answer:
                      "Gallery wall sets with all sizes included typically sell for $5\u201315, while single-size sets sell for $3\u20138. The more sizes you include, the higher the justified price. A set of 6 prints with 10+ sizes each (60+ files total) can command $10\u201315. This is significantly more than single prints ($2\u20135), making gallery wall bundles one of the most profitable formats for Etsy digital download sellers.",
                  },
                ]}
              />
            </div>

            {/* --- Contextual CTA --- */}
            <div className="pb-12">
              <ContextualCTA
                problem="Selling gallery wall sets? Every piece needs to come in every size."
                solution="Upload one artwork, get all standard sizes. Create complete gallery wall sets from a single source file."
                buttonText="Create Gallery Wall Sets"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-gallery-wall-print-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
