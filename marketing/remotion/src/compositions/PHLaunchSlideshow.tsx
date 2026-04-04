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

const colors = THEMES.emerald;

// Timing (frames at 30fps)
const INTRO_DURATION = 75; // 2.5s — PH logo + "We just launched"
const SLIDE_DURATION = 105; // 3.5s per slide
const SLIDE_TRANSITION = 15; // 0.5s overlap
const OUTRO_DURATION = 90; // 3s — CTA

const SLIDES = [
  {
    image: "01-hero.png",
    label: "What it does",
    text: "1 image in. 70 files out.",
  },
  {
    image: "02-before-after.png",
    label: "The problem it solves",
    text: "No more manual resizing.",
  },
  {
    image: "03-how-it-works.png",
    label: "How it works",
    text: "3 steps. 60 seconds.",
  },
  {
    image: "04-ratios.png",
    label: "Every ratio covered",
    text: "Same artwork. No cropping.",
  },
  {
    image: "05-pricing.png",
    label: "Product Hunt exclusive",
    text: "30 days of Pro — free.",
  },
];

export const PH_LAUNCH_DURATION =
  INTRO_DURATION +
  SLIDES.length * SLIDE_DURATION -
  (SLIDES.length - 1) * SLIDE_TRANSITION +
  OUTRO_DURATION;

/* ─── Intro scene: PH logo + headline ─── */
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const textY = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 60 } });
  const textOpacity = interpolate(frame, [18, 35], [0, 1], { extrapolateRight: "clamp" });

  const subOpacity = interpolate(frame, [35, 50], [0, 1], { extrapolateRight: "clamp" });
  const subY = spring({ frame: frame - 35, fps, config: { damping: 14, stiffness: 60 } });

  // Exit fade
  const exitOpacity = interpolate(frame, [INTRO_DURATION - 15, INTRO_DURATION], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: exitOpacity,
      }}
    >
      {/* PH badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 48,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <Img
          src={staticFile("logo-240x240.png")}
          style={{ width: 72, height: 72, borderRadius: 16 }}
        />
        <div
          style={{
            background: "linear-gradient(135deg, #ff6154, #ff9543)",
            borderRadius: 12,
            padding: "10px 24px",
            fontFamily: BRAND.fonts.heading,
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: 1,
          }}
        >
          LIVE ON PRODUCT HUNT
        </div>
      </div>

      {/* Main headline */}
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
        }}
      >
        Every Etsy print size{"\n"}from one upload
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: BRAND.fonts.body,
          fontSize: 32,
          color: colors.textMuted,
          textAlign: "center",
          marginTop: 28,
          opacity: subOpacity,
          transform: `translateY(${interpolate(subY, [0, 1], [30, 0])}px)`,
        }}
      >
        60 seconds. No Photoshop.
      </div>
    </AbsoluteFill>
  );
};

/* ─── Single slide ─── */
const Slide: React.FC<{
  image: string;
  label: string;
  text: string;
  index: number;
}> = ({ image, label, text, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Card entrance
  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 70, mass: 0.8 },
  });
  const cardY = interpolate(cardSpring, [0, 1], [60, 0]);
  const cardOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });

  // Label entrance (delayed)
  const labelOpacity = interpolate(frame, [12, 25], [0, 1], { extrapolateRight: "clamp" });
  const labelY = spring({
    frame: frame - 12,
    fps,
    config: { damping: 14, stiffness: 60 },
  });

  // Text entrance (more delayed)
  const textOpacity = interpolate(frame, [22, 38], [0, 1], { extrapolateRight: "clamp" });
  const textScale = spring({
    frame: frame - 22,
    fps,
    config: { damping: 14, stiffness: 60 },
  });

  // Subtle card glow pulse
  const glowPulse = Math.sin(frame * 0.06) * 0.15 + 0.85;

  // Exit
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
      {/* Label above card */}
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
          transform: `translateY(${interpolate(labelY, [0, 1], [20, 0])}px)`,
        }}
      >
        {label}
      </div>

      {/* Screenshot card */}
      <div
        style={{
          opacity: cardOpacity,
          transform: `translateY(${cardY}px)`,
          willChange: "transform, opacity",
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
            src={staticFile(image)}
            style={{
              width: 920,
              height: 550,
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Text below card */}
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
        {text}
      </div>

      {/* Slide counter */}
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
        {SLIDES.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? 28 : 10,
              height: 10,
              borderRadius: 5,
              background: i === index ? colors.accent : colors.surface,
              transition: "width 0.3s",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ─── Outro: CTA ─── */
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 10, stiffness: 80 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const btnPulse = 1 + Math.sin(frame * 0.12) * 0.03;
  const arrowBounce = Math.sin(frame * 0.15) * 6;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      {/* Logo */}
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
          fontSize: 64,
          fontWeight: 800,
          color: colors.textWhite,
          textAlign: "center",
          lineHeight: 1.2,
          transform: `scale(${scale})`,
          marginBottom: 16,
        }}
      >
        Try Free Today
      </div>

      <div
        style={{
          fontFamily: BRAND.fonts.body,
          fontSize: 30,
          color: colors.textMuted,
          textAlign: "center",
          marginBottom: 48,
          transform: `scale(${scale})`,
        }}
      >
        30 days Pro — no credit card
      </div>

      {/* CTA button */}
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

      {/* PH badge */}
      <div
        style={{
          marginTop: 40,
          display: "flex",
          alignItems: "center",
          gap: 12,
          opacity: 0.7,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #ff6154, #ff9543)",
            borderRadius: 8,
            padding: "6px 16px",
            fontFamily: BRAND.fonts.heading,
            fontSize: 20,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          PRODUCT HUNT
        </div>
        <span
          style={{
            fontFamily: BRAND.fonts.body,
            fontSize: 22,
            color: colors.textMuted,
          }}
        >
          Upvote us!
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ─── Main composition ─── */
export const PHLaunchSlideshow: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(170deg, ${colors.bgDark} 0%, #0a1a14 50%, ${colors.bgMid} 100%)`,
      }}
    >
      {/* Subtle dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${colors.accent} 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Intro */}
      <Sequence from={0} durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </Sequence>

      {/* Slides */}
      {SLIDES.map((slide, i) => {
        const slideStart = INTRO_DURATION + i * (SLIDE_DURATION - SLIDE_TRANSITION);
        return (
          <Sequence key={i} from={slideStart} durationInFrames={SLIDE_DURATION}>
            <Slide
              image={slide.image}
              label={slide.label}
              text={slide.text}
              index={i}
            />
          </Sequence>
        );
      })}

      {/* Outro */}
      <Sequence
        from={
          INTRO_DURATION +
          SLIDES.length * (SLIDE_DURATION - SLIDE_TRANSITION)
        }
        durationInFrames={OUTRO_DURATION}
      >
        <OutroScene />
      </Sequence>

      {/* Watermark */}
      <BrandWatermark episodeTag="LAUNCH DAY" />
    </AbsoluteFill>
  );
};
