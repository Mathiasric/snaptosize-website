import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}

export function Card({ children, accent = false, className = "" }: CardProps) {
  const baseClasses = "rounded-xl p-5 transition-colors";

  const variantClasses = accent
    ? "border border-accent-30 bg-accent-5"
    : "border border-border bg-surface hover:border-accent-30";

  return <div className={`${baseClasses} ${variantClasses} ${className}`}>{children}</div>;
}
