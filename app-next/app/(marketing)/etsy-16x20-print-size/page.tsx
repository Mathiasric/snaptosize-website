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
  title: "16×20 Print Size for Etsy — Pixels, DPI & File Setup",
  description:
    "16×20 is a premium Etsy print size. Get exact pixel dimensions at 300 DPI (4800×6000), 4:5 ratio specs, file format rules, and framing tips for digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-16x20-print-size" },
  openGraph: {
    title:
      "16×20 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 16×20 print guide for Etsy sellers. Exact pixels at 300 DPI, 4:5 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-16x20-print-size",
    images: [
      {
        url: "/assets/og/etsy-16x20-print-size.png",
        width: 1200,
        height: 630,
        alt: "16×20 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "16×20 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 16×20 print guide for Etsy sellers. 4800×6000 pixels at 300 DPI, 4:5 ratio, and file setup.",
    images: ["/assets/og/etsy-16x20-print-size.png"],
  },
};

export default function Etsy16x20PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "16×20 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 16×20 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 4:5 ratio specs, and file requirements.",
    url: "https://snaptosize.com/etsy-16x20-print-size",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
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
        name: "16×20 Print Size",
        item: "https://snaptosize.com/etsy-16x20-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for a 16×20 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 16×20 inch print at 300 DPI requires exactly 4800×6000 pixels. Multiply each dimension by 300: 16×300=4800, 20×300=6000. As a JPEG, the file weighs 8-12MB — well under Etsy's 20MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 16×20?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "16×20 has a 4:5 aspect ratio (0.8 decimal). Other sizes in this ratio family include 8×10, 12×15, 20×25, and 24×30. All can be scaled from the same source file without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Does 16×20 fit a standard frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 16×20 is a standard frame size available at IKEA, Target, Amazon, and Michaels. It can also be matted inside 20×24 or 24×30 frames for gallery presentation.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 16×20 Etsy prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use JPEG at 300 DPI with sRGB color profile. JPEG keeps file sizes manageable (8-12MB). Avoid PNG for print files — it creates 15-20MB files with no print quality benefit, wasting ZIP space and risking the 20MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include bleed for 16×20 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not for home printing — buyers print to exact dimensions. If your customers use professional print services, you can optionally add 0.125\" bleed on all sides, making the file 4875×6075 pixels at 300 DPI.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_etsy-16x20-print-size&kind=size";

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
      <section className="relative pt-14 pb-20 md:pt-18 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />

        {/* 4:5 Frame blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "192px", height: "240px" }}
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
                16 in &middot; 4800 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                20 in &middot; 6000 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Ratio badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  4 : 5
                </span>
              </div>
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-3">
              {[...Array(9)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(11)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-1.5 bg-white/[0.06]" />
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
                16×20 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the statement piece size explained
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              4800×6000 pixels. 4:5 aspect ratio. Standard frame availability.
              Here&apos;s everything you need to set up 16×20 digital downloads
              that command premium pricing &mdash; plus the full 4:5 ratio pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 4:5 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 16×20 + four more 4:5 sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  4800×6000 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  4:5 aspect ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
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
                16×20 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">16 × 20 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">4800 × 6000 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">4:5 (0.8)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      JPEG File Size
                    </span>
                    <span className="font-semibold">8–12 MB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Megapixels</span>
                    <span className="font-semibold">28.8 MP</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math is simple: multiply each dimension in inches by 300.
                16&nbsp;×&nbsp;300&nbsp;=&nbsp;4800 pixels wide,
                20&nbsp;×&nbsp;300&nbsp;=&nbsp;6000 pixels tall. That gives you
                28.8 megapixels &mdash; any modern camera or design tool handles
                this comfortably.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPEG, the file weighs 8-12&nbsp;MB &mdash; well under
                Etsy&apos;s 20&nbsp;MB limit per download file, even when
                bundled with other sizes in a ZIP.
              </p>
              <p className="text-foreground-60">
                The 4:5 aspect ratio (width is 80% of height) determines which
                other sizes share the same proportions. This matters because you
                can scale between all 4:5 sizes without cropping &mdash; your
                full artwork composition is preserved at every size. For more on
                ratios, see{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- Why Premium --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 16×20 Is a Premium Etsy Size
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Large Enough for Impact
                  </h3>
                  <p className="text-foreground-60">
                    16×20 creates visual presence in living rooms and bedrooms.
                    It&apos;s large enough to be a focal point without requiring
                    professional framing equipment. Buyers perceive this size as
                    a significant piece &mdash; not a throwaway print.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Standard Frame Availability
                  </h3>
                  <p className="text-foreground-60">
                    16×20 frames are stocked at IKEA, Target, Michaels, and
                    Amazon. Buyers don&apos;t need custom framing or expensive
                    gallery presentation. Low friction means higher conversion
                    rates and fewer support questions about frame fit.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Price Point Sweet Spot
                  </h3>
                  <p className="text-foreground-60">
                    Most Etsy sellers price 16×20 digital downloads between
                    $8–20. Buyers perceive high value at this range without
                    purchase hesitation. Including 16×20 in your listing
                    differentiates you from competitors who stop at 8×10.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- 4:5 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 4:5 Ratio Family — What Sizes Come With 16×20
              </h2>
              <p className="text-foreground-60 mb-6">
                16×20 belongs to the 4:5 aspect ratio family. All sizes in this
                group maintain identical proportions, so you can scale up or
                down from the same source file without cropping. Buyers expect
                to receive all of these in one download.
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
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8×10
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400 × 3000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        #1 standard frame size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12×15</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 × 4500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Mid-size statement piece
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">16×20</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 × 6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large wall art, gallery frames
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20×25</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 × 7500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized focal point
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">24×30</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 × 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Maximum size for most printers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                When a competitor offers &ldquo;16×20 only&rdquo; and your
                listing includes all five 4:5 sizes, yours appears to have
                higher value at the same price. Buyers perceive five products
                instead of one.
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
                  Skip the Manual Resizing
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Get 16×20 and all other 4:5 sizes at
                  300&nbsp;DPI &mdash; organized, named, and under 20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All 4:5 Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- File Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Format, Color Profile &amp; Naming
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPEG is the standard for Etsy print files. It keeps file
                    sizes manageable (8-12&nbsp;MB for 16×20) while maintaining
                    full print quality. Avoid PNG for print files: they&apos;re
                    15-20&nbsp;MB for this size with no visible benefit when
                    printed. PNG bloat risks hitting the 20&nbsp;MB limit when
                    packaging multiple sizes. For more on file size management,
                    see{" "}
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
                    services expect it. Files in Adobe RGB or ProPhoto RGB will
                    shift colors during printing &mdash; reds go orange, blues
                    go purple. In Photoshop: Edit &rarr; Convert to Profile
                    &rarr; sRGB IEC61966-2.1. For more on print quality, see{" "}
                    <Link
                      href="/best-resolution-for-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      best resolution for Etsy printables
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use clear names like{" "}
                    <code className="text-accent-light">
                      artwork_16x20_300dpi.jpg
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
              </Card>
            </div>

            {/* --- Framing & Display --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Display Options for 16×20
              </h2>
              <p className="text-foreground-60 mb-6">
                16×20 prints fit directly into standard 16×20 frames with no mat
                required. For gallery presentation, the most common setups are
                matting in 20×24 or 24×30 frames, or using floating frames that
                add depth without matting. Mentioning these options in your
                listing description reduces buyer questions and increases
                perceived value.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame Options
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">16×20 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Direct fit, budget-friendly
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      20×24 frame + 16×20 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Most popular matted option
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      24×30 frame + 16×20 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wider border, gallery look
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Floating frame (16×20)
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Modern depth, no mat needed
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
                    Add &ldquo;Fits any standard 16×20 frame (IKEA, Target,
                    Amazon). For gallery presentation, mat in a 20×24 or 24×30
                    frame.&rdquo; to your Etsy description. This single line
                    increases buyer confidence and reduces support messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 16×20 Files
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
                        72 DPI is screen resolution. A 16×20 at 72 DPI is only
                        1152×1440 pixels &mdash; prints will be pixelated and
                        blurry. Always check your export settings before saving.
                        The file must be 4800×6000 pixels. For more on DPI
                        requirements, see{" "}
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
                        Cropping a different ratio to fit 16×20
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Cropping a 2:3 or 3:4 design to 4:5 cuts off parts of
                        the artwork. Buyers expect the full composition shown in
                        your listing preview. Design at 4:5 from the start, or
                        use a tool like{" "}
                        <Link
                          href="/how-to-resize-images-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          SnapToSize that generates 4:5 sizes without cropping
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
                        Using PNG instead of JPEG
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        PNG files at 16×20 / 300 DPI balloon to 15-20&nbsp;MB
                        with no visible print quality benefit. This wastes ZIP
                        space and risks hitting Etsy&apos;s 20&nbsp;MB limit.
                        Always use JPEG for print files.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong color profile causing print color shifts
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

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Avoid Export Errors
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Get pixel-perfect 16×20 files (and the full 4:5 pack) in
                  seconds. No Photoshop expertise required.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- 16×20 vs Other Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                16×20 vs Other Popular Large Sizes
              </h2>
              <p className="text-foreground-60 mb-6">
                16×20 is not the only large size buyers request, but it belongs
                to a specific ratio family. Understanding the difference between
                size and ratio helps you package listings properly.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">16×20</td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 × 6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Traditional art, portrait orientation
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">16×24</td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 × 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Wall art, poster format
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4"><Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">18×24</Link></td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400 × 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Classic photo format
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Buyers don&apos;t just need multiple sizes &mdash; they need
                multiple ratios. A 16×20 (4:5) and a 16×24 (2:3) are not
                interchangeable. Position 16×20 as part of a comprehensive ratio
                offering, not a standalone product. For a full comparison, see{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5×7 print size guide
                </Link>
                {" "}(another popular size in a different ratio).
              </p>
            </div>

            {/* --- How to Create Without Manual Resizing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create 16×20 Without Manual Resizing
              </h2>
              <p className="text-foreground-60 mb-6">
                Manually resizing to 4800×6000 in Photoshop or Canva takes time,
                risks export errors, and requires technical knowledge of DPI
                settings. Multiply this across five 4:5 sizes (8×10, 12×15,
                16×20, 20×25, 24×30) and you&apos;re spending 1-3 hours per
                artwork just preparing files.
              </p>

              <Card className="p-6 md:p-8 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  The Manual Workflow Problem
                </h3>
                <ul className="space-y-2 text-foreground-60">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span>
                      Resize each size manually in Photoshop or Canva
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span>
                      Set correct DPI for each export (easy to forget)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Convert color profile to sRGB for each file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Name files professionally (manual typing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Package into ZIP and verify under 20 MB</span>
                  </li>
                </ul>
                <p className="text-foreground-60 text-sm mt-4">
                  This process takes 1-3 hours per artwork. For sellers with
                  50+ listings, that&apos;s 50-150 hours of manual work. For a
                  step-by-step breakdown of this workflow, see{" "}
                  <Link
                    href="/how-to-resize-images-for-etsy"
                    className="text-accent-light hover:underline"
                  >
                    how to resize images for Etsy
                  </Link>
                  .
                </p>
              </Card>

              <Card className="p-6 md:p-8 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-semibold mb-4">
                  SnapToSize Automates This Entirely
                </h3>
                <ul className="space-y-2 text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Upload once &rarr; get all 4:5 sizes (8×10, 12×15, 16×20,
                      20×25, 24×30)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>300 DPI guaranteed on every file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>sRGB color profile automatically applied</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Professional file naming (artwork_16x20_300dpi.jpg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Organized ZIP under 20 MB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Processing time: 10-30 seconds (not 1-3 hours)
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Get All 4:5 Sizes in One Click"
                stat="All 4:5 sizes from a single upload"
                description="Upload your artwork and instantly receive 8×10, 12×15, 16×20, 20×25, and 24×30 at 300 DPI. No cropping, no manual resizing. Production-ready in seconds."
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
                      "What pixel dimensions do I need for a 16×20 print at 300 DPI?",
                    answer:
                      "Exactly 4800×6000 pixels. Multiply each dimension by 300: 16×300 = 4800 pixels wide, 20×300 = 6000 pixels tall. As a JPEG, the file weighs 8-12 MB — well under Etsy's 20 MB limit.",
                  },
                  {
                    question: "What aspect ratio is 16×20?",
                    answer:
                      "4:5 (or 0.8 as a decimal). This ratio is shared with 8×10, 12×15, 20×25, and 24×30. All these sizes can be scaled from the same source file without any cropping.",
                  },
                  {
                    question: "Does 16×20 fit a standard frame?",
                    answer:
                      "Yes — 16×20 is a standard frame size available at IKEA, Target, Amazon, and Michaels. It can also be matted inside 20×24 or 24×30 frames for gallery-style presentation.",
                  },
                  {
                    question:
                      "What file format should I use for 16×20 Etsy prints?",
                    answer:
                      "JPEG at 300 DPI with sRGB color profile. JPEG keeps file sizes manageable (8-12 MB). Avoid PNG for print files — it creates 15-20 MB files with no print quality benefit, wasting ZIP space and risking the 20 MB limit.",
                  },
                  {
                    question: "Should I include bleed for 16×20 prints?",
                    answer:
                      "Not for home printing — buyers print to exact dimensions. If your customers use professional print services, you can optionally add 0.125\" bleed on all sides, making the file 4875×6075 pixels at 300 DPI.",
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
            <RelatedPages currentSlug="etsy-16x20-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
