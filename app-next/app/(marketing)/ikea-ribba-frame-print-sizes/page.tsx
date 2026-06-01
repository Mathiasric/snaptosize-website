import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { Check, ArrowRight, AlertCircle, Frame } from "lucide-react";

const CTA_URL =
  "https://app.snaptosize.com?source=seo_ikea-ribba-frame-print-sizes&kind=guide";

const SLUG = "ikea-ribba-frame-print-sizes";

export const metadata: Metadata = {
  title: "IKEA Ribba Frame Print Sizes — Exact Pixels at 300 DPI",
  description:
    "Exact pixel dimensions for every IKEA Ribba frame size at 300 DPI. Create Etsy digital prints that fit perfectly — no guessing, no cropping, no Photoshop.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "IKEA Ribba Frame Print Sizes — Exact Pixels at 300 DPI",
    description:
      "Exact pixel dimensions for every IKEA Ribba frame size at 300 DPI. Create prints that fit perfectly — no guessing, no manual Photoshop work.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: ["/assets/og/ikea-ribba-frame-print-sizes.png"],
    modifiedTime: "2026-05-30T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKEA Ribba Frame Print Sizes — Exact Pixels at 300 DPI",
    description:
      "Exact pixel dimensions for every IKEA Ribba frame size at 300 DPI. Create Etsy digital prints that fit perfectly.",
    images: ["/assets/og/ikea-ribba-frame-print-sizes.png"],
  },
};

const ribbaTable = [
  {
    frame: "IKEA Ribba 5×7\"",
    inches: "5×7\"",
    cm: "13×18 cm",
    ratio: "5:7",
    pixels: "1500×2100",
    pack: "Extras",
    inPack: false,
  },
  {
    frame: "IKEA Ribba 8×10\"",
    inches: "8×10\"",
    cm: "20×25 cm",
    ratio: "4:5",
    pixels: "2400×3000",
    pack: "4:5 Pack",
    inPack: true,
  },
  {
    frame: "IKEA Ribba 12×16\"",
    inches: "12×16\"",
    cm: "30×40 cm",
    ratio: "3:4",
    pixels: "3600×4800",
    pack: "3:4 Pack",
    inPack: true,
  },
  {
    frame: "IKEA Ribba 16×20\"",
    inches: "16×20\"",
    cm: "40×50 cm",
    ratio: "4:5",
    pixels: "4800×6000",
    pack: "4:5 Pack",
    inPack: true,
  },
  {
    frame: "IKEA Ribba 20×28\"",
    inches: "20×28\"",
    cm: "50×70 cm",
    ratio: "5:7",
    pixels: "6000×8400",
    pack: "Not in standard packs",
    inPack: false,
  },
];

