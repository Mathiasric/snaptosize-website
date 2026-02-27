import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
      {children}
    </div>
  );
}
