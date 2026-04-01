import type { ReactNode } from "react";

interface QuickAnswerProps {
  question: string;
  children: ReactNode;
}

export function QuickAnswer({ question, children }: QuickAnswerProps) {
  return (
    <div className="border-l-4 border-l-[#2DD4BF] bg-white/[0.03] rounded-xl p-5 md:p-6">
      <p className="text-[10px] font-mono tracking-[0.15em] text-teal-400/60 uppercase mb-2">
        Quick Answer
      </p>
      <p className="font-semibold text-foreground mb-2">{question}</p>
      <div className="text-foreground-60 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
