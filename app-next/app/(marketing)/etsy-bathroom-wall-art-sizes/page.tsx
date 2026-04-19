import type { Metadata } from "next";
import Link from "next/link";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { Button } from "@/components/Button";
import { Check, ArrowRight, Ruler, Frame, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Etsy Bathroom Wall Art Sizes — Print Guide",
  description:
    "Best bathroom wall art sizes for Etsy: 5x7, 8x10, 11x14, A4. Portrait vs landscape, pixel dimensions at 300 DPI, offer every frame size automatically.",
  alternates: { canonical: "https://snaptosize.com/etsy-bathroom-wall-art-sizes" },
  openGraph: {
    title: "Etsy Bathroom Wall Art Sizes — Print Guide",
    description:
      "Best bathroom wall art sizes for Etsy: 5x7, 8x10, 11x14, A4. Portrait vs landscape, pixel dimensions at 300 DPI, offer every frame size automatically.",
    url: "https://snaptosize.com/etsy-bathroom-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-bathroom-wall-art-sizes.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Bathroom Wall Art Sizes — Print Guide",
    description:
      "Best bathroom wall art sizes for Etsy: 5x7, 8x10, 11x14, A4. Portrait vs landscape, pixel dimensions at 300 DPI, offer every frame size automatically.",
    images: ["/assets/og/etsy-bathroom-wall-art-sizes.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Etsy Bathroom Wall Art Sizes: The Complete Print Size Guide",
      description:
        "Which print sizes sell best for bathroom wall art on Etsy, portrait vs landscape orientation, pixel dimensions at 300 DPI, and how to offer all sizes without manual resizing.",
      url: "https://snaptosize.com/etsy-bathroom-wall-art-sizes",
      datePublished: "2026-04-19",
      dateModified: "2026-04-19",
      author: { "@type": "Organization", name: "SnapToSize" },
      publisher: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Etsy Print Sizes",
          item: "https://snaptosize.com/etsy-print-sizes",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bathroom Wall Art Sizes",
          item: "https://snaptosize.com/etsy-bathroom-wall-art-sizes",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What sizes sell best for bathroom wall art on Etsy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For bathrooms, smaller prints tend to dominate: 5x7, 8x10, and 11x14 are the top sellers. Vertical (portrait) orientation suits narrow bathroom walls. A4 is the top international size.",
          },
        },
        {
          "@type": "Question",
          name: "Should bathroom wall art prints be portrait or landscape?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Portrait (vertical) prints are preferred for bathroom walls because most bathroom wall spaces are taller than wide. 2:3 ratio (e.g. 8x12, 12x18) and 4:5 ratio (e.g. 8x10, 16x20) are the best fits.",
          },
        },
        {
          "@type": "Question",
          name: "What pixel dimensions do I need for an 8x10 bathroom print at 300 DPI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An 8x10 inch print at 300 DPI requires a file of 2,400 x 3,000 pixels. SnapToSize generates this and all other standard sizes automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Do buyers want A4 prints for bathroom wall art?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — A4 (210 x 297mm) is the most common international print size and slots perfectly into standard IKEA frames, making it extremely popular with European buyers of bathroom printables.",
          },
        },
        {
          "@type": "Question",
          name: "How many file sizes should I include in my bathroom wall art Etsy listing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Offer at minimum: 5x7, 8x10, 11x14 (4:5 ratio), 8x12, 12x18 (2:3 ratio), and A4 (ISO). Covering all major ratios in one listing prevents lost sales from buyers who only have a specific frame size.",
          },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    question: "What sizes sell best for bathroom wall art on Etsy?",
    answer:
      "For bathrooms, smaller prints tend to dominate: 5x7, 8x10, and 11x14 are the top sellers. Vertical (portrait) orientation suits narrow bathroom walls. A4 is the top international size.",
  },
  {
    question: "Should bathroom wall art prints be portrait or landscape?",
    answer:
      "Portrait (vertical) prints are preferred for bathroom walls because most bathroom wall spaces are taller than wide. 2:3 ratio (e.g. 8x12, 12x18) and 4:5 ratio (e.g. 8x10, 16x20) are the best fits.",
  },
  {
    question: "What pixel dimensions do I need for an 8x10 bathroom print at 300 DPI?",
    answer:
      "An 8x10 inch print at 300 DPI requires a file of 2,400 x 3,000 pixels. SnapToSize generates this and all other standard sizes automatically.",
  },
  {
    question: "Do buyers want A4 prints for bathroom wall art?",
    answer:
      "Yes — A4 (210 x 297mm) is the most common international print size and slots perfectly into standard IKEA frames, making it extremely popular with European buyers of bathroom printables.",
  },
  {
    question: "How many file sizes should I include in my bathroom wall art Etsy listing?",
    answer:
      "Offer at minimum: 5x7, 8x10, 11x14 (4:5 ratio), 8x12, 12x18 (2:3 ratio), and A4 (ISO). Covering all major ratios in one listing prevents lost sales from buyers who only have a specific frame size.",
  },
];

export default function EtsyBathroomWallArtSizesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-foreground-60" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/etsy-print-sizes" className="hover:text-foreground transition-colors">
                Etsy Print Sizes
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">Bathroom Wall Art Sizes</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1 min-w-0">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5"
                style={{
                  background: "rgba(45,212,191,0.1)",
                  border: "1px solid rgba(45,212,191,0.25)",
                  color: "#2DD4BF",
                }}
              >
                Bathroom Art · Size Guide
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                Etsy Bathroom Wall Art Sizes
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" style={{ maxWidth: "42rem" }}>
                Bathroom walls are small, narrow, and unforgiving. Get the size wrong and your print
                won&apos;t fit the buyer&apos;s frame. Every print size that sells for bathroom wall
                art on Etsy — 5×7, 8×10, 11×14, A4, portrait ratios — with exact pixel dimensions
                at 300 DPI.
              </p>

              <div className="mb-10">
                <a href="https://app.snaptosize.com">
                  <Button className="gap-2">
                    Generate All Bathroom Sizes
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Portrait-first sizing",
                  "All major ratios covered",
                  "300 DPI pixel dimensions",
                  "International + US frames",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2 text-[11px] sm:text-xs sm:px-2.5 py-1 text-muted-foreground"
                  >
                    <Check className="w-3 h-3 text-accent-light flex-shrink-0" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero visual — CSS size diagram */}
            <div className="hidden lg:flex flex-col items-center justify-start pt-2 flex-shrink-0 gap-3" style={{ width: 300 }}>
              <div
                className="rounded-2xl p-6 w-full"
                style={{
                  background: "linear-gradient(160deg, #0c0d14 0%, #080910 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#2DD4BF", letterSpacing: "0.14em", fontFamily: "ui-monospace, monospace" }}>
                  Best bathroom sizes
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "8×10", ratio: "4:5", w: 4, h: 5 },
                    { label: "5×7",  ratio: "5:7", w: 5, h: 7 },
                    { label: "11×14", ratio: "4:5", w: 11, h: 14 },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <div
                        className="rounded flex items-center justify-center flex-shrink-0"
                        style={{
                          width: 36,
                          height: Math.round(36 * (s.h / s.w)),
                          background: "rgba(45,212,191,0.12)",
                          border: "1px solid rgba(45,212,191,0.3)",
                        }}
                      />
                      <div>
                        <span className="text-sm font-semibold text-white/90">{s.label}&Prime;</span>
                        <span className="text-xs text-white/40 ml-2">{s.ratio}</span>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-3 mt-1">
                    <span className="text-xs text-white/40">+ A4, 8×12, 12×18 &amp; more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: What sizes work best */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            What Sizes Work Best for Bathroom Wall Art on Etsy
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Bathroom spaces are typically smaller than living rooms or bedrooms, so buyers gravitate
            toward compact print sizes. The sweet spot for most bathrooms is{" "}
            <strong className="text-foreground">5×7, 8×10, and 11×14</strong>. These fit above
            towel rails, beside mirrors, or on narrow walls without overwhelming the space.
          </p>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            For international buyers (UK, EU, Australia), <Link href="/etsy-a4-print-size" className="text-teal-400 hover:underline">A4</Link> is
            equally important — it slots straight into IKEA frames and standard European frame
            sizes. Offering A4 alongside US sizes maximises your reach without extra design work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { size: "5×7", ratio: "5:7 (≈2:3)", notes: "Over-toilet, small shelf art" },
              { size: "8×10", ratio: "4:5", notes: "Most popular US bathroom size" },
              { size: "11×14", ratio: "4:5 (approx)", notes: "Statement piece, large bathroom" },
              { size: "A4", ratio: "ISO 216", notes: "#1 international frame size" },
            ].map(({ size, ratio, notes }) => (
              <div
                key={size}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-2xl font-bold text-teal-400 mb-1">{size}</div>
                <div className="text-xs text-foreground-50 mb-2 font-mono">{ratio}</div>
                <div className="text-sm text-foreground-70">{notes}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground-50">
            See the full list in our{" "}
            <Link href="/etsy-print-sizes" className="text-teal-400 hover:underline">
              Etsy print sizes guide
            </Link>
            .
          </p>
        </section>

        {/* Section 2: Portrait vs landscape */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Portrait vs Landscape: What Sells in Bathroom Spaces
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Portrait (vertical) orientation is the clear winner for bathroom wall art. Most bathroom
            walls offer tall, narrow spaces — beside a mirror, above a toilet tank, or in a shower
            niche. Portrait prints fill these spaces naturally where a landscape print would look
            out of place and undersized.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(45,212,191,0.05)",
                border: "1px solid rgba(45,212,191,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Frame className="w-5 h-5 text-teal-400" />
                <span className="font-semibold text-foreground">Portrait (recommended)</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Fills narrow bathroom walls naturally</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Suits over-toilet and beside-mirror placement</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />2:3 ratio (8×12, 12×18) and 4:5 ratio (8×10, 16×20)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Works for botanical, quote, and minimalist art styles</li>
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="w-5 h-5 text-foreground-50" />
                <span className="font-semibold text-foreground-70">Landscape (limited use)</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-60">
                <li className="flex gap-2"><span className="w-4 shrink-0">→</span>Best for wide bathroom shelves or dual-print gallery walls</li>
                <li className="flex gap-2"><span className="w-4 shrink-0">→</span>Less versatile for standard bathroom placement</li>
                <li className="flex gap-2"><span className="w-4 shrink-0">→</span>Offer as a bonus variant, not the primary listing format</li>
              </ul>
            </div>
          </div>
          <p className="text-foreground-70 leading-relaxed">
            Learn more about <Link href="/etsy-print-ratios" className="text-teal-400 hover:underline">print ratios for Etsy</Link> to understand
            how ratio choice affects which frame sizes your buyers can use.
          </p>
        </section>

        {/* Section 3: Size guide by ratio */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Bathroom Print Size Guide by Ratio (2:3, 3:4, 4:5, ISO)
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Each print ratio unlocks a different set of frame sizes. For bathroom wall art, you want
            to cover at least the 2:3 and 4:5 ratios — these two alone cover the vast majority of
            standard frames available at IKEA, Target, and home goods stores.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Common Sizes</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Best for Bathrooms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ratio: "2:3", sizes: "4×6, 8×12, 12×18, 20×30", best: "Narrow walls, botanical prints" },
                  { ratio: "4:5", sizes: "4×5, 8×10, 16×20, 5×7*", best: "Most popular US bathroom size" },
                  { ratio: "3:4", sizes: "6×8, 9×12, 12×16", best: "Mid-sized spaces, gallery walls" },
                  { ratio: "ISO A4", sizes: "A4 (210×297mm), A3, A5", best: "European buyers, IKEA frames" },
                ].map(({ ratio, sizes, best }, i) => (
                  <tr
                    key={ratio}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="py-3 px-4 font-mono text-teal-400 font-medium">{ratio}</td>
                    <td className="py-3 px-4 text-foreground-70">{sizes}</td>
                    <td className="py-3 px-4 text-foreground-60">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground-50">
            *5×7 is technically a 5:7 ratio but buyers treat it as a 4:5 equivalent — offer it
            alongside 8×10 in the same pack.
          </p>
        </section>

        {/* CTA 1 — angle: cover every ratio without extra work */}
        <section className="mb-16 rounded-2xl px-8 py-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(45,212,191,0.08) 0%, rgba(167,139,250,0.08) 100%)", border: "1px solid rgba(45,212,191,0.2)" }}>
          <h3 className="text-xl font-bold text-foreground mb-3">
            One upload. All bathroom wall art ratios.
          </h3>
          <p className="text-foreground-70 mb-6 max-w-[580px] mx-auto">
            Upload your design once and SnapToSize generates every ratio-correct file — 2:3, 4:5,
            3:4, A4 — all at print-ready 300 DPI. No Photoshop, no manual resizing.
          </p>
          <a href="https://app.snaptosize.com">
            <Button className="gap-2">
              Try Free — No Account Needed
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </section>

        {/* Section 4: Common frame sizes */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Common Frame Sizes for Bathroom Walls
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Buyers don&apos;t buy prints then shop for frames — they buy prints to fit frames they
            already own. Knowing which frames are most common in bathrooms helps you decide which
            sizes to prioritise in your listing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { frame: "5×7 in", where: "Over-toilet shelves, small walls", ratio: "5:7 (≈2:3)" },
              { frame: "8×10 in", where: "Primary bathroom feature wall", ratio: "4:5" },
              { frame: "11×14 in", where: "Large bathrooms, spa-style", ratio: "Approx 4:5" },
              { frame: "A4 (IKEA)", where: "EU/UK bathrooms, RIBBA frame", ratio: "ISO 216" },
              { frame: "4×6 in", where: "Shelf displays, accent walls", ratio: "2:3" },
              { frame: "8×12 in", where: "Niche placement, botanical art", ratio: "2:3" },
            ].map(({ frame, where, ratio }) => (
              <div
                key={frame}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Frame className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm">{frame}</div>
                  <div className="text-xs text-foreground-50 mb-1">{ratio}</div>
                  <div className="text-sm text-foreground-60">{where}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground-70 leading-relaxed">
            See our dedicated guides for{" "}
            <Link href="/etsy-5x7-print-size" className="text-teal-400 hover:underline">5×7 print size</Link>,{" "}
            <Link href="/etsy-8x10-print-size" className="text-teal-400 hover:underline">8×10 print size</Link>, and{" "}
            <Link href="/etsy-11x14-print-size" className="text-teal-400 hover:underline">11×14 print size</Link> for
            full pixel dimension breakdowns.
          </p>
        </section>

        {/* Section 5: Small vs large bathroom */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Small Bathroom vs Large Bathroom — Sizing Considerations
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            A buyer with a compact powder room needs a different size than someone decorating a
            master bathroom suite. Covering both ends of the spectrum in a single listing maximises
            your conversion rate without requiring multiple designs.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="font-bold text-foreground mb-3 text-lg">Small / Powder Room</h3>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">4×6</strong> — shelf or ledge placement</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">5×7</strong> — over-toilet or narrow side wall</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">A5</strong> — compact ISO size for small frames</li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="font-bold text-foreground mb-3 text-lg">Large / Master Bathroom</h3>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">8×10 / 8×12</strong> — standard feature piece</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">11×14</strong> — statement print for spa-style bathrooms</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">A4 / A3</strong> — paired prints for gallery-wall bathrooms</li>
              </ul>
            </div>
          </div>
          <p className="text-foreground-70 leading-relaxed">
            The safest strategy: include <em>all six sizes</em> in every listing. A buyer with a
            powder room self-selects the 5×7; a buyer with a spa bathroom grabs the 11×14. You make
            one sale either way. This also relates to how{" "}
            <Link href="/etsy-quote-wall-art-sizes" className="text-teal-400 hover:underline">quote wall art sizes</Link> and{" "}
            <Link href="/etsy-minimalist-wall-art-sizes" className="text-teal-400 hover:underline">minimalist wall art sizes</Link> work —
            the same multi-size logic applies across all bathroom-friendly styles.
          </p>
        </section>

        {/* Section 6: Pixel dimensions at 300 DPI */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Pixel Dimensions for Bathroom Prints at 300 DPI
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Print-ready files need to be at least 300 DPI for sharp output. Below are the exact
            pixel dimensions for every common bathroom wall art size. See our full{" "}
            <Link href="/print-sizes-at-300-dpi" className="text-teal-400 hover:underline">print sizes at 300 DPI guide</Link> for
            the complete list.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Print Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Pixels at 300 DPI</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "4×6 in", pixels: "1,200 × 1,800 px", ratio: "2:3" },
                  { size: "5×7 in", pixels: "1,500 × 2,100 px", ratio: "5:7" },
                  { size: "8×10 in", pixels: "2,400 × 3,000 px", ratio: "4:5" },
                  { size: "8×12 in", pixels: "2,400 × 3,600 px", ratio: "2:3" },
                  { size: "11×14 in", pixels: "3,300 × 4,200 px", ratio: "11:14" },
                  { size: "12×18 in", pixels: "3,600 × 5,400 px", ratio: "2:3" },
                  { size: "A4 (210×297mm)", pixels: "2,480 × 3,508 px", ratio: "ISO 216" },
                  { size: "A5 (148×210mm)", pixels: "1,748 × 2,480 px", ratio: "ISO 216" },
                ].map(({ size, pixels, ratio }, i) => (
                  <tr
                    key={size}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="py-3 px-4 font-medium text-foreground">{size}</td>
                    <td className="py-3 px-4 font-mono text-teal-400">{pixels}</td>
                    <td className="py-3 px-4 text-foreground-60">{ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA 2 — angle: skip the pixel math entirely */}
          <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)" }}>
            <div>
              <p className="font-semibold text-foreground mb-1">Skip the pixel math entirely</p>
              <p className="text-sm text-foreground-60">
                Upload once and SnapToSize calculates every dimension and outputs all sizes at 300 DPI.
              </p>
            </div>
            <a href="https://app.snaptosize.com" className="shrink-0">
              <Button variant="secondary" className="gap-1.5 whitespace-nowrap">
                Try SnapToSize Free
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </section>

        {/* ListingOutputShowcase */}
        <section className="mb-16">
          <ListingOutputShowcase
            artwork="floral_vase"
            heading="One botanical print. Every bathroom size."
            subtext="SnapToSize takes your floral illustration and generates 5×7, 8×10, 11×14, A4, and every other ratio your buyer might need — automatically, at print-ready quality."
          />
        </section>

        {/* Lifestyle mockup */}
        <section className="mb-16 rounded-2xl overflow-hidden">
          <img
            src="/assets/visuals/etsy-bathroom-wall-art-sizes-lifestyle.jpg"
            alt="Clean minimalist bathroom with white subway tiles featuring a framed botanical art print above a wooden shelf — spa-like aesthetic"
            width={1200}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </section>

        {/* Section 7: How to offer all sizes without manual resizing */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            How to Offer All Bathroom Wall Art Sizes Without Manual Resizing
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Most Etsy sellers either offer too few sizes (losing sales to frame mismatches) or
            spend hours in Photoshop manually resizing the same design. Neither is a good use of
            time.
          </p>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            The better approach: upload your original design at the highest resolution you have, and
            let SnapToSize generate every ratio-correct variant — 2:3, 4:5, 3:4, A4, and more —
            all at 300 DPI, all delivered in a single download. Your Etsy listing gets every size a
            bathroom buyer could need, and you spend zero extra time in design tools.
          </p>
          <ol className="space-y-4 mb-6">
            {[
              { step: "1", title: "Upload your design", desc: "JPEG or PNG at the highest resolution you have — no minimum size required." },
              { step: "2", title: "Select your ratio packs", desc: "Choose 2:3, 4:5, 3:4, and ISO — SnapToSize creates all sizes for each ratio." },
              { step: "3", title: "Download your ZIP", desc: "One ZIP file with every bathroom wall art size, ready to attach to your Etsy listing." },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(45,212,191,0.15)", color: "#2DD4BF", border: "1px solid rgba(45,212,191,0.3)" }}>
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-foreground-70">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <RelatedPages currentSlug="etsy-bathroom-wall-art-sizes" />
        </section>

        {/* Final CTA — angle: never lose a sale to a missing frame size */}
        <FinalCTA
          heading="Never lose a bathroom wall art sale to the wrong frame size"
          stat="Every ratio. Every frame size. One upload."
          description="SnapToSize generates every size your buyer might need — 5×7, 8×10, 11×14, A4, and more — from a single upload. Cover every bathroom, every frame, every buyer."
          appUrl="https://app.snaptosize.com"
        />
      </div>
    </>
  );
}
