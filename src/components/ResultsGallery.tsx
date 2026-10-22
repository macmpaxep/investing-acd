"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  { t: "IONQ", side: "Long" },
  { t: "RGTI", side: "Long" },
  { t: "PLTR", side: "Long" },
  { t: "JPM", side: "Long" },
  { t: "UBER", side: "Long" },
  { t: "PLTR", side: "Long" },
  { t: "INTC", side: "Short" },
  { t: "WMT", side: "Long" },
  { t: "MA", side: "Long" },
  { t: "TSLA", side: "Long" },
  { t: "MSFT", side: "Long" },
  { t: "PLTR", side: "Long" },
  { t: "AMD", side: "Long" },
];

export default function ResultsGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  const go = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const n = Math.max(0, Math.min(SLIDES.length - 1, i));
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, go]);

  function onScroll() {
    const el = track.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <>
      <button type="button" className="btn btn-results" onClick={() => { setIndex(0); setOpen(true); }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 7h6v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Результаты учеников
      </button>

      {open && (
        <div className="rg-overlay" role="dialog" aria-modal="true" aria-label="Результаты учеников" onClick={() => setOpen(false)}>
          <div className="rg-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="rg-close" aria-label="Закрыть" onClick={() => setOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
            </button>
            <div className="rg-head">
              <b>Результаты учеников</b>
              <span>{index + 1} / {SLIDES.length}</span>
            </div>
            <div className="rg-stage">
              <button type="button" className="rg-arrow rg-prev" aria-label="Назад" onClick={() => go(index - 1)} disabled={index === 0}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <div className="rg-track" ref={track} onScroll={onScroll}>
                {SLIDES.map((s, i) => (
                  <figure key={i} className="rg-slide">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/results/${i + 1}.jpg`} alt={`Сделка по ${s.t}`} loading={i < 2 ? "eager" : "lazy"} draggable={false} />
                    <figcaption>{s.t} · {s.side}</figcaption>
                  </figure>
                ))}
              </div>
              <button type="button" className="rg-arrow rg-next" aria-label="Вперёд" onClick={() => go(index + 1)} disabled={index === SLIDES.length - 1}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
            <div className="rg-dots" aria-hidden>
              {SLIDES.map((_, i) => (
                <i key={i} className={i === index ? "on" : ""} onClick={() => go(i)} />
              ))}
            </div>
            <p className="rg-note">Результаты отдельных сделок. Прошлые результаты не гарантируют доходность в будущем.</p>
          </div>
        </div>
      )}
    </>
  );
}
