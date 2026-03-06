import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, FileText, Upload, DollarSign } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCapture } from "@/components/EmailCapture";

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
        url: "/assets/how-to-sell_hero.png",
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
    images: ["/assets/how-to-sell_hero.png"],
  },
};

export default function HowToSellDigitalDownloadsOnEtsyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
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
          text: "Use high-resolution JPEG files at 300 DPI for printable wall art. JPEGs offer the best balance of quality and file size. Organize multiple print sizes into ZIP files grouped by ratio (2:3, 3:4, 4:5, ISO, extras) to stay under Etsy's 20MB limit per file.",
        },
      },
      {
        "@type": "Question",
        name: "How many print sizes should I include in my Etsy listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional sellers provide 20-30 print sizes organized into 5 ratio packs: 2:3 (most common), 3:4 (classic frames), 4:5 (includes 8×10), ISO A-series (international), and extras (5×7, 8.5×11, 11×14). This covers virtually every frame size and eliminates custom size requests.",
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
      <section className="relative overflow-hidden h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/how-to-sell_hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="z-0"
          />
          {/* Left-side gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        </div>

        {/* Content - centered vertically */}
        <div className="relative z-10 h-full flex items-center">
          <Container>
            <div className="max-w-[680px] py-4 -mt-12 md:-mt-8">
              <h1 className="font-bold tracking-tight mb-5 text-white">
                <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5">
                  How to Sell Digital Downloads on Etsy
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/95">
                  Complete guide — from file prep to your first sale
                </span>
              </h1>
              <p className="text-base text-white/95 mb-4 drop-shadow-md">
                Selling digital downloads on Etsy is one of the most scalable business models on the platform.
                No inventory, no shipping, no production costs — just create once and sell infinitely.
                This guide covers everything: correct file formats, proper print sizes, listing setup, and pricing strategies.
              </p>

              <div className="mb-3">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate Print-Ready Files Instantly
                  </Button>
                </a>
                <p className="text-sm text-white/85 mt-1.5">
                  Free → create all Etsy print sizes in seconds.
                </p>
              </div>

              {/* Micro-benefit chips */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/25">
                  <Check className="h-3 w-3 text-white flex-shrink-0" />
                  <span className="text-xs text-white font-medium">
                    All print sizes at 300 DPI
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/25">
                  <Check className="h-3 w-3 text-white flex-shrink-0" />
                  <span className="text-xs text-white font-medium">
                    Organized ratio packs
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/25">
                  <Check className="h-3 w-3 text-white flex-shrink-0" />
                  <span className="text-xs text-white font-medium">
                    Under Etsy's 20MB limit
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-4xl space-y-16">
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
                        File Format: JPEG (Not PNG)
                      </h3>
                      <p className="text-sm text-foreground-60 mb-2">
                        For printable wall art, use high-quality JPEG files.
                        JPEGs balance print quality with manageable file sizes.
                      </p>
                      <ul className="space-y-1 text-sm text-foreground-60">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>JPEG quality 85-95:</strong> Excellent print
                            quality without massive file sizes
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
                            10-20x larger than JPEG for the same print quality
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
                            <strong>2:3 ratio</strong> — 4×6, 6×9, 8×12, 12×18,
                            16×24, 20×30, 24×36
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">2.</span>
                          <span>
                            <strong>3:4 ratio</strong> — 6×8, 9×12, 12×16,
                            18×24, 24×32
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
                            <strong>Extras</strong> — 5×7, 8.5×11, 11×14, 20×24
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
                        desks).
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
                            <strong>20MB maximum per file</strong> (this is
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
                  A buyer with a 12×18 frame needs a 2:3 ratio file. A buyer
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
                    → 4×6, 6×9, 8×12, 12×18, 16×24, 20×30, 24×36
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background-5 border border-border">
                  <span className="font-semibold">3:4 ratio</span>
                  <span className="text-sm text-foreground-60">
                    → 6×8, 9×12, 12×16, 18×24, 24×32
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
                    → 5×7, 8.5×11, 11×14, 16×20, 20×24
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

              <Card>
                <h3 className="font-semibold mb-2">
                  Natural CTA to SnapToSize:
                </h3>
                <p className="text-sm text-foreground-60 mb-3">
                  Creating 20-30 print sizes manually takes 1-3 hours per
                  artwork. SnapToSize generates all required sizes in seconds —
                  organized into ratio packs, at 300 DPI, under Etsy&apos;s 20MB
                  limit.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-5 py-2">
                    Generate All Sizes Instantly
                  </Button>
                </a>
              </Card>
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
                  you&apos;ll lose sales to buyers who need 12×18 or A4.
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
                        Use <strong>high-resolution JPEG files at 300 DPI</strong>{" "}
                        for printable wall art. JPEGs offer the best balance of
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
                        extras (5×7, 8.5×11, 11×14).
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
            <div className="text-center pt-8 pb-8">
              <Card accent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Sell Digital Downloads on Etsy?
                </h2>
                <p className="text-foreground-60 mb-6">
                  Generate all required print sizes in seconds. Upload once,
                  download every ratio pack — ready to upload to your Etsy
                  listing.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={appUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="text-base px-7 py-3">Start Free</Button>
                  </a>
                  <Link href="/pricing">
                    <Button variant="secondary" className="text-base px-7 py-3">
                      See Pricing
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-foreground-60 mt-4">
                  No credit card required. Free plan includes watermarked
                  exports.
                </p>
              </Card>
            </div>

            {/* Lead Capture */}
            <div className="pb-12">
              <Card accent className="p-6 md:p-8">
                <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Free Etsy Print Size Cheat Sheet
                  </h3>
                  <p className="text-sm text-foreground-60 mb-5">
                    Get all Etsy ratios and pixel dimensions at 300 DPI in one handy PDF reference. Plus file naming conventions and best practices.
                  </p>
                  <EmailCapture
                    placeholder="Enter your email"
                    buttonText="Get Free Cheat Sheet"
                  />
                </div>
              </Card>
            </div>

            {/* Internal links for SEO */}
            <div className="text-sm text-foreground-60 space-y-2 pb-8">
              <p>
                <strong>Related:</strong>{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  Complete Etsy print sizes guide
                </Link>
                {" · "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Print ratios explained
                </Link>
                {" · "}
                <Link
                  href="/sizes"
                  className="text-accent-light hover:underline"
                >
                  All print sizes
                </Link>
                {" · "}
                <Link
                  href="/pricing"
                  className="text-accent-light hover:underline"
                >
                  Pricing
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
