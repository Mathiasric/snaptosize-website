import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { TextOverlay } from "../components/TextOverlay";
import { CallToAction } from "../components/CallToAction";
import { BrandWatermark } from "../components/BrandWatermark";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { ProgressDots } from "../components/ProgressDots";
import { SceneTransition } from "../components/SceneTransition";
import { BRAND, THEMES, ThemeName } from "../styles/brand";

export interface TikTokVerticalProps {
  hook: string;
  subHook?: string;
  points: string[];
  cta: string;
  episodeTag?: string;
  theme?: ThemeName;
}

// Timing constants (in frames at 30fps)
const HOOK_SCENE = 75; // 2.5s — hook needs to breathe
const POINT_ENTRANCE = 50; // ~1.7s per point (spring + read time)
const POINT_READ_PAUSE = 15; // extra frames to read each point
const TRANSITION_FRAMES = 12;
const CTA_SCENE = 50; // 1.7s — spring + brief pulse, no dead air

export const calculateDuration = (pointCount: number): number => {
  return (
    HOOK_SCENE +
    TRANSITION_FRAMES +
    pointCount * (POINT_ENTRANCE + POINT_READ_PAUSE) +
    TRANSITION_FRAMES +
    CTA_SCENE
  );
};

/** Animated divider line */
const Divider: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);
  const width = spring({
    frame: adjustedFrame,
    fps,
    damping: 15,
    stiffness: 60,
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}>
      <div
        style={{
          width: width * 120,
          height: 4,
          borderRadius: 2,
          background: `linear-gradient(90deg, transparent, ${BRAND.colors.accent}, transparent)`,
        }}
      />
    </div>
  );
};

