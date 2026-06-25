"use client";

import { Button } from "@/components/Button";
import posthog from "posthog-js";

interface FinalCTAProps {
  heading: string;
  stat: string;
  description: string;
  buttonText?: string;
  appUrl: string;
}

export function FinalCTA({
  heading,
  stat,
  description,
  buttonText = "Try SnapToSize Free",
  appUrl,
}: FinalCTAProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0c18] p-8 text-center max-w-2xl mx-auto">
      {/* soft teal glow, top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-44 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(45,212,191,0.16), transparent 70%)",
        }}
      />
      <div className="relative">
        <span className="mb-3 inline-block rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2DD4BF]">
          {stat}
        </span>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{heading}</h3>
        <p className="text-foreground-60 mb-6 max-w-md mx-auto">{description}</p>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            posthog.capture("cta_clicked", {
              source: typeof window !== "undefined" ? window.location.pathname : "",
              cta_type: "final",
              destination: appUrl,
            });
          }}
        >
          <Button className="text-base px-7 py-3">{buttonText}</Button>
        </a>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-foreground-60">
          <span>Free</span>
          <span className="text-white/20">&middot;</span>
          <span>No account</span>
          <span className="text-white/20">&middot;</span>
          <span>No credit card</span>
          <span className="text-white/20">&middot;</span>
          <span>Ready in seconds</span>
        </div>
      </div>
    </div>
  );
}
