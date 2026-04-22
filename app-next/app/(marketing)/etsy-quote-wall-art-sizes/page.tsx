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
  title: "Quote Wall Art Sizes for Etsy \u2014 Sizing Guide",
  description:
    "Quote wall art sizing guide for Etsy sellers. 30+ sizes across 5 ratio packs, sub-niche breakdowns, and how to generate all sizes from one upload.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-quote-wall-art-sizes",
  },
  openGraph: {
    title: "Quote Wall Art Sizes for Etsy | SnapToSize",
    description:
      "30+ sizes for quote and typography wall art. Sub-niche breakdowns, ratio packs, and batch sizing for Etsy sellers.",
    url: "https://snaptosize.com/etsy-quote-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-quote-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Quote Wall Art Sizes for Etsy \u2014 Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quote Wall Art Sizes for Etsy \u2014 Sizing Guide",
    description:
      "30+ sizes for quote and typography wall art. Sub-niche breakdowns, ratio packs, and batch sizing for Etsy sellers.",
    images: ["/assets/og/etsy-quote-wall-art-sizes.png"],
  },
};

export default function EtsyQuoteWallArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Quote Wall Art Sizes for Etsy \u2014 Every Size, Every Sub-Niche, One Upload",
    description:
      "Complete quote and typography wall art sizing guide for Etsy sellers. Covers the 8 must-have sizes, 6 sub-niche breakdowns, all 5 ratio packs, typography-specific sizing tips, and how to generate every size from one upload.",
    url: "https://snaptosize.com/etsy-quote-wall-art-sizes",
    datePublished: "2026-03-27",
    dateModified: "2026-03-27",
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
        name: "Quote Wall Art Sizes",
        item: "https://snaptosize.com/etsy-quote-wall-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What is the best size for quote wall art on Etsy?",
      answer:
        "8\u00d710 is the best-selling single size for quote art, but top sellers include all 5 ratio packs (30+ sizes) to capture every buyer preference. The more sizes you offer, the more search terms your listing matches.",
    },
    {
      question:
        "How many sizes should I include in a quote art listing?",
      answer:
        "Include at least 8\u201310 sizes across multiple ratios. Professional sellers offer 30+ sizes covering 2:3, 3:4, 4:5, ISO, and Extras packs. More sizes means higher perceived value and a higher price point.",
    },
    {
      question:
        "Do I need international sizes (A4, A3) for quote art?",
      answer:
        "Yes. Quote art has strong international demand, especially in the UK, Europe, and Australia where A-series paper is standard. Including ISO sizes (A5 through A1) opens your listing to global buyers.",
    },
    {
      question:
        "What resolution should quote wall art be for Etsy?",
      answer:
        "300 DPI is the professional print standard. For an 8\u00d710 print, that means 2400\u00d73000 pixels. Higher resolution source files produce better results across all sizes.",
    },
    {
      question: "Should I include square sizes for quote art?",
      answer:
        "Yes. Square formats (8\u00d78, 10\u00d710, 12\u00d712) are popular for quote art in Instagram-style gallery walls and modern interiors. Square sizes are available via Quick Export.",
    },
    {
      question:
        "How do I prevent text from looking distorted across different ratios?",
      answer:
        "Design your quote with generous margins and center the text. SnapToSize uses stretch-only resize (no cropping), which preserves the full composition. Starting with a well-centered design ensures readability across all ratios.",
    },
    {
      question:
        "Can I resize quote art without losing text quality?",
      answer:
        "Yes, as long as your source file is high resolution (4000+ pixels on the longest side). SnapToSize uses Lanczos resampling at 300 DPI \u2014 the highest quality resize algorithm \u2014 so text stays crisp at every output size.",
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
    "https://app.snaptosize.com?source=seo_quote_wall_art&kind=guide";

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
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #1a1714 0%, #1e1a16 25%, #19160f 50%, #1c1914 75%, #17140f 100%)",
        }}
      >
        {/* Subtle paper texture dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d4c5a9 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Warm parchment gradient — top right */}
        <div
          className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, #c9a87c, transparent 70%)",
          }}
        />
        {/* Ink accent blob — bottom left */}
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #8b7355, transparent 70%)",
          }}
        />

        {/* CSS-only Typography/Quote Visual — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "320px", height: "300px" }}
          >
            {/* Large decorative opening quotation mark */}
            <div
              className="absolute font-serif leading-none select-none"
              style={{
                fontSize: "180px",
                top: "-30px",
                left: "0px",
                color: "rgba(201,168,124,0.12)",
              }}
            >
              &ldquo;
            </div>

            {/* Simulated text lines at different sizes */}
            <div className="absolute" style={{ top: "70px", left: "40px" }}>
              {/* Large "headline" line */}
              <div
                className="rounded-full mb-3"
                style={{
                  width: "220px",
                  height: "10px",
                  background: "rgba(201,168,124,0.18)",
                }}
              />
              <div
                className="rounded-full mb-3"
                style={{
                  width: "180px",
                  height: "10px",
                  background: "rgba(201,168,124,0.14)",
                }}
              />
              {/* Smaller "body" lines */}
              <div
                className="rounded-full mb-2"
                style={{
                  width: "200px",
                  height: "5px",
                  background: "rgba(201,168,124,0.10)",
                }}
              />
              <div
                className="rounded-full mb-2"
                style={{
                  width: "160px",
                  height: "5px",
                  background: "rgba(201,168,124,0.08)",
                }}
              />
              <div
                className="rounded-full"
                style={{
                  width: "140px",
                  height: "5px",
                  background: "rgba(201,168,124,0.06)",
                }}
              />
            </div>

            {/* Size labels floating around the quote block */}
            <div
              className="absolute text-[9px] font-mono tracking-wider"
              style={{
                top: "55px",
                right: "10px",
                color: "rgba(201,168,124,0.35)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "170px",
                right: "5px",
                color: "rgba(167,139,250,0.3)",
              }}
            >
              16&times;20
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "50px",
                left: "20px",
                color: "rgba(201,168,124,0.3)",
              }}
            >
              5&times;7
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                bottom: "30px",
                right: "40px",
                color: "rgba(167,139,250,0.25)",
              }}
            >
              A4
            </div>

            {/* Large decorative closing quotation mark */}
            <div
              className="absolute font-serif leading-none select-none"
              style={{
                fontSize: "180px",
                bottom: "-70px",
                right: "0px",
                color: "rgba(201,168,124,0.10)",
              }}
            >
              &rdquo;
            </div>

            {/* Frame outlines at different scales */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "60px",
                height: "75px",
                bottom: "15px",
                left: "0px",
                border: "1.5px solid rgba(201,168,124,0.12)",
              }}
            />
            <div
              className="absolute rounded-sm"
              style={{
                width: "90px",
                height: "112px",
                top: "15px",
                right: "-10px",
                border: "1.5px solid rgba(167,139,250,0.10)",
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
                style={{ background: "rgba(201,168,124,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(201,168,124,0.7)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#f5f0eb" }}
              >
                Quote Wall Art Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(245,240,235,0.6)" }}
              >
                Every size, every sub-niche, one&nbsp;upload
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(245,240,235,0.5)" }}
            >
              Quote and <Link href="/etsy-typography-wall-art-sizes" className="text-accent-light hover:underline">typography art</Link> is one of Etsy&apos;s largest digital
              download categories. This guide covers the must-have sizes,
              sub-niche breakdowns, and how to generate every size from a
              single upload.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Quote Art Sizes
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
                  style={{ color: "rgba(245,240,235,0.6)" }}
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
                  style={{ color: "rgba(245,240,235,0.6)" }}
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
            <QuickAnswer question="What sizes should I offer for quote wall art on Etsy?">
              <strong>8×10, 11×14, and 5×7</strong> are the top sellers for typography and quote prints. Portrait orientation works best — the narrow format keeps text readable and balanced.
            </QuickAnswer>
            {/* --- H2 1: Why Quote and Typography Wall Art Needs Every Size --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Quote and Typography Wall Art Needs Every Size
              </h2>
              <p className="text-foreground-60 mb-4">
                Quote art is uniquely ratio-sensitive. Unlike photographic art
                where slight cropping is forgivable, text layout, margins, and
                readability change dramatically across ratios. A motivational
                quote that looks balanced at{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>{" "}
                (4:5) looks stretched at 4&times;6 (2:3). Every ratio needs
                deliberate sizing to maintain visual hierarchy and legibility.
              </p>
              <p className="text-foreground-60 mb-4">
                Then there&apos;s the volume problem. Top quote art sellers list
                50&ndash;200+ designs, each needing all sizes. A seller with 100
                designs offering 30 sizes each faces{" "}
                <strong className="text-foreground">
                  3,000 individual resize operations
                </strong>
                . Manual resizing at that scale is hundreds of hours of
                repetitive work.
              </p>
              <p className="text-foreground-60">
                Buyers also search by specific size (&ldquo;8&times;10 quote
                art&rdquo;, &ldquo;16&times;20 motivational print&rdquo;) and
                expect their preferred frame size to be available. Missing sizes
                means missing sales. Read our{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  guide on how many sizes to include
                </Link>{" "}
                for the full strategy.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-quote-wall-art-mockup.jpg" alt="Bedroom with two framed abstract calligraphy art prints in gold frames above the headboard — warm ambient lighting" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- H2 2: The 8 Must-Have Sizes for Quote Wall Art --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 8 Must-Have Sizes for Quote Wall Art
              </h2>
              <p className="text-foreground-60 mb-6">
                These eight sizes cover 90%+ of quote art buyer demand. Every
                pixel dimension is at 300 DPI &mdash; the professional print
                standard. For the complete size chart, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
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
                        Why It Sells
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
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400&times;3000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Best-selling quote art size. Desk frames, home offices
                      </td>
                    </tr>
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
                        Quote cards, mini prints, gifts
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
                        Photo mat standard. Mid-size statement quotes
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
                        Large statement piece. Offices, gyms
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a4-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A4
                        </Link>{" "}
                        <span className="text-foreground-60 text-xs">
                          (210&times;297 mm)
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480&times;3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        International buyers (UK, EU, AUS)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a3-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A3
                        </Link>{" "}
                        <span className="text-foreground-60 text-xs">
                          (297&times;420 mm)
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508&times;4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        International poster size. Dorms, bedrooms
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
                        Poster standard. Gallery wall anchor
                      </td>
                    </tr>
                    <tr>
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
                      <td className="py-3 px-4 text-foreground-60">
                        Quick Export
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large poster. Dorm rooms, studios
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- CTA 1: After must-have sizes --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Every Size Your Buyers Search For &mdash; One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload one quote design and get 30+ sizes across all 5 ratio
                  packs. Portrait,{" "}
                  <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">
                    landscape
                  </Link>
                  , and square &mdash; up to 70
                  print-ready files, organized and named for Etsy.
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

            {/* --- H2 3: Quote Art Sub-Niches and Their Best-Performing Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Quote Art Sub-Niches and Their Best-Performing Sizes
              </h2>
              <p className="text-foreground-60 mb-8">
                Different quote art sub-niches sell differently across sizes.
                Match your size offerings to the sub-niche for higher
                conversion.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-orange-400">
                  <h3 className="text-lg font-semibold mb-2">Motivational / Inspirational</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Large formats dominate. Offices, gyms, studios want big, bold statements. Also strong at desk-frame sizes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-24x36-print-size" className="hover:underline">24&times;36</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link></span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-purple-400">
                  <h3 className="text-lg font-semibold mb-2">Bible Verses / Religious</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    All sizes sell well. Strong <Link href="/etsy-nursery-wall-art-sizes" className="text-accent-light hover:underline">nursery crossover</Link> at small sizes. Gift-friendly. A4 for international churches.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-a4-print-size" className="hover:underline">A4</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">All packs</span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-pink-400">
                  <h3 className="text-lg font-semibold mb-2">Funny / Sarcastic</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Small to medium. Kitchen, bathroom, dorm room art. Strong gift market.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link></span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-neutral-400">
                  <h3 className="text-lg font-semibold mb-2">Minimalist Typography</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Premium sizes for clean modern interiors. <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">Gallery wall sets</Link> in matching typography are a top-seller.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link></span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-amber-400">
                  <h3 className="text-lg font-semibold mb-2">Calligraphy / Hand-Lettered</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    All sizes, emphasis on 8&times;10 and 11&times;14. Strong wedding decor crossover.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">All packs</span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-teal-400">
                  <h3 className="text-lg font-semibold mb-2">Affirmation / Self-Care</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Medium sizes for bedrooms and bathrooms. Often sold in sets of 3&ndash;6 matching prints.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link></span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light"><Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link></span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- H2 4: The Complete Size Map --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Complete Size Map &mdash; All 5 Ratio Packs for Quote Art
              </h2>
              <p className="text-foreground-60 mb-6">
                SnapToSize organizes sizes by aspect ratio. Each pack contains
                sizes that share the same proportions, so your artwork scales
                without cropping. Up to 70 print-ready files from one upload
                &mdash; portrait and{" "}
                <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">landscape</Link>{" "}
                orientations included. Use our{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to check pixel dimensions for any size.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    2:3 Ratio Pack (7 sizes)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    4&times;6, 6&times;9, 8&times;12, 10&times;15,
                    12&times;18, 16&times;24, 20&times;30
                  </p>
                  <p className="text-foreground-60 text-xs">
                    Tallest proportions. 4&times;6 for mini quote cards,
                    20&times;30 for oversized motivational posters.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    3:4 Ratio Pack (5 sizes)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    6&times;8, 9&times;12, 12&times;16, 15&times;20,
                    18&times;24
                  </p>
                  <p className="text-foreground-60 text-xs">
                    Classic photo frame proportions. 18&times;24 is the go-to
                    poster format for quote art.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    4:5 Ratio Pack (5 sizes)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    8&times;10, 12&times;15, 16&times;20, 20&times;25,
                    24&times;30
                  </p>
                  <p className="text-foreground-60 text-xs">
                    Home of the best-selling 8&times;10 and statement-piece
                    16&times;20. Essential for every quote art listing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    ISO A-Series Pack (5 sizes)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    A5, A4, A3, A2, A1
                  </p>
                  <p className="text-foreground-60 text-xs">
                    A4 and A3 are must-haves for international buyers. Quote
                    art has strong demand in the UK, EU, and Australia.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Extras Pack (6 sizes)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    5&times;7, 8.5&times;11, 11&times;14, 11&times;17,
                    13&times;19, 20&times;24
                  </p>
                  <p className="text-foreground-60 text-xs">
                    5&times;7 and 11&times;14 are top quote art sizes that
                    only exist in this pack. 8.5&times;11 for home printing.
                  </p>
                </Card>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Plus Quick Export
                    </strong>{" "}
                    &mdash; download any size individually in portrait or
                    landscape. Also includes{" "}
                    <Link href="/etsy-square-print-sizes" className="text-accent-light hover:underline">8 square formats</Link>{" "}
                    (5&times;5 through
                    24&times;24) and large sizes (A0, 24&times;36, 24&times;32)
                    available only via Quick Export. Learn more about{" "}
                    <Link
                      href="/etsy-print-ratios"
                      className="text-accent-light hover:underline"
                    >
                      how print ratios work
                    </Link>
                    .
                  </p>
                </div>
              </Card>
            </div>

            {/* --- CTA 2: After complete size map --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  One Upload &rarr; Up to 70 Print-Ready Files
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Every ratio, both orientations, 300 DPI. Organized by pack,
                  named for buyers, and ready to list on Etsy.
                </p>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Quote Art Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 5: Typography-Specific Sizing Considerations --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Typography-Specific Sizing Considerations
              </h2>
              <p className="text-foreground-60 mb-6">
                Text-based art behaves differently from photographic art when
                resized. Keep these factors in mind when designing your source
                file. For a deeper look at ratio differences, see our{" "}
                <Link
                  href="/2-3-vs-4-5-ratio"
                  className="text-accent-light hover:underline"
                >
                  2:3 vs 4:5 ratio comparison
                </Link>
                .
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Margins and breathing room
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Text art needs more white space than photographic art.
                        At small sizes (4&times;6, 5&times;7), ensure your
                        source design has adequate margins so text doesn&apos;t
                        feel cramped against the edges.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Readability at scale
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        A quote that&apos;s legible at 24&times;36 may have
                        too-small text at 5&times;7. Test your design at
                        5&times;7 &mdash; if it&apos;s readable there, it
                        works everywhere.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Font weight matters
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Thin/light fonts can look washed out at small sizes
                        and low print quality. Use medium to bold weights for
                        quote art that prints well at any size.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Color considerations
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Dark text on light backgrounds is most forgiving
                        across print services. <Link href="/etsy-watercolor-print-sizes" className="text-accent-light hover:underline">Watercolor backgrounds</Link> are
                        especially popular for quote art &mdash; soft washes add visual
                        interest without competing with the text. Reverse (light text on dark)
                        uses more ink and can vary between printers.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- H2 6: How to List Quote Art with Multiple Sizes on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to List Quote Art with Multiple Sizes on Etsy
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Title optimization
                  </h3>
                  <p className="text-foreground-60 text-sm mb-2">
                    Include sizes in your title to match buyer searches.
                    Example:
                  </p>
                  <Card className="p-4 bg-accent/5 border-accent/10">
                    <p className="text-sm font-mono text-foreground-60">
                      &ldquo;Motivational Quote Wall Art, Printable, 8x10
                      11x14 16x20 Digital Download&rdquo;
                    </p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Use all 13 Etsy tags (max 20 characters each). Include
                    niche + size combos:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      quote art 8x10
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      typography print
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      motivational wall art
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      printable quote art
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      digital download quote
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Listing photos
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Show mockups at different sizes. Include a{" "}
                    <Link
                      href="/etsy-gallery-wall-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      gallery wall arrangement
                    </Link>{" "}
                    with your quote prints and a size comparison graphic in
                    your listing photos.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    File delivery
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Organized ZIP files by ratio, with professional file naming
                    (e.g., <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">artwork_8x10_300dpi.jpg</code>).
                    Mention all included sizes in the description. For
                    packaging best practices, see our{" "}
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
                    </Link>
                    . All ZIPs stay under{" "}
                    <Link
                      href="/etsy-20mb-file-limit"
                      className="text-accent-light hover:underline"
                    >
                      Etsy&apos;s 20 MB limit
                    </Link>
                    .
                  </p>
                </div>

                <Card className="p-5 bg-accent/10 border-accent/20">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <p className="text-foreground-60 text-sm">
                      <strong className="text-foreground">
                        Listing tip:
                      </strong>{" "}
                      For file format guidance, check our{" "}
                      <Link
                        href="/best-file-format-etsy-printables"
                        className="text-accent-light hover:underline"
                      >
                        best file format for Etsy printables
                      </Link>{" "}
                      guide. If your listing isn&apos;t converting, see{" "}
                      <Link
                        href="/etsy-digital-download-not-selling"
                        className="text-accent-light hover:underline"
                      >
                        why your digital download isn&apos;t selling
                      </Link>
                      .
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- H2 7: How to Generate All Quote Art Sizes from One Upload --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Generate All Quote Art Sizes From One Upload
              </h2>
              <p className="text-foreground-60 mb-6">
                A quote art seller with 100 designs offering 30 sizes each
                faces 3,000 individual resize operations. Here&apos;s how to
                eliminate that entirely. For a general walkthrough, see our{" "}
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
                        background: "rgba(167,139,250,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Upload Your High-Res Quote Design
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Upload your artwork to SnapToSize. Any resolution
                        works &mdash; higher resolution source files produce
                        sharper results at larger print sizes.
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
                        Select All 5 Ratio Packs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Choose all packs to cover every buyer preference.
                        Up to 70 files from a single upload &mdash; portrait
                        and landscape orientations included.
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
                        (e.g., <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">artwork_8x10_300dpi.jpg</code>).
                        All at 300 DPI, all under Etsy&apos;s 20 MB limit.
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
                      Volume math:
                    </strong>{" "}
                    100 quote designs &times; 30+ sizes = 3,000 manual resizes.
                    With SnapToSize: 100 uploads, done in under an hour. Same
                    300 DPI quality, same professional naming, same Etsy-compliant
                    ZIPs.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Generate Every Quote Art Size Instantly"
                stat="Up to 70 print-ready files from a single upload"
                description="Upload your quote design once and get every size your buyers need. Portrait, landscape, and square. Organized by ratio, named for buyers, and ready for Etsy."
                buttonText="Generate All Sizes Free"
                appUrl="https://app.snaptosize.com?source=seo_quote_wall_art&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Quote Wall Art Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Contextual CTA --- */}
            <div className="pb-12">
              <ContextualCTA
                problem="Running a quote art shop? Each design needs every size for every buyer."
                solution="Upload one quote design → get all 30+ sizes in 60 seconds. Perfect for high-volume typography sellers."
                buttonText="Resize Your Quote Art"
                appUrl={appUrl}
              />
            </div>

            {/* --- See Also --- */}
            <p className="text-sm text-muted-foreground mb-8">
              Quote prints are a natural fit for bathroom walls — see our{" "}
              <Link href="/etsy-bathroom-wall-art-sizes" className="text-accent-light underline underline-offset-2 hover:text-foreground transition-colors">
                Etsy bathroom wall art sizes guide
              </Link>{" "}
              for the portrait-first sizing that works best in smaller spaces.
            </p>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-quote-wall-art-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
