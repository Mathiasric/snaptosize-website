import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { BRAND } from "../styles/brand";

interface BrandWatermarkProps {
  episodeTag?: string;
}

export const BrandWatermark: React.FC<BrandWatermarkProps> = ({
  episodeTag,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [15, 30], [0, 0.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity,
      }}
    >
      {episodeTag && (
        <div
          style={{
            fontSize: BRAND.sizes.episodeTag,
            color: BRAND.colors.accent,
            fontFamily: BRAND.fonts.mono,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {episodeTag}
        </div>
      )}
      <div
        style={{
          fontSize: BRAND.sizes.watermark,
          color: BRAND.colors.textMuted,
          fontFamily: BRAND.fonts.body,
          fontWeight: 500,
          letterSpacing: 1.5,
        }}
      >
        snaptosize.com
      </div>
    </div>
  );
};
