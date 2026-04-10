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
    <div className="rounded-xl border border-white/[0.08] border-l-4 border-l-[#2DD4BF] bg-[#0e0c18] p-8 text-center max-w-2xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold mb-2">{heading}</h3>
      <p className="text-sm text-[#2DD4BF]/70 font-medium mb-4">{stat}</p>
      <p className="text-foreground-60 mb-6">{description}</p>
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
      <p className="text-xs text-foreground-60 mt-3">
        No account needed &middot; No credit card required
      </p>
    </div>
  );
}
