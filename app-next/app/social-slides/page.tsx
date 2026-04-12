import type { Metadata } from "next";
import PackSpotlight from "./_components/PackSpotlight";
import BeforeAfter from "./_components/BeforeAfter";
import StatsCard from "./_components/StatsCard";
import Checklist from "./_components/Checklist";
import SizeComparison from "./_components/SizeComparison";
import WorkflowSteps from "./_components/WorkflowSteps";
import NumberHighlight from "./_components/NumberHighlight";
import BrightPackShowcase from "./_components/BrightPackShowcase";
import W15GalleryWall from "./_components/W15GalleryWall";
import W15FoxPackShowcase from "./_components/W15FoxPackShowcase";
import NeonPackShowcase from "./_components/NeonPackShowcase";
import RatioProofShowcase from "./_components/RatioProofShowcase";
import PainSolutionSlide from "./_components/PainSolutionSlide";
import W15BeforeAfterWorkflow from "./_components/W15BeforeAfterWorkflow";
import W15DpiCheatSheet from "./_components/W15DpiCheatSheet";
import {
  W15I01Slide01,
  W15I01Slide02,
  W15I01Slide03,
  W15I01Slide04,
  W15I01Slide05,
  W15I01Slide06,
  W15I01Slide07,
  W15I01Slide08,
} from "./_components/W15EtsiSizePackCarousel";

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

        {/* ═══ Template 8: Bright Pack Showcase (light bg, real artwork) ═══ */}
        <BrightPackShowcase ratio="pinterest" />
        <BrightPackShowcase ratio="instagram" />

        {/* ═══ W15 Batch — Pinterest Pins ═══ */}
        {/* W15-P01: Fox Pack Showcase — real artwork in 5 ratio frames */}
        <W15FoxPackShowcase />

        {/* ═══ Neon Pack Showcase — dark/glow template ═══ */}
        <NeonPackShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
        <NeonPackShowcase artwork="bunny" name="Bunny Sketch" ratio="pinterest" />
        <NeonPackShowcase artwork="deer" name="Deer Portrait" ratio="pinterest" />
        <NeonPackShowcase artwork="songbirds" name="Vintage Birds" ratio="pinterest" />
        <NeonPackShowcase artwork="misty_lake" name="Misty Lake" ratio="pinterest" />
        <NeonPackShowcase artwork="misty_lake" name="Misty Lake" ratio="instagram" />
        <NeonPackShowcase artwork="fox" name="Fox Illustration" ratio="instagram" />
        <NeonPackShowcase artwork="landscape_abstract" name="Landscape Abstract" ratio="instagram" />

        {/* ═══ Ratio Proof Showcase — "Same file. Every frame." ═══ */}
        <RatioProofShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
        <RatioProofShowcase artwork="misty_lake" name="Misty Lake" ratio="pinterest" />
        <RatioProofShowcase artwork="landscape_abstract" name="Landscape Abstract" ratio="instagram" />

        {/* ═══ Pain Solution Slide — before/after split panel ═══ */}
        <PainSolutionSlide pain="missing-size" ratio="pinterest" />
        <PainSolutionSlide pain="folder-chaos" ratio="pinterest" />
        <PainSolutionSlide pain="manual-resize" ratio="pinterest" />
        <PainSolutionSlide pain="missing-size" ratio="instagram" />
        <PainSolutionSlide pain="manual-resize" ratio="instagram" />

        {/* W15-P01 old (text-only, kept for reference) */}
        <W15GalleryWall />

        {/* W15-P02: Before/After Workflow */}
        <W15BeforeAfterWorkflow />

        {/* W15-P03: 300 DPI Cheat Sheet */}
        <W15DpiCheatSheet />

        {/* ═══ W15 Batch — Instagram Carousel (W15-I01) ═══ */}
        <W15I01Slide01 />
        <W15I01Slide02 />
        <W15I01Slide03 />
        <W15I01Slide04 />
        <W15I01Slide05 />
        <W15I01Slide06 />
        <W15I01Slide07 />
        <W15I01Slide08 />
      </div>
    </main>
  );
}
