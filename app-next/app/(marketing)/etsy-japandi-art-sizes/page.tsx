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
  title: "Japandi Art Sizes for Etsy — Sizing Guide",
  description:
    "Best print sizes for japandi wall art on Etsy. US and ISO A-series sizes for wabi-sabi, sumi-e, ikebana, and zen geometric prints — one guide for every buyer.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-japandi-art-sizes",
  },
  openGraph: {
    title: "Japandi Art Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for japandi wall art on Etsy. US and EU ISO sizes for wabi-sabi, sumi-e, ikebana, and zen prints — cover every international buyer.",
    url: "https://snaptosize.com/etsy-japandi-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-japandi-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Japandi Art Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japandi Art Sizes for Etsy — Sizing Guide",
    description:
      "Best sizes for japandi wall art on Etsy. Wabi-sabi, sumi-e, ikebana, zen geometric — US and EU ISO sizes covered.",
    images: ["/assets/og/etsy-japandi-art-sizes.png"],
  },
};

const faqItems = [
  {
    question: "What size is best for japandi wall art?",
    answer:
      "8×10 and 8×12 are the most popular sizes for japandi wall art on Etsy. 8×10 (4:5 ratio) suits framing with standard US frames; 8×12 (2:3 ratio) fits the tall vertical proportions that wabi-sabi and sumi-e compositions favour. For EU and Scandi buyers, A4 is equally essential — IKEA Ribba frames are designed around it.",
  },
  {
    question: "Should I offer A4 for japandi art on Etsy?",
    answer:
      "Yes — A4 is non-negotiable for japandi art. Japandi is disproportionately popular in EU, UK, Scandinavia, and Japan, where A4 (8.27×11.69\") is the printing standard. US-only listings with 8×10 but no A4 require international buyers to source custom frames, which kills conversions. Adding A4 and A3 can recover 40% of your potential market.",
  },
  {
    question: "What aspect ratio is best for japandi prints?",
    answer:
      "2:3 is the strongest ratio for most japandi styles — it mirrors the vertical scroll format used in Japanese tokonoma (alcove) displays, and provides the generous negative space the aesthetic demands. 4:5 works well for more balanced compositions like enso circles or karesansuri patterns. A4 (1:√2) is ideal for international buyers.",
  },
  {
    question: "How do I size a zen circle (enso) print?",
    answer:
      "Enso circles work in square or 4:5 formats. 8×8, 10×10, and 12×12 are strong square options that avoid cropping the circular form. 8×10 and 16×20 work for 4:5 enso prints with breathing room. Avoid very narrow 2:3 formats for enso — the circle feels squeezed. Include A4 for the large EU and Japanese buyer base who love enso art.",
  },
  {
    question: "What sizes are most popular for japanese minimalist art?",
    answer:
      "5×7, 8×10, and 8×12 lead US sales for japanese minimalist art. A4 and A3 are the top performers for EU and Scandi buyers. For sumi-e ink painting and ikebana botanical styles, 8×12 and A4 are especially strong because their 2:3-to-1:√2 proportions echo the tall vertical compositions. 16×20 and 18×24 suit large gallery wall statement pieces.",
  },
  {
    question: "How many sizes should a japandi art listing include?",
    answer:
      "At minimum: 8×12 (2:3), 8×10 (4:5), and A4. Top-selling japandi shops offer all ratio packs — 2:3, 4:5, ISO A-series (A4 + A3), and Extras — giving buyers 50–70 files to choose from. More sizes eliminate buyer questions about fit and directly reduce cart abandonment. SnapToSize exports all sizes in one click from your original file.",
  },
];

