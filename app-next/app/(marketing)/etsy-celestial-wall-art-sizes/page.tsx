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
  title: "Celestial Wall Art Sizes for Etsy — Sizing Guide",
  description:
    "Best print sizes for celestial wall art on Etsy. Moon phases, zodiac wheels, constellations — sized for every ratio, frame, and international buyer.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-celestial-wall-art-sizes",
  },
  openGraph: {
    title: "Celestial Wall Art Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for celestial art on Etsy. Moon phases, zodiac wheels, constellation prints — sub-niche breakdowns, gallery wall sets, and EU sizing.",
    url: "https://snaptosize.com/etsy-celestial-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-celestial-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Celestial Wall Art Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celestial Wall Art Sizes for Etsy — Sizing Guide",
    description:
      "Best sizes for celestial art on Etsy. Moon phases, zodiac wheels, constellation prints — sub-niche breakdowns and EU sizing included.",
    images: ["/assets/og/etsy-celestial-wall-art-sizes.png"],
  },
};

const faqItems = [
  {
    question: "What size should moon phase prints be?",
    answer:
      "8×10 and 5×7 are the top sellers for individual moon phase prints. Three-piece gallery sets at matching sizes — three 5×7s or three 8×10s — sell especially well as coordinated wall displays. For large-format statement pieces, 11×14 and 16×20 give moon phase art the room it deserves.",
  },
  {
    question: "What's the best size for a zodiac wheel print?",
    answer:
      "Square formats suit circular zodiac wheel designs best. 8×8, 10×10, and 12×12 are the top-selling square sizes on Etsy and can be exported via SnapToSize's Quick Export. For vertically-composed astrology posters with text and planetary details, rectangular 16×20 and 18×24 give buyers more room to read the design.",
  },
  {
    question: "Should I offer A4 for celestial art?",
    answer:
      "Yes — absolutely. The EU astrology, crystals, and celestial decor audience is large and strongly prefers ISO sizes. A4 (8.27×11.69\") and A3 (11.69×16.54\") at 300 DPI are essential for UK, German, Australian, and Scandinavian buyers. Missing ISO sizes means missing a significant share of your potential market.",
  },
  {
    question: "How do I size constellation prints for Etsy?",
    answer:
      "2:3 portrait formats fit narrow vertical constellation art best — 4×6, 8×12, and 12×18 are all strong sellers. For wide-field star maps that span a horizontal view, 12×16 (3:4) and 18×24 (3:4) work well. Always offer both portrait and landscape orientations in your listing to serve the widest range of buyers.",
  },
  {
    question: "What's a good size for a birth chart print?",
    answer:
      "16×20 and 18×24 give enough detail for a full birth chart with all planetary placements visible. 12×16 works for simplified or more graphic-style birth charts. These are typically gift purchases, so buyers often want a print large enough to frame and display prominently — size up rather than down.",
  },
  {
    question: "How many sizes should I include in a celestial art listing?",
    answer:
      "At minimum: one 2:3 portrait (e.g., 8×12), one 4:5 (e.g., 8×10), and A4 for EU buyers. Top-selling celestial shops offer all five ratio packs — 2:3, 3:4, 4:5, ISO A-series, and Extras — giving buyers up to 70 files to choose from. More sizes eliminate buyer size questions and directly reduce cart abandonment.",
  },
];

