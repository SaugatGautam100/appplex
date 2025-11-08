export const runtime = "nodejs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json(); // { name, email, message, ... }
    const payload = {
      access_key: process.env.WEB3FORMS_KEY,
      subject: "New contact via portfolio",
      from_name: "Portfolio Website",
      reply_to: data.email,
      ...data,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (json.success) return NextResponse.json({ ok: true });

    return NextResponse.json({ ok: false, error: json.message || "Failed" }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}