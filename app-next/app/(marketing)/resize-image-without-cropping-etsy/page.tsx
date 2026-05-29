import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Button } from "@/components/Button";
import { Check, ArrowRight, X } from "lucide-react";
import { ContextualCTA } from "@/components/ContextualCTA";

export const metadata: Metadata = {
  title: "Resize Image Without Cropping for Etsy Prints",
  description:
    "Cropping destroys artwork when you change aspect ratios. Learn why resize-without-crop matters for Etsy sellers and how SnapToSize handles it automatically.",
  alternates: {
    canonical: "https://snaptosize.com/resize-image-without-cropping-etsy",
  },
  openGraph: {
    title: "Resize Image Without Cropping for Etsy | SnapToSize",
    description:
      "Cropping destroys your artwork when you change aspect ratios. Learn why resize-without-crop matters for Etsy printable sellers — and how SnapToSize handles it automatically.",
    url: "https://snaptosize.com/resize-image-without-cropping-etsy",
    images: [
      {
        url: "/assets/og/resize-image-without-cropping-etsy.png",
        width: 1200,
        height: 630,
        alt: "Resize Image Without Cropping for Etsy Prints",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image Without Cropping for Etsy Prints",
    description:
      "Cropping destroys artwork when you change aspect ratios. Learn why resize-without-crop matters for Etsy sellers and how SnapToSize handles it automatically.",
    images: ["/assets/og/resize-image-without-cropping-etsy.png"],
  },
};

export default function ResizeImageWithoutCroppingEtsyPage() {
  const CTA_URL =
    "https://app.snaptosize.com?source=seo_resize-image-without-cropping-etsy&kind=guide";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Resize an Image Without Cropping for Etsy Prints",
    description:
      "Why resizing to a different aspect ratio usually crops your image — and how to preserve your full composition across all Etsy print sizes.",
    url: "https://snaptosize.com/resize-image-without-cropping-etsy",
    datePublished: "2026-05-28",
    dateModified: "2026-05-28",
    author: {
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
        name: "Etsy Print Sizes",
        item: "https://snaptosize.com/etsy-print-sizes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Resize Without Cropping",
        item: "https://snaptosize.com/resize-image-without-cropping-etsy",
      },
    ],
  };

  const faqs = [
    {
      q: "Can I resize an image to a different aspect ratio without cropping?",
      a: "Yes — but only if the tool uses full-canvas resize rather than auto-cropping. Most generic resize tools crop by default when the target ratio doesn't match the source. SnapToSize uses full-canvas resize: it fits your original artwork into the new ratio dimensions without cutting any edges.",
    },
    {
      q: "What happens if I force an 8×10 image into a 12×18 frame size?",
      a: "An 8×10 is a 4:5 ratio. A 12×18 is a 2:3 ratio. They don't share the same shape. If you force-resize without cropping, the image gets slightly stretched to fill the new canvas. If a tool auto-crops, it cuts off the top and bottom (or sides) of your artwork. Neither result is identical to the original — which is why sellers need separate ratio-correct files for each group of sizes.",
    },
    {
      q: "Does SnapToSize crop my image when resizing?",
      a: "No. SnapToSize uses full-canvas resize. Your original composition — every edge, every detail — is preserved in every output file. The tool scales your artwork to fit each ratio's pixel dimensions without removing any part of the image.",
    },
    {
      q: "What is the difference between scaling and cropping an image?",
      a: "Scaling changes the size of the entire image — width and height both adjust. Cropping removes part of the image to fit a new shape, discarding content at the edges. When changing aspect ratios, cropping always destroys part of the composition. Scaling preserves everything but may introduce slight distortion if the ratios are very different.",
    },
    {
      q: "How do I sell the same design in multiple Etsy print sizes?",
      a: "You need one file per aspect ratio group, not one file per size. Etsy print sizes fall into 5 ratio groups: 2:3, 4:5, 3:4, ISO (A-sizes), and Extras. Upload your design once to SnapToSize and it generates all 5 ratio packs — correctly scaled, at 300 DPI, ready to upload to your Etsy listing.",
    },
    {
      q: "Why does my artwork look cut off in some frame sizes?",
      a: "Because the frame size uses a different aspect ratio than your original file. A 2:3 design (like a 12×18) will be cropped when displayed at 4:5 (like an 8×10) if the tool auto-fits. The solution is to generate a separate 4:5 file from your original — scaled to fit the new ratio — rather than letting buyers or printers crop it at point of sale.",
    },
    {
      q: "Can I resize a 2:3 image to 4:5 without losing edges?",
      a: "Yes, with full-canvas resize. A 2:3 image is taller relative to its width than a 4:5. Scaling it to 4:5 compresses the height very slightly — no edges are removed. The composition is fully preserved. SnapToSize does this automatically when generating ratio packs.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
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

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-xs text-foreground-60/60">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/etsy-print-sizes"
            className="hover:text-foreground transition-colors"
          >
            Etsy Print Sizes
          </Link>
          <span>/</span>
          <span className="text-foreground-60">Resize Without Cropping</span>
        </nav>

        {/* Hero */}
        <div
          className="relative mb-16 overflow-hidden rounded-2xl"
          style={{
            background:
              "radial-gradient(120% 140% at 80% 0%, #0b1f1d 0%, #080d0d 55%, #060909 100%)",
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.04) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          {/* Glow orbs */}
          <div
            className="absolute -top-16 right-8 h-80 w-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.14), transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.10), transparent 70%)" }}
          />
          {/* Content */}
          <div className="relative z-10 px-8 py-14 md:py-20">
            <p
              className="mb-4 flex items-center gap-3 text-xs font-mono font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#2DD4BF" }}
            >
              <span
                className="inline-block h-px w-8"
                style={{ background: "#2DD4BF" }}
              />
              Ratio Workflow · Concept Guide
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ maxWidth: "780px" }}>
              How to Resize an Image Without Cropping for Etsy Prints
            </h1>
            <p className="text-lg text-foreground-60 mb-8" style={{ maxWidth: "640px" }}>
              When you change aspect ratios, most tools crop your artwork to fit.
              That means lost edges, severed borders, and a composition that no
              longer looks like your original. Here&apos;s why it happens — and
              the correct way to handle it.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
              <Button className="text-sm px-6 py-2.5">
                Try Free — Keep Every Edge Intact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Full composition preserved", "No edges cut", "All 5 Etsy ratios"].map((pill) => (
                <span
                  key={pill}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs text-foreground-60"
                  style={{ background: "rgba(45,212,191,0.08)", border: "1px solid rgba(45,212,191,0.15)" }}
                >
                  <svg className="h-3 w-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* QuickAnswer */}
        <QuickAnswer question="Can you resize an image to a different aspect ratio without cropping?">
          Yes — using full-canvas resize instead of crop-to-fit. Scaling adjusts
          both dimensions to match the new ratio without removing any part of the
          image. Cropping removes content at the edges. For Etsy printable sellers,
          this means generating a separate file per ratio group (2:3, 4:5, 3:4,
          ISO) — each correctly scaled, not cropped.
        </QuickAnswer>

        {/* SECTION 1 — Why resizing usually crops */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Resizing to a Different Aspect Ratio Usually Crops Your Image
          </h2>
          <p className="text-foreground-60 mb-4">
            Every image has a shape — its aspect ratio. A 12×18 print is 2:3 (height
            is 1.5× the width). An 8×10 print is 4:5 (height is 1.25× the width).
            These are different shapes.
          </p>
          <p className="text-foreground-60 mb-4">
            When you ask a tool to resize a 2:3 image into a 4:5 slot, the
            software has to reconcile two incompatible shapes. Most tools solve
            this by cropping: they fill the new canvas by zooming into the
            original and cutting off whatever doesn&apos;t fit. It&apos;s the
            easiest algorithm, so it&apos;s the default.
          </p>
          <p className="text-foreground-60">
            The result: your carefully composed artwork arrives at Etsy buyers with
            the top and bottom trimmed. Subject matter gets clipped. White borders
            disappear. Decorative elements at the edges vanish. The print no longer
            looks like what you designed.
          </p>
        </section>

        {/* SECTION 2 — Scale vs Crop diagram */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What &ldquo;Resize Without Cropping&rdquo; Actually Means: Scale vs Crop
          </h2>
          <p className="text-foreground-60 mb-8">
            Two fundamentally different operations — same target size, different results:
          </p>

          {/* CSS diagram: side-by-side scale vs crop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Scale */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "linear-gradient(135deg, #0c1a18 0%, #091310 100%)",
                border: "1px solid rgba(45,212,191,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ background: "rgba(45,212,191,0.15)" }}
                >
                  <Check className="h-3.5 w-3.5" style={{ color: "#2DD4BF" }} />
                </div>
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-widest"
                  style={{ color: "#2DD4BF" }}
                >
                  Full-canvas resize
                </span>
              </div>
              {/* Visual: original 2:3 box → scaled 4:5 box, full artwork preserved */}
              <div className="flex items-end gap-4 mb-4">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="relative flex items-center justify-center rounded"
                    style={{
                      width: 60,
                      height: 90,
                      background: "linear-gradient(160deg, #1e3a34 0%, #0d2420 100%)",
                      border: "1.5px solid rgba(45,212,191,0.35)",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(45,212,191,0.06) 6px, rgba(45,212,191,0.06) 7px)",
                      }}
                    />
                    <span
                      className="relative text-[10px] font-mono font-bold"
                      style={{ color: "#2DD4BF" }}
                    >
                      2:3
                    </span>
                  </div>
                  <span className="text-[10px] text-foreground-60/60 font-mono">original</span>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-60/40 mb-6 flex-shrink-0" />
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="relative flex items-center justify-center rounded"
                    style={{
                      width: 68,
                      height: 85,
                      background: "linear-gradient(160deg, #1e3a34 0%, #0d2420 100%)",
                      border: "1.5px solid rgba(45,212,191,0.55)",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(45,212,191,0.06) 6px, rgba(45,212,191,0.06) 7px)",
                      }}
                    />
                    <span
                      className="relative text-[10px] font-mono font-bold"
                      style={{ color: "#2DD4BF" }}
                    >
                      4:5
                    </span>
                  </div>
                  <span className="text-[10px] text-foreground-60/60 font-mono">output</span>
                </div>
              </div>
              <p className="text-sm text-foreground-60">
                Both dimensions are adjusted to fit the new ratio. The entire
                artwork is present — edges intact, subject centred, composition
                unchanged. Slight ratio difference is absorbed by the scaling
                step.
              </p>
            </div>

            {/* Crop */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "linear-gradient(135deg, #1a0c0c 0%, #100909 100%)",
                border: "1px solid rgba(239,68,68,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ background: "rgba(239,68,68,0.15)" }}
                >
                  <X className="h-3.5 w-3.5" style={{ color: "#ef4444" }} />
                </div>
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-widest"
                  style={{ color: "#ef4444" }}
                >
                  Crop-to-fit
                </span>
              </div>
              {/* Visual: original 2:3 with red crop zone shown */}
              <div className="flex items-end gap-4 mb-4">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="relative flex items-center justify-center rounded"
                    style={{
                      width: 60,
                      height: 90,
                      background: "linear-gradient(160deg, #2a1a1a 0%, #1a1010 100%)",
                      border: "1.5px solid rgba(239,68,68,0.35)",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(239,68,68,0.06) 6px, rgba(239,68,68,0.06) 7px)",
                      }}
                    />
                    {/* red crop indicator top */}
                    <div
                      className="absolute top-0 left-0 right-0 rounded-t"
                      style={{ height: 10, background: "rgba(239,68,68,0.35)" }}
                    />
                    {/* red crop indicator bottom */}
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-b"
                      style={{ height: 10, background: "rgba(239,68,68,0.35)" }}
                    />
                    <span
                      className="relative text-[10px] font-mono font-bold"
                      style={{ color: "#ef4444" }}
                    >
                      2:3
                    </span>
                  </div>
                  <span className="text-[10px] text-foreground-60/60 font-mono">original</span>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-60/40 mb-6 flex-shrink-0" />
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="relative flex items-center justify-center rounded"
                    style={{
                      width: 68,
                      height: 68,
                      background: "linear-gradient(160deg, #2a1a1a 0%, #1a1010 100%)",
                      border: "1.5px solid rgba(239,68,68,0.55)",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(239,68,68,0.06) 6px, rgba(239,68,68,0.06) 7px)",
                      }}
                    />
                    <span
                      className="relative text-[10px] font-mono font-bold"
                      style={{ color: "#ef4444" }}
                    >
                      1:1
                    </span>
                  </div>
                  <span className="text-[10px] text-foreground-60/60 font-mono">cropped</span>
                </div>
              </div>
              <p className="text-sm text-foreground-60">
                The tool zooms in and discards the parts that don&apos;t fit the
                new canvas. Top and bottom edges (red zones) are removed. Your
                subject may be cut, borders disappear, and the output is a
                different composition.
              </p>
            </div>
          </div>

          <p className="text-foreground-60">
            For a deeper look at how specific ratios compare, see{" "}
            <Link
              href="/2-3-vs-4-5-ratio"
              className="text-accent underline hover:no-underline"
            >
              2:3 vs 4:5 ratio — when to use each for Etsy prints
            </Link>
            .
          </p>
        </section>

        {/* SECTION 3 — Ratio mismatch problem */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Ratio Mismatch Problem: Why 8×10 and 12×18 Can&apos;t Share One File
          </h2>
          <p className="text-foreground-60 mb-4">
            This is the core Etsy printable workflow problem that no AI
            outpainting tool addresses: Etsy buyers expect to download a file
            that prints correctly at the size they chose. If you upload a single
            2:3 file for every size, it will print incorrectly at 4:5 sizes like
            8×10 or 16×20 — either cropped by the buyer&apos;s printer or
            distorted by the printing service.
          </p>
          <p className="text-foreground-60 mb-6">
            The five{" "}
            <Link
              href="/etsy-print-ratios"
              className="text-accent underline hover:no-underline"
            >
              Etsy print ratios
            </Link>{" "}
            each need their own file:
          </p>

          {/* Ratio table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <th className="text-left py-3 pr-6 text-foreground-60/60 font-mono text-xs uppercase tracking-widest">
                    Ratio
                  </th>
                  <th className="text-left py-3 pr-6 text-foreground-60/60 font-mono text-xs uppercase tracking-widest">
                    Common sizes
                  </th>
                  <th className="text-left py-3 text-foreground-60/60 font-mono text-xs uppercase tracking-widest">
                    Needs its own file?
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ratio: "2:3", sizes: "4×6, 8×12, 12×18, 24×36", yes: true },
                  { ratio: "4:5", sizes: "8×10, 16×20, 40×50 cm", yes: true },
                  { ratio: "3:4", sizes: "6×8, 9×12, 12×16, 18×24", yes: true },
                  { ratio: "ISO (A-sizes)", sizes: "A4, A3, A2, A1", yes: true },
                  { ratio: "Extras", sizes: "5×7, 11×14, 18×24 (US)", yes: true },
                ].map((row) => (
                  <tr
                    key={row.ratio}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td className="py-3 pr-6 font-mono font-semibold text-foreground">
                      {row.ratio}
                    </td>
                    <td className="py-3 pr-6 text-foreground-60">{row.sizes}</td>
                    <td className="py-3">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold"
                        style={{ color: "#2DD4BF" }}
                      >
                        <Check className="h-3 w-3" /> Yes
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-foreground-60 text-sm">
            For the full size list by ratio, see{" "}
            <Link
              href="/etsy-print-sizes"
              className="text-accent underline hover:no-underline"
            >
              Etsy print sizes — complete guide
            </Link>
            .
          </p>
        </section>

        {/* SECTION 4 — Three approaches */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Three Ways to Change Aspect Ratio Without Cropping (and Their Trade-offs)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              {
                label: "1. AI outpainting",
                color: "#a78bfa",
                verdict: "Not for print",
                desc: "Extends the canvas by generating new background content with AI. Useful for social media. Unreliable for commercial print: generated pixels vary in quality, may introduce artifacts, and the 'new' areas aren't your original artwork.",
              },
              {
                label: "2. Add padding / letterbox",
                color: "#f59e0b",
                verdict: "Manual, lossy",
                desc: "Add white or transparent borders to fill the new canvas shape. Preserves the original — but introduces margins the buyer may not want, and looks unfinished if the artwork was designed to bleed to the edge.",
              },
              {
                label: "3. Full-canvas resize",
                color: "#2DD4BF",
                verdict: "Correct for Etsy",
                desc: "Scale both dimensions to fit the new ratio. The composition is fully preserved — no content removed, no AI-generated fill. Slight geometric adjustment between close ratios (e.g. 2:3 → 4:5) is imperceptible at print scale.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5"
                style={{
                  background: "linear-gradient(135deg, #0e0f1a 0%, #080910 100%)",
                  border: `1px solid ${item.color}30`,
                }}
              >
                <p
                  className="text-xs font-mono font-semibold uppercase tracking-widest mb-1"
                  style={{ color: item.color }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm font-bold mb-3"
                  style={{ color: item.color }}
                >
                  {item.verdict}
                </p>
                <p className="text-sm text-foreground-60">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground-60">
            The practical question for Etsy sellers isn&apos;t which technique
            is theoretically best — it&apos;s which one produces files buyers can
            print without issues. Full-canvas resize is the only deterministic
            approach: same input always produces the same output, no AI variance.
          </p>
        </section>

        {/* SECTION 5 — SnapToSize approach + mid-page CTA */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How SnapToSize Handles This: Full-Canvas Resize, Every Ratio Preserved
          </h2>
          <p className="text-foreground-60 mb-4">
            SnapToSize was built specifically for this problem. Upload your
            original design once — SnapToSize generates all 5 ratio packs using
            full-canvas resize. No cropping. No AI fill. No borders. Your full
            composition, at the correct pixel dimensions for every Etsy print
            size.
          </p>

          <ul className="mb-6 space-y-2">
            {[
              "Full-canvas resize — no content removed, ever",
              "All 5 Etsy ratio groups in one upload",
              "300 DPI output, organized ZIP structure",
              "No Photoshop — no manual ratio math",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground-60">
                <Check
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: "#2DD4BF" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-foreground-60 mb-8">
            The alternative — using a generic tool that crops by default — means
            every ratio needs manual intervention. Five packs × however many
            designs you sell = hours of Photoshop work that doesn&apos;t need to
            happen. For how resize affects print quality more broadly, see the{" "}
            <Link
              href="/how-to-resize-images-for-etsy"
              className="text-accent underline hover:no-underline"
            >
              complete guide to resizing images for Etsy
            </Link>
            .
          </p>

          <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
            <Button className="text-sm px-6 py-2.5">
              Try Free — Upload Once, Get Every Ratio Intact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </section>

        {/* ListingOutputShowcase — MANDATORY */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            One Upload. Five Ratio-Correct Files. Nothing Cropped.
          </h2>
          <p className="text-foreground-60 mb-8">
            Each output file is scaled to its ratio&apos;s exact pixel
            dimensions — your full composition preserved across every pack. No
            edges removed. No AI-generated fill.
          </p>
          <ListingOutputShowcase
            artwork="misty_lake"
            heading="One upload. Five ratio-correct files."
            subtext="Full-canvas resize preserves your full composition at every ratio — no cropping, no AI fill, no manual Photoshop work."
          />
        </section>

        {/* SECTION 6 — Which ratios you need */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Which Ratios You Need for Etsy Prints (and Why Each Needs Its Own File)
          </h2>
          <p className="text-foreground-60 mb-6">
            Etsy buyers order prints in standard frame sizes. Those sizes cluster
            into 5 ratio groups. If a buyer orders an 8×10 (4:5 ratio) and you
            only have a 2:3 file, one of three things happens: the print service
            crops it, the buyer crops it manually, or the listing photo misleads
            them about what they&apos;ll receive. None of these outcomes are good
            for reviews.
          </p>
          <p className="text-foreground-60 mb-6">
            The correct workflow: one file per ratio group, all generated from
            the same original at full resolution. SnapToSize does this
            automatically — see{" "}
            <Link
              href="/etsy-print-ratios"
              className="text-accent underline hover:no-underline"
            >
              Etsy print ratios explained
            </Link>{" "}
            for a breakdown of which sizes fall in which group. If you&apos;re
            deciding between the two most common ratios, see{" "}
            <Link
              href="/2-3-vs-4-5-ratio"
              className="text-accent underline hover:no-underline"
            >
              2:3 vs 4:5 ratio
            </Link>
            .
          </p>

          <ContextualCTA
            problem="Selling the same design in multiple Etsy sizes requires a separate file per aspect ratio."
            solution="SnapToSize generates all 5 ratio packs from one upload — full-canvas resize, nothing cropped."
            appUrl={CTA_URL}
            buttonText="Try Free — Upload Once"
          />
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion
            items={faqs.map((f) => ({ question: f.q, answer: f.a }))}
          />
        </section>

        <FinalCTA
          heading="Upload Once. Every Ratio, Intact."
          stat="5 ratio packs"
          description="SnapToSize generates all 5 Etsy ratio packs using full-canvas resize — no cropping, no Photoshop, no manual ratio math."
          appUrl={CTA_URL}
          buttonText="Try Free"
        />

        <RelatedPages currentSlug="resize-image-without-cropping-etsy" />
      </div>
    </>
  );
}
