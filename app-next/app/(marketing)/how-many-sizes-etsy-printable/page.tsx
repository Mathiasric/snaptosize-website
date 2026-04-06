import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Clock, Package } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "How Many Sizes to Include in Etsy Printable Listings?",
  description:
    "Up to 70 print-ready files from one upload — portrait, landscape, and square. The exact sizing strategy professional Etsy sellers use.",
  alternates: {
    canonical: "https://snaptosize.com/how-many-sizes-etsy-printable",
  },
  openGraph: {
    title:
      "How Many Sizes Should You Include in Your Etsy Printable? — SnapToSize",
    description:
      "The complete guide to sizing strategy for Etsy digital print sellers. Learn the 5 ratio pack system that eliminates buyer questions and maximizes conversions.",
    url: "https://snaptosize.com/how-many-sizes-etsy-printable",
    images: [
      {
        url: "/assets/og/how-many-sizes-etsy-printable.png",
        width: 1200,
        height: 630,
        alt: "How Many Sizes to Include in Etsy Printable Listings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Sizes to Include in Etsy Printable Listings?",
    description:
      "Up to 70 print-ready files from one upload. The exact sizing strategy professional Etsy sellers use.",
    images: ["/assets/og/how-many-sizes-etsy-printable.png"],
  },
};

export default function HowManySizesEtsyPrintablePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Many Sizes to Include in Etsy Printable Listings",
    description:
      "Complete guide to sizing strategy for Etsy digital print sellers. Up to 70 print-ready files from one upload — 30+ sizes in portrait and landscape, organized in 5 ratio packs.",
    url: "https://snaptosize.com/how-many-sizes-etsy-printable",
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
        name: "How Many Sizes to Include in Etsy Printable",
        item: "https://snaptosize.com/how-many-sizes-etsy-printable",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many sizes should I include in my Etsy printable listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional sellers deliver up to 70 print-ready files — 30+ sizes in portrait and landscape, plus square formats, organized in 5 ratio packs (2:3, 3:4, 4:5, ISO A-series, and extras). This eliminates buyer questions and positions you as a premium seller.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include international sizes like A4 and A3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ISO A-series sizes are standard in Europe, Australia, and most of the world. Including A4, A3, A2, and A1 significantly increases international sales and reduces 'do you offer this in A4?' messages.",
        },
      },
      {
        "@type": "Question",
        name: "Will offering more sizes overwhelm my buyers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, if organized properly. Group sizes by ratio in separate ZIPs (one ZIP per ratio pack). Buyers download only the ratio that matches their frame type. Clear organization creates confidence, not confusion.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to create 70 files manually in Photoshop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manual resizing takes 2-3 minutes per file. For 70 files (portrait, landscape, and square), that's roughly 3.5 hours per artwork. For sellers with 50+ listings, this is hundreds of hours of tedious manual work that could be spent creating new art.",
        },
      },
      {
        "@type": "Question",
        name: "How do I create all Etsy print sizes without spending hours resizing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use a professional sizing tool like SnapToSize. Upload once, receive up to 70 files — 30+ sizes in portrait and landscape, plus square formats — organized in 5 ratio packs at 300 DPI. Processing time: 10-30 seconds. No Photoshop, no cropping, no manual work.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_how-many-sizes-etsy-printable&kind=guide";

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
            "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)",
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-8%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />

        {/* Frame mosaic — right side (CSS only) */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative" style={{ width: "320px", height: "360px" }}>
            {/* 2:3 frame */}
            <div
              className="absolute border border-white/[0.08] rounded-sm"
              style={{ width: "80px", height: "120px", top: "0", left: "0" }}
            >
              <div className="absolute inset-1.5 border border-purple-500/15 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white/15 tracking-wider">
                2:3
              </span>
            </div>
            {/* 4:5 frame */}
            <div
              className="absolute border border-white/[0.10] rounded-sm"
              style={{ width: "100px", height: "125px", top: "10px", left: "100px" }}
            >
              <div className="absolute inset-1.5 border border-purple-400/20 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white/20 tracking-wider">
                4:5
              </span>
            </div>
            {/* 3:4 frame */}
            <div
              className="absolute border border-white/[0.08] rounded-sm"
              style={{ width: "75px", height: "100px", top: "20px", left: "220px" }}
            >
              <div className="absolute inset-1.5 border border-purple-500/15 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white/15 tracking-wider">
                3:4
              </span>
            </div>
            {/* ISO A4 frame */}
            <div
              className="absolute border border-white/[0.10] rounded-sm"
              style={{ width: "90px", height: "127px", top: "145px", left: "30px" }}
            >
              <div className="absolute inset-1.5 border border-indigo-400/15 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white/15 tracking-wider">
                ISO
              </span>
            </div>
            {/* 8x10 highlighted frame */}
            <div
              className="absolute border border-purple-400/25 rounded-sm"
              style={{ width: "96px", height: "120px", top: "155px", left: "140px" }}
            >
              <div className="absolute inset-1.5 border border-purple-400/10 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-purple-300/30 tracking-wider">
                8&times;10
              </span>
            </div>
            {/* 5x7 small frame */}
            <div
              className="absolute border border-white/[0.07] rounded-sm"
              style={{ width: "60px", height: "84px", top: "165px", left: "255px" }}
            >
              <div className="absolute inset-1.5 border border-purple-500/10 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-white/12 tracking-wider">
                5&times;7
              </span>
            </div>
            {/* Count badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">
              <span className="text-[10px] font-mono text-purple-300/40 tracking-[0.15em]">
                70 FILES &middot; 5 PACKS
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Etsy Seller Strategy
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                How Many Sizes to Include in Your Etsy Printable
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                The 5-pack system that eliminates buyer questions and maximizes
                sales
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              Should you include 5 sizes? 10? All of them? Professional sellers
              deliver up to 70 print-ready files &mdash; 30+ sizes in portrait
              and{" "}
              <Link href="/etsy-landscape-print-sizes" className="text-teal-300/70 hover:text-teal-300 underline underline-offset-2">
                landscape
              </Link>
              , organized in 5 ratio packs. Here&apos;s the exact
              structure &mdash; and how to create it without spending hours in
              Photoshop.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate Up to 70 Files Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download organized ratio packs.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Up to 70 files &middot; 5 ratio packs
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  300 DPI &middot; JPEG
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Under 20 MB per ZIP
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
            {/* --- The Short Answer --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Short Answer: Up to 70 Print-Ready Files From One Upload
              </h2>
              <p className="text-foreground-60 mb-4">
                Professional Etsy printable sellers deliver up to 70
                print-ready files &mdash; 30+ sizes in both portrait and
                landscape orientations, plus square formats, organized in 5
                ratio packs. This eliminates &ldquo;do you have this
                in&hellip;?&rdquo; messages, reduces refund requests, and
                positions you as a premium seller.
              </p>
              <p className="text-foreground-60 mb-4">
                The key is organization: group sizes by{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  ratio (2:3, 3:4, 4:5, ISO, Extras)
                </Link>{" "}
                so buyers can choose the pack that matches their frame type.
                Quantity with structure is what separates amateur listings from
                professional ones.
              </p>
              <p className="text-foreground-60">
                The answer isn&apos;t just &ldquo;how many&rdquo; &mdash;
                it&apos;s &ldquo;how to organize them.&rdquo; One ZIP per ratio
                pack. Clean file names. Every standard frame covered. That&apos;s
                the professional standard. For the full walkthrough on file
                structure and naming, see our{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  guide to packaging digital wall art
                </Link>
                .
              </p>
            </div>

            {/* --- Why Size Coverage Matters --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Size Coverage Matters for Etsy Sales
              </h2>
              <p className="text-foreground-60 mb-4">
                When a buyer sees &ldquo;8&times;10, <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link>,
                16&times;20&rdquo; listed, they immediately wonder: will this
                work in my 18&times;24 frame? Incomplete size coverage creates
                doubt. Doubt kills conversions.
              </p>
              <p className="text-foreground-60 mb-6">
                Complete coverage signals professionalism and builds trust. It
                tells buyers: &ldquo;Whatever frame you own, this listing has
                you covered.&rdquo;
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    US buyers need standard sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    8&times;10, 11&times;14, 16&times;20, 24&times;36 &mdash;
                    these are the frame sizes stocked at every Target, Walmart,
                    and IKEA. Missing even one means lost sales from buyers who
                    won&apos;t message you to ask.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    European buyers need ISO sizes
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link>,{" "}
                    <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link>, A2, <Link href="/etsy-a1-print-size" className="text-accent-light hover:underline">A1</Link> are standard in Europe, Australia, and most
                    of the world. Skipping ISO sizes means losing international
                    customers entirely &mdash; and Etsy is a global marketplace.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Large wall art buyers need big formats
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    24&times;36 and 20&times;30 are popular for statement pieces.
                    These buyers often spend more and leave better reviews. Don&apos;t
                    leave high-value customers without their size. For niche-specific
                    sizing, see our{" "}
                    <Link
                      href="/etsy-nursery-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      nursery wall art sizes guide
                    </Link>,{" "}
                    <Link
                      href="/etsy-abstract-wall-art-sizes"
                      className="text-accent-light hover:underline"
                    >
                      abstract wall art sizes
                    </Link>, or{" "}
                    <Link
                      href="/etsy-ai-art-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      AI art print sizes
                    </Link>.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- The 5 Ratio Packs --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 5 Ratio Packs Every Professional Seller Includes
              </h2>
              <p className="text-foreground-60 mb-6">
                Here&apos;s the exact structure. Each ratio pack ships as its own
                ZIP file, keeping every download under{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  Etsy&apos;s 20 MB limit
                </Link>
                . For{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  exact pixel dimensions at 300 DPI
                </Link>
                , see the complete reference.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio Pack
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Sizes Included
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Count
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">2:3 Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        4&times;6, 6&times;9, 8&times;12, 10&times;15,
                        12&times;18, 16&times;24, 20&times;30
                      </td>
                      <td className="py-3 px-4 text-foreground-60">7 sizes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">3:4 Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6&times;8, 9&times;12, 12&times;16, 15&times;20,
                        18&times;24
                      </td>
                      <td className="py-3 px-4 text-foreground-60">5 sizes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">4:5 Ratio</td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>
                        , 12&times;15, 16&times;20, 20&times;25, 24&times;30
                      </td>
                      <td className="py-3 px-4 text-foreground-60">5 sizes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">ISO A-Series</td>
                      <td className="py-3 px-4 text-foreground-60">
                        A5, A4, A3, A2, A1
                      </td>
                      <td className="py-3 px-4 text-foreground-60">5 sizes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Extras</td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Link
                          href="/etsy-5x7-print-size"
                          className="text-accent-light hover:underline"
                        >
                          5&times;7
                        </Link>
                        , 8.5&times;11, 11&times;14, 11&times;17, 13&times;19, 20&times;24
                      </td>
                      <td className="py-3 px-4 text-foreground-60">6 sizes</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-white/20">
                      <td className="py-3 px-4 font-bold">Total</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Every standard frame on the market
                      </td>
                      <td className="py-3 px-4 font-bold">28 sizes</td>
                    </tr>
                    <tr className="border-t border-white/10 bg-accent-5/30">
                      <td className="py-3 px-4 font-bold text-accent-light" colSpan={2}>
                        With portrait, landscape &amp; square orientations
                      </td>
                      <td className="py-3 px-4 font-bold text-accent-light">
                        Up to 70 files
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <p className="text-foreground-60">
                This is the professional standard. When a competitor offers 5
                sizes and your listing includes up to 70 files &mdash;
                portrait, landscape, and square &mdash; yours appears
                dramatically more valuable at the same price point. Buyers
                perceive five products instead of one.
              </p>
            </div>

            {/* --- What Happens: Too Few --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Happens When You Offer Too Few Sizes
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        &ldquo;Do you have this in [size]?&rdquo; messages flood
                        your inbox
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Every message you answer is time not spent creating new
                        art. Most buyers won&apos;t message at all &mdash; they
                        just leave and buy from someone who has their size.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Competitors with full coverage steal the sale
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Etsy search shows similar listings side by side. When one
                        listing says &ldquo;70 files included&rdquo; and yours
                        says &ldquo;3 sizes,&rdquo; the choice is obvious.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Reviews mention &ldquo;wish it came in more sizes&rdquo;
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Even satisfied buyers may leave 4-star reviews because
                        their preferred size wasn&apos;t included. Those reviews
                        compound and hurt your listing&apos;s conversion rate over
                        time.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- What Happens: Too Many (Wrong Way) --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Happens When You Offer Too Many (the Wrong Way)
              </h2>
              <p className="text-foreground-60 mb-4">
                The trap: offering 50+ individual files in one chaotic ZIP.
                Quantity without organization creates problems, not value.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-foreground-60">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>
                    Buyers get overwhelmed sorting through dozens of unnamed files
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground-60">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>
                    A single ZIP with 50 files easily blows past{" "}
                    <Link
                      href="/etsy-20mb-file-limit"
                      className="text-accent-light hover:underline"
                    >
                      Etsy&apos;s 20 MB limit
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground-60">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>
                    Messy file organization leads to support requests and
                    frustration
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground-60">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>
                    You&apos;ve spent 3+ hours manually resizing and organizing
                    files that still feel unprofessional
                  </span>
                </li>
              </ul>

              <Card accent className="p-6">
                <p className="text-sm text-foreground-60">
                  <strong className="text-foreground">The difference:</strong>{" "}
                  30+ sizes in portrait and{" "}
                  <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">landscape</Link>{" "}
                  &mdash; up to 70 files &mdash; organized into 5 ratio packs is professional. 50
                  random files dumped into one ZIP is chaos. Organization is
                  what makes comprehensive coverage work.
                </p>
              </Card>
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Convinced you need more sizes but dreading the manual work?"
                solution="Upload one image. SnapToSize generates up to 70 files across 5 ratio packs — portrait and landscape. Under a minute."
                buttonText="Generate All Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- The Manual Resizing Problem --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Manual Resizing Problem
              </h2>
              <p className="text-foreground-60 mb-4">
                You need up to 70 files per artwork &mdash; portrait, landscape,
                and square. Creating them manually? That&apos;s where the math
                gets painful.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  Manual Resizing Time Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Time per size</span>
                    <span className="font-semibold">2&ndash;3 minutes</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Total for 70 files
                    </span>
                    <span className="font-semibold">
                      ~3.5 hours per artwork
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      For 50 listings
                    </span>
                    <span className="font-semibold">175+ hours of labor</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">
                      For 200 listings
                    </span>
                    <span className="font-semibold">700+ hours of labor</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The workflow: open Photoshop, select crop tool, set dimensions,
                adjust composition, export, rename file, repeat. Seventy times
                per artwork if you want portrait, landscape, and square
                coverage. It&apos;s repetitive, tedious work that takes time
                away from creating new art &mdash; which is what actually grows
                your shop.
              </p>
              <p className="text-foreground-60">
                For sellers with 50&ndash;200 listings, manual resizing becomes
                a second job. That&apos;s 175&ndash;700 hours of work that
                doesn&apos;t create a single new design or generate a single new
                listing.
              </p>
            </div>

            {/* --- CTA 1: Solution --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Generate All Etsy Print Sizes Instantly
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Receive up to 70 print-ready files
                  &mdash; 30+ sizes in portrait and landscape, plus square
                  formats, organized in 5 ratio packs at 300 DPI. Each ZIP
                  under 20&nbsp;MB. Processing time: 10&ndash;30 seconds. No
                  Photoshop. No cropping. Full composition preserved.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Try Free &mdash; 5 Quick Exports + 2 Packs/Day
                  </Button>
                </a>
                <p className="text-xs text-foreground-60 mt-2">
                  No credit card required.
                </p>
              </Card>
            </div>

            {/* --- How to Deliver All Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Deliver All Sizes Without the Manual Work
              </h2>
              <p className="text-foreground-60 mb-6">
                Professional sellers use dedicated sizing tools instead of
                Photoshop. The workflow is simple:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background-5 border border-border">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center">
                    <span className="text-accent-light font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Upload one high-resolution image
                    </h4>
                    <p className="text-sm text-foreground-60">
                      Start with your largest, highest-quality version. Minimum
                      3600px on the shortest side for best results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-background-5 border border-border">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center">
                    <span className="text-accent-light font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Choose your ratio packs
                    </h4>
                    <p className="text-sm text-foreground-60">
                      Select 2:3, 3:4, 4:5, ISO, Extras &mdash; or all five.
                      Each pack generates every size within that ratio. Not sure which sizes your image supports? Use our{" "}
                      <Link href="/etsy-print-size-calculator" className="text-accent-light hover:underline">print size calculator</Link> to find out.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-background-5 border border-border">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-5 flex items-center justify-center">
                    <span className="text-accent-light font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Download organized ZIPs
                    </h4>
                    <p className="text-sm text-foreground-60">
                      Receive professionally named files (e.g.,{" "}
                      <code className="text-accent-light">
                        artwork_8x10_300dpi.jpg
                      </code>
                      ), grouped by ratio, each ZIP under 20 MB. Upload directly
                      to Etsy.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-foreground-60">
                Total time: 10&ndash;30 seconds per artwork. Compare that to
                3.5 hours of manual resizing for 70 files. For sellers with 50+
                listings, the difference is hundreds of hours freed up for
                creating new art.
                Every file is generated at{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  the optimal 300 DPI resolution
                </Link>
                .
              </p>
            </div>

            {/* --- File Naming & Organization --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Professional File Naming &amp; Organization
              </h2>
              <p className="text-foreground-60 mb-6">
                How you deliver files matters as much as what you deliver. Clean
                organization impacts reviews, repeat purchases, and support
                volume. For the full breakdown, see the{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  complete file setup guide
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <h3 className="font-semibold text-green-400">
                      Professional
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm text-foreground-60">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 flex-shrink-0" />
                      <code className="text-xs">2x3_ratio_pack.zip</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 flex-shrink-0" />
                      <code className="text-xs">4x5_ratio_pack.zip</code>
                    </div>
                    <p className="pt-2 text-xs">
                      Inside each ZIP:
                    </p>
                    <div className="pl-4 space-y-1">
                      <p className="text-xs font-mono">
                        artwork_8x10_300dpi.jpg
                      </p>
                      <p className="text-xs font-mono">
                        artwork_12x15_300dpi.jpg
                      </p>
                      <p className="text-xs font-mono">
                        artwork_16x20_300dpi.jpg
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h3 className="font-semibold text-red-400">Amateur</h3>
                  </div>
                  <div className="space-y-2 text-sm text-foreground-60">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 flex-shrink-0" />
                      <code className="text-xs">all_files.zip (47 MB)</code>
                    </div>
                    <p className="pt-2 text-xs">
                      Inside the ZIP:
                    </p>
                    <div className="pl-4 space-y-1">
                      <p className="text-xs font-mono">print1.jpg</p>
                      <p className="text-xs font-mono">print_final_v2.jpg</p>
                      <p className="text-xs font-mono">
                        IMG_20260315_export.jpg
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                Buyers who can instantly find their file leave 5-star reviews.
                Buyers who can&apos;t figure out which file is which leave
                support messages &mdash; or worse, open a dispute.
              </p>
            </div>

            {/* --- The Business Case --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Business Case: Time Saved = More Listings = More Revenue
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Time saved per artwork
                    </span>
                    <span className="font-semibold">~3.5 hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Time saved across 50 listings
                    </span>
                    <span className="font-semibold">175 hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      New artworks in that time
                    </span>
                    <span className="font-semibold">~60 listings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">
                      Potential extra monthly revenue
                    </span>
                    <span className="font-semibold text-accent-light">
                      $3,000+ /month
                    </span>
                  </div>
                </div>
                <p className="text-xs text-foreground-60 mt-4">
                  Based on average $50/month per active listing. Your results
                  will vary.
                </p>
              </Card>

              <p className="text-foreground-60 mb-4">
                Every hour spent manually resizing is an hour not spent creating
                new art. If each listing generates $50/month on average, those 60
                extra listings represent $3,000 in additional monthly revenue.
              </p>
              <p className="text-foreground-60">
                The ROI of professional sizing tools becomes obvious at scale.{" "}
                <Link
                  href="/pricing"
                  className="text-accent-light hover:underline"
                >
                  See SnapToSize pricing
                </Link>{" "}
                &mdash; Pro plan pays for itself with a single extra listing.
              </p>
            </div>

            {/* --- CTA 2: After business case --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Resizing Manually. Start Scaling Your Shop.
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once. Receive up to 70 print-ready files across 5
                  organized ratio packs &mdash; portrait, landscape, and square.
                  300 DPI. Under 20 MB. Professional naming. Ready to upload to
                  Etsy in seconds.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-7 py-3">
                    Start Free &mdash; Generate Sizes Now
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
                      "How many sizes should I include in my Etsy printable listing?",
                    answer:
                      "Professional sellers deliver up to 70 print-ready files — 30+ sizes in portrait and landscape, plus square formats, organized in 5 ratio packs (2:3, 3:4, 4:5, ISO A-series, and extras). This eliminates buyer questions and positions you as a premium seller.",
                  },
                  {
                    question:
                      "Should I include international sizes like A4 and A3?",
                    answer:
                      "Yes. ISO A-series sizes are standard in Europe, Australia, and most of the world. Including A4, A3, A2, and A1 significantly increases international sales and reduces \"do you offer this in A4?\" messages.",
                  },
                  {
                    question:
                      "Will offering more sizes overwhelm my buyers?",
                    answer:
                      "No, if organized properly. Group sizes by ratio in separate ZIPs (one ZIP per ratio pack). Buyers download only the ratio that matches their frame type. Clear organization creates confidence, not confusion.",
                  },
                  {
                    question:
                      "How long does it take to create 70 files manually in Photoshop?",
                    answer:
                      "Manual resizing takes 2-3 minutes per file. For 70 files (portrait, landscape, and square), that's roughly 3.5 hours per artwork. For sellers with 50+ listings, this is hundreds of hours of tedious manual work that could be spent creating new art.",
                  },
                  {
                    question:
                      "How do I create all Etsy print sizes without spending hours resizing?",
                    answer:
                      "Use a professional sizing tool like SnapToSize. Upload once, receive up to 70 files — 30+ sizes in portrait and landscape, plus square formats — organized in 5 ratio packs at 300 DPI. Processing time: 10-30 seconds. No Photoshop, no cropping, no manual work.",
                  },
                ]}
              />
            </div>

            {/* --- CTA 3: Post-FAQ --- */}
            <div>
              <FinalCTA
                heading="Start Creating Professional Size Packs Today"
                stat="One upload → up to 70 print-ready files"
                description="Join professional Etsy sellers who deliver up to 70 files — 30+ sizes in portrait and landscape, organized in 5 ratio packs. Upload your first artwork and see the difference in seconds."
                buttonText="Start Free"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="how-many-sizes-etsy-printable" />
          </div>
        </Container>
      </section>
    </>
  );
}
