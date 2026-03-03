"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/Card";

interface FAQItem {
  question: string;
  answer: ReactNode | ReactNode[];
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <Card key={index}>
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 rounded"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-foreground-60 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-2">
                  {Array.isArray(item.answer) ? (
                    item.answer.map((content, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-sm text-foreground-60 ${
                          pIndex < (item.answer as ReactNode[]).length - 1 ? "mb-3" : ""
                        }`}
                      >
                        {content}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-foreground-60">{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
