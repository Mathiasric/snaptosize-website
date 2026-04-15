import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy Black and White Art Print Sizes — Complete Guide",
  description:
    "The top B&W art print sizes on Etsy: 5×7, 8×10, 11×14, 16×20, 18×24 with exact pixels at 300 DPI. Covers ratios, ISO sizes, DPI rules, and gallery wall sets.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-black-and-white-art-sizes",
  },
  keywords: [
    "etsy black and white art print sizes",
    "black and white print sizes etsy",
    "b&w art print dimensions",
    "monochrome print sizes etsy",
    "black white wall art sizes",
    "etsy printable sizes black white",
    "300 DPI black and white print",
  ],
  openGraph: {
    title: "Etsy Black and White Art Print Sizes | SnapToSize",
    description:
      "Top B&W print sizes for Etsy sellers. 5×7, 8×10, 11×14, 16×20, 18×24 — exact pixels at 300 DPI, ISO international sizes, and gallery wall guidance.",
    url: "https://snaptosize.com/etsy-black-and-white-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-black-and-white-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Black and White Art Print Sizes — Complete Seller Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Black and White Art Print Sizes — Complete Guide",
    description:
      "Top B&W print sizes for Etsy. 5×7, 8×10, 11×14, 16×20, 18×24 with exact pixels at 300 DPI — plus ISO sizes for UK and EU buyers.",
    images: ["/assets/og/etsy-black-and-white-art-sizes.png"],
  },
};

export default function EtsyBlackAndWhiteArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Black and White Art Print Sizes: The Complete Seller Guide",
    description:
      "The most popular black and white art print sizes on Etsy with exact pixel dimensions at 300 DPI, aspect ratio guidance, and international sizing for UK and EU buyers.",
    datePublished: "2026-04-15",
    dateModified: "2026-04-15",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://snaptosize.com/etsy-black-and-white-art-sizes",
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
        name: "Black and White Art Print Sizes",
        item: "https://snaptosize.com/etsy-black-and-white-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What are the most popular black and white art print sizes on Etsy?",
      answer:
        "The top five are 5×7 (1500×2100 px), 8×10 (2400×3000 px), 11×14 (3300×4200 px), 16×20 (4800×6000 px), and 18×24 (5400×7200 px) — all at 300 DPI. These cover the 2:3, 4:5, and 3:4 ratio groups that match standard ready-made frames in North America.",
    },
    {
      question: "What DPI should black and white art prints be for Etsy?",
      answer:
        "300 DPI is the minimum for clean print quality. For fine-line illustration or detailed linework, 600 DPI is recommended — at 300 DPI thin lines can appear grey or muddy when printed. Export as sRGB JPEG for maximum compatibility with home printers and print-on-demand labs.",
    },
    {
      question: "What color profile should I use for black and white Etsy prints?",
      answer:
        "Always export as sRGB, not Grayscale ICC or Adobe RGB. Most home printers and print-on-demand services interpret sRGB correctly. Grayscale ICC profiles can cause muddy blacks on consumer printers that aren't calibrated for grayscale mode.",
    },
    {
      question: "What aspect ratio is best for a black and white gallery wall set on Etsy?",
      answer:
        "For cohesive B&W gallery wall sets, stick to one dominant aspect ratio — 4:5 for a classic formal look, or 2:3 for photography and poster-style prints.",
    },
    {
      question: "Do I need to include A4 and A3 sizes in my black and white Etsy listing?",
      answer:
        "Yes, if you want to reach UK and EU buyers. A4 (2480×3508 px) and A3 (3508×4961 px) at 300 DPI are the standard framing sizes for international customers.",
    },
    {
      question: "What is the best tool to resize black and white art for all Etsy print sizes at once?",
      answer:
        "SnapToSize lets you upload your black and white artwork once and instantly generates all standard Etsy sizes — 5×7, 8×10, 11×14, 16×20, 18×24, A4, A3, and more — as print-ready files at 300 DPI. There's no manual resizing or Photoshop needed; the tool handles all ratio groups in one export, packaged as a single ZIP ready to upload to your Etsy listing.",
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
        style={{ background: "#0A0A0A" }}
        className="pt-10 pb-16 md:pt-14 md:pb-24 relative overflow-hidden"
      >
        {/* B&W art prints — real artwork with grayscale filter */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-end pr-6 md:pr-14"
        >
          <div className="flex gap-5 items-end">
            {/* Portrait frame — bird sketch */}
            <div
              style={{
                flexShrink: 0,
                border: "7px solid #fff",
                boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)",
                filter: "grayscale(100%) contrast(1.1)",
                lineHeight: 0,
              }}
            >
              <Image
                src="/assets/listings/songbirds/Vintage_bird.jpg"
                alt="Vintage bird pencil sketch print"
                width={150}
                height={200}
                style={{ display: "block", objectFit: "cover", width: "150px", height: "200px" }}
              />
            </div>
            {/* Taller portrait frame — owl, offset upward */}
            <div
              style={{
                flexShrink: 0,
                border: "7px solid #fff",
                boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)",
                filter: "grayscale(100%) contrast(1.1)",
                lineHeight: 0,
                marginBottom: "40px",
              }}
            >
              <Image
                src="/assets/listings/owl/Whimscal owl print.jpg"
                alt="Whimsical owl folk art print"
                width={170}
                height={227}
                style={{ display: "block", objectFit: "cover", width: "170px", height: "227px" }}
              />
            </div>
          </div>
        </div>

        <Container>
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="mb-5 flex items-center gap-2 text-xs text-white/40">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/etsy-print-sizes" className="hover:text-white/60 transition-colors">Print Sizes</Link>
              <span>/</span>
              <span className="text-white/60">Black &amp; White Art</span>
            </nav>

            {/* Trust pills */}
            <div className="mb-5 flex flex-wrap gap-2">
              {["300 DPI standards", "5 ratio groups", "ISO international sizes"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                >
                  <Check className="h-3 w-3 text-[#2DD4BF]" />
                  {pill}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Etsy Black and White Art Print Sizes: The Complete Seller Guide
            </h1>
            <p className="mb-8 text-lg text-white/60 md:text-xl">
              Every standard B&amp;W print size, exact pixels at 300 DPI, ratio groupings, and international sizing — so your listing covers every buyer.
            </p>

            {/* CTA 1 — Hero */}
            <a
              href="https://app.snaptosize.com?source=seo_etsy-black-and-white-art-sizes&kind=guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-base px-7 py-3">
                Create all your B&amp;W print sizes
              </Button>
            </a>
            <p className="mt-3 text-xs text-white/40">Free tier · No credit card required</p>
          </div>
        </Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-14">

            {/* QuickAnswer */}
            <QuickAnswer question="What sizes should black and white art prints be on Etsy?">
              The most popular black and white art print sizes on Etsy are <strong>5×7, 8×10, 11×14, 16×20, and 18×24</strong> — covering the 2:3, 4:5, and 3:4 ratios that fit standard frames and gallery walls in North America, with A4/A3 added for international buyers.
            </QuickAnswer>

            {/* Section 1: Most Popular Sizes */}
            <section className="mb-14">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Most Popular Black and White Print Sizes on Etsy
              </h2>
              <p className="mb-6 text-foreground-70">
                These five sizes dominate B&amp;W art listings because they match widely stocked ready-made frames at major retailers — giving buyers the easiest path from digital file to framed wall. The{" "}
                <Link href="/etsy-print-sizes" className="text-[#2DD4BF] underline underline-offset-2 hover:text-[#2DD4BF]/80">
                  full Etsy print sizes guide
                </Link>{" "}
                covers all ratios, but B&amp;W art specifically gravitates toward 8×10 and 11×14 because high contrast artwork shows cleanest in standard matte frames.
              </p>

              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Size (inches)</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Pixels @ 300 DPI</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Ratio</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Best for B&amp;W</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">5×7</td>
                      <td className="px-4 py-3 font-mono text-xs">1500×2100</td>
                      <td className="px-4 py-3">5:7 (Extras)</td>
                      <td className="px-4 py-3 text-foreground-60">Small frames, greeting card size</td>
                    </tr>
                    <tr className="hover:bg-muted/30 bg-muted/10">
                      <td className="px-4 py-3 font-medium">8×10 ★</td>
                      <td className="px-4 py-3 font-mono text-xs">2400×3000</td>
                      <td className="px-4 py-3">4:5</td>
                      <td className="px-4 py-3 text-foreground-60">#1 bestseller — matte frames</td>
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">11×14 ★</td>
                      <td className="px-4 py-3 font-mono text-xs">3300×4200</td>
                      <td className="px-4 py-3">11:14 (Extras)</td>
                      <td className="px-4 py-3 text-foreground-60">#2 bestseller — photo mat standard</td>
                    </tr>
                    <tr className="hover:bg-muted/30 bg-muted/10">
                      <td className="px-4 py-3 font-medium">16×20</td>
                      <td className="px-4 py-3 font-mono text-xs">4800×6000</td>
                      <td className="px-4 py-3">4:5</td>
                      <td className="px-4 py-3 text-foreground-60">Statement wall piece</td>
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">18×24</td>
                      <td className="px-4 py-3 font-mono text-xs">5400×7200</td>
                      <td className="px-4 py-3">3:4</td>
                      <td className="px-4 py-3 text-foreground-60">Poster format, large walls</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-foreground-50">★ Top two bestsellers for B&amp;W specifically. See the full{" "}
                <Link href="/best-resolution-for-etsy-printables" className="text-[#2DD4BF] underline underline-offset-2 hover:text-[#2DD4BF]/80">
                  resolution guide for Etsy printables
                </Link>{" "}
                for DPI rules.
              </p>
            </section>

            {/* Lifestyle mockup */}
            <section className="mb-14">
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/assets/visuals/etsy-black-and-white-art-sizes-mockup.jpg"
                  alt="Gallery wall with black and white fine art prints in matching black frames and matte white mounts — mixed sizes including 8x10 and 11x14"
                  className="w-full object-cover"
                  loading="lazy"
                  width={900}
                  height={675}
                />
              </div>
              <p className="mt-2 text-xs text-center text-foreground-40">
                B&amp;W prints in a Scandinavian-style gallery wall — 8×10 and 11×14 are the dominant sizes.
              </p>
            </section>

            {/* Section 2: Unique Sizing Challenges */}
            <section className="mb-14">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Why Black and White Art Has Unique Sizing Challenges
              </h2>
              <p className="mb-4 text-foreground-70">
                Generic size guides treat all art the same. B&amp;W artwork runs into two problems that color art doesn't:
              </p>

              <div className="space-y-4 mb-6">
                <Card className="p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Thin linework loses contrast at 300 DPI</p>
                      <p className="text-sm text-foreground-60">
                        Fine-line illustration (hatching, cross-hatching, botanical detail) can appear grey or muddy at 300 DPI on some home printers. If your B&amp;W art has hair-thin lines, export at <strong>600 DPI</strong> — the extra resolution preserves the black-on-white crispness that makes the work sell.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Color profile mismatches cause muddy blacks</p>
                      <p className="text-sm text-foreground-60">
                        Always export as <strong>sRGB</strong>, not Grayscale ICC or Adobe RGB. Most home printers and print-on-demand labs interpret sRGB correctly. Grayscale ICC profiles produce inconsistent blacks on consumer printers that aren't calibrated for grayscale mode.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-70">
                These aren't just technical footnotes — buyers who receive a muddy or grey print leave negative reviews. Getting the DPI and color profile right is the difference between a 5-star listing and a refund request.
              </p>
            </section>

            {/* Section 3: Aspect Ratios */}
            <section className="mb-14">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Aspect Ratios for Black and White Prints — Which Ones to Cover
              </h2>
              <p className="mb-5 text-foreground-70">
                B&amp;W gallery wall sets have a visual consistency problem that color sets don't: mixed aspect ratios look noticeably uneven when all frames are the same color. Choose a dominant ratio and build your size set around it. See the{" "}
                <Link href="/etsy-gallery-wall-print-sizes" className="text-[#2DD4BF] underline underline-offset-2 hover:text-[#2DD4BF]/80">
                  gallery wall print sizes guide
                </Link>{" "}
                for full set-building strategy.
              </p>

              <div className="overflow-x-auto rounded-lg border border-border mb-5">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Ratio</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Sizes</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Best B&amp;W Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">4:5</td>
                      <td className="px-4 py-3 text-foreground-70">8×10, 16×20, 20×25</td>
                      <td className="px-4 py-3 text-foreground-60">Classic formal look — best for portraits and still life</td>
                    </tr>
                    <tr className="hover:bg-muted/30 bg-muted/10">
                      <td className="px-4 py-3 font-medium">2:3</td>
                      <td className="px-4 py-3 text-foreground-70">4×6, 8×12, 16×24, 12×18</td>
                      <td className="px-4 py-3 text-foreground-60">Photography and poster-style prints</td>
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">3:4</td>
                      <td className="px-4 py-3 text-foreground-70">9×12, 12×16, 18×24</td>
                      <td className="px-4 py-3 text-foreground-60">Mid-size framed art, versatile for mixed galleries</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 p-4">
                <p className="text-sm text-foreground-70">
                  <strong className="text-foreground">Recommendation:</strong> Lead with 4:5 for a formal B&amp;W look. Add 2:3 if your style leans editorial or photographic. Avoid mixing all three ratios in a single gallery set — it reads as disorganized. Selling manga-style or character art alongside your B&amp;W work?{" "}
                  <Link href="/etsy-anime-manga-art-sizes" className="text-[#2DD4BF] underline underline-offset-2 hover:text-[#2DD4BF]/80">
                    Anime &amp; manga art print sizes
                  </Link>{" "}
                  covers the portrait-heavy 2:3 formats that dominate that niche.
                </p>
              </div>
            </section>

            {/* Section 4: International Sizes */}
            <section className="mb-14">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                International Sizes: Adding A4 and A3 for UK and EU Buyers
              </h2>
              <p className="mb-5 text-foreground-70">
                Minimalist and line-art B&amp;W prints have a strong international market — particularly in the UK, Germany, and Scandinavia. Adding ISO sizes to your listing expands reach without extra design work; you're scaling down from the same source file.
              </p>

              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">ISO Size</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Pixels @ 300 DPI</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Physical</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">A5</td>
                      <td className="px-4 py-3 font-mono text-xs">1748×2480</td>
                      <td className="px-4 py-3 text-foreground-70">148×210 mm</td>
                      <td className="px-4 py-3 text-foreground-60">Small format, desk art</td>
                    </tr>
                    <tr className="hover:bg-muted/30 bg-muted/10">
                      <td className="px-4 py-3 font-medium">A4 ★</td>
                      <td className="px-4 py-3 font-mono text-xs">2480×3508</td>
                      <td className="px-4 py-3 text-foreground-70">210×297 mm</td>
                      <td className="px-4 py-3 text-foreground-60">Most common EU frame size</td>
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">A3 ★</td>
                      <td className="px-4 py-3 font-mono text-xs">3508×4961</td>
                      <td className="px-4 py-3 text-foreground-70">297×420 mm</td>
                      <td className="px-4 py-3 text-foreground-60">Statement size for UK/EU buyers</td>
                    </tr>
                    <tr className="hover:bg-muted/30 bg-muted/10">
                      <td className="px-4 py-3 font-medium">A2</td>
                      <td className="px-4 py-3 font-mono text-xs">4961×7016</td>
                      <td className="px-4 py-3 text-foreground-70">420×594 mm</td>
                      <td className="px-4 py-3 text-foreground-60">Large format / gallery prints</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-foreground-50">★ A4 and A3 are the highest-priority ISO sizes for most Etsy B&amp;W listings. See the full <Link href="/etsy-print-sizes" className="text-[#2DD4BF] underline underline-offset-2">Etsy print sizes reference</Link> for all ratios.</p>

              <div className="mt-5 rounded-lg border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 p-4">
                <p className="text-sm text-foreground-70">
                  <strong className="text-foreground">Why this matters for B&amp;W specifically:</strong>{" "}
                  Minimalist and line-art prints have a disproportionately strong UK, German, and Scandinavian following — markets where A4 and A3 are the default frame sizes sold in IKEA, H&amp;M Home, and local retailers. Not including them in your listing means those buyers move on to the next result.
                </p>
              </div>
            </section>

            {/* Section 5: How Many Sizes */}
            <section className="mb-14">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                How Many Sizes Should You Include in a B&amp;W Art Listing?
              </h2>
              <p className="mb-4 text-foreground-70">
                Most successful B&amp;W sellers offer <strong>8–14 files</strong> covering 2–3 ratio groups. The key rule: always start from the largest intended size and scale down — never upscale. Upscaling a 8×10 source to 18×24 will produce a blurry print, which is a fast path to negative reviews.
              </p>

              <ul className="mb-6 space-y-2">
                {[
                  "Include at least one size per major ratio group (4:5, 2:3, 3:4)",
                  "Add A4 + A3 to capture international buyers without extra artwork",
                  "Start with your highest-res source file — scale down only",
                  "Offer portrait and landscape orientations where your art supports it",
                  "JPG for most B&W art; PNG only for fine-line art with white backgrounds",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground-70">
                    <Check className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-foreground-70">
                The manual approach — exporting each size individually, checking pixel dimensions, organising into folders — easily takes 30–60 minutes per artwork. Sellers with 20+ B&amp;W listings find this compounds into hours every time they update a design.
              </p>
            </section>

            {/* CTA 2 — After "How Many Sizes" section */}
            <ContextualCTA
              problem="Resizing 12+ files per artwork, per listing, manually — that adds up fast."
              solution="Upload once and SnapToSize generates every ratio group automatically at 300 DPI, packaged as a ready-to-upload ZIP."
              appUrl="https://app.snaptosize.com?source=seo_etsy-black-and-white-art-sizes&kind=guide"
              buttonText="Stop resizing manually"
            />

            {/* Section 6: File Format */}
            <section className="mb-14">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                File Format and Export Settings for B&amp;W Prints
              </h2>
              <p className="mb-4 text-foreground-70">
                Format choice matters more for B&amp;W than for color art because compression artifacts show clearly in high-contrast areas.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <Card className="p-5">
                  <p className="font-semibold text-foreground mb-2">JPEG (recommended for most B&amp;W)</p>
                  <ul className="space-y-1.5 text-sm text-foreground-60">
                    <li className="flex gap-2"><Check className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" /><span>Smaller file size — stays under Etsy's 20 MB limit</span></li>
                    <li className="flex gap-2"><Check className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" /><span>Quality 90–95 preserves solid blacks cleanly</span></li>
                    <li className="flex gap-2"><Check className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" /><span>Best for photographic and tonal B&amp;W work</span></li>
                  </ul>
                </Card>

                <Card className="p-5">
                  <p className="font-semibold text-foreground mb-2">PNG (fine-line illustration only)</p>
                  <ul className="space-y-1.5 text-sm text-foreground-60">
                    <li className="flex gap-2"><Check className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" /><span>Lossless — no compression artifacts on thin lines</span></li>
                    <li className="flex gap-2"><Check className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" /><span>Larger files — watch the 20 MB per-file Etsy limit</span></li>
                    <li className="flex gap-2"><Check className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" /><span>Use for hatching, botanical, architectural detail</span></li>
                  </ul>
                </Card>
              </div>

              <p className="text-foreground-70">
                Export settings summary: sRGB color space, 300 DPI (600 DPI for fine-line), JPEG quality 90+, file names like <code className="text-xs bg-muted px-1.5 py-0.5 rounded">artwork_8x10_300dpi.jpg</code>. This matches the naming convention buyers expect and makes ZIP organisation straightforward.
              </p>
            </section>

            {/* FinalCTA */}
            <FinalCTA
              heading="Stop resizing B&W prints one by one."
              stat="Every size. One upload."
              description="Upload your black and white artwork once — SnapToSize generates all standard sizes at 300 DPI, covering every ratio from 5×7 to 24×36 and A-series for international buyers."
              appUrl="https://app.snaptosize.com?source=seo_etsy-black-and-white-art-sizes&kind=guide"
              buttonText="Generate all B&W sizes free →"
            />

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </section>

            {/* Related Pages */}
            <RelatedPages currentSlug="etsy-black-and-white-art-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
