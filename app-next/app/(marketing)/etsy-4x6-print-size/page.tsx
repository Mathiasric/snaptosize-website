import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "4×6 Print Size for Etsy — Pixels, DPI & File Setup",
  description:
    "4×6 is the most affordable entry-level Etsy print size. Get exact pixel dimensions at 300 DPI (1200×1800), 2:3 ratio specs, file format rules, and framing tips for digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-4x6-print-size" },
  openGraph: {
    title:
      "4×6 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 4×6 print guide for Etsy sellers. Exact pixels at 300 DPI, 2:3 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-4x6-print-size",
    images: [
      {
        url: "/assets/og/etsy-4x6-print-size.png",
        width: 1200,
        height: 630,
        alt: "4×6 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4×6 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 4×6 print guide for Etsy sellers. 1200×1800 pixels at 300 DPI, 2:3 ratio, and file setup.",
    images: ["/assets/og/etsy-4x6-print-size.png"],
  },
};

export default function Etsy4x6PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "4×6 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 4×6 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 2:3 ratio specs, and file requirements.",
    url: "https://snaptosize.com/etsy-4x6-print-size",
    datePublished: "2026-03-22",
    dateModified: "2026-03-22",
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
        name: "4×6 Print Size",
        item: "https://snaptosize.com/etsy-4x6-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for a 4×6 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 4×6 inch print at 300 DPI requires exactly 1200×1800 pixels. Multiply each dimension by 300: 4×300=1200, 6×300=1800. As a JPG with sRGB color profile, the file is very small and well under Etsy's 20MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 4×6?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "4×6 has a 2:3 aspect ratio (0.667 decimal). This is the same ratio as DSLR cameras and includes 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, and 24×36. All can be scaled from the same source file without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Is 4×6 the same as a standard photo print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 4×6 is the classic photo print size — the same dimensions used by every photo lab, drug store printing kiosk, and home printer. It's the size most people picture when they think of a 'photo print.' This familiarity makes it a strong entry point for digital download buyers.",
        },
      },
      {
        "@type": "Question",
        name: "What frame sizes fit a 4×6 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 4×6 print fits directly into a standard 4×6 frame (available at Dollar Tree, Target, Walmart, IKEA, Amazon). For a matted look, use a 5×7 frame with a 4×6 mat opening, or an 8×10 frame with a wide mat for a gallery presentation.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 4×6 Etsy prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use JPG (also called JPEG) at 300 DPI with sRGB color profile. JPG keeps file sizes small — a 4×6 at 300 DPI is under 2MB. Avoid PNG for print files; it creates larger files with no visible quality benefit when printed.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 4×6 in my Etsy printable listings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 4×6 is the most affordable size for buyers to print, making it the lowest-barrier entry point in your listing. Many buyers download 4×6 first to test print quality before committing to larger, more expensive sizes. Including it increases perceived value and encourages repeat purchases.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_4x6&kind=guide";

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
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #1a0f00 40%, #0d1117 100%)" }}>
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs — warm amber/gold */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #d97706, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
        />

        {/* 2:3 Greeting card / small frame visual — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer greeting card shape */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "180px", height: "270px" }}
          >
            {/* Inner card border with amber accent */}
            <div className="absolute inset-3 border border-amber-500/20 rounded-sm" />

            {/* Decorative fold line — greeting card hint */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-amber-400/10" />

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-amber-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-amber-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber-400/30" />

            {/* Dimension label — width */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-amber-300/50 tracking-widest whitespace-nowrap">
                4 in &middot; 1200 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-amber-300/50 tracking-widest whitespace-nowrap -rotate-90">
                6 in &middot; 1800 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
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
              {[...Array(7)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(9)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Small photo icon hint — top right inner area */}
            <div className="absolute top-5 right-5 w-6 h-6 border border-amber-400/15 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-amber-400/10" />
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-amber-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-amber-300/60 uppercase">
                Print Size Reference
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                4×6 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the starter
                size that hooks buyers
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              1200×1800 pixels. 2:3 aspect ratio. The classic photo print size.
              Here&apos;s everything you need to set up 4×6 digital downloads
              that sell &mdash; plus the full 2:3 ratio pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 2:3 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 4×6 + six more 2:3 pack sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  1200×1800 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  2:3 aspect ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Classic photo print size
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
            {/* --- Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                4×6 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">4 × 6 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">1200 × 1800 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">2:3 (0.667)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Format</span>
                    <span className="font-semibold">JPG / JPEG, sRGB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Ratio Pack</span>
                    <span className="font-semibold">2:3 Ratio (7 sizes)</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math is simple: multiply each dimension in inches by 300.
                4&nbsp;×&nbsp;300&nbsp;=&nbsp;1200 pixels wide,
                6&nbsp;×&nbsp;300&nbsp;=&nbsp;1800 pixels tall. That gives you
                any modern camera or design tool handles this resolution
                comfortably.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG, the file is very small &mdash; well under
                Etsy&apos;s 20&nbsp;MB limit per download file, even when
                bundled with all six other 2:3 pack sizes in a ZIP. You will never
                hit file size limits with 4×6 prints.
              </p>
              <p className="text-foreground-60">
                The 2:3 aspect ratio (width is 66.7% of height) matches DSLR
                camera sensors. This means your artwork or photos scale across
                the entire{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  2:3 ratio family
                </Link>
                {" "}&mdash; from 4×6 all the way up to{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24×36
                </Link>
                {" "}&mdash; without any cropping.
              </p>
            </div>

            {/* --- Why 4×6 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 4×6 Is the Entry-Level Size Every Listing Needs
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The Cheapest Size for Buyers to Print
                  </h3>
                  <p className="text-foreground-60">
                    4×6 costs pennies to print at any drug store, photo kiosk,
                    or home printer. This makes it the lowest-risk purchase for
                    buyers &mdash; they can test your artwork quality before
                    committing to larger, more expensive prints. Many buyers
                    download 4×6 first, then come back for bigger sizes.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Frames Are Everywhere &mdash; Including Dollar Stores
                  </h3>
                  <p className="text-foreground-60">
                    4×6 frames are the most widely available frame size in
                    existence. Dollar Tree, Target, Walmart, IKEA, Amazon
                    &mdash; every retailer stocks them, often for $1-3. This
                    eliminates a major friction point: buyers never wonder
                    &ldquo;Where do I find a frame for this?&rdquo;
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Perfect for Greeting Cards, Postcards &amp; Invitations
                  </h3>
                  <p className="text-foreground-60">
                    4×6 is the standard postcard size. Buyers use it for party
                    invitations, thank-you cards, and small framed gifts. If
                    your designs work for events or holidays, 4×6 opens up use
                    cases beyond wall art &mdash; broadening your buyer pool.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Boosts Perceived Value of Your Bundle
                  </h3>
                  <p className="text-foreground-60">
                    Including 4×6 alongside larger sizes like{" "}
                    <Link
                      href="/etsy-8x10-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8×10
                    </Link>
                    {" "}or{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24×36
                    </Link>
                    {" "}makes your listing appear to offer more for the money.
                    Buyers see seven pack sizes instead of one &mdash; and the
                    smallest size costs you nothing extra to generate.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Manual Resizing
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Get 4×6 and all other 2:3 sizes at
                  300&nbsp;DPI &mdash; organized, named, and ready for Etsy.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All 2:3 Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- 2:3 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 2:3 Ratio Family &mdash; All Sizes That Come With 4×6
              </h2>
              <p className="text-foreground-60 mb-6">
                4×6 is the smallest size in the 2:3 aspect ratio family. All
                seven pack sizes maintain identical proportions, so you scale from
                the same source file without cropping. Buyers expect to receive
                multiple sizes in one download &mdash; this is the standard Etsy
                bundle for 2:3 ratio prints.
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
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">4×6</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1200 × 1800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo prints, greeting cards, postcards
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6×9</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800 × 2700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo matting, small wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8×12</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400 × 3600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Common frame size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10×15</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3000 × 4500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12×18</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 × 5400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Medium poster size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">16×24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 × 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large gallery wall
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20×30</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 × 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized statement piece
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24×36
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 × 10800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard poster, available via single export
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                When a competitor offers &ldquo;one size only&rdquo; and your
                listing includes all seven 2:3 pack sizes, yours appears to
                have much more value at the same price. Buyers perceive a
                complete size range &mdash; from a small photo print to a
                large poster &mdash; instead of a single file.
              </p>
              <p className="text-foreground-60">
                For the full picture across all ratios (2:3, 3:4, 4:5, ISO,
                extras), see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                . For ratio-specific guidance, see{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios explained
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate All 2:3 Sizes in Seconds
                </Button>
              </a>
            </div>

            {/* --- File Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Format, Color Profile &amp; Naming
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    JPG / JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) is the standard for Etsy print files. At 4×6 and
                    300&nbsp;DPI, the file is compact &mdash; well under
                    Etsy&apos;s 20&nbsp;MB limit. Avoid PNG for print files:
                    they&apos;re larger with no visible benefit when printed.
                    For more on format choices, see{" "}
                    <Link
                      href="/what-files-to-include-etsy-digital-download"
                      className="text-accent-light hover:underline"
                    >
                      what files to include in Etsy digital downloads
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    sRGB Color Profile
                  </h3>
                  <p className="text-foreground-60">
                    Always embed sRGB. Most home printers, photo kiosks, and
                    online print services expect it. Files in Adobe RGB or
                    ProPhoto RGB will shift colors during printing &mdash; reds
                    go orange, blues go purple. Since 4×6 is commonly printed at
                    photo kiosks, sRGB is especially critical for this size.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use clear names like{" "}
                    <code className="text-accent-light">
                      artwork_4x6_300dpi.jpg
                    </code>
                    . Buyers should find the right file instantly in their
                    downloads folder. Avoid generic names like
                    &ldquo;small.jpg&rdquo; or &ldquo;photo.jpg&rdquo;.
                  </p>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Staying Under Etsy&apos;s 20 MB Limit
                </h3>
                <ul className="space-y-2 text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Use JPG / JPEG, not PNG</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Flatten all layers before export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Embed sRGB color profile, not Adobe RGB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Group by ratio pack &mdash; one ZIP per ratio stays well
                      under 20 MB
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Or use{" "}
                      <Link
                        href="/how-to-resize-images-for-etsy"
                        className="text-accent-light hover:underline"
                      >
                        SnapToSize
                      </Link>{" "}
                      &mdash; auto-optimizes every file to stay under the limit
                    </span>
                  </li>
                </ul>
                <p className="text-foreground-60 text-sm mt-4">
                  For detailed strategies, see{" "}
                  <Link
                    href="/etsy-20mb-file-limit"
                    className="text-accent-light hover:underline"
                  >
                    Etsy 20 MB file limit guide
                  </Link>
                  .
                </p>
              </Card>
            </div>

            {/* --- Framing & Matting --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Matting &mdash; What Buyers Need to Know
              </h2>
              <p className="text-foreground-60 mb-6">
                4×6 prints fit directly into standard 4×6 frames &mdash; the
                most affordable and widely available frame size. For a more
                polished look, buyers can mat a 4×6 print inside a{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5×7 frame
                </Link>
                {" "}or even an{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8×10 frame
                </Link>
                {" "}with a wide mat for a gallery presentation.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">4×6 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Budget-friendly, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      5×7 frame + 4×6 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Subtle border, classic look
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      8×10 frame + 4×6 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wide mat, gallery presentation
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Multi-opening frame
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Display several 4×6 prints together
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Listing tip:
                    </strong>{" "}
                    Add &ldquo;4×6 fits any standard photo frame (Dollar Tree,
                    Target, IKEA, Amazon). For a gallery look, mat in a 5×7 or
                    8×10 frame.&rdquo; to your Etsy description. This single
                    line increases buyer confidence and reduces support messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 4×6 Digital Prints
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
                        72 DPI is screen resolution. A 4×6 at 72 DPI is only
                        288×432 pixels &mdash; prints will be visibly pixelated
                        and blurry, especially on small prints where details
                        matter. Always check your export settings. The file must
                        be 1200×1800 pixels.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Cropping a different ratio to fit 4×6
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Cropping a 4:5 or 3:4 design to 2:3 cuts off parts of
                        the artwork. Buyers expect the full composition shown in
                        your listing preview. Design at 2:3 from the start, or
                        use a tool that generates each ratio separately without
                        cropping.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Skipping 4×6 from your listings
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Some sellers only include large sizes like 16×20 or
                        24×36. This misses buyers who want a low-cost test
                        print or a small greeting card. 4×6 costs nothing extra
                        to generate and adds perceived value to every listing.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong color profile for photo kiosk printing
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        4×6 is the most commonly kiosk-printed size. Photo
                        kiosks universally expect sRGB. Files in Adobe RGB or
                        ProPhoto RGB display incorrect colors &mdash; reds
                        appear orange, blues shift purple. Convert to sRGB
                        before exporting. Every time.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Get All 2:3 Sizes in One Click"
                stat="Seven 2:3 pack sizes from a single upload"
                description="Upload your artwork and instantly receive 4x6, 6x9, 8x12, 10x15, 12x18, 16x24, and 20x30 at 300 DPI. No cropping, no manual resizing. Production-ready in seconds."
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
                      "What pixel dimensions do I need for a 4×6 print at 300 DPI?",
                    answer:
                      "Exactly 1200×1800 pixels. Multiply each dimension by 300: 4×300 = 1200 pixels wide, 6×300 = 1800 pixels tall. As a JPG with sRGB color profile, the file is very small and well under Etsy's 20MB limit.",
                  },
                  {
                    question: "What aspect ratio is 4×6?",
                    answer:
                      "2:3 (or 0.667 as a decimal). This is the same ratio as DSLR cameras and includes 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, and 24×36. All these sizes can be scaled from the same source file without any cropping.",
                  },
                  {
                    question: "Is 4×6 the same as a standard photo print?",
                    answer:
                      "Yes — 4×6 is the classic photo print size used by every photo lab, drug store kiosk, and home printer. It's the size most people picture when they think of a 'photo print.' This familiarity makes it a strong entry point for digital download buyers.",
                  },
                  {
                    question:
                      "What frame sizes fit a 4×6 print?",
                    answer:
                      "A 4×6 print fits directly into a standard 4×6 frame (available at Dollar Tree, Target, Walmart, IKEA, Amazon). For a matted look, use a 5×7 frame with a 4×6 mat opening, or an 8×10 frame with a wide mat for a gallery presentation.",
                  },
                  {
                    question:
                      "What file format should I use for 4×6 Etsy prints?",
                    answer:
                      "JPG / JPEG at 300 DPI with sRGB color profile. JPG keeps file sizes small — a 4×6 at 300 DPI is well under 2MB. Avoid PNG for print files; it creates larger files with no visible quality benefit when printed.",
                  },
                  {
                    question:
                      "Should I include 4×6 in my Etsy printable listings?",
                    answer:
                      "Yes. 4×6 is the most affordable size for buyers to print, making it the lowest-barrier entry point in your listing. Many buyers download 4×6 first to test print quality before committing to larger, more expensive sizes. Including it increases perceived value and encourages repeat purchases.",
                  },
                ]}
              />
            </div>

            {/* --- Email Capture --- */}
            <div>
              <EmailCaptureSection
                heading="Free Etsy Print Size Cheat Sheet"
                description="All Etsy ratios and pixel dimensions at 300 DPI in one PDF. Plus file naming conventions and best practices."
                placeholder="Enter your email"
                buttonText="Get Free Cheat Sheet"
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-4x6-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
