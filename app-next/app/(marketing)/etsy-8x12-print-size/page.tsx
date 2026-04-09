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
  title: "8\u00d712 Print Size for Etsy \u2014 Pixels, DPI & 2:3 Ratio Guide",
  description:
    "8\u00d712 is a popular photography print size. Get exact pixels at 300 DPI (2400\u00d73600), framing in 12\u00d716 frames, and the full 2:3 ratio family for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-8x12-print-size" },
  openGraph: {
    title:
      "8\u00d712 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 8\u00d712 print guide for Etsy sellers. 2400\u00d73600 pixels at 300 DPI, 2:3 ratio family, framing in 12\u00d716 frames, and file setup tips.",
    url: "https://snaptosize.com/etsy-8x12-print-size",
    images: [
      {
        url: "/assets/og/etsy-8x12-print-size.png",
        width: 1200,
        height: 630,
        alt: "8\u00d712 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "8\u00d712 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete 8\u00d712 print guide for Etsy sellers. 2400\u00d73600 pixels at 300 DPI, 2:3 ratio, framing in 12\u00d716 frames.",
    images: ["/assets/og/etsy-8x12-print-size.png"],
  },
};

export default function Etsy8x12PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "8\u00d712 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 8\u00d712 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 2:3 ratio family, and framing in 12\u00d716 frames.",
    url: "https://snaptosize.com/etsy-8x12-print-size",
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
        name: "8\u00d712 Print Size",
        item: "https://snaptosize.com/etsy-8x12-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the exact pixel dimensions for an 8\u00d712 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2400\u00d73600 pixels. Multiply each dimension by 300: 8\u00d7300 = 2400 pixels wide, 12\u00d7300 = 3600 pixels tall. This is the standard for professional print quality.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 8\u00d712?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2:3 (0.667 decimal). The same ratio as 4\u00d76, 6\u00d79, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. All 7 sizes scale from the same source image without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Does 8\u00d712 fit inside a 12\u00d716 frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 8\u00d712 fits perfectly inside a standard 12\u00d716 frame with a 2-inch mat border on all sides. This gives the print a clean, professional gallery presentation. Pre-cut mats for this combination are available at Michaels, JOANN, and Amazon.",
        },
      },
      {
        "@type": "Question",
        name: "What is 8\u00d712 used for on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8\u00d712 is the standard photography print size. Popular for portrait photography wall art, nature prints, travel photography, and fine art reproductions. Buyers who order prints from photography labs (Nations Photo Lab, Bay Photo) expect this size.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 8\u00d712 in my Etsy printable listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 8\u00d712 is included automatically in the 2:3 ratio pack alongside 4\u00d76, 6\u00d79, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. It\u2019s one of the most-requested sizes for photography-based wall art and is expected in professional multi-size packs.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 8\u00d712 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG (also called JPEG) at 300 DPI with sRGB color profile. At 2400\u00d73600 pixels, JPG keeps file sizes well under Etsy\u2019s 20 MB upload limit while delivering full print quality.",
        },
      },
    ],
  };

  const appUrl = "https://app.snaptosize.com?source=seo_8x12&kind=guide";

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
          {/* Outer frame — 12x16 proportions (mat frame, 3:4) */}
          <div
            className="relative border border-white/[0.06] rounded-sm"
            style={{ width: "220px", height: "293px" }}
          >
            {/* Mat label */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <span className="text-[9px] font-mono text-teal-400/30 tracking-widest">
                12&times;16 FRAME
              </span>
            </div>

            {/* Inner frame — 8x12 proportions (the actual print, 2:3) */}
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
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`tt-${i}`}
                    className="w-px h-1.5 bg-white/[0.06]"
                  />
                ))}
              </div>

              {/* Tick marks — left edge */}
              <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`tl-${i}`}
                    className="h-px w-1.5 bg-white/[0.06]"
                  />
                ))}
              </div>
            </div>

            {/* Dimension label — width */}
            <div
              className="absolute flex items-center justify-center gap-2"
              style={{ bottom: "14px", left: "37px", width: "146px" }}
            >
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap">
                8 in &middot; 2400 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap -rotate-90">
                12 in &middot; 3600 px
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
                Photography Standard
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                8&times;12 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the standard
                photography print size
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              2400&times;3600 pixels. 2:3 aspect ratio. Perfect for matting
              inside 12&times;16 frames. Here&apos;s how to set up
              8&times;12 digital downloads that sell &mdash; plus the full
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

      {/* ===== QUICK ANSWER ===== */}
      <section className="py-8 md:py-10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <QuickAnswer question="What pixel dimensions for 8×12 at 300 DPI?">
              <strong>2400 &times; 3600 pixels</strong>. 8&times;12 uses the
              2:3 ratio &mdash; the standard photography print size, perfect
              for wall art and matting inside 12&times;16 frames.
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
                8&times;12 at 300 DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">8 &times; 12 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Pixel Dimensions</span>
                    <span className="font-semibold">2400 &times; 3600 px</span>
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
                The math is straightforward:
                8&nbsp;&times;&nbsp;300&nbsp;=&nbsp;2400 pixels wide,
                12&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3600 pixels tall. That
                gives you an 8.64-megapixel file &mdash; crisp, sharp detail
                at full print size. Use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to check any size at any DPI.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG, an 8&times;12 file stays well under Etsy&apos;s{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  20&nbsp;MB upload limit
                </Link>
                , even when bundled with all other 2:3 sizes in a ZIP pack.
              </p>
              <p className="text-foreground-60">
                The 2:3 aspect ratio means 8&times;12 shares identical
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

            {/* --- Section 2: Why 8x12 Matters --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 8&times;12 Is Essential for Etsy Photography Prints
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The Standard Photography Print Size
                  </h3>
                  <p className="text-foreground-60">
                    8&times;12 is the classic 2:3 photography print &mdash;
                    native to the proportions of DSLR and mirrorless cameras.
                    Buyers who order from photography labs (Bay Photo, Nations
                    Photo Lab, Mpix) expect this size. If you sell
                    photography-based wall art, 8&times;12 is non-negotiable.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Perfect Fit Inside 12&times;16 Frames
                  </h3>
                  <p className="text-foreground-60">
                    A{" "}
                    <Link
                      href="/etsy-12x18-print-size"
                      className="text-accent-light hover:underline"
                    >
                      12&times;16
                    </Link>{" "}
                    frame with a mat cut for 8&times;12 gives a 2-inch border
                    on all sides &mdash; a balanced, professional gallery
                    presentation. Pre-cut mats for this combination are stocked
                    at Michaels, JOANN, and Amazon. Mention this in your Etsy
                    listing to help buyers visualize the finished look.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Mid-Range Anchor in Multi-Size Packs
                  </h3>
                  <p className="text-foreground-60">
                    8&times;12 fills the critical mid-point in the 2:3 pack
                    between{" "}
                    <Link
                      href="/etsy-6x9-print-size"
                      className="text-accent-light hover:underline"
                    >
                      6&times;9
                    </Link>{" "}
                    and 10&times;15. Without it, there&apos;s a gap in your
                    size offering that makes the pack feel incomplete. Including
                    all seven 2:3 sizes signals professional-level listings.
                    See{" "}
                    <Link
                      href="/how-many-sizes-etsy-printable"
                      className="text-accent-light hover:underline"
                    >
                      how many sizes to include
                    </Link>{" "}
                    for more.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- ContextualCTA --- */}
            <div>
              <ContextualCTA
                problem="Still exporting 8×12 files manually for every listing?"
                solution="Upload once, get 8×12 plus all six other 2:3 sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
                buttonText="Get All Sizes"
                appUrl={`https://app.snaptosize.com?source=seo_8x12&kind=cta`}
              />
            </div>

            {/* --- Section 3: 2:3 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 2:3 Ratio Family &mdash; All 7 Sizes With 8&times;12
              </h2>
              <p className="text-foreground-60 mb-6">
                8&times;12 belongs to the 2:3 aspect ratio family. All seven
                sizes share identical proportions, so they scale from one
                source image without any cropping. Buyers expect all of these
                in one download.
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
                    <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-6x9-print-size"
                          className="text-accent-light hover:underline"
                        >
                          6&times;9
                        </Link>
                      </td>
                      <td className="py-3 px-4 font-mono text-foreground-60">
                        1800&times;2700 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo wall art, portraits
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-teal-500/[0.04]">
                      <td className="py-3 px-4 font-semibold text-teal-300">
                        8&times;12
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold">
                        2400&times;3600 px
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photography prints, gallery wall &mdash;{" "}
                        <em>this page</em>
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
                8&times;12 fits perfectly inside a standard 12&times;16
                frame with a 2-inch mat border on all sides &mdash; a
                balanced, professional gallery presentation. This is the
                most popular framing choice for photography prints. Pre-cut
                mats for this combination are stocked at Michaels, JOANN,
                Hobby Lobby, and Amazon. Mention it in your Etsy listing to
                help buyers visualise the finished look.
              </p>

              <Card className="p-6 md:p-8 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations for 8&times;12
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      12&times;16 frame + 8&times;12 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      2&Prime; border all sides &mdash; classic gallery look
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      11&times;14 frame + 8&times;12 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      1.5&Prime; width / 1&Prime; height border
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      16&times;20 frame + wide mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Generous border, statement gallery wall piece
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Photo lab direct print</span>
                    <span className="text-foreground-60 text-sm">
                      Standard 8&times;12 at Bay Photo, Nations, Mpix
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Add &ldquo;8&times;12 fits inside a standard 12&times;16
                    frame with a 2-inch mat (available at Michaels &amp; Amazon).
                    For an unmatted look, print directly at any photography
                    lab.&rdquo; to your description. This single line reduces
                    buyer confusion and increases purchase confidence.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 5: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 8&times;12 Digital Prints
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
                        72 DPI is screen resolution. An 8&times;12 at 72 DPI
                        is only 576&times;864 pixels &mdash; visibly pixelated
                        at print size. The file must be 2400&times;3600
                        pixels. Photography labs will reject or produce poor
                        results with low-resolution files.
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
                        Photography labs universally expect sRGB. Files in
                        Adobe RGB, ProPhoto RGB, or CMYK display incorrect
                        colors when printed &mdash; reds appear orange, blues
                        shift purple. Convert to sRGB before exporting.
                        SnapToSize outputs sRGB automatically.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Confusing 8&times;12 (2:3) with 8&times;10 (4:5)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        8&times;12 is 2:3 ratio. 8&times;10 (
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          the 4:5 ratio size
                        </Link>
                        ) has different proportions. Scaling artwork between
                        these two will crop or stretch the image. Design at
                        the correct ratio from the start, or use a tool that
                        handles each ratio separately without cropping.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Skipping 8&times;12 from photography listings
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        8&times;12 is the native 2:3 photography print size.
                        Buyers who order from photo labs (Bay Photo, Nations
                        Photo Lab, Mpix) look for this size specifically. Omitting
                        it from your 2:3 pack leaves photography buyers without
                        their expected format.
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
                      "What are the exact pixel dimensions for an 8\u00d712 print at 300 DPI?",
                    answer:
                      "2400\u00d73600 pixels. Multiply each dimension by 300: 8\u00d7300 = 2400 pixels wide, 12\u00d7300 = 3600 pixels tall. This is the standard for professional print quality.",
                  },
                  {
                    question: "What aspect ratio is 8\u00d712?",
                    answer:
                      "2:3 (0.667 decimal). The same ratio as 4\u00d76, 6\u00d79, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. All 7 sizes scale from the same source image without cropping.",
                  },
                  {
                    question: "Does 8\u00d712 fit inside a 12\u00d716 frame?",
                    answer:
                      "Yes. 8\u00d712 fits inside a standard 12\u00d716 frame with a 2-inch mat border on all sides \u2014 a clean, professional gallery presentation. Pre-cut mats for this combination are available at Michaels, JOANN, and Amazon.",
                  },
                  {
                    question: "What is 8\u00d712 used for on Etsy?",
                    answer:
                      "8\u00d712 is the standard photography print size. Popular for portrait photography wall art, nature prints, travel photography, and fine art reproductions. Buyers who print at photography labs expect this size.",
                  },
                  {
                    question:
                      "Should I include 8\u00d712 in my Etsy printable listing?",
                    answer:
                      "Yes. 8\u00d712 is included automatically in the 2:3 ratio pack alongside 4\u00d76, 6\u00d79, 10\u00d715, 12\u00d718, 16\u00d724, and 20\u00d730. It\u2019s one of the most-requested sizes for photography-based wall art.",
                  },
                  {
                    question:
                      "What file format should I use for 8\u00d712 prints?",
                    answer:
                      "JPG (also called JPEG) at 300 DPI with sRGB color profile. At 2400\u00d73600 pixels, JPG keeps file sizes well under Etsy\u2019s 20 MB upload limit while delivering full print quality.",
                  },
                ]}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-8x12-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
