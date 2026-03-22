export type RatioGroup = "1:1" | "2:3" | "3:4" | "4:5" | "iso" | "pano" | "extras";

export interface PrintSize {
  id: string;
  label: string;
  widthInches: number;
  heightInches: number;
  widthPx: number;
  heightPx: number;
  ratioGroup: RatioGroup;
  ratioLabel: string;
  ratioDecimal: number; // min(w,h) / max(w,h), always <= 1
  popular: boolean;
  useCase: string;
  slug?: string;
}

export const RATIO_GROUP_LABELS: Record<RatioGroup, string> = {
  "1:1": "1:1 Square",
  "2:3": "2:3 Ratio (Most Common)",
  "3:4": "3:4 Ratio (Classic Photo)",
  "4:5": "4:5 Ratio (Traditional Art)",
  iso: "ISO A-Series (International)",
  pano: "Panoramic",
  extras: "Common Extras",
};

export const RATIO_GROUP_ORDER: RatioGroup[] = [
  "1:1",
  "2:3",
  "3:4",
  "4:5",
  "iso",
  "pano",
  "extras",
];

/** Canonical ratio decimal for each standard group (extras have mixed ratios → NaN) */
export const RATIO_GROUP_DECIMALS: Record<RatioGroup, number> = {
  "1:1": 1,         // 1.0
  "2:3": 2 / 3,    // 0.6667
  "3:4": 3 / 4,    // 0.75
  "4:5": 4 / 5,    // 0.8
  iso: 1 / Math.SQRT2, // 0.7071
  pano: NaN,        // mixed ratios (1:2, 1:3) — compute per-size
  extras: NaN,      // mixed ratios — compute per-size
};

