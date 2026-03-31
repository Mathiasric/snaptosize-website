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

export const metadata: Metadata = {
  title: "12\u00d718 Print Size for Etsy \u2014 Pixels, DPI & Framing Guide",
  description:
    "12\u00d718 is the most popular small poster size. Get exact pixels at 300 DPI (3600\u00d75400), matting in 18\u00d724 frames, and the full 2:3 ratio family for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-12x18-print-size" },
  openGraph: {
    title:
      "12\u00d718 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 12\u00d718 print guide for Etsy sellers. 3600\u00d75400 pixels at 300 DPI, 2:3 ratio family, matting in 18\u00d724 frames, and file setup tips.",
    url: "https://snaptosize.com/etsy-12x18-print-size",
    images: [
      {
        url: "/assets/og/etsy-12x18-print-size.png",
        width: 1200,
        height: 630,
        alt: "12\u00d718 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "12\u00d718 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete 12\u00d718 print guide for Etsy sellers. 3600\u00d75400 pixels at 300 DPI, 2:3 ratio, matting in 18\u00d724 frames.",
    images: ["/assets/og/etsy-12x18-print-size.png"],
  },
};

export default function Etsy12x18PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "12\u00d718 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 12\u00d718 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 2:3 ratio family, framing and matting options.",
    url: "https://snaptosize.com/etsy-12x18-print-size",
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
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
        name: "12\u00d718 Print Size",
        item: "https://snaptosize.com/etsy-12x18-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the exact pixel dimensions for a 12\u00d718 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3600\u00d75400 pixels. Multiply each dimension by 300: 12\u00d7300 = 3600 pixels wide, 18\u00d7300 = 5400 pixels tall. This is the standard for professional print quality.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 12\u00d718?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2:3 (0.667 decimal). The same ratio as 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 16\u00d724, and 20\u00d730. All 7 sizes scale from the same source image without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Does 12\u00d718 fit inside an 18\u00d724 frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 12\u00d718 is designed to be matted inside a standard 18\u00d724 frame. The mat provides a 3-inch border on all sides, giving the print a professional gallery presentation. You can buy pre-cut 18\u00d724 mats with a 12\u00d718 opening at most craft stores.",
        },
      },
      {
        "@type": "Question",
        name: "What is 12\u00d718 used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12\u00d718 is the most popular small poster size. It\u2019s ideal for mid-range wall art, gallery walls, dorm rooms, offices, and anywhere buyers want something larger than a photo print but not full poster size. It\u2019s also widely used for fine art reproductions.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 12\u00d718 in my Etsy printable listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 12\u00d718 is included automatically in the 2:3 ratio pack alongside 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 16\u00d724, and 20\u00d730. Multi-size listings with 12\u00d718 cover the full range from small frames to large posters, increasing perceived value.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 12\u00d718 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG (also called JPEG) at 300 DPI with sRGB color profile. At 3600\u00d75400 pixels, JPG keeps file sizes well under Etsy\u2019s 20 MB upload limit while delivering full print quality.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_12x18&kind=guide";

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

        {/* 2:3 Frame blueprint with mat — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — 18x24 proportions (mat frame) */}
          <div
            className="relative border border-white/[0.06] rounded-sm"
            style={{ width: "220px", height: "293px" }}
          >
            {/* Mat label */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <span className="text-[9px] font-mono text-teal-400/30 tracking-widest">
                18&times;24 FRAME
              </span>
            </div>

            {/* Inner frame — 12x18 proportions (the actual print) */}
            <div
              className="absolute border border-teal-500/25 rounded-sm bg-white/[0.01]"
              style={{
                top: "30px",
                left: "37px",
                width: "146px",
                height: "219px",
              }}
            >
              {/* Corner marks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-teal-400/30" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-teal-400/30" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-teal-400/30" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-teal-400/30" />

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
                  <div
                    key={`tt-${i}`}
                    className="w-px h-1.5 bg-white/[0.06]"
                  />
                ))}
              </div>

              {/* Tick marks — left edge */}
              <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={`tl-${i}`}
                    className="h-px w-1.5 bg-white/[0.06]"
                  />
                ))}
              </div>
            </div>

            {/* Dimension label — width (below inner frame) */}
            <div
              className="absolute flex items-center justify-center gap-2"
              style={{ bottom: "14px", left: "37px", width: "146px" }}
            >
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap">
                12 in &middot; 3600 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap -rotate-90">
                18 in &middot; 5400 px
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
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                12&times;18 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the most popular
                small poster size
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              3600&times;5400 pixels. 2:3 aspect ratio. Perfect for matting
              inside 18&times;24 frames. Here&apos;s how to set up
              12&times;18 digital downloads that sell &mdash; plus the full
              2:3 ratio family.
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

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* --- Section 1: Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                12&times;18 at 300 DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">12 &times; 18 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">3600 &times; 5400 px</span>
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
                12&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3600 pixels wide,
                18&nbsp;&times;&nbsp;300&nbsp;=&nbsp;5400 pixels tall. That
                gives you a 19.4-megapixel file &mdash; more than enough for
                crisp, sharp detail at full poster size. Use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to check any size at any DPI.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG (also called JPEG), a 12&times;18 file stays well
                under Etsy&apos;s{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  20&nbsp;MB upload limit
                </Link>
                , even when bundled with other sizes in a ZIP pack.
              </p>
              <p className="text-foreground-60">
                The 2:3 aspect ratio (width is 66.7% of height) means
                12&times;18 shares identical proportions with six other sizes
                &mdash; from{" "}
                <Link
                  href="/etsy-4x6-print-size"
                  className="text-accent-light hover:underline"
                >
                  4&times;6
                </Link>{" "}
                postcards up to{" "}
                <Link
                  href="/etsy-20x30-print-size"
                  className="text-accent-light hover:underline"
                >
                  20&times;30
                </Link>{" "}
                statement posters. One source image scales across all of
                them without cropping. For a deeper look at how ratios work,
                see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- Section 2: Why 12x18 Matters --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 12&times;18 Is a Must-Have for Etsy Wall Art
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The Most Popular Small Poster Size
                  </h3>
                  <p className="text-foreground-60">
                    12&times;18 sits in the sweet spot between a photo print
                    and a full-size poster like{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24&times;36
                    </Link>
                    . It&apos;s large enough to make a
                    statement on a wall but compact enough for bedrooms,
                    offices, dorm rooms, and gallery wall arrangements. Many
                    buyers specifically search for this size when they want
                    art that&apos;s bigger than a frame but not overwhelming.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Perfect for Matting Inside 18&times;24 Frames
                  </h3>
                  <p className="text-foreground-60">
                    An{" "}
                    <Link
                      href="/etsy-18x24-print-size"
                      className="text-accent-light hover:underline"
                    >
                      18&times;24
                    </Link>{" "}
                    frame with a mat cut for 12&times;18 gives a 3-inch
                    border on all sides &mdash; the classic gallery
                    presentation. Pre-cut mats for this exact combination are
                    stocked at Michaels, JOANN, Hobby Lobby, and Amazon.
                    Mention this in your Etsy listing to help buyers
                    visualize the finished look.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Mid-Range Value in Multi-Size Packs
                  </h3>
                  <p className="text-foreground-60">
                    Buyers who purchase multi-size packs expect a range from
                    small to large. 12&times;18 fills the critical middle
                    ground between 10&times;15 and 16&times;24. Without it,
                    there&apos;s a gap in your size offering that makes the
                    pack feel incomplete. Including all seven 2:3 sizes
                    signals professional-level listings.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Section 3: 2:3 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 2:3 Ratio Family &mdash; All 7 Sizes With 12&times;18
              </h2>
              <p className="text-foreground-60 mb-6">
                12&times;18 belongs to the 2:3 aspect ratio family. All seven
                sizes share identical proportions, so they scale from one
                source image without any cropping. Buyers expect all of these
                in one download &mdash; see{" "}
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
                    <tr className="bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        12&times;18
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 &times; 5400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small poster, mats in 18&times;24
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
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-20x30-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;30
                        </Link>
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
                source file produces the entire set. For a comparison of how
                the 2:3 family stacks up against{" "}
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
                  20&times;30 &mdash; all at 300&nbsp;DPI, professionally
                  named, and organized in a ZIP under 20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All 2:3 Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: Framing & Matting --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Matting Guide for 12&times;18
              </h2>
              <p className="text-foreground-60 mb-6">
                12&times;18 is one of the most versatile sizes for framing.
                Buyers can use it with or without a mat, and frames are widely
                available at affordable prices.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Display Options for 12&times;18
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      12&times;18 poster frame
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Direct fit, no mat needed
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      <Link
                        href="/etsy-18x24-print-size"
                        className="text-accent-light hover:underline"
                      >
                        18&times;24
                      </Link>{" "}
                      frame + 12&times;18 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Gallery presentation, 3&Prime; border
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      16&times;20 frame + 12&times;18 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Tighter border, compact gallery look
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Gallery wall mid-piece
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Pairs with 4&times;6 and 8&times;12 frames
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Add &ldquo;12&times;18 mats perfectly inside a standard
                    18&times;24 frame (available at Target, IKEA, Michaels).
                    No custom framing needed.&rdquo; to your Etsy description.
                    This helps buyers picture the finished result and reduces
                    purchase hesitation.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 5: Source File Requirements --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Source File Requirements for 12&times;18
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Minimum Source Resolution
                  </h3>
                  <p className="text-foreground-60">
                    Your source image needs to be at least 3600&times;5400
                    pixels for a sharp 12&times;18 at 300 DPI. However, if
                    you plan to offer the full 2:3 pack (up to{" "}
                    <Link
                      href="/etsy-20x30-print-size"
                      className="text-accent-light hover:underline"
                    >
                      20&times;30
                    </Link>
                    ), your source should be at least 6000&times;9000 pixels
                    so the largest size is also sharp. See the{" "}
                    <Link
                      href="/best-resolution-for-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      resolution guide
                    </Link>{" "}
                    for more detail, and the{" "}
                    <Link
                      href="/how-to-resize-images-for-etsy"
                      className="text-accent-light hover:underline"
                    >
                      resizing guide
                    </Link>{" "}
                    for the full workflow.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    JPG / JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) is the standard for Etsy print
                    files. At 3600&times;5400 pixels, JPG keeps file sizes
                    compact with no visible quality loss for prints. PNG
                    files at this resolution are larger and risk hitting
                    Etsy&apos;s 20&nbsp;MB limit when bundled with other
                    sizes.
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
                      artwork_12x18_300dpi.jpg
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
                      unnecessarily large files
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

            {/* --- Section 6: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 12&times;18 Files
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
                        72 DPI is screen resolution. A 12&times;18 at 72 DPI
                        produces only 864&times;1296 pixels &mdash; the print
                        will be visibly pixelated and blurry. Always verify
                        your export is 3600&times;5400 pixels. See{" "}
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
                        Confusing 12&times;18 with 11&times;17
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        <Link href="/etsy-11x17-print-size" className="text-accent-light hover:underline">11&times;17 (tabloid)</Link> is a different ratio entirely.
                        Stretching an 11&times;17 design to fit 12&times;18
                        will distort the artwork. They are not
                        interchangeable. If buyers want both, create each at
                        its native ratio.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Source image too small for the full 2:3 pack
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        While 3600&times;5400 is enough for 12&times;18
                        alone, the 2:3 pack goes up to 20&times;30
                        (6000&times;9000). If your source is only
                        3600&times;5400, the larger sizes will lose
                        sharpness. Start with at least 6000&times;9000
                        pixels to cover every size in the pack.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Forcing the wrong ratio into 12&times;18
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
                        (3:4) design to fit 12&times;18 (2:3) cuts off edges
                        of your artwork. Design at 2:3 from the start, or use
                        a tool that generates each ratio separately without
                        cropping.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Skip the Manual Resizing"
                stat="All 7 sizes in the 2:3 pack from one upload"
                description="Manually creating 3600×5400 files for each artwork — then repeating for six other 2:3 sizes — takes hours. Upload once and get the full pack in seconds."
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
                      "What are the exact pixel dimensions for a 12\u00d718 print at 300 DPI?",
                    answer:
                      "3600\u00d75400 pixels. Multiply each dimension by 300: 12\u00d7300 = 3600 pixels wide, 18\u00d7300 = 5400 pixels tall. This is the standard for professional print quality.",
                  },
                  {
                    question: "What aspect ratio is 12\u00d718?",
                    answer:
                      "2:3 (0.667 decimal). The same ratio as 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 16\u00d724, and 20\u00d730. All 7 sizes scale from the same source image without cropping.",
                  },
                  {
                    question:
                      "Does 12\u00d718 fit inside an 18\u00d724 frame?",
                    answer:
                      "Yes. 12\u00d718 is designed to be matted inside a standard 18\u00d724 frame. The mat provides a 3-inch border on all sides, giving the print a professional gallery presentation. You can buy pre-cut 18\u00d724 mats with a 12\u00d718 opening at most craft stores.",
                  },
                  {
                    question:
                      "What is 12\u00d718 used for?",
                    answer:
                      "12\u00d718 is the most popular small poster size. It\u2019s ideal for mid-range wall art, gallery walls, dorm rooms, offices, and anywhere buyers want something larger than a photo print but not full poster size. It\u2019s also widely used for fine art reproductions.",
                  },
                  {
                    question:
                      "Should I include 12\u00d718 in my Etsy printable listing?",
                    answer:
                      "Yes. 12\u00d718 is included automatically in the 2:3 ratio pack alongside 4\u00d76, 6\u00d79, 8\u00d712, 10\u00d715, 16\u00d724, and 20\u00d730. Multi-size listings with 12\u00d718 cover the full range from small frames to large posters, increasing perceived value.",
                  },
                  {
                    question:
                      "What file format should I use for 12\u00d718 prints?",
                    answer:
                      "JPG (also called JPEG) at 300 DPI with sRGB color profile. At 3600\u00d75400 pixels, JPG keeps file sizes well under Etsy\u2019s 20 MB upload limit while delivering full print quality.",
                  },
                ]}
              />
            </div>

            <ContextualCTA
              problem="Still exporting 12×18 files manually for every listing?"
              solution="Upload once, get 12×18 plus 29 other sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
              appUrl={appUrl}
              buttonText="Get All Sizes"
            />

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-12x18-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
