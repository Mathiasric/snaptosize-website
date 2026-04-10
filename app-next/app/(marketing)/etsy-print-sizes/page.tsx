import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Etsy Print Sizes Explained: Size & Ratio Chart",
  description:
    "Every Etsy print size with exact pixel dimensions at 300 DPI. Copy-paste the sizes top sellers use to maximize sales per listing.",
  alternates: { canonical: "https://snaptosize.com/etsy-print-sizes" },
  openGraph: {
    title: "Etsy Print Sizes Explained: Size & Ratio Chart",
    description:
      "Every Etsy print size with exact pixel dimensions at 300 DPI. The sizes top sellers use to maximize sales.",
    url: "https://snaptosize.com/etsy-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Print Sizes Guide — Complete ratio and size reference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Print Sizes Explained: Size & Ratio Chart",
    description:
      "Every Etsy print size with exact pixel dimensions at 300 DPI. The complete reference for sellers.",
    images: ["/assets/og/etsy-print-sizes.png"],
  },
};

export default function EtsyPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "All Etsy Print Sizes — 30+ Sizes From One Upload (Free Tool)",
    description:
      "Complete Etsy print sizes reference with exact pixel dimensions at 300 DPI for every standard vertical ratio.",
    url: "https://snaptosize.com/etsy-print-sizes",
    datePublished: "2025-02-10",
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
        name: "Etsy Print Sizes Guide",
        item: "https://snaptosize.com/etsy-print-sizes",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I upload to Etsy for digital downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional sellers deliver ZIP packs grouped by ratio: 2:3, 3:4, 4:5, ISO A-series, and optional extras. Each ratio pack contains multiple sizes at 300 DPI (small, medium, large). This eliminates 'do you have 8×10?' requests and gives buyers instant choice.",
        },
      },
      {
        "@type": "Question",
        name: "How many files should an Etsy print set include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A complete set includes 4–5 ratio packs, each covering small to large sizes. Inside each pack: typically 4–8 sizes ranging from small prints to large posters. Buyers get instant choice without hundreds of individual files.",
        },
      },
      {
        "@type": "Question",
        name: "How do I avoid cropping across different print ratios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Resize without cropping. Your full composition stays intact across every ratio — no lost edges, no surprise cut-offs. What buyers see in your listing photos matches exactly what they download. This reduces complaints and refunds.",
        },
      },
      {
        "@type": "Question",
        name: "Why do buyers ask for ISO sizes (A4, A3, A2)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ISO A-series sizes are the standard in most of the world (Europe, Australia, Asia). Including ISO sizes reduces messages and increases conversion from international traffic.",
        },
      },
      {
        "@type": "Question",
        name: "My Etsy download file is over 20MB — what do I do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Etsy has a 20MB limit per digital file. Group by ratio (one ZIP per ratio keeps file counts manageable) and use optimized JPG files. SnapToSize auto-optimizes every ZIP to stay under 20MB.",
        },
      },
    ],
  };

  const appUrl = "https://app.snaptosize.com?source=seo_pillar&kind=guide";
  const packsUrl = "https://app.snaptosize.com/app/packs";

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
      <section className="relative overflow-hidden min-h-[80vh] flex items-center -mt-4">
        {/* Background: dark with subtle grid */}
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow behind frames */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent-light/[0.06] rounded-full blur-[120px]" />

        <div className="relative z-10"><Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-10 md:py-14">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light/10 border border-accent-light/20 mb-5">
                <span className="text-xs font-semibold text-accent-light tracking-wide">Every Etsy Print Size</span>
                <span className="text-xs text-foreground-60">4 ratios + common sizes &middot; 30+ dimensions</span>
              </div>

              <h1 className="font-bold tracking-tight mb-4">
                <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5">
                  Etsy Print Sizes
                </span>
                <span className="block text-lg md:text-xl lg:text-2xl font-semibold text-foreground-60">
                  Exact pixel dimensions at 300 DPI for every ratio
                </span>
              </h1>
              <p className="text-base text-foreground-60 mb-6 max-w-lg">
                Every Etsy print ratio (2:3, 3:4, 4:5, ISO + extras) at 300&nbsp;DPI &mdash;
                with exact pixel dimensions, packaging rules, and ready-to-upload ZIP packs.
              </p>

              <div className="mb-5">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Etsy Sizes Instantly
                  </Button>
                </a>
                <p className="text-sm text-foreground-60 mt-2">
                  Free plan available. No credit card required.
                </p>
              </div>

              {/* Micro-benefit chips */}
              <div className="flex flex-wrap gap-2">
                {["All 4 ratios + extras", "Zero cropping", "Under 20MB per ZIP"].map((text) => (
                  <div key={text} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border">
                    <Check className="h-3 w-3 text-accent-light flex-shrink-0" />
                    <span className="text-xs text-foreground-60 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Gallery Wall — CSS-only ratio frames */}
            <div className="hidden lg:block relative" aria-hidden="true">
              <div className="relative w-full h-[480px]">
                {/* 2:3 frame — tallest */}
                <div
                  className="absolute rounded-lg border border-accent-light/30 bg-accent-light/[0.03] shadow-[0_0_30px_-8px_rgba(139,92,246,0.15)]"
                  style={{ width: '120px', height: '180px', top: '20px', left: '30px' }}
                >
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-accent-light/60">2:3</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground-60/40">4&times;6</div>
                </div>

                {/* 3:4 frame */}
                <div
                  className="absolute rounded-lg border border-purple-400/25 bg-purple-400/[0.03] shadow-[0_0_24px_-8px_rgba(168,85,247,0.12)]"
                  style={{ width: '130px', height: '173px', top: '50px', left: '170px' }}
                >
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-purple-400/60">3:4</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground-60/40">9&times;12</div>
                </div>

                {/* 4:5 frame — widest */}
                <div
                  className="absolute rounded-lg border border-blue-400/25 bg-blue-400/[0.03] shadow-[0_0_24px_-8px_rgba(96,165,250,0.12)]"
                  style={{ width: '140px', height: '175px', top: '0px', left: '320px' }}
                >
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-blue-400/60">4:5</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground-60/40">8&times;10</div>
                </div>

                {/* ISO A4 frame */}
                <div
                  className="absolute rounded-lg border border-emerald-400/25 bg-emerald-400/[0.03] shadow-[0_0_24px_-8px_rgba(52,211,153,0.12)]"
                  style={{ width: '115px', height: '163px', top: '220px', left: '60px' }}
                >
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-emerald-400/60">ISO</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground-60/40">A4</div>
                </div>

                {/* 5×7 Extra */}
                <div
                  className="absolute rounded-lg border border-amber-400/25 bg-amber-400/[0.03] shadow-[0_0_24px_-8px_rgba(251,191,36,0.1)]"
                  style={{ width: '100px', height: '140px', top: '250px', left: '200px' }}
                >
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-amber-400/60">Extra</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground-60/40">5&times;7</div>
                </div>

                {/* Large 24×36 poster frame — background accent */}
                <div
                  className="absolute rounded-lg border border-accent-light/15 bg-accent-light/[0.02]"
                  style={{ width: '160px', height: '240px', top: '195px', left: '320px' }}
                >
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-accent-light/40">2:3</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground-60/30">24&times;36</div>
                </div>

                {/* Small 11×14 frame */}
                <div
                  className="absolute rounded-lg border border-rose-400/20 bg-rose-400/[0.02]"
                  style={{ width: '88px', height: '112px', top: '140px', left: '0px' }}
                >
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-rose-400/50">Extra</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground-60/30">11&times;14</div>
                </div>

                {/* Decorative: "300 DPI" badge */}
                <div
                  className="absolute px-3 py-1.5 rounded-md bg-surface border border-border"
                  style={{ bottom: '20px', left: '80px' }}
                >
                  <span className="text-xs font-mono text-foreground-60">300 DPI &middot; JPG &middot; ZIP</span>
                </div>
              </div>
            </div>
          </div>
        </Container></div>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-4xl space-y-16">
            {/* Visual: Master size overview */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-print-sizes-master.png" alt="All 28 Etsy print sizes organized by ratio pack — 2:3, 3:4, 4:5, ISO A-Series, and Extras with pixel dimensions at 300 DPI" width={1200} height={600} className="w-full h-auto" loading="lazy" />
            </div>

            {/* ===== SECTION 1: What Size Should I Upload? (shortened) ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Size Should I Upload to Etsy?
              </h2>
              <p className="text-foreground-60 mb-4">
                There&apos;s no single correct upload size. Buyers have different
                frames and walls. For vertical wall art, you need{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-foreground-60 hover:underline font-semibold"
                >
                  multiple aspect ratios
                </Link>{" "}
                &mdash; each with exact pixel dimensions at 300&nbsp;DPI. Use our{" "}
                <Link href="/etsy-print-size-calculator" className="text-accent-light hover:underline">print size calculator</Link>{" "}
                to check which sizes your image can print without cropping.
              </p>
              <Card accent>
                <p className="text-sm text-foreground-60">
                  <strong>What professional sellers do:</strong> Upload bundled{" "}
                  <Link
                    href="/pricing"
                    className="text-foreground-60 hover:underline"
                  >
                    ratio packs
                  </Link>{" "}
                  &mdash; one ZIP per ratio group &mdash; giving buyers maximum
                  choice and eliminating &ldquo;do you have this in
                  8&times;10?&rdquo; messages.
                </p>
              </Card>
            </div>

            {/* ===== SECTION: Why Cropping Ruins Print Sets ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Cropping Ruins Print Sets
              </h2>
              <p className="text-foreground-60 mb-4">
                Most resize tools crop to force your artwork into a new ratio.
                That means parts of your composition disappear &mdash; and what
                buyers print doesn&apos;t match what they saw in your listing.
              </p>
              <ul className="space-y-2 text-foreground-60 mb-8">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                  <span>Carefully positioned edge elements get cut off</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                  <span>
                    Different ratios show different compositions of the same art
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                  <span>
                    Buyer complaints and returns from unexpected cropping
                  </span>
                </li>
              </ul>

              {/* ===== BLOCK A: Typical crop-to-fit ===== */}
              <div className="mt-10 mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">
                    Typical crop-to-fit (what most tools do)
                  </h3>
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-error/10 text-error border border-error/20">
                    Typical crop tool
                  </span>
                </div>
                <p className="text-sm text-foreground-60 mb-5">
                  Same artwork, different ratios &mdash; edges get cut.
                </p>
                <div className="flex flex-wrap justify-center items-end gap-4">
                  {[
                    { src: "/assets/Composition_Pictures/poppies_orginal_2x3.jpg", alt: "Original poppies artwork in 2:3 ratio", ratio: "2 / 3", label: "2:3 (Original)" },
                    { src: "/assets/Composition_Pictures/poppies_BAD_crop_2700x3600.png", alt: "Poppies artwork cropped to 3:4 — edges lost", ratio: "3 / 4", label: "3:4" },
                    { src: "/assets/Composition_Pictures/poppies_BAD_crop_2400x3000.png", alt: "Poppies artwork cropped to 4:5 — edges lost", ratio: "4 / 5", label: "4:5" },
                  ].map((img) => (
                    <div key={img.label} className="flex flex-col items-center">
                      <div
                        className="relative rounded-lg overflow-hidden border border-error/20 shadow-[0_0_8px_-2px_rgba(239,68,68,0.2)] h-[220px] sm:h-[260px] md:h-[300px] transition-all duration-150 hover:-translate-y-0.5 hover:border-error/40 hover:shadow-md"
                        style={{ aspectRatio: img.ratio }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 45vw, 200px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <p className="text-xs text-foreground-60 mt-2 text-center">
                        {img.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground-60 mt-3 text-center">
                  Same file. Different damage.
                </p>
                <p className="text-xs text-foreground-60 mt-1 text-center">
                  Different ratios. Different lost details.
                </p>
              </div>

              {/* ===== COMMON MISTAKES SECTION ===== */}
              <div className="mt-8 mb-12">
                <h3 className="text-2xl font-bold mb-2">
                  Common Etsy Print Mistakes (That Cost You Time and Sales)
                </h3>
                <p className="text-sm text-foreground-60 mb-6">
                  Most digital print sellers make at least one of these.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      title: "Uploading only one size",
                      description:
                        <>Buyers ask for 8×10, <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link>, <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11×14</Link>. You end up resizing manually per order.</>,
                    },
                    {
                      title: "Cropping to force ratios",
                      description:
                        "Each ratio becomes a different composition. Edges disappear — refunds start here.",
                    },
                    {
                      title: "Oversized files that fail uploads",
                      description:
                        "Etsy's 20MB limit gets hit fast. Random compression creates inconsistent results.",
                    },
                    {
                      title: "Ignoring ISO sizes (A4/A3/A2)",
                      description:
                        "International buyers don't use inches. Missing ISO quietly kills conversions.",
                    },
                    {
                      title: "Messy file naming",
                      description:
                        "Confusing filenames create support messages and lower perceived quality.",
                    },
                    {
                      title: "No clear instructions for buyers",
                      description:
                        "Buyers don't know which file to print. That triggers messages, confusion, and lower review quality.",
                    },
                  ].map((mistake, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background-5 border border-border hover:-translate-y-0.5 transition-all duration-150 shadow-sm hover:shadow-md"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          {mistake.title}
                        </h4>
                        <p className="text-sm text-foreground-60">
                          {mistake.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-foreground-60 text-center">
                  Professional sellers use{" "}
                  <a
                    href="https://app.snaptosize.com/app/packs"
                    className="text-foreground-60 hover:underline"
                  >
                    structured, ratio-based exports
                  </a>{" "}
                  — not manual resizing.
                </p>
              </div>

              {/* CTA #1: After Common Mistakes */}
              <Card accent className="p-6 my-8">
                <h3 className="text-xl font-bold mb-3">
                  Generate All Etsy Print Sizes Automatically
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  Upload one image and instantly generate every Etsy-ready print size — perfectly organized and ready to upload.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-6 py-2.5">
                    Generate All Etsy Sizes
                  </Button>
                </a>
              </Card>

              {/* ===== BLOCK B: SnapToSize preserves ===== */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">
                    One Upload. Every Ratio. Zero Cropping.
                  </h3>
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-5 text-accent-light border border-accent-30">
                    SnapToSize
                  </span>
                </div>
                <p className="text-xs text-foreground-60 mb-1">
                  Built for{" "}
                  <Link
                    href="/pricing"
                    className="text-foreground-60 hover:underline"
                  >
                    serious Etsy digital sellers
                  </Link>
                  .
                </p>
                <p className="text-sm text-foreground-60 mb-5">
                  Your original composition stays intact across every size
                  &mdash; with exact pixel dimensions at 300&nbsp;DPI.
                </p>
                <div className="flex flex-wrap justify-center items-end gap-4">
                  {[
                    { src: "/assets/Composition_Pictures/Koi_2x3_12x18.jpg", alt: "Koi artwork preserved in 2:3 ratio", ratio: "2 / 3", label: "2:3" },
                    { src: "/assets/Composition_Pictures/Koi_3x4_18x24.jpg", alt: "Koi artwork preserved in 3:4 ratio", ratio: "3 / 4", label: "3:4" },
                    { src: "/assets/Composition_Pictures/Koi_4x5_15x20.jpg", alt: "Koi artwork preserved in 4:5 ratio", ratio: "4 / 5", label: "4:5" },
                    { src: "/assets/Composition_Pictures/Koi_a2.jpg", alt: "Koi artwork preserved in ISO A2 format", ratio: "420 / 594", label: "ISO A2" },
                    { src: "/assets/Composition_Pictures/Koi_common_11x14.jpg", alt: "Koi artwork preserved in 11\u00d714 format", ratio: "11 / 14", label: "11\u00d714" },
                  ].map((img) => (
                    <div key={img.label} className="flex flex-col items-center">
                      <div
                        className="relative rounded-lg overflow-hidden border border-accent-30 h-[220px] sm:h-[260px] md:h-[300px] transition-all duration-150 hover:-translate-y-0.5 hover:border-accent-light hover:shadow-[0_4px_16px_-4px_rgba(139,92,246,0.25)]"
                        style={{ aspectRatio: img.ratio }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 45vw, 160px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <p className="text-xs text-foreground-60 mt-2 text-center">
                        {img.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Guarantee pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
                  {[
                    "Save hours per listing",
                    "One upload \u2192 complete ratio packs",
                    "Zero surprise cropping",
                    "Optimized for Etsy's 20MB limit",
                    "Preview = delivered file",
                  ].map((text) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/5 px-3 py-2"
                    >
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground-60">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Social proof */}
                <div className="mt-10 text-center">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Used by serious Etsy digital sellers.
                  </p>
                  <p className="text-xs text-foreground-60">
                    Over 18,000 size packs generated.
                  </p>
                </div>

                <p className="text-sm text-foreground-60 mt-8">
                  If you need different compositions per ratio, crop your source
                  artwork intentionally before uploading.
                </p>
              </div>
            </div>

            {/* ===== SECTION: All Standard Vertical Print Ratios ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                All Standard Vertical Print Ratios
              </h2>
              <p className="text-foreground-60 mb-8">
                Five ratio groups covering virtually every frame and{" "}
                <Link href="/sizes" className="text-foreground-60 hover:underline">
                  print size
                </Link>{" "}
                on Etsy. All pixel dimensions at <strong>300&nbsp;DPI</strong>.
              </p>

              <div className="space-y-12">
                {/* 2:3 Ratio */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    2:3 Ratio (Most Common for Wall Art)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    The most widely used ratio for vertical wall art. Matches
                    common frames at IKEA, Target, and Amazon.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">
                              <Link href="/etsy-4x6-print-size" className="text-accent-light hover:underline">
                                4 &times; 6
                              </Link>
                            </td>
                            <td className="py-2 pr-4">1200 &times; 1800</td>
                            <td className="py-2">Small prints, cards</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">6 &times; 9</td>
                            <td className="py-2 pr-4">1800 &times; 2700</td>
                            <td className="py-2">Medium print / book cover</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">8 &times; 12</td>
                            <td className="py-2 pr-4">2400 &times; 3600</td>
                            <td className="py-2">Medium prints</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">10 &times; 15</td>
                            <td className="py-2 pr-4">3000 &times; 4500</td>
                            <td className="py-2">Standard poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">12 &times; 18</td>
                            <td className="py-2 pr-4">3600 &times; 5400</td>
                            <td className="py-2">Large poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">16 &times; 24</td>
                            <td className="py-2 pr-4">4800 &times; 7200</td>
                            <td className="py-2">Statement piece</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">20 &times; 30</td>
                            <td className="py-2 pr-4">6000 &times; 9000</td>
                            <td className="py-2">Extra large</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">24 &times; 36</td>
                            <td className="py-2 pr-4">7200 &times; 10800</td>
                            <td className="py-2">Maximum size (single export)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* 3:4 Ratio */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    3:4 Ratio (Classic Photo Frame)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Matches classic photo and art frames. Essential for buyers
                    with standard frames.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">6 &times; 8</td>
                            <td className="py-2 pr-4">1800 &times; 2400</td>
                            <td className="py-2">Small framed print</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">9 &times; 12</td>
                            <td className="py-2 pr-4">2700 &times; 3600</td>
                            <td className="py-2">Medium print</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">12 &times; 16</td>
                            <td className="py-2 pr-4">3600 &times; 4800</td>
                            <td className="py-2">Standard poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">15 &times; 20</td>
                            <td className="py-2 pr-4">4500 &times; 6000</td>
                            <td className="py-2">Large poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4"><Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">18 &times; 24</Link></td>
                            <td className="py-2 pr-4">5400 &times; 7200</td>
                            <td className="py-2">Gallery size</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">24 &times; 32</td>
                            <td className="py-2 pr-4">7200 &times; 9600</td>
                            <td className="py-2">Maximum size (single export)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* 4:5 Ratio */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    4:5 Ratio (Traditional Art)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Home of the iconic 8&times;10 &mdash; one of the most
                    requested sizes on Etsy.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">8 &times; 10</td>
                            <td className="py-2 pr-4">2400 &times; 3000</td>
                            <td className="py-2">Classic frame size</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">12 &times; 15</td>
                            <td className="py-2 pr-4">3600 &times; 4500</td>
                            <td className="py-2">Medium print</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">16 &times; 20</td>
                            <td className="py-2 pr-4">4800 &times; 6000</td>
                            <td className="py-2">Popular poster size</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">20 &times; 25</td>
                            <td className="py-2 pr-4">6000 &times; 7500</td>
                            <td className="py-2">Large format</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">24 &times; 30</td>
                            <td className="py-2 pr-4">7200 &times; 9000</td>
                            <td className="py-2">Maximum size</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* ISO A-Series */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    ISO A-Series (International Standard)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Standard print sizes in Europe, Australia, and most of the
                    world. Essential for international buyers.
                  </p>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size</th>
                            <th className="pb-2 pr-4">Dimensions (mm)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4"><Link href="/etsy-a5-print-size" className="text-accent-light hover:underline">A5</Link></td>
                            <td className="py-2 pr-4">148 &times; 210</td>
                            <td className="py-2 pr-4">1748 &times; 2480</td>
                            <td className="py-2">Small prints</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">A4</td>
                            <td className="py-2 pr-4">210 &times; 297</td>
                            <td className="py-2 pr-4">2480 &times; 3508</td>
                            <td className="py-2">Standard document</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4"><Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link></td>
                            <td className="py-2 pr-4">297 &times; 420</td>
                            <td className="py-2 pr-4">3508 &times; 4961</td>
                            <td className="py-2">Medium poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4"><Link href="/etsy-a2-print-size" className="text-accent-light hover:underline">A2</Link></td>
                            <td className="py-2 pr-4">420 &times; 594</td>
                            <td className="py-2 pr-4">4961 &times; 7016</td>
                            <td className="py-2">Large poster</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4"><Link href="/etsy-a1-print-size" className="text-accent-light hover:underline">A1</Link></td>
                            <td className="py-2 pr-4">594 &times; 841</td>
                            <td className="py-2 pr-4">7016 &times; 9933</td>
                            <td className="py-2">Extra large</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">A0</td>
                            <td className="py-2 pr-4">841 &times; 1189</td>
                            <td className="py-2 pr-4">9933 &times; 14043</td>
                            <td className="py-2">Oversized poster (single export)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* Extras */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Extras (Sizes Most Sellers Forget)
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    Some of the most requested sizes on Etsy. Skip these and you
                    lose sales.
                  </p>
                  <Card accent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size (inches)</th>
                            <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                            <th className="pb-2">Why It Matters</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">
                              <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">
                                5 &times; 7
                              </Link>
                            </td>
                            <td className="py-2 pr-4">1500 &times; 2100</td>
                            <td className="py-2">
                              Greeting cards, small frames
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">
                              <Link href="/etsy-8-5x11-print-size" className="text-accent-light hover:underline">
                                8.5 &times; 11
                              </Link>
                            </td>
                            <td className="py-2 pr-4">2550 &times; 3300</td>
                            <td className="py-2">
                              US Letter &mdash; home printing
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">
                              <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">
                                11 &times; 14
                              </Link>
                            </td>
                            <td className="py-2 pr-4">3300 &times; 4200</td>
                            <td className="py-2">Photo mat standard</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4"><Link href="/etsy-11x17-print-size" className="text-accent-light hover:underline">11 &times; 17</Link></td>
                            <td className="py-2 pr-4">3300 &times; 5100</td>
                            <td className="py-2">Tabloid / ledger size</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4">13 &times; 19</td>
                            <td className="py-2 pr-4">3900 &times; 5700</td>
                            <td className="py-2">
                              Fine art / poster size
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4"><Link href="/etsy-20x24-print-size" className="text-accent-light hover:underline">20 &times; 24</Link></td>
                            <td className="py-2 pr-4">6000 &times; 7200</td>
                            <td className="py-2">Large format print</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </div>

              {/* CTA #2: After ratio tables */}
              <Card accent className="p-6 my-12">
                <h3 className="text-xl font-bold mb-3">
                  Stop resizing files manually
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  SnapToSize generates every required Etsy print size in seconds — with correct ratios, 300 DPI, and ready-to-upload ZIP packs.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-6 py-2.5">
                    Generate Etsy Print Packs
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-3">
                  No signup required. Free watermarked exports to test.
                </p>
              </Card>
            </div>

            {/* ===== NEW SECTION: Need Square or Landscape Too? ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Square or Landscape Too?
              </h2>
              <p className="text-foreground-60 mb-4">
                While this guide focuses on vertical Etsy print sizes,
                SnapToSize also supports additional formats.
              </p>
              <ul className="space-y-2 text-foreground-60 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span><Link href="/etsy-square-print-sizes" className="text-accent-light hover:underline">Square sizes</Link> (5&times;5, 8&times;8, 10&times;10, 12&times;12, 16&times;16, 18&times;18, 20&times;20, 24&times;24) available in single export mode</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span>Any vertical size available individually</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span>Landscape sizes available in single export mode</span>
                </li>
              </ul>
              <a href={packsUrl} target="_blank" rel="noopener noreferrer">
                <Button>Open the App to Pick Formats</Button>
              </a>
            </div>

            {/* ===== SECTION: Niche-Specific Size Guides ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Niche-Specific Size Guides
              </h2>
              <p className="text-foreground-60 mb-4">
                Different art styles have different best-selling sizes. These niche guides cover the sizing sweet spots for each category:
              </p>
              <ul className="space-y-2 text-foreground-60 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span><Link href="/etsy-ai-art-print-sizes" className="text-accent-light hover:underline">AI art print sizes</Link> &mdash; sizing for AI-generated artwork (Midjourney, DALL-E, Stable Diffusion)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span><Link href="/etsy-watercolor-print-sizes" className="text-accent-light hover:underline">Watercolor print sizes</Link> &mdash; best sizes for watercolor and soft-wash artwork</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <span><Link href="/etsy-photography-print-sizes" className="text-accent-light hover:underline">Photography print sizes</Link> &mdash; sizing for photo prints and DSLR-sourced artwork</span>
                </li>
              </ul>
            </div>

            {/* ===== SECTION: Etsy 20MB File Limit ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Etsy&apos;s 20MB File Size Limit Explained
              </h2>
              <p className="text-foreground-60 mb-4">
                Etsy allows a maximum of <strong>20MB per uploaded file</strong>. For printable wall art sellers, this creates a common problem: high-resolution 300 DPI files can easily exceed the upload limit. See our <Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">complete guide to Etsy&apos;s 20MB limit</Link> for a full breakdown.
              </p>
              <p className="text-foreground-60 mb-6">
                This becomes worse when sellers try to include multiple print sizes in one download. A single large-format file at 300 DPI can reach 8&ndash;15MB. Bundle several sizes into one ZIP and you hit the 20MB ceiling fast.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                Typical problems sellers encounter:
              </h3>
              <ul className="space-y-2 text-foreground-60 mb-6">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Files too large to upload to Etsy listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Needing to manually split ZIP files by ratio or size</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Lowering image quality to meet file size constraints</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Trial-and-error compression with inconsistent results</span>
                </li>
              </ul>

              <Card>
                <h3 className="font-semibold mb-3">How SnapToSize solves this:</h3>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>Generates optimized JPG files at 300 DPI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>Each ZIP pack stays under Etsy&apos;s 20MB limit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>Upload files directly to your Etsy listing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>No manual compression or file splitting required</span>
                  </li>
                </ul>
              </Card>

              <Card accent className="mt-6 p-6">
                <h3 className="text-lg font-bold mb-2">
                  Generate Etsy-Ready Files Automatically
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  SnapToSize creates all required print sizes and keeps every file optimized for Etsy&apos;s upload limits.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate Etsy Print Packs
                  </Button>
                </a>
              </Card>
            </div>

            {/* ===== SECTION: Fastest Way + CTA ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Fastest Way to Generate All Etsy Print Sizes
              </h2>
              <p className="text-foreground-60 mb-3">
                Manually exporting 20+ sizes per listing is not a scalable business model. Photoshop workflows take 1&ndash;3 hours per artwork: resize, export, rename, organize, ZIP, check sizes.
              </p>
              <p className="text-foreground-60 mb-6">
                SnapToSize does it in seconds:
              </p>

              <Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-60">
                      Save hours per listing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-60">
                      Clean, ready-to-sell ZIP structure
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-60">
                      Complete Etsy ratio packs instantly
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-60">
                      Exact Etsy aspect ratios (300&nbsp;DPI)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-60">
                      Optimized for Etsy's 20MB limit
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-60">
                      Professional file naming
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* ===== FAQ SECTION ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <FAQAccordion
                items={[
                  {
                    question: "What should I upload to Etsy for digital downloads?",
                    answer: [
                      (
                        <>
                          You don&apos;t upload &ldquo;one file&rdquo; &mdash; you
                          upload a set. Professional sellers deliver{" "}
                          <strong>ZIP packs grouped by ratio</strong>: 2:3, 3:4,
                          4:5, ISO A-series, and optional extras.
                        </>
                      ),
                      (
                        <>
                          Each ratio pack contains multiple sizes at 300&nbsp;DPI
                          (small, medium, large). Result: buyers find their size
                          without messaging you. This is how serious Etsy sellers
                          eliminate &ldquo;do you have 8&times;10?&rdquo; requests.
                        </>
                      ),
                    ],
                  },
                  {
                    question: "How many files should an Etsy print set include?",
                    answer: [
                      (
                        <>
                          A complete set includes{" "}
                          <strong>4&ndash;5 ratio packs</strong>, each covering
                          small to large sizes. This ensures you cover virtually
                          every frame size buyers own without uploading hundreds of
                          individual files.
                        </>
                      ),
                      (
                        <>
                          Inside each pack: typically 4&ndash;8 sizes ranging from
                          small prints (4&times;6, 8&times;10) to large posters
                          (<Link href="/etsy-20x30-print-size" className="text-accent-light hover:underline">20&times;30</Link>, <Link href="/etsy-24x36-print-size" className="text-accent-light hover:underline">24&times;36</Link>). Buyers get instant choice. You
                          get zero &ldquo;can I get this in…&rdquo; messages.
                        </>
                      ),
                    ],
                  },
                  {
                    question: "How do I avoid cropping across different print ratios?",
                    answer: [
                      (
                        <>
                          The problem: crop-to-fit tools force your artwork into a
                          new ratio by cutting edges. Different ratios = different
                          compositions. Buyers get unexpected results.
                        </>
                      ),
                      (
                        <>
                          The solution: <strong>resize without cropping</strong>.
                          Your full composition stays intact across every ratio
                          &mdash; no lost edges, no surprise cut-offs. What buyers
                          see in your listing photos matches exactly what they
                          download. Fewer complaints, fewer refunds.
                        </>
                      ),
                    ],
                  },
                  {
                    question: "Why do buyers ask for ISO sizes (A4, A3, A2)?",
                    answer: [
                      (
                        <>
                          ISO A-series sizes are the{" "}
                          <strong>standard in most of the world</strong> (Europe,
                          Australia, Asia). If you only offer US inch-based sizes,
                          you lose international buyers or get constant requests for
                          A4, A3, <Link href="/etsy-a2-print-size" className="text-accent-light hover:underline">A2</Link>.
                        </>
                      ),
                      (
                        <>
                          Including ISO sizes = fewer messages, higher conversion
                          from international traffic. SnapToSize includes ISO as
                          part of the standard pack &mdash; you cover more buyers
                          without extra work.
                        </>
                      ),
                    ],
                  },
                  {
                    question: "My Etsy download file is over 20MB — what do I do?",
                    answer: [
                      (
                        <>
                          Etsy has a <strong>20MB limit per digital file</strong>{" "}
                          (including ZIPs). Large print files at 300&nbsp;DPI add up
                          fast. If you bundle too many sizes into one ZIP, uploads
                          fail or get rejected.
                        </>
                      ),
                      (
                        <>
                          The fix: <strong>group by ratio</strong> (one ZIP per
                          ratio keeps file counts manageable) and use optimized JPG
                          files. SnapToSize auto-optimizes every ZIP to stay under
                          20MB &mdash; no manual compression, no upload failures.
                        </>
                      ),
                    ],
                  },
                ]}
              />
            </div>

            {/* ===== FINAL CTA ===== */}
            <div>
              <FinalCTA
                heading="Generate All Etsy Print Sizes — In Seconds"
                stat="Every ratio, every DPI, every size"
                description="Stop resizing manually. Upload one image and get every standard Etsy size at 300 DPI, organized in ratio packs and optimized for Etsy's file limits."
                buttonText="Start Free"
                appUrl={appUrl}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Resizing your artwork to 30+ sizes for each listing?"
                solution="One upload → every standard Etsy size at 300 DPI, organized in ratio packs. Ready to list in under a minute."
                buttonText="Resize All Sizes at Once"
                appUrl={appUrl}
              />
            </div>

            {/* Internal links for SEO */}
            <RelatedPages currentSlug="etsy-print-sizes" />
          </div>
        </Container>
      </section>

    </>
  );
}
