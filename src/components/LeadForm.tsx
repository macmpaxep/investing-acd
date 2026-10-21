"use client";

import { useEffect, useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "done" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [plan, setPlan] = useState("premium");

  useEffect(() => {
    const onPlan = (e: Event) => setPlan((e as CustomEvent<string>).detail);
    window.addEventListener("plan:select", onPlan);
    return () => window.removeEventListener("plan:select", onPlan);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-done">
        <b>Заявка принята</b>
        <p>Мы свяжемся с вами в ближайшее время и отправим детали оплаты.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <label>
        Имя
        <input name="name" required minLength={2} placeholder="Как к вам обращаться" />
      </label>
      <label>
        WhatsApp или Telegram
        <input name="contact" required minLength={4} placeholder="@username или номер WhatsApp" />
      </label>
      <label>
        Интересует
        <select name="plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="start">Подписка «Старт»</option>
          <option value="club">Подписка «Клуб»</option>
          <option value="premium">Подписка «Премиум»</option>
        </select>
      </label>
      <label className="check">
        <input type="checkbox" name="consent" required />
        <span>Согласен(на) на обработку персональных данных</span>
      </label>
      <button className="btn btn-accent btn-block" disabled={status === "loading"}>
        {status === "loading" ? "Отправляем…" : "Оставить заявку"}
      </button>
      {status === "error" && (
        <p className="form-error">Не получилось отправить. Попробуйте ещё раз.</p>
      )}
    </form>
  );
}
