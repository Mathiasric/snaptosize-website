"use client";

import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  children: ReactNode;
}

export function Accordion({ question, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-surface">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold transition-colors hover:text-accent-light focus-ring"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-sm text-foreground-60">{children}</div>
      )}
    </div>
  );
}
