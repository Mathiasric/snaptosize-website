import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Watercolor Print Sizes for Etsy — Complete Guide",
  description:
    "Watercolor print sizing guide for Etsy sellers. Best sizes for florals, landscapes, animals, abstract, and nursery watercolors at 300 DPI.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-watercolor-print-sizes",
  },
  openGraph: {
    title: "Watercolor Print Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for watercolor prints on Etsy. Sub-niche breakdowns, resolution guide, file organization, and batch resizing from one upload.",
    url: "https://snaptosize.com/etsy-watercolor-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-watercolor-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Watercolor Print Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watercolor Print Sizes for Etsy — Complete Guide",
    description:
      "Best sizes for watercolor prints on Etsy. Sub-niche breakdowns, resolution guide, file organization, and batch resizing from one upload.",
    images: ["/assets/og/etsy-watercolor-print-sizes.png"],
  },
};

export default function EtsyWatercolorPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Watercolor Print Sizes for Etsy — Complete Sizing Guide for Every Sub-Niche",
    description:
      "Complete watercolor print sizing guide for Etsy sellers. Covers best-selling sizes, sub-niche breakdowns (florals, landscapes, animals, abstract, nursery), resolution requirements, file organization, and how to generate every size from one upload.",
    url: "https://snaptosize.com/etsy-watercolor-print-sizes",
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
        name: "Watercolor Print Sizes",
        item: "https://snaptosize.com/etsy-watercolor-print-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "What are the most popular print sizes for watercolor art on Etsy?",
      answer:
        "8\u00d710, 11\u00d714, and 16\u00d720 are the top three sellers. Including 5\u00d77 for small frames and 24\u00d736 for statement pieces covers the full range of buyer demand.",
    },
    {
      question: "What resolution should watercolor prints be?",
      answer:
        "300 DPI is the professional print standard. At 300 DPI, an 8\u00d710 print needs 2400\u00d73000 pixels and a 16\u00d720 needs 4800\u00d76000 pixels.",
    },
    {
      question:
        "How many sizes should I offer for each watercolor painting?",
      answer:
        "The more sizes you offer, the more buyers you reach. Top-selling watercolor shops offer 10+ sizes per listing across multiple ratios (2:3, 3:4, 4:5, ISO, and extras).",
    },
    {
      question:
        "Should watercolor prints include international paper sizes?",
      answer:
        "Yes. A4 and A3 are standard in the UK, EU, and Australia. Including ISO A-series sizes opens your listings to international buyers.",
    },
    {
      question:
        "What file format is best for watercolor digital downloads?",
      answer:
        "JPG at 300 DPI is the Etsy standard. It keeps file sizes manageable (under Etsy\u2019s 20 MB limit per file) while preserving watercolor detail.",
    },
    {
      question:
        "Do I need to offer both portrait and landscape orientations?",
      answer:
        "Yes. Many watercolor paintings work in both orientations (especially abstracts and landscapes). Offering both doubles the value of each listing.",
    },
    {
      question:
        "How do I keep my watercolor ZIP files under Etsy's 20 MB limit?",
      answer:
        "Organize files by ratio pack instead of putting all sizes in one ZIP. Each ratio pack stays well under 20 MB when using optimized JPG at 300 DPI.",
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
    "https://app.snaptosize.com/app/quick-export?source=seo_watercolor-print-sizes&kind=guide";

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
            "linear-gradient(155deg, #f8f5f0 0%, #f3ede5 25%, #eee7dd 50%, #f0ebe3 75%, #f5f0e8 100%)",
        }}
      >
        {/* Soft watercolor wash — upper left */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.35]"
          style={{
            background:
              "radial-gradient(circle, rgba(216,180,216,0.4), rgba(216,180,216,0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Warm peach glow — lower right */}
        <div
          className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.30]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,183,150,0.35), rgba(255,183,150,0.1) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Sage green accent — center right */}
        <div
          className="absolute top-[30%] right-[15%] w-[300px] h-[300px] rounded-full opacity-[0.20]"
          style={{
            background:
              "radial-gradient(circle, rgba(156,187,145,0.4), transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        {/* CSS-only Watercolor Composition — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "320px", height: "340px" }}
          >
            {/* Large organic petal shape — soft rose */}
            <div
              className="absolute"
              style={{
                width: "130px",
                height: "160px",
                top: "10px",
                left: "20px",
                background: "rgba(219,160,160,0.18)",
                border: "1px solid rgba(219,160,160,0.12)",
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
              }}
            />
            {/* Smaller petal — lavender */}
            <div
              className="absolute"
              style={{
                width: "90px",
                height: "110px",
                top: "40px",
                left: "110px",
                background: "rgba(180,160,210,0.14)",
                border: "1px solid rgba(180,160,210,0.10)",
                borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%",
              }}
            />
            {/* Leaf shape — sage green */}
            <div
              className="absolute"
              style={{
                width: "60px",
                height: "120px",
                top: "80px",
                right: "40px",
                background: "rgba(140,175,130,0.15)",
                border: "1px solid rgba(140,175,130,0.10)",
                borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
                transform: "rotate(-15deg)",
              }}
            />
            {/* Small round bloom — peach */}
            <div
              className="absolute rounded-full"
              style={{
                width: "55px",
                height: "55px",
                bottom: "70px",
                left: "50px",
                background: "rgba(255,183,150,0.18)",
                border: "1px solid rgba(255,183,150,0.12)",
              }}
            />
            {/* Thin stem — muted green */}
            <div
              className="absolute"
              style={{
                width: "2px",
                height: "100px",
                bottom: "30px",
                left: "76px",
                background: "rgba(140,175,130,0.20)",
                borderRadius: "1px",
                transform: "rotate(8deg)",
              }}
            />
            {/* Wide wash stroke — soft blue */}
            <div
              className="absolute"
              style={{
                width: "170px",
                height: "28px",
                bottom: "50px",
                right: "10px",
                background: "rgba(160,190,210,0.12)",
                border: "1px solid rgba(160,190,210,0.08)",
                borderRadius: "40% 60% 50% 50% / 50% 50% 50% 50%",
              }}
            />
            {/* Small accent dot — teal */}
            <div
              className="absolute rounded-full"
              style={{
                width: "30px",
                height: "30px",
                top: "5px",
                right: "60px",
                background: "rgba(45,212,191,0.10)",
                border: "1px solid rgba(45,212,191,0.12)",
              }}
            />

            {/* Size labels — floating, monospaced */}
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "70px",
                left: "55px",
                color: "rgba(160,120,120,0.35)",
              }}
            >
              16&times;20
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "0px",
                right: "65px",
                color: "rgba(45,212,191,0.30)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                bottom: "35px",
                right: "55px",
                color: "rgba(140,175,130,0.30)",
              }}
            >
              11&times;14
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "10px",
                left: "30px",
                color: "rgba(180,160,210,0.28)",
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
                style={{ background: "rgba(160,120,120,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(130,100,90,0.7)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#3d2e2e" }}
              >
                Watercolor Print Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(61,46,46,0.55)" }}
              >
                Every sub-niche, every frame size, one&nbsp;upload
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(61,46,46,0.55)" }}
            >
              Watercolor art is one of the largest printable niches on Etsy.
              Delicate washes and fine brushstrokes demand precise sizing at
              300&nbsp;DPI. This guide covers the best sizes for every
              watercolor sub-niche and how to generate them all from a single
              upload.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Watercolor Sizes
                </Button>
              </a>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(61,46,46,0.35)" }}
              >
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(140,175,130,0.10)",
                  borderColor: "rgba(140,175,130,0.25)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#6b8f62" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(61,46,46,0.7)" }}
                >
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(140,175,130,0.10)",
                  borderColor: "rgba(140,175,130,0.25)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#6b8f62" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(61,46,46,0.7)" }}
                >
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(140,175,130,0.10)",
                  borderColor: "rgba(140,175,130,0.25)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#6b8f62" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(61,46,46,0.7)" }}
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
            <QuickAnswer question="What sizes work best for watercolor prints on Etsy?">
              <strong>8&times;10, 11&times;14, and 16&times;20</strong> are
              the top three watercolor print sizes. Including 5&times;7 for
              small frames and 24&times;36 for statement pieces covers the
              full range of buyer demand.
            </QuickAnswer>

            {/* --- H2 1: Why Watercolor Sellers Need Multiple Print Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Watercolor Sellers Need Multiple Print Sizes
              </h2>
              <p className="text-foreground-60 mb-4">
                Watercolor art buyers frame prints in everything from small{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7 desk frames
                </Link>{" "}
                to oversized{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36 statement pieces
                </Link>
                . A single watercolor painting can appeal to a buyer looking for
                a small gift frame, a mid-size bedroom print, or a living room
                focal point. Missing sizes means missing those sales.
              </p>
              <p className="text-foreground-60 mb-4">
                Top-selling watercolor shops on Etsy offer 10 or more sizes per
                listing. More sizes means more search visibility, more buyer
                options, and higher conversion rates. The question isn&apos;t
                whether to offer multiple sizes &mdash; it&apos;s how many. See
                our{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  guide on how many sizes to include
                </Link>{" "}
                for the full strategy.
              </p>
              <p className="text-foreground-60">
                Watercolor art also has strong international demand. Buyers in
                the UK, EU, and Australia expect A4 and A3 frame sizes. Skipping
                ISO A-series means losing access to a significant share of the
                global market. For a complete overview of every standard size,
                see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

          </div>
          <div className="mt-16">
            <ListingOutputShowcase
              artwork="misty_lake"
              heading="Your watercolor art — every ratio ready to list."
              subtext="SnapToSize generates all five ratio-correct files from your original upload. No Photoshop — just upload and download."
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-16 mt-16">

            {/* Mockup image placeholder */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-watercolor-print-sizes-mockup.jpg"
                alt="Watercolor floral and landscape prints in natural wood frames displayed in a bright living room"
                width={1200}
                height={800}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* --- H2 2: Complete Watercolor Print Size Reference --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Complete Watercolor Print Size Reference
              </h2>
              <p className="text-foreground-60 mb-6">
                Every size below is at 300 DPI &mdash; the professional print
                standard. Organized by{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  aspect ratio
                </Link>{" "}
                so you can see exactly what&apos;s included in each download.
              </p>

              {/* 2:3 Ratio Pack */}
              <h3 className="text-lg font-semibold mb-3">
                2:3 Ratio &mdash; Most Common for Wall Art
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size (in)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-4x6-print-size"
                          className="text-accent-light hover:underline"
                        >
                          4&times;6
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1200&times;1800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Postcard, small gift frame
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">6&times;9</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800&times;2700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small wall print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">8&times;12</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400&times;3600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard photo print size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">10&times;15</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3000&times;4500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-12x18-print-size"
                          className="text-accent-light hover:underline"
                        >
                          12&times;18
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600&times;5400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Popular for watercolor landscapes
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-16x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format, scenic watercolors
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-20x30-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;30
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000&times;9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized wall art
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 3:4 Ratio Pack */}
              <h3 className="text-lg font-semibold mb-3">
                3:4 Ratio &mdash; Classic Photo Frame
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size (in)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">6&times;8</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800&times;2400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small frame, shelf display
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">9&times;12</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2700&times;3600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Classic photo frame
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-12x16-print-size"
                          className="text-accent-light hover:underline"
                        >
                          12&times;16
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600&times;4800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        European frame standard
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">15&times;20</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4500&times;6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement piece, hallway or entryway
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4:5 Ratio Pack */}
              <h3 className="text-lg font-semibold mb-3">
                4:5 Ratio &mdash; Traditional Art (Home of the 8&times;10)
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size (in)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>
                        <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/15 text-accent-light">
                          Popular
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400&times;3000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Most searched watercolor size on Etsy
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">12&times;15</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600&times;4500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size wall print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>
                        <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/15 text-accent-light">
                          Popular
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800&times;6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement piece, above-desk or mantel
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">20&times;25</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000&times;7500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">24&times;30</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200&times;9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized wall art
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ISO A-Series Pack */}
              <h3 className="text-lg font-semibold mb-3">
                ISO A-Series &mdash; International Standard
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        mm
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
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
                        148&times;210
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748&times;2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small frame, greeting card
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
                        210&times;297
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480&times;3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        UK/EU/AUS standard frame
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a3-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A3
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        297&times;420
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508&times;4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        International poster size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">A2</td>
                      <td className="py-3 px-4 text-foreground-60">
                        420&times;594
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961&times;7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format international
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">A1</td>
                      <td className="py-3 px-4 text-foreground-60">
                        594&times;841
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016&times;9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized international
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Extras Pack */}
              <h3 className="text-lg font-semibold mb-3">
                Extras &mdash; Common Sizes
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size (in)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-5x7-print-size"
                          className="text-accent-light hover:underline"
                        >
                          5&times;7
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500&times;2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gift frame, desk display, greeting card
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-8-5x11-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8.5&times;11
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550&times;3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US Letter, home printing
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-11x14-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;14
                        </Link>
                        <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/15 text-accent-light">
                          Popular
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size sweet spot for watercolors
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-11x17-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;17
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Tabloid, large format home printing
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">13&times;19</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3900&times;5700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Fine art poster
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-20x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format print
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Single Export Only */}
              <h3 className="text-lg font-semibold mb-3">
                Single Export Only &mdash; Large Sizes
              </h3>
              <p className="text-foreground-60 text-sm mb-4">
                These oversized formats are available as individual exports,
                not in the ZIP packs.
              </p>
              <div className="overflow-x-auto mb-6">
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200&times;10800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">24&times;32</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200&times;9600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        A0{" "}
                        <span className="text-foreground-60 text-xs">
                          (841&times;1189 mm)
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        9933&times;14043
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Size comparison diagram */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-watercolor-print-sizes-comparison.png"
                alt="Top watercolor print sizes compared at actual proportions — 5×7, 8×10, 11×14, 16×20, and 24×36 with pixel dimensions at 300 DPI"
                width={1200}
                height={500}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* --- H2 3: Best Sizes by Watercolor Sub-Niche --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best Sizes by Watercolor Sub-Niche
              </h2>
              <p className="text-foreground-60 mb-8">
                Different watercolor styles attract different buyers and
                perform best at different sizes. Match your size offerings to
                your specific sub-niche for higher conversion.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Florals */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-rose-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(244,114,182,0.3), rgba(244,114,182,0.1))",
                        border: "1.5px solid rgba(244,114,182,0.4)",
                        borderRadius:
                          "60% 40% 55% 45% / 50% 60% 40% 50%",
                      }}
                    />
                    Watercolor Florals
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Roses, wildflowers, and{" "}
                    <Link
                      href="/etsy-botanical-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      botanical prints
                    </Link>
                    . See also:{" "}
                    <Link
                      href="/etsy-floral-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      floral print sizes
                    </Link>
                    . Strong at medium sizes for bedrooms, bathrooms, and
                    nurseries. The 4:5 ratio is the classic floral frame.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-8x10-print-size"
                        className="hover:underline"
                      >
                        8&times;10
                      </Link>{" "}
                      (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-11x14-print-size"
                        className="hover:underline"
                      >
                        11&times;14
                      </Link>{" "}
                      (Extras)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-16x20-print-size"
                        className="hover:underline"
                      >
                        16&times;20
                      </Link>{" "}
                      (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4 (ISO)
                    </span>
                  </div>
                </div>

                {/* Landscapes */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-sky-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(56,189,248,0.2) 0%, rgba(34,197,94,0.15) 100%)",
                        border: "1.5px solid rgba(56,189,248,0.4)",
                      }}
                    />
                    Watercolor Landscapes
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Seascapes, mountains, and countryside scenes. The 2:3
                    ratio gives tall, dramatic proportions. Buyers use{" "}
                    <Link
                      href="/etsy-landscape-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      landscape watercolors
                    </Link>{" "}
                    as oversized focal points. Ocean watercolors are a top seller &mdash; see our{" "}
                    <Link
                      href="/etsy-coastal-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      coastal wall art sizes guide
                    </Link>{" "}
                    for seascape-specific sizing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;18 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      16&times;24 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-20x30-print-size"
                        className="hover:underline"
                      >
                        20&times;30
                      </Link>{" "}
                      (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-24x36-print-size"
                        className="hover:underline"
                      >
                        24&times;36
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Animals */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-amber-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(245,158,11,0.1))",
                        border: "1.5px solid rgba(245,158,11,0.4)",
                      }}
                    />
                    Watercolor Animals &amp; Pets
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Birds, dogs, cats, and horses. Buyers purchase these as
                    personal gifts and nursery decor. Small and medium sizes
                    dominate this sub-niche.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-5x7-print-size"
                        className="hover:underline"
                      >
                        5&times;7
                      </Link>{" "}
                      (Extras)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-8x10-print-size"
                        className="hover:underline"
                      >
                        8&times;10
                      </Link>{" "}
                      (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-11x14-print-size"
                        className="hover:underline"
                      >
                        11&times;14
                      </Link>{" "}
                      (Extras)
                    </span>
                  </div>
                </div>

                {/* Abstract */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-purple-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(192,132,252,0.3), rgba(192,132,252,0.1))",
                        border: "1.5px solid rgba(192,132,252,0.4)",
                      }}
                    />
                    Abstract Watercolor
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Ink washes, color fields, and experimental textures.{" "}
                    <Link
                      href="/etsy-abstract-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      Abstract watercolors
                    </Link>{" "}
                    work at any ratio and thrive at large sizes where organic
                    washes fill the wall. Square formats are an underserved
                    opportunity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-16x20-print-size"
                        className="hover:underline"
                      >
                        16&times;20
                      </Link>{" "}
                      (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-18x24-print-size"
                        className="hover:underline"
                      >
                        18&times;24
                      </Link>{" "}
                      (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-20x30-print-size"
                        className="hover:underline"
                      >
                        20&times;30
                      </Link>{" "}
                      (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Square sizes
                    </span>
                  </div>
                </div>

                {/* Nursery */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-teal-400 md:col-span-2">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(45,212,191,0.3), rgba(45,212,191,0.1))",
                        border: "1.5px solid rgba(45,212,191,0.4)",
                      }}
                    />
                    Watercolor Nursery Art
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Soft animals, florals, and whimsical scenes for
                    children&apos;s rooms. Buyers expect medium sizes that fit
                    standard nursery frames. International sizes (A4) are
                    especially popular in this sub-niche. See the{" "}
                    <Link
                      href="/etsy-nursery-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      nursery wall art sizes guide
                    </Link>{" "}
                    for the full breakdown.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-8x10-print-size"
                        className="hover:underline"
                      >
                        8&times;10
                      </Link>{" "}
                      (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-11x14-print-size"
                        className="hover:underline"
                      >
                        11&times;14
                      </Link>{" "}
                      (Extras)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4 (ISO)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link
                        href="/etsy-5x7-print-size"
                        className="hover:underline"
                      >
                        5&times;7
                      </Link>{" "}
                      (Extras)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- CTA 1: After sub-niches — Productivity angle --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Resizing Each Watercolor by Hand
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload one watercolor painting and download up to 70
                  print-ready files across all 5 ratio packs. Portrait,
                  landscape, and square &mdash; organized and named for Etsy.
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

            {/* --- H2 4: Resolution & Quality for Watercolor Prints --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Resolution &amp; Quality for Watercolor Prints
              </h2>
              <p className="text-foreground-60 mb-4">
                300 DPI is the professional print standard, and it matters more
                for watercolor than many other styles. Fine brushstrokes, subtle
                color gradients, and delicate wash transitions all depend on
                sufficient pixel density to reproduce faithfully. At lower
                resolutions, the soft edges that make watercolor distinctive
                become blurry or banded.
              </p>
              <p className="text-foreground-60 mb-6">
                Create your source file at the largest size in each ratio, then
                sizes scale down without quality loss. For detailed resolution
                guidance, see our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  complete resolution guide
                </Link>
                .
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Popular Watercolor Sizes &mdash; Pixel Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex justify-between">
                      <span>
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>
                      </span>
                      <span className="font-mono text-xs">
                        2400&times;3000 px
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>
                        <Link
                          href="/etsy-11x14-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;14
                        </Link>
                      </span>
                      <span className="font-mono text-xs">
                        3300&times;4200 px
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>
                      </span>
                      <span className="font-mono text-xs">
                        4800&times;6000 px
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                      </span>
                      <span className="font-mono text-xs">
                        7200&times;10800 px
                      </span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Why 300 DPI Matters for Watercolor
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Fine brushstrokes stay crisp at every size
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Color gradients reproduce without banding
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Soft wash edges remain smooth, not pixelated
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Professional print shops require 300 DPI minimum
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* --- H2 5: How to Organize Watercolor Print Files for Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Organize Watercolor Print Files for Etsy
              </h2>
              <p className="text-foreground-60 mb-4">
                Buyers expect organized, clearly labeled downloads. A ZIP file
                full of randomly named files (like{" "}
                <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">
                  IMG_4821_final_v3.jpg
                </code>
                ) leads to confusion, bad reviews, and refund requests. For the
                full file setup strategy, see our guides on{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  what files to include
                </Link>{" "}
                and{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to package digital wall art
                </Link>
                .
              </p>
              <p className="text-foreground-60 mb-6">
                The most reliable approach is organizing files by ratio pack.
                Each ratio gets its own ZIP containing all sizes in that group.
                This keeps every download well under{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy&apos;s 20 MB upload limit
                </Link>{" "}
                and makes it easy for buyers to find the size they need.
              </p>

              <div className="space-y-3 mb-6">
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        One ZIP per ratio pack
                      </p>
                      <p className="text-foreground-60 text-xs">
                        5 ZIPs total: 2:3, 3:4, 4:5, ISO A-Series, Extras
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Professional file naming
                      </p>
                      <p className="text-foreground-60 text-xs">
                        Example:{" "}
                        <code className="bg-white/5 px-1 py-0.5 rounded">
                          watercolor_roses_8x10_300dpi.jpg
                        </code>
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Each ZIP under 20 MB
                      </p>
                      <p className="text-foreground-60 text-xs">
                        Ratio-based grouping keeps every file within
                        Etsy&apos;s upload limit
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60 text-sm">
                Professional naming and ratio-based organization reduce buyer
                confusion and support requests. When a buyer downloads your
                watercolor art, they should immediately know which file to
                print.
              </p>
            </div>

            {/* --- CTA 2: After file organization — Coverage angle --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Every Frame Size Your Buyers Need
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  From 4&times;6 to 24&times;36, organized in ratio packs
                  and ready to upload to Etsy. Professional file naming and
                  every ZIP under 20 MB &mdash; automatically.
                </p>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Now
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 6: Watercolor Print Sizing Mistakes to Avoid --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Watercolor Print Sizing Mistakes to Avoid
              </h2>
              <p className="text-foreground-60 mb-6">
                These common mistakes cost watercolor sellers sales and lead
                to negative reviews. Avoiding them puts your listings ahead
                of the competition.
              </p>

              <div className="space-y-4">
                <Card className="p-5 border-l-[3px] border-l-rose-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Offering only one or two sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Buyers search for specific sizes. A listing with only
                    8&times;10 misses every buyer looking for 11&times;14,
                    16&times;20, or A4. More sizes means more search
                    visibility and more sales.
                  </p>
                </Card>
                <Card className="p-5 border-l-[3px] border-l-amber-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Wrong DPI (72 instead of 300)
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    72 DPI is screen resolution, not print resolution.
                    Watercolor art printed at 72 DPI looks blurry and
                    pixelated &mdash; especially the delicate washes and
                    fine brushstrokes that define the style. Always deliver
                    300 DPI files.
                  </p>
                </Card>
                <Card className="p-5 border-l-[3px] border-l-sky-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Skipping international sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    A4 and A3 are the standard frame sizes in the UK, EU,
                    and Australia. Watercolor art has strong international
                    demand &mdash; skipping A-series means losing 20&ndash;30%
                    of potential buyers.
                  </p>
                </Card>
                <Card className="p-5 border-l-[3px] border-l-teal-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Not offering both orientations
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Many watercolor paintings &mdash; especially landscapes
                    and abstracts &mdash; work beautifully in both portrait
                    and landscape. Offering both orientations doubles the
                    appeal of each listing without creating new artwork.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- H2 7: How to Resize Watercolor Art for Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Resize Watercolor Art for Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                Manually resizing a single watercolor painting into 10&ndash;20
                sizes per listing takes hours. Multiply that by a shop with 30
                or more designs, and you&apos;re spending more time resizing
                than creating. For a general walkthrough, see our{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  complete resize guide
                </Link>
                .
              </p>

              <div className="space-y-4 mb-6">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Upload Your High-Res Watercolor
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Scan or photograph your watercolor at the highest
                        resolution possible. Higher resolution source files
                        produce sharper results at larger print sizes.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Select Your Ratio Packs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Choose all 5 packs to cover every standard frame
                        size. Watercolor art works across all ratios, so
                        selecting everything maximizes your listing&apos;s
                        reach.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Download Organized ZIPs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Get organized ZIP packs with professional file naming
                        (e.g.,{" "}
                        <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">
                          artwork_8x10_300dpi.jpg
                        </code>
                        ). All at 300 DPI, all under Etsy&apos;s 20 MB limit.
                        Upload directly to your listing.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Time savings:
                    </strong>{" "}
                    30 watercolor paintings &times; 30+ sizes each = 900+
                    manual resizes. With batch resizing: 30 uploads, done in
                    under 30 minutes. Same 300 DPI quality, same professional
                    naming, same Etsy-compliant ZIPs.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="All 5 Ratio Packs From One Upload"
                stat="Up to 70 print-ready files from a single upload"
                description="Every size your watercolor buyers need — in seconds, not hours. Portrait, landscape, and square. Organized by ratio, named for buyers, and ready for Etsy."
                buttonText="Generate All Sizes Free"
                appUrl="https://app.snaptosize.com/app/quick-export?source=seo_watercolor-print-sizes&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Watercolor Print Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-watercolor-print-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
