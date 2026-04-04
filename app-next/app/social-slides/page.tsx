import type { Metadata } from "next";
import PackSpotlight from "./_components/PackSpotlight";
import BeforeAfter from "./_components/BeforeAfter";
import StatsCard from "./_components/StatsCard";
import Checklist from "./_components/Checklist";
import SizeComparison from "./_components/SizeComparison";

export const metadata: Metadata = {
  title: "Social Slides — SnapToSize",
  robots: { index: false, follow: false },
};

/* ─────────────────────────────────────────────
   Social Media Slide Templates
   5 templates × 2 ratios = 10 slides
   Pinterest: 1000×1500 (2:3)
   Instagram: 1080×1350 (4:5)
   Screenshot individually with Playwright.
   ───────────────────────────────────────────── */

export default function SocialSlidesPage() {
  return (
    <main className="bg-[#0B0B12]">
      <div className="flex flex-col items-center gap-16 py-16">
        {/* ═══ Template 1: Pack Spotlight ═══ */}
        <PackSpotlight ratio="pinterest" />
        <PackSpotlight ratio="instagram" />

        {/* ═══ Template 2: Before / After ═══ */}
        <BeforeAfter ratio="pinterest" />
        <BeforeAfter ratio="instagram" />

        {/* ═══ Template 3: Stats Card ═══ */}
        <StatsCard ratio="pinterest" />
        <StatsCard ratio="instagram" />

        {/* ═══ Template 4: Checklist ═══ */}
        <Checklist ratio="pinterest" />
        <Checklist ratio="instagram" />

        {/* ═══ Template 5: Size Comparison ═══ */}
        <SizeComparison ratio="pinterest" />
        <SizeComparison ratio="instagram" />
      </div>
    </main>
  );
}
