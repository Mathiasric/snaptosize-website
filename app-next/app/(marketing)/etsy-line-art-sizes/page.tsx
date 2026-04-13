import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy Line Art Print Sizes — Sizing Guide",
  description:
    "Best print sizes for line art on Etsy. Botanical, figure, and geometric line art — DPI requirements, aspect ratios, and portrait vs landscape breakdowns.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-line-art-sizes",
  },
  openGraph: {
    title: "Etsy Line Art Print Sizes | SnapToSize",
    description:
      "Best sizes for line art on Etsy. Botanical, figure, and geometric styles — DPI requirements, aspect ratios, and portrait vs landscape breakdowns.",
    url: "https://snaptosize.com/etsy-line-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-line-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Line Art Print Sizes — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Line Art Print Sizes — Sizing Guide",
    description:
      "Best sizes for line art on Etsy. Botanical, figure, and geometric styles — DPI requirements and aspect ratios covered.",
    images: ["/assets/og/etsy-line-art-sizes.png"],
  },
};

export default function EtsyLineArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Line Art Print Sizes — Complete Sizing Guide",
    description:
      "Best print sizes for line art on Etsy. Botanical, figure, and geometric line art — DPI requirements, aspect ratios, and portrait vs landscape breakdowns.",
    url: "https://snaptosize.com/etsy-line-art-sizes",
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
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
        name: "Line Art Sizes for Etsy",
        item: "https://snaptosize.com/etsy-line-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What size should line art prints be on Etsy?",
      answer:
        "8×10 (4:5 ratio) is the top-selling size for line art on Etsy and covers the widest range of standard US frames. For botanical and figure line art with vertical compositions, 8×12 (2:3) and A4 are also essential. A complete listing should include 5×7, 8×10, 8×12, 11×14, A4, and A3 to cover all buyer expectations.",
    },
    {
      question: "Does line art need 300 DPI?",
      answer:
        "Yes — and 300 DPI is the minimum, not the ideal. Line art is the most resolution-sensitive digital art style because thin strokes blur, blob, or break below 300 DPI. For very fine-line work (hatching, stippling, hairline botanical details), 350–400 DPI is safer. Never upscale a small file to reach 300 DPI — the thin lines will still degrade. Start large, output at 300 DPI.",
    },
    {
      question: "What aspect ratio is best for line art?",
      answer:
        "It depends on the sub-style. Botanical and figure line art sell best in portrait ratios — 2:3 (8×12, A4) for tall vertical compositions and 4:5 (8×10) for face-framed figure work. Geometric line art often works at 4:5 or square (1:1) for balanced symmetry. Abstract continuous line art is flexible — match the ratio to where the composition has the most visual weight.",
    },
    {
      question: "Should line art be printed on white or off-white?",
      answer:
        "That's a paper choice for the buyer, not a file decision for the seller. Provide your line art file on a white or transparent background at 300 DPI — buyers will print on whatever paper they choose. What matters for your Etsy listing is correct pixel dimensions and aspect ratio, not paper tone.",
    },
    {
      question: "How do I size botanical line art for Etsy?",
      answer:
        "Botanical line art typically has tall, vertical compositions following stem-to-bloom proportions. The 2:3 ratio (8×12, 12×18, A4) is the natural fit — it preserves the full length of the stems without awkward cropping. Also offer 8×10 (4:5) for buyers who prefer standard frames, and A3 for EU buyers who want a larger statement piece. Avoid square crops — they cut off the vertical flow.",
    },
    {
      question: "How many sizes should I offer for line art?",
      answer:
        "Offer at least 6–8 sizes across multiple ratios to cover all buyer frame preferences. A strong line art listing includes: 5×7, 8×10, 16×20 (4:5 pack), 8×12, 12×18 (2:3 pack), A4 and A3 (ISO pack for EU), plus 11×14 in the extras pack. SnapToSize generates all five ratio packs — up to 70 files — from a single upload at 300 DPI.",
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
            "linear-gradient(155deg, #080a08 0%, #0b0d0b 25%, #090b09 50%, #080a08 75%, #060806 100%)",
        }}
      >
        {/* Line art CSS overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 35%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(45,212,191,0.08) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.04) 0%, transparent 40%)",
          }}
        />

        {/* CSS line art grid effect */}
        <style>{`
          .line-art-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 60px 60px;
            pointer-events: none;
          }
          .line-art-bg::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              radial-gradient(ellipse 2px 40px at 20% 40%, rgba(255,255,255,0.08) 0%, transparent 100%),
              radial-gradient(ellipse 1px 60px at 70% 25%, rgba(255,255,255,0.06) 0%, transparent 100%),
              radial-gradient(ellipse 1px 50px at 45% 70%, rgba(45,212,191,0.07) 0%, transparent 100%);
            pointer-events: none;
          }
        `}</style>

        <div className="line-art-bg absolute inset-0" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(45,212,191,0.1)",
              border: "1px solid rgba(45,212,191,0.2)",
              color: "rgba(94,234,212,0.9)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Etsy Seller Guide — Line Art
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Line Art Print Sizes for Etsy
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
            Line art is the most resolution-sensitive digital art style on Etsy — thin strokes blur below 300 DPI and the wrong aspect ratio crops the composition. This guide covers every size and ratio your line art buyers expect, across{" "}
            <Link href="/etsy-print-sizes" className="text-teal-300 hover:text-teal-200 underline underline-offset-2">
              all Etsy print formats
            </Link>
            .
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Botanical, figure & geometric line art",
              "300 DPI requirements explained",
              "Up to 70 files per upload",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <Check className="w-3 h-3" />
                {pill}
              </span>
            ))}
          </div>

          {/* Hero CTA */}
          <a href="https://app.snaptosize.com?source=seo_etsy-line-art-sizes&kind=guide">
            <Button className="text-sm px-6 py-2.5">
              Resize your line art free →
            </Button>
          </a>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="py-12 md:py-16 w-full max-w-[1200px] mx-auto px-4 md:px-8">

        {/* ===== QUICK ANSWER ===== */}
        <QuickAnswer question="What sizes should I offer for line art on Etsy?">
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Botanical line art:</strong> 8×12 and A4 (2:3 portrait) to preserve full stem-to-bloom height; add A3 for EU buyers</span></li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Figure / portrait line art:</strong> 8×10 (4:5) for face framing; 8×12 or A4 (2:3) for full-figure compositions</span></li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Geometric line art:</strong> 8×10 or 12×12 square for symmetrical designs; 16×20 for statement-piece buyers</span></li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Minimum DPI:</strong> 300 DPI for all line art; 350–400 DPI for hairline-detail work</span></li>
          </ul>
        </QuickAnswer>

        {/* ===== SECTION 1: Why Line Art Has Unique Size Challenges ===== */}
        <section className="mb-14 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why line art has unique print size challenges
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Line art is Etsy's most resolution-sensitive digital art category. Where a watercolor wash or abstract gradient can survive mild downscaling, thin strokes cannot — they blur, blob, or break when printed below 300 DPI. This means your source file must be large enough to output every size at 300 DPI without upscaling.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aspect ratio matters more for line art than for most other styles because the negative space around lines is part of the composition. Crop a botanical stem incorrectly and you lose the breathing room that makes the art feel balanced. Crop a figure line drawing and you sever limbs or lose the negative space framing the pose.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Line art is consistently one of Etsy's top-selling digital art categories — particularly in the botanical, minimalist, and figure-drawing niches. The combination of high demand and strict technical requirements makes getting the sizing right especially important for conversion.
          </p>
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200/80">
              <strong>Never upscale a small line art file to reach 300 DPI.</strong> Upscaling interpolates pixels and smears thin strokes — the file will look large but print blurry. See{" "}
              <Link href="/best-resolution-for-etsy-printables" className="underline hover:text-amber-100">
                best resolution for Etsy printables
              </Link>{" "}
              for a full explanation.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2: Best Sizes Table ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best sizes for line art on Etsy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These are the sizes buyers search for most. All measurements assume portrait orientation — see the landscape section below for horizontal variants.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Size</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Pixels @ 300 DPI</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Aspect ratio</th>
                  <th className="text-left py-3 font-semibold text-foreground">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-5x7-print-size" className="hover:underline text-accent-light">5×7</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">1500×2100</td>
                  <td className="py-3 pr-6 text-muted-foreground">5:7</td>
                  <td className="py-3 text-muted-foreground">Accent size, gift prints</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-8x10-print-size" className="hover:underline text-accent-light">8×10</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">2400×3000</td>
                  <td className="py-3 pr-6 text-muted-foreground">4:5</td>
                  <td className="py-3 text-muted-foreground">US standard, widest frame availability</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-8x12-print-size" className="hover:underline text-accent-light">8×12</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">2400×3600</td>
                  <td className="py-3 pr-6 text-muted-foreground">2:3</td>
                  <td className="py-3 text-muted-foreground">Botanical portraits, figure work</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-11x14-print-size" className="hover:underline text-accent-light">11×14</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">3300×4200</td>
                  <td className="py-3 pr-6 text-muted-foreground">11:14</td>
                  <td className="py-3 text-muted-foreground">Gallery standard, mat frames</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-a4-print-size" className="hover:underline text-accent-light">A4</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">2480×3508</td>
                  <td className="py-3 pr-6 text-muted-foreground">1:√2 (ISO)</td>
                  <td className="py-3 text-muted-foreground">EU / international buyers</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-a3-print-size" className="hover:underline text-accent-light">A3</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">3508×4961</td>
                  <td className="py-3 pr-6 text-muted-foreground">1:√2 (ISO)</td>
                  <td className="py-3 text-muted-foreground">Large EU format, statement pieces</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-16x20-print-size" className="hover:underline text-accent-light">16×20</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">4800×6000</td>
                  <td className="py-3 pr-6 text-muted-foreground">4:5</td>
                  <td className="py-3 text-muted-foreground">Large statement pieces</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            See the full{" "}
            <Link href="/etsy-print-sizes" className="text-accent-light hover:underline">
              Etsy print sizes guide
            </Link>{" "}
            for the complete list of sizes across all five ratio packs.
          </p>
        </section>

        {/* ===== LISTING SHOWCASE ===== */}
        <div className="mt-10 mb-14">
          <ListingOutputShowcase
            artwork="wildflower"
            heading="Your line art — every ratio ready to list."
            subtext="SnapToSize generates all five ratio-correct packs from your original upload. Botanical, figure, geometric — one upload covers every buyer."
          />
        </div>

        {/* ===== SECTION 3: Sub-Styles and Format Fit ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Line art sub-styles and the right format for each
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The best size for line art depends on the sub-style. Different compositions have different natural proportions — forcing the wrong ratio onto a line drawing creates awkward crops and wasted negative space.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Botanical line art</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "8×12, 12×18 — 2:3 portrait for stems & leaves",
                  "A4, A3 — ISO for EU botanical buyers",
                  "8×10 — 4:5 for face-on flower close-ups",
                  "Avoid square — crops vertical flow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Figure &amp; portrait line art</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "8×10 — 4:5 for face and bust framing",
                  "8×12, A4 — 2:3 for full-figure poses",
                  "11×14 — gallery standard for statement pieces",
                  "16×20 — large format for editorial-style prints",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Geometric line art</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "8×10, 16×20 — 4:5 for balanced symmetry",
                  "12×12 — square for symmetric patterns",
                  "11×14 — gallery wall standard",
                  "A4 — works well for structured geometry",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Abstract continuous line</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Follow the composition flow — not a fixed ratio",
                  "4:5 or 2:3 depending on visual weight",
                  "Offer both orientations if the art works both ways",
                  "Square can work for circular compositions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For more on choosing the right ratio for your art, see the complete guide to{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              Etsy print ratios
            </Link>{" "}
            — including which ratio sells best for each wall art niche.
          </p>
        </section>

        {/* ===== SECTION 4: DPI and Resolution ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            DPI and resolution for thin lines
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            300 DPI is the print industry minimum — and for line art it really is the minimum, not the safe floor. Thin strokes that look crisp on screen blur at the print stage when the file is below 300 DPI, because a single hairline stroke may only be 1–2 pixels wide at low resolution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The pixel math is simple: multiply the print dimensions in inches by 300 to get the required pixels. An 8×10 print at 300 DPI = 2400×3000 pixels. A 16×20 print = 4800×6000 pixels. Your source file must be at least this large before any export — you cannot add resolution by upscaling.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">DPI</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Result for line art</th>
                  <th className="text-left py-3 font-semibold text-foreground">Recommended?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">72 DPI</td>
                  <td className="py-3 pr-6 text-muted-foreground">Screen only — lines blur heavily at print</td>
                  <td className="py-3 text-red-400 font-medium">No</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">150 DPI</td>
                  <td className="py-3 pr-6 text-muted-foreground">Visible softness — thin strokes lose definition</td>
                  <td className="py-3 text-red-400 font-medium">No</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">300 DPI</td>
                  <td className="py-3 pr-6 text-muted-foreground">Minimum for clean line reproduction</td>
                  <td className="py-3 text-green-400 font-medium">Yes — minimum</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">350–400 DPI</td>
                  <td className="py-3 pr-6 text-muted-foreground">Recommended for very fine hatching or stippling</td>
                  <td className="py-3 text-green-400 font-medium">Yes — for fine detail</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Read the full technical breakdown in{" "}
            <Link href="/best-resolution-for-etsy-printables" className="text-accent-light hover:underline">
              best resolution for Etsy printables
            </Link>
            .
          </p>
        </section>

        {/* ===== CTA 1: Card accent — Coverage angle ===== */}
        <Card accent className="p-6 mb-14">
          <p className="font-semibold text-foreground mb-2">Selling botanical line art?</p>
          <p className="text-sm text-muted-foreground mb-4">
            One upload gives you every size — 2:3 portrait packs for botanical stems, 4:5 packs for face-on florals, and ISO sizes for EU buyers — all auto-exported at 300 DPI.
          </p>
          <a href="https://app.snaptosize.com?source=seo_etsy-line-art-sizes&kind=guide">
            <Button className="text-sm px-5 py-2">
              Try SnapToSize free →
            </Button>
          </a>
        </Card>

        {/* ===== SECTION 5: Portrait vs Landscape ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Portrait vs landscape line art: which sizes to offer
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most line art sells vertically. Portrait orientation dominates because line art subjects — botanical stems, figure poses, architectural elevations — are inherently taller than wide. Lead with portrait sizes: 5×7, 8×10, 8×12, A4, and A3.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Landscape line art exists and sells, but it's a secondary market. Panoramic botanical compositions (a horizontal branch with hanging leaves), abstract sweeping line work, and architectural elevations can work in landscape. If your art genuinely looks good horizontally, add landscape variants of 10×8 (4:5) and 12×9 (4:3) — but don't force a portrait composition into landscape just to offer more options.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Buyers rarely rotate prints themselves. If a landscape variant isn't already part of the original composition, don't include it. A buyer who receives a portrait image expecting a landscape print will leave a bad review.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For detailed guidance on managing both orientations in a single listing, see{" "}
            <Link href="/what-files-to-include-etsy-digital-download" className="text-accent-light hover:underline">
              what files to include in an Etsy digital download
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 6: How SnapToSize keeps line art sharp ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How SnapToSize keeps line art sharp across all sizes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SnapToSize outputs every size at 300 DPI with pixel-perfect aspect ratio calculations — no rounding errors, no cropping without your input. Upload your high-resolution line art once and get back five organized ZIP packs: 2:3, 4:5, 3:4, ISO A-series, and extras including 5×7 and 11×14.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For line art specifically, SnapToSize never upscales a source file to hit a target size. If your source is too small for a particular output, that size is flagged rather than silently degraded. A progressive quality fallback keeps every ZIP under Etsy's 20MB limit without affecting thin-line sharpness at sizes that fit your source resolution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            One upload generates 5×7, 8×10, 8×12, 11×14, A4, A3, and 16×20 — all the sizes in the table above, print-ready. For sellers with large botanical or figure art collections, that's the difference between hours of manual exports and a few minutes of batch uploads.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            See{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to include in an Etsy printable listing
            </Link>{" "}
            for guidance on which packs matter most for conversion.
          </p>
        </section>

        {/* ===== CTA 3: ContextualCTA ===== */}
        <div className="mb-14">
          <ContextualCTA
            problem="Selling a botanical line art collection? That's dozens of uploads × up to 70 files each."
            solution="SnapToSize keeps it to one upload per artwork — every ratio and size is automatic at 300 DPI."
            appUrl="https://app.snaptosize.com?source=seo_etsy-line-art-sizes&kind=guide"
            buttonText="Batch resize your line art →"
          />
        </div>

        {/* ===== CTA 2: FinalCTA ===== */}
        <div className="mb-14">
          <FinalCTA
            heading="Stop exporting sizes one by one."
            stat="Up to 70 files. One upload."
            description="Upload your line art once — SnapToSize delivers every ratio your buyers need at 300 DPI. Botanical, figure, geometric — all covered."
            appUrl="https://app.snaptosize.com?source=seo_etsy-line-art-sizes&kind=guide"
            buttonText="Resize your line art free →"
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
        <RelatedPages currentSlug="etsy-line-art-sizes" />
      </div>
    </>
  );
}
