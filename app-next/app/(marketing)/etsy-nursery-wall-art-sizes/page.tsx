import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Baby, Frame } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title:
    "Nursery Wall Art Sizes for Etsy — What Sizes to Offer & How to Bundle",
  description:
    "Complete guide to nursery wall art sizes for Etsy sellers. The 6 must-have sizes, gallery wall bundles, listing strategy, and how to generate all sizes from one upload.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-nursery-wall-art-sizes",
  },
  openGraph: {
    title: "Nursery Wall Art Sizes for Etsy | SnapToSize",
    description:
      "The 6 must-have nursery print sizes, gallery wall bundles, and listing strategy for Etsy sellers.",
    url: "https://snaptosize.com/etsy-nursery-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-nursery-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Nursery Wall Art Sizes for Etsy — What Sizes to Offer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursery Wall Art Sizes for Etsy — What Sizes to Offer & Bundle",
    description:
      "6 must-have sizes, gallery wall combos, and listing tips for nursery art sellers on Etsy.",
    images: ["/assets/og/etsy-nursery-wall-art-sizes.png"],
  },
};

export default function EtsyNurseryWallArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Nursery Wall Art Sizes for Etsy — What Sizes to Offer & How to Bundle",
    description:
      "Complete guide to nursery wall art sizes for Etsy sellers. Covers the 6 must-have sizes, gallery wall bundles, listing strategy, ratio packs, and common mistakes.",
    url: "https://snaptosize.com/etsy-nursery-wall-art-sizes",
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
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
        name: "Nursery Wall Art Sizes",
        item: "https://snaptosize.com/etsy-nursery-wall-art-sizes",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What sizes should I include for nursery wall art on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Include at least 5×7, 8×10, 11×14, A4, and 16×20. These cover shelf prints, standard frames, statement pieces, and international buyers. Adding square sizes like 10×10 or 12×12 gives you an edge for modern nursery layouts.",
        },
      },
      {
        "@type": "Question",
        name: "Do nursery prints need to be a specific ratio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No single ratio covers all nursery sizes. 4:5 gives you 8×10 and 16×20. 3:4 covers 6×8 and 12×16. The Extras pack adds 5×7 and 11×14. ISO covers A4 and A3 for international buyers. Offering multiple ratio packs ensures full coverage.",
        },
      },
      {
        "@type": "Question",
        name: "Should I offer square prints for nursery art?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — square prints (5×5, 8×8, 10×10, 12×12) are popular for modern nursery gallery walls. They pair well with rectangular sizes for visual variety. SnapToSize exports square sizes as single files alongside your ratio packs.",
        },
      },
      {
        "@type": "Question",
        name: "How many sizes should a nursery art listing include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Top-selling nursery art listings include 8-15 sizes. At minimum, offer the 6 core nursery sizes (5×7, 8×10, 11×14, A4, 16×20, and one square). More sizes means more perceived value and fewer 'do you have this in...' messages.",
        },
      },
      {
        "@type": "Question",
        name: "What's the most popular nursery print size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8×10 is the most popular nursery print size overall. For above-crib statement pieces, 16×20 dominates. For shelf and nightstand displays, 5×7 is the go-to. Including all three covers the majority of nursery use cases.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include international (A-series) sizes for nursery art?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A4 and A3 are standard frame sizes in the UK, Europe, and Australia. Nursery art buyers in these regions cannot use inch-based sizes. Adding A-series sizes opens your listing to international customers at zero extra effort.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_nursery&kind=guide";

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
            "linear-gradient(145deg, #fdf2f0 0%, #f5ede8 30%, #eef2ed 60%, #f0ede6 100%)",
        }}
      >
        {/* Soft dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9a89c 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Warm gradient blob top-right */}
        <div
          className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.15]"
          style={{
            background: "radial-gradient(circle, #e8b4b8, transparent 70%)",
          }}
        />
        {/* Sage blob bottom-left */}
        <div
          className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #a8c5a0, transparent 70%)",
          }}
        />

        {/* CSS Gallery Wall Mockup — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
          <div className="relative" style={{ width: "320px", height: "280px" }}>
            {/* Large frame — 16×20 */}
            <div
              className="absolute rounded-sm shadow-lg"
              style={{
                width: "140px",
                height: "175px",
                top: "0",
                left: "0",
                background: "#fff",
                border: "6px solid #e8ddd4",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#faf5f0" }}
              >
                <div className="text-center">
                  <Baby className="w-8 h-8 mx-auto mb-1" style={{ color: "#d4a5a5" }} />
                  <span
                    className="text-[9px] font-mono tracking-wider block"
                    style={{ color: "#c9a89c" }}
                  >
                    16×20
                  </span>
                </div>
              </div>
            </div>

            {/* Medium frame — 8×10 */}
            <div
              className="absolute rounded-sm shadow-lg"
              style={{
                width: "100px",
                height: "125px",
                top: "10px",
                left: "160px",
                background: "#fff",
                border: "5px solid #d4cdc4",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#f0ede8" }}
              >
                <div className="text-center">
                  <Frame className="w-5 h-5 mx-auto mb-1" style={{ color: "#a8c5a0" }} />
                  <span
                    className="text-[8px] font-mono tracking-wider block"
                    style={{ color: "#8ba882" }}
                  >
                    8×10
                  </span>
                </div>
              </div>
            </div>

            {/* Small frame — 5×7 */}
            <div
              className="absolute rounded-sm shadow-lg"
              style={{
                width: "72px",
                height: "100px",
                top: "155px",
                left: "185px",
                background: "#fff",
                border: "4px solid #e0d8d0",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#fdf2f0" }}
              >
                <div className="text-center">
                  <span className="text-lg" style={{ color: "#d4a5a5" }}>
                    &#9734;
                  </span>
                  <span
                    className="text-[7px] font-mono tracking-wider block"
                    style={{ color: "#c9a89c" }}
                  >
                    5×7
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting line hint — gallery wall arrangement */}
            <div
              className="absolute border-t border-dashed"
              style={{
                width: "60px",
                top: "88px",
                left: "140px",
                borderColor: "#c9a89c40",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "#c9a89c80" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "#a8917e" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-1.5"
                style={{ color: "#2d2926" }}
              >
                Nursery Wall Art Sizes for Etsy
              </span>
              <span
                className="block text-xl md:text-2xl lg:text-3xl font-semibold"
                style={{ color: "#5a4f48" }}
              >
                What sizes to offer, how to bundle them, and&nbsp;why it&nbsp;matters
              </span>
            </h1>
            <p className="text-base mb-5 max-w-lg" style={{ color: "#6b5e54" }}>
              Nursery art buyers want options &mdash; shelf prints, statement
              pieces, and gallery wall sets. Here&apos;s exactly which sizes to
              include, how to bundle them, and how to generate everything from a
              single upload.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Nursery Sizes
                </Button>
              </a>
              <p className="text-sm mt-1.5" style={{ color: "#8a7d72" }}>
                Free &rarr; upload once, get every nursery size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  borderColor: "rgba(201,168,156,0.3)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#a8c5a0" }} />
                <span className="text-xs font-medium" style={{ color: "#5a4f48" }}>
                  6 must-have sizes
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  borderColor: "rgba(201,168,156,0.3)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#a8c5a0" }} />
                <span className="text-xs font-medium" style={{ color: "#5a4f48" }}>
                  Gallery wall bundles
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  borderColor: "rgba(201,168,156,0.3)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#a8c5a0" }} />
                <span className="text-xs font-medium" style={{ color: "#5a4f48" }}>
                  Listing strategy included
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
            <QuickAnswer question="What are the best print sizes for nursery wall art on Etsy?">
              <strong>8×10, 11×14, and 16×20</strong> are the top nursery sizes — they fit standard frames from IKEA, Target, and Amazon. Offer all sizes in the 4:5 and 3:4 ratio packs for full nursery wall coverage.
            </QuickAnswer>
            {/* --- Why Nursery Art Needs Multiple Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Nursery Art Needs Multiple Sizes
              </h2>
              <p className="text-foreground-60 mb-4">
                Nursery rooms are unique. Parents decorate differently depending
                on the room layout, furniture placement, and personal style. A
                16×20 statement piece above the crib, a 5×7 on the nightstand,
                and a coordinated gallery wall &mdash; all from the same design.
              </p>
              <p className="text-foreground-60 mb-4">
                Nursery prints are also one of the most popular baby shower
                gifts. Gift buyers rarely know the exact room layout, so they
                look for listings with multiple sizes. If your listing only
                offers one size, they move on to a seller who offers more.
              </p>
              <p className="text-foreground-60">
                Gallery walls are especially popular in nurseries. Parents often
                buy 3-5 coordinated prints in different sizes to create a
                cohesive look. Offering a range of sizes means you capture the
                full gallery wall purchase &mdash; not just one piece of it.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-nursery-wall-art-mockup.jpg" alt="Nursery room with three framed animal illustration prints above a white crib — bunny, deer, and bear in wood frames" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- The 6 Must-Have Nursery Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 6 Must-Have Nursery Sizes
              </h2>
              <p className="text-foreground-60 mb-6">
                These are the sizes that top-selling nursery art listings on Etsy
                consistently include. Each serves a specific purpose in the nursery.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ background: "#fdf2f0", color: "#c9a89c" }}
                    >
                      5×7
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        5×7 &mdash; Shelf &amp; Nightstand
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Perfect for small shelves, nightstands, and dressers.
                        The most popular &ldquo;extra&rdquo; size buyers look
                        for. Frames available everywhere. Part of the Extras
                        ratio pack.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ background: "#eef2ed", color: "#7a9e72" }}
                    >
                      8×10
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        8×10 &mdash; Standard Frame
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        The #1 print size on Etsy, period. Every major retailer
                        stocks 8×10 frames. This is the size most buyers expect
                        by default. Part of the{" "}
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          4:5 ratio pack
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ background: "#f5ede8", color: "#a8917e" }}
                    >
                      11×14
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11×14</Link> &mdash; Statement Piece
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Large enough to anchor a gallery wall. Often used as the
                        centerpiece with smaller prints around it. Standard frame
                        size at IKEA and Michaels. Part of the Extras ratio pack.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ background: "#eef0f5", color: "#7889a0" }}
                    >
                      A4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link> &mdash; International Standard
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Standard frame size in the UK, Europe, and Australia. If
                        you skip A4, you lose every international buyer who can&apos;t
                        use inch-based sizes. Part of the ISO ratio pack.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ background: "#fdf2f0", color: "#c9a89c" }}
                    >
                      16×20
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        16×20 &mdash; Above the Crib
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        The go-to size for the wall above the crib or changing
                        table. Large enough to be the focal point of the room.
                        Part of the{" "}
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          4:5 ratio pack
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ background: "#eef2ed", color: "#7a9e72" }}
                    >
                      10×10
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        10×10 or 12×12 &mdash; Modern Square
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        <Link href="/etsy-square-print-sizes" className="text-accent-light hover:underline">Square prints</Link> are trending for modern nurseries. They
                        pair beautifully with rectangular sizes in gallery wall
                        arrangements. SnapToSize exports square sizes as
                        individual files alongside your ratio packs.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Generate All Nursery Sizes in Seconds
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your nursery artwork once. Get every size above at
                  300&nbsp;DPI &mdash; organized by ratio, named for buyers,
                  and ready to list.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Upload Your Nursery Art
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Gallery Wall Sets --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Gallery Wall Sets &mdash; How to Bundle Nursery Prints
              </h2>
              <p className="text-foreground-60 mb-6">
                Gallery wall sets are one of the highest-value offerings in the
                nursery art category. Buyers pay a premium for coordinated sets
                because choosing matching prints individually is stressful.
                Bundling 3&ndash;5 prints together at predetermined sizes removes
                that friction. For a complete guide to all arrangement types and
                sizes, see our{" "}
                <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">
                  gallery wall print sizes guide
                </Link>.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Combo 1: Classic Trio
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1 × 16×20
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      2 × 8×10
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    One large centerpiece flanked by two smaller matching
                    prints. The most popular nursery gallery wall layout. Works
                    above the crib or on any main wall.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Combo 2: Five-Piece Set
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1 × 11×14
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      2 × 5×7
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      2 × 8×10
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    A larger center print with four smaller prints arranged
                    around it. Creates visual depth and fills a wider wall
                    space. Works well for rooms with more wall area.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Combo 3: Modern Mix
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1 × 16×20
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1 × 8×10
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1 × 10×10
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    Mixing a square print with rectangular sizes creates a
                    contemporary feel. Popular with parents going for a modern
                    nursery aesthetic.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Photograph your prints arranged as a gallery wall in your
                    listing mockups. Buyers who see the finished arrangement are
                    far more likely to purchase the full set instead of a single
                    print.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Listing Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Listing Strategy for Nursery Art
              </h2>
              <p className="text-foreground-60 mb-6">
                How you structure your Etsy listing is just as important as what
                sizes you include. Nursery art has specific buyer expectations
                that differ from generic wall art.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Title Structure
                  </h3>
                  <p className="text-foreground-60 mb-2">
                    Lead with the theme, include &ldquo;nursery&rdquo; and
                    &ldquo;wall art,&rdquo; and mention the number of sizes.
                    Example:
                  </p>
                  <Card className="p-4">
                    <p className="text-sm font-mono text-foreground-60">
                      Baby Animal Nursery Wall Art, Elephant Print, Printable
                      Nursery Decor, 10 Sizes Included, Digital Download
                    </p>
                    <p className="text-xs text-foreground-60 mt-2">
                      Animal illustrations,{" "}
                      <Link href="/etsy-pet-portrait-sizes" className="text-accent-light hover:underline">
                        pet portraits
                      </Link>, and{" "}
                      <Link href="/etsy-watercolor-print-sizes" className="text-accent-light hover:underline">
                        watercolor artwork
                      </Link>{" "}
                      are among the top-selling nursery themes on Etsy.
                    </p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Description Essentials
                  </h3>
                  <ul className="space-y-2 text-foreground-60 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        List every included size with its pixel dimensions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Mention &ldquo;300 DPI&rdquo; and &ldquo;print-ready&rdquo;
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Note that files work for both US and international frames
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Suggest gallery wall combinations buyers can create
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Add framing tips: &ldquo;Fits any standard 8×10 frame
                        from Target, IKEA, or Amazon&rdquo;
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Etsy Tags (Max 20 Characters Each)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "nursery wall art",
                      "baby room prints",
                      "kids room decor",
                      "nursery printable",
                      "above crib art",
                      "nursery gallery",
                      "baby shower gift",
                      "printable nursery",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-white/[0.06] border border-white/[0.08] text-foreground-60"
                      >
                        {tag}{" "}
                        <span className="text-foreground-60/50">
                          ({tag.length})
                        </span>
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-foreground-60 mt-2">
                    Etsy allows 13 tags per listing. Use all 13 &mdash; each one
                    is a chance to appear in search results. See our{" "}
                    <Link
                      href="/how-many-sizes-etsy-printable"
                      className="text-accent-light hover:underline"
                    >
                      printable sizing guide
                    </Link>{" "}
                    for more tag strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate All Nursery Sizes Now
                </Button>
              </a>
            </div>

            {/* --- Ratio Packs for Nursery --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Which Ratio Packs Cover Nursery Sizes?
              </h2>
              <p className="text-foreground-60 mb-6">
                SnapToSize organizes sizes by aspect ratio. Each ratio pack
                contains sizes that share the same proportions, so your artwork
                scales without cropping. Here&apos;s which packs cover nursery
                needs:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio Pack
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Key Nursery Sizes
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Nursery Use
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        <Link
                          href="/etsy-print-ratios"
                          className="text-accent-light hover:underline"
                        >
                          4:5
                        </Link>{" "}
                        (5 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8×10, 16×20
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard frames, above-crib focal point
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        3:4 (5 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6×8, 12×16
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-range wall sizes, gallery wall variety
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        Extras (6 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Link
                          href="/etsy-5x7-print-size"
                          className="text-accent-light hover:underline"
                        >
                          5×7
                        </Link>
                        , 11×14, 11×17
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Shelf prints, statement pieces, gift sizes
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">
                        ISO (5 sizes)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link>,{" "}
                        <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        International buyers (UK, EU, Australia)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                No single ratio pack covers all nursery sizes. The key nursery
                sizes span three different ratios plus ISO. That&apos;s why
                top-selling sellers include multiple ratio packs in each
                listing.
              </p>
              <p className="text-foreground-60">
                For the complete breakdown of all 30 sizes across 5 packs, see
                the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With Nursery Art Listings
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Offering only one size
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Single-size listings convert poorly in the nursery
                        category. Buyers expect options because nursery rooms
                        vary wildly in layout. Include at least 6 sizes to
                        match what top sellers offer.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong DPI setting
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Exporting at 72 DPI (screen resolution) instead of
                        300 DPI produces blurry prints. An 8×10 at 72 DPI is
                        only 576×720 pixels &mdash; far too small for print.
                        Always verify your export is set to 300 DPI.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Using PNG instead of JPG / JPEG
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        PNG files are 5-10× larger than JPG (also called JPEG &mdash; same format) with no visible
                        quality benefit for prints. A full set of nursery
                        sizes in PNG can easily exceed Etsy&apos;s 20&nbsp;MB
                        file limit. Use JPG at 300 DPI for all print files.
                        See our{" "}
                        <Link
                          href="/what-files-to-include-etsy-digital-download"
                          className="text-accent-light hover:underline"
                        >
                          file format guide
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
                        No gallery wall preview in listing photos
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Nursery art buyers want to see how prints look
                        together on a wall. Listings without gallery wall
                        mockups miss the #1 selling point of multi-size
                        bundles. Include at least one listing photo showing
                        2-3 prints arranged as a gallery wall.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Every Nursery Size From One Upload"
                stat="All nursery sizes from a single upload"
                description="Upload your nursery artwork and instantly get 5×7, 8×10, 11×14, A4, 16×20, squares, and every other size at 300 DPI. Organized by ratio pack, professionally named, and ready to upload to Etsy."
                buttonText="Start Free — Generate Sizes Now"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "What sizes should I include for nursery wall art on Etsy?",
                    answer:
                      "Include at least 5×7, 8×10, 11×14, A4, and 16×20. These cover shelf prints, standard frames, statement pieces, and international buyers. Adding square sizes like 10×10 or 12×12 gives you an edge for modern nursery layouts.",
                  },
                  {
                    question:
                      "Do nursery prints need to be a specific ratio?",
                    answer:
                      "No single ratio covers all nursery sizes. 4:5 gives you 8×10 and 16×20. 3:4 covers 6×8 and 12×16. The Extras pack adds 5×7 and 11×14. ISO covers A4 and A3 for international buyers. Offering multiple ratio packs ensures full coverage.",
                  },
                  {
                    question:
                      "Should I offer square prints for nursery art?",
                    answer:
                      "Yes — square prints (5×5, 8×8, 10×10, 12×12) are popular for modern nursery gallery walls. They pair well with rectangular sizes for visual variety. SnapToSize exports square sizes as single files alongside your ratio packs.",
                  },
                  {
                    question:
                      "How many sizes should a nursery art listing include?",
                    answer:
                      "Top-selling nursery art listings include 8-15 sizes. At minimum, offer the 6 core nursery sizes (5×7, 8×10, 11×14, A4, 16×20, and one square). More sizes means more perceived value and fewer 'do you have this in...' messages.",
                  },
                  {
                    question:
                      "What's the most popular nursery print size?",
                    answer:
                      "8×10 is the most popular nursery print size overall. For above-crib statement pieces, 16×20 dominates. For shelf and nightstand displays, 5×7 is the go-to. Including all three covers the majority of nursery use cases.",
                  },
                  {
                    question:
                      "Should I include international (A-series) sizes for nursery art?",
                    answer:
                      "Yes. A4 and A3 are standard frame sizes in the UK, Europe, and Australia. Nursery art buyers in these regions cannot use inch-based sizes. Adding A-series sizes opens your listing to international customers at zero extra effort.",
                  },
                ]}
              />
            </div>

            {/* --- Contextual CTA --- */}
            <div className="pb-12">
              <ContextualCTA
                problem="Listing nursery wall art? Parents want every size option."
                solution="One upload → every nursery-friendly size at 300 DPI. Perfect for sets, gallery walls, and individual prints."
                buttonText="Resize Your Nursery Art"
                appUrl={appUrl}
              />
            </div>

            {/* --- See Also --- */}
            <p className="text-sm text-muted-foreground mb-8">
              Planning a children&apos;s room beyond the nursery?{" "}
              <Link href="/etsy-kids-wall-art-sizes" className="text-accent-light underline underline-offset-2 hover:text-foreground transition-colors">
                Etsy kids wall art sizes guide
              </Link>{" "}
              covers playroom and older children&apos;s room sizing, gallery wall sets, and ratio packs for every buyer.
            </p>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-nursery-wall-art-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
