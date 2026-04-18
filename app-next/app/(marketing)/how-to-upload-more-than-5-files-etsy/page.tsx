import type { Metadata } from "next";
import Link from "next/link";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { Button } from "@/components/Button";
import { Check, AlertTriangle, ArrowRight, Package, Folder, FileArchive } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Upload More Than 5 Files to Etsy — ZIP Guide (2026)",
  description:
    "Etsy limits digital listings to 5 files. Here's how print sellers use ratio-organized ZIPs to deliver up to 70 files in one listing — no workarounds needed.",
  alternates: {
    canonical: "https://snaptosize.com/how-to-upload-more-than-5-files-etsy",
  },
  openGraph: {
    title: "How to Upload More Than 5 Files to Etsy — ZIP Guide (2026)",
    description:
      "Etsy limits digital listings to 5 files. Here's how print sellers use ratio-organized ZIPs to deliver 28 sizes in one listing — no workarounds needed.",
    url: "https://snaptosize.com/how-to-upload-more-than-5-files-etsy",
    type: "article",
    images: ["/assets/og/how-to-upload-more-than-5-files-etsy.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Upload More Than 5 Files to Etsy — ZIP Guide (2026)",
    description:
      "Etsy limits digital listings to 5 files. Use ratio ZIPs to deliver up to 70 files in one listing.",
    images: ["/assets/og/how-to-upload-more-than-5-files-etsy.png"],
  },
};

const faqItems = [
  {
    question: "Can you upload more than 5 files to Etsy?",
    answer:
      "No — Etsy limits digital download listings to 5 files per listing. The standard workaround is to bundle multiple files into ZIP archives so each ZIP counts as one file. You can then deliver 20+ individual sizes across your 5 allowed files.",
  },
  {
    question: "How do I add more digital files to my Etsy listing?",
    answer:
      "You can't exceed the 5-file cap directly. Instead, group your files into ZIP archives — typically organized by print ratio (4:5, 2:3, 3:4, etc.) — and upload one ZIP per slot. Each ZIP can contain all the sizes for that ratio group.",
  },
  {
    question: "What is the max file size for Etsy digital downloads?",
    answer:
      "Each file (including ZIPs) can be up to 20MB. If your ZIP exceeds 20MB, reduce image quality slightly (280–300 DPI instead of 300 DPI) or split the pack into two ZIPs and use two of your 5 file slots.",
  },
  {
    question: "Can Etsy digital products have variations?",
    answer:
      "Not in a way that delivers different files. Etsy variations (color, size) are for physical products. For digital downloads, all buyers receive the same 5 files regardless of which variation they select. This is why the ZIP-per-ratio strategy is the correct approach — one listing, all sizes, no separate listings needed.",
  },
  {
    question: "How to organize print size files for Etsy?",
    answer:
      "Organize by print ratio rather than by size. Group 4×6, 8×12, and 12×18 together (2:3 ratio), group 8×10 and 16×20 together (4:5 ratio), group A4 and A3 together (ISO), and put common frames like 5×7 and 11×14 in an Extras pack. This keeps each ZIP logically consistent and makes it easy for buyers to find the size they need.",
  },
];

