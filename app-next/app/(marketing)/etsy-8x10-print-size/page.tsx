import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCapture } from "@/components/EmailCapture";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "8×10 Print Size for Etsy — Pixels, DPI & File Setup",
  description:
    "8×10 is the #1 Etsy print size. Get exact pixel dimensions at 300 DPI (2400×3000), 4:5 ratio specs, file format rules, and framing tips for digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-8x10-print-size" },
  openGraph: {
    title:
      "8×10 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 8×10 print guide for Etsy sellers. Exact pixels at 300 DPI, 4:5 ratio family, file format rules, and framing tips.",
    url: "https://snaptosize.com/etsy-8x10-print-size",
    images: [
      {
        url: "/assets/og/etsy-8x10-print-size.png",
        width: 1200,
        height: 630,
        alt: "8×10 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "8×10 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 8×10 print guide for Etsy sellers. 2400×3000 pixels at 300 DPI, 4:5 ratio, and file setup.",
    images: ["/assets/og/etsy-8x10-print-size.png"],
  },
};

export default function Etsy8x10PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "8×10 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 8×10 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 4:5 ratio specs, and file requirements.",
    url: "https://snaptosize.com/etsy-8x10-print-size",
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
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
        name: "8×10 Print Size",
        item: "https://snaptosize.com/etsy-8x10-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for an 8×10 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An 8×10 inch print at 300 DPI requires exactly 2400×3000 pixels. Multiply each dimension by 300: 8×300=2400, 10×300=3000. As a JPEG, the file weighs 3-4MB — well under Etsy's 20MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 8×10?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8×10 has a 4:5 aspect ratio (0.8 decimal). Other sizes in this ratio family include 12×15, 16×20, 20×25, and 24×30. All can be scaled from the same source file without cropping.",
        },
      },
      {
        "@type": "Question",
        name: "Does 8×10 fit a standard frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 8×10 is one of the most common standard frame sizes, stocked at Target, Walmart, IKEA, Amazon, and Michaels. It can also be matted inside an 11×14 frame for a gallery look.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 8×10 Etsy prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use JPEG at 300 DPI with sRGB color profile. JPEG balances quality and file size. Avoid PNG for print files — it creates 5-10x larger files with no visible quality benefit for prints.",
        },
      },
      {
        "@type": "Question",
        name: "How do I avoid the 20MB limit with high-res 8×10 files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An 8×10 JPEG stays under 4MB. Even bundled in a ZIP with all five 4:5 sizes, the total is typically under 15MB. Use JPEG instead of PNG, and tools like SnapToSize auto-optimize every file to stay under the limit.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include bleed for 8×10 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For home printing, no bleed is needed. For professional print services, add 0.125 inch bleed on all sides, making the file 2475×3075 pixels at 300 DPI.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_8x10&kind=guide";

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
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
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
            style={{ width: "240px", height: "300px" }}
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
                8 in &middot; 2400 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                10 in &middot; 3000 px
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
                8×10 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the #1 selling
                print size explained
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              2400×3000 pixels. 4:5 aspect ratio. Fits every standard frame.
              Here&apos;s everything you need to set up 8×10 digital downloads
              that sell &mdash; plus the full 4:5 ratio pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All 4:5 Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 8×10 + four more 4:5 sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  2400×3000 px at 300 DPI
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
                8×10 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">8 × 10 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">2400 × 3000 px</span>
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
                    <span className="font-semibold">3–4 MB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Megapixels</span>
                    <span className="font-semibold">7.2 MP</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math is simple: multiply each dimension in inches by 300.
                8&nbsp;×&nbsp;300&nbsp;=&nbsp;2400 pixels wide,
                10&nbsp;×&nbsp;300&nbsp;=&nbsp;3000 pixels tall. That gives you
                7.2 megapixels &mdash; any camera or design tool from the last
                decade handles this comfortably.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPEG, the file weighs 3-4&nbsp;MB &mdash; well under
                Etsy&apos;s 20&nbsp;MB limit per download file, even when
                bundled with other sizes in a ZIP.
              </p>
              <p className="text-foreground-60">
                The 4:5 aspect ratio (width is 80% of height) determines which
                other sizes share the same proportions. This matters because you
                can scale between all 4:5 sizes without cropping &mdash; your
                full artwork composition is preserved at every size.
              </p>
            </div>

            {/* --- Why #1 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 8×10 Is the #1 Etsy Print Size
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Frames Are Everywhere
                  </h3>
                  <p className="text-foreground-60">
                    8×10 frames are stocked at Target, Walmart, IKEA, Amazon,
                    Michaels &mdash; every major retailer. Buyers don&apos;t
                    need to special order or pay premium prices. This removes a
                    major friction point from the purchase decision.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Sweet Spot for Price and Impact
                  </h3>
                  <p className="text-foreground-60">
                    Large enough to make a statement on a wall, small enough
                    that buyers purchase multiples. Most sellers price 8×10
                    digital downloads between $5-12, which converts
                    significantly better than larger-only offerings.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Eliminates &ldquo;Do You Have This in&hellip;?&rdquo;
                    Messages
                  </h3>
                  <p className="text-foreground-60">
                    &ldquo;Do you have this in 8×10?&rdquo; is the single most
                    common size request Etsy sellers receive. Including 8×10 in
                    every listing eliminates these messages and converts
                    browsers into buyers immediately.
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
                  Upload your artwork once. Get 8×10 and all other 4:5 sizes at
                  300&nbsp;DPI &mdash; organized, named, and under 20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All 4:5 Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- 4:5 Ratio Family --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 4:5 Ratio &mdash; What Other Sizes Come With 8×10
              </h2>
              <p className="text-foreground-60 mb-6">
                8×10 belongs to the 4:5 aspect ratio family. All sizes in this
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
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">8×10</td>
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
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">16×20</td>
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
                When a competitor offers &ldquo;8×10 only&rdquo; and your
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

            {/* --- CTA 2 --- */}
            <div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate All 4:5 Sizes in Seconds
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
                    JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPEG is the standard for Etsy print files. It keeps file
                    sizes small while maintaining full print quality. Avoid PNG
                    for print files: they&apos;re 5-10× larger with no visible
                    benefit when printed.
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
                      artwork_8x10_300dpi.jpg
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
                8×10 prints fit directly into standard 8×10 frames with no mat
                required. For a gallery look, the most common setup is an 8×10
                print matted inside an 11×14 frame. Mentioning this in your
                listing description reduces buyer questions and increases
                perceived value.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">8×10 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Budget-friendly, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      11×14 frame + 8×10 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Most popular matted option
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      12×16 frame + 8×10 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wider border, more dramatic
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      16×20 frame + 8×10 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Maximum mat, statement piece
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
                    Add &ldquo;Fits any standard 8×10 frame (Target, IKEA,
                    Amazon). For a gallery look, mat in an 11×14 frame.&rdquo;
                    to your Etsy description. This single line increases buyer
                    confidence and reduces support messages.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 8×10 Digital Prints
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
                        72 DPI is screen resolution. An 8×10 at 72 DPI is only
                        576×720 pixels &mdash; prints will be pixelated and
                        blurry. Always check your export settings before saving.
                        The file must be 2400×3000 pixels.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Cropping a different ratio to fit 8×10
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Cropping a 2:3 or 3:4 design to 4:5 cuts off parts of
                        the artwork. Buyers expect the full composition shown in
                        your listing preview. Design at 4:5 from the start, or
                        use a tool that generates 4:5 sizes without cropping.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Offering only 8×10 without other sizes
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Buyers expect multiple sizes in digital print downloads.
                        Listings with only 8×10 convert poorly compared to
                        competitors who include the full 4:5 family. Include
                        8×10, 12×15, 16×20, 20×25, and 24×30.
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
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Get All 4:5 Sizes in One Click
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork and instantly receive 8×10, 12×15, 16×20,
                  20×25, and 24×30 at 300&nbsp;DPI. No cropping, no manual
                  resizing. Production-ready in seconds.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Start Free — Generate Sizes Now
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-2">
                  No credit card required. Free plan includes watermarked
                  exports.
                </p>
              </Card>
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
                      "What pixel dimensions do I need for an 8×10 print at 300 DPI?",
                    answer:
                      "Exactly 2400×3000 pixels. Multiply each dimension by 300: 8×300 = 2400 pixels wide, 10×300 = 3000 pixels tall. As a JPEG, the file weighs 3-4 MB — well under Etsy's 20 MB limit.",
                  },
                  {
                    question: "What aspect ratio is 8×10?",
                    answer:
                      "4:5 (or 0.8 as a decimal). This ratio is shared with 12×15, 16×20, 20×25, and 24×30. All these sizes can be scaled from the same source file without any cropping.",
                  },
                  {
                    question: "Does 8×10 fit a standard frame?",
                    answer:
                      "Yes — 8×10 is one of the most common frame sizes available at every major retailer (Target, Walmart, IKEA, Amazon, Michaels). It can also be matted inside an 11×14 frame for a gallery-style presentation.",
                  },
                  {
                    question:
                      "What file format should I use for 8×10 Etsy prints?",
                    answer:
                      "JPEG at 300 DPI with sRGB color profile. JPEG provides the best balance of quality and file size. Avoid PNG for print files — it creates 5-10× larger files with no visible quality benefit for prints.",
                  },
                  {
                    question:
                      "How do I avoid the 20 MB limit with high-res 8×10 files?",
                    answer:
                      "An 8×10 JPEG stays under 4 MB. Even bundled in a ZIP with all five 4:5 sizes, the total is typically under 15 MB. Use JPEG (not PNG), and tools like SnapToSize auto-optimize every file to stay under the limit.",
                  },
                  {
                    question: "Should I include bleed for 8×10 prints?",
                    answer:
                      "Not for home printing — buyers print to exact dimensions. If your customers use professional print services, you can optionally add 0.125\" bleed on all sides, making the file 2475×3075 pixels at 300 DPI.",
                  },
                ]}
              />
            </div>

            {/* --- Email Capture --- */}
            <div>
              <Card accent className="p-6 md:p-8">
                <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Free Etsy Print Size Cheat Sheet
                  </h3>
                  <p className="text-sm text-foreground-60 mb-5">
                    All Etsy ratios and pixel dimensions at 300 DPI in one PDF.
                    Plus file naming conventions and best practices.
                  </p>
                  <EmailCapture
                    placeholder="Enter your email"
                    buttonText="Get Free Cheat Sheet"
                  />
                </div>
              </Card>
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-8x10-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
