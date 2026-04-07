import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import {
  Check,
  AlertTriangle,
  TrendingDown,
  Search,
  Package,
  Eye,
  ImageOff,
  Tag,
  Video,
  ArrowRight,
} from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title:
    "Etsy Digital Download Not Selling? 7 Fixes That Actually Work | SnapToSize",
  description:
    "Your Etsy printables aren't selling because of fixable listing mistakes. Learn the 7 most common reasons — from incomplete sizes to poor SEO — and how to fix each one today.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-digital-download-not-selling",
  },
  openGraph: {
    title: "Etsy Digital Download Not Selling? 7 Fixes That Actually Work",
    description:
      "Fixable listing mistakes are killing your Etsy printable sales. Incomplete sizes, bad SEO, missing video — here's how to fix each one.",
    url: "https://snaptosize.com/etsy-digital-download-not-selling",
    images: [
      {
        url: "/assets/og/etsy-digital-download-not-selling.png",
        width: 1200,
        height: 630,
        alt: "Etsy Digital Download Not Selling — 7 Fixes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Digital Download Not Selling? 7 Fixes That Actually Work",
    description:
      "Fixable listing mistakes are killing your Etsy printable sales. Here's how to diagnose and fix each one.",
    images: ["/assets/og/etsy-digital-download-not-selling.png"],
  },
};

export default function EtsyDigitalDownloadNotSellingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy Digital Download Not Selling? 7 Fixes That Actually Work",
    description:
      "Comprehensive troubleshooting guide for Etsy sellers whose digital printables aren't getting sales. Covers listing optimization, size coverage, SEO, resolution, bundling, video, and pricing.",
    url: "https://snaptosize.com/etsy-digital-download-not-selling",
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
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
        name: "Guides",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Not Selling? 7 Fixes",
        item: "https://snaptosize.com/etsy-digital-download-not-selling",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why are my Etsy printables not getting views?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Low views on Etsy printables usually come from poor SEO: generic titles, broad tags, and missing long-tail keywords. Etsy's search algorithm also favors listings with video, recent renewals, and complete listing details. Optimize your title with specific keywords like '8x10 nursery wall art digital download' instead of 'printable art.'",
        },
      },
      {
        "@type": "Question",
        name: "How many sizes should I offer per Etsy printable listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At minimum 5-6 sizes covering different ratios: 5x7, 8x10, 11x14, 16x20, and A4 for international buyers. Top sellers include 15-30 sizes across all five standard ratio packs (2:3, 3:4, 4:5, ISO, extras). More sizes = higher perceived value at the same price.",
        },
      },
      {
        "@type": "Question",
        name: "Does Etsy's algorithm favor digital downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Etsy's algorithm treats digital downloads the same as physical products. Ranking factors include listing quality score, keyword relevance, recency, reviews, and conversion rate. Listings with video get a significant boost in search visibility.",
        },
      },
      {
        "@type": "Question",
        name: "Should I disclose AI-generated art on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Since 2024, Etsy requires sellers to disclose if artwork was created with AI tools. Failing to disclose can result in listing removal. Add it to your listing description and use Etsy's AI disclosure checkbox during listing creation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I compete with millions of other Etsy printable listings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three strategies work: (1) Niche down — target specific styles like 'boho nursery' or 'minimalist botanical' instead of generic 'wall art.' (2) Bundle up — offer complete size packs that competitors selling single sizes can't match. (3) Optimize relentlessly — video listings, keyword-rich titles, and fast shipping (instant download) all boost ranking.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_not-selling&kind=guide";

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

      {/* ===== HERO — Diagnostic/Status Board ===== */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #030712 0%, #0c0a15 40%, #0d1117 100%)",
        }}
      >
        {/* Scan line effect */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        {/* Warning gradient pulse */}
        <div
          className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #ef4444, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #22c55e, transparent 70%)",
          }}
        />

        {/* Diagnostic status panel — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="space-y-2.5 w-[220px]">
            {/* Status items */}
            {[
              { label: "Listing SEO", status: "warn" },
              { label: "Size coverage", status: "fail" },
              { label: "Resolution", status: "warn" },
              { label: "File bundling", status: "fail" },
              { label: "Video listing", status: "fail" },
              { label: "Pricing", status: "warn" },
              { label: "Tags & keywords", status: "fail" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3 py-2 rounded border bg-white/[0.02]"
                style={{
                  borderColor:
                    item.status === "fail"
                      ? "rgba(239,68,68,0.2)"
                      : "rgba(234,179,8,0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor:
                        item.status === "fail" ? "#ef4444" : "#eab308",
                    }}
                  />
                  <span className="text-[11px] font-mono text-white/50">
                    {item.label}
                  </span>
                </div>
                <span
                  className="text-[10px] font-mono uppercase tracking-wider"
                  style={{
                    color:
                      item.status === "fail"
                        ? "rgba(239,68,68,0.6)"
                        : "rgba(234,179,8,0.6)",
                  }}
                >
                  {item.status === "fail" ? "FAIL" : "WARN"}
                </span>
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  Issues found
                </span>
                <span className="text-[10px] font-mono text-red-400/70">
                  7 / 7
                </span>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-red-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-red-300/60 uppercase">
                Troubleshooting Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                Etsy Digital Download Not Selling?
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                7 fixable mistakes killing your printable sales
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              There are over 5 million printable listings on Etsy. Most of
              them make the same mistakes. Here are the 7 most common
              reasons your digital downloads aren&apos;t converting &mdash;
              and exactly how to fix each one.
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/[0.08] backdrop-blur-sm border border-red-500/[0.15]">
                <TrendingDown className="h-3 w-3 text-red-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Low conversion rate
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-500/[0.08] backdrop-blur-sm border border-yellow-500/[0.15]">
                <Eye className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Views but no sales
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/[0.08] backdrop-blur-sm border border-red-500/[0.15]">
                <Search className="h-3 w-3 text-red-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Not showing in search
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
            {/* --- Intro --- */}
            <div>
              <p className="text-foreground-60 mb-4">
                You&apos;ve created beautiful digital art. You&apos;ve set up
                your Etsy shop. You&apos;ve listed your printables. And
                then&hellip; nothing. No sales. Maybe a few views, but nobody
                is buying.
              </p>
              <p className="text-foreground-60 mb-4">
                The problem is almost never your art. It&apos;s your listing
                setup. After analyzing what separates top-selling Etsy
                printable shops from those that struggle, the same 7 issues
                come up repeatedly. Every single one is fixable.
              </p>
            </div>

            {/* --- Fix 1: Incomplete Sizes --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20">
                  <Package className="h-4 w-4 text-red-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  1. You&apos;re Only Offering 1&ndash;2 Sizes
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                This is the #1 reason printables don&apos;t sell. A buyer
                wants an 11&times;14 for their hallway. Your listing only
                offers 8&times;10. They leave and buy from a competitor who
                includes 6 sizes. You never see that buyer again. Use our{" "}
                <Link href="/etsy-print-size-calculator" className="text-accent-light hover:underline">print size calculator</Link> to see exactly which sizes and dimensions your image supports.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  What top sellers include
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { ratio: "2:3 Wall Art", sizes: "4x6 to 20x30", count: 7 },
                    {
                      ratio: "3:4 Photo Frame",
                      sizes: "6x8 to 18x24",
                      count: 5,
                    },
                    {
                      ratio: "4:5 Traditional",
                      sizes: "8x10 to 24x30",
                      count: 5,
                    },
                    {
                      ratio: "ISO A-Series",
                      sizes: "A5 to A1",
                      count: 5,
                    },
                    {
                      ratio: "Extras",
                      sizes: "5x7, 8.5x11, 11x14, 13x19...",
                      count: 6,
                    },
                  ].map((pack, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-3 py-2.5 rounded bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div>
                        <span className="text-sm font-medium">
                          {pack.ratio}
                        </span>
                        <span className="text-xs text-foreground-60 ml-2">
                          {pack.sizes}
                        </span>
                      </div>
                      <span className="text-xs text-accent-light font-mono">
                        {pack.count} sizes
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground-60 mt-4">
                  That&apos;s 30 sizes total. When a competitor offers 30 sizes
                  at $12 and you offer 2 sizes at $8, yours looks like less
                  value even though it&apos;s cheaper.
                </p>
              </Card>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">The fix</p>
                    <p className="text-foreground-60 text-sm">
                      Include all 5 ratio packs in every listing. You
                      don&apos;t need to manually resize to 30 sizes &mdash;{" "}
                      <Link
                        href="https://app.snaptosize.com"
                        className="text-accent-light hover:underline"
                      >
                        SnapToSize
                      </Link>{" "}
                      generates every size from one upload in seconds. For
                      a full breakdown of which sizes to include, see the{" "}
                      <Link
                        href="/etsy-print-sizes"
                        className="text-accent-light hover:underline"
                      >
                        complete Etsy print sizes guide
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Fix 2: Poor SEO --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20">
                  <Search className="h-4 w-4 text-red-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  2. Your Listing SEO Is Too Broad
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Titles like &ldquo;Beautiful Wall Art Print&rdquo; compete
                against 5 million other listings. You won&apos;t rank.
                Etsy&apos;s search algorithm matches buyer queries to listing
                titles and tags &mdash; if your keywords don&apos;t match
                what buyers actually search, you&apos;re invisible.
              </p>

              <div className="space-y-3 mb-6">
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-red-300">Bad title</p>
                      <p className="text-foreground-60 text-sm">
                        &ldquo;Beautiful Abstract Wall Art Digital
                        Download&rdquo;
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-green-300">
                        Good title
                      </p>
                      <p className="text-foreground-60 text-sm">
                        &ldquo;Minimalist Abstract Wall Art Set of 3, Neutral
                        Beige Gallery Wall Printable, 8x10 11x14 16x20 Digital
                        Download&rdquo;
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">The fix</p>
                    <p className="text-foreground-60 text-sm">
                      Use long-tail keywords that match buyer intent. Include
                      your niche (<Link href="/etsy-minimalist-wall-art-sizes" className="text-accent-light hover:underline">minimalist</Link>, boho, nursery, <Link href="/etsy-ai-art-print-sizes" className="text-accent-light hover:underline">AI art</Link>), specific sizes
                      (8x10, 11x14, 16x20), style descriptors (neutral, beige,
                      colorful), and room context (living room, nursery, office).
                      Fill all 13 Etsy tags with specific phrases, not single
                      words.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Fix #1 Right Now &mdash; Add All Sizes
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Get 30 sizes across 5 ratio
                  packs at 300&nbsp;DPI &mdash; organized, named, and under
                  20&nbsp;MB. Ready to list in seconds.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Fix 3: Low Resolution --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <ImageOff className="h-4 w-4 text-yellow-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  3. Your Files Are Low Resolution
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                If buyers print your file and it looks blurry, you get a
                1-star review and a refund request. The minimum for
                professional print quality is 300 DPI. Files at 72 DPI (screen
                resolution) or 150 DPI look acceptable on screen but terrible
                when printed. See our{" "}
                <Link href="/etsy-digital-download-blurry-prints" className="text-accent-light hover:underline">
                  blurry prints fix guide
                </Link>{" "}
                for exact pixel dimensions at every size.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Minimum pixel dimensions at 300 DPI
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2.5 px-3 font-semibold">
                          Print Size
                        </th>
                        <th className="text-left py-2.5 px-3 font-semibold">
                          Minimum Pixels
                        </th>
                        <th className="text-left py-2.5 px-3 font-semibold">
                          Ratio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["5x7", "1500 x 2100", "5:7"],
                        ["8x10", "2400 x 3000", "4:5"],
                        ["11x14", "3300 x 4200", "11:14"],
                        ["16x20", "4800 x 6000", "4:5"],
                        ["18x24", "5400 x 7200", "3:4"],
                        ["A4", "2480 x 3508", "ISO"],
                      ].map(([size, pixels, ratio], i) => (
                        <tr key={i} className="border-b border-white/10">
                          <td className="py-2.5 px-3 font-medium">{size}</td>
                          <td className="py-2.5 px-3 text-foreground-60">
                            {pixels}
                          </td>
                          <td className="py-2.5 px-3 text-foreground-60">
                            {ratio}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">The fix</p>
                    <p className="text-foreground-60 text-sm">
                      Start with the highest resolution source file you
                      have. SnapToSize ensures every output is exactly
                      300 DPI at the correct pixel dimensions &mdash; no
                      manual math, no blurry prints. For the full
                      resolution reference, check the{" "}
                      <Link
                        href="/etsy-print-sizes"
                        className="text-accent-light hover:underline"
                      >
                        print sizes guide
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Fix 4: No Bundling --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20">
                  <Package className="h-4 w-4 text-red-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  4. You&apos;re Not Bundling by Ratio
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Selling a single 8&times;10 file for $3&ndash;5 is a race to
                the bottom. Top sellers bundle sizes by ratio pack and charge
                $8&ndash;15 for the set. The perceived value jumps
                dramatically when buyers see &ldquo;includes 5&ndash;8
                sizes&rdquo; in the listing.
              </p>

              <div className="space-y-3 mb-6">
                <Card className="p-4 border-red-500/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-sm">Single 8x10 file</span>
                    </div>
                    <span className="text-sm text-foreground-60">
                      $3&ndash;5 &middot; Low conversion
                    </span>
                  </div>
                </Card>
                <Card className="p-4 border-green-500/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm">
                        Full 4:5 ratio pack (5 sizes)
                      </span>
                    </div>
                    <span className="text-sm text-foreground-60">
                      $8&ndash;12 &middot; Higher conversion
                    </span>
                  </div>
                </Card>
                <Card className="p-4 border-green-500/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm">
                        All 5 ratio packs (30 sizes)
                      </span>
                    </div>
                    <span className="text-sm text-foreground-60">
                      $10&ndash;15 &middot; Best conversion
                    </span>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">The fix</p>
                    <p className="text-foreground-60 text-sm">
                      Bundle your files into organized ZIPs by ratio pack.
                      Each ZIP stays under{" "}
                      <Link
                        href="/etsy-20mb-file-limit"
                        className="text-accent-light hover:underline"
                      >
                        Etsy&apos;s 20 MB limit
                      </Link>
                      . Name files professionally (e.g.,{" "}
                      <code className="text-accent-light">
                        artwork_8x10_300dpi.jpg
                      </code>
                      ). This is exactly what SnapToSize produces
                      automatically.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Fix 5: No Video --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20">
                  <Video className="h-4 w-4 text-red-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  5. You Don&apos;t Have Video Listings
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Etsy&apos;s algorithm gives a significant ranking boost to
                listings with video. A 5&ndash;15 second video showing your
                art in a room mockup, or cycling through the included sizes,
                makes your listing stand out in search results and increases
                click-through rate.
              </p>
              <p className="text-foreground-60 mb-4">
                You don&apos;t need professional video production. A simple
                slideshow of mockup images or a screen recording scrolling
                through the files in the ZIP works. Canva and CapCut both
                offer free tools for this.
              </p>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">The fix</p>
                    <p className="text-foreground-60 text-sm">
                      Add a 5&ndash;15 second video to every listing. Show
                      your art in a room mockup, pan across different sizes,
                      or display the ZIP contents. Etsy allows up to 1 video
                      per listing.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate Complete Size Packs Now
                </Button>
              </a>
            </div>

            {/* --- Fix 6: Tags Too Generic --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <Tag className="h-4 w-4 text-yellow-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  6. Your Tags Are Single Words
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Etsy gives you 13 tags per listing. Each tag can be a
                multi-word phrase (up to 20 characters). Using single words
                like &ldquo;art&rdquo; or &ldquo;printable&rdquo; wastes
                this opportunity. Buyers search in phrases, not individual
                words.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Tag strategy that works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="space-y-1.5">
                    <p className="text-xs font-mono text-red-400/70 uppercase tracking-wider mb-2">
                      Wasted tags
                    </p>
                    {["art", "printable", "wall decor", "download", "print"].map(
                      (tag, i) => (
                        <div
                          key={i}
                          className="text-sm text-foreground-60 px-2 py-1 bg-red-500/5 rounded border border-red-500/10"
                        >
                          {tag}
                        </div>
                      )
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs font-mono text-green-400/70 uppercase tracking-wider mb-2">
                      Effective tags
                    </p>
                    {[
                      "boho nursery print",
                      "printable wall art",
                      "gallery wall set",
                      "digital art download",
                      "minimalist art print",
                    ].map((tag, i) => (
                      <div
                        key={i}
                        className="text-sm text-foreground-60 px-2 py-1 bg-green-500/5 rounded border border-green-500/10"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">The fix</p>
                    <p className="text-foreground-60 text-sm">
                      Use all 13 tags with multi-word phrases. Include your
                      niche, size, room, style, and occasion. Match the
                      language buyers use when searching. Etsy&apos;s search
                      bar autocomplete shows you what people actually type.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Fix 7: Pricing --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <TrendingDown className="h-4 w-4 text-yellow-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  7. Your Pricing Signals Low Value
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Pricing digital downloads at $1&ndash;3 actually hurts sales.
                It signals low quality. Buyers scrolling Etsy associate cheap
                listings with amateur work. The sweet spot for printable wall
                art with multiple sizes is $8&ndash;15.
              </p>
              <p className="text-foreground-60 mb-4">
                The key is perceived value. A listing with 30 sizes across 5
                ratio packs at $12 looks like a steal. A listing with 1 size
                at $3 looks cheap. Same art, drastically different conversion
                rates.
              </p>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">The fix</p>
                    <p className="text-foreground-60 text-sm">
                      Price your complete size packs at $8&ndash;15. Mention
                      &ldquo;30 sizes included&rdquo; in your title and first
                      listing image. Use high-quality mockups that follow{" "}
                      <Link href="/etsy-listing-photo-size" className="text-accent-light hover:underline">Etsy listing photo size guidelines</Link>{" "}
                      to maximize click-through rate. This reframes the purchase from &ldquo;one
                      image file&rdquo; to &ldquo;complete print-ready
                      collection.&rdquo;
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Quick Checklist --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Your Listing Audit Checklist
              </h2>
              <Card className="p-6 md:p-8">
                <div className="space-y-3">
                  {[
                    "Include 5+ ratio packs (30 sizes minimum) in every listing",
                    "Title uses specific long-tail keywords with sizes and niche",
                    "All files are 300 DPI with correct pixel dimensions",
                    "Files bundled in organized ZIPs under 20 MB each",
                    "Listing has a video (5-15 seconds, mockup or file preview)",
                    "All 13 tags use multi-word phrases matching buyer searches",
                    "Price at $8-15 for complete packs (not $1-3 per file)",
                  ].map((item, i) => (
                    <label
                      key={i}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <div className="w-5 h-5 rounded border border-white/20 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <span className="text-xs text-foreground-60">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-foreground-60 text-sm">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </Card>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Start With the Biggest Fix"
                stat="Fix your listings in minutes"
                description="Incomplete sizes are the most common reason Etsy printables don't sell. Upload your artwork once and get all 30 sizes across 5 ratio packs at 300 DPI — organized, named, and ready to list."
                buttonText="Generate All Sizes Free"
                appUrl={appUrl}
              />
            </div>

            {/* --- Where to learn more --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Next Steps
              </h2>
              <div className="space-y-3">
                {[
                  {
                    title: "Learn which sizes to include",
                    href: "/etsy-print-sizes",
                    desc: "Complete guide to all Etsy print sizes and ratios",
                  },
                  {
                    title: "Understand print ratios",
                    href: "/etsy-print-ratios",
                    desc: "Why 2:3, 3:4, and 4:5 ratios matter for frames",
                  },
                  {
                    title: "Set up your file structure",
                    href: "/what-files-to-include-etsy-digital-download",
                    desc: "What files to include and how to organize them",
                  },
                  {
                    title: "Stay under Etsy's 20 MB limit",
                    href: "/etsy-20mb-file-limit",
                    desc: "How to bundle high-res files without hitting limits",
                  },
                  {
                    title: "Set up your complete shop",
                    href: "/how-to-sell-digital-downloads-on-etsy",
                    desc: "Full guide to selling digital downloads on Etsy",
                  },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center justify-between p-4 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                  >
                    <div>
                      <p className="font-medium text-sm group-hover:text-accent-light transition-colors">
                        {link.title}
                      </p>
                      <p className="text-xs text-foreground-60">{link.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-foreground-60 group-hover:text-accent-light transition-colors" />
                  </Link>
                ))}
              </div>
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
                      "Why are my Etsy printables not getting views?",
                    answer:
                      "Low views usually come from poor SEO: generic titles, broad tags, and missing long-tail keywords. Etsy's search algorithm also favors listings with video, recent renewals, and complete listing details. Optimize your title with specific keywords like '8x10 nursery wall art digital download' instead of 'printable art.'",
                  },
                  {
                    question:
                      "How many sizes should I offer per Etsy printable listing?",
                    answer:
                      "At minimum 5-6 sizes covering different ratios: 5x7, 8x10, 11x14, 16x20, and A4 for international buyers. Top sellers include 15-30 sizes across all five standard ratio packs (2:3, 3:4, 4:5, ISO, extras). More sizes means higher perceived value at the same price.",
                  },
                  {
                    question:
                      "Does Etsy's algorithm favor digital downloads?",
                    answer:
                      "Etsy's algorithm treats digital downloads the same as physical products. Ranking factors include listing quality score, keyword relevance, recency, reviews, and conversion rate. Listings with video get a significant boost in search visibility.",
                  },
                  {
                    question:
                      "Should I disclose AI-generated art on Etsy?",
                    answer:
                      "Yes. Since 2024, Etsy requires sellers to disclose if artwork was created with AI tools. Failing to disclose can result in listing removal. Add it to your listing description and use Etsy's AI disclosure checkbox.",
                  },
                  {
                    question:
                      "How do I compete with millions of other Etsy printable listings?",
                    answer:
                      "Three strategies: (1) Niche down - target specific styles like 'boho nursery' or 'minimalist botanical' instead of generic 'wall art.' (2) Bundle up - offer complete size packs that single-size competitors can't match. (3) Optimize relentlessly - video listings, keyword-rich titles, and comprehensive sizing all boost ranking.",
                  },
                ]}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Missing sizes could be costing you sales."
                solution="Professional sellers offer 30+ sizes per design. SnapToSize generates them all from one upload — every ratio, every standard size."
                buttonText="Add All Sizes to Your Listings"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-digital-download-not-selling" />
          </div>
        </Container>
      </section>
    </>
  );
}
