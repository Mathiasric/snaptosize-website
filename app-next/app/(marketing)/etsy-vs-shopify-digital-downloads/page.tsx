import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Check, X, DollarSign, Globe, Package } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy vs Shopify for Digital Downloads (2026 Guide)",
  description:
    "Etsy vs Shopify for selling digital downloads: fees, automatic file delivery, traffic, and audience ownership compared — plus how to size files for both.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-vs-shopify-digital-downloads",
  },
  openGraph: {
    title: "Etsy vs Shopify for Digital Downloads (2026 Guide)",
    description:
      "Fees, automatic file delivery, built-in traffic, and audience ownership compared — plus how to package print files for both platforms.",
    url: "https://snaptosize.com/etsy-vs-shopify-digital-downloads",
    type: "article",
    images: [
      {
        url: "/assets/og/etsy-vs-shopify-digital-downloads.png",
        width: 1200,
        height: 630,
        alt: "Etsy vs Shopify comparison for selling digital downloads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy vs Shopify for Digital Downloads (2026 Guide)",
    description:
      "Fees, file delivery, traffic, and audience ownership compared for digital download sellers.",
    images: ["/assets/og/etsy-vs-shopify-digital-downloads.png"],
  },
};

export default function EtsyVsShopifyDigitalDownloadsPage() {
  const appUrl =
    "https://app.snaptosize.com/app/quick-export?source=seo_etsy-vs-shopify-digital-downloads&kind=comparison";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy vs Shopify for Digital Downloads (2026 Guide)",
    description:
      "Etsy vs Shopify for selling digital downloads: fees, automatic file delivery, traffic, and audience ownership compared.",
    url: "https://snaptosize.com/etsy-vs-shopify-digital-downloads",
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
      logo: {
        "@type": "ImageObject",
        url: "https://snaptosize.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://snaptosize.com/etsy-vs-shopify-digital-downloads",
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
        name: "Guides",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Etsy vs Shopify for Digital Downloads",
        item: "https://snaptosize.com/etsy-vs-shopify-digital-downloads",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "Is Etsy or Shopify better for selling digital downloads?",
      answer:
        "Etsy is better when you're starting out or rely on discovery — it has roughly 96 million active buyers and native digital-file delivery built in, so a listing can make sales without any audience of your own. Shopify is better once you have steady sales or your own traffic: you pay a flat monthly fee instead of a per-sale cut, and you own the customer relationship (emails, remarketing, repeat sales). Many sellers run both — Etsy for discovery, Shopify for repeat buyers and brand.",
    },
    {
      question: "Does Shopify deliver digital files automatically?",
      answer:
        "Not on its own. Unlike Etsy — which has native digital delivery and emails the download link automatically after purchase — Shopify needs a digital-delivery app (Shopify's free Digital Downloads app, or third-party apps like Sky Pilot or SendOwl) to send files to buyers. It takes a few minutes to set up, but once installed it works automatically.",
    },
    {
      question:
        "What are the fees — Etsy vs Shopify on a $20 digital product?",
      answer:
        "Etsy charges $0.20 per listing + 6.5% transaction fee + payment processing (≈3% + $0.25 in the US). On a $20 sale you keep roughly $17.30 (≈86%), with no monthly cost. Shopify's Basic plan is $29/month flat; per sale you only pay payment processing (≈2.9% + $0.30), so you keep about $19.12 (≈96%) of each $20 sale. The catch: you have to cover that $29/month before you profit, so Shopify wins on margin only once your volume is high enough.",
    },
    {
      question: "Can I sell the same digital downloads on Etsy and Shopify?",
      answer:
        "Yes. Neither platform requires exclusivity for digital products, so you can list identical files on both at the same time. Most sellers use Etsy for marketplace discovery and Shopify as their owned storefront for repeat customers and email marketing. The files themselves are the same — only the storefront and delivery method differ.",
    },
    {
      question: "Do I need different print sizes for Etsy vs Shopify?",
      answer:
        "No — buyer expectations are the same on both. Whether someone buys from your Etsy listing or your Shopify store, they expect frame-ready sizes like 8×10, 5×7, 11×14, and 16×20 at 300 DPI, organized into ratio packs. The only practical difference is Etsy's 20MB-per-file limit, which forces you to split large packs into separate ZIPs; Shopify (via a delivery app) can host larger bundles. SnapToSize generates both from a single upload.",
    },
    {
      question: "When should I move from Etsy to Shopify?",
      answer:
        "Don't move — add. Keep Etsy for discovery and start a Shopify store once you have (a) consistent monthly sales that comfortably cover the $29/month plan, and (b) a way to drive your own traffic (email list, social following, or repeat customers). At that point Shopify's higher margin and audience ownership compound. Before then, Etsy's built-in traffic is worth far more than the fees you save.",
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

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B12] via-[#12101f] to-[#0B0B12]" />
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.05]"
            style={{
              background:
                "radial-gradient(circle, #2DD4BF 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-mono tracking-widest text-[#A78BFA]/70 uppercase mb-4">
                Platform Comparison
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Etsy vs Shopify for Digital Downloads:{" "}
                <span className="text-[#2DD4BF]">
                  Which Should You Sell On?
                </span>
              </h1>
              <p className="text-lg text-foreground-60 mb-6 max-w-xl">
                One has built-in buyers and automatic file delivery. The other
                gives you flat fees and full ownership of your customers.
                Here&apos;s how Etsy and Shopify compare for digital download
                sellers in 2026.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-foreground-60">
                <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-full">
                  <DollarSign className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  Fee math on a real sale
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-full">
                  <Globe className="w-3.5 h-3.5 text-[#A78BFA]" />
                  Traffic vs. ownership
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-full">
                  <Package className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  File delivery compared
                </span>
              </div>
            </div>

            {/* Right side visual — CSS-only comparison cards */}
            <div className="hidden md:flex flex-col gap-3">
              {[
                {
                  name: "Etsy",
                  color: "#F56B2A",
                  pros: ["96M+ buyers", "Native file delivery"],
                  cons: ["6.5% + listing fee", "No buyer emails"],
                },
                {
                  name: "Shopify",
                  color: "#95BF47",
                  pros: ["Flat $29/mo", "Own your customers"],
                  cons: ["No built-in traffic", "Needs delivery app"],
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: p.color }}
                    />
                    <span className="font-semibold text-sm">{p.name}</span>
                  </div>
                  <div className="flex gap-4 text-xs text-foreground-60">
                    <div className="flex-1 space-y-1">
                      {p.pros.map((pro) => (
                        <div key={pro} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#2DD4BF]" />
                          {pro}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 space-y-1">
                      {p.cons.map((con) => (
                        <div key={con} className="flex items-center gap-1">
                          <X className="w-3 h-3 text-red-400/60" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 1: QuickAnswer + Overview ==================== */}
      <section className="py-12 md:py-16">
        <Container>
          <QuickAnswer question="Should I sell digital downloads on Etsy or Shopify?">
            Start on <strong>Etsy</strong> if you don&apos;t have an audience yet —
            it brings ~96 million buyers and delivers files automatically, so you
            can make sales from day one (in exchange for a $0.20 listing fee +
            6.5% per sale). Move to or add <strong>Shopify</strong> once you have
            steady sales and your own traffic: a flat $29/month means you keep
            far more per sale and you own the customer relationship. Either way,
            buyers expect the same frame-ready{" "}
            <Link
              href="/etsy-print-sizes"
              className="text-[#2DD4BF] underline"
            >
              print sizes
            </Link>
            , and Etsy still enforces its{" "}
            <Link
              href="/etsy-20mb-file-limit"
              className="text-[#2DD4BF] underline"
            >
              20MB file limit
            </Link>{" "}
            — so your file-packaging step doesn&apos;t change much between them.
          </QuickAnswer>

          <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6">
            Etsy vs Shopify at a Glance
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            The core tradeoff is simple: Etsy rents you an audience, Shopify
            sells you a storefront. Etsy hands you traffic and built-in digital
            delivery but takes a cut of every sale and keeps the customer
            relationship. Shopify charges a flat monthly fee, gives you full
            control and customer data, but expects you to bring your own buyers.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 font-semibold text-foreground-60">
                    Feature
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">Etsy</th>
                  <th className="text-left py-3 px-4 font-semibold">Shopify</th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Monthly Cost
                  </td>
                  <td className="py-3 px-4">$0 (+ $0.20/listing)</td>
                  <td className="py-3 px-4">$29/mo (Basic plan)</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Transaction Fee
                  </td>
                  <td className="py-3 px-4">6.5% + payment processing</td>
                  <td className="py-3 px-4">
                    Payment processing only (~2.9% + $0.30)
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Built-in Traffic
                  </td>
                  <td className="py-3 px-4">
                    <Check className="w-4 h-4 text-[#2DD4BF] inline" /> 96M+
                    buyers
                  </td>
                  <td className="py-3 px-4">
                    <X className="w-4 h-4 text-red-400/60 inline" /> You bring it
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Digital File Delivery
                  </td>
                  <td className="py-3 px-4">Native, automatic</td>
                  <td className="py-3 px-4">Needs an app</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    File Limits
                  </td>
                  <td className="py-3 px-4">5 files × 20MB each</td>
                  <td className="py-3 px-4">Large (app-dependent)</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Customer Relationship
                  </td>
                  <td className="py-3 px-4">Etsy owns it (no buyer emails)</td>
                  <td className="py-3 px-4">You own it (email + remarketing)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">
                    Best For
                  </td>
                  <td className="py-3 px-4">
                    Beginners, discovery, passive sales
                  </td>
                  <td className="py-3 px-4">
                    Scaling, brand control, repeat buyers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-foreground-60 max-w-3xl">
            The right answer depends on where you are in your journey — not on
            which platform is &ldquo;better.&rdquo; A new seller listing{" "}
            <Link
              href="/etsy-print-sizes"
              className="text-[#2DD4BF] underline"
            >
              frame-ready print sizes
            </Link>{" "}
            needs Etsy&apos;s traffic far more than they need to save on fees.
            An established seller with an email list needs Shopify&apos;s margin
            and ownership.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 2: File Delivery + Sizes ==================== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            File Delivery: Plug-and-Play vs. Setup Required
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            This is the most practical day-one difference. Etsy has digital
            delivery built in — mark a listing as a digital product, upload your
            files, and Etsy emails the download link automatically after
            purchase. Shopify has no native delivery for digital products; you
            install an app to handle it.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 font-semibold text-foreground-60">
                    Platform
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Delivery Method
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    File Constraints
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Packaging Strategy
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Etsy
                  </td>
                  <td className="py-3 px-4">Native, automatic</td>
                  <td className="py-3 px-4">5 files, 20MB each</td>
                  <td className="py-3 px-4">
                    Group sizes by ratio into separate ZIPs, each under 20MB.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">
                    Shopify
                  </td>
                  <td className="py-3 px-4">
                    Digital Downloads / Sky Pilot app
                  </td>
                  <td className="py-3 px-4">Large bundles allowed</td>
                  <td className="py-3 px-4">
                    Can bundle every size into one comprehensive download.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card accent className="mb-8">
            <div className="p-6">
              <p className="text-sm font-medium mb-2 text-[#A78BFA]">
                What stays the same on both platforms
              </p>
              <p className="text-foreground-60 text-sm">
                The storefront changes, but the product doesn&apos;t. Buyers on
                both Etsy and Shopify expect the same frame-ready sizes at 300
                DPI, organized into ratio packs. On Etsy you split them into{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-[#2DD4BF] underline"
                >
                  ratio-based ZIPs under 20MB
                </Link>
                ; on Shopify you can ship one larger bundle. Producing those
                size packs by hand for every artwork is the same chore on either
                platform.
              </p>
            </div>
          </Card>

          <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6">
            Print Sizes Buyers Expect (Etsy and Shopify Alike)
          </h2>
          <p className="text-foreground-60 mb-6 max-w-3xl">
            Whichever storefront they buy from, customers are printing your art
            for their walls — so they need standard, frame-ready dimensions.
            Covering the common ratios is what turns a download into a happy,
            review-leaving customer.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#F56B2A" }}
                />
                Selling on Etsy
              </h3>
              <p className="text-sm text-foreground-60 mb-3">
                Buyers search for exact frame sizes and print at home or at a
                local shop. Clean ratio packs and clear naming win the sale.
              </p>
              <div className="text-sm text-foreground-60 space-y-1">
                <p>
                  <strong className="text-foreground">Include:</strong>{" "}
                  <Link
                    href="/etsy-8x10-print-size"
                    className="text-[#2DD4BF] underline"
                  >
                    8×10
                  </Link>
                  ,{" "}
                  <Link
                    href="/etsy-5x7-print-size"
                    className="text-[#2DD4BF] underline"
                  >
                    5×7
                  </Link>
                  ,{" "}
                  <Link
                    href="/etsy-16x20-print-size"
                    className="text-[#2DD4BF] underline"
                  >
                    16×20
                  </Link>
                  , 11×14, 24×36
                </p>
                <p>
                  <strong className="text-foreground">Format:</strong> JPEG/PNG
                  at 300 DPI
                </p>
                <p>
                  <strong className="text-foreground">Key:</strong> Ratio-organized
                  ZIPs under 20MB
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#95BF47" }}
                />
                Selling on Shopify
              </h3>
              <p className="text-sm text-foreground-60 mb-3">
                Same frame sizes, fewer constraints. You can deliver one larger
                bundle covering every ratio plus a high-resolution master file.
              </p>
              <div className="text-sm text-foreground-60 space-y-1">
                <p>
                  <strong className="text-foreground">Include:</strong> Every
                  ratio pack (2:3, 3:4, 4:5, ISO) in one download
                </p>
                <p>
                  <strong className="text-foreground">Format:</strong> JPEG/PNG
                  at 300 DPI + optional master
                </p>
                <p>
                  <strong className="text-foreground">Key:</strong> Bundle once,
                  no 20MB split needed
                </p>
              </div>
            </div>
          </div>

          <p className="text-foreground-60 max-w-3xl">
            The takeaway: the file work is nearly identical. Decide{" "}
            <Link
              href="/how-many-sizes-etsy-printable"
              className="text-[#2DD4BF] underline"
            >
              how many sizes to offer
            </Link>
            , generate them once, then package tighter for Etsy and looser for
            Shopify.
          </p>
        </Container>
      </section>

      {/* ==================== CTA 1 ==================== */}
      <section className="py-10">
        <Container>
          <ContextualCTA
            problem="Selling on Etsy and Shopify both?"
            solution="Upload one high-res file and get every frame-ready size — Etsy-compliant ZIPs under 20MB plus a full bundle for your Shopify store, all from a single export."
            buttonText="Generate All Sizes Free"
            appUrl={appUrl}
          />
        </Container>
      </section>

      {/* ==================== SECTION 3: Fees + Traffic ==================== */}
      <section className="py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Fees: What You Actually Keep
          </h2>
          <p className="text-foreground-60 mb-6 max-w-3xl">
            Here&apos;s what you take home on a $20 digital art pack on each
            platform. Etsy charges per sale; Shopify charges a flat monthly fee,
            so the math flips depending on your volume.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 font-semibold text-foreground-60">
                    Cost Item
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">Etsy</th>
                  <th className="text-left py-3 px-4 font-semibold">Shopify</th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Sale Price
                  </td>
                  <td className="py-3 px-4">$20.00</td>
                  <td className="py-3 px-4">$20.00</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Listing Fee
                  </td>
                  <td className="py-3 px-4">−$0.20</td>
                  <td className="py-3 px-4">$0</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Transaction Fee
                  </td>
                  <td className="py-3 px-4">−$1.30 (6.5%)</td>
                  <td className="py-3 px-4">$0</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Payment Processing
                  </td>
                  <td className="py-3 px-4">−$0.85 (3% + $0.25)</td>
                  <td className="py-3 px-4">−$0.88 (2.9% + $0.30)</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Monthly Plan
                  </td>
                  <td className="py-3 px-4">$0</td>
                  <td className="py-3 px-4">$29/mo (spread across sales)</td>
                </tr>
                <tr className="bg-white/[0.03]">
                  <td className="py-3 px-4 font-semibold text-foreground">
                    You Keep (per sale)
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#2DD4BF]">
                    ~$17.65 (88%)
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#2DD4BF]">
                    ~$19.12 (96%)*
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-foreground-60 mb-10 max-w-3xl text-sm">
            *Before the monthly plan. Shopify&apos;s $29/month is a fixed cost
            you carry regardless of sales — so at 5 sales/month it eats ~$5.80
            per sale (wiping out the margin advantage), while at 100 sales/month
            it&apos;s only ~$0.29 per sale. Shopify wins on fees only after you
            clear roughly{" "}
            <strong className="text-foreground">15–20 sales a month</strong> at
            this price point. Below that, Etsy&apos;s pay-per-sale model is
            cheaper — and it brings the traffic.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6">
            Traffic and Ownership: The Real Decision
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            Fees are the easy part. The bigger question is where your customers
            come from — and who gets to keep them.
          </p>

          <div className="space-y-6 mb-10">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Etsy: borrowed traffic, rented customers
              </h3>
              <p className="text-sm text-foreground-60">
                Etsy&apos;s search puts your art in front of ~96 million active
                buyers, so new sellers can make sales without any audience. The
                cost: Etsy owns the customer. You can&apos;t email buyers
                directly or build a marketing list, and you&apos;re competing
                with similar listings on every results page. Your{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-[#2DD4BF] underline"
                >
                  listing SEO
                </Link>{" "}
                matters more than your brand.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Shopify: your traffic, your customers
              </h3>
              <p className="text-sm text-foreground-60">
                Shopify has no marketplace — every visitor comes from your own
                marketing (social, email, ads, or SEO). The upside is total
                ownership: you collect buyer emails, can remarket, run your own
                promotions, and build a brand that isn&apos;t one algorithm
                change away from disappearing. That ownership is what lets
                established sellers scale past Etsy&apos;s ceiling.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== CTA 2 ==================== */}
      <section className="py-10 bg-white/[0.02]">
        <Container>
          <ContextualCTA
            problem="Resizing the same art twice for two stores is a waste of time"
            solution="SnapToSize turns one upload into every size you need — Etsy-ready ZIPs under 20MB and a full Shopify bundle, named and set to 300 DPI."
            buttonText="Try the Free Tier"
            appUrl={appUrl}
          />
        </Container>
      </section>

      {/* ==================== SECTION 4: Decision Guide ==================== */}
      <section className="py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Which Should You Choose?
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            Your best move depends on whether you already have an audience and
            how consistent your sales are. Here&apos;s the short version.
          </p>

          <div className="space-y-4 mb-10">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                No audience yet → Etsy first
              </h3>
              <p className="text-sm text-foreground-60">
                Etsy&apos;s marketplace traffic is the single biggest advantage
                for a new seller. Skip the monthly fee, get discovered, and
                focus on{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-[#2DD4BF] underline"
                >
                  optimizing your listings
                </Link>{" "}
                and nailing your{" "}
                <Link
                  href="/how-to-price-etsy-printables"
                  className="text-[#2DD4BF] underline"
                >
                  pricing
                </Link>
                .
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Steady sales + your own traffic → add Shopify
              </h3>
              <p className="text-sm text-foreground-60">
                Once you&apos;re clearing the $29/month easily and can drive
                visitors yourself, a Shopify store lets you keep ~96% of each
                sale and own the customer for repeat business and email
                marketing.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Want to scale → run both
              </h3>
              <p className="text-sm text-foreground-60">
                The most common setup for established sellers: Etsy for discovery
                and new customers, Shopify for repeat buyers and higher margins.
                List the same files on both — the only difference is{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-[#2DD4BF] underline"
                >
                  how you package them
                </Link>
                . Generate every{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-[#2DD4BF] underline"
                >
                  ratio pack
                </Link>{" "}
                once and reuse across both stores.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== FinalCTA ==================== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <FinalCTA
            heading="One upload. Both storefronts covered."
            stat="Every frame-ready size from a single artwork — ratio-organized, 300 DPI, and under 20MB for Etsy"
            description="Stop resizing the same art twice. SnapToSize generates Etsy-ready ZIPs and full Shopify bundles from one export."
            appUrl={`${appUrl}&kind=cta`}
          />

          {/* ==================== FAQ ==================== */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* ==================== RelatedPages ==================== */}
      <section className="py-14">
        <Container>
          <RelatedPages currentSlug="etsy-vs-shopify-digital-downloads" />
        </Container>
      </section>
    </>
  );
}
