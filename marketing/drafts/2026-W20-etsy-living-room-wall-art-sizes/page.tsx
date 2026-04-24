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
  title: "Etsy Living Room Wall Art Sizes — Print Size Guide",
  description:
    "Best living room wall art sizes for Etsy: above sofa, gallery wall, fireplace. Landscape vs portrait, 3-piece sets, pixel dimensions at 300 DPI, all ratios.",
  alternates: { canonical: "https://snaptosize.com/etsy-living-room-wall-art-sizes" },
  openGraph: {
    title: "Etsy Living Room Wall Art Sizes — Print Size Guide",
    description:
      "Best living room wall art sizes for Etsy: above sofa, gallery wall, fireplace. Landscape vs portrait, 3-piece sets, pixel dimensions at 300 DPI, all ratios.",
    url: "https://snaptosize.com/etsy-living-room-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-living-room-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Living Room Wall Art Sizes — above sofa, gallery wall, fireplace print guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Living Room Wall Art Sizes — Print Size Guide",
    description:
      "Best living room wall art sizes for Etsy: above sofa, gallery wall, fireplace. Landscape vs portrait, 3-piece sets, pixel dimensions at 300 DPI, all ratios.",
    images: ["/assets/og/etsy-living-room-wall-art-sizes.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Etsy Living Room Wall Art Sizes: The Complete Print Size Guide",
      description:
        "Which print sizes sell best for living room wall art on Etsy, landscape vs portrait orientation by placement, multi-piece sets, pixel dimensions at 300 DPI, and how to offer every ratio without manual resizing.",
      url: "https://snaptosize.com/etsy-living-room-wall-art-sizes",
      datePublished: "2026-04-24",
      dateModified: "2026-04-24",
      author: { "@type": "Organization", name: "SnapToSize" },
      publisher: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
        { "@type": "ListItem", position: 2, name: "Etsy Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
        { "@type": "ListItem", position: 3, name: "Living Room Wall Art Sizes", item: "https://snaptosize.com/etsy-living-room-wall-art-sizes" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What size wall art above a sofa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The general rule is 60–70% of the sofa width. A standard 84-inch sofa calls for artwork 50–58 inches wide — meaning 18×24, 24×30, or 24×36 landscape prints. A single large landscape piece or a set of two 12×18 prints side by side both work. Portrait prints above a sofa look undersized unless the sofa is very narrow.",
          },
        },
        {
          "@type": "Question",
          name: "What size print for a living room feature wall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a feature wall (single dominant piece), 24×36 or 24×30 landscape are the most popular. For tall accent walls in spaces with high ceilings, a large portrait print — 18×24 or 20×30 — creates a dramatic vertical statement. The print should occupy at least 60% of the wall width to anchor the space.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good size for a 3-piece living room set?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For 3-piece sets above a sofa or above a fireplace, 12×18 landscape (2:3 ratio) across all three pieces is the most popular configuration — it creates a wide panoramic spread. Portrait 3-piece sets in 8×10 or 11×14 work well for gallery walls. All three pieces must be the same size for consistent framing.",
          },
        },
        {
          "@type": "Question",
          name: "Should living room wall art be horizontal or vertical?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on placement. Above the sofa or fireplace: landscape (horizontal) dominates because the furniture is wide. Gallery walls: mix of portrait and landscape, but portrait prints are the backbone. Entryways and accent walls with tall ceilings: portrait works best. Sellers who offer both orientations cover every buyer scenario.",
          },
        },
        {
          "@type": "Question",
          name: "What pixel size for 24×36 at 300 DPI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "24×36 inches at 300 DPI is 7,200 × 10,800 pixels. This is a 2:3 ratio — one of the most common for above-sofa landscape prints. Make sure your source file is at least this resolution to keep prints sharp at this large size.",
          },
        },
        {
          "@type": "Question",
          name: "Can I sell both landscape and portrait versions on Etsy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — and you should. Etsy allows multiple files in one digital download listing. Include both a landscape ZIP pack and a portrait ZIP pack in the same listing. Buyers can download whichever fits their space. This single change can significantly increase your listing's appeal across different placement scenarios.",
          },
        },
        {
          "@type": "Question",
          name: "What sizes do buyers expect in a living room printable listing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Competitive living room listings include: 16×20 and 24×30 landscape (above sofa), 18×24 and 24×36 landscape (above fireplace / feature wall), 8×10 and 11×14 portrait (gallery wall), A4 (international buyers), and optionally 5×7 for smaller gallery wall accents. Offering all these in one listing with portrait and landscape packs ensures you match every buyer's frame.",
          },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    question: "What size wall art above a sofa?",
    answer:
      "The general rule is 60–70% of the sofa width. A standard 84-inch sofa calls for artwork 50–58 inches wide — meaning 18×24, 24×30, or 24×36 landscape prints. A single large landscape piece or a set of two 12×18 prints side by side both work. Portrait prints above a sofa look undersized unless the sofa is very narrow.",
  },
  {
    question: "What size print for a living room feature wall?",
    answer:
      "For a feature wall (single dominant piece), 24×36 or 24×30 landscape are the most popular. For tall accent walls in spaces with high ceilings, a large portrait print — 18×24 or 20×30 — creates a dramatic vertical statement. The print should occupy at least 60% of the wall width to anchor the space.",
  },
  {
    question: "What is a good size for a 3-piece living room set?",
    answer:
      "For 3-piece sets above a sofa or above a fireplace, 12×18 landscape (2:3 ratio) across all three pieces is the most popular configuration — it creates a wide panoramic spread. Portrait 3-piece sets in 8×10 or 11×14 work well for gallery walls. All three pieces must be the same size for consistent framing.",
  },
  {
    question: "Should living room wall art be horizontal or vertical?",
    answer:
      "It depends on placement. Above the sofa or fireplace: landscape (horizontal) dominates because the furniture is wide. Gallery walls: mix of portrait and landscape, but portrait prints are the backbone. Entryways and accent walls with tall ceilings: portrait works best. Sellers who offer both orientations cover every buyer scenario.",
  },
  {
    question: "What pixel size for 24×36 at 300 DPI?",
    answer:
      "24×36 inches at 300 DPI is 7,200 × 10,800 pixels. This is a 2:3 ratio — one of the most common for above-sofa landscape prints. Make sure your source file is at least this resolution to keep prints sharp at this large size.",
  },
  {
    question: "Can I sell both landscape and portrait versions on Etsy?",
    answer:
      "Yes — and you should. Etsy allows multiple files in one digital download listing. Include both a landscape ZIP pack and a portrait ZIP pack in the same listing. Buyers can download whichever fits their space. This single change can significantly increase your listing's appeal across different placement scenarios.",
  },
  {
    question: "What sizes do buyers expect in a living room printable listing?",
    answer:
      "Competitive living room listings include: 16×20 and 24×30 landscape (above sofa), 18×24 and 24×36 landscape (above fireplace / feature wall), 8×10 and 11×14 portrait (gallery wall), A4 (international buyers), and optionally 5×7 for smaller gallery wall accents. Offering all these in one listing with portrait and landscape packs ensures you match every buyer's frame.",
  },
];

