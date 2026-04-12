import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Flower2, Info } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";

export const metadata: Metadata = {
  title: "Etsy Floral Print Sizes — What to Offer",
  description:
    "Complete guide to floral print sizes for Etsy sellers. Best sizes for roses, peonies, wildflowers, and vintage florals. All 5 ratio packs covered.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-floral-print-sizes",
  },
  openGraph: {
    title: "Etsy Floral Print Sizes — What to Offer",
    description:
      "Complete guide to floral print sizes for Etsy sellers. Best sizes for roses, peonies, wildflowers, and vintage florals. All 5 ratio packs covered.",
    url: "https://snaptosize.com/etsy-floral-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-floral-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Floral Print Sizes Guide",
      },
    ],
  },
};

const appUrl =
  "https://app.snaptosize.com?source=seo_etsy-floral-print-sizes&kind=guide";

const faqItems = [
  {
    question: "What is the best-selling floral print size on Etsy?",
    answer:
      "8×10 is the top seller overall, but floral art specifically over-indexes on 11×14 and 16×20 because buyers use floral prints as bedroom and living room focal points. Offering all three — plus 8×12 for wildflowers — covers the majority of buyer intent.",
  },
  {
    question: "Should floral prints be portrait or landscape orientation?",
    answer:
      "Portrait (vertical) dominates floral art. Roses, wildflower stems, and botanical compositions are naturally tall. Always offer portrait as your primary format. Add landscape as a secondary option for buyers who need horizontal art above sofas or in wide frames.",
  },
  {
    question: "What size should I use for a rose print on Etsy?",
    answer:
      "8×10 and 11×14 are the most popular frames for rose art. If your composition shows a full stem or arrangement, also offer 8×12 and 12×18 in the 2:3 ratio pack. These tall formats suit roses displayed at eye level on gallery walls.",
  },
  {
    question:
      "Do wildflower prints need different sizes than rose or peony prints?",
    answer:
      "Yes. Wildflower illustrations typically suit tall 2:3 formats (8×12, 12×18, 16×24) because of vertical stem compositions. Rose and peony art fits better in 4:5 (8×10, 16×20) and 3:4 (12×16) formats. Offering both packs ensures you cover both sub-niches.",
  },
  {
    question: "Should I offer A4 for floral prints?",
    answer:
      "Yes — especially for vintage floral and pressed flower art. European buyers in the UK, Germany, France, and Netherlands use A4 and A3 frames as standard. The ISO pack (A5, A4, A3, A2, A1) covers all A-series sizes from one upload.",
  },
  {
    question: "How many sizes should a floral print listing include?",
    answer:
      "Aim for 20–30+ sizes across all major ratios. Buyers filter by the frame they already own — the more sizes you cover, the more buyers you match. SnapToSize generates all 5 ratio packs (28 total sizes) plus extras like 5×7 and 11×14 from a single upload.",
  },
  {
    question: "Can I offer square floral prints on Etsy?",
    answer:
      "Yes. Single-stem and abstract floral compositions work well as squares (5×5, 8×8, 10×10). These sizes are available via Quick Export, not in the ratio packs. They suit contemporary interiors and Instagram-style frame arrangements.",
  },
  {
    question:
      "What's the difference between floral and botanical prints on Etsy?",
    answer:
      "Floral art is decorative and romantic — watercolor roses, peony illustrations, wildflower washes. Botanical art is scientific and illustrative — labeled species diagrams, precise studies with Latin names. The sub-niches overlap in some sizes (8×10, A4) but diverge in orientation and framing preferences. See our botanical print sizes guide for illustration-focused sizing.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Etsy Floral Print Sizes — What Sizes to Offer",
      description:
        "Complete guide to floral print sizes for Etsy sellers. Best sizes for roses, peonies, wildflowers, and vintage florals across all 5 ratio packs.",
      url: "https://snaptosize.com/etsy-floral-print-sizes",
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
      datePublished: "2026-04-12",
      dateModified: "2026-04-12",
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
          name: "Floral Print Sizes",
          item: "https://snaptosize.com/etsy-floral-print-sizes",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function EtsyFloralPrintSizesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── CSS-only Hero ─── */}
      <style>{`
        .floral-hero {
          position: relative;
          background: linear-gradient(135deg, #0d0818 0%, #150d24 40%, #0a1a14 100%);
          overflow: hidden;
          padding: 5rem 1rem 4rem;
        }
        /* Soft glow orbs */
        .floral-hero::before {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-60%);
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .floral-hero::after {
          content: '';
          position: absolute;
          bottom: -60px;
          right: 8%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(45,212,191,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        /* Petal silhouettes — pure CSS circles + rotated ellipses */
        .petal-cluster {
          position: absolute;
          top: 10%;
          right: 4%;
          width: 220px;
          height: 220px;
          pointer-events: none;
          opacity: 0.22;
        }
        .petal {
          position: absolute;
          border-radius: 50% 5% 50% 5%;
          background: linear-gradient(135deg, #e879a6 0%, #a78bfa 100%);
        }
        .petal:nth-child(1) { width:70px; height:110px; top:30px; left:70px; transform: rotate(0deg); }
        .petal:nth-child(2) { width:70px; height:110px; top:30px; left:70px; transform: rotate(45deg); }
        .petal:nth-child(3) { width:70px; height:110px; top:30px; left:70px; transform: rotate(90deg); }
        .petal:nth-child(4) { width:70px; height:110px; top:30px; left:70px; transform: rotate(135deg); }
        .petal:nth-child(5) { width:70px; height:110px; top:30px; left:70px; transform: rotate(180deg); }
        .petal-center {
          position: absolute;
          width: 32px; height: 32px;
          border-radius: 50%;
          background: radial-gradient(circle, #fde68a 0%, #f59e0b 100%);
          top: 60px; left: 94px;
        }
        /* Second smaller petal cluster bottom-left */
        .petal-cluster-2 {
          position: absolute;
          bottom: 8%;
          left: 3%;
          width: 140px;
          height: 140px;
          pointer-events: none;
          opacity: 0.14;
        }
        .petal-cluster-2 .petal {
          width: 44px; height: 68px;
          top: 18px; left: 44px;
          background: linear-gradient(135deg, #2dd4bf 0%, #818cf8 100%);
        }
        .petal-cluster-2 .petal:nth-child(2) { transform: rotate(60deg); }
        .petal-cluster-2 .petal:nth-child(3) { transform: rotate(120deg); }
        .petal-cluster-2 .petal:nth-child(4) { transform: rotate(180deg); }
        .petal-cluster-2 .petal:nth-child(5) { transform: rotate(240deg); }
        .petal-cluster-2 .petal:nth-child(6) { transform: rotate(300deg); }
        /* Size frames */
        .hero-frames {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          justify-content: center;
          margin: 2rem 0 0;
        }
        .hero-frame {
          border: 1.5px solid rgba(167,139,250,0.55);
          border-radius: 3px;
          background: rgba(167,139,250,0.07);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 6px;
          position: relative;
        }
        .hero-frame-label {
          font-size: 10px;
          color: rgba(167,139,250,0.85);
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .hero-frame-dpi {
          font-size: 8px;
          color: rgba(45,212,191,0.7);
          font-weight: 500;
          margin-top: 2px;
        }
        /* Individual frame proportions */
        .frame-5x7   { width: 52px;  height: 72px; }
        .frame-8x10  { width: 68px;  height: 86px; }
        .frame-11x14 { width: 74px;  height: 94px; }
        .frame-16x20 { width: 86px;  height: 108px; }
        .frame-8x12  { width: 58px;  height: 88px; border-color: rgba(45,212,191,0.55); background: rgba(45,212,191,0.07); }
        .frame-8x12 .hero-frame-label { color: rgba(45,212,191,0.85); }
        @media (max-width: 480px) {
          .hero-frames { gap: 6px; }
          .frame-5x7   { width: 38px; height: 52px; }
          .frame-8x10  { width: 52px; height: 66px; }
          .frame-11x14 { width: 58px; height: 74px; }
          .frame-16x20 { width: 66px; height: 82px; }
          .frame-8x12  { width: 44px; height: 68px; }
          .petal-cluster { display: none; }
          .petal-cluster-2 { display: none; }
        }
      `}</style>

      <section className="floral-hero" aria-label="Page header">
        {/* Decorative petal clusters */}
        <div className="petal-cluster" aria-hidden="true">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal-center"></div>
        </div>
        <div className="petal-cluster-2" aria-hidden="true">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>

        <Container>
          <div className="relative z-10 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-slate-200 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-600">/</li>
                <li>
                  <Link href="/etsy-print-sizes" className="hover:text-slate-200 transition-colors">
                    Etsy Print Sizes
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-600">/</li>
                <li className="text-slate-300">Floral Print Sizes</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-sm font-medium mb-5">
              <Flower2 className="w-4 h-4" />
              Floral Seller Guide
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Etsy Floral Print Sizes —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                What to Offer by Sub-Niche
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
              Roses, peonies, wildflowers, vintage botanicals — each floral sub-niche
              has different size expectations. Here is exactly what sizes to offer
              and which ratio packs cover them.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-sm">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Check className="w-4 h-4 text-teal-400" />
                Up to 70 print-ready files
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Check className="w-4 h-4 text-teal-400" />
                All 5 ratio packs
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Check className="w-4 h-4 text-teal-400" />
                Portrait &amp; landscape
              </span>
            </div>

            {/* CSS size frames */}
            <div className="hero-frames" aria-hidden="true">
              <div className="hero-frame frame-5x7">
                <span className="hero-frame-label">5×7</span>
                <span className="hero-frame-dpi">300 DPI</span>
              </div>
              <div className="hero-frame frame-8x10">
                <span className="hero-frame-label">8×10</span>
                <span className="hero-frame-dpi">300 DPI</span>
              </div>
              <div className="hero-frame frame-8x12">
                <span className="hero-frame-label">8×12</span>
                <span className="hero-frame-dpi">300 DPI</span>
              </div>
              <div className="hero-frame frame-11x14">
                <span className="hero-frame-label">11×14</span>
                <span className="hero-frame-dpi">300 DPI</span>
              </div>
              <div className="hero-frame frame-16x20">
                <span className="hero-frame-label">16×20</span>
                <span className="hero-frame-dpi">300 DPI</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">

            {/* QuickAnswer */}
            <QuickAnswer question="What print sizes should I offer for floral wall art on Etsy?">
              The core floral sizes are 5×7, 8×10, 11×14, and 16×20. Romantic sub-niches (peonies, roses)
              over-index on 8×10 and 11×14. Wildflower and garden art sells in tall 2:3 formats (8×12, 12×18).
              Vintage florals perform well in A4 and A3 for European buyers. Use all 5 ratio packs to cover
              every buyer&apos;s frame.
            </QuickAnswer>

            {/* H2 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Floral Print Sizing Is Different from Other Art Niches
              </h2>
              <p className="text-slate-300 mb-4">
                Floral art is the largest decorative sub-niche on Etsy — but it is not
                one niche. Roses, peonies, wildflowers, pressed botanicals, and vintage
                floral illustrations each attract buyers with different frames in
                different rooms. A wildflower stem print suited to a 12×18 narrow frame
                does not fit a 16×20 canvas. A vintage A4 botanical fails to print
                cleanly at 8×10.
              </p>
              <p className="text-slate-300 mb-4">
                This is the core sizing challenge for floral sellers: your sub-niche
                composition determines the best ratios, and offering the wrong sizes
                means buyers leave to find a seller who has their frame size covered.
                Sellers who offer one or two sizes are leaving a significant share of
                organic traffic unmatched.
              </p>
              <p className="text-slate-300">
                The good news: once you understand which ratio packs align to which
                floral styles, you can{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  cover every ratio
                </Link>{" "}
                from a single original upload. No manual resizing per size.
              </p>
            </div>

            {/* H2 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                The 7 Must-Have Sizes for Floral Prints on Etsy
              </h2>
              <p className="text-slate-300 mb-5">
                These are the sizes where buyer demand is strongest across all floral
                sub-niches. Start here if you are new to floral art, or use this as a
                checklist if you are expanding an existing shop.
              </p>

              <div className="overflow-x-auto rounded-lg border border-slate-700 mb-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-slate-300 text-left">
                      <th className="px-4 py-3 font-semibold">Size</th>
                      <th className="px-4 py-3 font-semibold">Pixels (300 DPI)</th>
                      <th className="px-4 py-3 font-semibold">Ratio Pack</th>
                      <th className="px-4 py-3 font-semibold">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {[
                      { size: "5×7\"", px: "1500×2100", pack: "Extras", best: "Small frames, desk art" },
                      { size: "8×10\"", px: "2400×3000", pack: "4:5 Ratio", best: "Rose, peony, bedroom art" },
                      { size: "8×12\"", px: "2400×3600", pack: "2:3 Ratio", best: "Wildflower stems, tall compositions" },
                      { size: "11×14\"", px: "3300×4200", pack: "Extras", best: "Gallery wall focal point" },
                      { size: "12×18\"", px: "3600×5400", pack: "2:3 Ratio", best: "Large wildflower, statement art" },
                      { size: "16×20\"", px: "4800×6000", pack: "4:5 Ratio", best: "Living room statement, peony art" },
                      { size: "A4", px: "2480×3508", pack: "ISO A-Series", best: "European buyers, vintage florals" },
                    ].map(({ size, px, pack, best }) => (
                      <tr key={size} className="text-slate-300 hover:bg-slate-800/50">
                        <td className="px-4 py-3 font-mono font-semibold text-white">{size}</td>
                        <td className="px-4 py-3 text-slate-400 font-mono">{px}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 text-xs font-medium">
                            {pack}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-400">{best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-slate-400 text-sm">
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  8×10 size details and pixel dimensions
                </Link>{" "}
                ·{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  11×14 — the gallery wall sweet spot
                </Link>{" "}
                ·{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  16×20 for statement pieces
                </Link>
              </p>
            </div>

            {/* H2 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Floral Sub-Niches and Their Best-Performing Sizes
              </h2>
              <p className="text-slate-300 mb-5">
                Not all floral art is the same. Each sub-niche attracts buyers with
                specific frame preferences. Here is the breakdown:
              </p>

              <div className="space-y-4">
                {[
                  {
                    niche: "Watercolor florals (roses, peonies, ranunculus)",
                    sizes: "8×10, 11×14, 16×20",
                    packs: "4:5 and 3:4",
                    note: "Portrait dominant. Romantic bedroom and bathroom art. See our watercolor print sizes guide for depth on this sub-niche.",
                    link: { href: "/etsy-watercolor-print-sizes", text: "watercolor print sizes guide" },
                  },
                  {
                    niche: "Wildflower & meadow prints",
                    sizes: "8×12, 12×18, 16×24",
                    packs: "2:3 Ratio",
                    note: "Tall stems need tall formats. A3 is also strong for EU buyers.",
                  },
                  {
                    niche: "Pressed botanical / dried flower art",
                    sizes: "5×7, 8×10, A4",
                    packs: "Extras + ISO A-Series",
                    note: "Vintage and cottagecore buyers. ISO pack is essential for A4 demand.",
                  },
                  {
                    niche: "Abstract floral (loose washes, single stem, gestural)",
                    sizes: "8×10, 16×20, 8×8 square",
                    packs: "4:5 Ratio + Quick Export squares",
                    note: "Contemporary interiors. Square sizes available via Quick Export.",
                    link: { href: "/etsy-abstract-wall-art-sizes", text: "abstract wall art sizes" },
                  },
                  {
                    niche: "Vintage / antique floral illustrations",
                    sizes: "A4, A3, 8×10, 11×14",
                    packs: "ISO A-Series + Extras",
                    note: "Strong European buyer pull. ISO pack is the hero here.",
                  },
                  {
                    niche: "Garden & botanical realism (tulips, sunflowers, lavender)",
                    sizes: "8×10, 12×18, 16×20",
                    packs: "2:3 and 4:5",
                    note: "Overlaps with botanical illustration but stays decorative. See our botanical print sizes guide for the illustration side.",
                    link: { href: "/etsy-botanical-print-sizes", text: "botanical print sizes guide" },
                  },
                ].map(({ niche, sizes, packs, note, link }) => (
                  <div
                    key={niche}
                    className="rounded-lg border border-slate-700 bg-slate-800/40 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Flower2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-white text-sm mb-1">{niche}</p>
                        <p className="text-slate-400 text-sm mb-1">
                          <span className="text-teal-400 font-medium">{sizes}</span>
                          {" · "}
                          <span className="text-purple-300 text-xs">{packs}</span>
                        </p>
                        <p className="text-slate-400 text-sm">
                          {link
                            ? note.replace(link.text, "").split("See our")[0]
                            : note}
                          {link && (
                            <>
                              {"See our "}
                              <Link
                                href={link.href}
                                className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                              >
                                {link.text}
                              </Link>
                              {note.includes("See our " + link.text)
                                ? note.split("See our " + link.text)[1]
                                : ""}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ListingOutputShowcase */}
            <ListingOutputShowcase artwork="floral_vase" />

            {/* H2 4 — Ratio Packs */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Ratio Packs for Floral Art — Which Ratios Matter Most
              </h2>
              <p className="text-slate-300 mb-4">
                SnapToSize organizes sizes into 5 ratio packs. For floral sellers,
                each pack serves a different buyer segment:
              </p>

              <ul className="space-y-3 mb-5">
                {[
                  {
                    pack: "2:3 Ratio Pack",
                    sizes: "4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30",
                    use: "Wildflower stems, tall garden compositions, large statement art",
                  },
                  {
                    pack: "3:4 Ratio Pack",
                    sizes: "6×8, 9×12, 12×16, 15×20, 18×24",
                    use: "Peony and rose portraits, classic bedroom art",
                  },
                  {
                    pack: "4:5 Ratio Pack",
                    sizes: "8×10, 12×15, 16×20, 20×25, 24×30",
                    use: "Most popular floral frames — 8×10 and 16×20 are the core",
                  },
                  {
                    pack: "ISO A-Series Pack",
                    sizes: "A5, A4, A3, A2, A1",
                    use: "European buyers — essential for vintage florals and pressed flower art",
                  },
                  {
                    pack: "Extras",
                    sizes: "5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24",
                    use: "Gallery wall sizes — 5×7 and 11×14 are heavy hitters for floral",
                  },
                ].map(({ pack, sizes, use }) => (
                  <li key={pack} className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">{pack}</span>
                      <span className="text-slate-400 text-sm"> — {sizes}</span>
                      <p className="text-slate-400 text-sm mt-0.5">{use}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-slate-400 text-sm">
                Learn more about{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  how print ratios work and which ratios cover which sizes
                </Link>
                .
              </p>
            </div>

            {/* CTA 1 — Coverage angle */}
            <Card accent>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">
                    Every floral size your buyers need — from 5×7 to 24×36 — across all 5 ratio packs.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Upload once, download everything. No manual resizing per size.
                  </p>
                </div>
                <a
                  href="https://app.snaptosize.com?source=seo_etsy-floral-print-sizes&kind=packs"
                  className="shrink-0"
                >
                  <Button variant="primary">Generate All Sizes</Button>
                </a>
              </div>
            </Card>

            {/* H2 5 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Common Sizing Mistakes Floral Sellers Make
              </h2>

              <div className="space-y-3">
                {[
                  {
                    mistake: "Offering only 8×10 and 11×14",
                    fix: "These are the most popular, but wildflower buyers specifically need 2:3 tall formats (8×12, 12×18). Missing these loses a significant slice of organic traffic.",
                  },
                  {
                    mistake: "Skipping the ISO pack entirely",
                    fix: "A meaningful portion of Etsy buyers are in the UK, Germany, France, and Netherlands — and they use A4 frames. Without the ISO pack, you are invisible to European buyers searching for vintage floral prints.",
                  },
                  {
                    mistake: "Treating all floral art as portrait",
                    fix: "Abstract and contemporary floral buyers sometimes want landscape and square options. Horizontal art above sofas is a real use case — offer at least one landscape size per composition.",
                  },
                  {
                    mistake: "Uploading a low-resolution file and scaling up",
                    fix: "SnapToSize uses stretch-only resizing (no cropping, no padding) at 300 DPI. If your source file is under 3000px on the short side, some sizes will print below 300 DPI. Start with a file that is at least 3600px on its short side.",
                  },
                  {
                    mistake: "One listing with one size",
                    fix: "Buyers filter by frame size they already own. A listing that offers 20+ sizes appears in more search results than a listing offering one or two. See how many sizes to include for guidance.",
                    link: { href: "/how-many-sizes-etsy-printable", text: "how many sizes to include" },
                  },
                ].map(({ mistake, fix, link }) => (
                  <div
                    key={mistake}
                    className="rounded-lg border border-amber-500/25 bg-amber-500/5 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-200 text-sm mb-1">{mistake}</p>
                        <p className="text-slate-400 text-sm">
                          {link
                            ? fix.replace(link.text, "").split(link.text)[0]
                            : fix}
                          {link && (
                            <>
                              <Link
                                href={link.href}
                                className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                              >
                                {link.text}
                              </Link>
                              {fix.split(link.text)[1] || ""}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* H2 6 — Gallery Wall Sets */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Gallery Wall Sets with Floral Art — Size Strategy
              </h2>
              <p className="text-slate-300 mb-4">
                Gallery walls are one of the top uses for floral prints on Etsy.
                Buyers looking for a 3-print or 5-print floral set need consistent
                sizing so frames line up correctly. The most common gallery wall
                formats for floral art are:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                {[
                  {
                    set: "Triptych (3-print set)",
                    sizes: "3× 8×10 or 3× 5×7",
                    note: "Matching sizes in a horizontal row — popular for bedroom walls",
                  },
                  {
                    set: "Mixed-size gallery wall",
                    sizes: "16×20 center + 2× 8×10 flanking",
                    note: "Statement floral as anchor, smaller prints framing it",
                  },
                  {
                    set: "Botanical grid",
                    sizes: "4× 5×7 or 4× 8×10",
                    note: "Four matching pressed florals in a square grid — cottagecore style",
                  },
                  {
                    set: "Tall narrow wall",
                    sizes: "3× 8×12 in a vertical column",
                    note: "Perfect for wildflower stems — uses the 2:3 ratio pack",
                  },
                ].map(({ set, sizes, note }) => (
                  <div
                    key={set}
                    className="rounded-lg border border-slate-700 bg-slate-800/40 p-4"
                  >
                    <p className="font-semibold text-white text-sm mb-1">{set}</p>
                    <p className="text-teal-400 text-sm font-mono mb-1">{sizes}</p>
                    <p className="text-slate-400 text-sm">{note}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-400 text-sm">
                <Link
                  href="/etsy-gallery-wall-print-sizes"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  Complete gallery wall size strategy
                </Link>{" "}
                — floral prints are one of the top gallery wall categories on Etsy.
              </p>
            </div>

            {/* CTA 2 — Volume/set angle */}
            <Card accent>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">
                    Selling a 3-print floral set? Generate every size option for the entire set from one upload.
                  </p>
                  <p className="text-slate-400 text-sm">
                    No manual resizing per piece — upload each artwork, download organized ZIPs for all sizes.
                  </p>
                </div>
                <a
                  href="https://app.snaptosize.com?source=seo_etsy-floral-print-sizes&kind=gallery"
                  className="shrink-0"
                >
                  <Button variant="primary">Start Resizing</Button>
                </a>
              </div>
            </Card>

            {/* H2 7 — Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Resolution Requirements for Floral Prints
              </h2>
              <p className="text-slate-300 mb-4">
                All print sizes need to be 300 DPI at the final print dimensions.
                That means your source file must be large enough to produce 300 DPI
                output at the largest size you offer. For a 16×20 print, your source
                needs to be at least 4800×6000 pixels.
              </p>

              <div className="rounded-lg border border-slate-700 bg-slate-800/40 p-5 mb-4">
                <p className="font-semibold text-white mb-3 text-sm">Minimum source file size by output:</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex justify-between">
                    <span>Up to 8×10 output</span>
                    <span className="text-teal-400 font-mono">2400×3000 px minimum</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Up to 12×18 output</span>
                    <span className="text-teal-400 font-mono">3600×5400 px minimum</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Up to 16×20 output</span>
                    <span className="text-teal-400 font-mono">4800×6000 px minimum</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Up to 24×30 output</span>
                    <span className="text-teal-400 font-mono">7200×9000 px minimum</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-300 text-sm">
                SnapToSize uses Lanczos resampling for stretch-only resizing — no cropping,
                no padding, no black bars. Your floral composition stays intact at every size.
                Learn more in our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  300 DPI resolution guide for Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* H2 8 — Generate All Sizes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                How to Generate All Floral Print Sizes from One Upload
              </h2>
              <p className="text-slate-300 mb-4">
                The traditional workflow: resize each size manually in Photoshop or
                Canva — one export per size, per file, per artwork. For a floral seller
                offering 25 sizes across 5 ratio packs, that is 2–3 hours of export
                work per piece.
              </p>
              <p className="text-slate-300 mb-5">
                SnapToSize cuts that to under a minute:
              </p>

              <ol className="space-y-3 mb-5">
                {[
                  "Upload your floral artwork (PNG or JPG, 300 DPI source file)",
                  "Select the ratio packs you want — 2:3, 3:4, 4:5, ISO, Extras, or all five",
                  "SnapToSize generates all sizes at 300 DPI using Lanczos resampling",
                  "Download organized ZIP files — one ZIP per ratio pack, files named by size",
                  "Upload ZIPs directly to your Etsy listing",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-slate-300 text-sm">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="rounded-lg border border-slate-700 bg-slate-800/40 p-4 mb-4 text-sm text-slate-400">
                <p className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Free plan:</strong> 5 quick exports + 2 ratio packs per day (watermarked).{" "}
                    <strong className="text-slate-200">Pro plan:</strong> unlimited uploads, all 5 packs, no watermark.
                    See{" "}
                    <Link href="/pricing" className="text-teal-400 hover:text-teal-300 underline underline-offset-2">
                      pricing
                    </Link>
                    .
                  </span>
                </p>
              </div>

              <p className="text-slate-400 text-sm">
                Need to understand file setup first? See{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  what files to include in your Etsy digital download
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  how to stay within Etsy&apos;s 20MB file limit
                </Link>
                .
              </p>
            </div>

            {/* CTA 3 — FinalCTA (time-saving angle) */}
            <FinalCTA
              heading="One Upload. Every Floral Size."
              stat="Up to 70 print-ready files from one upload"
              description="Upload your floral artwork and receive all 5 ratio packs at 300 DPI — organized ZIPs, ready for your Etsy listing in under a minute."
              buttonText="Generate All Sizes Free"
              appUrl="https://app.snaptosize.com?source=seo_etsy-floral-print-sizes&kind=cta"
            />

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* Email Capture */}
            <EmailCaptureSection />

            {/* Related Pages */}
            <RelatedPages currentSlug="etsy-floral-print-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
