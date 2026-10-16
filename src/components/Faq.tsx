"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <i aria-hidden />
            </button>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
