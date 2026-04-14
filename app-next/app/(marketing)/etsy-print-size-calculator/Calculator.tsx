"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Ruler,
  ScanSearch,
  ChevronDown,
} from "lucide-react";
import {
  PRINT_SIZES,
  RATIO_GROUP_ORDER,
  RATIO_GROUP_LABELS,
  RATIO_GROUP_DECIMALS,
  JPEG_BYTES_PER_PIXEL,
  PNG_BYTES_PER_PIXEL,
  ETSY_FILE_LIMIT_BYTES,
  detectRatio,
  calculateCrop,
  calculateGroupCrop,
  type PrintSize,
  type RatioGroup,
} from "@/data/print-sizes";

type Tab = "analyze" | "reference";

const POPULAR_SIZES = PRINT_SIZES.filter((s) => s.popular);

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/* ── Severity helpers ── */

type Severity = "perfect" | "excellent" | "moderate" | "heavy";

function getSeverity(cropPercent: number): Severity {
  if (cropPercent === 0) return "perfect";
  if (cropPercent < 0.05) return "excellent";
  if (cropPercent <= 0.15) return "moderate";
  return "heavy";
}

const SEVERITY_COLORS = {
  perfect:  { border: "border-[#2DD4BF]/40",  bg: "bg-[#2DD4BF]",  text: "text-[#2DD4BF]",  glow: "shadow-[#2DD4BF]/10",  fill: "bg-[#2DD4BF]/10",  ring: "ring-[#2DD4BF]/20",  bar: "border-l-[#2DD4BF]" },
  excellent:{ border: "border-[#6EE7B7]/30",  bg: "bg-[#6EE7B7]",  text: "text-[#6EE7B7]",  glow: "shadow-[#6EE7B7]/10",  fill: "bg-[#6EE7B7]/8",   ring: "ring-[#6EE7B7]/15",  bar: "border-l-[#6EE7B7]" },
  moderate: { border: "border-[#F59E0B]/25",  bg: "bg-[#F59E0B]",  text: "text-[#F59E0B]",  glow: "shadow-[#F59E0B]/5",   fill: "bg-[#F59E0B]/6",   ring: "ring-[#F59E0B]/10",  bar: "border-l-[#F59E0B]" },
  heavy:    { border: "border-[#FDA4AF]/20",  bg: "bg-[#FDA4AF]",  text: "text-[#FDA4AF]",  glow: "",                     fill: "bg-[#FDA4AF]/5",   ring: "",                    bar: "border-l-[#FDA4AF]" },
} as const;

/* ──────────────────── Crop Preview ──────────────────── */

const SEVERITY_GLOW = {
  perfect:  "rgba(45, 212, 191, 0.15)",
  excellent:"rgba(110, 231, 183, 0.12)",
  moderate: "rgba(245, 158, 11, 0.08)",
  heavy:    "rgba(253, 164, 175, 0.05)",
} as const;

function CropPreview({
  cropPercent,
  croppedSide,
  size = "sm",
}: {
  cropPercent: number;
  croppedSide: "width" | "height" | "none";
  size?: "sm" | "md" | "lg" | "hero";
}) {
  const h = size === "sm" ? 40 : size === "md" ? 56 : size === "lg" ? 72 : 120;
  const w = Math.round(h * 0.75);
  const sev = getSeverity(cropPercent);
  const c = SEVERITY_COLORS[sev];
  const isHero = size === "hero";

  const innerW = croppedSide === "width" ? Math.round(w * (1 - cropPercent)) : w;
  const innerH = croppedSide === "height" ? Math.round(h * (1 - cropPercent)) : h;
  const innerLeft = croppedSide === "width" ? Math.round((w - innerW) / 2) : 0;
  const innerTop = croppedSide === "height" ? Math.round((h - innerH) / 2) : 0;

  return (
    <div
      className={`relative flex-shrink-0 rounded-md ${isHero && sev === "perfect" ? "crop-preview-pulse" : ""}`}
      style={{ width: w, height: h }}
    >
      <div className="absolute inset-0 rounded-md border border-white/[0.08] bg-white/[0.03]" />
      <div
        className={`absolute rounded-md border ${c.border} ${c.fill} transition-all duration-300`}
        style={{
          width: innerW,
          height: innerH,
          left: innerLeft,
          top: innerTop,
          boxShadow: isHero ? `0 0 8px ${SEVERITY_GLOW[sev]}` : "none",
        }}
      />
      {isHero && (
        <>
          {/* Crop marks — L-shaped corners */}
          <div className="absolute border-t border-l border-white/20" style={{ top: innerTop - 4, left: innerLeft - 4, width: 8, height: 8 }} />
          <div className="absolute border-t border-r border-white/20" style={{ top: innerTop - 4, right: w - innerLeft - innerW - 4, width: 8, height: 8 }} />
          <div className="absolute border-b border-l border-white/20" style={{ bottom: h - innerTop - innerH - 4, left: innerLeft - 4, width: 8, height: 8 }} />
          <div className="absolute border-b border-r border-white/20" style={{ bottom: h - innerTop - innerH - 4, right: w - innerLeft - innerW - 4, width: 8, height: 8 }} />
        </>
      )}
    </div>
  );
}

