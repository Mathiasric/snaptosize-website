"use client";

import { useState } from "react";

interface SizeSpec {
  id: string;
  label: string;
  examples: string[];
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
      { id: "2x3", label: "2×3", examples: ["4×6", "8×12", "24×36"], file: "Fox.jpg", w: 2, h: 3 },
      { id: "a4", label: "ISO A4", examples: ["210×297mm", "2480×3508 px"], file: "A4_2480x3508_ISO (9).jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", examples: ["6×8", "12×16", "18×24"], file: "Fox_6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", examples: ["11×14 in", "3300×4200 px"], file: "Fox_11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", examples: ["8×10", "16×20", "24×30"], file: "Fox_4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  misty_lake: {
    name: "Misty Nordic — watercolor",
    folder: "misty_lake",
    altPrefix: "Misty Nordic landscape watercolor art print",
    sizes: [
      { id: "2x3", label: "2×3", examples: ["4×6", "8×12", "24×36"], file: "Misty_Nordic.jpg", w: 2, h: 3 },
      { id: "a4", label: "ISO A4", examples: ["210×297mm", "2480×3508 px"], file: "A4_2480x3508_ISO (1).jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", examples: ["6×8", "12×16", "18×24"], file: "Misty_Nordic_6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", examples: ["11×14 in", "3300×4200 px"], file: "Misty_Nordic_11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", examples: ["8×10", "16×20", "24×30"], file: "Misty_Nordic_4x5_1200x1500.jpg", w: 4, h: 5 },
    ],
  },
  geometric: {
    name: "Geometric MCM — abstract",
    folder: "geometric_colorful art",
    altPrefix: "Geometric colorful MCM abstract art print",
    sizes: [
      { id: "2x3", label: "2×3", examples: ["4×6", "8×12", "24×36"], file: "Geometric colorful art.jpg", w: 2, h: 3 },
      { id: "a4", label: "ISO A4", examples: ["210×297mm", "2480×3508 px"], file: "A4_2480x3508px.jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", examples: ["6×8", "12×16", "18×24"], file: "geo_6x8_1800x2400_3x4.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", examples: ["11×14 in", "3300×4200 px"], file: "geo_11x14_3300x4200px.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", examples: ["8×10", "16×20", "24×30"], file: "4x5_1200x1500px.jpg", w: 4, h: 5 },
    ],
  },
  wildflower: {
    name: "Wildflower botanical — dark",
    folder: "wildflower_botanical_art",
    altPrefix: "Wildflower botanical art print",
    sizes: [
      { id: "2x3", label: "2×3", examples: ["4×6", "8×12", "24×36"], file: "Wildflower botanical art.jpg", w: 2, h: 3 },
      { id: "a4", label: "ISO A4", examples: ["210×297mm", "2480×3508 px"], file: "A4_2480x3508_ISO (11).jpg", w: 210, h: 297 },
      { id: "3x4", label: "3×4", examples: ["6×8", "12×16", "18×24"], file: "wildflower_6x8_1800x2400.jpg", w: 3, h: 4 },
      { id: "11x14", label: "11×14", examples: ["11×14 in", "3300×4200 px"], file: "wildflower_11x14_3300x4200.jpg", w: 11, h: 14 },
      { id: "4x5", label: "4×5", examples: ["8×10", "16×20", "24×30"], file: "wildflower_4x5_1200x1500.jpg", w: 4, h: 5 },
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

  // CSS grid template: each column gets fr proportional to its aspect ratio
  const gridTemplate = preset.sizes.map((s) => `${s.w / s.h}fr`).join(" ");

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0c0d14 0%, #080910 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header — generous padding */}
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

      {/* Desktop image grid — minimal side padding, fills full width */}
      <div className="hidden md:block px-3 sm:px-4">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridTemplate,
            gap: 8,
          }}
        >
          {preset.sizes.map((size) => {
            const isHov = hovered === size.id;
            return (
              <div
                key={size.id}
                className="flex flex-col items-stretch"
                onMouseEnter={() => setHovered(size.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image with correct aspect ratio — fills grid column width */}
                <div
                  className="relative overflow-hidden w-full"
                  style={{
                    aspectRatio: `${size.w} / ${size.h}`,
                    borderRadius: 8,
                    border: isHov
                      ? "1.5px solid rgba(45,212,191,0.5)"
                      : "1px solid rgba(255,255,255,0.09)",
                    boxShadow: isHov
                      ? "0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(45,212,191,0.1)"
                      : "0 6px 20px rgba(0,0,0,0.45)",
                    transform: isHov ? "translateY(-5px)" : "translateY(0)",
                    transition:
                      "transform 0.22s ease, border-color 0.18s ease, box-shadow 0.22s ease",
                  }}
                >
                  <img
                    src={imgSrc(preset.folder, size.file)}
                    alt={`${preset.altPrefix} at ${size.label} ratio`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                  {/* Ratio badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 7,
                      left: 7,
                      background: "rgba(8,9,16,0.82)",
                      backdropFilter: "blur(8px)",
                      borderRadius: 5,
                      padding: "3px 8px",
                      border: "1px solid rgba(255,255,255,0.13)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        color: "#f1f5f9",
                        fontSize: 11,
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {size.label}
                    </span>
                  </div>
                </div>

                {/* Label below image */}
                <div className="mt-2.5 text-center px-1">
                  <div
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      color: isHov ? "#2DD4BF" : "#cbd5e1",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      transition: "color 0.18s",
                    }}
                  >
                    {size.label}
                  </div>
                  <div
                    style={{
                      color: "#334155",
                      fontSize: 10,
                      marginTop: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {size.examples.join(" · ")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrower ← → Wider axis */}
        <div
          className="flex items-center mt-3 gap-2"
          style={{ opacity: 0.55 }}
        >
          <span
            style={{
              fontSize: 10,
              fontFamily: "ui-monospace, monospace",
              color: "#94a3b8",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            ← narrower
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(to right, rgba(45,212,191,0.35), rgba(45,212,191,0.05))",
            }}
          />
          <span
            style={{
              fontSize: 10,
              fontFamily: "ui-monospace, monospace",
              color: "#94a3b8",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            wider →
          </span>
        </div>
      </div>

      {/* Mobile: 3 top + 2 bottom centered — also uses px-3 */}
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
                <img
                  src={imgSrc(preset.folder, size.file)}
                  alt={`${size.label} ratio print`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                {size.label}
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
                <img
                  src={imgSrc(preset.folder, size.file)}
                  alt={`${size.label} ratio print`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                {size.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA — generous padding */}
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