export default function EtsyJapandiArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Japandi Art Sizes for Etsy — Complete Sizing Guide",
    description:
      "Best print sizes for japandi wall art on Etsy. US and ISO A-series sizes for wabi-sabi, sumi-e, ikebana, and zen geometric prints.",
    url: "https://snaptosize.com/etsy-japandi-art-sizes",
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
        name: "Japandi Art Sizes",
        item: "https://snaptosize.com/etsy-japandi-art-sizes",
      },
    ],
  };

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
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
            "linear-gradient(155deg, #0a0c0a 0%, #0d0e0b 25%, #0b0c09 50%, #090b08 75%, #080a07 100%)",
        }}
      >
        {/* Ink-wash overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 15% 40%, rgba(120,140,100,0.5) 0%, transparent 55%), radial-gradient(ellipse at 80% 25%, rgba(180,160,100,0.3) 0%, transparent 45%), radial-gradient(ellipse at 50% 80%, rgba(100,120,90,0.4) 0%, transparent 40%)",
          }}
        />

        {/* Sage glow — top left */}
        <div
          className="absolute top-[-8%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, rgba(120,140,100,0.8), transparent 70%)",
          }}
        />
        {/* Gold bamboo accent — bottom right */}
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, rgba(180,160,100,0.9), transparent 70%)",
          }}
        />
        {/* Subtle centre wash */}
        <div
          className="absolute top-[30%] left-[40%] w-[350px] h-[350px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, rgba(140,150,120,0.8), transparent 70%)",
          }}
        />

        {/* CSS ink-wash texture dots */}
        <style>{`
          .japandi-wash::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              radial-gradient(1.5px 1.5px at 12% 20%, rgba(180,160,100,0.25) 0%, transparent 100%),
              radial-gradient(1px 1px at 28% 10%, rgba(120,140,100,0.2) 0%, transparent 100%),
              radial-gradient(2px 2px at 45% 30%, rgba(160,150,110,0.15) 0%, transparent 100%),
              radial-gradient(1px 1px at 62% 15%, rgba(180,160,100,0.2) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 75% 22%, rgba(120,140,100,0.18) 0%, transparent 100%),
              radial-gradient(1px 1px at 88% 18%, rgba(160,150,110,0.15) 0%, transparent 100%),
              radial-gradient(1px 1px at 8% 65%, rgba(180,160,100,0.12) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 33% 70%, rgba(120,140,100,0.15) 0%, transparent 100%),
              radial-gradient(1px 1px at 58% 58%, rgba(160,150,110,0.18) 0%, transparent 100%),
              radial-gradient(1px 1px at 82% 72%, rgba(180,160,100,0.12) 0%, transparent 100%),
              radial-gradient(1px 1px at 20% 85%, rgba(120,140,100,0.1) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 70% 88%, rgba(160,150,110,0.15) 0%, transparent 100%);
            pointer-events: none;
          }
        `}</style>
        <div className="japandi-wash absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(120,140,100,0.15)",
                border: "1px solid rgba(140,160,100,0.3)",
                color: "rgba(180,200,160,0.95)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
              Etsy Seller Guide — Japandi Art
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Japandi Art Sizes for Etsy
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
              Japandi blends Japanese minimalism and Scandinavian design — and its buyers are spread across the US, EU, UK, and Japan. That means you need both US standard sizes and ISO A-series to reach your full market. This guide covers every size across{" "}
              <Link href="/etsy-print-sizes" className="text-green-300 hover:text-green-200 underline underline-offset-2">
                all Etsy print formats
              </Link>{" "}
              so you never lose an international sale to a missing size.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Wabi-sabi, sumi-e & ikebana",
                "US + EU ISO sizes covered",
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

            <a href="https://app.snaptosize.com?source=seo_etsy-japandi-art-sizes&kind=guide">
              <Button className="text-sm px-6 py-2.5">
                Resize japandi art free →
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="py-12 md:py-16 w-full max-w-[1200px] mx-auto px-4 md:px-8">
        {/* ===== QUICK ANSWER ===== */}
        <QuickAnswer question="What sizes should I offer for japandi wall art on Etsy?">
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>US buyers:</strong> 5×7, 8×10, 8×12, 16×20, 18×24 — cover 4:5 and 2:3 portrait ratios</span></li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>EU / Scandi / Japan buyers:</strong> A4 and A3 — ISO A-series is the standard in all these markets</span></li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Enso / zen geometric:</strong> add 8×8 or 10×10 square formats for circular compositions</span></li>
          </ul>
        </QuickAnswer>

        {/* ===== LISTING SHOWCASE ===== */}
        <div className="mt-10 mb-14">
          <ListingOutputShowcase
            artwork="wildflower"
            heading="Your japandi art — every ratio ready to list."
            subtext="SnapToSize exports all sizes in one click: 5×7, 8×10, 8×12, A4, A3, 16×20, 18×24. One upload covers US and international buyers."
          />
        </div>

        {/* ===== SECTION 1: What Makes Japandi Art Different ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What makes japandi art different for sizing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Japandi is the intersection of Japanese <em>ma</em> (negative space) and Scandinavian hygge — two design cultures that both prize restraint. What makes this niche unusual for Etsy sellers is that its buyer base spans two continents with different framing standards.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            US buyers reach for 8×10 and 16×20 frames. EU, UK, Scandi, and Japanese buyers use ISO A-series (A4, A3) — the global printing standard that US sellers routinely overlook. Understanding{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              why print ratios differ between markets
            </Link>{" "}
            is the first step to not losing 40% of your potential buyers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The aesthetic itself also creates sizing constraints. Japandi compositions rely heavily on negative space — generous white or off-white margins that are part of the design. Cropping to fill a frame destroys the aesthetic. Sellers who let buyers choose a standard US frame for an ISO-proportioned design end up with unhappy reviews.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The solution is offering both ratio families: 2:3 US verticals and 1:√2 ISO sizes — plus square options for enso and geometric work. The table below makes this concrete.
          </p>
        </section>

        {/* ===== SECTION 2: Best Sizes Table ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best sizes for japandi wall art on Etsy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Use this table as your baseline. Every size here corresponds to a ratio pack in SnapToSize — one upload exports all of them automatically.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Size</th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Pixels at 300 DPI</th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Ratio</th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Best for</th>
                  <th className="text-left py-3 font-semibold text-foreground">Region</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-4 text-foreground font-medium"><Link href="/etsy-5x7-print-size" className="hover:underline">5×7</Link></td>
                  <td className="py-3 pr-4 text-muted-foreground">1500×2100</td>
                  <td className="py-3 pr-4 text-muted-foreground">5:7</td>
                  <td className="py-3 pr-4 text-muted-foreground">Accent pieces, bedside frames</td>
                  <td className="py-3 text-muted-foreground">US</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground font-medium"><Link href="/etsy-8x10-print-size" className="hover:underline">8×10</Link></td>
                  <td className="py-3 pr-4 text-muted-foreground">2400×3000</td>
                  <td className="py-3 pr-4 text-muted-foreground">4:5</td>
                  <td className="py-3 pr-4 text-muted-foreground">US standard, enso, geometric</td>
                  <td className="py-3 text-muted-foreground">US</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground font-medium"><Link href="/etsy-8x12-print-size" className="hover:underline">8×12</Link></td>
                  <td className="py-3 pr-4 text-muted-foreground">2400×3600</td>
                  <td className="py-3 pr-4 text-muted-foreground">2:3</td>
                  <td className="py-3 pr-4 text-muted-foreground">Statement pieces, tokonoma style</td>
                  <td className="py-3 text-muted-foreground">US + EU</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground font-medium"><Link href="/etsy-a4-print-size" className="hover:underline">A4</Link></td>
                  <td className="py-3 pr-4 text-muted-foreground">2480×3508</td>
                  <td className="py-3 pr-4 text-muted-foreground">1:√2</td>
                  <td className="py-3 pr-4 text-muted-foreground">EU/UK/Scandi/Japan buyers — IKEA Ribba frame</td>
                  <td className="py-3 text-muted-foreground">EU / International</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground font-medium">A3</td>
                  <td className="py-3 pr-4 text-muted-foreground">3508×4961</td>
                  <td className="py-3 pr-4 text-muted-foreground">1:√2</td>
                  <td className="py-3 pr-4 text-muted-foreground">Large-format EU, gallery statement</td>
                  <td className="py-3 text-muted-foreground">EU / International</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground font-medium"><Link href="/etsy-16x20-print-size" className="hover:underline">16×20</Link></td>
                  <td className="py-3 pr-4 text-muted-foreground">4800×6000</td>
                  <td className="py-3 pr-4 text-muted-foreground">4:5</td>
                  <td className="py-3 pr-4 text-muted-foreground">Gallery wall, living room feature</td>
                  <td className="py-3 text-muted-foreground">US</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground font-medium"><Link href="/etsy-18x24-print-size" className="hover:underline">18×24</Link></td>
                  <td className="py-3 pr-4 text-muted-foreground">5400×7200</td>
                  <td className="py-3 pr-4 text-muted-foreground">3:4</td>
                  <td className="py-3 pr-4 text-muted-foreground">Poster, oversized statement</td>
                  <td className="py-3 text-muted-foreground">US</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            The key insight: 8×12 and A4 are close but not interchangeable. 8×12 is 2:3; A4 is 1:√2 (approximately 1:1.414). They look similar but produce different crops. Offer both and label them clearly in your listing description.
          </p>
        </section>

        {/* ===== SECTION 3: Sub-Styles ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Japandi sub-styles and their ideal formats
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Each japandi sub-style has distinct compositional logic. Matching your size offering to the style avoids cropping decisions that ruin the aesthetic.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Wabi-sabi</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Asymmetric compositions — favour 2:3 vertical (8×12, A4)",
                  "Intentional imperfection benefits from generous margins",
                  "Avoid square crops — they compress the off-balance design",
                  "Best sizes: 8×12, A4, A3 for large statement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Sumi-e ink painting</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Tall narrow verticals echo traditional scroll format",
                  "2:3 is the natural ratio — 8×12 and A4 are ideal",
                  "Avoid 4:5 — the composition loses its scroll feel",
                  "Best sizes: 8×12, A4, 12×18 for larger prints",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Ikebana botanical</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Tall portrait for stems and negative space — 2:3 or A4",
                  "5×7 works for small accent pieces",
                  "A3 suits large-format ikebana with fine stem detail",
                  "Best sizes: 5×7, 8×12, A4, A3",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Zen geometric (enso, karesansuri)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Circular enso: square formats avoid cropping — 8×8, 10×10",
                  "Karesansuri patterns work in 4:5 or 2:3 for wall presence",
                  "8×10 and 16×20 give enso room to breathe",
                  "Best sizes: 8×8, 10×10, 8×10, 16×20 + A4",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* ===== SECTION 4: Framing ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Framing and composition for japandi prints
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Negative space is not empty space in japandi — it is the design. A sumi-e branch with a large pale area to its left is compositionally intentional. Sellers who warn buyers not to crop-to-fill get better reviews and fewer refund requests.
          </p>

          <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">Negative space warning</p>
                <p className="text-sm text-muted-foreground">
                  Cropping a japandi print to fill a frame destroys the aesthetic. Add a note in your listing description: "These files include intentional negative space — do not crop to fill frame." This reduces buyer confusion and protects your reviews.
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            For US buyers, standard frames in 5×7, 8×10, and 16×20 are widely available at Target and IKEA US. For EU and Scandi buyers, IKEA Ribba frames are everywhere — and they are designed for A4 and A3. Offering both size families means your listing works with the frames buyers already own.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            See our guide on{" "}
            <Link href="/etsy-minimalist-wall-art-sizes" className="text-accent-light hover:underline">
              minimalist wall art sizing
            </Link>{" "}
            for more on negative space and frame compatibility across styles.
          </p>
        </section>

        {/* ===== SECTION 5: International Sizing ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why international sizing matters for japandi art
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Japandi is not a US-centric niche. It is disproportionately popular in Germany, Sweden, Norway, Denmark, the Netherlands, the UK, and Japan — markets where ISO 216 A-series paper is the printing standard. A4 (210×297mm / 8.27×11.69&quot;) and A3 (297×420mm / 11.69×16.54&quot;) are what home printers and print shops stock by default.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A US listing that only offers 8×10 forces EU buyers to either find a custom frame (few do) or abandon the cart. Sellers who add A4 and A3 report that international orders can represent 30–40% of japandi listing revenue — a significant segment lost by omission.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The ISO 216 standard uses a 1:√2 aspect ratio so that halving a sheet always produces the next size down: A3 halved = A4, A4 halved = A5. This is why A4 and 8×10 cannot simply substitute for each other — they have different ratios (1:√2 vs 4:5) and will crop differently.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For a deeper look at the ratio differences, see our{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              Etsy print ratios guide
            </Link>{" "}
            and the dedicated{" "}
            <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">
              A4 print size guide
            </Link>.
          </p>
        </section>

        {/* ===== CONTEXTUAL CTA ===== */}
        <ContextualCTA
          problem="Japandi buyers in Scandinavia, Germany, and Japan use A4 frames — not 8×10."
          solution="SnapToSize exports US and ISO sizes together — one upload, one ZIP, every market covered."
          appUrl="https://app.snaptosize.com?source=seo_etsy-japandi-art-sizes&kind=guide"
          buttonText="Export US + EU sizes free →"
        />

        {/* ===== SECTION 6: SnapToSize ===== */}
        <section className="mb-14 mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How SnapToSize handles japandi multi-pack exports
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SnapToSize exports all japandi sizes in one click from your original file: 5×7, 8×10, 8×12, A4, A3, 16×20, 18×24 — and square formats for enso. The ratio shift between 2:3 US verticals and 1:√2 ISO is handled automatically, so A4 and 8×12 are exported as distinct, correctly-proportioned files rather than scaled copies of each other.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every ZIP stays under 20MB — Etsy&apos;s upload limit — using progressive quality optimisation that maintains visual crispness while keeping file size compliant. You can read more about{" "}
            <Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">
              Etsy&apos;s 20MB file limit
            </Link>{" "}
            and how to work within it.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            One upload covers US and international buyers. No Photoshop, no manual resizing, no frame mismatch complaints.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "US packs",
                items: ["5×7 (5:7)", "8×10 (4:5)", "8×12 (2:3)", "16×20 (4:5)", "18×24 (3:4)"],
              },
              {
                title: "ISO / EU packs",
                items: ["A4 (1:√2)", "A3 (1:√2)", "Auto-exported alongside US sizes", "IKEA Ribba-ready", "No custom framing needed"],
              },
              {
                title: "Extras",
                items: ["8×8 square (enso)", "10×10 square (zen geometric)", "11×14 (gallery wall)", "Under 20MB ZIP", "Print-ready at 300 DPI"],
              },
            ].map((col) => (
              <Card key={col.title} className="p-5">
                <h3 className="font-semibold text-foreground mb-3">{col.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Need to understand how many sizes you should include in a listing? See{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to offer for Etsy printables
            </Link>{" "}
            for conversion data on size counts and buyer expectations.
          </p>
        </section>

        {/* ===== CTA before FAQ ===== */}
        <FinalCTA
          heading="Export every japandi size in one click"
          stat="US + EU sizes. One upload. Under 20MB."
          description="5×7, 8×10, 8×12, A4, A3, 16×20, 18×24 — all ratio-correct, all print-ready. Cover US and international buyers from a single file."
          appUrl="https://app.snaptosize.com?source=seo_etsy-japandi-art-sizes&kind=guide"
          buttonText="Try SnapToSize free →"
        />

        {/* ===== FAQ ===== */}
        <section className="mt-14 mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Japandi art sizing — frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* ===== RELATED PAGES ===== */}
        <RelatedPages currentSlug="etsy-japandi-art-sizes" />
      </div>
    </>
  );
}
