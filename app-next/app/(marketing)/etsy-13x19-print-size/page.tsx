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
  title: "13\u00d719 Print Size for Etsy \u2014 Pixels, DPI & Poster Guide",
  description:
    "13\u00d719 (Super B / A3+) is 3900\u00d75700 pixels at 300 DPI. Pixel dimensions, 13\u00d719 vs A3 comparison, framing guide, and Etsy listing setup for fine art digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-13x19-print-size" },
  openGraph: {
    title:
      "13\u00d719 Print Size for Etsy \u2014 Fine Art Poster Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 13\u00d719 print guide for Etsy sellers. 3900\u00d75700 pixels at 300 DPI, Super B / A3+ explained, framing, and listing setup.",
    url: "https://snaptosize.com/etsy-13x19-print-size",
    images: [
      {
        url: "/assets/og/etsy-13x19-print-size.png",
        width: 1200,
        height: 630,
        alt: "13\u00d719 Print Size for Etsy \u2014 Fine Art Poster Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "13\u00d719 Print Size for Etsy \u2014 Fine Art Poster Dimensions at 300 DPI",
    description:
      "Complete 13\u00d719 print guide for Etsy sellers. 3900\u00d75700 pixels at 300 DPI, Super B / A3+ explained, and framing guide.",
    images: ["/assets/og/etsy-13x19-print-size.png"],
  },
};

export default function Etsy13x19PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "13\u00d719 Print Size for Etsy \u2014 Fine Art Poster Dimensions at 300 DPI",
    description:
      "Complete technical guide to 13\u00d719 (Super B / A3+) print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 13\u00d719 vs A3 comparison, framing options, and file setup for fine art digital downloads.",
    url: "https://snaptosize.com/etsy-13x19-print-size",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
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
        name: "13\u00d719 Print Size",
        item: "https://snaptosize.com/etsy-13x19-print-size",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "What are the pixel dimensions for a 13\u00d719 print at 300 DPI?",
      answer:
        "3900\u00d75700 pixels. This is the minimum resolution for sharp, professional-quality prints at 13\u00d719.",
    },
    {
      question: "What aspect ratio is 13\u00d719?",
      answer:
        "Approximately 1:1.46 (close to 2:3 but not exact). It has its own unique ratio, which is why SnapToSize includes it in the Extras pack rather than a standard ratio pack.",
    },
    {
      question:
        "What frame size fits a 13\u00d719 print?",
      answer:
        "An 18\u00d724 frame with a standard mat creates a 2.5-inch border on all sides. Frameless 13\u00d719 frames are available from specialty retailers.",
    },
    {
      question:
        "Is 13\u00d719 the same as A3?",
      answer:
        "No. A3 is 11.7\u00d716.5 inches (297\u00d7420mm). 13\u00d719 is larger \u2014 sometimes called A3+ or Super B. Both are popular for fine art, but 13\u00d719 gives about 35% more print area.",
    },
    {
      question:
        "Can buyers print 13\u00d719 at home?",
      answer:
        "Yes, with a wide-format inkjet printer (13-inch or wider). Models like the Epson SureColor P700 or Canon PIXMA Pro-200 handle 13\u00d719 paper. Mention this in your listing description.",
    },
    {
      question:
        "Should I include 13\u00d719 in my Etsy listings?",
      answer:
        "Yes, if you target fine art buyers, photographers, or collectors. It is a premium size that signals quality. SnapToSize generates it automatically as part of the Extras pack \u2014 no extra work required.",
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
    "https://app.snaptosize.com?source=seo_13x19&kind=guide";

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

        {/* Blueprint frame — right side: 13×19 with ghost A3 overlay for size comparison */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer 13×19 frame (scaled: 13→195px, 19→285px) */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "195px", height: "285px" }}
          >
            {/* Inner accent border */}
            <div className="absolute inset-3 border border-purple-500/20 rounded-sm" />

            {/* A3 ghost overlay — shorter and narrower than 13×19, anchored top-left */}
            <div
              className="absolute left-3 top-3 border border-dashed border-teal-400/20 rounded-sm"
              style={{ width: "132px", height: "219px" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-mono text-teal-300/30 tracking-wider">
                  A3 (11.7&times;16.5)
                </span>
              </div>
            </div>

            {/* "+35%" area badge between A3 edge and 13×19 edge */}
            <div
              className="absolute flex items-center justify-center"
              style={{ right: "12px", bottom: "12px", width: "45px", height: "48px" }}
            >
              <span className="text-[8px] font-mono text-teal-300/25 tracking-wider leading-tight text-center">
                +35%<br />area
              </span>
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
                13 in &middot; 3900 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-28 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                19 in &middot; 5700 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* SUPER B badge */}
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  SUPER B
                </span>
              </div>
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-3">
              {[...Array(14)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(20)].map((_, i) => (
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
                A3+
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                13&times;19 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Fine art poster dimensions at 300&nbsp;DPI
              </span>
            </h1>
            <p className="text-base text-white/60 mb-8 max-w-lg">
              3900&times;5700 pixels at 300&nbsp;DPI. Also called Super&nbsp;B or
              A3+, this is the go-to size for fine art photography and
              wide-format inkjet printing &mdash; 35% larger than A3.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 13&times;19 + 30 more sizes.
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

      {/* ===== QUICK ANSWER ===== */}
      <section className="py-8 md:py-10">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <QuickAnswer question="What pixel dimensions for 13×19 at 300 DPI?">
              <strong>3900 &times; 5700 pixels</strong>. 13&times;19 (Super B / A3+) is in the Extras pack &mdash; the fine art poster size for wide-format inkjet printing.
            </QuickAnswer>
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src="/assets/visuals/etsy-13x19-size-comparison.png"
                alt="13×19 print size comparison with 11×17, A3, 12×18, and 16×20"
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
            {/* --- What Is 13×19? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is the 13&times;19 Print Size?
              </h2>
              <p className="text-foreground-60 mb-4">
                13&times;19 inches (330&times;483&nbsp;mm) is known as{" "}
                <strong>Super&nbsp;B</strong> or <strong>A3+</strong> in the
                print industry. It is the standard sheet size for wide-format
                inkjet printers &mdash; the Epson SureColor P700, Canon PIXMA
                Pro-200, and similar 13-inch-wide models all use 13&times;19
                paper as their primary large-format media.
              </p>
              <p className="text-foreground-60 mb-4">
                For Etsy sellers, 13&times;19 targets a specific and valuable
                buyer segment: fine art collectors, photographers, and home
                decor enthusiasts who own wide-format printers. These buyers
                expect gallery-quality output and are willing to pay a premium
                for large digital downloads.
              </p>
              <p className="text-foreground-60">
                The aspect ratio of 13&times;19 is approximately 1:1.46 &mdash;
                close to the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  2:3 ratio
                </Link>{" "}
                but not an exact match. This unique ratio is why SnapToSize
                places 13&times;19 in the Extras pack rather than a standard
                ratio family. Common use cases include fine art photography,
                botanical illustrations, vintage posters, and portfolio prints.
              </p>
            </div>

            {/* --- Pixel Dimensions & DPI Reference --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                13&times;19 at 300&nbsp;DPI &mdash; Pixel Dimensions &amp; DPI Reference
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">
                      13 &times; 19 inches
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Metric</span>
                    <span className="font-semibold">
                      330 &times; 483 mm
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">3900 &times; 5700 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">~13:19 (1:1.46)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Also Known As</span>
                    <span className="font-semibold">
                      Super B / A3+
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math: 13&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3900 pixels wide,
                19&nbsp;&times;&nbsp;300&nbsp;=&nbsp;5700 pixels tall. Your
                source file must be at least 3900&times;5700 pixels to maintain
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
                        3900 &times; 5700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Professional print quality (required for Etsy)
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1950 &times; 2850
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Draft / screen preview only
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">72</td>
                      <td className="py-3 px-4 text-foreground-60">
                        936 &times; 1368
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
                . You can also use the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>{" "}
                to verify dimensions for any size.
              </p>
            </div>

            {/* --- Why 13×19 Matters for Etsy Sellers --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 13&times;19 Matters for Etsy Sellers
              </h2>
              <p className="text-foreground-60 mb-4">
                13&times;19 is the largest size most wide-format home printers
                can handle. Buyers who own an Epson SureColor P700, Canon PIXMA
                Pro-200, or similar 13-inch printer specifically search for this
                size &mdash; they want files that match their paper stock without
                cropping or scaling.
              </p>
              <p className="text-foreground-60 mb-4">
                Offering 13&times;19 signals professionalism. Fine art
                photographers and art collectors expect it. If a buyer is
                comparing two similar listings and one includes 13&times;19
                while the other stops at{" "}
                <Link
                  href="/etsy-11x17-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;17
                </Link>
                , the listing with the larger format wins the sale.
              </p>
              <p className="text-foreground-60">
                Popular niches for 13&times;19: fine art photography, botanical
                illustrations, vintage posters, art prints, abstract wall art,
                and photography portfolios. If your work appeals to art
                collectors or photography enthusiasts, this size belongs in
                your listings.
              </p>
            </div>

            {/* --- 13×19 vs Similar Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                13&times;19 vs Similar Sizes &mdash; How It Compares
              </h2>
              <p className="text-foreground-60 mb-6">
                13&times;19 sits between{" "}
                <Link
                  href="/etsy-11x17-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;17 (Tabloid)
                </Link>{" "}
                and larger poster formats. Here is how it compares to the sizes
                buyers most often confuse it with.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Inches
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Aspect Ratio
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
                          href="/etsy-11x17-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;17
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11 &times; 17
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 &times; 5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        ~1:1.55
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Tabloid, craft shows, home printing
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-12x18-print-size"
                          className="text-accent-light hover:underline"
                        >
                          12&times;18
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        12 &times; 18
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600 &times; 5400
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2:3
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo enlargements, standard posters
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        13&times;19
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        13 &times; 19
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3900 &times; 5700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        ~1:1.46
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Fine art, wide-format inkjet
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-a3-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A3
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11.7 &times; 16.5
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508 &times; 4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1:&radic;2
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        International standard, ISO posters
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        16 &times; 20
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800 &times; 6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:5
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Gallery prints, statement wall art
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                Key insight: 13&times;19 is larger than both{" "}
                <Link
                  href="/etsy-a3-print-size"
                  className="text-accent-light hover:underline"
                >
                  A3
                </Link>{" "}
                and 11&times;17 but smaller than 16&times;20. It fills the gap
                for buyers who want &ldquo;bigger than A3 but not
                poster-sized.&rdquo;
              </p>
              <p className="text-foreground-60">
                For the complete breakdown of how ratios affect your listings,
                see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios explained
                </Link>{" "}
                guide. And for the full size chart, visit the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- How Buyers Frame 13×19 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How Buyers Frame 13&times;19 Prints
              </h2>
              <p className="text-foreground-60 mb-6">
                Unlike more common sizes, 13&times;19 frames are not typically
                found at big-box stores. Most buyers mat their 13&times;19
                print inside a larger frame or use a frameless display. Including
                framing guidance in your listing description reduces buyer
                questions and increases purchase confidence.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      <Link
                        href="/etsy-18x24-print-size"
                        className="text-accent-light hover:underline"
                      >
                        18&times;24
                      </Link>{" "}
                      frame + mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Most popular &mdash; 2.5&Prime; border on all sides
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      Frameless 13&times;19 frame
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Specialty retailers, modern look
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      <Link
                        href="/etsy-12x18-print-size"
                        className="text-accent-light hover:underline"
                      >
                        12&times;18
                      </Link>{" "}
                      image on 13&times;19 paper
                    </span>
                    <span className="text-foreground-60 text-sm">
                      White border print, borderless frame
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Listing tip:</strong>{" "}
                    Add this to your Etsy description: &ldquo;For framing, we
                    recommend an 18&times;24 frame with a mat cut to 13&times;19.
                    This creates a 2.5-inch border for a polished, gallery-style
                    presentation.&rdquo; This one line prevents the most common
                    framing question.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- How to Set Up Your 13×19 Etsy Listing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Set Up Your 13&times;19 Etsy Listing
              </h2>
              <p className="text-foreground-60 mb-6">
                Getting the file setup right prevents refund requests and
                negative reviews. Here is what you need for a 13&times;19
                digital download listing.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    File Requirements
                  </h3>
                  <p className="text-foreground-60">
                    JPG at 3900&times;5700 pixels, 300&nbsp;DPI, sRGB color
                    profile. A single 13&times;19 JPG is well within
                    Etsy&apos;s 20&nbsp;MB limit. Use descriptive file names
                    like{" "}
                    <code className="text-accent-light">
                      artwork_13x19_300dpi.jpg
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
                    File Delivery &amp; Packaging
                  </h3>
                  <p className="text-foreground-60">
                    Bundle 13&times;19 alongside your other sizes in a ZIP file.
                    Organize by ratio pack so buyers can quickly find the right
                    file for their printer. For the complete packaging strategy,
                    read{" "}
                    <Link
                      href="/how-to-package-digital-wall-art-for-etsy"
                      className="text-accent-light hover:underline"
                    >
                      how to package digital wall art for Etsy
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Listing Description Tips
                  </h3>
                  <p className="text-foreground-60">
                    Mention &ldquo;printable on wide-format inkjet
                    printers&rdquo; in your description. Many buyers search for
                    13&times;19 specifically because they own a 13-inch printer
                    &mdash; confirming compatibility in your listing removes
                    hesitation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Etsy Tags (max 20 characters each)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "13x19 art print",
                      "fine art poster",
                      "large wall art",
                      "digital download",
                      "printable wall art",
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
                Need help with resizing?{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  How to resize images for Etsy
                </Link>{" "}
                walks through the options.
              </p>
            </div>

            {/* --- Extras Pack --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Extras Pack: What Ships with 13&times;19
              </h2>
              <p className="text-foreground-60 mb-4">
                13&times;19 has a unique aspect ratio (~1:1.46) that does not
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
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <Link
                          href="/etsy-11x17-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;17
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 &times; 5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Tabloid, large format home printing
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        13&times;19
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3900 &times; 5700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Fine art poster, wide-format inkjet
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
                One upload generates all 6 Extras sizes plus the 4 ratio packs
                (2:3, 3:4, 4:5, ISO) &mdash; up to 70 print-ready files total.
                Every size comes in both portrait and landscape orientations.
              </p>
              <p className="text-foreground-60">
                For the complete size chart across all five ratio packs, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 / FinalCTA --- */}
            <div>
              <FinalCTA
                heading="The Professional Choice for Fine Art Sellers"
                stat="Up to 70 print-ready files from one upload"
                description="Professional Etsy sellers include 13&times;19 for fine art buyers. SnapToSize generates it automatically alongside every other standard size &mdash; organized, named, and ready to upload."
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
            <RelatedPages currentSlug="etsy-13x19-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
