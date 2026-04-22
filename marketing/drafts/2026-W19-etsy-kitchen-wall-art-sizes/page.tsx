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
  title: "Etsy Kitchen Wall Art Sizes — Print Size Guide",
  description:
    "Best kitchen wall art sizes for Etsy: 8x10, 11x14, 16x20, A4. Portrait vs landscape, 3-piece sets, pixel dimensions at 300 DPI, every ratio covered.",
  alternates: { canonical: "https://snaptosize.com/etsy-kitchen-wall-art-sizes" },
  openGraph: {
    title: "Etsy Kitchen Wall Art Sizes — Print Size Guide",
    description:
      "Best kitchen wall art sizes for Etsy: 8x10, 11x14, 16x20, A4. Portrait vs landscape, 3-piece sets, pixel dimensions at 300 DPI, every ratio covered.",
    url: "https://snaptosize.com/etsy-kitchen-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-kitchen-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Kitchen Wall Art Sizes — 8x10, 11x14, 16x20, A4 print guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Kitchen Wall Art Sizes — Print Size Guide",
    description:
      "Best kitchen wall art sizes for Etsy: 8x10, 11x14, 16x20, A4. Portrait vs landscape, 3-piece sets, pixel dimensions at 300 DPI, every ratio covered.",
    images: ["/assets/og/etsy-kitchen-wall-art-sizes.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Etsy Kitchen Wall Art Sizes: The Complete Print Size Guide",
      description:
        "Which print sizes sell best for kitchen wall art on Etsy, portrait vs landscape, 3-piece sets, pixel dimensions at 300 DPI, and how to offer every ratio without manual resizing.",
      url: "https://snaptosize.com/etsy-kitchen-wall-art-sizes",
      datePublished: "2026-04-22",
      dateModified: "2026-04-22",
      author: { "@type": "Organization", name: "SnapToSize" },
      publisher: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
        { "@type": "ListItem", position: 2, name: "Etsy Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
        { "@type": "ListItem", position: 3, name: "Kitchen Wall Art Sizes", item: "https://snaptosize.com/etsy-kitchen-wall-art-sizes" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What sizes sell best for kitchen wall art on Etsy?", acceptedAnswer: { "@type": "Answer", text: "8×10, 11×14, and 5×7 are the top-selling kitchen sizes in the US. For galley kitchens and coffee bars, 8×10 portrait dominates. For above-the-table placement in open-plan kitchens, 16×20 and 11×14 landscape sell well. A4 is essential for international kitchens." } },
        { "@type": "Question", name: "Should kitchen wall art be portrait or landscape?", acceptedAnswer: { "@type": "Answer", text: "Both — kitchen placement varies more than other rooms. Portrait prints suit narrow walls beside the fridge, coffee bars, and galley kitchens. Landscape prints work above dining tables, kitchen islands, and stove backsplashes. Offering both ratios in every listing prevents lost sales." } },
        { "@type": "Question", name: "What size print works above a kitchen table?", acceptedAnswer: { "@type": "Answer", text: "16×20 and 11×14 landscape are the most common sizes above kitchen tables — large enough to anchor the space without overwhelming it. For a three-piece set above a wider table, 8×10 landscape prints work best. Avoid smaller than 8×10 for above-table placement; they look lost." } },
        { "@type": "Question", name: "What pixel dimensions do I need for an 11×14 kitchen print at 300 DPI?", acceptedAnswer: { "@type": "Answer", text: "11×14 at 300 DPI requires a file that is 3,300 × 4,200 pixels. This is a common coffee-bar and above-shelf size — design at least this resolution so it stays crisp when a buyer prints it." } },
        { "@type": "Question", name: "Do kitchen buyers want A4 prints?", acceptedAnswer: { "@type": "Answer", text: "Yes — A4 (210×297mm) is the standard print size across Europe, the UK, and Australia. Every major IKEA RIBBA/KNOPPÄNG frame matches A4. Including A4 alongside your US sizes typically adds 20–30% more international orders for kitchen-printable listings." } },
        { "@type": "Question", name: "What sizes should I offer for a 3-piece kitchen art set?", acceptedAnswer: { "@type": "Answer", text: "Most 3-piece kitchen sets sell in 8×10 or 11×14 — consistent size across all three pieces so buyers can frame them identically. Offer each piece in multiple ratios (4:5 and 2:3) so the buyer picks what fits their frames. Never mix sizes within a single 3-piece listing." } },
        { "@type": "Question", name: "Can I sell square kitchen wall art on Etsy?", acceptedAnswer: { "@type": "Answer", text: "Yes — 12×12 and 8×8 square prints are popular for kitchen coffee bars and shelf displays, especially for minimalist or geometric designs. Offer square alongside standard ratios, not instead of them — most buyers still want portrait 4:5 for framing." } }
      ],
    },
  ],
};

