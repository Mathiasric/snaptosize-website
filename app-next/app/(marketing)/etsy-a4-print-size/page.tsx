import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCapture } from "@/components/EmailCapture";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "A4 Print Size for Etsy — Pixels, DPI & International Sizing Guide",
  description:
    "A4 is 2480×3508 pixels at 300 DPI (210×297mm). Get exact dimensions, A4 vs US Letter comparison, A-series sizing table, and file setup for Etsy digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-a4-print-size" },
  openGraph: {
    title:
      "A4 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete A4 print guide for Etsy sellers. 2480×3508 pixels at 300 DPI, ISO A-series ratio, A4 vs US Letter, and international sizing.",
    url: "https://snaptosize.com/etsy-a4-print-size",
    images: [
      {
        url: "/assets/og/etsy-a4-print-size.png",
        width: 1200,
        height: 630,
        alt: "A4 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A4 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete A4 print guide for Etsy sellers. 2480×3508 pixels at 300 DPI, ISO A-series ratio, and international file setup.",
    images: ["/assets/og/etsy-a4-print-size.png"],
  },
};

export default function EtsyA4PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A4 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to A4 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, A4 vs US Letter comparison, and A-series sizing for international markets.",
    url: "https://snaptosize.com/etsy-a4-print-size",
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
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
        name: "A4 Print Size",
        item: "https://snaptosize.com/etsy-a4-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is A4 size in pixels at 300 DPI for Etsy prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A4 at 300 DPI is exactly 2480×3508 pixels. The calculation: 210mm ÷ 25.4 × 300 = 2480 pixels wide, 297mm ÷ 25.4 × 300 = 3508 pixels tall.",
        },
      },
      {
        "@type": "Question",
        name: "Should I offer A4 or US Letter size on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Offer both. US Letter (8.5×11 inches) is standard in the US and Canada, while A4 (210×297mm) is the standard everywhere else — Europe, UK, Australia, and Asia. Including both maximizes your addressable market without extra design work.",
        },
      },
      {
        "@type": "Question",
        name: "Can I just resize my 8×10 design to A4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — the aspect ratios are different. 8×10 is 4:5, while A4 uses the ISO A-series ratio. Resizing will either crop your artwork or add white bars. You need to re-compose the design for A4 proportions, or use a tool like SnapToSize that handles ratio-aware resizing automatically.",
        },
      },
      {
        "@type": "Question",
        name: "What A-series paper sizes sell best on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A4 is the most popular for home printing and everyday wall art. A3 (297×420mm) sells well for statement wall art pieces. A5 (148×210mm) is used for small prints, cards, and planners. Offering all three covers the core international market.",
        },
      },
      {
        "@type": "Question",
        name: "How do I include both US and international sizes in one Etsy listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Create a ZIP file with folders: one for US sizes (5×7, 8×10, 11×14, 16×20) and one for international sizes (A5, A4, A3). Name files clearly — e.g., artwork_A4_300dpi.jpg. SnapToSize generates both US and international sizes from a single upload.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_a4&kind=guide";

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
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />

        {/* A4 Frame blueprint — right side (210:297 ≈ 0.707 ratio) */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — A4 proportions: width 212px, height 300px */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "212px", height: "300px" }}
          >
            {/* Inner frame with accent border */}
            <div className="absolute inset-3 border border-purple-500/20 rounded-sm" />

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-purple-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-purple-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-purple-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-purple-400/30" />

            {/* Dimension label — width */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap">
                210mm &middot; 2480 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                297mm &middot; 3508 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Ratio badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  ISO
                </span>
              </div>
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-3">
              {[...Array(8)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(11)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-1.5 bg-white/[0.06]" />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Print Size Reference
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                A4 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the international
                standard for digital prints
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              2480&times;3508 pixels. 210&times;297&nbsp;mm. The paper size used
              by 60%+ of the world. Here&apos;s everything you need to create
              A4 digital downloads that sell to international buyers.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All A-Series Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download A5 + A4 + A3 at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  2480&times;3508 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  ISO A-series ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  International standard
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
            {/* --- What Is A4 Print Size --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is A4 Print Size for Etsy?
              </h2>

              <p className="text-foreground-60 mb-4">
                A4 measures 210&times;297&nbsp;mm (8.27&times;11.69&nbsp;inches).
                It&apos;s the international standard paper size &mdash; the
                equivalent of US Letter for Europe, the UK, Australia, and most
                of Asia. Every home printer outside North America defaults to A4.
              </p>
              <p className="text-foreground-60 mb-4">
                For Etsy sellers, A4 unlocks the global market. Buyers in London,
                Berlin, Sydney, and Tokyo expect A4 files they can print at home
                without scaling or cropping. If your listing only includes US
                sizes, you&apos;re invisible to these buyers.
              </p>
              <p className="text-foreground-60">
                A4 belongs to the ISO 216 A-series &mdash; a family of paper
                sizes that all share the same ISO A-series ratio.
                This means one master design scales perfectly across A5, A4, A3,
                and A2 without any cropping. For a complete overview of all Etsy
                sizes, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- A4 Pixel Dimensions at 300 DPI --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A4 Pixel Dimensions at 300&nbsp;DPI
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">210 &times; 297 mm (8.27 &times; 11.69 in)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">2480 &times; 3508 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">ISO A-series</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math: convert millimeters to inches (divide by 25.4), then
                multiply by 300. Width: 210&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;2480
                pixels. Height: 297&nbsp;&divide;&nbsp;25.4&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3508
                pixels.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        A-Series Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Dimensions (mm)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Common Use
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        148 &times; 210
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1748 &times; 2480
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small prints, greeting cards, planners
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">A4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        210 &times; 297
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 &times; 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Home printing, standard wall art
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A3</td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large wall art, framed statement pieces
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A2</td>
                      <td className="py-3 px-4 text-foreground-60">
                        420 &times; 594
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4961 &times; 7016
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Poster-size, gallery prints
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">A1</td>
                      <td className="py-3 px-4 text-foreground-60">
                        594 &times; 841
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7016 &times; 9933
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized poster, gallery exhibitions
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">A0</td>
                      <td className="py-3 px-4 text-foreground-60">
                        841 &times; 1189
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        9933 &times; 14043
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Maximum size, architectural prints
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                Every A-series size shares the same ISO A-series ratio. This is what
                makes ISO paper special: fold an A3 in half and you get an
                exact A4. Fold A4 in half and you get A5. Your artwork
                composition stays identical at every size. For more on how
                ratios work across Etsy sizes, see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- A4 vs US Letter --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A4 vs US Letter &mdash; Key Differences for Etsy Sellers
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        &nbsp;
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A4 (ISO)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        US Letter (ANSI)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Dimensions</td>
                      <td className="py-3 px-4 text-foreground-60">
                        210 &times; 297 mm
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        216 &times; 279 mm (8.5 &times; 11 in)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pixels @ 300 DPI</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480 &times; 3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550 &times; 3300
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        ISO A-series
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US Letter
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Shape</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Narrower and taller
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Wider and shorter
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Used In</td>
                      <td className="py-3 px-4 text-foreground-60">
                        UK, EU, Australia, Asia, Africa
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US, Canada, Mexico
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                A4 is 6&nbsp;mm narrower but 18&nbsp;mm taller than US Letter.
                The ratios are fundamentally different. You cannot crop one to get the other without losing
                artwork or adding white space.
              </p>
              <p className="text-foreground-60 mb-4">
                This means if your{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10 print
                </Link>{" "}
                or Letter-size file is simply cropped to A4 dimensions, your
                buyer will get a distorted or incomplete design. Each size needs
                its own properly composed file.
              </p>
              <p className="text-foreground-60">
                The good news: since all A-series sizes share the same ratio,
                you only need to create one A-series master. That single file
                scales to A5, A4, A3, and A2 without any cropping.
              </p>
            </div>

            {/* --- Which A-Series Sizes to Offer --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Which A-Series Sizes to Offer on Etsy
              </h2>

              <p className="text-foreground-60 mb-6">
                The essential international bundle is A5&nbsp;+&nbsp;A4&nbsp;+&nbsp;A3.
                These three sizes cover the vast majority of international buyer
                needs. Here&apos;s why each one matters:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    A4 &mdash; The Everyday Size
                  </h3>
                  <p className="text-foreground-60">
                    Most popular for home printing. Every international buyer
                    has A4 paper in their printer right now. This is the size
                    they&apos;ll print first to test your design before
                    committing to larger framed versions.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    A3 &mdash; The Wall Art Size
                  </h3>
                  <p className="text-foreground-60">
                    Double the area of A4. This is the go-to for framed wall
                    art in international markets. Buyers take A3 files to local
                    print shops for professional output. Higher perceived value
                    in your listing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    A5 &mdash; The Small Print &amp; Card Size
                  </h3>
                  <p className="text-foreground-60">
                    Half the area of A4. Used for small desk prints, greeting
                    cards, journal covers, and planners. Adding A5 rounds out
                    your bundle and serves the stationery and planner niche.
                  </p>
                </Card>
              </div>

              <p className="text-foreground-60 mb-4">
                Since all three share the same ratio, one master design
                scales to all of them. No cropping, no re-composing. This is why
                A-series is the most efficient ratio family to offer alongside
                your US sizes.
              </p>
              <p className="text-foreground-60">
                For guidance on how many sizes to include per listing, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to offer for Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  All Three A-Series Sizes from One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  SnapToSize outputs A5, A4, and A3 files automatically &mdash;
                  at 300&nbsp;DPI, correctly named, and ready for Etsy. No
                  manual canvas setup required.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate A-Series Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- How to Create A4 Files --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create A4 Files for Your Etsy Listings
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    1. Set Your Canvas to 2480&times;3508 px
                  </h3>
                  <p className="text-foreground-60">
                    In Photoshop, Canva, or Illustrator: create a new document
                    at 2480&times;3508 pixels with 300&nbsp;DPI resolution. Do
                    not set it in millimeters and let the software calculate
                    pixels &mdash; rounding differences can produce slightly off
                    dimensions. Use exact pixel values.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    2. Design with A4 Margins in Mind
                  </h3>
                  <p className="text-foreground-60">
                    Most home printers cannot print to the edge. Keep critical
                    elements at least 10&nbsp;mm (118&nbsp;px) from all edges.
                    For borderless printing, some buyers will need to enable
                    &ldquo;fit to page&rdquo; &mdash; mention this in your
                    listing description.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    3. Export as JPG / JPEG or PDF
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) maintains full print quality while
                    keeping files well under Etsy&apos;s 20&nbsp;MB limit. PDF is preferred by
                    some international buyers for its consistent rendering across
                    printers. For more on format selection, see{" "}
                    <Link
                      href="/best-file-format-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      best file format for Etsy printables
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    4. Repeat for Every Size Variant
                  </h3>
                  <p className="text-foreground-60">
                    This is where manual production becomes painful. Each US
                    size needs different pixel dimensions and a different aspect
                    ratio. Each A-series size needs recalculated pixels. For a
                    typical listing with 8 sizes, that&apos;s 8 separate canvas
                    setups and 8 exports.
                  </p>
                </div>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Skip the manual work:
                    </strong>{" "}
                    SnapToSize generates A4, A3, A5, and all US sizes
                    automatically from one upload &mdash; at 300&nbsp;DPI, ready
                    for Etsy. For a full walkthrough, see{" "}
                    <Link
                      href="/how-to-resize-images-for-etsy"
                      className="text-accent-light hover:underline"
                    >
                      how to resize images for Etsy
                    </Link>
                    .
                  </p>
                </div>
              </Card>
            </div>

            {/* --- File Delivery & Packaging --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Delivery: Packaging A4 with US Sizes
              </h2>

              <p className="text-foreground-60 mb-4">
                International buyers expect to find their sizes immediately.
                The best practice is organizing your ZIP download with clear
                folder structure:
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Recommended ZIP Structure
                </h3>
                <div className="font-mono text-sm text-foreground-60 space-y-1">
                  <p>artwork-name.zip</p>
                  <p className="pl-4">{"\u251C\u2500"} US-Sizes/</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_5x7_300dpi.jpg</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_8x10_300dpi.jpg</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_11x14_300dpi.jpg</p>
                  <p className="pl-8">{"\u2514\u2500"} artwork_16x20_300dpi.jpg</p>
                  <p className="pl-4">{"\u2514\u2500"} International-Sizes/</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_A5_300dpi.jpg</p>
                  <p className="pl-8">{"\u251C\u2500"} artwork_A4_300dpi.jpg</p>
                  <p className="pl-8">{"\u2514\u2500"} artwork_A3_300dpi.jpg</p>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                With JPG / JPEG files, the bundle stays well under
                Etsy&apos;s 20&nbsp;MB per-file limit. PNG files are typically
                3-5&times; larger &mdash; often exceeding the limit at larger sizes.
              </p>
              <p className="text-foreground-60 mb-4">
                Mention &ldquo;Includes A4, A3, and A5 international sizes&rdquo;
                prominently in your listing title and description. International
                buyers specifically search for &ldquo;A4&rdquo; and &ldquo;A3&rdquo;
                in Etsy search &mdash; these terms in your tags improve
                visibility.
              </p>
              <p className="text-foreground-60">
                For US size specs, see the{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7 print size guide
                </Link>
                {" "}and{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20 print size guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  US + International Sizes in One Upload
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once, get every US size (5&times;7 through 16&times;20)
                  and every international size (A5, A4, A3) as a ready-to-ship
                  ZIP pack.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Now
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common A4 Mistakes Etsy Sellers Make
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Exporting at 72 DPI instead of 300 DPI
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        At 72&nbsp;DPI, an A4 file is only 595&times;842
                        pixels &mdash; a fraction of what&apos;s needed for
                        print. The result is a blurry, pixelated mess. Always
                        verify your export is 2480&times;3508 pixels. For a
                        deep dive on resolution, see{" "}
                        <Link
                          href="/best-resolution-for-etsy-printables"
                          className="text-accent-light hover:underline"
                        >
                          best resolution for Etsy printables
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Using US Letter dimensions and calling it A4
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        US Letter is 2550&times;3300 pixels. A4 is
                        2480&times;3508 pixels. They are not the same.
                        Labeling a Letter file as A4 means your buyer&apos;s
                        print will have incorrect margins or get cropped by
                        their printer driver. International buyers notice this
                        immediately.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Not accounting for printer margins
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Most home printers leave a 5&ndash;10&nbsp;mm
                        unprintable border. If your design has text or critical
                        elements running to the edge, they&apos;ll be cut off.
                        Keep a 10&nbsp;mm safe zone on all sides, and mention
                        &ldquo;print at actual size&rdquo; in your listing.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Forgetting A4 in listing tags and title
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        International buyers search for &ldquo;A4 print&rdquo;
                        and &ldquo;A4 wall art&rdquo; on Etsy. If your tags
                        only mention US sizes, your listing won&apos;t appear
                        in these searches. Add &ldquo;A4&rdquo;,
                        &ldquo;A3&rdquo;, and &ldquo;international sizes&rdquo;
                        to both your title and tags.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- International Market Opportunity --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The International Market Opportunity
              </h2>

              <p className="text-foreground-60 mb-4">
                Over 60% of the world uses A-series paper as the standard.
                That includes the entire EU, UK, Australia, New Zealand, Japan,
                South Korea, India, and most of Africa and South America. Every
                one of these buyers expects A4 files.
              </p>
              <p className="text-foreground-60 mb-4">
                Most US-based Etsy sellers only offer inch-based sizes. This
                creates a gap: international buyers scroll past listings that
                don&apos;t mention A4 or A3. Sellers who include ISO sizes in
                their listings compete in a less crowded space with motivated
                buyers.
              </p>
              <p className="text-foreground-60 mb-4">
                The cost of adding A-series sizes is near zero. Since all
                A-sizes share the same ratio, a single master design produces
                A5, A4, A3, and A2 with simple scaling &mdash; no redesign
                needed. You&apos;re doubling your addressable market with
                minutes of extra work per listing.
              </p>
              <p className="text-foreground-60">
                For the complete picture of all print sizes and ratios, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  Etsy print sizes hub
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Tap Into the Global Market Today
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork and instantly receive A5, A4, A3, plus all
                  US sizes at 300&nbsp;DPI. Correctly named, organized, and
                  under 20&nbsp;MB. Production-ready in seconds.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Start Free — Generate All Sizes
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-2">
                  No credit card required. Free plan includes watermarked
                  exports.
                </p>
              </Card>
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
                      "What is A4 size in pixels at 300 DPI for Etsy prints?",
                    answer:
                      "A4 at 300 DPI is exactly 2480×3508 pixels. The calculation: 210mm ÷ 25.4 × 300 = 2480 pixels wide, 297mm ÷ 25.4 × 300 = 3508 pixels tall.",
                  },
                  {
                    question:
                      "Should I offer A4 or US Letter size on Etsy?",
                    answer:
                      "Offer both. US Letter (8.5×11 inches) is standard in the US and Canada, while A4 (210×297mm) is the standard everywhere else — Europe, UK, Australia, and Asia. Including both maximizes your addressable market without extra design work.",
                  },
                  {
                    question:
                      "Can I just resize my 8×10 design to A4?",
                    answer:
                      "No — the aspect ratios are different. 8×10 is 4:5, while A4 uses the ISO A-series ratio. Resizing will either crop your artwork or add white bars. You need to re-compose the design for A4 proportions, or use a tool like SnapToSize that handles ratio-aware resizing automatically.",
                  },
                  {
                    question:
                      "What A-series paper sizes sell best on Etsy?",
                    answer:
                      "A4 is the most popular for home printing and everyday wall art. A3 (297×420mm) sells well for statement wall art pieces. A5 (148×210mm) is used for small prints, cards, and planners. Offering all three covers the core international market.",
                  },
                  {
                    question:
                      "How do I include both US and international sizes in one Etsy listing?",
                    answer:
                      "Create a ZIP file with folders: one for US sizes (5×7, 8×10, 11×14, 16×20) and one for international sizes (A5, A4, A3). Name files clearly — e.g., artwork_A4_300dpi.jpg. SnapToSize generates both US and international sizes from a single upload.",
                  },
                ]}
              />
            </div>

            {/* --- Email Capture --- */}
            <div>
              <Card accent className="p-6 md:p-8">
                <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Free Etsy Print Size Cheat Sheet
                  </h3>
                  <p className="text-sm text-foreground-60 mb-5">
                    All Etsy ratios and pixel dimensions at 300 DPI in one PDF.
                    US sizes, international A-series, and file naming conventions.
                  </p>
                  <EmailCapture
                    placeholder="Enter your email"
                    buttonText="Get Free Cheat Sheet"
                  />
                </div>
              </Card>
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-a4-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
