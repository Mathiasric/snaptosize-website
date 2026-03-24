import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { BRAND, THEMES, ThemeName } from "../styles/brand";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { BrandWatermark } from "../components/BrandWatermark";
import { CallToAction } from "../components/CallToAction";
import { SceneTransition } from "../components/SceneTransition";
import { TextOverlay } from "../components/TextOverlay";

export interface QuickListProps {
  hook: string;
  items: string[];
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}

export const QuickList: React.FC<QuickListProps> = ({
  hook,
  items,
  cta,
  theme,
  episodeTag,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const themeColors = THEMES[theme || "default"] || THEMES.default;
  Object.assign(BRAND.colors, themeColors);

  const framesPerItem = Math.floor(290 / items.length);

  const visibleItemsCount = items.filter((_, index) => {
    const itemStartFrame = 70 + index * framesPerItem;
    return frame >= itemStartFrame;
  }).length;

  const itemsContainerScale = 1 - visibleItemsCount * 0.02;

  return (
    <AbsoluteFill>
      <AnimatedBackground variant="gradient-shift" />

      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 72,
          }}
        >
          {episodeTag && (
            <div
              style={{
                position: "absolute",
                top: 280,
                fontSize: BRAND.sizes.episodeTag,
                color: BRAND.colors.accent,
                fontFamily: BRAND.fonts.mono,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: interpolate(frame, [0, 15], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              {episodeTag}
            </div>
          )}
          <TextOverlay
            text={hook}
            fontSize={72}
            animationType="typewriter"
            style={{
              maxWidth: 900,
            }}
          />
        </AbsoluteFill>
      </Sequence>

      <SceneTransition startFrame={60} duration={10} type="slice" />

      <Sequence from={70} durationInFrames={380}>
        <AbsoluteFill
          style={{
            transform: `scale(${itemsContainerScale})`,
            transformOrigin: "center center",
          }}
        >
          {items.map((item, index) => {
            const itemStartFrame = index * framesPerItem;
            const fromLeft = index % 2 === 0;

            const swipeProgress = spring({
              frame: Math.max(0, frame - 70 - itemStartFrame),
              fps,
              damping: 12,
              stiffness: 150,
              mass: 0.5,
            });

            const translateX = interpolate(
              swipeProgress,
              [0, 1],
              [fromLeft ? -600 : 600, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );

            const itemTop = 350 + index * 130;

            const borderStyle = fromLeft
              ? { borderLeft: `4px solid ${BRAND.colors.accent}` }
              : { borderRight: `4px solid ${BRAND.colors.accent}` };

            return (
              <Sequence
                key={index}
                from={itemStartFrame}
                durationInFrames={450 - 70 - itemStartFrame}
              >
                <div
                  style={{
                    position: "absolute",
                    top: itemTop,
                    left: 60,
                    right: 60,
                    transform: `translateX(${translateX}px)`,
                    backgroundColor: BRAND.colors.surfaceLight,
                    borderRadius: 16,
                    padding: "20px 28px",
                    ...borderStyle,
                  }}
                >
                  <div
                    style={{
                      fontSize: 42,
                      fontFamily: BRAND.fonts.heading,
                      fontWeight: 700,
                      color: BRAND.colors.textWhite,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </div>
                </div>
              </Sequence>
            );
          })}
        </AbsoluteFill>
      </Sequence>

      <Sequence from={360} durationInFrames={90}>
        <AbsoluteFill
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CallToAction text={cta} delay={0} />
        </AbsoluteFill>
      </Sequence>

      <BrandWatermark episodeTag={episodeTag} />
    </AbsoluteFill>
  );
};
