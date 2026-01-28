import { Resend } from "resend";

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

function sanitize(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;

    // Honeypot
    const honeypot = sanitize(body.company);
    if (honeypot) {
      return Response.json({ ok: true, message: "Thanks!" }, { status: 200 });
    }

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const business = sanitize(body.business);
    const website = sanitize(body.website);
    const industry = sanitize(body.industry);
    const message = sanitize(body.message);

    if (!name || !email || !business || !message) {
      return Response.json(
        { ok: false, message: "Missing required fields. Please fill in name, email, business, and message." },
        { status: 400 }
      );
    }

    const resendApiKey = requiredEnv("RESEND_API_KEY");
    const to = requiredEnv("CONTACT_TO_EMAIL");
    const from = requiredEnv("CONTACT_FROM_EMAIL");

    const resend = new Resend(resendApiKey);

    const subject = `New lead: ${business} (${industry || "industry not specified"})`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : undefined,
      `Business: ${business}`,
      website ? `Website: ${website}` : undefined,
      industry ? `Industry: ${industry}` : undefined,
      "",
      "Message:",
      message
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text
    });

    return Response.json(
      { ok: true, message: "Received — we’ll review your info and respond within 1 business day." },
      { status: 200 }
    );
  } catch (err: any) {
    const msg = err?.message || "Unexpected error.";
    const hint =
      msg.includes("Missing environment variable")
        ? "Configure RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in Vercel."
        : "";

    return Response.json(
      {
        ok: false,
        message: hint ? `${msg}. ${hint}` : msg
      },
      { status: 500 }
    );
  }
}
