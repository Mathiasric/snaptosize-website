import type { Metadata } from "next";
import PackSpotlight from "./_components/PackSpotlight";
import BeforeAfter from "./_components/BeforeAfter";
import WorkflowSteps from "./_components/WorkflowSteps";
import BrightPackShowcase from "./_components/BrightPackShowcase";
import W15GalleryWall from "./_components/W15GalleryWall";
import W15FoxPackShowcase from "./_components/W15FoxPackShowcase";
import NeonPackShowcase from "./_components/NeonPackShowcase";
import NeonStatsHero from "./_components/NeonStatsHero";
import RatioProofShowcase from "./_components/RatioProofShowcase";
import RatioSplitShowcase from "./_components/RatioSplitShowcase";
import PainSolutionSlide from "./_components/PainSolutionSlide";
import W15BeforeAfterWorkflow from "./_components/W15BeforeAfterWorkflow";
import W15DpiCheatSheet from "./_components/W15DpiCheatSheet";
import StatsCard from "./_components/StatsCard";
import Checklist from "./_components/Checklist";
import FrameMatrixVisual from "./_components/FrameMatrixVisual";
import PopularFrameBrands from "./_components/PopularFrameBrands";
import WeddingSuiteSizes from "./_components/WeddingSuiteSizes";
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
        {/* ═══ Frame guide visuals ═══ */}
        <FrameMatrixVisual />
        <PopularFrameBrands />
        <WeddingSuiteSizes />

        {/* ═══ Template 1: Pack Spotlight ═══ */}
        <PackSpotlight ratio="pinterest" />
        <PackSpotlight ratio="instagram" />

        {/* ═══ Template 2: Before / After ═══ */}
        <BeforeAfter ratio="pinterest" />
        <BeforeAfter ratio="instagram" />

        {/* ═══ Template 3: Workflow Steps ═══ */}
        <WorkflowSteps ratio="pinterest" />
        <WorkflowSteps ratio="instagram" />

        {/* ═══ Template 4: Bright Pack Showcase (light bg, real artwork) ═══ */}
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

        {/* ═══ W16 Batch ═══ */}
        {/* W16-P03: Floral Vase Art — fresh artwork, Pinterest */}
        <NeonPackShowcase artwork="floral_vase" name="Floral Vase Art" ratio="pinterest" />
        <NeonPackShowcase artwork="minimalist_abstract" name="Minimalist Abstract" ratio="pinterest" />
        <NeonPackShowcase artwork="into_the_light_abstarct" name="Into the Light" ratio="pinterest" />
        {/* ═══ W17 Batch — Day 2 ═══ */}
        {/* W17-P07: Owl Folk Art — NeonPackShowcase Pinterest */}
        <NeonPackShowcase artwork="owl" name="Owl Folk Art" ratio="pinterest" />
        <NeonPackShowcase artwork="salmon" name="Salmon" ratio="instagram" />
        {/* ═══ W16 This-batch ═══ */}
        {/* W16-P01: floral_vase NeonPackShowcase — already rendered above */}
        {/* W16-I01: NeonStatsHero candidates */}
        <NeonStatsHero artwork="landscape_abstract" name="Landscape Abstract" ratio="instagram" />
        <NeonStatsHero artwork="neutral_abstract" name="Neutral Abstract" ratio="instagram" />
        <NeonStatsHero artwork="into_the_light_abstarct" name="Into the Light" ratio="instagram" />

        {/* ═══ Ratio Split Showcase — "One upload. Every ratio." ═══ */}
        <RatioSplitShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
        <RatioSplitShowcase artwork="misty_lake" name="Misty Lake" ratio="pinterest" />
        <RatioSplitShowcase artwork="fox" name="Fox Illustration" ratio="instagram" />
        <RatioSplitShowcase artwork="landscape_abstract" name="Landscape Abstract" ratio="instagram" />

        {/* ═══ Ratio Proof Showcase — "Same file. Every frame." ═══ */}
        <RatioProofShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
        <RatioProofShowcase artwork="misty_lake" name="Misty Lake" ratio="pinterest" />
        <RatioProofShowcase artwork="landscape_abstract" name="Landscape Abstract" ratio="instagram" />
        {/* W17-I04: Owl Folk Art — RatioProofShowcase Instagram */}
        <RatioProofShowcase artwork="owl" name="Owl Folk Art" ratio="instagram" />
        {/* W18-I01: Deer Portrait — RatioProofShowcase Instagram */}
        <RatioProofShowcase artwork="deer" name="Deer Portrait" ratio="instagram" />
        {/* W18-I02: Misty Lake — RatioProofShowcase Instagram */}
        <RatioProofShowcase artwork="misty_lake" name="Misty Lake" ratio="instagram" />
        {/* W18-P06: Mystical Portal — NeonPackShowcase Pinterest */}
        <NeonPackShowcase artwork="mysthical_portal" name="Mystical Portal" ratio="pinterest" />

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
