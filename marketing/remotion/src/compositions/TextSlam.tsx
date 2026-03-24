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

export interface TextSlamProps {
  phrases: string[];
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}

export const TextSlam: React.FC<TextSlamProps> = ({
  phrases,
  cta,
  theme,
  episodeTag,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Apply theme
  const themeColors = THEMES[theme || "default"] || THEMES.default;
  Object.assign(BRAND.colors, themeColors);

  // Timing calculation
  const phraseDuration = Math.floor(390 / phrases.length);
  const ctaStart = 390;
  const ctaDuration = 60;

  // Calculate dynamic font size based on phrase lengths
  const maxPhraseLength = Math.max(...phrases.map((p) => p.length));
  const baseFontSize = Math.min(200, 900 / maxPhraseLength);

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.colors.bgDark }}>
      {/* Background */}
      <AnimatedBackground variant="pulse-glow" />

      {/* Episode tag at top */}
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
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: interpolate(frame, [0, 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          {episodeTag}
        </div>
      )}

      {/* Phrases */}
      {phrases.map((phrase, index) => {
        const startFrame = index * phraseDuration;
        const endFrame = startFrame + phraseDuration;

        return (
          <Sequence
            key={index}
            from={startFrame}
            durationInFrames={phraseDuration}
          >
            <PhraseSlam
              phrase={phrase}
              index={index}
              baseFontSize={baseFontSize}
              fps={fps}
            />
          </Sequence>
        );
      })}

      {/* CTA */}
      <Sequence from={ctaStart} durationInFrames={ctaDuration}>
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

      {/* Brand watermark */}
      <BrandWatermark episodeTag={undefined} />
    </AbsoluteFill>
  );
};

interface PhraseSlamProps {
  phrase: string;
  index: number;
  baseFontSize: number;
  fps: number;
}

const PhraseSlam: React.FC<PhraseSlamProps> = ({
  phrase,
  index,
  baseFontSize,
  fps,
}) => {
  const frame = useCurrentFrame();

  // Scale animation: 3 → 1 with spring
  const scaleProgress = spring({
    frame,
    fps,
    config: {
      damping: 15,
      stiffness: 200,
      mass: 0.6,
    },
    from: 3,
    to: 1,
  });

  // Rotation animation: alternate between -2° and +2° to 0°
  const isEven = index % 2 === 0;
  const rotationProgress = spring({
    frame,
    fps,
    config: {
      damping: 15,
      stiffness: 200,
      mass: 0.6,
    },
    from: isEven ? -2 : 2,
    to: 0,
  });

  // Offset X position: cycle through left, center, right
  const xOffset = (index % 3 - 1) * 40;

  // Dynamic font size: scale up more for shorter phrases
  const phraseLength = phrase.length;
  const fontSizeMultiplier = phraseLength <= 4 ? 1.5 : phraseLength <= 8 ? 1.2 : 1;
  const fontSize = baseFontSize * fontSizeMultiplier;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: BRAND.fonts.heading,
          fontWeight: 900,
          fontSize: fontSize,
          color: BRAND.colors.textWhite,
          textAlign: "center",
          transform: `scale(${scaleProgress}) rotate(${rotationProgress}deg) translateX(${xOffset}px)`,
          textShadow: `
            0 4px 8px rgba(0, 0, 0, 0.5),
            0 8px 16px rgba(0, 0, 0, 0.3),
            0 0 40px ${BRAND.colors.accentGlow}
          `,
          lineHeight: 1.1,
          maxWidth: "90%",
          wordWrap: "break-word",
          willChange: "transform",
        }}
      >
        {phrase}
      </div>
    </AbsoluteFill>
  );
};
