import type { Metadata } from "next";
import PackSpotlight from "./_components/PackSpotlight";
import BeforeAfter from "./_components/BeforeAfter";
import StatsCard from "./_components/StatsCard";
import Checklist from "./_components/Checklist";
import SizeComparison from "./_components/SizeComparison";
import WorkflowSteps from "./_components/WorkflowSteps";
import NumberHighlight from "./_components/NumberHighlight";

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

        {/* ═══ Template 6: Workflow Steps ═══ */}
        <WorkflowSteps ratio="pinterest" />
        <WorkflowSteps ratio="instagram" />

        {/* ═══ Template 7: Number Highlight (70 files) ═══ */}
        <NumberHighlight ratio="pinterest" />
        <NumberHighlight ratio="instagram" />

        {/* ═══ Template 7b: Number Highlight (30+ sizes, purple) ═══ */}
        <NumberHighlight
          ratio="pinterest"
          number="30+"
          label="unique print sizes"
          subtitle="all standard frame ratios covered"
          topBadge="Stop missing sales"
          bullets={["2:3 · 3:4 · 4:5 · ISO · Extras", "Every size in portrait + landscape", "Under 20MB — Etsy compliant"]}
          accentColor="purple"
        />

        {/* ═══ Template 7c: Number Highlight (5 packs, coral) ═══ */}
        <NumberHighlight
          ratio="pinterest"
          number="5"
          label="organized ZIP packs"
          subtitle="one for each frame ratio"
          topBadge="Professional file delivery"
          bullets={["2:3 Wall Art · 3:4 Photo · 4:5 Classic", "ISO A-Series · Extras (5×7, 11×14...)", "Named, sorted, ready to list"]}
          accentColor="coral"
        />
      </div>
    </main>
  );
}
