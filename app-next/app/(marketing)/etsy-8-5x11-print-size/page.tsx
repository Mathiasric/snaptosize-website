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
  title: "8.5×11 Print Size for Etsy — US Letter Pixels, DPI & File Setup",
  description:
    "8.5×11 is the US Letter standard — every home printer handles it. Get exact pixel dimensions at 300 DPI (2550×3300), Extras pack details, and file setup for Etsy digital downloads.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-8-5x11-print-size",
  },
  openGraph: {
    title:
      "8.5×11 Print Size for Etsy — US Letter Pixels at 300 DPI | SnapToSize",
    description:
      "Complete 8.5×11 print guide for Etsy sellers. Exact pixels at 300 DPI, Extras pack sizes, and file setup for US Letter digital downloads.",
    url: "https://snaptosize.com/etsy-8-5x11-print-size",
    images: [
      {
        url: "/assets/og/etsy-8-5x11-print-size.png",
        width: 1200,
        height: 630,
        alt: "8.5×11 Print Size for Etsy — US Letter Pixels at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "8.5×11 Print Size for Etsy — US Letter Pixels at 300 DPI",
    description:
      "Complete 8.5×11 print guide for Etsy sellers. 2550×3300 pixels at 300 DPI, Extras pack, and file setup.",
    images: ["/assets/og/etsy-8-5x11-print-size.png"],
  },
};

export default function Etsy85x11PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "8.5×11 Print Size for Etsy — US Letter Pixels, DPI & File Setup",
    description:
      "Complete technical guide to 8.5×11 (US Letter) print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, Extras pack contents, and file requirements.",
    url: "https://snaptosize.com/etsy-8-5x11-print-size",
    datePublished: "2026-03-24",
    dateModified: "2026-03-24",
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
        name: "8.5×11 Print Size",
        item: "https://snaptosize.com/etsy-8-5x11-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for 8.5×11 at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Exactly 2550×3300 pixels. Multiply each dimension by 300: 8.5×300 = 2550 pixels wide, 11×300 = 3300 pixels tall. As a JPG, the file stays well under Etsy's 20 MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "Is 8.5×11 the same as A4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. 8.5×11 inches (US Letter, 216×279 mm) and A4 (210×297 mm) are different sizes with different aspect ratios. US Letter is wider and shorter, A4 is narrower and taller. Include both if you sell internationally.",
        },
      },
      {
        "@type": "Question",
        name: "What ratio is 8.5×11?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8.5×11 has an approximate ratio of 1:1.294. It doesn't match any standard print ratio (2:3, 3:4, 4:5, or ISO). That's why it lives in the Extras pack rather than a ratio-based pack.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 8.5×11 in my Etsy printable listings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — especially if you sell planners, worksheets, checklists, or printable art. 8.5×11 is the default paper size for every home printer in the US. Buyers expect it. Including it removes a major purchase objection.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 8.5×11 prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG (also called JPEG) at 300 DPI with sRGB color profile. JPG keeps file sizes small while delivering full print quality. Avoid PNG for print files — it creates 3-5× larger files with no visible benefit when printed.",
        },
      },
      {
        "@type": "Question",
        name: "Can buyers print 8.5×11 at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — every standard home printer in the US and Canada handles 8.5×11 (US Letter) paper out of the box. No special paper, no print shop visit. Buyers load regular letter paper and hit print. This is the easiest size for customers to use.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_8_5x11&kind=guide";

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

        {/* US Letter page blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer page silhouette */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "204px", height: "264px" }}
          >
            {/* Inner page with accent border */}
            <div className="absolute inset-3 border border-purple-500/20 rounded-sm" />

            {/* Ruled lines inside the page (US Letter / document feel) */}
            <div className="absolute inset-3 flex flex-col justify-between py-6 px-4 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`rule-${i}`}
                  className="w-full h-px bg-white/[0.04]"
                />
              ))}
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
                8.5 in &middot; 2550 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                11 in &middot; 3300 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* US Letter badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  US Letter
                </span>
              </div>
            </div>

            {/* Tick marks — top edge */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={`tt-${i}`}
                  className="w-px h-1.5 bg-white/[0.06]"
                />
              ))}
            </div>

            {/* Tick marks — left edge */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`tl-${i}`}
                  className="h-px w-1.5 bg-white/[0.06]"
                />
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
                8.5×11 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                US Letter pixels at 300&nbsp;DPI &mdash; the home printing
                standard
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              2550×3300 pixels. Fits every home printer in the US. Here&apos;s
              everything you need to set up 8.5×11 digital downloads that sell
              &mdash; plus the full Extras pack.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All Extras Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 8.5×11 + four more Extras
                sizes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  2550×3300 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Extras Pack
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Home Printing Standard
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
            {/* --- Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                8.5×11 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">8.5 × 11 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">2550 × 3300 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">
                      ~1:1.294 (unique)
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Also Known As
                    </span>
                    <span className="font-semibold">US Letter</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Ratio Pack</span>
                    <span className="font-semibold">Extras</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The math: multiply each dimension in inches by 300.
                8.5&nbsp;&times;&nbsp;300&nbsp;=&nbsp;2550 pixels wide,
                11&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3300 pixels tall. JPG
                (also called JPEG) is the standard format &mdash; it keeps file
                sizes well under{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy&apos;s 20&nbsp;MB limit
                </Link>
                .
              </p>
              <p className="text-foreground-60 mb-4">
                Unlike most print sizes, 8.5×11 doesn&apos;t belong to a
                standard ratio family (2:3, 3:4, or 4:5). Its proportions are
                unique &mdash; approximately 1:1.294. That&apos;s why it lives
                in the Extras pack alongside other common non-ratio sizes.
              </p>
              <p className="text-foreground-60">
                For a full breakdown of how ratios work and why they matter, see
                the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- Why 8.5x11 Is Essential --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 8.5×11 Is Essential for Etsy Sellers
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Universal Home Printing
                  </h3>
                  <p className="text-foreground-60">
                    Every home printer in the US and Canada defaults to US
                    Letter (8.5×11). Buyers don&apos;t need special paper, a
                    different tray, or a trip to a print shop. They load
                    standard paper and press print. Zero friction.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Planners &amp; Worksheets Market
                  </h3>
                  <p className="text-foreground-60">
                    Planners, worksheets, checklists, habit trackers, and
                    coloring pages are all designed for 8.5×11. This category
                    dominates Etsy&apos;s digital download market. If you sell
                    any functional printable, 8.5×11 is non-negotiable.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Bridges Wall Art &amp; Printables
                  </h3>
                  <p className="text-foreground-60">
                    Including 8.5×11 alongside standard frame sizes lets buyers
                    use your artwork as both wall art and a desk print. It
                    expands your listing from &ldquo;wall art only&rdquo; to
                    &ldquo;print it however you want&rdquo; &mdash; more use
                    cases mean more sales.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Manual Resizing
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Get 8.5×11 and all other Extras
                  sizes at 300&nbsp;DPI &mdash; organized, named, and under
                  20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Extras Sizes
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Extras Pack --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Extras Pack &mdash; What Other Sizes Come With 8.5×11
              </h2>
              <p className="text-foreground-60 mb-6">
                The Extras pack groups common sizes that don&apos;t belong to a
                standard ratio family. All five sizes are included in one ZIP
                download. Buyers expect multiple sizes &mdash; offering the
                full pack increases perceived value.
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
                          5×7
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500 × 2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Greeting cards, small frames
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">8.5×11</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550 × 3300
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
                          11×14
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 × 4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo mat standard
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">13×19</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3900 × 5700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Fine art poster, large format
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">20×24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 × 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format print
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                Listings that include multiple sizes convert better than
                single-size offerings. When a competitor offers only one size
                and yours includes the full Extras pack, buyers perceive
                five&nbsp;products instead of one.
              </p>
              <p className="text-foreground-60">
                For the full picture across all ratio packs (2:3, 3:4, 4:5,
                ISO, Extras), see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate All Extras Sizes in Seconds
                </Button>
              </a>
            </div>

            {/* --- File Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Format, Color Profile &amp; Naming
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    JPG / JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) is the standard for Etsy print
                    files. It keeps file sizes small while maintaining full
                    print quality. Avoid PNG for print files: they&apos;re
                    3-5&times; larger with no visible benefit when printed. For
                    a full comparison, see the{" "}
                    <Link
                      href="/best-file-format-etsy-printables"
                      className="text-accent-light hover:underline"
                    >
                      best file format for Etsy printables
                    </Link>{" "}
                    guide.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    sRGB Color Profile
                  </h3>
                  <p className="text-foreground-60">
                    Always embed sRGB. Home printers and online print services
                    expect it. Files in Adobe RGB or ProPhoto RGB shift colors
                    when printed &mdash; reds go orange, blues go purple. In
                    Photoshop: Edit &rarr; Convert to Profile &rarr; sRGB
                    IEC61966-2.1.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use clear names like{" "}
                    <code className="text-accent-light">
                      artwork_8.5x11_300dpi.jpg
                    </code>
                    . Buyers should find the right file instantly in their
                    downloads folder. Avoid generic names like
                    &ldquo;print1.jpg&rdquo; or cryptic codes.
                  </p>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Staying Under Etsy&apos;s 20 MB Limit
                </h3>
                <ul className="space-y-2 text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Use JPG, not PNG</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Flatten all layers before export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Group by pack &mdash; one Extras ZIP stays well under
                      20&nbsp;MB
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Or use SnapToSize &mdash; auto-optimizes every file to
                      stay under the limit
                    </span>
                  </li>
                </ul>
                <p className="text-foreground-60 text-sm mt-4">
                  For more detail, see{" "}
                  <Link
                    href="/etsy-20mb-file-limit"
                    className="text-accent-light hover:underline"
                  >
                    Etsy 20 MB file limit guide
                  </Link>
                  .
                </p>
              </Card>
            </div>

            {/* --- 8.5×11 vs A4 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                8.5×11 vs A4 &mdash; What&apos;s the Difference
              </h2>
              <p className="text-foreground-60 mb-6">
                These two sizes look similar but they are not interchangeable.
                Printing an 8.5×11 file on A4 paper (or vice versa) leaves
                white gaps or clips edges. If you sell internationally, include
                both.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 font-semibold">
                          &nbsp;
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          8.5×11 (US Letter)
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          <Link
                            href="/etsy-a4-print-size"
                            className="text-accent-light hover:underline"
                          >
                            A4 (ISO)
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-medium">
                          Inches
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          8.5 × 11
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          8.27 × 11.69
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-medium">
                          Millimeters
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          216 × 279
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          210 × 297
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-medium">
                          Pixels @ 300 DPI
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          2550 × 3300
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          2480 × 3508
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-medium">
                          Ratio
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          ~1:1.294
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          1:&radic;2 (~1:1.414)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">
                          Common In
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          US, Canada
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          Europe, Asia, Australia
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Listing tip:
                    </strong>{" "}
                    Add &ldquo;Includes both US Letter (8.5×11) and A4 for
                    international buyers&rdquo; to your Etsy description. This
                    single line expands your market from the US to the entire
                    world. SnapToSize generates both in one upload.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 8.5×11 Digital Prints
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
                        72 DPI is screen resolution. An 8.5×11 at 72 DPI is
                        only 612×792 pixels &mdash; prints will be pixelated
                        and blurry. Always verify your export settings. The file
                        must be 2550×3300 pixels. Use the{" "}
                        <Link
                          href="/etsy-print-size-calculator"
                          className="text-accent-light hover:underline"
                        >
                          print size calculator
                        </Link>{" "}
                        to double-check.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Offering only one size
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Listings with a single 8.5×11 file convert poorly
                        compared to those offering multiple sizes. Buyers
                        expect a bundle. Include the full Extras pack (5×7,
                        8.5×11, 11×14, 13×19, 20×24) &mdash; it takes the same
                        upload effort but dramatically increases perceived
                        value.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong orientation for planners
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Most planner and worksheet buyers expect portrait
                        orientation (8.5 wide × 11 tall). Delivering landscape
                        files forces buyers to rotate before printing &mdash;
                        extra friction that leads to bad reviews. Always
                        confirm orientation matches the product type. For a
                        deeper look at{" "}
                        <Link
                          href="/how-to-resize-images-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          resizing images for Etsy
                        </Link>
                        , see the full guide.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Get All Extras Sizes in One Click"
                stat="5 common sizes from a single upload"
                description="Upload your artwork and instantly receive 5×7, 8.5×11, 11×14, 13×19, and 20×24 at 300 DPI. No cropping, no manual resizing. Production-ready in seconds."
                buttonText="Start Free — Generate Sizes Now"
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
                      "What pixel dimensions do I need for 8.5×11 at 300 DPI?",
                    answer:
                      "Exactly 2550×3300 pixels. Multiply each dimension by 300: 8.5×300 = 2550 pixels wide, 11×300 = 3300 pixels tall. As a JPG, the file stays well under Etsy's 20 MB limit.",
                  },
                  {
                    question: "Is 8.5×11 the same as A4?",
                    answer:
                      "No. 8.5×11 inches (US Letter, 216×279 mm) and A4 (210×297 mm) are different sizes with different aspect ratios. US Letter is wider and shorter, A4 is narrower and taller. If you sell to international buyers, include both sizes.",
                  },
                  {
                    question: "What ratio is 8.5×11?",
                    answer:
                      "8.5×11 has an approximate ratio of 1:1.294. It doesn't match any standard print ratio (2:3, 3:4, 4:5, or ISO √2). That's why it lives in the Extras pack rather than a ratio-based pack.",
                  },
                  {
                    question:
                      "Should I include 8.5×11 in my Etsy printable listings?",
                    answer:
                      "Yes — especially if you sell planners, worksheets, checklists, or printable art. 8.5×11 is the default paper size for every home printer in the US. Buyers expect it. Including it removes a major purchase objection.",
                  },
                  {
                    question:
                      "What file format should I use for 8.5×11 prints?",
                    answer:
                      "JPG (also called JPEG) at 300 DPI with sRGB color profile. JPG keeps file sizes small while delivering full print quality. Avoid PNG for print files — it creates 3-5× larger files with no visible benefit when printed.",
                  },
                  {
                    question: "Can buyers print 8.5×11 at home?",
                    answer:
                      "Yes — every standard home printer in the US and Canada handles 8.5×11 (US Letter) paper out of the box. No special paper, no print shop visit. Buyers load regular letter paper and hit print. This is the easiest size for customers to use.",
                  },
                ]}
              />
            </div>

            {/* --- Email Capture --- */}
            <div>
              <EmailCaptureSection
                heading="Free Etsy Print Size Cheat Sheet"
                description="All Etsy ratios and pixel dimensions at 300 DPI in one PDF. Plus file naming conventions and best practices."
                placeholder="Enter your email"
                buttonText="Get Free Cheat Sheet"
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-8-5x11-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
