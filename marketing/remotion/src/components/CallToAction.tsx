import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { BRAND } from "../styles/brand";

interface CallToActionProps {
  text: string;
  delay?: number;
  subtitle?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  text,
  delay = 0,
  subtitle = "Link in bio",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  const scaleSpring = spring({
    frame: adjustedFrame,
    fps,
    damping: 8,
    stiffness: 100,
    mass: 0.6,
  });

  const opacity = frame >= delay ? scaleSpring : 0;

  // Subtle pulse after initial animation
  const pulseFrame = Math.max(0, adjustedFrame - 20);
  const pulse =
    pulseFrame > 0
      ? 1 + Math.sin(pulseFrame * 0.15) * 0.02
      : 1;

  // Arrow bounce
  const arrowBounce =
    pulseFrame > 0
      ? Math.sin(pulseFrame * 0.2) * 6
      : 0;

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scaleSpring * pulse})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        willChange: "transform, opacity",
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.accent} 0%, ${BRAND.colors.accentLight} 100%)`,
          color: BRAND.colors.textWhite,
          fontSize: BRAND.sizes.ctaText,
          fontFamily: BRAND.fonts.heading,
          fontWeight: 800,
          padding: "28px 64px",
          borderRadius: 24,
          textAlign: "center",
          boxShadow: `0 8px 32px ${BRAND.colors.accentGlow}, 0 2px 8px rgba(0,0,0,0.3)`,
        }}
      >
        {text}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <div
          style={{
            fontSize: 32,
            transform: `translateY(${arrowBounce}px)`,
          }}
        >
          ↓
        </div>
        <div
          style={{
            fontSize: BRAND.sizes.pointLabel,
            color: BRAND.colors.textMuted,
            fontFamily: BRAND.fonts.body,
            fontWeight: 500,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};
