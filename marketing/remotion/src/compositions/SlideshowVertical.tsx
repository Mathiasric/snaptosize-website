import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  interpolate,
} from "remotion";
import { BRAND, THEMES } from "../styles/brand";
import { BrandWatermark } from "../components/BrandWatermark";

export interface SlideshowSlide {
  image: string; // filename in public/
  label: string;
  text: string;
}

export interface SlideshowVerticalProps {
  hook: string;
  hookSub: string;
  slides: SlideshowSlide[];
  cta: string;
  ctaSub: string;
  theme?: keyof typeof THEMES;
  tag?: string;
}

// Timing
const INTRO_DURATION = 75;
const SLIDE_DURATION = 105;
const SLIDE_TRANSITION = 15;
const OUTRO_DURATION = 75;

export function calculateSlideshowDuration(slideCount: number): number {
  return (
    INTRO_DURATION +
    slideCount * SLIDE_DURATION -
    (slideCount - 1) * SLIDE_TRANSITION +
    OUTRO_DURATION
  );
}

/* ─── Intro ─── */
const IntroScene: React.FC<{ hook: string; hookSub: string }> = ({
  hook,
  hookSub,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const colors = THEMES.emerald;

  const textY = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 60 },
  });
  const textOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [25, 40], [0, 1], {
    extrapolateRight: "clamp",
  });
  const exitOpacity = interpolate(
    frame,
    [INTRO_DURATION - 15, INTRO_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: exitOpacity,
      }}
    >
      <Img
        src={staticFile("logo-240x240.png")}
        style={{
          width: 72,
          height: 72,
          borderRadius: 16,
          marginBottom: 40,
          transform: `scale(${textY})`,
        }}
      />
      <div
        style={{
          fontFamily: BRAND.fonts.heading,
          fontSize: 72,
          fontWeight: 800,
          color: colors.textWhite,
          textAlign: "center",
          lineHeight: 1.15,
          opacity: textOpacity,
          transform: `translateY(${interpolate(textY, [0, 1], [40, 0])}px)`,
          maxWidth: 900,
          padding: "0 48px",
          whiteSpace: "pre-line",
        }}
      >
        {hook}
      </div>
      <div
        style={{
          fontFamily: BRAND.fonts.body,
          fontSize: 32,
          color: colors.textMuted,
          textAlign: "center",
          marginTop: 28,
          opacity: subOpacity,
        }}
      >
        {hookSub}
      </div>
    </AbsoluteFill>
  );
};

/* ─── Slide ─── */
const SlideCard: React.FC<{
  slide: SlideshowSlide;
  index: number;
  total: number;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ slide, index, total, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 70, mass: 0.8 },
  });
  const cardY = interpolate(cardSpring, [0, 1], [60, 0]);
  const cardOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });
  const labelOpacity = interpolate(frame, [12, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const textOpacity = interpolate(frame, [22, 38], [0, 1], {
    extrapolateRight: "clamp",
  });
  const textScale = spring({
    frame: frame - 22,
    fps,
    config: { damping: 14, stiffness: 60 },
  });
  const glowPulse = Math.sin(frame * 0.06) * 0.15 + 0.85;
  const exitOpacity = interpolate(
    frame,
    [SLIDE_DURATION - 15, SLIDE_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: exitOpacity,
        padding: "0 48px",
      }}
    >
      <div
        style={{
          fontFamily: BRAND.fonts.mono,
          fontSize: 22,
          fontWeight: 600,
          color: colors.accent,
          textTransform: "uppercase",
          letterSpacing: 3,
          marginBottom: 20,
          opacity: labelOpacity,
        }}
      >
        {slide.label}
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `translateY(${cardY}px)`,
        }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: `0 0 ${40 * glowPulse}px ${colors.accentGlow}, 0 20px 60px rgba(0,0,0,0.5)`,
            border: `2px solid ${colors.surface}`,
          }}
        >
          <Img
            src={staticFile(slide.image)}
            style={{ width: 920, height: 550, objectFit: "cover" }}
          />
        </div>
      </div>

      <div
        style={{
          fontFamily: BRAND.fonts.heading,
          fontSize: 48,
          fontWeight: 700,
          color: colors.textWhite,
          textAlign: "center",
          marginTop: 36,
          opacity: textOpacity,
          transform: `scale(${interpolate(textScale, [0, 1], [0.9, 1])})`,
          maxWidth: 900,
        }}
      >
        {slide.text}
      </div>

      {/* Slide dots */}
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 60,
          display: "flex",
          gap: 8,
          opacity: 0.6,
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? 28 : 10,
              height: 10,
              borderRadius: 5,
              background: i === index ? colors.accent : colors.surface,
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ─── Outro ─── */
const OutroScene: React.FC<{
  cta: string;
  ctaSub: string;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ cta, ctaSub, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const btnPulse = 1 + Math.sin(frame * 0.12) * 0.03;
  const arrowBounce = Math.sin(frame * 0.15) * 6;

  return (
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", opacity }}
    >
      <Img
        src={staticFile("logo-240x240.png")}
        style={{
          width: 96,
          height: 96,
          borderRadius: 20,
          marginBottom: 40,
          transform: `scale(${scale})`,
        }}
      />
      <div
        style={{
          fontFamily: BRAND.fonts.heading,
          fontSize: 56,
          fontWeight: 800,
          color: colors.textWhite,
          textAlign: "center",
          lineHeight: 1.2,
          transform: `scale(${scale})`,
          marginBottom: 16,
        }}
      >
        {cta}
      </div>
      <div
        style={{
          fontFamily: BRAND.fonts.body,
          fontSize: 28,
          color: colors.textMuted,
          textAlign: "center",
          marginBottom: 48,
          transform: `scale(${scale})`,
        }}
      >
        {ctaSub}
      </div>
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentLight})`,
          borderRadius: 20,
          padding: "22px 56px",
          transform: `scale(${btnPulse * scale})`,
          boxShadow: `0 0 40px ${colors.accentGlow}`,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: BRAND.fonts.heading,
            fontSize: 40,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          snaptosize.com
        </span>
        <span
          style={{
            fontSize: 36,
            transform: `translateX(${arrowBounce}px)`,
            color: "#fff",
          }}
        >
          &rarr;
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ─── Main ─── */
export const SlideshowVertical: React.FC<SlideshowVerticalProps> = ({
  hook,
  hookSub,
  slides,
  cta,
  ctaSub,
  theme = "emerald",
  tag,
}) => {
  const colors = THEMES[theme] || THEMES.emerald;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(170deg, ${colors.bgDark} 0%, #0a1a14 50%, ${colors.bgMid} 100%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${colors.accent} 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <Sequence from={0} durationInFrames={INTRO_DURATION}>
        <IntroScene hook={hook} hookSub={hookSub} />
      </Sequence>

      {slides.map((slide, i) => {
        const slideStart =
          INTRO_DURATION + i * (SLIDE_DURATION - SLIDE_TRANSITION);
        return (
          <Sequence key={i} from={slideStart} durationInFrames={SLIDE_DURATION}>
            <SlideCard
              slide={slide}
              index={i}
              total={slides.length}
              colors={colors}
            />
          </Sequence>
        );
      })}

      <Sequence
        from={
          INTRO_DURATION +
          slides.length * (SLIDE_DURATION - SLIDE_TRANSITION)
        }
        durationInFrames={OUTRO_DURATION}
      >
        <OutroScene cta={cta} ctaSub={ctaSub} colors={colors} />
      </Sequence>

      <BrandWatermark episodeTag={tag} />
    </AbsoluteFill>
  );
};
