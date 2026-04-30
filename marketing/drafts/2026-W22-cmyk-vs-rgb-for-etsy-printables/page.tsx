import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, ArrowRight, AlertTriangle, Palette } from "lucide-react";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";

export const metadata: Metadata = {
  title: "CMYK vs RGB for Etsy Printables — Use sRGB (Here's Why)",
  description:
    "Should Etsy printables be CMYK or RGB? Use sRGB. Here's why CMYK is wrong for digital downloads, how to verify your file's color mode, and how to fix common color problems.",
  alternates: {
    canonical: "https://snaptosize.com/cmyk-vs-rgb-for-etsy-printables",
  },
  openGraph: {
    title: "CMYK vs RGB for Etsy Printables — Use sRGB (Here's Why)",
    description:
      "Should Etsy printables be CMYK or RGB? Use sRGB. Here's why CMYK is wrong for digital downloads and how to verify your file's color mode.",
    url: "https://snaptosize.com/cmyk-vs-rgb-for-etsy-printables",
    images: [
      {
        url: "/og/cmyk-vs-rgb-for-etsy-printables.png",
        width: 1200,
        height: 630,
        alt: "CMYK vs RGB for Etsy printables guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMYK vs RGB for Etsy Printables — Use sRGB (Here's Why)",
    description:
      "Should Etsy printables be CMYK or RGB? Use sRGB. Why CMYK is wrong for digital downloads and how to verify your file's color mode.",
    images: ["/og/cmyk-vs-rgb-for-etsy-printables.png"],
  },
};

export default function CmykVsRgbForEtsyPrintablesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "CMYK vs RGB for Etsy Printables — Use sRGB",
    description:
      "Should Etsy printables be CMYK or RGB? Use sRGB. Why CMYK is wrong for digital downloads, how to verify your color mode, and how to fix common color problems.",
    image:
      "https://snaptosize.com/og/cmyk-vs-rgb-for-etsy-printables.png",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      logo: {
        "@type": "ImageObject",
        url: "https://snaptosize.com/logo.png",
      },
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
        name: "CMYK vs RGB for Etsy Printables",
        item: "https://snaptosize.com/cmyk-vs-rgb-for-etsy-printables",
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to verify your Etsy printable file is RGB (sRGB)",
    description:
      "Five quick checks across Photoshop, Canva, Illustrator, Affinity Photo, and macOS Preview to confirm your Etsy digital download is in the correct sRGB color mode.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Photoshop",
        text: "Photoshop: Image → Mode → check RGB Color is selected",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Canva",
        text: "Canva: Download → File type PNG/JPG (Canva exports RGB by default)",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Illustrator",
        text: "Illustrator: File → Document Color Mode → RGB Color",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Affinity Photo",
        text: "Affinity Photo: Document → Convert Format / Color Profile → sRGB",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Preview a JPG",
        text: "Preview a JPG: macOS Preview → Tools → Inspector → ICC profile reads sRGB",
      },
    ],
  };

  const faqItems = [
    {
      question: "Should Etsy printables be CMYK or RGB?",
      answer:
        "RGB — specifically sRGB. Etsy buyers print at home on inkjet or laser printers, both of which expect RGB input. The printer driver handles the CMYK conversion internally. Sending a CMYK file to a home printer usually produces muddier, darker prints than the original sRGB file.",
    },
    {
      question: "What color profile is best for digital downloads?",
      answer:
        "sRGB IEC61966-2.1 is the universal default. Every consumer printer, every screen, and every photo lab (Walgreens, Costco, Snapfish, Walmart) is calibrated for sRGB. Using Adobe RGB or ProPhoto RGB on a home-print Etsy file is the most common cause of unexpected color shifts.",
    },
    {
      question: "Will CMYK print better at home?",
      answer:
        "No — almost always the opposite. Home printers receive RGB and convert internally using their own optimized profile. When you send a pre-converted CMYK file, the printer applies a second conversion on top, which often produces muddier, darker results than the original sRGB file would have.",
    },
    {
      question: "Why does my print look different from the screen?",
      answer:
        "Monitors emit light directly into your eyes; paper only reflects ambient room light. That alone causes a perceived ~10% drop in brightness and saturation. To preview accurately, soft-proof in Photoshop (View → Proof Setup → Working CMYK), or accept the small shift as normal — it is not a file problem.",
    },
    {
      question: "What is sRGB?",
      answer:
        "sRGB is the standard RGB color space for screens, the web, and consumer printers. It is the smallest of the common RGB spaces, which is why it works everywhere — every device knows how to display it. Adobe RGB and ProPhoto RGB are wider but only useful when the entire workflow (camera, monitor, printer) is calibrated for them.",
    },
    {
      question: "How do I check my file's color mode?",
      answer:
        "In Photoshop: Image → Mode (look for a checkmark next to 'RGB Color'). In Illustrator: File → Document Color Mode. In Affinity Photo: Document → Convert Format / ICC Profile. On macOS, open the JPG in Preview and choose Tools → Show Inspector — the ICC profile line should read sRGB. Full step-by-step in the verification section above.",
    },
    {
      question: "Does Etsy convert my file's color profile?",
      answer:
        "No. Etsy delivers the exact file you upload to the buyer — it does not re-encode JPGs, strip ICC profiles, or shift color modes. Whatever color mode your file has when you upload it is what the buyer downloads.",
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

  const verificationSteps = [
    {
      tool: "Photoshop",
      path: "Image → Mode",
      check: "Confirm 'RGB Color' has the checkmark (not CMYK Color).",
    },
    {
      tool: "Canva",
      path: "Download → File type PNG / JPG",
      check: "Canva exports sRGB by default for PNG and JPG. No setting to flip.",
    },
    {
      tool: "Illustrator",
      path: "File → Document Color Mode",
      check: "Should read 'RGB Color'. Switch from CMYK Color if needed.",
    },
    {
      tool: "Affinity Photo",
      path: "Document → Convert Format / Color Profile",
      check: "Set to sRGB IEC61966-2.1.",
    },
    {
      tool: "macOS Preview",
      path: "Tools → Show Inspector",
      check: "ICC profile line should read 'sRGB'. Works on any exported JPG.",
    },
  ];

  const colorProblems = [
    { problem: "Print looks washed out", cause: "File downscaled below 300 DPI" },
    { problem: "Print looks dark", cause: "Screen brighter than paper; soft-proof recommended" },
    { problem: "Color shift on canvas", cause: "POD provider auto-converts to CMYK; nothing to fix" },
    { problem: "Yellow tint", cause: "Wrong color profile (Adobe RGB instead of sRGB)" },
    { problem: "Customer prints muddy", cause: "Home printer ink mix; not the file's fault" },
  ];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Color-mode visual analogy */}
        <div className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 hidden md:block opacity-25 select-none pointer-events-none">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
            {/* RGB circles (additive) */}
            <circle cx="90" cy="90" r="50" fill="#ef4444" fillOpacity="0.55" />
            <circle cx="130" cy="90" r="50" fill="#22c55e" fillOpacity="0.55" />
            <circle cx="110" cy="130" r="50" fill="#3b82f6" fillOpacity="0.55" />
            <text x="60" y="200" fill="#2DD4BF" fontSize="10" fontFamily="monospace">
              RGB — screens + home printers
            </text>
          </svg>
        </div>

        <Container>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-mono tracking-widest text-teal-400/80 uppercase">
                  Color Setup Guide
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                CMYK vs RGB for Etsy Printables — Which Color Mode to Use
              </h1>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Confused about whether your Etsy digital downloads should be CMYK or RGB? You're
                far from alone. The answer is shorter than every blog post claims — and the wrong
                choice is one of the top causes of "print looks different" support messages.
              </p>

              <div className="mb-8 rounded-lg border border-teal-500/30 bg-teal-500/10 px-5 py-4">
                <p className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-1">
                  TL;DR
                </p>
                <p className="text-xl font-semibold text-white">
                  Use RGB (sRGB). Always.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.snaptosize.com?utm_source=marketing&utm_medium=organic&utm_campaign=cmyk-vs-rgb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">
                    Get sRGB-Tagged Files Automatically
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
              <p className="mt-3 text-xs text-white/40">
                Free plan available — Snap exports sRGB by default, no toggle needed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">

        {/* Quick Answer */}
        <div className="mb-10">
          <QuickAnswer question="Should Etsy printables be CMYK or RGB?">
            <p>
              RGB — specifically the sRGB color profile. Etsy buyers print on home inkjets, laser
              printers, and consumer photo labs (Walgreens, Costco, Snapfish), and every one of
              them expects RGB input. Using CMYK on a home-print listing almost always makes
              prints look worse. Pair the right color mode with{" "}
              <Link
                href="/best-resolution-for-etsy-printables"
                className="text-teal-400 underline underline-offset-2"
              >
                300 DPI resolution
              </Link>{" "}
              and the right{" "}
              <Link
                href="/best-file-format-etsy-printables"
                className="text-teal-400 underline underline-offset-2"
              >
                file format
              </Link>{" "}
              and you've covered 90% of color complaints.
            </p>
          </QuickAnswer>
        </div>

        {/* Section 1: The short answer */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            The short answer for Etsy printable sellers
          </h2>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            Use <strong>RGB (sRGB)</strong>. Always. Etsy digital downloads are printed by
            buyers on home printers and at consumer photo labs — both of which expect RGB. The
            printer driver handles the conversion to CMYK internally, using a profile tuned for
            that specific printer's inks and paper. Sending a pre-converted CMYK file forces the
            driver to convert a second time, which is what creates muddy, dark, or off-color prints.
          </p>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            CMYK is only correct in one situation: you are explicitly selling files for a
            commercial offset press, your listing description says so, and the buyer is a print
            shop or designer who specifically requested CMYK output. That is well under 1% of Etsy
            digital download listings.
          </p>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            If you take nothing else from this page: open your file, confirm it's RGB / sRGB,
            re-export, done. The buyer's home printer will handle every part of the conversion
            from RGB pixels to actual ink dots, and it will do that better than you can in
            advance.
          </p>
          <p className="text-foreground-60 leading-relaxed">
            One more clarification — "RGB" without a profile is ambiguous. There are three common
            RGB color spaces (sRGB, Adobe RGB, ProPhoto RGB) and they are not interchangeable.
            For Etsy, you specifically want <strong>sRGB IEC61966-2.1</strong>. Adobe RGB and
            ProPhoto RGB are wider gamuts that look great on calibrated wide-gamut monitors but
            shift color unpredictably on consumer printers — most often producing a yellow or
            green cast. Stick with sRGB and the buyer's printer will know exactly what to do.
          </p>
        </section>

        {/* Section 2: Why the confusion */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Why the CMYK confusion exists (and who started it)
          </h2>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            The advice "use CMYK for print" is technically true — for a 1990s offset printing
            press at a commercial print shop. Print-design textbooks have repeated it for thirty
            years. The problem is that consumer home printers, photo labs, and Etsy itself
            simply do not work that way anymore.
          </p>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            When the Etsy digital-download category exploded around 2018, sellers Googled "what
            color mode for print" and got the same outdated answer. Most never circled back to
            check whether their actual buyers — people printing on home Epson and HP inkjets —
            wanted CMYK or RGB. (They want RGB.)
          </p>
          <p className="text-foreground-60 leading-relaxed">
            The result: thousands of Etsy listings ship CMYK files to buyers who can't print them
            properly, then sellers receive support messages, blame the buyer's printer, and
            still don't fix the underlying file. Knowing this saves you the same loop.
          </p>
          <p className="text-foreground-60 leading-relaxed">
            A second source of confusion: design programs ship a "CMYK" option in their export
            menu, and seeing the option implies it's a legitimate choice for any print job. It
            isn't. That option exists because Illustrator and InDesign are also used by actual
            print-shop designers preparing files for offset presses — a use case that represents
            maybe 0.5% of Etsy listings. Treat the CMYK option the same way you treat "Save as
            TIFF": real, occasionally needed, almost never the right pick for a digital download.
          </p>
        </section>

        {/* Section 3: Plain English */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            RGB vs CMYK in plain English (no design-school jargon)
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Card className="p-5 border border-teal-500/20 bg-teal-500/5">
              <p className="font-semibold text-teal-300 mb-2">RGB (Red, Green, Blue)</p>
              <p className="text-sm text-foreground-60 mb-2">
                <strong>Additive color.</strong> Starts at black. Adding red + green + blue light
                makes white. This is how every screen on Earth works — phones, monitors, TVs.
              </p>
              <p className="text-sm text-foreground-60">
                Home printers also expect RGB input. Their drivers convert it to ink internally.
                sRGB is the standard RGB profile — small, universal, supported everywhere.
              </p>
            </Card>
            <Card className="p-5 border border-amber-500/20 bg-amber-500/5">
              <p className="font-semibold text-amber-300 mb-2">CMYK (Cyan, Magenta, Yellow, Key/Black)</p>
              <p className="text-sm text-foreground-60 mb-2">
                <strong>Subtractive color.</strong> Starts at white paper. Each ink subtracts
                light. Stack all four inks → near-black.
              </p>
              <p className="text-sm text-foreground-60">
                Used by commercial offset presses to mix ink. Useless for screens, useless for
                home inkjets (those use 4–10 inks tuned to their own RGB-fed driver).
              </p>
            </Card>
          </div>
          <p className="text-foreground-60 leading-relaxed">
            The shorthand: RGB is for anything that emits or receives light digitally. CMYK is
            for industrial ink mixing. Etsy printables fall in the first bucket every time.
          </p>
        </section>

        {/* Section 4: Home printers */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Why home printers handle RGB just fine
          </h2>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            Modern consumer printers don't actually use four inks anymore. Photo printers use
            six, eight, or even ten — light cyan, light magenta, gray, photo black, matte black,
            sometimes even orange and red. The printer driver maps incoming RGB pixels to that
            specific ink set using a profile tuned by the manufacturer.
          </p>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            That mapping was designed assuming the input is sRGB. Hand it sRGB, and the driver
            does its job perfectly. Hand it CMYK, and the driver has to undo your conversion
            first, then redo its own — and that round-trip almost always loses saturation and
            shifts hues.
          </p>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            This is also why "I converted to CMYK and now it looks terrible on screen" is so
            common. Of course it does — your screen is RGB, and the file is no longer in the
            color space the screen expects. Your buyer's screen is in the same situation. If
            they preview the file on their phone or laptop before printing, a CMYK file will
            already look dim and slightly off, which often triggers a refund request before
            they ever load the file into their printer.
          </p>
          <p className="text-foreground-60 leading-relaxed">
            The shortest version of this whole page: trust the printer driver. It was written
            by an engineer at Epson, HP, or Canon to handle RGB input perfectly. Don't pre-do
            its job.
          </p>
        </section>

        {/* CTA 1 — above-fold and after early sections */}
        <div className="my-10">
          <ContextualCTA
            problem="Worried your Etsy file is in the wrong color mode and you'll only find out from a support ticket?"
            solution="SnapToSize exports sRGB-tagged JPG and PNG by default — every print size, every export, no settings to misconfigure."
            appUrl="https://app.snaptosize.com?utm_source=marketing&utm_medium=organic&utm_campaign=cmyk-vs-rgb"
            buttonText="Try SnapToSize Free"
          />
        </div>

        {/* Section 5: When CMYK matters */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            When CMYK actually matters (commercial print runs only)
          </h2>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            CMYK is the correct color mode in exactly one scenario: you are sending a file
            directly to a commercial offset printing press, and the print operator has asked for
            CMYK with a specific profile (usually US Web Coated SWOP v2 or FOGRA39).
          </p>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            For Etsy specifically, that scenario shows up in three edge cases:
          </p>
          <ul className="space-y-2 mb-4 text-foreground-60">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
              <span>You sell business-card or stationery files explicitly labeled "print-shop ready"</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
              <span>You sell wedding invitation suites for buyers who use Vistaprint, Moo, or Primoprint</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
              <span>Your listing specifically targets graphic designers as buyers</span>
            </li>
          </ul>
          <p className="text-foreground-60 leading-relaxed">
            Even in those cases, the safest pattern is to deliver{" "}
            <em>both</em> versions in the ZIP — a CMYK PDF for print-shop buyers and an sRGB PNG
            for buyers who change their mind and print at home. Otherwise, default to sRGB and
            move on.
          </p>
          <p className="text-foreground-60 leading-relaxed">
            One more nuance worth knowing: print-on-demand providers like Printful, Printify,
            and Society6 explicitly request RGB uploads. Their fulfillment pipelines include a
            calibrated CMYK conversion step tuned to each substrate (canvas, poster paper,
            metal). Sending CMYK to those providers can actually <em>break</em> their pipeline
            or trigger automatic rejection. If your Etsy shop fulfills via POD, RGB sRGB is not
            just preferred — it's required.
          </p>
        </section>

        {/* Section 6: How to verify — verification table (HowTo schema) */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            How to verify your file is RGB — Photoshop, Canva, Illustrator, Affinity
          </h2>
          <p className="text-foreground-60 mb-6 leading-relaxed">
            Five quick checks. Each takes under ten seconds. Run the one that matches your design
            tool — that's the whole verification step.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">#</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Tool</th>
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Path</th>
                  <th className="text-left py-3 font-semibold text-foreground">What you should see</th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                {verificationSteps.map((row, i) => (
                  <tr key={row.tool} className="border-b border-border/50">
                    <td className="py-3 pr-6 font-mono text-teal-400">{i + 1}</td>
                    <td className="py-3 pr-6 font-semibold text-foreground">{row.tool}</td>
                    <td className="py-3 pr-6 font-mono text-xs">{row.path}</td>
                    <td className="py-3">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-foreground-60 text-sm">
            If any of these report Adobe RGB, ProPhoto RGB, or CMYK — convert to sRGB and
            re-export. In Photoshop: Edit → Convert to Profile → sRGB IEC61966-2.1. In
            Illustrator: File → Document Color Mode → RGB Color, then re-save.
          </p>
        </section>

        {/* CTA 2 — after verification */}
        <div className="my-10">
          <ContextualCTA
            problem="Tired of opening every file in Photoshop to confirm the color profile before listing?"
            solution="SnapToSize tags every export sRGB IEC61966-2.1. Upload once, get every Etsy size in the right color mode — no manual checks."
            appUrl="https://app.snaptosize.com?utm_source=marketing&utm_medium=organic&utm_campaign=cmyk-vs-rgb"
            buttonText="Start Free — sRGB by Default"
          />
        </div>

        {/* Section 7: Color problems table */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Etsy printable color problems and how to fix them (washed-out, dark, wrong color)
          </h2>
          <p className="text-foreground-60 mb-6 leading-relaxed">
            Most "color is wrong" complaints are not actually color-mode problems — they're
            resolution, brightness perception, or printer-side issues. Here's the quick
            triage table:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground">Symptom</th>
                  <th className="text-left py-3 font-semibold text-foreground">Most likely cause</th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                {colorProblems.map((row) => (
                  <tr key={row.problem} className="border-b border-border/50">
                    <td className="py-3 pr-6 font-semibold text-foreground">{row.problem}</td>
                    <td className="py-3">{row.cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-foreground-60 text-sm">
            Notice that "wrong color mode" only shows up once — as a yellow tint from Adobe RGB.
            The other four are about{" "}
            <Link
              href="/etsy-digital-download-blurry-prints"
              className="text-teal-400 underline underline-offset-2"
            >
              resolution and printing setup
            </Link>
            , not the file's color profile. Diagnose accordingly before re-exporting.
          </p>
        </section>

        {/* Section 8: The simplest workflow */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            The simplest color-safe workflow for digital downloads
          </h2>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            One workflow that works for 99% of Etsy printable sellers, regardless of design tool:
          </p>
          <ol className="space-y-3 mb-6">
            {[
              "Design in sRGB from the start (Canva, Photoshop, Illustrator all default to RGB).",
              "Don't convert to CMYK at any point — even if a tutorial says to.",
              "Export as PNG (lossless) or JPG (smaller file, fine for photos and complex art).",
              "Confirm the export reads sRGB (use the verification table above if unsure).",
              "Resize to every standard Etsy print ratio at 300 DPI; bundle into a ZIP under 20MB.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-foreground-60 text-sm">{text}</span>
              </li>
            ))}
          </ol>
          <p className="text-foreground-60 leading-relaxed">
            Steps 1–4 are about the source file. Step 5 is the one most sellers do manually,
            and where the most time is wasted. See{" "}
            <Link
              href="/how-to-resize-images-for-etsy"
              className="text-teal-400 underline underline-offset-2"
            >
              how to resize images for Etsy
            </Link>{" "}
            and{" "}
            <Link
              href="/what-files-to-include-etsy-digital-download"
              className="text-teal-400 underline underline-offset-2"
            >
              what files to include in an Etsy digital download
            </Link>{" "}
            for the full size and ratio breakdown.
          </p>
        </section>

        {/* Section 9: SnapToSize positioning */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            How SnapToSize keeps your color profile correct on every export
          </h2>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            SnapToSize was built to remove the export-settings juggling that color-mode confusion
            sits inside. Every file Snap outputs — JPG or PNG, every Etsy print ratio — is tagged{" "}
            <strong>sRGB IEC61966-2.1</strong> by default. There is no toggle, no advanced panel,
            no "make sure to check the color box" step.
          </p>
          <p className="text-foreground-60 mb-4 leading-relaxed">
            Practically, that means you can upload a design once, get a ZIP with all the standard
            Etsy print sizes (5×7, 8×10, 11×14, 16×20, 24×36, plus square and metric ratios), and
            ship to your listing knowing every file is in the correct color mode at 300 DPI and
            under 20MB.
          </p>
          <p className="text-foreground-60 leading-relaxed">
            If you do also want a CMYK version for the rare print-shop buyer, you can convert that
            single source file in Photoshop afterward. But for the home-print majority — which is
            virtually every Etsy buyer — the default sRGB export is exactly what you want.
          </p>
          <p className="text-foreground-60 leading-relaxed">
            Snap is built around the assumption that sellers shouldn't have to learn print-shop
            color theory to ship a wall-art listing. Set the source file once in your design
            tool, drag it into Snap, and the export pipeline handles dimensions, DPI, file size,
            and color profile in one pass. Perfect for Etsy sellers who'd rather spend time
            shipping new designs than re-checking export menus.
          </p>
        </section>

        {/* CTA 3 — after Snap-angle H2 */}
        <div className="my-10">
          <ContextualCTA
            problem="Want every Etsy print size exported in sRGB without thinking about color modes again?"
            solution="Upload your design once. SnapToSize delivers print-ready JPG/PNG files at 300 DPI in sRGB for every standard Etsy ratio — bundled in a single ZIP under 20MB."
            appUrl="https://app.snaptosize.com?utm_source=marketing&utm_medium=organic&utm_campaign=cmyk-vs-rgb"
            buttonText="Start Free — No Card Required"
          />
        </div>

        {/* ListingOutputShowcase */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
            What sRGB Etsy print files actually look like
          </h2>
          <p className="text-foreground-60 mb-6">
            Same source design, resized for every major Etsy print ratio — already in sRGB, at 300
            DPI, and under 20MB. This is what your buyer downloads.
          </p>
          <ListingOutputShowcase artwork="geometric" />
        </section>

        {/* Internal links */}
        <section className="mb-12 p-6 rounded-xl border border-border bg-white/[0.02]">
          <h3 className="font-semibold text-foreground mb-4">Related Print Setup Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/best-resolution-for-etsy-printables"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              Best Resolution for Etsy Printables — 300 DPI Guide
            </Link>
            <Link
              href="/etsy-digital-download-blurry-prints"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              Why Etsy Digital Downloads Print Blurry (and How to Fix)
            </Link>
            <Link
              href="/best-file-format-etsy-printables"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              Best File Format for Etsy Printables — PDF vs PNG vs JPG
            </Link>
            <Link
              href="/what-files-to-include-etsy-digital-download"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              What Files to Include in Etsy Digital Downloads
            </Link>
            <Link
              href="/etsy-printable-bleed-and-crop-marks"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              Etsy Printable Bleed & Crop Marks Guide
            </Link>
            <Link
              href="/how-to-resize-images-for-etsy"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              How to Resize Images for Etsy
            </Link>
            <Link
              href="/canvas-print-sizes-for-etsy"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              Canvas Print Sizes for Etsy
            </Link>
            <Link
              href="/print-sizes-at-300-dpi"
              className="flex items-center gap-2 text-sm text-foreground-60 hover:text-teal-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
              Print Sizes at 300 DPI Reference
            </Link>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            CMYK vs RGB for Etsy printables — FAQ
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Final CTA */}
        <FinalCTA
          heading="Stop guessing color modes. Get sRGB-tagged files automatically."
          stat="1 upload → all sizes, all sRGB"
          description="SnapToSize resizes your design to every standard Etsy print size in sRGB at 300 DPI, bundled under 20MB. No CMYK confusion, no manual color-mode checks."
          buttonText="Try SnapToSize Free"
          appUrl="https://app.snaptosize.com?utm_source=marketing&utm_medium=organic&utm_campaign=cmyk-vs-rgb"
        />

        {/* Related Pages */}
        <RelatedPages currentSlug="cmyk-vs-rgb-for-etsy-printables" />
      </div>
    </>
  );
}