/* ──────────────────── Crop Status Badge ──────────────────── */

function CropBadge({ cropPercent, prominent = false }: { cropPercent: number; prominent?: boolean }) {
  const sev = getSeverity(cropPercent);
  const c = SEVERITY_COLORS[sev];
  const Icon = sev === "heavy" ? XCircle : sev === "moderate" ? AlertTriangle : CheckCircle;
  const label = sev === "perfect" ? "Perfect Match" : sev === "excellent" ? "Excellent" : sev === "moderate" ? "Moderate Crop" : "Heavy Crop";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wide ${c.fill} ${c.text} border ${c.border} ${
        prominent ? "px-3.5 py-1.5 text-xs" : "px-2.5 py-1 text-[11px]"
      }`}
      style={prominent ? { boxShadow: `0 0 12px ${SEVERITY_GLOW[sev]}` } : undefined}
    >
      <Icon className={prominent ? "h-3.5 w-3.5" : "h-3 w-3"} />
      {label}
    </span>
  );
}

/* ──────────────────── Image Summary Card ──────────────────── */

function ImageSummaryCard({
  width,
  height,
  detectedRatio,
  megapixels,
  jpegSize,
  pngSize,
  bestGroupLabel,
  bestGroupSizeCount,
}: {
  width: number;
  height: number;
  detectedRatio: { label: string; orientation: string };
  megapixels: string;
  jpegSize: number;
  pngSize: number;
  bestGroupLabel: string;
  bestGroupSizeCount: number;
}) {
  const jpegUnder = jpegSize <= ETSY_FILE_LIMIT_BYTES;
  const pngUnder = pngSize <= ETSY_FILE_LIMIT_BYTES;

  const maxDim = 80;
  const aspect = width / height;
  const previewW = aspect >= 1 ? maxDim : Math.round(maxDim * aspect);
  const previewH = aspect >= 1 ? Math.round(maxDim / aspect) : maxDim;

  return (
    <div
      className="rounded-2xl border border-white/[0.08] border-l-4 border-l-[#2DD4BF] p-4 sm:p-6 mb-6 animate-in fade-in duration-300"
      style={{
        background: "rgba(13, 11, 23, 0.95)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
        {/* Image shape preview with crop marks */}
        <div
          className="relative flex-shrink-0 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]"
          style={{ width: 100, height: 100 }}
        >
          <div
            className="rounded-md border border-[#2DD4BF]/60 bg-[#2DD4BF]/10"
            style={{
              width: previewW,
              height: previewH,
            }}
          />
          {/* Crop marks */}
          <div className="absolute border-t border-l border-white/20" style={{ top: (100 - previewH) / 2 - 4, left: (100 - previewW) / 2 - 4, width: 8, height: 8 }} />
          <div className="absolute border-t border-r border-white/20" style={{ top: (100 - previewH) / 2 - 4, right: (100 - previewW) / 2 - 4, width: 8, height: 8 }} />
          <div className="absolute border-b border-l border-white/20" style={{ bottom: (100 - previewH) / 2 - 4, left: (100 - previewW) / 2 - 4, width: 8, height: 8 }} />
          <div className="absolute border-b border-r border-white/20" style={{ bottom: (100 - previewH) / 2 - 4, right: (100 - previewW) / 2 - 4, width: 8, height: 8 }} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Detected ratio — big display font */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
            <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {detectedRatio.label}
            </span>
            <span className="text-sm text-foreground-60 capitalize">
              {detectedRatio.orientation}
            </span>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground-60 mb-3">
            <span className="font-mono text-foreground">{megapixels} MP</span>
            <span className="flex items-center gap-1">
              JPEG <span className="font-mono text-foreground">{formatBytes(jpegSize)}</span>
              {jpegUnder ? (
                <CheckCircle className="h-3 w-3 text-[#2DD4BF]" />
              ) : (
                <XCircle className="h-3 w-3 text-[#FDA4AF]" />
              )}
            </span>
            <span className="flex items-center gap-1">
              PNG <span className="font-mono text-foreground">{formatBytes(pngSize)}</span>
              {pngUnder ? (
                <CheckCircle className="h-3 w-3 text-[#2DD4BF]" />
              ) : (
                <XCircle className="h-3 w-3 text-[#FDA4AF]" />
              )}
            </span>
          </div>

          {/* Best match */}
          <p className="text-sm">
            <span className="text-foreground-60">Best match: </span>
            <span className="text-[#2DD4BF] font-semibold">{bestGroupLabel}</span>
            <span className="text-foreground-60">
              {" "}&mdash; {bestGroupSizeCount === 0 ? "no perfect ratio matches" : `all ${bestGroupSizeCount} sizes, no cropping`}
            </span>
          </p>
        </div>
      </div>

      {(!jpegUnder || !pngUnder) && (
        <p className="text-xs text-foreground-60 mt-4 flex items-start gap-1.5 pt-3 border-t border-white/[0.06]">
          <AlertTriangle className="h-3.5 w-3.5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
          {!jpegUnder
            ? "Both JPEG and PNG may exceed Etsy\u2019s 20 MB limit at some sizes."
            : "PNG may exceed 20 MB at larger sizes. Use JPEG to stay under Etsy\u2019s limit."}
        </p>
      )}
    </div>
  );
}

/* ──────────────────── Size Detail Row ──────────────────── */

function SizeDetailRow({
  size,
  cropPercent,
  croppedSide,
  effectiveDpi,
}: {
  size: PrintSize;
  cropPercent: number;
  croppedSide: "width" | "height" | "none";
  effectiveDpi: number;
}) {
  const dpiPercent = Math.min((effectiveDpi / 300) * 100, 100);
  const dpiColor =
    effectiveDpi >= 300
      ? "bg-[#2DD4BF]"
      : effectiveDpi >= 150
        ? "bg-[#F59E0B]"
        : "bg-[#FDA4AF]";
  const dpiTextColor =
    effectiveDpi >= 300
      ? "text-[#2DD4BF]"
      : effectiveDpi >= 150
        ? "text-[#F59E0B]"
        : "text-[#FDA4AF]";

  return (
    <div className="flex items-center gap-3 py-3 border-b border-white/[0.04] last:border-0">
      <CropPreview cropPercent={cropPercent} croppedSide={croppedSide} size="sm" />
      <div className="w-14 sm:w-16 font-mono text-sm font-semibold flex-shrink-0">
        {size.label}
      </div>
      <div className="flex-1 min-w-0">
        <div className="relative h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className={`h-full rounded-full ${dpiColor} transition-all duration-500`}
            style={{ width: `${dpiPercent}%` }}
          />
          {/* Threshold markers: 150 DPI (50%) and 300 DPI (100%) */}
          <div className="absolute top-0 bottom-0 w-px bg-white/[0.12]" style={{ left: "50%" }} />
          <div className="absolute top-0 bottom-0 w-px bg-white/[0.12]" style={{ left: "100%" }} />
        </div>
      </div>
      <div className={`text-xs font-mono w-16 text-right flex-shrink-0 font-semibold ${dpiTextColor}`}>
        {Math.round(effectiveDpi)} DPI
      </div>
      <div className="text-xs font-mono w-10 text-right flex-shrink-0 text-foreground-60">
        {cropPercent === 0 ? "0%" : `${(cropPercent * 100).toFixed(1)}%`}
      </div>
      {size.slug ? (
        <Link
          href={`/${size.slug}`}
          className="text-[10px] text-accent-light hover:underline hidden sm:inline flex-shrink-0"
        >
          Guide
        </Link>
      ) : (
        <span className="hidden sm:inline w-8 flex-shrink-0" />
      )}
    </div>
  );
}

/* ──────────────────── Ratio Group Card ──────────────────── */

interface GroupAnalysis {
  group: RatioGroup;
  label: string;
  cropPercent: number;
  croppedSide: "width" | "height" | "none";
  sizes: {
    size: PrintSize;
    cropPercent: number;
    croppedSide: "width" | "height" | "none";
    effectiveDpi: number;
  }[];
}

function RatioGroupCard({
  analysis,
  expanded,
  onToggle,
  rank,
}: {
  analysis: GroupAnalysis;
  expanded: boolean;
  onToggle: () => void;
  rank: number;
}) {
  const sizeCount = analysis.sizes.length;
  const sev = getSeverity(analysis.cropPercent);
  const c = SEVERITY_COLORS[sev];
  const isTop = rank === 0;

  /* Subtle background gradient for perfect/excellent top cards only */
  const topGradient = isTop && sev === "perfect"
    ? "linear-gradient(135deg, rgba(45, 212, 191, 0.04) 0%, transparent 60%)"
    : isTop && sev === "excellent"
      ? "linear-gradient(135deg, rgba(110, 231, 183, 0.03) 0%, transparent 60%)"
      : "none";

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 group-card ${
        isTop
          ? `border border-white/[0.08] border-l-4 ${c.bar}`
          : "border border-white/[0.06] hover:border-white/[0.10] hover:-translate-y-px"
      }`}
      style={{
        backgroundImage: topGradient,
        boxShadow: isTop ? "inset 0 1px 0 rgba(255,255,255,0.04)" : undefined,
        animationDelay: `${rank * 60}ms`,
      }}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-4 p-3.5 sm:p-5 text-left transition-colors ${
          isTop ? "" : "hover:bg-white/[0.02]"
        }`}
      >
        <CropPreview
          cropPercent={analysis.cropPercent}
          croppedSide={analysis.croppedSide}
          size={isTop ? "hero" : "md"}
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`font-display ${isTop ? "text-xl font-bold" : "text-sm font-semibold"}`}>{analysis.label}</span>
            <span className="text-xs text-foreground-60">
              {sizeCount} size{sizeCount !== 1 ? "s" : ""}
            </span>
            <CropBadge cropPercent={analysis.cropPercent} prominent={isTop} />
          </div>
          <p className="text-xs text-foreground-60">
            {analysis.cropPercent === 0
              ? "No cropping needed \u2014 your image ratio matches perfectly"
              : `~${(analysis.cropPercent * 100).toFixed(1)}% of image cropped (${analysis.croppedSide})`}
          </p>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-foreground-60 flex-shrink-0 transition-transform duration-300 ease-out ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-200 ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-3.5 sm:px-5 pb-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-3 py-2 text-[10px] uppercase tracking-wider text-foreground-60">
              <span style={{ width: 27 }} className="flex-shrink-0" />
              <span className="w-14 sm:w-16 flex-shrink-0">Size</span>
              <span className="flex-1">DPI Quality</span>
              <span className="w-16 text-right flex-shrink-0">DPI</span>
              <span className="w-10 text-right flex-shrink-0">Crop</span>
              <span className="hidden sm:inline w-8 flex-shrink-0" />
            </div>
            {analysis.sizes.map((s) => (
              <SizeDetailRow
                key={s.size.id}
                size={s.size}
                cropPercent={s.cropPercent}
                croppedSide={s.croppedSide}
                effectiveDpi={s.effectiveDpi}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── Size Button (Tab 2) ──────────────────── */

function SizeButton({
  size,
  selected,
  onClick,
}: {
  size: PrintSize;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2 rounded-lg text-sm font-mono transition-all duration-150
        ${
          selected
            ? "bg-accent text-white shadow-lg shadow-accent/30 ring-1 ring-accent-light"
            : "bg-surface border border-border text-foreground-60 hover:border-accent-30 hover:text-foreground"
        }`}
    >
      {size.label}
    </button>
  );
}

