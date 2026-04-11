import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy Mid Century Modern Art Sizes — Best Print Dimensions",
  description:
    "Best print sizes for mid century modern art on Etsy. Covers Atomic Age, Bauhaus, Eames sub-styles, gallery wall combos, ISO sizes for Europe, batch resizing.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-mid-century-modern-art-sizes",
  },
  openGraph: {
    title: "Etsy Mid Century Modern Art Sizes | SnapToSize",
    description:
      "Best print sizes for mid century modern art on Etsy. Sub-style breakdowns, gallery wall sets, ISO sizes for European buyers, and one-upload batch resizing.",
    url: "https://snaptosize.com/etsy-mid-century-modern-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-mid-century-modern-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Mid Century Modern Art Sizes — Print Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Mid Century Modern Art Sizes — Best Print Dimensions",
    description:
      "Best print sizes for mid century modern art on Etsy. Sub-style breakdowns, gallery wall sets, ISO sizes for European buyers, and one-upload batch resizing.",
    images: ["/assets/og/etsy-mid-century-modern-art-sizes.png"],
  },
};

const appUrl =
  "https://app.snaptosize.com?source=seo_etsy-mid-century-modern-art-sizes&kind=guide";

export default function EtsyMidCenturyModernArtSizesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Etsy Mid Century Modern Art Sizes — What Print Dimensions Sell Best",
        description:
          "Complete sizing guide for mid century modern art sellers on Etsy. Covers best-selling sizes, 7 MCM sub-styles and their ideal dimensions, gallery wall arrangements, color palette guidance, ISO sizes for European buyers, and how to generate all sizes from one upload.",
        url: "https://snaptosize.com/etsy-mid-century-modern-art-sizes",
        datePublished: "2026-04-11",
        dateModified: "2026-04-11",
        author: {
          "@type": "Organization",
          name: "SnapToSize",
          url: "https://snaptosize.com",
        },
      },
      {
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
            name: "Mid Century Modern Art Sizes",
            item: "https://snaptosize.com/etsy-mid-century-modern-art-sizes",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the best print sizes for mid century modern art on Etsy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best-selling sizes for mid century modern art on Etsy are 8×10 (4:5 ratio), 16×20 (4:5), 18×24 (3:4), and 12×18 (2:3). For large statement pieces typical of MCM interiors, 24×36 via Quick Export is also popular. European buyers frequently purchase A4 and A3 ISO sizes.",
            },
          },
          {
            "@type": "Question",
            name: "What pixel dimensions do I need for mid century modern prints at 300 DPI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "At 300 DPI: 8×10 = 2400×3000 px, 16×20 = 4800×6000 px, 18×24 = 5400×7200 px, 12×18 = 3600×5400 px, A4 = 2480×3508 px, A3 = 3508×4961 px. Your master file should be at least 7200×10800 px to cover all sizes.",
            },
          },
          {
            "@type": "Question",
            name: "Should I offer A4 and A3 sizes for mid century modern art?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. MCM is an internationally popular style and European buyers — particularly Scandinavian shoppers who decorate in Danish Modern or Scandi MCM aesthetics — strongly prefer A4 and A3 ISO sizes that fit standard IKEA Hovsta and Ribba frames.",
            },
          },
          {
            "@type": "Question",
            name: "What frame sizes work for an MCM gallery wall?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A classic MCM gallery wall uses asymmetric groupings of 3–5 prints in mixed sizes. A popular combination is one 18×24 as the anchor, two 8×10s, and one 5×7 accent. Sellers who offer gallery wall sets in their MCM listings consistently outperform single-size listings.",
            },
          },
          {
            "@type": "Question",
            name: "What ratio works best for Atomic Age and Bauhaus MCM prints?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Atomic Age starburst and circular compositions look best in 4:5 ratio (8×10, 16×20) or square formats. Bauhaus geometric prints work in any ratio, but A-series ISO sizes are especially popular with European buyers for this sub-style.",
            },
          },
        ],
      },
    ],
  };

  const faqItems = [
    {
      question:
        "What are the best print sizes for mid century modern art on Etsy?",
      answer:
        "The best-selling sizes are 8×10 (4:5), 16×20 (4:5), 18×24 (3:4), and 12×18 (2:3). For large statement pieces typical of MCM interiors, 24×36 via Quick Export is also popular. European buyers frequently purchase A4 and A3 ISO sizes.",
    },
    {
      question:
        "What pixel dimensions do I need for mid century modern prints at 300 DPI?",
      answer:
        "At 300 DPI: 8×10 = 2400×3000 px, 16×20 = 4800×6000 px, 18×24 = 5400×7200 px, 12×18 = 3600×5400 px, A4 = 2480×3508 px, A3 = 3508×4961 px. Your master file should be at least 7200×10800 px to cover all sizes.",
    },
    {
      question: "Should I offer A4 and A3 sizes for mid century modern art?",
      answer:
        "Yes. MCM is an internationally popular style and European buyers — particularly Scandinavian shoppers — strongly prefer A4 and A3 ISO sizes that fit standard IKEA Hovsta and Ribba frames.",
    },
    {
      question: "What frame sizes work for an MCM gallery wall?",
      answer:
        "A classic MCM gallery wall uses asymmetric groupings of 3–5 prints in mixed sizes. A popular combination is one 18×24 anchor, two 8×10s, and one 5×7 accent. Sellers who offer gallery wall sets consistently outperform single-size listings.",
    },
    {
      question:
        "What ratio works best for Atomic Age and Bauhaus MCM prints?",
      answer:
        "Atomic Age starburst and circular compositions look best in 4:5 ratio (8×10, 16×20) or square formats. Bauhaus geometric prints work in any ratio, but A-series ISO sizes are especially popular with European buyers.",
    },
    {
      question: "What is the pixel size for 18×24 mid century modern print at 300 DPI?",
      answer:
        "At 300 DPI, an 18×24 inch print is 5400×7200 pixels. This is the most popular large-format MCM size and fits the 3:4 ratio pack. Your master file should be at least 5400×7200 px before you resize down to smaller sizes.",
    },
    {
      question: "Do European buyers want different sizes for mid century modern art?",
      answer:
        "Yes. European buyers — especially in Scandinavia, Germany, and the Netherlands — strongly prefer A4 (2480×3508 px) and A3 (3508×4961 px) ISO sizes that fit IKEA Ribba and Hovsta frames. Sellers who include A4 and A3 consistently report higher conversion with European shoppers.",
    },
    {
      question: "How many sizes should I include in an MCM Etsy listing?",
      answer:
        "Aim for at least 4–6 sizes covering both US standard frames and ISO formats: 8×10, 16×20, 18×24 for the US market, plus A4 and A3 for European buyers. Adding a 24×36 option captures large statement-piece buyers. SnapToSize generates all these from a single upload.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0e0c12 0%, #110e15 30%, #0d0b10 60%, #121018 100%)",
        }}
      >
        {/* MCM geometric shapes — right side composition */}
        <div
          className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={{ width: "380px", height: "400px" }}
        >
          {/* Large ochre circle — background anchor */}
          <div
            className="absolute"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(202,150,40,0.18) 0%, rgba(202,150,40,0.06) 60%, transparent 80%)",
              top: "60px",
              right: "40px",
            }}
          />
          {/* Teal filled circle */}
          <div
            className="absolute"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "rgba(45,212,191,0.22)",
              border: "2px solid rgba(45,212,191,0.4)",
              top: "40px",
              left: "30px",
            }}
          />
          {/* Burnt orange parallelogram */}
          <div
            className="absolute"
            style={{
              width: "130px",
              height: "60px",
              background: "rgba(194,80,30,0.20)",
              border: "2px solid rgba(194,80,30,0.35)",
              transform: "skewX(-18deg)",
              top: "160px",
              left: "10px",
            }}
          />
          {/* Mustard triangle (CSS clip-path) */}
          <div
            className="absolute"
            style={{
              width: "100px",
              height: "100px",
              background: "rgba(202,160,40,0.22)",
              border: "2px solid rgba(202,160,40,0.4)",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              bottom: "80px",
              right: "20px",
            }}
          />
          {/* Atomic starburst — small ring */}
          <div
            className="absolute"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "3px solid rgba(167,139,250,0.45)",
              bottom: "60px",
              left: "60px",
            }}
          />
          {/* Size label cards — overlaid on composition */}
          <div
            className="absolute"
            style={{ top: "85px", right: "30px" }}
          >
            {[
              { label: "8×10", sub: "4:5" },
              { label: "18×24", sub: "3:4" },
              { label: "16×20", sub: "4:5" },
              { label: "A4", sub: "ISO" },
            ].map((s, i) => (
              <div
                key={i}
                className="mb-2 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    color: "#E8D5A0",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "11px",
                  }}
                >
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
          {/* Charcoal horizontal stripe — Bauhaus reference */}
          <div
            className="absolute"
            style={{
              width: "260px",
              height: "4px",
              background:
                "linear-gradient(90deg, transparent, rgba(167,139,250,0.5), rgba(45,212,191,0.4), transparent)",
              bottom: "140px",
              left: "0",
            }}
          />
        </div>

        {/* Purple ambient glow — top left */}
        <div
          className="absolute top-[-15%] left-[-8%] w-[400px] h-[400px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)" }}
        />
        {/* Teal ambient glow — bottom right */}
        <div
          className="absolute bottom-[-10%] right-[30%] w-[300px] h-[300px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2DD4BF, transparent 70%)" }}
        />

        <Container>
          <div className="max-w-2xl relative z-10">
            {/* Monospace label */}
            <p
              className="mb-4 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "monospace", color: "#A78BFA" }}
            >
              MCM ART SIZE GUIDE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Etsy Mid Century Modern Art Sizes —{" "}
              <span style={{ color: "#2DD4BF" }}>What Print Dimensions Sell Best</span>
            </h1>

            <p className="text-lg text-white/70 mb-7 max-w-xl">
              Mid century modern prints sell best in 8×10, 16×20, 18×24, and 24×36. The
              style thrives in bold geometric shapes with ochre, teal, and rust palettes —
              available in 2:3 and 4:5 ratio packs. This guide covers every size, sub-style,
              and how to serve both US and European buyers from a single upload.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "The 6 sizes Etsy buyers order most",
                "7 MCM styles + ideal frame sizes for each",
                "ISO sizes for European buyers",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <Check
                    size={14}
                    className="flex-shrink-0"
                    style={{ color: "#A78BFA" }}
                  />
                  {pill}
                </div>
              ))}
            </div>

            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              <Button className="text-sm px-6 py-2.5">
                Resize Your MCM Art — Free
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ===== WHY MCM NEEDS SPECIFIC SIZES ===== */}
      <section className="py-14">
        <Container>
          <div className="max-w-3xl mx-auto">

            <QuickAnswer question="What are the best print sizes for mid century modern art on Etsy?">
              The best-selling sizes are{" "}
              <strong>18×24 (3:4 ratio)</strong>,{" "}
              <strong>16×20 (4:5)</strong>, and{" "}
              <strong>8×10 (4:5)</strong>. For large statement pieces typical
              of MCM interiors, <strong>24×36</strong> is also popular.
              European buyers prefer <strong>A4 (2480×3508 px)</strong> and{" "}
              <strong>A3</strong> to fit IKEA Hovsta and Ribba frames.
            </QuickAnswer>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-10">
              Why Mid Century Modern Art Thrives in Specific Print Sizes
            </h2>
            <p className="text-white/70 mb-5">
              Mid century modern design is built around bold geometry, asymmetry, and
              breathing room. A 5×7 print loses the impact of a large starburst or Bauhaus
              grid — the design becomes illegible. MCM works at scale.
            </p>
            <p className="text-white/70 mb-5">
              The style originated in the 1950s–1970s (Bauhaus, Eames Era, Atomic Age) and
              buyers decorating in this aesthetic tend to want{" "}
              <strong className="text-white">statement pieces</strong>, not small accents.
              Mid century modern interiors favor large walls anchored by 18×24 or 24×36
              prints, often flanked by coordinating smaller pieces.
            </p>
            <p className="text-white/70 mb-6">
              The style also splits cleanly across{" "}
              <Link href="/etsy-print-ratios" className="text-[#2DD4BF] hover:underline">
                two ratio families
              </Link>
              : 4:5 (8×10, 16×20) for classic American frames, and 2:3 (12×18, 16×24) for
              poster-style vertical compositions. European buyers — who shop Etsy heavily for
              this style — prefer ISO A-series (A4, A3) to fit IKEA Hovsta and Ribba frames.
              Sellers who list all three families consistently reach more buyers per design.
            </p>
            <p className="text-white/70">
              For a broader look at how ratio choice affects your Etsy listings, see our{" "}
              <Link href="/2-3-vs-4-5-ratio" className="text-[#2DD4BF] hover:underline">
                2:3 vs 4:5 ratio guide
              </Link>
              {" "}or browse the full{" "}
              <Link href="/etsy-print-sizes" className="text-[#2DD4BF] hover:underline">
                Etsy print sizes reference
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* ===== LIFESTYLE IMAGE ===== */}
      <div className="px-4 md:px-8 max-w-5xl mx-auto pb-4">
        <div className="rounded-xl overflow-hidden border border-white/[0.08]">
          <img
            src="/assets/visuals/etsy-mid-century-modern-art-sizes-mockup.jpg"
            alt="Stylish mid-century modern living room with a large 18x24 geometric abstract print in ochre and teal flanked by two smaller atomic-age prints in slim walnut frames above a teak credenza"
            width={1200}
            height={800}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* ===== BEST-SELLING SIZES TABLE ===== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The 6 Best-Selling Mid Century Modern Print Sizes on Etsy
            </h2>
            <p className="text-white/70 mb-8">
              These are the sizes that appear most consistently in top-selling MCM listings.
              Your master file should be at least 7200×10800 px so it can be scaled down to
              every size below without quality loss.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-4 py-3 text-white/50 font-medium">Size</th>
                    <th className="text-left px-4 py-3 text-white/50 font-medium">Ratio</th>
                    <th className="text-left px-4 py-3 text-white/50 font-medium">Pixels @ 300 DPI</th>
                    <th className="text-left px-4 py-3 text-white/50 font-medium">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      size: "8×10",
                      ratio: "4:5",
                      px: "2400×3000",
                      note: "Starter size, IKEA Ribba frames",
                    },
                    {
                      size: "16×20",
                      ratio: "4:5",
                      px: "4800×6000",
                      note: "Statement piece, classic MCM poster scale",
                    },
                    {
                      size: "18×24",
                      ratio: "3:4",
                      px: "5400×7200",
                      note: "Travel poster dimensions — very MCM",
                    },
                    {
                      size: "12×18",
                      ratio: "2:3",
                      px: "3600×5400",
                      note: "Slim vertical, atomic age poster feel",
                    },
                    {
                      size: "24×36",
                      ratio: "2:3",
                      px: "7200×10800",
                      note: "Large format statement (Quick Export only)",
                    },
                    {
                      size: "A4 (ISO)",
                      ratio: "√2",
                      px: "2480×3508",
                      note: "European buyers, IKEA Hovsta frames",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                    >
                      <td className="px-4 py-3 font-mono font-bold text-[#E8D5A0]">
                        {row.size}
                      </td>
                      <td className="px-4 py-3 text-white/60">{row.ratio}</td>
                      <td className="px-4 py-3 font-mono text-white/80">{row.px}</td>
                      <td className="px-4 py-3 text-white/60">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-white/50 text-sm mt-4">
              All sizes output as 300 DPI JPEG. A3 (3508×4961 px) is also recommended for
              European buyers who prefer a larger ISO size.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 7 SUB-STYLES ===== */}
      <section className="py-14">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              7 Mid Century Sub-Styles and Their Ideal Frame Sizes
            </h2>
            <p className="text-white/70 mb-8">
              MCM is not a single aesthetic. Each sub-style has a natural size range that
              aligns with its visual weight and composition logic.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  style: "Atomic Age / Starburst",
                  sizes: "8×10, 16×20 (4:5) or square",
                  why: "Circular and radial compositions need breathing room. 4:5 frames preserve the geometry without crop risk.",
                },
                {
                  style: "Bauhaus Geometric",
                  sizes: "Any ratio — especially A4/A3",
                  why: "Strict geometric forms translate well at any size. A-series ISO sizes are particularly popular with European buyers.",
                },
                {
                  style: "Eames Era Abstract",
                  sizes: "18×24, 16×20",
                  why: "Organic shapes with bold ochre, rust, and mustard palettes need scale. 18×24 is the classic format for this sub-style.",
                },
                {
                  style: "Space Age / Sputnik",
                  sizes: "8×10, 5×7 gallery wall set",
                  why: "Orb and orbit motifs work well as a set of smaller coordinating prints in a gallery wall arrangement.",
                },
                {
                  style: "Danish Modern / Scandi MCM",
                  sizes: "A4, A3 (ISO series)",
                  why: "Muted palette, clean lines. Scandinavian buyers dominate this sub-niche and universally prefer ISO sizes.",
                },
                {
                  style: "MCM Landscape / Nature",
                  sizes: "16×24, 12×18 (2:3 vertical)",
                  why: "Stylized trees, mountains, and organic forms read best as tall vertical compositions in 2:3 ratio.",
                },
                {
                  style: "Typography MCM",
                  sizes: "8×10, 11×14",
                  why: "Bold sans-serif type with geometric accents. 4:5 ratio keeps text legible at standard frame sizes.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-5">
                  <p className="font-semibold text-white mb-1">{item.style}</p>
                  <p
                    className="text-xs font-mono mb-2"
                    style={{ color: "#2DD4BF" }}
                  >
                    {item.sizes}
                  </p>
                  <p className="text-sm text-white/60">{item.why}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CTA 2 — mid-page, gallery wall angle ===== */}
      <section className="py-10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card accent className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">
                  One MCM design → gallery wall set ready to list
                </p>
                <p className="text-sm text-white/60">
                  Upload your master file once. Get 30+ sizes across 2:3, 4:5, and ISO
                  packs — organized ZIPs, ready for Etsy in under 2 minutes.
                </p>
              </div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5 whitespace-nowrap">
                  Try Free
                </Button>
              </a>
            </Card>
          </div>
        </Container>
      </section>

      {/* ===== GALLERY WALL ===== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Gallery Wall Arrangements with Mid Century Modern Prints
            </h2>
            <p className="text-white/70 mb-5">
              MCM gallery walls differ from farmhouse or coastal walls. The aesthetic calls
              for <strong className="text-white">asymmetric groupings</strong> of 3–5 prints
              in mixed sizes — not a uniform grid. Varied heights and different ratios are
              part of the style, not an accident.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  label: "Classic MCM Set",
                  combo: "1× 18×24 + 2× 8×10 + 1× 5×7",
                  note: "Anchor + supporting + accent. The most popular MCM gallery wall pattern.",
                },
                {
                  label: "European / Scandi Set",
                  combo: "1× A3 + 2× A4 + 1× A5",
                  note: "Full ISO series. Loved by European buyers — fits standard IKEA frames.",
                },
                {
                  label: "Statement Wall",
                  combo: "1× 24×36 + 2× 16×20",
                  note: "Large format-first. Bold geometric MCM designs that demand scale.",
                },
              ].map((set, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 p-5 bg-white/[0.02]"
                >
                  <p
                    className="text-xs font-mono font-bold mb-2 uppercase tracking-widest"
                    style={{ color: "#A78BFA" }}
                  >
                    {set.label}
                  </p>
                  <p className="font-mono text-sm text-[#E8D5A0] font-bold mb-2">
                    {set.combo}
                  </p>
                  <p className="text-xs text-white/55">{set.note}</p>
                </div>
              ))}
            </div>

            <p className="text-white/70">
              Sellers who offer <strong className="text-white">gallery wall sets</strong>{" "}
              in their MCM listings consistently outperform single-size listings. By
              providing every size in the set, you let buyers purchase once and frame without
              any extra steps. See our{" "}
              <Link
                href="/etsy-gallery-wall-print-sizes"
                className="text-[#2DD4BF] hover:underline"
              >
                Etsy gallery wall print sizes guide
              </Link>{" "}
              for a full breakdown of combination strategies.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== COLOR PALETTES ===== */}
      <section className="py-14">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Color Palettes and Ratios That Define the Style
            </h2>
            <p className="text-white/70 mb-6">
              MCM palette choice directly affects which size sells. High-contrast geometric
              designs — ochre on charcoal, rust on cream — need at least 16×20 to read
              clearly. Muted Scandinavian MCM palettes (sage, slate, off-white) work well
              at smaller sizes like A5 or 8×10 for desk and shelf display.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  name: "Classic Bold",
                  colors: "Ochre + teal + charcoal",
                  bestSize: "16×20 and above",
                  hex: ["#C89628", "#2DD4BF", "#2A2A2A"],
                },
                {
                  name: "Atomic Warm",
                  colors: "Burnt orange + cream + black",
                  bestSize: "18×24, 12×18",
                  hex: ["#C2501E", "#F5EDD8", "#1A1A1A"],
                },
                {
                  name: "Scandi MCM",
                  colors: "Olive green + rust + off-white",
                  bestSize: "A4, A3, 8×10",
                  hex: ["#6B7C4A", "#A0522D", "#F0EDE6"],
                },
              ].map((palette, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 p-5 bg-white/[0.02]"
                >
                  <div className="flex gap-2 mb-3">
                    {palette.hex.map((h, j) => (
                      <div
                        key={j}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ background: h }}
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-white text-sm mb-1">{palette.name}</p>
                  <p className="text-xs text-white/55 mb-1">{palette.colors}</p>
                  <p
                    className="text-xs font-mono font-bold"
                    style={{ color: "#2DD4BF" }}
                  >
                    Best at: {palette.bestSize}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              Buyers searching "mid century modern art" on Etsy expect bold color — it
              differentiates MCM from farmhouse (neutral tones) and{" "}
              <Link
                href="/etsy-coastal-wall-art-sizes"
                className="text-[#2DD4BF] hover:underline"
              >
                coastal styles
              </Link>{" "}
              (soft blues and sandy whites).
            </p>
          </div>
        </Container>
      </section>

      {/* ===== PACKAGING / SNAPTOSIZE ===== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              How to Package Mid Century Modern Art for All Etsy Buyers
            </h2>
            <p className="text-white/70 mb-5">
              Here is the practical problem MCM sellers face: your buyers expect large
              statement sizes (18×24, 24×36) <em>and</em> classic sizes (8×10, 16×20){" "}
              <em>and</em> ISO sizes (A4, A3 for European buyers) — all from the same
              listing. That is 6–9 sizes per design.
            </p>
            <p className="text-white/70 mb-5">
              Done manually, resizing one design to all three size families takes 1–3 hours
              per design. A collection of 20 MCM designs means 20–60 hours of resize work
              before a single listing is ready.
            </p>
            <p className="text-white/70 mb-8">
              SnapToSize eliminates that. Upload your master high-resolution MCM file, select
              the 2:3 pack (poster sizes), the 4:5 pack (classic frames), and the ISO pack
              (European buyers), and download organized ZIPs ready for Etsy in under 2
              minutes. The output is 300 DPI, JPEG, under Etsy&rsquo;s 20MB file size limit.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "2:3 Ratio Pack",
                  sizes: "12×18, 16×24, 20×30 + more",
                  note: "Poster and slim vertical formats",
                },
                {
                  label: "4:5 Ratio Pack",
                  sizes: "8×10, 16×20, 24×30",
                  note: "Classic American frame sizes",
                },
                {
                  label: "ISO Pack",
                  sizes: "A5, A4, A3, A2, A1",
                  note: "European buyers — IKEA frame compatible",
                },
              ].map((pack, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 p-5 bg-white/[0.02]"
                >
                  <p
                    className="text-xs font-mono font-bold mb-2 uppercase tracking-widest"
                    style={{ color: "#A78BFA" }}
                  >
                    {pack.label}
                  </p>
                  <p className="font-mono text-sm text-[#E8D5A0] font-bold mb-1">
                    {pack.sizes}
                  </p>
                  <p className="text-xs text-white/55">{pack.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-10">
        <Container>
          <FinalCTA
            heading="One design. Every MCM size."
            stat="8×10, 16×20, 18×24, 24×36, A3, A2 — all from one upload."
            description="SnapToSize packages your mid century modern art into every standard size automatically. US frames, ISO frames, gallery walls — covered."
            buttonText="Try SnapToSize Free"
            appUrl={appUrl}
          />
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="py-12">
        <Container>
          <RelatedPages currentSlug="etsy-mid-century-modern-art-sizes" />
        </Container>
      </section>
    </>
  );
}