const faqs = [
  {
    question: "What size print do I need for an IKEA Ribba 8×10 frame?",
    answer:
      "For an IKEA Ribba 8×10 frame, create a print at exactly 2400×3000 pixels at 300 DPI. This is a 4:5 aspect ratio. If you sell on Etsy using SnapToSize, the 4:5 pack automatically generates this file — just upload once and download the ready-to-sell ZIP.",
  },
  {
    question:
      "What are the pixel dimensions for an IKEA Ribba 12×16 frame at 300 DPI?",
    answer:
      "The IKEA Ribba 12×16 frame (also sold as 30×40 cm) requires a print at 3600×4800 pixels at 300 DPI. This is a 3:4 ratio. The IKEA sizing is metric-first — 30×40 cm and 12×16 inch are the same frame. SnapToSize generates this size automatically in the 3:4 pack.",
  },
  {
    question:
      "Do I need to create a separate file for portrait and landscape Ribba frames?",
    answer:
      "No. SnapToSize generates both portrait and landscape versions of every size automatically from a single upload. Your ZIP includes both orientations — buyers can choose the one that matches their frame orientation. You only need to upload once.",
  },
  {
    question: "What print size fits the large IKEA Ribba 20×28 frame?",
    answer:
      "The IKEA Ribba 20×28 frame needs a print at 6000×8400 pixels at 300 DPI. This is a 5:7 ratio — not 2:3 (which would be 20×30). If you upload a 2:3 file expecting it to fill a 20×28 frame, it will be slightly cropped. Use the exact 5:7 ratio (6000×8400 px) for a perfect fit. This size is not in the standard SnapToSize packs but can be added via the Extras option.",
  },
  {
    question: "Why doesn't my US letter print fit in a Ribba frame?",
    answer:
      "US Letter paper is 8.5×11 inches — an 11:8.5 ratio that matches no Ribba frame. Ribba frames use ratios like 4:5, 3:4, and 5:7. A Letter-size print will either hang over the frame edges or leave visible gaps depending on orientation. Always create your Etsy print at the exact pixel dimensions matching the target frame ratio.",
  },
  {
    question: "Can I sell one design for multiple IKEA Ribba frame sizes?",
    answer:
      "Yes — this is exactly the SnapToSize workflow. Upload your artwork once, and SnapToSize generates separate ratio-correct files for the 8×10 (4:5), 12×16 (3:4), and 16×20 (4:5) Ribba sizes automatically. Each file is a full-canvas resize — no cropping, no letterboxing. List all three sizes in your Etsy shop from a single upload.",
  },
  {
    question: "What ratio is the IKEA Ribba 16×20 frame?",
    answer:
      "The IKEA Ribba 16×20 frame is a 4:5 aspect ratio (same as the 8×10). At 300 DPI, you need a 4800×6000 pixel file. Because it shares the 4:5 ratio with the 8×10, any design you create for one frame will display correctly in the other — just at a different physical size.",
  },
];

