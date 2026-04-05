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
  title: "Boho Wall Art Sizes for Etsy — Complete Guide",
  description:
    "Boho wall art sizing guide for Etsy sellers. Best sizes for pampas grass, desert landscapes, celestial, earth-tone abstracts, and macrame line art at 300 DPI.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-boho-wall-art-sizes",
  },
  openGraph: {
    title: "Boho Wall Art Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for boho wall art on Etsy. Sub-niche breakdowns, gallery wall set strategy, and batch resizing from one upload.",
    url: "https://snaptosize.com/etsy-boho-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-boho-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Boho Wall Art Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boho Wall Art Sizes for Etsy — Complete Guide",
    description:
      "Best sizes for boho wall art on Etsy. Sub-niche breakdowns, gallery wall set strategy, and batch resizing from one upload.",
    images: ["/assets/og/etsy-boho-wall-art-sizes.png"],
  },
};

export default function EtsyBohoWallArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Boho Wall Art Sizes for Etsy — Complete Sizing Guide for Every Sub-Niche",
    description:
      "Complete boho wall art sizing guide for Etsy sellers. Covers best-selling sizes, sub-niche breakdowns (pampas grass, desert landscapes, celestial, earth-tone abstracts, macrame line art, boho quotes), gallery wall set strategy, resolution requirements, file organization, and how to generate every size from one upload.",
    url: "https://snaptosize.com/etsy-boho-wall-art-sizes",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
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
        name: "Boho Wall Art Sizes",
        item: "https://snaptosize.com/etsy-boho-wall-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "What are the most popular print sizes for boho wall art on Etsy?",
      answer:
        "8\u00d710, 11\u00d714, and 16\u00d720 are the top three sellers. For large statement pieces, 18\u00d724 and 24\u00d736 are popular. Including 5\u00d77 for small frames and A4/A3 for international buyers covers the full range.",
    },
    {
      question: "How many sizes should I offer for each boho print?",
      answer:
        "The more sizes you offer, the more buyers you reach. Top-selling boho art shops offer 15+ sizes per listing across multiple ratios (2:3, 3:4, 4:5, ISO, and extras). Gallery wall sets should have matching sizes across all pieces.",
    },
    {
      question: "What sizes work best for boho gallery wall sets?",
      answer:
        "Offer a mix: one large anchor piece (16\u00d720 or 18\u00d724), medium companions (11\u00d714, 12\u00d716), and smaller fillers (5\u00d77, 8\u00d710). Every piece in the set should be available in the same size options so buyers can choose their preferred arrangement.",
    },
    {
      question:
        "Should boho prints include international paper sizes?",
      answer:
        "Yes. Boho decor is a global trend. A4 and A3 are standard in the UK, EU, and Australia. Including ISO A-series sizes opens your listings to international buyers who would otherwise skip your shop.",
    },
    {
      question: "What resolution should boho art prints be?",
      answer:
        "300 DPI is the professional print standard. At 300 DPI, an 8\u00d710 print needs 2400\u00d73000 pixels and a 16\u00d720 needs 4800\u00d76000 pixels. This preserves fine details like pampas grass textures and macrame line work.",
    },
    {
      question:
        "Do I need portrait and landscape orientations for boho art?",
      answer:
        "Yes. Desert landscapes and horizontal abstracts need landscape orientation. Pampas grass and celestial designs often work in both. Offering both orientations doubles the value and lets gallery wall buyers create asymmetrical arrangements.",
    },
    {
      question:
        "How do I keep my boho art ZIP files under Etsy's 20 MB limit?",
      answer:
        "Organize files by ratio pack instead of putting all sizes in one ZIP. Each ratio pack stays well under 20 MB when using optimized JPG at 300 DPI. For gallery wall sets, pack each ratio across all pieces together.",
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
    "https://app.snaptosize.com?source=seo_etsy-boho-wall-art-sizes&kind=guide";

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
            "linear-gradient(155deg, #f7f3ee 0%, #f2ebe0 25%, #ede4d6 50%, #f0e8db 75%, #f5f0e6 100%)",
        }}
      >
        {/* Warm terracotta glow — upper left */}
        <div
          className="absolute top-[-15%] left-[-8%] w-[550px] h-[550px] rounded-full opacity-[0.30]"
          style={{
            background:
              "radial-gradient(circle, rgba(194,120,86,0.35), rgba(194,120,86,0.1) 40%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />
        {/* Sand/gold glow — lower right */}
        <div
          className="absolute bottom-[-12%] right-[-5%] w-[480px] h-[480px] rounded-full opacity-[0.25]"
          style={{
            background:
              "radial-gradient(circle, rgba(210,180,130,0.35), rgba(210,180,130,0.1) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Sage green accent — center right */}
        <div
          className="absolute top-[35%] right-[12%] w-[280px] h-[280px] rounded-full opacity-[0.18]"
          style={{
            background:
              "radial-gradient(circle, rgba(140,160,120,0.4), transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        {/* CSS-only Boho Arch Composition — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "300px", height: "360px" }}
          >
            {/* Large arch / doorway shape — terracotta */}
            <div
              className="absolute"
              style={{
                width: "140px",
                height: "200px",
                top: "20px",
                left: "30px",
                background: "rgba(194,120,86,0.12)",
                border: "1.5px solid rgba(194,120,86,0.15)",
                borderRadius: "70px 70px 4px 4px",
              }}
            />
            {/* Inner arch — lighter sand */}
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "160px",
                top: "40px",
                left: "50px",
                background: "rgba(220,195,160,0.14)",
                border: "1px solid rgba(220,195,160,0.12)",
                borderRadius: "50px 50px 3px 3px",
              }}
            />
            {/* Moon crescent — warm gold */}
            <div
              className="absolute"
              style={{
                width: "50px",
                height: "50px",
                top: "15px",
                right: "50px",
                borderRadius: "50%",
                boxShadow: "inset -12px -4px 0 rgba(210,175,100,0.25)",
                border: "1px solid rgba(210,175,100,0.12)",
              }}
            />
            {/* Small circle — sun symbol */}
            <div
              className="absolute rounded-full"
              style={{
                width: "28px",
                height: "28px",
                top: "85px",
                right: "35px",
                background: "rgba(210,175,100,0.15)",
                border: "1.5px solid rgba(210,175,100,0.20)",
              }}
            />
            {/* Pampas grass stem — tall vertical */}
            <div
              className="absolute"
              style={{
                width: "2px",
                height: "130px",
                bottom: "30px",
                left: "75px",
                background: "rgba(180,160,130,0.25)",
                borderRadius: "1px",
              }}
            />
            {/* Pampas plume — organic shape */}
            <div
              className="absolute"
              style={{
                width: "30px",
                height: "55px",
                bottom: "145px",
                left: "60px",
                background: "rgba(220,200,170,0.18)",
                border: "1px solid rgba(220,200,170,0.12)",
                borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
                transform: "rotate(-5deg)",
              }}
            />
            {/* Second pampas plume */}
            <div
              className="absolute"
              style={{
                width: "24px",
                height: "45px",
                bottom: "155px",
                left: "82px",
                background: "rgba(210,190,160,0.14)",
                border: "1px solid rgba(210,190,160,0.10)",
                borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
                transform: "rotate(8deg)",
              }}
            />
            {/* Horizontal desert horizon line */}
            <div
              className="absolute"
              style={{
                width: "180px",
                height: "1.5px",
                bottom: "80px",
                right: "10px",
                background:
                  "linear-gradient(90deg, transparent, rgba(194,120,86,0.15), rgba(140,160,120,0.12), transparent)",
              }}
            />
            {/* Sage leaf accent */}
            <div
              className="absolute"
              style={{
                width: "20px",
                height: "40px",
                bottom: "60px",
                right: "45px",
                background: "rgba(140,160,120,0.14)",
                border: "1px solid rgba(140,160,120,0.10)",
                borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
                transform: "rotate(-20deg)",
              }}
            />

            {/* Size labels — floating, monospaced */}
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "95px",
                left: "65px",
                color: "rgba(160,120,80,0.30)",
              }}
            >
              16&times;20
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "10px",
                right: "38px",
                color: "rgba(194,120,86,0.25)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                bottom: "45px",
                right: "50px",
                color: "rgba(140,160,120,0.28)",
              }}
            >
              11&times;14
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "15px",
                left: "25px",
                color: "rgba(180,160,130,0.25)",
              }}
            >
              18&times;24
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="h-px w-8"
                style={{ background: "rgba(194,120,86,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(150,110,80,0.7)" }}
              >
                Niche Size Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#3d3028" }}
              >
                Boho Wall Art Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(61,48,40,0.55)" }}
              >
                Every sub-niche, every frame size, one&nbsp;upload
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(61,48,40,0.55)" }}
            >
              Bohemian wall art is one of the top-selling digital printable
              niches on Etsy. From pampas grass illustrations to celestial moon
              phase designs, boho buyers want gallery wall sets in multiple
              sizes. This guide covers the best sizes for every boho sub-niche
              and how to generate them all from a single upload.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Boho Art Sizes
                </Button>
              </a>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(61,48,40,0.35)" }}
              >
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.08)",
                  borderColor: "rgba(167,139,250,0.25)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(61,48,40,0.7)" }}
                >
                  300 DPI Print-Ready
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.08)",
                  borderColor: "rgba(167,139,250,0.25)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(61,48,40,0.7)" }}
                >
                  30+ Sizes
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.08)",
                  borderColor: "rgba(167,139,250,0.25)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(61,48,40,0.7)" }}
                >
                  Gallery Wall Ready
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
            <QuickAnswer question="What sizes work best for boho wall art on Etsy?">
              <strong>8&times;10, 11&times;14, and 16&times;20</strong> are
              the top three boho print sizes. For large statement pieces,
              18&times;24 and 24&times;36 are popular. Including 5&times;7
              for small frames and A4/A3 for international buyers covers the
              full range of buyer demand.
            </QuickAnswer>

            {/* --- H2 1: Why Boho Art Needs Multiple Print Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Boho Art Needs Multiple Print Sizes
              </h2>
              <p className="text-foreground-60 mb-4">
                Boho buyers frame art in everything from{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7 desk accents
                </Link>{" "}
                to oversized{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36 statement pieces
                </Link>{" "}
                above the sofa. Gallery wall sets &mdash; groups of 3, 5, 7, or
                12 matching prints &mdash; are the top product format for
                bohemian art on Etsy. Each piece in a set needs the same size
                options so buyers can mix and match frames.
              </p>
              <p className="text-foreground-60 mb-4">
                More sizes means more search visibility, more buyer options, and
                higher conversion rates. Top-selling boho shops on Etsy offer
                15 or more sizes per listing. See our{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  guide on how many sizes to include
                </Link>{" "}
                for the full strategy.
              </p>
              <p className="text-foreground-60">
                Boho decor is a global trend. Buyers in the UK, EU, and
                Australia expect{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>{" "}
                frame sizes. Skipping ISO A-series means losing access to a
                significant share of the international market. For a complete
                overview of every standard size, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* Mockup image */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-boho-wall-art-sizes-mockup.jpg"
                alt="Bohemian living room with earth-tone abstract art, pampas grass prints, and celestial moon phase designs in natural wood frames"
                width={1200}
                height={800}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* --- H2 2: Complete Boho Print Size Reference --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Complete Boho Print Size Reference
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
                        Boho Use
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
                        Small gift frame, boho shelf display
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
                        Standard photo print
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
                        Desert landscapes, wide vistas
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">16&times;24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format, southwestern scenes
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
                        Oversized above-sofa focal point
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
                        Boho Use
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
                        Gallery wall companion piece
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
                        <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/15 text-accent-light">
                          Popular
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery wall anchor, statement piece
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
                        Boho Use
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
                        Most searched boho size, desk/shelf staple
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
                        Gallery wall anchor piece
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
                        Oversized earth-tone statement
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
                        <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/15 text-accent-light">
                          Popular
                        </span>
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
                        Large format, earth-tone abstracts
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
                        Oversized statement piece
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
                        Boho Use
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
                        Gallery wall filler, macrame detail art
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
                        US Letter, boho quotes for home printing
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
                        Mid-size sweet spot, photo mat standard
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

            {/* --- H2 3: Best Sizes by Boho Sub-Niche --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best Sizes by Boho Sub-Niche
              </h2>
              <p className="text-foreground-60 mb-8">
                Different boho styles attract different buyers and perform best
                at different sizes. Match your size offerings to your specific
                sub-niche for higher conversion.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Pampas Grass / Dried Florals */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-amber-600">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(217,180,140,0.35), rgba(217,180,140,0.1))",
                        border: "1.5px solid rgba(217,180,140,0.4)",
                        borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
                      }}
                    />
                    Pampas Grass &amp; Dried Florals
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Tall stems and vertical compositions work best in portrait
                    2:3 and 3:4 ratios. Strong overlap with{" "}
                    <Link
                      href="/etsy-botanical-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      botanical prints
                    </Link>
                    .
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
                      <Link
                        href="/etsy-18x24-print-size"
                        className="hover:underline"
                      >
                        18&times;24
                      </Link>{" "}
                      (3:4)
                    </span>
                  </div>
                </div>

                {/* Desert / Southwestern Landscapes */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-orange-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(234,160,90,0.3) 0%, rgba(194,120,86,0.2) 100%)",
                        border: "1.5px solid rgba(234,160,90,0.4)",
                      }}
                    />
                    Desert &amp; Southwestern
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Wide vistas suit larger 2:3 ratio prints. Offer landscape
                    orientation for horizontal scenes. See{" "}
                    <Link
                      href="/etsy-landscape-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      landscape print sizes
                    </Link>{" "}
                    for more.
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

                {/* Celestial / Moon Phases */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-yellow-500">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-full"
                      style={{
                        boxShadow: "inset -5px -2px 0 rgba(210,175,100,0.35)",
                        border: "1.5px solid rgba(210,175,100,0.3)",
                      }}
                    />
                    Celestial &amp; Moon Phases
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Circular motifs work well in 4:5 and{" "}
                    <Link
                      href="/etsy-square-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      square formats
                    </Link>
                    . Gallery sets of 3&ndash;5 moon phases are top sellers.
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
                      12&times;16 (3:4)
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
                      Square sizes
                    </span>
                  </div>
                </div>

                {/* Earth-Tone Abstracts */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-stone-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(180,160,140,0.35), rgba(180,160,140,0.1))",
                        border: "1.5px solid rgba(180,160,140,0.4)",
                      }}
                    />
                    Earth-Tone Abstracts
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Large-format statement pieces in neutral tones look best
                    oversized. Strong overlap with{" "}
                    <Link
                      href="/etsy-abstract-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      abstract wall art
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/etsy-minimalist-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      minimalist styles
                    </Link>
                    .
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
                      A2 / A1 (ISO)
                    </span>
                  </div>
                </div>

                {/* Macrame-Inspired Line Art */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-rose-300">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0"
                      style={{
                        background: "transparent",
                        border: "1.5px solid rgba(200,170,150,0.4)",
                        borderRadius: "50%",
                        backgroundImage:
                          "radial-gradient(circle at 50% 40%, rgba(200,170,150,0.2) 20%, transparent 20%)",
                      }}
                    />
                    Macrame-Inspired Line Art
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Intricate detail shines at mid-sizes. Popular as shelf and
                    desk art. Clean lines suit the{" "}
                    <Link
                      href="/etsy-minimalist-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      minimalist aesthetic
                    </Link>{" "}
                    overlap.
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
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4 (ISO)
                    </span>
                  </div>
                </div>

                {/* Boho Quotes / Typography */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-teal-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-5 h-5 flex-shrink-0 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(45,212,191,0.2), rgba(45,212,191,0.05))",
                        border: "1.5px solid rgba(45,212,191,0.3)",
                      }}
                    />
                    Boho Quotes &amp; Typography
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Text readability drives size choice. US Letter for home
                    printing is popular. See the{" "}
                    <Link
                      href="/etsy-quote-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      quote wall art sizes guide
                    </Link>{" "}
                    for full typography sizing strategy.
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
                      8.5&times;11 (US Letter)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4 (ISO)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- CTA 1: After sub-niches --- Productivity angle --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Resizing Each Boho Design by Hand
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once, download up to 70 print-ready files across all 5
                  ratio packs. Portrait, landscape, and square &mdash; organized
                  and named for Etsy.
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

            {/* --- H2 4: Boho Gallery Wall Sets: Sizing Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Boho Gallery Wall Sets: Sizing Strategy
              </h2>
              <p className="text-foreground-60 mb-4">
                Gallery wall sets are the top product format for boho art on
                Etsy. Whether you&apos;re selling a 3-piece pampas grass
                collection or a 12-piece earth-tone gallery, every piece in the
                set needs the same size options so buyers can mix and match
                frames. For the full{" "}
                <Link
                  href="/etsy-gallery-wall-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  gallery wall sizing guide
                </Link>
                , see our dedicated page.
              </p>
              <p className="text-foreground-60 mb-6">
                The key principle: all pieces in a gallery wall set should be
                available in the same sizes. A buyer who wants the anchor piece
                at{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20
                </Link>{" "}
                should be able to get every companion piece at that size too.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-3">
                    Common Boho Gallery Wall Arrangements
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>3-piece set:</strong> one{" "}
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>{" "}
                        anchor + two{" "}
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>{" "}
                        companions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>5-piece set:</strong> one{" "}
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>
                        , two{" "}
                        <Link
                          href="/etsy-11x14-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;14
                        </Link>
                        , two{" "}
                        <Link
                          href="/etsy-5x7-print-size"
                          className="text-accent-light hover:underline"
                        >
                          5&times;7
                        </Link>{" "}
                        fillers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>7+ piece set:</strong> mix of large, medium,
                        and small across portrait and landscape
                      </span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-3">
                    Gallery Wall Sizing Rules
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Every piece needs matching size options
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      2&ndash;3 inches between frames for spacing
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Art should cover 60&ndash;75% of wall space above
                      furniture
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Offer both portrait and landscape for asymmetrical
                      arrangements
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* --- H2 5: Resolution & Quality for Boho Prints --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Resolution &amp; Quality for Boho Prints
              </h2>
              <p className="text-foreground-60 mb-4">
                300 DPI is the professional print standard, and it matters for
                boho art across every sub-niche. Fine line work in
                macrame-inspired designs, subtle gradient transitions in
                earth-tone abstracts, and delicate pampas grass textures all
                depend on sufficient pixel density to reproduce faithfully.
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
                    Popular Boho Sizes &mdash; Pixel Requirements
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
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>
                      </span>
                      <span className="font-mono text-xs">
                        5400&times;7200 px
                      </span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Why 300 DPI Matters for Boho Art
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Pampas grass textures stay detailed at every size
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Earth-tone gradients reproduce without banding
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Macrame line work stays crisp, not pixelated
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      Professional print shops require 300 DPI minimum
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* --- H2 6: How to Organize Boho Print Files for Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Organize Boho Print Files for Etsy
              </h2>
              <p className="text-foreground-60 mb-4">
                Buyers of boho sets expect organized, professional downloads.
                A ZIP file full of randomly named files leads to confusion, bad
                reviews, and refund requests. For the full file setup strategy,
                see our guides on{" "}
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
                          boho_pampas_8x10_300dpi.jpg
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
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      4
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Gallery wall sets: consistent sizing
                      </p>
                      <p className="text-foreground-60 text-xs">
                        For multi-piece sets, pack each ratio across all
                        pieces together so every design has matching sizes
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60 text-sm">
                Professional naming and ratio-based organization reduce buyer
                confusion and support requests. When a buyer downloads your
                boho gallery wall set, they should immediately know which file
                to print for each piece.
              </p>
            </div>

            {/* --- CTA 2: After file organization --- Gallery wall set angle --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Creating a Boho Gallery Wall Set?
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Every piece gets the same 30+ sizes &mdash; organized in
                  ratio packs, ready to upload to Etsy. Portrait, landscape,
                  and square formats included.
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

            {/* --- H2 7: Boho Print Sizing Mistakes to Avoid --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Boho Print Sizing Mistakes to Avoid
              </h2>
              <p className="text-foreground-60 mb-6">
                These common mistakes cost boho sellers sales and lead to
                negative reviews. Avoiding them puts your listings ahead of
                the competition.
              </p>

              <div className="space-y-4">
                <Card className="p-5 border-l-[3px] border-l-rose-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Offering only 3&ndash;5 sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Top-selling boho shops offer 15 or more sizes per listing.
                    A listing with only 3 sizes misses every buyer looking for
                    the other frame sizes. More sizes means more search
                    visibility and more sales.
                  </p>
                </Card>
                <Card className="p-5 border-l-[3px] border-l-amber-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Skipping international sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Boho decor is a global trend. A4 and A3 are the standard
                    frame sizes in the UK, EU, and Australia. Skipping
                    ISO A-series means losing a significant share of
                    international buyers.
                  </p>
                </Card>
                <Card className="p-5 border-l-[3px] border-l-sky-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Inconsistent gallery wall set sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    If pieces in a gallery wall set have different size options,
                    buyers can&apos;t mix and match frames. Every piece needs
                    the same sizes so the set works together at any scale.
                  </p>
                </Card>
                <Card className="p-5 border-l-[3px] border-l-purple-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Wrong DPI (72 instead of 300)
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    72 DPI is screen resolution, not print resolution. Boho art
                    printed at 72 DPI looks blurry &mdash; especially the
                    delicate textures in pampas grass, fine macrame line work,
                    and subtle earth-tone gradients. Always deliver 300 DPI
                    files.
                  </p>
                </Card>
                <Card className="p-5 border-l-[3px] border-l-teal-400">
                  <h3 className="font-semibold text-sm mb-1">
                    Not offering landscape orientation
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Desert landscapes and horizontal abstracts need landscape
                    orientation. Offering both portrait and landscape lets
                    gallery wall buyers create asymmetrical arrangements, which
                    is a signature boho look.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="One Upload. All 5 Ratio Packs."
                stat="Up to 70 print-ready files from one upload"
                description="Every size your boho art buyers need — in seconds, not hours. Portrait, landscape, and square. Organized by ratio, named for buyers, and ready for Etsy."
                buttonText="Generate All Sizes Free"
                appUrl="https://app.snaptosize.com?source=seo_etsy-boho-wall-art-sizes&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Boho Wall Art Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-boho-wall-art-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
