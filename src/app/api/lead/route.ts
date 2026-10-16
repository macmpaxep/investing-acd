import { NextResponse } from "next/server";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim().slice(0, 100) : "";
  const contact = typeof body?.contact === "string" ? body.contact.trim().slice(0, 100) : "";

  if (name.length < 2 || contact.length < 4 || !body?.consent) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const text =
    `<b>Новая заявка University of Budget Projecting</b>\n` +
    `Имя: ${esc(name)}\n` +
    `Контакт: ${esc(contact)}`;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("[lead] Telegram error", res?.status);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