export const PRINT_SIZES: PrintSize[] = [
  // ── 1:1 Square ──
  { id: "4x4", label: "4\u00d74", widthInches: 4, heightInches: 4, widthPx: 1200, heightPx: 1200, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Small print / coaster" },
  { id: "5x5", label: "5\u00d75", widthInches: 5, heightInches: 5, widthPx: 1500, heightPx: 1500, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: true, useCase: "Instagram print" },
  { id: "6x6", label: "6\u00d76", widthInches: 6, heightInches: 6, widthPx: 1800, heightPx: 1800, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Medium square / tile" },
  { id: "8x8", label: "8\u00d78", widthInches: 8, heightInches: 8, widthPx: 2400, heightPx: 2400, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Photo book / canvas" },
  { id: "10x10", label: "10\u00d710", widthInches: 10, heightInches: 10, widthPx: 3000, heightPx: 3000, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Wall art" },
  { id: "12x12", label: "12\u00d712", widthInches: 12, heightInches: 12, widthPx: 3600, heightPx: 3600, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: true, useCase: "Scrapbook / large square" },
  { id: "14x14", label: "14\u00d714", widthInches: 14, heightInches: 14, widthPx: 4200, heightPx: 4200, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Large square art" },
  { id: "16x16", label: "16\u00d716", widthInches: 16, heightInches: 16, widthPx: 4800, heightPx: 4800, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Statement piece" },
  { id: "20x20", label: "20\u00d720", widthInches: 20, heightInches: 20, widthPx: 6000, heightPx: 6000, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Gallery canvas" },
  { id: "24x24", label: "24\u00d724", widthInches: 24, heightInches: 24, widthPx: 7200, heightPx: 7200, ratioGroup: "1:1", ratioLabel: "1:1", ratioDecimal: 1, popular: false, useCase: "Maximum square" },

  // ── 2:3 Ratio ──
  { id: "4x6", label: "4\u00d76", widthInches: 4, heightInches: 6, widthPx: 1200, heightPx: 1800, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Small prints, cards", slug: "etsy-4x6-print-size" },
  { id: "6x9", label: "6\u00d79", widthInches: 6, heightInches: 9, widthPx: 1800, heightPx: 2700, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Medium print / book cover" },
  { id: "8x12", label: "8\u00d712", widthInches: 8, heightInches: 12, widthPx: 2400, heightPx: 3600, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Medium prints" },
  { id: "10x15", label: "10\u00d715", widthInches: 10, heightInches: 15, widthPx: 3000, heightPx: 4500, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Standard poster" },
  { id: "12x18", label: "12\u00d718", widthInches: 12, heightInches: 18, widthPx: 3600, heightPx: 5400, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Large poster" },
  { id: "16x24", label: "16\u00d724", widthInches: 16, heightInches: 24, widthPx: 4800, heightPx: 7200, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Statement piece" },
  { id: "20x30", label: "20\u00d730", widthInches: 20, heightInches: 30, widthPx: 6000, heightPx: 9000, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Extra large" },
  { id: "24x36", label: "24\u00d736", widthInches: 24, heightInches: 36, widthPx: 7200, heightPx: 10800, ratioGroup: "2:3", ratioLabel: "2:3", ratioDecimal: 2 / 3, popular: false, useCase: "Maximum size", slug: "etsy-24x36-print-size" },

  // ── 3:4 Ratio ──
  { id: "6x8", label: "6\u00d78", widthInches: 6, heightInches: 8, widthPx: 1800, heightPx: 2400, ratioGroup: "3:4", ratioLabel: "3:4", ratioDecimal: 3 / 4, popular: false, useCase: "Small framed print" },
  { id: "9x12", label: "9\u00d712", widthInches: 9, heightInches: 12, widthPx: 2700, heightPx: 3600, ratioGroup: "3:4", ratioLabel: "3:4", ratioDecimal: 3 / 4, popular: false, useCase: "Medium print" },
  { id: "12x16", label: "12\u00d716", widthInches: 12, heightInches: 16, widthPx: 3600, heightPx: 4800, ratioGroup: "3:4", ratioLabel: "3:4", ratioDecimal: 3 / 4, popular: false, useCase: "Standard poster", slug: "etsy-12x16-print-size" },
  { id: "15x20", label: "15\u00d720", widthInches: 15, heightInches: 20, widthPx: 4500, heightPx: 6000, ratioGroup: "3:4", ratioLabel: "3:4", ratioDecimal: 3 / 4, popular: false, useCase: "Large poster" },
  { id: "18x24", label: "18\u00d724", widthInches: 18, heightInches: 24, widthPx: 5400, heightPx: 7200, ratioGroup: "3:4", ratioLabel: "3:4", ratioDecimal: 3 / 4, popular: false, useCase: "Gallery size", slug: "etsy-18x24-print-size" },
  { id: "24x32", label: "24\u00d732", widthInches: 24, heightInches: 32, widthPx: 7200, heightPx: 9600, ratioGroup: "3:4", ratioLabel: "3:4", ratioDecimal: 3 / 4, popular: false, useCase: "Maximum size" },

  // ── 4:5 Ratio ──
  { id: "8x10", label: "8\u00d710", widthInches: 8, heightInches: 10, widthPx: 2400, heightPx: 3000, ratioGroup: "4:5", ratioLabel: "4:5", ratioDecimal: 4 / 5, popular: true, useCase: "Classic frame size", slug: "etsy-8x10-print-size" },
  { id: "12x15", label: "12\u00d715", widthInches: 12, heightInches: 15, widthPx: 3600, heightPx: 4500, ratioGroup: "4:5", ratioLabel: "4:5", ratioDecimal: 4 / 5, popular: false, useCase: "Medium print" },
  { id: "16x20", label: "16\u00d720", widthInches: 16, heightInches: 20, widthPx: 4800, heightPx: 6000, ratioGroup: "4:5", ratioLabel: "4:5", ratioDecimal: 4 / 5, popular: true, useCase: "Popular poster size", slug: "etsy-16x20-print-size" },
  { id: "20x25", label: "20\u00d725", widthInches: 20, heightInches: 25, widthPx: 6000, heightPx: 7500, ratioGroup: "4:5", ratioLabel: "4:5", ratioDecimal: 4 / 5, popular: false, useCase: "Large format" },
  { id: "24x30", label: "24\u00d730", widthInches: 24, heightInches: 30, widthPx: 7200, heightPx: 9000, ratioGroup: "4:5", ratioLabel: "4:5", ratioDecimal: 4 / 5, popular: false, useCase: "Maximum size" },

  // ── ISO A-Series ──
  { id: "a5", label: "A5", widthInches: 5.827, heightInches: 8.268, widthPx: 1748, heightPx: 2480, ratioGroup: "iso", ratioLabel: "1:\u221a2", ratioDecimal: 1 / Math.SQRT2, popular: false, useCase: "Small prints" },
  { id: "a4", label: "A4", widthInches: 8.268, heightInches: 11.693, widthPx: 2480, heightPx: 3508, ratioGroup: "iso", ratioLabel: "1:\u221a2", ratioDecimal: 1 / Math.SQRT2, popular: true, useCase: "Standard document", slug: "etsy-a4-print-size" },
  { id: "a3", label: "A3", widthInches: 11.693, heightInches: 16.535, widthPx: 3508, heightPx: 4961, ratioGroup: "iso", ratioLabel: "1:\u221a2", ratioDecimal: 1 / Math.SQRT2, popular: false, useCase: "Medium poster" },
  { id: "a2", label: "A2", widthInches: 16.535, heightInches: 23.386, widthPx: 4961, heightPx: 7016, ratioGroup: "iso", ratioLabel: "1:\u221a2", ratioDecimal: 1 / Math.SQRT2, popular: false, useCase: "Large poster" },
  { id: "a1", label: "A1", widthInches: 23.386, heightInches: 33.11, widthPx: 7016, heightPx: 9933, ratioGroup: "iso", ratioLabel: "1:\u221a2", ratioDecimal: 1 / Math.SQRT2, popular: false, useCase: "Extra large" },
  { id: "a0", label: "A0", widthInches: 33.11, heightInches: 46.811, widthPx: 9933, heightPx: 14043, ratioGroup: "iso", ratioLabel: "1:\u221a2", ratioDecimal: 1 / Math.SQRT2, popular: false, useCase: "Oversized poster" },

  // ── Panoramic ──
  { id: "10x20", label: "10\u00d720", widthInches: 10, heightInches: 20, widthPx: 3000, heightPx: 6000, ratioGroup: "pano", ratioLabel: "1:2", ratioDecimal: 1 / 2, popular: true, useCase: "Landscape panoramic" },
  { id: "12x36", label: "12\u00d736", widthInches: 12, heightInches: 36, widthPx: 3600, heightPx: 10800, ratioGroup: "pano", ratioLabel: "1:3", ratioDecimal: 1 / 3, popular: true, useCase: "Wide panoramic / skyline" },

  // ── Common Extras ──
  { id: "5x7", label: "5\u00d77", widthInches: 5, heightInches: 7, widthPx: 1500, heightPx: 2100, ratioGroup: "extras", ratioLabel: "5:7", ratioDecimal: 5 / 7, popular: true, useCase: "Greeting cards", slug: "etsy-5x7-print-size" },
  { id: "8.5x11", label: "8.5\u00d711", widthInches: 8.5, heightInches: 11, widthPx: 2550, heightPx: 3300, ratioGroup: "extras", ratioLabel: "~3:4", ratioDecimal: 8.5 / 11, popular: false, useCase: "US Letter size" },
  { id: "11x14", label: "11\u00d714", widthInches: 11, heightInches: 14, widthPx: 3300, heightPx: 4200, ratioGroup: "extras", ratioLabel: "11:14", ratioDecimal: 11 / 14, popular: true, useCase: "Photo mat standard", slug: "etsy-11x14-print-size" },
  { id: "11x17", label: "11\u00d717", widthInches: 11, heightInches: 17, widthPx: 3300, heightPx: 5100, ratioGroup: "extras", ratioLabel: "11:17", ratioDecimal: 11 / 17, popular: false, useCase: "Tabloid size" },
  { id: "20x24", label: "20\u00d724", widthInches: 20, heightInches: 24, widthPx: 6000, heightPx: 7200, ratioGroup: "extras", ratioLabel: "5:6", ratioDecimal: 20 / 24, popular: false, useCase: "Large format" },
];

/** File size estimation constants (empirical) */
export const JPEG_BYTES_PER_PIXEL = 0.5;
export const PNG_BYTES_PER_PIXEL = 2.8;
export const ETSY_FILE_LIMIT_BYTES = 20 * 1024 * 1024;

/* ── Ratio detection ── */

const KNOWN_RATIOS: { label: string; decimal: number }[] = [
  { label: "1:1", decimal: 1.0 },
  { label: "2:3", decimal: 2 / 3 },
  { label: "3:4", decimal: 3 / 4 },
  { label: "4:5", decimal: 4 / 5 },
  { label: "5:6", decimal: 5 / 6 },
  { label: "5:7", decimal: 5 / 7 },
  { label: "11:14", decimal: 11 / 14 },
  { label: "11:17", decimal: 11 / 17 },
  { label: "1:\u221a2", decimal: 1 / Math.SQRT2 },
];

const RATIO_TOLERANCE = 0.02; // 2%

export function detectRatio(
  w: number,
  h: number
): { label: string; decimal: number; orientation: "landscape" | "portrait" | "square" } {
  const orientation = w > h ? "landscape" : w < h ? "portrait" : "square";
  const decimal = Math.min(w, h) / Math.max(w, h);

  let bestMatch = { label: `${Math.round(decimal * 100)}:100`, decimal };
  let bestDiff = Infinity;

  for (const known of KNOWN_RATIOS) {
    const diff = Math.abs(decimal - known.decimal);
    if (diff < bestDiff && diff / known.decimal <= RATIO_TOLERANCE) {
      bestDiff = diff;
      bestMatch = known;
    }
  }

  return { ...bestMatch, orientation };
}

/* ── Crop calculation ── */

export interface CropResult {
  cropPercent: number;     // 0 = perfect, 0.11 = 11% lost
  croppedSide: "width" | "height" | "none";
  orientation: "portrait" | "landscape";
  effectiveDpi: number;    // accounts for crop
}

export function calculateCrop(
  imageW: number,
  imageH: number,
  targetWInches: number,
  targetHInches: number
): CropResult {
  // Try both orientations, return the one with less crop
  const results: CropResult[] = [];

  for (const orient of ["portrait", "landscape"] as const) {
    const tW = orient === "portrait" ? Math.min(targetWInches, targetHInches) : Math.max(targetWInches, targetHInches);
    const tH = orient === "portrait" ? Math.max(targetWInches, targetHInches) : Math.min(targetWInches, targetHInches);
    const targetRatio = tW / tH; // w/h

    const imageRatio = imageW / imageH;

    let cropPercent: number;
    let croppedSide: "width" | "height" | "none";

    if (Math.abs(imageRatio - targetRatio) < 0.001) {
      cropPercent = 0;
      croppedSide = "none";
    } else if (imageRatio > targetRatio) {
      // Image is wider than target → crop width
      cropPercent = 1 - targetRatio / imageRatio;
      croppedSide = "width";
    } else {
      // Image is taller than target → crop height
      cropPercent = 1 - imageRatio / targetRatio;
      croppedSide = "height";
    }

    // Effective DPI: usable pixels after crop / target inches
    const usableW = croppedSide === "width" ? imageW * (1 - cropPercent) : imageW;
    const usableH = croppedSide === "height" ? imageH * (1 - cropPercent) : imageH;
    const effectiveDpi = Math.min(usableW / tW, usableH / tH);

    results.push({ cropPercent, croppedSide, orientation: orient, effectiveDpi });
  }

  // Return the orientation with less crop
  return results[0].cropPercent <= results[1].cropPercent ? results[0] : results[1];
}

export function calculateGroupCrop(
  imageW: number,
  imageH: number,
  groupRatioDecimal: number
): { cropPercent: number; croppedSide: "width" | "height" | "none" } {
  const imageRatio = Math.min(imageW, imageH) / Math.max(imageW, imageH);

  if (Math.abs(imageRatio - groupRatioDecimal) < 0.001) {
    return { cropPercent: 0, croppedSide: "none" };
  }
  if (imageRatio > groupRatioDecimal) {
    return {
      cropPercent: 1 - groupRatioDecimal / imageRatio,
      croppedSide: imageW > imageH ? "height" : "width",
    };
  }
  return {
    cropPercent: 1 - imageRatio / groupRatioDecimal,
    croppedSide: imageW > imageH ? "width" : "height",
  };
}
