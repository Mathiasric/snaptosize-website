import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";
import RelatedPages from "@/components/RelatedPages";
import { Check, ArrowRight, Frame, Image as ImageIcon } from "lucide-react";

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
        alt: "Etsy Bathroom Wall Art Sizes — 5×7, 8×10, 11×14, A4 print guide",
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

const appUrl = "https://app.snaptosize.com?source=seo_etsy-bathroom-wall-art-sizes&kind=niche";

export default function EtsyBathroomWallArtSizesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO — Calm Tile Spa ===== */}
      <section
        className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #eef2ed 0%, #e6ede6 30%, #f0ede6 65%, #e8ebe5 100%)",
        }}
      >
        {/* Soft tile grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(#6b827033 1px, transparent 1px), linear-gradient(90deg, #6b827033 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        {/* Sage blob top-right */}
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle, #a8c2ad, transparent 70%)" }}
        />
        {/* Warm cream blob bottom-left */}
        <div
          className="absolute bottom-[-18%] left-[-6%] w-[420px] h-[420px] rounded-full opacity-[0.14]"
          style={{ background: "radial-gradient(circle, #d8cab3, transparent 70%)" }}
        />

        {/* CSS Bathroom Wall Mockup — portrait frame + mirror */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative" style={{ width: "300px", height: "340px" }}>
            {/* Mirror silhouette — rounded rect */}
            <div
              className="absolute"
              style={{
                width: "110px",
                height: "160px",
                top: "40px",
                left: "0",
                background: "linear-gradient(160deg, #f4f1ea 0%, #e0d9c8 100%)",
                border: "3px solid #c9bfa8",
                borderRadius: "55px",
                boxShadow: "0 14px 36px -18px rgba(107,130,112,0.35)",
              }}
            >
              {/* Mirror highlight */}
              <div
                className="absolute"
                style={{
                  top: "14px",
                  left: "14px",
                  width: "32px",
                  height: "60px",
                  background: "linear-gradient(160deg, rgba(255,255,255,0.6), transparent)",
                  borderRadius: "20px",
                }}
              />
            </div>

            {/* Portrait frame — 8×10 (4:5), main */}
            <div
              className="absolute shadow-[0_18px_40px_-20px_rgba(107,130,112,0.4)]"
              style={{
                width: "128px",
                height: "160px",
                top: "20px",
                left: "140px",
                background: "#fff",
                border: "7px solid #e0d9c8",
                borderRadius: "2px",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#f7f3ea" }}
              >
                <div className="text-center px-3">
                  {/* Botanical stem */}
                  <svg viewBox="0 0 60 100" className="w-10 mx-auto mb-2" fill="none" stroke="#6b8270" strokeWidth="1.5">
                    <path d="M30 95 L30 20" />
                    <path d="M30 70 Q15 60 10 45" />
                    <path d="M30 55 Q45 45 50 30" />
                    <path d="M30 40 Q20 30 18 18" />
                    <ellipse cx="10" cy="45" rx="6" ry="3" fill="#a8c2ad" stroke="none" transform="rotate(-30 10 45)" />
                    <ellipse cx="50" cy="30" rx="6" ry="3" fill="#a8c2ad" stroke="none" transform="rotate(30 50 30)" />
                    <ellipse cx="18" cy="18" rx="5" ry="2.5" fill="#a8c2ad" stroke="none" transform="rotate(-20 18 18)" />
                  </svg>
                  <span
                    className="text-[9px] font-mono tracking-[0.18em] uppercase block"
                    style={{ color: "#6b8270" }}
                  >
                    8×10
                  </span>
                </div>
              </div>
            </div>

            {/* Small square frame — 5×7 */}
            <div
              className="absolute shadow-[0_12px_28px_-16px_rgba(107,130,112,0.35)]"
              style={{
                width: "70px",
                height: "98px",
                top: "210px",
                left: "170px",
                background: "#fff",
                border: "5px solid #d8cab3",
                borderRadius: "2px",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#fdfaf3" }}
              >
                <div className="text-center">
                  <span className="text-base block leading-none" style={{ color: "#8a7d5c" }}>&#x1F33F;</span>
                  <span
                    className="text-[7px] font-mono tracking-[0.18em] uppercase block mt-1"
                    style={{ color: "#8a7d5c" }}
                  >
                    5×7
                  </span>
                </div>
              </div>
            </div>

            {/* Towel rail hint — ground line */}
            <div
              className="absolute"
              style={{
                top: "308px",
                left: "0",
                width: "280px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #c9bfa880 20%, #c9bfa880 80%, transparent)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
          <nav className="text-xs mb-6" style={{ color: "#6b7268" }} aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: "#6b7268" }}>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/etsy-print-sizes" className="hover:opacity-80 transition-opacity" style={{ color: "#6b7268" }}>
                  Etsy Print Sizes
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: "#2d2e2a" }}>Etsy Bathroom Wall Art Sizes</li>
            </ol>
          </nav>

          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "#6b827080" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "#6b8270" }}
              >
                Niche Guide · Bathroom
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5" style={{ color: "#2d2e2a" }}>
                Etsy Bathroom Wall Art Sizes
              </span>
              <span className="block text-xl md:text-2xl lg:text-[1.65rem] font-semibold" style={{ color: "#525751" }}>
                Portrait-first sizing for narrow, unforgiving walls
              </span>
            </h1>

            <p className="text-base mb-6 max-w-lg leading-relaxed" style={{ color: "#5e635b" }}>
              Bathroom walls are small, narrow, and unforgiving. Every print size that sells for bathroom wall art on Etsy &mdash; 5×7, 8×10, 11×14, A4, portrait ratios &mdash; with exact pixel dimensions at 300&nbsp;DPI.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 text-sm px-6 py-2.5">
                  Generate All Bathroom Sizes Free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <p className="text-sm mt-2" style={{ color: "#7a7f76" }}>
                Free &rarr; upload once, get every bathroom size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Portrait-first sizing",
                "All major ratios covered",
                "300 DPI pixel dimensions",
                "International + US frames",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    borderColor: "rgba(107,130,112,0.28)",
                  }}
                >
                  <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#6b8270" }} />
                  <span className="text-xs font-medium" style={{ color: "#525751" }}>
                    {pill}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile-only lifestyle image — stacks below hero text */}
            <div className="lg:hidden mt-8">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 18px 40px -20px rgba(107,130,112,0.4), 0 8px 22px -10px rgba(107,130,112,0.2)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  aspectRatio: "4 / 3",
                }}
              >
                <img
                  src="/assets/visuals/etsy-bathroom-wall-art-sizes-lifestyle.jpg"
                  alt="Calm bathroom wall with a framed botanical art print in portrait orientation"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div
                  className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md"
                  style={{
                    background: "rgba(255,255,255,0.82)",
                    border: "1px solid rgba(107,130,112,0.25)",
                  }}
                >
                  <span
                    className="text-[10px] font-mono tracking-[0.15em] uppercase"
                    style={{ color: "#6b8270" }}
                  >
                    Bathroom · 8×10 portrait
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] pt-16 pb-12 md:pt-20">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-16 md:mb-20">
          <QuickAnswer question="What sizes sell best for bathroom wall art on Etsy?">
            <strong>5×7, 8×10, and 11×14</strong> are the top-selling bathroom wall art sizes in the US. Portrait (vertical) orientation dominates because most bathroom walls are taller than wide. For international buyers, <strong>A4</strong> is essential — it fits standard IKEA frames popular across the UK, EU, and Australia.
          </QuickAnswer>
        </div>

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

        {/* Inline violet CTA — mid-content, bathroom-niche angle */}
        <div className="mb-16">
          <div
            className="rounded-xl p-7 md:p-8 max-w-2xl mx-auto"
            style={{
              background: "rgba(167,139,250,0.10)",
              border: "1px solid rgba(167,139,250,0.30)",
              borderBottom: "2px solid rgba(167,139,250,0.55)",
            }}
          >
            <p className="text-foreground-60 text-sm mb-3">
              Spa-ready prints only convert when the buyer&apos;s exact frame is covered — portrait 2:3, 4:5, and A4 all in one listing.
            </p>
            <p className="text-lg font-medium mb-6 text-foreground">
              Resize bathroom art for every Etsy ratio in one upload — 300 DPI, under 20MB, zero Photoshop.
            </p>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-violet-400 hover:bg-violet-300 transition-colors"
            >
              Cover Every Bathroom Size Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-foreground-60 mt-3">
              No account needed · No credit card required
            </p>
          </div>
        </div>

        {/* Lifestyle mockup — visual break after orientation section */}
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

        {/* CTA 1 — ratio coverage */}
        <div className="mb-16">
          <ContextualCTA
            problem="Most bathroom listings only offer 8×10 — and lose every buyer with a 5×7 shelf or an A4 IKEA frame."
            solution="Upload once. SnapToSize generates 2:3, 4:5, 3:4, and A4 files automatically — all at 300 DPI, no Photoshop."
            appUrl={appUrl}
            buttonText="Try Free — No Account Needed"
          />
        </div>

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
            <Link href="/etsy-quote-wall-art-sizes" className="text-teal-400 hover:underline">quote wall art sizes</Link>,{" "}
            <Link href="/etsy-minimalist-wall-art-sizes" className="text-teal-400 hover:underline">minimalist wall art sizes</Link>, and{" "}
            <Link href="/etsy-kitchen-wall-art-sizes" className="text-teal-400 hover:underline">kitchen wall art sizes</Link> work —
            the same multi-size logic applies across all small-room styles.
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

          <p className="text-sm text-muted-foreground mt-4">
            No pixel calculations needed — SnapToSize generates every size automatically at 300 DPI.{" "}
            <a href={appUrl} target="_blank" rel="noopener noreferrer" className="text-accent-light underline underline-offset-2 hover:text-foreground transition-colors">
              Try it free →
            </a>
          </p>
        </section>

        {/* CTA 2 — before ListingOutputShowcase */}
        <div className="mb-16">
          <ContextualCTA
            problem="Bathroom buyers grab the first listing where the size fits their frame — missing sizes mean lost sales."
            solution="SnapToSize generates every bathroom size from one upload — 5×7, 8×10, 11×14, A4 — ready to attach to your Etsy listing."
            appUrl={appUrl}
            buttonText="Generate All Sizes Free"
          />
        </div>

        {/* ListingOutputShowcase */}
        <section className="mb-16">
          <ListingOutputShowcase
            artwork="floral_vase"
            heading="One botanical print. Every bathroom size."
            subtext="SnapToSize takes your floral illustration and generates 5×7, 8×10, 11×14, A4, and every other ratio your buyer might need — automatically, at print-ready quality."
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
          appUrl={appUrl}
        />
      </div>
    </>
  );
}
