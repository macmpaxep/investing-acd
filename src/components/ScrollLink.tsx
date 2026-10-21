"use client";

import type { ReactNode } from "react";

// Плавно прокручивает к элементу по id, даже если хэш в адресе уже совпадает.
export default function ScrollLink({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        const el = document.getElementById(to);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${to}`);
      }}
    >
      {children}
    </a>
  );
}
