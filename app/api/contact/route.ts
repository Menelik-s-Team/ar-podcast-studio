import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const file = formData.get("branding") as File | null;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(bytes),
      });
    }

    await resend.emails.send({
      from: "Studio B <noreply@landiloutalentagency.com>",
      to: "alexis@ambitiousroots.com",
      replyTo: email,
      subject: `New Inquiry from ${name} — Studio B`,
      attachments,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAFAF7;">
          <h2 style="color: #1A1208; font-size: 24px; margin-bottom: 8px;">New Studio B Inquiry</h2>
          <p style="color: #6B5E4E; font-size: 14px; margin-bottom: 24px; border-bottom: 1px solid #E8E0D0; padding-bottom: 16px;">
            Submitted via the contact form at ambitiousroots.com
          </p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6B5E4E; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 80px;">Name</td>
              <td style="padding: 10px 0; color: #1A1208; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B5E4E; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px 0; color: #C4861A; font-size: 15px;"><a href="mailto:${email}" style="color: #C4861A;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #FEF9EF; border-left: 3px solid #C4861A; border-radius: 4px;">
            <p style="color: #6B5E4E; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Message</p>
            <p style="color: #1A1208; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          ${file && file.size > 0 ? `
          <div style="margin-top: 16px; padding: 14px 20px; background: #F5E6C8; border-radius: 4px;">
            <p style="color: #6B5E4E; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 4px 0;">Branding / Logo Attached</p>
            <p style="color: #1A1208; font-size: 14px; margin: 0;">${file.name}</p>
          </div>` : ""}
          <p style="color: #6B5E4E; font-size: 12px; margin-top: 24px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
