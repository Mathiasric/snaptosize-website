"use client";

import { useRef, useState } from "react";
import { Check, AlertTriangle, UploadCloud, RotateCcw } from "lucide-react";

const LIMIT_MB = 20;
const ACCEPT = ".jpg,.jpeg,.png,.pdf,.zip";

type Result = { name: string; sizeMB: number };

export function FileSizeChecker({ appUrl }: { appUrl: string }) {
  const [result, setResult] = useState<Result | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File | undefined | null) {
    if (!file) return;
    setResult({ name: file.name, sizeMB: file.size / (1024 * 1024) });
  }

  const over = result ? result.sizeMB > LIMIT_MB : false;
  const sizeLabel = result ? result.sizeMB.toFixed(result.sizeMB < 10 ? 1 : 0) : "";
  const overBy = result ? (result.sizeMB - LIMIT_MB).toFixed(result.sizeMB - LIMIT_MB < 10 ? 1 : 0) : "";

  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-teal-300/70 mb-2">
        Free instant check
      </p>
      <p className="text-lg font-bold text-white mb-1">
        Will your file pass Etsy&apos;s 20&nbsp;MB limit?
      </p>
      <p className="text-xs text-white/50 mb-4">
        Checked in your browser — nothing is uploaded.
      </p>

      {!result ? (
        <>
          <label
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              handleFile(e.dataTransfer.files?.[0]);
            }}
            className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-7 text-center transition-colors ${
              dragging
                ? "border-teal-400/70 bg-teal-400/[0.06]"
                : "border-white/15 hover:border-teal-400/40 hover:bg-white/[0.02]"
            }`}
          >
            <UploadCloud className="h-7 w-7 text-teal-300/80" />
            <span className="text-sm font-medium text-white/85">
              Drop your file or click to choose
            </span>
            <span className="text-[11px] text-white/40">
              .jpg · .png · .pdf · .zip — Etsy&apos;s allowed types
            </span>
            <input
              ref={inputRef}
              type="file"
              accept={ACCEPT}
              className="sr-only"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </label>
          <p className="mt-3 text-[11px] leading-relaxed text-white/40">
            Typical 4000×6000 print: <span className="text-white/60">JPG ≈ 5&nbsp;MB</span> ·
            same image as <span className="text-white/60">PNG ≈ 30&nbsp;MB</span>. PNG is why
            most files get rejected.
          </p>
        </>
      ) : (
        <div>
          <div
            className={`flex items-start gap-3 rounded-xl border px-4 py-4 ${
              over
                ? "border-amber-500/30 bg-amber-500/[0.07]"
                : "border-teal-500/30 bg-teal-500/[0.08]"
            }`}
          >
            {over ? (
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            ) : (
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
            )}
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white" title={result.name}>
                {result.name}
              </p>
              <p className={`text-sm ${over ? "text-amber-200/90" : "text-teal-200/90"}`}>
                {sizeLabel}&nbsp;MB —{" "}
                {over
                  ? `over by ${overBy} MB`
                  : "under Etsy's 20 MB limit. You're good to upload."}
              </p>
            </div>
          </div>

          {over && (
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              Convert to <span className="text-white/85">JPG at 300&nbsp;DPI</span> and split your
              sizes into <span className="text-white/85">ratio packs</span> — each pack lands well
              under 20&nbsp;MB. SnapToSize does both automatically.
            </p>
          )}

          <a href={appUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block">
            <span className="gradient-btn focus-ring inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30">
              {over ? "Fix it free →" : "Generate Etsy-ready files free →"}
            </span>
          </a>

          <button
            type="button"
            onClick={() => {
              setResult(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="focus-ring mx-auto mt-3 flex items-center gap-1.5 text-xs text-white/45 hover:text-white/70"
          >
            <RotateCcw className="h-3 w-3" />
            Check another file
          </button>
        </div>
      )}
    </div>
  );
}
