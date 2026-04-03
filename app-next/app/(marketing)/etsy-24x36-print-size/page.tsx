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
  title: "24×36 Print Size for Etsy — Pixels, DPI & Large Format Setup",
  description:
    "24×36 is the largest standard poster size. Get exact pixel dimensions at 300 DPI (7200×10800), 2:3 ratio specs, file format rules, and framing tips for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-24x36-print-size" },
  openGraph: {
    title:
      "24×36 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 24×36 print guide for Etsy sellers. Exact pixels at 300 DPI, 2:3 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-24x36-print-size",
    images: [
      {
        url: "/assets/og/etsy-24x36-print-size.png",
        width: 1200,
        height: 630,
        alt: "24×36 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24×36 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 24×36 print guide for Etsy sellers. 7200×10800 pixels at 300 DPI, 2:3 ratio, and large format file setup.",
    images: ["/assets/og/etsy-24x36-print-size.png"],
  },
};

export default function Etsy24x36PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "24×36 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 24×36 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 2:3 ratio specs, and large format file requirements.",
    url: "https://snaptosize.com/etsy-24x36-print-size",
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
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
        name: "24×36 Print Size",
        item: "https://snaptosize.com/etsy-24x36-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for a 24×36 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 24×36 inch print at 300 DPI requires exactly 7200×10800 pixels. Multiply each dimension by 300: 24×300=7200, 36×300=10800. As a JPEG with sRGB color profile, the file stays well under Etsy's 20MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 24×36?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "24×36 has a 2:3 aspect ratio (0.667 decimal). This is the same ratio as DSLR cameras and includes 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, and 24×36. All can be scaled from the same source file without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Are 24×36 frames easy to find?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 24×36 is the standard poster frame size, available at Target, Walmart, Amazon, IKEA, and Michaels. It's one of the most common large-format frame sizes. Buyers can also mat a 24×36 print in a 30×40 frame for a gallery look.",
        },
      },
      {
        "@type": "Question",
        name: "Will my 24×36 file exceed Etsy's 20MB limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPEG at 300 DPI keeps file sizes well under Etsy's 20MB limit. PNG at this size often exceeds 20MB and should be avoided. Use JPEG with sRGB color profile for all large-format print files.",
        },
      },
      {
        "@type": "Question",
        name: "Should I offer 24×36 alone or in a bundle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 2:3 pack includes 7 sizes: 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, and 20×30. Export 24×36 separately via single export. Buyers expect multiple sizes in digital downloads, and bundling increases perceived value at the same price point.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_24x36&kind=guide";

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
      <section className="relative py-14 md:py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
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

        {/* 2:3 Frame blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame */}
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
                24 in &middot; 7200 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                36 in &middot; 10800 px
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
                24×36 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the largest
                standard poster size explained
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              7200×10800 pixels. 2:3 aspect ratio. Standard poster frame size.
              Here&apos;s everything you need to set up 24×36 digital downloads
              that sell &mdash; plus the full 2:3 ratio pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 2:3 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; export 24×36 via single export, or download the 2:3 pack with 7 sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  7200×10800 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  2:3 aspect ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
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
            <QuickAnswer question="What pixel dimensions for 24×36 at 300 DPI?">
              <strong>7200 × 10800 pixels</strong>. 24×36 is the standard poster size — available as single export only (not included in ratio packs).
            </QuickAnswer>

            {/* --- Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                24×36 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">24 × 36 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">7200 × 10800 px</span>
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
                    <span className="font-semibold">JPG / JPEG, sRGB</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math is straightforward: multiply each dimension in inches by
                300. 24&nbsp;×&nbsp;300&nbsp;=&nbsp;7200 pixels wide,
                36&nbsp;×&nbsp;300&nbsp;=&nbsp;10800 pixels tall. This is the
                largest size in the 2:3 ratio family.
              </p>
              <p className="text-foreground-60 mb-4">
                At this resolution, you have 77.7 million pixels total. Any modern
                DSLR or mirrorless camera captures this easily, and most digital
                artwork exports at these dimensions without issue.
              </p>
              <p className="text-foreground-60">
                The 2:3 aspect ratio matches DSLR camera sensors (width is 66.7%
                of height). This means photos from Canon, Nikon, Sony, and Fuji
                cameras scale to 24×36 without any cropping &mdash; the full frame
                is preserved.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-24x36-size-comparison.png" alt="24×36 poster size comparison with 16×20, 18×24, and 20×30" width={1200} height={500} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- Why 24×36 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 24×36 Is Perfect for Etsy Wall Art
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Standard Poster Size
                  </h3>
                  <p className="text-foreground-60">
                    24×36 is <em>the</em> standard poster frame size. Every
                    major retailer stocks 24×36 frames: Target, Walmart, Amazon,
                    IKEA, Michaels. Buyers don&apos;t pay a premium or wait for
                    special orders &mdash; they can frame the print the same day.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Premium Pricing for Large Prints
                  </h3>
                  <p className="text-foreground-60">
                    Large-format prints command higher prices. A 24×36 digital
                    download sells for $8-15, compared to $4-8 for smaller sizes.
                    Including it in your 2:3 pack increases the perceived value of
                    the entire bundle without additional work.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Same Ratio as Photos &mdash; No Cropping
                  </h3>
                  <p className="text-foreground-60">
                    2:3 is the native aspect ratio for DSLR and mirrorless
                    cameras. If you&apos;re selling <Link href="/etsy-photography-print-sizes" className="text-accent-light hover:underline">photography prints</Link>,
                    24×36 preserves the full composition captured by the camera.
                    No cropping, no letterboxing, no black bars.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Upload Once, Get All 2:3 Sizes + 24×36 via Single Export
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  One upload gives you the 2:3 pack (4×6, 6×9, 8×12, 10×15,
                  12×18, 16×24, 20×30) at 300&nbsp;DPI, plus 24×36 via single
                  export &mdash; organized, named, and under 20&nbsp;MB.
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
                The 2:3 Ratio Family — All Sizes Related to 24×36
              </h2>
              <p className="text-foreground-60 mb-6">
                24×36 belongs to the 2:3 aspect ratio family. All sizes in this
                group maintain identical proportions, so you scale up or down from
                the same source file without cropping. The 2:3 pack includes
                seven sizes (4×6 through 20×30), and 24×36 is available via
                single export.
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
                      <td className="py-3 px-4">4×6</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1200 × 1800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo prints, small frames
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6×9</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1800 × 2700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo matting, greeting cards
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
                      <td className="py-3 px-4"><Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18</Link></td>
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
                      <td className="py-3 px-4"><Link href="/etsy-20x30-print-size" className="text-accent-light hover:underline">20×30</Link></td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 × 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized statement piece
                      </td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="py-3 px-4 font-semibold">24×36<span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">Popular</span></td>
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
                When a competitor offers &ldquo;24×36 only&rdquo; and your
                listing includes all seven 2:3 pack sizes plus 24×36 via
                single export, yours appears to have much more value at the
                same price. Buyers perceive a complete size range instead of
                a single file.
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
                File Format &amp; the 20MB Challenge
              </h2>

              <p className="text-foreground-60 mb-6">
                24×36 at 300 DPI creates large files. JPG (also called JPEG) is
                the right choice here &mdash; PNG at this size often exceeds
                Etsy&apos;s 20MB limit.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6 bg-green-500/10 border-green-500/20">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Use JPG / JPEG at 300 DPI
                      </h3>
                      <p className="text-foreground-60">
                        JPEG keeps file sizes well under Etsy&apos;s 20MB limit
                        while maintaining full print quality. At 7200×10800 pixels,
                        a JPEG with standard settings stays manageable for Etsy
                        uploads and buyer downloads.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Avoid PNG for 24×36
                      </h3>
                      <p className="text-foreground-60">
                        PNG at this size often exceeds 20MB, especially for
                        complex artwork or photography. Etsy will reject the
                        upload. PNG has no visible quality benefit for prints
                        &mdash; it&apos;s designed for web graphics with
                        transparency, not large-format printing.
                      </p>
                    </div>
                  </div>
                </Card>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    sRGB Color Profile
                  </h3>
                  <p className="text-foreground-60">
                    Embed sRGB in every file. Most home printers and online print
                    services expect sRGB. Files in Adobe RGB or ProPhoto RGB shift
                    colors during printing &mdash; reds turn orange, blues go
                    purple. In Photoshop: Edit &rarr; Convert to Profile &rarr;
                    sRGB IEC61966-2.1.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use descriptive names like{" "}
                    <code className="text-accent-light">
                      artwork_24x36_300dpi.jpg
                    </code>
                    . Large files mean large downloads &mdash; buyers should find
                    the right file instantly without guessing. Avoid generic names
                    like &ldquo;large.jpg&rdquo; or &ldquo;poster.jpg&rdquo;.
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
                    <span>Use JPEG, not PNG, for all 24×36 files</span>
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
                      Group by ratio pack &mdash; one ZIP per ratio stays under
                      20 MB
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
                  . For resolution guidance, see{" "}
                  <Link
                    href="/best-resolution-for-etsy-printables"
                    className="text-accent-light hover:underline"
                  >
                    best resolution for Etsy printables
                  </Link>
                  .
                </p>
              </Card>
            </div>

            {/* --- Framing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Display &mdash; What Buyers Need to Know
              </h2>
              <p className="text-foreground-60 mb-6">
                24×36 prints fit directly into standard 24×36 poster frames with
                no mat required. For a gallery look with a border, buyers can mat
                a 24×36 print inside a 30×40 frame. Including this information in
                your Etsy listing reduces buyer questions and increases perceived
                professionalism.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Frame &amp; Mat Options
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">24×36 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Standard poster setup
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      30×40 frame + 24×36 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Gallery presentation
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Gallery wall placement</span>
                    <span className="text-foreground-60 text-sm">
                      Focal point or centerpiece
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                24×36 is large enough to anchor a gallery wall. Pair it with
                smaller sizes from the 2:3 pack (
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16×24
                </Link>
                ,{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8×12
                </Link>
                ,{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  4×6
                </Link>
                ) to create a cohesive multi-print layout. All sizes share the
                same 2:3 proportions, so they visually align. For a different
                ratio at a similar scale, see the{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18×24 (3:4 ratio)
                </Link>{" "}
                guide.
              </p>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Listing tip:
                    </strong>{" "}
                    Add &ldquo;Fits standard 24×36 poster frames (Target, IKEA,
                    Amazon). For gallery presentation, mat in a 30×40 frame.&rdquo;
                    to your Etsy description. This single line increases buyer
                    confidence and reduces support messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 24×36 Digital Prints
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Using 72 DPI instead of 300 DPI
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        72 DPI is screen resolution. A 24×36 at 72 DPI is only
                        1728×2592 pixels &mdash; prints will be severely
                        pixelated and blurry at poster size. Always export at
                        300 DPI. The file must be 7200×10800 pixels.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Offering only 24×36 without other 2:3 sizes
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Buyers expect multiple sizes in digital print downloads.
                        Listings with only 24×36 convert poorly compared to
                        competitors who include the full 2:3 family. Include all
                        seven pack sizes plus 24×36 via single export.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Using PNG format
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        PNG files at 24×36 and 300 DPI often exceed Etsy&apos;s
                        20MB limit. Etsy will reject the upload, or buyers
                        won&apos;t be able to download the file. Use JPEG for all
                        large-format print files.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong color profile (Adobe RGB or ProPhoto RGB)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Files in Adobe RGB or ProPhoto RGB display incorrect
                        colors when printed on most home printers and print
                        services &mdash; reds appear orange, blues shift purple.
                        Convert to sRGB before exporting. Every time.
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
                stat="7 pack sizes plus 24×36 via single export from one upload"
                description="Upload your artwork and instantly receive the 2:3 pack (4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30) plus 24×36 via single export at 300 DPI. No cropping, no manual resizing. Production-ready in seconds."
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
                      "What pixel dimensions do I need for a 24×36 print at 300 DPI?",
                    answer:
                      "Exactly 7200×10800 pixels. Multiply each dimension by 300: 24×300 = 7200 pixels wide, 36×300 = 10800 pixels tall. As a JPEG with sRGB color profile, the file stays well under Etsy's 20MB limit.",
                  },
                  {
                    question: "What aspect ratio is 24×36?",
                    answer:
                      "2:3 (or 0.667 as a decimal). This is the same ratio as DSLR cameras and includes 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, and 24×36. All these sizes can be scaled from the same source file without any cropping.",
                  },
                  {
                    question: "Are 24×36 frames easy to find?",
                    answer:
                      "Yes — 24×36 is the standard poster frame size, available at every major retailer (Target, Walmart, Amazon, IKEA, Michaels). Buyers can also mat a 24×36 print in a 30×40 frame for a gallery-style presentation.",
                  },
                  {
                    question:
                      "Will my 24×36 file exceed Etsy's 20MB limit?",
                    answer:
                      "JPEG at 300 DPI keeps file sizes well under Etsy's 20MB limit. PNG at this size often exceeds 20MB and should be avoided. Use JPEG with sRGB color profile for all large-format print files.",
                  },
                  {
                    question:
                      "Should I offer 24×36 alone or in a bundle?",
                    answer:
                      "The 2:3 pack includes 7 sizes: 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, and 20×30. Export 24×36 separately via single export. Buyers expect multiple sizes in digital downloads, and bundling increases perceived value at the same price point.",
                  },
                ]}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Still exporting 24×36 files manually for every listing?"
                solution="Upload once, get 24×36 plus 29 other sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
                buttonText="Get All Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-24x36-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
