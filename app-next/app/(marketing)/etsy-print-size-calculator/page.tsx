import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import {
  PRINT_SIZES,
  RATIO_GROUP_ORDER,
  RATIO_GROUP_LABELS,
  type RatioGroup,
} from "@/data/print-sizes";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
  title:
    "Etsy Print Size Calculator \u2014 Crop Analysis, DPI & Ratio Check",
  description:
    "Free Etsy print size calculator with crop analysis. Enter your image dimensions to see which sizes print without cropping, how much gets trimmed, and DPI quality for 30 standard sizes.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-print-size-calculator",
  },
  openGraph: {
    title:
      "Etsy Print Size Calculator \u2014 Crop Analysis, DPI & Ratio Check | SnapToSize",
    description:
      "Free calculator for Etsy sellers. See which sizes your image can print without cropping, check DPI quality, and detect aspect ratio mismatches.",
    url: "https://snaptosize.com/etsy-print-size-calculator",
    images: [
      {
        url: "/assets/og/etsy-print-size-calculator.png",
        width: 1200,
        height: 630,
        alt: "Etsy Print Size Calculator \u2014 Crop Analysis, DPI & Ratio Check",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Print Size Calculator \u2014 Crop Analysis, DPI & Ratio Check",
    description:
      "Free calculator for Etsy sellers. Crop analysis, ratio detection, and DPI quality checks for 30 standard print sizes.",
    images: ["/assets/og/etsy-print-size-calculator.png"],
  },
};

/* ── Size data grouped for the reference table ── */
const sizesByGroup: Record<RatioGroup, typeof PRINT_SIZES> = {
  "1:1": [],
  "2:3": [],
  "3:4": [],
  "4:5": [],
  iso: [],
  pano: [],
  extras: [],
};
for (const size of PRINT_SIZES) {
  sizesByGroup[size.ratioGroup].push(size);
}

/* ── FAQ items ── */
const faqItems = [
  {
    question:
      "What is aspect ratio mismatch and why does it matter?",
    answer: [
      "Aspect ratio mismatch happens when your image\u2019s proportions don\u2019t match the print size. For example, a 4:3 camera photo forced into a 2:3 frame will lose about 11% of the image to cropping. The buyer gets a print with important parts cut off \u2014 leading to refund requests and bad reviews.",
      "The Analyze tab above shows exactly how much of your image gets cropped for every print size, so you can decide which sizes to offer before uploading to Etsy.",
    ],
  },
  {
    question:
      "How do I avoid cropping when selling multiple print sizes on Etsy?",
    answer: [
      "Group your sizes by aspect ratio. All sizes within the same ratio (e.g., 4\u00d76, 8\u00d712, 16\u00d724 are all 2:3) will crop identically. If your image is 4:3, the 3:4 group prints perfectly, the 4:5 group needs ~6% crop, and the 2:3 group needs ~11% crop.",
      "For the best results, create separate versions of your artwork for each ratio group. SnapToSize does this automatically \u2014 upload once and get optimized files for every ratio.",
    ],
  },
  {
    question:
      "What pixel dimensions do I need for Etsy prints at 300 DPI?",
    answer: [
      "Multiply each inch dimension by 300. For example, an 8\u00d710 print needs 2400\u00d73000 pixels (8\u00d7300 = 2400, 10\u00d7300 = 3000). The calculator above does this for all 30 standard sizes instantly.",
      "300 DPI is the print industry standard for sharp, professional output. Lower DPI (like 150) is acceptable for large posters viewed from a distance, but 300 DPI should be your default for Etsy digital downloads.",
    ],
  },
  {
    question:
      "How do I know if my image is large enough for a specific print size?",
    answer: [
      'Use the "Analyze Your Image" tab above. Enter your image\u2019s pixel dimensions and the calculator shows which sizes match your ratio perfectly, how much cropping each group needs, and the DPI quality for every size.',
      "The calculator automatically checks both portrait and landscape orientations, so you don\u2019t need to worry about which way your image is oriented.",
    ],
  },
  {
    question: "What is Etsy\u2019s 20 MB file size limit?",
    answer:
      "Each file in an Etsy digital download listing can be up to 20 MB. The calculator estimates both JPEG and PNG file sizes so you can check before uploading. JPEG files are typically 5\u201310\u00d7 smaller than PNG with no visible quality difference for prints. Use JPEG for large sizes to stay under the limit.",
  },
  {
    question:
      "What\u2019s the difference between JPEG and PNG for Etsy prints?",
    answer: [
      "JPEG uses lossy compression (smaller files, ~0.5 bytes/pixel) while PNG uses lossless compression (larger files, ~2.8 bytes/pixel). For photographic prints, JPEG at maximum quality is indistinguishable from PNG but 5\u201310\u00d7 smaller.",
      "PNG is better for graphics with sharp edges, text, or transparency. For most Etsy wall art and prints, JPEG is the right choice.",
    ],
  },
  {
    question: "How many print sizes should I offer on Etsy?",
    answer: [
      "Top Etsy sellers typically offer 8\u201312 sizes across multiple aspect ratios (2:3, 3:4, 4:5, and ISO). This covers US and international buyers and fits standard frames.",
      "At minimum, include: 5\u00d77, 8\u00d710, 11\u00d714, 16\u00d720, and A4. This covers the five most popular sizes across different frame standards.",
    ],
  },
  {
    question: "Does this calculator work for all Etsy digital downloads?",
    answer:
      "Yes. The pixel dimensions, DPI calculations, and file size estimates apply to any digital download where the buyer will print the file \u2014 wall art, posters, greeting cards, planners, and more. The 30 sizes cover all standard print and frame sizes.",
  },
  {
    question:
      "Why do I need different files for different aspect ratios?",
    answer:
      "Different aspect ratios have different proportions. A 2:3 image (like 4\u00d76) will be cropped or distorted if forced into a 4:5 frame (like 8\u00d710). Providing separate files for each ratio means your buyers get a perfect fit with no cropping. SnapToSize generates all ratio variants from a single upload.",
  },
];

export default function EtsyPrintSizeCalculatorPage() {
  /* ── JSON-LD Schemas ── */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy Print Size Calculator \u2014 Crop Analysis, DPI & Ratio Check",
    description:
      "Free interactive calculator for Etsy sellers. Analyze crop percentages, detect aspect ratio mismatches, and check DPI quality for 30 standard print sizes.",
    url: "https://snaptosize.com/etsy-print-size-calculator",
    datePublished: "2026-03-22",
    dateModified: "2026-03-22",
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
        name: "Print Size Calculator",
        item: "https://snaptosize.com/etsy-print-size-calculator",
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
        text: Array.isArray(item.answer)
          ? item.answer.join(" ")
          : item.answer,
      },
    })),
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Etsy Print Size Crop Calculator",
    description:
      "Free calculator for Etsy sellers. Analyze crop percentages by aspect ratio, check DPI quality, and find which sizes your image can print without cropping.",
    url: "https://snaptosize.com/etsy-print-size-calculator",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_calculator&kind=tool";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* Blueprint calculator motif — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block">
          {/* Outer frame */}
          <div
            className="relative border border-white/[0.06] rounded-sm"
            style={{ width: "200px", height: "260px" }}
          >
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-30">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={`h${i}`}
                  className="absolute left-0 right-0 border-t border-purple-400/10"
                  style={{ top: `${i * 20}%` }}
                />
              ))}
              {[1, 2, 3].map((i) => (
                <div
                  key={`v${i}`}
                  className="absolute top-0 bottom-0 border-l border-purple-400/10"
                  style={{ left: `${i * 25}%` }}
                />
              ))}
            </div>

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-purple-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-purple-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-purple-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-purple-400/30" />

            {/* Dimension labels */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap">
                W &times; 300
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="absolute -right-20 top-0 bottom-0 flex flex-col items-center justify-center">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap [writing-mode:vertical-lr] mx-2">
                H &times; 300
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Inner accent rectangles */}
            <div className="absolute top-4 left-4 w-12 h-16 border border-purple-500/15 rounded-sm" />
            <div className="absolute top-4 right-4 w-20 h-10 border border-purple-500/10 rounded-sm" />
            <div className="absolute bottom-4 left-4 right-4 h-12 border border-purple-500/10 rounded-sm" />
          </div>
        </div>

        <Container>
          <div className="max-w-2xl relative z-10">
            <nav className="flex items-center gap-2 text-sm text-foreground-60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-foreground-60/40">/</span>
              <Link
                href="/etsy-print-sizes"
                className="hover:text-white transition-colors"
              >
                Print Sizes
              </Link>
              <span className="text-foreground-60/40">/</span>
              <span className="text-foreground-80">Calculator</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              Etsy Print Size
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-accent-light to-indigo-400 bg-clip-text text-transparent">
                Crop Calculator
              </span>
            </h1>
            <p className="text-lg text-foreground-60 mb-8 max-w-xl">
              Enter your image dimensions to see which sizes print without
              cropping, how much gets trimmed, and DPI quality for every
              size. Detect aspect ratio mismatches before your buyers do.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Crop analysis",
                "30 sizes",
                "Ratio detection",
                "100% free",
              ].map((pill) => (
                <span
                  key={pill}
                  className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] sm:text-xs sm:px-2.5 font-medium border ${
                    pill === "Crop analysis"
                      ? "border-[#2DD4BF]/20 bg-[#2DD4BF]/5 text-[#2DD4BF]"
                      : "border-border bg-surface/60 text-foreground-60"
                  }`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CALCULATOR ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl">
            <Calculator />
          </div>
        </Container>
      </section>

      {/* ===== WHY THESE SIZES MATTER ===== */}
      <section className="py-12 md:py-16 border-t border-border" style={{ backgroundColor: "#0e0c18" }}>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Why Print Sizes Matter for Etsy Sellers
            </h2>
            <div className="space-y-4 text-foreground-60">
              <p>
                Etsy buyers expect digital downloads that fit{" "}
                <strong className="text-foreground">standard frame sizes</strong> without
                cropping or stretching. The most common mistake new sellers make
                is offering a single image size and expecting buyers to resize it
                themselves. They won&apos;t &mdash; they&apos;ll leave a bad review or
                request a refund.
              </p>
              <p>
                Professional sellers offer{" "}
                <strong className="text-foreground">
                  8&ndash;12 sizes across multiple aspect ratios
                </strong>{" "}
                (2:3, 3:4, 4:5, and ISO A-series). This covers US and
                international buyers, desktop and mobile printing, and every
                standard frame at Target, IKEA, and Amazon.
              </p>
              <p>
                Every file must be at least{" "}
                <strong className="text-foreground">300 DPI</strong> for
                professional print quality, and each file must stay under
                Etsy&apos;s{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  20 MB upload limit
                </Link>
                . The calculator above handles both checks instantly.
              </p>
            </div>

            {/* Inline CTA */}
            <Card accent className="mt-8">
              <h3 className="font-semibold mb-2">
                Skip the manual work
              </h3>
              <p className="text-sm text-foreground-60 mb-4">
                SnapToSize generates every size automatically. Upload once,
                download organized ZIPs for each ratio &mdash; already at 300
                DPI, already under 20 MB.
              </p>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button>Try SnapToSize Free</Button>
              </a>
            </Card>
          </div>
        </Container>
      </section>

      {/* ===== REFERENCE TABLE ===== */}
      <section className="py-12 md:py-16 border-t border-border" style={{ backgroundColor: "#0e0c18" }}>
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Complete Etsy Print Size Reference{" "}
              <span className="text-base font-normal text-foreground-60">&mdash; 70+ sizes</span>
            </h2>

            {/* Scale callout */}
            <div className="rounded-xl border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 p-4 sm:p-5 mb-10 flex items-start gap-3">
              <span className="text-[#2DD4BF] text-lg mt-0.5">&harr;</span>
              <div>
                <p className="text-sm text-foreground">
                  Every non-square size includes both <strong>portrait and landscape</strong> orientations.
                  That&apos;s <strong className="text-[#2DD4BF]">70+ print-ready files</strong> from a single upload.
                </p>
                <p className="text-xs text-foreground-60 mt-1">
                  Portrait &amp; landscape available as ZIP packs. Square sizes as individual exports.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              {RATIO_GROUP_ORDER.map((group) => {
                const isSquare = group === "1:1";
                return (
                <div key={group}>
                  <h3 className="text-lg font-semibold mb-3">
                    {RATIO_GROUP_LABELS[group]}
                    <span className="text-sm font-normal text-foreground-60 ml-2">
                      {sizesByGroup[group].length} sizes{!isSquare ? " \u00d7 2 orientations" : ""}
                    </span>
                  </h3>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border text-left">
                            <th className="pb-2 pr-4">Size</th>
                            <th className="pb-2 pr-4">
                              {isSquare ? "Pixels @ 300\u00a0DPI" : "Portrait (px)"}
                            </th>
                            {!isSquare && (
                              <th className="pb-2 pr-4">Landscape (px)</th>
                            )}
                            <th className="pb-2 pr-4">MP</th>
                            <th className="pb-2">Use Case</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground-60">
                          {sizesByGroup[group].map((size, i) => (
                            <tr
                              key={size.id}
                              className={
                                i < sizesByGroup[group].length - 1
                                  ? "border-b border-border"
                                  : ""
                              }
                            >
                              <td className="py-2 pr-4">
                                {size.slug ? (
                                  <Link
                                    href={`/${size.slug}`}
                                    className="text-accent-light hover:underline"
                                  >
                                    {size.label}
                                  </Link>
                                ) : (
                                  size.label
                                )}
                              </td>
                              <td className="py-2 pr-4">
                                {size.widthPx.toLocaleString()} &times;{" "}
                                {size.heightPx.toLocaleString()}
                              </td>
                              {!isSquare && (
                                <td className="py-2 pr-4 text-foreground-60/70">
                                  {size.heightPx.toLocaleString()} &times;{" "}
                                  {size.widthPx.toLocaleString()}
                                </td>
                              )}
                              <td className="py-2 pr-4">
                                {(
                                  (size.widthPx * size.heightPx) /
                                  1_000_000
                                ).toFixed(1)}
                              </td>
                              <td className="py-2 text-foreground-60">
                                {size.useCase}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-12 md:py-16 border-t border-border" style={{ backgroundColor: "#0e0c18" }}>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <ContextualCTA
            problem="Done calculating? Generate the actual files."
            solution="SnapToSize turns your artwork into all 30+ sizes at 300 DPI — organized in ratio packs, ready for Etsy. No manual resizing."
            appUrl={appUrl}
            buttonText="Generate All Sizes"
          />
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-12 md:py-16 border-t border-border">
        <Container>
          <FinalCTA
            heading="Stop calculating. Start selling."
            stat="70+ print-ready files from a single upload"
            description="SnapToSize turns one image into a complete size pack — all ratios, all DPIs, organized in ZIPs. Ready for your Etsy listing in seconds."
            appUrl={appUrl}
          />
        </Container>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="py-8 border-t border-border">
        <Container>
          <RelatedPages currentSlug="etsy-print-size-calculator" />
        </Container>
      </section>
    </>
  );
}
