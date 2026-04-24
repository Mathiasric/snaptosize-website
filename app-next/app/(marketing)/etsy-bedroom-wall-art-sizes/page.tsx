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
  title: "Etsy Bedroom Wall Art Sizes — Print Size Guide for Sellers",
  description:
    "Best bedroom wall art sizes for Etsy: above-headboard sizing by bed width, nightstand pairs, portrait vs landscape, pixel dimensions at 300 DPI.",
  alternates: { canonical: "https://snaptosize.com/etsy-bedroom-wall-art-sizes" },
  openGraph: {
    title: "Etsy Bedroom Wall Art Sizes — Print Size Guide for Sellers",
    description:
      "Best bedroom wall art sizes for Etsy: above-headboard sizing by bed width, nightstand pairs, portrait vs landscape, pixel dimensions at 300 DPI.",
    url: "https://snaptosize.com/etsy-bedroom-wall-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-bedroom-wall-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Bedroom Wall Art Sizes — headboard prints, nightstand pairs, 300 DPI guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Bedroom Wall Art Sizes — Print Size Guide for Sellers",
    description:
      "Best bedroom wall art sizes for Etsy: above-headboard sizing by bed width, nightstand pairs, portrait vs landscape, pixel dimensions at 300 DPI.",
    images: ["/assets/og/etsy-bedroom-wall-art-sizes.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Etsy Bedroom Wall Art Sizes: The Complete Print Size Guide",
      description:
        "Which print sizes sell best for bedroom wall art on Etsy, the 2/3 headboard rule by bed size, nightstand pairs, portrait vs landscape, and pixel dimensions at 300 DPI.",
      url: "https://snaptosize.com/etsy-bedroom-wall-art-sizes",
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
        { "@type": "ListItem", position: 3, name: "Bedroom Wall Art Sizes", item: "https://snaptosize.com/etsy-bedroom-wall-art-sizes" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What size art above a king bed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A king bed is 76 inches wide. The 2/3 rule puts the ideal art width at roughly 50 inches. In practice, sellers offer 36×48 as a large-format statement piece, or a 24×36 print with a wide mat. A diptych of two 18×24 prints side by side also fills the space well. For Etsy printables, 24×36 (2:3 ratio, 7,200×10,800 px at 300 DPI) is the most practical single file for king-bed buyers.",
          },
        },
        {
          "@type": "Question",
          name: "What size art above a queen bed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A queen bed is 60 inches wide. The 2/3 proportion rule suggests art around 40 inches wide. A single 24×36 print (2:3 ratio) works well — large enough to anchor the headboard without overwhelming the wall. For printables, 24×36 at 300 DPI requires a 7,200×10,800 px file.",
          },
        },
        {
          "@type": "Question",
          name: "Should bedroom wall art be horizontal or vertical?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Above a headboard, landscape (horizontal) orientation usually fills the horizontal wall space better. On side walls or for nightstand pairs, portrait (vertical) is more common. Offering both orientations in your listing — portrait in 2:3 or 4:5, landscape in 3:4 or 4:5 — captures both use cases and prevents lost sales.",
          },
        },
        {
          "@type": "Question",
          name: "What size art for a small bedroom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a twin or small full bed, art above the headboard looks best at 16×20 or 18×24 — the 2/3 rule puts the ideal width at 25–36 inches. Avoid going smaller than 11×14 for above-headboard placement; it looks lost on the wall. Nightstand prints in 5×7 or 8×10 work at any bedroom size.",
          },
        },
        {
          "@type": "Question",
          name: "What pixel dimensions for 16x20 at 300 DPI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "16×20 at 300 DPI requires a 4,800×6,000 px file. This is a 4:5 ratio — the same ratio as 8×10. It is one of the most popular above-headboard sizes for twin and full beds. SnapToSize generates it automatically in the 4:5 ratio pack.",
          },
        },
        {
          "@type": "Question",
          name: "Should I offer a set of two prints for bedside tables?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — nightstand pairs (a matching set of two 5×7 or 8×10 portrait prints) are a high-converting bedroom listing format. Buyers love the symmetry of matching prints flanking the bed. Label the listing clearly as a 'set of 2' and include both prints in each ratio pack ZIP so the buyer can frame both identically.",
          },
        },
        {
          "@type": "Question",
          name: "What sizes do Etsy buyers expect for bedroom printables?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bedroom buyers expect at minimum: 8×10 and 16×20 in portrait (4:5 ratio) for above-headboard use, 18×24 in portrait (3:4 ratio) for queen and king beds, 5×7 for nightstand pairs, and A4 for international buyers with IKEA RIBBA frames. Sellers who include all three ratio packs — 2:3, 3:4, and 4:5 — consistently serve the full range of bedroom placements without requiring manual resizing.",
          },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    question: "What size art above a king bed?",
    answer:
      "A king bed is 76 inches wide. The 2/3 rule puts the ideal art width at roughly 50 inches. In practice, sellers offer 36×48 as a large-format statement piece, or a 24×36 print with a wide mat. A diptych of two 18×24 prints side by side also fills the space well. For Etsy printables, 24×36 (2:3 ratio, 7,200×10,800 px at 300 DPI) is the most practical single file for king-bed buyers.",
  },
  {
    question: "What size art above a queen bed?",
    answer:
      "A queen bed is 60 inches wide. The 2/3 proportion rule suggests art around 40 inches wide. A single 24×36 print (2:3 ratio) works well — large enough to anchor the headboard without overwhelming the wall. For printables, 24×36 at 300 DPI requires a 7,200×10,800 px file.",
  },
  {
    question: "Should bedroom wall art be horizontal or vertical?",
    answer:
      "Above a headboard, landscape (horizontal) orientation usually fills the horizontal wall space better. On side walls or for nightstand pairs, portrait (vertical) is more common. Offering both orientations in your listing — portrait in 2:3 or 4:5, landscape in 3:4 or 4:5 — captures both use cases and prevents lost sales.",
  },
  {
    question: "What size art for a small bedroom?",
    answer:
      "For a twin or small full bed, art above the headboard looks best at 16×20 or 18×24 — the 2/3 rule puts the ideal width at 25–36 inches. Avoid going smaller than 11×14 for above-headboard placement; it looks lost on the wall. Nightstand prints in 5×7 or 8×10 work at any bedroom size.",
  },
  {
    question: "What pixel dimensions for 16x20 at 300 DPI?",
    answer:
      "16×20 at 300 DPI requires a 4,800×6,000 px file. This is a 4:5 ratio — the same ratio as 8×10. It is one of the most popular above-headboard sizes for twin and full beds. SnapToSize generates it automatically in the 4:5 ratio pack.",
  },
  {
    question: "Should I offer a set of two prints for bedside tables?",
    answer:
      "Yes — nightstand pairs (a matching set of two 5×7 or 8×10 portrait prints) are a high-converting bedroom listing format. Buyers love the symmetry of matching prints flanking the bed. Label the listing clearly as a 'set of 2' and include both prints in each ratio pack ZIP so the buyer can frame both identically.",
  },
  {
    question: "What sizes do Etsy buyers expect for bedroom printables?",
    answer:
      "Bedroom buyers expect at minimum: 8×10 and 16×20 in portrait (4:5 ratio) for above-headboard use, 18×24 in portrait (3:4 ratio) for queen and king beds, 5×7 for nightstand pairs, and A4 for international buyers with IKEA RIBBA frames. Sellers who include all three ratio packs — 2:3, 3:4, and 4:5 — consistently serve the full range of bedroom placements without requiring manual resizing.",
  },
];