const faqItems = [
  { question: "What sizes sell best for kitchen wall art on Etsy?", answer: "8×10, 11×14, and 5×7 are the top-selling kitchen sizes in the US. For galley kitchens and coffee bars, 8×10 portrait dominates. For above-the-table placement in open-plan kitchens, 16×20 and 11×14 landscape sell well. A4 is essential for international kitchens." },
  { question: "Should kitchen wall art be portrait or landscape?", answer: "Both — kitchen placement varies more than other rooms. Portrait prints suit narrow walls beside the fridge, coffee bars, and galley kitchens. Landscape prints work above dining tables, kitchen islands, and stove backsplashes. Offering both ratios in every listing prevents lost sales." },
  { question: "What size print works above a kitchen table?", answer: "16×20 and 11×14 landscape are the most common sizes above kitchen tables — large enough to anchor the space without overwhelming it. For a three-piece set above a wider table, 8×10 landscape prints work best. Avoid smaller than 8×10 for above-table placement; they look lost." },
  { question: "What pixel dimensions do I need for an 11×14 kitchen print at 300 DPI?", answer: "11×14 at 300 DPI requires a file that is 3,300 × 4,200 pixels. This is a common coffee-bar and above-shelf size — design at least this resolution so it stays crisp when a buyer prints it." },
  { question: "Do kitchen buyers want A4 prints?", answer: "Yes — A4 (210×297mm) is the standard print size across Europe, the UK, and Australia. Every major IKEA RIBBA/KNOPPÄNG frame matches A4. Including A4 alongside your US sizes typically adds 20–30% more international orders for kitchen-printable listings." },
  { question: "What sizes should I offer for a 3-piece kitchen art set?", answer: "Most 3-piece kitchen sets sell in 8×10 or 11×14 — consistent size across all three pieces so buyers can frame them identically. Offer each piece in multiple ratios (4:5 and 2:3) so the buyer picks what fits their frames. Never mix sizes within a single 3-piece listing." },
  { question: "Can I sell square kitchen wall art on Etsy?", answer: "Yes — 12×12 and 8×8 square prints are popular for kitchen coffee bars and shelf displays, especially for minimalist or geometric designs. Offer square alongside standard ratios, not instead of them — most buyers still want portrait 4:5 for framing." },
];

const appUrl = "https://app.snaptosize.com?source=seo_etsy-kitchen-wall-art-sizes&kind=niche";

export default function EtsyKitchenWallArtSizesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO — Warm Kitchen Shelf ===== */}
      <section
        className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #f5ede0 0%, #efe4d0 30%, #ede1c8 65%, #e8d9bc 100%)",
        }}
      >
        {/* Subtle warm grain */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(#a3613233 1px, transparent 1px), linear-gradient(90deg, #a3613233 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
        {/* Terracotta blob top-right */}
        <div
          className="absolute top-[-16%] right-[-10%] w-[560px] h-[560px] rounded-full opacity-[0.22]"
          style={{ background: "radial-gradient(circle, #d89d6c, transparent 70%)" }}
        />
        {/* Sage-cream blob bottom-left */}
        <div
          className="absolute bottom-[-20%] left-[-8%] w-[460px] h-[460px] rounded-full opacity-[0.16]"
          style={{ background: "radial-gradient(circle, #a8b996, transparent 70%)" }}
        />

        {/* CSS Kitchen Shelf Mockup — 3-piece set over a shelf line */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative" style={{ width: "340px", height: "340px" }}>
            {/* 3-piece set — three 8×10 portrait frames */}
            {[
              { left: "0", delay: "herbs", icon: "\u{1F33F}" },
              { left: "110px", delay: "mug", icon: "\u{2615}" },
              { left: "220px", delay: "bread", icon: "\u{1F35E}" },
            ].map((piece, idx) => (
              <div
                key={idx}
                className="absolute shadow-[0_14px_32px_-18px_rgba(163,97,50,0.5)]"
                style={{
                  width: "100px",
                  height: "125px",
                  top: `${20 + idx * 4}px`,
                  left: piece.left,
                  background: "#fffbf2",
                  border: "6px solid #8d6b42",
                  borderRadius: "2px",
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: "#faf4e6" }}
                >
                  <div className="text-center px-2">
                    <span className="text-2xl block leading-none mb-1.5" style={{ color: "#8d6b42" }}>
                      {piece.icon}
                    </span>
                    <span
                      className="text-[8px] font-mono tracking-[0.18em] uppercase block"
                      style={{ color: "#8d6b42" }}
                    >
                      8×10
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Wooden shelf line */}
            <div
              className="absolute"
              style={{
                top: "175px",
                left: "-10px",
                width: "340px",
                height: "6px",
                background: "linear-gradient(180deg, #a87c4f 0%, #7a5432 100%)",
                borderRadius: "2px",
                boxShadow: "0 4px 10px -4px rgba(122,84,50,0.5)",
              }}
            />

            {/* Coffee-mug silhouette on shelf (left) */}
            <div
              className="absolute"
              style={{
                top: "140px",
                left: "10px",
                width: "28px",
                height: "32px",
                background: "linear-gradient(160deg, #d89d6c 0%, #b37849 100%)",
                borderRadius: "2px 2px 10px 10px",
                boxShadow: "0 4px 8px -3px rgba(163,97,50,0.4)",
              }}
            >
              <div
                className="absolute"
                style={{
                  top: "6px",
                  right: "-6px",
                  width: "10px",
                  height: "16px",
                  border: "3px solid #b37849",
                  borderLeft: "none",
                  borderRadius: "0 50% 50% 0",
                }}
              />
            </div>

            {/* Small potted herb on shelf (middle-right) */}
            <div
              className="absolute"
              style={{
                top: "135px",
                left: "270px",
                width: "26px",
                height: "36px",
              }}
            >
              <div
                className="absolute bottom-0"
                style={{
                  width: "26px",
                  height: "18px",
                  background: "linear-gradient(160deg, #b37849 0%, #8d6b42 100%)",
                  borderRadius: "0 0 4px 4px",
                }}
              />
              <svg viewBox="0 0 40 40" className="absolute bottom-[14px] left-[-6px] w-10 h-10" fill="none">
                <path d="M20 32 Q14 22 12 12" stroke="#6e8a52" strokeWidth="1.5" />
                <path d="M20 32 Q26 22 28 10" stroke="#6e8a52" strokeWidth="1.5" />
                <path d="M20 32 L20 18" stroke="#6e8a52" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="4" ry="2" fill="#a8b996" transform="rotate(-25 12 12)" />
                <ellipse cx="28" cy="10" rx="4" ry="2" fill="#a8b996" transform="rotate(25 28 10)" />
                <ellipse cx="20" cy="16" rx="4" ry="2" fill="#a8b996" />
              </svg>
            </div>

            {/* Label — 3-piece set */}
            <div
              className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                bottom: "30px",
                left: "60px",
                background: "rgba(255,251,242,0.85)",
                border: "1px solid rgba(141,107,66,0.3)",
              }}
            >
              <span
                className="text-[9px] font-mono tracking-[0.18em] uppercase"
                style={{ color: "#8d6b42" }}
              >
                3-piece set &middot; 8×10
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
          <nav className="text-xs mb-6" style={{ color: "#7a6948" }} aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: "#7a6948" }}>Home</Link></li>
              <li>/</li>
              <li><Link href="/etsy-print-sizes" className="hover:opacity-80 transition-opacity" style={{ color: "#7a6948" }}>Etsy Print Sizes</Link></li>
              <li>/</li>
              <li style={{ color: "#3a2e1e" }}>Etsy Kitchen Wall Art Sizes</li>
            </ol>
          </nav>

          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "#a8613280" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "#a86132" }}
              >
                Niche Guide · Kitchen
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5" style={{ color: "#3a2e1e" }}>
                Etsy Kitchen Wall Art Sizes
              </span>
              <span className="block text-xl md:text-2xl lg:text-[1.65rem] font-semibold" style={{ color: "#5e4f3a" }}>
                Every ratio for coffee bars, galley walls, and above-table hangs
              </span>
            </h1>

            <p className="text-base mb-6 max-w-lg leading-relaxed" style={{ color: "#635745" }}>
              Kitchen buyers place prints in more ways than any other room &mdash; coffee bars, 3-piece sets above the table, single portraits beside the fridge. Every size that sells for kitchen wall art on Etsy &mdash; 8×10, 11×14, 16×20, A4, square &mdash; with exact pixel dimensions at 300&nbsp;DPI.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 text-sm px-6 py-2.5">
                  Generate All Kitchen Sizes Free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <p className="text-sm mt-2" style={{ color: "#7a6948" }}>
                Free &rarr; upload once, get every kitchen size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Portrait + landscape",
                "3-piece set coverage",
                "300 DPI pixel dimensions",
                "US + international frames",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                  style={{
                    background: "rgba(255,251,242,0.55)",
                    borderColor: "rgba(141,107,66,0.3)",
                  }}
                >
                  <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#a86132" }} />
                  <span className="text-xs font-medium" style={{ color: "#5e4f3a" }}>{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] pt-16 pb-12 md:pt-20">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-16 md:mb-20">
          <QuickAnswer question="What sizes sell best for kitchen wall art on Etsy?">
            <strong>8×10, 11×14, and 5×7</strong> dominate US kitchen printables. For over-the-table placement, <strong>16×20 landscape</strong> anchors the space. For international buyers, <strong>A4</strong> is essential. Because kitchen placement varies so much (coffee bar vs galley wall vs above table), sellers who offer every ratio — not just 4:5 — consistently outsell single-ratio competitors.
          </QuickAnswer>
        </div>

        {/* Section 1: What sizes work best */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            What Sizes Work Best for Kitchen Wall Art on Etsy
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Kitchens are the most unpredictable placement in the house. A buyer could be hanging your print in a
            galley kitchen beside the fridge, on an open shelf next to a coffee machine, or above a six-person
            dining table in an open-plan space. That variety means you need <strong>every major ratio</strong> in a single listing.
          </p>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            The high-converting core set: 5×7, 8×10, 11×14 (portrait), plus 11×14 and 16×20 in landscape for above-table use, and <Link href="/etsy-a4-print-size" className="text-teal-400 hover:underline">A4</Link> for international buyers. Square sizes (8×8, 12×12) are a bonus for minimalist designs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { size: "5×7", ratio: "5:7", notes: "Coffee bars, shelf accents" },
              { size: "8×10", ratio: "4:5", notes: "Most popular kitchen portrait" },
              { size: "11×14", ratio: "Approx 4:5", notes: "Galley wall + 3-piece sets" },
              { size: "16×20", ratio: "4:5 landscape", notes: "Above kitchen table" },
              { size: "A4", ratio: "ISO 216", notes: "#1 international kitchen size" },
              { size: "12×18", ratio: "2:3 landscape", notes: "Wide kitchen islands" },
              { size: "8×12", ratio: "2:3", notes: "Narrow kitchen walls" },
              { size: "12×12", ratio: "Square", notes: "Minimalist coffee bar art" },
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
            Full breakdown in our <Link href="/etsy-print-sizes" className="text-teal-400 hover:underline">Etsy print sizes guide</Link>.
          </p>
        </section>

        {/* Section 2: Portrait vs landscape */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Portrait vs Landscape: Which Orientation Wins in Kitchens
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Unlike bathrooms (portrait-first) or living rooms (landscape-first), kitchens split evenly.
            The orientation that sells depends entirely on where the buyer is hanging it. Offer both or lose half your market.
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
                <span className="font-semibold text-foreground">Portrait — galley + coffee bar</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Beside the fridge in narrow galley kitchens</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Over coffee bars and espresso stations</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Botanical, herb illustration, quote designs</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />8×10 (4:5) and 8×12 (2:3) are the workhorses</li>
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(216,157,108,0.08)",
                border: "1px solid rgba(216,157,108,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="w-5 h-5" style={{ color: "#d89d6c" }} />
                <span className="font-semibold text-foreground">Landscape — above table + island</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#d89d6c" }} />Above dining tables in open-plan kitchens</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#d89d6c" }} />Kitchen island backdrops and stove walls</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#d89d6c" }} />Farmhouse, recipe-card, foodie-quote styles</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#d89d6c" }} />11×14 and 16×20 landscape dominate</li>
              </ul>
            </div>
          </div>
          <p className="text-foreground-70 leading-relaxed">
            For the full ratio breakdown see our <Link href="/etsy-print-ratios" className="text-teal-400 hover:underline">Etsy print ratios guide</Link> and the related <Link href="/2-3-vs-4-5-ratio" className="text-teal-400 hover:underline">2:3 vs 4:5 comparison</Link>.
          </p>
        </section>

        {/* Inline violet CTA */}
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
              Kitchen buyers pick the listing where their exact frame fits — every missing size is a lost sale.
            </p>
            <p className="text-lg font-medium mb-6 text-foreground">
              One upload. 8×10, 11×14, 16×20, A4, square, portrait, landscape &mdash; every ratio a kitchen buyer could want.
            </p>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-violet-400 hover:bg-violet-300 transition-colors"
            >
              Cover Every Kitchen Size Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-foreground-60 mt-3">No account needed &middot; No credit card required</p>
          </div>
        </div>

        {/* Section 3: Size guide by ratio */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Kitchen Print Size Guide by Ratio (2:3, 3:4, 4:5, ISO)
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Kitchens need <em>more ratios</em> than almost any other room, because placement is so varied.
            A listing that only offers 4:5 will lose every buyer with a 12×18 IKEA frame above the table.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Common Sizes</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Best for Kitchens</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ratio: "4:5", sizes: "5×7*, 8×10, 11×14, 16×20", best: "Primary kitchen portrait + landscape" },
                  { ratio: "2:3", sizes: "4×6, 8×12, 12×18, 24×36", best: "Above kitchen island, wide landscape" },
                  { ratio: "3:4", sizes: "6×8, 9×12, 12×16", best: "Farmhouse kitchens, recipe cards" },
                  { ratio: "ISO", sizes: "A5, A4, A3", best: "International IKEA kitchens" },
                  { ratio: "Square", sizes: "8×8, 10×10, 12×12", best: "Coffee bars, minimalist sets" },
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
            *5×7 is technically 5:7 but frames and buyers treat it as a 4:5 equivalent. Include it alongside 8×10.
          </p>
        </section>

        {/* Section 4: Common frame placements */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Common Kitchen Frame Placements
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Kitchen prints hang in predictable spots. Designing for these six placements covers virtually every buyer:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { frame: "Above kitchen table", where: "16×20 or 11×14 landscape, anchor piece", ratio: "4:5 / 2:3" },
              { frame: "Coffee bar", where: "8×10 portrait, often a 2-piece set", ratio: "4:5" },
              { frame: "Above open shelves", where: "5×7 or 8×10 portrait, minimalist", ratio: "4:5" },
              { frame: "Galley wall beside fridge", where: "8×10 or 11×14 portrait", ratio: "4:5" },
              { frame: "Kitchen island backsplash", where: "12×18 landscape, farmhouse style", ratio: "2:3" },
              { frame: "International (IKEA)", where: "A4 or A3, RIBBA frame", ratio: "ISO 216" },
            ].map(({ frame, where, ratio }) => (
              <div
                key={frame}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Frame className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm">{frame}</div>
                  <div className="text-xs text-foreground-50 mb-1 font-mono">{ratio}</div>
                  <div className="text-sm text-foreground-60">{where}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground-70 leading-relaxed">
            See our dedicated guides for{" "}
            <Link href="/etsy-8x10-print-size" className="text-teal-400 hover:underline">8×10</Link>,{" "}
            <Link href="/etsy-11x14-print-size" className="text-teal-400 hover:underline">11×14</Link>, and{" "}
            <Link href="/etsy-16x20-print-size" className="text-teal-400 hover:underline">16×20</Link>{" "}
            for full pixel dimensions.
          </p>
        </section>

        {/* CTA 1 — ratio coverage */}
        <div className="mb-16">
          <ContextualCTA
            problem="Most kitchen listings offer only 8×10 portrait — and lose every buyer with an above-table landscape placement."
            solution="Upload once. SnapToSize generates portrait and landscape, 2:3, 4:5, 3:4, ISO, and square — all at 300 DPI."
            appUrl={appUrl}
            buttonText="Try Free — No Account Needed"
          />
        </div>

        {/* Section 5: Small vs open-plan kitchen */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Small Kitchen vs Open-Plan Kitchen Sizing
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Your listing has to serve both ends of the kitchen-size spectrum. Small-kitchen buyers
            self-select compact sizes; open-plan buyers go larger. Including all sizes in one listing avoids lost sales.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="font-bold text-foreground mb-3 text-lg">Small / Galley Kitchen</h3>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">5×7</strong> — shelf accents, coffee-bar corner</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">8×10</strong> — galley walls, fridge-side feature</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">A4</strong> — compact ISO for small IKEA frames</li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="font-bold text-foreground mb-3 text-lg">Open-Plan Kitchen</h3>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">11×14 / 16×20 landscape</strong> — above-table anchors</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">12×18</strong> — island backsplash wall</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><strong className="text-foreground">A3</strong> — European open-plan feature wall</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Multi-print sets */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Multi-Print Sets: Why Kitchen Buyers Want 2-Piece and 3-Piece Bundles
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Kitchen prints are bought as sets more often than any other room category &mdash; three herb illustrations,
            three coffee quotes, a pair of recipe cards. Buyers expect consistent sizing within a set.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: "Pick one size per set — no mixing", desc: "A 3-piece kitchen set at 8×10 / 8×10 / 8×10 sells; mixing 5×7 + 8×10 + 11×14 does not." },
              { title: "Offer the set in multiple ratios", desc: "Each piece in 4:5 AND 2:3 — the buyer picks the ratio that matches their three frames." },
              { title: "Match dimensions across pieces", desc: "Every print in the set should be designed and exported at identical pixel dimensions, so they frame cleanly together." },
              { title: "Bundle the ZIP by set, not by ratio alone", desc: "A 3-piece 4:5 set gets its own ZIP; the 2:3 set is a separate ZIP. Makes the listing easier to scan." },
            ].map(({ title, desc }) => (
              <li
                key={title}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="font-semibold text-foreground mb-1">{title}</p>
                <p className="text-sm text-foreground-70">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="text-foreground-70 leading-relaxed">
            Also useful:{" "}
            <Link href="/etsy-botanical-print-sizes" className="text-teal-400 hover:underline">botanical print sizes</Link>{" "}
            (herb illustrations), and{" "}
            <Link href="/etsy-typography-wall-art-sizes" className="text-teal-400 hover:underline">typography wall art sizes</Link>{" "}
            (coffee quotes) — both common kitchen categories.
          </p>
        </section>

        {/* ListingOutputShowcase */}
        <section className="mb-16">
          <ListingOutputShowcase
            artwork="wildflower"
            heading="One herb illustration. Every kitchen size."
            subtext="SnapToSize takes a single botanical design and generates 5×7, 8×10, 11×14, 16×20, A4 and every other ratio in a single upload — ready to attach to your Etsy listing."
          />
        </section>

        {/* Section 7: Pixel dimensions at 300 DPI */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Pixel Dimensions for Kitchen Prints at 300 DPI
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Your files need to be at 300 DPI for sharp kitchen prints. Full reference:{" "}
            <Link href="/print-sizes-at-300-dpi" className="text-teal-400 hover:underline">print sizes at 300 DPI chart</Link>.
            Key kitchen sizes:
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
                  { size: "5×7 in", pixels: "1,500 × 2,100 px", ratio: "5:7" },
                  { size: "8×10 in", pixels: "2,400 × 3,000 px", ratio: "4:5" },
                  { size: "8×12 in", pixels: "2,400 × 3,600 px", ratio: "2:3" },
                  { size: "11×14 in", pixels: "3,300 × 4,200 px", ratio: "11:14" },
                  { size: "12×18 in", pixels: "3,600 × 5,400 px", ratio: "2:3" },
                  { size: "16×20 in", pixels: "4,800 × 6,000 px", ratio: "4:5" },
                  { size: "A4 (210×297mm)", pixels: "2,480 × 3,508 px", ratio: "ISO 216" },
                  { size: "12×12 in (square)", pixels: "3,600 × 3,600 px", ratio: "1:1" },
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
        </section>

        {/* CTA 2 */}
        <div className="mb-16">
          <ContextualCTA
            problem="Kitchen listings with only 8×10 miss the above-table landscape buyer, the 3-piece-set buyer, and the international A4 buyer."
            solution="SnapToSize generates every kitchen wall art size from one upload — 5×7 up to 16×20, portrait and landscape, US and ISO."
            appUrl={appUrl}
            buttonText="Generate All Sizes Free"
          />
        </div>

        {/* Section 8: How to offer all sizes */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            How to Offer Every Kitchen Wall Art Size Without Manual Resizing
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Manual resizing for every kitchen size — portrait, landscape, US, ISO, square, 3-piece set pairs —
            can easily reach 30+ exports per design. That&apos;s where most sellers give up and ship an incomplete listing.
          </p>
          <ol className="space-y-4 mb-6">
            {[
              { step: "1", title: "Upload your design", desc: "JPEG or PNG — highest resolution you have. No minimum required." },
              { step: "2", title: "Select every ratio pack", desc: "4:5 (8×10, 16×20), 2:3 (8×12, 12×18), 3:4, ISO (A4, A3), and square." },
              { step: "3", title: "Download the ZIPs", desc: "Five ratio-pack ZIPs, each under Etsy&apos;s 20MB file limit, ready to attach." },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-teal-400/15 text-teal-400 border border-teal-400/30">
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
          <RelatedPages currentSlug="etsy-kitchen-wall-art-sizes" />
        </section>

        {/* Final CTA */}
        <FinalCTA
          heading="Never lose a kitchen wall art sale to the wrong frame size"
          stat="Every ratio. Every kitchen. One upload."
          description="SnapToSize generates every size your kitchen buyer might need — 5×7, 8×10, 11×14, 16×20, A4, square, portrait, and landscape — from a single upload. Cover every kitchen, every frame, every buyer."
          appUrl={appUrl}
        />
      </div>
    </>
  );
}
