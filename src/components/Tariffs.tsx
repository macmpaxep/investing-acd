"use client";

import { tariffs } from "@/lib/content";

export default function Tariffs() {
  function choose(id: string) {
    window.dispatchEvent(new CustomEvent("plan:select", { detail: id }));
    document.getElementById("price")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="plans">
      {tariffs.plans.map((p) => (
        <article key={p.id} id={`plan-${p.id}`} className={`plan ${p.highlight ? "plan-hot" : ""}`}>
          {p.highlight && <span className="plan-badge">Популярный</span>}
          <h3>{p.name}</h3>
          <p className="plan-note">{p.note}</p>
          {tariffs.showPrices && (
            <div className="plan-price">
              {p.price} <small>{p.period}</small>
            </div>
          )}
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
  );
}
