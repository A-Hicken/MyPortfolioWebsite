import { Resend } from "resend";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 },
      );
    }
    if (!process.env.CONTACT_TO_EMAIL) {
      return Response.json(
        { ok: false, error: "Missing CONTACT_TO_EMAIL" },
        { status: 500 },
      );
    }
    if (!email || !subject || !message) {
      return Response.json(
        { ok: false, error: "Missing form fields" },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1) Always email YOU
    const notify = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `Portfolio: ${subject}`,
      text: `From: ${email}\n\n${message}`,
      reply_to: email,
    });

    // 2) Try auto-reply (may fail until domain is verified)
    let confirm = null;
    let confirmError = null;

    try {
      confirm = await resend.emails.send({
        from: "Amberlie Hicken <onboarding@resend.dev>",
        to: [email],
        subject: "Message received ✅",
        text:
          `Hi!\n\n` +
          `Thanks for reaching out — I received your message and I’ll get back to you as soon as I can.\n\n` +
          `— Amberlie`,
        reply_to: process.env.CONTACT_TO_EMAIL,
      });
    } catch (e) {
      confirmError = e?.message || String(e);
      console.error("AUTO-REPLY ERROR:", confirmError);
    }

    return Response.json(
      { ok: true, notify, confirm, confirmError },
      { status: 200 },
    );
  } catch (err) {
    console.error("EMAIL SEND ERROR:", err);
    return Response.json(
      { ok: false, error: err?.message || "Send failed" },
      { status: 500 },
    );
  }
}
