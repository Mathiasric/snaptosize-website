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
  title: "18×24 Print Size for Etsy — Pixels, DPI & File Setup",
  description:
    "18×24 is a top-selling large wall art size on Etsy. Get exact pixel dimensions at 300 DPI (5400×7200), 3:4 ratio specs, file format rules, and framing tips for digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-18x24-print-size" },
  openGraph: {
    title:
      "18×24 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 18×24 print guide for Etsy sellers. Exact pixels at 300 DPI, 3:4 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-18x24-print-size",
    images: [
      {
        url: "/assets/og/etsy-18x24-print-size.png",
        width: 1200,
        height: 630,
        alt: "18×24 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "18×24 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 18×24 print guide for Etsy sellers. 5400×7200 pixels at 300 DPI, 3:4 ratio, and file setup.",
    images: ["/assets/og/etsy-18x24-print-size.png"],
  },
};

export default function Etsy18x24PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "18×24 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 18×24 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 3:4 ratio specs, and file requirements.",
    url: "https://snaptosize.com/etsy-18x24-print-size",
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
        name: "18×24 Print Size",
        item: "https://snaptosize.com/etsy-18x24-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for an 18×24 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An 18×24 inch print at 300 DPI requires exactly 5400×7200 pixels. Multiply each dimension by 300: 18×300=5400, 24×300=7200. As a JPEG, the file stays well under Etsy's 20 MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 18×24?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "18×24 has a 3:4 aspect ratio (0.75 decimal). The 3:4 pack includes 6×8, 9×12, 12×16, 15×20, and 18×24. 24×32 is available via single export. All 3:4 sizes can be scaled from the same source file without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Does 18×24 fit a standard frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 18×24 is a standard poster frame size, widely stocked at IKEA, Amazon, Michaels, and Target. It can also be matted inside a 24×32 or 24×36 frame for a gallery presentation.",
        },
      },
      {
        "@type": "Question",
        name: "What's the best use case for 18×24 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "18×24 is ideal for large wall art and statement pieces. It's the standard poster size, big enough to anchor a gallery wall or stand alone above a sofa or bed. It's one of the most popular sizes for digital art downloads on Etsy.",
        },
      },
      {
        "@type": "Question",
        name: "How does 18×24 compare to 16×20 and 24×36?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "18×24 (3:4 ratio) sits between 16×20 (4:5 ratio) and 24×36 (2:3 ratio). It's larger than 16×20 but more affordable to frame than 24×36. Each uses a different aspect ratio, so you cannot simply scale between them — you need separate files for each.",
        },
      },
      {
        "@type": "Question",
        name: "Can buyers print 18×24 at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most home printers max out at 8.5×11 or 13×19 inches. For 18×24, buyers typically use online print services like Shutterfly, Nations Photo Lab, or local print shops. Mention this in your listing so buyers know what to expect.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_18x24&kind=guide";

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
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #062a2a 40%, #0d1117 100%)" }}>
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2dd4bf 1px, transparent 1px), linear-gradient(to bottom, #2dd4bf 1px, transparent 1px)",
            backgroundSize: "48px 64px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-15%] left-[-8%] w-[550px] h-[550px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #14b8a6, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-25%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }}
        />

        {/* 3:4 Frame blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — 3:4 proportions */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "225px", height: "300px" }}
          >
            {/* Inner frame with accent border */}
            <div className="absolute inset-3 border border-teal-500/20 rounded-sm" />

            {/* Diagonal construction lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 225 300" fill="none">
              <line x1="0" y1="0" x2="225" y2="300" stroke="rgba(45,212,191,0.06)" strokeWidth="0.5" />
              <line x1="225" y1="0" x2="0" y2="300" stroke="rgba(45,212,191,0.06)" strokeWidth="0.5" />
              <line x1="112.5" y1="0" x2="112.5" y2="300" stroke="rgba(45,212,191,0.04)" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="225" y2="150" stroke="rgba(45,212,191,0.04)" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-teal-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-teal-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-teal-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-teal-400/30" />

            {/* Dimension label — width */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap">
                18 in &middot; 5400 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-teal-300/50 tracking-widest whitespace-nowrap -rotate-90">
                24 in &middot; 7200 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Ratio badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  3 : 4
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
                18×24 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the go-to
                large wall art size
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              5400×7200 pixels. 3:4 aspect ratio. Standard poster frame at
              every major retailer. Here&apos;s everything you need to set up
              18×24 digital downloads that sell &mdash; plus the full 3:4
              ratio pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 3:4 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 18×24 + five more 3:4 sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  5400×7200 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  3:4 aspect ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-teal-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
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

            <QuickAnswer question="What pixel dimensions for 18×24 at 300 DPI?">
              <strong>5400 × 7200 pixels</strong> for portrait, <strong>7200 × 5400</strong> for landscape. 18×24 uses the 3:4 ratio — a large wall art size for living rooms and offices.
            </QuickAnswer>

            {/* --- Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                18×24 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">18 × 24 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">5400 × 7200 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">3:4 (0.75)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Color Profile</span>
                    <span className="font-semibold">sRGB</span>
                  </div>
                </div>
              </Card>

              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/assets/visuals/etsy-18x24-size-comparison.png"
                  alt="18×24 print size comparison with 12×16, 16×20, and 20×30"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              <p className="text-foreground-60 mb-4">
                The math is simple: multiply each dimension in inches by 300.
                18&nbsp;×&nbsp;300&nbsp;=&nbsp;5400 pixels wide,
                24&nbsp;×&nbsp;300&nbsp;=&nbsp;7200 pixels tall. That&apos;s a
                high-resolution file that prints with sharp detail at large
                scale.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG / JPEG, the file stays well under Etsy&apos;s 20&nbsp;MB
                limit. Even bundled in a ZIP with other 3:4 sizes, you&apos;ll
                have plenty of room.
              </p>
              <p className="text-foreground-60">
                The 3:4 aspect ratio (width is 75% of height) determines which
                other sizes share the same proportions. This matters because you
                can scale between all 3:4 sizes without cropping &mdash; your
                full artwork composition is preserved at every size.
              </p>
            </div>

            {/* --- Why Popular --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 18×24 Is a Top-Selling Large Print Size
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Standard Poster Size
                  </h3>
                  <p className="text-foreground-60">
                    18×24 is the classic poster format. Frames are stocked at
                    IKEA, Amazon, Michaels, and Target &mdash; buyers can grab
                    one for under $15. No special ordering, no custom framing
                    costs. This removes a major purchase barrier. Especially
                    popular for{" "}
                    <Link href="/etsy-vintage-art-print-sizes" className="text-accent-light hover:underline">
                      vintage art prints
                    </Link>{" "}
                    and retro posters.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Statement Piece Sweet Spot
                  </h3>
                  <p className="text-foreground-60">
                    18×24 is large enough to anchor a room but not so oversized
                    that it overwhelms a wall. It works above a sofa, over a
                    desk, or as a bedroom focal point. Buyers searching for
                    &ldquo;large wall art&rdquo; on Etsy consistently land on
                    this size.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Gallery Wall Anchor
                  </h3>
                  <p className="text-foreground-60">
                    In gallery wall layouts, 18×24 serves as the anchor piece
                    that smaller prints cluster around. Interior design guides
                    recommend one large piece (18×24 or bigger) as the starting
                    point. Including this size means your art fits the most
                    popular wall arrangement style.
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
                  Upload your artwork once. Get 18×24 and all other 3:4 sizes
                  at 300&nbsp;DPI &mdash; organized, named, and under
                  20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All 3:4 Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- 3:4 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 3:4 Ratio &mdash; What Other Sizes Come With 18×24
              </h2>
              <p className="text-foreground-60 mb-6">
                18×24 belongs to the 3:4 aspect ratio family. All sizes in this
                group maintain identical proportions, so you can scale up or
                down from the same source file without cropping. Buyers expect
                to receive multiple sizes in one download.
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
                      <td className="py-3 px-4">6×8</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800 × 2400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small desk or shelf print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">9×12</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2700 × 3600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard drawing paper size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12×16</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 × 4800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">15×20</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4500 × 6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large wall print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        18×24{" "}
                        <span className="ml-1 inline-block rounded-full bg-teal-500/15 px-2 py-0.5 text-[10px] font-semibold text-teal-400 border border-teal-500/25">Popular</span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400 × 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard poster size, statement piece
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">24×32</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 × 9600
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized art, available via single export
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                When a competitor offers &ldquo;18×24 only&rdquo; and your
                listing includes all five 3:4 pack sizes, yours appears to
                have higher value at the same price. Buyers perceive five
                products instead of one.
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
                . For ratio-specific details, see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate All 3:4 Sizes in Seconds
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
                    JPG (also called JPEG &mdash; same format, same file size) is the standard for Etsy print files. It keeps file
                    sizes manageable even at 5400×7200 resolution while
                    maintaining full print quality. Avoid PNG for print files:
                    they&apos;re 5-10× larger with no visible benefit when
                    printed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    sRGB Color Profile
                  </h3>
                  <p className="text-foreground-60">
                    Always embed sRGB. Most home printers and online print
                    services expect it. Files in Adobe RGB or ProPhoto RGB will
                    shift colors during printing &mdash; reds go orange, blues
                    go purple. In Photoshop: Edit &rarr; Convert to Profile
                    &rarr; sRGB IEC61966-2.1.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use clear names like{" "}
                    <code className="text-accent-light">
                      artwork_18x24_300dpi.jpg
                    </code>
                    . Buyers should find the right file instantly in their
                    downloads folder. Avoid generic names like
                    &ldquo;print1.jpg&rdquo; or cryptic codes.
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
                    <span>Use JPEG, not PNG</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Flatten all layers before export</span>
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
                      Or use SnapToSize &mdash; auto-optimizes every file to
                      stay under the limit
                    </span>
                  </li>
                </ul>
                <p className="text-foreground-60 text-sm mt-4">
                  For more detail, see{" "}
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
                18×24 prints fit directly into standard 18×24 poster frames with
                no mat required. For a gallery look, the most common setup is an
                18×24 print matted inside a 24×32 or 24×36 frame. Mentioning
                this in your listing description reduces buyer questions and
                increases perceived value.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">18×24 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Budget-friendly, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      24×32 frame + 18×24 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Gallery-style presentation
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      24×36 frame + 18×24 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wide border, dramatic statement
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Float frame or canvas
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Modern look, no mat needed
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
                    Add &ldquo;Fits any standard 18×24 poster frame (IKEA,
                    Amazon, Michaels). For a gallery look, mat inside a 24×36
                    frame.&rdquo; to your Etsy description. This single line
                    increases buyer confidence and reduces support messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 18×24 Digital Prints
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
                        72 DPI is screen resolution. An 18×24 at 72 DPI is only
                        1296×1728 pixels &mdash; prints will be visibly
                        pixelated and blurry at this large size. Always check
                        your export settings. The file must be 5400×7200 pixels.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Cropping a different ratio to fit 18×24
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Cropping a 2:3 or 4:5 design to 3:4 cuts off parts of
                        the artwork. At 18×24, even small crops are noticeable.
                        Buyers expect the full composition shown in your listing
                        preview. Design at 3:4 from the start, or use a tool
                        that generates 3:4 sizes without cropping.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Not mentioning print services in the listing
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Most buyers cannot print 18×24 at home. If your listing
                        doesn&apos;t mention where to print, buyers hesitate.
                        Add a note like &ldquo;Print at any local print shop or
                        online service&rdquo; to remove this friction point.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong color profile
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Files in Adobe RGB or ProPhoto RGB display incorrect
                        colors when printed &mdash; reds appear orange, blues
                        shift purple. At 18×24, color issues are impossible to
                        miss. Convert to sRGB before exporting. Every time.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Get All 3:4 Sizes in One Click"
                stat="Five 3:4 pack sizes from a single upload"
                description="Upload your artwork and instantly receive 6x8, 9x12, 12x16, 15x20, and 18x24 at 300 DPI. No cropping, no manual resizing. Production-ready in seconds."
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
                      "What pixel dimensions do I need for an 18×24 print at 300 DPI?",
                    answer:
                      "Exactly 5400×7200 pixels. Multiply each dimension by 300: 18×300 = 5400 pixels wide, 24×300 = 7200 pixels tall. As a JPEG, the file stays well under Etsy's 20 MB limit.",
                  },
                  {
                    question: "What aspect ratio is 18×24?",
                    answer:
                      "3:4 (or 0.75 as a decimal). The 3:4 pack includes 6×8, 9×12, 12×16, 15×20, and 18×24. 24×32 is available via single export. All 3:4 sizes can be scaled from the same source file without any cropping.",
                  },
                  {
                    question: "Does 18×24 fit a standard frame?",
                    answer:
                      "Yes — 18×24 is a standard poster frame size available at IKEA, Amazon, Michaels, and Target. It can also be matted inside a 24×32 or 24×36 frame for a gallery-style presentation.",
                  },
                  {
                    question:
                      "What's the best use case for 18×24 prints?",
                    answer:
                      "18×24 is ideal for large wall art and statement pieces. It works as a focal point above furniture, an anchor for gallery walls, or a standalone poster. It's one of the most popular sizes for digital art on Etsy.",
                  },
                  {
                    question:
                      "How does 18×24 compare to 16×20 and 24×36?",
                    answer:
                      "18×24 (3:4 ratio) sits between 16×20 (4:5 ratio) and 24×36 (2:3 ratio) in size. It's larger than 16×20 but more affordable to frame than 24×36. Each uses a different aspect ratio, so you need separate source files — they cannot be scaled between without cropping.",
                  },
                  {
                    question: "Can buyers print 18×24 at home?",
                    answer:
                      "Most home printers max out at 8.5×11 or 13×19 inches. For 18×24, buyers typically use online print services or local print shops. Mention this in your listing so buyers know what to expect.",
                  },
                ]}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Still exporting 18×24 files manually for every listing?"
                solution="Upload once, get 18×24 plus 29 other sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
                buttonText="Get All Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-18x24-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
