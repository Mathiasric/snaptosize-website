"use client";

import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";

interface ContextualCTAProps {
  problem: string;
  solution: string;
  appUrl: string;
  buttonText?: string;
}

export function ContextualCTA({
  problem,
  solution,
  appUrl,
  buttonText = "Try It Free",
}: ContextualCTAProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] border-b-2 border-b-[#2DD4BF]/40 bg-[#0c0a17] p-8 max-w-2xl mx-auto">
      <p className="text-foreground-60 text-sm mb-3">{problem}</p>
      <p className="text-lg font-medium mb-6">{solution}</p>
      <a
        href={appUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          posthog.capture("cta_clicked", {
            source: typeof window !== "undefined" ? window.location.pathname : "",
            cta_type: "inline",
            destination: appUrl,
          });
        }}
      >
        <Button className="text-base px-7 py-3">
          {buttonText} <ArrowRight className="ml-2 h-4 w-4 inline" />
        </Button>
      </a>
      <p className="text-xs text-foreground-60 mt-3">
        No account needed &middot; No credit card required
      </p>
    </div>
  );
}
