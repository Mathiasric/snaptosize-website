import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";

export const metadata: Metadata = {
  title: "Etsy Wedding Printable Sizes — Full Suite Guide",
  description:
    "Complete print sizes for wedding invitations, RSVPs, menus, programs, signs, seating charts and more. Pixel dimensions at 300 DPI, ratios, and what to bundle.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-wedding-printable-sizes",
  },
  openGraph: {
    title: "Etsy Wedding Printable Sizes | SnapToSize",
    description:
      "Every size for the full wedding suite — invites, RSVPs, menus, signs, seating charts — with 300 DPI pixel dimensions and bundle recommendations.",
    url: "https://snaptosize.com/etsy-wedding-printable-sizes",
    images: [
      {
        url: "/assets/og/etsy-wedding-printable-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Wedding Printable Sizes — Full Suite Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Wedding Printable Sizes — Full Suite Guide",
    description:
      "Every size for the full wedding suite — invites, RSVPs, menus, signs, seating charts — at 300 DPI.",
    images: ["/assets/og/etsy-wedding-printable-sizes.png"],
  },
};

export default function EtsyWeddingPrintableSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Wedding Printable Sizes — Complete Suite Guide",
    description:
      "Complete print sizes for the full wedding suite: invitations, RSVPs, menus, programs, welcome signs, seating charts, and more. 300 DPI dimensions, ratios, and bundling strategy for Etsy sellers.",
    url: "https://snaptosize.com/etsy-wedding-printable-sizes",
    datePublished: "2026-04-17",
    dateModified: "2026-04-17",
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
        name: "Wedding Printable Sizes for Etsy",
        item: "https://snaptosize.com/etsy-wedding-printable-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What size should a wedding invitation be for Etsy?",
      answer:
        "The standard US wedding invitation is 5×7 inches (5:7 ratio, 1500×2100 px at 300 DPI). For UK and EU buyers, offer A5 (148×210 mm, 1748×2480 px at 300 DPI) as well. Some sellers add 4×6 as a budget option — but 5×7 is what most buyers expect and what most invitation envelopes are sized for.",
    },
    {
      question: "What size is a wedding welcome sign?",
      answer:
        "The two most common welcome sign sizes are 18×24 inches (3:4 ratio) and 24×36 inches (2:3 ratio). 18×24 is the entry standard — it fits most easels and print-shop default paper. 24×36 is the statement size, typically printed at Staples, FedEx Office, or Office Depot. Offer both: buyers often pick based on venue scale.",
    },
    {
      question: "What size is a wedding seating chart?",
      answer:
        "Seating charts are typically 18×24, 24×36, or 30×40 inches. 24×36 is the most common — it holds 80–150 guest names legibly. For weddings with 200+ guests, 30×40 is the safer choice. All three sizes use a 2:3 or 3:4 ratio and are designed to be printed at a commercial print shop.",
    },
    {
      question: "What pixel dimensions do I need for a 5×7 invitation at 300 DPI?",
      answer:
        "A 5×7 invitation at 300 DPI is 1500×2100 pixels. At 150 DPI it would be only 750×1050 — too low for print. Always export invitation artwork at 300 DPI minimum; thin script lettering in particular aliases visibly at lower resolutions.",
    },
    {
      question: "What's the standard wedding menu card size?",
      answer:
        "Wedding menu cards are typically 4×9 inches (thin tall menu card), 5×7 (more common place-setting menu), or 4×8 (classic dinner-party menu). 4×9 is the most popular for table-setting styling. Offer at least 4×9 and 5×7 to cover both aesthetics.",
    },
    {
      question: "Should I sell A4 and US Letter versions of my wedding printables?",
      answer:
        "Yes. US Letter (8.5×11 in) is the default in North America; A4 (8.27×11.69 in, 2480×3508 px at 300 DPI) is the default everywhere else. They are NOT interchangeable — a US Letter file printed on A4 gets cut-off edges and leads to one-star reviews. Include both as separate files in every listing where the buyer will print at home (programs, menus, details cards).",
    },
    {
      question: "How big should a wedding program be?",
      answer:
        "Standard wedding program sizes are 5×7 (folded or flat), 4×9 (tall slim program), or 8.5×11 folded in half (US Letter half-fold, gives a 5.5×8.5 finished size). 5×7 is the most versatile — it fits a ceremony seat naturally and is cheap to print at home.",
    },
    {
      question: "What ratio is a 5×7 invitation?",
      answer:
        "A 5×7 invitation is a 5:7 ratio — NOT 2:3 or 4:5. This is a common confusion point. If you design at 2:3 (which would be 5×7.5) and resize to 5×7, the design crops at top or bottom. Always design natively at 5:7 for invitations. See our guide on Etsy print ratios for the full ratio map.",
    },
    {
      question: "What is the easiest way to resize a whole wedding suite for Etsy?",
      answer:
        "Upload each design once to SnapToSize and it outputs every required size at 300 DPI in a single ZIP under Etsy's 20MB limit — 5×7 invites, 4×6 RSVPs, 4×9 menus, 18×24 signs, 24×36 seating charts, and every ratio in between. No manual Canva resizing, no Photoshop batch actions per size.",
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
    "https://app.snaptosize.com?source=seo_etsy-wedding-printable-sizes&kind=guide";

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
            "linear-gradient(135deg, #0B0B12 0%, #121022 40%, #0F0D1A 100%)",
        }}
      >
        {/* Gradient orbs */}
        <div
          className="absolute top-[-10%] left-[8%] w-[520px] h-[520px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[-6%] w-[460px] h-[460px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[30%] left-[50%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(244,182,203,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
                <Link href="/" className="hover:text-white/60">Home</Link>
                <span>/</span>
                <span className="text-white/60">Wedding Printable Sizes</span>
              </nav>

              <p className="text-[10px] font-mono tracking-[0.2em] text-purple-400/70 uppercase mb-3">
                WEDDING SUITE REFERENCE
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Etsy Wedding Printable Sizes
              </h1>
              <p className="text-white/60 text-base mb-6 leading-relaxed">
                Every size the full wedding suite needs — invitation, RSVP, menu, program, place cards, table numbers, welcome sign, seating chart, thank-you card. 300 DPI dimensions, ratio pairings, and what to bundle.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {["Full suite covered", "US + EU sizes", "300 DPI ready", "ZIP under 20MB"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] text-white/70 border border-white/[0.08]"
                  >
                    <Check className="w-3 h-3 text-teal-400" />
                    {pill}
                  </span>
                ))}
              </div>

              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="text-sm px-6 py-2.5">
                  Resize your wedding suite free →
                </Button>
              </a>
            </div>

            {/* Right: visual — wedding suite piece sizes */}
            <div className="hidden md:flex flex-col items-center justify-center gap-3">
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">
                Suite pieces by ratio
              </div>
              <div className="flex items-end gap-3">
                {/* Invite 5:7 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-purple-500/30 bg-purple-500/10 flex items-center justify-center"
                    style={{ width: 60, height: 84 }}
                  >
                    <span className="text-[9px] font-mono text-purple-300/80">5:7</span>
                  </div>
                  <span className="text-[9px] text-white/30">Invite</span>
                </div>
                {/* RSVP 2:3 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-teal-500/30 bg-teal-500/10 flex items-center justify-center"
                    style={{ width: 48, height: 72 }}
                  >
                    <span className="text-[9px] font-mono text-teal-300/80">2:3</span>
                  </div>
                  <span className="text-[9px] text-white/30">RSVP</span>
                </div>
                {/* Menu thin */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-purple-400/25 bg-purple-400/[0.07] flex items-center justify-center"
                    style={{ width: 36, height: 96 }}
                  >
                    <span className="text-[9px] font-mono text-purple-200/70">4:9</span>
                  </div>
                  <span className="text-[9px] text-white/30">Menu</span>
                </div>
                {/* Sign 3:4 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-teal-400/25 bg-teal-400/[0.07] flex items-center justify-center"
                    style={{ width: 72, height: 96 }}
                  >
                    <span className="text-[9px] font-mono text-teal-200/70">3:4</span>
                  </div>
                  <span className="text-[9px] text-white/30">Sign</span>
                </div>
              </div>
              <p className="text-[9px] text-white/20 mt-2 text-center max-w-[240px]">
                One upload, every ratio — invites to seating charts, all at 300 DPI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-10">
          <QuickAnswer question="What sizes does a full Etsy wedding printable suite need?">
            The full suite is <strong>5×7 invitations, 4×6 or A6 RSVPs, 4×9 menus, 5×7 programs, 3.5×2 place cards, 4×6 table numbers, 18×24 or 24×36 welcome signs, 24×36 or 30×40 seating charts, and 5×7 thank-you cards</strong>. All at 300 DPI. Offer A4/A5 alternates for UK and EU buyers — they print at home on ISO paper.
          </QuickAnswer>
        </div>

        {/* ===== SECTION 1: Full wedding suite reference table ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Full wedding suite — sizes, ratios and pixel dimensions
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Every piece in the wedding stationery set has its own convention. The table below covers the buyer-expected sizes for each piece, including the 300 DPI pixel dimensions and the ratio family each size belongs to.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03] border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Piece</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Size (in)</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Pixels @ 300 DPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Invitation</td>
                  <td className="py-3 px-4 text-muted-foreground">
                    <Link href="/etsy-5x7-print-size" className="hover:underline text-accent-light">5×7</Link>{" "}/ A5
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">5:7 / ISO</td>
                  <td className="py-3 px-4 text-muted-foreground">1500×2100 / 1748×2480</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">RSVP card</td>
                  <td className="py-3 px-4 text-muted-foreground">
                    <Link href="/etsy-4x6-print-size" className="hover:underline text-accent-light">4×6</Link>{" "}/ A6 / 3.5×5
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">2:3 / ISO</td>
                  <td className="py-3 px-4 text-muted-foreground">1200×1800 / 1240×1748</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Details card</td>
                  <td className="py-3 px-4 text-muted-foreground">4×6 / 5×7</td>
                  <td className="py-3 px-4 text-muted-foreground">2:3 / 5:7</td>
                  <td className="py-3 px-4 text-muted-foreground">1200×1800 / 1500×2100</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Menu</td>
                  <td className="py-3 px-4 text-muted-foreground">4×9 / 5×7 / 4×8</td>
                  <td className="py-3 px-4 text-muted-foreground">4:9 / 5:7 / 1:2</td>
                  <td className="py-3 px-4 text-muted-foreground">1200×2700 / 1500×2100</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Program</td>
                  <td className="py-3 px-4 text-muted-foreground">5×7 / 4×9 / 8.5×11 (half-fold)</td>
                  <td className="py-3 px-4 text-muted-foreground">5:7 / 4:9 / US Letter</td>
                  <td className="py-3 px-4 text-muted-foreground">1500×2100 / 2550×3300</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Place cards</td>
                  <td className="py-3 px-4 text-muted-foreground">3.5×2 (folded)</td>
                  <td className="py-3 px-4 text-muted-foreground">7:4</td>
                  <td className="py-3 px-4 text-muted-foreground">1050×600</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Table numbers</td>
                  <td className="py-3 px-4 text-muted-foreground">4×6 / 5×7</td>
                  <td className="py-3 px-4 text-muted-foreground">2:3 / 5:7</td>
                  <td className="py-3 px-4 text-muted-foreground">1200×1800 / 1500×2100</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Welcome sign</td>
                  <td className="py-3 px-4 text-muted-foreground">
                    <Link href="/etsy-18x24-print-size" className="hover:underline text-accent-light">18×24</Link>{" "}/{" "}
                    <Link href="/etsy-24x36-print-size" className="hover:underline text-accent-light">24×36</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">3:4 / 2:3</td>
                  <td className="py-3 px-4 text-muted-foreground">5400×7200 / 7200×10800</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Seating chart</td>
                  <td className="py-3 px-4 text-muted-foreground">18×24 / 24×36 / 30×40</td>
                  <td className="py-3 px-4 text-muted-foreground">3:4 / 2:3 / 3:4</td>
                  <td className="py-3 px-4 text-muted-foreground">5400×7200 / 9000×12000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">Thank-you card</td>
                  <td className="py-3 px-4 text-muted-foreground">4×6 / 5×7</td>
                  <td className="py-3 px-4 text-muted-foreground">2:3 / 5:7</td>
                  <td className="py-3 px-4 text-muted-foreground">1200×1800 / 1500×2100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            For international buyers, also offer{" "}
            <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link>{" "}
            and{" "}
            <Link href="/etsy-a5-print-size" className="text-accent-light hover:underline">A5</Link>{" "}
            alternates for every card-sized piece.
          </p>
        </section>

        {/* ===== LISTING SHOWCASE ===== */}
        <div className="mb-20 md:mb-24">
          <ListingOutputShowcase
            artwork="abstract_wedding"
            heading="One wedding print — every ratio ready to list."
            subtext="Upload your invite or sign artwork once. SnapToSize exports 2×3, 4×5, 3×4, 11×14 and A4 — the ratios that cover 90% of US and international wedding buyers."
          />
        </div>

        {/* ===== SECTION 2: Ratio families ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ratio families in a wedding suite
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A wedding suite spans three completely different ratio families — and sellers who don't design with that in mind end up with cropped invitations or awkward welcome signs.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">5:7 — invitations, programs, 5×7 menus</h3>
              <p className="text-sm text-muted-foreground">
                The classic invitation ratio. Narrower than 2:3 (more rectangular), wider than 3:4. Design your invitation natively at 5:7 — don't start at 2:3 and hope it resizes cleanly, because the top and bottom will crop.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">2:3 — RSVPs, table numbers, 24×36 signs</h3>
              <p className="text-sm text-muted-foreground">
                The workhorse ratio for photo-sized pieces and for the larger welcome signs. 4×6, 8×12, 16×24, 24×36 all fall here. Signs printed in this ratio fit poster-frame conventions at Staples/FedEx Office.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">3:4 — 18×24 signs, seating charts, thank-you frame variants</h3>
              <p className="text-sm text-muted-foreground">
                18×24 and 30×40 use 3:4. Slightly less tall than 2:3 — ideal for seating charts where horizontal room matters for name columns.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">ISO — A4, A5, A6 for international buyers</h3>
              <p className="text-sm text-muted-foreground">
                Every ISO size shares the 1:√2 ratio. A5 folds down from A4, A6 folds down from A5 — that continuity is what makes international stationery suites work. Always include ISO alongside US sizes.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-5">
            For a full ratio chart, see our guide on{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              Etsy print ratios
            </Link>
            .
          </p>
        </section>

        {/* ===== CTA 1 ===== */}
        <div className="mb-20 md:mb-24">
          <ContextualCTA
            problem="A wedding suite covers 10+ pieces across four different ratio families. Resizing each one by hand is hours per listing."
            solution="Upload each design once to SnapToSize and get every required size — 5×7 invite, 4×6 RSVP, 4×9 menu, 18×24 sign, 24×36 seating chart — in one 300 DPI ZIP under 20MB."
            appUrl="https://app.snaptosize.com?source=seo_etsy-wedding-printable-sizes&kind=guide"
            buttonText="Resize your whole wedding suite →"
          />
        </div>

        {/* ===== VISUAL: Styled wedding table lifestyle ===== */}
        <figure className="mb-20 md:mb-24">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30">
            <Image
              src="/assets/visuals/etsy-wedding-printable-sizes-lifestyle.jpg"
              alt="Styled wedding reception table with invitation, menu card, and place card in warm golden light"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-xs text-muted-foreground text-center mt-3">
            How the suite reads on a styled reception table — invite, menu, place card sized to fit together.
          </figcaption>
        </figure>

        {/* ===== SECTION 3: What to bundle ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What to bundle for an Etsy wedding listing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wedding buyers compare listings on size coverage before they compare on design. A listing with "5×7 only" sits below a listing with "5×7, 4×6, A5, A6, 8.5×11, A4" — even if the second seller charges $5 more.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Recommended bundle per piece type:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Invitation:</strong> 5×7 + A5 (always). Add 4×6 if your design suits it.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>RSVP / details / thank-you:</strong> 4×6 + A6 + 3.5×5. Three small-card variants cover every envelope.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Menu / program:</strong> 5×7 + 4×9 + 8.5×11 (half-fold) + A4.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Welcome sign:</strong> 18×24 + 24×36. Both ratios differ (3:4 and 2:3) so each needs its own file.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Seating chart:</strong> 18×24 + 24×36 + 30×40. Guest-count determines which size the buyer needs.</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For conversion data on size coverage, see{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to include in an Etsy printable listing
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 4: 20MB limit on signs ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Keeping welcome signs and seating charts under the 20MB limit
          </h2>
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-lg p-4 flex gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200/80">
              <strong>Where sellers trip up:</strong> A 24×36 welcome sign at 300 DPI is 7200×10800 pixels. Exported as a high-quality JPEG with heavy floral backgrounds, a single file can hit 25–30MB — over Etsy's 20MB upload cap.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fixes that don't hurt print quality:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span>Export at JPEG quality 90 instead of 100 — visually identical on a printed 24×36 sign, but typically cuts file size 40–60%.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span>Use sRGB, not CMYK — home and Staples printers convert from sRGB anyway. CMYK files are often 25% larger.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span>Split invite suite and sign suite into separate listings — don't try to stuff 10+ sizes plus a 24×36 sign into one 20MB ZIP.</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For the full limit-avoidance playbook, see{" "}
            <Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">
              Etsy's 20MB file limit — what to do when your files are too big
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 5: File formats ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            File formats for wedding printables
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wedding printables divide cleanly into two format categories based on how the buyer will use them:
          </p>
          <div className="space-y-4 mb-4">
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">PDF — invitations, RSVPs, menus, programs</h3>
              <p className="text-sm text-muted-foreground">
                PDF is the preferred format for any piece the buyer will edit through Corjl, Templett, or Canva. It preserves fonts, layers, and text editability. Include PDF + high-res JPEG so non-template buyers can print as-is.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-5">
              <h3 className="font-semibold text-foreground mb-2">JPEG — signs, seating charts, table numbers</h3>
              <p className="text-sm text-muted-foreground">
                Large-format pieces that go straight to a print shop are simpler as JPEG. Staples, FedEx Office, and Office Depot kiosks prefer JPEG for poster uploads. Use 300 DPI, sRGB, quality 90.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For a full breakdown of format choices per piece type, see{" "}
            <Link href="/best-file-format-etsy-printables" className="text-accent-light hover:underline">
              best file format for Etsy printables
            </Link>{" "}
            and{" "}
            <Link href="/what-files-to-include-etsy-digital-download" className="text-accent-light hover:underline">
              what files to include in an Etsy digital download
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 6: Print shop considerations ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frame and print-shop considerations
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wedding printables split between home printing and print-shop printing — and your files need to match either workflow.
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Home printing (US):</strong> Menus, programs, details cards printed on 8.5×11 US Letter paper and cut to size.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Home printing (EU/UK):</strong> Same pieces, but on A4 paper. Do NOT assume US Letter will print on A4 — it won't.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Print shops (US):</strong> Staples and FedEx Office engineering prints at 18×24, 24×36. JPEG input preferred.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Professional stationers:</strong> Buyers who upgrade to letterpress or thick cardstock send files to specialist printers. Include a CMYK-ready PDF variant for this rare-but-high-value use case.</span>
            </li>
          </ul>
        </section>

        {/* ===== CTA 2: FinalCTA ===== */}
        <div className="mb-20 md:mb-24">
          <FinalCTA
            heading="Ship every wedding size in one upload."
            stat="10+ pieces. One pack."
            description="Upload each wedding design once — SnapToSize delivers 5×7 invites, 4×6 RSVPs, 4×9 menus, 18×24 signs, 24×36 seating charts and every ISO alternate, all at 300 DPI in a ZIP under Etsy's 20MB limit."
            appUrl="https://app.snaptosize.com?source=seo_etsy-wedding-printable-sizes&kind=guide"
            buttonText="Resize your wedding suite free →"
          />
        </div>

        {/* ===== FAQ ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* ===== RELATED PAGES ===== */}
        <RelatedPages currentSlug="etsy-wedding-printable-sizes" />
      </div>
    </>
  );
}
