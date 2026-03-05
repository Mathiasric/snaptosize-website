// Cloudflare Pages Function
// Handles POST /api/subscribe directly at edge level
// Bypasses Next.js entirely to avoid 405 errors on static routes

import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const onRequestPost: PagesFunction<Env> = async (context: EventContext<Env, any, any>) => {
  try {
    const body = await context.request.json() as { email?: string };
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get environment variables
    const apiKey = context.env.RESEND_API_KEY;
    const audienceId = context.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      console.error("RESEND_API_KEY or RESEND_AUDIENCE_ID not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(apiKey);

    // Add contact to audience
    try {
      await resend.contacts.create({
        email: trimmedEmail,
        audienceId: audienceId,
      });
    } catch (audienceError: any) {
      // If contact already exists, treat as success
      if (!audienceError?.message?.includes("already exists")) {
        console.error("Resend audience error:", audienceError);
        return new Response(
          JSON.stringify({ error: "Failed to subscribe" }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
      console.log(`Contact already exists: ${trimmedEmail}`);
    }

    // Send welcome email with PDF
    try {
      await resend.emails.send({
        from: "SnapToSize <hello@snaptosize.com>",
        to: trimmedEmail,
        subject: "Your Free Etsy Print Size Cheat Sheet",
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #7C3AED; font-size: 24px; margin-bottom: 16px;">Thanks for subscribing!</h1>

            <p style="color: #333; line-height: 1.6; margin-bottom: 16px;">
              Here's your <strong>free Etsy Print Size Cheat Sheet</strong> — a quick reference for all standard Etsy print ratios and pixel dimensions at 300 DPI.
            </p>

            <p style="color: #333; line-height: 1.6; margin-bottom: 16px;">
              <a href="https://snaptosize.com/assets/etsy-print-size-cheat-sheet.pdf"
                 style="display: inline-block; background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                Download Your Cheat Sheet (PDF)
              </a>
            </p>

            <p style="color: #333; line-height: 1.6; margin-bottom: 16px;">
              Ready to automate your Etsy print workflow?
              <a href="https://app.snaptosize.com" style="color: #7C3AED; text-decoration: underline;">Start using SnapToSize for free</a> — no credit card required.
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">

            <p style="color: #666; font-size: 14px; line-height: 1.5;">
              You're receiving this because you signed up for the SnapToSize email list.<br>
              <a href="https://snaptosize.com" style="color: #7C3AED;">snaptosize.com</a>
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      // Don't fail the request if email fails - they're in the audience
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
