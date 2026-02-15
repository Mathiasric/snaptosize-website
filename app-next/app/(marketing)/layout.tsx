import Link from "next/link";
import MarketingScripts from "./marketing-scripts";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            <img
              src="/assets/favicon/favicon-96x96.png"
              alt=""
              className="brand-icon"
              aria-hidden="true"
              width={20}
              height={20}
            />
            <span className="brand-text">SnapToSize</span>
          </Link>

          <nav className="header-cta">
            <a className="btn btn--ghost" data-href="demo" data-cta="demo" href="#">
              Try free
            </a>
            <a className="btn btn--primary" data-href="pay-monthly" data-cta="pay_monthly" href="#">
              Start Pro
            </a>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer container">
        <p>
          &copy; <span id="year"></span> SnapToSize. All rights reserved.
        </p>

        <p className="muted">
          <Link href="/">Home</Link> &middot;{" "}
          <Link href="/etsy-image-resizer">Etsy Image Resizer</Link> &middot;{" "}
          <Link href="/etsy-print-size-guide">Print Size Guide</Link>
        </p>

        <p className="muted">
          Feedback or ideas?{" "}
          <a href="mailto:support@snaptosize.com">support@snaptosize.com</a>
        </p>
      </footer>

      <MarketingScripts />
    </>
  );
}
