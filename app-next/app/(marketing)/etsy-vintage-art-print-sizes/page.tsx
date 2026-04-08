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

export const metadata: Metadata = {
  title: "Vintage Art Print Sizes for Etsy — Art Deco to Mid-Century Modern",
  description:
    "Vintage art print sizes for Etsy sellers. Best sizes for art deco, mid-century modern, retro travel posters, and vintage botanicals.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-vintage-art-print-sizes",
  },
  openGraph: {
    title: "Vintage Art Print Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for vintage art on Etsy. Sub-style breakdowns, original vs modern dimensions, gallery wall sets, and batch resizing from one upload.",
    url: "https://snaptosize.com/etsy-vintage-art-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-vintage-art-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Vintage Art Print Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintage Art Print Sizes for Etsy — Art Deco to Mid-Century Modern",
    description:
      "Best sizes for vintage art on Etsy. Sub-style breakdowns, original vs modern dimensions, gallery wall sets, and batch resizing from one upload.",
    images: ["/assets/og/etsy-vintage-art-print-sizes.png"],
  },
};

export default function EtsyVintageArtPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Vintage Art Print Sizes for Etsy — Art Deco to Mid-Century Modern, One Upload",
    description:
      "Complete vintage art print sizing guide for Etsy sellers. Covers best-selling sizes, sub-style breakdowns (art deco, mid-century modern, retro travel, vintage botanical, antique maps, retro kitchen, art nouveau), original vs modern dimensions, gallery wall sets, and how to generate every size from one upload.",
    url: "https://snaptosize.com/etsy-vintage-art-print-sizes",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
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
        name: "Vintage Art Print Sizes",
        item: "https://snaptosize.com/etsy-vintage-art-print-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What are the most popular print sizes for vintage art on Etsy?",
      answer:
        "18\u00d724 and 24\u00d736 lead for vintage poster styles like art deco and retro travel posters. 8\u00d710 and 11\u00d714 are top sellers for vintage botanical and retro kitchen art. 11\u00d717 is uniquely popular for vintage art because it echoes original small-format poster dimensions. Include A3 and A2 for international buyers.",
    },
    {
      question: "What size were original vintage posters?",
      answer:
        "Original US travel and movie posters were typically 25\u00d740\u2033 or 27\u00d741\u2033. European art deco posters used DIN A1 (23.4\u00d733.1\u2033). Window cards were 14\u00d722\u2033. Modern reprints and digital downloads are resized to standard frame sizes \u2014 24\u00d736\u2033 is the closest standard match for full-size vintage posters.",
    },
    {
      question:
        "Should vintage art prints be portrait or landscape orientation?",
      answer:
        "Most vintage art is portrait orientation \u2014 travel posters, art deco, art nouveau, and botanical illustrations were all designed tall and narrow. Antique maps and some mid-century modern pieces work in landscape. Offering both orientations doubles your listing value and covers more buyer needs.",
    },
    {
      question:
        "How many sizes should I include in a vintage art listing on Etsy?",
      answer:
        "Top-selling vintage art shops offer 15+ sizes per listing across multiple ratios (2:3, 3:4, 4:5, ISO A-series, and extras like 11\u00d717). More sizes mean more buyers who find a match for their existing frame. Gallery wall sets should have matching sizes across all pieces.",
    },
    {
      question: "Do I need international sizes for vintage art prints?",
      answer:
        "Yes. Art deco, art nouveau, and vintage botanical styles originated in Europe. A4, A3, A2, and A1 are standard in the UK, EU, and Australia. Omitting A-series sizes means losing buyers in markets where vintage art is especially popular.",
    },
    {
      question: "What\u2019s the best ratio for vintage-style art prints?",
      answer:
        "2:3 is the most authentic vintage ratio \u2014 it closely matches original poster proportions. 4:5 works well for mid-century modern and smaller vintage pieces. 3:4 suits vintage botanical illustrations. Offering all three ratios covers the full range of vintage sub-styles.",
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
    "https://app.snaptosize.com/app/quick-export?source=seo_vintage-art&kind=guide";

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
            "linear-gradient(155deg, #1c1613 0%, #1a1410 25%, #181310 50%, #1b1714 75%, #151210 100%)",
        }}
      >
        {/* Warm aged-paper texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(200,169,110,0.5) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(200,169,110,0.3) 0%, transparent 45%), radial-gradient(circle at 50% 20%, rgba(160,80,80,0.3) 0%, transparent 40%)",
          }}
        />

        {/* Warm amber glow — top right */}
        <div
          className="absolute top-[-10%] right-[15%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #c8a96e, transparent 70%)",
          }}
        />
        {/* Burgundy accent glow — bottom left */}
        <div
          className="absolute bottom-[-12%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #8b3a4a, transparent 70%)",
          }}
        />

        {/* CSS-only Vintage Poster Gallery — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "360px", height: "380px" }}
          >
            {/* Frame 1 — Large, art deco deep teal, slight left rotation */}
            <div
              className="absolute"
              style={{
                width: "120px",
                height: "170px",
                top: "30px",
                left: "0px",
                transform: "rotate(-2deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "3px solid rgba(200,169,110,0.45)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(200,169,110,0.15), 0 8px 24px rgba(0,0,0,0.3)",
                  background:
                    "linear-gradient(160deg, #1a4a4a 0%, #0f3535 50%, #1a4a4a 100%)",
                }}
              >
                {/* Inner decorative border — art deco double line */}
                <div
                  style={{
                    position: "absolute",
                    inset: "6px",
                    border: "1px solid rgba(200,169,110,0.20)",
                  }}
                />
                {/* Corner ornament — top left */}
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "4px",
                    width: "12px",
                    height: "12px",
                    borderTop: "1px solid rgba(200,169,110,0.30)",
                    borderLeft: "1px solid rgba(200,169,110,0.30)",
                  }}
                />
                {/* Corner ornament — bottom right */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    right: "4px",
                    width: "12px",
                    height: "12px",
                    borderBottom: "1px solid rgba(200,169,110,0.30)",
                    borderRight: "1px solid rgba(200,169,110,0.30)",
                  }}
                />
              </div>
            </div>

            {/* Frame 2 — Center, burgundy/wine, no rotation */}
            <div
              className="absolute"
              style={{
                width: "130px",
                height: "180px",
                top: "10px",
                left: "110px",
                transform: "rotate(0deg)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "3px solid rgba(200,169,110,0.50)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(200,169,110,0.18), 0 10px 30px rgba(0,0,0,0.35)",
                  background:
                    "linear-gradient(160deg, #5c1a2a 0%, #3d1020 50%, #5c1a2a 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "7px",
                    border: "1px solid rgba(200,169,110,0.22)",
                  }}
                />
                {/* Geometric art deco line — center vertical */}
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "1px",
                    height: "60%",
                    background: "rgba(200,169,110,0.12)",
                  }}
                />
                {/* Horizontal accent — middle */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "20%",
                    width: "60%",
                    height: "1px",
                    background: "rgba(200,169,110,0.10)",
                  }}
                />
              </div>
            </div>

            {/* Frame 3 — Right, warm amber, slight right rotation */}
            <div
              className="absolute"
              style={{
                width: "110px",
                height: "155px",
                top: "50px",
                left: "235px",
                transform: "rotate(3deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "3px solid rgba(200,169,110,0.40)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(200,169,110,0.12), 0 8px 24px rgba(0,0,0,0.3)",
                  background:
                    "linear-gradient(160deg, #8b6914 0%, #6b4e0f 50%, #8b6914 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "6px",
                    border: "1px solid rgba(200,169,110,0.18)",
                  }}
                />
                {/* Art deco fan motif — radiating lines */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "40px",
                    height: "20px",
                    borderTop: "1px solid rgba(200,169,110,0.15)",
                    borderRadius: "40px 40px 0 0",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom left, muted olive */}
            <div
              className="absolute"
              style={{
                width: "80px",
                height: "100px",
                bottom: "15px",
                left: "20px",
                transform: "rotate(-1deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(200,169,110,0.30)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #3a4a2a 0%, #2a3820 50%, #3a4a2a 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(200,169,110,0.14)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom center, dusty rose */}
            <div
              className="absolute"
              style={{
                width: "90px",
                height: "75px",
                bottom: "25px",
                left: "120px",
                transform: "rotate(2deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(200,169,110,0.28)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #6b4a5a 0%, #4d3540 50%, #6b4a5a 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(200,169,110,0.12)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom right, muted navy */}
            <div
              className="absolute"
              style={{
                width: "75px",
                height: "95px",
                bottom: "10px",
                left: "230px",
                transform: "rotate(-2deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(200,169,110,0.25)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #2a3a5a 0%, #1e2a42 50%, #2a3a5a 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(200,169,110,0.12)",
                  }}
                />
              </div>
            </div>

            {/* Size labels — floating, monospaced */}
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "215px",
                left: "5px",
                color: "rgba(200,169,110,0.28)",
              }}
            >
              18&times;24
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "0px",
                left: "145px",
                color: "rgba(200,169,110,0.25)",
              }}
            >
              24&times;36
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "215px",
                right: "35px",
                color: "rgba(200,169,110,0.25)",
              }}
            >
              11&times;17
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                left: "30px",
                color: "rgba(200,169,110,0.22)",
              }}
            >
              A3
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                left: "145px",
                color: "rgba(200,169,110,0.20)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                right: "55px",
                color: "rgba(200,169,110,0.20)",
              }}
            >
              5&times;7
            </div>

            {/* Decorative art deco line — horizontal divider below frames */}
            <div
              className="absolute"
              style={{
                bottom: "0px",
                left: "10%",
                width: "80%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(200,169,110,0.15), transparent)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="h-px w-8"
                style={{ background: "rgba(200,169,110,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(200,169,110,0.7)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#f5f0eb" }}
              >
                Vintage Art Print Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(245,240,235,0.6)" }}
              >
                Art deco to mid-century modern &mdash; sized for today&apos;s frames
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(245,240,235,0.5)" }}
            >
              Original vintage posters used non-standard dimensions that
              don&apos;t fit modern frames. This guide bridges the gap between
              authentic vintage proportions and the standard sizes buyers
              expect &mdash; across seven sub-styles.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Vintage Art Sizes
                </Button>
              </a>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(245,240,235,0.35)" }}
              >
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(200,169,110,0.06)",
                  borderColor: "rgba(200,169,110,0.18)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#c8a96e" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(245,240,235,0.6)" }}
                >
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(200,169,110,0.06)",
                  borderColor: "rgba(200,169,110,0.18)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#c8a96e" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(245,240,235,0.6)" }}
                >
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(200,169,110,0.06)",
                  borderColor: "rgba(200,169,110,0.18)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#c8a96e" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(245,240,235,0.6)" }}
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
            <QuickAnswer question="What sizes work best for vintage art prints on Etsy?">
              <strong>18&times;24 and 24&times;36</strong> are the top sellers for vintage poster styles (art deco, retro travel). <strong>8&times;10 and 11&times;14</strong> lead for vintage botanical and retro kitchen art. <strong>11&times;17</strong> is a standout for vintage because it echoes original small-format poster proportions.
            </QuickAnswer>

            {/* --- H2 1: Why Vintage Art Needs Its Own Sizing Strategy on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Vintage Art Needs Its Own Sizing Strategy on Etsy
              </h2>
              <p className="text-foreground-60 mb-4">
                Vintage art occupies a unique position in the Etsy digital download
                market. Unlike modern illustrations designed from scratch on a digital
                canvas, vintage-style art draws from historical formats that used
                non-standard dimensions. US one-sheet travel posters were 25&times;40&Prime;.
                European art deco posters followed the DIN A1 standard (23.4&times;33.1&Prime;).
                Vintage movie posters were 27&times;41&Prime;. None of these fit standard
                modern frames.
              </p>
              <p className="text-foreground-60 mb-4">
                This creates a challenge that other niches don&apos;t face. When a buyer
                falls in love with a retro travel poster, they want it in a size that
                fits the frame already hanging in their living room &mdash; not the
                original 25&times;40&Prime; format. They&apos;re matching vintage art to
                existing frames, not buying frames to fit the art. That means sellers need
                to offer more standard sizes than almost any other niche.
              </p>
              <p className="text-foreground-60">
                The winning strategy is to preserve the authentic vintage feel &mdash;
                the tall proportions, the bold color palettes, the period typography
                &mdash; while delivering the standard frame sizes buyers expect. For the
                complete size reference across all niches, see our{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-vintage-art-mockup.jpg" alt="Living room with three framed vintage art prints above a mid-century modern sofa — art deco geometric poster in gold and black, retro European travel poster in vibrant blues, and vintage botanical illustration in muted greens" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- H2 2: Best-Selling Sizes for Vintage Art Prints on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best-Selling Sizes for Vintage Art Prints on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                Vintage art over-indexes on larger poster sizes compared to other Etsy
                niches. While{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>{" "}
                remains a strong seller for smaller vintage accents, the real volume
                sits at{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18&times;24
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36
                </Link>{" "}
                &mdash; the sizes that echo original vintage poster scale. Every
                pixel dimension below is at 300 DPI, the professional print standard.
                See our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  resolution guide
                </Link>{" "}
                for more on DPI requirements.
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
                        Ratio Pack
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Vintage Use Case
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
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small accent, retro kitchen shelf
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400&times;3000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Vintage botanical, retro kitchen art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">8.5&times;11</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550&times;3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US Letter, home printing, retro ads
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">11&times;14</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Vintage botanical, mid-century accent
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">11&times;17</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Tabloid/ledger format, echoes vintage ad proportions
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">12&times;16</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600&times;4800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        European frames, vintage botanical bridge size
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
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800&times;6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-century modern statement piece
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
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Top vintage poster size, art deco sweet spot
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
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large vintage poster, retro travel format
                      </td>
                    </tr>
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
                      <td className="py-3 px-4 text-foreground-60">Quick Export</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Full poster, closest to original one-sheet dimensions
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
                        2480&times;3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        UK/EU standard, vintage botanical must-have
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
                        3508&times;4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Art nouveau posters, EU gallery wall anchor
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">A2</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961&times;7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large EU poster, art deco statement
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm">
                Notice the bias toward larger sizes. Vintage art was historically
                large-format &mdash; posters were designed to be seen from across a
                room or street. Modern buyers carry that expectation, gravitating toward{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18&times;24
                </Link>{" "}
                and above for the authentic vintage poster experience.
              </p>
            </div>

            {/* --- H2 3: Sizing by Vintage Art Sub-Style --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Sizing by Vintage Art Sub-Style
              </h2>
              <p className="text-foreground-60 mb-6">
                Vintage art isn&apos;t a single style &mdash; it spans over a century of
                design movements, each with distinct proportions and buyer expectations.
                The sizes that sell best vary significantly by sub-style. Here&apos;s how
                to size each one for maximum reach.
              </p>

              <div className="grid gap-4">
                {/* Art Deco */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Art Deco (1920s&ndash;1930s)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Tall, narrow compositions with geometric symmetry, metallic
                    accents, and bold contrast. Gold-on-black color schemes demand
                    large formats where the detail shines. The 2:3 ratio is ideal
                    because it mirrors the original 1920s art deco poster proportions.
                    A2 and A1 are essential for the EU market where art deco remains
                    hugely popular.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;18 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      16&times;24 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-24x36-print-size" className="hover:underline">24&times;36</Link> (Quick Export)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      11&times;17
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A2 / A1 (ISO)
                    </span>
                  </div>
                </Card>

                {/* Mid-Century Modern */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Mid-Century Modern (1950s&ndash;1960s)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Clean geometry, bold primary colors, and open composition. The
                    4:5 ratio works particularly well for mid-century designs because
                    the slightly squarer format suits the balanced, centered layouts
                    typical of the era.{" "}
                    <Link
                      href="/etsy-18x24-print-size"
                      className="text-accent-light hover:underline"
                    >
                      18&times;24
                    </Link>{" "}
                    is the sweet spot. There&apos;s significant overlap with{" "}
                    <Link
                      href="/etsy-minimalist-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      minimalist wall art
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/etsy-abstract-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      abstract wall art
                    </Link>{" "}
                    in this sub-style.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link> (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Square formats
                    </span>
                  </div>
                </Card>

                {/* Retro Travel Posters */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Retro Travel Posters
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Vertical orientation is dominant. The 2:3 ratio closely matches
                    original travel poster proportions, making it the most authentic
                    choice. These are among Etsy&apos;s top-selling digital download
                    categories.{" "}
                    <Link
                      href="/etsy-18x24-print-size"
                      className="text-accent-light hover:underline"
                    >
                      18&times;24
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24&times;36
                    </Link>{" "}
                    are the top sellers. 13&times;19 works well for fine art paper prints.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;18 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link> (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-24x36-print-size" className="hover:underline">24&times;36</Link> (Quick Export)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      13&times;19
                    </span>
                  </div>
                </Card>

                {/* Vintage Botanical Illustrations */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Vintage Botanical Illustrations
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Portrait 3:4 and 4:5 ratios suit botanical art best. Mid-sizes
                    sell strongest &mdash; buyers hang vintage botanicals in kitchens,
                    bathrooms, and hallways where smaller frames work well.{" "}
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
                    are critical for international buyers &mdash; botanical art is huge
                    in the UK and EU. See our{" "}
                    <Link
                      href="/etsy-botanical-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      botanical print sizes guide
                    </Link>{" "}
                    for the full breakdown.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      11&times;14
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;16 (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4 / A3 (ISO)
                    </span>
                  </div>
                </Card>

                {/* Antique Maps & Charts */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Antique Maps &amp; Charts
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Landscape orientation is often needed &mdash; maps were designed
                    wider than they are tall. Larger sizes sell best because fine
                    geographic detail requires scale to read comfortably. Offering both
                    orientations is important for this sub-style. See our{" "}
                    <Link
                      href="/etsy-landscape-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      landscape print sizes guide
                    </Link>{" "}
                    for more on horizontal formats.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link> (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-20x30-print-size" className="hover:underline">20&times;30</Link> (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Both orientations
                    </span>
                  </div>
                </Card>

                {/* Retro Kitchen / Advertising Art */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Retro Kitchen &amp; Advertising Art
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Smaller accent sizes dominate. Buyers hang retro kitchen art in
                    casual, fun groupings &mdash; think vintage coffee ads, 1950s
                    diner art, or retro food illustrations. US Letter (8.5&times;11)
                    is popular because buyers print these at home for quick kitchen
                    decor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      8.5&times;11 (Letter)
                    </span>
                  </div>
                </Card>

                {/* Art Nouveau */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Art Nouveau (1890s&ndash;1910s)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Tall, flowing compositions with organic curves and ornamental
                    borders. The 2:3 portrait ratio is dominant. 11&times;17 is a
                    standout because it echoes the original small-format art nouveau
                    poster. A-series sizes are essential since art nouveau is a
                    European-origin movement &mdash; Mucha, Klimt, and Toulouse-Lautrec
                    were all European artists whose work drives ongoing demand.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      11&times;17
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;18 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link> (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A3 / A2 (ISO)
                    </span>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- ContextualCTA 1 — Sub-style complexity angle --- */}
            <ContextualCTA
              problem="Seven vintage sub-styles, each with different ideal sizes and ratios. Resizing manually for every sub-style is hours of work per listing."
              solution="Upload once and get every size across all 5 ratio packs — art deco to mid-century modern, covered in one batch."
              buttonText="Resize Your Vintage Art"
              appUrl={appUrl}
            />

            {/* --- H2 4: Original Vintage Dimensions vs. Modern Frame Standards --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Original Vintage Dimensions vs. Modern Frame Standards
              </h2>
              <p className="text-foreground-60 mb-6">
                Understanding the relationship between historical poster formats and
                modern frame sizes is the key to authentic-looking vintage art at
                standard dimensions. Here&apos;s how original formats map to today&apos;s
                standard frame sizes &mdash; and which ratios preserve the vintage
                feel best.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Original Format
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Original Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Closest Modern Standard
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        US One-Sheet
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        25&times;40&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Most common conversion. 2:3 ratio preserves proportions well.
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        European DIN A1
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        23.4&times;33.1&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        A1 or 24&times;36
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Nearly identical. Offer both A1 and 24&times;36.
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Half-Sheet
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        22&times;28&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Link
                          href="/etsy-20x30-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;30
                        </Link>{" "}
                        or{" "}
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        18&times;24 is the more common frame size for this range.
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Window Card
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        14&times;22&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11&times;17 or 13&times;19
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11&times;17 is widely available; 13&times;19 for fine art prints.
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Insert Card
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        14&times;36&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        No direct match
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Unusually narrow. Consider cropping to 12&times;36 or
                        offering as a custom panoramic format.
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Movie Poster
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        27&times;41&Prime;
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Slight cropping needed. 2:3 ratio is the best fit.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Cropping matters for vintage art:
                    </strong>{" "}
                    Vintage designs often include ornamental borders, period
                    typography, or decorative frames that run to the edge of the
                    composition. When converting from original proportions to
                    modern standards, check that these elements aren&apos;t cut
                    off at the new aspect ratio. The 2:3 ratio preserves the most
                    original poster content in most cases.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- H2 5: Ratios That Matter for Vintage Art --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ratios That Matter for Vintage Art
              </h2>
              <p className="text-foreground-60 mb-6">
                Different vintage sub-styles map to different aspect ratios. Understanding
                which ratios serve which styles helps you prioritize the right packs
                for your specific niche.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">2:3 Ratio</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    The most authentic vintage ratio. Closest match to original poster
                    proportions. Essential for art deco, retro travel posters, and art
                    nouveau. Sizes include 12&times;18, 16&times;24,{" "}
                    <Link
                      href="/etsy-20x30-print-size"
                      className="text-accent-light hover:underline"
                    >
                      20&times;30
                    </Link>
                    , and{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24&times;36
                    </Link>
                    .
                  </p>
                  <p className="text-xs text-foreground-60/60 font-mono">
                    Best for: Art Deco, Travel Posters, Art Nouveau
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">4:5 Ratio</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Works well for mid-century modern and smaller vintage accent pieces.
                    The slightly squarer format suits balanced, centered compositions. Sizes
                    include{" "}
                    <Link
                      href="/etsy-8x10-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8&times;10
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/etsy-16x20-print-size"
                      className="text-accent-light hover:underline"
                    >
                      16&times;20
                    </Link>
                    .
                  </p>
                  <p className="text-xs text-foreground-60/60 font-mono">
                    Best for: Mid-Century Modern, Retro Kitchen, Vintage Ads
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">3:4 Ratio</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Ideal for vintage botanical illustrations, vintage portraits, and
                    antique prints. The moderate proportions suit detailed, intricate
                    artwork. Sizes include 12&times;16 and{" "}
                    <Link
                      href="/etsy-18x24-print-size"
                      className="text-accent-light hover:underline"
                    >
                      18&times;24
                    </Link>
                    .
                  </p>
                  <p className="text-xs text-foreground-60/60 font-mono">
                    Best for: Vintage Botanical, Antique Prints, Portraits
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">ISO A-Series</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Essential for European vintage styles. Art deco, art nouveau, and
                    vintage botanical art all originated in Europe. Buyers in the UK,
                    EU, and Australia expect{" "}
                    <Link
                      href="/etsy-a4-print-size"
                      className="text-accent-light hover:underline"
                    >
                      A4
                    </Link>
                    ,{" "}
                    <Link
                      href="/etsy-a3-print-size"
                      className="text-accent-light hover:underline"
                    >
                      A3
                    </Link>
                    , and A2 as standard frame sizes.
                  </p>
                  <p className="text-xs text-foreground-60/60 font-mono">
                    Best for: Art Deco, Art Nouveau, Botanical (EU market)
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60 text-sm">
                The non-standard extras &mdash; 11&times;17 and 13&times;19 &mdash;
                deserve special attention for vintage art. 11&times;17 is tabloid/ledger
                format and echoes original small-format vintage ads and window cards.
                13&times;19 matches fine art inkjet paper, popular with buyers who
                print vintage art on archival stock. Both are included in the Extras pack.
              </p>
            </div>

            {/* --- H2 6: Vintage Gallery Wall Sets --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vintage Gallery Wall Sets &mdash; Curating Sizes for Cohesion
              </h2>
              <p className="text-foreground-60 mb-6">
                Vintage gallery walls are trending heavily on Etsy. Buyers build curated
                collections of vintage art that evoke a specific era or aesthetic &mdash;
                a wall of retro travel posters from European cities, a set of vintage
                botanical illustrations for a{" "}
                <Link
                  href="/etsy-farmhouse-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  farmhouse kitchen
                </Link>
                , or a mixed-era collection
                blending art deco geometry with mid-century modern color. For the complete
                gallery wall strategy, see our{" "}
                <Link
                  href="/etsy-gallery-wall-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  gallery wall print sizes guide
                </Link>
                .
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Themed Era Set
                  </h3>
                  {/* CSS diagram: 3 frames with vintage gold borders */}
                  <div className="flex items-center justify-center gap-2.5 mb-4 py-4 rounded-lg" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)" }}>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded border-2 flex items-center justify-center" style={{ width: "50px", height: "70px", borderColor: "rgba(200,169,110,0.4)", background: "linear-gradient(135deg, rgba(200,169,110,0.08), rgba(200,169,110,0.03))" }}>
                        <span className="text-[7px] font-mono" style={{ color: "rgba(200,169,110,0.5)" }}>{["1920s", "1920s", "1920s"][i - 1]}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-foreground-60 text-xs mb-3">
                    All pieces from the same era. 3&ndash;5 art deco prints or 4
                    retro travel posters. Same ratio across the set.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3&times; 18&times;24
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Same ratio essential
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Mixed-Era Collection
                  </h3>
                  {/* CSS diagram: frames with different vintage hues */}
                  <div className="flex items-center justify-center gap-2.5 mb-4 py-4 rounded-lg" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)" }}>
                    <div className="rounded border-2 flex items-center justify-center" style={{ width: "45px", height: "63px", borderColor: "rgba(200,169,110,0.35)", background: "rgba(90,30,50,0.15)" }}>
                      <span className="text-[6px] font-mono" style={{ color: "rgba(200,169,110,0.5)" }}>Deco</span>
                    </div>
                    <div className="rounded border-2 flex items-center justify-center" style={{ width: "52px", height: "65px", borderColor: "rgba(200,169,110,0.45)", background: "rgba(30,90,90,0.12)" }}>
                      <span className="text-[6px] font-mono" style={{ color: "rgba(200,169,110,0.5)" }}>MCM</span>
                    </div>
                    <div className="rounded border-2 flex items-center justify-center" style={{ width: "45px", height: "63px", borderColor: "rgba(200,169,110,0.35)", background: "rgba(130,100,20,0.12)" }}>
                      <span className="text-[6px] font-mono" style={{ color: "rgba(200,169,110,0.5)" }}>Novo</span>
                    </div>
                  </div>
                  <p className="text-foreground-60 text-xs mb-3">
                    Art deco + mid-century modern, or different decades mixed.
                    Color palette ties the set together across eras.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Matching ratios across pieces
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Vintage Botanical Set
                  </h3>
                  {/* CSS diagram: botanical-style frames */}
                  <div className="flex items-center justify-center gap-2.5 mb-4 py-4 rounded-lg" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)" }}>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="rounded border-2 flex items-center justify-center" style={{ width: "40px", height: "52px", borderColor: "rgba(60,100,60,0.4)", background: "rgba(60,100,60,0.08)" }}>
                        <span className="text-[7px] font-mono" style={{ color: "rgba(60,100,60,0.6)" }}>{i}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-foreground-60 text-xs mb-3">
                    4&ndash;6 vintage botanical illustrations. Perfect for
                    farmhouse kitchens and hallway grids. Mid-sizes (8&times;10,
                    11&times;14).
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      4&times; 8&times;10
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      4&times; A4
                    </span>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60 text-sm">
                The golden rule for vintage gallery wall sets: all pieces must use the
                same ratio for visual harmony, even if the sub-styles differ. A set
                mixing art deco and mid-century modern works beautifully &mdash; as
                long as every piece is offered at the same aspect ratio. This means
                each design needs the full range of size options.
              </p>
            </div>

            {/* --- ContextualCTA 2 — Gallery wall set angle --- */}
            <ContextualCTA
              problem="Building a vintage gallery wall set? Every piece needs identical sizes across the set — mismatched dimensions ruin the gallery wall effect."
              solution="Upload each piece once. Every design gets the same 30+ sizes, organized in ratio packs and ready to upload to Etsy."
              buttonText="Create Gallery Wall Sizes"
              appUrl={appUrl}
            />

            {/* --- H2 7: How to Generate All Sizes From One Vintage Design --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Generate All Sizes From One Vintage Design
              </h2>
              <p className="text-foreground-60 mb-6">
                A vintage art seller with 5 retro travel posters offered as a gallery
                wall set in 12 sizes faces 60 individual resize operations per listing.
                Scale that across a catalog and the manual work becomes unsustainable.
                Here&apos;s the faster approach. For a general walkthrough, see our{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  complete resize guide
                </Link>
                .
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(200,169,110,0.15)",
                        color: "#c8a96e",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Upload Your Vintage Design
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Upload your artwork to SnapToSize. Higher resolution source
                        files produce sharper results at large poster sizes &mdash;
                        especially important for vintage art with ornamental borders,
                        fine typography, or detailed illustrations.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(200,169,110,0.15)",
                        color: "#c8a96e",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Select Your Ratio Packs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Choose the packs that match your vintage sub-style. Art deco
                        and travel posters need the 2:3 pack. Mid-century modern needs
                        4:5. Botanicals need 3:4. Select all five packs for maximum
                        coverage &mdash; up to 70 print-ready files from a single
                        upload. Learn more about{" "}
                        <Link
                          href="/how-many-sizes-etsy-printable"
                          className="text-accent-light hover:underline"
                        >
                          how many sizes to include
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(200,169,110,0.15)",
                        color: "#c8a96e",
                      }}
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Download &amp; Upload to Etsy
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Get organized ZIP packs with professional file naming.
                        All at 300 DPI, all under Etsy&apos;s 20 MB limit. Vintage
                        art with defined borders and ornamental frames benefits from
                        intelligent resizing that preserves composition. For file
                        organization tips, see our{" "}
                        <Link
                          href="/how-to-package-digital-wall-art-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          packaging guide
                        </Link>
                        .
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
                    5 retro travel posters &times; 12 sizes = 60 manual resizes.
                    With SnapToSize: 5 uploads, all sizes generated automatically.
                    Same 300 DPI quality, same professional naming, same
                    Etsy-compliant ZIPs.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Generate Every Vintage Art Size Instantly"
                stat="Up to 70 print-ready files from one upload"
                description="One upload. All 5 ratio packs. Every size your vintage art buyers need — art deco, retro travel, mid-century modern, vintage botanical — in seconds, not hours."
                buttonText="Generate All Sizes Free"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Vintage Art Print Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-vintage-art-print-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
