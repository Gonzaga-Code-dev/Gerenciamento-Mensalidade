"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "./icons";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-150 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                <span className="font-serif text-xl font-medium leading-snug text-graphite sm:text-2xl">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-hairline text-sage"
                >
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="pb-6 pr-10">
              <p className="max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