/** Single point card with number badge */
const PointCard: React.FC<{
  index: number;
  text: string;
  totalPoints: number;
}> = ({ index, text, totalPoints }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({
    frame,
    fps,
    damping: 10,
    stiffness: 80,
    mass: 0.7,
  });

  const slideX = (1 - cardSpring) * (index % 2 === 0 ? -80 : 80);

  // Compact layout when many points
  const isCompact = totalPoints >= 5;
  const padding = isCompact ? "24px 32px" : "32px 40px";
  const badgeSize = isCompact ? 52 : 64;
  const fontSize = isCompact ? Math.min(BRAND.sizes.pointText, 36) : BRAND.sizes.pointText;

  return (
    <div
      style={{
        opacity: cardSpring,
        transform: `translateX(${slideX}px)`,
        display: "flex",
        alignItems: "center",
        gap: isCompact ? 16 : 24,
        padding,
        background: BRAND.colors.surfaceLight,
        borderRadius: 16,
        borderLeft: `4px solid ${BRAND.colors.accent}`,
        willChange: "transform, opacity",
      }}
    >
      {/* Number badge */}
      <div
        style={{
          width: badgeSize,
          height: badgeSize,
          borderRadius: 12,
          background: `linear-gradient(135deg, ${BRAND.colors.accent}, ${BRAND.colors.accentLight})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isCompact ? 22 : 28,
          fontWeight: 800,
          color: BRAND.colors.textWhite,
          fontFamily: BRAND.fonts.heading,
          flexShrink: 0,
          boxShadow: `0 4px 16px ${BRAND.colors.accentGlow}`,
        }}
      >
        {index + 1}
      </div>
      {/* Text */}
      <div
        style={{
          fontSize,
          color: BRAND.colors.textWhite,
          fontFamily: BRAND.fonts.heading,
          fontWeight: 600,
          lineHeight: 1.2,
          flex: 1,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const TikTokVertical: React.FC<TikTokVerticalProps> = ({
  hook,
  subHook,
  points,
  cta,
  episodeTag,
  theme = "default",
}) => {
  // Apply theme colors
  const themeColors = THEMES[theme] || THEMES.default;
  Object.assign(BRAND.colors, themeColors);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pointsSceneStart = HOOK_SCENE + TRANSITION_FRAMES;
  const pointsSceneDuration =
    points.length * (POINT_ENTRANCE + POINT_READ_PAUSE);
  const ctaSceneStart = pointsSceneStart + pointsSceneDuration + TRANSITION_FRAMES;

  // Track which point is currently showing for progress dots
  const currentPointIndex = Math.min(
    Math.floor(
      Math.max(0, frame - pointsSceneStart) / (POINT_ENTRANCE + POINT_READ_PAUSE)
    ),
    points.length - 1
  );

  return (
    <AbsoluteFill>
      {/* Animated background with moving gradient + glow orbs */}
      <AnimatedBackground variant="gradient-shift" />

      {/* ===== SCENE 1: HOOK ===== */}
      <Sequence from={0} durationInFrames={pointsSceneStart + 30}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: BRAND.spacing.pagePadding,
            gap: 20,
          }}
        >
          {/* Episode tag */}
          {episodeTag && (
            <TextOverlay
              text={episodeTag}
              fontSize={BRAND.sizes.episodeTag}
              color={BRAND.colors.accent}
              delay={0}
              animationType="fade"
              style={{
                fontFamily: BRAND.fonts.mono,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            />
          )}

          {/* Main hook — big, bold, spring bounce */}
          <TextOverlay
            text={hook}
            fontSize={BRAND.sizes.hookText}
            delay={8}
            animationType="spring-scale"
          />

          <Divider delay={20} />

          {/* Sub-hook */}
          {subHook && (
            <TextOverlay
              text={subHook}
              fontSize={BRAND.sizes.subHookText}
              color={BRAND.colors.textLight}
              delay={30}
              animationType="spring-up"
              style={{ fontWeight: 500 }}
            />
          )}
        </AbsoluteFill>
      </Sequence>

      {/* Transition: hook → points */}
      <SceneTransition
        startFrame={HOOK_SCENE}
        duration={TRANSITION_FRAMES}
        type="accent-flash"
      />

      {/* ===== SCENE 2: POINTS (one at a time) ===== */}
      {points.map((point, i) => {
        const pointStart =
          pointsSceneStart + i * (POINT_ENTRANCE + POINT_READ_PAUSE);
        const pointDuration =
          ctaSceneStart + CTA_SCENE - pointStart;

        // Dynamic spacing: fit all points between top=280 and bottom=1720
        const availableHeight = 1440; // 1720 - 280
        const cardHeight = Math.min(availableHeight / points.length, 300);
        const topOffset = 280 + i * cardHeight;

        return (
          <Sequence key={i} from={pointStart} durationInFrames={pointDuration}>
            <div
              style={{
                position: "absolute",
                top: topOffset,
                left: BRAND.spacing.pagePadding - 20,
                right: BRAND.spacing.pagePadding - 20,
              }}
            >
              <PointCard
                index={i}
                text={point}
                totalPoints={points.length}
              />
            </div>
          </Sequence>
        );
      })}

      {/* Progress dots (visible during points scene) */}
      <Sequence from={pointsSceneStart} durationInFrames={pointsSceneDuration + CTA_SCENE}>
        <div
          style={{
            position: "absolute",
            top: 240,
            left: 0,
            right: 0,
          }}
        >
          <ProgressDots
            total={points.length}
            current={currentPointIndex}
            delay={0}
          />
        </div>
      </Sequence>

      {/* Transition: points → CTA */}
      <SceneTransition
        startFrame={ctaSceneStart - TRANSITION_FRAMES}
        duration={TRANSITION_FRAMES}
        type="accent-flash"
      />

      {/* ===== SCENE 3: CTA ===== */}
      <Sequence from={ctaSceneStart} durationInFrames={CTA_SCENE}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 120,
          }}
        >
          <CallToAction text={cta} delay={10} />
        </AbsoluteFill>
      </Sequence>

      {/* Watermark — always visible */}
      <BrandWatermark episodeTag={episodeTag ? undefined : undefined} />
    </AbsoluteFill>
  );
};
