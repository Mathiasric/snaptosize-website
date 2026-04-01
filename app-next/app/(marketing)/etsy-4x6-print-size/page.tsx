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
  title: "4\u00d76 Print Size for Etsy \u2014 Pixels, DPI & File Setup",
  description:
    "4\u00d76 print guide for Etsy sellers. Exact pixels at 300 DPI (1200\u00d71800), 2:3 ratio family, postcard uses, framing tips, and file setup.",
  alternates: { canonical: "https://snaptosize.com/etsy-4x6-print-size" },
  openGraph: {
    title:
      "4\u00d76 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 4\u00d76 print guide for Etsy sellers. Exact pixels at 300 DPI, 2:3 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-4x6-print-size",
    images: [
      {
        url: "/assets/og/etsy-4x6-print-size.png",
        width: 1200,
        height: 630,
        alt: "4\u00d76 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4\u00d76 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete 4\u00d76 print guide for Etsy sellers. 1200\u00d71800 pixels at 300 DPI, 2:3 ratio, and file setup.",
    images: ["/assets/og/etsy-4x6-print-size.png"],
  },
};

export default function Etsy4x6PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "4\u00d76 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 4\u00d76 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 2:3 ratio specs, postcard and greeting card uses, and file requirements.",
    url: "https://snaptosize.com/etsy-4x6-print-size",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
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
        name: "4\u00d76 Print Size",
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
        name: "What pixel dimensions do I need for a 4\u00d76 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 4\u00d76 inch print at 300 DPI requires exactly 1200\u00d71800 pixels. Multiply each dimension by 300: 4\u00d7300=1200, 6\u00d7300=1800. As a JPG with sRGB color profile, the file is very small and well under Etsy\u2019s 20 MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 4\u00d76?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "4\u00d76 has a 2:3 aspect ratio (0.667 decimal). This is the same ratio as DSLR cameras and includes 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730 in the pack. All can be scaled from the same source file without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Is 4\u00d76 too small for Etsy wall art?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For standalone wall art, most buyers prefer 8\u00d710 or larger. But 4\u00d76 excels as mini art for shelves, desks, and gallery wall clusters. It\u2019s also the standard postcard and greeting card size, which is a massive Etsy category on its own.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 4\u00d76 in my Etsy printable listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 4\u00d76 is the most affordable size for buyers to print, making it the lowest-barrier entry point in your listing. It captures the postcard and greeting card market, and since it shares the 2:3 ratio with larger sizes, adding it requires no extra design work.",
        },
      },
      {
        "@type": "Question",
        name: "What size frame fits a 4\u00d76 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard 4\u00d76 frames are the most widely available frame size in the world. IKEA FISKBO ($0.99), Dollar Tree ($1.25), and every major retailer stock them. You can also mat a 4\u00d76 in a 5\u00d77 or 8\u00d710 frame for a gallery look.",
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

        {/* 2:3 Frame blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — 2:3 ratio (200px wide x 300px tall) */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "200px", height: "300px" }}
          >
            {/* Inner frame with amber accent border */}
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
                4&times;6 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the starter
                size that hooks buyers
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              1200&times;1800 pixels. 2:3 aspect ratio. The classic photo and
              postcard size. Here&apos;s everything you need to set up 4&times;6
              digital downloads that sell &mdash; plus the full 2:3 ratio pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 2:3 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 4&times;6 + six more 2:3 pack sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  1200&times;1800 px at 300 DPI
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
                  Standard photo &amp; postcard size
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

            <QuickAnswer question="What pixel dimensions for 4×6 at 300 DPI?">
              <strong>1200 × 1800 pixels</strong> for portrait, <strong>1800 × 1200</strong> for landscape. 4×6 uses the 2:3 ratio — the smallest size in the 2:3 ratio pack.
            </QuickAnswer>

            {/* --- Section 1: Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                4&times;6 at 300 DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">4 &times; 6 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Metric</span>
                    <span className="font-semibold">10.2 &times; 15.2 cm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">1200 &times; 1800 px</span>
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
                    <span className="text-foreground-60">Megapixels</span>
                    <span className="font-semibold">2.16 MP</span>
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

              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/assets/visuals/etsy-4x6-size-comparison.png"
                  alt="4×6 print size comparison showing how it compares to 5×7, 6×8, 6×9, and 8×10"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              <p className="text-foreground-60 mb-4">
                The math is simple: multiply each dimension in inches by 300.
                4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;1200 pixels wide,
                6&nbsp;&times;&nbsp;300&nbsp;=&nbsp;1800 pixels tall. That gives you
                2.16 megapixels &mdash; any modern camera or design tool handles this
                comfortably. For more on why 300 DPI matters, see the{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>{" "}
                guide.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG (also called JPEG), the file is compact &mdash; well under
                Etsy&apos;s 20&nbsp;MB limit per download file, even when
                bundled with all six other 2:3 pack sizes in a ZIP. You will never
                hit file size limits with 4&times;6 prints.
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
                {" "}&mdash; from 4&times;6 all the way up to{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36
                </Link>
                {" "}&mdash; without any cropping.
              </p>
            </div>

            {/* --- Section 2: Why 4×6 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 4&times;6 Is the Entry-Level Size Every Listing Needs
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The Cheapest Size for Buyers to Print
                  </h3>
                  <p className="text-foreground-60">
                    4&times;6 costs pennies to print at any drug store, photo kiosk,
                    or home printer. This makes it the lowest-risk purchase for
                    buyers &mdash; they can test your artwork quality before
                    committing to larger, more expensive prints like{" "}
                    <Link
                      href="/etsy-8x10-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8&times;10
                    </Link>
                    {" "}or{" "}
                    <Link
                      href="/etsy-16x20-print-size"
                      className="text-accent-light hover:underline"
                    >
                      16&times;20
                    </Link>
                    . Many buyers download 4&times;6 first, then come back for
                    bigger sizes.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Frames Are Everywhere &mdash; Including Dollar Stores
                  </h3>
                  <p className="text-foreground-60">
                    4&times;6 frames are the most widely available frame size in
                    existence. Dollar Tree ($1.25), IKEA FISKBO ($0.99), Target,
                    Walmart, Amazon &mdash; every retailer stocks them. This
                    eliminates a major friction point: buyers never wonder
                    &ldquo;Where do I find a frame for this?&rdquo;
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Perfect for Postcards, Greeting Cards &amp; Invitations
                  </h3>
                  <p className="text-foreground-60">
                    4&times;6 is the standard postcard size and a popular greeting
                    card format. Buyers use it for party invitations, thank-you
                    cards, and small framed gifts. If your designs work for events
                    or holidays, 4&times;6 opens up use cases beyond wall art &mdash;
                    broadening your buyer pool into the massive Etsy stationery
                    niche.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Boosts Perceived Value of Your Bundle
                  </h3>
                  <p className="text-foreground-60">
                    Including 4&times;6 alongside larger sizes like{" "}
                    <Link
                      href="/etsy-8x10-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8&times;10
                    </Link>
                    {" "}or{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24&times;36
                    </Link>
                    {" "}makes your listing appear to offer more for the money.
                    Buyers see seven pack sizes instead of one &mdash; and the
                    smallest size costs you nothing extra to generate. For guidance
                    on how many sizes to offer, see{" "}
                    <Link
                      href="/how-many-sizes-etsy-printable"
                      className="text-accent-light hover:underline"
                    >
                      how many sizes to include in an Etsy printable
                    </Link>
                    .
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Section 3: 2:3 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 2:3 Ratio Family &mdash; All Sizes That Come With 4&times;6
              </h2>
              <p className="text-foreground-60 mb-6">
                4&times;6 is the smallest size in the 2:3 aspect ratio family. All
                seven pack sizes maintain identical proportions, so you scale from
                the same source file without cropping. Buyers expect to receive
                multiple sizes in one download &mdash; this is the standard Etsy
                bundle for{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  2:3 ratio prints
                </Link>
                .
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
                      <td className="py-3 px-4 font-semibold">
                        4&times;6{" "}
                        <span className="ml-1 inline-block rounded-full bg-teal-500/15 px-2 py-0.5 text-[10px] font-semibold text-teal-400 border border-teal-500/25">Popular</span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1200 &times; 1800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo prints, greeting cards, postcards
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6&times;9</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800 &times; 2700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo matting, small wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8&times;12</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400 &times; 3600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Common frame size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10&times;15</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3000 &times; 4500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12&times;18</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 &times; 5400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Medium poster size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">16&times;24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large gallery wall
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">20&times;30</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized statement piece
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
                .
              </p>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  One Upload, Every 2:3 Size
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. SnapToSize generates pixel-perfect
                  4&times;6, 6&times;9, 8&times;12, 10&times;15, 12&times;18,
                  16&times;24, and 20&times;30 at 300&nbsp;DPI. All from one image.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: Use Cases --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                4&times;6 Use Cases on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                4&times;6 serves more buyer intents than any other print size. Each
                use case drives different search keywords your listing will capture
                organically.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Mini Wall Art &amp; Gallery Clusters
                  </h3>
                  <p className="text-foreground-60">
                    Gallery walls with mixed small prints are a top trend on Etsy.
                    4&times;6 is the go-to size for{" "}
                    <Link
                      href="/etsy-gallery-wall-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      gallery wall clusters
                    </Link>
                    , shelf displays, and desk frames. Buyers often purchase 3-6
                    small prints at once for a coordinated arrangement.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Postcards
                  </h3>
                  <p className="text-foreground-60">
                    4&times;6 is the standard flat postcard size &mdash; the #1
                    postcard format on Etsy. Buyers print them at home or through
                    online services for travel postcards, art prints, and
                    promotional cards. If you sell any art that works at small
                    scale, postcards are pure volume.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Greeting Cards &amp; Invitations
                  </h3>
                  <p className="text-foreground-60">
                    4&times;6 is a standard greeting card format when folded from
                    a larger sheet. Birthday invitations, thank-you cards, and
                    holiday cards at this size are a massive Etsy category.
                    Including 4&times;6 in your listing captures this entire
                    stationery audience.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Photo Prints
                  </h3>
                  <p className="text-foreground-60">
                    Every buyer already knows 4&times;6 as &ldquo;the photo
                    print size.&rdquo; This familiarity means zero confusion about
                    dimensions &mdash; no one asks &ldquo;How big is that?&rdquo;
                    They already know, and they already have frames. For what files
                    to include in your listing, see{" "}
                    <Link
                      href="/what-files-to-include-etsy-digital-download"
                      className="text-accent-light hover:underline"
                    >
                      what files to include in Etsy digital downloads
                    </Link>
                    .
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Section 5: Is 4×6 Too Small? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Is 4&times;6 Too Small for Wall Art?
              </h2>
              <p className="text-foreground-60 mb-4">
                For standalone wall display &mdash; a single piece on a blank wall
                &mdash; most buyers prefer{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>
                {" "}or larger. A lone 4&times;6 on a wall looks small.
              </p>
              <p className="text-foreground-60 mb-4">
                But 4&times;6 is not designed for that use case. It excels in three
                specific contexts: tabletop and shelf displays, gallery wall
                clusters with multiple small pieces, and desktop frames. In all
                three, 4&times;6 is the ideal size.
              </p>
              <p className="text-foreground-60 mb-4">
                More importantly, 4&times;6 covers the postcard and greeting card
                market &mdash; a category where size is exactly right by definition.
                Skipping 4&times;6 means missing all of these buyers entirely.
              </p>
              <p className="text-foreground-60">
                For larger wall art, recommend stepping up to{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>
                ,{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>
                , or{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20
                </Link>
                . For another compact option with a different ratio, compare with{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Never Crop Between Ratios Again
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Get 1200&times;1800&nbsp;px files (and every other 2:3 size)
                  in seconds. No manual math, no cropping.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All 2:3 Sizes in Seconds
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 6: File Format --- */}
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
                    JPG (also called JPEG) is the standard for Etsy print files. At
                    4&times;6 and 300&nbsp;DPI, the file is compact &mdash; well under
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
                    go orange, blues go purple. Since 4&times;6 is commonly printed at
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

            {/* --- Section 7: Framing & Matting --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Matting &mdash; What Buyers Need to Know
              </h2>
              <p className="text-foreground-60 mb-6">
                4&times;6 prints fit directly into standard 4&times;6 frames &mdash;
                the most affordable and widely available frame size. For a more
                polished look, buyers can mat a 4&times;6 print inside a{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7 frame
                </Link>
                {" "}or even an{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10 frame
                </Link>
                {" "}with a wide mat for a gallery presentation.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">4&times;6 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Budget-friendly, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      5&times;7 frame + 4&times;6 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Subtle border, classic look
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      8&times;10 frame + 4&times;6 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wide mat, gallery presentation
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Multi-opening collage frame
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Display several 4&times;6 prints together
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
                    Add &ldquo;4&times;6 fits any standard photo frame (Dollar Tree
                    $1.25, IKEA FISKBO $0.99, Target, Amazon). For a gallery look,
                    mat in a 5&times;7 or 8&times;10 frame.&rdquo; to your Etsy
                    description. This single line increases buyer confidence and
                    reduces support messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 8: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 4&times;6 Digital Prints
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Skipping 4&times;6 from your listings
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Some sellers only include large sizes like{" "}
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>
                        {" "}or{" "}
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                        . This misses budget-conscious buyers who want a low-cost
                        test print and the entire postcard/greeting card audience.
                        4&times;6 costs nothing extra to generate and adds perceived
                        value to every listing.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Exporting at 72 DPI instead of 300 DPI
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        72 DPI is screen resolution. A 4&times;6 at 72 DPI is only
                        288&times;432 pixels &mdash; prints will be visibly pixelated
                        and blurry, especially on small prints where details
                        matter. Always check your export settings. The file must
                        be 1200&times;1800 pixels.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Confusing 4&times;6 (2:3) with 4&times;5 (4:5) ratio
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        4&times;6 is 2:3 ratio. 4&times;5 (which scales to{" "}
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>
                        ) is 4:5 ratio. Cropping between these ratios cuts off parts
                        of the artwork. Design at 2:3 from the start for the
                        4&times;6 family, or use a tool that generates each ratio
                        separately without cropping.
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
                        4&times;6 is the most commonly kiosk-printed size. Photo
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
                heading="Add 4×6 to Every Listing in Seconds"
                stat="Seven 2:3 pack sizes from a single upload"
                description="Upload your artwork and instantly receive 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, and 20×30 at 300 DPI. Perfect files for prints, postcards, and greeting cards."
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
                      "What pixel dimensions do I need for a 4\u00d76 print at 300 DPI?",
                    answer:
                      "Exactly 1200\u00d71800 pixels. Multiply each dimension by 300: 4\u00d7300 = 1200 pixels wide, 6\u00d7300 = 1800 pixels tall. As a JPG with sRGB color profile, the file is very small and well under Etsy\u2019s 20 MB limit.",
                  },
                  {
                    question: "What aspect ratio is 4\u00d76?",
                    answer:
                      "2:3 (or 0.667 as a decimal). This is the same ratio as DSLR cameras and includes 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730 in the pack. All these sizes can be scaled from the same source file without any cropping.",
                  },
                  {
                    question: "Is 4\u00d76 too small for Etsy wall art?",
                    answer:
                      "For standalone wall art, most buyers prefer 8\u00d710 or larger. But 4\u00d76 excels as mini art for shelves, desks, and gallery wall clusters. It\u2019s also the standard postcard and greeting card size, which is a massive Etsy category on its own.",
                  },
                  {
                    question:
                      "Should I include 4\u00d76 in my Etsy printable listing?",
                    answer:
                      "Yes. 4\u00d76 is the most affordable size for buyers to print, making it the lowest-barrier entry point in your listing. It captures the postcard and greeting card market, and since it shares the 2:3 ratio with larger sizes, adding it requires no extra design work.",
                  },
                  {
                    question:
                      "What size frame fits a 4\u00d76 print?",
                    answer:
                      "Standard 4\u00d76 frames are the most widely available frame size in the world. IKEA FISKBO ($0.99), Dollar Tree ($1.25), and every major retailer stock them. You can also mat a 4\u00d76 in a 5\u00d77 or 8\u00d710 frame for a gallery look.",
                  },
                ]}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Still exporting 4×6 files manually for every listing?"
                solution="Upload once, get 4×6 plus 29 other sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
                buttonText="Get All Sizes"
                appUrl={appUrl}
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
