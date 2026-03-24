import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, FolderArchive, FileText } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title:
    "How to Package Digital Wall Art for Etsy — File Organization & ZIP Guide",
  description:
    "Complete guide to packaging digital wall art for Etsy: file formats, 300 DPI resolution, ratio packs, ZIP organization, professional naming, and staying under Etsy's 20MB limit.",
  alternates: {
    canonical:
      "https://snaptosize.com/how-to-package-digital-wall-art-for-etsy",
  },
  openGraph: {
    title:
      "How to Package Digital Wall Art for Etsy — File Organization & ZIP Guide",
    description:
      "Professional packaging for Etsy digital wall art: file formats, resolution, ratio packs, ZIP structure, naming conventions, and the 20MB limit.",
    url: "https://snaptosize.com/how-to-package-digital-wall-art-for-etsy",
    images: [
      {
        url: "/assets/og/how-to-package-digital-wall-art-for-etsy.png",
        width: 1200,
        height: 630,
        alt: "How to Package Digital Wall Art for Etsy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Package Digital Wall Art for Etsy",
    description:
      "File formats, ZIP structure, naming conventions, and ratio packs — everything you need to package digital wall art professionally.",
    images: ["/assets/og/how-to-package-digital-wall-art-for-etsy.png"],
  },
};

export default function HowToPackageDigitalWallArtForEtsyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Package Digital Wall Art for Etsy — File Organization & ZIP Guide",
    description:
      "Complete guide to packaging digital wall art for Etsy: file formats, 300 DPI resolution, ratio packs, ZIP organization, professional naming, and staying under the 20MB limit.",
    url: "https://snaptosize.com/how-to-package-digital-wall-art-for-etsy",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
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
        name: "How to Package Digital Wall Art for Etsy",
        item: "https://snaptosize.com/how-to-package-digital-wall-art-for-etsy",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I include PNG or JPEG files in my Etsy digital download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPEG at 300 DPI. PNG files are 10-20x larger with no quality improvement for prints, and they often exceed Etsy's 20MB limit per file.",
        },
      },
      {
        "@type": "Question",
        name: "How many sizes should I include in a digital wall art download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "20-30 sizes across 5 ratio packs (2:3, 3:4, 4:5, ISO, extras) to cover every common frame size buyers own. For nursery wall art, see our nursery size guide at snaptosize.com/etsy-nursery-wall-art-sizes.",
        },
      },
      {
        "@type": "Question",
        name: "What file naming format is best for Etsy digital downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use descriptive names with dimensions and resolution, like artwork_12x18_300dpi.jpg — not generic names like image1.jpg or IMG_5847.jpg.",
        },
      },
      {
        "@type": "Question",
        name: "How do I organize files to stay under Etsy's 20MB limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Create separate ZIP files for each ratio pack (2:3 sizes in one ZIP, 3:4 in another, etc.) rather than one giant ZIP. Each ratio pack stays well under 15MB as optimized JPEGs.",
        },
      },
      {
        "@type": "Question",
        name: "What should I include in my digital download besides the print files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Include a README.txt or PDF with printing instructions, recommended paper types, and licensing terms. This reduces support messages and builds buyer confidence.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_how-to-package-digital-wall-art-for-etsy&kind=guide";

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
        className="relative pt-8 pb-20 md:pt-10 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #a78bfa 1px, transparent 1px), linear-gradient(to bottom, #a78bfa 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* CSS-only ZIP/folder visual — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block">
          {/* Stacked folder tabs */}
          <div className="relative" style={{ width: "260px", height: "320px" }}>
            {/* Back folder */}
            <div className="absolute top-0 left-3 right-3 bottom-8">
              <div className="absolute top-0 left-0 w-20 h-5 rounded-t-md bg-white/[0.04] border-t border-l border-r border-white/[0.08]" />
              <div className="absolute top-5 inset-0 border border-white/[0.06] rounded-b-md rounded-tr-md bg-white/[0.02]" />
            </div>

            {/* Middle folder */}
            <div className="absolute top-6 left-1.5 right-1.5 bottom-4">
              <div className="absolute top-0 left-0 w-24 h-5 rounded-t-md bg-white/[0.04] border-t border-l border-r border-white/[0.10]" />
              <div className="absolute top-5 inset-0 border border-white/[0.08] rounded-b-md rounded-tr-md bg-white/[0.03]" />
            </div>

            {/* Front folder with file icons inside */}
            <div className="absolute top-12 inset-0">
              <div className="absolute top-0 left-0 w-28 h-5 rounded-t-md bg-purple-500/10 border-t border-l border-r border-purple-400/20" />
              <div className="absolute top-5 inset-0 border border-purple-400/15 rounded-b-md rounded-tr-md bg-purple-500/[0.04]">
                {/* File rows inside folder */}
                <div className="p-4 space-y-2.5">
                  {[
                    { name: "2x3_ratio_pack.zip", size: "12.4 MB" },
                    { name: "3x4_ratio_pack.zip", size: "9.8 MB" },
                    { name: "4x5_ratio_pack.zip", size: "11.2 MB" },
                    { name: "ISO_ratio_pack.zip", size: "14.1 MB" },
                    { name: "extras_pack.zip", size: "8.6 MB" },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-2">
                        <FolderArchive className="w-3 h-3 text-purple-400/60" />
                        <span className="text-[9px] font-mono text-white/40 tracking-wide">
                          {file.name}
                        </span>
                      </div>
                      <span className="text-[8px] font-mono text-purple-300/40">
                        {file.size}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3 h-3 text-purple-400/60" />
                      <span className="text-[9px] font-mono text-white/40 tracking-wide">
                        README.txt
                      </span>
                    </div>
                    <span className="text-[8px] font-mono text-purple-300/40">
                      2 KB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* "Under 20MB" badge */}
            <div className="absolute -bottom-4 right-0 px-3 py-1 rounded-full border border-purple-400/20 bg-purple-500/10">
              <span className="text-[10px] font-mono text-purple-300/60 tracking-wider">
                Each ZIP &lt; 20 MB
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Seller Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                How to Package Digital Wall Art for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                File organization, naming, and ZIP structure that eliminates
                refunds
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              Professional packaging means organized folders, clear naming,
              correct formats, and ZIP files under 20&nbsp;MB. Get this right and
              you&apos;ll see fewer refunds, fewer support messages, and more
              5-star reviews.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Package Your Art Automatically
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, get all ratio packs organized and ready
                to sell.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  5 ratio packs, 30 sizes
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  300 DPI, JPEG optimized
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Under 20 MB per ZIP
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
            {/* --- Section 1: What Packaging Means --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What &ldquo;Packaging&rdquo; Means for Digital Downloads
              </h2>
              <p className="text-foreground-60 mb-4">
                Packaging digital wall art has nothing to do with boxes or
                envelopes. It means file organization, naming conventions,
                format selection, and ZIP structure. It&apos;s how your files
                look when a buyer downloads them.
              </p>
              <p className="text-foreground-60 mb-4">
                Professional packaging is the difference between a buyer who
                opens their download, finds the right file instantly, prints it,
                and leaves a 5-star review &mdash; versus a buyer who sees a
                jumbled mess of files, gets confused, and requests a refund.
              </p>
              <p className="text-foreground-60">
                This guide covers the four essential components: file format,
                resolution, size variety, and folder organization. Master all
                four and your listings will stand out from sellers who throw a
                single file into a ZIP and call it done.
              </p>
            </div>

            {/* --- Section 2: 4 Essential Components --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 4 Essential Components of Professional Packaging
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    1. File Format &mdash; JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    The correct format for print files. Keeps file sizes
                    manageable while maintaining full print quality. PNG adds
                    nothing for wall art prints and creates files 10-20x
                    larger. Learn more in our{" "}
                    <Link
                      href="/best-resolution-for-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      complete resolution guide
                    </Link>
                    .
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    2. Resolution &mdash; 300 DPI Standard
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    The professional print standard. Lower DPI produces
                    pixelated prints that lead to refunds. Every file must be
                    300 DPI &mdash; no exceptions.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    3. Size Variety &mdash; Multiple Ratios
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Buyers own different frame sizes. Offering{" "}
                    <Link
                      href="/etsy-print-ratios"
                      className="text-accent-light hover:underline"
                    >
                      multiple ratio packs
                    </Link>{" "}
                    (2:3, 3:4, 4:5, ISO, extras) means every buyer finds the
                    size they need without messaging you.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    4. Organization &mdash; Folder Structure &amp; Naming
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Clear folder structure and descriptive filenames so buyers
                    find the right file in seconds. No guessing, no confusion,
                    no support messages.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Section 3: File Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Format: Why JPEG Wins for Etsy Digital Wall Art
              </h2>
              <p className="text-foreground-60 mb-4">
                The JPEG vs PNG debate has a clear winner for wall art prints:
                JPEG. At 300 DPI, JPEG produces identical print quality to PNG
                while keeping file sizes 10-20x smaller.
              </p>
              <p className="text-foreground-60 mb-6">
                PNG&apos;s advantage is transparency &mdash; useful for logos
                and overlays, but completely irrelevant for wall art. Your
                buyers are printing on paper. There is no transparency. Using
                PNG only makes files larger, slower to download, and harder to
                stay under{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy&apos;s 20 MB limit
                </Link>
                .
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  JPEG vs PNG for an 8&times;10 at 300 DPI
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">JPEG file size</span>
                    <span className="font-semibold">1&ndash;4 MB</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">PNG file size</span>
                    <span className="font-semibold">30&ndash;60 MB</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print quality</span>
                    <span className="font-semibold">
                      Identical at 300 DPI
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">
                      Under 20 MB limit?
                    </span>
                    <span className="font-semibold">
                      JPEG: yes &middot; PNG: rarely
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 text-sm">
                For a deeper comparison across all file types, see{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  what files to include in Etsy digital downloads
                </Link>
                .
              </p>
            </div>

            {/* --- Section 4: Resolution --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Resolution &amp; Size Requirements: The 300 DPI Standard
              </h2>
              <p className="text-foreground-60 mb-4">
                DPI stands for dots per inch. At 300 DPI, every inch of the
                printed image contains 300 dots of color &mdash; enough for
                sharp, professional results. Anything lower and the print looks
                soft or pixelated.
              </p>
              <p className="text-foreground-60 mb-6">
                To calculate pixel dimensions: multiply the print size in
                inches by 300. An{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10 print
                </Link>{" "}
                needs 2400&times;3000 pixels. A 12&times;18 needs
                3600&times;5400 pixels.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Common Sizes at 300 DPI
                </h3>
                <div className="overflow-x-auto">
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
                          Ratio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "4×6", px: "1200 × 1800", ratio: "2:3" },
                        { size: "8×10", px: "2400 × 3000", ratio: "4:5" },
                        { size: "12×18", px: "3600 × 5400", ratio: "2:3" },
                        { size: "16×20", px: "4800 × 6000", ratio: "4:5" },
                        { size: "18×24", px: "5400 × 7200", ratio: "3:4" },
                        { size: "24×36", px: "7200 × 10800", ratio: "2:3" },
                        { size: "A4", px: "2480 × 3508", ratio: "ISO" },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-white/10"
                        >
                          <td className="py-3 px-4 font-medium">{row.size}</td>
                          <td className="py-3 px-4 text-foreground-60">
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
              </Card>

              <p className="text-foreground-60 text-sm">
                See the full list of pixel dimensions for all 30 sizes in the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- Section 5: Ratio Pack Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Multiple Sizes: The Ratio Pack Strategy
              </h2>
              <p className="text-foreground-60 mb-4">
                Your buyers own different frame sizes. Some have 8&times;10
                frames, others have 12&times;18 or A4. If your listing only
                includes one or two sizes, you lose every buyer whose frame
                doesn&apos;t match.
              </p>
              <p className="text-foreground-60 mb-6">
                The solution is{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  ratio packs
                </Link>
                . Group sizes by aspect ratio (2:3, 3:4, 4:5, ISO, extras) and
                deliver each group as a separate ZIP. This gives buyers every
                standard frame size while keeping each file under 20 MB.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    ratio: "2:3 Ratio Pack",
                    sizes: "4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30",
                    note: "Most common for vertical wall art",
                  },
                  {
                    ratio: "3:4 Ratio Pack",
                    sizes: "6×8, 9×12, 12×16, 15×20, 18×24",
                    note: "Classic photo frame ratio",
                  },
                  {
                    ratio: "4:5 Ratio Pack",
                    sizes: "8×10, 12×15, 16×20, 20×25, 24×30",
                    note: "Home of the #1 requested size",
                  },
                  {
                    ratio: "ISO A-Series Pack",
                    sizes: "A5, A4, A3, A2, A1",
                    note: "Essential for international buyers",
                  },
                  {
                    ratio: "Extras Pack",
                    sizes: "5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24",
                    note: "Common sizes outside standard ratios",
                  },
                ].map((pack, i) => (
                  <Card key={i} className="p-5">
                    <div className="flex items-start gap-3">
                      <FolderArchive className="h-5 w-5 text-accent-light flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{pack.ratio}</h3>
                        <p className="text-sm text-foreground-60 mb-1">
                          {pack.sizes}
                        </p>
                        <p className="text-xs text-foreground-60">
                          {pack.note}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <p className="text-foreground-60">
                That&apos;s 30 sizes across 5 packs. When a competitor offers
                &ldquo;8&times;10 only&rdquo; and your listing includes all 30
                sizes, yours appears dramatically more valuable at the same
                price. For the full breakdown of which sizes matter most, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include in your Etsy printable
                </Link>
                . Selling nursery art? See our{" "}
                <Link
                  href="/etsy-nursery-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  nursery wall art sizes guide
                </Link>{" "}
                for niche-specific bundling strategies.
              </p>
            </div>

            {/* --- Section 6: File Naming --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Naming Conventions That Look Professional
              </h2>
              <p className="text-foreground-60 mb-6">
                File naming is invisible until a buyer downloads your files.
                Then it&apos;s the first thing they see. Clear names build
                trust. Messy names create confusion and support messages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5 border-red-500/20 bg-red-500/[0.03]">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <h4 className="font-semibold text-sm text-red-400">
                      Unprofessional naming
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-foreground-60 font-mono">
                    <li>IMG_5847.jpg</li>
                    <li>final_v3_FINAL.jpg</li>
                    <li>print.jpg</li>
                    <li>download (2).jpg</li>
                  </ul>
                </Card>

                <Card className="p-5 border-green-500/20 bg-green-500/[0.03]">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-4 h-4 text-green-400" />
                    <h4 className="font-semibold text-sm text-green-400">
                      Professional naming
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-foreground-60 font-mono">
                    <li>artwork_8x10_300dpi.jpg</li>
                    <li>artwork_12x18_300dpi.jpg</li>
                    <li>artwork_A4_300dpi.jpg</li>
                    <li>artwork_5x7_300dpi.jpg</li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground-60 text-sm">
                      <strong className="text-foreground">
                        Naming pattern:
                      </strong>{" "}
                      <code className="text-accent-light">
                        artworkname_WxH_300dpi.jpg
                      </code>{" "}
                      &mdash; include the size, DPI, and use underscores or
                      hyphens (never spaces). Buyers should identify the right
                      file without opening it.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Section 7: ZIP Organization --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                ZIP Organization: Keeping Files Under 20 MB
              </h2>
              <p className="text-foreground-60 mb-4">
                Etsy enforces a hard{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  20 MB limit per uploaded file
                </Link>
                . One ZIP containing all 30 sizes as PNGs would exceed 500 MB.
                Even as JPEGs, a single ZIP can push past the limit.
              </p>
              <p className="text-foreground-60 mb-6">
                The fix: one ZIP per ratio pack. Each ratio pack contains 5-8
                JPEG files, typically totaling 8-15 MB &mdash; well under the
                limit.
              </p>

              {/* Example folder structure */}
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Example ZIP Structure for One Artwork
                </h3>
                <div className="space-y-3 text-sm font-mono">
                  <div>
                    <div className="flex items-center gap-2 text-accent-light mb-1.5">
                      <FolderArchive className="w-4 h-4" />
                      <span className="font-semibold">
                        Artwork_2x3_Ratio.zip
                      </span>
                      <span className="text-foreground-60 text-xs font-sans">
                        (12.4 MB)
                      </span>
                    </div>
                    <div className="ml-6 space-y-0.5 text-foreground-60 text-xs">
                      <p>&emsp;artwork_4x6_300dpi.jpg</p>
                      <p>&emsp;artwork_8x12_300dpi.jpg</p>
                      <p>&emsp;artwork_12x18_300dpi.jpg</p>
                      <p>&emsp;artwork_16x24_300dpi.jpg</p>
                      <p>&emsp;artwork_20x30_300dpi.jpg</p>
                      <p>&emsp;artwork_24x36_300dpi.jpg</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-accent-light mb-1.5">
                      <FolderArchive className="w-4 h-4" />
                      <span className="font-semibold">
                        Artwork_4x5_Ratio.zip
                      </span>
                      <span className="text-foreground-60 text-xs font-sans">
                        (11.2 MB)
                      </span>
                    </div>
                    <div className="ml-6 space-y-0.5 text-foreground-60 text-xs">
                      <p>&emsp;artwork_8x10_300dpi.jpg</p>
                      <p>&emsp;artwork_12x15_300dpi.jpg</p>
                      <p>&emsp;artwork_16x20_300dpi.jpg</p>
                      <p>&emsp;artwork_20x25_300dpi.jpg</p>
                      <p>&emsp;artwork_24x30_300dpi.jpg</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-foreground-60 mb-1.5">
                      <FileText className="w-4 h-4" />
                      <span>README.txt</span>
                      <span className="text-xs font-sans">(2 KB)</span>
                    </div>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 text-sm">
                Etsy allows up to 5 digital files per listing. Upload each
                ratio pack as a separate file, plus an optional README with
                printing instructions.
              </p>
            </div>

            {/* --- Section 8: Manual Process --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Manual Process (And Why It Takes 1&ndash;3 Hours)
              </h2>
              <p className="text-foreground-60 mb-4">
                Doing this by hand for one artwork means repeating the same
                steps 30 times:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-foreground-60 mb-6">
                <li>Open your source file in Photoshop or Canva</li>
                <li>Calculate pixel dimensions for the target size at 300 DPI</li>
                <li>Resize the canvas to those dimensions</li>
                <li>Export as JPEG at maximum quality</li>
                <li>Rename the file with the correct naming convention</li>
                <li>Repeat for all 30 sizes across 5 ratios</li>
                <li>Create 5 separate folders, one per ratio</li>
                <li>Move each file into its correct folder</li>
                <li>ZIP each folder individually</li>
                <li>Verify every ZIP is under 20 MB</li>
              </ol>
              <p className="text-foreground-60 mb-4">
                For a single artwork, this takes 1&ndash;3 hours depending on
                your speed with Photoshop. If you sell 50 artworks, that&apos;s
                50&ndash;150 hours of manual labor.
              </p>
              <p className="text-foreground-60">
                And every time you update an artwork or add a new design, you
                repeat the entire process.
              </p>
            </div>

            {/* --- CTA 1: Bridge after manual process --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  There&apos;s a Faster Way
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  SnapToSize generates professionally packaged ratio packs
                  automatically &mdash; no resizing, no renaming, no zipping.
                  Upload your artwork and download organized ZIPs in seconds.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    See How It Works &rarr;
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 9: Automated Packaging with SnapToSize --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Automated Packaging with SnapToSize
              </h2>
              <p className="text-foreground-60 mb-6">
                SnapToSize replaces the entire manual workflow. Upload one
                high-resolution image and receive all 5 ratio packs &mdash;
                30 sizes total &mdash; as organized, professionally named ZIPs
                in 10&ndash;30 seconds.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  What SnapToSize does automatically
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Resizes to all 30 print sizes",
                    "300 DPI on every file",
                    "JPEG optimized for Etsy",
                    "Professional file naming",
                    "Organized by ratio pack",
                    "Each ZIP under 20 MB",
                    "No cropping — full composition preserved",
                    "Lanczos resampling (highest quality)",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                      <span className="text-sm text-foreground-60">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The free plan includes 2 pack exports per day &mdash; enough to
                test the output on your artwork and see the quality before
                committing. Pro plans start at $11.99/month for unlimited
                exports.
              </p>
              <p className="text-foreground-60 text-sm">
                See{" "}
                <Link
                  href="/pricing"
                  className="text-accent-light hover:underline"
                >
                  pricing details
                </Link>{" "}
                or{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-accent-light hover:underline"
                >
                  the complete guide to selling digital downloads on Etsy
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2: Primary --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Spending Hours Resizing and Organizing
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork to SnapToSize and get all 30 sizes in
                  organized ratio packs &mdash; ready to sell in seconds. No
                  Photoshop. No manual work.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Try Free &mdash; Generate Packs Now
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-2">
                  No credit card required. Free plan includes watermarked
                  exports.
                </p>
              </Card>
            </div>

            {/* --- Section 10: Best Practices --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best Practices for Delivery &amp; Customer Experience
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Write a Clear Listing Description
                  </h3>
                  <p className="text-foreground-60 mb-3">
                    Tell buyers exactly what they&apos;ll receive. List every
                    size, mention the format (JPEG, 300 DPI), and explain that
                    files are organized by ratio pack. Transparency prevents
                    confusion and sets expectations.
                  </p>
                  <Card className="p-4 bg-accent/10 border-accent/20">
                    <p className="text-sm text-foreground-60">
                      <strong className="text-foreground">
                        Example listing text:
                      </strong>{" "}
                      &ldquo;Includes 30 print sizes across 5 ratio packs (2:3,
                      3:4, 4:5, ISO, extras). All files are high-resolution JPEG
                      at 300 DPI. Each ratio pack is a separate ZIP file for
                      easy downloading.&rdquo;
                    </p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Include a README File
                  </h3>
                  <p className="text-foreground-60">
                    A simple text file with printing instructions, recommended
                    paper types (matte vs glossy), and your licensing terms.
                    This reduces support messages and shows professionalism.
                    Keep it short &mdash; 10-15 lines is enough.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Handle Size Requests Proactively
                  </h3>
                  <p className="text-foreground-60">
                    If you include all 30 sizes, the most common support message
                    (&ldquo;Do you have this in 8&times;10?&rdquo;) disappears
                    entirely. Mention in your listing that you cover
                    &ldquo;every standard frame size&rdquo; to preempt the
                    question.
                  </p>
                </div>
              </div>
            </div>

            {/* --- CTA 3: Bottom --- */}
            <div>
              <FinalCTA
                heading="Package Your Digital Wall Art Like a Pro"
                stat="5 ratio packs, 30 sizes, under 20 MB each"
                description="SnapToSize creates all your ratio packs at 300 DPI, under 20 MB, with professional naming. Upload once, download everything, upload to Etsy."
                buttonText="Start Free"
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
                      "Should I include PNG or JPEG files in my Etsy digital download?",
                    answer:
                      "JPEG at 300 DPI. PNG files are 10-20x larger with no quality improvement for prints, and they often exceed Etsy's 20MB limit. PNG's only advantage is transparency, which is irrelevant for wall art that's printed on paper.",
                  },
                  {
                    question:
                      "How many sizes should I include in a digital wall art download?",
                    answer:
                      "20-30 sizes across 5 ratio packs (2:3, 3:4, 4:5, ISO, extras) to cover every common frame size. This eliminates 'do you have this in X size?' messages and makes your listing more competitive than sellers offering only 1-2 sizes.",
                  },
                  {
                    question:
                      "What file naming format is best for Etsy digital downloads?",
                    answer:
                      "Use descriptive names with dimensions and resolution: artwork_12x18_300dpi.jpg. Avoid generic names like image1.jpg or IMG_5847.jpg. Buyers should identify the right file instantly without opening it.",
                  },
                  {
                    question:
                      "How do I organize files to stay under Etsy's 20MB limit?",
                    answer:
                      "Create separate ZIP files for each ratio pack — 2:3 sizes in one ZIP, 3:4 in another, and so on. As optimized JPEGs, each ratio pack typically stays under 15MB. Never put all sizes in one massive ZIP.",
                  },
                  {
                    question:
                      "What should I include in my digital download besides the print files?",
                    answer:
                      "Include a README.txt or PDF with printing instructions, recommended paper types (matte cardstock for most wall art), and your licensing terms. Keep it short — 10-15 lines. This reduces support messages and adds a professional touch.",
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
            <RelatedPages currentSlug="how-to-package-digital-wall-art-for-etsy" />
          </div>
        </Container>
      </section>
    </>
  );
}