export default function EtsyCelestialWallArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Celestial Wall Art Sizes for Etsy — Complete Sizing Guide",
    description:
      "Best print sizes for celestial wall art on Etsy. Moon phases, zodiac wheels, constellation prints — sub-niche breakdowns, gallery wall sets, and EU sizing.",
    url: "https://snaptosize.com/etsy-celestial-wall-art-sizes",
    datePublished: "2026-04-12",
    dateModified: "2026-04-12",
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
        name: "Celestial Wall Art Sizes",
        item: "https://snaptosize.com/etsy-celestial-wall-art-sizes",
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
            "linear-gradient(155deg, #0a0a14 0%, #0d0b1f 25%, #0a0b18 50%, #08091a 75%, #060610 100%)",
        }}
      >
        {/* Starfield CSS overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(167,139,250,0.6) 0%, transparent 45%), radial-gradient(circle at 78% 20%, rgba(45,212,191,0.4) 0%, transparent 40%), radial-gradient(circle at 55% 75%, rgba(251,191,36,0.3) 0%, transparent 35%)",
          }}
        />

        {/* Purple glow — top right */}
        <div
          className="absolute top-[-10%] right-[15%] w-[450px] h-[450px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #A78BFA, transparent 70%)",
          }}
        />
        {/* Gold accent — bottom left */}
        <div
          className="absolute bottom-[-12%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #FCD34D, transparent 70%)",
          }}
        />
        {/* Teal accent — center right */}
        <div
          className="absolute top-[40%] right-[-8%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #2DD4BF, transparent 70%)",
          }}
        />

        {/* CSS star dots */}
        <style>{`
          .celestial-stars::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
              radial-gradient(1px 1px at 25% 8%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 42% 22%, rgba(255,255,255,0.6) 0%, transparent 100%),
              radial-gradient(1px 1px at 58% 10%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 70% 18%, rgba(255,255,255,0.6) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 85% 12%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 92% 28%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 15% 55%, rgba(255,255,255,0.3) 0%, transparent 100%),
              radial-gradient(1px 1px at 35% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 65% 48%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 80% 65%, rgba(255,255,255,0.3) 0%, transparent 100%),
              radial-gradient(1px 1px at 5% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 48% 85%, rgba(255,255,255,0.3) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 90% 78%, rgba(255,255,255,0.5) 0%, transparent 100%);
            pointer-events: none;
          }
        `}</style>
        <div className="celestial-stars absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Celestial Wall Art Sizes</span>
            </nav>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Moon phases, zodiac & constellations",
                "US + EU sizes covered",
                "Up to 70 files per upload",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(167,139,250,0.12)",
                    border: "1px solid rgba(167,139,250,0.25)",
                    color: "rgba(216,180,254,0.9)",
                  }}
                >
                  <Check className="w-3 h-3" />
                  {pill}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Celestial Wall Art Sizes for Etsy
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              Moon phase sets, zodiac wheels, and constellation prints each have specific aspect ratios tied to their shape. This guide covers every size your celestial art buyers expect — across{" "}
              <Link href="/etsy-print-sizes" className="text-purple-300 hover:text-purple-200 underline underline-offset-2">
                all Etsy print formats
              </Link>{" "}
              — so you never lose a sale to a missing size.
            </p>

            <a href="https://app.snaptosize.com/app/quick-export?source=seo_etsy-celestial-wall-art-sizes&kind=guide">
              <Button className="text-sm px-6 py-2.5">
                Resize celestial art free →
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="py-12 md:py-16 w-full max-w-[1200px] mx-auto px-4 md:px-8">
        {/* ===== QUICK ANSWER ===== */}
        <QuickAnswer question="What sizes should I offer for celestial wall art on Etsy?">
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Moon phases:</strong> 5×7 and 8×10 for individual prints; matching sets of three in those sizes for gallery walls</span></li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Zodiac wheels:</strong> 8×8, 10×10 for circular crops; 16×20 and 18×24 for poster-style astrology art</span></li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" /><span><strong>Constellations &amp; star maps:</strong> 8×12, 12×18 (2:3 portrait); A4 and A3 for EU buyers</span></li>
          </ul>
        </QuickAnswer>

        {/* ===== LISTING SHOWCASE ===== */}
        <div className="mt-10 mb-14">
          <ListingOutputShowcase
            artwork="geometric"
            heading="Your celestial art — every ratio ready to list."
            subtext="SnapToSize generates all five ratio-correct packs from your original upload. Moon phase, zodiac, constellation — one upload covers every buyer."
          />
        </div>

        {/* ===== SECTION 2: Why celestial art has unique sizing demands ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why celestial art has unique sizing demands
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most Etsy niches rely on a handful of standard portrait sizes. Celestial art is different. Moon phase sets require matched sizes that display as a cohesive row. Zodiac wheels are circular — they sell best in square crops that don't crop the edges of the design. Constellation maps are narrow vertical prints that suit 2:3 portrait ratios above all others.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Understanding{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              why print ratios matter
            </Link>{" "}
            is especially important in this niche. A zodiac poster sized at 4:5 crops the circular wheel; a moon phase print in 3:4 adds awkward negative space. Getting the ratio right is part of the product quality — not an afterthought.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The good news: once you know which ratio families apply to each sub-style, sizing becomes systematic. The sections below break down each celestial sub-niche with the specific sizes that sell.
          </p>
        </section>

        {/* ===== SECTION 3: Moon phase wall art sizes ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Moon phase wall art sizes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Moon phase art is the top-selling sub-niche in celestial wall décor on Etsy. Individual moon prints and multi-piece gallery sets have different sizing requirements.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Format</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Top sizes</th>
                  <th className="text-left py-3 font-semibold text-foreground">Ratio pack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">Individual moon print</td>
                  <td className="py-3 pr-6 text-muted-foreground">
                    <Link href="/etsy-8x10-print-size" className="hover:underline">8×10</Link>,{" "}
                    <Link href="/etsy-5x7-print-size" className="hover:underline">5×7</Link>, 11×14
                  </td>
                  <td className="py-3 text-muted-foreground">4:5 + Extras</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">3-piece phase set</td>
                  <td className="py-3 pr-6 text-muted-foreground">Three 5×7, three 8×10, or three 8×12</td>
                  <td className="py-3 text-muted-foreground">Extras + 2:3</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">Statement moon print</td>
                  <td className="py-3 pr-6 text-muted-foreground">16×20, 20×25, 24×30</td>
                  <td className="py-3 text-muted-foreground">4:5</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">EU moon phase</td>
                  <td className="py-3 pr-6 text-muted-foreground">A4, A3</td>
                  <td className="py-3 text-muted-foreground">ISO A-series</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Three-piece moon sets are the most gifted celestial format on Etsy. Buyers expect all three prints to match exactly — so your listing must include matched sizes that display as a cohesive row. Offering 5×7 and 8×10 matched sets covers the majority of US buyers, while A4 triplets serve EU gift buyers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For large-format moon phase art, the 4:5 pack gives you 16×20, 20×25, and 24×30 from one upload. These sell well as above-bed statement pieces in master bedrooms and nurseries.
          </p>
        </section>

        {/* ===== SECTION 4: Zodiac and astrology art sizes ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Zodiac and astrology art sizes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Zodiac art splits into two distinct format groups: circular wheel designs that need square crops, and vertically-composed astrology posters that use standard portrait ratios.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Zodiac wheel (circular)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "8×8 — entry-level square, most popular",
                  "10×10 — mid-size desk or shelf display",
                  "12×12 — wall-hanging statement piece",
                  "Export all three via Quick Export in SnapToSize",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Astrology posters (portrait)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "16×20 — most popular for birth chart detail",
                  "18×24 — large-format astrology poster",
                  "24×36 — oversized statement piece",
                  "All three in the 4:5 and 3:4 packs",
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
            Birth chart prints are almost always gifts — a personalized astrology chart for a birthday or anniversary. Buyers shopping for gifts tend to size up, so 16×20 and 18×24 are the strongest sellers in this format. A simplified birth chart at 12×16 also works well for buyers who want something more graphically minimal.
          </p>
        </section>

        {/* ===== CTA 1: Card accent — Coverage angle (after Section 4) ===== */}
        <Card accent className="p-6 mb-14">
          <p className="font-semibold text-foreground mb-2">Selling zodiac art?</p>
          <p className="text-sm text-muted-foreground mb-4">
            One upload gives you every size — square wheel crops, portrait poster formats, and international ISO sizes — all auto-exported at 300 DPI.
          </p>
          <a href="https://app.snaptosize.com/app/quick-export?source=seo_etsy-celestial-wall-art-sizes&kind=guide">
            <Button className="text-sm px-5 py-2">
              Try SnapToSize free →
            </Button>
          </a>
        </Card>

        {/* ===== SECTION 5: Constellation and star map sizes ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Constellation and star map sizes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Constellation art and custom star maps are narrow vertical prints by nature. The 2:3 ratio is the dominant format — it matches the elongated vertical compositions that most constellation illustrations use. For custom star maps (popular as anniversary gifts), buyers also want large-format options.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Format</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Best sizes</th>
                  <th className="text-left py-3 font-semibold text-foreground">Pixels @ 300 DPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-print-ratios" className="hover:underline text-accent-light">2:3 portrait</Link> constellation
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">4×6, 8×12, 12×18, 16×24</td>
                  <td className="py-3 text-muted-foreground">1200×1800, 2400×3600, 3600×5400</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">Star map (wide field)</td>
                  <td className="py-3 pr-6 text-muted-foreground">12×16, 15×20, 18×24</td>
                  <td className="py-3 text-muted-foreground">3600×4800, 4500×6000, 5400×7200</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">Minimalist line constellation</td>
                  <td className="py-3 pr-6 text-muted-foreground">8×10, 11×14, 16×20</td>
                  <td className="py-3 text-muted-foreground">2400×3000, 3300×4200, 4800×6000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Minimalist constellation line art — simple dot-and-line star patterns — crosses over with{" "}
            <Link href="/etsy-minimalist-wall-art-sizes" className="text-accent-light hover:underline">
              minimalist wall art sizing
            </Link>
            . These designs sell well in 8×10 and 11×14 because the sparse style works at smaller sizes without losing legibility. For dense, detailed star charts, go larger.
          </p>
        </section>

        {/* ===== SECTION 6: Celestial boho and cosmic art sizes ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Celestial boho and cosmic art sizes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Celestial-boho is the overlap zone where moon symbols meet pampas grass, sun mandalas sit beside dried botanicals, and cosmic imagery softens into earthy tones. This sub-style follows{" "}
            <Link href="/etsy-boho-wall-art-sizes" className="text-accent-light hover:underline">
              boho wall art sizing patterns
            </Link>{" "}
            — standard 2:3 and 4:5 portrait packs dominate, with some horizontal formats for wide gallery wall arrangements.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Portrait celestial-boho</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "8×10, 16×20, 24×30 — 4:5 pack",
                  "8×12, 12×18, 20×30 — 2:3 pack",
                  "A4, A3 — ISO pack for EU buyers",
                  "5×7, 11×14 — Extras pack",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Horizontal cosmic prints</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "10×8, 16×12 — 4:5 landscape",
                  "12×9, 18×12 — 3:4 landscape",
                  "Wide-format for above-sofa placement",
                  "Watercolor celestial works well horizontal",
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
            Moon and celestial{" "}
            <Link href="/etsy-watercolor-print-sizes" className="text-accent-light hover:underline">
              watercolor prints
            </Link>{" "}
            sit at the intersection of celestial-boho — soft washes of indigo, violet, and gold paint cosmic scenes that appeal to buyers decorating nurseries, meditation spaces, and boho living rooms. These prints sell well in the same 2:3 and 4:5 portrait formats as other celestial art.
          </p>
        </section>

        {/* ===== SECTION 7: Gallery wall sets for celestial art ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Gallery wall sets for celestial art
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Celestial art is one of the strongest gallery wall niches on Etsy. Moon phase triptychs, four-seasons astrology sets, and 12-sign zodiac grids are consistent top sellers. Building matched sets requires sizes that nest together cleanly.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Set type</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Recommended sizes</th>
                  <th className="text-left py-3 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">3-piece moon set</td>
                  <td className="py-3 pr-6 text-muted-foreground">Three 5×7 or three 8×10</td>
                  <td className="py-3 text-muted-foreground">Most gifted celestial format</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">4-seasons zodiac</td>
                  <td className="py-3 pr-6 text-muted-foreground">Four 8×10 or four 8×12</td>
                  <td className="py-3 text-muted-foreground">Grid arrangement, equal sizing</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">12-sign zodiac grid</td>
                  <td className="py-3 pr-6 text-muted-foreground">Twelve 5×5 or twelve 5×7</td>
                  <td className="py-3 text-muted-foreground">Square or portrait per design</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">Constellation series</td>
                  <td className="py-3 pr-6 text-muted-foreground">4×6 or 5×7 matched set</td>
                  <td className="py-3 text-muted-foreground">Horizontal row display</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            For detailed advice on planning matched sets and nested size arrangements, see the complete guide to{" "}
            <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">
              Etsy gallery wall print sizes
            </Link>
            . The key principle: every print in a set must be available at the same size in your listing — buyers build their own groupings, and a missing size breaks the set.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Learn more about{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to include in an Etsy printable listing
            </Link>{" "}
            — including why shops with 15+ sizes convert better than shops with 3–5.
          </p>
        </section>

        {/* ===== CTA 3: ContextualCTA — Gallery set scale angle (after Section 7) ===== */}
        <div className="mb-14">
          <ContextualCTA
            problem="Selling a 12-sign zodiac series? That's 12 uploads × up to 70 files each."
            solution="SnapToSize keeps it to 12 uploads — every size for every sign is automatic."
            appUrl="https://app.snaptosize.com/app/quick-export?source=seo_etsy-celestial-wall-art-sizes&kind=guide"
            buttonText="Batch resize your zodiac series →"
          />
        </div>

        {/* ===== SECTION 8: International sizes for celestial art ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            International sizes for celestial art
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            The EU astrology, crystals, and celestial decor audience is large — and it expects ISO sizes. UK, German, Dutch, Australian, and Scandinavian buyers typically own A4 frames as standard. Missing ISO sizes is a significant conversion loss in this niche.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">ISO size</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Inches</th>
                  <th className="text-left py-3 font-semibold text-foreground">Pixels @ 300 DPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">A5</td>
                  <td className="py-3 pr-6 text-muted-foreground">5.83×8.27"</td>
                  <td className="py-3 text-muted-foreground">1748×2480</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-a4-print-size" className="hover:underline text-accent-light">A4</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">8.27×11.69"</td>
                  <td className="py-3 text-muted-foreground">2480×3508</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">
                    <Link href="/etsy-a3-print-size" className="hover:underline text-accent-light">A3</Link>
                  </td>
                  <td className="py-3 pr-6 text-muted-foreground">11.69×16.54"</td>
                  <td className="py-3 text-muted-foreground">3508×4961</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-foreground font-medium">A2</td>
                  <td className="py-3 pr-6 text-muted-foreground">16.54×23.39"</td>
                  <td className="py-3 text-muted-foreground">4961×7016</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="p-5 bg-accent/10 border-accent/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Don't forget ISO sizes for celestial art</p>
                <p className="text-sm text-muted-foreground">
                  The celestial niche has unusually high EU demand — astrology, crystals, and mystical decor are popular across the UK and Germany. Listings without A4 lose these buyers to competitors who include it. SnapToSize's ISO pack generates A5, A4, A3, A2, and A1 from your original file automatically.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* ===== SECTION 9: How SnapToSize handles all celestial formats ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How SnapToSize handles all celestial formats from one upload
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Celestial sellers face a sizing challenge that other niches don't: multiple sub-styles within a single shop, each with different ratio requirements. Moon phases need 4:5 and Extras. Zodiac wheels need square crops. Constellations need 2:3. Astrology posters need 3:4. Managing this manually across a full catalog is hours of work per artwork.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">What SnapToSize generates</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "2:3 Pack — 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30",
                  "3:4 Pack — 6×8, 9×12, 12×16, 15×20, 18×24",
                  "4:5 Pack — 8×10, 12×15, 16×20, 20×25, 24×30",
                  "ISO Pack — A5, A4, A3, A2, A1",
                  "Extras Pack — 5×7, 8.5×11, 11×14, 11×17, 13×19, 16×16",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Why it matters for celestial sellers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "All files output at 300 DPI — print-ready, no rework",
                  "Up to 70 files per upload across all five packs",
                  "Stretch-only resizing — no cropping, no distortion",
                  "Auto-organized ZIPs by ratio pack for clean delivery",
                  "Under 20MB per ZIP — within Etsy's file size limit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            If you're building a full celestial shop with moon phases, zodiac signs, and constellations, see{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to include in your Etsy printable listings
            </Link>{" "}
            for a framework on which packs to include per sub-style.
          </p>
        </section>

        {/* ===== CTA 2: FinalCTA — Effort elimination angle (before FAQ) ===== */}
        <div className="mb-14">
          <FinalCTA
            heading="Stop building size lists manually."
            stat="Up to 70 files. One upload."
            description="Upload your celestial art once — SnapToSize delivers every ratio your buyers need. Moon phases, zodiac wheels, constellations — all covered."
            appUrl="https://app.snaptosize.com/app/quick-export?source=seo_etsy-celestial-wall-art-sizes&kind=guide"
            buttonText="Resize celestial art free →"
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
        <RelatedPages currentSlug="etsy-celestial-wall-art-sizes" />
      </div>
    </>
  );
}
