import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import {
  Check,
  AlertTriangle,
  ArrowRight,
  Clock,
  Zap,
  Monitor,
  Printer,
} from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCapture } from "@/components/EmailCapture";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title:
    "How to Resize Images for Etsy Digital Downloads (Without Losing Quality)",
  description:
    "Learn how to resize images for Etsy printables at 300 DPI. Covers listing photos vs digital download files, pixel dimensions for every print size, and batch resizing for multiple sizes.",
  alternates: {
    canonical: "https://snaptosize.com/how-to-resize-images-for-etsy",
  },
  openGraph: {
    title: "How to Resize Images for Etsy — Complete Guide | SnapToSize",
    description:
      "Resize images for Etsy digital downloads without losing quality. Exact pixel dimensions, DPI settings, and batch resizing for 30 print sizes.",
    url: "https://snaptosize.com/how-to-resize-images-for-etsy",
    images: [
      {
        url: "/assets/og/how-to-resize-images-for-etsy.png",
        width: 1200,
        height: 630,
        alt: "How to Resize Images for Etsy Digital Downloads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Resize Images for Etsy Digital Downloads (Without Losing Quality)",
    description:
      "Exact pixel dimensions for every Etsy print size at 300 DPI. Plus batch resizing methods that save hours.",
    images: ["/assets/og/how-to-resize-images-for-etsy.png"],
  },
};

export default function HowToResizeImagesForEtsyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Resize Images for Etsy Digital Downloads",
    description:
      "Step-by-step guide to resizing images for Etsy printables at 300 DPI without losing quality. Covers listing photos, digital download files, and batch resizing.",
    url: "https://snaptosize.com/how-to-resize-images-for-etsy",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Start with the largest size you need",
        text: "Design or photograph at the highest resolution possible. For Etsy printables, your source file should be at least 7200×10800 pixels (24×36 at 300 DPI) to cover all print sizes.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Calculate pixel dimensions for each print size",
        text: "Multiply each print dimension in inches by 300 to get pixel dimensions. For example: 8×10 inches = 2400×3000 pixels, 16×20 = 4800×6000 pixels.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Resize using the correct method",
        text: "Use Photoshop (Image > Image Size), Canva, GIMP, or an automated tool like SnapToSize. Always maintain aspect ratio — never stretch to fit a different ratio.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Export as JPEG at 300 DPI",
        text: "Save each resized file as JPEG at 300 DPI with sRGB color profile. Use clear file names like artwork_8x10_300dpi.jpg.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Organize into ratio pack ZIPs",
        text: "Group files by aspect ratio into separate ZIP files. Each ZIP stays under Etsy's 20MB limit. Upload all ZIPs to your listing.",
      },
    ],
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
        name: "Seller Guides",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Resize Images for Etsy",
        item: "https://snaptosize.com/how-to-resize-images-for-etsy",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What size should images be for Etsy digital downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For digital download print files, use 300 DPI and calculate pixels by multiplying inches × 300. Common sizes: 5×7 = 1500×2100px, 8×10 = 2400×3000px, 11×14 = 3300×4200px, 16×20 = 4800×6000px, 24×36 = 7200×10800px. For listing photos (the images buyers see when browsing), use at least 2000×2000 pixels.",
        },
      },
      {
        "@type": "Question",
        name: "How do I resize without losing quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always scale down from a larger source file, never scale up. Use bicubic or Lanczos resampling (not nearest-neighbor). Keep your source file at the highest resolution possible — at least 7200×10800 pixels for full coverage. Export as JPEG at 300 DPI with sRGB color profile.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between listing photos and digital download files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Listing photos are the images buyers see when browsing your shop — Etsy recommends 2000×2000px at 72 DPI. Digital download files are the actual products buyers receive after purchase — these must be print-ready at 300 DPI. They have completely different requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resize a 2:3 image to 8×10 without cropping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. 2:3 and 4:5 (8×10) are different aspect ratios. Resizing without cropping would distort the image. You need separate files for each ratio, or use a tool like SnapToSize that generates all ratios from one source image using intelligent stretch-only resizing.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to resize images for all Etsy print sizes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manually resizing one artwork into 30 print sizes across 5 ratios takes 1-3 hours in Photoshop or Canva. This includes calculating pixel dimensions, resizing each file, exporting with correct settings, naming files, and organizing into ZIP packs. Automated tools like SnapToSize do this in under 30 seconds.",
        },
      },
      {
        "@type": "Question",
        name: "What DPI should Etsy digital downloads be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "300 DPI is the professional standard for print files. This ensures sharp, detailed output when buyers print your artwork. Never use 72 DPI (screen resolution) or 150 DPI (draft quality) for printable downloads — buyers will get blurry results.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_resize_guide&kind=guide";

  /* Size reference data — exact SnapToSize output sizes */
  const sizeTable = [
    { size: "4×6", px: "1200 × 1800", ratio: "2:3" },
    { size: "5×7", px: "1500 × 2100", ratio: "Extras" },
    { size: "8×10", px: "2400 × 3000", ratio: "4:5" },
    { size: "8.5×11", px: "2550 × 3300", ratio: "Extras" },
    { size: "11×14", px: "3300 × 4200", ratio: "Extras", href: "/etsy-11x14-print-size" },
    { size: "12×18", px: "3600 × 5400", ratio: "2:3" },
    { size: "16×20", px: "4800 × 6000", ratio: "4:5" },
    { size: "18×24", px: "5400 × 7200", ratio: "3:4" },
    { size: "24×36", px: "7200 × 10800", ratio: "2:3" },
    { size: "A4", px: "2480 × 3508", ratio: "ISO", href: "/etsy-a4-print-size" },
  ];

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
        className="relative py-14 md:py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #030712 0%, #0c1222 35%, #0a0f1e 70%, #030712 100%)",
        }}
      >
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient accents */}
        <div
          className="absolute top-[-10%] left-[55%] w-[600px] h-[600px] rounded-full opacity-[0.09]"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />
        {/* Top edge glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3) 50%, transparent)",
          }}
        />

        {/* Resize visualization — right side */}
        <div className="absolute right-[4%] top-[52%] -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          {/* Source frame */}
          <div className="relative" style={{ width: "180px", height: "220px" }}>
            <div className="absolute inset-0 border-2 border-purple-400/20 rounded-lg bg-purple-500/[0.03]" />
            <div className="absolute inset-3 border border-dashed border-purple-400/15 rounded-md" />
            {/* Corner markers */}
            {[
              "top-0 left-0 border-t-2 border-l-2 rounded-tl-lg",
              "top-0 right-0 border-t-2 border-r-2 rounded-tr-lg",
              "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-lg",
              "bottom-0 right-0 border-b-2 border-r-2 rounded-br-lg",
            ].map((pos) => (
              <div key={pos} className={`absolute ${pos} w-5 h-5 border-purple-400/40`} />
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <span className="text-[10px] font-mono text-purple-300/50 tracking-[0.15em] uppercase">
                Your Artwork
              </span>
              <span className="text-[11px] font-mono text-white/25">
                High-Res Source
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-3 bg-gradient-to-b from-purple-400/40 to-purple-400/15" />
            <ArrowRight className="w-4 h-4 text-purple-400/40 rotate-90" />
          </div>

          {/* Output frames row */}
          <div className="flex items-end gap-1.5">
            {[
              { w: 22, h: 28, label: "4×6" },
              { w: 26, h: 32, label: "5×7" },
              { w: 30, h: 38, label: "8×10" },
              { w: 38, h: 47, label: "11×14" },
              { w: 44, h: 55, label: "16×20" },
            ].map((frame) => (
              <div
                key={frame.label}
                className="border border-purple-400/30 rounded flex items-end justify-center pb-0.5 bg-purple-500/[0.05]"
                style={{ width: `${frame.w}px`, height: `${frame.h}px` }}
              >
                <span className="text-[5.5px] font-mono text-purple-300/50">
                  {frame.label}
                </span>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div className="px-3 py-1 rounded-full border border-purple-400/20 bg-purple-500/[0.06]">
            <span className="text-[9px] font-mono text-purple-300/60 tracking-wider">
              → 30 SIZES IN SECONDS
            </span>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-purple-500/50" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/70 uppercase">
                Seller Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-4">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1 text-white">
                How to Resize Images for Etsy
              </span>
              <span className="block text-lg md:text-2xl lg:text-3xl font-semibold text-purple-200/80">
                Digital downloads that print sharp at every size
              </span>
            </h1>
            <p className="text-base text-white/60 mb-4 max-w-lg">
              Most Etsy sellers confuse listing photo sizes with digital download
              file sizes. This guide covers both &mdash; plus the exact pixel
              dimensions for every standard print size at 300&nbsp;DPI.
            </p>

            <div className="mb-3">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Resize All Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, get 30 print sizes in seconds.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "300 DPI guaranteed",
                "30 sizes, 5 ratios",
                "No quality loss",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]"
                >
                  <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                  <span className="text-xs text-white/70 font-medium">
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* --- Section 1: Listing Photos vs Digital Downloads --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Listing Photos vs. Digital Download Files &mdash; They&apos;re
                Not the Same
              </h2>
              <p className="text-foreground-60 mb-6">
                This is the #1 source of confusion for Etsy sellers. Listing
                photos and digital download files have completely different size
                requirements. Getting them mixed up leads to blurry prints,
                rejected uploads, and bad reviews.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold">Listing Photos</h3>
                  </div>
                  <p className="text-sm text-foreground-60 mb-3">
                    The images buyers see when browsing your shop.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">&#8226;</span>
                      <span>
                        Minimum 2000×2000 px (Etsy recommendation)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">&#8226;</span>
                      <span>72 DPI is fine (screen display only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">&#8226;</span>
                      <span>
                        Etsy compresses these automatically
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">&#8226;</span>
                      <span>Use mockups showing art in a frame</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Printer className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold">
                      Digital Download Files
                    </h3>
                  </div>
                  <p className="text-sm text-foreground-60 mb-3">
                    The actual product buyers receive after purchase.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>300 DPI required</strong> (print standard)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">&#8226;</span>
                      <span>Pixel dimensions vary by print size</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">&#8226;</span>
                      <span>
                        Each file must be under{" "}
                        <Link
                          href="/etsy-20mb-file-limit"
                          className="text-accent-light hover:underline"
                        >
                          20&nbsp;MB
                        </Link>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">&#8226;</span>
                      <span>Multiple sizes expected by buyers</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Common mistake:</strong>{" "}
                    Uploading 2000×2000px listing photos as your digital download
                    files. At 300 DPI, that&apos;s only 6.7×6.7 inches &mdash;
                    too small for anything except a small greeting card. Buyers
                    who print this at 8×10 get a blurry, pixelated result.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 2: Pixel Dimensions Table --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Exact Pixel Dimensions for Every Etsy Print Size
              </h2>
              <p className="text-foreground-60 mb-6">
                The formula is simple:{" "}
                <strong>inches × 300 = pixels at 300 DPI</strong>. Here are the
                most common sizes Etsy buyers expect:
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
                        Ratio Pack
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeTable.map((row, i) => (
                      <tr
                        key={row.size}
                        className={`border-b border-white/10 ${
                          row.size === "8×10" ? "bg-accent/5" : ""
                        }`}
                      >
                        <td className="py-3 px-4 font-semibold">{row.href ? <Link href={row.href} className="text-accent-light hover:underline">{row.size}</Link> : row.size}</td>
                        <td className="py-3 px-4 text-foreground-60 font-mono text-xs">
                          {row.px}
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          {row.ratio}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                This table covers the 10 most popular sizes. For the complete
                list of all 30 sizes across 5 ratio packs, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print sizes guide
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                Notice how sizes fall into{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  different aspect ratios
                </Link>
                . You can&apos;t resize an 8×10 (4:5) to a 12×18 (2:3) without
                cropping or distortion &mdash; they&apos;re different
                proportions. This is why professional sellers offer files in
                multiple ratios.
              </p>
            </div>

            {/* --- Section 3: Why Aspect Ratio Matters --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why You Can&apos;t Just &ldquo;Resize&rdquo; One File to Every
                Size
              </h2>
              <p className="text-foreground-60 mb-6">
                Different print sizes have different aspect ratios. Resizing
                between ratios forces you to either crop (losing parts of your
                artwork) or stretch (distorting proportions). Neither is
                acceptable for professional printables.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    The 30 sizes SnapToSize generates &mdash; organized into 5
                    ratio packs
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        ratio: "2:3",
                        sizes:
                          "4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36",
                        note: "8 sizes — photography standard (DSLR default)",
                      },
                      {
                        ratio: "3:4",
                        sizes: "6×8, 9×12, 12×16, 15×20, 18×24, 24×32",
                        note: "6 sizes — classic photo frame ratio",
                      },
                      {
                        ratio: "4:5",
                        sizes: "8×10, 12×15, 16×20, 20×25, 24×30",
                        note: "5 sizes — #1 selling ratio (frames everywhere)",
                      },
                      {
                        ratio: "ISO",
                        sizes: "A5, A4, A3, A2, A1, A0",
                        note: "6 sizes — international standard (EU/UK/AU)",
                      },
                      {
                        ratio: "Extras",
                        sizes: "5×7, 8.5×11, 11×14, 11×17, 20×24",
                        note: "5 sizes — common US sizes",
                      },
                    ].map((group) => (
                      <div
                        key={group.ratio}
                        className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                          <span className="text-accent-light font-semibold text-xs">
                            {group.ratio}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{group.sizes}</p>
                          <p className="text-xs text-foreground-60 mt-0.5">
                            {group.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                Each ratio requires its own source file. For one artwork across
                all 5 ratios, that&apos;s 30 individual files. This is why
                manual resizing takes 1-3 hours per artwork.
              </p>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-foreground-60" />
                  <span className="text-sm text-foreground-60">
                    1-3 hours manually
                  </span>
                  <ArrowRight className="w-4 h-4 text-foreground-60" />
                  <Zap className="w-5 h-5 text-accent-light" />
                  <span className="text-sm font-semibold text-accent-light">
                    30 seconds with SnapToSize
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Manual Resizing
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Get all 30 sizes across 5 ratios
                  &mdash; organized into ZIP packs, named professionally, every
                  file under 20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: The Manual Resizing Problem --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Manual Resizing Problem
              </h2>
              <p className="text-foreground-60 mb-6">
                You <em>can</em> resize manually in any image editor &mdash;
                open your file, change the dimensions, export, rename, repeat.
                The steps are straightforward. The problem isn&apos;t difficulty,
                it&apos;s volume:
              </p>

              <Card className="p-6 mb-6">
                <ol className="space-y-3 text-sm text-foreground-60 list-decimal list-inside">
                  <li>
                    Calculate pixel dimensions for each size (inches × 300)
                  </li>
                  <li>
                    Resize to exact pixels with correct resampling (Bicubic or
                    Lanczos, not Nearest Neighbor)
                  </li>
                  <li>
                    Export as JPEG at 300 DPI with sRGB color profile
                  </li>
                  <li>
                    Name each file professionally (e.g.,{" "}
                    <code className="text-accent-light">
                      artwork_8x10_300dpi.jpg
                    </code>
                    )
                  </li>
                  <li>Organize into ratio pack folders and ZIP each one</li>
                  <li>Verify every ZIP is under 20 MB</li>
                </ol>
                <p className="text-sm text-foreground-60 mt-4">
                  Repeat steps 1-4 for each of the 30 sizes. Then repeat the
                  entire process for every new artwork.
                </p>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground-60 text-sm">
                      <strong className="text-foreground">Time check:</strong>{" "}
                      Each size takes 2-5 minutes. For 30 sizes across 5 ratios,
                      that&apos;s 60-150 minutes per artwork. If you have 10
                      listings, that&apos;s 10-25 hours of resizing.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Section 5: Critical Settings --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                5 Settings You Must Get Right
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Resolution: 300 DPI (not 72 or 150)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        72 DPI is screen resolution. An 8×10 at 72 DPI is only
                        576×720 pixels &mdash; prints will be{" "}
                        <Link
                          href="/etsy-digital-download-not-selling"
                          className="text-accent-light hover:underline"
                        >
                          blurry and generate bad reviews
                        </Link>
                        . Always use 300 DPI for print files.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Color Profile: sRGB
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Adobe RGB and ProPhoto RGB shift colors when printed on
                        consumer printers. sRGB is the universal standard. In
                        Photoshop: Edit &rarr; Convert to Profile &rarr; sRGB
                        IEC61966-2.1.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Format: JPEG (not PNG)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        PNG creates files 5-10× larger with no visible print
                        quality improvement. A 24×36 PNG can be 65 MB &mdash;
                        far over{" "}
                        <Link
                          href="/etsy-20mb-file-limit"
                          className="text-accent-light hover:underline"
                        >
                          Etsy&apos;s 20 MB limit
                        </Link>
                        . JPEG at 300 DPI is the professional standard.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Resampling: Bicubic or Lanczos (not Nearest Neighbor)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Nearest Neighbor creates jagged edges. Bicubic Sharper
                        (Photoshop) or Lanczos (GIMP/SnapToSize) produces the
                        smoothest scaling with maximum sharpness preserved.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        File naming: Clear, professional names
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Use names like{" "}
                        <code className="text-accent-light">
                          artwork_8x10_300dpi.jpg
                        </code>
                        . Buyers should instantly find the right file. Avoid
                        generic names like &ldquo;print1.jpg&rdquo;. See our{" "}
                        <Link
                          href="/what-files-to-include-etsy-digital-download"
                          className="text-accent-light hover:underline"
                        >
                          file naming guide
                        </Link>{" "}
                        for best practices.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- Section 6: Batch Resizing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Batch Resizing: The Scalability Problem
              </h2>
              <p className="text-foreground-60 mb-6">
                Manual resizing works for your first listing. It doesn&apos;t
                scale. Here&apos;s the math:
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Sizes per artwork</span>
                    <span className="font-semibold">30 files</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Time per size (manual)
                    </span>
                    <span className="font-semibold">2-5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Time per artwork (manual)
                    </span>
                    <span className="font-semibold text-amber-400">
                      1-3 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      10 listings (manual)
                    </span>
                    <span className="font-semibold text-red-400">
                      10-30 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">
                      10 listings (SnapToSize)
                    </span>
                    <span className="font-semibold text-green-400">
                      5 minutes
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                Photoshop Actions can automate some of the process, but they
                don&apos;t handle different aspect ratios &mdash; they either
                crop or distort. Canva requires creating 30 separate designs per
                artwork.
              </p>
              <p className="text-foreground-60">
                Tools like SnapToSize solve this by generating all sizes from one
                upload. The output is organized into ratio pack ZIPs, each named
                professionally and guaranteed under 20&nbsp;MB.
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Resizing Manually
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once. Get 30 sizes across 5 ratio packs. 300 DPI, JPEG,
                  sRGB, professional naming, under 20 MB &mdash; all handled
                  automatically.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Try Free &mdash; No Credit Card
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 7: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Resizing Mistakes That Ruin Your Prints
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Scaling up a small image
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        You can&apos;t add pixels that don&apos;t exist.
                        Enlarging a 1000×1000px image to 7200×10800px creates a
                        blurry, pixelated mess. Always start with the largest
                        possible source file and scale down.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Ignoring aspect ratio when resizing
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Force-fitting a 2:3 photo into an 8×10 (4:5) frame
                        either crops the edges or stretches the image. Neither
                        looks professional. Generate separate files for each
                        ratio.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Saving at the wrong DPI
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        If your file has the right pixel dimensions but is tagged
                        as 72 DPI, some print services may scale it incorrectly.
                        Always verify the DPI metadata matches 300 in your export
                        settings.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Putting all 30 sizes in one ZIP
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        One giant ZIP exceeds Etsy&apos;s 20 MB limit and
                        confuses buyers. Organize into separate ZIP files by
                        ratio pack. See our{" "}
                        <Link
                          href="/etsy-20mb-file-limit"
                          className="text-accent-light hover:underline"
                        >
                          20 MB limit guide
                        </Link>{" "}
                        for the correct structure.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- Section 8: Source File Requirements --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Resolution Should Your Source File Be?
              </h2>
              <p className="text-foreground-60 mb-6">
                Your source file needs to be large enough to cover the biggest
                print size you want to offer. Here&apos;s the minimum for each
                tier:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  {
                    tier: "Basic (up to 8×10)",
                    min: "2400 × 3000 pixels",
                  },
                  {
                    tier: "Standard (up to 16×20)",
                    min: "4800 × 6000 pixels",
                  },
                  {
                    tier: "Full coverage (up to 24×36)",
                    min: "7200 × 10800 pixels",
                  },
                ].map((item) => (
                  <Card key={item.tier} className="p-4">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-sm">{item.tier}</p>
                      <span className="text-xs font-mono text-foreground-60">
                        {item.min}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              <p className="text-foreground-60">
                Most modern cameras (including smartphones from 2020+) capture at
                least 12 MP, which covers 8×10 and 16×20 comfortably. For
                24×36 coverage, use a DSLR/mirrorless camera or create artwork at
                high resolution in Procreate, Illustrator, or similar tools.
              </p>
            </div>

            {/* --- Section 9: What Buyers Expect --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Etsy Buyers Expect in Digital Download Listings
              </h2>
              <p className="text-foreground-60 mb-6">
                Competitive Etsy listings include multiple sizes across different
                ratios. Here&apos;s what{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-accent-light hover:underline"
                >
                  top-selling digital download shops
                </Link>{" "}
                include:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Multiple sizes (at minimum 5×7, 8×10, 11×14, 16×20)",
                  "All sizes at 300 DPI (print-ready, no upscaling needed)",
                  "JPEG format (universal, works at every print shop)",
                  "Organized ZIP files (one per ratio, clear naming)",
                  "Size guide in listing description (which files are included)",
                  "Mockup photos showing the art in a frame",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-foreground-60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-foreground-60">
                Listings that only include one or two sizes get{" "}
                <Link
                  href="/etsy-digital-download-not-selling"
                  className="text-accent-light hover:underline"
                >
                  fewer sales
                </Link>{" "}
                and more &ldquo;Do you have this in 8×10?&rdquo; messages. Including
                all standard sizes eliminates these friction points.
              </p>
            </div>

            {/* --- Final CTA --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Resize Once. Sell Everywhere.
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork and instantly receive 30 print-ready files
                  across 5 ratio packs. 300&nbsp;DPI, JPEG, sRGB, professional
                  naming &mdash; every file guaranteed under 20&nbsp;MB. No
                  Photoshop required.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Start Free &mdash; Generate Sizes Now
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
                      "What size should images be for Etsy digital downloads?",
                    answer:
                      "For digital download print files, use 300 DPI and calculate pixels by multiplying inches × 300. Common sizes: 5×7 = 1500×2100px, 8×10 = 2400×3000px, 11×14 = 3300×4200px, 16×20 = 4800×6000px, 24×36 = 7200×10800px. For listing photos (the images buyers see when browsing), use at least 2000×2000 pixels at 72 DPI.",
                  },
                  {
                    question: "How do I resize without losing quality?",
                    answer:
                      "Always scale down from a larger source file — never scale up. Use bicubic or Lanczos resampling (not nearest-neighbor). Keep your source file at the highest resolution possible. Export as JPEG at 300 DPI with sRGB color profile. Quality setting 90-95% is ideal.",
                  },
                  {
                    question:
                      "What is the difference between listing photos and digital download files?",
                    answer:
                      "Listing photos are the images buyers see when browsing your shop — Etsy recommends 2000×2000px at 72 DPI. Digital download files are the actual products buyers receive after purchase — these must be print-ready at 300 DPI with exact pixel dimensions for each print size.",
                  },
                  {
                    question:
                      "Can I resize a 2:3 image to 8×10 without cropping?",
                    answer:
                      "No. 2:3 and 4:5 (8×10) are different aspect ratios. Resizing without cropping would distort the image. You need separate files for each ratio, or use a tool like SnapToSize that generates all ratios from one source image using stretch-only resizing that preserves your full composition.",
                  },
                  {
                    question:
                      "How long does it take to resize images for all Etsy print sizes?",
                    answer:
                      "Manually resizing one artwork into 30 print sizes across 5 ratios takes 1-3 hours in Photoshop or Canva. This includes calculating pixel dimensions, resizing, exporting, naming, and organizing into ZIP packs. Automated tools like SnapToSize do this in under 30 seconds.",
                  },
                  {
                    question:
                      "What DPI should Etsy digital downloads be?",
                    answer:
                      "300 DPI is the professional standard for print files. This ensures sharp, detailed output when buyers print your artwork. Never use 72 DPI (screen resolution) or 150 DPI (draft quality) for printable downloads — buyers will get blurry results and leave negative reviews.",
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
                    All 30 print sizes with exact pixel dimensions at 300 DPI.
                    Plus file naming conventions and ratio pack structure.
                  </p>
                  <EmailCapture
                    placeholder="Enter your email"
                    buttonText="Get Free Cheat Sheet"
                  />
                </div>
              </Card>
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="how-to-resize-images-for-etsy" />
          </div>
        </Container>
      </section>
    </>
  );
}
