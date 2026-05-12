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
import RatioCropProof from "./_components/RatioCropProof";
import RatioSplitShowcase from "./_components/RatioSplitShowcase";
import PainSolutionSlide from "./_components/PainSolutionSlide";
import W15BeforeAfterWorkflow from "./_components/W15BeforeAfterWorkflow";
import W15DpiCheatSheet from "./_components/W15DpiCheatSheet";
import StatsCard from "./_components/StatsCard";
import Top5FrameFitShowcase from "./_components/Top5FrameFitShowcase";
import Top5MistakesShowcase from "./_components/Top5MistakesShowcase";
import ChecklistPinP03 from "./_components/ChecklistPinP03";
import W21PriceLadderPin from "./_components/W21PriceLadderPin";
import W21ResolutionGuide from "./_components/W21ResolutionGuide";
import W22IntlSizeGuide from "./_components/W22IntlSizeGuide";
import W22RatioPacksPin from "./_components/W22RatioPacksPin";
import {
  EC01Slide01,
  EC01Slide02,
  EC01Slide03,
  EC01Slide04,
  EC01Slide05,
} from "./_components/EtsyCarousel01";
import {
  EC02Slide01,
  EC02Slide02,
  EC02Slide03,
  EC02Slide04,
  EC02Slide05,
} from "./_components/EtsyCarousel02";
import {
  EC03Slide01,
  EC03Slide02,
  EC03Slide03,
  EC03Slide04,
  EC03Slide05,
} from "./_components/EtsyCarousel03";
import {
  EC04Slide01,
  EC04Slide02,
  EC04Slide03,
  EC04Slide04,
  EC04Slide05,
} from "./_components/EtsyCarousel04";
import {
  EC05Slide01,
  EC05Slide02,
  EC05Slide03,
  EC05Slide04,
  EC05Slide05,
} from "./_components/EtsyCarousel05";
import {
  EC06Slide01,
  EC06Slide02,
  EC06Slide03,
  EC06Slide04,
  EC06Slide05,
} from "./_components/EtsyCarousel06";
import {
  EC07Slide01,
  EC07Slide02,
  EC07Slide03,
  EC07Slide04,
  EC07Slide05,
} from "./_components/EtsyCarousel07";
import {
  EC08Slide01,
  EC08Slide02,
  EC08Slide03,
  EC08Slide04,
  EC08Slide05,
} from "./_components/EtsyCarousel08";
import {
  EC09Slide01,
  EC09Slide02,
  EC09Slide03,
  EC09Slide04,
  EC09Slide05,
} from "./_components/EtsyCarousel09";
import {
  EC10Slide01,
  EC10Slide02,
  EC10Slide03,
  EC10Slide04,
  EC10Slide05,
} from "./_components/EtsyCarousel10";
import {
  EC11Slide01,
  EC11Slide02,
  EC11Slide03,
  EC11Slide04,
  EC11Slide05,
} from "./_components/EtsyCarousel11";
import {
  EC12Slide01,
  EC12Slide02,
  EC12Slide03,
  EC12Slide04,
  EC12Slide05,
} from "./_components/EtsyCarousel12";
import Checklist from "./_components/Checklist";
import Top5SizesShowcase from "./_components/Top5SizesShowcase";
import FrameMatrixVisual from "./_components/FrameMatrixVisual";
import PopularFrameBrands from "./_components/PopularFrameBrands";
import WeddingSuiteSizes from "./_components/WeddingSuiteSizes";
import W22SizeDemandPin from "./_components/W22SizeDemandPin";
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

        {/* W20-P16 Top 5 Etsy print sizes */}
        <div id="top5-sizes-showcase" data-testid="top5-sizes-showcase">
          <Top5SizesShowcase />
        </div>
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
        {/* W20-P10: Bunny Sketch — RatioSplitShowcase Pinterest (2026-05-02) */}
        <RatioSplitShowcase artwork="bunny" name="Bunny Sketch" ratio="pinterest" />
        <RatioSplitShowcase artwork="fox" name="Fox Illustration" ratio="instagram" />
        <RatioSplitShowcase artwork="landscape_abstract" name="Landscape Abstract" ratio="instagram" />

        {/* ═══ Ratio Proof Showcase — "Same file. Every frame." ═══ */}
        <RatioProofShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
        <RatioProofShowcase artwork="misty_lake" name="Misty Lake" ratio="pinterest" />
        {/* W20-P03 (May 02): Into the Light — RatioProofShowcase Pinterest */}
        <RatioProofShowcase artwork="into_the_light_abstarct" name="Into the Light" ratio="pinterest" />
        <RatioProofShowcase artwork="landscape_abstract" name="Landscape Abstract" ratio="instagram" />
        {/* W17-I04: Owl Folk Art — RatioProofShowcase Instagram */}
        <RatioProofShowcase artwork="owl" name="Owl Folk Art" ratio="instagram" />
        {/* W18-I01: Deer Portrait — RatioProofShowcase Instagram */}
        <RatioProofShowcase artwork="deer" name="Deer Portrait" ratio="instagram" />
        {/* W18-I02: Misty Lake — RatioProofShowcase Instagram */}
        <RatioProofShowcase artwork="misty_lake" name="Misty Lake" ratio="instagram" />

        {/* W19-I01: Little Deer Quote — RatioProofShowcase Instagram */}
        <RatioProofShowcase artwork="littledeerquote" name="Little Deer Quote" ratio="instagram" />

        {/* W19-I02 (23.04 v2): Floral Vase — RatioProofShowcase Instagram (FRESH artwork, complete files) */}
        <RatioProofShowcase artwork="floral_vase" name="Floral Vase Art" ratio="instagram" />

        {/* W19-P06 (23.04 v3): Slothing Through Life — NeonPackShowcase Pinterest */}
        <NeonPackShowcase artwork="slothing_through_life" name="Slothing Through Life" ratio="pinterest" />
        {/* W18-P06: Mystical Portal — NeonPackShowcase Pinterest */}
        <NeonPackShowcase artwork="mysthical_portal" name="Mystical Portal" ratio="pinterest" />

        {/* W19-P03: Abstract Wedding — NeonPackShowcase Pinterest */}
        <NeonPackShowcase artwork="abstract_wedding" name="Abstract Wedding" ratio="pinterest" />

        {/* W19-P06: Neutral Abstract — NeonPackShowcase Pinterest */}
        <NeonPackShowcase artwork="neutral_abstract" name="Neutral Abstract" ratio="pinterest" />

        {/* W19-I02: Checklist — Instagram */}
        <Checklist ratio="instagram" />

        {/* W19-I19: StatsCard — Instagram */}
        <StatsCard ratio="instagram" />
        {/* W20-P19: StatsCard — Pinterest (May 6) */}
        <StatsCard ratio="pinterest" />
        {/* W20-P19: Top5FrameFitShowcase — Pinterest (May 6) */}
        <Top5FrameFitShowcase />
        {/* W20-P19b: Top5MistakesShowcase — Pinterest (May 6) */}
        <Top5MistakesShowcase />

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

        {/* W20-P01: Wildflower Botanical — NeonPackShowcase Pinterest */}
        <NeonPackShowcase artwork="wildflower_botanical_art" name="Wildflower Botanical" ratio="pinterest" />

        {/* ═══ W20-I01: Etsy Carousel — "Buyers leave when size isn't listed" ═══ */}
        <EC01Slide01 />
        <EC01Slide02 />
        <EC01Slide03 />
        <EC01Slide04 />
        <EC01Slide05 />
        <EC02Slide01 />
        <EC02Slide02 />
        <EC02Slide03 />
        <EC02Slide04 />
        <EC02Slide05 />

        {/* ═══ W22-I01: Etsy Carousel — "Etsy has a 20 MB limit. Most sellers find out when upload fails." ═══ */}
        <EC03Slide01 />
        <EC03Slide02 />
        <EC03Slide03 />
        <EC03Slide04 />
        <EC03Slide05 />

        {/* ═══ W22-I02: Etsy Carousel — "Most disappointed buyers don't leave 1★. They just don't come back." ═══ */}
        <EC04Slide01 />
        <EC04Slide02 />
        <EC04Slide03 />
        <EC04Slide04 />
        <EC04Slide05 />

        {/* ═══ EC05: 4-minute process walkthrough ═══ */}
        <EC05Slide01 />
        <EC05Slide02 />
        <EC05Slide03 />
        <EC05Slide04 />
        <EC05Slide05 />
        <EC06Slide01 />
        <EC06Slide02 />
        <EC06Slide03 />
        <EC06Slide04 />
        <EC06Slide05 />

        {/* ═══ W20-I11: EtsyCarousel07 — DPI myth-bust ═══ */}
        <EC07Slide01 />
        <EC07Slide02 />
        <EC07Slide03 />
        <EC07Slide04 />
        <EC07Slide05 />

        {/* ═══ W20-I08: EtsyCarousel08 — International buyers / metric search ═══ */}
        <EC08Slide01 />
        <EC08Slide02 />
        <EC08Slide03 />
        <EC08Slide04 />
        <EC08Slide05 />

        {/* ═══ W20-I12 (2026-05-05): EtsyCarousel09 — 73% want 4:5, you only list 2:3 ═══ */}
        <EC09Slide01 />
        <EC09Slide02 />
        <EC09Slide03 />
        <EC09Slide04 />
        <EC09Slide05 />

        {/* ═══ W20-I13 (2026-05-06): EtsyCarousel10 — 5 silent reasons Etsy prints aren't selling ═══ */}
        <EC10Slide01 />
        <EC10Slide02 />
        <EC10Slide03 />
        <EC10Slide04 />
        <EC10Slide05 />

        {/* ═══ W21-I01 (2026-05-07): EtsyCarousel11 — Same artwork. Two listings. The difference is one setting. ═══ */}
        <EC11Slide01 />
        <EC11Slide02 />
        <EC11Slide03 />
        <EC11Slide04 />
        <EC11Slide05 />

        {/* ═══ W22-I02 (2026-05-08): EtsyCarousel12 — 45 seconds. From 1 file to 30 print-ready sizes. ═══ */}
        <EC12Slide01 />
        <EC12Slide02 />
        <EC12Slide03 />
        <EC12Slide04 />
        <EC12Slide05 />

        {/* ═══ W20-P03: Anime Hero — NeonPackShowcase Pinterest ═══ */}
        <NeonPackShowcase artwork="anime-hero" name="Anime Hero" ratio="pinterest" />

        {/* ═══ W18-P03 (2026-04-30): Floral Vase — RatioCropProof Pinterest (NEW TEMPLATE) ═══ */}
        <RatioCropProof artwork="floral_vase" name="Floral Vase" ratio="pinterest" />

        {/* ═══ W20-P13 (2026-05-03): Landscape Abstract — RatioCropProof Pinterest ═══ */}
        <RatioCropProof artwork="landscape_abstract" name="Landscape Abstract" ratio="pinterest" />

        {/* ═══ W20-P03 (2026-05-04): Fox in the Forest — RatioCropProof Pinterest ═══ */}
        <div id="p03-ratio-crop-fox">
          <RatioCropProof artwork="fox" name="Fox in the Forest" ratio="pinterest" />
        </div>

        {/* ═══ W20-P03 (2026-05-04): Bright Pack Showcase — Pinterest ═══ */}
        <div id="p03-bright-pack" style={{ width: 1000, height: 1500 }}>
          <BrightPackShowcase ratio="pinterest" />
        </div>

        {/* ═══ W15 Batch — Instagram Carousel (W15-I01) ═══ */}
        <W15I01Slide01 />
        <W15I01Slide02 />
        <W15I01Slide03 />
        <W15I01Slide04 />
        <W15I01Slide05 />
        <W15I01Slide06 />
        <W15I01Slide07 />
        <W15I01Slide08 />

        {/* ═══ W21-P (2026-05-07): Price Ladder — what buyers pay per print size ═══ */}
        <W21PriceLadderPin />

        {/* ═══ W21-P03v2 (2026-05-07): Resolution Guide — min pixels per print size ═══ */}
        <W21ResolutionGuide />

        {/* ═══ W22-P03 (2026-05-08): International Size Guide — A4/A3 ref card ═══ */}
        <W22IntlSizeGuide />

        {/* ═══ W22-P06 (2026-05-09): Ratio Packs Breakdown — 1 Upload → 5 Packs → 70 Files ═══ */}
        <W22RatioPacksPin />

        {/* ═══ W22-R1 (2026-05-12): Size Demand Pin — 7 sizes buyers search most ═══ */}
        <W22SizeDemandPin />

        {/* ═══ W22 CANDIDATES — visual QA before publish ═══ */}
        <NeonStatsHero artwork="deer" name="Deer Portrait" ratio="pinterest" />
        <NeonStatsHero artwork="salmon" name="Salmon" ratio="pinterest" />
        <RatioCropProof artwork="salmon" name="Salmon" ratio="pinterest" />
        <RatioCropProof artwork="deer" name="Deer Portrait" ratio="pinterest" />
      </div>
    </main>
  );
}
