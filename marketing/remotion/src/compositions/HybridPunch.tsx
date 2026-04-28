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

export interface HybridPunchProps {
  hook: string;        // Pain statement — leads with the problem
  hookSub?: string;    // Amplifies the pain
  proofImage: string;  // filename in public/
  proofLabel?: string; // Overlay text on image explaining what they see
  mechanism: string;   // The "how" — one line, punchy
  cta: string;
  ctaSub: string;
  theme?: keyof typeof THEMES;
  tag?: string;
}

const PAIN_SCENE = 90;   // 3.0s — pain must land before anything else
const PROOF_SCENE = 120; // 4.0s — image + label, enough time to absorb
const MECH_SCENE = 105;  // 3.5s — mechanism creates the "I need this" moment
const CTA_SCENE = 105;   // 3.5s — long enough to read URL and act

export const HYBRID_PUNCH_DURATION = PAIN_SCENE + PROOF_SCENE + MECH_SCENE + CTA_SCENE; // 420 frames = 14s

/* ─── Scene 1: Pain Hook ─── */
const PainScene: React.FC<{
  hook: string;
  hookSub?: string;
  proofImage: string;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ hook, hookSub, proofImage, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleSpring = spring({ frame, fps, config: { damping: 11, stiffness: 85, mass: 0.65 } });
  const scale = interpolate(scaleSpring, [0, 1], [0.80, 1.0]);
  const hookOpacity = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp" });
  const subOpacity = interpolate(frame, [24, 44], [0, 1], { extrapolateRight: "clamp" });
  const exitOpacity = interpolate(frame, [PAIN_SCENE - 14, PAIN_SCENE], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      {/* Blurred proof image as visual hook background */}
      <Img
        src={staticFile(proofImage)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(22px) brightness(0.28) saturate(1.4)",
          transform: "scale(1.08)",
        }}
      />
      {/* Dark gradient overlay for text contrast */}
      <AbsoluteFill
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 64px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: BRAND.fonts.heading,
              fontSize: 96,
              fontWeight: 900,
              color: colors.textWhite,
              lineHeight: 1.05,
              whiteSpace: "pre-line",
              opacity: hookOpacity,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
              letterSpacing: -1,
              textShadow: "0 3px 24px rgba(0,0,0,0.9)",
            }}
          >
            {hook}
          </div>
          {hookSub && (
            <div
              style={{
                fontFamily: BRAND.fonts.body,
                fontSize: 36,
                color: "rgba(255,255,255,0.85)",
                marginTop: 32,
                opacity: subOpacity,
                fontWeight: 500,
                textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              }}
            >
              {hookSub}
            </div>
          )}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/* ─── Scene 2: Proof image + label overlay ─── */
const ProofScene: React.FC<{
  image: string;
  proofLabel?: string;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ image, proofLabel, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({ frame, fps, config: { damping: 14, stiffness: 70, mass: 0.9 } });
  const scale = interpolate(enterSpring, [0, 1], [0.96, 1.0]);
  const enterOpacity = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: "clamp" });
  const exitOpacity = interpolate(frame, [PROOF_SCENE - 14, PROOF_SCENE], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Label slides up from bottom
  const labelSpring = spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 14, stiffness: 80 } });
  const labelY = interpolate(labelSpring, [0, 1], [60, 0]);
  const labelOpacity = interpolate(frame, [20, 38], [0, 1], { extrapolateRight: "clamp" });

  const kenBurns = interpolate(frame, [0, PROOF_SCENE], [1.0, 1.025], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgDark,
        justifyContent: "center",
        alignItems: "center",
        opacity: Math.min(enterOpacity, exitOpacity),
        overflow: "hidden",
      }}
    >
      {/* Blur fill */}
      <Img
        src={staticFile(image)}
        style={{
          position: "absolute",
          width: 1080,
          height: 1920,
          objectFit: "cover",
          filter: "blur(18px) brightness(0.38) saturate(1.5)",
          transform: "scale(1.06)",
        }}
      />
      {/* Sharp image */}
      <Img
        src={staticFile(image)}
        style={{
          position: "relative",
          width: 1080,
          height: 1920,
          objectFit: "contain",
          transform: `scale(${scale * kenBurns})`,
          transformOrigin: "center center",
        }}
      />
      {/* Label overlay at bottom */}
      {proofLabel && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "36px 48px 48px",
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
          }}
        >
          <div
            style={{
              fontFamily: BRAND.fonts.heading,
              fontSize: 40,
              fontWeight: 700,
              color: colors.textWhite,
              lineHeight: 1.2,
              whiteSpace: "pre-line",
            }}
          >
            {proofLabel}
          </div>
          <div
            style={{
              marginTop: 8,
              width: 56,
              height: 4,
              borderRadius: 2,
              background: colors.accent,
            }}
          />
        </div>
      )}
    </AbsoluteFill>
  );
};

