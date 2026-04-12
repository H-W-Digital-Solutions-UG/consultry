"use client";

import { useState } from "react";
import { FAQItem } from "@/components/marketing/FAQItem";
import type { ProductFaqItem } from "@/lib/content/de/product";

type FAQAccordionProps = {
  items: ProductFaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <FAQItem
          answer={item.answer}
          isOpen={openIndex === index}
          key={item.question}
          onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
          question={item.question}
        />
      ))}
    </div>
  );
}
