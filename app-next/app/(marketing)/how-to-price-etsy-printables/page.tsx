import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, DollarSign } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "How to Price Etsy Printables: Cost Formula Guide",
  description:
    "Most sellers underprice by 40%. Exact fee breakdown, pricing formulas, and bundle strategies — plus how to deliver all sizes instantly with SnapToSize.",
  alternates: {
    canonical: "https://snaptosize.com/how-to-price-etsy-printables",
  },
  openGraph: {
    title: "How to Price Etsy Printables: Cost Formula Guide",
    description:
      "Price your Etsy printables for profit. Fee reality, multi-size pricing, premium tactics, and bundle strategies for digital downloads.",
    url: "https://snaptosize.com/how-to-price-etsy-printables",
    images: [
      {
        url: "/assets/og/how-to-price-etsy-printables.png",
        width: 1200,
        height: 630,
        alt: "How to Price Etsy Printables — Pricing Strategy for Digital Downloads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Price Etsy Printables: Cost Formula Guide",
    description:
      "Most sellers underprice by 40%. See the exact fee breakdown and pricing formulas top shops use.",
    images: ["/assets/og/how-to-price-etsy-printables.png"],
  },
};

export default function HowToPriceEtsyPrintablesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Price Etsy Printables — Pricing Strategy for Digital Downloads",
    description:
      "Complete guide to pricing Etsy printables for profit. Covers fee breakdown, multi-size bundle pricing, value-based strategies, and premium tactics for digital wall art.",
    url: "https://snaptosize.com/how-to-price-etsy-printables",
    datePublished: "2026-03-19",
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
        name: "How to Sell on Etsy",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Price Printables",
        item: "https://snaptosize.com/how-to-price-etsy-printables",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's a good profit margin for Etsy printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aim for 50-80% profit margin after Etsy fees. Digital products have zero marginal cost — every sale after covering design time is pure profit. If your total fee load is ~10-12%, pricing at $8-15 for a multi-size bundle gives you $7-13 net per sale.",
        },
      },
      {
        "@type": "Question",
        name: "Should I charge the same price for all sizes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bundle pricing works better. Instead of selling individual sizes (5×7 for $5, 8×10 for $7, etc.), offer all sizes in one download at one price ($10-15). This increases perceived value, reduces listing management, and converts better than single-size pricing.",
        },
      },
      {
        "@type": "Question",
        name: "How much should I charge for editable printables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Charge 2-3× the price of static printables. If your static bundle is $12, an editable version (Canva template, PowerPoint, or editable PDF) should be $24-36. Editability adds customization value that buyers pay premium for.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to lower prices to compete on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Competing on price devalues all printables. Compete on value instead: offer more sizes, better quality, clearer instructions, faster support, or unique designs. Buyers who filter by lowest price are not your ideal customers.",
        },
      },
      {
        "@type": "Question",
        name: "How do Etsy fees affect my pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Etsy takes ~9.5% + $0.45 flat per sale in base fees: $0.20 listing fee, 6.5% transaction fee, and 3% + $0.25 payment processing. On a $10 sale, you keep ~$8.60. On a $5 sale, you keep ~$4.07. If Offsite Ads apply (12-15% extra), you keep even less. Factor all fees into your pricing.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_pricing&kind=guide";

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
        className="relative pt-12 pb-36 md:pt-20 md:pb-48 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #030712 0%, #0c1222 35%, #0a0f1e 70%, #030712 100%)",
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

        {/* Pricing tiers visualization — right side */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="flex items-end gap-2">
            {/* Price tags stacked */}
            {[
              { label: "$5", h: "60px", op: "0.25" },
              { label: "$8", h: "90px", op: "0.35" },
              { label: "$12", h: "130px", op: "0.50" },
              { label: "$15", h: "160px", op: "0.65" },
            ].map((tag, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-end gap-1"
                style={{ height: tag.h }}
              >
                {/* Price tag shape */}
                <div
                  className="relative px-4 py-2 rounded-md border border-purple-400/30 bg-purple-500/[0.08]"
                  style={{ opacity: tag.op }}
                >
                  {/* Tag hole */}
                  <div
                    className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-purple-400/40 bg-background"
                  />
                  <DollarSign className="w-3 h-3 text-purple-300/60 absolute top-1 left-1" />
                  <span className="font-bold text-purple-200/70 text-lg">
                    {tag.label}
                  </span>
                </div>
                {/* Vertical bar */}
                <div
                  className="w-1 rounded-full bg-gradient-to-t from-purple-400/40 to-transparent flex-1"
                />
              </div>
            ))}
          </div>
          {/* Value arrow */}
          <div className="mt-2 px-3 py-1 rounded-full border border-purple-400/20 bg-purple-500/[0.06]">
            <span className="text-[9px] font-mono text-purple-300/60 tracking-wider">
              VALUE ↑
            </span>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-purple-500/50" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/70 uppercase">
                Seller Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-4">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1 text-white">
                How to Price Etsy Printables
              </span>
              <span className="block text-lg md:text-2xl lg:text-3xl font-semibold text-purple-200/80">
                Pricing strategies that drive profit, not just sales
              </span>
            </h1>
            <p className="text-base text-white/60 mb-4 max-w-lg">
              Pricing digital downloads is different from physical products.
              Zero marginal cost, infinite copies, and multi-size complexity
              change the math. Here&apos;s how to price for profit.
            </p>

            <div className="mb-3">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Price with Confidence
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; offer all sizes, charge premium.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Fee breakdown included",
                "Multi-size pricing",
                "Premium tactics",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]"
                >
                  <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                  <span className="text-xs text-white/70 font-medium">
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== QUICK ANSWER ===== */}
      <section className="py-8 md:py-10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <QuickAnswer question="How much should I charge for Etsy printables?">
              <strong>$10&ndash;15 for a multi-size bundle</strong> (all sizes in one download). Etsy takes ~14% in fees at this price point, leaving you ~$8.60&ndash;$13.12 per sale. Below $8, flat fees eat too much margin. Above $15, compete on value (editable files, commercial licenses, seasonal bundles).
            </QuickAnswer>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* --- Why Pricing Printables Is Different --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Pricing Printables Is Different
              </h2>
              <p className="text-foreground-60 mb-6">
                Digital products behave differently from physical goods.
                Understanding these differences is the foundation of profitable
                pricing.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Zero Marginal Cost
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Every sale after covering your design time is pure profit.
                    No shipping, no inventory, no materials. Your second sale
                    costs nothing to fulfill. This is why digital downloads have{" "}
                    <Link href="/etsy-print-on-demand-vs-digital-download" className="text-accent-light hover:underline">much higher margins than print on demand</Link>.
                    It means you can price for value
                    instead of cost recovery.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Infinite Copies
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Unlike physical prints, you never run out of stock. The file
                    that serves one buyer serves ten thousand buyers. There&apos;s
                    no reason to discount for volume or clear inventory.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Multi-Size Complexity
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Buyers expect{" "}
                    <Link
                      href="/how-many-sizes-etsy-printable"
                      className="text-accent-light hover:underline"
                    >
                      multiple sizes
                    </Link>{" "}
                    in one download. Do you price per size or bundle them? How
                    many sizes justify a higher price? Most sellers get this
                    wrong and leave money on the table.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- The Etsy Fee Reality --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Etsy Fee Reality — What You Actually Keep
              </h2>
              <p className="text-foreground-60 mb-6">
                Etsy takes a cut of every sale. Before setting your price, know
                the fee structure so you don&apos;t accidentally price yourself
                into negative margins.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Fee Breakdown (as of March 2026)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Listing Fee</span>
                    <span className="font-semibold">$0.20 per listing</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Transaction Fee</span>
                    <span className="font-semibold">6.5% of sale price</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Payment Processing</span>
                    <span className="font-semibold">3% + $0.25</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Offsite Ads (if applicable)</span>
                    <span className="font-semibold">12–15% of sale</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-semibold">Base Fee Load</span>
                    <span className="font-semibold text-accent-light">
                      ~10% + $0.45 per sale
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background-5 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Real Example: $10 Printable
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-60">Sale price</span>
                    <span className="font-mono">$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-60">Listing fee</span>
                    <span className="font-mono text-red-400">-$0.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-60">Transaction fee (6.5%)</span>
                    <span className="font-mono text-red-400">-$0.65</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-60">Payment processing</span>
                    <span className="font-mono text-red-400">-$0.55</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10">
                    <span className="font-semibold">You keep</span>
                    <span className="font-mono font-semibold text-green-400">
                      $8.60
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                On a $10 sale, Etsy keeps ~$1.40. On a $5 sale, they keep ~$0.93
                &mdash; leaving you with only ~$4.07. But the percentage lost
                is higher at lower prices, so pricing too low hurts your margin
                disproportionately.
              </p>

              <Card className="p-5 bg-amber-500/10 border-amber-500/20 mb-8">
                <div className="flex gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Offsite Ads:</strong>{" "}
                    Etsy may charge an additional 12&ndash;15% on sales that come
                    through their offsite advertising. This is mandatory for
                    sellers earning over $10,000/year, optional below that. If
                    Offsite Ads are on, a $10 sale could net you only ~$7.30.
                    Factor this into your pricing.
                  </p>
                </div>
              </Card>

              <h3 className="text-lg font-semibold mb-4">
                What You Keep at Every Price Point
              </h3>
              <p className="text-foreground-60 text-sm mb-4">
                Use this table to set your price. The lower you price, the
                higher the percentage Etsy takes &mdash; flat fees ($0.45)
                hit harder on cheap listings.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        List Price
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Etsy Fees
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        You Keep
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Fee %
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        With Offsite Ads (15%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">$3</td>
                      <td className="py-3 px-4 text-red-400">$0.74</td>
                      <td className="py-3 px-4 font-semibold">$2.26</td>
                      <td className="py-3 px-4 text-red-400">24.7%</td>
                      <td className="py-3 px-4 text-red-400">$1.81</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">$5</td>
                      <td className="py-3 px-4 text-red-400">$0.93</td>
                      <td className="py-3 px-4 font-semibold">$4.07</td>
                      <td className="py-3 px-4 text-red-400">18.5%</td>
                      <td className="py-3 px-4 text-red-400">$3.32</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">$8</td>
                      <td className="py-3 px-4 text-foreground-60">$1.21</td>
                      <td className="py-3 px-4 font-semibold">$6.79</td>
                      <td className="py-3 px-4 text-foreground-60">15.1%</td>
                      <td className="py-3 px-4 text-foreground-60">$5.59</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">$10</td>
                      <td className="py-3 px-4 text-foreground-60">$1.40</td>
                      <td className="py-3 px-4 font-semibold text-green-400">$8.60</td>
                      <td className="py-3 px-4 text-foreground-60">14.0%</td>
                      <td className="py-3 px-4 text-foreground-60">$7.10</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">$12</td>
                      <td className="py-3 px-4 text-foreground-60">$1.59</td>
                      <td className="py-3 px-4 font-semibold text-green-400">$10.41</td>
                      <td className="py-3 px-4 text-foreground-60">13.3%</td>
                      <td className="py-3 px-4 text-foreground-60">$8.61</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">$15</td>
                      <td className="py-3 px-4 text-foreground-60">$1.88</td>
                      <td className="py-3 px-4 font-semibold text-green-400">$13.12</td>
                      <td className="py-3 px-4 text-foreground-60">12.5%</td>
                      <td className="py-3 px-4 text-foreground-60">$10.87</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">$20</td>
                      <td className="py-3 px-4 text-foreground-60">$2.35</td>
                      <td className="py-3 px-4 font-semibold text-green-400">$17.65</td>
                      <td className="py-3 px-4 text-foreground-60">11.8%</td>
                      <td className="py-3 px-4 text-foreground-60">$14.65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-foreground-60 text-sm">
                <strong>The sweet spot:</strong> $10&ndash;15 bundles keep
                fees at 12&ndash;14% while maximizing profit per sale. Below
                $8, Etsy&apos;s flat fees eat a disproportionate share of your
                revenue.
              </p>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Simplify Multi-Size Pricing
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload once, get all{" "}
                  <Link
                    href="/etsy-print-sizes"
                    className="text-foreground hover:underline"
                  >
                    30 sizes
                  </Link>{" "}
                  across 5 ratio packs &mdash; organized, named, and ready to
                  sell. Offer more value, charge premium prices.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Get All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Three Pricing Strategies --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Three Pricing Strategies for Etsy Printables
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    1. Cost-Plus Pricing
                  </h3>
                  <p className="text-foreground-60 text-sm mb-4">
                    Calculate your time investment, apply an hourly rate, add
                    fees and margin.
                  </p>
                  <div className="bg-background-5 p-4 rounded-lg text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-foreground-60">Design time</span>
                      <span className="font-mono">2 hours × $30/hr = $60</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground-60">Etsy fees (~12%)</span>
                      <span className="font-mono">+ $1.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground-60">Target margin (50%)</span>
                      <span className="font-mono">× 2</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/10 font-semibold">
                      <span>Price per sale needed</span>
                      <span className="text-accent-light">
                        $12 (5 sales recovers cost)
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground-60 text-sm mt-4">
                    <strong>Best for:</strong> New sellers who want a clear
                    floor price. Not ideal long-term — ignores market demand.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    2. Value-Based Pricing
                  </h3>
                  <p className="text-foreground-60 text-sm mb-4">
                    Price based on what buyers pay for convenience, quality, and
                    results — not your time.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Buyers value{" "}
                        <Link
                          href="/how-to-resize-images-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          not having to resize files themselves
                        </Link>
                        . Offering 30 sizes vs 1 size justifies 2-3× price.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Commercial licenses (right to sell physical prints made
                        from your files) justify 3-5× price increase.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Editable files (Canva templates, PowerPoint) let buyers
                        customize. Charge 2-3× static price.
                      </span>
                    </li>
                  </ul>
                  <p className="text-foreground-60 text-sm mt-4">
                    <strong>Best for:</strong> Sellers with unique designs or
                    high-value offerings. Maximizes profit per sale.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    3. Competitive Pricing
                  </h3>
                  <p className="text-foreground-60 text-sm mb-4">
                    Research top sellers in your niche. Price within the same
                    range, then differentiate on quality or quantity.
                  </p>
                  <div className="bg-background-5 p-4 rounded-lg text-sm">
                    <p className="text-foreground-60 mb-2">
                      Search for &ldquo;wall art printable [your niche]&rdquo;.
                      Sort by best-selling. Check prices of top 10 listings:
                    </p>
                    <ul className="space-y-1 text-foreground-60 list-disc list-inside ml-2">
                      <li>
                        If most are $8-12, price at $10-12 (upper range, not
                        lowest)
                      </li>
                      <li>
                        If your design is unique or offers more sizes, go $12-15
                      </li>
                      <li>
                        If you&apos;re brand new with generic designs, start at
                        $8-10
                      </li>
                    </ul>
                  </div>
                  <p className="text-foreground-60 text-sm mt-4">
                    <strong>Best for:</strong> Sellers entering competitive
                    niches. Gives you market validation before experimenting.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- The Multi-Size Pricing Problem --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Multi-Size Pricing Problem
              </h2>
              <p className="text-foreground-60 mb-6">
                Most Etsy sellers face this decision: sell sizes individually or
                bundle them into one download? The math strongly favors bundling.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6 border-red-400/20">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    Selling Sizes Individually
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span>5×7 for $4, 8×10 for $6, 11×14 for $8</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span>Buyers only buy one size → lower total revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span>
                        Requires managing{" "}
                        <Link
                          href="/how-many-sizes-etsy-printable"
                          className="text-accent-light hover:underline"
                        >
                          30+ separate listings
                        </Link>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span>Perceived as lower value (just one file)</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-green-400/20">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Bundle Pricing (All Sizes)
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground-60">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>All 30 sizes for $12 (one download)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Higher perceived value (30 files vs 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>One listing to manage, fewer support questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Better conversion (eliminates size decisions)</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground-60 text-sm mb-3">
                      <strong className="text-foreground">Real comparison:</strong>
                    </p>
                    <div className="space-y-2 text-sm text-foreground-60">
                      <div className="flex justify-between">
                        <span>Selling 1 size at $5</span>
                        <span className="font-mono">= $5 revenue</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bundle of 30 sizes at $12</span>
                        <span className="font-mono text-green-400">
                          = $12 revenue
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground-60 text-sm mt-3">
                      The bundle appears to offer 30× more value at only 2.4×
                      the price. This is why top sellers bundle.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Selling One Size at a Time
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Generate complete size packs in seconds. Offer all{" "}
                  <Link
                    href="/etsy-print-ratios"
                    className="text-foreground hover:underline"
                  >
                    5 ratios
                  </Link>
                  , charge premium, increase conversion. No manual resizing.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-base px-6 py-2.5">
                    Price with Confidence
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Premium Pricing Tactics --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Premium Pricing Tactics
              </h2>
              <p className="text-foreground-60 mb-6">
                Once your shop has traction, these tactics let you charge more
                without losing buyers.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Editable Files (2-3× Price)
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Offer Canva templates, PowerPoint, or editable PDFs. Buyers
                    can change text, colors, or images. If your static bundle is
                    $12, charge $24-36 for the editable version. Customization
                    adds significant value.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Commercial Licenses
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Most Etsy printables are for personal use only. A commercial
                    license lets buyers sell physical prints made from your
                    files. Charge 3-5× your personal-use price. Example: $12
                    personal, $40-60 commercial.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Seasonal Bundles
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    Group 5-10 related designs into a collection. Price at
                    1.5-2× individual listings. Example: &ldquo;Holiday Wall Art
                    Bundle — 10 Designs, All Sizes&rdquo; at $25 when individual
                    designs are $12 each.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Collection Discounts
                  </h3>
                  <p className="text-foreground-60 text-sm">
                    If a buyer purchases 3+ items from your shop, offer a
                    discount code for their next purchase. This increases repeat
                    sales without lowering list prices. Use Etsy&apos;s coupon
                    feature to automate.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Common Pricing Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Pricing Mistakes
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Pricing Too Low to &ldquo;Get Sales&rdquo;
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Pricing at $2-3 to undercut competitors attracts
                        bargain hunters, not repeat customers. It also devalues
                        all printables on Etsy. If your design is worth buying,
                        it&apos;s worth $8-15. Compete on quality and value, not
                        price.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Forgetting to Account for Design Time
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        If you spend 5 hours designing and price at $5, you need
                        30+ sales to earn minimum wage. Price to recover time
                        investment within 5-10 sales, not 100. Your first sales
                        should cover costs, everything after is profit.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Selling Individual Sizes When Bundles Convert Better
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Managing 30 separate listings for one design is
                        exhausting. Buyers get decision fatigue. Bundle all
                        sizes into one download, charge $10-15, and watch
                        conversion rates improve. See our{" "}
                        <Link
                          href="/how-to-package-digital-wall-art-for-etsy"
                          className="text-accent-light hover:underline"
                        >
                          packaging guide
                        </Link>{" "}
                        for best practices.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Not Raising Prices as Shop Authority Grows
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Once you have 50+ sales and 5-star reviews, your shop
                        has earned trust. Raise prices 20-30% on new listings.
                        Buyers pay more for proven quality. Keep older listings
                        at original prices, but price new designs higher.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Price with Confidence"
                stat="Bundles of 30 sizes convert 2-3x better than single files"
                description="Offer all sizes at 300 DPI. Charge premium prices. No manual resizing, no file limit headaches. Upload once, get production-ready ZIPs in seconds."
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
                    question: "What's a good profit margin for Etsy printables?",
                    answer:
                      "Aim for 50-80% profit margin after Etsy fees. Digital products have zero marginal cost — every sale after covering design time is pure profit. If your total fee load is ~10-12%, pricing at $8-15 for a multi-size bundle gives you $7-13 net per sale. After recovering design time (typically 5-10 sales), everything is profit.",
                  },
                  {
                    question: "Should I charge the same price for all sizes?",
                    answer:
                      "Bundle pricing works better. Instead of selling individual sizes (5×7 for $5, 8×10 for $7, 11×14 for $10), offer all sizes in one download at one price ($10-15). This increases perceived value (30 files vs 1), reduces listing management, and converts better. Buyers don't have to choose a size — they get everything.",
                  },
                  {
                    question: "How much should I charge for editable printables?",
                    answer:
                      "Charge 2-3× the price of static printables. If your static bundle is $12, an editable version (Canva template, PowerPoint, or editable PDF) should be $24-36. Editability adds customization value — buyers can change text, colors, and images. This justifies premium pricing.",
                  },
                  {
                    question: "Do I need to lower prices to compete on Etsy?",
                    answer:
                      "No. Competing on price devalues all printables and attracts bargain hunters who don't become repeat customers. Compete on value instead: offer more sizes, better quality, clearer instructions, faster support, or unique designs. Buyers who filter by lowest price are not your ideal customers. Price at $8-15 and focus on quality.",
                  },
                  {
                    question: "How do Etsy fees affect my pricing?",
                    answer:
                      "Etsy takes ~9.5% + $0.45 flat per sale: $0.20 listing fee, 6.5% transaction fee, and 3% + $0.25 payment processing. On a $10 sale, you keep ~$8.60. On a $5 sale, you keep ~$4.07. The lower you price, the higher the percentage Etsy takes. This is why pricing below $8 hurts profit margins disproportionately.",
                  },
                ]}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="how-to-price-etsy-printables" />
          </div>
        </Container>
      </section>
    </>
  );
}
