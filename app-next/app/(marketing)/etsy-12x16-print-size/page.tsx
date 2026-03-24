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
  title: "12×16 Print Size for Etsy — Pixels, DPI & File Setup",
  description:
    "12×16 is the sweet spot of the 3:4 ratio family. Get exact pixel dimensions at 300 DPI (3600×4800), aspect ratio specs, file format rules, and framing tips for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-12x16-print-size" },
  openGraph: {
    title:
      "12×16 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 12×16 print guide for Etsy sellers. Exact pixels at 300 DPI, 3:4 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-12x16-print-size",
    images: [
      {
        url: "/assets/og/etsy-12x16-print-size.png",
        width: 1200,
        height: 630,
        alt: "12×16 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "12×16 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 12×16 print guide for Etsy sellers. 3600×4800 pixels at 300 DPI, 3:4 ratio, and file setup.",
    images: ["/assets/og/etsy-12x16-print-size.png"],
  },
};

export default function Etsy12x16PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "12×16 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 12×16 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 3:4 ratio specs, and file requirements.",
    url: "https://snaptosize.com/etsy-12x16-print-size",
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
        name: "12×16 Print Size",
        item: "https://snaptosize.com/etsy-12x16-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for a 12×16 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 12×16 inch print at 300 DPI requires exactly 3600×4800 pixels. Multiply each dimension by 300: 12×300=3600, 16×300=4800. As a JPG, the file stays well under Etsy's 20 MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 12×16?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12×16 has a 3:4 aspect ratio (0.75 decimal). The 3:4 pack includes 6×8, 9×12, 12×16, 15×20, and 18×24. 24×32 is available via single export. All 3:4 sizes can be scaled from the same source file without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Is 12×16 a standard frame size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 12×16 frames are available at IKEA, Amazon, and Target. While not as ubiquitous as 8×10, they are easy to find online and in stores. For a gallery look, mat a 12×16 print inside a 16×20 frame.",
        },
      },
      {
        "@type": "Question",
        name: "How does 12×16 compare to 11×14?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12×16 and 11×14 are close in physical size but use different aspect ratios. 12×16 is 3:4 (the classic photo proportion), while 11×14 is closer to 4:5. They cannot be scaled between without cropping — you need separate source files for each.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 12×16 Etsy prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use JPG (also called JPEG) at 300 DPI with sRGB color profile. JPG provides the best balance of quality and file size. Avoid PNG for print files — it creates much larger files with no visible quality benefit when printed.",
        },
      },
      {
        "@type": "Question",
        name: "What sizes should I bundle with 12×16?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bundle the 3:4 pack sizes: 6×8, 9×12, 12×16, 15×20, and 18×24. 24×32 is available via single export. All share the same proportions, so they scale from one source file without cropping. Buyers perceive five pack sizes instead of one.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_12x16&kind=guide";

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
            "linear-gradient(135deg, #030712 0%, #042f2e 40%, #0d1117 100%)",
        }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #34d399 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gradient mesh blobs — emerald */}
        <div
          className="absolute top-[-18%] right-[-8%] w-[550px] h-[550px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #059669, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-6%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #10b981, transparent 70%)",
          }}
        />

        {/* Gallery wall arrangement — right side (3 frames in 3:4) */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Background frame — top-left, smaller */}
          <div
            className="absolute border border-white/[0.04] rounded-sm"
            style={{
              width: "90px",
              height: "120px",
              top: "-40px",
              left: "-60px",
            }}
          >
            <div className="absolute inset-2 border border-emerald-600/10 rounded-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] font-mono text-white/10 tracking-widest">
                6×8
              </span>
            </div>
          </div>

          {/* Background frame — bottom-right, smaller */}
          <div
            className="absolute border border-white/[0.04] rounded-sm"
            style={{
              width: "105px",
              height: "140px",
              bottom: "-50px",
              right: "-50px",
            }}
          >
            <div className="absolute inset-2 border border-emerald-600/10 rounded-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] font-mono text-white/10 tracking-widest">
                9×12
              </span>
            </div>
          </div>

          {/* Main frame — 12×16 (3:4) */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "195px", height: "260px" }}
          >
            {/* Inner frame with accent border */}
            <div className="absolute inset-3 border border-emerald-500/20 rounded-sm" />

            {/* Diagonal construction lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 195 260"
              fill="none"
            >
              <line
                x1="0"
                y1="0"
                x2="195"
                y2="260"
                stroke="rgba(52,211,153,0.05)"
                strokeWidth="0.5"
              />
              <line
                x1="195"
                y1="0"
                x2="0"
                y2="260"
                stroke="rgba(52,211,153,0.05)"
                strokeWidth="0.5"
              />
            </svg>

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-emerald-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-emerald-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-emerald-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-emerald-400/30" />

            {/* Dimension label — width */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-emerald-300/50 tracking-widest whitespace-nowrap">
                12 in &middot; 3600 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-emerald-300/50 tracking-widest whitespace-nowrap -rotate-90">
                16 in &middot; 4800 px
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
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-emerald-300/60 uppercase">
                Print Size Reference
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                12×16 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the sweet
                spot of the 3:4 ratio family
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              3600×4800 pixels. 3:4 aspect ratio. Large enough to make a
              statement, affordable to frame. Here&apos;s everything you need
              to set up 12×16 digital downloads that sell &mdash; plus the
              full 3:4 ratio pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 3:4 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 12×16 + five more 3:4
                sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  3600×4800 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  3:4 aspect ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Standard frame size
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
                12×16 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">12 × 16 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">3600 × 4800 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">3:4 (0.75)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">File Format</span>
                    <span className="font-semibold">JPG / JPEG, sRGB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Ratio Pack</span>
                    <span className="font-semibold">3:4 Ratio (5 sizes)</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math is simple: multiply each dimension in inches by 300.
                12&nbsp;×&nbsp;300&nbsp;=&nbsp;3600 pixels wide,
                16&nbsp;×&nbsp;300&nbsp;=&nbsp;4800 pixels tall. That gives
                any modern camera or design tool handles this resolution
                comfortably.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG, the file stays well under Etsy&apos;s 20&nbsp;MB
                limit. Even bundled in a ZIP with all five 3:4 pack sizes,
                you&apos;ll have plenty of room. For more on managing
                download sizes, see the{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy 20 MB file limit guide
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                The 3:4 aspect ratio (width is 75% of height) determines
                which other sizes share the same proportions. This matters
                because you can scale between all 3:4 sizes without cropping
                &mdash; your full artwork composition is preserved at every
                size. For a deeper look at ratios, see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- Why 12×16 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 12×16 Is the Sweet Spot of the 3:4 Family
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The Step-Up From 8×10
                  </h3>
                  <p className="text-foreground-60">
                    Buyers who want more visual impact than an{" "}
                    <Link
                      href="/etsy-8x10-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8×10 print
                    </Link>{" "}
                    but aren&apos;t ready for a full poster often land on
                    12×16. It&apos;s noticeably larger &mdash; 60% more
                    surface area than 8×10 &mdash; without the expense of
                    oversized framing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The Classic Photo Proportion
                  </h3>
                  <p className="text-foreground-60">
                    The 3:4 ratio is the native format for most smartphone
                    cameras and many digital cameras. When buyers print phone
                    photos as wall art, 12×16 feels natural &mdash; no
                    awkward cropping, no unexpected composition changes. This
                    makes 12×16 especially popular for photo-based artwork
                    and digital portraits.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Affordable to Frame
                  </h3>
                  <p className="text-foreground-60">
                    12×16 frames are available at IKEA, Amazon, and Target at
                    standard prices. For a gallery look, buyers can mat a
                    12×16 print inside a{" "}
                    <Link
                      href="/etsy-16x20-print-size"
                      className="text-accent-light hover:underline"
                    >
                      16×20 frame
                    </Link>{" "}
                    &mdash; a combination that gives high-end presentation
                    without custom framing costs.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Perfect for Bedrooms, Living Rooms &amp; Offices
                  </h3>
                  <p className="text-foreground-60">
                    12×16 is large enough to anchor a small gallery wall or
                    stand alone above a desk, nightstand, or sofa table.
                    Interior designers recommend this as a mid-size statement
                    piece that works in virtually any room without
                    overwhelming the space.
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
                  Upload your artwork once. Get 12×16 and all other 3:4
                  sizes at 300&nbsp;DPI &mdash; organized, named, and under
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
                The 3:4 Ratio &mdash; What Other Sizes Come With 12×16
              </h2>
              <p className="text-foreground-60 mb-6">
                12×16 belongs to the 3:4 aspect ratio family. All sizes in
                this group maintain identical proportions, so you can scale
                up or down from the same source file without cropping. Buyers
                expect to receive multiple sizes in one download &mdash;
                offering the full pack increases perceived value and
                conversion. Learn more in{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include in Etsy printables
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
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">12×16</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 × 4800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Medium wall art, sweet spot size
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
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18×24
                        </Link>
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
                When a competitor offers &ldquo;12×16 only&rdquo; and your
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
                    JPG (also called JPEG) is the standard for Etsy print files. It keeps file
                    sizes manageable at 3600×4800 resolution while
                    maintaining full print quality. Avoid PNG for print
                    files: they&apos;re 5-10× larger with no visible benefit
                    when printed. For more on file formats, see{" "}
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
                    Always embed sRGB. Most home printers and online print
                    services expect it. Files in Adobe RGB or ProPhoto RGB
                    will shift colors during printing &mdash; reds go
                    orange, blues go purple. Convert to sRGB before
                    exporting your final files.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use clear names like{" "}
                    <code className="text-accent-light">
                      artwork_12x16_300dpi.jpg
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
                    <span>Use JPG / JPEG, not PNG</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Flatten all layers before export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Group by ratio pack &mdash; one ZIP per ratio stays
                      well under 20 MB
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Or use SnapToSize &mdash; auto-optimizes every file
                      to stay under the limit
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
                12×16 prints fit directly into standard 12×16 frames. For a
                gallery look, the most popular setup is matting a 12×16
                print inside a{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16×20 frame
                </Link>{" "}
                &mdash; this creates a refined presentation that looks
                custom without the cost. Mentioning frame options in your
                listing description reduces buyer questions and increases
                perceived value.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">12×16 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Budget-friendly, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      16×20 frame + 12×16 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Gallery look, most popular option
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      18×24 frame + 12×16 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wide border, dramatic statement
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Float frame (12×16)
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
                    Add &ldquo;Fits any standard 12×16 frame (IKEA, Amazon,
                    Target). For a gallery look, mat in a 16×20
                    frame.&rdquo; to your Etsy description. This single
                    line increases buyer confidence and reduces support
                    messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- 12×16 vs 11×14 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                12×16 vs 11×14 &mdash; Different Ratios, Different Files
              </h2>
              <p className="text-foreground-60 mb-6">
                12×16 and 11×14 are close in physical size, which causes
                confusion. But they use different aspect ratios, which means
                they are not interchangeable &mdash; you need separate
                source files for each.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Attribute
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        12×16
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        11×14
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3:4 (0.75)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        ~4:5 (0.786)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Pixels @ 300 DPI
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 × 4800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 × 4200
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Ratio Family</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6×8, 9×12, 15×20, 18×24
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8×10, 16×20, 24×30
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Best For</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo-based art, smartphone photos
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Traditional art, portrait photography
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                The key takeaway: scaling a 12×16 file to fit an 11×14 frame
                will crop your artwork. If you want to serve both audiences,
                you need to create files in both ratio families. SnapToSize
                generates both 3:4 and 4:5 packs from a single upload.
              </p>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 12×16 Digital Prints
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
                        72 DPI is screen resolution. A 12×16 at 72 DPI is
                        only 864×1152 pixels &mdash; prints will be visibly
                        pixelated and blurry. Always check your export
                        settings. The file must be 3600×4800 pixels.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Cropping a different ratio to fit 12×16
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Cropping a 2:3 or 4:5 design to 3:4 cuts off parts
                        of the artwork. Buyers expect the full composition
                        shown in your listing preview. Design at 3:4 from
                        the start, or use a tool that generates 3:4 sizes
                        without cropping.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Confusing 12×16 with 11×14
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        They look similar in size but have different ratios.
                        A 12×16 file will not fit an 11×14 frame without
                        cropping. If a buyer prints your 12×16 file at 11×14,
                        the edges get cut off. Clearly label your files and
                        mention the exact dimensions in your listing.
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
                        shift purple. Convert to sRGB before exporting. Every
                        time.
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
                      "What pixel dimensions do I need for a 12×16 print at 300 DPI?",
                    answer:
                      "Exactly 3600×4800 pixels. Multiply each dimension by 300: 12×300 = 3600 pixels wide, 16×300 = 4800 pixels tall. As a JPG, the file stays well under Etsy's 20 MB limit.",
                  },
                  {
                    question: "What aspect ratio is 12×16?",
                    answer:
                      "3:4 (or 0.75 as a decimal). The 3:4 pack includes 6×8, 9×12, 12×16, 15×20, and 18×24. 24×32 is available via single export. All 3:4 sizes can be scaled from the same source file without any cropping.",
                  },
                  {
                    question: "Is 12×16 a standard frame size?",
                    answer:
                      "Yes — 12×16 frames are available at IKEA, Amazon, and Target. While not as ubiquitous as 8×10, they are easy to find online and in stores. For a gallery look, mat a 12×16 print inside a 16×20 frame.",
                  },
                  {
                    question:
                      "How does 12×16 compare to 11×14?",
                    answer:
                      "12×16 and 11×14 are close in physical size but use different aspect ratios. 12×16 is 3:4 (the classic photo proportion), while 11×14 is closer to 4:5. They cannot be scaled between without cropping — you need separate source files for each.",
                  },
                  {
                    question:
                      "What file format should I use for 12×16 Etsy prints?",
                    answer:
                      "JPG / JPEG at 300 DPI with sRGB color profile. JPG provides the best balance of quality and file size. Avoid PNG for print files — it creates much larger files with no visible quality benefit when printed.",
                  },
                  {
                    question:
                      "What sizes should I bundle with 12×16?",
                    answer:
                      "Bundle the 3:4 pack sizes: 6×8, 9×12, 12×16, 15×20, and 18×24. 24×32 is available via single export. All share the same proportions, so they scale from one source file without cropping. Buyers perceive five pack sizes instead of one.",
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
            <RelatedPages currentSlug="etsy-12x16-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
