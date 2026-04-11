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
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Coastal Wall Art Sizes for Etsy — Complete Sizing Guide",
  description:
    "Best print sizes for coastal wall art on Etsy. Beach photography, ocean watercolors, nautical illustrations — sized for every frame and ratio.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-coastal-wall-art-sizes",
  },
  openGraph: {
    title: "Coastal Wall Art Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for coastal art on Etsy. Sub-niche breakdowns, gallery wall sets, large format statement pieces, and batch resizing from one upload.",
    url: "https://snaptosize.com/etsy-coastal-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-coastal-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Coastal Wall Art Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Wall Art Sizes for Etsy — Complete Sizing Guide",
    description:
      "Best sizes for coastal art on Etsy. Beach photography, ocean watercolors, nautical illustrations — sized for every frame and ratio.",
    images: ["/assets/og/etsy-coastal-wall-art-sizes.png"],
  },
};

export default function EtsyCoastalWallArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Coastal Wall Art Sizes for Etsy — Complete Sizing Guide",
    description:
      "Complete coastal wall art sizing guide for Etsy sellers. Covers best-selling sizes for beach photography, ocean watercolors, nautical illustrations, tropical coastal art, gallery wall sets, large format statement pieces, and international sizes.",
    url: "https://snaptosize.com/etsy-coastal-wall-art-sizes",
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
        name: "Coastal Wall Art Sizes",
        item: "https://snaptosize.com/etsy-coastal-wall-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What are the most popular print sizes for coastal wall art on Etsy?",
      answer:
        "8\u00d710 is the top entry-level size for bathroom and entryway coastal decor. 16\u00d724 and 20\u00d730 dominate for above-sofa beach photography statement pieces. 11\u00d714 is a top gallery wall size. 18\u00d724 sells well for ocean watercolors. Include A3 and A2 for international buyers in the UK, Australia, and Scandinavia.",
    },
    {
      question: "What ratio works best for beach photography prints?",
      answer:
        "The 2:3 ratio is the best fit for beach photography. It matches the natural landscape orientation of ocean horizons, aerial drone shots, and golden hour beach scenes. Key sizes in 2:3 include 12\u00d718, 16\u00d724, and 20\u00d730. Offer both landscape and portrait orientations \u2014 beach panoramas favor landscape, but portrait 2:3 prints also sell well for vertical wave compositions.",
    },
    {
      question: "How many sizes should I include in a coastal art Etsy listing?",
      answer:
        "Top-selling coastal art shops offer 15+ sizes per listing across multiple ratios. Including all five ratio packs (2:3, 3:4, 4:5, ISO A-series, and extras) gives buyers the widest frame compatibility. More sizes mean more buyers who find a match for their existing frame \u2014 which directly reduces abandoned carts.",
    },
    {
      question: "What sizes work best for coastal gallery wall sets?",
      answer:
        "For a 3-piece set, use one 16\u00d724 anchor piece with two 8\u00d712 companions. For a 6-piece grid, matching 8\u00d710 or 11\u00d714 prints work best. The key rule: every piece in the set must use the same aspect ratio so the gallery wall looks cohesive. Coastal gallery wall sets are one of the top-selling formats on Etsy.",
    },
    {
      question: "Should coastal prints include landscape and portrait orientations?",
      answer:
        "Yes. Beach photography and tropical scenes naturally favor landscape orientation, but buyers also want portrait options for narrow wall spaces. Ocean watercolors and coastal abstracts sell equally well in both orientations. Offering both doubles your listing value and covers more buyer needs.",
    },
    {
      question: "What sizes do international buyers expect for coastal wall art?",
      answer:
        "A4, A3, and A2 are standard in the UK, Australia, and Scandinavia \u2014 all major markets for coastal decor. A3 is especially popular for mid-size coastal prints, while A2 serves as the statement piece equivalent of 18\u00d724. Omitting ISO A-series sizes means losing buyers in these coastal-heavy markets.",
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
    "https://app.snaptosize.com/app/quick-export?source=seo_coastal-art&kind=guide";

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
            "linear-gradient(155deg, #0a1628 0%, #0d2137 25%, #0b1a2e 50%, #091525 75%, #0a1220 100%)",
        }}
      >
        {/* Ocean depth texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 35%, rgba(45,212,191,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 55%, rgba(14,165,233,0.4) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(194,178,128,0.3) 0%, transparent 35%)",
          }}
        />

        {/* Teal glow — top right */}
        <div
          className="absolute top-[-10%] right-[15%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #2DD4BF, transparent 70%)",
          }}
        />
        {/* Deep blue accent — bottom left */}
        <div
          className="absolute bottom-[-12%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #0EA5E9, transparent 70%)",
          }}
        />

        {/* CSS wave horizon line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] opacity-[0.12]"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(45,212,191,0.6) 30%, rgba(14,165,233,0.4) 70%, transparent 95%)",
          }}
        />

        {/* CSS-only Coastal Art Gallery — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "360px", height: "380px" }}
          >
            {/* Frame 1 — Large landscape, ocean blue, slight left rotation */}
            <div
              className="absolute"
              style={{
                width: "155px",
                height: "110px",
                top: "30px",
                left: "0px",
                transform: "rotate(-2deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "3px solid rgba(45,212,191,0.35)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(45,212,191,0.12), 0 8px 24px rgba(0,0,0,0.3)",
                  background:
                    "linear-gradient(180deg, #0d3b5c 0%, #164e6e 40%, #c2b280 95%)",
                }}
              >
                {/* Horizon line */}
                <div
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "8%",
                    width: "84%",
                    height: "1px",
                    background: "rgba(255,255,255,0.12)",
                  }}
                />
                {/* Inner border */}
                <div
                  style={{
                    position: "absolute",
                    inset: "5px",
                    border: "1px solid rgba(45,212,191,0.12)",
                  }}
                />
              </div>
            </div>

            {/* Frame 2 — Tall portrait, deep teal-to-navy, center */}
            <div
              className="absolute"
              style={{
                width: "120px",
                height: "170px",
                top: "15px",
                left: "145px",
                transform: "rotate(0deg)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "3px solid rgba(45,212,191,0.40)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(45,212,191,0.15), 0 10px 30px rgba(0,0,0,0.35)",
                  background:
                    "linear-gradient(170deg, #0a2e4a 0%, #0d4a5c 30%, #1a6b6b 60%, #d4c9a8 95%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "6px",
                    border: "1px solid rgba(45,212,191,0.14)",
                  }}
                />
                {/* Wave curve suggestion */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "30%",
                    left: "10%",
                    width: "80%",
                    height: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0 0 50% 50%",
                  }}
                />
              </div>
            </div>

            {/* Frame 3 — Square, seafoam abstract, slight right rotation */}
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "100px",
                top: "55px",
                left: "260px",
                transform: "rotate(3deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "3px solid rgba(45,212,191,0.30)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(45,212,191,0.10), 0 8px 24px rgba(0,0,0,0.3)",
                  background:
                    "linear-gradient(135deg, #1a5c5c 0%, #2a7a7a 50%, #c8ddd0 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "5px",
                    border: "1px solid rgba(45,212,191,0.12)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom left, nautical navy */}
            <div
              className="absolute"
              style={{
                width: "90px",
                height: "115px",
                bottom: "15px",
                left: "15px",
                transform: "rotate(-1deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(45,212,191,0.25)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #0f2a4a 0%, #1a3a5a 50%, #0f2a4a 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(45,212,191,0.10)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom center, sandy warm */}
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "70px",
                bottom: "25px",
                left: "125px",
                transform: "rotate(2deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(194,178,128,0.35)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #8a7a5a 0%, #a09070 50%, #c2b280 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(194,178,128,0.15)",
                  }}
                />
              </div>
            </div>

            {/* Small accent frame — bottom right, coral reef */}
            <div
              className="absolute"
              style={{
                width: "75px",
                height: "95px",
                bottom: "10px",
                left: "245px",
                transform: "rotate(-2deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(45,212,191,0.22)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  background:
                    "linear-gradient(160deg, #1a4a4a 0%, #2a5a5a 50%, #1a4a4a 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(45,212,191,0.10)",
                  }}
                />
              </div>
            </div>

            {/* Size labels — floating, monospaced */}
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "150px",
                left: "5px",
                color: "rgba(45,212,191,0.28)",
              }}
            >
              16&times;24
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "0px",
                left: "175px",
                color: "rgba(45,212,191,0.25)",
              }}
            >
              20&times;30
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "162px",
                right: "35px",
                color: "rgba(45,212,191,0.25)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                left: "30px",
                color: "rgba(45,212,191,0.22)",
              }}
            >
              A3
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                left: "150px",
                color: "rgba(45,212,191,0.20)",
              }}
            >
              12&times;18
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                right: "55px",
                color: "rgba(45,212,191,0.20)",
              }}
            >
              5&times;7
            </div>

            {/* Decorative wave line — below frames */}
            <div
              className="absolute"
              style={{
                bottom: "0px",
                left: "10%",
                width: "80%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(45,212,191,0.18), transparent)",
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
                style={{ color: "#f0f7f7" }}
              >
                Coastal Wall Art Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(240,247,247,0.6)" }}
              >
                Beach photography to nautical illustration &mdash; sized for every frame
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(240,247,247,0.5)" }}
            >
              Coastal art sells big, sells in sets, and sells internationally.
              This guide covers the sizes that move for every coastal sub-niche
              &mdash; from aerial beach photography to shell illustrations.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Coastal Art Sizes
                </Button>
              </a>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(240,247,247,0.35)" }}
              >
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.18)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2DD4BF" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,247,247,0.6)" }}
                >
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.18)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2DD4BF" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,247,247,0.6)" }}
                >
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.18)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2DD4BF" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,247,247,0.6)" }}
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
            <QuickAnswer question="What sizes work best for coastal wall art on Etsy?">
              <strong>16&times;24 and 20&times;30</strong> are the top sellers for beach photography and tropical scenes. <strong>8&times;10</strong> leads for entry-level coastal decor (bathrooms, entryways). <strong>18&times;24</strong> is ideal for ocean watercolors. <strong>11&times;14</strong> is the go-to gallery wall size for coastal sets.
            </QuickAnswer>

            {/* --- H2 1: Why Coastal Art Needs a Specific Size Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Coastal Art Needs a Specific Size Strategy
              </h2>
              <p className="text-foreground-60 mb-4">
                Coastal wall art is one of the most orientation-flexible niches on
                Etsy. A beach sunset photograph works as a dramatic landscape panorama
                above a sofa or as a narrow portrait print beside an entryway mirror.
                Ocean watercolors sell in both orientations with roughly equal demand.
                That flexibility is an advantage &mdash; but only if you offer the
                right sizes for each orientation.
              </p>
              <p className="text-foreground-60 mb-4">
                Coastal art also skews larger than most niches. Ocean scenes lose their
                impact at small sizes &mdash; the fine gradient detail in a sunset,
                the texture of breaking waves, the aerial perspective of turquoise
                water against white sand. These compositions demand{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18&times;24
                </Link>
                {" "}or larger to land visually. At the same time, gallery wall sets
                of 3&ndash;6 matching coastal pieces are a top seller, and those need
                mid-range sizes like{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>
                {" "}and{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                The result: coastal sellers need more sizes across more ratios than
                most Etsy niches. For the complete size reference across all
                categories, see our{" "}
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
              <img src="/assets/visuals/etsy-coastal-wall-art-mockup.jpg" alt="Bright coastal living room with a gallery wall of framed ocean art prints — beach sunset photography, watercolor seashells, nautical anchor illustration, and ocean waves in various sizes above a cream linen sofa" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            <ListingOutputShowcase
              artwork="misty_lake"
              heading="Your coastal art — every ratio ready to list."
              subtext="SnapToSize generates all five ratio-correct files from your original upload. No Photoshop — just upload and download."
            />

            {/* --- H2 2: Best-Selling Coastal Wall Art Sizes on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best-Selling Coastal Wall Art Sizes on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                Coastal art over-indexes on landscape orientations and large formats
                compared to other Etsy niches. The 2:3 ratio dominates because it
                naturally suits ocean horizons and beach panoramas. Every pixel
                dimension below is at 300 DPI, the professional print standard.
                For more on DPI, see our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  resolution guide
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
                        Coastal Use Case
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
                        Gallery wall filler, small bathroom shelf
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
                        Entry-level coastal, bathroom &amp; entryway decor
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
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery wall anchor, standard frame size
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
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size beach art, bedroom accent
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
                        Living room focal point, nautical illustrations
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">16&times;24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Above-sofa statement, beach panoramas
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
                        Ocean watercolors, large coastal accent
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
                        Premium large format, above-sofa beach photography
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
                        International buyers (UK, Australia, Scandinavia)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a2-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A2
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961&times;7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large EU statement piece, coastal poster
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm">
                For coastal sellers, prioritize the 2:3 sizes
                (12&times;18, 16&times;24, 20&times;30) alongside the 4:5 essentials
                (8&times;10, 16&times;20) for maximum coverage. Learn more about{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  print ratios
                </Link>
                .
              </p>
            </div>

            {/* --- H2 3: Sizing by Coastal Sub-Niche --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Sizing by Coastal Sub-Niche
              </h2>
              <p className="text-foreground-60 mb-6">
                Coastal art spans a wide range of sub-styles, each with distinct
                proportions and buyer expectations. The sizes that sell best vary
                by sub-niche. Here&apos;s how to approach each one.
              </p>

              <div className="grid gap-4">
                {/* Beach Photography */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Beach Photography
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Aerial drone shots, golden hour beach scenes, and wave close-ups.
                    Heavily landscape orientation. The 2:3 ratio is ideal because it
                    captures wide ocean horizons without cropping. Large formats sell
                    best &mdash; buyers want beach photography big. See our{" "}
                    <Link
                      href="/etsy-photography-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      photography print sizes guide
                    </Link>
                    {" "}for more detail.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-12x18-print-size" className="hover:underline">12&times;18</Link> (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      16&times;24 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-20x30-print-size" className="hover:underline">20&times;30</Link> (2:3)
                    </span>
                  </div>
                </Card>

                {/* Ocean Watercolor */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Ocean Watercolor
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Abstract ocean waves, watercolor seascapes, and blue-teal gradient
                    art. Works beautifully in both portrait and landscape. The 3:4 and
                    4:5 ratios suit the flowing, organic compositions typical of
                    watercolor. Statement pieces at{" "}
                    <Link
                      href="/etsy-18x24-print-size"
                      className="text-accent-light hover:underline"
                    >
                      18&times;24
                    </Link>
                    {" "}and{" "}
                    <Link
                      href="/etsy-16x20-print-size"
                      className="text-accent-light hover:underline"
                    >
                      16&times;20
                    </Link>
                    . See also our{" "}
                    <Link
                      href="/etsy-watercolor-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      watercolor print sizes guide
                    </Link>
                    .
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link> (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                  </div>
                </Card>

                {/* Nautical Illustration */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Nautical Illustration
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Anchors, lighthouses, ship wheels, compass roses, and knot
                    diagrams. Mostly portrait orientation. The 4:5 ratio works best
                    for these balanced, centered compositions.{" "}
                    <Link
                      href="/etsy-5x7-print-size"
                      className="text-accent-light hover:underline"
                    >
                      5&times;7
                    </Link>
                    {" "}is popular for small bathroom and entryway nautical accents.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link> (Extras)
                    </span>
                  </div>
                </Card>

                {/* Tropical Coastal */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Tropical Coastal
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Palm trees, tropical beaches, and sunset scenes. Works in both
                    landscape and portrait with the 2:3 ratio dominant. Gallery wall
                    sets of 3&ndash;6 matching tropical pieces are extremely popular on Etsy.
                    There&apos;s significant crossover with{" "}
                    <Link
                      href="/etsy-boho-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      boho wall art
                    </Link>
                    {" "}&mdash; boho-coastal is a major trend.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-12x18-print-size" className="hover:underline">12&times;18</Link> (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      16&times;24 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Gallery sets of 3&ndash;6
                    </span>
                  </div>
                </Card>

                {/* Coastal Abstract */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Coastal Abstract &amp; Minimalist
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Minimalist ocean line art, abstract wave forms, and sand-sea color
                    blocks. Both orientations sell equally well. The 4:5 ratio suits
                    the modern, clean aesthetic. Popular for contemporary and
                    Scandinavian-style interiors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Square formats
                    </span>
                  </div>
                </Card>

                {/* Shell & Marine Life */}
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Shell &amp; Marine Life
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Seashell collections, coral illustrations, starfish, and seahorse
                    art. Mostly portrait orientation. Sets of 3&ndash;4 matching
                    pieces are a top seller in this sub-niche. The 4:5 and 3:4 ratios
                    work best.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-12x16-print-size" className="hover:underline">12&times;16</Link> (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Sets of 3&ndash;4
                    </span>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- ContextualCTA 1 — Ratio coverage angle --- */}
            <ContextualCTA
              problem="Coastal art spans 6+ sub-niches, each favoring different ratios and orientations. Manually resizing one design into 15+ sizes is tedious and error-prone."
              solution="Upload once, select your ratio packs, and get up to 70 print-ready files — every size your coastal art buyers need, auto-optimized at 300 DPI."
              buttonText="Generate Coastal Art Sizes"
              appUrl={appUrl}
            />

            {/* --- H2 4: Coastal Gallery Wall Sets — Sizing Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Coastal Gallery Wall Sets &mdash; Sizing Strategy
              </h2>
              <p className="text-foreground-60 mb-6">
                Gallery wall sets are one of the highest-volume categories in coastal
                art on Etsy. Buyers purchase 3&ndash;6 matching coastal pieces to
                create a cohesive wall display. The sizing strategy for sets differs
                from single prints. For the full guide, see{" "}
                <Link
                  href="/etsy-gallery-wall-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  gallery wall print sizes
                </Link>
                .
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    3-Piece Coastal Set
                  </h3>
                  <div className="flex items-center justify-center gap-2.5 mb-4 py-4 rounded-lg" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)" }}>
                    <div className="rounded border-2 flex items-center justify-center" style={{ width: "55px", height: "38px", borderColor: "rgba(45,212,191,0.35)", background: "linear-gradient(180deg, rgba(13,59,92,0.4) 0%, rgba(194,178,128,0.2) 100%)" }}>
                      <span className="text-[6px] font-mono" style={{ color: "rgba(45,212,191,0.5)" }}>16&times;24</span>
                    </div>
                    <div className="rounded border-2 flex items-center justify-center" style={{ width: "38px", height: "28px", borderColor: "rgba(45,212,191,0.3)", background: "linear-gradient(180deg, rgba(13,59,92,0.3) 0%, rgba(194,178,128,0.15) 100%)" }}>
                      <span className="text-[5px] font-mono" style={{ color: "rgba(45,212,191,0.5)" }}>8&times;12</span>
                    </div>
                    <div className="rounded border-2 flex items-center justify-center" style={{ width: "38px", height: "28px", borderColor: "rgba(45,212,191,0.3)", background: "linear-gradient(180deg, rgba(13,59,92,0.3) 0%, rgba(194,178,128,0.15) 100%)" }}>
                      <span className="text-[5px] font-mono" style={{ color: "rgba(45,212,191,0.5)" }}>8&times;12</span>
                    </div>
                  </div>
                  <p className="text-foreground-60 text-xs mb-3">
                    One large anchor piece flanked by two smaller companions.
                    Same ratio across the entire set (2:3 works best for coastal).
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1&times; 16&times;24 + 2&times; 8&times;12
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Same ratio essential
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    6-Piece Grid Set
                  </h3>
                  <div className="flex items-center justify-center gap-1.5 mb-4 py-4 rounded-lg flex-wrap" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)" }}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="rounded border-2 flex items-center justify-center" style={{ width: "35px", height: "44px", borderColor: "rgba(45,212,191,0.3)", background: `linear-gradient(170deg, rgba(${10 + i * 8},${50 + i * 5},${70 + i * 8},0.3) 0%, rgba(194,178,128,0.1) 100%)` }}>
                        <span className="text-[6px] font-mono" style={{ color: "rgba(45,212,191,0.5)" }}>{i}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-foreground-60 text-xs mb-3">
                    Six matching pieces in a 2&times;3 or 3&times;2 grid. All the
                    same size. 8&times;10 or 11&times;14 work best for grids.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      6&times; 8&times;10 or 11&times;14
                    </span>
                  </div>
                </Card>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Critical for gallery wall sets:
                    </strong>{" "}
                    Every piece in the set must use the same aspect ratio. Mixing
                    ratios across pieces breaks the visual harmony of the gallery
                    wall. If you offer both landscape and portrait, provide separate
                    sets for each orientation &mdash; don&apos;t mix them.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- H2 5: Large Format Coastal Art — Statement Pieces --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Large Format Coastal Art &mdash; Statement Pieces
              </h2>
              <p className="text-foreground-60 mb-4">
                Coastal art sells larger than most Etsy niches. Ocean scenes,
                aerial beach photography, and sweeping sunset compositions are
                designed to dominate a wall. The &ldquo;above-sofa statement
                piece&rdquo; is one of the most common buyer use cases for coastal
                art &mdash; and that means 16&times;24 and above.
              </p>
              <p className="text-foreground-60 mb-6">
                The key large sizes for coastal art:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">16&times;24 (2:3)</strong> &mdash;
                    The most popular large coastal size. Fits above standard 72&Prime;
                    sofas. Ideal for{" "}
                    <Link
                      href="/etsy-landscape-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      landscape-oriented
                    </Link>
                    {" "}beach panoramas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      <Link
                        href="/etsy-20x30-print-size"
                        className="text-accent-light hover:underline"
                      >
                        20&times;30
                      </Link>
                      {" "}(2:3)
                    </strong> &mdash;
                    Premium large format. Popular for high-end beach photography and
                    above-bed coastal art. The 2:3 ratio preserves panoramic compositions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      <Link
                        href="/etsy-18x24-print-size"
                        className="text-accent-light hover:underline"
                      >
                        18&times;24
                      </Link>
                      {" "}(3:4)
                    </strong> &mdash;
                    The sweet spot for ocean watercolors. The 3:4 ratio gives a
                    slightly squarer format that suits organic, flowing compositions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">24&times;30 (4:5)</strong> &mdash;
                    Extra-large statement piece for open floor plans and beach houses.
                  </p>
                </div>
              </div>

              <p className="text-foreground-60 text-sm">
                Ensure your source file has enough resolution for large formats.
                A 20&times;30 print at 300 DPI requires a 6000&times;9000 pixel source.
                For file size considerations, see our{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy 20 MB file limit guide
                </Link>
                .
              </p>
            </div>

            {/* --- H2 6: International Sizes for Coastal Art --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                International Sizes for Coastal Art
              </h2>
              <p className="text-foreground-60 mb-4">
                Coastal decor is globally popular. Australia, the UK, and Scandinavia
                are major markets for beach and ocean-themed art &mdash; and they use
                ISO A-series paper sizes. Omitting A-sizes means losing buyers in
                exactly the markets where coastal art is most popular.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      <Link
                        href="/etsy-a4-print-size"
                        className="text-accent-light hover:underline"
                      >
                        A4
                      </Link>
                    </strong> (2480&times;3508 px) &mdash; Standard international
                    size. The coastal equivalent of 8&times;10 for bathroom and
                    entryway prints.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      <Link
                        href="/etsy-a3-print-size"
                        className="text-accent-light hover:underline"
                      >
                        A3
                      </Link>
                    </strong> (3508&times;4961 px) &mdash; The most popular international
                    mid-size for coastal art. Gallery wall anchor for EU and AU buyers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      <Link
                        href="/etsy-a2-print-size"
                        className="text-accent-light hover:underline"
                      >
                        A2
                      </Link>
                    </strong> (4961&times;7016 px) &mdash; Statement piece equivalent
                    to 18&times;24. Essential for the Scandinavian market where
                    large-format coastal art is a staple.
                  </p>
                </div>
              </div>
              <p className="text-foreground-60 text-sm">
                The ISO A-series pack in SnapToSize includes all these sizes. For
                file organization when offering both US and ISO sizes, see our{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  digital download file guide
                </Link>
                .
              </p>
            </div>

            {/* --- ContextualCTA 2 — Gallery wall set angle --- */}
            <ContextualCTA
              problem="Building a coastal gallery wall set? Every piece needs identical sizes across the set — mismatched dimensions ruin the gallery wall effect."
              solution="Upload each piece once. Every design gets the same 30+ sizes, organized in ratio packs and ready to upload to Etsy."
              buttonText="Create Gallery Wall Sizes"
              appUrl={appUrl}
            />

            {/* --- H2 7: How to Generate All Coastal Art Sizes From One Upload --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Generate All Coastal Art Sizes From One Upload
              </h2>
              <p className="text-foreground-60 mb-6">
                A coastal seller with 4 beach photographs offered as a gallery wall
                set in 12 sizes faces 48 individual resize operations per listing.
                Scale that across a catalog and the manual work becomes unsustainable.
                Here&apos;s the faster approach.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(45,212,191,0.15)",
                        color: "#2DD4BF",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Upload Your Coastal Artwork
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Upload your beach photograph, ocean watercolor, or nautical
                        illustration to SnapToSize. Higher resolution source files produce
                        sharper results at large poster sizes &mdash; especially important
                        for coastal art with fine gradient details in ocean and sky.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(45,212,191,0.15)",
                        color: "#2DD4BF",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Select Your Ratio Packs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Choose the packs that match your coastal sub-niche. Beach
                        photography needs the 2:3 pack. Nautical illustrations need
                        4:5. Ocean watercolors need 3:4. Select all five packs for
                        maximum coverage &mdash; up to 70 print-ready files from a
                        single upload.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(45,212,191,0.15)",
                        color: "#2DD4BF",
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
                        All at 300 DPI, all under Etsy&apos;s 20 MB limit. Coastal
                        art with subtle ocean gradients and sky transitions benefits
                        from intelligent resizing that preserves those fine tonal shifts.
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
                    4 beach photographs &times; 12 sizes = 48 manual resizes.
                    With SnapToSize: 4 uploads, all sizes generated automatically.
                    Same 300 DPI quality, same professional naming, same
                    Etsy-compliant ZIPs.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Generate Every Coastal Art Size Instantly"
                stat="Up to 70 print-ready files from one upload"
                description="One upload. All 5 ratio packs. Every size your coastal art buyers need — beach photography, ocean watercolors, nautical illustrations — in seconds, not hours."
                buttonText="Generate All Sizes Free"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Coastal Wall Art Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-coastal-wall-art-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
