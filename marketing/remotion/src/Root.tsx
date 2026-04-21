import React from "react";
import { Composition } from "remotion";
import {
  TikTokVertical,
  TikTokVerticalProps,
  calculateDuration,
} from "./compositions/TikTokVertical";
import { TextSlam, TextSlamProps } from "./compositions/TextSlam";
import { BeforeAfter, BeforeAfterProps } from "./compositions/BeforeAfter";
import { CountdownReveal, CountdownRevealProps } from "./compositions/CountdownReveal";
import { StatHighlight, StatHighlightProps } from "./compositions/StatHighlight";
import { QuickList, QuickListProps } from "./compositions/QuickList";
import { PHLaunchSlideshow, PH_LAUNCH_DURATION } from "./compositions/PHLaunchSlideshow";
import {
  SlideshowVertical,
  SlideshowVerticalProps,
  calculateSlideshowDuration,
} from "./compositions/SlideshowVertical";
import {
  PortraitSlideshow,
  PortraitSlideshowProps,
  calculatePortraitDuration,
} from "./compositions/PortraitSlideshow";
import {
  InfoReveal,
  InfoRevealProps,
  calculateInfoRevealDuration,
} from "./compositions/InfoReveal";
import {
  HybridPunch,
  HybridPunchProps,
  HYBRID_PUNCH_DURATION,
} from "./compositions/HybridPunch";

const DEFAULT_PROPS: TikTokVerticalProps = {
  hook: "Stop Guessing\nPrint Sizes",
  subHook: "90% of Etsy sellers get this wrong",
  points: [
    '8×10" — #1 best seller',
    '5×7" — Perfect for cards',
    '11×14" — Statement wall art',
    '16×20" — Gallery centerpiece',
    '20×30" — Maximum impact',
  ],
  cta: "Try Free →",
};

const DEFAULT_TEXT_SLAM_PROPS: TextSlamProps = {
  phrases: ["STOP", "Resizing", "Manually.", "70 Files", "60 Seconds", "snaptosize.com"],
  cta: "Try Free →",
};

const DEFAULT_BEFORE_AFTER_PROPS: BeforeAfterProps = {
  hookQuestion: "Still resizing manually?",
  beforeTitle: "WITHOUT SnapToSize",
  beforePoints: ["1 size at a time", "15 min per listing", "Messy ZIP files"],
  afterTitle: "WITH SnapToSize",
  afterPoints: ["70 files instantly", "60 seconds total", "Organized ratio packs"],
  cta: "Try Free →",
  theme: "emerald",
};

const DEFAULT_COUNTDOWN_PROPS: CountdownRevealProps = {
  hook: "5 reasons you're\nlosing sales",
  items: [
    "Only offering one size",
    "Using 72 DPI not 300",
    "ZIP files over 20MB",
    "Messy file naming",
    "Missing ratio packs",
  ],
  cta: "Fix all 5 free →",
  theme: "sunset",
};

const DEFAULT_STAT_PROPS: StatHighlightProps = {
  stats: [
    { number: "60", unit: "percent", context: "of buyers want more than one size" },
    { number: "70", unit: "files", context: "generated from a single upload" },
    { number: "300", unit: "DPI", context: "professional print quality guaranteed" },
  ],
  cta: "Try Free →",
  theme: "midnight",
};

