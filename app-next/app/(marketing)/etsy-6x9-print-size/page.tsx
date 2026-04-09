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
  title: "6\u00d79 Print Size for Etsy \u2014 Pixels, DPI & 2:3 Ratio Guide",
  description:
    "6\u00d79 is a classic photo print size. Get exact pixels at 300 DPI (1800\u00d72700), the full 2:3 ratio family for Etsy digital downloads, and framing tips.",
  alternates: { canonical: "https://snaptosize.com/etsy-6x9-print-size" },
  openGraph: {
    title:
      "6\u00d79 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 6\u00d79 print guide for Etsy sellers. 1800\u00d72700 pixels at 300 DPI, 2:3 ratio family, framing options, and file setup tips.",
    url: "https://snaptosize.com/etsy-6x9-print-size",
    images: [
      {
        url: "/assets/og/etsy-6x9-print-size.png",
        width: 1200,
        height: 630,
        alt: "6\u00d79 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6\u00d79 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete 6\u00d79 print guide for Etsy sellers. 1800\u00d72700 pixels at 300 DPI, 2:3 ratio, framing options.",
    images: ["/assets/og/etsy-6x9-print-size.png"],
  },
};

export default function Etsy6x9PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "6\u00d79 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 6\u00d79 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 2:3 ratio family, and framing options.",
    url: "https://snaptosize.com/etsy-6x9-print-size",
    datePublished: "2026-04-09",
    dateModified: "2026-04-09",
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
        name: "6\u00d79 Print Size",
        item: "https://snaptosize.com/etsy-6x9-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the exact pixel dimensions for a 6\u00d79 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1800\u00d72700 pixels. Multiply each dimension by 300: 6\u00d7300 = 1800 pixels wide, 9\u00d7300 = 2700 pixels tall. This is the standard for professional print quality.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 6\u00d79?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2:3 (0.667 decimal). The same ratio as 4\u00d76, 8\u00d712, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. All 7 sizes scale from the same source image without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "What frame size fits a 6\u00d79 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6\u00d79 can be printed and placed in a standard 8\u00d710 frame with a mat, or sold as a standalone print in photo sleeves. It\u2019s also a popular size for photo albums and photo books. Many buyers print this size directly without framing.",
        },
      },
      {
        "@type": "Question",
        name: "What is 6\u00d79 used for on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular for photography wall art, portrait prints, botanical prints, and travel art. Buyers who want something bigger than a 4\u00d76 but more compact than a full poster often search this size. It also works well for recipe cards, journaling inserts, and planners.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 6\u00d79 in my Etsy printable listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 6\u00d79 is included automatically in the 2:3 ratio pack alongside 4\u00d76, 8\u00d712, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. Multi-size listings with 6\u00d79 fill the gap between small photo prints and medium posters, increasing perceived value.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 6\u00d79 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG (also called JPEG) at 300 DPI with sRGB color profile. At 1800\u00d72700 pixels, JPG keeps file sizes well under Etsy\u2019s 20 MB upload limit while delivering full print quality.",
        },
      },
    ],
  };

  const appUrl = "https://app.snaptosize.com?source=seo_6x9&kind=guide";

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
        className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #030712 0%, #061215 40%, #0d1117 100%)",
        }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2dd4bf 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #0d9488, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #14b8a6, transparent 70%)",
          }}
        />

        {/* 2:3 Frame blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* 6x9 frame at 2:3 proportions */}
          <div
            className="relative border border-teal-500/20 rounded-sm bg-white/[0.01]"
            style={{ width: "160px", height: "240px" }}
          >
            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-teal-400/40" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-teal-400/40" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-teal-400/40" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-teal-400/40" />

            {/* Label top */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <span className="text-[9px] font-mono text-teal-400/40 tracking-widest whitespace-nowrap">
                6&times;9 PRINT
              </span>
            </div>

            {/* Ratio badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  2 : 3
                </span>
              </div>
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-3">
              {[...Array(6)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(9)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Dimension label — width */}
            <div
              className="absolute flex items-center justify-center gap-2"
              style={{ bottom: "-24px", left: "0", width: "160px" }}
            >
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap">
                6 in &middot; 1800 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-28 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-24">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap -rotate-90">
                9 in &middot; 2700 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-teal-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-teal-300/60 uppercase">
                Print Size Reference
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-teal-400/10 border border-teal-400/25 text-teal-300/70">
                2:3 Ratio
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                6&times;9 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the classic
                photo print size
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              1800&times;2700 pixels. 2:3 aspect ratio. Part of the same ratio
              family as 4&times;6, 8&times;12, 12&times;18, and 20&times;30.
              Here&apos;s everything you need to set up 6&times;9 digital
              downloads that sell.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 2:3 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, get all seven 2:3 sizes at
                300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  Up to 70 print-ready files
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  All 5 ratio packs
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  Portrait, landscape &amp; square
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== QUICK ANSWER ===== */}
      <section className="py-8 md:py-10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <QuickAnswer question="What pixel dimensions for 6×9 at 300 DPI?">
              <strong>1800 &times; 2700 pixels</strong>. 6&times;9 uses the
              2:3 ratio &mdash; a classic photo print size popular for wall art
              and photography prints.
            </QuickAnswer>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* --- Section 1: Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                6&times;9 at 300 DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">6 &times; 9 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Pixel Dimensions</span>
                    <span className="font-semibold">1800 &times; 2700 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">2:3 (0.667)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Format</span>
                    <span className="font-semibold">JPG (JPEG) at 300 DPI</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math is simple: 6&nbsp;&times;&nbsp;300&nbsp;=&nbsp;1800
                pixels wide, 9&nbsp;&times;&nbsp;300&nbsp;=&nbsp;2700 pixels
                tall. That gives you a 4.86-megapixel file &mdash; more than
                enough for crisp, sharp detail at this size. Use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to check any size at any DPI.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG, a 6&times;9 file is small and stays well under
                Etsy&apos;s{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  20&nbsp;MB upload limit
                </Link>
                , even when bundled with the full 2:3 pack in a ZIP file.
              </p>
              <p className="text-foreground-60">
                The 2:3 aspect ratio means 6&times;9 shares identical
                proportions with six other sizes &mdash; from{" "}
                <Link
                  href="/etsy-4x6-print-size"
                  className="text-accent-light hover:underline"
                >
                  4&times;6
                </Link>{" "}
                photo prints up to{" "}
                <Link
                  href="/etsy-20x30-print-size"
                  className="text-accent-light hover:underline"
                >
                  20&times;30
                </Link>{" "}
                statement posters. One source image scales across all of them
                without cropping. For a deeper look at how ratios work, see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- Section 2: Why 6x9 Matters --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 6&times;9 Is a Versatile Size for Etsy Sellers
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Classic Photo Print Format
                  </h3>
                  <p className="text-foreground-60">
                    6&times;9 is one of the most recognised photo print
                    sizes &mdash; a step up from{" "}
                    <Link
                      href="/etsy-4x6-print-size"
                      className="text-accent-light hover:underline"
                    >
                      4&times;6
                    </Link>{" "}
                    but compact enough for desks, shelves, and small gallery
                    walls. Popular for portrait photography, botanical prints,
                    travel art, and any content that benefits from a vertical
                    orientation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Versatile for Framing and Photo Printing
                  </h3>
                  <p className="text-foreground-60">
                    Buyers can print 6&times;9 at photo labs (Walgreens,
                    CVS, Snapfish) as a standard photo print, or mat it inside
                    a larger frame for a gallery look. The 2:3 proportions are
                    native to DSLR and mirrorless cameras, so photography-based
                    artwork looks natural at this size.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Entry Point in Multi-Size 2:3 Packs
                  </h3>
                  <p className="text-foreground-60">
                    6&times;9 fills the gap between 4&times;6 and{" "}
                    <Link
                      href="/etsy-8x12-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8&times;12
                    </Link>{" "}
                    in the 2:3 ratio pack. Without it, there&apos;s a jump in
                    your size offering that makes the pack feel incomplete.
                    Including all seven sizes signals professional-level
                    listings to buyers. See{" "}
                    <Link
                      href="/how-many-sizes-etsy-printable"
                      className="text-accent-light hover:underline"
                    >
                      how many sizes to include
                    </Link>{" "}
                    for more on perceived value.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- ContextualCTA --- */}
            <div>
              <ContextualCTA
                problem="Still exporting 6×9 files manually for every listing?"
                solution="Upload once, get 6×9 plus all six other 2:3 sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
                buttonText="Get All Sizes"
                appUrl={`https://app.snaptosize.com?source=seo_6x9&kind=cta`}
              />
            </div>

            {/* --- Section 3: 2:3 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 2:3 Ratio Family &mdash; All 7 Sizes With 6&times;9
              </h2>
              <p className="text-foreground-60 mb-6">
                6&times;9 belongs to the 2:3 aspect ratio family. All seven
                sizes share identical proportions, so they scale from one
                source image without any cropping.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Print Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Common Use
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-4x6-print-size"
                          className="text-accent-light hover:underline"
                        >
                          4&times;6
                        </Link>
                      </td>
                      <td className="py-3 px-4 font-mono text-foreground-60">
                        1200&times;1800 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo prints, greeting cards
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-teal-500/[0.04]">
                      <td className="py-3 px-4 font-semibold text-teal-300">
                        6&times;9
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold">
                        1800&times;2700 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo wall art, portraits &mdash; <em>this page</em>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-8x12-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;12
                        </Link>
                      </td>
                      <td className="py-3 px-4 font-mono text-foreground-60">
                        2400&times;3600 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photography prints, small posters
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                      <td className="py-3 px-4">10&times;15</td>
                      <td className="py-3 px-4 font-mono text-foreground-60">
                        3000&times;4500 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Medium posters, wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-12x18-print-size"
                          className="text-accent-light hover:underline"
                        >
                          12&times;18
                        </Link>
                      </td>
                      <td className="py-3 px-4 font-mono text-foreground-60">
                        3600&times;5400 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Popular small poster
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                      <td className="py-3 px-4">16&times;24</td>
                      <td className="py-3 px-4 font-mono text-foreground-60">
                        4800&times;7200 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format wall art
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-20x30-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;30
                        </Link>
                      </td>
                      <td className="py-3 px-4 font-mono text-foreground-60">
                        6000&times;9000 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement posters
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- Section 4: Framing & Matting --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Matting &mdash; What Buyers Need to Know
              </h2>
              <p className="text-foreground-60 mb-6">
                6&times;9 is a standard photo print size available at photo
                labs (Walgreens, CVS, Snapfish) and can be sold as a
                standalone print in sleeves or pouches. For a framed look,
                buyers can mat it inside a larger frame &mdash; though
                6&times;9 doesn&apos;t have a dedicated standard frame size,
                so matting is slightly asymmetric. Mention this in your
                listing description to set correct expectations.
              </p>

              <Card className="p-6 md:p-8 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Common Framing Options for 6&times;9
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">Standalone photo print</span>
                    <span className="text-foreground-60 text-sm">
                      Print at photo lab, display in sleeve or pouch
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      8&times;10 frame + mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      1&Prime; border on sides, 0.5&Prime; top/bottom
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      11&times;14 frame + wide mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Gallery presentation with generous border
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Gallery wall cluster</span>
                    <span className="text-foreground-60 text-sm">
                      Pairs well with 4&times;6 and 8&times;12 in a grid
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Add &ldquo;Print at any photo lab as a standard 6&times;9
                    photo print. For a framed look, mat inside an 8&times;10
                    or 11&times;14 frame.&rdquo; to your description. This
                    reduces buyer confusion and support messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 5: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 6&times;9 Digital Prints
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Exporting at 72 DPI instead of 300 DPI
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        72 DPI is screen resolution. A 6&times;9 at 72 DPI is
                        only 432&times;648 pixels &mdash; prints will be
                        visibly pixelated, especially at photo labs. The file
                        must be 1800&times;2700 pixels. Always verify your
                        export settings before uploading.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong color profile (CMYK instead of sRGB)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Photo labs and home printers expect sRGB. Files in
                        Adobe RGB or CMYK display incorrect colors &mdash; reds
                        appear orange, blues shift. Convert to sRGB before
                        exporting. SnapToSize outputs sRGB automatically.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Confusing 6&times;9 (2:3) with other ratios
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        6&times;9 is a 2:3 ratio print. If you scale artwork
                        designed at 4:5 (like{" "}
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>
                        ) down to 6&times;9, it will be cropped or stretched.
                        Design at 2:3 from the start, or use a tool that
                        generates each ratio separately without cropping.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Skipping 6&times;9 from multi-size packs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Some sellers only include{" "}
                        <Link
                          href="/etsy-4x6-print-size"
                          className="text-accent-light hover:underline"
                        >
                          4&times;6
                        </Link>{" "}
                        and jump straight to{" "}
                        <Link
                          href="/etsy-8x12-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;12
                        </Link>
                        . This leaves a gap in the pack. 6&times;9 costs
                        nothing extra to generate and fills the range buyers
                        expect in a complete 2:3 set.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="One Upload. Seven 2:3 Sizes."
                stat="4×6 through 20×30 — all at 300 DPI, all print-ready"
                description="Upload your artwork once and get the complete 2:3 ratio pack — 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, and 20×30 — all at 300 DPI in seconds."
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
                      "What are the exact pixel dimensions for a 6\u00d79 print at 300 DPI?",
                    answer:
                      "1800\u00d72700 pixels. Multiply each dimension by 300: 6\u00d7300 = 1800 pixels wide, 9\u00d7300 = 2700 pixels tall. This is the standard for professional print quality.",
                  },
                  {
                    question: "What aspect ratio is 6\u00d79?",
                    answer:
                      "2:3 (0.667 decimal). The same ratio as 4\u00d76, 8\u00d712, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. All 7 sizes scale from the same source image without cropping.",
                  },
                  {
                    question: "What frame size fits a 6\u00d79 print?",
                    answer:
                      "6\u00d79 can be placed in a standard 8\u00d710 frame with a mat, or sold as a standalone print in photo sleeves. Many buyers print this size at photo labs (Walgreens, CVS) as a standard large photo print.",
                  },
                  {
                    question: "What is 6\u00d79 used for on Etsy?",
                    answer:
                      "Popular for photography wall art, portrait prints, botanical prints, and travel art. Buyers who want something bigger than a 4\u00d76 but more compact than a full poster often search this size.",
                  },
                  {
                    question:
                      "Should I include 6\u00d79 in my Etsy printable listing?",
                    answer:
                      "Yes. 6\u00d79 is included automatically in the 2:3 ratio pack alongside 4\u00d76, 8\u00d712, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. Multi-size listings with the full 2:3 family signal professional-level listings and increase perceived value.",
                  },
                  {
                    question:
                      "What file format should I use for 6\u00d79 prints?",
                    answer:
                      "JPG (also called JPEG) at 300 DPI with sRGB color profile. At 1800\u00d72700 pixels, JPG keeps file sizes well under Etsy\u2019s 20 MB upload limit while delivering full print quality.",
                  },
                ]}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-6x9-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
