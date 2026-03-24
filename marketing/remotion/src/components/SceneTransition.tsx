import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRAND } from "../styles/brand";

interface SceneTransitionProps {
  startFrame: number;
  duration?: number;
  type?: "wipe-up" | "fade-blur" | "accent-flash" | "zoom-blur" | "slice";
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  startFrame,
  duration = 15,
  type = "wipe-up",
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame > startFrame + duration) return null;

  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  if (type === "wipe-up") {
    return (
      <AbsoluteFill
        style={{
          background: BRAND.colors.bgDark,
          transform: `translateY(${(1 - progress) * 100}%)`,
          opacity: 1 - progress * 0.5,
          zIndex: 100,
        }}
      />
    );
  }

  if (type === "accent-flash") {
    const opacity = progress < 0.5 ? progress * 2 : (1 - progress) * 2;
    return (
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at center, ${BRAND.colors.accentGlow} 0%, transparent 70%)`,
          opacity: opacity * 0.6,
          zIndex: 100,
        }}
      />
    );
  }

  if (type === "zoom-blur") {
    const scale = 1 + progress * 2;
    const opacity = progress < 0.5 ? progress * 1.6 : (1 - progress) * 1.6;
    return (
      <AbsoluteFill
        style={{
          background: BRAND.colors.accent,
          transform: `scale(${scale})`,
          opacity: Math.min(0.8, opacity),
          zIndex: 100,
          filter: `blur(${progress * 20}px)`,
        }}
      />
    );
  }

  if (type === "slice") {
    const barCount = 5;
    const barHeight = 1920 / barCount;
    return (
      <AbsoluteFill style={{ zIndex: 100 }}>
        {Array.from({ length: barCount }).map((_, i) => {
          const direction = i % 2 === 0 ? 1 : -1;
          const offset = interpolate(progress, [0, 0.5, 1], [direction * 1080, 0, direction * -1080]);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: i * barHeight,
                left: 0,
                width: 1080,
                height: barHeight,
                backgroundColor: BRAND.colors.bgDark,
                transform: `translateX(${offset}px)`,
              }}
            />
          );
        })}
      </AbsoluteFill>
    );
  }

  // fade-blur
  const opacity = progress < 0.5 ? progress * 2 : (1 - progress) * 2;
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.colors.bgDark,
        opacity: opacity * 0.8,
        zIndex: 100,
      }}
    />
  );
};
