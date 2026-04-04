import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Digital Planner Sizes for Etsy — A4, A5, Letter",
  description:
    "Complete guide to digital planner sizes for Etsy sellers. A4, A5, US Letter pixel dimensions at 300 DPI, plus how to expand into wall art prints.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-digital-planner-sizes",
  },
  openGraph: {
    title: "Digital Planner Sizes for Etsy | SnapToSize",
    description:
      "Printable planner page dimensions for Etsy. A4, A5, US Letter at 300 DPI, plus wall art expansion for planner sellers.",
    url: "https://snaptosize.com/etsy-digital-planner-sizes",
    images: [
      {
        url: "/assets/og/etsy-digital-planner-sizes.png",
        width: 1200,
        height: 630,
        alt: "Digital Planner Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Planner Sizes for Etsy — A4, A5, Letter",
    description:
      "Printable planner page dimensions for Etsy. A4, A5, US Letter at 300 DPI, plus wall art expansion for planner sellers.",
    images: ["/assets/og/etsy-digital-planner-sizes.png"],
  },
};

export default function EtsyDigitalPlannerSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Digital Planner Sizes for Etsy — A4, A5, US Letter and Beyond",
    description:
      "Complete guide to digital planner sizes for Etsy sellers. Covers printable planner page dimensions (A4, A5, US Letter, Half Letter) at 300 DPI, digital-only planner sizes for GoodNotes and Notability, best-selling sizes, and how planner sellers can expand into wall art.",
    url: "https://snaptosize.com/etsy-digital-planner-sizes",
    datePublished: "2026-04-04",
    dateModified: "2026-04-04",
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
        name: "Digital Planner Sizes",
        item: "https://snaptosize.com/etsy-digital-planner-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What size should I make my digital planner for Etsy?",
      answer:
        "Offer at least US Letter (8.5\u00d711), A4, and A5 to cover both US and international buyers. These three sizes capture the widest audience with minimal extra work. US Letter and A4 are near-identical in use but different dimensions, so offering both prevents buyer confusion.",
    },
    {
      question:
        "What is the difference between A4 and US Letter for planners?",
      answer:
        "A4 (210\u00d7297 mm / 8.27\u00d711.69\u201d) is slightly narrower and taller than US Letter (8.5\u00d711\u201d). A4 is the international standard used in the UK, EU, and Australia. US Letter is the North American standard. Offering both ensures worldwide buyers can print your planner correctly on their local paper size.",
    },
    {
      question:
        "What DPI should I use for printable planners on Etsy?",
      answer:
        "300 DPI for any planner page that will be physically printed. This is the professional print standard and ensures crisp text, lines, and graphics at any size. Digital-only planners for GoodNotes or Notability can use 150 DPI since they display on screens, but 300 DPI works for both use cases.",
    },
    {
      question:
        "What are the pixel dimensions for A5 planner pages at 300 DPI?",
      answer:
        "A5 at 300 DPI is 1748\u00d72480 pixels (148\u00d7210 mm). This is the most popular compact planner size and fits standard A5 binders and ring planners. It\u2019s small enough for portability but large enough for detailed weekly and daily layouts.",
    },
    {
      question:
        "Can I sell both digital planners and wall art on the same Etsy shop?",
      answer:
        "Yes, and many successful Etsy shops do exactly this. Planner designs featuring typography, quotes, and minimalist patterns translate directly into wall art. Offering both product types increases your shop\u2019s keyword visibility and average order value without requiring entirely new design skills.",
    },
    {
      question:
        "What wall art sizes should I add if I already sell planners?",
      answer:
        "Start with sizes you already know: A4, A5, and 8.5\u00d711 (US Letter). Then expand to popular frame sizes like 8\u00d710, 5\u00d77, 11\u00d714, 16\u00d720, and 24\u00d736. SnapToSize generates 30+ sizes from a single upload, so you can offer a complete wall art catalog from one design file.",
    },
    {
      question:
        "How do I resize one design into multiple planner and print sizes?",
      answer:
        "For planner pages, create your design at the largest size (US Letter or A4) and scale down to A5 and smaller. For wall art, upload your artwork once to SnapToSize and get up to 70 print-ready files across all standard frame sizes at 300 DPI \u2014 portrait, landscape, and square orientations included.",
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
    "https://app.snaptosize.com/app/quick-export?source=seo_digital-planner-sizes&kind=guide";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
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
            "linear-gradient(155deg, #0f1419 0%, #111318 25%, #0e1117 50%, #101316 75%, #0c0f13 100%)",
        }}
      >
        {/* Subtle ambient texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 40%, rgba(45,212,191,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(167,139,250,0.3) 0%, transparent 40%)",
          }}
        />

        {/* Teal glow — top left */}
        <div
          className="absolute top-[-8%] left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #2dd4bf, transparent 70%)",
          }}
        />
        {/* Purple accent glow — bottom right */}
        <div
          className="absolute bottom-[-12%] right-[-3%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #a78bfa, transparent 70%)",
          }}
        />

        {/* CSS-only Planner-to-Frames Visual — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "360px", height: "340px" }}
          >
            {/* Left side: Planner page outlines */}
            {/* A5 planner page */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "60px",
                height: "85px",
                top: "30px",
                left: "0px",
                background: "rgba(45,212,191,0.06)",
                border: "1.5px solid rgba(45,212,191,0.18)",
              }}
            >
              {/* Planner lines */}
              <div className="absolute top-[12px] left-[6px] right-[6px] space-y-[5px]">
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.12)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.10)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.08)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.06)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.08)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.06)" }} />
              </div>
            </div>
            {/* US Letter planner page */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "68px",
                height: "88px",
                top: "130px",
                left: "10px",
                background: "rgba(45,212,191,0.04)",
                border: "1.5px solid rgba(45,212,191,0.14)",
              }}
            >
              <div className="absolute top-[10px] left-[6px] right-[6px] space-y-[5px]">
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.10)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.08)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.06)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.08)" }} />
                <div className="h-[1px]" style={{ background: "rgba(45,212,191,0.06)" }} />
              </div>
            </div>

            {/* Arrow / transition element */}
            <div
              className="absolute"
              style={{
                top: "140px",
                left: "100px",
                width: "40px",
                height: "2px",
                background: "linear-gradient(90deg, rgba(45,212,191,0.3), rgba(167,139,250,0.3))",
              }}
            />
            <div
              className="absolute"
              style={{
                top: "136px",
                left: "132px",
                width: "8px",
                height: "10px",
                borderRight: "2px solid rgba(167,139,250,0.3)",
                borderBottom: "2px solid rgba(167,139,250,0.3)",
                transform: "rotate(-45deg)",
              }}
            />

            {/* Right side: Wall art frame sizes fanning out */}
            {/* Small frame — 5x7 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "35px",
                height: "50px",
                top: "15px",
                right: "120px",
                background: "rgba(167,139,250,0.06)",
                border: "1.5px solid rgba(167,139,250,0.15)",
              }}
            />
            {/* Medium frame — 8x10 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "48px",
                height: "60px",
                top: "25px",
                right: "55px",
                background: "rgba(167,139,250,0.05)",
                border: "1.5px solid rgba(167,139,250,0.13)",
              }}
            />
            {/* Large frame — 16x20 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "64px",
                height: "80px",
                top: "100px",
                right: "90px",
                background: "rgba(167,139,250,0.04)",
                border: "1.5px solid rgba(167,139,250,0.12)",
              }}
            />
            {/* Extra large frame — 18x24 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "72px",
                height: "96px",
                top: "110px",
                right: "0px",
                background: "rgba(167,139,250,0.03)",
                border: "1.5px solid rgba(167,139,250,0.10)",
              }}
            />
            {/* Oversized frame — 24x36 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "56px",
                height: "84px",
                bottom: "10px",
                right: "50px",
                background: "rgba(167,139,250,0.03)",
                border: "1px solid rgba(167,139,250,0.08)",
              }}
            />

            {/* Size labels */}
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "18px",
                left: "18px",
                color: "rgba(45,212,191,0.35)",
              }}
            >
              A5
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "230px",
                left: "28px",
                color: "rgba(45,212,191,0.30)",
              }}
            >
              Letter
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "8px",
                right: "63px",
                color: "rgba(167,139,250,0.28)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "185px",
                right: "100px",
                color: "rgba(167,139,250,0.24)",
              }}
            >
              16&times;20
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                right: "60px",
                color: "rgba(167,139,250,0.20)",
              }}
            >
              24&times;36
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="h-px w-8"
                style={{ background: "rgba(45,212,191,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(45,212,191,0.7)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#f0f4f8" }}
              >
                Digital Planner Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(240,244,248,0.6)" }}
              >
                A4, A5, US Letter &mdash; and beyond
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(240,244,248,0.5)" }}
            >
              The complete sizing reference for Etsy planner sellers. Printable
              page dimensions at 300 DPI, digital-only planner specs, and how
              to expand your planner designs into wall art prints.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Planner &amp; Print Sizes
                </Button>
              </a>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(240,244,248,0.35)" }}
              >
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,244,248,0.6)" }}
                >
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,244,248,0.6)" }}
                >
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,244,248,0.6)" }}
                >
                  Portrait, landscape &amp; square
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
            <QuickAnswer question="What sizes do I need for a digital planner on Etsy?">
              Offer at least <strong>US Letter (8.5&times;11 / 2550&times;3300px)</strong>, <strong>A4 (2480&times;3508px)</strong>, and <strong>A5 (1748&times;2480px)</strong> at 300 DPI. These three sizes cover US and international buyers and are the most searched planner dimensions on Etsy.
            </QuickAnswer>

            {/* --- H2 1: What Are Digital Planner Sizes? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Are Digital Planner Sizes?
              </h2>
              <p className="text-foreground-60 mb-4">
                Digital planner sizes fall into two categories. The first is
                <strong> printable planner pages</strong> &mdash; designed for
                physical printing on standard paper sizes like A4, A5, and US
                Letter. Buyers download the file and print at home or through a
                local print shop. These need 300 DPI resolution for crisp text
                and clean lines.
              </p>
              <p className="text-foreground-60 mb-4">
                The second category is <strong>digital-only planners</strong>{" "}
                built for tablet apps like GoodNotes, Notability, and Noteshelf.
                These use screen-optimized dimensions at lower resolution
                (96&ndash;150 DPI) because they&apos;re never printed.
              </p>
              <p className="text-foreground-60">
                This guide covers both types, with a focus on printable planner
                sizes &mdash; the format that drives the highest sales volume
                for Etsy sellers. If you&apos;re also selling printable wall
                art, the same A4, A5, and Letter sizes you already work with
                are the starting point for expanding into{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  dozens of standard frame sizes
                </Link>
                .
              </p>
            </div>

            {/* --- H2 2: Standard Digital Planner Sizes for Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Standard Digital Planner Sizes for Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                These are the most common printable planner page sizes on Etsy.
                Every pixel dimension is calculated at 300 DPI &mdash; the
                professional print standard. For deeper guides on individual
                sizes, see the{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4 print dimensions
                </Link>
                ,{" "}
                <Link
                  href="/etsy-a5-print-size"
                  className="text-accent-light hover:underline"
                >
                  A5 print size guide
                </Link>
                , and{" "}
                <Link
                  href="/etsy-8-5x11-print-size"
                  className="text-accent-light hover:underline"
                >
                  US Letter print size for Etsy
                </Link>
                .
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Dimensions
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
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-8-5x11-print-size"
                          className="text-accent-light hover:underline"
                        >
                          US Letter
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8.5&times;11&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550&times;3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US buyers, home printing default
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a4-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A4
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        210&times;297 mm
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480&times;3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        International standard (UK, EU, AUS)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a5-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A5
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        148&times;210 mm
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748&times;2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Compact planners, A5 binders
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Half Letter
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5.5&times;8.5&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1650&times;2550
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Junior/half-size binders, compact US option
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        A6
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        105&times;148 mm
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1240&times;1748
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Pocket planners, personal ring binders
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">
                        Happy Planner Classic
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7&times;9.25&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2100&times;2775
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Happy Planner disc system
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm">
                SnapToSize directly supports A5, A4, and 8.5&times;11 (US
                Letter) as part of the ISO A-Series and Extras packs. These
                three sizes form the core of any Etsy planner listing.
              </p>
            </div>

            {/* Planner size comparison diagram */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-digital-planner-sizes-comparison.png"
                alt="Planner page sizes compared at actual proportions — A6, Half Letter, A5, US Letter, A4, and Happy Planner Classic with pixel dimensions at 300 DPI"
                width={1200}
                height={500}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* --- H2 3: Digital-Only Planner Sizes (GoodNotes, Notability) --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Digital-Only Planner Sizes for GoodNotes and Notability
              </h2>
              <p className="text-foreground-60 mb-4">
                Digital-only planners are designed for tablet apps rather than
                physical printing. The standard GoodNotes template is
                1112&times;834 pixels in landscape (or 834&times;1112 in
                portrait) &mdash; optimized for iPad screen ratios.
              </p>
              <p className="text-foreground-60 mb-4">
                Because these planners are never printed, they use lower DPI
                (96&ndash;150 vs. 300 for printable). This means smaller file
                sizes and faster loading in the app. However, most Etsy
                buyers searching for planner sizes are looking for printable
                dimensions, and printable planners consistently outsell
                digital-only versions.
              </p>
              <p className="text-foreground-60">
                If you offer both formats, keep them as separate listings with
                clear titles (&ldquo;Printable Planner&rdquo; vs. &ldquo;Digital
                Planner for GoodNotes&rdquo;). Mixing formats in one listing
                leads to buyer confusion and returns. For guidance on setting up
                your files correctly, see{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  what files to include in an Etsy digital download
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1: After Section 3 (GoodNotes) --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Printable Planner Pages Need 300 DPI
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Already creating planner pages at A4 or US Letter? Upload
                  once and get both sizes at 300 DPI &mdash; plus A5, A3, and
                  30+ more sizes from a single file. Every output is
                  print-ready and organized for Etsy.
                </p>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 4: Which Sizes Sell Best on Etsy? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Which Planner Sizes Sell Best on Etsy?
              </h2>
              <p className="text-foreground-60 mb-4">
                US Letter and A4 dominate printable planner sales on Etsy. These
                are the default paper sizes for home printers in North America
                and internationally, which means buyers can print immediately
                without adjusting settings.
              </p>
              <p className="text-foreground-60 mb-4">
                A5 is the most popular compact option &mdash; ideal for buyers
                using A5 ring binders or those who prefer a portable planner.
                Offering all three sizes (Letter + A4 + A5) as a minimum
                covers the broadest buyer base.
              </p>
              <p className="text-foreground-60 mb-4">
                There&apos;s a strategic reason to offer multiple sizes beyond
                convenience: each size targets different search keywords and
                buyer preferences on Etsy. A listing titled &ldquo;Weekly
                Planner A4 A5 Letter&rdquo; appears in more searches than one
                offering a single size. For the full strategy on maximizing
                listing coverage, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include in an Etsy printable
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                Top-performing planner sellers on Etsy typically offer 3&ndash;4
                sizes per listing: US Letter, A4, A5, and sometimes Half
                Letter. This pattern maximizes search visibility while keeping
                file setup manageable.
              </p>
            </div>

            {/* --- H2 5: From Planner Seller to Wall Art Seller --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                From Planner Seller to Wall Art Seller
              </h2>
              <p className="text-foreground-60 mb-4">
                Many planner sellers on Etsy already have the design skills and
                artwork to sell wall art prints &mdash; they just haven&apos;t
                made the leap yet. Quote prints, motivational typography,
                minimalist patterns, and organizational illustrations all
                translate directly from planner pages to wall art.
              </p>
              <p className="text-foreground-60 mb-4">
                The business case is straightforward: adding wall art to your
                shop increases your average order value, exposes your listings
                to entirely new buyer keywords, and leverages designs you&apos;ve
                already created. A typography design that works as a planner
                cover page also works as an{" "}
                <Link
                  href="/etsy-quote-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  8&times;10 or 16&times;20 quote wall art print
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                The challenge is offering enough sizes. Wall art buyers expect
                multiple frame size options, and the sizes go well beyond A4
                and Letter. The next section breaks down which wall art sizes
                to prioritize as a planner seller expanding your catalog. For
                the full beginner guide, see{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to sell digital downloads on Etsy
                </Link>
                .
              </p>
            </div>

            {/* --- H2 6: Wall Art Sizes Every Planner Seller Should Know --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Wall Art Print Sizes Every Planner Seller Should Know
              </h2>
              <p className="text-foreground-60 mb-6">
                If you&apos;re expanding from planners into wall art, these are
                the sizes organized by aspect ratio. You already know A4, A5,
                and Letter &mdash; the rest are standard frame sizes that
                buyers search for daily. For a full explanation of how ratios
                work, see{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  understanding print ratios
                </Link>
                .
              </p>

              {/* Ratio pack cards */}
              <div className="grid gap-4 mb-6">
                <div className="rounded-lg border border-border bg-surface p-5 border-l-[3px] border-l-teal-400">
                  <h3 className="text-base font-semibold mb-2">
                    2:3 Ratio &mdash; Most Common for Wall Art
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    The dominant wall art ratio. Fits standard poster frames.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Sizes:</strong> 4&times;6, 6&times;9,
                    8&times;12, 10&times;15, 12&times;18, 16&times;24,
                    20&times;30
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5 border-l-[3px] border-l-purple-400">
                  <h3 className="text-base font-semibold mb-2">
                    3:4 Ratio &mdash; Classic Photo Frame
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Standard photo and art frame proportions.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Sizes:</strong> 6&times;8, 9&times;12,
                    12&times;16, 15&times;20, 18&times;24
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5 border-l-[3px] border-l-pink-400">
                  <h3 className="text-base font-semibold mb-2">
                    4:5 Ratio &mdash; Home of the 8&times;10
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Includes the best-selling print size on Etsy (8&times;10).
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Sizes:</strong> 8&times;10, 12&times;15,
                    16&times;20, 20&times;25, 24&times;30
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5 border-l-[3px] border-l-blue-400">
                  <h3 className="text-base font-semibold mb-2">
                    ISO A-Series &mdash; International Standard
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    You already know A4 and A5 from planners. The full series
                    covers international frame sizes.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Sizes:</strong> A5, A4, A3, A2, A1
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5 border-l-[3px] border-l-orange-400">
                  <h3 className="text-base font-semibold mb-2">
                    Extras &mdash; Common Sizes
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Includes 8.5&times;11 (US Letter) plus popular frame and
                    poster sizes.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Sizes:</strong> 5&times;7, 8.5&times;11,
                    11&times;14, 11&times;17, 13&times;19, 20&times;24
                  </p>
                </div>
              </div>

              <p className="text-foreground-60 text-sm">
                Notice that A4, A5, and 8.5&times;11 &mdash; the sizes you
                already use for planners &mdash; appear in the ISO and Extras
                packs. Expanding into wall art doesn&apos;t mean starting from
                scratch. It means adding the frame sizes your planner buyers
                don&apos;t know they need yet. For the complete chart, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2: After Section 6 (Wall art sizes) --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Expand From Planners to Wall Art &mdash; Zero Extra Design Work
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Your planner artwork &mdash; quotes, patterns, illustrations
                  &mdash; is already wall art. Upload once and get up to 70
                  print-ready files across every standard frame size. Portrait
                  and landscape orientations included.
                </p>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes From One Upload
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 7: How to Create Print-Ready Files at 300 DPI --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create Print-Ready Files at 300 DPI
              </h2>
              <p className="text-foreground-60 mb-4">
                300 DPI is the standard for both printable planners and wall
                art. It stands for &ldquo;dots per inch&rdquo; and determines
                how sharp your print looks at a given physical size. At 300
                DPI, text stays crisp, lines remain clean, and gradients print
                smoothly. For more on why resolution matters, see{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>
                .
              </p>
              <p className="text-foreground-60 mb-4">
                To get the right pixel dimensions, multiply the physical size
                in inches by 300. For example, US Letter at 300 DPI is
                8.5&times;300 = 2550 pixels wide and 11&times;300 = 3300
                pixels tall. A4 at 300 DPI works out to 2480&times;3508
                pixels.
              </p>
              <p className="text-foreground-60 mb-4">
                The challenge comes when you need multiple sizes. Manually
                resizing one planner design into A4, A5, Letter, and Half
                Letter takes time. Expanding that same design into 30+ wall
                art frame sizes takes hours. Each size needs the correct pixel
                dimensions, correct DPI metadata, and professional file naming.
                For the complete file setup walkthrough, see{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to resize images for Etsy
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                This is where batch resizing saves hours of repetitive work.
                Instead of opening each design in a separate canvas for each
                size, you can generate every dimension from a single
                high-resolution file &mdash; with correct DPI, correct naming,
                and organized output.
              </p>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="One Upload, Every Planner and Print Size"
                stat="Up to 70 print-ready files from a single upload"
                description="Resizing one design into 30+ sizes manually takes hours. Upload once and get every planner size and wall art frame size at 300 DPI — organized, named, and ready for Etsy."
                buttonText="Generate All Sizes Free"
                appUrl="https://app.snaptosize.com/app/quick-export?source=seo_digital-planner-sizes&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Digital Planner Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <div className="pb-12">
              <RelatedPages currentSlug="etsy-digital-planner-sizes" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
