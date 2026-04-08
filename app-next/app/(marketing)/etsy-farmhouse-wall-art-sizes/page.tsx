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
  title: "Farmhouse Wall Art Sizes for Etsy — Complete Seller Guide",
  description:
    "Farmhouse wall art sizes for Etsy sellers. Best sizes for modern farmhouse, rustic, French country, cottagecore, and farmhouse typography prints.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-farmhouse-wall-art-sizes",
  },
  openGraph: {
    title: "Farmhouse Wall Art Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for farmhouse art on Etsy. Sub-style breakdowns, room-by-room sizing, gallery wall sets, and batch resizing from one upload.",
    url: "https://snaptosize.com/etsy-farmhouse-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-farmhouse-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Farmhouse Wall Art Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmhouse Wall Art Sizes for Etsy — Complete Seller Guide",
    description:
      "Best sizes for farmhouse art on Etsy. Sub-style breakdowns, room-by-room sizing, gallery wall sets, and batch resizing from one upload.",
    images: ["/assets/og/etsy-farmhouse-wall-art-sizes.png"],
  },
};

export default function EtsyFarmhouseWallArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Farmhouse Wall Art Sizes for Etsy — Modern Farmhouse to Cottagecore, One Upload",
    description:
      "Complete farmhouse wall art sizing guide for Etsy sellers. Covers best-selling sizes, sub-style breakdowns (modern farmhouse, rustic, French country, cottagecore, typography, vintage agricultural), room-by-room sizing, gallery wall sets, and how to generate every size from one upload.",
    url: "https://snaptosize.com/etsy-farmhouse-wall-art-sizes",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
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
        name: "Farmhouse Wall Art Sizes",
        item: "https://snaptosize.com/etsy-farmhouse-wall-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "What are the most popular print sizes for farmhouse wall art on Etsy?",
      answer:
        "8\u00d710, 11\u00d714, and 16\u00d720 are the top three sellers. For large statement pieces, 18\u00d724 and 20\u00d730 are popular above sofas and in dining rooms. Including 5\u00d77 for small frames and A4/A3 for international buyers covers the full range.",
    },
    {
      question:
        "How many sizes should I offer for each farmhouse print?",
      answer:
        "The more sizes you offer, the more buyers you reach. Top-selling farmhouse art shops offer 15+ sizes per listing across multiple ratios (2:3, 3:4, 4:5, ISO, and extras). Gallery wall sets should have matching sizes across all pieces.",
    },
    {
      question:
        "What sizes work best for farmhouse gallery wall sets?",
      answer:
        "Offer a mix: one large anchor piece (16\u00d720 or 18\u00d724), medium companions (11\u00d714, 12\u00d716), and smaller fillers (5\u00d77, 8\u00d710). Every piece in the set should be available in the same size options so buyers can choose their preferred arrangement. Symmetrical grids work well with matching sizes like 8\u00d710 or 11\u00d714.",
    },
    {
      question:
        "Should farmhouse prints include international paper sizes?",
      answer:
        "Yes. Farmhouse decor is popular worldwide, especially in the UK, Australia, and continental Europe. A4 and A3 are standard frame sizes in these markets. Including ISO A-series sizes opens your listings to international buyers.",
    },
    {
      question:
        "What\u2019s the difference between modern farmhouse and rustic farmhouse sizing?",
      answer:
        "Modern farmhouse art tends toward medium sizes (8\u00d710, 11\u00d714, 16\u00d720) in symmetrical gallery wall arrangements with clean-lined frames. Rustic farmhouse art often works better at larger sizes (16\u00d724, 20\u00d730) where weathered textures and landscape scenes have more visual impact. Both styles should offer the full range for maximum sales.",
    },
    {
      question:
        "What resolution should farmhouse art prints be?",
      answer:
        "300 DPI is the professional print standard. At 300 DPI, an 8\u00d710 print needs 2400\u00d73000 pixels and a 16\u00d720 needs 4800\u00d76000 pixels. This preserves fine details like botanical illustration line work, vintage typography, and weathered texture detail.",
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
    "https://app.snaptosize.com/app/quick-export?source=seo_farmhouse-art&kind=guide";

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
            "linear-gradient(155deg, #1a1612 0%, #181510 25%, #16130f 50%, #1a1714 75%, #141210 100%)",
        }}
      >
        {/* Warm earthy texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 35%, rgba(139,154,109,0.5) 0%, transparent 50%), radial-gradient(circle at 65% 55%, rgba(232,220,200,0.4) 0%, transparent 45%), radial-gradient(circle at 45% 80%, rgba(139,154,109,0.3) 0%, transparent 40%)",
          }}
        />

        {/* Warm cream glow — top right */}
        <div
          className="absolute top-[-10%] right-[15%] w-[450px] h-[450px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #E8DCC8, transparent 70%)",
          }}
        />
        {/* Sage accent glow — bottom left */}
        <div
          className="absolute bottom-[-12%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #8B9A6D, transparent 70%)",
          }}
        />

        {/* CSS-only Farmhouse Frame Gallery — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "360px", height: "380px" }}
          >
            {/* Shiplap texture lines — horizontal background pattern */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: `${i * 32}px`,
                  left: "0",
                  width: "100%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent 5%, rgba(232,220,200,0.06) 20%, rgba(232,220,200,0.08) 50%, rgba(232,220,200,0.06) 80%, transparent 95%)",
                }}
              />
            ))}

            {/* Frame 1 — Large, warm sage botanical, slight left rotation */}
            <div
              className="absolute"
              style={{
                width: "125px",
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
                  border: "4px solid rgba(160,140,100,0.45)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(160,140,100,0.15), 0 8px 24px rgba(0,0,0,0.3)",
                  background:
                    "linear-gradient(160deg, #2a3020 0%, #1e261a 50%, #2a3020 100%)",
                }}
              >
                {/* Inner mat border — cream */}
                <div
                  style={{
                    position: "absolute",
                    inset: "8px",
                    border: "1px solid rgba(232,220,200,0.18)",
                    background: "rgba(232,220,200,0.03)",
                  }}
                />
                {/* Botanical stem suggestion */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "1px",
                    height: "40%",
                    background: "rgba(139,154,109,0.20)",
                  }}
                />
                {/* Leaf suggestion — left */}
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "38%",
                    width: "10px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(139,154,109,0.12)",
                    transform: "rotate(-30deg)",
                  }}
                />
                {/* Leaf suggestion — right */}
                <div
                  style={{
                    position: "absolute",
                    top: "42%",
                    right: "36%",
                    width: "10px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(139,154,109,0.12)",
                    transform: "rotate(30deg)",
                  }}
                />
              </div>
            </div>

            {/* Frame 2 — Center, cream/warm wood, no rotation (anchor piece) */}
            <div
              className="absolute"
              style={{
                width: "135px",
                height: "185px",
                top: "8px",
                left: "115px",
                transform: "rotate(0deg)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "5px solid rgba(160,140,100,0.50)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(160,140,100,0.18), 0 10px 30px rgba(0,0,0,0.35)",
                  background:
                    "linear-gradient(160deg, #2a2518 0%, #1e1a12 50%, #2a2518 100%)",
                }}
              >
                {/* Cream mat */}
                <div
                  style={{
                    position: "absolute",
                    inset: "9px",
                    border: "1px solid rgba(232,220,200,0.22)",
                    background: "rgba(232,220,200,0.04)",
                  }}
                />
                {/* Farmhouse typography suggestion — horizontal lines */}
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "20%",
                    width: "60%",
                    height: "1px",
                    background: "rgba(232,220,200,0.12)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "25%",
                    width: "50%",
                    height: "1px",
                    background: "rgba(232,220,200,0.10)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "28%",
                    width: "44%",
                    height: "1px",
                    background: "rgba(232,220,200,0.08)",
                  }}
                />
              </div>
            </div>

            {/* Frame 3 — Right, warm wood brown, slight right rotation */}
            <div
              className="absolute"
              style={{
                width: "110px",
                height: "155px",
                top: "50px",
                left: "240px",
                transform: "rotate(3deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "4px solid rgba(160,140,100,0.40)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(160,140,100,0.12), 0 8px 24px rgba(0,0,0,0.3)",
                  background:
                    "linear-gradient(160deg, #3a3028 0%, #2a2018 50%, #3a3028 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "7px",
                    border: "1px solid rgba(232,220,200,0.15)",
                    background: "rgba(232,220,200,0.03)",
                  }}
                />
                {/* Landscape barn silhouette suggestion */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "22%",
                    left: "15%",
                    width: "70%",
                    height: "1px",
                    background: "rgba(139,154,109,0.15)",
                  }}
                />
                {/* Barn roof triangle */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "22%",
                    left: "35%",
                    width: "0",
                    height: "0",
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderBottom: "10px solid rgba(160,140,100,0.10)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom left, sage green */}
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
                  border: "3px solid rgba(139,154,109,0.35)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #242a1e 0%, #1c2218 50%, #242a1e 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "5px",
                    border: "1px solid rgba(139,154,109,0.14)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom center, cream */}
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
                  border: "3px solid rgba(232,220,200,0.30)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #2a2620 0%, #201c16 50%, #2a2620 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "5px",
                    border: "1px solid rgba(232,220,200,0.12)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom right, warm brown */}
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
                  border: "3px solid rgba(160,140,100,0.28)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #322a20 0%, #28201a 50%, #322a20 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(160,140,100,0.12)",
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
                color: "rgba(139,154,109,0.30)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "0px",
                left: "150px",
                color: "rgba(232,220,200,0.25)",
              }}
            >
              16&times;20
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "215px",
                right: "35px",
                color: "rgba(160,140,100,0.25)",
              }}
            >
              11&times;14
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                left: "30px",
                color: "rgba(139,154,109,0.22)",
              }}
            >
              5&times;7
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                left: "145px",
                color: "rgba(232,220,200,0.20)",
              }}
            >
              A4
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                right: "55px",
                color: "rgba(160,140,100,0.20)",
              }}
            >
              18&times;24
            </div>

            {/* Decorative shiplap line — horizontal divider below frames */}
            <div
              className="absolute"
              style={{
                bottom: "0px",
                left: "5%",
                width: "90%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(232,220,200,0.12), transparent)",
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
                style={{ background: "rgba(139,154,109,0.6)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(139,154,109,0.8)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#f5f0eb" }}
              >
                Farmhouse Wall Art Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(245,240,235,0.6)" }}
              >
                Modern farmhouse to cottagecore &mdash; every size buyers need
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(245,240,235,0.5)" }}
            >
              Farmhouse buyers decorate entire rooms with coordinated art
              &mdash; kitchens, living rooms, bathrooms, and entryways each
              demand different sizes. This guide covers every sub-style and
              room so you never miss a sale.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Farmhouse Art Sizes
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
                  background: "rgba(139,154,109,0.08)",
                  borderColor: "rgba(139,154,109,0.22)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#8B9A6D" }}
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
                  background: "rgba(139,154,109,0.08)",
                  borderColor: "rgba(139,154,109,0.22)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#8B9A6D" }}
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
                  background: "rgba(139,154,109,0.08)",
                  borderColor: "rgba(139,154,109,0.22)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#8B9A6D" }}
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
            <QuickAnswer question="What sizes work best for farmhouse wall art on Etsy?">
              <strong>8&times;10</strong> is the universal farmhouse staple for kitchens and bathrooms. <strong>11&times;14</strong> and <strong>16&times;20</strong> dominate gallery wall sets. For large statement pieces above sofas, <strong>18&times;24</strong> and <strong>20&times;30</strong> are top sellers. Include <strong>A4</strong> and <strong>A3</strong> for international buyers.
            </QuickAnswer>

            {/* --- H2 1: Why Farmhouse Art Needs Multiple Print Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Farmhouse Art Needs Multiple Print Sizes
              </h2>
              <p className="text-foreground-60 mb-4">
                Farmhouse art isn&apos;t confined to one room. Buyers use it in
                kitchens (quote art above the sink), living rooms (large
                landscapes above the sofa), bathrooms (small botanicals on a
                shelf), bedrooms (paired prints flanking a mirror), and
                entryways (welcome signs in narrow hallways). Each space demands
                different dimensions.
              </p>
              <p className="text-foreground-60 mb-4">
                Gallery wall sets &mdash; coordinated groups of 3, 5, 6, or 12
                prints &mdash; are one of the top product formats for farmhouse
                art on Etsy. Every piece in a set needs the same size options so
                buyers can mix and match frames. If one design in your set only
                comes in{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>{" "}
                while another offers{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20
                </Link>
                , buyers can&apos;t create the coordinated look they want.
              </p>
              <p className="text-foreground-60">
                Farmhouse decor is globally popular &mdash; especially in the UK,
                Australia, and continental Europe. International buyers expect
                ISO A-series sizes like{" "}
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
                </Link>
                . Omitting those sizes means missing buyers in markets where
                farmhouse style is thriving. For a broader overview, see our{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- H2 2: Complete Farmhouse Print Size Reference --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Complete Farmhouse Print Size Reference
              </h2>
              <p className="text-foreground-60 mb-6">
                Every pixel dimension below is at 300 DPI, the professional
                print standard. Sizes marked with a star are especially
                popular for farmhouse art. For more on how ratios work, see our{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  print ratios guide
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
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio Pack
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Farmhouse Use
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
                          5&times;7 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500&times;2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Shelf accent, gallery wall filler
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400&times;3000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Kitchen &amp; bathroom staple
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-8-5x11-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8.5&times;11 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550&times;3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US Letter, home printing for signs
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-11x14-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;14 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery wall favorite, mat-and-frame classic
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-12x18-print-size"
                          className="text-accent-light hover:underline"
                        >
                          12&times;18 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600&times;5400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Landscape barn &amp; countryside scenes
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800&times;6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery wall anchor, above-console
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement piece, above-sofa or dining room
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
                        Large format, living room focal wall
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a4-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A4 &#9733;
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480&times;3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        ISO A-Series
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        International buyers, home printing
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
                      <td className="py-3 px-4 text-foreground-60">
                        ISO A-Series
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        French country botanicals, EU/UK/AU buyers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm">
                This table highlights the most popular farmhouse sizes. All five
                ratio packs include additional sizes (4&times;6, 6&times;8,
                6&times;9, 9&times;12, 10&times;15, 12&times;15, 12&times;16,
                15&times;20, 16&times;24, 20&times;24, 20&times;25, 24&times;30,{" "}
                <Link
                  href="/etsy-11x17-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;17
                </Link>
                , 13&times;19, A5, A2, A1).{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36
                </Link>
                , 24&times;32, and A0 are available as single exports.
              </p>
            </div>

            {/* --- H2 3: Best Sizes by Farmhouse Sub-Style --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best Sizes by Farmhouse Sub-Style
              </h2>
              <p className="text-foreground-60 mb-6">
                Farmhouse art spans multiple distinct aesthetics, each with
                different sizing preferences. Here&apos;s what sells best in
                each sub-style.
              </p>

              <div className="space-y-6">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Modern Farmhouse</h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Clean lines, neutral tones, simple compositions. Think Joanna
                    Gaines aesthetic &mdash; white walls, warm wood accents,
                    symmetrical gallery walls with matching frames.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Priority sizes:</strong>{" "}
                    8&times;10, 11&times;14, 16&times;20, 18&times;24 &mdash;
                    mid-to-large sizes in 4:5 and 3:4 ratios work best for
                    symmetrical arrangements.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Rustic Farmhouse</h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Barn scenes, weathered textures, vintage photography, and
                    countryside landscapes. Distressed wood frames complement
                    the aesthetic. Larger sizes showcase texture detail. See our{" "}
                    <Link
                      href="/etsy-landscape-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      landscape print sizes guide
                    </Link>{" "}
                    for more on landscape-oriented art.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Priority sizes:</strong>{" "}
                    12&times;18, 16&times;24, 20&times;30 &mdash; the 2:3 ratio
                    works best for horizontal barn and countryside compositions.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    French Country / Provincial
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Floral still lifes, vintage botanical illustrations, muted
                    lavender and sage palette. Strong international appeal
                    &mdash; French buyers expect ISO sizes. Gallery sets of 4-6{" "}
                    <Link
                      href="/etsy-botanical-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      botanical prints
                    </Link>{" "}
                    are among the top sellers in this sub-style.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Priority sizes:</strong>{" "}
                    8&times;10, 11&times;14, A4, A3, A2 &mdash; mid-sizes for
                    botanicals, ISO for international reach.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Cottagecore</h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Animals (chickens, sheep, ducks), garden scenes, whimsical
                    illustrations. Popular as gifts. Charming at smaller sizes
                    where detail-rich illustrations can be appreciated at close
                    range.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Priority sizes:</strong>{" "}
                    5&times;7, 8&times;10, 11&times;14, A5, A4 &mdash; desk and
                    shelf art, gift-ready framing.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Farmhouse Typography / Signs
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Inspirational quotes, kitchen sayings (&ldquo;Gather,&rdquo;
                    &ldquo;Farm Fresh&rdquo;), laundry room humor, seasonal
                    welcome signs. Text readability drives size choice. Portrait
                    orientation dominates. For more on{" "}
                    <Link
                      href="/etsy-quote-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      quote wall art sizing
                    </Link>
                    , see our dedicated guide.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Priority sizes:</strong>{" "}
                    8&times;10, 8.5&times;11, 11&times;14, 11&times;17, A4
                    &mdash; readability at mid-sizes, US Letter for home
                    printing.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Vintage Farm / Agricultural
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Vintage seed packets, farm equipment illustrations,
                    agricultural posters. Kitchen and dining room placement.
                    These overlap with the broader{" "}
                    <Link
                      href="/etsy-vintage-art-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      vintage art
                    </Link>{" "}
                    niche but lean specifically toward agricultural subjects.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Priority sizes:</strong>{" "}
                    8&times;10, 11&times;14, 16&times;20, 12&times;16, A3
                    &mdash; classic illustration proportions for kitchen and
                    dining room walls.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- CTA 1 — Productivity angle --- */}
            <ContextualCTA
              problem="Resizing each farmhouse design by hand across 6 sub-styles and 30+ sizes? That's hours of repetitive work per listing."
              solution="Upload once, download up to 70 print-ready files across all 5 ratio packs. Every sub-style, every size, auto-optimized."
              appUrl={appUrl}
              buttonText="Generate All Sizes Free"
            />

            {/* --- H2 4: Farmhouse Gallery Wall Sets — Sizing Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Farmhouse Gallery Wall Sets: Sizing Strategy
              </h2>
              <p className="text-foreground-60 mb-4">
                Gallery wall sets are one of the highest-value product formats
                for farmhouse art on Etsy. A set of 6 coordinated prints
                commands a higher price than 6 individual listings &mdash; and
                buyers expect every piece to be available in the same sizes. For
                a deep dive into gallery wall sizing, see our{" "}
                <Link
                  href="/etsy-gallery-wall-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  gallery wall print sizes guide
                </Link>
                .
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Symmetrical grid (4 or 6 frames):
                    </strong>{" "}
                    All same size &mdash; 8&times;10 or 11&times;14 are the
                    farmhouse favorites. Clean, orderly look that matches modern
                    farmhouse aesthetics.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Asymmetrical mix:
                    </strong>{" "}
                    One large anchor (16&times;20 or 18&times;24) surrounded by
                    smaller companions (8&times;10, 5&times;7, 11&times;14).
                    Popular for rustic and eclectic farmhouse styles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Horizontal row:
                    </strong>{" "}
                    3 matching frames above a headboard or sofa. 11&times;14 or
                    12&times;16 work well in triptych arrangements.
                  </p>
                </div>
              </div>

              <p className="text-foreground-60 mb-4">
                Consistency is what sells gallery sets. If a buyer picks 6 prints
                but can only get 4 of them at 16&times;20, they&apos;ll move on to
                a seller who offers complete coverage across the entire collection.
              </p>
              <p className="text-foreground-60">
                Spacing guidance: 2&ndash;3 inches between frames is the
                farmhouse standard. Weathered wood frames add roughly
                1&ndash;2 inches per side &mdash; factor that into your size
                recommendations when describing display dimensions in your
                listings.
              </p>
            </div>

            {/* --- H2 5: Room-by-Room Farmhouse Sizing Guide --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Room-by-Room Farmhouse Sizing Guide
              </h2>
              <p className="text-foreground-60 mb-6">
                Farmhouse decor is room-specific in a way other art niches
                aren&apos;t. Kitchen art is a different size than living room art.
                Here&apos;s what sells best by room.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Kitchen</h3>
                  <p className="text-foreground-60 text-sm">
                    8&times;10 and 11&times;14 for above-counter art.
                    5&times;7 for shelf styling. Typography and quote art
                    dominates &mdash; &ldquo;Gather,&rdquo; &ldquo;Farm
                    Fresh,&rdquo; recipe-inspired designs.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Living Room</h3>
                  <p className="text-foreground-60 text-sm">
                    16&times;20, 18&times;24, or{" "}
                    <Link
                      href="/etsy-20x30-print-size"
                      className="text-accent-light hover:underline"
                    >
                      20&times;30
                    </Link>{" "}
                    for the above-sofa focal wall. Gallery wall sets of 3-6
                    prints in coordinated sizes.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Bathroom</h3>
                  <p className="text-foreground-60 text-sm">
                    5&times;7 and 8&times;10 for small wall spaces. Botanical
                    and quote art are the most popular subjects. Buyers often
                    purchase sets of 2-3 for bathroom walls.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Bedroom</h3>
                  <p className="text-foreground-60 text-sm">
                    16&times;20 or{" "}
                    <Link
                      href="/etsy-18x24-print-size"
                      className="text-accent-light hover:underline"
                    >
                      18&times;24
                    </Link>{" "}
                    above the headboard. Paired prints (set of 2) flanking a
                    mirror are a top farmhouse bedroom layout.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Entryway / Mudroom</h3>
                  <p className="text-foreground-60 text-sm">
                    8&times;10 and 11&times;14 for narrow wall spaces. Welcome
                    signs and seasonal art rotate frequently &mdash; buyers
                    return to shops that offer consistent sizing.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Dining Room</h3>
                  <p className="text-foreground-60 text-sm">
                    Large single pieces at 18&times;24 or 20&times;30. French
                    country botanical sets are especially popular. Vintage
                    agricultural art (seed packet illustrations) fits naturally.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- H2 6: Resolution & Quality for Farmhouse Prints --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Resolution and Quality for Farmhouse Prints
              </h2>
              <p className="text-foreground-60 mb-4">
                300 DPI is the professional print standard, and farmhouse art has
                specific reasons to hit that mark. Fine detail in vintage
                botanical illustrations, subtle texture in weathered wood and
                barn photography, and delicate serif typography in quote art all
                degrade visibly at lower resolutions. For a complete breakdown,
                see our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  resolution guide for Etsy printables
                </Link>
                .
              </p>
              <p className="text-foreground-60 mb-4">
                Create your source file at the largest size in each ratio, then
                all smaller sizes can scale down without quality loss. Key pixel
                dimensions for top farmhouse sizes at 300 DPI:
              </p>
              <ul className="space-y-2 text-foreground-60 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">&bull;</span>
                  8&times;10 = 2400&times;3000 pixels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">&bull;</span>
                  16&times;20 = 4800&times;6000 pixels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">&bull;</span>
                  18&times;24 = 5400&times;7200 pixels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">&bull;</span>
                  20&times;30 = 6000&times;9000 pixels
                </li>
              </ul>
              <p className="text-foreground-60">
                Learn{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include
                </Link>{" "}
                in each listing for maximum sales coverage.
              </p>
            </div>

            {/* --- H2 7: How to Organize Farmhouse Print Files for Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Organize Farmhouse Print Files for Etsy
              </h2>
              <p className="text-foreground-60 mb-4">
                Buyers of farmhouse sets expect organized, professional
                downloads. The standard approach: separate ZIP files per ratio
                pack (2:3, 3:4, 4:5, ISO A-Series, Extras). Each ZIP contains
                all sizes for that ratio with clear file naming like{" "}
                <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">
                  FarmhouseHerbs_8x10_300dpi.jpg
                </code>
                .
              </p>
              <p className="text-foreground-60 mb-4">
                Etsy allows up to 5 digital files per listing with a{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  20 MB limit per file
                </Link>
                . Five ratio packs fit this structure perfectly. For gallery wall
                sets, ensure every piece in the set has the same size options so
                buyers can select matching frames. See our{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  packaging guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  file inclusion guide
                </Link>{" "}
                for detailed walkthroughs.
              </p>
              <p className="text-foreground-60">
                Professional file naming and organized ZIPs reduce buyer
                confusion and support requests &mdash; which means better
                reviews and fewer refund requests.
              </p>
            </div>

            {/* --- CTA 2 — Gallery wall set angle --- */}
            <ContextualCTA
              problem="Creating a farmhouse gallery wall set? Each piece needs the same 30+ sizes — that's hundreds of files to resize manually."
              solution="Every piece gets the same 30+ sizes, organized in ratio packs, ready to upload to Etsy. Consistent sizing across your entire set."
              appUrl={appUrl}
              buttonText="Resize Your Gallery Set Free"
            />

            {/* --- H2 8: Farmhouse Print Sizing Mistakes to Avoid --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Farmhouse Print Sizing Mistakes to Avoid
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Offering only 3-5 sizes:
                    </strong>{" "}
                    Top farmhouse art sellers offer 15+ sizes. Each missing size
                    is a buyer who can&apos;t find a match for their existing
                    frame. Learn more about{" "}
                    <Link
                      href="/how-to-resize-images-for-etsy"
                      className="text-accent-light hover:underline"
                    >
                      resizing images for Etsy
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Skipping international sizes:
                    </strong>{" "}
                    Farmhouse decor is popular in the UK, Australia, and
                    continental Europe. Omitting A4 and A3 means losing these
                    buyers entirely.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Inconsistent sizes across gallery sets:
                    </strong>{" "}
                    If piece 1 comes in 8&times;10 but piece 3 doesn&apos;t,
                    buyers can&apos;t create a coordinated wall. Every piece
                    needs the same options.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Wrong DPI (72 vs 300):
                    </strong>{" "}
                    72 DPI files are screen resolution. They look fine on a
                    monitor but print blurry at any size. Always deliver 300
                    DPI.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Portrait only for barn scenes:
                    </strong>{" "}
                    Rustic barn photography and countryside landscapes often
                    work better in landscape orientation. Offering both
                    orientations doubles your listing value.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Ignoring 8.5&times;11 (US Letter):
                    </strong>{" "}
                    Farmhouse buyers love printing at home. Typography and
                    sign art at{" "}
                    <Link
                      href="/etsy-8-5x11-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8.5&times;11
                    </Link>{" "}
                    lets them print directly on their home printer without
                    trimming.
                  </p>
                </div>
              </div>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Every Farmhouse Art Size, One Upload"
                stat="Up to 70 print-ready files from one upload"
                description="One upload. All 5 ratio packs. Every size your farmhouse art buyers need — modern farmhouse, rustic, cottagecore, French country — in seconds, not hours."
                buttonText="Generate All Sizes Free"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Farmhouse Wall Art Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-farmhouse-wall-art-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
