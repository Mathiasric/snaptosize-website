import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, FileText, Upload, DollarSign } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title:
    "How to Sell Digital Downloads on Etsy — Complete Guide for Printables",
  description:
    "Step-by-step guide to selling digital downloads on Etsy: file formats, resolution requirements, listing setup, print sizes, pricing strategies, and common mistakes to avoid.",
  alternates: {
    canonical: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
  },
  openGraph: {
    title:
      "How to Sell Digital Downloads on Etsy — Complete Printables Guide",
    description:
      "Everything you need to know about selling digital downloads on Etsy: setup, file prep, print sizes, pricing, and avoiding common mistakes.",
    url: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
    images: [
      {
        url: "/assets/og/how-to-sell-digital-downloads-on-etsy.png",
        width: 1200,
        height: 630,
        alt: "How to Sell Digital Downloads on Etsy Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Digital Downloads on Etsy — Complete Guide",
    description:
      "Step-by-step guide to selling digital printables on Etsy: setup, file prep, pricing, and common mistakes.",
    images: ["/assets/og/how-to-sell-digital-downloads-on-etsy.png"],
  },
};

export default function HowToSellDigitalDownloadsOnEtsyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "How to Sell Digital Downloads on Etsy — Complete Guide for Printables",
        description:
          "Complete step-by-step guide for selling digital downloads on Etsy, including file setup, print sizes, listing creation, and pricing strategies.",
        url: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
        datePublished: "2026-03-06",
        dateModified: "2026-03-06",
        author: {
          "@type": "Organization",
          name: "SnapToSize",
          url: "https://snaptosize.com",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Sell Digital Downloads on Etsy",
        description:
          "Step-by-step guide to setting up your Etsy digital download listing for printable wall art.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Go to Etsy Listings and Add a listing",
            text: "From your Etsy Shop Manager, navigate to Listings → Add a listing. Choose Digital as the listing type. This automatically enables instant download delivery.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Upload listing photos (mockups)",
            text: "Use high-quality mockup images showing your artwork in realistic settings (framed on walls, in rooms, on desks). First image should be a hero shot (most important for clicks). Additional images show different sizes, room settings, and close-ups of detail. Last image should be a size chart or file info graphic showing what's included.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Write your listing title and description",
            text: "Title should include target keywords and specific details. Example: 'Botanical Wall Art Printable | Digital Download | 8×10 12×16 18×24 | Instant Download'. Description should explain what's included, how to download, file specs, and printing instructions. Clearly state: file format (JPEG), resolution (300 DPI), all included sizes, and delivery method (instant download).",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Upload your digital files",
            text: "In the Digital files section, upload your ZIP packs. Remember Etsy's 20MB maximum per file limit (this is why ratio packs are separate ZIPs). Upload 5 files: 2x3_print_sizes.zip, 3x4_print_sizes.zip, 4x5_print_sizes.zip, iso_print_sizes.zip, extras_print_sizes.zip. Use clear filenames so buyers know what each ZIP contains.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Set pricing and quantity",
            text: "Price based on competitive research and value provided. Most Etsy printable wall art listings sell for $3.99-$7.99. Set quantity to 999 (digital files don't run out).",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Add tags and categories",
            text: "Use all 13 available tags. Focus on buyer intent keywords. Examples: 'printable wall art', 'digital download', 'instant download', '8x10 print', 'botanical print', 'home decor'.",
          },
          {
            "@type": "HowToStep",
            position: 7,
            name: "Preview and publish",
            text: "Test the download yourself before going live. Purchase your own listing (Etsy refunds you) and verify all files download correctly and display at high quality.",
          },
        ],
      },
    ],
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
        name: "How to Sell Digital Downloads on Etsy",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What file format should I use for Etsy digital downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use high-resolution JPG files at 300 DPI for printable wall art. JPGs offer the best balance of quality and file size. Organize multiple print sizes into ZIP files grouped by ratio (2:3, 3:4, 4:5, ISO, extras) to stay under Etsy's 20MB limit per file.",
        },
      },
      {
        "@type": "Question",
        name: "How many print sizes should I include in my Etsy listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional sellers provide 20-30 print sizes organized into 5 ratio packs: 2:3 (most common), 3:4 (classic frames), 4:5 (includes 8×10), ISO A-series (international), and extras (5×7, 8.5×11, 11×14, 13×19). This covers virtually every frame size and eliminates custom size requests.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a business license to sell digital downloads on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Requirements vary by location. Most jurisdictions don't require a business license for small-scale digital product sales, but you may need to register for a business license or sales tax permit once you reach certain revenue thresholds. Check your local regulations or consult a tax professional.",
        },
      },
      {
        "@type": "Question",
        name: "How do I price my Etsy digital downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Etsy printable wall art sells for $3-$8 per listing. Price based on: number of sizes included (more sizes = higher value), artwork complexity, competitive research in your niche, and perceived value. Start at $4.99-$5.99 for complete ratio packs and adjust based on conversion rates.",
        },
      },
      {
        "@type": "Question",
        name: "What is the biggest mistake sellers make with Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common mistake is providing the wrong print sizes or ratios. Using incorrect aspect ratios forces buyers to crop the artwork, losing parts of the composition. Always provide exact ratio packs (2:3, 3:4, 4:5, ISO) at 300 DPI with no cropping. Wrong file sizes lead to refunds and poor reviews.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_digital_downloads&kind=guide";

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
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #030712 0%, #0c0a1e 35%, #110d20 70%, #030712 100%)",
        }}
      >
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Gradient accents */}
        <div
          className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />
        {/* Top edge glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3) 50%, transparent)",
          }}
        />

        {/* CSS-only workflow visual — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative" style={{ width: "240px" }}>
            <div className="space-y-3">
              {/* Step 1: Upload */}
              <div className="rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm p-3.5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500/15 border border-purple-400/25 flex items-center justify-center flex-shrink-0">
                    <Upload className="w-4 h-4 text-purple-400/70" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white/60 block">Upload 1 image</span>
                    <span className="text-[10px] font-mono text-white/30">artwork.jpg · 8400×11200</span>
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-px h-5 bg-gradient-to-b from-purple-400/30 to-purple-400/10" />
              </div>
              {/* Step 2: Process */}
              <div className="rounded-lg border border-purple-400/15 bg-purple-500/[0.06] backdrop-blur-sm p-3.5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-purple-300/70">⚡</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white/60 block">SnapToSize processes</span>
                    <span className="text-[10px] font-mono text-white/30">30 sizes · 300 DPI · 10 sec</span>
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-px h-5 bg-gradient-to-b from-purple-400/30 to-purple-400/10" />
              </div>
              {/* Step 3: Output */}
              <div className="rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm p-3.5 shadow-xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-400/25 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400/70" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white/60 block">5 ZIP packs ready</span>
                    <span className="text-[10px] font-mono text-white/30">Upload directly to Etsy</span>
                  </div>
                </div>
                <div className="space-y-1 pl-12">
                  {["2:3 ratio · 8 sizes", "3:4 ratio · 6 sizes", "4:5 ratio · 5 sizes", "ISO A · 6 sizes", "Extras · 5 sizes"].map((pack, i) => (
                    <div key={i} className="text-[9px] font-mono text-white/25">{pack}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">Seller Guide</span>
            </div>
            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5">
                How to Sell Digital Downloads on Etsy
              </span>
              <span className="block text-lg md:text-xl lg:text-2xl font-semibold text-foreground-60">
                Complete guide — from file prep to your first sale
              </span>
            </h1>
            <p className="text-base text-foreground-60 mb-6">
              Selling digital downloads on Etsy is one of the most scalable business models on the platform.
              No inventory, no shipping, no production costs — just create once and sell infinitely.
              Unlike{" "}
              <Link href="/etsy-print-on-demand-vs-digital-download" className="text-accent-light hover:underline">print on demand</Link>,
              margins stay above 85%.
              This guide covers everything: correct file formats, proper print sizes, listing setup, and pricing strategies.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate Print-Ready Files Instantly
                </Button>
              </a>
              <p className="text-sm text-foreground-60 mt-2">
                Free → create all Etsy print sizes in seconds.
              </p>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08]">
                <Check className="h-3 w-3 text-accent-light flex-shrink-0" />
                <span className="text-xs text-foreground-60 font-medium">
                  All print sizes at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08]">
                <Check className="h-3 w-3 text-accent-light flex-shrink-0" />
                <span className="text-xs text-foreground-60 font-medium">
                  Organized ratio packs
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08]">
                <Check className="h-3 w-3 text-accent-light flex-shrink-0" />
                <span className="text-xs text-foreground-60 font-medium">
                  Under Etsy&apos;s 20MB limit
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-4xl space-y-16">
            <QuickAnswer question="How do you sell digital downloads on Etsy?">
              Create high-resolution artwork (<strong>300 DPI, JPG</strong>), resize into <strong>5 ratio packs</strong> (2:3, 3:4, 4:5, ISO A-series, extras), upload each pack as a ZIP under 20MB, write keyword-rich titles and descriptions, add lifestyle mockup photos, and price at <strong>$4.99&ndash;$7.99</strong>. Each listing delivers instantly &mdash; no shipping, no inventory.
            </QuickAnswer>

            {/* ===== SECTION 1: Why Digital Downloads Are Ideal on Etsy ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Digital Downloads Are Ideal on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                Digital downloads — especially printable wall art — offer
                unmatched advantages for Etsy sellers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Zero production costs",
                    description:
                      "Create artwork once. Sell it infinitely. No materials, no printing, no inventory.",
                  },
                  {
                    title: "No shipping logistics",
                    description:
                      "Files deliver instantly after purchase. No packaging, shipping delays, or carrier issues.",
                  },
                  {
                    title: "Global reach instantly",
                    description:
                      "Buyers worldwide can purchase and download immediately. No international shipping costs.",
                  },
                  {
                    title: "Scalable income",
                    description:
                      "One listing can generate revenue for years. No restocking or supply chain constraints.",
                  },
                  {
                    title: "Lower refund risk",
                    description:
                      "When files are correct, refund rates are minimal compared to physical goods.",
                  },
                  {
                    title: "Passive revenue potential",
                    description:
                      "Once a listing is set up correctly, it can generate sales with minimal ongoing work.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background-5 border border-border"
                  >
                    <Check className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-foreground-60">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card accent>
                <p className="text-sm text-foreground-60">
                  <strong>The catch:</strong> Success depends on delivering the
                  right files in the right format. Get print sizes wrong, and
                  you&apos;ll spend hours fulfilling custom requests. Get them
                  right once, and each listing becomes a passive income stream.
                </p>
              </Card>

              <div className="mt-8 rounded-xl overflow-hidden border border-white/[0.08]">
                <img src="/assets/visuals/how-to-sell-etsy-mockup.jpg" alt="Laptop showing an Etsy seller dashboard with printable wall art listings — botanical, minimalist, and boho designs priced at $5.99 each, displayed on a warm desk setup with a framed print and coffee" width={1200} height={800} className="w-full h-auto" loading="lazy" />
              </div>
            </div>

            {/* ===== SECTION 2: What You Need Before You Start ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What You Need Before You Start
              </h2>
              <p className="text-foreground-60 mb-6">
                Before creating your first Etsy digital download listing,
                ensure your files meet professional standards:
              </p>

              <div className="space-y-6">
                {/* File Format */}
                <Card>
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="h-6 w-6 text-accent-light flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        File Format: JPG (Not PNG)
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        For printable wall art, use high-quality JPG files.
                        JPGs balance print quality with manageable file sizes.
                        Read our{" "}
                        <Link href="/best-file-format-etsy-printables" className="text-accent-light hover:underline">PNG vs PDF vs JPG comparison</Link>{" "}
                        for the full breakdown.
                      </p>
                      <ul className="space-y-1 text-sm text-foreground-60">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>JPG files at 300 DPI:</strong> Professional
                            print quality with manageable file sizes
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>RGB color mode:</strong> Standard for
                            digital files (buyers&apos; printers handle CMYK
                            conversion)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Avoid PNG:</strong> PNG files are often
                            10-20x larger than JPG for the same print quality — and easily hit the{" "}
                            <Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">Etsy 20MB file limit</Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Resolution */}
                <Card>
                  <div className="flex items-start gap-3 mb-3">
                    <Upload className="h-6 w-6 text-accent-light flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        Resolution: 300 DPI (Non-Negotiable)
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        Professional print quality requires 300 DPI (dots per
                        inch). Lower resolutions produce blurry or pixelated
                        prints.
                      </p>
                      <ul className="space-y-1 text-sm text-foreground-60">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>8×10 at 300 DPI</strong> = 2400×3000 pixels
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>16×20 at 300 DPI</strong> = 4800×6000 pixels
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>24×36 at 300 DPI</strong> = 7200×10800
                            pixels
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-foreground-60 mt-2">
                        Your source artwork should be high-resolution (minimum
                        3600 pixels on the shortest side) to support all print
                        sizes without quality loss.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Print Sizes and Ratios */}
                <Card accent>
                  <div className="flex items-start gap-3 mb-3">
                    <DollarSign className="h-6 w-6 text-accent-light flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        Print Sizes: Complete Ratio Coverage
                      </h3>
                      <p className="text-sm text-foreground-60 mb-3">
                        Professional Etsy sellers don&apos;t provide one size —
                        they provide complete{" "}
                        <Link
                          href="/etsy-print-ratios"
                          className="text-accent-light hover:underline font-semibold"
                        >
                          ratio packs
                        </Link>{" "}
                        so buyers can print in any frame size.
                      </p>
                      <p className="text-sm text-foreground-60 mb-2">
                        <strong>The 5 essential ratio packs:</strong>
                      </p>
                      <ul className="space-y-1 text-sm text-foreground-60">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">1.</span>
                          <span>
                            <strong>2:3 ratio</strong> — 4×6, 6×9, 8×12, <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18</Link>,
                            16×24, 20×30
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">2.</span>
                          <span>
                            <strong>3:4 ratio</strong> — 6×8, 9×12, 12×16,
                            18×24
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">3.</span>
                          <span>
                            <strong>4:5 ratio</strong> — 8×10, 12×15, 16×20,
                            24×30
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">4.</span>
                          <span>
                            <strong>ISO A-series</strong> — A5, A4, A3, A2, A1
                            (international buyers)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">5.</span>
                          <span>
                            <strong>Extras</strong> — 5×7, 8.5×11, 11×14, 11×17, <Link href="/etsy-13x19-print-size" className="text-accent-light hover:underline">13×19</Link>, 20×24
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-foreground-60 mt-3">
                        For exact pixel dimensions at 300 DPI, see the{" "}
                        <Link
                          href="/etsy-print-sizes"
                          className="text-accent-light hover:underline font-semibold"
                        >
                          complete Etsy print sizes guide
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* ===== CTA #1 ===== */}
            <Card accent className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Generate All Print Sizes Automatically
              </h3>
              <p className="text-sm text-foreground-60 mb-4">
                Don&apos;t spend hours manually resizing files. SnapToSize
                generates all required Etsy print sizes (2:3, 3:4, 4:5, ISO,
                extras) at 300 DPI in seconds — organized into ready-to-upload
                ZIP packs.
              </p>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate Print Files Instantly
                </Button>
              </a>
              <p className="text-xs text-foreground-60 mt-3">
                Free plan available. No credit card required.
              </p>
            </Card>

            {/* ===== SECTION 3: Setting Up Your Etsy Listing (Step by Step) ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Setting Up Your Etsy Listing (Step by Step)
              </h2>
              <p className="text-foreground-60 mb-6">
                Once your files are ready, setting up the Etsy listing is
                straightforward. Here&apos;s the exact workflow:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Go to Etsy Listings → Add a listing
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        From your Etsy Shop Manager, navigate to{" "}
                        <strong>Listings</strong> → <strong>Add a listing</strong>
                        .
                      </p>
                      <p className="text-sm text-foreground-60">
                        Choose <strong>Digital</strong> as the listing type.
                        This automatically enables instant download delivery.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 2 */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Upload listing photos (mockups)
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        Use high-quality mockup images showing your artwork in
                        realistic settings (framed on walls, in rooms, on
                        desks). Make sure your images meet the correct{" "}
                        <Link href="/etsy-listing-photo-size" className="text-accent-light hover:underline">Etsy listing photo size</Link>{" "}
                        requirements for maximum visibility.
                      </p>
                      <ul className="space-y-1 text-sm text-foreground-60">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>First image:</strong> Hero shot (most
                            important for clicks)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Additional images:</strong> Different sizes,
                            room settings, close-ups of detail
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Last image:</strong> Size chart or file
                            info graphic showing what&apos;s included
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Step 3 */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Write your listing title and description
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        <strong>Title:</strong> Include target keywords +
                        specific details.
                      </p>
                      <p className="text-xs text-foreground-60 mb-3 italic">
                        Example: &ldquo;Botanical Wall Art Printable | Digital
                        Download | 8×10 12×16 18×24 | Instant Download&rdquo;
                      </p>
                      <p className="text-sm text-foreground-60 mb-2">
                        <strong>Description:</strong> Explain what&apos;s
                        included, how to download, file specs, and printing
                        instructions.
                      </p>
                      <p className="text-xs text-foreground-60">
                        Clearly state: file format (JPEG), resolution (300 DPI),
                        all included sizes, and delivery method (instant
                        download).
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 4 */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Upload your digital files
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        In the <strong>Digital files</strong> section, upload
                        your ZIP packs. Remember Etsy&apos;s limits:
                      </p>
                      <ul className="space-y-1 text-sm text-foreground-60">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong><Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">20MB maximum per file</Link></strong> (this is
                            why ratio packs are separate ZIPs)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            Upload 5 files: 2x3_print_sizes.zip,
                            3x4_print_sizes.zip, 4x5_print_sizes.zip,
                            iso_print_sizes.zip, extras_print_sizes.zip
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-foreground-60 mt-2">
                        Use clear filenames so buyers know what each ZIP
                        contains.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 5 */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Set pricing and quantity
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        Price based on competitive research and value provided.
                        Most Etsy printable wall art listings sell for
                        $3.99-$7.99.
                      </p>
                      <p className="text-sm text-foreground-60">
                        <strong>Quantity:</strong> Set to 999 (digital files
                        don&apos;t run out).
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 6 */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Add tags and categories
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        Use all 13 available tags. Focus on buyer intent
                        keywords:
                      </p>
                      <p className="text-xs text-foreground-60 italic">
                        Examples: &ldquo;printable wall art&rdquo;,
                        &ldquo;digital download&rdquo;, &ldquo;instant
                        download&rdquo;, &ldquo;8x10 print&rdquo;,
                        &ldquo;botanical print&rdquo;, &ldquo;home decor&rdquo;
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 7 */}
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-5 flex items-center justify-center">
                      <span className="text-accent-light font-bold">7</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Preview and publish
                      </h3>
                      <p className="text-sm text-foreground-60">
                        Test the download yourself before going live. Purchase
                        your own listing (Etsy refunds you) and verify all files
                        download correctly and display at high quality.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* ===== SECTION 4: File Sizes and Print Ratios ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                File Sizes and Print Ratios — What to Include
              </h2>
              <p className="text-foreground-60 mb-6">
                This is where most new sellers get it wrong. Buyers need
                multiple print sizes because they have different frames and
                walls. Providing only one size means you&apos;ll get constant
                messages asking for custom sizes.
              </p>

              <p className="text-foreground-60 mb-6">
                Professional sellers organize files by{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline font-semibold"
                >
                  print ratio
                </Link>{" "}
                — each ratio covers multiple sizes with the same proportions.
              </p>

              <Card accent className="mb-6">
                <h3 className="font-semibold mb-3">
                  Why ratios matter more than individual sizes:
                </h3>
                <p className="text-sm text-foreground-60 mb-3">
                  A buyer with a <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18</Link> frame needs a 2:3 ratio file. A buyer
                  with an 8×10 frame needs a 4:5 ratio file. Same artwork,
                  different aspect ratios.
                </p>
                <p className="text-sm text-foreground-60">
                  By providing all standard ratios, you cover virtually every
                  frame size without creating hundreds of individual files.
                </p>
              </Card>

              <p className="text-foreground-60 mb-4">
                <strong>The complete ratio breakdown:</strong>
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border">
                  <span className="font-semibold">2:3 ratio</span>
                  <span className="text-sm text-foreground-60">
                    → 4×6, 6×9, 8×12, <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18</Link>, 16×24, 20×30
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border">
                  <span className="font-semibold">3:4 ratio</span>
                  <span className="text-sm text-foreground-60">
                    → 6×8, 9×12, 12×16, 18×24
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border">
                  <span className="font-semibold">4:5 ratio</span>
                  <span className="text-sm text-foreground-60">
                    → 8×10, 12×15, 16×20, 24×30
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border">
                  <span className="font-semibold">ISO A-series</span>
                  <span className="text-sm text-foreground-60">
                    → A5, A4, A3, A2, A1 (international buyers)
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border">
                  <span className="font-semibold">Extras</span>
                  <span className="text-sm text-foreground-60">
                    → 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24
                  </span>
                </div>
              </div>

              <p className="text-sm text-foreground-60 mb-4">
                For exact pixel dimensions at 300 DPI for every size, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline font-semibold"
                >
                  complete Etsy print sizes reference
                </Link>
                .
              </p>

              <ContextualCTA
                problem="Creating 20–30 print sizes manually takes 1–3 hours per artwork — per listing."
                solution="SnapToSize generates all required sizes in seconds. Every ratio pack, at 300 DPI, organized into ZIP files under Etsy's 20MB limit."
                buttonText="Generate All Sizes Instantly"
                appUrl={appUrl}
              />
            </div>

            {/* ===== SECTION 5: Pricing Your Digital Downloads ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pricing Your Digital Downloads
              </h2>
              <p className="text-foreground-60 mb-6">
                Pricing digital downloads is part art, part science. Too low and
                you undervalue your work. Too high and you lose conversions.
              </p>

              <Card className="mb-6">
                <h3 className="font-semibold mb-3">
                  Typical Etsy printable pricing:
                </h3>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">$3.99-$4.99:</span>
                    <span>Entry-level pricing, good for testing demand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">$5.99-$7.99:</span>
                    <span>
                      Standard pricing for complete ratio packs (most sellers)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">$8.99-$12.99:</span>
                    <span>
                      Premium pricing for niche art styles, bundles, or
                      commercial licenses
                    </span>
                  </li>
                </ul>
              </Card>

              <h3 className="text-lg font-semibold mb-3">
                Factors that influence pricing:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Number of sizes included",
                    description:
                      "Complete ratio packs (20-30 sizes) justify higher prices than single files.",
                  },
                  {
                    title: "Artwork complexity",
                    description:
                      "Detailed illustrations or custom designs can command higher prices than simple graphics.",
                  },
                  {
                    title: "Niche specificity",
                    description:
                      "Highly targeted designs (e.g., medical office art) can price higher than generic themes.",
                  },
                  {
                    title: "Competitive landscape",
                    description:
                      "Research similar listings in your niche. Price within 20% of competitors initially.",
                  },
                  {
                    title: "Perceived value",
                    description:
                      "Professional mockups, clear file organization, and detailed descriptions increase perceived value.",
                  },
                  {
                    title: "Licensing terms",
                    description:
                      "Personal use only = lower price. Commercial use license = higher price.",
                  },
                ].map((factor, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background-5 border border-border"
                  >
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        {factor.title}
                      </h4>
                      <p className="text-sm text-foreground-60">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card accent>
                <p className="text-sm text-foreground-60">
                  <strong>Pricing strategy:</strong> Start at $5.99 for
                  complete ratio packs. Monitor conversion rates for 2-4 weeks.
                  If conversions are strong (&gt;3%), test $6.99 or $7.99. If
                  conversions are weak (&lt;1%), test $4.99 or improve listing
                  photos and descriptions.
                </p>
              </Card>
            </div>

            {/* ===== SECTION 6: Common Mistakes (Include Wrong File Size / Wrong Ratio) ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Common Mistakes That Kill Sales
              </h2>
              <p className="text-foreground-60 mb-6">
                Most Etsy digital download sellers make at least one of these
                mistakes. Avoid them to save time and increase conversions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Wrong file size or ratio",
                    description:
                      "Providing only one size or using incorrect aspect ratios forces buyers to crop. This leads to refunds and negative reviews.",
                    severity: "critical",
                  },
                  {
                    title: "Resolution below 300 DPI",
                    description:
                      "Files under 300 DPI produce blurry prints. Buyers expect professional quality. Low resolution = instant refund request.",
                    severity: "critical",
                  },
                  {
                    title: "Files over 20MB per ZIP",
                    description:
                      "Etsy blocks uploads over 20MB. Large file sizes also frustrate buyers with slow internet.",
                    severity: "high",
                  },
                  {
                    title: "Poor listing photos",
                    description:
                      "Low-quality mockups or no lifestyle images reduce click-through rates and conversions.",
                    severity: "high",
                  },
                  {
                    title: "Vague descriptions",
                    description:
                      "Buyers need to know: file format, resolution, included sizes, and how to download. Missing details = lost sales.",
                    severity: "medium",
                  },
                  {
                    title: "No printing instructions",
                    description:
                      "First-time buyers may not know how to print. Including a simple PDF guide reduces support messages.",
                    severity: "medium",
                  },
                ].map((mistake, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background-5 border border-border"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className={`h-5 w-5 rounded-full flex items-center justify-center ${
                          mistake.severity === "critical"
                            ? "bg-error/10"
                            : mistake.severity === "high"
                            ? "bg-amber-500/10"
                            : "bg-blue-500/10"
                        }`}
                      >
                        <AlertTriangle
                          className={`h-3.5 w-3.5 ${
                            mistake.severity === "critical"
                              ? "text-error"
                              : mistake.severity === "high"
                              ? "text-amber-500"
                              : "text-blue-500"
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        {mistake.title}
                      </h4>
                      <p className="text-sm text-foreground-60">
                        {mistake.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card accent>
                <h3 className="font-semibold mb-2">
                  The #1 mistake: Wrong print sizes
                </h3>
                <p className="text-sm text-foreground-60 mb-3">
                  This is the most common and most costly error. Buyers expect
                  complete ratio coverage. If you provide only 8×10 and 16×20,
                  you&apos;ll lose sales to buyers who need <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12×18</Link> or A4.
                </p>
                <p className="text-sm text-foreground-60">
                  Solution: Provide all 5 ratio packs (2:3, 3:4, 4:5, ISO,
                  extras) in every listing. This eliminates custom size requests
                  and maximizes conversions. See the{" "}
                  <Link
                    href="/etsy-print-sizes"
                    className="text-accent-light hover:underline font-semibold"
                  >
                    complete size chart
                  </Link>
                  .
                </p>
              </Card>
            </div>

            {/* ===== CTA #2 ===== */}
            <Card accent className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Stop Wasting Time on Manual Resizing
              </h3>
              <p className="text-sm text-foreground-60 mb-4">
                SnapToSize generates every required Etsy print size in seconds —
                correct ratios, 300 DPI, organized ZIP packs, optimized for
                Etsy&apos;s 20MB limit. Upload once, download everything.
              </p>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate All Print Sizes
                </Button>
              </a>
              <p className="text-xs text-foreground-60 mt-3">
                Free plan available. See your first pack generated in under 60
                seconds.
              </p>
            </Card>

            {/* ===== SECTION 7: FAQ ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <FAQAccordion
                items={[
                  {
                    question:
                      "What file format should I use for Etsy digital downloads?",
                    answer: [
                      <>
                        Use <strong>high-resolution JPG files at 300 DPI</strong>{" "}
                        for printable wall art. JPGs offer the best balance of
                        quality and file size. PNG files are often 10-20x larger
                        without meaningful quality improvement for prints.
                      </>,
                      <>
                        Organize multiple print sizes into{" "}
                        <strong>ZIP files grouped by ratio</strong> (2:3, 3:4,
                        4:5, ISO, extras) to stay under Etsy&apos;s 20MB limit
                        per file.
                      </>,
                    ],
                  },
                  {
                    question:
                      "How many print sizes should I include in my Etsy listing?",
                    answer: [
                      <>
                        Professional sellers provide{" "}
                        <strong>20-30 print sizes</strong> organized into 5
                        ratio packs: 2:3 (most common), 3:4 (classic frames),
                        4:5 (includes 8×10), ISO A-series (international), and
                        extras (5×7, 8.5×11, 11×14, 13×19).
                      </>,
                      <>
                        This covers virtually every frame size and eliminates
                        custom size requests. Buyers download all ZIPs and
                        choose the ratio that matches their frame. See the{" "}
                        <Link
                          href="/etsy-print-sizes"
                          className="text-accent-light hover:underline"
                        >
                          complete size chart
                        </Link>
                        .
                      </>,
                    ],
                  },
                  {
                    question:
                      "Do I need a business license to sell digital downloads on Etsy?",
                    answer: [
                      <>
                        Requirements vary by location. Most jurisdictions
                        don&apos;t require a business license for small-scale
                        digital product sales, but you may need to register for
                        a business license or sales tax permit once you reach
                        certain revenue thresholds.
                      </>,
                      <>
                        Check your local regulations or consult a tax
                        professional. In the US, you&apos;ll need to report
                        income on your tax return regardless of business
                        license status.
                      </>,
                    ],
                  },
                  {
                    question: "How do I price my Etsy digital downloads?",
                    answer: [
                      <>
                        Most Etsy printable wall art sells for{" "}
                        <strong>$3-$8 per listing</strong>. Price based on:
                        number of sizes included (more sizes = higher value),
                        artwork complexity, competitive research in your niche,
                        and perceived value.
                      </>,
                      <>
                        <strong>Recommended starting price:</strong> $4.99-$5.99
                        for complete ratio packs (20-30 sizes). Test pricing
                        after 2-4 weeks based on conversion rates. Strong
                        conversions (&gt;3%) = test higher prices. Weak
                        conversions (&lt;1%) = test lower prices or improve
                        listing quality.
                      </>,
                    ],
                  },
                  {
                    question:
                      "What is the biggest mistake sellers make with Etsy printables?",
                    answer: [
                      <>
                        The most common mistake is{" "}
                        <strong>
                          providing the wrong print sizes or ratios
                        </strong>
                        . Using incorrect aspect ratios forces buyers to crop
                        the artwork, losing parts of the composition.
                      </>,
                      <>
                        Always provide{" "}
                        <strong>exact ratio packs (2:3, 3:4, 4:5, ISO)</strong>{" "}
                        at 300 DPI with no cropping. Wrong file sizes lead to
                        refunds, negative reviews, and constant support
                        messages. See the{" "}
                        <Link
                          href="/etsy-print-ratios"
                          className="text-accent-light hover:underline"
                        >
                          print ratios guide
                        </Link>{" "}
                        for details.
                      </>,
                    ],
                  },
                ]}
              />
            </div>

            {/* ===== FINAL CTA ===== */}
            <div className="pt-8 pb-8">
              <FinalCTA
                heading="Ready to Sell Digital Downloads on Etsy?"
                stat="30 sizes across 5 ratio packs in under 60 seconds"
                description="Generate all required print sizes in seconds. Upload once, download every ratio pack — ready to upload to your Etsy listing."
                buttonText="Start Free"
                appUrl={appUrl}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Ready to skip the manual file preparation?"
                solution="SnapToSize automates the hardest part of selling digital downloads. One upload → every standard size, organized and Etsy-ready."
                buttonText="Try It Free"
                appUrl={appUrl}
              />
            </div>

            {/* Internal links for SEO */}
            <RelatedPages currentSlug="how-to-sell-digital-downloads-on-etsy" />
          </div>
        </Container>
      </section>
    </>
  );
}
