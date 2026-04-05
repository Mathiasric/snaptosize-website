import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Globe } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "A2 Print Size for Etsy — Pixels, DPI & Seller Guide",
  description:
    "A2 is 4961x7016 pixels at 300 DPI (420x594mm / 16.54x23.39 in). Exact dimensions, A2 vs 18x24 comparison, framing guide, and file setup for Etsy sellers.",
  alternates: { canonical: "https://snaptosize.com/etsy-a2-print-size" },
  openGraph: {
    title:
      "A2 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete A2 print guide for Etsy sellers. 4961x7016 pixels at 300 DPI, A2 vs 18x24, international sizing, and file setup.",
    url: "https://snaptosize.com/etsy-a2-print-size",
    images: [
      {
        url: "/assets/og/etsy-a2-print-size.png",
        width: 1200,
        height: 630,
        alt: "A2 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A2 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete A2 print guide for Etsy sellers. 4961x7016 pixels at 300 DPI, A2 vs 18x24, and international market sizing.",
    images: ["/assets/og/etsy-a2-print-size.png"],
  },
};

export default function EtsyA2PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A2 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to A2 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, A2 vs 18x24 comparison, international market opportunity, framing guide, and file setup for digital downloads.",
    url: "https://snaptosize.com/etsy-a2-print-size",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
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
        name: "A2 Print Size",
        item: "https://snaptosize.com/etsy-a2-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is A2 size in inches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A2 is 16.54 x 23.39 inches (420 x 594 mm). It is slightly smaller than 18x24 inches but has a different aspect ratio (1:1.414 vs 3:4).",
        },
      },
      {
        "@type": "Question",
        name: "What is A2 size in pixels at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A2 at 300 DPI is 4961 x 7016 pixels in portrait orientation. This is the minimum resolution for sharp, print-quality A2 prints on Etsy.",
        },
      },
      {
        "@type": "Question",
        name: "Is A2 the same as 18x24?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A2 is 16.54 x 23.39 inches (1:1.414 ratio) while 18x24 is exactly 18 x 24 inches (3:4 ratio). They are close in physical size but have different proportions. You cannot resize one to the other without cropping. Offer both to cover international and US buyers.",
        },
      },
      {
        "@type": "Question",
        name: "Do Etsy buyers actually want A2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, especially UK, European, and Australian buyers. A2 is a standard poster and frame size in metric countries. It fills the same role as 18x24 does in the US — a large statement piece or gallery wall centerpiece.",
        },
      },
      {
        "@type": "Question",
        name: "What frames fit A2 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IKEA RIBBA and LOMVIKEN series stock A2 frames. Most European frame retailers carry A2 as a standard size. In the US, search for '16.5x23.4 frame' or '420x594mm frame' on Amazon, or use custom framing services.",
        },
      },
      {
        "@type": "Question",
        name: "How many pixels do I need for an A2 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You need a minimum of 4961 x 7016 pixels for a 300 DPI A2 print. Your source image should be at least this resolution or larger — upscaling a smaller image will cause visible quality loss.",
        },
      },
      {
        "@type": "Question",
        name: "Should I offer A2 alongside US sizes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Including ISO sizes (A5 through A1) alongside US sizes maximizes your international reach. All A-series sizes share the same 1:1.414 ratio, so one design scales across all of them without cropping. SnapToSize generates both ISO and US sizes from one upload.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_etsy-a2-print-size&kind=guide";

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
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
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
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />

        {/* A2 Blueprint — right side with A3/A1 scaling indicator */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* A2 outer frame — 420:594 ratio, visually larger than A3's 240x340 */}
          <div
            className="relative border-2 border-white/[0.07] rounded-sm"
            style={{ width: "270px", height: "382px" }}
          >
            {/* Inner frame lines */}
            <div className="absolute inset-3 border border-purple-500/15 rounded-sm" />
            <div className="absolute inset-5 border border-purple-400/10 rounded-sm" />

            {/* Corner crosshair marks */}
            <div className="absolute -top-3.5 -left-3.5 w-7 h-7">
              <div className="absolute top-0 left-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute top-0 left-0 w-px h-7 bg-purple-400/30" />
            </div>
            <div className="absolute -top-3.5 -right-3.5 w-7 h-7">
              <div className="absolute top-0 right-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute top-0 right-0 w-px h-7 bg-purple-400/30" />
            </div>
            <div className="absolute -bottom-3.5 -left-3.5 w-7 h-7">
              <div className="absolute bottom-0 left-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute bottom-0 left-0 w-px h-7 bg-purple-400/30" />
            </div>
            <div className="absolute -bottom-3.5 -right-3.5 w-7 h-7">
              <div className="absolute bottom-0 right-0 w-7 h-px bg-purple-400/30" />
              <div className="absolute bottom-0 right-0 w-px h-7 bg-purple-400/30" />
            </div>

            {/* Dimension callout — width (top, dashed) */}
            <div className="absolute -top-10 left-0 right-0 flex items-center justify-center gap-1.5">
              <div className="h-px flex-1 border-t border-dashed border-purple-300/20" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider whitespace-nowrap px-1">
                420 mm
              </span>
              <div className="h-px flex-1 border-t border-dashed border-purple-300/20" />
            </div>

            {/* Dimension callout — height (right, dashed) */}
            <div className="absolute -right-[7rem] top-0 bottom-0 flex flex-col items-center justify-center gap-1.5 w-20">
              <div className="w-px flex-1 border-l border-dashed border-purple-300/20" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider whitespace-nowrap -rotate-90 px-1">
                594 mm &middot; 7016 px
              </span>
              <div className="w-px flex-1 border-l border-dashed border-purple-300/20" />
            </div>

            {/* Central "A2" label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-4xl font-mono font-bold text-white/[0.07] tracking-[0.3em]">
                  A2
                </span>
                <span className="block text-[9px] font-mono text-purple-300/25 tracking-[0.25em] mt-1">
                  ISO 216
                </span>
              </div>
            </div>

            {/* Fold line — horizontal center showing A3 fold point */}
            <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 border-t border-dashed border-white/[0.04]" />
            <div className="absolute right-5 top-1/2 translate-y-1">
              <span className="text-[8px] font-mono text-white/[0.12] tracking-wider">
                A3 fold
              </span>
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
              {[...Array(12)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4">
              {[...Array(16)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* A3 outline in bottom-right for size comparison */}
            <div
              className="absolute bottom-4 right-4 border border-white/[0.06] rounded-sm"
              style={{ width: "80px", height: "113px" }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[7px] font-mono text-white/[0.10]">
                A3
              </span>
            </div>

            {/* Scaling indicator — left side: A3 -> A2 -> A1 */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
              <span className="text-[7px] font-mono text-purple-300/30 tracking-wider">A1</span>
              <div className="w-px h-6 bg-purple-400/15" />
              <span className="text-[8px] font-mono text-purple-300/50 tracking-wider font-semibold">A2</span>
              <div className="w-px h-6 bg-purple-400/15" />
              <span className="text-[7px] font-mono text-purple-300/30 tracking-wider">A3</span>
            </div>
          </div>

          {/* PRINT SIZE REFERENCE label below frame */}
          <div className="mt-4 text-center">
            <span className="text-[9px] font-mono text-purple-300/30 tracking-[0.3em]">
              PRINT SIZE REFERENCE
            </span>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Large Format ISO Standard
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                A2 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                The statement poster that sells to UK, EU &amp; AU buyers
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              4961&times;7016 pixels. 420&times;594&nbsp;mm. The large-format
              poster size for international markets. Everything you need to
              create A2 digital downloads that attract higher-value orders.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All A-Series Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download A5 + A4 + A3 + A2 + A1 at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  300 DPI Print-Ready
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  ISO A-Series
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  All Sizes from One Upload
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
            {/* --- Quick Answer --- */}
            <QuickAnswer question="What pixel dimensions for A2 at 300 DPI?">
              <strong>4961 x 7016 pixels</strong> (420 x 594 mm / 16.54 x 23.39 inches). A2 is the large-format poster size in the ISO A-series — twice A3, half A1. Part of the ISO A-Series pack.
            </QuickAnswer>

            {/* --- What Is A2 Print Size --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is A2 Print Size?
              </h2>

              <p className="text-foreground-60 mb-4">
                A2 measures 420&times;594&nbsp;mm (16.54&times;23.39&nbsp;inches).
                It&apos;s the large-format poster size in the ISO 216 standard
                &mdash; exactly double{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>
                {" "}in area and the go-to choice for statement wall art in the
                UK, Europe, Australia, and New Zealand.
              </p>
              <p className="text-foreground-60 mb-4">
                Like every A-series size, A2 uses the 1:1.414 aspect ratio.
                Fold an A1 in half and you get an A2. Fold A2 in half and you
                get an A3. Your artwork composition scales perfectly across the
                entire series without cropping &mdash; learn more about how
                this works in the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                For Etsy sellers, A2 is where higher-value orders begin. It&apos;s
                large enough to be a gallery wall centerpiece or a standalone
                statement piece, commanding a higher price point than smaller
                ISO sizes. For a full overview of every Etsy size, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- A2 Pixel Dimensions at 300 DPI --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A2 Pixel Dimensions at 300&nbsp;DPI
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">420 &times; 594 mm (16.54 &times; 23.39 in)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">4961 &times; 7016 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Orientation</span>
                    <span className="font-semibold">Portrait (taller than wide)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">ISO A-series (1:1.414)</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math: convert millimeters to inches (divide by 25.4), then
                multiply by 300. Width: 420&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;4961
                pixels. Height: 594&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;7016
                pixels.
              </p>

              <h3 className="text-lg font-semibold mb-4">
                A2 at Different DPI Settings
              </h3>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Resolution
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels (Portrait)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">72 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1191 &times; 1684
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Screen preview only &mdash; not for print
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 &times; 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Draft proofing, viewing distance over 3 feet
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961 &times; 7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Print standard &mdash; use this for Etsy
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Always create your A2 files at 300&nbsp;DPI. This is the
                professional print standard and what buyers expect from Etsy
                digital downloads. Your source image must be at least
                4961&times;7016 pixels &mdash; anything smaller will produce
                a blurry print. For more on why resolution matters, see{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>
                . You can also{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  calculate any size
                </Link>
                {" "}with our print size calculator.
              </p>
            </div>

            {/* --- Why Offer A2 on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Offer A2 on Etsy?
              </h2>

              <p className="text-foreground-60 mb-6">
                A2 is where Etsy sellers tap into higher-value international
                orders. Here&apos;s why it belongs in your listings:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        A2 is the statement poster size in metric countries
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        In the UK, EU, Australia, and New Zealand, A2 is what
                        buyers search for when they want a large poster or
                        gallery wall centerpiece. It fills the same niche as
                        18&times;24 in the US &mdash; but with different
                        dimensions and a different aspect ratio.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Higher price point = higher revenue per sale
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        A2 is a premium format. Buyers who want A2 are
                        investing in a statement piece, not a small desk print.
                        This means you can price A2 listings higher and attract
                        buyers with larger budgets &mdash; especially for{" "}
                        <Link
                          href="/etsy-gallery-wall-print-sizes"
                          className="text-accent-light hover:underline"
                        >
                          gallery wall sets
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Reduce &ldquo;do you have A2?&rdquo; messages
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        If your listing only includes US sizes, international
                        buyers will message asking for A2. Each message is lost
                        time and a potential lost sale. Including A2 upfront
                        eliminates this friction. For guidance on how many sizes
                        to include, see{" "}
                        <Link
                          href="/how-many-sizes-etsy-printable"
                          className="text-accent-light hover:underline"
                        >
                          how many sizes to offer for Etsy printables
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                The cost of adding A2 is essentially zero. Since all A-series
                sizes share the same ratio, one master design produces{" "}
                <Link
                  href="/etsy-a5-print-size"
                  className="text-accent-light hover:underline"
                >
                  A5
                </Link>
                ,{" "}
                <Link
                  href="/etsy-a4-print-size"
                  className="text-accent-light hover:underline"
                >
                  A4
                </Link>
                ,{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>
                , A2, and A1 with simple scaling. You&apos;re reaching millions
                of international buyers with minutes of extra work per listing.
              </p>
            </div>

            {/* --- A2 vs 18x24 vs 16x20 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A2 vs 18&times;24 vs 16&times;20 &mdash; Size Comparison
              </h2>

              <p className="text-foreground-60 mb-6">
                A2 is close in physical size to{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18&times;24
                </Link>
                {" "}and{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20
                </Link>
                , but these are not interchangeable. Here&apos;s how they compare:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        &nbsp;
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A2 (ISO)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        18&times;24 (US)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        16&times;20 (US)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions (in)</td>
                      <td className="py-3 px-4 text-foreground-60">
                        16.54 &times; 23.39
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        18 &times; 24
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        16 &times; 20
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions (mm)</td>
                      <td className="py-3 px-4 text-foreground-60">
                        420 &times; 594
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        457 &times; 610
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        406 &times; 508
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pixels @ 300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961 &times; 7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 &times; 6000
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.414 (ISO)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3:4
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:5
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Primary Market</td>
                      <td className="py-3 px-4 text-foreground-60">
                        UK, EU, Australia, NZ
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US, Canada
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US, Canada
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                A2 is 1.46 inches narrower and 0.61 inches shorter than
                18&times;24. More importantly, they have different aspect
                ratios &mdash; you cannot resize one to the other without
                cropping or adding white space. An A2 design will look slightly
                different when printed at 18&times;24 proportions.
              </p>
              <p className="text-foreground-60">
                For Etsy sellers, the practical answer is to offer all three.
                International buyers search for &ldquo;A2 poster&rdquo; while
                US buyers search for &ldquo;18&times;24&rdquo; or
                &ldquo;16&times;20&rdquo;. Including all of them in your listing
                covers both markets without any extra design work &mdash; each
                ratio family needs its own version, and SnapToSize generates
                them all from a single upload.
              </p>
            </div>

            {/* --- CTA 1 (mid-content Card accent) --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Choosing Between Sizes
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once and get A2, 18&times;24, 16&times;20, and 30+
                  more sizes automatically &mdash; 300&nbsp;DPI, correctly
                  named, organized in ZIP packs. Up to 70 files from one image.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- How to Frame A2 Prints --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Frame A2 Prints
              </h2>

              <p className="text-foreground-60 mb-4">
                Including framing guidance in your Etsy listing reduces buyer
                confusion and support requests. Here is what your A2 buyers
                need to know:
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Exact frame size</span>
                    <span className="font-semibold">420 &times; 594 mm (16.54 &times; 23.39 in)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">IKEA options</span>
                    <span className="font-semibold">RIBBA &amp; LOMVIKEN A2 frames</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">US availability</span>
                    <span className="font-semibold">Amazon &ldquo;16.5&times;23.4 frame&rdquo; or custom</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">EU/UK/AU availability</span>
                    <span className="font-semibold">Standard stock size at most frame shops</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Mat options</span>
                    <span className="font-semibold">50 &times; 70 cm frame with A2 mat cutout</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                A2 frames are standard inventory in Europe, the UK, and
                Australia. In the US, A2 frames are less common at big-box
                stores but readily available on Amazon and through custom
                framing services. Mention this in your listing description
                so US buyers know where to find frames.
              </p>
              <p className="text-foreground-60">
                Copy this into your listing: &ldquo;This A2 file prints at
                420&times;594&nbsp;mm (16.54&times;23.39 inches). Standard A2
                frames are available at IKEA (RIBBA/LOMVIKEN), Amazon, and most
                European frame shops. In the US, search for
                &lsquo;420&times;594mm frame&rsquo; or &lsquo;16.5&times;23.4
                frame&rsquo; on Amazon.&rdquo;
              </p>
            </div>

            {/* --- A2 in the ISO A-Series --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A2 in the ISO A-Series &mdash; How Sizes Relate
              </h2>

              <p className="text-foreground-60 mb-6">
                Every A-series size is exactly half the next size up. One
                design scales across the entire family without cropping.
                Here is each size and its role:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        A-Series Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Dimensions (mm)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a5-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A5
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        148 &times; 210
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748 &times; 2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small prints, greeting cards, planners
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a4-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A4
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        210 &times; 297
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 &times; 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Home printing, standard wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a3-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A3
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Framed wall art, gallery walls, poster prints
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">A2<span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-teal-400/10 text-teal-300/80 border border-teal-400/20">This Page</span></td>
                      <td className="py-3 px-4 text-foreground-60">
                        420 &times; 594
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961 &times; 7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large posters, statement pieces, gallery wall centerpieces
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">A1</td>
                      <td className="py-3 px-4 text-foreground-60">
                        594 &times; 841
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016 &times; 9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized prints, gallery exhibitions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                All five sizes share the same 1:1.414 aspect ratio. One
                master design scales to every size without cropping. This is
                the most efficient way to reach international buyers alongside
                your US sizes.
              </p>
              <p className="text-foreground-60">
                A2 is the sweet spot for large-format prints: big enough
                to dominate a wall, but not so large that printing and
                framing become prohibitively expensive for buyers. For{" "}
                <Link
                  href="/etsy-minimalist-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  minimalist wall art
                </Link>
                {" "}in particular, A2 is a popular choice because clean
                designs benefit from larger display areas.
              </p>
            </div>

            {/* --- How to Create A2 Files for Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create A2 Files for Etsy
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    1. Start at 4961&times;7016 Pixels or Larger
                  </h3>
                  <p className="text-foreground-60">
                    Create your original artwork at A2 resolution (4961&times;7016
                    pixels at 300&nbsp;DPI) or larger. If you also plan to offer
                    A1 (7016&times;9933 pixels), design at A1 resolution first
                    and scale down. Going the other direction &mdash; upscaling
                    an A3 file to A2 &mdash; doubles the area and will make the
                    image look soft or pixelated.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    2. Export as JPG / JPEG at 300&nbsp;DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) maintains full print quality while
                    keeping files well under{" "}
                    <Link
                      href="/etsy-20mb-file-limit"
                      className="text-accent-light hover:underline"
                    >
                      Etsy&apos;s 20&nbsp;MB upload limit
                    </Link>
                    . Even at A2 resolution, a well-optimized JPG stays
                    manageable. PDF is an alternative for text-heavy printables.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    3. Generate All Sizes from One Upload
                  </h3>
                  <p className="text-foreground-60">
                    Manually creating A5, A4, A3, A2, and A1 versions &mdash;
                    plus US sizes like 16&times;20, 18&times;24, and
                    8&times;10 &mdash; takes hours per artwork. The alternative
                    is a tool that handles all sizing automatically from one
                    high-resolution source file. For a walkthrough, see{" "}
                    <Link
                      href="/how-to-resize-images-for-etsy"
                      className="text-accent-light hover:underline"
                    >
                      how to resize images for Etsy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Skip the manual work:
                    </strong>{" "}
                    SnapToSize generates A2 alongside A5, A4, A3, A1, and all
                    US sizes from one upload &mdash; at 300&nbsp;DPI,
                    professionally named, organized in ZIP packs, and under
                    Etsy&apos;s 20&nbsp;MB limit.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Reach International Buyers Instantly"
                stat="ISO A-Series + all US sizes — up to 70 files from one image"
                description="Upload your artwork and download A5 through A1 plus all US sizes at 300 DPI. Organized ZIP packs, correctly named, and under 20 MB. Production-ready in seconds."
                buttonText="Start Free — Generate All Sizes"
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
                      "What is A2 size in inches?",
                    answer:
                      "A2 is 16.54 x 23.39 inches (420 x 594 mm). It is slightly smaller than 18x24 inches but has a different aspect ratio — ISO 1:1.414 vs 3:4.",
                  },
                  {
                    question:
                      "What is A2 size in pixels at 300 DPI?",
                    answer:
                      "A2 at 300 DPI is 4961 x 7016 pixels in portrait orientation. This is the minimum resolution for sharp, print-quality A2 prints. The calculation: 420mm \u00f7 25.4 \u00d7 300 = 4961 pixels wide, 594mm \u00f7 25.4 \u00d7 300 = 7016 pixels tall.",
                  },
                  {
                    question:
                      "Is A2 the same as 18x24?",
                    answer:
                      "No. A2 is 16.54 x 23.39 inches (1:1.414 ratio) while 18x24 is exactly 18 x 24 inches (3:4 ratio). They are close in physical size but have different proportions. You cannot resize one to the other without cropping or adding white space. Offer both to cover international and US buyers.",
                  },
                  {
                    question:
                      "Do Etsy buyers actually want A2?",
                    answer:
                      "Yes, especially UK, European, and Australian buyers. A2 is a standard poster and frame size in metric countries. It fills the same role as 18x24 does in the US \u2014 a large statement piece or gallery wall centerpiece.",
                  },
                  {
                    question:
                      "What frames fit A2 prints?",
                    answer:
                      "IKEA RIBBA and LOMVIKEN series stock A2 frames. Most European frame retailers carry A2 as a standard size. In the US, search for '16.5x23.4 frame' or '420x594mm frame' on Amazon, or use custom framing services.",
                  },
                  {
                    question:
                      "How many pixels do I need for an A2 print?",
                    answer:
                      "You need a minimum of 4961 x 7016 pixels for a 300 DPI A2 print. Your source image should be at least this resolution or larger. Upscaling a smaller image will cause visible quality loss.",
                  },
                  {
                    question:
                      "Should I offer A2 alongside US sizes?",
                    answer:
                      "Yes. Including ISO sizes (A5 through A1) alongside US sizes maximizes your international reach. All A-series sizes share the same 1:1.414 ratio, so one design scales across all of them without cropping. SnapToSize generates both ISO and US sizes from one upload.",
                  },
                ]}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-a2-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
