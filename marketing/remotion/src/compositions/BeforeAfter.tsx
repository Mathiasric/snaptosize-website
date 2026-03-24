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

export interface BeforeAfterProps {
  hookQuestion: string;
  beforeTitle: string;
  beforePoints: string[];
  afterTitle: string;
  afterPoints: string[];
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({
  hookQuestion,
  beforeTitle,
  beforePoints,
  afterTitle,
  afterPoints,
  cta,
  theme,
  episodeTag,
}) => {
  const themeColors = THEMES[theme || "default"] || THEMES.default;
  Object.assign(BRAND.colors, themeColors);

  return (
    <AbsoluteFill>
      <AnimatedBackground variant="diagonal-sweep" />

      <Sequence from={0} durationInFrames={60}>
        <HookScene text={hookQuestion} />
      </Sequence>

      <SceneTransition startFrame={60} duration={15} type="accent-flash" />

      <Sequence from={75} durationInFrames={135}>
        <BeforeScene title={beforeTitle} points={beforePoints} />
      </Sequence>

      <Sequence from={210} durationInFrames={15}>
        <WipeTransition />
      </Sequence>

      <Sequence from={225} durationInFrames={135}>
        <AfterScene title={afterTitle} points={afterPoints} />
      </Sequence>

      <SceneTransition startFrame={360} duration={15} type="zoom-blur" />

      <Sequence from={375} durationInFrames={75}>
        <CTAScene cta={cta} />
      </Sequence>

      <BrandWatermark episodeTag={episodeTag} />
    </AbsoluteFill>
  );
};

const HookScene: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    damping: 12,
    stiffness: 80,
    mass: 0.8,
  });

  const opacity = interpolate(frame, [0, 20], [0, 1], {
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
          fontWeight: 900,
          color: BRAND.colors.textWhite,
          textAlign: "center",
          lineHeight: 1.2,
          transform: `scale(${scale})`,
          opacity,
          textShadow: `0 4px 16px ${BRAND.colors.accentGlow}`,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};

const BeforeScene: React.FC<{ title: string; points: string[] }> = ({
  title,
  points,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleY = spring({
    frame,
    fps,
    damping: 10,
    stiffness: 100,
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: BRAND.colors.bgDark,
          opacity: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(239, 68, 68, 0.1)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${(1 - titleY) * -30}px)`,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontFamily: BRAND.fonts.heading,
            fontWeight: 800,
            color: "#ef4444",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 400,
          left: BRAND.spacing.pagePadding,
          right: BRAND.spacing.pagePadding,
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {points.map((point, i) => (
          <BeforePoint key={i} text={point} delay={20 + i * 15} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

const BeforePoint: React.FC<{ text: string; delay: number }> = ({
  text,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);

  const translateX = spring({
    frame: adjustedFrame,
    fps,
    damping: 12,
    stiffness: 100,
    from: -300,
    to: 0,
  });

  const iconScale = spring({
    frame: adjustedFrame,
    fps,
    damping: 8,
    stiffness: 120,
    from: 2,
    to: 1,
  });

  const opacity = frame >= delay ? 1 : 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 32,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          fontSize: 64,
          transform: `scale(${iconScale})`,
          color: "#ef4444",
          flexShrink: 0,
          filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))",
        }}
      >
        ✗
      </div>
      <div
        style={{
          fontSize: 44,
          fontFamily: BRAND.fonts.body,
          fontWeight: 600,
          color: BRAND.colors.textMuted,
          lineHeight: 1.3,
        }}
      >
        {text}
      </div>
    </div>
  );
};

const WipeTransition: React.FC = () => {
  const frame = useCurrentFrame();

  const position = interpolate(frame, [0, 15], [-80, 1080], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ zIndex: 50 }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: position,
          width: 80,
          height: 1920,
          background: `linear-gradient(90deg, transparent, ${BRAND.colors.accent}, transparent)`,
          boxShadow: `0 0 60px ${BRAND.colors.accentGlow}`,
        }}
      />
    </AbsoluteFill>
  );
};

const AfterScene: React.FC<{ title: string; points: string[] }> = ({
  title,
  points,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleY = spring({
    frame,
    fps,
    damping: 10,
    stiffness: 100,
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: BRAND.colors.bgDark,
          opacity: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: `${BRAND.colors.accent}1a`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${(1 - titleY) * -30}px)`,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontFamily: BRAND.fonts.heading,
            fontWeight: 800,
            color: BRAND.colors.accent,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 400,
          left: BRAND.spacing.pagePadding,
          right: BRAND.spacing.pagePadding,
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {points.map((point, i) => (
          <AfterPoint key={i} text={point} delay={20 + i * 15} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

const AfterPoint: React.FC<{ text: string; delay: number }> = ({
  text,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);

  const translateX = spring({
    frame: adjustedFrame,
    fps,
    damping: 12,
    stiffness: 100,
    from: -300,
    to: 0,
  });

  const iconScale = spring({
    frame: adjustedFrame,
    fps,
    damping: 8,
    stiffness: 120,
    from: 2,
    to: 1,
  });

  const opacity = frame >= delay ? 1 : 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 32,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          fontSize: 64,
          transform: `scale(${iconScale})`,
          color: "#22c55e",
          flexShrink: 0,
          filter: "drop-shadow(0 0 12px rgba(34, 197, 94, 0.6))",
        }}
      >
        ✓
      </div>
      <div
        style={{
          fontSize: 44,
          fontFamily: BRAND.fonts.body,
          fontWeight: 600,
          color: BRAND.colors.textWhite,
          lineHeight: 1.3,
        }}
      >
        {text}
      </div>
    </div>
  );
};

const CTAScene: React.FC<{ cta: string }> = ({ cta }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CallToAction text={cta} delay={0} />
    </AbsoluteFill>
  );
};
