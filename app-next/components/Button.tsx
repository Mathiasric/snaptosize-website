"use client";

import { ReactNode } from "react";
import posthog from "posthog-js";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all focus-ring";

  const variantClasses = {
    primary:
      "gradient-btn text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30",
    secondary:
      "border border-border bg-surface text-foreground hover:border-accent-30",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isAppCta = href.includes("app.snaptosize.com");
    return (
      <a
        href={href}
        className={classes}
        {...(isAppCta ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={() => {
          if (isAppCta && typeof window !== "undefined") {
            posthog.capture("cta_clicked", {
              source: window.location.pathname,
              cta_type: "button",
              destination: href,
            });
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