export default function IkeaRibbaFramePrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "IKEA Ribba Frame Print Sizes: Exact Pixels at 300 DPI for Every Frame",
    description:
      "Exact pixel dimensions for every IKEA Ribba frame size at 300 DPI — including the 5×7, 8×10, 12×16, 16×20, and 20×28. Covers the metric vs inch confusion, portrait/landscape, and which sizes are auto-covered by SnapToSize packs.",
    url: "https://snaptosize.com/ikea-ribba-frame-print-sizes",
    datePublished: "2026-05-29",
    dateModified: "2026-05-29",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
      logo: {
        "@type": "ImageObject",
        url: "https://snaptosize.com/logo.png",
      },
    },
    image: "https://snaptosize.com/assets/og/ikea-ribba-frame-print-sizes.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://snaptosize.com/ikea-ribba-frame-print-sizes",
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
        name: "IKEA Ribba Frame Print Sizes",
        item: "https://snaptosize.com/ikea-ribba-frame-print-sizes",
      },
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
      {/* JSON-LD */}
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

      <AuthorByline lastUpdated="May 30, 2026" />

      {/* ===== HERO — full-bleed, light theme with geometric CSS accents ===== */}
      <section
        className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f0fdf9 0%, #f8faff 45%, #faf5ff 100%)",
        }}
      >
        {/* Decorative frame grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(45,212,191,0.07) 39px, rgba(45,212,191,0.07) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(45,212,191,0.07) 39px, rgba(45,212,191,0.07) 40px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Corner blob accents */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative container mx-auto px-4 md:px-8 max-w-[1200px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/etsy-print-sizes"
              className="hover:text-slate-600 transition-colors"
            >
              Etsy Print Sizes
            </Link>
            <span>/</span>
            <span className="text-slate-600">IKEA Ribba Frame Sizes</span>
          </nav>

          <div style={{ maxWidth: "48rem" }}>
            {/* Label chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-xs font-semibold tracking-wide uppercase"
              style={{ background: "rgba(45,212,191,0.12)", color: "#0f766e" }}>
              <Frame className="w-3.5 h-3.5" />
              Frame Reference
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
              IKEA Ribba Frame Print Sizes:{" "}
              <span style={{ color: "#2DD4BF" }}>Exact Pixels</span> at 300 DPI
              for Every Frame
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8" style={{ maxWidth: "42rem" }}>
              All five IKEA Ribba sizes — exact pixel dimensions at 300 DPI,
              ratio math explained, and a clear answer on which sizes your
              existing{" "}
              <Link
                href="/etsy-print-sizes"
                className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
              >
                Etsy print packs
              </Link>{" "}
              already cover. No guessing, no cropping, no Photoshop.
            </p>

            {/* Key stat callout */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border mb-8"
              style={{
                background: "rgba(45,212,191,0.08)",
                borderColor: "rgba(45,212,191,0.25)",
              }}
            >
              <Check className="w-5 h-5 text-teal-500 flex-shrink-0" />
              <span className="text-slate-700 font-medium">
                <strong className="text-slate-900">3 of 5</strong> Ribba sizes
                are covered automatically by SnapToSize packs — one upload,
                done.
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Try Free — Upload Once, Get Every Ribba Size
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">
        {/* QuickAnswer — featured snippet target */}
        <QuickAnswer question="What pixel dimensions do I need for IKEA Ribba frames at 300 DPI?">
          IKEA Ribba frames come in five sizes: 5×7&quot; (1500×2100 px), 8×10&quot;
          (2400×3000 px), 12×16&quot; (3600×4800 px), 16×20&quot; (4800×6000 px), and
          20×28&quot; (6000×8400 px) — all at 300 DPI. The 8×10, 12×16, and 16×20
          sizes use standard 4:5 and 3:4 ratios and are auto-generated by
          SnapToSize packs. The 20×28 uses a 5:7 ratio, not 2:3.
        </QuickAnswer>

        {/* SECTION 1: Metric vs Inch Problem */}
        <section className="mb-16 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Ribba Frames Confuse Digital Print Sellers
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IKEA markets Ribba frames using their metric (cm) dimensions
            internationally — but US listings show inch equivalents. This
            creates a trap: a seller searches &ldquo;12×16 print size pixels&rdquo; and
            finds one answer, then searches &ldquo;30×40 cm print size pixels&rdquo; and
            finds a different number. They&rsquo;re the same frame.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The second confusion: physical print shops list <em>mat opening</em>{" "}
            sizes, not frame sizes. A matboard guide for Ribba will show a
            smaller opening (e.g., 11×14.5 for a 12×16 frame). If you create a
            digital print at that smaller dimension, it&rsquo;s the wrong size for the
            frame. For Etsy digital prints, always use the{" "}
            <strong>full frame dimension</strong>, not the mat opening.
          </p>
          <p className="text-slate-600 leading-relaxed">
            This page uses full frame dimensions at 300 DPI — the correct target
            for Etsy digital art sellers. See also:{" "}
            <Link
              href="/best-resolution-for-etsy-printables"
              className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
            >
              best resolution for Etsy printables
            </Link>{" "}
            for why 300 DPI is the standard.
          </p>
        </section>

        {/* SECTION 2: The Main Size Chart Table */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Complete Ribba Frame Size Chart — Pixels at 300 DPI
          </h2>
          <p className="text-slate-500 mb-6 text-sm">
            Portrait dimensions listed. Landscape = dimensions swapped.
            SnapToSize generates both automatically.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Frame
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Inches
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Centimetres
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Ratio
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    Pixels @ 300 DPI
                  </th>
                  <th className="px-4 py-3.5 text-left font-semibold text-slate-600 text-xs uppercase tracking-wider">
                    SnapToSize Pack
                  </th>
                </tr>
              </thead>
              <tbody>
                {ribbaTable.map((row, i) => (
                  <tr
                    key={row.frame}
                    className={`border-t border-slate-100 transition-colors ${
                      row.inPack ? "bg-teal-50/60" : ""
                    } ${i % 2 === 0 && !row.inPack ? "bg-white" : !row.inPack ? "bg-slate-50/40" : ""}`}
                  >
                    <td className="px-4 py-3.5 font-semibold text-slate-800">
                      {row.frame}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-slate-700">
                      {row.inches}
                    </td>
                    <td className="px-4 py-3.5 text-slate-500 font-mono text-xs">
                      {row.cm}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-block font-mono text-xs font-semibold px-2 py-0.5 rounded"
                        style={{ background: "rgba(45,212,191,0.10)", color: "#0f766e" }}>
                        {row.ratio}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-mono text-slate-800 font-semibold">
                      {row.pixels}
                    </td>
                    <td className="px-4 py-3.5">
                      {row.inPack ? (
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: "rgba(45,212,191,0.15)",
                            color: "#0f766e",
                          }}
                        >
                          <Check className="w-3 h-3" />
                          {row.pack}
                        </span>
                      ) : (
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium text-slate-500 bg-slate-100">
                          {row.pack}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400 mt-3">
            Landscape versions: swap width and height (e.g., 2100×1500 for 5×7
            landscape). SnapToSize generates landscape files automatically.
          </p>
        </section>

        {/* SECTION 3: Which Sizes Are In Your Packs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Which Ribba Sizes Are Already In Your SnapToSize Packs
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Three of the five Ribba sizes use standard US print ratios — and
            SnapToSize generates those automatically from a single upload. You
            don&rsquo;t need to resize manually or open Photoshop.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {ribbaTable
              .filter((r) => r.inPack)
              .map((row) => (
                <div
                  key={row.frame}
                  className="rounded-xl border p-5"
                  style={{
                    borderColor: "rgba(45,212,191,0.30)",
                    background: "rgba(45,212,191,0.04)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(45,212,191,0.20)" }}
                    >
                      <Check className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="font-bold text-slate-800">{row.frame}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono mb-1">
                    {row.pixels} px · {row.ratio}
                  </p>
                  <p className="text-sm text-slate-600">
                    Covered by the{" "}
                    <strong className="text-teal-700">{row.pack}</strong> —
                    generated automatically.
                  </p>
                </div>
              ))}
          </div>

          <p className="text-slate-600 leading-relaxed">
            The 5×7 size is included in the Extras pack. The 20×28 is a
            non-standard ratio (5:7 — not covered by any default pack). See the
            section below for how to handle it. For full pack details, see the{" "}
            <Link
              href="/etsy-print-sizes"
              className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
            >
              complete Etsy print sizes guide
            </Link>
            .
          </p>
        </section>

        {/* Output proof — show before converting */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            One Upload. Every Ratio-Correct File. Nothing Cropped.
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            SnapToSize generates ratio-correct output files for every Ribba size
            in one upload — no manual resizing, no cropping, no distortion.
          </p>
          <ListingOutputShowcase
            artwork="wildflower"
            heading="One upload. Every Ribba-ready size."
            subtext="Full-canvas resize preserves your full composition — no cropping, no letterboxing."
          />
        </section>

        {/* Mid-page ContextualCTA */}
        <ContextualCTA
          problem="Creating separate files for every Ribba frame size in Photoshop takes hours per listing."
          solution="SnapToSize covers 8×10, 12×16, and 16×20 Ribba sizes automatically from one upload. Portrait and landscape both included."
          appUrl={CTA_URL}
          buttonText="Try Free — Upload Once"
        />

        {/* SECTION 4: Portrait vs Landscape */}
        <section className="mb-16 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Portrait vs Landscape: How to Create Both From One Upload
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Ribba frames can hang portrait or landscape. A buyer who orders your
            8×10 print might hang their frame either way. SnapToSize generates
            both orientations in every{" "}
            <Link
              href="/etsy-print-ratios"
              className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
            >
              print ratio pack
            </Link>{" "}
            — so your ZIP always contains both the 2400×3000 (portrait) and
            3000×2400 (landscape) 8×10 files without any extra work.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For listings, mention in your description that both orientations are
            included. Many Etsy sellers list this as &ldquo;portrait + landscape
            versions&rdquo; to reduce buyer confusion at checkout.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The same logic applies to 12×16 and 16×20. See the{" "}
            <Link
              href="/print-size-for-frame-guide"
              className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
            >
              print-to-frame guide
            </Link>{" "}
            for how different frame sizes relate to each other and how mat sizes
            affect the visible print area.
          </p>
        </section>

        {/* SECTION 5: The 20×28 Nuance */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            The 20×28 Size: Why It&rsquo;s a 5:7 Ratio (Not 2:3)
          </h2>

          {/* Alert callout */}
          <div
            className="flex gap-4 p-5 rounded-xl border mb-6"
            style={{
              background: "rgba(251,191,36,0.06)",
              borderColor: "rgba(251,191,36,0.25)",
            }}
          >
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800 mb-1">
                Common mistake: uploading a 2:3 file for a 20×28 frame
              </p>
              <p className="text-sm text-slate-600">
                A 2:3 print would be 20×30 inches. The Ribba 20×28 frame is{" "}
                <strong>20×28</strong> — a 5:7 ratio. Uploading the wrong ratio
                means your buyer&rsquo;s print gets cropped or won&rsquo;t fit.
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-4">
            The IKEA Ribba 20×28&quot; (50×70 cm) is the only Ribba size that uses a
            non-US-standard ratio. Most US print workflows are built around 2:3
            (20×30), 4:5 (16×20), and 3:4 (12×16). A 5:7 ratio falls in between
            and doesn&rsquo;t fit any of those standard packs.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For this size, you need to create a custom file at exactly{" "}
            <strong>6000×8400 pixels at 300 DPI</strong>. This is a true 5:7
            ratio. If you start from a 2:3 artwork and resize to 5:7, the
            composition will be slightly compressed vertically — about 6.7%
            shorter than a 2:3 equivalent. For most artwork this is invisible,
            but for portraits or geometric designs the difference may be
            noticeable.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Best practice: design natively at 5:7 if you specifically target the
            Ribba 20×28, or use{" "}
            <Link
              href="/etsy-8x10-print-size"
              className="text-teal-600 underline decoration-dotted underline-offset-4 hover:no-underline"
            >
              a 4:5 design
            </Link>{" "}
            and focus your listing on the 8×10 and 16×20 Ribba frames instead.
          </p>
        </section>

        {/* SECTION 6: Step-by-Step Create a Ribba-Ready Print */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Step-by-Step: Create a Ribba-Ready Etsy Digital Print
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The fastest path to covering all Ribba sizes in your Etsy shop:
          </p>

          <ol className="space-y-5">
            {[
              {
                step: "1",
                heading: "Upload your artwork to SnapToSize",
                body: "Upload at the highest resolution you have — at least 300 DPI at the target print size. The tool handles all the ratio math from there.",
              },
              {
                step: "2",
                heading: "Download the 3:4 pack (covers 12×16 Ribba)",
                body: "Your ZIP includes the 3600×4800 px file ready to list as a 12×16 / 30×40 cm Etsy digital download.",
              },
              {
                step: "3",
                heading: "Download the 4:5 pack (covers 8×10 and 16×20 Ribba)",
                body: "The same pack generates both sizes — 2400×3000 for the 8×10 and 4800×6000 for the 16×20. Portrait and landscape both included.",
              },
              {
                step: "4",
                heading: "List each size separately on Etsy",
                body: "Create separate listings for each Ribba size or bundle them. Mention the frame compatibility clearly: \"Fits IKEA Ribba 8×10 frame\" or similar.",
              },
              {
                step: "5",
                heading: "Handle the 20×28 separately if needed",
                body: "If your design works in 5:7, create a custom export at 6000×8400 px and list it as a dedicated \"20×28 / IKEA Ribba large frame\" download.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(45,212,191,0.15)", color: "#0f766e" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">
                    {item.heading}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Inline CTA */}
          <div className="mt-8">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
              <Button className="text-sm px-6 py-2.5">
                Start Free — Get All Ribba Sizes From One Upload
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            IKEA Ribba Frame Print Size FAQ
          </h2>
          <FAQAccordion
            items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          />
        </section>

        {/* FinalCTA */}
        <FinalCTA
          heading="Upload Once. Get Every Ribba Frame Size Ready to Sell."
          stat="3 of 5 Ribba sizes auto-covered · 300 DPI · Portrait + landscape included"
          description="SnapToSize generates the 8×10, 12×16, and 16×20 Ribba print files from a single upload — full-canvas resize, no cropping, no Photoshop. Free to try."
          buttonText="Try SnapToSize Free"
          appUrl={CTA_URL}
        />

        <div className="mt-16">
          <RelatedPages currentSlug="ikea-ribba-frame-print-sizes" />
        </div>
      </div>
    </>
  );
}