/* ─── Scene 3: Mechanism ─── */
const MechanismScene: React.FC<{
  mechanism: string;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ mechanism, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({ frame, fps, config: { damping: 12, stiffness: 80, mass: 0.7 } });
  const translateY = interpolate(enterSpring, [0, 1], [50, 0]);
  const opacity = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: "clamp" });
  const exitOpacity = interpolate(frame, [MECH_SCENE - 14, MECH_SCENE], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Teal accent — hope/solution energy
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 48%, ${colors.bgAccent} 0%, ${colors.bgDark} 68%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 72px",
        opacity: Math.min(opacity, exitOpacity),
      }}
    >
      <div
        style={{
          textAlign: "center",
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: BRAND.fonts.mono,
            fontSize: 22,
            fontWeight: 600,
            color: colors.accent,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 32,
          }}
        >
          The Fix
        </div>
        <div
          style={{
            fontFamily: BRAND.fonts.heading,
            fontSize: 88,
            fontWeight: 900,
            color: colors.textWhite,
            lineHeight: 1.05,
            whiteSpace: "pre-line",
            letterSpacing: -1,
          }}
        >
          {mechanism}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ─── Scene 4: CTA ─── */
const CTAScene: React.FC<{
  cta: string;
  ctaSub: string;
  tag?: string;
  colors: (typeof THEMES)[keyof typeof THEMES];
}> = ({ cta, ctaSub, tag, colors }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ctaSpring = spring({ frame, fps, config: { damping: 12, stiffness: 70 } });
  const ctaY = interpolate(ctaSpring, [0, 1], [50, 0]);
  const ctaOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const pulseScale = 1 + Math.sin(frame * 0.08) * 0.012;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 50%, ${colors.bgAccent} 0%, ${colors.bgDark} 70%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 72px",
      }}
    >
      <div
        style={{
          opacity: ctaOpacity,
          transform: `translateY(${ctaY}px)`,
          textAlign: "center",
        }}
      >
        {tag && (
          <div
            style={{
              fontFamily: BRAND.fonts.mono,
              fontSize: 22,
              fontWeight: 600,
              color: colors.accent,
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 28,
            }}
          >
            {tag}
          </div>
        )}
        <div
          style={{
            fontFamily: BRAND.fonts.heading,
            fontSize: 76,
            fontWeight: 800,
            color: colors.textWhite,
            lineHeight: 1.1,
            whiteSpace: "pre-line",
          }}
        >
          {cta}
        </div>
        <div
          style={{
            fontFamily: BRAND.fonts.body,
            fontSize: 32,
            color: colors.textMuted,
            marginTop: 24,
          }}
        >
          {ctaSub}
        </div>
        <div
          style={{
            marginTop: 48,
            display: "inline-block",
            background: colors.accent,
            color: colors.bgDark,
            fontFamily: BRAND.fonts.heading,
            fontWeight: 700,
            fontSize: 34,
            padding: "18px 52px",
            borderRadius: 100,
            transform: `scale(${pulseScale})`,
          }}
        >
          snaptosize.com
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ─── Main composition ─── */
export const HybridPunch: React.FC<HybridPunchProps> = ({
  hook,
  hookSub,
  proofImage,
  proofLabel,
  mechanism,
  cta,
  ctaSub,
  theme = "emerald",
  tag,
}) => {
  const colors = THEMES[theme];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bgDark }}>
      <Sequence from={0} durationInFrames={PAIN_SCENE}>
        <PainScene hook={hook} hookSub={hookSub} proofImage={proofImage} colors={colors} />
      </Sequence>

      <Sequence from={PAIN_SCENE} durationInFrames={PROOF_SCENE}>
        <ProofScene image={proofImage} proofLabel={proofLabel} colors={colors} />
      </Sequence>

      <Sequence from={PAIN_SCENE + PROOF_SCENE} durationInFrames={MECH_SCENE}>
        <MechanismScene mechanism={mechanism} colors={colors} />
      </Sequence>

      <Sequence from={PAIN_SCENE + PROOF_SCENE + MECH_SCENE} durationInFrames={CTA_SCENE}>
        <CTAScene cta={cta} ctaSub={ctaSub} tag={tag} colors={colors} />
      </Sequence>
    </AbsoluteFill>
  );
};
