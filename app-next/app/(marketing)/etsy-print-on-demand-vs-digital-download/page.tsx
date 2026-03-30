import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, ArrowRight, X } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title:
    "Print on Demand vs Digital Downloads on Etsy",
  description:
    "Compare print on demand vs digital downloads for Etsy sellers. See real profit margins, fulfillment differences, and which model works best for wall art.",
  alternates: {
    canonical:
      "https://snaptosize.com/etsy-print-on-demand-vs-digital-download",
  },
  openGraph: {
    title:
      "Print on Demand vs Digital Downloads on Etsy — Which Is More Profitable?",
    description:
      "POD margins: 15-50%. Digital download margins: 75-82%. Compare both models honestly and find out which one fits your Etsy shop.",
    url: "https://snaptosize.com/etsy-print-on-demand-vs-digital-download",
    images: [
      {
        url: "/assets/og/etsy-print-on-demand-vs-digital-download.png",
        width: 1200,
        height: 630,
        alt: "Etsy Print on Demand vs Digital Downloads comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print on Demand vs Digital Downloads on Etsy",
    description:
      "POD margins: 15-50%. Digital download margins: 75-82%. An honest comparison for Etsy wall art sellers.",
    images: ["/assets/og/etsy-print-on-demand-vs-digital-download.png"],
  },
};

export default function PrintOnDemandVsDigitalDownloadPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Print on Demand vs Digital Downloads on Etsy — Which Is More Profitable?",
    description:
      "Compare print on demand and digital downloads for Etsy sellers. Real profit margins, fulfillment differences, and which model works best for wall art.",
    url: "https://snaptosize.com/etsy-print-on-demand-vs-digital-download",
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
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
        name: "Print on Demand vs Digital Downloads",
        item: "https://snaptosize.com/etsy-print-on-demand-vs-digital-download",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "Which is more profitable on Etsy — print on demand or digital downloads?",
      answer:
        "Digital downloads are significantly more profitable per sale. Etsy charges a $0.20 listing fee, 6.5% transaction fee, and 3% + $0.25 payment processing on every sale — roughly 10-18% depending on price point. Since digital downloads have zero production or shipping costs, sellers keep 75-82% of the listing price. Print on demand sellers keep 15-50% after production, shipping, and the same Etsy fees. However, POD items command higher prices ($30-80 vs $3-10), so total revenue depends on volume and pricing strategy.",
    },
    {
      question: "Can I sell both print on demand and digital downloads on Etsy?",
      answer:
        "Yes, and many successful sellers do. You can offer a digital download listing with print-ready files and a separate POD listing for buyers who want a physical product shipped to them. This covers both customer types. The digital download listing requires no fulfillment from you, while the POD listing is handled by your print partner.",
    },
    {
      question:
        "How many sizes should I include in a digital download listing?",
      answer:
        "Top-selling digital download listings include sizes across multiple aspect ratios — 2:3, 3:4, 4:5, ISO A-series, and common extras like 5x7 and 11x14. More sizes means more buyers can use your art with their existing frames. The most competitive listings offer 30+ sizes.",
    },
    {
      question:
        "What are the biggest downsides of print on demand for Etsy sellers?",
      answer:
        "The main downsides are lower profit margins (15-50% on paper prints, more on canvas), no control over print quality or shipping speed, handling customer complaints about fulfillment issues you did not cause, and the risk of your POD provider changing prices or discontinuing products. You also cannot offer instant delivery — buyers wait days or weeks for shipping.",
    },
    {
      question: "Do I need design skills to sell digital downloads on Etsy?",
      answer:
        "You need to be able to create or source artwork, but the production side — resizing into multiple print sizes, organizing files, and packaging for delivery — can be automated. Tools like SnapToSize handle the resizing step, turning one master file into 30+ print-ready sizes across all standard ratios.",
    },
    {
      question:
        "What is the hardest part of selling digital downloads on Etsy?",
      answer:
        "The two biggest challenges are file preparation (creating all the sizes buyers expect) and customer support (buyers occasionally need help printing files). File preparation is the more time-consuming one — each artwork needs to be resized into multiple aspect ratios and sizes, which can take hours manually. Automating this step is key to scaling a digital download shop.",
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
    "https://app.snaptosize.com?source=seo_pod_vs_digital&kind=guide";

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
        className="relative pt-[8vh] md:pt-[12vh] pb-16 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0a0c14 0%, #0e1120 25%, #0d0f1a 50%, #111428 75%, #0a0c14 100%)",
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient mesh — warm amber accent top right (POD side) */}
        <div
          className="absolute top-[-15%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent 70%)",
          }}
        />
        {/* Teal accent — bottom left (Digital side) */}
        <div
          className="absolute bottom-[-20%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #2dd4bf, transparent 70%)",
          }}
        />

        {/* CSS-only VS comparison visual — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "320px", height: "360px" }}
          >
            {/* POD side — top left */}
            <div
              className="absolute rounded-lg border p-4"
              style={{
                width: "140px",
                top: "0px",
                left: "0px",
                borderColor: "rgba(245,158,11,0.2)",
                background: "rgba(245,158,11,0.04)",
              }}
            >
              {/* Package icon */}
              <div
                className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                <div
                  className="w-5 h-5 rounded"
                  style={{
                    background: "rgba(245,158,11,0.25)",
                    border: "1px dashed rgba(245,158,11,0.35)",
                  }}
                />
              </div>
              <div
                className="text-[9px] font-mono tracking-wider text-center mb-2"
                style={{ color: "rgba(245,158,11,0.5)" }}
              >
                PRINT ON DEMAND
              </div>
              {/* Margin bar */}
              <div
                className="h-1.5 rounded-full mb-1"
                style={{ background: "rgba(245,158,11,0.08)" }}
              >
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: "25%",
                    background: "rgba(245,158,11,0.3)",
                  }}
                />
              </div>
              <div
                className="text-[8px] font-mono text-right"
                style={{ color: "rgba(245,158,11,0.35)" }}
              >
                15-50% margin
              </div>
            </div>

            {/* VS divider */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                top: "55px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold tracking-wider"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                VS
              </div>
            </div>

            {/* Digital side — top right */}
            <div
              className="absolute rounded-lg border p-4"
              style={{
                width: "140px",
                top: "0px",
                right: "0px",
                borderColor: "rgba(45,212,191,0.2)",
                background: "rgba(45,212,191,0.04)",
              }}
            >
              {/* Download icon */}
              <div
                className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                style={{
                  background: "rgba(45,212,191,0.1)",
                  border: "1px solid rgba(45,212,191,0.2)",
                }}
              >
                <ArrowRight
                  className="w-4 h-4 rotate-90"
                  style={{ color: "rgba(45,212,191,0.5)" }}
                />
              </div>
              <div
                className="text-[9px] font-mono tracking-wider text-center mb-2"
                style={{ color: "rgba(45,212,191,0.5)" }}
              >
                DIGITAL DOWNLOAD
              </div>
              {/* Margin bar */}
              <div
                className="h-1.5 rounded-full mb-1"
                style={{ background: "rgba(45,212,191,0.08)" }}
              >
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: "90%",
                    background: "rgba(45,212,191,0.35)",
                  }}
                />
              </div>
              <div
                className="text-[8px] font-mono text-right"
                style={{ color: "rgba(45,212,191,0.35)" }}
              >
                75-82% margin
              </div>
            </div>

            {/* Bottom comparison summary */}
            <div
              className="absolute rounded border flex flex-col items-center gap-1 px-4 py-3"
              style={{
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
                width: "260px",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "rgba(245,158,11,0.4)" }}
                  />
                  <span
                    className="text-[8px] font-mono"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    Physical product
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "rgba(45,212,191,0.5)" }}
                  />
                  <span
                    className="text-[8px] font-mono"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    Instant delivery
                  </span>
                </div>
              </div>
              <div
                className="text-[8px] font-mono tracking-wider"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                SAME ARTWORK &bull; DIFFERENT MODELS
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-teal-400/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-teal-300/60 uppercase">
                Comparison Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 text-white">
                Print on Demand vs Digital Downloads on Etsy
              </span>
              <span className="block text-lg md:text-xl lg:text-2xl font-semibold text-white/70">
                Which model actually makes more money for wall&nbsp;art
                sellers?
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/50 mb-8 max-w-lg leading-relaxed">
              Both business models work on Etsy. But the profit margins,
              time investment, and scaling potential are very different.
              Here&apos;s an honest breakdown to help you decide.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Try SnapToSize Free
                </Button>
              </a>
              <p className="text-sm text-white/35 mt-2">
                Already selling digital? Get 30+ sizes from one upload.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span className="font-medium text-white/60">
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span className="font-medium text-white/60">
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  borderColor: "rgba(45,212,191,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#2dd4bf" }}
                />
                <span className="font-medium text-white/60">
                  Portrait, landscape &amp; square
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
            {/* --- Section: What is Print on Demand? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Is Print on Demand?
              </h2>
              <p className="text-foreground-60 mb-4">
                Print on demand (POD) means a third-party company prints and
                ships physical products to your customers. You upload your
                artwork to a POD provider like Printful, Printify, or Gooten,
                and when someone buys from your Etsy shop, the provider
                handles printing, packaging, and shipping directly to the
                buyer.
              </p>
              <p className="text-foreground-60 mb-4">
                You never touch the product. You never hold inventory. The
                trade-off is that the POD provider takes a significant cut of
                each sale for production and fulfillment.
              </p>
              <p className="text-foreground-60">
                For wall art specifically, POD providers print your design on
                paper, canvas, or framed prints and ship them worldwide. The
                buyer gets a physical product delivered to their door.
              </p>
            </div>

            {/* --- Section: What are Digital Downloads? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Are Digital Downloads?
              </h2>
              <p className="text-foreground-60 mb-4">
                Digital downloads are files that buyers purchase and download
                instantly. For wall art, this typically means high-resolution
                image files (JPG or PNG) that buyers print themselves at home,
                at a local print shop, or through an online printing service.
              </p>
              <p className="text-foreground-60 mb-4">
                There is no physical fulfillment. Once you create and upload
                the files to your Etsy listing, every sale is automated. The
                buyer pays, Etsy delivers the files immediately, and you
                collect the revenue minus Etsy&apos;s standard fees.
              </p>
              <p className="text-foreground-60">
                The key challenge with digital downloads is{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  file preparation
                </Link>
                . Buyers expect multiple sizes so the art fits their specific
                frame. A single-size listing limits your audience to buyers
                with that exact frame. Learn more about{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to sell digital downloads on Etsy
                </Link>
                .
              </p>
            </div>

            {/* --- Section: Side-by-side comparison table --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Side-by-Side Comparison: POD vs Digital Downloads
              </h2>
              <p className="text-foreground-60 mb-6">
                Here is how the two models compare on the factors that matter
                most for Etsy wall art sellers.
              </p>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Factor
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Print on Demand
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Digital Downloads
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Profit margin
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        20&ndash;45% after production &amp; shipping
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        75&ndash;85% after Etsy fees only
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Fulfillment
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Provider handles printing &amp; shipping
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Fully automated &mdash; instant delivery
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Delivery time
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3&ndash;14 days (shipping dependent)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Instant &mdash; buyer downloads immediately
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Upfront setup
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Upload to POD provider, set prices
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Prepare multiple file sizes, package &amp; upload
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Inventory risk
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" /> None
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" /> None
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Quality control
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <X className="w-4 h-4 text-red-400/60 inline" /> No
                        control over print &amp; packaging
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        <Check className="w-4 h-4 text-teal-400 inline" /> You
                        control exact file output
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Returns &amp; complaints
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        You handle complaints for issues you didn&apos;t cause
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Rare &mdash; buyers get exactly what was listed
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Scaling effort
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Add designs to POD catalog
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Prepare files once, sell forever
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">
                        Passive income potential
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Moderate &mdash; still handle support
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        High &mdash; zero per-sale work
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile card layout */}
              <div className="md:hidden space-y-3 mb-6">
                {[
                  { factor: "Profit margin", pod: "20\u201345%", digital: "75\u201385%" },
                  { factor: "Fulfillment", pod: "Provider handles", digital: "Instant \u2014 automated" },
                  { factor: "Delivery time", pod: "3\u201314 days", digital: "Instant download" },
                  { factor: "Upfront setup", pod: "Upload to provider", digital: "Prepare file sizes" },
                  { factor: "Inventory risk", pod: "None", digital: "None" },
                  { factor: "Quality control", pod: "No control", digital: "Full control" },
                  { factor: "Returns", pod: "Handle for print issues", digital: "Rare" },
                  { factor: "Scaling", pod: "Add to catalog", digital: "Sell forever once set up" },
                  { factor: "Passive income", pod: "Moderate", digital: "High" },
                ].map((row, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                      {row.factor}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] text-foreground-60 mb-1 uppercase tracking-wider">
                          POD
                        </p>
                        <p className="text-sm text-foreground-60">
                          {row.pod}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-foreground-60 mb-1 uppercase tracking-wider">
                          Digital
                        </p>
                        <p className="text-sm text-foreground">
                          {row.digital}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* --- Section: Profit margin breakdown --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Profit Margin Breakdown
              </h2>
              <p className="text-foreground-60 mb-4">
                This is where the difference becomes stark. Etsy charges the
                same fees on both models: a $0.20 listing fee, 6.5%
                transaction fee, and 3%&nbsp;+&nbsp;$0.25 payment processing.
                For physical items, those percentages also apply to shipping.
              </p>
              <p className="text-foreground-60 mb-6">
                Here is a real breakdown for an 18&times;24 wall art print
                using Printify Premium as the POD provider.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5">
                  <h3
                    className="font-semibold mb-3 text-sm"
                    style={{ color: "rgba(245,158,11,0.9)" }}
                  >
                    POD Paper Print &mdash; $14.99 + $5.99 Shipping
                  </h3>
                  <div className="space-y-2 text-sm text-foreground-60">
                    <div className="flex justify-between">
                      <span>Sale price + shipping</span>
                      <span>$20.98</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Listing fee</span>
                      <span>&minus;$0.20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transaction fee (6.5%)</span>
                      <span>&minus;$1.36</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment processing (3% + $0.25)</span>
                      <span>&minus;$0.88</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Production (18&times;24 poster)</span>
                      <span>&minus;$6.40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping to buyer</span>
                      <span>&minus;$4.69</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 font-semibold text-foreground">
                      <span>Your profit</span>
                      <span>$7.45 (35%)</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <h3
                    className="font-semibold mb-3 text-sm"
                    style={{ color: "#2dd4bf" }}
                  >
                    Digital Download &mdash; $4.99 Sale
                  </h3>
                  <div className="space-y-2 text-sm text-foreground-60">
                    <div className="flex justify-between">
                      <span>Sale price</span>
                      <span>$4.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Listing fee</span>
                      <span>&minus;$0.20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transaction fee (6.5%)</span>
                      <span>&minus;$0.32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment processing (3% + $0.25)</span>
                      <span>&minus;$0.40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Production &amp; shipping</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 font-semibold text-foreground">
                      <span>Your profit</span>
                      <span>$4.07 (82%)</span>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60 mb-4">
                The breakdown above shows best-case margins (no offsite
                ads). In practice, Etsy&apos;s offsite ads program takes
                an additional 15% on attributed sales (12% and mandatory
                once you earn over $10K/year). Roughly 15&ndash;25% of
                sales typically come through offsite ads, which drops
                the blended digital margin to around 75&ndash;78%.
              </p>
              <p className="text-foreground-60 mb-4">
                Even with that, the digital download is priced 3&times;
                lower but delivers more than half the profit per sale.
                And every additional sale is almost pure profit &mdash;
                no production costs, ever.
              </p>
              <p className="text-foreground-60 mb-4">
                POD margins vary widely depending on product type and
                provider. Paper posters at $15&ndash;$20 might yield
                15&ndash;35%. Canvas prints at $40+ can reach
                45&ndash;50%. Whether you or the buyer pays shipping
                makes a significant difference.
              </p>
              <p className="text-foreground-60">
                For more on pricing strategy, see our guide on{" "}
                <Link
                  href="/how-to-price-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  how to price Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* --- Section: When POD makes sense --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                When Print on Demand Makes Sense
              </h2>
              <p className="text-foreground-60 mb-4">
                POD is not a bad model. It has genuine strengths that make it
                the right choice in certain situations.
              </p>
              <div className="space-y-3 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Buyers who want a finished product
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Some buyers do not want to deal with downloading files,
                    finding a printer, and choosing paper stock. They want to
                    order a print and have it show up at their door. POD serves
                    this customer directly.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Products beyond wall art
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    If you sell mugs, t-shirts, phone cases, or tote bags, POD
                    is the only practical option unless you want to hold
                    inventory. Digital downloads are limited to printable
                    files.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    No file preparation skills
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    With POD, you upload one design and the provider handles
                    sizing for their products. You do not need to create
                    multiple file sizes or understand aspect ratios and DPI.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Higher perceived value
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Physical products command higher prices. A framed canvas
                    print can sell for $40&ndash;$80, while the same artwork
                    as a digital download might sell for $3&ndash;$8. The
                    margins are lower, but the price point is higher.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Section: When digital downloads win --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                When Digital Downloads Win
              </h2>
              <p className="text-foreground-60 mb-4">
                For most wall art sellers, digital downloads are the stronger
                model. Here is why.
              </p>
              <div className="space-y-3 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    True passive income
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Once the files are uploaded, you do zero work per sale.
                    No checking orders, no tracking shipments, no responding
                    to &ldquo;where is my package?&rdquo; messages. The
                    listing generates revenue while you sleep.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    No fulfillment headaches
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    POD sellers regularly deal with print quality issues,
                    shipping delays, lost packages, and returns they did not
                    cause. Digital download sellers avoid all of this. The
                    buyer gets exactly what was listed, instantly.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Unlimited scaling
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Selling 10 copies or 10,000 copies requires the same
                    effort: zero. There is no production bottleneck, no
                    shipping delays during holidays, and no provider capacity
                    limits.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Dramatically higher margins
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Keeping 75&ndash;82% of each sale versus 15&ndash;50%
                    means digital downloads need fewer sales to be
                    profitable. A digital shop with 200 sales/month at $5
                    earns roughly $750&ndash;$810 in profit with zero
                    per-sale work. A POD paper print shop at the same
                    volume needs $15+ pricing and favorable shipping
                    terms to match that &mdash; and every order requires
                    fulfillment oversight.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold text-sm mb-2">
                    Global reach without shipping concerns
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    International shipping adds cost and complexity to POD.
                    Digital downloads reach buyers worldwide instantly. A
                    customer in Australia gets the same experience as a
                    customer in New York. Including{" "}
                    <Link
                      href="/etsy-a4-print-size"
                      className="text-accent-light hover:underline"
                    >
                      ISO sizes like A4
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/etsy-a3-print-size"
                      className="text-accent-light hover:underline"
                    >
                      A3
                    </Link>{" "}
                    ensures international buyers can use your files.
                  </p>
                </Card>
              </div>
              <p className="text-foreground-60 text-sm">
                If your{" "}
                <Link
                  href="/etsy-digital-download-not-selling"
                  className="text-accent-light hover:underline"
                >
                  digital downloads are not selling
                </Link>
                , the issue is usually not the model itself &mdash;
                it&apos;s often missing sizes, weak SEO, or poor mockup
                images.
              </p>
            </div>

            {/* --- Section: The file preparation challenge --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The File Preparation Challenge
              </h2>
              <p className="text-foreground-60 mb-4">
                The one real advantage POD has over digital downloads is
                simplicity. You upload one file, and the provider handles the
                rest. With digital downloads, you need to prepare the files
                yourself.
              </p>
              <p className="text-foreground-60 mb-4">
                For a competitive listing, buyers expect files in multiple
                aspect ratios and sizes. That means your one artwork needs to
                become files in{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  all standard print sizes
                </Link>{" "}
                &mdash; 2:3, 3:4, 4:5, ISO A-series, and common extras like{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7
                </Link>
                ,{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>
                , and{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>
                .
              </p>
              <p className="text-foreground-60 mb-4">
                Doing this{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  manually
                </Link>{" "}
                takes 1&ndash;3 hours per artwork.
                Multiply that across a catalog of 50+ designs and you are
                looking at hundreds of hours of repetitive resizing work.
                This is the single biggest bottleneck for digital download
                sellers &mdash; and the reason some choose POD instead.
              </p>
              <p className="text-foreground-60">
                To understand exactly{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes you need
                </Link>{" "}
                and{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to package them for Etsy
                </Link>
                , see our dedicated guides.
              </p>
            </div>

            {/* --- Section: Can you do both? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Can You Do Both? The Hybrid Approach
              </h2>
              <p className="text-foreground-60 mb-4">
                Yes &mdash; and many successful Etsy sellers do. The strategy
                is straightforward: offer a digital download listing with
                all the file sizes buyers need, and a separate POD listing
                for the same artwork as a physical product.
              </p>
              <p className="text-foreground-60 mb-4">
                The digital listing captures buyers who want to print
                themselves (higher margins for you). The POD listing captures
                buyers who want a finished product shipped to them (lower
                margins, but additional revenue).
              </p>
              <p className="text-foreground-60">
                The digital listing typically requires more upfront file
                preparation but generates better margins long term. The POD
                listing is easier to set up but generates less profit per
                sale. Together, you cover both customer segments without
                leaving money on the table.
              </p>
            </div>

            {/* --- FinalCTA --- */}
            <FinalCTA
              heading="Skip the Resizing Bottleneck"
              stat="70 print-ready files from one upload — all 5 ratio packs"
              description="The biggest obstacle to selling digital downloads is file preparation. SnapToSize eliminates it. Upload once, get every standard print size in seconds."
              appUrl={appUrl}
            />

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Email Capture --- */}
            <EmailCaptureSection />

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-print-on-demand-vs-digital-download" />
          </div>
        </Container>
      </section>
    </>
  );
}
