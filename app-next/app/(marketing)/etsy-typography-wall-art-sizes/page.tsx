import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy Typography Wall Art Sizes — Sizing Guide",
  description:
    "Best print sizes for typography and word art on Etsy. Quote prints, affirmations, poster lettering — DPI requirements, aspect ratios, US and EU sizes covered.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-typography-wall-art-sizes",
  },
  openGraph: {
    title: "Etsy Typography Wall Art Sizes | SnapToSize",
    description:
      "Best sizes for typography wall art on Etsy. Quote prints, affirmations, poster lettering — DPI requirements, aspect ratios, and US vs EU sizing explained.",
    url: "https://snaptosize.com/etsy-typography-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-typography-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Typography Wall Art Sizes — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Typography Wall Art Sizes — Sizing Guide",
    description:
      "Best sizes for typography wall art on Etsy. Quote prints, affirmations, poster lettering — DPI requirements and aspect ratios covered.",
    images: ["/assets/og/etsy-typography-wall-art-sizes.png"],
  },
};

export default function EtsyTypographyWallArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Typography Wall Art Sizes — Complete Sizing Guide",
    description:
      "Best print sizes for typography and word art on Etsy. Quote prints, affirmations, poster lettering — DPI requirements, aspect ratios, and US vs EU sizing explained.",
    url: "https://snaptosize.com/etsy-typography-wall-art-sizes",
    datePublished: "2026-04-14",
    dateModified: "2026-04-14",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
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
        name: "Typography Wall Art Sizes for Etsy",
        item: "https://snaptosize.com/etsy-typography-wall-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What print sizes should I offer for typography wall art on Etsy?",
      answer:
        "Offer at least 5×7, 8×10, 8×12, A4, A3, 16×20, and 18×24. Multi-line quote prints do well in 8×10 (4:5) and A4 (ISO); tall single-column scripts need 8×12 or A4; large affirmation posters suit 16×20 and 18×24. Always include A4 for EU/UK buyers.",
    },
    {
      question: "What aspect ratio is best for quote prints?",
      answer:
        "2:3 (8×12, A4, A3) works best for single-column script quotes — the tall frame lets lines breathe. 4:5 (8×10, 16×20) suits wide multi-line layouts with balanced margins. Avoid forcing a long quote into a square or landscape ratio; it compresses white space and hurts legibility.",
    },
    {
      question: "What resolution do I need for typography wall art?",
      answer:
        "300 DPI minimum for all text-based art. Thin serif fonts and script lettering are especially sensitive — at 150 DPI, hairline strokes alias and look blurry when printed. Vector-source designs (Illustrator, Affinity) can export at any resolution cleanly; raster-only tools (basic Canva) need to be set up at 300 DPI from the start.",
    },
    {
      question: "Should I offer A4 size for word art if I sell on Etsy?",
      answer:
        "Yes — always. Quote and affirmation prints are disproportionately popular as gifts in the UK, Germany, and Scandinavia. Those buyers print at home on A4 paper. Note that A4 (8.27×11.69 in) is NOT the same as US Letter (8.5×11 in) — files must be sized correctly or buyers get cut-off edges.",
    },
    {
      question: "Why does my quote print look blurry when customers print it?",
      answer:
        "The most common cause is exporting at too low a DPI. If your design file was created at 72 DPI or 150 DPI, upscaling it to print size blurs thin text strokes. Always design at 300 DPI from the beginning. Vector-based workflows avoid this entirely. See our guide on the best resolution for Etsy printables for more detail.",
    },
    {
      question: "What is the easiest way to resize typography wall art for all Etsy print sizes?",
      answer:
        "Upload your design once to SnapToSize and it generates every size — 5×7, 8×10, 8×12, A4, A3, 16×20, 18×24, and more — at 300 DPI in a single ZIP under 20MB. No manual Canva exports, no Photoshop batch actions, no size-by-size resizing.",
    },
    {
      question: "Can I sell both portrait and landscape typography prints in the same listing?",
      answer:
        "Yes, but only if both orientations genuinely suit your design. Most typography art is portrait (tall quotes, vertical affirmation stacks). If a design truly works in landscape — a wide horizontal banner quote, for instance — add 10×8 and 12×9 variants. Never include a landscape version just to pad the listing; mismatched previews lead to buyer confusion and returns.",
    },
    {
      question: "What is the easiest way to resize typography wall art for all Etsy print sizes?",
      answer:
        "SnapToSize lets you upload your typography artwork once and instantly generates every standard print size — 5×7, 8×10, 8×12, A4, A3, 16×20, 18×24 and more — as a ZIP file under 20MB. No manual resizing, no Photoshop needed.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0B0B12 0%, #110E1F 40%, #0F0D1A 100%)",
        }}
      >
        {/* Gradient orbs */}
        <div
          className="absolute top-[-8%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
                <Link href="/" className="hover:text-white/60">Home</Link>
                <span>/</span>
                <span className="text-white/60">Typography Wall Art Sizes</span>
              </nav>

              <p className="text-[10px] font-mono tracking-[0.2em] text-purple-400/70 uppercase mb-3">
                PRINT SIZE REFERENCE
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Etsy Typography Wall Art Sizes
              </h1>
              <p className="text-white/60 text-base mb-6 leading-relaxed">
                Aspect ratio directly affects legibility for text-first prints. This guide covers every size for quote prints, affirmation posters, and word art — with DPI requirements and US vs EU sizing breakdowns.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {["300 DPI ready", "US + EU sizes", "Quote art optimized", "ZIP under 20MB"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] text-white/70 border border-white/[0.08]"
                  >
                    <Check className="w-3 h-3 text-teal-400" />
                    {pill}
                  </span>
                ))}
              </div>

              <a
                href="https://app.snaptosize.com?source=seo_etsy-typography-wall-art-sizes&kind=guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="text-sm px-6 py-2.5">
                  Resize your typography prints free →
                </Button>
              </a>
            </div>

            {/* Right: visual — size ratio grid */}
            <div className="hidden md:flex flex-col items-center justify-center gap-3">
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">
                Common typography ratios
              </div>
              <div className="flex items-end gap-4">
                {/* 4:5 block */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-purple-500/30 bg-purple-500/10 flex items-center justify-center"
                    style={{ width: 72, height: 90 }}
                  >
                    <span className="text-[10px] font-mono text-purple-300/80">4:5</span>
                  </div>
                  <span className="text-[9px] text-white/30">8×10</span>
                </div>
                {/* 2:3 block */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-teal-500/30 bg-teal-500/10 flex items-center justify-center"
                    style={{ width: 64, height: 96 }}
                  >
                    <span className="text-[10px] font-mono text-teal-300/80">2:3</span>
                  </div>
                  <span className="text-[9px] text-white/30">8×12</span>
                </div>
                {/* ISO block */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-purple-400/25 bg-purple-400/[0.07] flex items-center justify-center"
                    style={{ width: 68, height: 96 }}
                  >
                    <span className="text-[10px] font-mono text-purple-200/70">ISO</span>
                  </div>
                  <span className="text-[9px] text-white/30">A4</span>
                </div>
                {/* 3:4 block */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-teal-400/25 bg-teal-400/[0.07] flex items-center justify-center"
                    style={{ width: 72, height: 96 }}
                  >
                    <span className="text-[10px] font-mono text-teal-200/70">3:4</span>
                  </div>
                  <span className="text-[9px] text-white/30">18×24</span>
                </div>
              </div>
              <p className="text-[9px] text-white/20 mt-2 text-center max-w-[220px]">
                Each ratio serves a different typography layout — the wrong frame squeezes white space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 max-w-3xl py-12">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-10">
          <QuickAnswer question="What print sizes should I offer for typography wall art on Etsy?">
            Offer <strong>5×7, 8×10, 8×12, A4, A3, 16×20, and 18×24</strong> as your core set. Multi-line quotes fit 8×10 (4:5); tall script quotes need 8×12 or A4 (2:3); large affirmation posters fill 16×20 and 18×24. Always include A4 for EU/UK buyers — quote prints are a top gift category in those markets.
          </QuickAnswer>
        </div>

        {/* ===== SECTION 1: Why Typography Has Unique Sizing Challenges ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why typography wall art has unique sizing challenges
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Typography prints are text-first: the aspect ratio of the frame determines how your words sit on the page. Squeeze a long affirmation into a square or push a flowing script into a 4:5 frame and the white space collapses — the design looks cramped even though the artwork itself is fine.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There are three main typography sub-styles on Etsy, each with its own ideal format:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Single-word / word art:</strong> Short impact words ("dream," "hustle," monogram initials) work in square or 4:5. The frame becomes part of the design.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Multi-line quote prints:</strong> A 2–4 line quote with attribution needs vertical breathing room — 8×10 (4:5) or A4 (ISO). Forcing it into a wider frame spreads lines too far apart.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Poster lettering / affirmations:</strong> Full-length affirmations, stacked phrases, or tall calligraphy compositions need 2:3 (8×12, A3) or 3:4 (18×24) for the text column to read naturally top to bottom.</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Sellers who offer only one ratio lose buyers whose walls need the other format. For a full breakdown of which{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              Etsy print ratios
            </Link>{" "}
            correspond to which frame sizes, see our ratio reference guide.
          </p>
        </section>

        {/* ===== SECTION 2: Best Print Sizes Table ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best print sizes for typography and word art on Etsy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The table below covers every size that buyers commonly request for quote prints, affirmation posters, and word art. All pixel dimensions are at 300 DPI.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03] border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Pixels at 300 DPI</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-5x7-print-size" className="hover:underline text-accent-light">5×7</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">1500×2100</td>
                  <td className="py-3 px-4 text-muted-foreground">5:7</td>
                  <td className="py-3 px-4 text-muted-foreground">Accent words, short phrases, greeting-card-style gifts</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-8x10-print-size" className="hover:underline text-accent-light">8×10</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">2400×3000</td>
                  <td className="py-3 px-4 text-muted-foreground">4:5</td>
                  <td className="py-3 px-4 text-muted-foreground">Wide multi-line quotes, the most common buyer request</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-8x12-print-size" className="hover:underline text-accent-light">8×12</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">2400×3600</td>
                  <td className="py-3 px-4 text-muted-foreground">2:3</td>
                  <td className="py-3 px-4 text-muted-foreground">Tall single-column script lettering, flowing calligraphy</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-a4-print-size" className="hover:underline text-accent-light">A4</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">2480×3508</td>
                  <td className="py-3 px-4 text-muted-foreground">~1:√2 (ISO)</td>
                  <td className="py-3 px-4 text-muted-foreground">EU/UK quote prints — top gift format in those markets</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-a3-print-size" className="hover:underline text-accent-light">A3</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">3508×4961</td>
                  <td className="py-3 px-4 text-muted-foreground">~1:√2 (ISO)</td>
                  <td className="py-3 px-4 text-muted-foreground">Statement poster text, large-format affirmations, EU buyers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-16x20-print-size" className="hover:underline text-accent-light">16×20</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">4800×6000</td>
                  <td className="py-3 px-4 text-muted-foreground">4:5</td>
                  <td className="py-3 px-4 text-muted-foreground">Gallery wall featured piece, large inspirational quotes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-18x24-print-size" className="hover:underline text-accent-light">18×24</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">5400×7200</td>
                  <td className="py-3 px-4 text-muted-foreground">3:4</td>
                  <td className="py-3 px-4 text-muted-foreground">Large affirmation poster, tall script, statement wall piece</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            See the full{" "}
            <Link href="/etsy-print-sizes" className="text-accent-light hover:underline">
              Etsy print sizes guide
            </Link>{" "}
            for all ratios including square and extra-large formats.
          </p>
        </section>

        {/* ===== LISTING OUTPUT SHOWCASE ===== */}
        <div className="mb-14">
          <ListingOutputShowcase artwork="littledeerquote" />
        </div>

        {/* ===== CTA 1 ===== */}
        <div className="mb-14">
          <ContextualCTA
            problem="Offering 7 sizes means 7 exports per design — times every listing in your shop."
            solution="SnapToSize exports all your typography sizes in one upload: 5×7, 8×10, 8×12, A4, A3, 16×20, 18×24 — all at 300 DPI."
            appUrl="https://app.snaptosize.com?source=seo_etsy-typography-wall-art-sizes&kind=guide"
            buttonText="Export all sizes at once →"
          />
        </div>

        {/* ===== SECTION 3: Sub-styles and Aspect Ratios ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Typography sub-styles and their ideal aspect ratios
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Not all word art is the same. The style of your typography determines which ratio it needs — and offering the wrong ratio cuts you off from buyers whose frames don't match.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">Single-word / keyword art</h3>
              <p className="text-sm text-muted-foreground">
                Impact words ("gather," "breathe," monogram initials, family names) work in square or 4:5. The format gives the word visual weight and centring. 8×10 and 16×20 are the go-to frame sizes.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">Script / calligraphy quotes</h3>
              <p className="text-sm text-muted-foreground">
                Flowing script lettering needs vertical space for the ascenders and descenders to breathe. 2:3 (8×12, A3) and A4 are natural fits. Forcing calligraphy into 4:5 compresses the top and bottom margins to the point that flourishes get cropped.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">Block lettering / poster style</h3>
              <p className="text-sm text-muted-foreground">
                Bold uppercase block posters with a strong horizontal grid suit 4:5 (8×10) or a wider frame. The horizontal lines align naturally with the frame edges.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">Stacked multi-line affirmations</h3>
              <p className="text-sm text-muted-foreground">
                A vertical stack of short affirmation lines reads naturally in 2:3. The tall column lets each line register separately as the eye moves downward. 8×12, A4, and 18×24 (3:4) all work well.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-5">
            For related considerations, see{" "}
            <Link href="/etsy-quote-wall-art-sizes" className="text-accent-light hover:underline">
              quote wall art sizes for Etsy
            </Link>{" "}
            — which covers the intersection between quote prints and typography design specifically.
          </p>
        </section>

        {/* ===== SECTION 4: Resolution and Font Rendering ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Resolution and font rendering for typography prints
          </h2>
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-lg p-4 flex gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200/80">
              <strong>Common support issue:</strong> Buyers report blurry text when printing. The cause is almost always a file exported at 72 DPI or 150 DPI. Typography is more sensitive to low resolution than abstract art — thin serifs and script strokes alias visibly.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            300 DPI is the minimum for all text-based art. At 150 DPI, thin strokes alias and hairline serifs look jagged when printed at 8×10 or larger. For ultra-fine script lettering, 350–400 DPI gives an extra safety margin.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Vector-sourced designs (Adobe Illustrator, Affinity Designer) are resolution-independent — they can export cleanly at any DPI. Raster-only workflows (basic Canva) must be set to 300 DPI from the start; upscaling a low-DPI raster file introduces blur that no export settings can fix.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            See our full guide on{" "}
            <Link href="/best-resolution-for-etsy-printables" className="text-accent-light hover:underline">
              best resolution for Etsy printables
            </Link>{" "}
            for how to verify and fix DPI before uploading.
          </p>
        </section>

        {/* ===== SECTION 5: US vs EU Sizing ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            US vs. EU sizing for word art
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A4 and A3 are the dominant print standards outside North America. Quote and affirmation prints are disproportionately popular as gifts in the UK, Germany, and Scandinavia — markets where home printing uses A4 paper as default. Sellers who skip ISO sizes miss 30–40% of their international buyer base.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A critical mistake to avoid: A4 (8.27×11.69 in) is <strong>not</strong> the same as US Letter (8.5×11 in). A buyer who downloads a US Letter file and prints it on A4 paper gets cut-off edges — and typically leaves a one-star review. Your A4 files must be sized to A4 pixel dimensions (2480×3508 at 300 DPI).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For a side-by-side of all ISO sizes, see the{" "}
            <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">
              A4 print size guide for Etsy
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 6: Packaging and 20MB Limit ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How to package typography prints without hitting the 20MB limit
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Typography files are typically smaller than photo-based art — a quote on a white background is mostly empty space at the file level. Still, including 7+ size variants in a single ZIP can push toward Etsy's 20MB cap. Practical tips:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Export as JPEG at 300 DPI</strong> — JPEG compresses text-on-white efficiently without visible quality loss at print sizes.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>RGB color mode</strong> — CMYK files are larger and unnecessary for home printing. Stick to sRGB.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Consistent ICC profiles</strong> — strip embedded profiles on JPEG exports to save a few KB per file.</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            SnapToSize automatically packages all sizes into a ZIP under 20MB using progressive quality optimization — no manual compression needed. For more on ZIP packaging strategy, see{" "}
            <Link href="/how-to-package-digital-wall-art-for-etsy" className="text-accent-light hover:underline">
              how to package digital wall art for Etsy
            </Link>
            .
          </p>
        </section>


        {/* ===== SECTION 7: How SnapToSize Handles Typography Exports ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How SnapToSize handles typography multi-pack exports
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Upload your typography design once — SnapToSize outputs every size in the table above at 300 DPI: 5×7, 8×10, 8×12, A4, A3, 16×20, 18×24, and extras. Text sharpness is maintained across all exports because the system anchors at your original resolution and resamples down, never up.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For sellers building a quote print collection with dozens of designs, that's the difference between hours of manual Canva or Photoshop exports and a few minutes of batch uploads. See{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to include in an Etsy printable listing
            </Link>{" "}
            to decide which packs matter most for conversion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Typography sellers sometimes wonder if their minimalist word art needs the same size variety as complex illustrations — the answer is yes. Buyers search by frame size, not artwork complexity. See also{" "}
            <Link href="/etsy-minimalist-wall-art-sizes" className="text-accent-light hover:underline">
              minimalist wall art sizes for Etsy
            </Link>{" "}
            for the overlap between minimal design and text-first art.
          </p>
        </section>

        {/* ===== CTA 2 ===== */}
        <div className="mb-14">
          <ContextualCTA
            problem="A growing quote print collection means hundreds of manual exports — one per size, per design."
            solution="Upload once to SnapToSize and get all 7 typography sizes in a single 300 DPI ZIP. Every design, covered."
            appUrl="https://app.snaptosize.com?source=seo_etsy-typography-wall-art-sizes&kind=guide"
            buttonText="Try SnapToSize free →"
          />
        </div>

        {/* ===== LIFESTYLE MOCKUP ===== */}
        <section className="mb-14">
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src="/assets/visuals/etsy-typography-wall-art-sizes-mockup.jpg"
              alt="Typography wall art print displayed in a modern living room"
              className="w-full object-cover"
              style={{ maxHeight: 400 }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Typography prints styled in a modern home — the right frame size makes the difference
          </p>
        </section>

        {/* ===== CTA 3: FinalCTA ===== */}
        <div className="mb-14">
          <FinalCTA
            heading="Stop exporting typography sizes one by one."
            stat="7 sizes. One upload."
            description="Upload your quote print or word art once — SnapToSize delivers every ratio your buyers need at 300 DPI. Script, block lettering, affirmations — all covered."
            appUrl="https://app.snaptosize.com?source=seo_etsy-typography-wall-art-sizes&kind=guide"
            buttonText="Resize your typography prints free →"
          />
        </div>

        {/* ===== FAQ ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* ===== RELATED PAGES ===== */}
        <RelatedPages currentSlug="etsy-typography-wall-art-sizes" />
      </div>
    </>
  );
}
