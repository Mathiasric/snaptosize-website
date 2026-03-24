import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRAND } from "../styles/brand";

interface AnimatedBackgroundProps {
  variant?: "gradient-shift" | "particles" | "mesh" | "pulse-glow" | "diagonal-sweep" | "minimal-dots";
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = "gradient-shift",
}) => {
  const frame = useCurrentFrame();

  if (variant === "gradient-shift") {
    const angle = interpolate(frame, [0, 900], [140, 200], {
      extrapolateRight: "clamp",
    });
    const midStop = interpolate(frame, [0, 900], [30, 60], {
      extrapolateRight: "clamp",
    });

    return (
      <AbsoluteFill
        style={{
          background: `
            linear-gradient(${angle}deg,
              ${BRAND.colors.bgDark} 0%,
              ${BRAND.colors.bgAccent} ${midStop}%,
              ${BRAND.colors.bgMid} 100%
            )
          `,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.colors.accentGlow} 0%, transparent 70%)`,
            top: `${40 + Math.sin(frame * 0.02) * 10}%`,
            left: `${30 + Math.cos(frame * 0.015) * 15}%`,
            transform: "translate(-50%, -50%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)`,
            top: `${60 + Math.cos(frame * 0.018) * 8}%`,
            right: `${10 + Math.sin(frame * 0.012) * 10}%`,
            transform: "translate(50%, -50%)",
            filter: "blur(60px)",
          }}
        />
      </AbsoluteFill>
    );
  }

  if (variant === "pulse-glow") {
    const pulseScale = 0.8 + Math.sin(frame * 0.08) * 0.4;
    return (
      <AbsoluteFill
        style={{
          background: `linear-gradient(160deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.bgMid} 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.colors.accentGlow} 0%, transparent 60%)`,
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${pulseScale})`,
            filter: "blur(100px)",
          }}
        />
      </AbsoluteFill>
    );
  }

  if (variant === "diagonal-sweep") {
    const sweepPos = interpolate(frame, [0, 450], [-400, 2400], {
      extrapolateRight: "clamp",
    });
    return (
      <AbsoluteFill
        style={{
          background: `linear-gradient(160deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.bgMid} 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 3000,
            background: `linear-gradient(90deg, transparent, ${BRAND.colors.accentGlow}, transparent)`,
            transform: `rotate(-30deg) translateX(${sweepPos}px)`,
            top: -500,
            left: -200,
            opacity: 0.6,
          }}
        />
      </AbsoluteFill>
    );
  }

  if (variant === "minimal-dots") {
    const dots: React.ReactNode[] = [];
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 6; col++) {
        const dotOpacity = 0.05 + 0.25 * Math.sin(frame * 0.05 + (row + col) * 0.5);
        dots.push(
          <div
            key={`${row}-${col}`}
            style={{
              position: "absolute",
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: BRAND.colors.accent,
              opacity: Math.max(0.03, dotOpacity),
              top: 120 + row * 180,
              left: 120 + col * 160,
            }}
          />
        );
      }
    }
    return (
      <AbsoluteFill
        style={{
          background: `linear-gradient(160deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.bgMid} 100%)`,
        }}
      >
        {dots}
      </AbsoluteFill>
    );
  }

  // Default fallback
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.bgMid} 100%)`,
      }}
    />
  );
};
