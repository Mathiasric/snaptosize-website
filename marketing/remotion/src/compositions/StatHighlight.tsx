import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { BRAND, THEMES, ThemeName } from "../styles/brand";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { BrandWatermark } from "../components/BrandWatermark";
import { CallToAction } from "../components/CallToAction";
import { SceneTransition } from "../components/SceneTransition";

export interface StatHighlightProps {
  stats: Array<{
    number: string;
    unit?: string;
    context: string;
  }>;
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}

const StatScene: React.FC<{
  stat: { number: string; unit?: string; context: string };
}> = ({ stat }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Parse number for counter animation
  const numericValue = parseFloat(stat.number);
  const isNumeric = !isNaN(numericValue);

  // Frame 0-8: Number counter animation
  const counterValue = isNumeric
    ? interpolate(frame, [0, 8], [0, numericValue], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  const displayNumber = isNumeric ? Math.round(counterValue) : stat.number;

  // Frame 8-15: Number settles with spring bounce
  const numberScale = spring({
    frame: Math.max(0, frame - 8),
    fps,
    damping: 10,
    stiffness: 120,
    mass: 0.8,
    overshootClamping: false,
    config: {
      mass: 0.8,
      damping: 10,
      stiffness: 120,
    },
  });

  const numberScaleValue = interpolate(
    numberScale,
    [0, 1],
    [isNumeric ? 0 : 0, 1],
    { extrapolateRight: "clamp" }
  );

  // Add overshoot effect
  const overshoot = interpolate(frame, [8, 15], [1.1, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const finalNumberScale = numberScaleValue * overshoot;

  // Frame 0-8: Base opacity for counter
  const numberOpacity = interpolate(frame, [0, 2], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Frame 15-22: Unit text fades in
  const unitOpacity = interpolate(frame, [15, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Frame 22-55: Context sentence springs up from bottom
  const contextSpring = spring({
    frame: Math.max(0, frame - 22),
    fps,
    damping: 12,
    stiffness: 100,
    mass: 1,
  });

  const contextY = interpolate(contextSpring, [0, 1], [150, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const contextOpacity = interpolate(frame, [22, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Frame 110-120: Everything fades out
  const fadeOutOpacity = interpolate(frame, [110, 120], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const masterOpacity = Math.min(numberOpacity, fadeOutOpacity);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      {/* Number */}
      <div
        style={{
          fontSize: 280,
          color: BRAND.colors.accent,
          fontWeight: 900,
          fontFamily: BRAND.fonts.heading,
          textAlign: "center",
          lineHeight: 1,
          textShadow: `0 0 60px ${BRAND.colors.accentGlow}`,
          opacity: masterOpacity,
          transform: `scale(${finalNumberScale})`,
          willChange: "transform, opacity",
        }}
      >
        {isNumeric ? displayNumber : stat.number}
      </div>

      {/* Unit */}
      {stat.unit && (
        <div
          style={{
            fontSize: 48,
            color: BRAND.colors.textMuted,
            fontWeight: 600,
            fontFamily: BRAND.fonts.heading,
            textTransform: "uppercase",
            letterSpacing: 4,
            opacity: unitOpacity * fadeOutOpacity,
            marginTop: -20,
          }}
        >
          {stat.unit}
        </div>
      )}

      {/* Context */}
      <div
        style={{
          fontSize: 44,
          color: BRAND.colors.textWhite,
          fontWeight: 600,
          fontFamily: BRAND.fonts.body,
          textAlign: "center",
          maxWidth: 850,
          lineHeight: 1.3,
          opacity: contextOpacity * fadeOutOpacity,
          transform: `translateY(${contextY}px)`,
          willChange: "transform, opacity",
        }}
      >
        {stat.context}
      </div>
    </AbsoluteFill>
  );
};

export const StatHighlight: React.FC<StatHighlightProps> = ({
  stats,
  cta,
  theme,
  episodeTag,
}) => {
  const themeColors = THEMES[theme || "default"] || THEMES.default;
  Object.assign(BRAND.colors, themeColors);

  return (
    <AbsoluteFill>
      <AnimatedBackground variant="minimal-dots" />

      {/* Episode tag at top center */}
      {episodeTag && (
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: BRAND.sizes.episodeTag,
            color: BRAND.colors.accent,
            fontFamily: BRAND.fonts.mono,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          {episodeTag}
        </div>
      )}

      {/* Stat sequences - 120 frames each */}
      {stats.map((stat, index) => (
        <Sequence
          key={index}
          from={index * 120}
          durationInFrames={120}
          layout="none"
        >
          <StatScene stat={stat} />
        </Sequence>
      ))}

      {/* Transitions between stats */}
      {stats.slice(0, -1).map((_, index) => (
        <SceneTransition
          key={`transition-${index}`}
          startFrame={(index + 1) * 120 - 10}
          duration={10}
          type="accent-flash"
        />
      ))}

      {/* CTA sequence: 360-450 (90 frames) */}
      <Sequence from={360} durationInFrames={90} layout="none">
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CallToAction text={cta} delay={0} subtitle="Link in bio" />
        </AbsoluteFill>
      </Sequence>

      <BrandWatermark episodeTag={undefined} />
    </AbsoluteFill>
  );
};
