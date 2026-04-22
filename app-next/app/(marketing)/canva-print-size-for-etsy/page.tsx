import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";
import RelatedPages from "@/components/RelatedPages";
import { Check, ArrowRight, AlertTriangle, FileDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Canva Print Size for Etsy — DPI, Dimensions, Workflow",
  description:
    "Exact Canva canvas sizes for Etsy printables, the 96 vs 300 DPI export trap, and how to turn one Canva file into every Etsy ratio pack automatically.",
  alternates: { canonical: "https://snaptosize.com/canva-print-size-for-etsy" },
  openGraph: {
    title: "Canva Print Size for Etsy — DPI, Dimensions, Workflow",
    description:
      "Canva canvas sizes for Etsy printables, the 96 vs 300 DPI export trap, and how to turn one Canva file into every Etsy ratio pack automatically.",
    url: "https://snaptosize.com/canva-print-size-for-etsy",
    images: [
      {
        url: "/assets/og/canva-print-size-for-etsy.png",
        width: 1200,
        height: 630,
        alt: "Canva Print Size for Etsy — canvas dimensions, DPI, and ratio-pack workflow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canva Print Size for Etsy — DPI, Dimensions, Workflow",
    description:
      "Canva canvas sizes for Etsy printables, the 96 vs 300 DPI export trap, and how to turn one Canva file into every Etsy ratio pack automatically.",
    images: ["/assets/og/canva-print-size-for-etsy.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Canva Print Size for Etsy: Canvas Dimensions, DPI, and Full Workflow",
      description:
        "Exact Canva canvas dimensions for Etsy printable wall art, the 96 vs 300 DPI export trap, and how to finish the job Canva can't with automatic all-ratio export.",
      url: "https://snaptosize.com/canva-print-size-for-etsy",
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
        { "@type": "ListItem", position: 3, name: "Canva Print Size for Etsy", item: "https://snaptosize.com/canva-print-size-for-etsy" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What size canvas should I use in Canva for Etsy printables?", acceptedAnswer: { "@type": "Answer", text: "Start with a 4800×6000 pixel custom canvas in Canva — this is a 4:5 master at 300 DPI (16×20 in) that scales down cleanly to 8×10, 11×14, and other 4:5 sizes. For 2:3 Etsy prints, use 4800×7200 px (16×24 in). For A-series (ISO), use 3508×4961 px (A3 at 300 DPI). Always export as PDF Print for true 300 DPI." } },
        { "@type": "Question", name: "Is Canva 300 DPI by default?", acceptedAnswer: { "@type": "Answer", text: "Not directly. Canva PNG/JPG exports don't embed a print DPI — they're raster files sized in pixels. If your canvas is small (e.g., 1080×1350 px), a 16×20 print from that file comes out pixelated regardless of what PDF reader says the DPI is. For guaranteed 300 DPI output, export as PDF Print (all plans) or design at full pixel dimensions (4800×6000 px for 16×20). Canva Pro offers higher-resolution PNG/JPG export, which is how sellers effectively get 300 DPI rasters." } },
        { "@type": "Question", name: "Can you make all Etsy print sizes in Canva?", acceptedAnswer: { "@type": "Answer", text: "Not efficiently. Canva uses a single fixed canvas per design — you'd need to duplicate and resize the design for every ratio (2:3, 3:4, 4:5, ISO), which multiplies your work. Most sellers design once in Canva at a 4:5 master, then use a sizing tool like SnapToSize to auto-generate the rest." } },
        { "@type": "Question", name: "What DPI does Canva export PNG at?", acceptedAnswer: { "@type": "Answer", text: "Canva PNG/JPG exports aren't tagged with a print DPI — they're pixel rasters. Canva Free exports at canvas pixel dimensions (capped ~8000 px per side); Canva Pro offers a higher-resolution slider that lets you export PNG at larger pixel counts, which is how sellers achieve 300 DPI effectively. For guaranteed 300 DPI labelled output, use PDF Print export — available on all plans." } },
        { "@type": "Question", name: "Can I sell Canva designs on Etsy?", acceptedAnswer: { "@type": "Answer", text: "Yes, if the design is your own creation. Canva's content license allows selling finished designs, but you cannot resell Canva's stock templates or elements as-is. Your own illustrations, quotes, or layouts made in Canva are fine to sell as printables." } },
        { "@type": "Question", name: "Why do my Canva prints look pixelated when buyers print them?", acceptedAnswer: { "@type": "Answer", text: "Two common causes: (1) you exported as PNG at 96 DPI instead of PDF Print at 300 DPI; (2) your Canva canvas was too small — if you designed at 2000×2500 px and a buyer prints at 16×20, that's only 125 DPI, which looks fuzzy. Always design at minimum 4800×6000 px for 16×20 prints." } },
        { "@type": "Question", name: "Can Canva create all 5 ratio packs automatically for Etsy?", acceptedAnswer: { "@type": "Answer", text: "Not in a way that works for Etsy ratio-pack sellers. Canva Sheets Bulk Resize exists but tops out at 5 output sizes per run and requires you to pre-list every size manually — and Magic Resize (Pro) handles canvas-ratio changes but not batch per-size export. For a true one-click all-ratio workflow, you still need to manually duplicate for 2:3, 3:4, 4:5, and ISO. SnapToSize takes a single Canva PDF Print export and generates every ratio pack automatically in one upload." } },
        { "@type": "Question", name: "What's the Canva PDF Print export size limit for Etsy?", acceptedAnswer: { "@type": "Answer", text: "Canva PDF Print exports have no hard size limit, but Etsy listings cap each file at 20MB. A Canva PDF at 300 DPI for a 24×36 print can easily exceed 20MB — export to JPEG at 90% quality, or use a sizing tool that auto-compresses to stay under the Etsy limit." } }
      ],
    },
  ],
};

const faqItems = [
  { question: "What size canvas should I use in Canva for Etsy printables?", answer: "Start with a 4800×6000 pixel custom canvas in Canva — this is a 4:5 master at 300 DPI (16×20 in) that scales down cleanly to 8×10, 11×14, and other 4:5 sizes. For 2:3 Etsy prints, use 4800×7200 px (16×24 in). For A-series (ISO), use 3508×4961 px (A3 at 300 DPI). Always export as PDF Print for true 300 DPI." },
  { question: "Is Canva 300 DPI by default?", answer: "Not directly. Canva PNG/JPG exports don't embed a print DPI — they're raster files sized in pixels. If your canvas is small (e.g., 1080×1350 px), a 16×20 print from that file comes out pixelated regardless of what PDF reader says the DPI is. For guaranteed 300 DPI output, export as PDF Print (all plans) or design at full pixel dimensions (4800×6000 px for 16×20). Canva Pro offers higher-resolution PNG/JPG export, which is how sellers effectively get 300 DPI rasters." },
  { question: "Can you make all Etsy print sizes in Canva?", answer: "Not efficiently. Canva uses a single fixed canvas per design — you'd need to duplicate and resize the design for every ratio (2:3, 3:4, 4:5, ISO), which multiplies your work. Most sellers design once in Canva at a 4:5 master, then use a sizing tool like SnapToSize to auto-generate the rest." },
  { question: "What DPI does Canva export PNG at?", answer: "Canva PNG/JPG exports aren't tagged with a print DPI — they're pixel rasters. Canva Free exports at canvas pixel dimensions (capped ~8000 px per side); Canva Pro offers a higher-resolution slider that lets you export PNG at larger pixel counts, which is how sellers achieve 300 DPI effectively. For guaranteed 300 DPI labelled output, use PDF Print export — available on all plans." },
  { question: "Can I sell Canva designs on Etsy?", answer: "Yes, if the design is your own creation. Canva's content license allows selling finished designs, but you cannot resell Canva's stock templates or elements as-is. Your own illustrations, quotes, or layouts made in Canva are fine to sell as printables." },
  { question: "Why do my Canva prints look pixelated when buyers print them?", answer: "Two common causes: (1) you exported as PNG at 96 DPI instead of PDF Print at 300 DPI; (2) your Canva canvas was too small — if you designed at 2000×2500 px and a buyer prints at 16×20, that's only 125 DPI, which looks fuzzy. Always design at minimum 4800×6000 px for 16×20 prints." },
  { question: "Can Canva create all 5 ratio packs automatically for Etsy?", answer: "Not in a way that works for Etsy ratio-pack sellers. Canva Sheets Bulk Resize exists but tops out at 5 output sizes per run and requires you to pre-list every size manually — and Magic Resize (Pro) handles canvas-ratio changes but not batch per-size export. For a true one-click all-ratio workflow, you still need to manually duplicate for 2:3, 3:4, 4:5, and ISO. SnapToSize takes a single Canva PDF Print export and generates every ratio pack automatically in one upload." },
  { question: "What's the Canva PDF Print export size limit for Etsy?", answer: "Canva PDF Print exports have no hard size limit, but Etsy listings cap each file at 20MB. A Canva PDF at 300 DPI for a 24×36 print can easily exceed 20MB — export to JPEG at 90% quality, or use a sizing tool that auto-compresses to stay under the Etsy limit." },
];

const appUrl = "https://app.snaptosize.com?source=seo_canva-print-size-for-etsy&kind=tool-bridge";

export default function CanvaPrintSizeForEtsyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO — Canva-to-Etsy workflow diagram ===== */}
      <section
        className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0c1016 0%, #131a28 35%, #1a1530 70%, #120d1f 100%)",
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(#7c65ff33 1px, transparent 1px), linear-gradient(90deg, #7c65ff33 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
        {/* Violet blob top-right (Canva-adjacent) */}
        <div
          className="absolute top-[-18%] right-[-8%] w-[600px] h-[600px] rounded-full opacity-[0.22]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
        />
        {/* Teal blob bottom-left (SnapToSize) */}
        <div
          className="absolute bottom-[-22%] left-[-10%] w-[560px] h-[560px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle, #2dd4bf, transparent 70%)" }}
        />

        {/* CSS-only Canva → Ratio-Pack diagram */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative" style={{ width: "420px", height: "320px" }}>
            {/* Canva canvas (left) */}
            <div
              className="absolute"
              style={{
                top: "60px",
                left: "0",
                width: "170px",
                height: "210px",
                background: "linear-gradient(140deg, #1e1a3a 0%, #261d45 100%)",
                border: "2px solid rgba(167,139,250,0.55)",
                borderRadius: "8px",
                boxShadow: "0 18px 40px -18px rgba(167,139,250,0.5)",
              }}
            >
              <div
                className="absolute top-2 left-2 right-2 flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider"
                style={{ color: "#c4b5fd" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="ml-auto">Canva</span>
              </div>
              <div className="absolute inset-4 top-8 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-24 h-28 rounded-sm mx-auto mb-2"
                    style={{
                      background: "linear-gradient(160deg, #f0abfc 0%, #c4b5fd 100%)",
                      boxShadow: "inset 0 0 20px rgba(255,255,255,0.3)",
                    }}
                  />
                  <div className="text-[9px] font-mono tracking-widest text-violet-300 uppercase">
                    4800×6000
                  </div>
                  <div className="text-[8px] font-mono text-violet-400/70">4:5 master</div>
                </div>
              </div>
            </div>

            {/* Arrow / flow line */}
            <div className="absolute top-[155px] left-[175px] w-[60px]" style={{ zIndex: 5 }}>
              <div className="relative">
                <div
                  className="h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(167,139,250,0.6), rgba(45,212,191,0.6))",
                  }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-0"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderLeft: "8px solid #2dd4bf",
                  }}
                />
              </div>
              <div
                className="text-[8px] font-mono tracking-widest uppercase text-center mt-2"
                style={{ color: "#94a3b8" }}
              >
                resize
              </div>
            </div>

            {/* Output ratio packs (right) — 4 small stacks */}
            <div className="absolute top-0 left-[245px] grid grid-cols-2 gap-3">
              {[
                { label: "2:3", w: 60, h: 90, color: "#2dd4bf" },
                { label: "3:4", w: 70, h: 93, color: "#38bdf8" },
                { label: "4:5", w: 72, h: 90, color: "#a78bfa" },
                { label: "ISO", w: 68, h: 96, color: "#f472b6" },
              ].map((p) => (
                <div key={p.label} className="flex flex-col items-center">
                  <div
                    className="rounded-sm relative"
                    style={{
                      width: `${p.w}px`,
                      height: `${p.h}px`,
                      background: `linear-gradient(160deg, ${p.color}33 0%, ${p.color}66 100%)`,
                      border: `1.5px solid ${p.color}`,
                      boxShadow: `0 8px 20px -10px ${p.color}80`,
                    }}
                  >
                    {/* Stacked cards effect */}
                    <div
                      className="absolute inset-0 rounded-sm"
                      style={{
                        top: "4px",
                        left: "4px",
                        background: `linear-gradient(160deg, ${p.color}22 0%, ${p.color}44 100%)`,
                        border: `1px solid ${p.color}80`,
                        zIndex: -1,
                      }}
                    />
                  </div>
                  <span
                    className="text-[9px] font-mono tracking-widest uppercase mt-1.5"
                    style={{ color: p.color }}
                  >
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
          <nav className="text-xs mb-6 text-foreground-60" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/etsy-print-sizes" className="hover:text-foreground transition-colors">Etsy Print Sizes</Link></li>
              <li>/</li>
              <li className="text-foreground">Canva Print Size for Etsy</li>
            </ol>
          </nav>

          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-violet-400/50" />
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-violet-300">
                Tool Bridge · Canva → Etsy
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-foreground">
                Design in Canva. Ship every Etsy ratio with SnapToSize.
              </span>
              <span className="block text-xl md:text-2xl lg:text-[1.65rem] font-semibold text-foreground-70">
                Exact canvas dimensions, DPI truth, and the 2-tool workflow that finishes the job Canva can&apos;t.
              </span>
            </h1>

            <p className="text-base mb-6 max-w-lg leading-relaxed text-foreground-70">
              Canva is where you design. SnapToSize is where your design becomes every Etsy ratio pack. Below: the exact Canva canvas to start with, the DPI truth most tutorials get wrong, and why you never need to duplicate a design ten times again.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 text-sm px-6 py-2.5">
                  Skip the duplication — try SnapToSize free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <p className="text-sm mt-2 text-foreground-60">
                Upload one Canva PDF Print export &rarr; get 2:3, 3:4, 4:5, and ISO ratio packs in a single ZIP.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Canva + SnapToSize workflow",
                "Exact canvas dimensions",
                "Every Etsy ratio covered",
                "Works with free & Pro Canva",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 bg-white/[0.04]"
                >
                  <Check className="h-3 w-3 flex-shrink-0 text-teal-400" />
                  <span className="text-xs font-medium text-foreground-70">{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] pt-16 pb-12 md:pt-20">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-16 md:mb-20">
          <QuickAnswer question="What's the right Canva print size for Etsy?">
            Start with a <strong>4800×6000 pixel custom canvas</strong> in Canva (4:5 master at 300 DPI — 16×20 in). Export as <strong>PDF Print</strong> for true 300 DPI output — PNG exports don&apos;t embed a print DPI, so they print at whatever the canvas pixel count supports. This one file scales cleanly to 8×10, 11×14, 16×20, and every other 4:5 Etsy size. For 2:3 (8×12, 12×18, 24×36), use 4800×7200 px. For ISO (A4, A3), use 3508×4961 px (A3 master).
          </QuickAnswer>
        </div>

        {/* ===== THE SHORTCUT ===== */}
        <div className="mb-16 md:mb-20">
          <div className="relative rounded-2xl border border-teal-400/30 bg-gradient-to-br from-teal-500/[0.08] via-slate-900/40 to-violet-500/[0.08] p-6 md:p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-8 bg-teal-400/60" />
                <span className="text-xs font-mono tracking-[0.15em] uppercase text-teal-300">
                  The 30-Second Shortcut
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                You don&apos;t have to duplicate your Canva design for every ratio.
              </h2>
              <p className="text-foreground-70 leading-relaxed mb-5">
                Canva is brilliant for designing one master. But Etsy sellers need the <em>same design</em> in 2:3, 3:4, 4:5, <em>and</em> ISO — and Canva has no one-click way to do that. SnapToSize takes a single Canva PDF Print export and outputs every Etsy ratio pack, sized to 300 DPI, compressed under Etsy&apos;s 20 MB cap, ready to upload. <strong>Design once. Deliver everywhere.</strong>
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 text-sm px-6 py-2.5">
                    Try SnapToSize free — 5 exports, no signup
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <span className="text-xs text-foreground-60">
                  Free plan: 5 Quick Exports + 2 Packs/day · Pro: $11.99/mo for unlimited · no card required to try
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: What canvas size */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Canva Canvas Size for Etsy Printable Wall Art
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            The single biggest mistake new Etsy sellers make in Canva is starting with a canvas that&apos;s too
            small. If you design at 2000×2500 px, your file looks fine on screen — but a buyer printing at 16×20 inches
            gets only 125 DPI, which prints visibly pixelated. Start large, scale down.
          </p>
          <p className="text-foreground-70 mb-6 leading-relaxed">
            The ideal Canva starting canvas depends on which ratio you want as your master. Most Etsy sellers
            design a 4:5 master (covers 8×10, 11×14, 16×20, 20×24) and derive other ratios from it later.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Master Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Canva Custom Canvas</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Covers These Sizes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ratio: "4:5", size: "4800 × 6000 px", covers: "8×10, 11×14, 16×20, 20×24" },
                  { ratio: "2:3", size: "4800 × 7200 px", covers: "4×6, 8×12, 12×18, 20×30, 24×36" },
                  { ratio: "3:4", size: "4500 × 6000 px", covers: "6×8, 9×12, 12×16, 18×24" },
                  { ratio: "ISO (A3)", size: "3508 × 4961 px", covers: "A5, A4, A3 (scales up to A2/A1 with quality loss)" },
                  { ratio: "Square", size: "5400 × 5400 px", covers: "8×8, 10×10, 12×12, 18×18" },
                ].map(({ ratio, size, covers }, i) => (
                  <tr
                    key={ratio}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="py-3 px-4 font-mono text-violet-300">{ratio}</td>
                    <td className="py-3 px-4 font-mono text-teal-400">{size}</td>
                    <td className="py-3 px-4 text-foreground-60">{covers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground-50">
            In Canva, click <em>Create a design</em> &rarr; <em>Custom size</em> &rarr; enter pixels, set unit to px. Do not choose
            &quot;Poster&quot; — it defaults to smaller dimensions.
          </p>
        </section>

        {/* Section 2: The DPI Trap */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Is Canva 300 DPI? The Export-Format Truth
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            The short answer is: <em>it depends on how you export</em>. Canva&apos;s DPI is tied to the
            export format, not the canvas itself. Get this wrong and your buyer&apos;s print will look fuzzy no matter how
            big your canvas was.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(45,212,191,0.06)",
                border: "1px solid rgba(45,212,191,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FileDown className="w-5 h-5 text-teal-400" />
                <span className="font-semibold text-foreground">PDF Print → 300 DPI</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />True 300 DPI on all Canva plans (Free + Pro)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Preserves vector elements (text stays crisp)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Safe for every print size up to 24×36</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />Can be converted to JPEG/PNG at 300 DPI later</li>
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(239,68,68,0.06)",
                border: "1px solid rgba(239,68,68,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span className="font-semibold text-rose-300">PNG / JPG (Free) → screen-res pixels</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground-70">
                <li className="flex gap-2"><span className="w-4 shrink-0 text-rose-400">×</span>Canva Free PNG = canvas pixel count only (no embedded DPI)</li>
                <li className="flex gap-2"><span className="w-4 shrink-0 text-rose-400">×</span>Looks sharp on screen, pixelated when printed</li>
                <li className="flex gap-2"><span className="w-4 shrink-0 text-rose-400">×</span>Prints at 8×10 need 2400×3000 px — PNG may undercount</li>
                <li className="flex gap-2"><span className="w-4 shrink-0 text-rose-400">×</span>Pro unlocks higher PNG DPI, but PDF Print is still safer</li>
              </ul>
            </div>
          </div>
          <p className="text-foreground-70 leading-relaxed">
            For reference on what 300 DPI actually means in pixels for every common size, see our{" "}
            <Link href="/print-sizes-at-300-dpi" className="text-teal-400 hover:underline">print sizes at 300 DPI chart</Link>.
          </p>
        </section>

        {/* CTA 1 — violet inline */}
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
              Canva is fantastic for designing. It is painful for sizing.
            </p>
            <p className="text-lg font-medium mb-6 text-foreground">
              Upload your Canva PDF export &mdash; SnapToSize delivers every Etsy ratio pack at 300 DPI, under 20 MB, zero Photoshop.
            </p>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-violet-400 hover:bg-violet-300 transition-colors"
            >
              Finish the Job Canva Can&apos;t
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-foreground-60 mt-3">No account needed &middot; No credit card required</p>
          </div>
        </div>

        {/* Section 3: Canvas setup for every ratio */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            How to Set Up a Canva Canvas That Works for Every Etsy Ratio Pack
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Because Canva uses one fixed canvas per design, covering every Etsy ratio (2:3, 3:4, 4:5, ISO)
            technically requires four separate Canva files. The practical workflow most sellers use:
          </p>
          <ol className="space-y-4 mb-6">
            {[
              { step: "1", title: "Design once at 4:5 master (4800×6000 px at 300 DPI — 16×20 in)", desc: "This 4:5 master scales cleanly to 8×10, 11×14, 16×20, 20×24 — the majority of US Etsy frame sizes." },
              { step: "2", title: "Duplicate the Canva design and resize to 2:3 (4800×7200 px — 16×24 in)", desc: "Extend your background, shift key elements so nothing gets cropped. This covers 8×12, 12×18, 24×36." },
              { step: "3", title: "Duplicate again for ISO A-series (3508×4961 px — A3 at 300 DPI)", desc: "Required for European A4/A3/A5 buyers — missing ISO sizes blocks EU/UK orders at checkout." },
              { step: "4", title: "Export all three as PDF Print (300 DPI)", desc: "Save locally. Now you have three master files that cover every buyer frame combination." },
              { step: "5", title: "Upload to SnapToSize to auto-generate every size inside each ratio", desc: "One PDF in, 5 ratio-pack ZIPs out. Skip manual resizing inside Canva." },
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
            If this feels like a lot of duplication in Canva — it is. That&apos;s why most established sellers pair
            Canva with a sizing tool. See our{" "}
            <Link href="/snaptosize-vs-canva" className="text-teal-400 hover:underline">SnapToSize vs Canva comparison</Link>{" "}
            for when each tool is the right choice.
          </p>
        </section>

        {/* ListingOutputShowcase */}
        <section className="mb-16">
          <ListingOutputShowcase
            artwork="abstract_wedding"
            heading="One Canva design. Every Etsy ratio pack."
            subtext="Upload your Canva PDF Print export — SnapToSize generates 2:3, 3:4, 4:5, and ISO packs automatically, ready to attach to your Etsy listing."
          />
        </section>

        {/* Section 4: Common pitfalls */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            The Canva + Etsy Size Mismatch Problem
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Three failure modes show up constantly in Etsy printable reviews, and all three trace back to Canva setup:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                title: "Pixelated prints at 16×20 and larger",
                cause: "Your Canva canvas was too small. 2000×2500 px only looks sharp printed up to 6×8 at 300 DPI. Design at 4800×6000 px minimum.",
              },
              {
                title: "PNG export at screen-res pixel count shipped to buyer",
                cause: "Canva PNG/JPG exports use canvas pixel dimensions — a small canvas (e.g. 1080×1350) prints fuzzy at 16×20 no matter what. Always use PDF Print export or design at full 4800×6000 px.",
              },
              {
                title: "Only 4:5 files in the listing, buyer has a 2:3 frame",
                cause: "Canva won't generate other ratios automatically. A 4:5-only listing loses every buyer with an 8×12, 12×18, or 24×36 frame.",
              },
            ].map(({ title, cause }) => (
              <div
                key={title}
                className="rounded-xl p-5"
                style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-foreground-70">{cause}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground-70 leading-relaxed">
            Related reading:{" "}
            <Link href="/best-file-format-etsy-printables" className="text-teal-400 hover:underline">best file format for Etsy printables</Link>{" "}
            and{" "}
            <Link href="/etsy-20mb-file-limit" className="text-teal-400 hover:underline">the Etsy 20MB file limit</Link>{" "}
            — both cover the compression side of the Canva export problem.
          </p>
        </section>

        {/* CTA 2 — contextual */}
        <div className="mb-16">
          <ContextualCTA
            problem="Canva designs one canvas at a time — Etsy buyers need 2:3, 3:4, 4:5, AND ISO all in one listing."
            solution="SnapToSize takes your Canva PDF and outputs every ratio pack automatically, at 300 DPI, compressed under the 20MB Etsy limit."
            appUrl={appUrl}
            buttonText="Upload Canva Export — Free"
          />
        </div>

        {/* Section 5: Why Canva alone can't cover everything */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Why Canva Alone Can&apos;t Cover Every Etsy Printable Size
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Canva is a design tool, not a print-file factory. Three structural limitations make Canva incomplete for
            a full Etsy printables workflow:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: "Fixed canvas per design", desc: "You cannot generate 4:5, 2:3, 3:4, and ISO outputs from a single canvas — each ratio requires a separate Canva design." },
              { title: "No automatic ISO conversion", desc: "Converting a 4800×6000 px 4:5 canvas to A3 (3508×4961 px, ISO) requires manual background extension and recomposition." },
              { title: "No true per-ratio batch export", desc: "Canva Sheets Bulk Resize caps at 5 output sizes per run and needs every size pre-listed. Ten sizes across four ratios still means multiple manual passes — not one-click." },
              { title: "No built-in file-size optimisation", desc: "Large prints exceed Etsy's 20MB per-file cap. Canva can't auto-compress to stay under the limit." },
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
            The complement to Canva is a sizing tool that starts where Canva stops —
            read our <Link href="/how-to-resize-images-for-etsy" className="text-teal-400 hover:underline">how to resize images for Etsy guide</Link>{" "}
            for the full seller workflow.
          </p>
        </section>

        {/* Section 6: Canva Pro vs Free */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Canva Pro vs Canva Free for Etsy Sellers
          </h2>
          <p className="text-foreground-70 mb-5 leading-relaxed">
            Do you need Canva Pro to sell printables? The short answer: not strictly, but it removes friction. Here&apos;s
            what actually changes for Etsy sellers:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Canva Free</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-70">Canva Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feat: "PDF Print export (300 DPI)", free: "Yes", pro: "Yes" },
                  { feat: "High-resolution PNG/JPG export", free: "Canvas pixel count only", pro: "Higher-res slider (~5000 px/side)" },
                  { feat: "Resize canvas after design", free: "No", pro: "Yes (Magic Resize)" },
                  { feat: "Remove Pro stock elements", free: "Watermarked", pro: "Full access" },
                  { feat: "Brand kit / saved palettes", free: "Limited", pro: "Unlimited" },
                  { feat: "Automatic multi-ratio export", free: "No", pro: "No (manual)" },
                ].map(({ feat, free, pro }, i) => (
                  <tr
                    key={feat}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="py-3 px-4 text-foreground">{feat}</td>
                    <td className="py-3 px-4 text-foreground-60">{free}</td>
                    <td className="py-3 px-4 text-teal-400">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground-50">
            Both Canva Pro and Free leave you stuck at the <em>multi-ratio export</em> step — that&apos;s where SnapToSize
            fits into the workflow.
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
          <RelatedPages currentSlug="canva-print-size-for-etsy" />
        </section>

        {/* Final CTA */}
        <FinalCTA
          heading="Design in Canva, finish in SnapToSize"
          stat="One Canva export. Every Etsy ratio pack."
          description="Upload your Canva PDF Print export once and get 2:3, 3:4, 4:5, and ISO packs back — every size, at 300 DPI, under the Etsy 20MB file limit, ready to attach to your listing."
          appUrl={appUrl}
        />
      </div>
    </>
  );
}