const appUrl =
  "https://app.snaptosize.com?source=seo_etsy-living-room-wall-art-sizes&kind=niche";

export default function EtsyLivingRoomWallArtSizesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO — Editorial / Architectural ===== */}
      <section
        className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #1e2433 0%, #242a3a 35%, #1c2030 70%, #171c2b 100%)",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,220,160,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,220,160,0.4) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Amber glow top-right */}
        <div
          className="absolute top-[-20%] right-[-12%] w-[600px] h-[600px] rounded-full opacity-[0.14]"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
        />
        {/* Slate-blue glow bottom-left */}
        <div
          className="absolute bottom-[-24%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #6b7fa3, transparent 70%)" }}
        />

        {/* CSS Living Room Frame Mockup */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative" style={{ width: "380px", height: "340px" }}>

            {/* Large landscape frame — above sofa */}
            <div
              className="absolute"
              style={{
                top: "0px",
                left: "0px",
                width: "260px",
                height: "160px",
                border: "5px solid #c9a96e",
                borderRadius: "2px",
                background: "rgba(255,220,160,0.04)",
                boxShadow: "0 0 32px -8px rgba(245,158,11,0.3), inset 0 0 40px rgba(255,220,160,0.03)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[9px] font-mono tracking-[0.2em] uppercase"
                  style={{ color: "#c9a96e", opacity: 0.85 }}
                >
                  24×36 landscape
                </span>
              </div>
              {/* Placement label */}
              <div
                className="absolute -bottom-6 left-0 right-0 flex justify-center"
              >
                <span
                  className="text-[8px] font-mono tracking-[0.15em] uppercase"
                  style={{ color: "#c9a96e", opacity: 0.6 }}
                >
                  above sofa
                </span>
              </div>
            </div>

            {/* Sofa silhouette suggestion */}
            <div
              className="absolute"
              style={{
                top: "176px",
                left: "0px",
                width: "260px",
                height: "28px",
                background: "linear-gradient(180deg, #2d3548 0%, #232938 100%)",
                borderRadius: "4px 4px 0 0",
                border: "1px solid rgba(255,220,160,0.12)",
              }}
            />
            <div
              className="absolute"
              style={{
                top: "196px",
                left: "0px",
                width: "260px",
                height: "12px",
                background: "linear-gradient(180deg, #1e2433 0%, #171c2b 100%)",
                borderRadius: "0 0 2px 2px",
                border: "1px solid rgba(255,220,160,0.06)",
                borderTop: "none",
              }}
            />

            {/* Gallery wall — portrait frames stacked right */}
            {[
              { top: "0px", height: "100px", label: "11×14" },
              { top: "110px", height: "80px", label: "8×10" },
              { top: "200px", height: "60px", label: "5×7" },
            ].map(({ top, height, label }, idx) => (
              <div
                key={idx}
                className="absolute"
                style={{
                  top,
                  right: "0px",
                  width: "88px",
                  height,
                  border: "3px solid rgba(201,169,110,0.55)",
                  borderRadius: "1px",
                  background: "rgba(255,220,160,0.02)",
                  boxShadow: "0 0 12px -4px rgba(245,158,11,0.15)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[7px] font-mono tracking-[0.15em] uppercase"
                    style={{ color: "#c9a96e", opacity: 0.7 }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}

            {/* Gallery wall label */}
            <div
              className="absolute"
              style={{ top: "270px", right: "0px" }}
            >
              <span
                className="text-[8px] font-mono tracking-[0.15em] uppercase"
                style={{ color: "#c9a96e", opacity: 0.5 }}
              >
                gallery wall
              </span>
            </div>

            {/* Badge */}
            <div
              className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                bottom: "0px",
                left: "30px",
                background: "rgba(201,169,110,0.12)",
                border: "1px solid rgba(201,169,110,0.3)",
              }}
            >
              <span
                className="text-[9px] font-mono tracking-[0.18em] uppercase"
                style={{ color: "#c9a96e" }}
              >
                landscape + gallery wall
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
          <nav className="text-xs mb-6" style={{ color: "#8a95b0" }} aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: "#8a95b0" }}>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/etsy-print-sizes" className="hover:opacity-80 transition-opacity" style={{ color: "#8a95b0" }}>
                  Etsy Print Sizes
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: "#e2e8f0" }}>Etsy Living Room Wall Art Sizes</li>
            </ol>
          </nav>

          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "rgba(245,158,11,0.5)" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "#f59e0b" }}
              >
                Niche Guide · Living Room
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                Etsy Living Room Wall Art Sizes
              </span>
              <span
                className="block text-xl md:text-2xl lg:text-[1.65rem] font-semibold"
                style={{ color: "#94a3b8" }}
              >
                Above sofa, gallery wall, fireplace — every placement covered
              </span>
            </h1>

            <p className="text-base mb-6 max-w-lg leading-relaxed" style={{ color: "#8a95b0" }}>
              Living rooms have more placement variety than any other room &mdash; above the sofa,
              gallery wall, above the fireplace, entryway. Each placement demands a different size and
              orientation. Every size that sells for living room wall art on Etsy &mdash; 24×36,
              18×24, 16×20, 11×14, 8×10 &mdash; with landscape vs portrait rules and exact pixel
              dimensions at 300&nbsp;DPI.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 text-sm px-6 py-2.5">
                  Generate All Living Room Sizes Free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <p className="text-sm mt-2" style={{ color: "#8a95b0" }}>
                Free: 5 Quick Exports · Pro: $11.99/mo for unlimited · no card required
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Landscape + portrait",
                "Above-sofa sizing rules",
                "Gallery wall coverage",
                "300 DPI pixel dimensions",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                  style={{
                    background: "rgba(255,220,160,0.06)",
                    borderColor: "rgba(201,169,110,0.25)",
                  }}
                >
                  <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#f59e0b" }} />
                  <span className="text-xs font-medium" style={{ color: "#cbd5e1" }}>
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] pt-16 pb-12 md:pt-20">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-16 md:mb-20">
          <QuickAnswer question="What sizes work best for living room wall art on Etsy?">
            Living rooms need <strong>both landscape and portrait</strong> &mdash; and large ones.
            Above the sofa: <strong>18×24, 24×30, or 24×36 landscape</strong> (60–70% of sofa width).
            Gallery walls: <strong>8×10 and 11×14 portrait</strong> as the backbone. Above the fireplace:{" "}
            <strong>24×36 or 18×24 landscape</strong>. Entryways: <strong>18×24 portrait</strong>.
            Sellers who cover only portrait 8×10 lose every above-sofa and fireplace buyer — the
            highest-value living room placements. See also:{" "}
            <Link href="/etsy-gallery-wall-print-sizes" className="text-teal-400 hover:underline">
              gallery wall print sizes
            </Link>{" "}
            and{" "}
            <Link href="/etsy-landscape-print-sizes" className="text-teal-400 hover:underline">
              landscape print sizes
            </Link>.
          </QuickAnswer>
        </div>

        {/* ===== LIFESTYLE IMAGE ===== */}
        <div className="mb-16 md:mb-20">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/visuals/etsy-living-room-wall-art-sizes-lifestyle.jpg"
              alt="Modern Scandinavian living room with a large landscape artwork above a linen sofa and a 5-frame gallery wall arrangement on the adjacent wall — example of living room wall art placement"
              width={1200}
              height={900}
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="px-4 py-3 text-xs text-foreground-60 italic border-t border-white/10 bg-slate-900/60">
              Example living room placement: landscape print above sofa + gallery wall arrangement
            </figcaption>
          </div>
        </div>

        {/* Section 1: Placements and sizes */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Living Room Placements and What Size Each Requires
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            No other room in the house has as many distinct wall art placements as a living room. Each
            placement has a different size expectation — and a buyer shopping for above their sofa is
            searching for a completely different product than one building a gallery wall. Your listing
            needs to serve all of them.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
            {[
              {
                placement: "Above the sofa",
                rule: "60–70% of sofa width",
                sizes: "18×24, 24×30, 24×36 landscape",
                ratio: "2:3 or 3:4 landscape",
                notes:
                  "Most common living room placement. Standard 84\" sofa → 50–58\" wide art. Always landscape orientation.",
              },
              {
                placement: "Gallery wall",
                rule: "Mixed sizes, consistent ratios",
                sizes: "5×7, 8×10, 11×14 portrait",
                ratio: "4:5 portrait backbone",
                notes:
                  "Portrait prints are the gallery wall anchor. Mix sizes within a 4:5 ratio family for easy framing.",
              },
              {
                placement: "Above the fireplace",
                rule: "Match mantel width (36–48\")",
                sizes: "24×36, 18×24, 16×20 landscape",
                ratio: "2:3 or 4:5 landscape",
                notes:
                  "Fireplace mantels range 36–60\". Landscape art sits naturally above. Avoid portrait — too tall.",
              },
              {
                placement: "Entryway / hallway",
                rule: "Tall narrow wall",
                sizes: "12×18, 18×24 portrait",
                ratio: "2:3 portrait",
                notes:
                  "Entryways have tall, narrow walls — portrait excels here. Single dramatic statement piece.",
              },
              {
                placement: "Feature / accent wall",
                rule: "60%+ of wall width",
                sizes: "24×36, 20×30 landscape or portrait",
                ratio: "2:3",
                notes:
                  "Single oversized anchor piece. Both landscape and portrait work depending on wall proportions.",
              },
              {
                placement: "Above console / sideboard",
                rule: "Match furniture width",
                sizes: "16×20, 18×24 landscape",
                ratio: "4:5 or 3:4 landscape",
                notes:
                  "Console tables are typically 48–60\" wide. Landscape art framed above completes the vignette.",
              },
            ].map(({ placement, rule, sizes, ratio, notes }) => (
              <div
                key={placement}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-start gap-2 mb-2">
                  <Frame className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div className="font-semibold text-foreground text-sm">{placement}</div>
                </div>
                <div className="text-xs text-foreground-50 font-mono mb-1">{ratio}</div>
                <div className="text-sm text-teal-400 font-medium mb-1">{sizes}</div>
                <div className="text-xs text-foreground-50 italic mb-2">{rule}</div>
                <div className="text-sm text-foreground-60">{notes}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground-50">
            Full ratio reference:{" "}
            <Link href="/etsy-print-ratios" className="text-teal-400 hover:underline">
              Etsy print ratios guide
            </Link>{" "}
            and{" "}
            <Link href="/etsy-print-sizes" className="text-teal-400 hover:underline">
              complete print sizes guide
            </Link>.
          </p>
        </section>

        {/* Section 2: Landscape vs portrait */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Landscape vs Portrait: Which Dominates in Living Rooms
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Unlike bathrooms (portrait-first) or kitchens (mixed), living rooms tilt toward{" "}
            <strong className="text-foreground">landscape in high-value placements</strong> and portrait
            for gallery walls. The above-sofa buyer — often shopping for the most prominent piece in
            their home — almost always needs landscape. The gallery wall builder needs portrait.
            Offering only one orientation means missing half the living room market.
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
                <ImageIcon className="w-5 h-5 text-teal-400" />
                <span className="font-semibold text-foreground">Landscape — high-value placements</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  Above the sofa (most common living room buy)
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  Above the fireplace mantel
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  Above a console or sideboard
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  18×24, 24×30, 24×36 — the primary living room landscape sizes
                </li>
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(167,139,250,0.06)",
                border: "1px solid rgba(167,139,250,0.18)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Frame className="w-5 h-5 text-violet-400" />
                <span className="font-semibold text-foreground">Portrait — gallery walls + entryways</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  Gallery wall anchor pieces (8×10, 11×14)
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  Entryway and hallway narrow walls
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  Tall accent walls with high ceilings
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  8×10 (4:5) and 12×18 (2:3) portrait dominate
                </li>
              </ul>
            </div>
          </div>
          <p className="text-foreground-70 leading-relaxed">
            For deeper orientation guidance, see{" "}
            <Link href="/etsy-landscape-print-sizes" className="text-teal-400 hover:underline">
              Etsy landscape print sizes
            </Link>{" "}
            and{" "}
            <Link href="/etsy-16x20-print-size" className="text-teal-400 hover:underline">
              16×20 print size guide
            </Link>.
          </p>
        </section>

        {/* Inline violet CTA 1 */}
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
              Most living room listings offer portrait 8×10 only — and lose every above-sofa and fireplace buyer.
            </p>
            <p className="text-lg font-medium mb-6 text-foreground">
              One upload. Landscape 24×36, portrait 8×10, gallery wall sizes, A4 — every ratio a living room buyer could need.
            </p>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-violet-400 hover:bg-violet-300 transition-colors"
            >
              Cover Every Living Room Size Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-foreground-60 mt-3">No account needed &middot; No credit card required</p>
          </div>
        </div>

        {/* Section 3: Multi-piece sets */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Multi-Piece Sets: Ratio Consistency Is Critical
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Living room buyers love 3-piece and 5-piece sets — they create a curated, gallery-like
            feel above a sofa or fireplace. But sets only work if the ratio is consistent across every
            piece. Mixing sizes in a set forces the buyer to find mismatched frames, which kills the
            purchase.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              {
                title: "3-piece landscape sets — the above-sofa staple",
                desc: "Three 12×18 landscape prints side by side span ~36 inches, filling a standard sofa wall beautifully. All three pieces must be 2:3 ratio. Offer the set in one ZIP so the buyer downloads all three at once.",
              },
              {
                title: "5-piece gallery wall sets — portrait backbone",
                desc: "Five portrait prints in a mix of 8×10 and 5×7 (all 4:5 ratio) give the buyer a complete gallery wall kit. Consistent ratio across all five means any standard 4:5 frame works — no guesswork.",
              },
              {
                title: "Never mix ratios within a set",
                desc: "Combining a 2:3 center piece with 4:5 side pieces forces buyers to source two different frame sizes. This is the most common mistake in multi-piece Etsy listings — and the primary reason sets get abandoned at checkout.",
              },
              {
                title: "Offer the same set in multiple ratio families",
                desc: "Your 3-piece set can ship as a 2:3 ZIP and a 3:4 ZIP in the same listing. Label them clearly. The buyer picks the pack that matches their frames — you cover both.",
              },
            ].map(({ title, desc }) => (
              <li
                key={title}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="font-semibold text-foreground mb-1">{title}</p>
                <p className="text-sm text-foreground-70">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="text-foreground-70 leading-relaxed">
            See our{" "}
            <Link href="/etsy-gallery-wall-print-sizes" className="text-teal-400 hover:underline">
              gallery wall print sizes guide
            </Link>{" "}
            for full gallery wall set composition rules.
          </p>
        </section>

        {/* Section 4: Pixel dimensions */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Pixel Dimensions at 300 DPI for All Living Room Sizes
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Living room prints are larger than most other rooms — buyers hang 24×36 above their sofa,
            not a 5×7. Your source file needs to be high enough resolution to stay sharp at these
            dimensions. All sizes below are at 300 DPI (professional print standard).
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Print Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Pixels at 300 DPI</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Best Placement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "8×10 in", pixels: "2,400 × 3,000 px", ratio: "4:5", use: "Gallery wall portrait" },
                  { size: "11×14 in", pixels: "3,300 × 4,200 px", ratio: "11:14", use: "Gallery wall anchor" },
                  { size: "12×18 in", pixels: "3,600 × 5,400 px", ratio: "2:3", use: "3-piece sofa set" },
                  { size: "16×20 in", pixels: "4,800 × 6,000 px", ratio: "4:5", use: "Above console, small sofa" },
                  { size: "18×24 in", pixels: "5,400 × 7,200 px", ratio: "3:4", use: "Above sofa / fireplace" },
                  { size: "24×30 in", pixels: "7,200 × 9,000 px", ratio: "4:5", use: "Above large sofa landscape" },
                  { size: "24×36 in", pixels: "7,200 × 10,800 px", ratio: "2:3", use: "Feature wall / above fireplace" },
                  { size: "A4 (210×297mm)", pixels: "2,480 × 3,508 px", ratio: "ISO 216", use: "International buyers" },
                ].map(({ size, pixels, ratio, use }, i) => (
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
                    <td className="py-3 px-4 text-foreground-60 text-xs">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground-50">
            For the complete 300 DPI reference across all print sizes, see{" "}
            <Link href="/etsy-18x24-print-size" className="text-teal-400 hover:underline">
              18×24 print size guide
            </Link>{" "}
            and{" "}
            <Link href="/etsy-16x20-print-size" className="text-teal-400 hover:underline">
              16×20 print size guide
            </Link>.
          </p>
        </section>

        {/* Section 5: Which ratio packs cover living room */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Which Ratio Packs Cover Living Room Sizes
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Living rooms require more ratio coverage than any other room category. The above-sofa buyer
            wants 2:3 landscape. The gallery wall buyer wants 4:5 portrait. The international buyer
            wants ISO. No single ratio pack covers a complete living room listing — you need all five.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Ratio Pack</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Sizes Included</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Living Room Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    ratio: "2:3",
                    sizes: "8×12, 12×18, 16×24, 20×30, 24×36",
                    use: "Above sofa, above fireplace, 3-piece sets, feature wall",
                  },
                  {
                    ratio: "3:4",
                    sizes: "6×8, 9×12, 12×16, 15×20, 18×24",
                    use: "Above sofa landscape, above console",
                  },
                  {
                    ratio: "4:5",
                    sizes: "8×10, 12×15, 16×20, 20×25, 24×30",
                    use: "Gallery wall portrait, above console landscape",
                  },
                  {
                    ratio: "ISO",
                    sizes: "A5, A4, A3, A2, A1",
                    use: "International buyers, IKEA RIBBA frames",
                  },
                  {
                    ratio: "Extras",
                    sizes: "5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24",
                    use: "Gallery wall accents (5×7), 11×14 anchor pieces",
                  },
                ].map(({ ratio, sizes, use }, i) => (
                  <tr
                    key={ratio}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="py-3 px-4 font-mono text-teal-400 font-medium">{ratio}</td>
                    <td className="py-3 px-4 text-foreground-70">{sizes}</td>
                    <td className="py-3 px-4 text-foreground-60">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ListingOutputShowcase */}
        <section className="mb-16">
          <ListingOutputShowcase
            artwork="neutral_abstract"
            heading="One design. Every living room ratio pack."
            subtext="SnapToSize takes a single design and generates 2:3, 3:4, 4:5, ISO, and Extras — covering above-sofa landscape, gallery wall portrait, and international sizes — in a single upload, ready to attach to your Etsy listing."
          />
        </section>

        {/* CTA 1 — ContextualCTA */}
        <div className="mb-16">
          <ContextualCTA
            problem="A living room listing with only portrait 8×10 misses every above-sofa buyer, every fireplace buyer, and every 3-piece set buyer."
            solution="Upload once. SnapToSize generates 2:3, 3:4, 4:5, ISO, and Extras — landscape and portrait at 300 DPI — covering every living room placement."
            appUrl={appUrl}
            buttonText="Try Free — No Account Needed"
          />
        </div>

        {/* Section 6: How to offer all sizes */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            How to Offer Every Living Room Size Without Manual Resizing
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Generating living room sizes manually — landscape 24×36, portrait 8×10, A4, 3-piece set
            ZIPs — can mean 40+ exports per design across orientations. Most sellers stop at two or
            three sizes and leave the rest of the market uncovered.
          </p>
          <ol className="space-y-4 mb-6">
            {[
              {
                step: "1",
                title: "Upload your design",
                desc: "JPEG or PNG — highest resolution you have. For living room sizes like 24×36, aim for at least 7,200×10,800 px source files.",
              },
              {
                step: "2",
                title: "Select all five ratio packs",
                desc: "2:3 (above sofa, fireplace), 3:4 (above console), 4:5 (gallery wall), ISO (international), and Extras (11×14, 5×7). All five together cover every living room placement.",
              },
              {
                step: "3",
                title: "Download the ZIPs and attach to Etsy",
                desc: "Five ratio-pack ZIPs, each under Etsy's 20MB file limit. Attach all five to your listing — buyers get the pack that matches their frames.",
              },
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
          <p className="text-foreground-70 leading-relaxed">
            Pro plan is $11.99/mo — unlimited uploads, all five ratio packs, portrait and landscape,
            no watermarks.
          </p>
        </section>

        {/* CTA 2 — ContextualCTA */}
        <div className="mb-16">
          <ContextualCTA
            problem="Living room listings without landscape sizes lose above-sofa and fireplace buyers — the highest-intent shoppers in the category."
            solution="SnapToSize generates every living room wall art size from one upload — 8×10 gallery wall portrait up to 24×36 feature wall landscape."
            appUrl={appUrl}
            buttonText="Generate All Sizes Free"
          />
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <RelatedPages currentSlug="etsy-living-room-wall-art-sizes" />
        </section>

        {/* Final CTA */}
        <FinalCTA
          heading="Never lose a living room wall art sale to the wrong size"
          stat="Every placement. Every ratio. One upload."
          description="SnapToSize generates every size your living room buyer might need — 24×36 landscape above the sofa, 11×14 portrait for the gallery wall, A4 for international buyers — from a single upload. Cover every room, every frame, every buyer."
          appUrl={appUrl}
        />
      </div>
    </>
  );
}
