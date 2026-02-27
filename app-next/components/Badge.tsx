import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-accent-15 px-3 py-1 text-xs font-semibold text-accent-light">
      {children}
    </span>
  );
}
