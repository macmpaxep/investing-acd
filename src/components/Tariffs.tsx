"use client";

import { useState } from "react";
import { tariffs } from "@/lib/content";

export default function Tariffs() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");

  function choose(id: string) {
    window.dispatchEvent(new CustomEvent("plan:select", { detail: id }));
    document.getElementById("price")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {tariffs.showPrices && (
        <div className="period" role="tablist" aria-label="Период оплаты">
          {(["monthly", "yearly"] as const).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={period === k}
              className={period === k ? "on" : ""}
              onClick={() => setPeriod(k)}
            >
              {tariffs.periods[k]}
            </button>
          ))}
        </div>
      )}
      <div className="plans">
        {tariffs.plans.map((p) => (
          <article key={p.id} className={`plan ${p.highlight ? "plan-hot" : ""}`}>
            {p.highlight && <span className="plan-badge">Популярный</span>}
            <h3>{p.name}</h3>
            <p className="plan-note">{p.note}</p>
            {tariffs.showPrices && <div className="plan-price">{p.price[period]}</div>}
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <svg className="tick" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="11" fill="currentColor" opacity=".14" />
                    <path d="M7 12.5l3.2 3.2L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button type="button" className={`btn btn-block ${p.highlight ? "btn-accent" : "btn-ghost"}`} onClick={() => choose(p.id)}>
              Выбрать «{p.name}»
            </button>
          </article>
        ))}
      </div>
    </>
  );
}