const DEFAULT_QUICK_LIST_PROPS: QuickListProps = {
  hook: "Etsy seller checklist",
  items: [
    "Include all 5 ratio packs",
    "300 DPI on every file",
    "ZIP under 20MB",
    "Professional file names",
    "Cover 30+ standard sizes",
  ],
  cta: "Automate it →",
  theme: "coral",
};

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="TikTokVertical"
      component={TikTokVertical}
      calculateMetadata={({ props }) => ({
        durationInFrames: calculateDuration(props.points.length),
      })}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={DEFAULT_PROPS}
    />
    <Composition
      id="TextSlam"
      component={TextSlam}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={DEFAULT_TEXT_SLAM_PROPS}
    />
    <Composition
      id="BeforeAfter"
      component={BeforeAfter}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={DEFAULT_BEFORE_AFTER_PROPS}
    />
    <Composition
      id="CountdownReveal"
      component={CountdownReveal}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={DEFAULT_COUNTDOWN_PROPS}
    />
    <Composition
      id="StatHighlight"
      component={StatHighlight}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={DEFAULT_STAT_PROPS}
    />
    <Composition
      id="QuickList"
      component={QuickList}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={DEFAULT_QUICK_LIST_PROPS}
    />
    <Composition
      id="SlideshowVertical"
      component={SlideshowVertical}
      calculateMetadata={({ props }) => ({
        durationInFrames: calculateSlideshowDuration(props.slides.length),
      })}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        hook: "Top 5 Sizes\nBuyers Search",
        hookSub: "Are you offering all of them?",
        slides: [
          { image: "slide-02-8x10.png", label: "Most Popular", text: "8×10 — The Bestseller" },
          { image: "slide-03-5x7.png", label: "Gift Favorite", text: "5×7 — Cards & Small Frames" },
          { image: "slide-04-16x20.png", label: "Gallery Star", text: "16×20 — Gallery Wall Hero" },
          { image: "slide-05-18x24.png", label: "Statement Piece", text: "18×24 — Large Format" },
        ],
        cta: "Get All Sizes",
        ctaSub: "One upload. 70 files. 60 seconds.",
        theme: "emerald",
        tag: "Print Tips",
      } satisfies SlideshowVerticalProps}
    />
    <Composition
      id="PortraitSlideshow"
      component={PortraitSlideshow}
      calculateMetadata={({ props }) => ({
        durationInFrames: calculatePortraitDuration(props.slides.length),
      })}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        hook: "Every Frame Size\nFrom One Upload",
        hookSub: "Stop resizing manually.",
        slides: [
          { image: "slide-gallery-wall.jpg", label: "Gallery Wall", text: "16x24, 11x14, 8x10, 5x7 -- all from one artwork" },
          { image: "slide-home-office.jpg", label: "Home Office", text: "12x16 center, 8x10 sides -- clean and professional" },
        ],
        cta: "Try Free Today",
        ctaSub: "One upload. 70 files. snaptosize.com",
        theme: "emerald",
        tag: "Etsy Seller Tips",
      } satisfies PortraitSlideshowProps}
    />
    <Composition
      id="PHLaunchSlideshow"
      component={PHLaunchSlideshow}
      durationInFrames={PH_LAUNCH_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="HybridPunch"
      component={HybridPunch}
      durationInFrames={HYBRID_PUNCH_DURATION}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        hook: "You're Only\nOffering One Size.",
        hookSub: "Your buyers want three. You're losing the others.",
        proofImage: "slide-before-after.jpg",
        proofLabel: "8×10 · 11×14 · 16×20\nAll from one upload.",
        mechanism: "One Upload.\n70 Files.",
        cta: "Fix It Free",
        ctaSub: "60 seconds · 300 DPI · snaptosize.com",
        theme: "emerald" as const,
        tag: "Etsy Seller Tips",
      } satisfies HybridPunchProps}
    />
    <Composition
      id="InfoReveal"
      component={InfoReveal}
      calculateMetadata={({ props }) => ({
        durationInFrames: calculateInfoRevealDuration(props.slides.length),
      })}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        hook: "Sizes Your Buyers\nActually Search For",
        hookSub: "Etsy sellers — stop guessing.",
        slides: [
          "slide-landscape-sizes.jpg",
          "slide-living-room-sizes.jpg",
          "slide-nursery-sizes.jpg",
        ],
        cta: "Every Size.\nOne Upload.",
        ctaSub: "70 files · 60 seconds · 300 DPI",
        theme: "emerald" as const,
        tag: "Etsy Seller Tips",
      } satisfies InfoRevealProps}
    />
  </>
);
