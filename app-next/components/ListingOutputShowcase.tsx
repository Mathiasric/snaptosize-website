"use client";

import Image from "next/image";
import { useState } from "react";

interface SizeSpec {
  id: string;
  label: string;
  pack: string;
  file: string;
  w: number;
  h: number;
}

interface ArtworkPreset {
  name: string;
  folder: string;
  altPrefix: string;
  sizes: SizeSpec[];
}

export const ARTWORK_PRESETS: Record<string, ArtworkPreset> = {
  fox: {
    name: "Fox — pencil sketch",
    folder: "fox",
    altPrefix: "Fox pencil sketch art print",
    sizes: [
      { id: "2x3", label: "2×3", pack: "Pack 2×3", file: "Fox.jpg", w: 2, h: 3 },
      { id: "a4", label: "A4", pack: "Pack ISO", file: "A4_2480x3508_ISO (9).jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", pack: "Pack 3×4", file: "Fox_6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", pack: "Extras", file: "Fox_11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", pack: "Pack 4×5", file: "Fox_4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  misty_lake: {
    name: "Misty Nordic — watercolor",
    folder: "misty_lake",
    altPrefix: "Misty Nordic landscape watercolor art print",
    sizes: [
      { id: "2x3", label: "2×3", pack: "Pack 2×3", file: "Misty_Nordic.jpg", w: 2, h: 3 },
      { id: "a4", label: "A4", pack: "Pack ISO", file: "A4_2480x3508_ISO (1).jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", pack: "Pack 3×4", file: "Misty_Nordic_6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", pack: "Extras", file: "Misty_Nordic_11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", pack: "Pack 4×5", file: "Misty_Nordic_4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  geometric: {
    name: "Geometric MCM — abstract",
    folder: "geometric_colorful art",
    altPrefix: "Geometric colorful MCM abstract art print",
    sizes: [
      { id: "2x3", label: "2×3", pack: "Pack 2×3", file: "Geometric colorful art.jpg", w: 2, h: 3 },
      { id: "a4", label: "A4", pack: "Pack ISO", file: "A4_2480x3508px.jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", pack: "Pack 3×4", file: "geo_6x8_1800x2400_3x4.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", pack: "Extras", file: "geo_11x14_3300x4200px.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", pack: "Pack 4×5", file: "4x5_1200x1500px.jpg", w: 4, h: 5 },
    ],
  },
  wildflower: {
    name: "Wildflower botanical — dark",
    folder: "wildflower_botanical_art",
    altPrefix: "Wildflower botanical art print",
    sizes: [
      { id: "2x3", label: "2×3", pack: "Pack 2×3", file: "Wildflower botanical art.jpg", w: 2, h: 3 },
      { id: "a4", label: "A4", pack: "Pack ISO", file: "A4_2480x3508_ISO (11).jpg", w: 210, h: 297 },
      { id: "11x14", label: "11×14", pack: "Extras", file: "Wildflower botanical art_11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", pack: "Pack 4×5", file: "Wildflower botanical art_4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  mysthical_portal: {
    name: "Mystical Portal — abstract",
    folder: "mysthical_portal",
    altPrefix: "Mystical portal abstract art print",
    sizes: [
      { id: "2x3", label: "2×3", pack: "Pack 2×3", file: "Mystical portal abstract.jpeg", w: 2, h: 3 },
      { id: "a4", label: "A4", pack: "Pack ISO", file: "mysticalportal_A4_2480x3508px.jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", pack: "Pack 3×4", file: "mysticalportal_3x4_6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", pack: "Extras", file: "mysticalportal_11x14_3300x4200px.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", pack: "Pack 4×5", file: "mysticalportal_4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  floral_vase: {
    name: "Floral Vase — watercolor",
    folder: "floral_vase",
    altPrefix: "Floral vase watercolor art print",
    sizes: [
      { id: "2x3", label: "2×3", pack: "Pack 2×3", file: "Floral vase art .jpg", w: 2, h: 3 },
      { id: "a4", label: "A4", pack: "Pack ISO", file: "A4_2480x3508_ISO (12).jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", pack: "Pack 3×4", file: "Floral vase art _6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", pack: "Extras", file: "Floral vase art _11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", pack: "Pack 4×5", file: "Floral vase art _4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  neutral_abstract: {
    name: "Neutral Abstract — wabi-sabi",
    folder: "neutral_abstract",
    altPrefix: "Neutral abstract wabi-sabi art print",
    sizes: [
      { id: "2x3", label: "2×3", pack: "Pack 2×3", file: "Neutral_abstract.jpg", w: 2, h: 3 },
      { id: "a4", label: "A4", pack: "Pack ISO", file: "A4_2480x3508_ISO (2).jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", pack: "Pack 3×4", file: "Neutral_abstract_6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", pack: "Extras", file: "Neutral_abstract_11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", pack: "Pack 4×5", file: "Neutral_abstract_4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  bears_line_art: {
    name: "Bears landscape — line art",
    folder: "landscpae_line_art_bears",
    altPrefix: "Line art bears landscape print",
    sizes: [
      { id: "3x2", label: "3×2", pack: "Pack 2×3", file: "Three happy bears with floral theme(3x2).jpg", w: 3, h: 2 },
      { id: "4x3", label: "4×3", pack: "Pack 3×4", file: "12 x 9(4x3).jpg", w: 4, h: 3 },
      { id: "5x4", label: "10×8", pack: "Pack 4×5", file: "three-happy-bears-with-floral-theme_10x8in_25x20cm_3000x2400px.jpg", w: 5, h: 4 },
      { id: "14x11", label: "14×11", pack: "Extras", file: "three-happy-bears-with-floral-theme_14x11in_36x28cm_4200x3300px.jpg", w: 14, h: 11 },
      { id: "a5", label: "A5", pack: "Pack ISO", file: "three-happy-bears-with-floral-theme_A5_14.8x21cm_2480x1748px.jpg", w: 210, h: 148 },
    ],
  },
};

function imgSrc(folder: string, file: string): string {
  return `/assets/listings/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

interface Props {
  artwork?: keyof typeof ARTWORK_PRESETS;
  heading?: string;
  subtext?: string;
}

export function ListingOutputShowcase({
  artwork = "fox",
  heading = "One upload. Five ratio-correct files.",
  subtext = "Every ratio a buyer might need — generated automatically from your original file. No Photoshop. No manual resizing.",
}: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const preset = ARTWORK_PRESETS[artwork];

  const gridTemplate = preset.sizes.map((s) => `${s.w / s.h}fr`).join(" ");

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0c0d14 0%, #080910 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div className="px-6 sm:px-10 md:px-14 pt-10 sm:pt-14">
        <div className="text-center mb-8">
          <span
            className="text-xs font-semibold uppercase block mb-3"
            style={{
              color: "#2DD4BF",
              letterSpacing: "0.16em",
              fontFamily: "ui-monospace, 'Cascadia Code', monospace",
            }}
          >
            SnapToSize output · {preset.name}
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "#f8fafc", letterSpacing: "-0.02em" }}
          >
            {heading}
          </h2>
          <p
            className="text-sm max-w-sm mx-auto leading-relaxed"
            style={{ color: "#64748b" }}
          >
            {subtext}
          </p>
        </div>
      </div>

      {/* Desktop image grid: 3 top + 2 bottom */}
      <div className="hidden md:block px-3 sm:px-4">
        <div className="grid grid-cols-3 gap-3 mb-3">
          {preset.sizes.slice(0, 3).map((size) => {
            const isHov = hovered === size.id;
            return (
              <div
                key={size.id}
                className="flex flex-col items-stretch"
                onMouseEnter={() => setHovered(size.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative overflow-hidden w-full"
                  style={{
                    aspectRatio: `${size.w} / ${size.h}`,
                    borderRadius: 8,
                    border: isHov ? "1.5px solid rgba(45,212,191,0.5)" : "1px solid rgba(255,255,255,0.09)",
                    boxShadow: isHov ? "0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(45,212,191,0.1)" : "0 6px 20px rgba(0,0,0,0.45)",
                    transform: isHov ? "translateY(-5px)" : "translateY(0)",
                    transition: "transform 0.22s ease, border-color 0.18s ease, box-shadow 0.22s ease",
                  }}
                >
                  <Image src={imgSrc(preset.folder, size.file)} alt={`${preset.altPrefix} at ${size.label} ratio`} fill sizes="33vw" style={{ objectFit: "cover" }} loading="lazy" />
                  <div style={{ position: "absolute", top: 7, left: 7, background: "rgba(8,9,16,0.82)", backdropFilter: "blur(8px)", borderRadius: 5, padding: "3px 8px", border: "1px solid rgba(255,255,255,0.13)" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", color: "#f1f5f9", fontSize: 11, fontWeight: 700, lineHeight: 1 }}>{size.label}</span>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span style={{ fontFamily: "ui-monospace, monospace", color: "#64748b", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>{size.pack}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 justify-center">
          {preset.sizes.slice(3).map((size) => {
            const isHov = hovered === size.id;
            return (
              <div
                key={size.id}
                className="flex flex-col items-center"
                style={{ width: "calc(33.33% - 6px)" }}
                onMouseEnter={() => setHovered(size.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative overflow-hidden w-full"
                  style={{
                    aspectRatio: `${size.w} / ${size.h}`,
                    borderRadius: 8,
                    border: isHov ? "1.5px solid rgba(45,212,191,0.5)" : "1px solid rgba(255,255,255,0.09)",
                    boxShadow: isHov ? "0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(45,212,191,0.1)" : "0 6px 20px rgba(0,0,0,0.45)",
                    transform: isHov ? "translateY(-5px)" : "translateY(0)",
                    transition: "transform 0.22s ease, border-color 0.18s ease, box-shadow 0.22s ease",
                  }}
                >
                  <Image src={imgSrc(preset.folder, size.file)} alt={`${preset.altPrefix} at ${size.label} ratio`} fill sizes="33vw" style={{ objectFit: "cover" }} loading="lazy" />
                  <div style={{ position: "absolute", top: 7, left: 7, background: "rgba(8,9,16,0.82)", backdropFilter: "blur(8px)", borderRadius: 5, padding: "3px 8px", border: "1px solid rgba(255,255,255,0.13)" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", color: "#f1f5f9", fontSize: 11, fontWeight: 700, lineHeight: 1 }}>{size.label}</span>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span style={{ fontFamily: "ui-monospace, monospace", color: "#64748b", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>{size.pack}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: 3 top + 2 bottom centered */}
      <div className="md:hidden px-3">
        <div className="grid grid-cols-3 gap-2 mb-2">
          {preset.sizes.slice(0, 3).map((size) => (
            <div key={size.id} className="flex flex-col items-center">
              <div
                className="relative overflow-hidden w-full"
                style={{
                  aspectRatio: `${size.w} / ${size.h}`,
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src={imgSrc(preset.folder, size.file)}
                  alt={`${size.label} ratio print`}
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  color: "#94a3b8",
                  fontSize: 11,
                  marginTop: 5,
                  fontWeight: 600,
                }}
              >
                {size.pack}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          {preset.sizes.slice(3).map((size) => (
            <div
              key={size.id}
              className="flex flex-col items-center"
              style={{ width: "calc(33.33% - 4px)" }}
            >
              <div
                className="relative overflow-hidden w-full"
                style={{
                  aspectRatio: `${size.w} / ${size.h}`,
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src={imgSrc(preset.folder, size.file)}
                  alt={`${size.label} ratio print`}
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  color: "#94a3b8",
                  fontSize: 11,
                  marginTop: 5,
                  fontWeight: 600,
                }}
              >
                {size.pack}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 sm:px-10 md:px-14 pb-10 sm:pb-14">
        <div
          className="mt-8 pt-7 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs sm:text-sm mb-5" style={{ color: "#475569" }}>
            SnapToSize generates all five ratio-correct files from a single
            upload in seconds.
          </p>
          <a
            href="https://app.snaptosize.com"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-lg"
            style={{
              background: "#2DD4BF",
              color: "#080910",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Try SnapToSize free →
          </a>
        </div>
      </div>
    </div>
  );
}
