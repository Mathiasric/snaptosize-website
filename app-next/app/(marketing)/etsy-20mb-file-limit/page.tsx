import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, ArrowRight, AlertCircle, FileWarning } from "lucide-react";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Etsy 20MB Limit Fix — Auto-Split Files Under 20MB (Free Tool)",
  description:
    "Getting 'file too large' on Etsy? Upload your artwork and every file is auto-converted to JPG, split by ratio, and guaranteed under 20MB. Or read the manual fix.",
  alternates: { canonical: "https://snaptosize.com/etsy-20mb-file-limit" },
  openGraph: {
    title: "Etsy 20MB Limit Fix — Auto-Split Files Under 20MB",
    description:
      "Your digital download is too large for Etsy. Learn why it happens and how to fix it with JPG compression and ratio packs.",
    url: "https://snaptosize.com/etsy-20mb-file-limit",
    images: [
      {
        url: "/assets/og/etsy-20mb-file-limit.png",
        width: 1200,
        height: 630,
        alt: "Etsy 20MB file size limit guide — Complete solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy 20MB Limit Fix — Auto-Split Files Under 20MB (Free Tool)",
    description:
      "Hit Etsy's 20MB upload limit? Learn why PNG files are too large and how to use JPG instead.",
    images: ["/assets/og/etsy-20mb-file-limit.png"],
  },
};

export default function Etsy20MBFileLimitPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Etsy 20MB Limit Fix — Auto-Split Files Under 20MB (Free Tool)",
        description:
          "Complete guide to Etsy's 20MB file size limit for digital downloads. Learn why files are too large and how to fix it.",
        url: "https://snaptosize.com/etsy-20mb-file-limit",
        datePublished: "2026-03-08",
        dateModified: "2026-03-08",
        author: {
          "@type": "Organization",
          name: "SnapToSize",
          url: "https://snaptosize.com",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Fix Etsy's 20MB File Size Limit",
        description:
          "Step-by-step guide to getting your digital download files under Etsy's 20MB upload limit.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Convert all PNG files to JPG",
            text: "Convert all PNG files to JPG — or upload directly to SnapToSize, which converts any format automatically.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Organize files by ratio",
            text: "Create separate folders: 2:3 ratio sizes, 3:4 ratio sizes, 4:5 ratio sizes, ISO sizes, and extras. Group files logically.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Calculate pixel dimensions at 300 DPI",
            text: "For each size: multiply inches by 300. Example: 12×18 = 3600×5400 pixels. Resize each file to exact dimensions.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Export each size individually",
            text: "Save each file with a clear name (e.g., '12x18_300dpi.jpg'). Repeat for all 20-30 sizes.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Create separate ZIP files by ratio",
            text: "Compress each folder into a separate ZIP: 2x3_print_sizes.zip, 3x4_print_sizes.zip, etc. Do NOT combine them into one ZIP.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Verify each ZIP is under 20MB",
            text: "Check the file size of each ZIP. If any exceed 20MB, re-export the JPGs at a lower quality setting and re-zip.",
          },
          {
            "@type": "HowToStep",
            position: 7,
            name: "Upload to Etsy",
            text: "Upload each ZIP separately to your Etsy listing. Make sure all 5 ZIPs are included so buyers get all ratios.",
          },
        ],
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
        name: "Etsy 20MB Limit Guide",
        item: "https://snaptosize.com/etsy-20mb-file-limit",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Etsy's 20MB file size limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Etsy enforces a strict 20MB limit on all digital download files. If a single file exceeds 20MB, Etsy will reject the upload with an error message. This limit applies to each individual file, not the total of all files. Sellers must compress files or split them into smaller ZIPs to comply.",
        },
      },
      {
        "@type": "Question",
        name: "Why are my Etsy digital downloads over 20MB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common cause is using PNG files instead of JPG. PNG files are 3-10x larger than JPG at print quality. A single 24×36 inch PNG at 300 DPI can be 50-80MB, while the same size as JPG is 8-12MB. Another common mistake is putting all sizes in one ZIP instead of organizing by ratio.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use JPG or PNG for Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always use JPG for Etsy printables. JPG is the industry standard for print files. It produces smaller file sizes while maintaining print quality at 300 DPI. PNG is only necessary if your artwork requires transparency, which is rare for wall art. JPG is indistinguishable from PNG when printed but 5-10x smaller.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reduce my Etsy file size below 20MB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First, convert PNG to JPG at 300 DPI. Second, organize files into separate ZIPs by ratio (2:3 sizes in one ZIP, 3:4 in another, etc.) instead of one giant ZIP. Each ratio pack ZIP will stay under 20MB. Third, remove any duplicate sizes or unnecessary files. This structure is also what professional Etsy sellers use.",
        },
      },
      {
        "@type": "Question",
        name: "Will JPG files lose quality compared to PNG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. At print quality settings, JPG is indistinguishable from PNG to the human eye. Professional print labs use JPG for all print orders. The file size reduction (5-10x smaller) is worth the imperceptible quality trade-off. Only use PNG if you need transparency layers, which is rare for printable wall art.",
        },
      },
    ],
  };

  const appUrl = "https://app.snaptosize.com?source=seo_20mb_limit&kind=guide";

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
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image — dark purple aurora */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero_image_20mb.png"
            alt="Etsy 20MB file size limit"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero content — relative z-10 on inner div since Container doesn't accept className */}
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Etsy 20MB File Size Limit — How to Fix It
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Your Etsy digital download is too large. Here&apos;s why it happens and how
              professional sellers solve it permanently.
            </p>
            <p className="text-white/75 mb-8">
              Etsy enforces a strict 20MB limit on every digital download file. If you&apos;re using
              PNG files or bundling all sizes into one ZIP, you&apos;ll hit this limit on almost
              every listing. The fix is simple: use JPG at 300 DPI and organize files into
              separate ratio packs. Each pack stays well under 20MB.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-3">
                  Generate Etsy-Ready Files
                </Button>
              </a>
              <Link href="/etsy-print-sizes">
                <Button variant="secondary" className="text-base px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/25">
                  See Complete Size Guide
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Free plan available — no credit card required. Every file guaranteed under 20MB.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-4xl space-y-16">
            {/* ===== SECTION 1: What Is Etsy's 20MB Limit? ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Is Etsy&apos;s 20MB File Size Limit?
              </h2>
              <p className="text-foreground-60 mb-6">
                Etsy enforces a strict <strong>20MB limit</strong> on all digital download files.
                If a single file exceeds 20MB, Etsy will reject the upload with an error message.
              </p>
              <Card accent>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-2">Why Etsy enforces this limit:</p>
                    <ul className="text-sm text-foreground-60 space-y-1 list-disc list-inside">
                      <li>Server storage costs and bandwidth management</li>
                      <li>Faster downloads for buyers on slow connections</li>
                      <li>Reduces failed downloads and customer complaints</li>
                      <li>Prevents abuse (uploading massive files unrelated to listings)</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <p className="text-sm text-foreground-60 mt-6">
                This limit applies to <strong>each individual file</strong>, not the total of all files in a listing.
                If you upload 5 files, each one must be under 20MB. Our{" "}
                <Link href="/etsy-print-size-calculator" className="text-accent-light hover:underline">print size calculator</Link> estimates file sizes for every print dimension so you can check before uploading.
              </p>
            </div>

            {/* ===== SECTION 2: Why Your Files Are Too Large ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Your Etsy Digital Downloads Are Over 20MB
              </h2>
              <p className="text-foreground-60 mb-6">
                There are two main reasons Etsy sellers hit the 20MB limit:
              </p>

              <div className="space-y-6">
                {/* Reason 1: PNG Files */}
                <Card>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        You&apos;re using PNG files instead of JPG
                      </h3>
                      <p className="text-sm text-foreground-60 mb-3">
                        PNG files are <strong>3-10x larger</strong> than JPG — and exceed Etsy&apos;s 20MB limit on almost every size.
                        SnapToSize automatically converts any input format (PNG, WebP, TIFF) to optimized JPG, so you never need to convert manually.
                      </p>
                      <div className="bg-background-5 p-4 rounded-lg border border-border">
                        <p className="text-xs font-semibold mb-2">Example file size comparison:</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-foreground-60">24×36 inch @ 300 DPI (PNG):</span>
                            <span className="font-semibold text-red-600">65 MB ❌</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground-60">24×36 inch @ 300 DPI (JPG):</span>
                            <span className="font-semibold text-green-600">well under 20MB ✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Reason 2: One Giant ZIP */}
                <Card>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        You&apos;re putting all sizes in one ZIP file
                      </h3>
                      <p className="text-sm text-foreground-60 mb-3">
                        If you put 20-30 print sizes in a single ZIP, the total file easily exceeds 20MB.
                        Even if each individual JPG is small, the combined ZIP is too large.
                      </p>
                      <div className="bg-background-5 p-4 rounded-lg border border-border">
                        <p className="text-xs font-semibold mb-2">Wrong approach:</p>
                        <div className="text-sm text-foreground-60 space-y-1">
                          <p>❌ all_sizes.zip — too large, Etsy rejects this</p>
                        </div>
                        <p className="text-xs font-semibold mt-3 mb-2">Correct approach:</p>
                        <div className="text-sm text-green-600 space-y-1">
                          <p>✓ 2x3_print_sizes.zip</p>
                          <p>✓ 3x4_print_sizes.zip</p>
                          <p>✓ 4x5_print_sizes.zip</p>
                          <p>✓ iso_print_sizes.zip</p>
                          <p>✓ extras_print_sizes.zip</p>
                          <p className="text-xs text-foreground-60 mt-1">Every file guaranteed under Etsy&apos;s 20MB limit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* ===== SECTION 3: The Correct Solution ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Correct Solution: Ratio Packs as Separate ZIPs
              </h2>
              <p className="text-foreground-60 mb-6">
                Professional Etsy sellers organize digital downloads into <strong>ratio packs</strong> — one ZIP per ratio family.
                This keeps each file under 20MB and improves the buyer experience.
              </p>

              <Card>
                <h3 className="font-semibold mb-4">Recommended file structure:</h3>
                <div className="space-y-3 text-sm text-foreground-60">
                  {[
                    { name: "2x3_print_sizes.zip", sizes: "4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30" },
                    { name: "3x4_print_sizes.zip", sizes: "6×8, 9×12, 12×16, 15×20, 18×24" },
                    { name: "4x5_print_sizes.zip", sizes: "8×10, 12×15, 16×20, 20×25, 24×30" },
                    { name: "iso_print_sizes.zip", sizes: "A5, A4, A3, A2, A1" },
                    { name: "extras_print_sizes.zip", sizes: "5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24" },
                  ].map((pack, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-semibold text-xs">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-1">{pack.name}</p>
                        <p className="text-xs text-foreground-60">{pack.sizes}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-green-600 mt-4">
                  Every file guaranteed under Etsy&apos;s 20MB limit.
                </p>
              </Card>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Each ZIP stays well under 20MB",
                  "Buyers can download just the ratio they need",
                  "Organized structure looks professional",
                  "Matches how print shops expect files",
                  "Reduces Etsy upload errors",
                  "No file compression quality loss",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0" />
                    <span className="text-sm text-foreground-60">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-foreground-60 mt-6">
                This is the exact structure professional Etsy sellers use. It solves the 20MB problem and improves the customer experience.
                See <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">our complete ratio guide</Link> for more details.
              </p>
            </div>

            {/* ===== SECTION 4: JPG vs PNG ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                JPG vs PNG: Why JPG Is Always Correct for Print
              </h2>
              <p className="text-foreground-60 mb-6">
                Many Etsy sellers believe PNG is &quot;higher quality&quot; than JPG. This is a myth for print files.
              </p>

              <div className="space-y-4 mb-6">
                <Card>
                  <h3 className="text-lg font-bold mb-3 text-green-600">✓ Use JPG for Etsy printables</h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Industry standard:</strong> Professional print labs use JPG for all print orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>File size:</strong> 5-10x smaller than PNG at identical visual quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Print quality:</strong> JPG is indistinguishable from PNG when printed at 300 DPI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Etsy compliance:</strong> Easily stays under 20MB limit for all sizes</span>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-lg font-bold mb-3 text-red-600">❌ Avoid PNG for Etsy printables</h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Massive file sizes:</strong> A 24×36 PNG can be 50-80MB (far over Etsy&apos;s limit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>No practical benefit:</strong> PNG transparency is irrelevant for wall art prints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Slower downloads:</strong> Buyers on slow connections may experience failed downloads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Upload errors:</strong> You&apos;ll constantly fight Etsy&apos;s 20MB limit</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card accent>
                <p className="text-sm text-foreground-60">
                  <strong>Bottom line:</strong> Use JPG at 300 DPI.
                  This is the professional standard. PNG offers no benefit for print files and creates massive file size problems.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 5: What SnapToSize Does Automatically ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How SnapToSize Solves This Automatically
              </h2>
              <p className="text-foreground-60 mb-6">
                SnapToSize handles all of this for you. Upload one image, and the system generates Etsy-ready files
                that stay under 20MB without any manual work.
              </p>

              <Card>
                <h3 className="font-semibold mb-4">What happens automatically:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Converts to JPG at optimal quality</p>
                      <p className="text-sm text-foreground-60">
                        All outputs are JPG at 300 DPI with quality optimized for print.
                        File sizes stay small without visible quality loss.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Organizes into separate ratio pack ZIPs</p>
                      <p className="text-sm text-foreground-60">
                        Files are automatically grouped by ratio: 2:3, 3:4, 4:5, ISO, and extras.
                        Each ZIP stays well under 20MB.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Enforces Etsy&apos;s 20MB limit</p>
                      <p className="text-sm text-foreground-60">
                        Quality is automatically adjusted if needed to keep each ZIP under 20MB.
                        You&apos;ll never get a file size error on Etsy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Professional file naming and structure</p>
                      <p className="text-sm text-foreground-60">
                        Each file is named clearly (e.g., &quot;12x18_300dpi.jpg&quot;) and organized in folders inside ZIPs.
                        Buyers know exactly what they&apos;re getting.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="text-center mt-8">
                <p className="text-foreground-60 mb-4">
                  Stop fighting Etsy&apos;s 20MB limit. Generate compliant files in seconds.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Generate Etsy-Ready Files
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-3">
                  Free plan available. No credit card required.
                </p>
              </div>
            </div>

            {/* ===== SECTION 6: Step-by-Step Manual Fix ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How to Fix Etsy 20MB Limit Manually (Step-by-Step)
              </h2>
              <p className="text-foreground-60 mb-6">
                If you prefer to prepare files yourself, follow these steps to get under Etsy&apos;s 20MB limit:
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Convert all PNG files to JPG",
                    description: "Convert all PNG files to JPG — or upload directly to SnapToSize, which converts any format automatically.",
                  },
                  {
                    step: "2",
                    title: "Organize files by ratio",
                    description: "Create separate folders: 2:3 ratio sizes, 3:4 ratio sizes, 4:5 ratio sizes, ISO sizes, and extras. Group files logically.",
                  },
                  {
                    step: "3",
                    title: "Calculate pixel dimensions at 300 DPI",
                    description: "For each size: multiply inches by 300. Example: 12×18 = 3600×5400 pixels. Resize each file to exact dimensions in your image editor.",
                  },
                  {
                    step: "4",
                    title: "Export each size individually",
                    description: "Save each file with a clear name (e.g., '12x18_300dpi.jpg'). Repeat for all 20-30 sizes. This is the most time-consuming part.",
                  },
                  {
                    step: "5",
                    title: "Create separate ZIP files by ratio",
                    description: "Compress each folder into a separate ZIP: 2x3_print_sizes.zip, 3x4_print_sizes.zip, etc. Do NOT combine them into one ZIP.",
                  },
                  {
                    step: "6",
                    title: "Verify each ZIP is under 20MB",
                    description: "Check the file size of each ZIP. If any exceed 20MB, the most common fix is switching from PNG to JPG — or use SnapToSize which handles this automatically.",
                  },
                  {
                    step: "7",
                    title: "Upload to Etsy",
                    description: "Upload each ZIP separately to your Etsy listing. Make sure all 5 ZIPs are included so buyers get all ratios.",
                  },
                  {
                    step: "8",
                    title: "Repeat for every new listing",
                    description: "This entire process takes 1-3 hours per artwork. If you have multiple listings, this workflow doesn't scale.",
                  },
                ].map((item, index) => (
                  <div key={item.step}>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-background-5 border border-border">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground-60">{item.description}</p>
                      </div>
                    </div>
                    {/* Highlighted CTA after step 5 */}
                    {item.step === "5" && (
                      <div className="mt-4 p-5 rounded-lg bg-accent-5 border-2 border-accent-light/30">
                        <p className="text-sm font-medium mb-3">
                          Skip all 5 steps — SnapToSize accepts any image format and automatically converts to optimized JPG, organizes by ratio, and delivers every pack under 20MB. Ready to upload to Etsy in seconds.
                        </p>
                        <a
                          href={appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-light hover:underline"
                        >
                          Try free <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Card accent className="mt-6">
                <p className="text-sm text-foreground-60">
                  <strong>Reality check:</strong> This manual workflow is exactly what SnapToSize automates.
                  One upload replaces this entire 8-step process. Most sellers find the time savings worth it after the first listing.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 7: FAQ ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>

              <FAQAccordion
                items={[
                  {
                    question: "What is Etsy's 20MB file size limit?",
                    answer:
                      "Etsy enforces a strict 20MB limit on all digital download files. If a single file exceeds 20MB, Etsy will reject the upload with an error message. This limit applies to each individual file, not the total of all files. Sellers must compress files or split them into smaller ZIPs to comply.",
                  },
                  {
                    question: "Why are my Etsy digital downloads over 20MB?",
                    answer:
                      "The most common cause is using PNG files instead of JPG. PNG files are 3-10x larger than JPG at print quality. A single 24×36 inch PNG at 300 DPI can be 50-80MB. Another common mistake is putting all sizes in one ZIP instead of organizing by ratio.",
                  },
                  {
                    question: "Should I use JPG or PNG for Etsy printables?",
                    answer:
                      "Always use JPG for Etsy printables. JPG is the industry standard for print files. It produces smaller file sizes while maintaining print quality at 300 DPI. PNG is only necessary if your artwork requires transparency, which is rare for wall art. JPG is indistinguishable from PNG when printed but 5-10x smaller.",
                  },
                  {
                    question: "How do I reduce my Etsy file size below 20MB?",
                    answer:
                      "First, convert PNG to JPG at 300 DPI. Second, organize files into separate ZIPs by ratio (2:3 sizes in one ZIP, 3:4 in another, etc.) instead of one giant ZIP. Each ratio pack ZIP will stay under 20MB. Third, remove any duplicate sizes or unnecessary files. This structure is also what professional Etsy sellers use.",
                  },
                  {
                    question: "Will JPG files lose quality compared to PNG?",
                    answer:
                      "No. At print quality settings, JPG is indistinguishable from PNG to the human eye. Professional print labs use JPG for all print orders. The file size reduction (5-10x smaller) is worth the imperceptible quality trade-off. Only use PNG if you need transparency layers, which is rare for printable wall art.",
                  },
                ]}
              />
            </div>

            {/* ===== FINAL CTA ===== */}
            <div className="pt-8 pb-8">
              <FinalCTA
                heading="Never Hit Etsy's 20MB Limit Again"
                stat="Every ZIP guaranteed under 20 MB — zero manual compression"
                description="SnapToSize automatically generates JPG files at 300 DPI, organizes them into ratio packs, and guarantees every ZIP stays under 20MB. Upload once, download Etsy-ready files."
                buttonText="Start Free"
                appUrl={appUrl}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Still manually converting PNG to JPG and splitting files into ZIPs?"
                solution="Upload one image. Every file auto-converted, split by ratio, and guaranteed under 20MB. Done in 60 seconds."
                buttonText="Fix Your File Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* Internal links for SEO */}
            <RelatedPages currentSlug="etsy-20mb-file-limit" />
          </div>
        </Container>
      </section>
    </>
  );
}
