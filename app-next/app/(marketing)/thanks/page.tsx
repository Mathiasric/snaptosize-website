import type { Metadata } from "next";
import Link from "next/link";
import ThanksRedirect from "./thanks-redirect";

export const metadata: Metadata = {
  title: "You're all set — SnapToSize",
  description: "Thanks for upgrading. You can now use SnapToSize Pro.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://snaptosize.com/thanks" },
};

export default function ThanksPage() {
  return (
    <>
      <section className="hero">
        <h1>You&apos;re all set ✅</h1>
        <p className="hero-lead">
          Thanks for upgrading. Your Pro access is now active.
        </p>

        <div className="hero-cta">
          <a
            id="open-app"
            className="btn btn--primary"
            href="/app"
            data-cta="open_app"
          >
            Start resizing now
          </a>

          <Link
            className="btn btn--ghost"
            href="/etsy-print-size-guide"
            data-cta="print_size_guide"
          >
            Print Size Guide
          </Link>
        </div>

        <p className="hero-micro">
          You&apos;re unlocked. If nothing opens automatically, click below.
        </p>

        <p className="hero-micro">Tip: bookmark this page.</p>
      </section>

      <ThanksRedirect />
    </>
  );
}
