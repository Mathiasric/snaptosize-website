import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../styles/brand";

interface TextOverlayProps {
  text: string;
  fontSize?: number;
  color?: string;
  delay?: number;
  style?: React.CSSProperties;
  animationType?: "spring-up" | "spring-scale" | "typewriter" | "fade";
}

export const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  fontSize = BRAND.sizes.pointText,
  color = BRAND.colors.textWhite,
  delay = 0,
  style,
  animationType = "spring-up",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  const springConfig = { fps, damping: 12, stiffness: 80, mass: 0.8 };
  const progress = spring({ frame: adjustedFrame, ...springConfig });

  let transform = "";
  let opacity = frame >= delay ? 1 : 0;

  switch (animationType) {
    case "spring-up":
      transform = `translateY(${(1 - progress) * 60}px)`;
      opacity = progress;
      break;
    case "spring-scale":
      transform = `scale(${0.5 + progress * 0.5})`;
      opacity = progress;
      break;
    case "fade":
      opacity = progress;
      break;
    case "typewriter": {
      const chars = Math.floor(progress * text.length);
      return (
        <div
          style={{
            fontSize,
            color,
            fontFamily: BRAND.fonts.heading,
            fontWeight: 700,
            lineHeight: 1.15,
            textAlign: "center",
            ...style,
          }}
        >
          {text.slice(0, chars)}
          <span style={{ opacity: frame % 16 < 8 ? 1 : 0 }}>|</span>
        </div>
      );
    }
  }

  return (
    <div
      style={{
        opacity,
        transform,
        fontSize,
        color,
        fontFamily: BRAND.fonts.heading,
        fontWeight: 700,
        lineHeight: 1.15,
        textAlign: "center",
        willChange: "transform, opacity",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
