import type { Metadata } from "next";
import Link from "next/link";
import HeroVideo from "./hero-video";

export const metadata: Metadata = {
  title: "SnapToSize — Etsy-ready print sizes in seconds",
  description:
    "Turn one artwork file into Etsy-ready print-size ZIPs at 300 DPI. No resizing headaches. Try the demo or buy instantly.",
  openGraph: {
    url: "https://snaptosize.com/",
    images: [{ url: "https://snaptosize.com/assets/og.png" }],
    type: "website",
    title: "SnapToSize — Etsy-ready print sizes in seconds",
    description:
      "Generate Etsy-ready print-size ZIPs from a single image. Fast. Clean. Predictable.",
  },
  alternates: { canonical: "https://snaptosize.com/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnapToSize",
    url: "https://snaptosize.com/",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    description:
      "Resize images into Etsy-ready print sizes without cropping important details.",
    softwareHelp: "https://snaptosize.com/etsy-image-resizer",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "11.99",
      highPrice: "97",
      offerCount: "2",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="hero hero--premium">
        <div className="hero-top">
          <h1>Etsy-ready print sizes in seconds.</h1>

          <p className="hero-lead">
            Upload one artwork file. Download clean print-size ZIPs at 300 DPI
            &mdash; <strong>no cropping</strong>, no cut-off edges.
          </p>

          <div className="hero-cta">
            <a href="#" data-href="demo" data-cta="demo">
              Try free
            </a>
            <a href="#pricing" data-href="pricing">
              See pricing
            </a>
          </div>

          <p className="hero-micro">
            No signup. 1 free watermarked export (per 24h). Upgrade for
            unlimited.
          </p>
        </div>

        <div className="hero-split">
          {/* LEFT: VIDEO */}
          <div className="hero-media" aria-label="Product demo video">
            <div className="hero-video-frame premium-rainbow">
              <div className="hero-video-card">
                <video
                  id="heroVideo"
                  className="hero-video"
                  muted
                  playsInline
                  preload="auto"
                  poster="/assets/cover.png?v=2"
                  controlsList="nodownload noplaybackrate noremoteplayback"
                >
                  <source
                    src="/assets/snaptosize-demo.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Big center play button (YT style) */}
                <button
                  id="heroPlay"
                  className="hero-video-play"
                  type="button"
                  aria-label="Play video"
                >
                  ▶
                </button>
              </div>
            </div>

            <div className="hero-video-meta">
              <span>25 files</span>
              <span>5 ZIPs</span>
              <span>300 DPI</span>
              <span>No cropping</span>
            </div>
          </div>

          {/* RIGHT: PROOF */}
          <aside className="hero-proof" aria-label="What you get">
            <h3>What you get (exactly)</h3>

            <ul className="proof-list">
              <li>
                <strong>25 JPG files</strong> total (when all groups are
                selected)
              </li>
              <li>
                <strong>5 ZIP files</strong> (one ZIP per size group)
              </li>
              <li>
                <strong>300 DPI</strong> metadata + quality-optimized JPEG
                output
              </li>
              <li>
                <strong>No cropping</strong> &mdash; exact-size resize (no
                cut-off edges)
              </li>
              <li>
                ZIPs are organized by ratio and ready for direct Etsy upload
              </li>
            </ul>

            <div className="proof-note">
              Etsy limit safe: <strong>20MB per ZIP</strong>.
            </div>
          </aside>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section">
        <h2>How it works</h2>

        <ol>
          <li>Upload your artwork</li>
          <li>Select print size groups</li>
          <li>Download ready-to-upload ZIPs</li>
        </ol>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="section">
        <h2>Why sellers use SnapToSize</h2>

        <ul>
          <li>Stop wasting time resizing manually</li>
          <li>Fewer mistakes in Etsy listings</li>
          <li>Consistent output across all products</li>
          <li>Faster listing creation</li>
        </ul>
      </section>

      {/* ================= SUPPORTED PRINT SIZES ================= */}
      <section className="section" id="supported-sizes">
        <h2>Supported print sizes</h2>

        <p className="hero-micro">Upload once. Get every size you need.</p>

        <p className="muted">
          Turn one image into <strong>25+ Etsy-ready print files</strong>. Clean
          ZIPs. Exact dimensions. <strong>300 DPI</strong>.
        </p>

        <ul>
          <li>
            <strong>Batch ZIP exports</strong> &mdash; grouped by print ratio
          </li>
          <li>
            <strong>Single Size Export</strong> &mdash; pick one size when needed
          </li>
          <li>
            <strong>Portrait &amp; Landscape</strong> &mdash; same sizes,
            auto-adjusted
          </li>
          <li>
            <strong>No cropping</strong> &mdash; your composition stays intact
          </li>
        </ul>

        <p className="muted">
          Everything is sized, named, and ready for direct Etsy upload.
        </p>

        <details>
          <summary>View all supported print sizes</summary>

          <ul>
            <li>
              <strong>2&times;3 ratio:</strong> 4&times;6, 8&times;12,
              10&times;15, 12&times;18, 16&times;24, 20&times;30
            </li>
            <li>
              <strong>3&times;4 ratio:</strong> 6&times;8, 9&times;12,
              12&times;16, 15&times;20, 18&times;24
            </li>
            <li>
              <strong>4&times;5 ratio:</strong> 8&times;10, 12&times;15,
              16&times;20, 20&times;25
            </li>
            <li>
              <strong>ISO:</strong> A5, A4, A3, A2, A1
            </li>
            <li>
              <strong>Extras:</strong> 5&times;7, 8.5&times;11, 11&times;14,
              11&times;17, 16&times;20, 20&times;24
            </li>
          </ul>

          <p className="muted" style={{ marginTop: "8px" }}>
            Same presets work in Portrait and Landscape. Landscape files are
            generated automatically.
          </p>
        </details>

        <p className="muted">
          Want exact pixel dimensions?{" "}
          <Link href="/etsy-print-size-guide">
            View the full print size guide
          </Link>
          .
        </p>
      </section>

      {/* ================= ETSY STORY ================= */}
      <section className="section etsy-story">
        <h2>Built from a real Etsy workflow</h2>

        <p className="muted">Used daily in an active Etsy shop</p>

        <p>
          SnapToSize was built to solve a problem we had in our own Etsy store:
          manually resizing the same artwork into multiple print sizes, over and
          over again &mdash; and still worrying about mistakes.
        </p>

        <p>
          Today, SnapToSize is used for every new digital listing we publish. One
          upload. Clean, Etsy-ready ZIPs. No second guessing.
        </p>

        <p>
          <strong>
            <a
              href="https://nordiccrafters.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nordic Crafters (Etsy shop)
            </a>
          </strong>
        </p>
        <p className="muted">Etsy seller &middot; Digital prints</p>

        <p className="muted" style={{ marginTop: "10px" }}>
          Built by an active Etsy seller. No support &mdash; tool is
          intentionally simple.
        </p>
      </section>

      {/* ================= PRICING ================= */}
      <section className="section" id="pricing">
        <h2>Pricing</h2>

        <div className="pricing-grid">
          {/* FREE */}
          <div className="plan plan--free">
            <h3>Free</h3>

            <p className="plan-price">Try it first &mdash; 1 export</p>

            <ul className="plan-list">
              <li>1 free batch export (per 24h)</li>
              <li>All print size groups</li>
              <li>Watermark on all files</li>
              <li>Delivered as ZIPs grouped by ratio</li>
            </ul>

            <a
              className="btn btn--ghost"
              href="#"
              data-href="demo"
              data-cta="demo"
            >
              Try free
            </a>
          </div>

          {/* PRO MONTHLY */}
          <div className="plan plan--pro">
            <h3>Pro</h3>
            <p className="plan-price">
              <strong>11.99/month</strong>{" "}
              <span className="muted">&mdash; cancel anytime</span>
            </p>

            <ul className="plan-list">
              <li>Unlimited exports</li>
              <li>All print sizes + all groups</li>
              <li>No watermark</li>
              <li>Batch ZIP exports</li>
              <li>Single Size Export (Advanced)</li>
              <li>Landscape toggle (Single Export)</li>
            </ul>

            <a
              className="btn btn--primary"
              href="#"
              data-href="pay-monthly"
              data-cta="pay_monthly"
            >
              Start Pro
            </a>
          </div>

          {/* PRO YEARLY */}
          <div className="plan plan--best">
            <div className="badge">
              Best value &middot; Save $47/year (~33%)
            </div>
            <h3>Pro Yearly</h3>
            <p className="plan-price">
              <strong>$97/year</strong>{" "}
              <span className="muted">
                ($8.08/mo billed yearly) &mdash; cancel anytime
              </span>
            </p>
          </div>

          <ul className="plan-list">
            <li>Everything in Pro</li>
            <li>Lower effective monthly cost</li>
            <li>Fewer payments, same power</li>
          </ul>

          <a
            className="btn btn--primary"
            href="#"
            data-href="pay-yearly"
            data-cta="pay_yearly"
          >
            Start Pro Yearly (Save $47)
          </a>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section" id="faq">
        <h2>FAQ</h2>

        <details>
          <summary>Is this only for Etsy?</summary>
          <p>
            It&apos;s optimized for Etsy-style digital print listings, but the
            files can be used anywhere.
          </p>
        </details>

        <details>
          <summary>Do I need an account?</summary>
          <p>
            No. You can try the demo or purchase instantly. No login.
          </p>
        </details>

        <details>
          <summary>Does this crop my artwork?</summary>
          <p>
            No. SnapToSize does not crop your artwork. Images are resized to
            exact print dimensions without cutting off edges.
          </p>
        </details>

        <details>
          <summary>What happens after I buy?</summary>
          <p>
            You&apos;ll get access to the full version immediately.
          </p>
        </details>

        <details>
          <summary>How do I cancel?</summary>
          <p>
            You can cancel anytime via the Stripe link in your receipt email.
            Your access stays active until the end of the billing period.
          </p>
        </details>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="section final-cta">
        <h2>Ready to stop resizing?</h2>

        <p>Try the demo. If it saves you time, buy it in one click.</p>

        <div className="final-cta-actions">
          <a href="#" data-href="demo" data-cta="demo">
            Try the demo
          </a>
          <a href="#" data-href="pay-yearly" data-cta="pay_yearly">
            Start Pro Yearly (Save $47)
          </a>
        </div>
      </section>

      <HeroVideo />
    </>
  );
}
