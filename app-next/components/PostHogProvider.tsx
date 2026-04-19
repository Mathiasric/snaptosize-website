"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.posthog.com",
    capture_pageview: false,
    persistence: "localStorage",
  });
}

function PageviewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    posthog.capture("$pageview");
  }, [pathname]);

  return null;
}

function ScrollDepthTracker() {
  const pathname = usePathname();
  const firedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    firedRef.current = new Set();

    const milestones = [
      { depth: "25%", ratio: 0.25 },
      { depth: "50%", ratio: 0.5 },
      { depth: "75%", ratio: 0.75 },
      { depth: "100%", ratio: 1.0 },
    ];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollRatio = scrollTop / docHeight;

      for (const m of milestones) {
        if (scrollRatio >= m.ratio && !firedRef.current.has(m.depth)) {
          firedRef.current.add(m.depth);
          posthog.capture("scroll_depth", { depth: m.depth, page: pathname });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PHProvider client={posthog}>
      <PageviewTracker />
      <ScrollDepthTracker />
      {children}
    </PHProvider>
  );
}
