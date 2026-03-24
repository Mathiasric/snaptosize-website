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

export interface CountdownRevealProps {
  hook: string;
  items: string[];
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}

export const CountdownReveal: React.FC<CountdownRevealProps> = ({
  hook,
  items,
  cta,
  theme,
  episodeTag,
}) => {
  const themeColors = THEMES[theme || "default"] || THEMES.default;
  Object.assign(BRAND.colors, themeColors);

  if (items.length !== 5) {
    throw new Error("CountdownReveal requires exactly 5 items");
  }

  const reversedItems = [...items].reverse();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.colors.bgDark,
      }}
    >
      <AnimatedBackground variant="pulse-glow" />

      {episodeTag && (
        <div
          style={{
            position: "absolute",
            top: 80,
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

      <Sequence from={0} durationInFrames={50}>
        <HookScene hook={hook} />
      </Sequence>

      <Sequence from={50} durationInFrames={10}>
        <SceneTransition startFrame={0} duration={10} type="accent-flash" />
      </Sequence>

      {reversedItems.map((item, index) => {
        const number = 5 - index;
        const startFrame = 60 + index * 65;
        return (
          <Sequence
            key={number}
            from={startFrame}
            durationInFrames={65}
          >
            <CountdownItem number={number} text={item} />
          </Sequence>
        );
      })}

      <Sequence from={385} durationInFrames={65}>
        <AbsoluteFill
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CallToAction text={cta} delay={0} subtitle="Link in bio" />
        </AbsoluteFill>
      </Sequence>

      <BrandWatermark episodeTag={undefined} />
    </AbsoluteFill>
  );
};

const HookScene: React.FC<{ hook: string }> = ({ hook }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleSpring = spring({
    frame,
    fps,
    damping: 12,
    stiffness: 80,
    mass: 0.8,
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: BRAND.spacing.pagePadding,
      }}
    >
      <div
        style={{
          fontSize: BRAND.sizes.hookText,
          fontFamily: BRAND.fonts.heading,
          fontWeight: 800,
          color: BRAND.colors.textWhite,
          textAlign: "center",
          lineHeight: 1.1,
          maxWidth: 900,
          transform: `scale(${scaleSpring})`,
          opacity,
        }}
      >
        {hook}
      </div>
    </AbsoluteFill>
  );
};

const CountdownItem: React.FC<{ number: number; text: string }> = ({
  number,
  text,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numberSlamSpring = spring({
    frame,
    fps,
    damping: 6,
    stiffness: 120,
    mass: 1.2,
  });

  const numberScale = interpolate(
    frame,
    [0, 12, 18],
    [5, 1, 0.25],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const numberTop = interpolate(
    frame,
    [12, 18],
    [960, 80],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const numberLeft = interpolate(
    frame,
    [12, 18],
    [540, 60],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const numberOpacity = interpolate(
    frame,
    [0, 8, 55, 65],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const textDelayedFrame = Math.max(0, frame - 18);
  const textSpring = spring({
    frame: textDelayedFrame,
    fps,
    damping: 10,
    stiffness: 90,
    mass: 0.7,
  });

  const textTranslateY = interpolate(
    textSpring,
    [0, 1],
    [200, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const textOpacity = interpolate(
    frame,
    [18, 25, 55, 65],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const appliedNumberScale = frame < 12 ? numberSlamSpring * numberScale : numberScale;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: frame < 12 ? "50%" : numberTop,
          left: frame < 12 ? "50%" : numberLeft,
          transform:
            frame < 12
              ? `translate(-50%, -50%) scale(${appliedNumberScale})`
              : `translate(-50%, -50%) scale(${numberScale})`,
          fontSize: 400,
          fontFamily: BRAND.fonts.heading,
          fontWeight: 900,
          color: BRAND.colors.accent,
          opacity: numberOpacity,
          textShadow: `
            0 0 40px ${BRAND.colors.accentGlow},
            0 0 80px ${BRAND.colors.accentGlow},
            0 4px 20px rgba(0, 0, 0, 0.5)
          `,
          lineHeight: 1,
        }}
      >
        {number}
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${textTranslateY}px)`,
          fontSize: 52,
          fontFamily: BRAND.fonts.heading,
          fontWeight: 700,
          color: BRAND.colors.textWhite,
          textAlign: "center",
          maxWidth: 900,
          lineHeight: 1.2,
          padding: `0 ${BRAND.spacing.pagePadding}px`,
          opacity: textOpacity,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
