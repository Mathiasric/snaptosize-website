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
import type { SlideshowSlide } from "./SlideshowVertical";

export interface PortraitSlideshowProps {
  hook: string;
  hookSub: string;
  slides: SlideshowSlide[];
  cta: string;
  ctaSub: string;
  theme?: keyof typeof THEMES;
  tag?: string;
}

// Timing — same as SlideshowVertical
const INTRO_DURATION = 75;
const SLIDE_DURATION = 105;
const SLIDE_TRANSITION = 15;
const OUTRO_DURATION = 75;

export function calculatePortraitDuration(slideCount: number): number {
  return (
    INTRO_DURATION +
    slideCount * SLIDE_DURATION -
    (slideCount - 1) * SLIDE_TRANSITION +
    OUTRO_DURATION
  );
}

/* ─── Intro ─── */
const IntroScene: React.FC<{
  hook: string;
  hookSub: string;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ hook, hookSub, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textY = spring({ frame, fps, config: { damping: 14, stiffness: 60 } });
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

/* ─── Portrait Slide ─── */
const PortraitSlideCard: React.FC<{
  slide: SlideshowSlide;
  index: number;
  total: number;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ slide, index, total, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 60 },
  });
  const imageScale = interpolate(enterSpring, [0, 1], [1.08, 1]);
  const imageOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const labelOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const textOpacity = interpolate(frame, [18, 35], [0, 1], {
    extrapolateRight: "clamp",
  });
  const textY = interpolate(enterSpring, [0, 1], [30, 0]);
  const exitOpacity = interpolate(
    frame,
    [SLIDE_DURATION - 15, SLIDE_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      {/* Portrait image — full width, ~1500px tall */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1500,
          overflow: "hidden",
          opacity: imageOpacity,
        }}
      >
        <Img
          src={staticFile(slide.image)}
          style={{
            width: 1080,
            height: 1500,
            objectFit: "cover",
            transform: `scale(${imageScale})`,
            transformOrigin: "center center",
          }}
        />

        {/* Gradient overlay at bottom of image for text legibility */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 500,
            background: `linear-gradient(to top, ${colors.bgDark}ee 0%, ${colors.bgDark}aa 40%, transparent 100%)`,
          }}
        />

        {/* Label badge — top left */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 48,
            opacity: labelOpacity,
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
              background: `${colors.bgDark}cc`,
              backdropFilter: "blur(12px)",
              borderRadius: 12,
              padding: "10px 20px",
              border: `1px solid ${colors.surface}`,
            }}
          >
            {slide.label}
          </div>
        </div>

        {/* Slide dots — top right */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 48,
            display: "flex",
            gap: 8,
            opacity: labelOpacity * 0.7,
          }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i === index ? 28 : 10,
                height: 10,
                borderRadius: 5,
                background: i === index ? colors.accent : `${colors.textWhite}33`,
              }}
            />
          ))}
        </div>

        {/* Text on bottom of image */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 48,
            right: 48,
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          <div
            style={{
              fontFamily: BRAND.fonts.heading,
              fontSize: 48,
              fontWeight: 700,
              color: colors.textWhite,
              lineHeight: 1.25,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            {slide.text}
          </div>
        </div>
      </div>

      {/* Bottom area below image */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 420,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(to bottom, ${colors.bgDark} 0%, ${colors.bgMid} 100%)`,
        }}
      >
        <div
          style={{
            width: 60,
            height: 3,
            borderRadius: 2,
            background: colors.accent,
            opacity: textOpacity,
          }}
        />
        <div
          style={{
            fontFamily: BRAND.fonts.body,
            fontSize: 28,
            color: colors.textMuted,
            textAlign: "center",
            marginTop: 24,
            padding: "0 64px",
            opacity: textOpacity,
            lineHeight: 1.4,
          }}
        >
          snaptosize.com
        </div>
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

  const scale = spring({ frame, fps, config: { damping: 10, stiffness: 80 } });
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
export const PortraitSlideshow: React.FC<PortraitSlideshowProps> = ({
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
        <IntroScene hook={hook} hookSub={hookSub} colors={colors} />
      </Sequence>

      {slides.map((slide, i) => {
        const slideStart =
          INTRO_DURATION + i * (SLIDE_DURATION - SLIDE_TRANSITION);
        return (
          <Sequence key={i} from={slideStart} durationInFrames={SLIDE_DURATION}>
            <PortraitSlideCard
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
