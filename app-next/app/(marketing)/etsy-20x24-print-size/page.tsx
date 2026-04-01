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
  title: "20\u00d724 Print Size for Etsy \u2014 Pixels, DPI & Framing",
  description:
    "20\u00d724 is a premium large format size. Get exact pixels at 300 DPI (6000\u00d77200), 5:6 ratio specs, framing tips, and file setup for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-20x24-print-size" },
  openGraph: {
    title:
      "20\u00d724 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 20\u00d724 print guide for Etsy sellers. 6000\u00d77200 pixels at 300 DPI, 5:6 ratio, standard framing options, and file setup.",
    url: "https://snaptosize.com/etsy-20x24-print-size",
    images: [
      {
        url: "/assets/og/etsy-20x24-print-size.png",
        width: 1200,
        height: 630,
        alt: "20\u00d724 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "20\u00d724 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete 20\u00d724 print guide for Etsy sellers. 6000\u00d77200 pixels at 300 DPI, 5:6 ratio, framing and display tips.",
    images: ["/assets/og/etsy-20x24-print-size.png"],
  },
};

export default function Etsy20x24PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "20\u00d724 Print Size for Etsy \u2014 Pixel Dimensions at 300 DPI",
    description:
      "Complete guide to 20\u00d724 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 5:6 ratio specs, framing options, and file setup.",
    url: "https://snaptosize.com/etsy-20x24-print-size",
    datePublished: "2026-03-31",
    dateModified: "2026-03-31",
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
        name: "20\u00d724 Print Size",
        item: "https://snaptosize.com/etsy-20x24-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the pixel dimensions for a 20\u00d724 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6000\u00d77200 pixels. Multiply each dimension by 300: 20\u00d7300 = 6000 pixels wide, 24\u00d7300 = 7200 pixels tall. This is the minimum for sharp, professional-quality large format output.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 20\u00d724?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "5:6. This is a unique ratio \u2014 not the same as 4:5 (16\u00d720, 8\u00d710) or 3:4 (18\u00d724). A 20\u00d724 file requires its own dedicated export and cannot be cropped from a 4:5 or 3:4 source without losing composition.",
        },
      },
      {
        "@type": "Question",
        name: "Can I frame a 20\u00d724 print in a standard frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 20\u00d724 frames are widely available at IKEA, Michaels, Amazon, and Target. It is also the standard mat opening for 16\u00d720 prints displayed in a larger frame with a 2-inch mat border.",
        },
      },
      {
        "@type": "Question",
        name: "What\u2019s the difference between 20\u00d724 and 18\u00d724?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Different aspect ratios: 20\u00d724 is 5:6, while 18\u00d724 is 3:4. Both are large format but require separate files \u2014 you cannot resize one to the other without cropping or distortion.",
        },
      },
      {
        "@type": "Question",
        name: "How large should my source image be for 20\u00d724 at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At least 6000\u00d77200 pixels. If your source image is smaller, the output may appear soft or lose detail when printed at full 20\u00d724 size.",
        },
      },
      {
        "@type": "Question",
        name: "Is 20\u00d724 a popular size for Etsy wall art?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It is a popular large format choice for statement art, gallery presentations, and premium listings. Offering it alongside standard sizes like 8\u00d710 and 16\u00d720 signals completeness to buyers.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_20x24&kind=guide";

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
        className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #030712 0%, #0c0a1a 35%, #0d1117 100%)",
        }}
      >
        {/* Fine crosshatch pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #a78bfa 1px, transparent 1px), linear-gradient(-45deg, #a78bfa 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #6d28d9, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-10%] w-[550px] h-[550px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />

        {/* 5:6 Frame blueprint — large format showcase — right side */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — 5:6 proportions (20x24) */}
          <div
            className="relative border border-white/[0.07] rounded-sm"
            style={{ width: "250px", height: "300px" }}
          >
            {/* Inner mat border */}
            <div className="absolute inset-4 border border-violet-500/15 rounded-sm" />

            {/* Inner artwork area */}
            <div className="absolute inset-8 border border-dashed border-white/[0.06] rounded-sm" />

            {/* Corner registration marks */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-violet-400/25" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-violet-400/25" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-violet-400/25" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-violet-400/25" />

            {/* Dimension label — width */}
            <div className="absolute -top-10 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-violet-300/50 tracking-widest whitespace-nowrap">
                20 in &middot; 6000 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-[6.5rem] top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-violet-300/50 tracking-widest whitespace-nowrap -rotate-90">
                24 in &middot; 7200 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Ratio badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-4 py-2 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-sm font-mono text-white/20 tracking-[0.25em]">
                  5 : 6
                </span>
              </div>
            </div>

            {/* Measurement tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
              {[...Array(11)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* Measurement tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4">
              {[...Array(13)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-2 bg-white/[0.05]" />
              ))}
            </div>

            {/* Small comparison ghost frame — 8x10 for scale */}
            <div className="absolute bottom-3 right-3">
              <div
                className="border border-dashed border-white/[0.08] rounded-sm relative"
                style={{ width: "52px", height: "65px" }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[7px] font-mono text-white/15">
                  8&times;10
                </span>
              </div>
            </div>
          </div>

          {/* "LARGE FORMAT" label below frame */}
          <div className="mt-4 text-center">
            <span className="text-[9px] font-mono text-violet-400/30 tracking-[0.3em] uppercase">
              Large Format
            </span>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-violet-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-violet-300/60 uppercase">
                Print Size Reference
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-teal-400/10 border border-teal-400/25 text-teal-300/70">
                Popular
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                20&times;24 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Pixel dimensions at 300&nbsp;DPI &mdash; the gallery&#8209;grade
                large format size
              </span>
            </h1>

            <p className="text-base text-white/60 mb-8 max-w-lg">
              6000&times;7200 pixels. 5:6 aspect ratio. Fits standard
              ready&#8209;made frames. Here&apos;s everything you need to set up
              20&times;24 digital downloads that command premium prices.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 20&times;24 + 30 more sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-violet-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Up to 70 print-ready files
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-violet-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  All 5 ratio packs
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-violet-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Portrait, landscape &amp; square
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== QUICK ANSWER + DIAGRAM ===== */}
      <section className="py-8 md:py-10">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <QuickAnswer question="What pixel dimensions for 20×24 at 300 DPI?">
              <strong>6000 × 7200 pixels</strong>. 20×24 is in the Extras pack — a large format for gallery-quality prints and professional framing.
            </QuickAnswer>
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-20x24-size-comparison.png"
                alt="20×24 print size comparison with 16×20, 18×24, and 20×25"
                width={1200}
                height={500}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* --- Section 1: Specifications --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                20&times;24 at 300 DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">20 &times; 24 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">6000 &times; 7200 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">5:6 (0.833)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Orientation</span>
                    <span className="font-semibold">Portrait</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Pack</span>
                    <span className="font-semibold">Extras</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math: multiply each inch dimension by 300.
                20&nbsp;&times;&nbsp;300&nbsp;=&nbsp;6000 pixels wide,
                24&nbsp;&times;&nbsp;300&nbsp;=&nbsp;7200 pixels tall. Your
                source image should be at least 6000&times;7200 pixels for sharp
                output at full size.
              </p>
              <p className="text-foreground-60 mb-4">
                20&times;24 uses a{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  5:6 aspect ratio
                </Link>{" "}
                &mdash; unique among standard print sizes. It&apos;s not the same
                as 4:5 (used by{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20
                </Link>
                ) or 3:4 (used by{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18&times;24
                </Link>
                ). This means 20&times;24 requires its own dedicated file &mdash;
                you can&apos;t crop a 4:5 or 3:4 design to fit without losing
                parts of the artwork.
              </p>
              <p className="text-foreground-60">
                Output format is JPG (also called JPEG) at 300&nbsp;DPI. JPG
                keeps file sizes well under{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy&apos;s 20&nbsp;MB upload limit
                </Link>{" "}
                while maintaining full print quality.
              </p>
            </div>

            {/* --- Section 2: Nearby Sizes Comparison --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                20&times;24 vs. Nearby Large Format Sizes
              </h2>
              <p className="text-foreground-60 mb-6">
                Several large format sizes share similar dimensions but have
                different aspect ratios. Each requires a separate file to print
                correctly.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Print Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Aspect Ratio
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pack
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 &times; 6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:5 Ratio
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3:4 Ratio
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">20&times;24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">5:6</td>
                      <td className="py-3 px-4 text-foreground-60">Extras</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20&times;25</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 7500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:5 Ratio
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-20x30-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;30
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2:3 Ratio
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">24&times;30</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 &times; 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:5 Ratio
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Notice how 20&times;24 and{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18&times;24
                </Link>{" "}
                share the same height (7200 pixels at 300&nbsp;DPI) but different
                widths. They are not interchangeable. Offering both sizes in your
                listing covers more frame options for buyers. For the full chart
                across all ratios, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- Section 3: Framing & Display --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Display &mdash; Where 20&times;24 Works Best
              </h2>

              <p className="text-foreground-60 mb-6">
                20&times;24 fits standard ready-made frames available at IKEA,
                Michaels, Amazon, and Target. It can be displayed without a mat,
                or matted inside a larger frame (such as a 24&times;30 frame with
                a 2&#8209;inch mat border on each side) for a more dramatic
                gallery presentation.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Statement Piece Above a Sofa
                  </h3>
                  <p className="text-foreground-60">
                    20&times;24 is large enough to anchor a living room wall
                    without overpowering the space. It fills the visual gap
                    between mid-size prints (like{" "}
                    <Link
                      href="/etsy-16x20-print-size"
                      className="text-accent-light hover:underline"
                    >
                      16&times;20
                    </Link>
                    ) and full posters (like{" "}
                    <Link
                      href="/etsy-20x30-print-size"
                      className="text-accent-light hover:underline"
                    >
                      20&times;30
                    </Link>
                    ).
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Gallery Wall Anchor
                  </h3>
                  <p className="text-foreground-60">
                    In a gallery wall arrangement, 20&times;24 serves as the
                    anchor piece surrounded by smaller prints. Buyers creating
                    gallery walls look for one dominant size &mdash; 20&times;24
                    is ideal for that role.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Entryway &amp; Hallway Focal Points
                  </h3>
                  <p className="text-foreground-60">
                    Narrow entryways and hallways benefit from a single striking
                    print. 20&times;24 is wide enough to fill the space without
                    requiring a group arrangement.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Dual market opportunity:
                    </strong>{" "}
                    20&times;24 is also the standard mat opening for 16&times;20
                    prints displayed in a larger frame. When you include both
                    sizes, you cover buyers who frame with a mat and those who
                    frame without.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- CTA 1 (after Section 3) --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Every Size Your Buyers Need &mdash; From One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once and get 20&times;24 alongside every
                  other standard size at 300&nbsp;DPI. No manual resizing for
                  each listing.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: Why Offer 20x24 on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Offer 20&times;24 on Etsy
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      Higher Perceived Value
                    </p>
                    <p className="text-foreground-60 text-sm">
                      Large format prints command higher prices than small frames.
                      Including 20&times;24 in your listing positions the
                      download as a premium offering, even if buyers primarily
                      print at smaller sizes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      Fills the Gap Between Mid-Size and Oversized
                    </p>
                    <p className="text-foreground-60 text-sm">
                      Many sellers jump from{" "}
                      <Link
                        href="/etsy-16x20-print-size"
                        className="text-accent-light hover:underline"
                      >
                        16&times;20
                      </Link>{" "}
                      straight to 24&times;36, leaving out the buyers who want
                      something in between. 20&times;24 is the &ldquo;goldilocks&rdquo;
                      large format.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      Competitive Advantage
                    </p>
                    <p className="text-foreground-60 text-sm">
                      Many Etsy sellers only offer the most common sizes ({" "}
                      <Link
                        href="/etsy-8x10-print-size"
                        className="text-accent-light hover:underline"
                      >
                        8&times;10
                      </Link>
                      ,{" "}
                      <Link
                        href="/etsy-11x14-print-size"
                        className="text-accent-light hover:underline"
                      >
                        11&times;14
                      </Link>
                      ,{" "}
                      <Link
                        href="/etsy-16x20-print-size"
                        className="text-accent-light hover:underline"
                      >
                        16&times;20
                      </Link>
                      ). Adding 20&times;24 differentiates your listings and
                      signals professionalism and completeness to potential
                      buyers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      Statement Art Demand
                    </p>
                    <p className="text-foreground-60 text-sm">
                      Buyers searching for statement wall art actively look for
                      sizes beyond the typical{" "}
                      <Link
                        href="/etsy-8x10-print-size"
                        className="text-accent-light hover:underline"
                      >
                        8&times;10
                      </Link>
                      . Offering{" "}
                      <Link
                        href="/how-many-sizes-etsy-printable"
                        className="text-accent-light hover:underline"
                      >
                        multiple large sizes
                      </Link>{" "}
                      captures this audience that competitors miss.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Section 5: How SnapToSize Handles 20x24 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How SnapToSize Handles 20&times;24
              </h2>

              <p className="text-foreground-60 mb-6">
                20&times;24 is included in the Extras pack alongside{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7
                </Link>
                ,{" "}
                <Link
                  href="/etsy-8-5x11-print-size"
                  className="text-accent-light hover:underline"
                >
                  8.5&times;11
                </Link>
                ,{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>
                , 11&times;17, and 13&times;19.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">
                        One Upload, Up to 70 Files
                      </p>
                      <p className="text-foreground-60 text-sm">
                        Upload a single high-resolution image and receive up to
                        70 print-ready files across all 5 ratio packs &mdash;
                        including 20&times;24 &mdash; in portrait, landscape, and
                        square orientations.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">
                        300 DPI Guaranteed
                      </p>
                      <p className="text-foreground-60 text-sm">
                        Every file is exported at 300&nbsp;DPI in JPG format with
                        professional naming (e.g.,{" "}
                        <code className="text-accent-light">
                          artwork_20x24_300dpi.jpg
                        </code>
                        ). Buyers find the right file instantly.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">
                        Full Composition Preserved
                      </p>
                      <p className="text-foreground-60 text-sm">
                        Stretch-only resizing keeps your entire artwork intact at
                        every size. No cropping, no missing edges, no surprises
                        for buyers who print at 20&times;24.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">
                        Under Etsy&apos;s 20 MB Limit
                      </p>
                      <p className="text-foreground-60 text-sm">
                        All output files are auto-optimized to stay under
                        Etsy&apos;s upload limit. For more on file size
                        management, see the{" "}
                        <Link
                          href="/etsy-20mb-file-limit"
                          className="text-accent-light hover:underline"
                        >
                          20 MB file limit guide
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- Section 6: Related Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Related Sizes &mdash; Complete Your Large Format Lineup
              </h2>
              <p className="text-foreground-60 mb-6">
                Buyers shopping for large wall art often consider several sizes
                before deciding. Including multiple large format options in your
                listing covers more frame choices and increases conversion.
                For guidance on how many sizes to include, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to offer
                </Link>
                .
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 &times; 6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard large frame
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Classic photo frame
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">20&times;24</td>
                      <td className="py-3 px-4 text-foreground-60">5:6</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery statement piece
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20&times;25</td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 7500
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized 4:5 frame
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-20x30-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;30
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">2:3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large poster format
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">24&times;30</td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200 &times; 9000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Maximum 4:5 size
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Learn how to{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  resize images for Etsy
                </Link>{" "}
                or use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to check{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  resolution requirements
                </Link>{" "}
                for any size.
              </p>
            </div>

            {/* --- FinalCTA (after Section 6, before FAQ) --- */}
            <div>
              <FinalCTA
                heading="Large Format Made Easy"
                stat="Up to 70 print-ready files from one upload"
                description="Generate 20&times;24 and every other standard Etsy size in seconds. 300 DPI, professional naming, organized packs &mdash; ready to list."
                buttonText="Start Free &mdash; Generate Sizes Now"
                appUrl={appUrl}
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
                      "What are the pixel dimensions for a 20\u00d724 print at 300 DPI?",
                    answer:
                      "6000\u00d77200 pixels. Multiply each dimension by 300: 20\u00d7300 = 6000 pixels wide, 24\u00d7300 = 7200 pixels tall. This is the minimum for sharp, professional-quality large format output.",
                  },
                  {
                    question: "What aspect ratio is 20\u00d724?",
                    answer:
                      "5:6. This is a unique ratio \u2014 not the same as 4:5 (16\u00d720, 8\u00d710) or 3:4 (18\u00d724). A 20\u00d724 file requires its own dedicated export and cannot be cropped from a 4:5 or 3:4 source without losing composition.",
                  },
                  {
                    question:
                      "Can I frame a 20\u00d724 print in a standard frame?",
                    answer:
                      "Yes. 20\u00d724 frames are widely available at IKEA, Michaels, Amazon, and Target. It is also the standard mat opening for 16\u00d720 prints displayed in a larger frame with a 2-inch mat border.",
                  },
                  {
                    question:
                      "What\u2019s the difference between 20\u00d724 and 18\u00d724?",
                    answer:
                      "Different aspect ratios: 20\u00d724 is 5:6, while 18\u00d724 is 3:4. Both are large format but require separate files \u2014 you cannot resize one to the other without cropping or distortion.",
                  },
                  {
                    question:
                      "How large should my source image be for 20\u00d724 at 300 DPI?",
                    answer:
                      "At least 6000\u00d77200 pixels. If your source image is smaller, the output may appear soft or lose detail when printed at full 20\u00d724 size.",
                  },
                  {
                    question:
                      "Is 20\u00d724 a popular size for Etsy wall art?",
                    answer:
                      "Yes. It is a popular large format choice for statement art, gallery presentations, and premium listings. Offering it alongside standard sizes like 8\u00d710 and 16\u00d720 signals completeness to buyers.",
                  },
                ]}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-20x24-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