/* ──────────────────── Size Results (Tab 2) ──────────────────── */

function SizeResults({ size }: { size: PrintSize }) {
  const [copied, setCopied] = useState(false);
  const totalPixels = size.widthPx * size.heightPx;
  const megapixels = (totalPixels / 1_000_000).toFixed(1);
  const jpegSize = totalPixels * JPEG_BYTES_PER_PIXEL;
  const pngSize = totalPixels * PNG_BYTES_PER_PIXEL;
  const jpegUnder = jpegSize <= ETSY_FILE_LIMIT_BYTES;
  const pngUnder = pngSize <= ETSY_FILE_LIMIT_BYTES;

  const copyText = `${size.widthPx} \u00d7 ${size.heightPx}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${size.widthPx}x${size.heightPx}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard not available */ }
  };

  return (
    <div
      className="rounded-xl border border-accent-30 bg-[#0f0d19] p-5 mt-6 transition-all duration-300"
      style={{ boxShadow: "inset 0 0 80px rgba(124, 58, 237, 0.04), 0 0 40px rgba(124, 58, 237, 0.06)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            {size.label}
            <span className="text-foreground-60 font-normal text-sm ml-2">at 300 DPI</span>
          </h3>
          <p className="text-xs text-foreground-60 mt-0.5">{size.ratioLabel} ratio &middot; {size.useCase}</p>
        </div>
        {size.slug && (
          <Link href={`/${size.slug}`} className="text-xs text-accent-light hover:underline hidden sm:block">
            Full guide &rarr;
          </Link>
        )}
      </div>

      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-3xl font-mono font-bold tracking-tight text-white">
          {size.widthPx.toLocaleString()}
          <span className="text-accent-light mx-1">&times;</span>
          {size.heightPx.toLocaleString()}
        </span>
        <span className="text-sm text-foreground-60">pixels</span>
        <button
          onClick={handleCopy}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-surface hover:border-accent-30 transition-colors"
          aria-label={`Copy ${copyText}`}
        >
          {copied ? (
            <><Check className="h-3.5 w-3.5 text-[#2DD4BF]" /><span className="text-[#2DD4BF]">Copied</span></>
          ) : (
            <><Copy className="h-3.5 w-3.5 text-foreground-60" /><span className="text-foreground-60">Copy</span></>
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-surface border border-border p-3">
          <p className="text-[10px] uppercase tracking-wider text-foreground-60 mb-1">Megapixels</p>
          <p className="text-sm font-mono font-semibold">{megapixels} MP</p>
        </div>
        <div className="rounded-lg bg-surface border border-border p-3">
          <p className="text-[10px] uppercase tracking-wider text-foreground-60 mb-1">JPEG est.</p>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-mono font-semibold">{formatBytes(jpegSize)}</p>
            {jpegUnder ? <CheckCircle className="h-3.5 w-3.5 text-[#2DD4BF]" /> : <XCircle className="h-3.5 w-3.5 text-[#FDA4AF]" />}
          </div>
        </div>
        <div className="rounded-lg bg-surface border border-border p-3">
          <p className="text-[10px] uppercase tracking-wider text-foreground-60 mb-1">PNG est.</p>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-mono font-semibold">{formatBytes(pngSize)}</p>
            {pngUnder ? <CheckCircle className="h-3.5 w-3.5 text-[#2DD4BF]" /> : <XCircle className="h-3.5 w-3.5 text-[#FDA4AF]" />}
          </div>
        </div>
        <div className="rounded-lg bg-surface border border-border p-3">
          <p className="text-[10px] uppercase tracking-wider text-foreground-60 mb-1">Etsy limit</p>
          <p className="text-sm font-mono font-semibold">20 MB</p>
        </div>
      </div>

      {(!jpegUnder || !pngUnder) && (
        <p className="text-xs text-foreground-60 mt-3 flex items-start gap-1.5">
          <AlertTriangle className="h-3.5 w-3.5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
          {!jpegUnder
            ? "Both JPEG and PNG exceed Etsy\u2019s 20 MB limit at this size. Consider splitting into multiple files."
            : "PNG exceeds 20 MB. Use JPEG for this size to stay under Etsy\u2019s limit."}
        </p>
      )}
    </div>
  );
}

/* ──────────────────── Main Calculator ──────────────────── */

export function Calculator() {
  const [tab, setTab] = useState<Tab>("analyze");
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);
  const [pixelWidth, setPixelWidth] = useState("");
  const [pixelHeight, setPixelHeight] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const handleWidth = (v: string) => setPixelWidth(v.replace(/\D/g, ""));
  const handleHeight = (v: string) => setPixelHeight(v.replace(/\D/g, ""));

  const selectedSize = useMemo(
    () => PRINT_SIZES.find((s) => s.id === selectedSizeId) ?? null,
    [selectedSizeId]
  );

  const sizesByGroup = useMemo(() => {
    const map: Record<RatioGroup, PrintSize[]> = {
      "1:1": [],
      "2:3": [],
      "3:4": [],
      "4:5": [],
      iso: [],
      pano: [],
      extras: [],
    };
    for (const size of PRINT_SIZES) {
      map[size.ratioGroup].push(size);
    }
    return map;
  }, []);

  const analysisResults = useMemo(() => {
    const w = parseInt(pixelWidth, 10);
    const h = parseInt(pixelHeight, 10);
    if (!w || !h || w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) return null;

    try {
      const totalPixels = w * h;
      const megapixels = (totalPixels / 1_000_000).toFixed(1);
      const jpegSize = totalPixels * JPEG_BYTES_PER_PIXEL;
      const pngSize = totalPixels * PNG_BYTES_PER_PIXEL;
      const detected = detectRatio(w, h);

      const groups: GroupAnalysis[] = [];

      for (const group of RATIO_GROUP_ORDER) {
        const groupDecimal = RATIO_GROUP_DECIMALS[group];
        const sizes = sizesByGroup[group];

        if (group === "extras" || group === "pano") {
          for (const size of sizes) {
            const crop = calculateCrop(w, h, size.widthInches, size.heightInches);
            groups.push({
              group,
              label: `${size.label} (${size.ratioLabel})`,
              cropPercent: crop.cropPercent,
              croppedSide: crop.croppedSide,
              sizes: [{
                size,
                cropPercent: crop.cropPercent,
                croppedSide: crop.croppedSide,
                effectiveDpi: crop.effectiveDpi,
              }],
            });
          }
        } else {
          const groupCrop = calculateGroupCrop(w, h, groupDecimal);
          const sizeDetails = sizes.map((size) => {
            const crop = calculateCrop(w, h, size.widthInches, size.heightInches);
            return {
              size,
              cropPercent: crop.cropPercent,
              croppedSide: crop.croppedSide,
              effectiveDpi: crop.effectiveDpi,
            };
          });

          groups.push({
            group,
            label: RATIO_GROUP_LABELS[group],
            cropPercent: groupCrop.cropPercent,
            croppedSide: groupCrop.croppedSide,
            sizes: sizeDetails,
          });
        }
      }

      groups.sort((a, b) => a.cropPercent - b.cropPercent);

      const bestGroup = groups[0];
      const bestIsExact = bestGroup && bestGroup.cropPercent === 0;

      return {
        width: w,
        height: h,
        megapixels,
        jpegSize,
        pngSize,
        detected,
        groups,
        bestGroupLabel: bestGroup
          ? bestIsExact
            ? bestGroup.label
            : `${bestGroup.label} (${(bestGroup.cropPercent * 100).toFixed(1)}% crop)`
          : "",
        bestGroupSizeCount: bestGroup && bestIsExact ? bestGroup.sizes.length : 0,
      };
    } catch {
      return null;
    }
  }, [pixelWidth, pixelHeight, sizesByGroup]);

  const toggleGroup = (key: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div
      className="rounded-2xl border border-white/[0.08] bg-[#0c0a15] overflow-hidden"
      style={{
        boxShadow: "0 0 80px rgba(124, 58, 237, 0.06), 0 1px 0 rgba(255,255,255,0.03) inset",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.03) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <style>{`
        @keyframes cropPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .crop-preview-pulse { animation: cropPulse 2s ease-in-out infinite; }
        .group-card { animation: slideInUp 0.3s ease-out both; }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .crop-preview-pulse, .group-card { animation: none !important; }
        }
      `}</style>

      {/* ── Tab Toggle ── */}
      <div className="p-4 sm:p-7 pb-0">
        <div className="relative inline-flex rounded-xl bg-white/[0.03] border border-white/[0.08] p-1">
          <div
            className="absolute top-1 bottom-1 rounded-lg bg-accent/20 border border-accent/30 transition-all duration-200"
            style={{
              left: tab === "analyze" ? "4px" : "50%",
              width: "calc(50% - 4px)",
            }}
          />
          <button
            onClick={() => setTab("analyze")}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              tab === "analyze" ? "text-white" : "text-foreground-60 hover:text-foreground"
            }`}
          >
            <ScanSearch className="h-4 w-4" />
            <span className="hidden sm:inline">Analyze Your Image</span>
            <span className="sm:hidden">Analyze</span>
          </button>
          <button
            onClick={() => setTab("reference")}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              tab === "reference" ? "text-white" : "text-foreground-60 hover:text-foreground"
            }`}
          >
            <Ruler className="h-4 w-4" />
            <span className="hidden sm:inline">Quick Reference</span>
            <span className="sm:hidden">Reference</span>
          </button>
        </div>
      </div>

      {/* ── Tab 1: Analyze Your Image ── */}
      {tab === "analyze" && (
        <div className="p-4 sm:p-7">
          {/* Inputs — big and prominent */}
          <div className="flex flex-wrap items-end gap-4 mb-8">
            <div className="flex-1 min-w-[120px] max-w-[200px]">
              <label
                htmlFor="analyze-width"
                className="block text-[11px] uppercase tracking-widest text-foreground-60 mb-2 font-medium"
              >
                Width (px)
              </label>
              <input
                id="analyze-width"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="4000"
                value={pixelWidth}
                onChange={(e) => handleWidth(e.target.value)}
                className="w-full bg-white/[0.04] border-2 border-white/[0.08] rounded-xl px-4 py-3.5 text-lg font-mono font-semibold text-white placeholder:text-foreground-60/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/40 transition-all"
              />
            </div>
            <div className="text-foreground-60/40 text-2xl font-light pb-3.5">
              &times;
            </div>
            <div className="flex-1 min-w-[120px] max-w-[200px]">
              <label
                htmlFor="analyze-height"
                className="block text-[11px] uppercase tracking-widest text-foreground-60 mb-2 font-medium"
              >
                Height (px)
              </label>
              <input
                id="analyze-height"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="3000"
                value={pixelHeight}
                onChange={(e) => handleHeight(e.target.value)}
                className="w-full bg-white/[0.04] border-2 border-white/[0.08] rounded-xl px-4 py-3.5 text-lg font-mono font-semibold text-white placeholder:text-foreground-60/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/40 transition-all"
              />
            </div>
          </div>

          {/* Results */}
          {analysisResults ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <ImageSummaryCard
                width={analysisResults.width}
                height={analysisResults.height}
                detectedRatio={analysisResults.detected}
                megapixels={analysisResults.megapixels}
                jpegSize={analysisResults.jpegSize}
                pngSize={analysisResults.pngSize}
                bestGroupLabel={analysisResults.bestGroupLabel}
                bestGroupSizeCount={analysisResults.bestGroupSizeCount}
              />

              <div className="space-y-3">
                {analysisResults.groups.map((analysis, idx) => {
                  const key = `${analysis.group}-${analysis.label}-${idx}`;
                  return (
                    <RatioGroupCard
                      key={key}
                      analysis={analysis}
                      expanded={expandedGroups.has(key)}
                      onToggle={() => toggleGroup(key)}
                      rank={idx}
                    />
                  );
                })}

                {/* Product CTA — contextual based on best result */}
                {(() => {
                  const bestCrop = analysisResults.groups[0]?.cropPercent ?? 1;
                  const isPerfect = bestCrop === 0;
                  const isHeavy = bestCrop >= 0.15;
                  const headline = isPerfect
                    ? `Perfect ratio — export all ${analysisResults.bestGroupSizeCount} sizes automatically`
                    : isHeavy
                    ? "Your image crops heavily across most sizes"
                    : "Generate ratio-optimized files for every size";
                  const body = isPerfect
                    ? "All sizes in this ratio print without any cropping. SnapToSize exports them as organized ZIP packs in one click."
                    : isHeavy
                    ? "SnapToSize creates separate files per ratio group — so every size prints cleanly without unwanted cropping."
                    : "Minor crop on some sizes. SnapToSize generates optimized versions for each ratio automatically.";
                  return (
                    <div
                      className="rounded-xl border border-white/[0.08] bg-surface/60 p-4 sm:p-5 group-card flex items-start gap-4"
                      style={{ animationDelay: `${analysisResults.groups.length * 60}ms` }}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#2DD4BF]">
                          <path d="M11 3L5 11h4l-1 6 6-8h-4l1-6z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-semibold text-sm text-white mb-1">{headline}</p>
                        <p className="text-xs text-foreground-60 mb-2">{body}</p>
                        <a
                          href="https://app.snaptosize.com?source=seo_calculator&kind=tool"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[#2DD4BF] hover:underline"
                        >
                          Try SnapToSize Free &rarr;
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/[0.08] p-10 sm:p-14 text-center">
              {/* Animated crop illustration */}
              <div className="flex justify-center items-end gap-4 mb-6">
                <div className="relative" style={{ animation: "emptyFloat 3s ease-in-out infinite" }}>
                  <div className="w-12 h-16 rounded-md border-2 border-white/[0.08] bg-white/[0.02]" />
                  <div
                    className="absolute inset-0 m-auto rounded-md border-2 border-[#2DD4BF]/50 bg-[#2DD4BF]/10"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-[#2DD4BF]/70 font-mono whitespace-nowrap">0%</span>
                </div>
                <div className="relative" style={{ animation: "emptyFloat 3s ease-in-out 0.4s infinite" }}>
                  <div className="w-12 h-16 rounded-md border-2 border-white/[0.08] bg-white/[0.02]" />
                  <div
                    className="absolute rounded-md border-2 border-[#F59E0B]/50 bg-[#F59E0B]/10"
                    style={{ width: "85%", height: "100%", left: "7.5%", top: 0 }}
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-[#F59E0B]/70 font-mono whitespace-nowrap">8%</span>
                </div>
                <div className="relative" style={{ animation: "emptyFloat 3s ease-in-out 0.8s infinite" }}>
                  <div className="w-12 h-16 rounded-md border-2 border-white/[0.08] bg-white/[0.02]" />
                  <div
                    className="absolute rounded-md border-2 border-[#FDA4AF]/50 bg-[#FDA4AF]/10"
                    style={{ width: "65%", height: "100%", left: "17.5%", top: 0 }}
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-[#FDA4AF]/70 font-mono whitespace-nowrap">25%</span>
                </div>
              </div>
              <style>{`
                @keyframes emptyFloat {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-3px); }
                }
              `}</style>
              <p className="text-base text-foreground-60 mb-1.5 mt-3">
                Enter your image&apos;s pixel dimensions above
              </p>
              <p className="text-sm text-foreground-60/50">
                Instantly see which print sizes fit your image perfectly &mdash; and which will crop
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── Tab 2: Quick Reference ── */}
      {tab === "reference" && (
        <div className="p-4 sm:p-7">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-foreground-60 mb-3">Popular sizes</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SIZES.map((size) => (
                <SizeButton
                  key={size.id}
                  size={size}
                  selected={selectedSizeId === size.id}
                  onClick={() => setSelectedSizeId(size.id)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {RATIO_GROUP_ORDER.map((group) => (
              <div key={group}>
                <p className="text-xs uppercase tracking-wider text-foreground-60 mb-2">
                  {RATIO_GROUP_LABELS[group]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizesByGroup[group].map((size) => (
                    <SizeButton
                      key={size.id}
                      size={size}
                      selected={selectedSizeId === size.id}
                      onClick={() => setSelectedSizeId(size.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedSize ? (
            <SizeResults size={selectedSize} />
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-border p-8 text-center text-sm text-foreground-60">
              Select a size above to see pixel dimensions and file sizes
            </div>
          )}
        </div>
      )}
    </div>
  );
}
