import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, ArrowRight, X } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "SnapToSize vs Canva for Etsy Print Resizing",
  description:
    "Compare SnapToSize and Canva for resizing Etsy printable art. See why sellers use both — design in Canva, produce all print sizes in seconds.",
  alternates: {
    canonical: "https://snaptosize.com/snaptosize-vs-canva",
  },
  openGraph: {
    title: "SnapToSize vs Canva for Etsy Print Resizing",
    description:
      "Design in Canva, produce in SnapToSize. Compare the two tools Etsy sellers use to create and resize printable wall art.",
    url: "https://snaptosize.com/snaptosize-vs-canva",
    images: [
      {
        url: "/assets/og/snaptosize-vs-canva.png",
        width: 1200,
        height: 630,
        alt: "SnapToSize vs Canva for Etsy Print Resizing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapToSize vs Canva for Etsy Print Resizing",
    description:
      "Design in Canva, produce in SnapToSize. Compare the two tools for Etsy printable wall art.",
    images: ["/assets/og/snaptosize-vs-canva.png"],
  },
};

export default function SnapToSizeVsCanvaPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SnapToSize vs Canva for Etsy Print Resizing",
    description:
      "Compare SnapToSize and Canva for resizing Etsy printable wall art. Design in Canva, produce all print sizes in seconds with SnapToSize.",
    url: "https://snaptosize.com/snaptosize-vs-canva",
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
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
        name: "SnapToSize vs Canva",
        item: "https://snaptosize.com/snaptosize-vs-canva",
      },
    ],
  };

  const faqItems = [
    {
      question: "Can I resize prints for Etsy in Canva for free?",
      answer:
        "Yes, Canva Free lets you create custom-sized canvases, but you must manually create and export each size individually. There is no batch export for multiple print sizes.",
    },
    {
      question:
        "How many sizes should I include in an Etsy printable listing?",
      answer:
        "Top sellers include sizes across multiple ratios (2:3, 3:4, 4:5, ISO, and common extras). More sizes means more buyers can use your art with their frames.",
    },
    {
      question: "Does Canva export at 300 DPI?",
      answer:
        "Canva Pro allows PDF export at 300 DPI. Free accounts are limited to lower-quality exports. For JPG/PNG, Canva does not guarantee 300 DPI at specific print dimensions — you need to manually calculate pixel dimensions.",
    },
    {
      question:
        "What is the fastest way to resize one artwork into multiple print sizes?",
      answer:
        "SnapToSize generates all standard print sizes from a single upload in under 30 seconds — up to 70 files across 5 ratio packs. That compares to 1-3 hours of manual resizing per artwork in Canva or Photoshop.",
    },
    {
      question: "Do I need Photoshop to resize images for Etsy?",
      answer:
        "No. You can design in Canva or Procreate, then use SnapToSize to produce all print sizes at once. The key difference is manual (one size at a time in Canva) vs automated (all sizes from one upload in SnapToSize).",
    },
    {
      question: "Why do Etsy printables need multiple aspect ratios?",
      answer:
        "Standard frames come in different ratios. An 8\u00d710 is 4:5, a 4\u00d76 is 2:3, and an A4 is ISO. If you only offer one ratio, buyers with different frames cannot use your art.",
    },
    {
      question:
        "Can I use Canva to create art and SnapToSize to resize it?",
      answer:
        "Yes. Many sellers design in Canva, export their highest-resolution master file, then use SnapToSize to produce all print sizes at once. The two tools are complementary.",
    },
    {
      question: "What file format should Etsy printables be in?",
      answer:
        "JPG is the most common for printable wall art — it keeps files under Etsy\u2019s 20 MB limit while maintaining print quality at 300 DPI.",
    },
  ];

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

  const appUrl =
    "https://app.snaptosize.com/app/quick-export?source=seo_snaptosize-vs-canva&kind=comparison";

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

      {/* ===== HERO ===== */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0a0c14 0%, #0e1120 25%, #0d0f1a 50%, #111428 75%, #0a0c14 100%)",
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient mesh — teal accent top right */}
        <div
          className="absolute top-[-15%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #2dd4bf, transparent 70%)",
          }}
        />
        {/* Purple accent — bottom left */}
        <div
          className="absolute bottom-[-20%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />

        {/* CSS-only Design → Production visual — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "340px", height: "340px" }}
          >
            {/* "Design" canvas — upper left */}
            <div
              className="absolute rounded-lg border"
              style={{
                width: "140px",
                height: "175px",
                top: "0px",
                left: "0px",
                borderColor: "rgba(167,139,250,0.2)",
                background: "rgba(167,139,250,0.04)",
              }}
            >
              {/* Simulated design elements */}
              <div
                className="absolute rounded"
                style={{
                  width: "80px",
                  height: "8px",
                  top: "30px",
                  left: "30px",
                  background: "rgba(167,139,250,0.15)",
                }}
              />
              <div
                className="absolute rounded"
                style={{
                  width: "60px",
                  height: "6px",
                  top: "48px",
                  left: "40px",
                  background: "rgba(167,139,250,0.10)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "35px",
                  height: "35px",
                  top: "70px",
                  left: "52px",
                  background: "rgba(167,139,250,0.08)",
                  border: "1px solid rgba(167,139,250,0.12)",
                }}
              />
              {/* Label */}
              <div
                className="absolute text-[9px] font-mono tracking-wider text-center w-full"
                style={{ bottom: "12px", color: "rgba(167,139,250,0.4)" }}
              >
                DESIGN
              </div>
            </div>

            {/* Arrow */}
            <div
              className="absolute"
              style={{ top: "80px", left: "155px" }}
            >
              <div
                className="flex items-center gap-1"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                <div className="w-8 h-px bg-white/10" />
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* "Production" output — upper right: multiple small frames */}
            <div
              className="absolute"
              style={{ top: "0px", right: "0px", width: "120px" }}
            >
              {/* Stack of output files */}
              {[
                { w: "48px", h: "60px", label: "4\u00d76", top: "0px", left: "0px", color: "rgba(45,212,191,0.15)", border: "rgba(45,212,191,0.25)" },
                { w: "52px", h: "65px", label: "8\u00d710", top: "0px", left: "60px", color: "rgba(45,212,191,0.12)", border: "rgba(45,212,191,0.20)" },
                { w: "48px", h: "64px", label: "A4", top: "72px", left: "0px", color: "rgba(45,212,191,0.10)", border: "rgba(45,212,191,0.18)" },
                { w: "52px", h: "64px", label: "16\u00d720", top: "72px", left: "60px", color: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.15)" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="absolute rounded border flex items-center justify-center"
                  style={{
                    width: f.w,
                    height: f.h,
                    top: f.top,
                    left: f.left,
                    background: f.color,
                    borderColor: f.border,
                  }}
                >
                  <span
                    className="text-[8px] font-mono"
                    style={{ color: "rgba(45,212,191,0.5)" }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
              {/* "+ more" label */}
              <div
                className="absolute text-[8px] font-mono"
                style={{
                  bottom: "155px",
                  left: "35px",
                  color: "rgba(45,212,191,0.35)",
                }}
              >
                + 26 more
              </div>
              {/* Label */}
              <div
                className="absolute text-[9px] font-mono tracking-wider text-center w-full"
                style={{ top: "150px", color: "rgba(45,212,191,0.4)" }}
              >
                PRODUCTION
              </div>
            </div>

            {/* ZIP icon area — bottom */}
            <div
              className="absolute rounded border flex items-center gap-2 px-3 py-2"
              style={{
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="text-[8px] font-mono tracking-wider"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                5 ZIPs &bull; 300 DPI &bull; &lt;20 MB
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-teal-400/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-teal-300/60 uppercase">
                Comparison
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 text-white">
                SnapToSize vs Canva for Etsy Prints
              </span>
              <span className="block text-lg md:text-xl lg:text-2xl font-semibold text-white/70">
                Design in Canva. Produce all 30+ sizes&nbsp;&mdash;
                in&nbsp;seconds.
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/50 mb-8 max-w-lg leading-relaxed">
              Canva is the best tool for creating your wall art. But turning
              one finished design into a complete multi-size listing is a
              different job. Here&apos;s how the two tools compare for Etsy
              print production.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Try SnapToSize Free
                </Button>
              </a>
              <p className="text-sm text-white/35 mt-2">
                Free &rarr; upload once, get every standard print size.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span className="font-medium text-white/60">
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span className="font-medium text-white/60">
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span className="font-medium text-white/60">
                  Portrait, landscape &amp; square
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* --- Section 2: The real bottleneck --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Real Bottleneck Isn&apos;t Design &mdash; It&apos;s
                Production
              </h2>
              <p className="text-foreground-60 mb-4">
                Creating wall art in Canva is fast. But once your design is
                finished, the production step begins. One artwork needs to
                ship in multiple ratios &mdash; 2:3, 3:4, 4:5, ISO, and
                extras &mdash; with multiple sizes in each ratio. In Canva,
                that means manually creating a new canvas for each size,
                repositioning elements, and exporting one file at a time.
              </p>
              <p className="text-foreground-60 mb-4">
                For a single artwork across all ratios, that&apos;s 1&ndash;3 hours.
                For a shop with 50+ designs, it adds up to{" "}
                <strong className="text-foreground">
                  hundreds of hours per year
                </strong>{" "}
                in repetitive manual work. Learn more about{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  resizing workflows for Etsy
                </Link>
                .
              </p>
              <p className="text-foreground-60">
                This bottleneck is why many Etsy sellers limit their
                listings to just a few sizes &mdash; and leave sales on the
                table. If your{" "}
                <Link
                  href="/etsy-digital-download-not-selling"
                  className="text-accent-light hover:underline"
                >
                  listings aren&apos;t converting
                </Link>
                , missing sizes could be a factor.
              </p>
            </div>

            {/* --- Section 3: Comparison table --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Side-by-Side: Canva vs SnapToSize for Etsy Prints
              </h2>
              <p className="text-foreground-60 mb-6">
                Both tools serve Etsy sellers &mdash; but at different stages
                of the workflow. Here&apos;s how they compare on the
                dimensions that matter for digital print production.
              </p>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Feature
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Canva
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        SnapToSize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Primary purpose
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Design creation
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Print production
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Output sizes per artwork
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        One at a time (manual)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        30+ sizes from one upload
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Batch resize
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <X className="w-4 h-4 text-red-400/60 inline" /> No
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" /> Yes
                        &mdash; all ratios at once
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Ratio awareness
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Manual (set pixel dimensions yourself)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Built-in (2:3, 3:4, 4:5, ISO, Extras)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        ZIP packaging
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <X className="w-4 h-4 text-red-400/60 inline" /> No
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" /> Organized
                        by ratio
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        300 DPI guarantee
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Pro only (PDF export). Not on JPG/PNG.
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" /> Every
                        file, every size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Professional file naming
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <X className="w-4 h-4 text-red-400/60 inline" /> No
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" />{" "}
                        <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">
                          artwork_8x10_300dpi.jpg
                        </code>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-20mb-file-limit"
                          className="text-accent-light hover:underline"
                        >
                          Etsy 20 MB compliance
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Manual (check each file)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" /> Auto-optimized
                        under 20 MB
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">
                        Time per artwork
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1&ndash;3 hours (manual)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Under 30 seconds
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile card layout */}
              <div className="md:hidden space-y-3 mb-6">
                {[
                  { feature: "Primary purpose", canva: "Design creation", snap: "Print production" },
                  { feature: "Output sizes", canva: "One at a time", snap: "30+ from one upload" },
                  { feature: "Batch resize", canva: "No", snap: "Yes \u2014 all ratios" },
                  { feature: "Ratio awareness", canva: "Manual", snap: "Built-in (5 ratios)" },
                  { feature: "ZIP packaging", canva: "No", snap: "Organized by ratio" },
                  { feature: "300 DPI guarantee", canva: "Pro PDF only", snap: "Every file" },
                  { feature: "File naming", canva: "No", snap: "Professional naming" },
                  { feature: "20 MB compliance", canva: "Manual check", snap: "Auto-optimized" },
                  { feature: "Time per artwork", canva: "1\u20133 hours", snap: "Under 30 seconds" },
                ].map((row, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                      {row.feature}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] text-foreground-60 mb-1 uppercase tracking-wider">
                          Canva
                        </p>
                        <p className="text-sm text-foreground-60">
                          {row.canva}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-foreground-60 mb-1 uppercase tracking-wider">
                          SnapToSize
                        </p>
                        <p className="text-sm text-foreground">
                          {row.snap}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <p className="text-foreground-60 text-sm">
                For more on why{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  300 DPI matters for Etsy printables
                </Link>
                , see our resolution guide.
              </p>
            </div>

            {/* --- CTA 1: After comparison table --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Upload One Image, Get Up to 70 Print-Ready Files
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  All 5 ratio packs. Portrait and landscape. Every file at
                  300 DPI, named and packaged for Etsy.
                </p>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: What Etsy buyers expect --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Etsy Buyers Actually Expect in a Printable Listing
              </h2>
              <p className="text-foreground-60 mb-4">
                Buyers searching for printable wall art expect the file to
                work with their frame. Standard frames come in different
                aspect ratios &mdash; and if you only offer one ratio, you
                lose every buyer whose frame doesn&apos;t match.
              </p>
              <p className="text-foreground-60 mb-6">
                Here are the size families Etsy buyers look for. For the full
                list, see our{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>

              <div className="space-y-4 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    2:3 Ratio &mdash; Most Common for Wall Art
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    4&times;6, 6&times;9, 8&times;12, 10&times;15,
                    12&times;18, 16&times;24, 20&times;30. This is the
                    tallest standard ratio and covers the widest range of
                    frame sizes.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    3:4 Ratio &mdash; Classic Photo Frame
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    6&times;8, 9&times;12, 12&times;16, 15&times;20,
                    18&times;24. Standard photo frame proportions. 18&times;24
                    is a popular poster size.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    4:5 Ratio &mdash; Home of the{" "}
                    <Link
                      href="/etsy-8x10-print-size"
                      className="text-accent-light hover:underline"
                    >
                      8&times;10
                    </Link>
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    8&times;10, 12&times;15, 16&times;20, 20&times;25,
                    24&times;30. The 8&times;10 is the single best-selling
                    print size on Etsy.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    ISO A-Series &mdash; International Buyers
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    A5, A4, A3, A2, A1. Standard paper sizes in the UK,
                    Europe, and Australia. Missing ISO sizes means losing
                    international sales.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold mb-2">
                    Extras &mdash; Common Sizes That Don&apos;t Fit a Ratio
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    5&times;7, 8.5&times;11 (US Letter), 11&times;14,
                    11&times;17, 13&times;19, 20&times;24. These are
                    in-between sizes buyers search for specifically.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60 text-sm">
                Read our guide on{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include in an Etsy printable
                </Link>{" "}
                and{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  what files buyers expect in a digital download
                </Link>{" "}
                for the full strategy. Understanding{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  why different ratios matter
                </Link>{" "}
                is key to building professional listings.
              </p>
            </div>

            {/* --- Section 5: How SnapToSize handles production --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How the Production Step Works
              </h2>
              <p className="text-foreground-60 mb-6">
                Once your artwork is ready &mdash; whether you designed it in
                Canva, Illustrator, Procreate, or any other tool &mdash; the
                production step turns it into a complete, sellable listing.
                Here&apos;s how to go from one master file to every print size
                your buyers need. For detailed guidance on file organization,
                see our{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  packaging guide
                </Link>
                .
              </p>

              <div className="space-y-4 mb-6">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(45,212,191,0.15)",
                        color: "#2dd4bf",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Upload Your Master File
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Export the highest resolution version of your design.
                        Higher source resolution produces sharper results
                        across all output sizes.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(45,212,191,0.15)",
                        color: "#2dd4bf",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Get 5 Organized ZIP Packs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        SnapToSize generates every standard print size
                        organized into ratio-based packs. Up to 70
                        print-ready files from a single upload &mdash;
                        portrait and landscape orientations included.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(45,212,191,0.15)",
                        color: "#2dd4bf",
                      }}
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Upload to Etsy
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Every file is 300 DPI, professionally named (e.g.,{" "}
                        <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">
                          artwork_8x10_300dpi.jpg
                        </code>
                        ), and each ZIP stays under Etsy&apos;s 20 MB limit.
                        Ready to list immediately.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- Section 6: When to use each --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                When to Use Canva vs When to Use SnapToSize
              </h2>
              <p className="text-foreground-60 mb-6">
                These tools aren&apos;t competitors &mdash; they solve
                different problems in the same workflow. Many Etsy sellers
                use both.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3 text-purple-300">
                    Use Canva for&hellip;
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      Designing your wall art from scratch
                    </li>
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      Adding text, fonts, and graphic elements
                    </li>
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      Creating listing mockup images
                    </li>
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      Brand assets and social content
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3 text-teal-300">
                    Use SnapToSize for&hellip;
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Turning one design into 30+ print sizes
                    </li>
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Generating organized, ratio-based ZIPs
                    </li>
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Guaranteeing 300 DPI on every output file
                    </li>
                    <li className="flex items-start gap-2 text-foreground-60 text-sm">
                      <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Staying under Etsy&apos;s 20 MB upload limit
                    </li>
                  </ul>
                </Card>
              </div>

              <p className="text-foreground-60 text-sm">
                The typical workflow:{" "}
                <strong className="text-foreground">
                  design in Canva, produce in SnapToSize
                </strong>
                . Export your finished artwork at the highest resolution, then
                upload it once to generate every size. For pricing strategies
                on multi-size bundles, see our guide on{" "}
                <Link
                  href="/how-to-price-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  how to price Etsy printables
                </Link>
                . You can also{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  calculate exact pixel dimensions
                </Link>{" "}
                for any print size. For niche-specific sizing, see our{" "}
                <Link
                  href="/etsy-minimalist-wall-art-sizes"
                  className="text-accent-light hover:underline"
                >
                  minimalist wall art sizes guide
                </Link>
                . For a broader overview, read our{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-accent-light hover:underline"
                >
                  complete guide to selling digital downloads on Etsy
                </Link>
                . Already selling but{" "}
                <Link
                  href="/how-to-sell-printables-on-etsy-without-photoshop"
                  className="text-accent-light hover:underline"
                >
                  want to skip Photoshop entirely
                </Link>
                ? The Canva + SnapToSize workflow covers that.
              </p>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Skip the Manual Resize. Start Producing."
                stat="Up to 70 print-ready files from one upload"
                description="Upload your finished design once and get every standard print size your Etsy buyers need. 5 ratio packs, portrait and landscape, 300 DPI, under 20 MB per ZIP."
                buttonText="Try SnapToSize Free"
                appUrl="https://app.snaptosize.com/app/quick-export?source=seo_snaptosize-vs-canva&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; SnapToSize vs Canva for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Email Capture --- */}
            <div>
              <EmailCaptureSection
                heading="Free Etsy Print Size Cheat Sheet"
                description="Every standard print size with pixel dimensions at 300 DPI, ratio pack mapping, and file setup tips. One printable PDF for your workflow."
                placeholder="Enter your email"
                buttonText="Get Free Cheat Sheet"
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="snaptosize-vs-canva" />
          </div>
        </Container>
      </section>
    </>
  );
}
