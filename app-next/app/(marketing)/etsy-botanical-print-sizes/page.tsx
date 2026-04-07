import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Leaf, Flower2 } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title:
    "Botanical Print Sizes for Etsy — What Sizes to Offer by Sub-Niche",
  description:
    "Complete guide to botanical print sizes for Etsy sellers. The 8 must-have sizes, sub-niche recommendations for vintage, minimalist, dark/moody, tropical, and herb botanicals, gallery wall sets, and how to generate all sizes from one upload.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-botanical-print-sizes",
  },
  openGraph: {
    title: "Botanical Print Sizes for Etsy | SnapToSize",
    description:
      "The 8 must-have botanical print sizes, sub-niche sizing strategies, gallery wall bundles, and ratio pack mapping for Etsy sellers.",
    url: "https://snaptosize.com/etsy-botanical-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-botanical-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Botanical Print Sizes for Etsy — What Sizes to Offer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Botanical Print Sizes for Etsy — Sub-Niche Size Guide",
    description:
      "8 must-have sizes, gallery wall sets, and sub-niche sizing for vintage, minimalist, dark, tropical, and herb botanical art on Etsy.",
    images: ["/assets/og/etsy-botanical-print-sizes.png"],
  },
};

export default function EtsyBotanicalPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Botanical Print Sizes for Etsy — What Sizes to Offer by Sub-Niche",
    description:
      "Complete guide to botanical print sizes for Etsy sellers. Covers the 8 must-have sizes, sub-niche size recommendations, gallery wall sets, ratio packs, and common sizing mistakes.",
    url: "https://snaptosize.com/etsy-botanical-print-sizes",
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
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
        name: "Botanical Print Sizes",
        item: "https://snaptosize.com/etsy-botanical-print-sizes",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best-selling botanical print size on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8\u00d710 is the #1 seller overall, but botanical art over-indexes on large formats \u2014 16\u00d720 and 24\u00d736 outsell their generic averages because buyers use botanical prints as statement wall pieces. Offering both small and large sizes captures the full market.",
        },
      },
      {
        "@type": "Question",
        name: "How many sizes should I include in a botanical print listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Top botanical sellers offer 8\u201315 sizes per listing. At minimum, include 8\u00d710, 11\u00d714, 16\u00d720, 24\u00d736, and A4. More sizes means higher perceived value, fewer \u201cdo you have this in...\u201d messages, and better search visibility on Etsy.",
        },
      },
      {
        "@type": "Question",
        name: "Should botanical prints be vertical or horizontal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "85%+ of botanical prints on Etsy are vertical (portrait orientation). This follows the natural growth pattern of plants and matches the classic botanical illustration tradition. However, offering both orientations as separate listings can double your catalog with minimal extra work \u2014 SnapToSize handles both from the same upload.",
        },
      },
      {
        "@type": "Question",
        name: "What sizes work best for botanical gallery wall sets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most popular gallery wall sizes for botanical sets are 8\u00d710, 11\u00d714, and 12\u00d716. All three prints in a set should be the same size for a cohesive look. Offering the set in 3 size options (small, medium, large) in a single listing maximizes conversion.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to include international (A-series) sizes for botanical prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Botanical art has a strong international buyer base, especially in the UK, Europe, and Australia where A4 and A3 are the standard frame sizes. Skipping A-series means leaving 20\u201330% of potential buyers without a usable file. SnapToSize\u2019s ISO pack generates A5 through A1 automatically.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_botanical&kind=guide";

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
        className="relative pt-12 pb-36 md:pt-20 md:pb-48 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #f4f7f2 0%, #e8ede4 25%, #dde5d6 50%, #eae4db 75%, #f5f0ea 100%)",
        }}
      >
        {/* Organic leaf vein pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 20% 50%, #5a7a4a 0.5px, transparent 0.5px), radial-gradient(ellipse 50% 80% at 70% 40%, #5a7a4a 0.5px, transparent 0.5px)",
            backgroundSize: "48px 40px, 36px 52px",
          }}
        />

        {/* Sage green gradient blob top-right */}
        <div
          className="absolute top-[-12%] right-[-6%] w-[550px] h-[550px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #7a9e6a, transparent 70%)",
          }}
        />
        {/* Warm earth tone blob bottom-left */}
        <div
          className="absolute bottom-[-18%] left-[-8%] w-[450px] h-[450px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, #c4a882, transparent 70%)",
          }}
        />
        {/* Small accent blob mid-right */}
        <div
          className="absolute top-[40%] right-[15%] w-[200px] h-[200px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #8aaa6e, transparent 70%)",
          }}
        />

        {/* CSS Botanical Frame Arrangement — right side */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden md:block">
          <div className="relative" style={{ width: "340px", height: "320px" }}>
            {/* Large frame — 24x36 statement piece */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "120px",
                height: "180px",
                top: "0",
                left: "0",
                background: "#fff",
                border: "5px solid #c4b89c",
                boxShadow: "0 4px 16px rgba(90,122,74,0.12)",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#f0f4ec" }}
              >
                <div className="text-center">
                  <Leaf className="w-7 h-7 mx-auto mb-1" style={{ color: "#7a9e6a" }} />
                  <span
                    className="text-[8px] font-mono tracking-wider block"
                    style={{ color: "#6b8a5c" }}
                  >
                    24x36
                  </span>
                </div>
              </div>
            </div>

            {/* Medium frame — 16x20 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "96px",
                height: "120px",
                top: "15px",
                left: "140px",
                background: "#fff",
                border: "4px solid #b8a888",
                boxShadow: "0 3px 12px rgba(90,122,74,0.10)",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#f5f2ec" }}
              >
                <div className="text-center">
                  <Flower2 className="w-5 h-5 mx-auto mb-1" style={{ color: "#9aab7c" }} />
                  <span
                    className="text-[7px] font-mono tracking-wider block"
                    style={{ color: "#7a8a6a" }}
                  >
                    16x20
                  </span>
                </div>
              </div>
            </div>

            {/* Small frame — 8x10 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "72px",
                height: "90px",
                top: "155px",
                left: "160px",
                background: "#fff",
                border: "3px solid #c4b89c",
                boxShadow: "0 2px 8px rgba(90,122,74,0.08)",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#eef2ea" }}
              >
                <div className="text-center">
                  <Leaf className="w-4 h-4 mx-auto mb-0.5" style={{ color: "#8aaa6e", transform: "rotate(-30deg)" }} />
                  <span
                    className="text-[7px] font-mono tracking-wider block"
                    style={{ color: "#6b8a5c" }}
                  >
                    8x10
                  </span>
                </div>
              </div>
            </div>

            {/* Tiny frame — 5x7 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "56px",
                height: "78px",
                top: "200px",
                left: "50px",
                background: "#fff",
                border: "3px solid #d4c8ac",
                boxShadow: "0 2px 6px rgba(90,122,74,0.06)",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#f4f0e8" }}
              >
                <div className="text-center">
                  <span className="text-sm" style={{ color: "#9aab7c" }}>
                    &#10047;
                  </span>
                  <span
                    className="text-[6px] font-mono tracking-wider block"
                    style={{ color: "#8a7e68" }}
                  >
                    5x7
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative leaf accent between frames */}
            <div
              className="absolute"
              style={{
                top: "130px",
                left: "118px",
                opacity: 0.15,
              }}
            >
              <Leaf className="w-6 h-6" style={{ color: "#5a7a4a", transform: "rotate(45deg)" }} />
            </div>

            {/* Subtle connecting dashed line */}
            <div
              className="absolute border-t border-dashed"
              style={{
                width: "40px",
                top: "75px",
                left: "125px",
                borderColor: "rgba(122,158,106,0.25)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "rgba(122,158,106,0.5)" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "#6b8a5c" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-1.5"
                style={{ color: "#2a3524" }}
              >
                Botanical Print Sizes for Etsy
              </span>
              <span
                className="block text-xl md:text-2xl lg:text-3xl font-semibold"
                style={{ color: "#4a5a40" }}
              >
                What sizes to offer, by sub-niche, with gallery&nbsp;wall&nbsp;sets
              </span>
            </h1>
            <p className="text-base mb-5 max-w-lg" style={{ color: "#5a6a4e" }}>
              Botanical art buyers want large statement pieces, curated gallery
              walls, and international sizes. Here&apos;s the niche-specific
              sizing guide no one else has written &mdash; covering vintage,
              minimalist, dark, tropical, and herb botanical prints.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Botanical Sizes
                </Button>
              </a>
              <p className="text-sm mt-1.5" style={{ color: "#7a8a6a" }}>
                Free &rarr; upload once, get every botanical size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(122,158,106,0.3)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#7a9e6a" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "#3a4a32" }}>
                  8 must-have sizes
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(122,158,106,0.3)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#7a9e6a" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "#3a4a32" }}>
                  6 sub-niche breakdowns
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(122,158,106,0.3)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#7a9e6a" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "#3a4a32" }}>
                  Gallery wall sets
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
            <QuickAnswer question="What sizes sell best for botanical prints on Etsy?">
              <strong>8&times;10, 11&times;14, and A4</strong> are the top sellers for botanical wall art. Include ISO sizes (A4, A3) for international buyers &mdash; botanical art is especially popular in Europe and Australia.
            </QuickAnswer>
            {/* --- H2 1: Why Botanical Print Sizing Is Different --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Botanical Print Sizing Is Different from Other Niches
              </h2>
              <p className="text-foreground-60 mb-4">
                Botanical art is not nursery art. It&apos;s not abstract
                minimalism. And generic Etsy print size charts don&apos;t
                address what makes this niche unique. Three things set botanical
                sizing apart.
              </p>
              <p className="text-foreground-60 mb-4">
                <strong className="text-foreground">Large-format dominance.</strong>{" "}
                Botanical buyers want statement wall pieces. A vintage fern
                illustration at{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24x36
                </Link>{" "}
                becomes a living room centerpiece. A tropical monstera at{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18x24
                </Link>{" "}
                anchors a dining room. Unlike nursery, abstract, or <Link href="/etsy-boho-wall-art-sizes" className="text-accent-light hover:underline">boho wall art</Link>, botanical
                prints over-index on sizes 16x20 and above.
              </p>
              <p className="text-foreground-60 mb-4">
                <strong className="text-foreground">Gallery wall sets.</strong>{" "}
                Botanical sellers earn their highest revenue from coordinated
                sets of 3 or 6 prints. That means every print in the set needs
                consistent sizing &mdash; and offering the set in multiple size
                options (small, medium, large) multiplies the number of files
                you need to create.
              </p>
              <p className="text-foreground-60">
                <strong className="text-foreground">Portrait-heavy compositions.</strong>{" "}
                85%+ of botanical prints on Etsy are vertical, following the
                natural upward growth pattern of plants. The dominant ratios
                are 2:3 and 3:4 &mdash; tall, elegant proportions that match
                the classic botanical illustration tradition dating back
                centuries. Understanding which{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  print ratios work
                </Link>{" "}
                for your sub-niche is essential.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-botanical-print-mockup.jpg" alt="Dining room with two framed botanical prints — a large fern and smaller eucalyptus — in black frames above an oak table" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- H2 2: The 8 Must-Have Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 8 Must-Have Sizes for Botanical Prints on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                These are the sizes that top-selling botanical art listings
                consistently include. Each one serves a specific buyer need.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Botanical Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        <Link
                          href="/etsy-5x7-print-size"
                          className="text-accent-light hover:underline"
                        >
                          5x7
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500 x 2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Herb kitchen prints, bedside botanicals
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8x10
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400 x 3000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:5
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        #1 standard frame, gallery wall staple
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">
                          11×14
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 x 4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery wall centerpiece, photo mat standard
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16x20
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 x 6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:5
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement wall art, living room focal point
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18x24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400 x 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3:4
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format, dining room and hallway
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24x36
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 x 10800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2:3
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement poster, living room centerpiece
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">A4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 x 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        ISO
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        International buyers (UK, EU, Australia)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold"><Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link></td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 x 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        ISO
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large international format, gallery standard
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                Notice the emphasis on large formats. Unlike{" "}
                <Link
                  href="/etsy-nursery-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  nursery wall art
                </Link>{" "}
                where smaller shelf sizes dominate, botanical buyers gravitate
                toward 16x20 and above. A single fern print at 24x36 can be the
                only piece of art a buyer needs for an entire wall.
              </p>
              <p className="text-foreground-60">
                These 8 sizes span four different ratio packs, which is why
                top sellers include multiple packs in every listing. For the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print size guide
                </Link>{" "}
                covering all 30 sizes, see the pillar page.
              </p>
            </div>

            {/* --- CTA 1: After 8 Must-Have Sizes --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Generate All 8 Botanical Sizes from One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your botanical artwork once. Get every size above at
                  300&nbsp;DPI &mdash; organized by ratio, named for buyers,
                  and ready to list on Etsy.
                </p>
                <a
                  href="https://app.snaptosize.com?source=seo_botanical&kind=sizes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 3: Sub-Niche Sizing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Botanical Sub-Niches and Their Best-Performing Sizes
              </h2>
              <p className="text-foreground-60 mb-6">
                Not all botanical art sells the same sizes. Each sub-niche has
                distinct buyer preferences based on where the art gets displayed
                and what aesthetic it serves. Here&apos;s what the data shows.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "#f0ede4", color: "#8a7a5e" }}
                    >
                      <Leaf className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Vintage Botanical Illustrations
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Favor tall 2:3 formats that echo antique botanical plates.
                        Best sizes: 8x12, 12x18, 24x36, and A3. Strong overlap with{" "}
                        <Link href="/etsy-vintage-art-print-sizes" className="text-accent-light hover:underline">vintage art print sizes</Link>.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          2:3 dominant
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Large format
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "#f0f2f0", color: "#5a6a5a" }}
                    >
                      <span className="text-lg font-light">/</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Minimalist Line Art Botanicals
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Clean lines and negative space work best in the 4:5
                        ratio. Best sizes:{" "}
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8x10
                        </Link>
                        , 16x20, and 12x15.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          4:5 dominant
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Mid-size sweet spot
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "#2a2a2a", color: "#8aaa6e" }}
                    >
                      <Leaf className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Dark / Moody Botanicals
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Dark backgrounds demand large statement sizes to create
                        impact. Best sizes:{" "}
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16x20
                        </Link>
                        ,{" "}
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18x24
                        </Link>
                        , and{" "}
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24x36
                        </Link>
                        .
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Large format only
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Statement pieces
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "#e8f2e0", color: "#4a8a3a" }}
                    >
                      <Leaf className="w-5 h-5" style={{ transform: "rotate(30deg)" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Tropical Leaf Prints
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Broad leaves and bold colors work across the widest range
                        of sizes, including squares. Best sizes: 8x10, 16x20,
                        24x36, plus <Link href="/etsy-square-print-sizes" className="text-accent-light hover:underline">square formats</Link> like 12x12 and 16x16.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Multi-ratio
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Squares popular
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "#f0f4f8", color: "#6a8aaa" }}
                    >
                      <Flower2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Watercolor Botanicals
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Soft watercolor textures shine at mid-range sizes where
                        details are visible without overwhelming the room. Best
                        sizes: 8×10, 11×14, and 12×16. See our full{" "}
                        <Link href="/etsy-watercolor-print-sizes" className="text-accent-light hover:underline">watercolor print sizes guide</Link>{" "}
                        for sub-niche recommendations.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          3:4 and 4:5
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Mid-size focus
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "#f4f0e4", color: "#7a8a5a" }}
                    >
                      <span className="text-base">&#9752;</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Herb &amp; Kitchen Botanicals
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Kitchen-sized prints for above counters and small walls.
                        Smaller sizes dominate: 5x7, 8x10, A4. Often sold as
                        sets of 4-6 matching herb prints.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Small format
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Sets of 4-6
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60 mt-6">
                The takeaway: one size list doesn&apos;t fit every botanical
                style. If you sell vintage botanicals, lean heavily into 2:3.
                If you sell{" "}
                <Link
                  href="/etsy-minimalist-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  minimalist line art
                </Link>
                , prioritize 4:5. Botanical prints pair naturally with{" "}
                <Link
                  href="/etsy-boho-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  boho wall art
                </Link>{" "}
                &mdash; consider cross-listing in both niches. If you sell
                across sub-niches, include all ratio packs. For more on{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include
                </Link>
                , see our sizing strategy guide.
              </p>
            </div>

            {/* --- H2 4: Gallery Wall Sets --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Gallery Wall Sets &mdash; Sizing for 3-Piece and 6-Piece
                Botanical Bundles
              </h2>
              <p className="text-foreground-60 mb-6">
                Gallery wall sets are the highest-revenue format for botanical
                sellers. Buyers pay a premium for curated sets because choosing
                matching prints individually is stressful. The key to gallery
                wall sizing: consistency within each set, variety across your
                size options. For all 5 arrangement types with exact dimensions,
                see our{" "}
                <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">
                  gallery wall print sizes guide
                </Link>.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    3-Piece Set: Same Size
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3 x 8x10
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3 x 11x14
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3 x 12x16
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    All three prints are the same size for a clean, cohesive
                    gallery wall. This is the most popular botanical set format.
                    Offer the set in multiple size options within a single
                    listing &mdash; &ldquo;Set of 3 available in{" "}
                    <Link
                      href="/etsy-8x10-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8x10
                    </Link>
                    , 11x14, or 16x20&rdquo; dramatically increases conversion.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    3-Piece Set: Mixed Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1 x 16x20
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      2 x 8x10
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    One large centerpiece flanked by two smaller matching prints.
                    Creates visual hierarchy on the wall. Popular for botanical
                    art where one hero illustration anchors the arrangement.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    6-Piece Set: Gallery Grid
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      6 x 8x10
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      6 x 5x7
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      6 x 11x14
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    Six matching prints in a 2x3 or 3x2 grid. All the same size.
                    This is the premium format for herb sets (basil, rosemary,
                    thyme, sage, lavender, mint) and botanical series (ferns,
                    palms, wildflowers). Higher price point, higher perceived
                    value.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Revenue tip:</strong>{" "}
                    Offering a single gallery wall set in 3 size options (e.g.,
                    8x10 / 11x14 / 16x20) within one listing means each
                    artwork in the set needs to be resized to 3 different
                    sizes. For a 3-piece set, that&apos;s 9 individual files.
                    For a 6-piece set, that&apos;s 18 files. SnapToSize
                    generates all sizes from each upload in seconds.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- CTA 2: After Gallery Wall Sets --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Upload Your Botanical Set Once
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Download every size for all prints in under a minute. No
                  cropping, no manual resizing &mdash; your botanical details
                  stay intact at every dimension.
                </p>
                <a
                  href="https://app.snaptosize.com?source=seo_botanical&kind=gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 5: Ratio Packs --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ratio Packs for Botanical Art &mdash; Which Ratios Matter Most
              </h2>
              <p className="text-foreground-60 mb-6">
                SnapToSize organizes sizes into{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  5 ratio packs
                </Link>
                . Here&apos;s how each one maps to botanical art specifically.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio Pack
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Sizes Included
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Botanical Relevance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        2:3 (7 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4x6, 6x9, 8x12, 10x15, 12x18, 16x24, 20x30
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Hero ratio for botanical art &mdash; the classic tall
                        proportion matching vintage botanical plates
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        4:5 (5 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8x10, 12x15, 16x20, 20x25, 24x30
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Essential 8x10 and 16x20 &mdash; the two most-requested
                        botanical sizes
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        3:4 (5 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6x8, 9x12, 12x16, 15x20, 18x24
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        12x16 for gallery walls, 18x24 for large botanical
                        statement pieces
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        ISO (5 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        A5, A4, A3, A2, A1
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Critical for botanical art &mdash; stronger
                        international buyer base than most niches
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">
                        Extras (6 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5x7, 8.5x11, 11x14, 11x17, 13x19, 20x24
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5x7 for herb prints, 11x14 for gallery wall
                        centerpieces
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                <strong className="text-foreground">2:3 is the hero ratio for botanical art.</strong>{" "}
                It covers 4x6 through 24x36 &mdash; the classic tall
                proportion that echoes centuries of botanical illustration. If
                you only download one ratio pack, make it 2:3.
              </p>
              <p className="text-foreground-60 mb-4">
                But one ratio pack isn&apos;t enough. 4:5 gives you the
                essential 8x10 and 16x20. 3:4 handles 12x16 and 18x24. ISO
                covers international buyers. Extras adds 5x7 and 11x14.
                Downloading all 5 packs gives you complete botanical coverage
                &mdash; 30 sizes from a single upload.
              </p>
              <p className="text-foreground-60">
                Use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to verify exact pixel dimensions for any specific size.
              </p>
            </div>

            {/* --- H2 6: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Sizing Mistakes Botanical Sellers Make
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Only offering 8x10
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        8x10 is the most popular overall, but botanical art
                        buyers specifically want large statement sizes.
                        Listings limited to 8x10 miss the 16x20, 18x24, and
                        24x36 buyers who make up a disproportionate share of
                        botanical purchases. Include at least 8 sizes spanning
                        small through poster formats.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Cropping vertical compositions for different ratios
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        A 2:3 botanical illustration cropped to 4:5 loses the
                        top and bottom of the plant. Buyers expect the full
                        composition shown in your listing preview. Use a tool
                        that generates each ratio without cropping, so every
                        detail of your botanical art stays intact. Learn how
                        to{" "}
                        <Link
                          href="/how-to-resize-images-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          resize images for Etsy
                        </Link>{" "}
                        correctly.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Ignoring A-series sizes
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Botanical art has a stronger international buyer base
                        than most Etsy niches. UK, European, and Australian
                        buyers use A4 and A3 as their standard frame sizes.
                        Skipping A-series means leaving 20-30% of potential
                        botanical buyers without a usable file. The ISO pack
                        generates A5 through A1 automatically.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Inconsistent sizes across gallery wall sets
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        If your &ldquo;Set of 3 Botanical Prints&rdquo;
                        includes Print A at 8x10 but Print B at a slightly
                        different dimension, the gallery wall looks uneven when
                        framed. All prints in a gallery wall set must be
                        exactly the same pixel dimensions. Generate them from
                        the same ratio pack to ensure consistency.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Low-resolution files that pixelate at large sizes
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        A 24x36 poster at 300 DPI needs 7200 x 10800 pixels.
                        If your source file doesn&apos;t have enough resolution,
                        the print will be blurry and you&apos;ll get refund
                        requests. Always start with a high-resolution source
                        and verify your files meet{" "}
                        <Link
                          href="/best-resolution-for-etsy-printables"
                          className="text-accent-light hover:underline"
                        >
                          300 DPI requirements
                        </Link>{" "}
                        before listing.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- H2 7: How to Generate All Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Generate All Botanical Print Sizes from One Upload
              </h2>
              <p className="text-foreground-60 mb-6">
                A botanical seller with 50 listings offering sets of 3 in 10
                sizes needs 1,500 individual resize operations. Here&apos;s how
                to reduce that to 50 uploads.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "#e8ede4", color: "#5a7a4a" }}
                  >
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Upload your high-res botanical illustration
                    </h3>
                    <p className="text-foreground-60 text-sm">
                      One file. Any resolution. SnapToSize detects the
                      dimensions and optimizes from there.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "#e8ede4", color: "#5a7a4a" }}
                  >
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Select your ratio packs
                    </h3>
                    <p className="text-foreground-60 text-sm">
                      Choose the packs that match your sub-niche. For full
                      botanical coverage: all 5 packs (2:3, 3:4, 4:5, ISO,
                      Extras) &mdash; 30 sizes total.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "#e8ede4", color: "#5a7a4a" }}
                  >
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Download organized ZIP packs
                    </h3>
                    <p className="text-foreground-60 text-sm">
                      Each ratio pack downloads as a separate ZIP file.
                      Professional file naming (e.g.,{" "}
                      <code className="text-accent-light">
                        artwork_8x10_300dpi.jpg
                      </code>
                      ). All files at 300 DPI, JPEG format, under 20 MB per
                      ZIP &mdash; ready for Etsy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">No cropping</strong>{" "}
                    &mdash; every botanical detail preserved at every size
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">300 DPI on every output</strong>{" "}
                    &mdash; professional print quality guaranteed
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Under 20 MB per ZIP</strong>{" "}
                    &mdash; Etsy compliant, every time
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">30 sizes from one upload</strong>{" "}
                    &mdash; hours of manual work done in seconds
                  </span>
                </div>
              </div>

              <p className="text-foreground-60">
                Instead of 1-3 hours per artwork resizing in Photoshop, your
                entire botanical catalog gets every standard print size in
                seconds. That&apos;s time back for creating new art, not
                fighting with export settings.
              </p>
            </div>

            {/* --- CTA 3: FinalCTA after walkthrough --- */}
            <div>
              <FinalCTA
                heading="Resize Your Botanical Art in Seconds"
                stat="30 sizes across 5 ratio packs from one upload"
                description="Upload one botanical illustration and receive every size at 300 DPI. No cropping — your details stay intact."
                buttonText="Try SnapToSize Free"
                appUrl="https://app.snaptosize.com?source=seo_botanical&kind=guide"
              />
            </div>

            {/* --- H2 8: FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "What is the best-selling botanical print size on Etsy?",
                    answer:
                      "8\u00d710 is the #1 seller overall, but botanical art over-indexes on large formats \u2014 16\u00d720 and 24\u00d736 outsell their generic averages because buyers use botanical prints as statement wall pieces. Offering both small and large sizes captures the full market.",
                  },
                  {
                    question:
                      "How many sizes should I include in a botanical print listing?",
                    answer:
                      "Top botanical sellers offer 8\u201315 sizes per listing. At minimum, include 8\u00d710, 11\u00d714, 16\u00d720, 24\u00d736, and A4. More sizes means higher perceived value, fewer \u2018do you have this in...\u2019 messages, and better search visibility on Etsy.",
                  },
                  {
                    question:
                      "Should botanical prints be vertical or horizontal?",
                    answer: (
                      <>
                        85%+ of botanical prints on Etsy are vertical (portrait orientation). This follows the natural growth pattern of plants and matches the classic botanical illustration tradition. However, offering{" "}
                        <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">both orientations</Link>{" "}
                        as separate listings can double your catalog with minimal extra work &mdash; SnapToSize handles both from the same upload.
                      </>
                    ),
                  },
                  {
                    question:
                      "What sizes work best for botanical gallery wall sets?",
                    answer:
                      "The most popular gallery wall sizes for botanical sets are 8\u00d710, 11\u00d714, and 12\u00d716. All three prints in a set should be the same size for a cohesive look. Offering the set in 3 size options (small, medium, large) in a single listing maximizes conversion.",
                  },
                  {
                    question:
                      "Do I need to include international (A-series) sizes for botanical prints?",
                    answer:
                      "Yes. Botanical art has a strong international buyer base, especially in the UK, Europe, and Australia where A4 and A3 are the standard frame sizes. Skipping A-series means leaving 20\u201330% of potential buyers without a usable file. SnapToSize\u2019s ISO pack generates A5 through A1 automatically.",
                  },
                ]}
              />
            </div>

            {/* --- Contextual CTA --- */}
            <div className="pb-12">
              <ContextualCTA
                problem="Listing botanical printables? Your buyers expect every standard size."
                solution="One botanical artwork → complete size pack in seconds. Every ratio, every size, organized in ZIPs."
                buttonText="Resize Your Botanicals"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-botanical-print-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
