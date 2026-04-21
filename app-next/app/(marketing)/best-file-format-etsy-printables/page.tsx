import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import {
  Check,
  AlertTriangle,
  ArrowRight,
  FileImage,
  FileText,
  Image as ImageIcon,
  HardDrive,
  Zap,
} from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";

export const metadata: Metadata = {
  title: "PNG vs PDF vs JPG for Etsy Printables: Which Format Sells Best? (2026)",
  description:
    "Wrong file format = blurry prints and refund requests. See the exact format top Etsy sellers use for printables, wall art, and digital downloads.",
  alternates: {
    canonical: "https://snaptosize.com/best-file-format-etsy-printables",
  },
  openGraph: {
    title: "PNG vs PDF vs JPG for Etsy Printables: Which Format Sells Best? (2026)",
    description:
      "Wrong file format = blurry prints and refund requests. See the exact format top Etsy sellers use for printables, wall art, and digital downloads.",
    url: "https://snaptosize.com/best-file-format-etsy-printables",
    images: [
      {
        url: "/assets/og/best-file-format-etsy-printables.png",
        width: 1200,
        height: 630,
        alt: "Best File Format for Etsy Printables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG vs PDF vs JPG for Etsy Printables: Which Format Sells Best? (2026)",
    description:
      "Wrong file format = blurry prints and refund requests. See the exact format top Etsy sellers use for printables, wall art, and digital downloads.",
    images: ["/assets/og/best-file-format-etsy-printables.png"],
  },
};

export default function BestFileFormatEtsyPrintablesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Best File Format for Etsy Printables — One Clear Winner",
    description:
      "Complete guide to choosing the right file format for Etsy digital downloads. Compare PDF, PNG, and JPG for print quality, file size, and Etsy's 20MB limit.",
    url: "https://snaptosize.com/best-file-format-etsy-printables",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Identify your content type",
        text: "Determine if you're selling wall art (use JPG), text-heavy documents like planners (use PDF), or designs requiring transparency (use PNG sparingly).",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Export at 300 DPI",
        text: "All three formats support 300 DPI. Set your export resolution to 300 DPI regardless of format choice.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Check file sizes",
        text: "Verify each file stays under Etsy's 20MB limit. JPG naturally stays under this threshold. PNG often exceeds it at large sizes.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Use professional file naming",
        text: "Name files clearly: artwork_8x10_300dpi.jpg. Buyers should instantly understand what format and size they're getting.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Organize into ZIP packs",
        text: "Group files by ratio into separate ZIPs. Offer both JPG and PDF if buyers request it, but JPG should be your primary format.",
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
        name: "Best File Format for Etsy Printables",
        item: "https://snaptosize.com/best-file-format-etsy-printables",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I use PDF or JPG for Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use JPG for wall art, photo prints, and digital art. Use PDF for text-heavy documents like planners, worksheets, or invitations. Most Etsy print sellers use JPG because it supports 300 DPI, works at every print shop, and stays under the 20MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "Is PNG better quality than JPG for printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. At 300 DPI, JPG and PNG are visually identical when printed. PNG is lossless but this only matters for graphics with transparency or when editing files repeatedly. For final print files, JPG at 300 DPI is the professional standard and produces 5-10× smaller file sizes.",
        },
      },
      {
        "@type": "Question",
        name: "Why do my PNG files exceed Etsy's 20MB limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PNG uses lossless compression, which creates files 3-5× larger than JPG at the same dimensions. For larger print sizes like 16×20 or 24×36, PNG files easily exceed Etsy's 20MB limit while the equivalent JPG stays well under it — with no visible print quality difference.",
        },
      },
      {
        "@type": "Question",
        name: "Can buyers print JPG files at print shops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. JPG is the industry standard for print files. Every professional print shop, online print service (Printful, Printify, local labs), and home printer accepts JPG at 300 DPI. This is what professional photographers deliver.",
        },
      },
      {
        "@type": "Question",
        name: "Does file format affect print quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — DPI affects print quality, not format. All three formats (JPG, PNG, PDF) support 300 DPI. As long as your file is 300 DPI with correct pixel dimensions (e.g., 8×10 = 2400×3000 pixels), print quality is identical regardless of format.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best tool for creating Etsy printable files in the right format?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SnapToSize converts any uploaded image — PNG, TIFF, WebP — to 300 DPI JPG and generates all standard Etsy print sizes automatically. It organizes files into ratio-pack ZIPs (each under 20MB) so sellers can upload once and get print-ready files for every size.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_best-file-format-etsy-printables&kind=guide";

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
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,0.3) 50%, transparent)",
          }}
        />

        {/* File format visualization — right side */}
        <div className="absolute right-[4%] top-[52%] -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
          {/* Three format icons with file sizes */}
          <div className="flex flex-col gap-3">
            {[
              {
                icon: FileText,
                label: "PDF",
                note: "Larger files",
                color: "text-red-400",
                border: "border-red-400/30",
                bg: "bg-red-500/[0.05]",
              },
              {
                icon: ImageIcon,
                label: "PNG",
                note: "3-5× larger than JPG",
                color: "text-amber-400",
                border: "border-amber-400/30",
                bg: "bg-amber-500/[0.05]",
              },
              {
                icon: FileImage,
                label: "JPG / JPEG",
                note: "Smallest files",
                color: "text-green-400",
                border: "border-green-400/30",
                bg: "bg-green-500/[0.05]",
              },
            ].map((format) => (
              <div
                key={format.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${format.border} ${format.bg}`}
              >
                <format.icon className={`w-6 h-6 ${format.color}`} />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {format.label}
                  </span>
                  <span className="text-[10px] font-mono text-white/50">
                    {format.note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div className="px-3 py-1 rounded-full border border-green-400/20 bg-green-500/[0.06]">
            <span className="text-[9px] font-mono text-green-300/60 tracking-wider">
              ✓ JPG = BEST FOR WALL ART
            </span>
          </div>

          {/* Size note */}
          <div className="text-center">
            <span className="text-[8px] font-mono text-white/30 block">
              At 300 DPI print resolution
            </span>
            <span className="text-[8px] font-mono text-white/25 block">
              Etsy limit: 20 MB per file
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
                Best File Format for Etsy Printables
              </span>
              <span className="block text-lg md:text-2xl lg:text-3xl font-semibold text-purple-200/80">
                PDF vs PNG vs JPG (JPEG) — which keeps print quality high
                and file sizes under 20MB
              </span>
            </h1>
            <p className="text-base text-white/60 mb-4 max-w-lg">
              Most Etsy sellers hear conflicting advice about file formats.
              This guide explains when to use each format, why JPG is the
              professional standard for wall art, and how to stay under
              Etsy&apos;s 20MB limit.
            </p>

            <div className="mb-3">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Sizes in JPG
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; all sizes at 300 DPI JPG, guaranteed under 20MB.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "300 DPI compatible",
                "20MB compliant",
                "Print shop standard",
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
            {/* --- Section 1: The Format Question --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Format Question Every Etsy Seller Asks
              </h2>
              <p className="text-foreground-60 mb-6">
                Should you use PDF, PNG, or JPG for your Etsy digital
                downloads? (JPG and JPEG are the same format — just different
                file extensions.) You&apos;ll hear conflicting advice: &ldquo;Always
                use PDF,&rdquo; &ldquo;PNG is higher quality,&rdquo; &ldquo;JPG compresses
                too much.&rdquo; None of these are universally true.
              </p>
              <p className="text-foreground-60 mb-6">
                The right format depends on <strong>what you&apos;re selling</strong>{" "}
                and <strong>who your buyers are</strong>. Wall art has different
                requirements than planners. Large prints have different file
                size constraints than greeting cards.
              </p>
              <p className="text-foreground-60">
                Most professional Etsy print sellers offer{" "}
                <strong>both JPG and PDF</strong> — JPG as the primary format
                for printing, PDF as an optional bonus. This maximizes buyer
                compatibility while keeping file sizes manageable.
              </p>
            </div>

            {/* --- Section 2: The 3 Formats Compared --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 3 File Formats Compared — PDF vs PNG vs JPG
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* PDF */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-semibold">PDF</h3>
                  </div>
                  <p className="text-xs text-foreground-60 mb-3">
                    Best for documents, maintains text clarity
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        Universal print support
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        Preserves fonts & layout
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-red-400">✗</span>{" "}
                      <span className="text-foreground-60">
                        Larger file sizes
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-red-400">✗</span>{" "}
                      <span className="text-foreground-60">
                        Confuses some buyers
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[11px] font-mono text-foreground-60">
                      Larger than JPG, smaller than PNG
                    </p>
                  </div>
                </Card>

                {/* PNG */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ImageIcon className="w-5 h-5 text-amber-400" />
                    <h3 className="text-lg font-semibold">PNG</h3>
                  </div>
                  <p className="text-xs text-foreground-60 mb-3">
                    Lossless quality, transparency support
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        No compression artifacts
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        Supports transparency
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-red-400">✗</span>{" "}
                      <span className="text-foreground-60">
                        3-5× larger than JPG
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-red-400">✗</span>{" "}
                      <span className="text-foreground-60">
                        Often exceeds 20MB
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[11px] font-mono text-foreground-60">
                      Easily exceeds Etsy&apos;s 20MB limit
                    </p>
                  </div>
                </Card>

                {/* JPG */}
                <Card className="p-6 border-green-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <FileImage className="w-5 h-5 text-green-400" />
                    <h3 className="text-lg font-semibold">JPG / JPEG</h3>
                  </div>
                  <p className="text-xs text-foreground-60 mb-3">
                    Industry standard for printable wall art
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        Smallest file sizes
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        300 DPI support
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        Works everywhere
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-green-400">✓</span>{" "}
                      <span className="text-foreground-60">
                        Stays under 20MB
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[11px] font-mono text-foreground-60">
                      Fits Etsy&apos;s limit at every print size
                    </p>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-green-500/[0.08] border-green-500/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      For printable wall art:
                    </strong>{" "}
                    JPG is the professional standard. At 300 DPI, JPG produces
                    identical print quality to PNG while creating files 5-10×
                    smaller. This is what SnapToSize outputs — optimized for
                    Etsy&apos;s 20MB limit.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <HardDrive className="w-5 h-5 text-foreground-60" />
                  <span className="text-sm text-foreground-60">
                    No format decisions needed
                  </span>
                  <ArrowRight className="w-4 h-4 text-foreground-60" />
                  <Zap className="w-5 h-5 text-accent-light" />
                  <span className="text-sm font-semibold text-accent-light">
                    JPG at 300 DPI, every size
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Generate All Sizes in JPG Format
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once, get 30 print sizes as 300 DPI JPG files.
                  Organized into ratio pack ZIPs, every file under 20MB. Free
                  to try.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Try Free — No Format Confusion
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Listing Output Showcase --- */}
            <div>
              <ListingOutputShowcase
                artwork="neutral_abstract"
                heading="One upload. All sizes as 300 DPI JPG — automatically."
                subtext="Upload your artwork in any format (PNG, TIFF, WebP). SnapToSize converts to optimized JPG, generates all print sizes, and packages them into ratio ZIPs under 20MB."
              />
            </div>

            {/* --- Section 3: Why JPG is the Professional Standard --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why JPG is the Professional Standard for Printable Wall Art
              </h2>
              <p className="text-foreground-60 mb-6">
                Professional photographers, stock photo sites, and print sellers
                use JPG as their primary format. Not because it&apos;s &ldquo;good
                enough&rdquo; — because it&apos;s the optimal choice for print files.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    300 DPI Support with Manageable File Sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    JPG supports 300 DPI — the professional print standard.
                    At the same resolution and dimensions, a PNG file is
                    typically 3-5× larger than the equivalent JPG. Both print
                    identically. Only one consistently fits under{" "}
                    <Link
                      href="/etsy-20mb-file-limit"
                      className="text-accent-light hover:underline"
                    >
                      Etsy&apos;s 20MB limit
                    </Link>
                    .
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Universal Compatibility
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Every print shop accepts JPG at 300 DPI. Professional labs
                    (Printful, Printify, local print shops), online print
                    services, and home printers all work seamlessly with JPG.
                    No format conversion needed. No buyer confusion.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Minimal Visible Quality Difference from PNG
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    At 300 DPI and quality setting 90-95%, JPG compression is
                    visually lossless for print purposes. The &ldquo;lossless&rdquo;
                    advantage of PNG only matters when editing files repeatedly.
                    For final print delivery, JPG is indistinguishable.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    Professional photographers shoot RAW, edit in lossless
                    formats, then <strong>deliver JPG</strong> to clients.
                    That&apos;s the industry standard.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    SnapToSize Outputs JPG for These Reasons
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    We chose JPG because it&apos;s the <em>correct</em> format for
                    Etsy print sellers — not a compromise. Every SnapToSize
                    export is JPG at 300 DPI with Lanczos resampling and sRGB
                    color profile. Professional quality, manageable file sizes,
                    guaranteed under 20MB.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60">
                For more on DPI requirements across formats, see our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  resolution guide for Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* --- Section 4: When to Use PDF --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                When to Use PDF (and When NOT To)
              </h2>
              <p className="text-foreground-60 mb-6">
                PDF has its place — but it&apos;s not for wall art.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6 border-green-500/20">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Use PDF for:
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Planners & worksheets</strong> — text clarity
                        matters more than file size
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Invitations with editable text</strong> —
                        preserves fonts & layout
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Documents with clickable links</strong> — PDF
                        supports interactivity
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Multi-page printables</strong> — keeps
                        everything in one file
                      </span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-red-500/20">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    Don&apos;t use PDF for:
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Wall art / photo prints</strong> — JPG is
                        smaller and works better
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Graphics without text</strong> — no advantage
                        over JPG
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Large format prints</strong> — file size
                        exceeds 20MB easily
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#8226;</span>
                      <span>
                        <strong>Buyers unfamiliar with PDFs</strong> — some
                        struggle to extract/print
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Technical note:
                    </strong>{" "}
                    PDFs that contain images (like wall art) embed those images
                    as JPG anyway. You&apos;re just adding a wrapper that makes
                    the file larger and harder to use. For image-based prints,
                    deliver JPG directly.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 5: PNG — High Quality But File Size Problems --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                PNG — High Quality But File Size Problems
              </h2>
              <p className="text-foreground-60 mb-6">
                PNG is popular because &ldquo;lossless&rdquo; sounds like higher
                quality. For most Etsy print sellers, this creates more problems
                than it solves.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">When PNG Makes Sense</h3>
                  <p className="text-foreground-60 text-sm">
                    PNG is the right choice for graphics with{" "}
                    <strong>transparency</strong> (logos, layered designs,
                    graphics needing a clear background). It&apos;s also useful
                    for designs buyers will edit in Photoshop or Canva —
                    repeated editing degrades JPG quality over many saves.
                  </p>
                </Card>

                <Card className="p-6 border-amber-500/20">
                  <h3 className="font-semibold mb-2">The File Size Trap</h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    PNG uses lossless compression, which preserves every pixel
                    but creates enormous files. At 300 DPI, PNG files are
                    typically 3-5× larger than JPG:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-2 px-3 font-semibold">
                            Print Size
                          </th>
                          <th className="text-left py-2 px-3 font-semibold">
                            JPG
                          </th>
                          <th className="text-left py-2 px-3 font-semibold">
                            PNG
                          </th>
                          <th className="text-left py-2 px-3 font-semibold">
                            Fits Etsy?
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="py-2 px-3 font-mono text-xs">8×10</td>
                          <td className="py-2 px-3 text-foreground-60">
                            Small
                          </td>
                          <td className="py-2 px-3 text-foreground-60">
                            3-5× larger
                          </td>
                          <td className="py-2 px-3 text-green-400">✓ Both fit</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 px-3 font-mono text-xs">16×20</td>
                          <td className="py-2 px-3 text-foreground-60">
                            Under 20MB
                          </td>
                          <td className="py-2 px-3 text-foreground-60">
                            Often exceeds 20MB
                          </td>
                          <td className="py-2 px-3">
                            <span className="text-green-400">✓ JPG</span>{" "}
                            <span className="text-red-400">✗ PNG</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-mono text-xs">24×36</td>
                          <td className="py-2 px-3 text-foreground-60">
                            Under 20MB
                          </td>
                          <td className="py-2 px-3 text-foreground-60">
                            Far exceeds 20MB
                          </td>
                          <td className="py-2 px-3">
                            <span className="text-green-400">✓ JPG</span>{" "}
                            <span className="text-red-400">✗ PNG</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    How This Breaks Etsy Sellers
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Etsy&apos;s upload limit is{" "}
                    <Link
                      href="/etsy-20mb-file-limit"
                      className="text-accent-light hover:underline"
                    >
                      20MB per file
                    </Link>
                    . Your listing can include up to 5 files. If you&apos;re
                    offering large print sizes as PNG, you either:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60 list-disc list-inside">
                    <li>Hit the 20MB limit and can&apos;t upload</li>
                    <li>
                      Compress the PNG (losing the &ldquo;lossless&rdquo; advantage)
                    </li>
                    <li>
                      Split into multiple ZIPs (confusing for buyers, wastes
                      your 5-file limit)
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Why Canva Users Default to PNG
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Canva&apos;s default export is PNG. New sellers see
                    &ldquo;Download as PNG&rdquo; and assume it&apos;s correct. Then
                    they hit file size problems and don&apos;t understand why.
                    For print files, always export as JPG at 300 DPI from Canva.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60">
                For guidance on organizing files to avoid the 20MB trap, see our{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  packaging guide for digital wall art
                </Link>
                .
              </p>
            </div>

            {/* --- Section 6: DPI Requirements by Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                DPI Requirements by Format
              </h2>
              <p className="text-foreground-60 mb-6">
                DPI (dots per inch) is <strong>not format-specific</strong>. All
                three formats — JPG, PNG, and PDF — support 300 DPI. This is a
                common point of confusion.
              </p>

              <Card className="p-6 mb-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Common mistake:
                    </strong>{" "}
                    Assuming PNG = higher DPI. False. DPI is metadata you set at
                    export, not a property of the format. A JPG at 300 DPI and a
                    PNG at 300 DPI have identical print resolution.
                  </p>
                </div>
              </Card>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    How to Verify DPI in Each Format
                  </h3>
                  <div className="space-y-3 text-sm text-foreground-60">
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        JPG / PNG:
                      </p>
                      <p>
                        Right-click file → Properties → Details tab → check
                        &ldquo;Horizontal resolution&rdquo; and &ldquo;Vertical
                        resolution&rdquo; (should show 300 dpi).
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">PDF:</p>
                      <p>
                        Open in Adobe Acrobat → File → Properties → check image
                        resolution in embedded images. PDFs don&apos;t have a
                        single DPI — they contain images at various resolutions.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        SnapToSize outputs:
                      </p>
                      <p>
                        All JPG at 300 DPI, guaranteed. No need to verify —
                        it&apos;s baked into every export.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                For a complete breakdown of DPI vs pixel dimensions, see our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  resolution guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Every SnapToSize Export: 300 DPI JPG, Guaranteed
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  No format confusion. No file size problems. Just upload your
                  artwork and download organized, print-ready JPG packs. Free to
                  try.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Try Free — Generate Print-Ready Files
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 7: What Top-Selling Etsy Shops Actually Offer --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Top-Selling Etsy Shops Actually Offer
              </h2>
              <p className="text-foreground-60 mb-6">
                Looking at successful Etsy digital download shops reveals a
                clear pattern: <strong>JPG is primary, PDF is optional</strong>.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Industry Standard</h3>
                  <p className="text-foreground-60 text-sm">
                    Professional print sellers offer JPG for all{" "}
                    <Link
                      href="/etsy-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      print sizes
                    </Link>
                    , organized into{" "}
                    <Link
                      href="/etsy-print-ratios"
                      className="text-accent-light hover:underline"
                    >
                      ratio pack ZIPs
                    </Link>
                    . Some add a bonus PDF version as a separate download. This
                    covers 99% of buyer needs.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Offering Both JPG and PNG
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Some sellers include both JPG and PNG in the same listing.
                    This doubles file sizes unnecessarily and confuses buyers
                    (&ldquo;Which one do I print?&rdquo;). Unless you have a specific
                    reason to offer PNG (transparency, buyer requests), stick
                    with JPG.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Best Practice: Primary ZIP with JPG
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    The most professional structure:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60 list-disc list-inside">
                    <li>
                      5 ZIP files (one per ratio) with all sizes as JPG at
                      300 DPI
                    </li>
                    <li>
                      Optional: 1 additional PDF file as bonus (if buyers
                      request it)
                    </li>
                    <li>
                      Clear file naming (e.g.,{" "}
                      <code className="text-accent-light">
                        artwork_2-3-ratio-pack.zip
                      </code>
                      )
                    </li>
                    <li>
                      Each ZIP under 20MB (guaranteed with JPG, impossible with
                      PNG)
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Buyer Expectations</h3>
                  <p className="text-foreground-60 text-sm">
                    Most buyers expect JPG. Some ask for PDF. Almost none ask
                    for PNG (unless they&apos;re designers needing transparency).
                    If you receive format requests, offer PDF as a bonus — but
                    JPG should always be your primary deliverable.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60">
                For more on file organization and what to include in your
                listing, see{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  what files to include in Etsy digital downloads
                </Link>
                .
              </p>
            </div>

            {/* --- Section 8: File Size Impact — Staying Under Etsy's 20MB Limit --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Size Impact — Staying Under Etsy&apos;s 20MB Limit
              </h2>
              <p className="text-foreground-60 mb-6">
                Etsy enforces a hard limit:{" "}
                <strong>20MB maximum per file</strong>. This includes ZIP files.
                Your format choice directly determines whether you can offer
                large print sizes.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Format File Size Comparison at 300 DPI
                  </h3>
                  <p className="text-foreground-60 text-sm mb-4">
                    Actual file sizes vary by image content and dimensions, but
                    the relative difference between formats is consistent:
                  </p>
                  <div className="space-y-3 mt-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-green-500/[0.08] border border-green-500/20">
                      <div>
                        <p className="font-semibold text-sm">JPG / JPEG</p>
                        <p className="text-xs text-foreground-60">
                          Optimal compression
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-400">
                          Smallest
                        </p>
                        <p className="text-xs text-green-400">✓ Stays under 20MB</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/[0.08] border border-amber-500/20">
                      <div>
                        <p className="font-semibold text-sm">PDF</p>
                        <p className="text-xs text-foreground-60">
                          Contains embedded image
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-amber-400">
                          ~1.5× larger than JPG
                        </p>
                        <p className="text-xs text-amber-400">
                          ⚠ Can hit 20MB limit
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-red-500/[0.08] border border-red-500/20">
                      <div>
                        <p className="font-semibold text-sm">PNG</p>
                        <p className="text-xs text-foreground-60">
                          Lossless compression
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-red-400">3-5× larger than JPG</p>
                        <p className="text-xs text-red-400">✗ Exceeds limit at larger sizes</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Why SnapToSize Uses JPG
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    We guarantee every ZIP stays under 20MB by using optimal JPG
                    compression at 300 DPI. No upload failures. No manual
                    compression needed. No compromise on print quality. This is
                    the format professional print sellers use.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    How to Compress PNG if You Must Use It
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    If you absolutely need PNG (e.g., designs with
                    transparency), you&apos;ll need to compress it to fit
                    Etsy&apos;s limit:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60 list-disc list-inside">
                    <li>
                      Use TinyPNG or similar tools to reduce file size
                      (introduces quality loss)
                    </li>
                    <li>
                      Reduce color depth from 24-bit to 8-bit (visible color
                      banding)
                    </li>
                    <li>
                      Exclude the largest sizes (limits what buyers can print)
                    </li>
                  </ul>
                  <p className="text-foreground-60 text-sm mt-3">
                    Or just use JPG and avoid these compromises entirely.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60">
                For detailed guidance on organizing files to stay compliant, see{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to package digital wall art for Etsy
                </Link>
                .
              </p>
            </div>

            {/* --- Final CTA --- */}
            <div>
              <FinalCTA
                heading="Stop Wrestling with Format Settings and File Size Limits"
                stat="JPG at 300 DPI — every file under 20 MB, guaranteed"
                description="Upload your artwork. Get all 30 print sizes at 300 DPI as JPG. Organized ZIP packs under 20MB. Professional file naming. Free plan available."
                buttonText="Generate 30 Sizes Instantly"
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
                    question: "Should I use PDF or JPG for Etsy printables?",
                    answer:
                      "Use JPG for wall art, photo prints, and digital art. Use PDF for text-heavy documents like planners, worksheets, or invitations. Most Etsy print sellers use JPG because it supports 300 DPI, works at every print shop, and stays under the 20MB limit.",
                  },
                  {
                    question:
                      "Is PNG better quality than JPG for printables?",
                    answer:
                      "No. At 300 DPI, JPG and PNG are visually identical when printed. PNG is lossless but this only matters for graphics with transparency or when editing files repeatedly. For final print files, JPG at 300 DPI is the professional standard and produces 5-10× smaller file sizes.",
                  },
                  {
                    question:
                      "Why do my PNG files exceed Etsy's 20MB limit?",
                    answer:
                      "PNG uses lossless compression, which creates files 3-5× larger than JPG at the same dimensions. For larger print sizes like 16×20 or 24×36, PNG files easily exceed Etsy's 20MB limit while the equivalent JPG stays well under it — with no visible print quality difference.",
                  },
                  {
                    question: "Can buyers print JPG files at print shops?",
                    answer:
                      "Yes. JPG is the industry standard for print files. Every professional print shop, online print service (Printful, Printify, local labs), and home printer accepts JPG at 300 DPI. This is what professional photographers deliver.",
                  },
                  {
                    question: "Does file format affect print quality?",
                    answer:
                      "No — DPI affects print quality, not format. All three formats (JPG, PNG, PDF) support 300 DPI. As long as your file is 300 DPI with correct pixel dimensions (e.g., 8×10 = 2400×3000 pixels), print quality is identical regardless of format.",
                  },
                  {
                    question:
                      "What is the best tool for creating Etsy printable files in the right format?",
                    answer:
                      "SnapToSize converts any uploaded image — PNG, TIFF, WebP — to 300 DPI JPG and generates all standard Etsy print sizes automatically. It organizes files into ratio-pack ZIPs (each under 20MB) so sellers can upload once and get print-ready files for every size.",
                  },
                ]}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Not sure your files are in the right format at the right quality?"
                solution="Upload any format — PNG, TIFF, WebP, whatever. SnapToSize outputs optimized JPG at 300 DPI for every print size automatically."
                buttonText="Auto-Convert Your Files"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="best-file-format-etsy-printables" />
          </div>
        </Container>
      </section>
    </>
  );
}
