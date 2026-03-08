import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, FileText, FolderArchive } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title:
    "What Files to Include in Etsy Digital Download — Complete Setup Guide",
  description:
    "Complete guide to packaging Etsy digital downloads: file formats (JPEG vs PNG), 300 DPI requirements, ratio packs, naming conventions, and staying under Etsy's 20MB limit.",
  alternates: {
    canonical:
      "https://snaptosize.com/what-files-to-include-etsy-digital-download",
  },
  openGraph: {
    title:
      "What Files to Include in Etsy Digital Download — Complete Setup Guide",
    description:
      "File formats, resolution, ratio packs, naming conventions, and Etsy's 20MB limit — everything you need to package digital printables correctly.",
    url: "https://snaptosize.com/what-files-to-include-etsy-digital-download",
    images: [
      {
        url: "/assets/og/what-files-to-include-etsy-digital-download.png",
        width: 1200,
        height: 630,
        alt: "What Files to Include in Etsy Digital Download",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Files to Include in Etsy Digital Download",
    description:
      "Complete guide: file formats, resolution, ratio packs, and Etsy's 20MB limit.",
    images: ["/assets/og/what-files-to-include-etsy-digital-download.png"],
  },
};

export default function WhatFilesToIncludeEtsyDigitalDownloadPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "What Files to Include in Etsy Digital Download — Complete Setup Guide",
    description:
      "Complete guide to packaging Etsy digital downloads correctly: file formats, resolution, ratio packs, naming conventions, and Etsy's 20MB limit.",
    url: "https://snaptosize.com/what-files-to-include-etsy-digital-download",
    datePublished: "2026-03-06",
    dateModified: "2026-03-06",
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
        name: "What Files to Include in Etsy Digital Download",
        item: "https://snaptosize.com/what-files-to-include-etsy-digital-download",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I use JPG/JPEG or PNG for Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use JPG (JPEG format) for Etsy printables. SnapToSize automatically exports optimized JPG files at 300 DPI — perfect quality, always under Etsy's 20MB limit. PNG files are 10-20x larger with no meaningful quality improvement for prints.",
        },
      },
      {
        "@type": "Question",
        name: "How many files should I include in an Etsy digital download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional sellers provide 5 ratio packs (2:3, 3:4, 4:5, ISO, extras) with 4-8 sizes each — totaling 20-30 files. Each ratio pack is a separate ZIP to stay under Etsy's 20MB limit. This covers virtually every frame size buyers own.",
        },
      },
      {
        "@type": "Question",
        name: "What resolution should Etsy printables be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "300 DPI (dots per inch) is the professional print standard. Lower resolutions produce blurry or pixelated prints. For example, an 8×10 print at 300 DPI = 2400×3000 pixels. Never use 72 DPI or 150 DPI for printables.",
        },
      },
      {
        "@type": "Question",
        name: "How do I stay under Etsy's 20MB file limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Organize files into separate ZIP packs by ratio (2:3, 3:4, 4:5, ISO, extras). Use JPG instead of PNG. Each ZIP should contain 4-8 sizes of the same ratio — most ratio packs stay well under 15 MB. SnapToSize handles all of this automatically.",
        },
      },
      {
        "@type": "Question",
        name: "What file naming convention should I use for Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use clear, descriptive filenames: artwork-name_8x10_300dpi.jpg or artwork-name_2x3-ratio_12x18.jpg. Include size, ratio, and DPI in the filename. Professional naming reduces buyer confusion and support messages.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_files_guide&kind=guide";

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
      <section className="relative overflow-hidden h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/og/what-files-to-include-etsy-digital-download.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="z-0"
          />
          {/* Left-side gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        </div>

        {/* Content - centered vertically */}
        <div className="relative z-10 h-full flex items-center">
          <Container>
            <div className="max-w-[680px] py-4 -mt-12 md:-mt-8">
              <h1 className="font-bold tracking-tight mb-5 text-white">
                <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5">
                  What Files to Include in Etsy Digital Download
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/95">
                  The difference between refunds and 5-star reviews
                </span>
              </h1>
              <p className="text-base text-white/95 mb-4 drop-shadow-md">
                Wrong file setup = refunds, support messages, and poor reviews.
                Right file setup = instant 5-star reviews and repeat buyers.
                This guide covers file formats, resolution, ratio packs, naming,
                and Etsy&apos;s 20MB limit.
              </p>

              <div className="mb-3">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate Perfect File Packages Instantly
                  </Button>
                </a>
                <p className="text-sm text-white/85 mt-1.5">
                  Free → all files automatically formatted and packaged.
                </p>
              </div>

              {/* Micro-benefit chips */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/25">
                  <Check className="h-3 w-3 text-white flex-shrink-0" />
                  <span className="text-xs text-white font-medium">
                    Correct formats & resolution
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/25">
                  <Check className="h-3 w-3 text-white flex-shrink-0" />
                  <span className="text-xs text-white font-medium">
                    Professional file naming
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/25">
                  <Check className="h-3 w-3 text-white flex-shrink-0" />
                  <span className="text-xs text-white font-medium">
                    Under Etsy's 20MB limit
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-4xl space-y-16">
            {/* ===== SECTION 1: Why File Choice Determines Reviews ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why File Choice Determines Reviews vs Refunds
              </h2>
              <p className="text-foreground-60 mb-6">
                Get the file setup wrong, and buyers will request refunds before
                they even try printing. Get it right, and you eliminate 90% of
                support messages while building a reputation for professional
                quality.
              </p>

              <Card className="mb-6">
                <h3 className="font-semibold mb-3">
                  What buyers expect (but won&apos;t tell you):
                </h3>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Print-ready quality</strong> — 300 DPI, not
                      screen resolution
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>All standard frame sizes</strong> — not just one
                      or two
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Organized by ratio</strong> — so they know which
                      file to use
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Clear filenames</strong> — no
                      &ldquo;IMG_1234.jpg&rdquo;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Fast downloads</strong> — files optimized, not
                      bloated
                    </span>
                  </li>
                </ul>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-error/20 bg-error/5">
                  <h4 className="font-semibold text-sm mb-2 text-error">
                    Wrong file setup leads to:
                  </h4>
                  <ul className="space-y-1 text-sm text-foreground-60">
                    <li>• Refund requests within 24 hours</li>
                    <li>• &ldquo;Files won&apos;t print clearly&rdquo;</li>
                    <li>• &ldquo;I need different sizes&rdquo;</li>
                    <li>• Poor reviews mentioning quality issues</li>
                    <li>• Hours spent on customer support</li>
                  </ul>
                </Card>

                <Card className="border-accent-30 bg-accent-5">
                  <h4 className="font-semibold text-sm mb-2 text-accent-light">
                    Right file setup creates:
                  </h4>
                  <ul className="space-y-1 text-sm text-foreground-60">
                    <li>• Instant 5-star reviews</li>
                    <li>• &ldquo;Exactly as described&rdquo;</li>
                    <li>• &ldquo;Professional quality&rdquo;</li>
                    <li>• Repeat buyers and favorites</li>
                    <li>• Zero support messages</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* ===== SECTION 2: File Format - JPG vs PNG ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                File Format: JPG vs PNG — JPG Wins for Printables
              </h2>
              <p className="text-foreground-60 mb-6">
                This is the #1 mistake new sellers make: using PNG when they
                should use JPG. PNG files are 10-20x larger than JPG with zero
                meaningful quality improvement for prints.
              </p>

              <Card accent className="mb-6">
                <h3 className="font-semibold mb-3">Why JPG is correct:</h3>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Professional print quality</strong> — SnapToSize
                      automatically exports optimized JPG files at 300 DPI
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Manageable file sizes</strong> — typical 8×10 JPG
                      = 1-3 MB — PNG of the same file = 30-60 MB
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Stays under Etsy&apos;s 20MB limit</strong> —
                      PNG makes this nearly impossible
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Faster downloads for buyers</strong> — smaller
                      files = happier customers
                    </span>
                  </li>
                </ul>
              </Card>

              <div className="bg-background-5 border border-border rounded-lg p-4 mb-4">
                <p className="text-sm text-foreground-60 mb-2">
                  <strong>When to use PNG:</strong>
                </p>
                <p className="text-sm text-foreground-60">
                  Only if your artwork requires transparency (overlays, logos).
                  For standard wall art prints, transparency serves no purpose —
                  it just creates massive files that frustrate buyers.
                </p>
              </div>

              <p className="text-sm text-foreground-60">
                SnapToSize automatically exports optimized JPG files at 300
                DPI — perfect quality, always under Etsy&apos;s 20MB limit.
              </p>
            </div>

            {/* ===== CTA #1 ===== */}
            <Card accent className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Never Worry About File Formats Again
              </h3>
              <p className="text-sm text-foreground-60 mb-4">
                SnapToSize automatically exports all files as optimized JPGs at
                300 DPI — perfect for print, optimized for Etsy&apos;s limits.
                Upload once, download professionally formatted files in seconds.
              </p>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate Perfect Files Automatically
                </Button>
              </a>
              <p className="text-xs text-foreground-60 mt-3">
                Free plan available. No credit card required.
              </p>
            </Card>

            {/* ===== SECTION 3: Resolution - 300 DPI ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Resolution: 300 DPI — The Non-Negotiable Standard
              </h2>
              <p className="text-foreground-60 mb-6">
                300 DPI (dots per inch) is the professional print standard.
                Lower resolutions produce blurry, pixelated prints that lead to
                instant refunds.
              </p>

              <Card className="mb-6">
                <h3 className="font-semibold mb-3">
                  What happens at different resolutions:
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-error/10 border border-error/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-error">
                        72 DPI
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        Screen resolution (unusable for print)
                      </p>
                      <p className="text-foreground-60">
                        Severely pixelated, blurry prints. Buyers will request
                        refunds immediately. Never use for Etsy printables.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-amber-500">
                        150 DPI
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        Low print quality (marginal)
                      </p>
                      <p className="text-foreground-60">
                        Visible pixelation, especially on large prints. Buyers
                        will notice quality issues. Avoid for professional work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent-5 border border-accent-30 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-accent-light">
                        300 DPI
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        Professional print standard (correct)
                      </p>
                      <p className="text-foreground-60">
                        Sharp, clear prints at all sizes. Industry standard for
                        professional printing. This is what buyers expect.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-accent-5 border border-accent-30 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">
                  How to calculate correct pixel dimensions:
                </h4>
                <div className="space-y-1 text-sm text-foreground-60 font-mono">
                  <p>8×10 at 300 DPI = 2400×3000 pixels</p>
                  <p>12×18 at 300 DPI = 3600×5400 pixels</p>
                  <p>16×20 at 300 DPI = 4800×6000 pixels</p>
                  <p>24×36 at 300 DPI = 7200×10800 pixels</p>
                </div>
                <p className="text-xs text-foreground-60 mt-3">
                  Formula: (width in inches) × 300 = pixel width · (height in
                  inches) × 300 = pixel height
                </p>
              </div>

              <p className="text-sm text-foreground-60">
                See the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline font-semibold"
                >
                  complete Etsy print sizes guide
                </Link>{" "}
                for exact pixel dimensions at 300 DPI for every standard size.
              </p>
            </div>

            {/* ===== SECTION 4: The 5 Ratio Packs ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The 5 Ratio Packs — What They Are and Why Separate ZIPs
              </h2>
              <p className="text-foreground-60 mb-6">
                Professional Etsy sellers don&apos;t provide individual files or
                one massive ZIP. They organize downloads into{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline font-semibold"
                >
                  ratio packs
                </Link>{" "}
                — one ZIP per aspect ratio family.
              </p>

              <Card accent className="mb-6">
                <h3 className="font-semibold mb-3">
                  Why ratio-based organization works:
                </h3>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Buyers know which ZIP to use</strong> — if they
                      have a 12×18 frame (2:3 ratio), they download the 2:3 pack
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Stays under Etsy&apos;s 20MB limit</strong> —
                      separate ZIPs = manageable file sizes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Professional presentation</strong> — organized
                      structure signals quality
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Covers all frame sizes</strong> — 5 packs =
                      virtually every standard frame
                    </span>
                  </li>
                </ul>
              </Card>

              <h3 className="text-lg font-semibold mb-4">
                The 5 standard ratio packs:
              </h3>

              <div className="space-y-4">
                <Card>
                  <div className="flex items-start gap-3">
                    <FolderArchive className="h-6 w-6 text-accent-light flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">
                        1. 2:3 Ratio Pack (Most Common)
                      </h4>
                      <p className="text-sm text-foreground-60 mb-2">
                        Contains: 4×6, 6×9, 8×12, 12×18, 16×24, 20×30, 24×36
                      </p>
                      <p className="text-xs text-foreground-60">
                        The most widely used ratio for vertical wall art.
                        Matches frames at IKEA, Target, Amazon.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <FolderArchive className="h-6 w-6 text-accent-light flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">
                        2. 3:4 Ratio Pack (Classic Frames)
                      </h4>
                      <p className="text-sm text-foreground-60 mb-2">
                        Contains: 6×8, 9×12, 12×16, 18×24, 24×32
                      </p>
                      <p className="text-xs text-foreground-60">
                        Standard photo frame ratio. Essential for buyers with
                        existing frames.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <FolderArchive className="h-6 w-6 text-accent-light flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">
                        3. 4:5 Ratio Pack (Includes 8×10)
                      </h4>
                      <p className="text-sm text-foreground-60 mb-2">
                        Contains: 8×10, 12×15, 16×20, 24×30
                      </p>
                      <p className="text-xs text-foreground-60">
                        Home of the iconic 8×10 — one of the most requested
                        sizes on Etsy.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <FolderArchive className="h-6 w-6 text-accent-light flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">
                        4. ISO A-Series Pack (International)
                      </h4>
                      <p className="text-sm text-foreground-60 mb-2">
                        Contains: A5, A4, A3, A2, A1
                      </p>
                      <p className="text-xs text-foreground-60">
                        Standard in Europe, Australia, Asia. Essential for
                        international buyers.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <FolderArchive className="h-6 w-6 text-accent-light flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">
                        5. Extras Pack (Common Requests)
                      </h4>
                      <p className="text-sm text-foreground-60 mb-2">
                        Contains: 5×7, 8.5×11, 11×14, 16×20, 20×24
                      </p>
                      <p className="text-xs text-foreground-60">
                        Frequently requested sizes that don&apos;t fit standard
                        ratios. Eliminates custom requests.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-sm text-foreground-60 mt-6">
                See the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline font-semibold"
                >
                  complete ratio guide
                </Link>{" "}
                for detailed explanation of how print ratios work.
              </p>
            </div>

            {/* ===== SECTION 5: File Naming Conventions ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                File Naming Conventions — Professional = Trust-Building
              </h2>
              <p className="text-foreground-60 mb-6">
                Clear, descriptive filenames reduce buyer confusion and signal
                professionalism. Messy filenames create support messages and
                lower perceived quality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="border-error/20 bg-error/5">
                  <h4 className="font-semibold text-sm mb-2 text-error">
                    Bad file naming:
                  </h4>
                  <ul className="space-y-1 text-xs text-foreground-60 font-mono">
                    <li>• IMG_1234.jpg</li>
                    <li>• print-final-v3.jpg</li>
                    <li>• artwork.jpg</li>
                    <li>• download (1).jpg</li>
                  </ul>
                  <p className="text-xs text-foreground-60 mt-2">
                    Confusing, unprofessional, buyers don&apos;t know which file
                    to use.
                  </p>
                </Card>

                <Card className="border-accent-30 bg-accent-5">
                  <h4 className="font-semibold text-sm mb-2 text-accent-light">
                    Good file naming:
                  </h4>
                  <ul className="space-y-1 text-xs text-foreground-60 font-mono">
                    <li>• botanical-art_8x10_300dpi.jpg</li>
                    <li>• botanical-art_12x18_2x3-ratio.jpg</li>
                    <li>• botanical-art_A4_iso.jpg</li>
                    <li>• botanical-art_16x20_extras.jpg</li>
                  </ul>
                  <p className="text-xs text-foreground-60 mt-2">
                    Clear, professional, buyers instantly understand which file
                    to print.
                  </p>
                </Card>
              </div>

              <Card accent>
                <h3 className="font-semibold mb-3">
                  Recommended naming pattern:
                </h3>
                <p className="text-sm text-foreground-60 mb-3 font-mono">
                  artwork-name_size_details.jpg
                </p>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Include size:</strong> 8x10, 12x18, A4, etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Include ratio (optional):</strong> 2x3-ratio,
                      4x5-ratio
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Include DPI (optional):</strong> 300dpi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Use hyphens or underscores:</strong> not spaces
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* ===== SECTION 6: Etsy 20MB Limit ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Etsy&apos;s 20MB Limit — How to Stay Under It
              </h2>
              <p className="text-foreground-60 mb-6">
                Etsy has a hard <Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">20MB limit</Link> per uploaded file. Large print files
                at 300 DPI can easily exceed this, especially if you bundle
                everything into one ZIP.
              </p>

              <p className="text-foreground-60 mb-4">
                The fix is simple: organize files into separate ZIP packs
                by ratio — one ZIP per ratio family. Each ZIP contains
                4-8 sizes of the same ratio, keeping file sizes well under
                Etsy&apos;s limit without sacrificing quality.
              </p>

              <p className="text-foreground-60">
                SnapToSize handles this automatically. Every ZIP is
                generated, organized, and optimized — ready to upload
                directly to your Etsy listing.
              </p>
            </div>

            {/* ===== CTA #2 ===== */}
            <Card accent className="p-6">
              <h3 className="text-xl font-bold mb-3">
                What SnapToSize Does Automatically
              </h3>
              <p className="text-sm text-foreground-60 mb-4">
                Upload one high-resolution image. SnapToSize generates all 5
                ratio packs (20-30 files) at 300 DPI, optimized as JPGs,
                professionally named, organized into separate ZIPs under
                Etsy&apos;s 20MB limit. Ready to upload in seconds.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {[
                  "Correct file format (JPG)",
                  "Professional file naming",
                  "300 DPI resolution",
                  "Under 20MB per ZIP",
                  "All 5 ratio packs",
                  "Optimized quality/size balance",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-light flex-shrink-0" />
                    <span className="text-sm text-foreground-60">{feature}</span>
                  </div>
                ))}
              </div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate Perfect File Packages
                </Button>
              </a>
              <p className="text-xs text-foreground-60 mt-3">
                Free plan available. See your first pack generated in under 60
                seconds.
              </p>
            </Card>

            {/* ===== SECTION 8: FAQ ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <FAQAccordion
                items={[
                  {
                    question: "Should I use JPG/JPEG or PNG for Etsy printables?",
                    answer: [
                      <>
                        Use <strong>JPG</strong> (JPG/JPEG format) for Etsy
                        printables. SnapToSize automatically exports optimized
                        JPG files at 300 DPI — perfect quality, always under
                        Etsy&apos;s 20MB limit.
                      </>,
                      <>
                        PNG files are 10-20x larger with no meaningful quality
                        improvement for prints. Only use PNG if your artwork
                        absolutely requires transparency.
                      </>,
                    ],
                  },
                  {
                    question:
                      "How many files should I include in an Etsy digital download?",
                    answer: [
                      <>
                        Professional sellers provide{" "}
                        <strong>5 ratio packs</strong> (2:3, 3:4, 4:5, ISO,
                        extras) with 4-8 sizes each — totaling 20-30 files.
                      </>,
                      <>
                        Each ratio pack is a separate ZIP to stay under
                        Etsy&apos;s 20MB limit. This covers virtually every
                        frame size buyers own. See the{" "}
                        <Link
                          href="/etsy-print-sizes"
                          className="text-accent-light hover:underline"
                        >
                          complete size guide
                        </Link>
                        .
                      </>,
                    ],
                  },
                  {
                    question: "What resolution should Etsy printables be?",
                    answer: [
                      <>
                        <strong>300 DPI</strong> (dots per inch) is the
                        professional print standard. Lower resolutions produce
                        blurry or pixelated prints.
                      </>,
                      <>
                        For example, an 8×10 print at 300 DPI = 2400×3000
                        pixels. Never use 72 DPI (screen resolution) or 150 DPI
                        for printables — buyers will request refunds.
                      </>,
                    ],
                  },
                  {
                    question: "How do I stay under Etsy's 20MB file limit?",
                    answer: [
                      <>
                        Organize files into{" "}
                        <strong>separate ZIP packs by ratio</strong> (2:3, 3:4,
                        4:5, ISO, extras). Use JPG instead of PNG. Each ZIP
                        should contain 4-8 sizes of the same ratio — most ratio
                        packs stay well under 15 MB.
                      </>,
                      <>
                        SnapToSize handles all of this automatically — perfect
                        file format, optimized size, organized by ratio, always
                        under 20MB per ZIP.
                      </>,
                    ],
                  },
                  {
                    question:
                      "What file naming convention should I use for Etsy printables?",
                    answer: [
                      <>
                        Use clear, descriptive filenames:{" "}
                        <code>artwork-name_8x10_300dpi.jpg</code> or{" "}
                        <code>artwork-name_2x3-ratio_12x18.jpg</code>.
                      </>,
                      <>
                        Include size, ratio (optional), and DPI in the filename.
                        Use hyphens or underscores, not spaces. Professional
                        naming reduces buyer confusion and support messages.
                      </>,
                    ],
                  },
                ]}
              />
            </div>

            {/* ===== FINAL CTA ===== */}
            <div className="text-center pt-8 pb-8">
              <Card accent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Generate Perfect File Packages in Seconds
                </h2>
                <p className="text-foreground-60 mb-6">
                  Stop worrying about file formats, resolution, naming, and
                  Etsy&apos;s limits. Upload once, download perfectly formatted
                  files ready to upload to your listing.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={appUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="text-base px-7 py-3">Start Free</Button>
                  </a>
                  <Link href="/pricing">
                    <Button variant="secondary" className="text-base px-7 py-3">
                      See Pricing
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-foreground-60 mt-4">
                  No credit card required. Free plan includes watermarked
                  exports.
                </p>
              </Card>
            </div>

            {/* Lead Capture */}
            <div className="pb-12">
              <Card accent className="p-6 md:p-8">
                <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Free Etsy Print Size Cheat Sheet
                  </h3>
                  <p className="text-sm text-foreground-60 mb-5">
                    Get all Etsy ratios and pixel dimensions at 300 DPI in one
                    handy PDF reference. Plus file naming conventions and best
                    practices.
                  </p>
                  <EmailCapture
                    placeholder="Enter your email"
                    buttonText="Get Free Cheat Sheet"
                  />
                </div>
              </Card>
            </div>

            {/* Internal links for SEO */}
            <div className="text-sm text-foreground-60 space-y-2 pb-8">
              <p>
                <strong>Related:</strong>{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  Complete Etsy print sizes guide
                </Link>
                {" · "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Print ratios explained
                </Link>
                {" · "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-accent-light hover:underline"
                >
                  How to sell digital downloads
                </Link>
                {" · "}
                <Link
                  href="/pricing"
                  className="text-accent-light hover:underline"
                >
                  Pricing
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
