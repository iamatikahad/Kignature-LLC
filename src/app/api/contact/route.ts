import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, email, company, subject, message } = body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email) ||
    typeof subject !== "string" ||
    !subject.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all required fields correctly." },
      { status: 422 },
    );
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    company: typeof company === "string" ? company.trim() : "",
    subject: subject.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      return NextResponse.json({ ok: true, delivered: true });
    } catch (err) {
      console.error("[contact] webhook delivery failed:", err);
      return NextResponse.json(
        { ok: false, error: "Unable to deliver your message right now." },
        { status: 502 },
      );
    }
  }

  // Placeholder mode: no CONTACT_WEBHOOK_URL configured.
  // Submissions are logged server-side so nothing is silently lost.
  console.info("[contact] new submission (webhook not configured):", {
    ...payload,
    message: `${payload.message.slice(0, 120)}…`,
  });

  return NextResponse.json({
    ok: true,
    delivered: false,
    notice:
      "CONTACT_WEBHOOK_URL is not configured — submission was logged server-side only.",
  });
}
