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
  title: "20\u00d730 Print Size for Etsy \u2014 Pixels, DPI & Setup",
  description:
    "20\u00d730 is the largest 2:3 pack size. Get exact pixels at 300 DPI (6000\u00d79000), framing tips, and the full 2:3 ratio family for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-20x30-print-size" },
  openGraph: {
    title:
      "20\u00d730 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 20\u00d730 print guide for Etsy sellers. 6000\u00d79000 pixels at 300 DPI, 2:3 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-20x30-print-size",
    images: [
      {
        url: "/assets/og/etsy-20x30-print-size.png",
        width: 1200,
        height: 630,
        alt: "20\u00d730 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "20\u00d730 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete 20\u00d730 print guide for Etsy sellers. 6000\u00d79000 pixels at 300 DPI, 2:3 ratio, and file setup.",
    images: ["/assets/og/etsy-20x30-print-size.png"],
  },
};

export default function Etsy20x30PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "20\u00d730 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 20\u00d730 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 2:3 ratio family, and file requirements.",
    url: "https://snaptosize.com/etsy-20x30-print-size",
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
        name: "20\u00d730 Print Size",
        item: "https://snaptosize.com/etsy-20x30-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the exact pixel dimensions for a 20\u00d730 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6000\u00d79000 pixels. Multiply each dimension by 300: 20\u00d7300 = 6000 pixels wide, 30\u00d7300 = 9000 pixels tall. This is the standard for professional print quality.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 20\u00d730?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2:3 (0.667 decimal). The same ratio as 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 12\u00d718, and 16\u00d724. All 7 sizes scale from the same source image without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Does 20\u00d730 fit a standard frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 20\u00d730 is a standard poster frame size available at Target, Walmart, IKEA, Michaels, and Amazon. Buyers can also mat a 20\u00d730 print inside a 24\u00d736 frame for a gallery look.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 20\u00d730 or 24\u00d736 in my Etsy listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. 20\u00d730 is included automatically in the 2:3 ratio pack (7 sizes). 24\u00d736 is available via single export. Together they cover the full range of large-format wall art demand.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 20\u00d730 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG (also called JPEG) at 300 DPI with sRGB color profile. PNG at 6000\u00d79000 creates very large files that risk exceeding Etsy\u2019s 20 MB upload limit. JPG is compatible with every print service.",
        },
      },
      {
        "@type": "Question",
        name: "How large does my source image need to be for 20\u00d730 at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At least 6000\u00d79000 pixels. Most professional design tools (Photoshop, Illustrator, Procreate) can export at this resolution. If your source is smaller, the print will lose sharpness at full size.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_20x30&kind=guide";

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
            "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* 2:3 Frame blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — 2:3 proportions */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "200px", height: "300px" }}
          >
            {/* Inner frame with accent border */}
            <div className="absolute inset-3 border border-purple-500/20 rounded-sm" />

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-purple-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-purple-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-purple-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-purple-400/30" />

            {/* Dimension label — width */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap">
                20 in &middot; 6000 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                30 in &middot; 9000 px
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
              {[...Array(9)].map((_, i) => (
                <div
                  key={`tt-${i}`}
                  className="w-px h-1.5 bg-white/[0.06]"
                />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(11)].map((_, i) => (
                <div
                  key={`tl-${i}`}
                  className="h-px w-1.5 bg-white/[0.06]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Print Size Reference
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                20&times;30 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the largest
                standard 2:3 poster size
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              6000&times;9000 pixels. 2:3 aspect ratio. Standard poster frame
              everywhere. Here&apos;s how to set up 20&times;30 digital
              downloads that sell &mdash; plus the full 2:3 ratio family.
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
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  6000&times;9000 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  2:3 aspect ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                  Standard poster frame
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
            {/* --- Section 1: Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                20&times;30 at 300 DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">20 &times; 30 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">6000 &times; 9000 px</span>
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
                    <span className="font-semibold">
                      JPG (JPEG) at 300 DPI
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math is straightforward:
                20&nbsp;&times;&nbsp;300&nbsp;=&nbsp;6000 pixels wide,
                30&nbsp;&times;&nbsp;300&nbsp;=&nbsp;9000 pixels tall. That
                gives you a 54-megapixel file &mdash; large enough for
                razor-sharp detail at full poster size.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG (also called JPEG), the file stays well under
                Etsy&apos;s{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  20&nbsp;MB upload limit
                </Link>
                , even when bundled with other sizes in a ZIP pack.
              </p>
              <p className="text-foreground-60">
                The 2:3 aspect ratio (width is 66.7% of height) means 20&times;30
                shares identical proportions with six other sizes &mdash; from{" "}
                <Link
                  href="/etsy-4x6-print-size"
                  className="text-accent-light hover:underline"
                >
                  4&times;6
                </Link>{" "}
                postcards all the way up. One source image scales across all of
                them without cropping. For a deeper look at how ratios work, see
                the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- Section 2: Why 20x30 Matters --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 20&times;30 Is a Must-Have for Etsy Wall Art
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Largest Size in the 2:3 Pack
                  </h3>
                  <p className="text-foreground-60">
                    20&times;30 is the largest standard 2:3 poster size
                    you&apos;ll find at every major retailer. The only bigger
                    option in the same ratio is{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24&times;36
                    </Link>
                    . Together they cover everything from 4&times;6 postcards
                    to oversized statement pieces.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Standard Poster Frame &mdash; Zero Buyer Friction
                  </h3>
                  <p className="text-foreground-60">
                    20&times;30 poster frames are stocked at Target, Walmart,
                    IKEA, Michaels, and Amazon in the $10-30 range. When buyers
                    know they can frame it easily, they buy with confidence.
                    Mention frame availability in your listing description to
                    reduce hesitation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Premium Pricing Opportunity
                  </h3>
                  <p className="text-foreground-60">
                    Large-format listings with multiple sizes command higher
                    prices. Buyers who want 20&times;30 are decorating living
                    rooms, bedrooms, and offices &mdash; they&apos;re serious art
                    buyers, not casual browsers. Multi-size packs with 20&times;30
                    typically price at $12-25+.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Section 3: 2:3 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 2:3 Ratio Family &mdash; All 7 Sizes With 20&times;30
              </h2>
              <p className="text-foreground-60 mb-6">
                20&times;30 belongs to the 2:3 aspect ratio family. All seven
                sizes share identical proportions, so they scale from one source
                image without any cropping. Buyers expect all of these in one
                download &mdash; see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include
                </Link>{" "}
                for more on perceived value.
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
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-4x6-print-size"
                          className="text-accent-light hover:underline"
                        >
                          4&times;6
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1200 &times; 1800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Postcards, small frames
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6&times;9</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800 &times; 2700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8&times;12</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400 &times; 3600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo print standard
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
                        Small poster size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">16&times;24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large wall art
                      </td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        20&times;30
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Statement piece poster
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                All seven sizes share the 2:3 ratio, so one high-resolution
                source file produces the entire set. For a comparison of how the
                2:3 family stacks up against{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>{" "}
                and the 4:5 family, see{" "}
                <Link
                  href="/2-3-vs-4-5-ratio"
                  className="text-accent-light hover:underline"
                >
                  2:3 vs 4:5 ratio guide
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                For the complete breakdown across all five ratio packs, visit
                the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print sizes reference
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1: After 2:3 Ratio Family --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Get All 7 Sizes in One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Receive 4&times;6, 6&times;9,
                  8&times;12, 10&times;15, 12&times;18, 16&times;24, and
                  20&times;30 &mdash; all at 300&nbsp;DPI, professionally named,
                  and organized in a ZIP under 20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All 2:3 Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: 20x30 vs 24x36 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                20&times;30 vs 24&times;36 &mdash; Which Large Size Should You
                Include?
              </h2>
              <p className="text-foreground-60 mb-6">
                Both are 2:3 ratio. Both are standard poster sizes. The
                difference is how you get them.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold"></th>
                      <th className="text-left py-3 px-4 font-semibold">
                        20&times;30
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pixels</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 &times; 10800
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">In ZIP Pack?</td>
                      <td className="py-3 px-4">
                        <Check className="w-4 h-4 text-green-400 inline" />{" "}
                        <span className="text-foreground-60">
                          Yes &mdash; 2:3 pack
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        No &mdash; single export only
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Frame Availability
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard, widely stocked
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard, very widely stocked
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Best For</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large wall art
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Biggest poster size
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Recommendation:
                    </strong>{" "}
                    Include both. You get 20&times;30 automatically in the 2:3
                    pack, then add{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24&times;36
                    </Link>{" "}
                    via single export. This gives buyers the full range of
                    large-format wall art options.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 5: File Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Format, Color Profile &amp; Professional Naming
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    JPG / JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) is the standard for Etsy print files.
                    At 6000&times;9000 pixels, PNG files become extremely large
                    and risk hitting Etsy&apos;s 20&nbsp;MB limit. JPG keeps
                    file sizes manageable with no visible quality loss for
                    prints. See the{" "}
                    <Link
                      href="/best-file-format-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      file format guide
                    </Link>{" "}
                    for more detail.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    sRGB Color Profile
                  </h3>
                  <p className="text-foreground-60">
                    Always embed sRGB IEC61966-2.1. Most home printers and
                    online print services expect it. Files in Adobe RGB or
                    ProPhoto RGB shift colors during printing &mdash; reds
                    appear orange, blues turn purple.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use clear names like{" "}
                    <code className="text-accent-light">
                      artwork_20x30_300dpi.jpg
                    </code>
                    . Buyers should find the right file instantly in their
                    downloads folder. SnapToSize handles naming automatically
                    and organizes files by ratio in ZIP packs.
                  </p>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Staying Under Etsy&apos;s 20&nbsp;MB Limit
                </h3>
                <ul className="space-y-2 text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Use JPG, not PNG &mdash; PNG at this resolution creates
                      files that often exceed the limit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Flatten all layers before export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Group by ratio pack &mdash; one ZIP per ratio stays well
                      under 20&nbsp;MB
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Or use SnapToSize &mdash; auto-optimizes every file to
                      stay under the limit
                    </span>
                  </li>
                </ul>
                <p className="text-foreground-60 text-sm mt-4">
                  For more detail, see the{" "}
                  <Link
                    href="/etsy-20mb-file-limit"
                    className="text-accent-light hover:underline"
                  >
                    Etsy 20&nbsp;MB file limit guide
                  </Link>
                  .
                </p>
              </Card>
            </div>

            {/* --- Section 6: Framing & Display --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Display &mdash; Where Buyers Print 20&times;30
              </h2>
              <p className="text-foreground-60 mb-6">
                20&times;30 poster frames are available at every major retailer
                in the $10-30 range. This is the most common size for
                above-the-sofa living room art and bedroom statement pieces.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Display Options for 20&times;30
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      20&times;30 poster frame
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Direct fit, no mat needed
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      24&times;36 frame + 20&times;30 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Gallery presentation with border
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      Canvas stretch at 20&times;30
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Frameless modern look
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Gallery wall anchor piece
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Largest piece in a multi-frame arrangement
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Add &ldquo;Fits standard 20&times;30 poster frames
                    (Target, IKEA, Amazon). For a gallery look, mat in a
                    24&times;36 frame.&rdquo; to your Etsy description. This
                    reduces buyer hesitation and increases purchase confidence.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 7: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 20&times;30 Files
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
                        72 DPI is screen resolution. A 20&times;30 at 72 DPI
                        produces only 1440&times;2160 pixels &mdash; the print
                        will be visibly pixelated and blurry. Always verify your
                        export is 6000&times;9000 pixels. See{" "}
                        <Link
                          href="/best-resolution-for-etsy-printables"
                          className="text-accent-light hover:underline"
                        >
                          best resolution for Etsy printables
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Source image too small
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        You need at least 6000&times;9000 pixels to fill
                        20&times;30 at 300 DPI without upscaling artifacts.
                        Stretching a 3000&times;4500 source to 6000&times;9000
                        will produce soft, blurry output. Start with a
                        high-resolution source file.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Using PNG at this resolution
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        PNG files at 6000&times;9000 become very large and risk
                        exceeding Etsy&apos;s 20&nbsp;MB upload limit. JPG
                        delivers identical print quality at a fraction of the
                        file size. See{" "}
                        <Link
                          href="/best-file-format-etsy-printables"
                          className="text-accent-light hover:underline"
                        >
                          best file format for Etsy printables
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Forcing the wrong ratio into 20&times;30
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Cropping an{" "}
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>{" "}
                        (4:5) or{" "}
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>{" "}
                        (3:4) design to fit 20&times;30 (2:3) cuts off edges of
                        your artwork. Design at 2:3 from the start, or use a
                        tool that generates each ratio separately without
                        cropping. See{" "}
                        <Link
                          href="/etsy-digital-download-blurry-prints"
                          className="text-accent-light hover:underline"
                        >
                          fixing blurry Etsy prints
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 2: After Common Mistakes --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Export Guesswork
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Get pixel-perfect 20&times;30 files (and the full 2:3 pack)
                  in seconds. No DPI settings to configure. No format mistakes.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 8: How to Create Without Manual Resizing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create 20&times;30 Without Manual Resizing
              </h2>

              <p className="text-foreground-60 mb-4">
                Manually creating a 6000&times;9000 file for each artwork, then
                repeating for six other 2:3 sizes, takes 1-3 hours per design.
                Multiply by dozens of artworks in your shop and it becomes the
                bottleneck that limits growth.
              </p>
              <p className="text-foreground-60 mb-4">
                SnapToSize generates all 7 sizes in the 2:3 pack (including
                20&times;30) in seconds from one upload. Plus 4 more ratio
                packs &mdash; up to 70 print-ready files total, in both
                portrait and landscape orientations. Every file is at 300 DPI,
                professionally named, and organized in ZIPs under 20&nbsp;MB.
              </p>
              <p className="text-foreground-60">
                No DPI settings. No ratio math. No{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  manual resizing
                </Link>
                . Upload once, download everything, list on Etsy.
              </p>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Get the Full 2:3 Pack From One Upload"
                stat="Up to 70 files from a single upload"
                description="Upload your artwork and instantly receive the 2:3 pack (4×6 through 20×30) plus 4 more ratio packs — up to 70 print-ready files from one upload. No cropping, no manual resizing. Production-ready in seconds."
                buttonText="Try Free — Generate Sizes Now"
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
                      "What are the exact pixel dimensions for a 20\u00d730 print at 300 DPI?",
                    answer:
                      "6000\u00d79000 pixels. Multiply each dimension by 300: 20\u00d7300 = 6000 pixels wide, 30\u00d7300 = 9000 pixels tall. This is the standard for professional print quality.",
                  },
                  {
                    question: "What aspect ratio is 20\u00d730?",
                    answer:
                      "2:3 (0.667 decimal). The same ratio as 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 12\u00d718, and 16\u00d724. All 7 sizes scale from the same source image without cropping.",
                  },
                  {
                    question: "Does 20\u00d730 fit a standard frame?",
                    answer:
                      "Yes. 20\u00d730 is a standard poster frame size available at Target, Walmart, IKEA, Michaels, and Amazon. Buyers can also mat a 20\u00d730 print inside a 24\u00d736 frame for a gallery look.",
                  },
                  {
                    question:
                      "Should I include 20\u00d730 or 24\u00d736 in my Etsy listing?",
                    answer:
                      "Both. 20\u00d730 is included automatically in the 2:3 ratio pack (7 sizes). 24\u00d736 is available via single export. Together they cover the full range of large-format wall art demand.",
                  },
                  {
                    question:
                      "What file format should I use for 20\u00d730 prints?",
                    answer:
                      "JPG (also called JPEG) at 300 DPI with sRGB color profile. PNG at 6000\u00d79000 creates very large files that risk exceeding Etsy\u2019s 20 MB upload limit. JPG is compatible with every print service.",
                  },
                  {
                    question:
                      "How large does my source image need to be for 20\u00d730 at 300 DPI?",
                    answer:
                      "At least 6000\u00d79000 pixels. Most professional design tools (Photoshop, Illustrator, Procreate) can export at this resolution. If your source is smaller, the print will lose sharpness at full size.",
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
            <RelatedPages currentSlug="etsy-20x30-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
