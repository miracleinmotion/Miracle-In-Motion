"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/faq";

function AnswerText({ answer }: { answer: string | string[] }) {
  const paragraphs = Array.isArray(answer) ? answer : [answer];
  return (
    <div className="font-sans text-muted leading-relaxed space-y-4">
      {paragraphs.map((para, i) => (
        <p key={i} className="whitespace-pre-line">
          {para}
        </p>
      ))}
    </div>
  );
}

export default function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg sm:text-xl">
          {item.question}
        </span>
        <span
          className={`shrink-0 text-brass transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6">
            <AnswerText answer={item.answer} />
          </div>
        </div>
      </div>
    </div>
  );
}
