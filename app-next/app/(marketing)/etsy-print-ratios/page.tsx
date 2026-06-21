import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { RatioPackFan, type FanPrint } from "@/components/RatioPackFan";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy Print Ratios Explained: Which to Use + Full Size Chart",
  description:
    "Offering the wrong ratio? Buyers won't buy. Exact pixel dimensions for 2:3, 3:4, 4:5, and 5:7 at 300 DPI — plus the complete size chart Etsy sellers actually use.",
  alternates: { canonical: "https://snaptosize.com/etsy-print-ratios" },
  openGraph: {
    title: "Etsy Print Ratios Explained: Which to Use + Full Size Chart",
    description:
      "Offering the wrong ratio? Buyers won't buy. Exact pixel dimensions for 2:3, 3:4, 4:5, and 5:7 at 300 DPI — the complete size chart.",
    url: "https://snaptosize.com/etsy-print-ratios",
    images: [
      {
        url: "/assets/og/etsy-print-ratios.png",
        width: 1200,
        height: 630,
        alt: "Etsy Print Ratios Guide — Complete ratio reference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Print Ratios Explained: Which to Use + Full Size Chart",
    description:
      "Exact pixel dimensions for 2:3, 3:4, 4:5, and 5:7 at 300 DPI — the complete size chart Etsy sellers actually use.",
    images: ["/assets/og/etsy-print-ratios.png"],
  },
};

export default function EtsyPrintRatiosPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Print Ratios — Generate All 4 Ratio Packs From One Image",
    description:
      "Complete guide to print ratios for Etsy printable wall art sellers.",
    url: "https://snaptosize.com/etsy-print-ratios",
    datePublished: "2026-03-04",
    dateModified: "2026-03-04",
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
        name: "Etsy Print Ratios Guide",
        item: "https://snaptosize.com/etsy-print-ratios",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What ratios should an Etsy printable include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Etsy printable listings include four ratio packs: 2:3, 3:4, 4:5, and ISO. Professional sellers also include an extra pack with common sizes like 5×7 and 11×14 to avoid customer messages asking for additional sizes. This improves compatibility with nearly every standard frame size.",
        },
      },
      {
        "@type": "Question",
        name: "What is a print ratio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A print ratio describes the relationship between width and height. A 2:3 ratio means for every 2 units of width, there are 3 units of height. A 4×6 photo, 8×12 print, and 16×24 poster are all 2:3 ratio — the proportions stay the same even though the sizes differ.",
        },
      },
      {
        "@type": "Question",
        name: "Why do Etsy sellers need multiple ratios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buyers have different frames and walls. Some need 2:3 posters, others need 4:5 or ISO sizes. One ratio doesn't fit all frames. By providing all standard ratios, sellers eliminate 'do you have this in 8×10?' messages and maximize sales.",
        },
      },
      {
        "@type": "Question",
        name: "How are Etsy printable packs structured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional Etsy sellers organize downloads into ratio packs — one ZIP per ratio family. Typical structure includes 5 ZIPs: 2:3 sizes, 3:4 sizes, 4:5 sizes, ISO A-series, and extras. Each ZIP contains multiple sizes at 300 DPI for that ratio.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to prepare printable ratios manually?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creating ratio packs manually takes 1-3 hours per artwork. You need to resize the same artwork many times, calculate pixel dimensions correctly, export files individually, organize into folders, and ensure ZIPs stay under Etsy's 20MB limit. This workflow doesn't scale for multiple listings.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a tool that automatically handles all Etsy print ratios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SnapToSize generates ratio-correct files for all standard Etsy packs — 2:3, 3:4, 4:5, 5:7, square, and ISO A-series — from a single upload. Each file is cropped to the correct ratio at 300 DPI and packed into a ZIP under 20MB.",
        },
      },
    ],
  };

  const appUrl = "https://app.snaptosize.com?source=seo_ratios&kind=guide";

  /* Size Packs fan — 5 real SnapToSize exports of one Misty Nordic upload, each
     at its true ratio, whole image kept. Ordered so the center card is 2:3. */
  const ratioPrints: FanPrint[] = [
    { src: "/assets/modes-demo/ratios/misty-3x4.jpg", size: "6×8 in", tag: "3:4", ratio: 0.75 },
    { src: "/assets/modes-demo/ratios/misty-iso.jpg", size: "A4", tag: "ISO A", ratio: 0.707 },
    { src: "/assets/modes-demo/ratios/misty-2x3.jpg", size: "8×12 in", tag: "2:3", ratio: 0.667 },
    { src: "/assets/modes-demo/ratios/misty-4x5.jpg", size: "8×10 in", tag: "4:5", ratio: 0.8 },
    { src: "/assets/modes-demo/ratios/misty-extras.jpg", size: "11×14 in", tag: "Extras", ratio: 0.786 },
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
        className="relative py-16 md:py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #050a16 0%, #0a0f1e 45%, #07080f 100%)",
        }}
      >
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* soft accent glow */}
        <div
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        {/* top edge glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168,139,250,0.3) 50%, transparent)",
          }}
        />

        <Container>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Etsy Print Ratios Explained
            </h1>
            <p className="text-lg md:text-xl text-foreground-60 mb-6">
              How printable wall art sizes work — and how to prepare files correctly
            </p>
            <p className="text-foreground-60 mb-8 max-w-xl mx-auto">
              If you sell digital printable wall art on Etsy, understanding print ratios is essential.
              Buyers have different frames and walls — some need 2:3 posters, others need 4:5 or ISO sizes.
              Professional sellers provide all standard ratios in every listing to maximize sales and eliminate
              &ldquo;do you have this in 8×10?&rdquo; messages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-3">
                  Generate All Ratios Instantly
                </Button>
              </a>
              <Link href="/etsy-print-sizes">
                <Button variant="secondary" className="text-base px-6 py-3">
                  See Complete Size Chart
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Size Packs proof — one upload, every ratio (real Misty Nordic exports) */}
        <div className="relative z-10 mt-16">
          <Container>
            <RatioPackFan prints={ratioPrints} subject="Misty Nordic art" />
            <p className="text-center text-sm text-foreground-60 mt-10 max-w-2xl mx-auto">
              One upload, every standard Etsy ratio — 2:3, 3:4, 4:5, ISO A, plus extras — your
              whole image kept, up to{" "}
              <span className="text-foreground font-medium">70 print-ready files</span>, each ZIP
              under Etsy&apos;s 20&nbsp;MB limit.{" "}
              <span className="text-foreground-40">Tap any print to enlarge.</span>
            </p>
          </Container>
        </div>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            <QuickAnswer question="What are the standard print ratios for Etsy?">
              Four ratios cover nearly every buyer: 2:3 (e.g. 4×6, 12×18), 3:4 (e.g. 6×8, 12×16), 4:5 (e.g. 8×10, 16×20), and ISO A-series (A4, A3, A2). Most buyers have 4:5 frames, so prioritize that ratio. Offering all four in one listing eliminates &ldquo;do you have this in 8×10?&rdquo; messages and reduces returns.
            </QuickAnswer>

            {/* ===== SECTION 1: What Are Print Ratios? ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Are Print Ratios?
              </h2>
              <p className="text-foreground-60 mb-4">
                A print ratio describes the relationship between width and height.
                A 2:3 ratio means for every 2 units of width, there are 3 units of height.
                A 4×6 photo, 8×12 print, and 16×24 poster are all 2:3 ratio — the proportions stay the same.
              </p>

              {/* Infographic with overlay */}
              <div className="my-8 relative rounded-lg overflow-hidden border border-border">
                {/* Background Image */}
                <Image
                  src="/assets/hero_og_etsy-print-ratios.png"
                  alt="Etsy printable wall art ratio chart showing 2:3, 3:4, 4:5, ISO and extra print sizes"
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  {/* Title Section */}
                  <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Etsy Printable Ratios
                    </h3>
                    <p className="text-lg text-white/90">
                      Most Etsy printable wall art listings include these ratio groups
                    </p>
                  </div>

                  {/* Ratio Boxes Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl">
                    {/* Box 1: 2:3 Ratio */}
                    <div className="bg-black/40 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white mb-1">2:3</p>
                      <p className="text-sm text-white/80">Ratio</p>
                    </div>

                    {/* Box 2: 3:4 Ratio */}
                    <div className="bg-black/40 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white mb-1">3:4</p>
                      <p className="text-sm text-white/80">Ratio</p>
                    </div>

                    {/* Box 3: 4:5 Ratio */}
                    <div className="bg-black/40 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white mb-1">4:5</p>
                      <p className="text-sm text-white/80">Ratio</p>
                    </div>

                    {/* Box 4: ISO */}
                    <div className="bg-black/40 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white mb-1">ISO</p>
                      <p className="text-sm text-white/80">A-Series</p>
                    </div>

                    {/* Box 5: Extras */}
                    <div className="bg-black/40 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white mb-1">Extras</p>
                      <p className="text-sm text-white/80">Common Sizes</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-foreground-60 mb-6">
                SnapToSize automatically generates all of these printable ratio packs from a single image.
              </p>

              <p className="text-foreground-60 mb-6">
                Buyers choose prints based on their frame size. If someone has an 8×10 frame (4:5 ratio),
                they need a 4:5 file. If they have a <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18 frame</Link> (2:3 ratio), they need a 2:3 file.
                One ratio doesn&apos;t fit all frames — that&apos;s why Etsy sellers need to provide multiple ratios.
                Check how much of your image gets cropped for each ratio with our{" "}
                <Link href="/etsy-print-size-calculator" className="text-accent-light hover:underline">print size calculator</Link>.
              </p>

              <Card>
                <h3 className="font-semibold mb-3">Why ratios matter more than exact sizes:</h3>
                <p className="text-sm text-foreground-60 mb-3">
                  Buyers don&apos;t all want the same size. Some want small prints (4×6), others want large posters (24×36).
                  But both of those are 2:3 ratio. By providing ratio packs, you cover small to large sizes
                  without creating hundreds of individual files.
                </p>
                <p className="text-sm text-foreground-60">
                  This is why professional Etsy sellers organize downloads by ratio — not by individual size.
                </p>
                <p className="text-sm text-foreground-60 mt-3">
                  <a href={appUrl} className="text-accent-light hover:underline">SnapToSize</a> builds every ratio pack from one upload, keeping your whole image with nothing cut off. Need a different shape than your original? <Link href="/distortion-free-crop" className="text-accent-light hover:underline">Reframe to any ratio with Perfect Fit</Link> — you choose exactly what stays in frame.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 2: The Core Print Ratios Etsy Sellers Use ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Core Print Ratios Etsy Sellers Use
              </h2>
              <p className="text-foreground-60 mb-6">
                Most Etsy printable wall art sellers provide these four ratio families.
                Together, they cover virtually every standard frame size. If you want to know which specific sizes within these ratios drive the most sales, see the{" "}
                <Link href="/most-popular-etsy-print-sizes-to-sell" className="text-accent-light hover:underline">most popular Etsy print sizes to sell</Link>.
              </p>

              <div className="space-y-6">
                {/* 2:3 Ratio */}
                <Card>
                  <h3 className="text-xl font-bold mb-2">2:3 Ratio</h3>
                  <p className="text-sm text-foreground-60 mb-3">
                    The most common ratio for vertical wall art. Matches frames at IKEA, Target, Amazon,
                    and most home goods stores. Includes sizes like 4×6, 6×9, 8×12, <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18</Link>, 16×24, 20×30.
                  </p>
                  <p className="text-xs text-foreground-60">
                    <strong>Why it matters:</strong> If you only provide one ratio, make it 2:3.
                    This is the default for most vertical posters and photo frames.
                  </p>
                </Card>

                {/* 3:4 Ratio */}
                <Card>
                  <h3 className="text-xl font-bold mb-2">3:4 Ratio</h3>
                  <p className="text-sm text-foreground-60 mb-3">
                    Classic photo frame ratio. Found in standard picture frames and art prints.
                    Includes sizes like 6×8, 9×12, 12×16,{" "}
                    <Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">18×24</Link>.
                  </p>
                  <p className="text-xs text-foreground-60">
                    <strong>Why it matters:</strong> Many buyers have existing 3:4 frames from family photos.
                    Missing this ratio means losing sales to buyers with standard frames.
                  </p>
                </Card>

                {/* 4:5 Ratio */}
                <Card>
                  <h3 className="text-xl font-bold mb-2">4:5 Ratio</h3>
                  <p className="text-sm text-foreground-60 mb-3">
                    Home of the iconic 8×10 — one of the most requested sizes on Etsy.
                    Also includes 16×20 (very popular poster size). Sizes: 8×10, 12×15, 16×20, 20×25, 24×30.
                  </p>
                  <p className="text-xs text-foreground-60">
                    <strong>Why it matters:</strong> 8×10 is a universal frame size.
                    If your listing doesn&apos;t include 8×10, expect messages asking for it.
                  </p>
                </Card>

                {/* ISO A-Series */}
                <Card>
                  <h3 className="text-xl font-bold mb-2">ISO A-Series (International Standard)</h3>
                  <p className="text-sm text-foreground-60 mb-3">
                    Standard print sizes in Europe, Australia, Asia, and most of the world.
                    Includes A5, <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link>, A3, <Link href="/etsy-a2-print-size" className="text-accent-light hover:underline">A2</Link>, A1. These sizes use millimeters (not inches) and a consistent 1:√2 ratio.
                  </p>
                  <p className="text-xs text-foreground-60">
                    <strong>Why it matters:</strong> If you only offer US sizes (inches),
                    you lose international buyers. Including ISO sizes = fewer messages, higher conversion.
                  </p>
                </Card>

                {/* Extras */}
                <Card accent>
                  <h3 className="text-xl font-bold mb-2">Extras (Common Sizes Most Sellers Forget)</h3>
                  <p className="text-sm text-foreground-60 mb-3">
                    These don&apos;t fit standard ratios but are frequently requested:
                    5×7 (greeting cards), 8.5×11 (US Letter, home printing), <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11×14</Link> (photo mat standard),
                    <Link href="/etsy-13x19-print-size" className="text-accent-light hover:underline">13×19</Link> (fine art poster), <Link href="/etsy-20x24-print-size" className="text-accent-light hover:underline">20×24</Link>.
                  </p>
                  <p className="text-xs text-foreground-60">
                    <strong>Why it matters:</strong> These are some of the most common requests.
                    Skip them and you&apos;ll spend time fulfilling custom size requests.
                  </p>
                </Card>
              </div>
            </div>

            {/* ===== NEW SECTION: What Ratios Should an Etsy Printable Include? ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Ratios Should an Etsy Printable Include?
              </h2>
              <p className="text-foreground-60 mb-6">
                Most Etsy printable listings include four ratio packs: 2:3, 3:4, 4:5, and ISO.
                Professional sellers also include an extra pack with common sizes like 5×7 and 11×14
                to avoid customer messages asking for additional sizes. This improves compatibility
                with nearly every standard frame size.
              </p>
            </div>

            {/* ===== SECTION 3: How Etsy Printable Packs Are Structured ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How Etsy Printable Packs Are Structured
              </h2>
              <p className="text-foreground-60 mb-6">
                Professional Etsy sellers don&apos;t upload hundreds of individual files.
                Instead, they organize downloads into <strong>ratio packs</strong> — one ZIP per ratio family.
              </p>

              <Card>
                <h3 className="font-semibold mb-4">Typical Etsy digital download structure:</h3>
                <div className="space-y-3 text-sm text-foreground-60">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-semibold text-xs">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">ZIP 1 — 2:3 ratio sizes</p>
                      <p className="text-xs">Contains 4×6, 6×9, 8×12, 10×15, <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18</Link>, 16×24, 20×30 at 300 DPI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-semibold text-xs">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">ZIP 2 — 3:4 ratio sizes</p>
                      <p className="text-xs">Contains 6×8, 9×12, 12×16, 15×20, 18×24 at 300 DPI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-semibold text-xs">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">ZIP 3 — 4:5 ratio sizes</p>
                      <p className="text-xs">Contains 8×10, 12×15, 16×20, 20×25, 24×30 at 300 DPI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-semibold text-xs">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">ZIP 4 — ISO A-series</p>
                      <p className="text-xs">Contains A5, A4, A3, A2, A1 at 300 DPI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center text-accent-light font-semibold text-xs">
                      5
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">ZIP 5 — Extras</p>
                      <p className="text-xs">Contains 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24 at 300 DPI</p>
                    </div>
                  </div>
                </div>
              </Card>

              <p className="text-sm text-foreground-60 mt-6">
                Each ZIP contains multiple files at 300 DPI. Buyers download all five ZIPs,
                choose the ratio that matches their frame, and print. No messages asking for custom sizes.
                No manual resizing after purchase.
              </p>
            </div>

            {/* ===== SECTION 4: Why Printable Ratios Are Hard to Prepare ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Printable Ratios Are Hard to Prepare
              </h2>
              <p className="text-foreground-60 mb-6">
                Creating ratio packs manually is one of the most time-consuming parts of running an Etsy printables business.
                For each new artwork, you need to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    step: "1",
                    title: "Resize the same artwork many times",
                    description: "Open each file, resize to exact dimensions, export. Repeat for 20-30 sizes per artwork.",
                  },
                  {
                    step: "2",
                    title: "Calculate pixel dimensions correctly",
                    description: "Convert inches to pixels at 300 DPI (e.g., 12×18 = 3600×5400 pixels). Math errors = blurry prints.",
                  },
                  {
                    step: "3",
                    title: "Export files individually",
                    description: "Save each size with correct filename, format (JPG), and quality settings.",
                  },
                  {
                    step: "4",
                    title: "Organize into ratio folders",
                    description: "Create folder structure, move files into correct ratio packs, create ZIPs.",
                  },
                  {
                    step: "5",
                    title: "Stay under Etsy's 20MB limit",
                    description: "Check ZIP file sizes. If over 20MB, compress files until they fit. Trial and error.",
                  },
                  {
                    step: "6",
                    title: "Repeat for every new listing",
                    description: "This entire workflow happens for each artwork you sell. 1-3 hours per listing.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background-5 border border-border"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-foreground-60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card accent>
                <p className="text-sm text-foreground-60">
                  <strong>The reality:</strong> Most Etsy sellers spend more time resizing files than creating artwork.
                  This workflow doesn&apos;t scale. If you want to list 50 artworks, that&apos;s 50-150 hours of manual resizing.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 5: How SnapToSize Solves This ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How SnapToSize Solves This
              </h2>
              <p className="text-foreground-60 mb-6">
                SnapToSize eliminates the entire manual workflow. Upload one high-resolution artwork,
                and the system generates all required ratios automatically.
              </p>

              <Card>
                <h3 className="font-semibold mb-4">The workflow:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Upload one image</p>
                      <p className="text-sm text-foreground-60">
                        Your original high-resolution artwork (JPG or PNG, any size above 2400 pixels).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">SnapToSize generates all ratios</p>
                      <p className="text-sm text-foreground-60">
                        System creates 2:3, 3:4, 4:5, ISO, and extras ratio packs — all at 300 DPI,
                        organized in separate ZIPs, optimized for <Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">Etsy&apos;s 20MB limit</Link>.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Download Etsy-ready files</p>
                      <p className="text-sm text-foreground-60">
                        Receive five ZIPs, each containing all sizes for that ratio.
                        Upload directly to your Etsy listing. Done.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-8">
                {[
                  "All common print ratios included",
                  "Every file exported at 300 DPI",
                  "Organized ZIP packs by ratio",
                  "Optimized for Etsy's 20MB limit",
                  "Professional file naming",
                  "No design skills required",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0" />
                    <span className="text-sm text-foreground-60">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-foreground-60 mb-4">
                  Create every Etsy printable ratio in seconds — instead of manually resizing 20+ files.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Generate Etsy Print Files
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-3">
                  Free plan available. No credit card required.
                </p>
              </div>
            </div>

            {/* ===== SECTION 6: Complete Etsy Size Chart ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Complete Etsy Size Chart
              </h2>
              <p className="text-foreground-60 mb-6">
                This guide explains print ratios and pack structure. For exact pixel dimensions
                at 300 DPI for every size, see the complete reference:
              </p>
              <Card accent>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold mb-1">Complete Etsy Print Sizes Guide</p>
                    <p className="text-sm text-foreground-60">
                      Full size tables with exact pixel dimensions for 2:3, 3:4, 4:5, ISO, and extras.
                    </p>
                  </div>
                  <Link href="/etsy-print-sizes">
                    <Button variant="secondary" className="whitespace-nowrap">
                      Complete Etsy print size chart
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* ===== FINAL CTA ===== */}
            <div>
              <FinalCTA
                heading="Stop Resizing Files Manually"
                stat="Every ratio optimized from one image"
                description="Generate all Etsy print ratios in seconds. Upload once, download every ratio pack, ready to upload to your listing."
                buttonText="Start Free"
                appUrl={appUrl}
              />
            </div>

            {/* Internal links for SEO */}
            <RelatedPages currentSlug="etsy-print-ratios" />
          </div>
        </Container>
      </section>
    </>
  );
}
