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
  title: "11\u00d717 Print Size for Etsy \u2014 Pixels, DPI & Tabloid Guide",
  description:
    "11\u00d717 (Tabloid) is 3300\u00d75100 pixels at 300 DPI. Exact dimensions, 11\u00d717 vs A3 comparison, framing tips, and Etsy listing setup for digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-11x17-print-size" },
  openGraph: {
    title:
      "11\u00d717 Print Size for Etsy \u2014 Tabloid Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 11\u00d717 print guide for Etsy sellers. 3300\u00d75100 pixels at 300 DPI, Tabloid vs A3, framing, and listing setup.",
    url: "https://snaptosize.com/etsy-11x17-print-size",
    images: [
      {
        url: "/assets/og/etsy-11x17-print-size.png",
        width: 1200,
        height: 630,
        alt: "11\u00d717 Print Size for Etsy \u2014 Tabloid Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "11\u00d717 Print Size for Etsy \u2014 Tabloid Dimensions at 300 DPI",
    description:
      "Complete 11\u00d717 print guide for Etsy sellers. 3300\u00d75100 pixels at 300 DPI, Tabloid vs A3, and framing guide.",
    images: ["/assets/og/etsy-11x17-print-size.png"],
  },
};

export default function Etsy11x17PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "11\u00d717 Print Size for Etsy \u2014 Tabloid Dimensions at 300 DPI",
    description:
      "Complete technical guide to 11\u00d717 (Tabloid) print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 11\u00d717 vs A3 comparison, framing options, and file setup for digital downloads.",
    url: "https://snaptosize.com/etsy-11x17-print-size",
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
        name: "11\u00d717 Print Size",
        item: "https://snaptosize.com/etsy-11x17-print-size",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "What are the pixel dimensions for 11\u00d717 at 300 DPI?",
      answer:
        "3300\u00d75100 pixels in portrait orientation (5100\u00d73300 in landscape).",
    },
    {
      question: "Is 11\u00d717 the same as A3?",
      answer:
        "No. A3 is 11.69\u00d716.54 inches (297\u00d7420mm) while 11\u00d717 is exactly 11\u00d717 inches (279.4\u00d7431.8mm). They have different aspect ratios and cannot be used interchangeably without cropping.",
    },
    {
      question:
        "What frame size do I need for an 11\u00d717 print?",
      answer:
        "An 11\u00d717 frame without matting, or a 16\u00d720 frame with a mat cut to 11\u00d717 for a bordered presentation.",
    },
    {
      question:
        "Is 11\u00d717 a good size for Etsy digital downloads?",
      answer:
        "Yes. It is the largest size most buyers can print at home on a wide-format inkjet, making it popular for poster art, craft show displays, and home decor. It is also widely available as a ready-made frame size in the US.",
    },
    {
      question:
        "What ratio pack does 11\u00d717 belong to in SnapToSize?",
      answer:
        "11\u00d717 is in the Extras pack alongside 5\u00d77, 8.5\u00d711, 11\u00d714, 13\u00d719, and 20\u00d724. Its unique ~11:17 ratio does not fit the standard 2:3, 3:4, 4:5, or ISO packs.",
    },
    {
      question:
        "Should I offer both 11\u00d717 and A3 in my listings?",
      answer:
        "Yes. 11\u00d717 serves US buyers and A3 serves international buyers. They are close in size but not identical, so offering both maximizes your market reach.",
    },
    {
      question: "Can buyers print 11\u00d717 at home?",
      answer:
        "Yes, with a wide-format inkjet printer (many consumer models support tabloid/11\u00d717). This is one of the reasons it is popular \u2014 buyers do not need to visit a print shop.",
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
    "https://app.snaptosize.com?source=seo_11x17&kind=guide";

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
            "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-15%] right-[-8%] w-[550px] h-[550px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* Tabloid frame blueprint — right side: 11×17 with nested US Letter ghost */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer tabloid frame */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "198px", height: "306px" }}
          >
            {/* Inner accent border */}
            <div className="absolute inset-3 border border-purple-500/20 rounded-sm" />

            {/* US Letter ghost overlay — top half, showing 11×17 = 2× Letter */}
            <div
              className="absolute left-3 top-3 border border-dashed border-teal-400/20 rounded-sm"
              style={{ width: "calc(100% - 24px)", height: "calc(50% - 12px)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-mono text-teal-300/30 tracking-wider">
                  8.5&times;11 Letter
                </span>
              </div>
            </div>

            {/* Second Letter ghost — bottom half */}
            <div
              className="absolute left-3 bottom-3 border border-dashed border-teal-400/20 rounded-sm"
              style={{ width: "calc(100% - 24px)", height: "calc(50% - 12px)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-mono text-teal-300/30 tracking-wider">
                  8.5&times;11 Letter
                </span>
              </div>
            </div>

            {/* Divider line between the two Letter halves */}
            <div
              className="absolute left-3 right-3 border-t border-dashed border-teal-400/15"
              style={{ top: "50%" }}
            />

            {/* "2×" annotation on the right */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <div className="w-px h-6 bg-teal-400/20" />
              <span className="text-[9px] font-mono text-teal-300/40 tracking-wider">
                2&times;
              </span>
              <div className="w-px h-6 bg-teal-400/20" />
            </div>

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-purple-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-purple-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-purple-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-purple-400/30" />

            {/* Dimension label — width */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap">
                11 in &middot; 3300 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-28 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                17 in &middot; 5100 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Tabloid badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  TABLOID
                </span>
              </div>
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-3">
              {[...Array(12)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(18)].map((_, i) => (
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
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-teal-400/10 border border-teal-400/25 text-teal-300/70">
                Popular
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                11&times;17 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                The largest home-printable poster size &mdash; a craft show
                staple
              </span>
            </h1>
            <p className="text-base text-white/60 mb-8 max-w-lg">
              3300&times;5100 pixels at 300&nbsp;DPI. Exactly twice US Letter.
              Here&apos;s everything you need to set up 11&times;17 digital
              downloads that sell &mdash; including the A3 comparison buyers
              always ask about.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 11&times;17 + 30 more sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Up to 70 print-ready files
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  All 5 ratio packs
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
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
            <QuickAnswer question="What pixel dimensions for 11×17 at 300 DPI?">
              <strong>3300 × 5100 pixels</strong>. 11×17 (Tabloid) is in the Extras pack — perfect for oversized home printing and tall poster art.
            </QuickAnswer>
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-11x17-size-comparison.png"
                alt="11×17 Tabloid size comparison with 8.5×11, 11×14, A3, and 12×18"
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
            {/* --- What Is 11×17? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is 11&times;17? The Tabloid Size Explained
              </h2>
              <p className="text-foreground-60 mb-4">
                11&times;17 inches (279.4&times;431.8&nbsp;mm) is known by
                several names: <strong>Tabloid</strong> in portrait orientation,{" "}
                <strong>Ledger</strong> in landscape, and{" "}
                <strong>ANSI&nbsp;B</strong> in the US engineering standard. It
                is exactly twice the area of{" "}
                <Link
                  href="/etsy-8-5x11-print-size"
                  className="text-accent-light hover:underline"
                >
                  US Letter (8.5&times;11)
                </Link>{" "}
                &mdash; two Letter sheets side by side equal one Ledger sheet.
              </p>
              <p className="text-foreground-60 mb-4">
                For Etsy sellers, 11&times;17 occupies a sweet spot: it is the
                largest size most home printers can handle. Wide-format consumer
                inkjets from Epson, Canon, and HP commonly support tabloid paper,
                which means buyers can print this size at home without visiting a
                print shop.
              </p>
              <p className="text-foreground-60">
                Common use cases include small posters, craft show displays,
                restaurant menus, event flyers, and home decor prints. If your
                buyers are the type to print their own wall art, 11&times;17 is
                often the largest size they will attempt.
              </p>
            </div>

            {/* --- Exact Pixel Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                11&times;17 at 300&nbsp;DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">
                      11 &times; 17 inches
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Metric</span>
                    <span className="font-semibold">
                      279.4 &times; 431.8 mm
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">3300 &times; 5100 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">~11:17 (1:1.545)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Also Known As</span>
                    <span className="font-semibold">
                      Tabloid / Ledger / ANSI B
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math: 11&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3300 pixels wide,
                17&nbsp;&times;&nbsp;300&nbsp;=&nbsp;5100 pixels tall. Your
                source file must be at least 3300&times;5100 pixels to maintain
                full print quality at 300&nbsp;DPI. Anything smaller will appear
                soft or pixelated when printed at full size.
              </p>
              <p className="text-foreground-60 mb-4">
                Deliver your files as JPG (also called JPEG) at 300&nbsp;DPI.
                This is the standard format for Etsy digital downloads &mdash;
                it balances print quality with file size, keeping individual
                files well under{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy&apos;s 20&nbsp;MB upload limit
                </Link>
                .
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">DPI</th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixel Dimensions
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">300</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 &times; 5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Professional print quality (required for Etsy)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1650 &times; 2550
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Draft / screen preview only
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">72</td>
                      <td className="py-3 px-4 text-foreground-60">
                        792 &times; 1224
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Web display only &mdash; not for print
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm mt-4">
                For a deeper look at resolution requirements, see the{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables guide
                </Link>
                .
              </p>
            </div>

            {/* --- 11×17 vs A3 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                11&times;17 vs A3 &mdash; Know the Difference
              </h2>
              <p className="text-foreground-60 mb-6">
                11&times;17 and{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>{" "}
                are close in physical size but they are <em>not</em> the same.
                Different aspect ratios mean you cannot resize one to the other
                without cropping or adding white bars.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Attribute
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        11&times;17 (Tabloid)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        A3 (ISO)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Inches</td>
                      <td className="py-3 px-4 text-foreground-60">
                        11 &times; 17
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11.69 &times; 16.54
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Millimeters</td>
                      <td className="py-3 px-4 text-foreground-60">
                        279.4 &times; 431.8
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        297 &times; 420
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Pixels @ 300 DPI
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 &times; 5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Aspect Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        ~1:1.545
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:1.414 (&radic;2)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Standard</td>
                      <td className="py-3 px-4 text-foreground-60">
                        ANSI (US)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        ISO 216 (international)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Common in</td>
                      <td className="py-3 px-4 text-foreground-60">
                        USA, Canada
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Europe, Asia, Australia
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                A3 is slightly wider (by 0.69&nbsp;inches) but shorter (by
                0.46&nbsp;inches) than 11&times;17. The aspect ratios differ
                enough that swapping one for the other will either crop your
                artwork or leave visible white bars around the edges.
              </p>
              <p className="text-foreground-60">
                <strong>Recommendation:</strong> offer both 11&times;17 and A3
                in your listings. 11&times;17 covers US and Canadian buyers, A3
                covers everyone else. This is especially important for sellers
                with international audiences. See the full{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3 print size guide
                </Link>{" "}
                for more on the ISO standard. For a broader view of how ratios
                work, check the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios explained
                </Link>{" "}
                page.
              </p>
            </div>

            {/* --- Framing Guide --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing Guide for 11&times;17 Prints
              </h2>
              <p className="text-foreground-60 mb-6">
                Ready-made 11&times;17 frames are widely available at craft
                stores, IKEA, and Amazon in the US. For a more elevated
                presentation, many buyers mat their 11&times;17 print inside a
                larger frame.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      11&times;17 frame, no mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Standard, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      16&times;20 frame + 11&times;17 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Popular matted option, adds 2-3&Prime; border
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      18&times;24 frame + 11&times;17 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wide border, gallery/craft show display
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Mention framing options in your Etsy description.
                    &ldquo;Fits standard 11&times;17 frames (widely available at
                    craft stores and Amazon). For a bordered look, mat in a
                    16&times;20 frame.&rdquo; This reduces buyer questions and
                    increases confidence.
                  </p>
                </div>
              </Card>

              <p className="text-foreground-60 text-sm mt-4">
                Note: 11&times;17 frames are much more common in the US than
                internationally, where{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3 frames
                </Link>{" "}
                dominate. If you sell globally, include both sizes.
              </p>
            </div>

            {/* --- CTA 1 (Card accent) --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Include 11&times;17 Alongside 30+ Other Sizes
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once and get 11&times;17, every standard ratio, and the
                  full Extras pack &mdash; all at 300&nbsp;DPI, organized and
                  ready for Etsy.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- How 11×17 Fits Into the Extras Pack --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How 11&times;17 Fits Into the Extras Pack
              </h2>
              <p className="text-foreground-60 mb-4">
                11&times;17 has a unique aspect ratio (~11:17) that does not
                match any of the standard ratio families (2:3, 3:4, 4:5, or
                ISO). It belongs to the Extras pack, which collects the most
                popular sizes that fall outside those ratio groups.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
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
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-5x7-print-size"
                          className="text-accent-light hover:underline"
                        >
                          5&times;7
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500 &times; 2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Greeting cards, small frames
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-8-5x11-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8.5&times;11
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550 &times; 3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US Letter, home printing
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-11x14-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;14
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 &times; 4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo mat standard
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        11&times;17
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 &times; 5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Tabloid, large format home printing
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">13&times;19</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3900 &times; 5700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Fine art poster, large format
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-20x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          20&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 &times; 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format print
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                Every size in the Extras pack comes in both portrait and
                landscape orientations, doubling the number of files your buyers
                receive. Neighboring sizes to 11&times;17 include{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>{" "}
                (slightly smaller, close to the 4:5 family) and 13&times;19 (a
                fine art poster format favored by photographers).
              </p>
              <p className="text-foreground-60">
                For the complete size chart across all five ratio packs, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print sizes guide
                </Link>
                . Not sure{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include
                </Link>
                ? That guide breaks down the strategy.
              </p>
            </div>

            {/* --- Setting Up 11×17 Listings --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Setting Up 11&times;17 Listings on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                Getting the file setup right prevents refund requests and
                negative reviews. Here is what you need for an 11&times;17
                digital download listing.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    File Requirements
                  </h3>
                  <p className="text-foreground-60">
                    JPG at 3300&times;5100 pixels minimum, 300&nbsp;DPI, sRGB
                    color profile. A single 11&times;17 JPG is well within
                    Etsy&apos;s 20&nbsp;MB limit. Use descriptive file names like{" "}
                    <code className="text-accent-light">
                      botanical_art_11x17_300dpi.jpg
                    </code>{" "}
                    so buyers can find the right file instantly. For a deeper
                    look at what to include, see{" "}
                    <Link
                      href="/what-files-to-include-etsy-digital-download"
                      className="text-accent-light hover:underline"
                    >
                      what files to include in Etsy digital downloads
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Multi-Size Bundles
                  </h3>
                  <p className="text-foreground-60">
                    Buyers expect multiple sizes per listing. An 11&times;17-only
                    listing will underperform compared to one that includes the
                    full range of standard sizes. The more sizes you offer, the
                    fewer &ldquo;Do you have this in&hellip;?&rdquo; messages
                    you receive.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Etsy Tags (max 20 characters each)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "11x17 digital print",
                      "tabloid wall art",
                      "11x17 poster print",
                      "printable wall art",
                      "large wall art print",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs bg-white/[0.06] border border-white/10 rounded-full text-foreground-60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-foreground-60 text-sm">
                Confused about manual resizing?{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  How to resize images for Etsy
                </Link>{" "}
                walks through the options. You can also use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to verify dimensions for any size.
              </p>
            </div>

            {/* --- CTA 2 / FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Stop Resizing Manually"
                stat="Up to 70 print-ready files from one upload"
                description="Generate 11&times;17 and every other Etsy size in seconds. Organized, named, and under 20&nbsp;MB &mdash; ready to upload."
                buttonText="Try SnapToSize Free"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-11x17-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