const appUrl = "https://app.snaptosize.com?source=seo_etsy-bedroom-wall-art-sizes&kind=niche";

export default function EtsyBedroomWallArtSizesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO — Soft Bedroom Placement ===== */}
      <section
        className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #fdf6f0 0%, #f7ede8 30%, #f2e8ec 65%, #ede5ee 100%)",
        }}
      >
        {/* Subtle warm grain */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(#c4a0a033 1px, transparent 1px), linear-gradient(90deg, #c4a0a033 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Blush blob top-right */}
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] rounded-full opacity-[0.22]"
          style={{ background: "radial-gradient(circle, #e8b4b8, transparent 70%)" }}
        />
        {/* Slate blob bottom-left */}
        <div
          className="absolute bottom-[-18%] left-[-6%] w-[440px] h-[440px] rounded-full opacity-[0.14]"
          style={{ background: "radial-gradient(circle, #8fa3b1, transparent 70%)" }}
        />

        {/* CSS Bedroom Mockup — headboard + large frame + two small nightstand frames */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative" style={{ width: "360px", height: "340px" }}>

            {/* Large landscape frame above headboard */}
            <div
              className="absolute shadow-[0_18px_40px_-20px_rgba(100,80,100,0.45)]"
              style={{
                width: "260px",
                height: "140px",
                top: "0px",
                left: "50px",
                background: "#faf7f5",
                border: "7px solid #7a6e80",
                borderRadius: "2px",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #e8e0e8 0%, #ddd5e2 100%)" }}
              >
                <div className="text-center px-3">
                  <span
                    className="text-[9px] font-mono tracking-[0.2em] uppercase block"
                    style={{ color: "#6b5f72" }}
                  >
                    24×36 · above headboard
                  </span>
                  <div
                    className="mt-1.5 mx-auto"
                    style={{
                      width: "60px",
                      height: "2px",
                      background: "rgba(107,95,114,0.35)",
                      borderRadius: "1px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Headboard silhouette */}
            <div
              className="absolute"
              style={{
                top: "152px",
                left: "20px",
                width: "320px",
                height: "56px",
                background: "linear-gradient(180deg, #c9b8c2 0%, #a89aae 100%)",
                borderRadius: "40px 40px 0 0",
                boxShadow: "0 6px 20px -6px rgba(100,80,100,0.4)",
              }}
            />

            {/* Nightstand left */}
            <div
              className="absolute"
              style={{
                top: "200px",
                left: "0px",
                width: "52px",
                height: "44px",
                background: "linear-gradient(160deg, #c8b89a 0%, #a89472 100%)",
                borderRadius: "4px 4px 2px 2px",
                boxShadow: "0 4px 10px -4px rgba(100,80,60,0.4)",
              }}
            />
            {/* Small portrait frame — left nightstand */}
            <div
              className="absolute shadow-[0_6px_16px_-8px_rgba(100,80,100,0.5)]"
              style={{
                width: "38px",
                height: "48px",
                top: "148px",
                left: "7px",
                background: "#faf7f5",
                border: "4px solid #7a6e80",
                borderRadius: "1px",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #e8e0e8, #ddd5e2)" }}
              >
                <span className="text-[6px] font-mono" style={{ color: "#6b5f72" }}>5×7</span>
              </div>
            </div>

            {/* Nightstand right */}
            <div
              className="absolute"
              style={{
                top: "200px",
                right: "0px",
                width: "52px",
                height: "44px",
                background: "linear-gradient(160deg, #c8b89a 0%, #a89472 100%)",
                borderRadius: "4px 4px 2px 2px",
                boxShadow: "0 4px 10px -4px rgba(100,80,60,0.4)",
              }}
            />
            {/* Small portrait frame — right nightstand */}
            <div
              className="absolute shadow-[0_6px_16px_-8px_rgba(100,80,100,0.5)]"
              style={{
                width: "38px",
                height: "48px",
                top: "148px",
                right: "7px",
                background: "#faf7f5",
                border: "4px solid #7a6e80",
                borderRadius: "1px",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #e8e0e8, #ddd5e2)" }}
              >
                <span className="text-[6px] font-mono" style={{ color: "#6b5f72" }}>5×7</span>
              </div>
            </div>

            {/* Bed base */}
            <div
              className="absolute"
              style={{
                top: "254px",
                left: "10px",
                width: "340px",
                height: "18px",
                background: "linear-gradient(180deg, #e8e0d0 0%, #d4c8b4 100%)",
                borderRadius: "0 0 4px 4px",
              }}
            />

            {/* Label */}
            <div
              className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                bottom: "16px",
                left: "90px",
                background: "rgba(250,247,245,0.88)",
                border: "1px solid rgba(122,110,128,0.28)",
              }}
            >
              <span
                className="text-[9px] font-mono tracking-[0.18em] uppercase"
                style={{ color: "#6b5f72" }}
              >
                headboard + nightstand pair
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
          <nav className="text-xs mb-6" style={{ color: "#7a6870" }} aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: "#7a6870" }}>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/etsy-print-sizes" className="hover:opacity-80 transition-opacity" style={{ color: "#7a6870" }}>
                  Etsy Print Sizes
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: "#3a2e38" }}>Etsy Bedroom Wall Art Sizes</li>
            </ol>
          </nav>

          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "#c4a0a080" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "#b07080" }}
              >
                Niche Guide · Bedroom
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5" style={{ color: "#3a2e38" }}>
                Etsy Bedroom Wall Art Sizes
              </span>
              <span className="block text-xl md:text-2xl lg:text-[1.65rem] font-semibold" style={{ color: "#5e4a58" }}>
                Above-headboard sizing, nightstand pairs, and every ratio for bedroom sellers
              </span>
            </h1>

            <p className="text-base mb-6 max-w-lg leading-relaxed" style={{ color: "#635060" }}>
              Bedroom buyers shop two completely different placements &mdash; a large landscape print above the headboard and matching portrait prints on the nightstands. Miss either format and you lose half the sale. Every size that works for bedroom wall art on Etsy, keyed to bed size, with exact pixel dimensions at 300&nbsp;DPI.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 text-sm px-6 py-2.5">
                  Generate All Bedroom Sizes Free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <p className="text-sm mt-2" style={{ color: "#7a6870" }}>
                Free: 5 Quick Exports · Pro: $11.99/mo for unlimited · no card required
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Above-headboard sizing",
                "Nightstand pairs",
                "Portrait + landscape",
                "300 DPI pixel dimensions",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border"
                  style={{
                    background: "rgba(250,247,245,0.55)",
                    borderColor: "rgba(122,110,128,0.28)",
                  }}
                >
                  <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#b07080" }} />
                  <span className="text-xs font-medium" style={{ color: "#5e4a58" }}>{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] pt-16 pb-12 md:pt-20">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-16 md:mb-20">
          <QuickAnswer question="What sizes work best for bedroom wall art on Etsy?">
            Bedroom wall art splits into two placement types. <strong>Above the headboard</strong>: use the 2/3-of-bed-width rule — twin beds call for 16×20 or 18×24, queen beds for 24×36, king beds for 24×36 or larger. <strong>Nightstand pairs</strong>: two matching <strong>5×7 or 8×10 portrait prints</strong>. A listing that covers both placements — with 2:3, 3:4, and 4:5 ratio packs — will consistently outsell listings that offer only 8×10 portrait.
          </QuickAnswer>
        </div>

        {/* ===== LIFESTYLE IMAGE ===== */}
        <div className="mb-16 md:mb-20">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/visuals/etsy-bedroom-wall-art-sizes-lifestyle.jpg"
              alt="Serene Scandinavian bedroom with a large botanical print above a white linen headboard and two small matching prints on wooden nightstands — example of bedroom art placement"
              width={1200}
              height={900}
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="px-4 py-3 text-xs text-foreground-60 italic border-t border-white/10 bg-slate-900/60">
              Example bedroom placement: large print above headboard + matching nightstand pair
            </figcaption>
          </div>
        </div>

        {/* Section 1: What sizes work best */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            What Sizes Work Best for Bedroom Wall Art on Etsy
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Bedrooms have two distinct art placements that drive completely different size decisions. The large anchor piece above the headboard needs to fill the horizontal wall space behind the bed — and the right size is directly linked to the bed width. The nightstand pair is a separate purchase: two smaller matching portrait prints that frame the bed symmetrically.
          </p>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            A seller who offers only 8×10 portrait loses the buyer who needs an 18×24 or 24×36 above their queen bed, and also loses the buyer shopping for two 5×7 nightstand prints. Covering both placements — and every major ratio — is what turns a bedroom listing into a reliable seller.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { size: "5×7", ratio: "5:7 (≈2:3)", notes: "Nightstand pairs, small frames" },
              { size: "8×10", ratio: "4:5", notes: "Nightstand pairs, twin-bed headboard" },
              { size: "16×20", ratio: "4:5", notes: "Above headboard: twin/full bed" },
              { size: "18×24", ratio: "3:4", notes: "Above headboard: full/queen bed" },
              { size: "24×36", ratio: "2:3", notes: "Above headboard: queen/king bed" },
              { size: "11×14", ratio: "11:14", notes: "Side walls, gallery clusters" },
              { size: "A4", ratio: "ISO 216", notes: "International IKEA RIBBA frames" },
              { size: "A3", ratio: "ISO 216", notes: "Large format European bedrooms" },
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

        {/* Section 2: Above the headboard — 2/3 rule */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Above the Headboard: The 2/3 Proportion Rule
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            The most common interior design guideline for above-headboard art is the <strong>two-thirds rule</strong>: the art (or art grouping) should span roughly two-thirds of the bed width. This is the same proportion rule used for sofas and dining tables — it prevents the art from looking undersized or overwhelming.
          </p>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            For Etsy sellers, understanding this rule helps you list the right sizes so the buyer doesn&apos;t have to do the math. A listing that calls out &ldquo;best for queen beds&rdquo; and leads with 24×36 will convert better than one that leaves the buyer guessing.
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
                <span className="font-semibold text-foreground">The 2/3 Proportion Rule</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Art width = 2/3 of bed width</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Centers above the headboard, not the full wall</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Applies to single pieces and diptychs equally</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Hang 6–8 inches above the headboard top</li>
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(176,112,128,0.07)",
                border: "1px solid rgba(176,112,128,0.22)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="w-5 h-5" style={{ color: "#b07080" }} />
                <span className="font-semibold text-foreground">Why It Matters for Your Listing</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />Buyers buying &ldquo;above queen bed&rdquo; expect 24×36</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />Missing 24×36 means losing the queen-bed buyer</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />King-bed buyers often need a diptych or 24×36+mat</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />Note bed size in your listing tags and description</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Bed size chart */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Bed Size → Recommended Art Size Chart
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            Use this chart to decide which sizes to lead with in your listing title and description. Buyers often search by bed size when shopping for bedroom art.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Bed Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Bed Width</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">2/3 Art Width</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Recommended Print</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bed: "Twin", width: "38\"", ideal: "~25\"", print: "16×20 or 18×24", ratio: "4:5 or 3:4" },
                  { bed: "Full (Double)", width: "54\"", ideal: "~36\"", print: "24×30 or 24×36", ratio: "4:5 or 2:3" },
                  { bed: "Queen", width: "60\"", ideal: "~40\"", print: "24×36", ratio: "2:3" },
                  { bed: "King", width: "76\"", ideal: "~50\"", print: "24×36 + mat or diptych", ratio: "2:3" },
                ].map(({ bed, width, ideal, print, ratio }, i) => (
                  <tr
                    key={bed}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="py-3 px-4 font-semibold text-foreground">{bed}</td>
                    <td className="py-3 px-4 text-foreground-60">{width}</td>
                    <td className="py-3 px-4 text-foreground-60">{ideal}</td>
                    <td className="py-3 px-4 font-mono text-teal-400 font-medium">{print}</td>
                    <td className="py-3 px-4 text-foreground-50">{ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground-50">
            See our dedicated guides for <Link href="/etsy-16x20-print-size" className="text-teal-400 hover:underline">16×20</Link> and <Link href="/etsy-11x14-print-size" className="text-teal-400 hover:underline">11×14</Link> for full pixel dimension tables.
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
              A listing with only 8×10 misses the queen-bed buyer who needs 24×36 and the king-bed buyer who needs a diptych.
            </p>
            <p className="text-lg font-medium mb-6 text-foreground">
              One upload. 18×24, 24×36, 16×20, 5×7, A4 &mdash; every size a bedroom buyer could need.
            </p>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-violet-400 hover:bg-violet-300 transition-colors"
            >
              Cover Every Bedroom Size Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-foreground-60 mt-3">No account needed &middot; No credit card required</p>
          </div>
        </div>

        {/* Section 4: Nightstand pairs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Nightstand Pairs and Small-Format Bedroom Prints
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            The nightstand pair is one of the highest-converting bedroom listing formats on Etsy &mdash; two identical or matching portrait prints, one for each side of the bed. Buyers who search for &ldquo;set of 2 bedroom prints&rdquo; or &ldquo;matching nightstand art&rdquo; are often ready to buy immediately, because they have a specific placement in mind.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                size: "5×7",
                notes: "Most popular nightstand size — fits virtually any bedside table lamp arrangement.",
                ratio: "5:7 (≈2:3)",
              },
              {
                size: "8×10",
                notes: "Larger nightstand pairs — works best on wider nightstands or when no lamp is present.",
                ratio: "4:5",
              },
              {
                size: "4×6",
                notes: "Compact option for small nightstands; less common but useful for tight spaces.",
                ratio: "2:3",
              },
            ].map(({ size, notes, ratio }) => (
              <div
                key={size}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Frame className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm">{size}</div>
                  <div className="text-xs text-foreground-50 mb-1 font-mono">{ratio}</div>
                  <div className="text-sm text-foreground-60">{notes}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground-70 mb-4 leading-relaxed">
            When listing a nightstand pair, include both prints in the same ratio pack ZIP. Label the listing &ldquo;set of 2&rdquo; clearly in the title. Because 5×7 falls into the Extras pack, make sure your listing includes that file alongside the standard 2:3 pack.
          </p>
          <p className="text-foreground-70 leading-relaxed">
            See our <Link href="/etsy-5x7-print-size" className="text-teal-400 hover:underline">5×7 print size guide</Link> and <Link href="/etsy-8x10-print-size" className="text-teal-400 hover:underline">8×10 print size guide</Link> for full pixel specifications.
          </p>
        </section>

        {/* Section 5: Portrait vs landscape */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Portrait vs Landscape for Bedroom Wall Art
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Bedrooms use both orientations — but for different placements. Above the headboard, landscape often wins because it fills horizontal wall space more naturally. For nightstands and side walls, portrait is the standard. Offering both orientations from a single design doubles the placement options your listing can serve.
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
                <span className="font-semibold text-foreground">Portrait — nightstands + side walls</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />5×7 and 8×10 for nightstand pairs</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />18×24 for above twin and full headboards</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />24×36 (portrait) for large accent walls</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Botanical, floral, and abstract designs</li>
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(176,112,128,0.07)",
                border: "1px solid rgba(176,112,128,0.22)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="w-5 h-5" style={{ color: "#b07080" }} />
                <span className="font-semibold text-foreground">Landscape — above headboard</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />16×20 landscape for twin/full headboards</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />24×36 landscape for queen headboards</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />Panoramic botanical and abstract styles</li>
                <li className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#b07080" }} />Often displayed without a mat, edge-to-frame</li>
              </ul>
            </div>
          </div>
          <p className="text-foreground-70 leading-relaxed">
            For the full ratio comparison see our <Link href="/etsy-print-ratios" className="text-teal-400 hover:underline">Etsy print ratios guide</Link>.
          </p>
        </section>

        {/* CTA 1 */}
        <div className="mb-16">
          <ContextualCTA
            problem="Most bedroom listings offer only 8×10 portrait — missing the queen-bed headboard buyer who needs 24×36 and the nightstand-pair buyer who needs two matching 5×7s."
            solution="Upload once. SnapToSize generates 2:3, 3:4, 4:5, ISO, and Extras packs — covering every bedroom placement from nightstand to king-bed headboard."
            appUrl={appUrl}
            buttonText="Try Free — No Account Needed"
          />
        </div>

        {/* Section 6: Pixel dimensions */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Pixel Dimensions for Bedroom Prints at 300 DPI
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            All bedroom printables should be exported at 300 DPI for sharp results when the buyer prints at home or through a print lab. Key bedroom sizes with verified pixel dimensions:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Print Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Pixels at 300 DPI</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "5×7 in", pixels: "1,500 × 2,100 px", ratio: "5:7", use: "Nightstand pairs" },
                  { size: "8×10 in", pixels: "2,400 × 3,000 px", ratio: "4:5", use: "Nightstand pairs, twin headboard" },
                  { size: "11×14 in", pixels: "3,300 × 4,200 px", ratio: "11:14", use: "Side walls, gallery clusters" },
                  { size: "16×20 in", pixels: "4,800 × 6,000 px", ratio: "4:5", use: "Twin/full bed headboard" },
                  { size: "18×24 in", pixels: "5,400 × 7,200 px", ratio: "3:4", use: "Full/queen bed headboard" },
                  { size: "24×36 in", pixels: "7,200 × 10,800 px", ratio: "2:3", use: "Queen/king bed headboard" },
                  { size: "A4 (210×297mm)", pixels: "2,480 × 3,508 px", ratio: "ISO 216", use: "International IKEA frames" },
                  { size: "A3 (297×420mm)", pixels: "3,508 × 4,961 px", ratio: "ISO 216", use: "European large-format bedrooms" },
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
            Note: 24×36 is available via Quick Export only (not in the 2:3 ZIP pack) due to file size limits. All other sizes above are included in ratio packs.
          </p>
        </section>

        {/* Section 7: Ratio packs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Which Ratio Packs Cover Bedroom Sizes
          </h2>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            SnapToSize generates five ratio packs from a single upload. Here is how each pack maps to bedroom use cases:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Pack</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Key Bedroom Sizes</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Bedroom Use Case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pack: "2:3 Pack", sizes: "8×12, 12×18, 16×24", use: "Queen/king headboard (landscape)" },
                  { pack: "3:4 Pack", sizes: "6×8, 9×12, 18×24", use: "Full/queen headboard (portrait)" },
                  { pack: "4:5 Pack", sizes: "8×10, 16×20, 24×30", use: "Twin headboard, nightstand pairs" },
                  { pack: "ISO Pack", sizes: "A5, A4, A3, A2", use: "International IKEA frames" },
                  { pack: "Extras Pack", sizes: "5×7, 11×14, 13×19", use: "Nightstand pairs, matted looks" },
                ].map(({ pack, sizes, use }, i) => (
                  <tr
                    key={pack}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="py-3 px-4 font-mono text-teal-400 font-medium">{pack}</td>
                    <td className="py-3 px-4 text-foreground-70">{sizes}</td>
                    <td className="py-3 px-4 text-foreground-60">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-foreground-70 leading-relaxed">
            For a complete ratio overview, see our <Link href="/etsy-print-ratios" className="text-teal-400 hover:underline">Etsy print ratios guide</Link>.
          </p>
        </section>

        {/* ListingOutputShowcase */}
        <section className="mb-16">
          <ListingOutputShowcase
            artwork="floral_vase"
            heading="One bedroom design. Every ratio pack."
            subtext="SnapToSize takes a single design and generates 2:3, 3:4, 4:5, ISO, and Extras — 5×7, 8×10, 18×24, 24×36, A4 — in a single upload, ready to attach to your Etsy listing."
          />
        </section>

        {/* CTA 2 */}
        <div className="mb-16">
          <ContextualCTA
            problem="Bedroom listings with only 8×10 miss the above-headboard buyer (who needs 18×24 or 24×36) and the nightstand-pair buyer (who needs two matching 5×7s)."
            solution="SnapToSize generates every bedroom wall art size from one upload — 5×7, 8×10, 18×24, 24×36, A4, portrait and landscape — at 300 DPI, ZIP-ready for Etsy."
            appUrl={appUrl}
            buttonText="Generate All Bedroom Sizes Free"
          />
        </div>

        {/* Section 8 — How to offer all sizes */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            How to Offer Every Bedroom Size Without Manual Resizing
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Covering nightstand pairs (5×7, 8×10), above-headboard sizes (16×20, 18×24, 24×36), and ISO formats (A4, A3) from a single design means exporting 20+ files at different dimensions and ratios. Doing this manually in Photoshop or Canva for every bedroom listing is where most sellers cut corners and miss sales.
          </p>
          <ol className="space-y-4 mb-6">
            {[
              { step: "1", title: "Upload your bedroom design", desc: "JPEG or PNG at the highest resolution you have. No minimum required." },
              { step: "2", title: "Select all five ratio packs", desc: "2:3 (queen/king headboard), 3:4 (full/queen headboard), 4:5 (twin headboard + nightstand), ISO (international), and Extras (5×7 nightstand, 11×14)." },
              { step: "3", title: "Download and attach the ZIPs", desc: "Five ratio-pack ZIPs, each under Etsy's 20MB file limit, organized by ratio — ready to attach directly to your listing." },
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
            Pro plan ($11.99/mo) gives you unlimited exports and all five packs simultaneously. Free plan includes 5 Quick Exports and 2 packs per day — enough to test your first bedroom listing before upgrading.
          </p>
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
          <RelatedPages currentSlug="etsy-bedroom-wall-art-sizes" />
        </section>

        {/* Final CTA */}
        <FinalCTA
          heading="Never lose a bedroom wall art sale to the wrong size"
          stat="Headboard + nightstand. Every bed size. One upload."
          description="SnapToSize generates every size your bedroom buyer might need — 5×7 nightstand pairs, 18×24 queen headboards, 24×36 king prints, A4 for international buyers — from a single upload at 300 DPI."
          appUrl={appUrl}
        />
      </div>
    </>
  );
}
