import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../styles/brand";

interface ProgressDotsProps {
  total: number;
  current: number;
  delay?: number;
}

export const ProgressDots: React.FC<ProgressDotsProps> = ({
  total,
  current,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 12,
        padding: "20px 0",
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i <= current;
        const dotDelay = delay + i * 3;
        const adjustedFrame = Math.max(0, frame - dotDelay);
        const scale = spring({
          frame: adjustedFrame,
          fps,
          damping: 10,
          stiffness: 120,
        });

        return (
          <div
            key={i}
            style={{
              width: isActive ? 32 : 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: isActive
                ? BRAND.colors.accent
                : BRAND.colors.surface,
              transform: `scale(${scale})`,
              transition: "width 0.3s ease, background-color 0.3s ease",
              boxShadow: isActive
                ? `0 0 12px ${BRAND.colors.accentGlow}`
                : "none",
            }}
          />
        );
      })}
    </div>
  );
};
