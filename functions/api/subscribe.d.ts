// Cloudflare Pages Function type definitions
export {};

declare global {
  interface Env {
    RESEND_API_KEY: string;
    RESEND_AUDIENCE_ID: string;
  }
}
