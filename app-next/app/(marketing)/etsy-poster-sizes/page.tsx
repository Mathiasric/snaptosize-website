import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AuthorByline } from "@/components/AuthorByline";
import { ContextualCTA } from "@/components/ContextualCTA";
import { Check, AlertTriangle, Ruler, ArrowRight, FileImage } from "lucide-react";
import { Button } from "@/components/Button";

const SLUG = "etsy-poster-sizes";
const CTA_URL = `https://app.snaptosize.com?source=seo_${SLUG}&kind=guide`;

export const metadata: Metadata = {
  title: "Etsy Poster Sizes: 300 DPI Pixel Dimensions (18×24, 24×36 & More)",
  description:
    "Complete Etsy poster size guide: 18×24 = 5400×7200 px, 24×36 = 7200×10800 px, 20×30 = 6000×9000 px at 300 DPI. Includes ratio families, file size warnings, and the 20 MB Etsy limit explained.",
  alternates: { canonical: `https://snaptosize.com/${SLUG}` },
  openGraph: {
    title: "Etsy Poster Sizes: 300 DPI Pixel Dimensions for Every Standard Size",
    description:
      "Exact pixel dimensions for all 6 standard Etsy poster sizes at 300 DPI. Ratio families, 20 MB file limit guide, and which sizes share source files.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-08T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Poster Sizes: 300 DPI Pixel Dimensions",
    description:
      "18×24 = 5400×7200 px · 24×36 = 7200×10800 px · 20×30 = 6000×9000 px. All 6 standard poster sizes for Etsy sellers.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

// ─── data ──────────────────────────────────────────────────────────────────

const posterSizes = [
  {
    size: "11×17″",
    pixels: "3,300 × 5,100",
    ratio: "11:17",
    ratioFamily: "≈ 2:3",
    fileSize: "4–7 MB",
    safeForEtsy: true,
    notes: "Tabloid / IKEA HOVSTA — most home printers max at 13″ wide",
    relativeHeight: 28,
    color: "bg-teal-500/20 border-teal-500/40",
  },
  {
    size: "12×18″",
    pixels: "3,600 × 5,400",
    ratio: "2:3",
    ratioFamily: "2:3",
    fileSize: "5–9 MB",
    safeForEtsy: true,
    notes: "True 2:3 ratio — photo lab standard, frames everywhere",
    relativeHeight: 34,
    color: "bg-teal-400/20 border-teal-400/40",
  },
  {
    size: "13×19″",
    pixels: "3,900 × 5,700",
    ratio: "13:19",
    ratioFamily: "≈ 2:3",
    fileSize: "6–10 MB",
    safeForEtsy: true,
    notes: "Super B / wide-format printers — popular for art prints",
    relativeHeight: 38,
    color: "bg-teal-300/20 border-teal-300/40",
  },
  {
    size: "18×24″",
    pixels: "5,400 × 7,200",
    ratio: "3:4",
    ratioFamily: "3:4",
    fileSize: "10–16 MB",
    safeForEtsy: true,
    notes: "Gallery wall standard — most popular large-format Etsy size",
    relativeHeight: 55,
    color: "bg-purple-400/20 border-purple-400/40",
  },
  {
    size: "20×30″",
    pixels: "6,000 × 9,000",
    ratio: "2:3",
    ratioFamily: "2:3",
    fileSize: "16–22 MB",
    safeForEtsy: "caution",
    notes: "Near Etsy's 20 MB limit — use JPEG quality 75–80",
    relativeHeight: 72,
    color: "bg-amber-400/20 border-amber-400/40",
  },
  {
    size: "24×36″",
    pixels: "7,200 × 10,800",
    ratio: "2:3",
    ratioFamily: "2:3",
    fileSize: "22–35 MB",
    safeForEtsy: false,
    notes: "Exceeds 20 MB at 300 DPI — must export at 200–240 DPI or compress",
    relativeHeight: 100,
    color: "bg-red-400/15 border-red-400/30",
  },
];

const ratioFamilies = [
  {
    ratio: "2:3",
    color: "teal",
    borderClass: "border-teal-500/40",
    bgClass: "bg-teal-500/5",
    badgeClass: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    sizes: ["12×18″", "20×30″", "24×36″"],
    note: "One source file serves all three. Scale up without cropping.",
    snapPack: "2:3 Pack",
    approximate: ["11×17″ (≈)", "13×19″ (≈)"],
  },
  {
    ratio: "3:4",
    color: "purple",
    borderClass: "border-purple-500/40",
    bgClass: "bg-purple-500/5",
    badgeClass: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    sizes: ["18×24″"],
    note: "Same ratio family as 12×16 and 16×20. One master file.",
    snapPack: "3:4 Pack",
    approximate: [],
  },
];

const faqs = [
  {
    question: "What are the standard Etsy poster sizes in pixels at 300 DPI?",
    answer:
      "The six standard Etsy poster sizes at 300 DPI are: 11×17″ = 3,300×5,100 px; 12×18″ = 3,600×5,400 px; 13×19″ = 3,900×5,700 px; 18×24″ = 5,400×7,200 px; 20×30″ = 6,000×9,000 px; 24×36″ = 7,200×10,800 px. Multiply each inch dimension by 300 to get the pixel count at print quality.",
  },
  {
    question: "What is the most popular poster size on Etsy?",
    answer:
      "18×24 inches is the most popular large poster size on Etsy because it fits standard gallery frames sold at IKEA, Target, and Amazon. For sellers wanting to maximize reach, offering 18×24 plus 24×36 covers both the mid-size and large-format buyer segments. The 12×18 size is popular with photo-lab buyers who prefer exact 2:3 ratio prints.",
  },
  {
    question: "Does 24×36 exceed Etsy's 20 MB file limit?",
    answer:
      "Yes, most 24×36 files at true 300 DPI will exceed Etsy's 20 MB per-file limit — especially for complex artwork. The solution is to export at 200–240 DPI (which gives 4,800×7,200 to 5,760×8,640 pixels — still excellent print quality) or save as JPEG at quality 75–80 to bring the file under the limit. SnapToSize applies progressive quality fallback automatically so you never hit the limit.",
  },
  {
    question: "Do I need separate files for each poster size?",
    answer:
      "Not always. Sizes that share the same aspect ratio can be scaled from a single source file without any cropping. The 2:3 ratio family (12×18, 20×30, 24×36) all scale from one file. The 3:4 family (18×24, 12×16, 16×20) share another. Where ratios differ — like offering both 18×24 (3:4) and 24×36 (2:3) — you need two separate source files.",
  },
  {
    question: "What DPI should Etsy poster files be?",
    answer:
      "300 DPI is the professional print standard for poster-sized prints. It ensures sharp edges at arm's length viewing distance. For very large posters like 24×36, printing at 200–240 DPI is acceptable because viewers stand further back — the reduced DPI is imperceptible at that viewing distance. Never go below 150 DPI for any printed product sold on Etsy.",
  },
  {
    question: "Should I offer landscape (horizontal) poster sizes on Etsy?",
    answer:
      "Yes — landscape posters sell well for panoramic wall art, diptychs, and above-sofa placements. The landscape equivalents are simply flipped: 17×11, 18×12, 24×18, 30×20, and 36×24. The aspect ratio is identical to the portrait version, so the same source file works rotated. Note: most buyers search for portrait orientation by default.",
  },
  {
    question: "Which poster sizes should I include in my Etsy listing?",
    answer:
      "For a poster wall art listing, the highest-ROI combination is: 12×18 + 18×24 + 24×36. This covers small, medium, and large-format buyers. If your art is 2:3 ratio, the 12×18 / 24×36 pair requires only one source file. Add 11×17 if you're targeting buyers who print at home. Adding 20×30 covers the extra-large segment without requiring a new source file (also 2:3).",
  },
];

// ─── page ──────────────────────────────────────────────────────────────────

export default function EtsyPosterSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Poster Sizes: 300 DPI Pixel Dimensions for Every Standard Size",
    description:
      "Complete guide to Etsy poster sizes with exact pixel dimensions at 300 DPI, ratio families, file size warnings, and the 20 MB Etsy limit explained.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-08",
    dateModified: "2026-06-08",
    author: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
    publisher: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
      { "@type": "ListItem", position: 2, name: "Etsy Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
      { "@type": "ListItem", position: 3, name: "Etsy Poster Sizes", item: `https://snaptosize.com/${SLUG}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #030712 0%, #062a2a 40%, #0d1117 100%)" }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2dd4bf 1px, transparent 1px), linear-gradient(to bottom, #2dd4bf 1px, transparent 1px)",
            backgroundSize: "48px 64px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #2dd4bf 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-8 font-mono">
            <Link href="/" className="hover:text-white/60 transition-colors">snaptosize.com</Link>
            <span>/</span>
            <Link href="/etsy-print-sizes" className="hover:text-white/60 transition-colors">print-sizes</Link>
            <span>/</span>
            <span className="text-teal-400/70">poster-sizes</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-3 py-1 mb-5">
                <Ruler className="w-3 h-3 text-teal-400" />
                <span className="text-xs font-mono text-teal-300 tracking-widest uppercase">Seller Size Guide</span>
              </div>

              <h1 className="font-bold tracking-tight mb-5">
                <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 text-white">
                  Etsy Poster Sizes
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/75">
                  Pixel dimensions at 300&nbsp;DPI &mdash; all 6 standard sizes
                </span>
              </h1>

              <p className="text-base text-white/55 mb-6 max-w-xl leading-relaxed">
                18×24 = 5,400×7,200 px &middot; 24×36 = 7,200×10,800 px &middot; 20×30 = 6,000×9,000 px.
                Which sizes share a ratio (and need only one source file), and which sizes
                will blow past Etsy&apos;s 20&nbsp;MB limit.
              </p>

              {/* QuickAnswer — GEO-optimised */}
              <QuickAnswer question="What are the standard Etsy poster sizes at 300 DPI?">
                <div className="space-y-1 font-mono text-xs">
                  {posterSizes.map((p) => (
                    <div key={p.size} className="flex items-center gap-3">
                      <span className="text-teal-400 w-14 shrink-0">{p.size}</span>
                      <span className="text-white/70">{p.pixels} px</span>
                      <span className="text-white/35">{p.ratio}</span>
                      {p.safeForEtsy === false && (
                        <span className="text-red-400 text-[10px]">⚠ exceeds 20 MB</span>
                      )}
                      {p.safeForEtsy === "caution" && (
                        <span className="text-amber-400 text-[10px]">⚠ near limit</span>
                      )}
                    </div>
                  ))}
                </div>
              </QuickAnswer>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Export All Poster Sizes Free
                  </Button>
                </a>
                <p className="text-xs text-white/35 mt-2 sm:mt-2.5 leading-snug">
                  Upload once &rarr; get every poster size instantly. No Photoshop.
                </p>
              </div>
            </div>

            {/* Right: visual size bars */}
            <div className="hidden lg:flex items-end gap-2.5 h-56 pr-2">
              {posterSizes.map((p) => (
                <div key={p.size} className="flex flex-col items-center gap-1.5 group">
                  <div
                    className={`w-9 rounded-t border ${p.color} transition-all group-hover:opacity-100 opacity-70`}
                    style={{ height: `${p.relativeHeight * 1.9}px` }}
                  />
                  <span className="text-[9px] font-mono text-white/40 group-hover:text-white/70 transition-colors whitespace-nowrap">
                    {p.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BODY ─────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        <AuthorByline lastUpdated="June 8, 2026" />

        {/* ── Section 1: The full pixel table ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            All 6 Standard Poster Sizes — Exact Pixels at 300 DPI
          </h2>
          <p className="text-foreground-60 text-sm mb-6 leading-relaxed">
            Multiply any inch dimension by 300 to get the pixel count at 300 DPI.
            The table below includes the common Etsy poster sizes, their true aspect ratios,
            approximate file sizes as JPEG (quality 80), and whether the file stays within
            Etsy&apos;s 20&nbsp;MB upload limit.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2">
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">Pixels at 300 DPI</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">Ratio</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">JPEG size</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">Etsy safe?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {posterSizes.map((p) => (
                  <tr key={p.size} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-mono font-semibold text-teal-300">{p.size}</td>
                    <td className="px-4 py-3.5 font-mono text-foreground/80">{p.pixels}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1">
                        <span className="text-foreground/70 font-mono text-xs">{p.ratio}</span>
                        {p.ratioFamily !== p.ratio && (
                          <span className="text-foreground/35 text-xs">({p.ratioFamily})</span>
                        )}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-foreground/60 text-xs">{p.fileSize}</td>
                    <td className="px-4 py-3.5">
                      {p.safeForEtsy === true && (
                        <span className="inline-flex items-center gap-1 text-teal-400 text-xs font-medium">
                          <Check className="w-3.5 h-3.5" /> Yes
                        </span>
                      )}
                      {p.safeForEtsy === "caution" && (
                        <span className="inline-flex items-center gap-1 text-amber-400 text-xs font-medium">
                          <AlertTriangle className="w-3.5 h-3.5" /> Caution
                        </span>
                      )}
                      {p.safeForEtsy === false && (
                        <span className="inline-flex items-center gap-1 text-red-400 text-xs font-medium">
                          <AlertTriangle className="w-3.5 h-3.5" /> Compress
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-foreground/35 mt-3 leading-relaxed">
            JPEG file sizes vary by artwork complexity. Dark/complex images are larger; minimal/light artwork is smaller.
            Values above assume quality 80 export. Portrait orientation; landscape flips width/height.
          </p>
        </section>

        {/* ── Section 2: Notes per size ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            What Each Poster Size Is Used For
          </h2>
          <p className="text-foreground-60 text-sm mb-6">
            Knowing the use case helps you decide which sizes to include in your Etsy listing.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {posterSizes.map((p) => (
              <div key={p.size} className={`rounded-xl border p-4 ${p.color}`}>
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono font-bold text-white">{p.size}</span>
                  <span className="font-mono text-xs text-white/40">{p.ratio}</span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed">{p.notes}</p>
                <p className="text-[10px] font-mono text-white/30 mt-2">{p.pixels} px @ 300 DPI</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: The 20MB problem ── */}
        <section>
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
            <div className="flex gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  The 24×36 Problem: Why It Exceeds Etsy&apos;s 20&nbsp;MB Limit
                </h2>
                <p className="text-foreground-60 text-sm leading-relaxed">
                  A 24×36 inch file at 300 DPI is 7,200×10,800 pixels — 77.7 million pixels.
                  As a JPEG at quality 80, most artwork lands between 22–35 MB.
                  Etsy&apos;s hard upload limit is <strong className="text-foreground">20 MB per file</strong>.
                </p>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Your three options:</h3>
            <ol className="space-y-2 text-sm text-foreground/70 list-none">
              {[
                { n: "1", title: "Export at 200–240 DPI", body: "Gives 4,800×7,200 to 5,760×8,640 px. Indistinguishable from 300 DPI at poster viewing distance (arm's length or further)." },
                { n: "2", title: "Use JPEG quality 70–75", body: "Reduces file size by 30–40%. Slight compression artefacts in very dark gradients; invisible in most artwork styles." },
                { n: "3", title: "Use SnapToSize's auto-compression", body: "Upload your master file once. SnapToSize applies progressive quality fallback automatically to hit the 20 MB target without you touching any settings." },
              ].slice(0, 2).map((o) => (
                <li key={o.n} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{o.n}</span>
                  <span><strong className="text-foreground">{o.title}:</strong> {o.body}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4 pt-4 border-t border-amber-500/15">
              <p className="text-xs text-foreground/40">
                The 20×30 size sits near the limit (~16–22 MB). Complex or dark artwork may exceed it —
                test your specific file before listing. See: <Link href="/etsy-20mb-file-limit" className="text-teal-400 hover:text-teal-300 underline-offset-2 hover:underline">Etsy 20 MB file limit guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 4: Ratio Families ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Ratio Families: One Source File, Multiple Sizes
          </h2>
          <p className="text-foreground-60 text-sm mb-6 leading-relaxed">
            The most common mistake Etsy sellers make: creating a separate artboard for every
            single poster size. You don&apos;t need to. Sizes that share the same aspect ratio
            can all be exported from a single master file — just scale it up or down without
            cropping anything.
          </p>

          <div className="space-y-4">
            {ratioFamilies.map((family) => (
              <div key={family.ratio} className={`rounded-xl border ${family.borderClass} ${family.bgClass} p-5`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-mono font-bold ${family.badgeClass}`}>
                    {family.ratio} ratio
                  </span>
                  <span className="text-foreground/40 text-xs">{family.snapPack} in SnapToSize</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {family.sizes.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm font-mono text-white">
                      <Check className="w-3 h-3 text-teal-400" />
                      {s}
                    </span>
                  ))}
                  {family.approximate.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-1.5 text-sm font-mono text-foreground/40">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-foreground/60">{family.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-sm text-foreground/60 leading-relaxed">
              <strong className="text-foreground">When you need two files:</strong> if you&apos;re offering
              both 18×24 (3:4) and 24×36 (2:3) in the same listing, those are different ratios — you need
              two separate source files. The 2:3 file won&apos;t fit a 3:4 frame without cropping.
              See: <Link href="/etsy-print-ratios" className="text-teal-400 hover:text-teal-300 hover:underline underline-offset-2">Etsy print ratios explained</Link>.
            </p>
          </div>
        </section>

        {/* ── Mid-page CTA ── */}
        <ContextualCTA
          problem="Manually exporting each poster size takes 20+ minutes per listing. Most sellers offer 3–4 sizes — that's an hour of grunt work every time you create new art."
          solution="SnapToSize exports your full poster pack in one click. Upload once, get 12×18, 18×24, 20×30, and 24×36 as separate print-ready files — all at the correct pixel dimensions."
          appUrl={CTA_URL}
          buttonText="Export All Poster Sizes Free"
        />

        {/* ── Section 5: Which sizes to offer ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Which Poster Sizes Should You Offer on Etsy?
          </h2>
          <p className="text-foreground-60 text-sm mb-6 leading-relaxed">
            More sizes = more buyers. But you also don&apos;t want to overwhelm your listing
            with 8 file variations. Here&apos;s the decision framework by art style.
          </p>

          <div className="space-y-3">
            {[
              {
                label: "Minimum viable poster listing",
                badge: "2 sizes",
                badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
                sizes: ["18×24″", "24×36″"],
                why: "Covers the two most-searched poster frames. Different ratios, so two source files — but this combination appears in the most buyer searches.",
              },
              {
                label: "High-coverage listing (recommended)",
                badge: "4 sizes",
                badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
                sizes: ["12×18″", "18×24″", "20×30″", "24×36″"],
                why: "12×18 + 20×30 + 24×36 all share the 2:3 ratio — one source file for three sizes. Add 18×24 separately (3:4). Covers photo labs, gallery walls, and large format.",
              },
              {
                label: "Full poster range",
                badge: "6 sizes",
                badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
                sizes: ["11×17″", "12×18″", "13×19″", "18×24″", "20×30″", "24×36″"],
                why: "Add 11×17 for home printer buyers (tabloid) and 13×19 for art print customers with wide-format printers. Maximum reach; only two source files still.",
              },
            ].map((tier) => (
              <div key={tier.label} className="rounded-xl border border-border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full border text-xs font-semibold ${tier.badgeColor}`}>
                    {tier.badge}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{tier.label}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2.5">
                  {tier.sizes.map((s) => (
                    <span key={s} className="font-mono text-xs bg-surface-2 border border-border rounded px-2 py-1 text-foreground/70">{s}</span>
                  ))}
                </div>
                <p className="text-xs text-foreground/50 leading-relaxed">{tier.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Landscape posters ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Landscape (Horizontal) Poster Sizes
          </h2>
          <p className="text-foreground-60 text-sm mb-5 leading-relaxed">
            Landscape posters use the same pixel counts — the width and height are simply swapped.
            Same ratio, same source file rotated. Popular for panoramic art, above-sofa placements,
            and diptych sets.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2">
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground">Landscape size</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground">Pixels at 300 DPI</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground">Portrait equiv.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { ls: "17×11″", px: "5,100 × 3,300", portrait: "11×17″" },
                  { ls: "18×12″", px: "5,400 × 3,600", portrait: "12×18″" },
                  { ls: "24×18″", px: "7,200 × 5,400", portrait: "18×24″" },
                  { ls: "30×20″", px: "9,000 × 6,000", portrait: "20×30″" },
                  { ls: "36×24″", px: "10,800 × 7,200", portrait: "24×36″" },
                ].map((r) => (
                  <tr key={r.ls} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 font-mono font-semibold text-teal-300">{r.ls}</td>
                    <td className="px-4 py-3 font-mono text-foreground/70 text-xs">{r.px}</td>
                    <td className="px-4 py-3 text-foreground/45 text-xs">{r.portrait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 7: Framing note ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Do Standard Frames Fit These Poster Sizes?
          </h2>
          <div className="space-y-3 text-sm text-foreground/65 leading-relaxed">
            <p>
              <strong className="text-foreground">18×24:</strong> Yes — widely available at IKEA, Target, Amazon, and
              HomeGoods. The most frame-friendly of the large poster sizes.
            </p>
            <p>
              <strong className="text-foreground">24×36:</strong> Available but less common in big-box stores.
              Buyers often order custom frames or use poster frames specifically designed for this size.
              Mention framing options in your listing description — this is a top buyer question.
            </p>
            <p>
              <strong className="text-foreground">12×18:</strong> Standard photo lab size; fits photo frames from most retailers.
              Buyers printing at home or through photo labs prefer this over 11×17.
            </p>
            <p>
              <strong className="text-foreground">11×17:</strong> Tabloid size — fits in IKEA HOVSTA frames (which come in
              A3/11×17 equivalent). Common for home printer buyers.
              See: <Link href="/ikea-ribba-frame-print-sizes" className="text-teal-400 hover:text-teal-300 hover:underline underline-offset-2">IKEA frame size guide</Link>.
            </p>
            <p>
              <strong className="text-foreground">20×30 and 13×19:</strong> Niche frame sizes. Buyers using these typically
              go through print labs (Costco, Bay Photo, Mpix) rather than buying frames at retail stores.
              Include a note in your listing that these sizes are designed for lab printing.
            </p>
          </div>
        </section>

        {/* ── Section 8: File format ── */}
        <section>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
            <div className="flex gap-3 mb-4">
              <FileImage className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <h2 className="text-xl font-bold text-foreground">File Format for Etsy Poster Downloads</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                {
                  format: "JPEG (recommended)",
                  color: "text-teal-400",
                  points: [
                    "Quality 80–85 for sizes under 20×30",
                    "Quality 70–75 for 20×30 and 24×36",
                    "Smallest file size — stays under 20 MB on most sizes",
                    "Accepted by all print labs and home printers",
                  ],
                },
                {
                  format: "PDF (optional)",
                  color: "text-purple-400",
                  points: [
                    "Use for bleed + crop marks if included",
                    "Embed at 300 DPI for print-ready files",
                    "Larger file size than JPEG — watch the 20 MB limit",
                    "Required by some commercial print labs",
                  ],
                },
              ].map((f) => (
                <div key={f.format}>
                  <h3 className={`font-semibold mb-2 ${f.color}`}>{f.format}</h3>
                  <ul className="space-y-1.5">
                    {f.points.map((p) => (
                      <li key={p} className="flex gap-2 text-foreground/60 text-xs leading-snug">
                        <Check className="w-3 h-3 text-teal-500/60 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-foreground/35 leading-relaxed">
              PNG is not recommended for large poster sizes — file sizes are typically 2–3× larger than JPEG
              with no perceptible quality improvement for printed artwork.
              See: <Link href="/best-file-format-etsy-printables" className="text-teal-400 hover:text-teal-300 hover:underline underline-offset-2">Best file format for Etsy printables</Link>.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* ── Related pages ── */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Related Size Guides</h2>
          <RelatedPages currentSlug={SLUG} />
        </section>

        {/* ── Final CTA ── */}
        <FinalCTA
          heading="Stop Exporting Poster Sizes One by One"
          stat="12× faster"
          description="Upload your artwork once. SnapToSize exports every poster size — 12×18, 18×24, 20×30, 24×36 — as separate print-ready files, each at the exact pixel dimensions Etsy buyers expect."
          buttonText="Export All Poster Sizes Free"
          appUrl={CTA_URL}
        />
      </div>
    </>
  );
}