export default function HowToUploadMoreThan5FilesEtsyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Upload More Than 5 Files to an Etsy Digital Listing",
    description:
      "Use ratio-organized ZIP files to deliver 20+ print sizes within Etsy's 5-file limit.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Group your sizes by print ratio",
        text: "Sort all your print sizes into ratio groups: 2:3 (4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30), 3:4 (6×8, 9×12, 12×16, 15×20, 18×24), 4:5 (8×10, 12×15, 16×20, 20×25, 24×30), ISO A-series (A5, A4, A3, A2, A1), and Extras (5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24).",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Create one ZIP per ratio group",
        text: "Compress each ratio group into a single ZIP file. Name them clearly: ratio-2x3.zip, ratio-3x4.zip, ratio-4x5.zip, ratio-iso.zip, ratio-extras.zip. Each ZIP counts as one of your 5 Etsy file slots.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Verify each ZIP is under 20MB",
        text: "Etsy's per-file limit is 20MB. Check each ZIP before uploading. If a ZIP exceeds 20MB, reduce export quality slightly or split the largest sizes into a separate ZIP.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Upload the 5 ZIPs to your Etsy listing",
        text: "In your Etsy listing editor, scroll to the Digital files section and upload each ZIP. All 5 slots are now used — covering every ratio a buyer might need.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Update your listing description",
        text: "Tell buyers what's inside each ZIP. List the sizes included and explain which ZIP to download based on where they want to print.",
      },
    ],
  };

  const articleJsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Upload More Than 5 Files to Etsy",
    description: "Use ratio-organized ZIP files to deliver 20+ print sizes within Etsy's 5-file limit.",
    author: { "@type": "Organization", name: "SnapToSize" },
    publisher: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
    datePublished: "2026-04-18",
    url: "https://snaptosize.com/how-to-upload-more-than-5-files-etsy",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "How to Upload More Than 5 Files to Etsy",
        item: "https://snaptosize.com/how-to-upload-more-than-5-files-etsy",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLdSchema) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0B0B12 0%, #121022 40%, #0F0D1A 100%)",
        }}
      >
        {/* Gradient orbs */}
        <div
          className="absolute top-[-10%] left-[8%] w-[520px] h-[520px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[-6%] w-[460px] h-[460px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
                <Link href="/" className="hover:text-white/60">Home</Link>
                <span>/</span>
                <span className="text-white/60">Upload More Than 5 Files to Etsy</span>
              </nav>

              <p className="text-[10px] font-mono tracking-[0.2em] text-purple-400/70 uppercase mb-3">
                ETSY WORKFLOW GUIDE
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                How to Upload More Than 5 Files to Etsy
              </h1>
              <p className="text-white/60 text-base mb-6 leading-relaxed">
                Etsy caps digital listings at 5 files — but your buyers need portrait, landscape,
                and international sizes. The ZIP strategy lets you deliver up to 70 files from one
                listing. Here&apos;s exactly how it works.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  "Up to 70 files",
                  "5 ratio-organized ZIPs",
                  "Portrait & landscape",
                  "Under 20MB each",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] text-white/70 border border-white/[0.08]"
                  >
                    <Check className="w-3 h-3 text-teal-400" />
                    {pill}
                  </span>
                ))}
              </div>

              <a href="https://app.snaptosize.com" target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate your 5 ZIP packs free →
                </Button>
              </a>
            </div>

            {/* Right: ZIP pack diagram */}
            <div className="hidden md:flex flex-col items-center justify-center gap-4">
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">
                5 ZIPs · 28 portrait sizes · 300 DPI
              </div>
              <div className="flex flex-col gap-2 w-full max-w-[280px]">
                {[
                  { label: "ZIP 1", desc: "2:3  ·  4×6, 6×9, 8×12, 10×15, 12×18 + 2", color: "purple" },
                  { label: "ZIP 2", desc: "3:4  ·  6×8, 9×12, 12×16, 15×20, 18×24", color: "teal" },
                  { label: "ZIP 3", desc: "4:5  ·  8×10, 12×15, 16×20, 20×25, 24×30", color: "purple" },
                  { label: "ZIP 4", desc: "ISO  ·  A5, A4, A3, A2, A1", color: "teal" },
                  { label: "ZIP 5", desc: "Extras  ·  5×7, 8.5×11, 11×14, 11×17 + 2", color: "purple" },
                ].map((zip) => (
                  <div
                    key={zip.label}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 ${
                      zip.color === "purple"
                        ? "border-purple-500/30 bg-purple-500/[0.07]"
                        : "border-teal-500/30 bg-teal-500/[0.07]"
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold ${zip.color === "purple" ? "text-purple-300" : "text-teal-300"}`}>
                      {zip.label}
                    </span>
                    <span className="text-[11px] text-white/50">{zip.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-white/20 text-center max-w-[240px] mt-1">
                Quick Export adds landscape + square + oversized = up to 70 files total
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">

        {/* Problem section */}
        <section className="mb-12">
          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <div className="flex gap-3 items-start mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold mb-2">Why Etsy limits you to 5 files</h2>
                <p className="text-foreground-60 text-sm leading-relaxed">
                  According to{" "}
                  <a
                    href="https://help.etsy.com/hc/en-us/articles/115015628347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline"
                  >
                    Etsy's official help documentation
                  </a>
                  , digital listings are limited to 5 downloadable files, each up to 20MB. This
                  limit applies across all digital product types — art prints, planners, templates,
                  and more.
                </p>
                <p className="text-foreground-60 text-sm leading-relaxed mt-3">
                  For a print seller offering a single wall art design, this creates an immediate
                  problem. To cover every standard print size a buyer might need — 5×7, 8×10,
                  11×14, 16×20, A4, A3 and more — you'd need 20+ separate files. But Etsy only
                  allows 5.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ListingOutputShowcase — immediately after problem section, CTA #1 */}
        <section className="mb-14">
          <ListingOutputShowcase
            artwork="fox"
            heading="5 files. Up to 70 sizes. One listing."
            subtext="SnapToSize bundles portrait, landscape, and international sizes into ratio-organized ZIPs — exactly 5 files, each under 20MB. Upload once, cover every buyer."
          />
          <div className="mt-6 text-center">
            <a href="https://app.snaptosize.com" target="_blank" rel="noopener noreferrer">
              <Button>
                Generate your 5 ZIP packs free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="text-xs text-foreground-60 mt-2">No account required to try</p>
          </div>
        </section>

        {/* The real problem for print sellers */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            The print seller problem: 70+ sizes, only 5 slots
          </h2>
          <p className="text-foreground-60 mb-6 leading-relaxed">
            A serious Etsy print shop offers full size coverage. That means portrait and landscape
            variants across every standard ratio. At minimum:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {[
              "4×6", "5×7", "8×10", "8×12",
              "11×14", "12×16", "12×18", "16×20",
              "18×24", "A4", "A3", "A2",
            ].map((size) => (
              <div
                key={size}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-center font-mono"
              >
                {size}
              </div>
            ))}
          </div>
          <p className="text-foreground-60 leading-relaxed mb-4">
            That's 12 sizes just for the basics. Add landscape variants, international A-series,
            and oversized formats and you're at 70+ files. You can't upload 70 individual JPGs to
            a single Etsy listing — the platform won't allow it.
          </p>
          <p className="text-foreground-60 leading-relaxed">
            Most sellers either under-deliver (offering only 3–4 sizes and losing sales) or
            over-list (creating separate listings per size, fracturing their shop). Neither is the
            right answer.
          </p>
        </section>

        {/* Option 1: ZIP workaround */}
        <section className="mb-14" id="zip-workaround">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Option 1: ZIP files — the right workaround
          </h2>
          <p className="text-foreground-60 mb-6 leading-relaxed">
            The ZIP strategy is the standard approach recommended across Etsy seller communities
            (including{" "}
            <a
              href="https://www.selfwage.com/how-to-upload-more-than-5-files-to-etsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              Selfwage
            </a>{" "}
            and{" "}
            <a
              href="https://www.shopuploader.com/help/how-to-upload-more-than-5-digital-files-to-etsy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              Shop Uploader
            </a>
            ). Instead of uploading individual files, you bundle multiple sizes into a single ZIP archive — and that ZIP counts as one file.
          </p>

          <h3 className="text-lg font-semibold mb-4">Organize by print ratio, not by size</h3>
          <p className="text-foreground-60 mb-5 leading-relaxed">
            The key insight most guides miss: group your sizes by <em>ratio</em>, not by dimension.
            This keeps each ZIP consistent and makes your listing description scannable for buyers.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                ratio: "2:3",
                sizes: ["4×6", "6×9", "8×12", "10×15", "12×18", "16×24", "20×30"],
                note: "Photography standard — 7 sizes",
              },
              {
                ratio: "3:4",
                sizes: ["6×8", "9×12", "12×16", "15×20", "18×24"],
                note: "Classic print ratio — 5 sizes",
              },
              {
                ratio: "4:5",
                sizes: ["8×10", "12×15", "16×20", "20×25", "24×30"],
                note: "Most popular US sizes — 5 sizes",
              },
              {
                ratio: "ISO / A-series",
                sizes: ["A5", "A4", "A3", "A2", "A1"],
                note: "Europe + international — 5 sizes",
              },
              {
                ratio: "Extras",
                sizes: ["5×7", "8.5×11", "11×14", "11×17", "13×19", "20×24"],
                note: "Common frame sizes — 6 sizes",
              },
            ].map((pack) => (
              <div
                key={pack.ratio}
                className="rounded-lg border border-border bg-surface p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="h-4 w-4 text-teal-400" />
                  <span className="font-semibold text-sm">{pack.ratio}</span>
                </div>
                <ul className="space-y-1 mb-2">
                  {pack.sizes.map((s) => (
                    <li key={s} className="text-xs text-foreground-60 flex items-center gap-1.5">
                      <span className="text-teal-400">→</span> {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-foreground-60/60 italic">{pack.note}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-teal-400/20 bg-teal-400/5 p-5">
            <p className="text-sm font-semibold mb-1 text-teal-300">Important: Check file sizes</p>
            <p className="text-sm text-foreground-60">
              Each ZIP must stay under 20MB — Etsy's per-file limit. At 300 DPI, a single large
              JPG can be 2–5MB. Five sizes per ZIP is usually fine, but always verify before
              uploading. If a ZIP exceeds 20MB, reduce quality to 280 DPI or split into two ZIPs.
            </p>
          </div>
        </section>

        {/* Option 2: Multiple listings */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Option 2: Multiple listings — and why it usually backfires
          </h2>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            Some sellers create separate listings per size (one for 8×10, one for 5×7, etc.) or
            per ratio pack. This appears to solve the 5-file limit but introduces new problems:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                label: "SEO dilution",
                desc: "Your reviews and sales history are split across multiple listings instead of compounding on one.",
              },
              {
                label: "Buyer confusion",
                desc: "Shoppers have to find the right listing for their size — many won't bother.",
              },
              {
                label: "Listing fees",
                desc: "Etsy charges $0.20 per listing renewal. 6 size listings = 6× the cost.",
              },
              {
                label: "Maintenance burden",
                desc: "Any update (title, photo, description) must be replicated across all listings manually.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 rounded-lg border border-border bg-surface p-4">
                <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold mb-0.5">{item.label}</p>
                  <p className="text-xs text-foreground-60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground-60 leading-relaxed">
            The ZIP strategy keeps everything in one listing. One URL, one set of reviews, one
            place to update. It's the better long-term structure for any serious Etsy print shop.
          </p>
        </section>

        {/* How SnapToSize solves this */}
        <section className="mb-14" id="snaptosize-solution">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            How SnapToSize creates your 5 ratio ZIPs automatically
          </h2>
          <p className="text-foreground-60 mb-6 leading-relaxed">
            The manual ZIP workflow works — but it takes time. For each new design, you need to
            resize 20+ files at 300 DPI, sort them into ratio groups, zip each group, check file
            sizes, and rename everything consistently. That's 30–45 minutes per listing.
          </p>
          <p className="text-foreground-60 mb-6 leading-relaxed">
            SnapToSize does this in one step. Upload your original file (any size, any ratio),
            and the tool generates 28 portrait sizes across 5 ratio packs — already sorted,
            already zipped, already under 20MB. Add Quick Export for landscape and oversized sizes
            and you get up to 70 files total, ready to upload directly to Etsy.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { step: "1", label: "Upload your artwork", desc: "Any resolution, any ratio. PNG or JPG." },
              { step: "2", label: "SnapToSize resizes", desc: "28 portrait sizes at 300 DPI, Lanczos resampling, sRGB color. Quick Export adds landscape + oversized." },
              { step: "3", label: "Download 5 ZIPs", desc: "One per ratio pack. Under 20MB each. Up to 70 files total. Upload directly to Etsy." },
            ].map((item) => (
              <div key={item.step} className="rounded-lg border border-border bg-surface p-5 text-center">
                <div
                  className="w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(45,212,191,0.15)", color: "#2DD4BF" }}
                >
                  {item.step}
                </div>
                <p className="font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-xs text-foreground-60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA #2 — pain-solution after ZIP guide */}
          <div
            className="rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{
              background: "linear-gradient(135deg, rgba(45,212,191,0.08) 0%, rgba(167,139,250,0.08) 100%)",
              border: "1px solid rgba(45,212,191,0.2)",
            }}
          >
            <div className="flex-1">
              <p className="font-semibold mb-1">Stop resizing files manually</p>
              <p className="text-sm text-foreground-60">
                SnapToSize generates 28 portrait sizes + landscape + international from a single upload — 5 ratio ZIPs, ready for Etsy. Free to try, no account needed.
              </p>
            </div>
            <a href="https://app.snaptosize.com/app/quick-export" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <Button>
                Try it free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* Step-by-step: upload 5 ZIPs */}
        <section className="mb-14" id="step-by-step">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Step-by-step: upload your 5 ZIPs to one Etsy listing
          </h2>
          <ol className="space-y-5">
            {[
              {
                n: 1,
                title: "Open your Etsy listing editor",
                desc: "Go to Shop Manager → Listings → Add a listing (or edit an existing one). Select \"Digital download\" as the listing type.",
              },
              {
                n: 2,
                title: "Scroll to the Digital files section",
                desc: "You'll see 5 file upload slots. Etsy accepts ZIP, JPG, PNG, PDF, and several other formats. All 5 slots can hold ZIPs.",
              },
              {
                n: 3,
                title: "Upload each ratio ZIP",
                desc: "Upload ratio-2x3.zip, ratio-3x4.zip, ratio-4x5.zip, ratio-iso.zip, and ratio-extras.zip one by one. Each should be under 20MB.",
              },
              {
                n: 4,
                title: "Add a size guide to your description",
                desc: "Tell buyers: \"This listing includes 5 ZIP files organized by print ratio. Download the ZIP that matches your frame size.\" List what's in each ZIP.",
              },
              {
                n: 5,
                title: "List included sizes in your description",
                desc: "Buyers search by size (\"5×7 print\"). Mention every size in your description to improve Etsy search visibility for each dimension.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(45,212,191,0.15)", color: "#2DD4BF" }}
                >
                  {step.n}
                </div>
                <div>
                  <p className="font-semibold mb-1">{step.title}</p>
                  <p className="text-sm text-foreground-60 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">Related guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/what-files-to-include-etsy-digital-download", label: "What Files to Include in Etsy Digital Downloads" },
              { href: "/etsy-20mb-file-limit", label: "Etsy 20MB File Limit: How to Stay Under It" },
              { href: "/how-many-sizes-etsy-printable", label: "How Many Sizes to Include in an Etsy Listing" },
              { href: "/etsy-print-ratios", label: "Etsy Print Ratios Explained" },
              { href: "/best-resolution-for-etsy-printables", label: "Best Resolution for Etsy Printables" },
              { href: "/how-to-package-digital-wall-art-for-etsy", label: "How to Package Digital Wall Art for Etsy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm hover:border-teal-400/40 hover:bg-teal-400/5 transition-colors"
              >
                <ArrowRight className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FinalCTA #3 — conversion before FAQ */}
        <FinalCTA
          heading="Your 5 Etsy ZIPs, ready in minutes"
          description="Upload your artwork once. SnapToSize generates portrait, landscape, and international sizes — 5 ratio-organized ZIPs, exactly what Etsy's listing allows."
          buttonText="Generate sizes free →"
          appUrl="https://app.snaptosize.com?source=seo_how-to-upload-more-than-5-files-etsy&kind=guide"
          stat="Up to 70 files · 5 ZIPs · 0 manual resizing"
        />

        {/* FAQ */}
        <section className="mb-14 mt-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Frequently asked questions</h2>
          <FAQAccordion items={faqItems} />
        </section>

        <RelatedPages currentSlug="how-to-upload-more-than-5-files-etsy" />
      </div>
    </>
  );
}
