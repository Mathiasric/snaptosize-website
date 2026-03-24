import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title:
    "Best Resolution for Etsy Printables — 300 DPI Guide With Pixel Dimensions",
  description:
    "300 DPI is the professional standard for Etsy printables. Get exact pixel dimensions for every print size, learn how to verify DPI, and automate multi-size file creation.",
  alternates: {
    canonical: "https://snaptosize.com/best-resolution-for-etsy-printables",
  },
  openGraph: {
    title:
      "Best Resolution for Etsy Printables — 300 DPI Pixel Dimension Guide | SnapToSize",
    description:
      "Complete DPI guide for Etsy sellers. Exact pixel dimensions at 300 DPI for every print size, verification steps, and automated multi-size generation.",
    url: "https://snaptosize.com/best-resolution-for-etsy-printables",
    images: [
      {
        url: "/assets/og/best-resolution-for-etsy-printables.png",
        width: 1200,
        height: 630,
        alt: "Best Resolution for Etsy Printables — 300 DPI Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Resolution for Etsy Printables — 300 DPI Guide With Pixel Dimensions",
    description:
      "300 DPI is non-negotiable for Etsy printables. Exact pixel dimensions for every size, DPI verification, and automated workflow.",
    images: ["/assets/og/best-resolution-for-etsy-printables.png"],
  },
};

export default function BestResolutionForEtsyPrintablesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Best Resolution for Etsy Printables — 300 DPI Guide With Pixel Dimensions",
    description:
      "Complete guide to resolution and DPI for Etsy printable sellers. Includes pixel dimension tables, DPI verification steps, and automated multi-size file generation.",
    url: "https://snaptosize.com/best-resolution-for-etsy-printables",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
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
        name: "Seller Guides",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Resolution for Etsy Printables",
        item: "https://snaptosize.com/best-resolution-for-etsy-printables",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best resolution for Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "300 DPI (dots per inch) is the professional standard for all Etsy printables. This ensures high-quality prints at the specified size. Lower resolutions (72 DPI, 150 DPI) will appear pixelated or blurry when printed. Etsy sellers who consistently deliver 300 DPI files receive better reviews and fewer refund requests.",
        },
      },
      {
        "@type": "Question",
        name: "Is 300 DPI required by Etsy, or just recommended?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Etsy does not explicitly mandate 300 DPI in their terms of service, but it is the de facto industry standard for print quality. Customers expect professional print quality, and anything below 300 DPI risks negative reviews, refunds, and damaged seller reputation. All successful Etsy print shops use 300 DPI.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert a 72 DPI image to 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technically yes, but it won't improve quality. Upscaling doesn't add detail — it just makes the file larger. The result will look the same as the original 72 DPI version when printed. Always start with a high-resolution source file (at least 300 DPI at your largest print size).",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my file is 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check in your image editor: Photoshop (Image > Image Size), Canva (download settings), GIMP (Image > Scale Image), or Windows/Mac file properties. The resolution should show \"300 pixels/inch.\" If it shows 72 or 96, re-export with the correct DPI setting.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need different DPI for different print sizes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. 300 DPI is the standard for all print sizes on Etsy. Whether you're offering 5×7 or 24×36, each file should be 300 DPI. The pixel dimensions change (5×7 = 1500×2100px, 24×36 = 7200×10800px), but the DPI stays the same.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_best-resolution-for-etsy-printables&kind=guide";

  const dpiTable = [
    { size: "5×7", px: "1500 × 2100" },
    { size: "8×10", px: "2400 × 3000" },
    { size: "8.5×11", px: "2550 × 3300" },
    { size: "11×14", px: "3300 × 4200" },
    { size: "12×18", px: "3600 × 5400" },
    { size: "16×20", px: "4800 × 6000" },
    { size: "18×24", px: "5400 × 7200" },
    { size: "24×36", px: "7200 × 10800" },
  ];

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
        className="relative pt-8 pb-20 md:pt-10 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* DPI grid — dense pixel-like pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(168,85,247,0.6) 3px, rgba(168,85,247,0.6) 4px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(168,85,247,0.6) 3px, rgba(168,85,247,0.6) 4px)",
          }}
        />

        {/* Gradient mesh accents */}
        <div
          className="absolute top-[-15%] right-[5%] w-[550px] h-[550px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* DPI comparison visualization — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
          {/* 72 DPI block — blurry / low quality */}
          <div className="relative">
            <div
              className="border border-red-400/20 rounded-sm bg-red-500/[0.03]"
              style={{ width: "120px", height: "80px" }}
            >
              {/* Pixelated grid overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 9px, rgba(239,68,68,0.3) 9px, rgba(239,68,68,0.3) 10px), repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(239,68,68,0.3) 9px, rgba(239,68,68,0.3) 10px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-mono text-red-400/60 tracking-widest">
                  72 DPI
                </span>
              </div>
            </div>
            <div className="absolute -right-14 top-1/2 -translate-y-1/2">
              <span className="text-[9px] font-mono text-red-400/40">
                BLURRY
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-px h-4 bg-gradient-to-b from-red-400/20 to-green-400/20" />

          {/* 300 DPI block — sharp / professional */}
          <div className="relative">
            <div
              className="border border-green-400/30 rounded-sm bg-green-500/[0.03]"
              style={{ width: "120px", height: "80px" }}
            >
              {/* Dense fine grid overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(74,222,128,0.3) 2px, rgba(74,222,128,0.3) 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(74,222,128,0.3) 2px, rgba(74,222,128,0.3) 3px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-mono text-green-400/70 tracking-widest">
                  300 DPI
                </span>
              </div>
            </div>
            <div className="absolute -right-14 top-1/2 -translate-y-1/2">
              <span className="text-[9px] font-mono text-green-400/50">
                SHARP
              </span>
            </div>
          </div>

          {/* Dimension callout */}
          <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02] mt-1">
            <span className="text-[9px] font-mono text-purple-300/50 tracking-wider">
              8×10 = 2400×3000 px
            </span>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Resolution Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                Best Resolution for Etsy Printables
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                300&nbsp;DPI &mdash; the only number that matters
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              300 DPI is the professional standard for every Etsy printable you
              sell. Lower resolutions produce blurry prints, bad reviews, and
              refund requests. This guide covers exact pixel dimensions, how to
              verify DPI, and how to automate the entire process.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Sizes at 300 DPI
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 30 sizes at 300 DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "300 DPI guaranteed",
                "30 sizes, 5 ratios",
                "Under 20 MB per ZIP",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]"
                >
                  <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                  <span className="text-xs text-white/70 font-medium">
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* --- What Is DPI --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is DPI and Why It Matters for Etsy Printables
              </h2>
              <p className="text-foreground-60 mb-4">
                DPI stands for dots per inch. It determines how many pixels of
                your image file are packed into each printed inch. More dots per
                inch means finer detail and sharper output.
              </p>
              <p className="text-foreground-60 mb-4">
                The relationship is straightforward: DPI connects print size to
                pixel dimensions. An 8×10 inch print at 300 DPI needs
                2400×3000 pixels. The same 8×10 at 72 DPI needs only
                576×720 pixels &mdash; and looks terrible when printed.
              </p>

              <div className="space-y-3 mb-6">
                <Card className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/30 border border-red-400/50" />
                      <span className="font-medium text-sm">72 DPI</span>
                    </div>
                    <span className="text-foreground-60 text-sm">
                      Screen only &mdash; never for printing
                    </span>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-400/30 border border-amber-400/50" />
                      <span className="font-medium text-sm">150 DPI</span>
                    </div>
                    <span className="text-foreground-60 text-sm">
                      Draft quality &mdash; visible pixelation
                    </span>
                  </div>
                </Card>
                <Card className="p-4 border-green-500/20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400/30 border border-green-400/50" />
                      <span className="font-medium text-sm">300 DPI</span>
                    </div>
                    <span className="text-foreground-60 text-sm font-semibold">
                      Professional print standard
                    </span>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-400/30 border border-blue-400/50" />
                      <span className="font-medium text-sm">600+ DPI</span>
                    </div>
                    <span className="text-foreground-60 text-sm">
                      Unnecessary &mdash; larger files, no visible improvement
                    </span>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                Buyers expect gallery-quality prints. 300 DPI delivers that
                consistently across every consumer inkjet, laser printer, and
                professional print service. Once you nail the resolution, the
                next question is{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include in your listing
                </Link>
                .
              </p>
            </div>

            {/* --- Etsy Requirements vs Best Practices --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Etsy&apos;s Official Requirements vs. Best Practices
              </h2>
              <p className="text-foreground-60 mb-4">
                Etsy does not explicitly mandate 300 DPI in their terms of
                service. But the market expects it. Every successful Etsy print
                seller uses 300 DPI as their baseline &mdash; it is the de facto
                requirement.
              </p>
              <p className="text-foreground-60 mb-6">
                When resolution is too low, buyers see pixelated prints, blurry
                edges, and muddy details. The result: refund requests, bad
                reviews, and a damaged shop reputation. 300 DPI is
                non-negotiable for professional sellers. If your prints are
                already coming out blurry, see our{" "}
                <Link href="/etsy-digital-download-blurry-prints" className="text-accent-light hover:underline">
                  complete blurry prints troubleshooting guide
                </Link>.
              </p>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Reality check:</strong>{" "}
                    &ldquo;Low quality print&rdquo; is the #1 reason for refund
                    requests on Etsy digital downloads. Delivering 300 DPI files
                    eliminates this entirely.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Pixel Dimension Table --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Calculate Pixel Dimensions at 300 DPI
              </h2>
              <p className="text-foreground-60 mb-6">
                The formula:{" "}
                <strong>Print Width (inches) × 300 = Pixel Width</strong>.
                Apply the same to height. Here are the most common Etsy print
                sizes with their exact 300 DPI pixel dimensions:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Print Size (inches)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dpiTable.map((row) => (
                      <tr
                        key={row.size}
                        className={`border-b border-white/10 ${
                          row.size === "8×10" ? "bg-accent/5" : ""
                        }`}
                      >
                        <td className="py-3 px-4 font-semibold">{row.size}</td>
                        <td className="py-3 px-4 text-foreground-60 font-mono text-xs">
                          {row.px}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                Use our free{" "}
                <Link href="/etsy-print-size-calculator" className="text-accent-light hover:underline">print size calculator</Link>{" "}
                to verify your image meets 300 DPI for every size.
              </p>
              <p className="text-foreground-60">
                For the complete list of all 30 sizes across 5 ratio packs, see
                the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- How to Check DPI --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Check Your File&apos;s Current DPI
              </h2>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Photoshop</h3>
                  <p className="text-foreground-60 text-sm">
                    Image &rarr; Image Size. Check the Resolution field. It
                    should read &ldquo;300 Pixels/Inch.&rdquo;
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Canva</h3>
                  <p className="text-foreground-60 text-sm">
                    Download settings &mdash; select &ldquo;PDF Print&rdquo; or
                    enable 300 DPI in export options (Pro may be required for
                    some formats).
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Windows</h3>
                  <p className="text-foreground-60 text-sm">
                    Right-click file &rarr; Properties &rarr; Details tab. Look
                    for &ldquo;Horizontal resolution&rdquo; and
                    &ldquo;Vertical resolution&rdquo; &mdash; both should say
                    300 dpi.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Mac (Preview)</h3>
                  <p className="text-foreground-60 text-sm">
                    Open in Preview &rarr; Tools &rarr; Adjust Size. The
                    resolution field shows DPI. Ensure it reads 300
                    pixels/inch.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">GIMP</h3>
                  <p className="text-foreground-60 text-sm">
                    Image &rarr; Scale Image. Check X and Y resolution &mdash;
                    both should be 300 pixels/in.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground-60 text-sm">
                      <strong className="text-foreground">
                        Common mistakes:
                      </strong>{" "}
                      Assuming screen resolution equals print resolution.
                      Confusing pixel dimensions with DPI. Not checking after
                      export &mdash; some tools default to 72 or 96 DPI even
                      when your source was 300.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Manual Methods --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Creating 300 DPI Files: Manual Methods
              </h2>
              <p className="text-foreground-60 mb-6">
                The traditional workflow for producing 300 DPI print files:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Design at high resolution from the start (at least 7200×10800 pixels for full coverage)",
                  "Photoshop: Image > Image Size — ensure Resample is checked, use Bicubic Sharper for reduction",
                  "Canva: Download settings — select 300 DPI (Pro required for some export types)",
                  "GIMP: Image > Scale Image — set X/Y resolution to 300 pixels/inch",
                  "Export as JPEG at 85-95% quality, sRGB color profile, embed color profile",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-foreground-60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-foreground-60">
                This works for a single size. The problem starts when you need
                to do it 30 times per artwork &mdash; once for every standard
                Etsy print size. For an alternative to Photoshop, see our{" "}
                <Link
                  href="/how-to-sell-printables-on-etsy-without-photoshop"
                  className="text-accent-light hover:underline"
                >
                  guide to selling printables without Photoshop
                </Link>
                .
              </p>
            </div>

            {/* --- The Problem: 30 Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Problem: Creating 30 Print Sizes at 300 DPI
              </h2>
              <p className="text-foreground-60 mb-4">
                Running an Etsy print shop means buyers expect multiple sizes:
                5×7, 8×10, 11×14, 16×20, 18×24, 24×36, and more. Each
                size needs 300 DPI. Each{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  aspect ratio
                </Link>{" "}
                (2:3, 3:4, 4:5) needs separate files to avoid cropping your
                artwork.
              </p>
              <p className="text-foreground-60 mb-6">
                Manually resizing takes 1-3 hours per artwork. Math errors lead
                to wrong pixel dimensions. Inconsistent file naming creates
                buyer confusion. It doesn&apos;t scale.
              </p>

              {/* CTA 1 */}
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Manual Workflow
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  SnapToSize generates all 30 Etsy print sizes at 300 DPI in
                  seconds. Upload once, download organized ZIP packs for every
                  ratio. No math. No manual resizing. No cropping.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes at 300 DPI
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-2">
                  See{" "}
                  <Link
                    href="/pricing"
                    className="text-accent-light hover:underline"
                  >
                    pricing
                  </Link>{" "}
                  &mdash; free plan available.
                </p>
              </Card>
            </div>

            {/* --- Common Resolution Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Avoiding Common Resolution Mistakes
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Upscaling low-res images (72 DPI &rarr; 300 DPI)
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Changing the DPI tag doesn&apos;t add detail. A
                        576×720 pixel image relabeled as 300 DPI is still
                        576×720 pixels &mdash; it prints blurry. You need
                        2400×3000 actual pixels for an 8×10 at 300 DPI.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Using listing photos as printable files
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Etsy&apos;s 2000px listing photos are designed for
                        screen display at 72 DPI. They are not print files.
                        Buyers who try to print them get pixelated results at
                        anything larger than 6×6 inches.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Forgetting DPI in export settings
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Some design tools default to 72 or 96 DPI on export.
                        Your design may look perfect on screen, but if the DPI
                        metadata says 72, print services may scale it
                        incorrectly. Always verify after export.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Cropping across ratios instead of maintaining composition
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Force-fitting a 2:3 design into 4:5 cuts off artwork.
                        Buyers expect the full composition shown in your listing
                        preview.{" "}
                        <Link
                          href="/how-to-resize-images-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          Resize correctly
                        </Link>{" "}
                        by generating separate files for each ratio.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- How to Organize 300 DPI Files --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Organize Your 300 DPI Files for Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                Professional file delivery matters as much as file quality.
                Here&apos;s what buyers expect:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Group by ratio — all 2:3 sizes in one ZIP, all 3:4 in another, etc.",
                  "Professional file naming: artwork-name_8x10_300dpi.jpg",
                  "Keep each ZIP under Etsy's 20 MB limit",
                  "Include a README.txt with printing instructions",
                  "Test print files before going live",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-foreground-60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-foreground-60 mb-6">
                For the complete guide to file organization, see our{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  guide to packaging digital wall art for Etsy
                </Link>{" "}
                or{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  what files to include in Etsy digital downloads
                </Link>
                .
              </p>

              {/* CTA 2 */}
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Automatic Organization, Every Time
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Every SnapToSize ZIP pack is pre-organized by ratio,
                  professionally named, and guaranteed under 20 MB. 300 DPI on
                  every file. No manual file management.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Try Free &mdash; No Credit Card
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Why 300 DPI Specifically --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 300 DPI Specifically? The Technical Explanation
              </h2>
              <p className="text-foreground-60 mb-4">
                300 DPI matches the resolution capability of most consumer
                inkjet and laser printers. The human eye&apos;s resolving power
                at a typical 12-inch viewing distance is approximately 300 DPI
                &mdash; detail beyond that is physically invisible.
              </p>
              <p className="text-foreground-60 mb-4">
                Higher DPI (600+) increases file size substantially without any
                visible quality improvement for photographic prints and digital
                art. Lower DPI (150) produces visible pixelation at normal
                viewing distances. 300 DPI is the sweet spot: maximum
                perceptible quality at manageable file sizes.
              </p>
              <p className="text-foreground-60">
                Professional print shops universally expect 300 DPI. Submitting
                anything lower risks rejection or degraded output.
              </p>
            </div>

            {/* --- Resolution for Different Print Types --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Resolution for Different Print Types
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  {
                    type: "Photo prints / wall art",
                    dpi: "300 DPI minimum",
                  },
                  {
                    type: "Posters / banners (viewed from distance)",
                    dpi: "150-200 DPI acceptable",
                  },
                  {
                    type: "Business cards / invitations (close viewing)",
                    dpi: "300-600 DPI",
                  },
                  {
                    type: "Large format (2+ feet, far viewing distance)",
                    dpi: "150-200 DPI sufficient",
                  },
                  {
                    type: "Etsy printables (all buyer use cases)",
                    dpi: "Always 300 DPI",
                  },
                ].map((item) => (
                  <Card key={item.type} className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{item.type}</span>
                      <span className="text-foreground-60 text-sm">
                        {item.dpi}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              <p className="text-foreground-60">
                For Etsy printables, 300 DPI covers every scenario: home
                printing, professional print services, small frames, and large
                wall art. One standard, zero guesswork.
              </p>
            </div>

            {/* --- Quick Start Guide --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Quick Start: Your First 300 DPI Listing
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <ol className="space-y-3 text-sm text-foreground-60 list-decimal list-inside">
                  <li>
                    Design source artwork at highest resolution possible
                    (7200×10800+ pixels)
                  </li>
                  <li>
                    Calculate pixel dimensions for all sizes you&apos;ll offer
                    (inches × 300)
                  </li>
                  <li>
                    Resize using proper resampling (Lanczos or Bicubic Sharper)
                  </li>
                  <li>Verify each file is 300 DPI before export</li>
                  <li>
                    Organize into ratio-based ZIP packs (under 20 MB each)
                  </li>
                  <li>Test download and print quality yourself</li>
                  <li>
                    Upload to Etsy with clear size information in listing
                  </li>
                </ol>
              </Card>

              {/* CTA 3 */}
              <FinalCTA
                heading="Skip the Manual Workflow"
                stat="Every file guaranteed 300 DPI — zero math required"
                description="SnapToSize generates all sizes at 300 DPI instantly. Try it free — 5 Quick Exports and 2 Packs per day, forever."
                buttonText="Start Free — Generate Sizes Now"
                appUrl="https://app.snaptosize.com/app/quick-export?source=seo_best-resolution-for-etsy-printables&kind=guide"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "What is the best resolution for Etsy printables?",
                    answer:
                      "300 DPI (dots per inch) is the professional standard. This ensures high-quality prints at the specified size. Lower resolutions (72 DPI, 150 DPI) will appear pixelated or blurry when printed. Etsy sellers who consistently deliver 300 DPI files receive better reviews and fewer refund requests.",
                  },
                  {
                    question:
                      "Is 300 DPI required by Etsy, or just recommended?",
                    answer:
                      "Etsy does not explicitly mandate 300 DPI in their terms of service, but it is the de facto industry standard for print quality. Customers expect professional print quality, and anything below 300 DPI risks negative reviews, refunds, and damaged seller reputation.",
                  },
                  {
                    question: "Can I convert a 72 DPI image to 300 DPI?",
                    answer:
                      "Technically yes, but it won't improve quality. Upscaling doesn't add detail — it just makes the file larger. The result will look the same as the original 72 DPI version when printed. Always start with a high-resolution source file (at least 300 DPI at your largest print size).",
                  },
                  {
                    question: "How do I know if my file is 300 DPI?",
                    answer:
                      'Check in your image editor: Photoshop (Image > Image Size), Canva (download settings), GIMP (Image > Scale Image), or Windows/Mac file properties. The resolution should show "300 pixels/inch." If it shows 72 or 96, re-export with the correct DPI setting.',
                  },
                  {
                    question:
                      "Do I need different DPI for different print sizes?",
                    answer:
                      "No. 300 DPI is the standard for all print sizes on Etsy. Whether you're offering 5×7 or 24×36, each file should be 300 DPI. The pixel dimensions change (5×7 = 1500×2100px, 24×36 = 7200×10800px), but the DPI stays the same.",
                  },
                ]}
              />
            </div>

            {/* --- Email Capture --- */}
            <div>
              <EmailCaptureSection
                heading="Free Etsy Print Size Cheat Sheet"
                description="All 30 print sizes with exact pixel dimensions at 300 DPI. Plus file naming conventions and ratio pack structure."
                placeholder="Enter your email"
                buttonText="Get Free Cheat Sheet"
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="best-resolution-for-etsy-printables" />
          </div>
        </Container>
      </section>
    </>
  );
}
