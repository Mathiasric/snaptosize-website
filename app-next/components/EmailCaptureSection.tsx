import { EmailCapture } from "@/components/EmailCapture";

interface EmailCaptureSectionProps {
  heading?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

export function EmailCaptureSection({
  heading = "Get the Free Print Size Cheat Sheet",
  description = "All 30 sizes, pixel dimensions, and file size estimates in one printable PDF. Pin it next to your desk.",
  placeholder = "you@email.com",
  buttonText = "Send Me the Cheat Sheet",
}: EmailCaptureSectionProps) {
  return (
    <div className="rounded-2xl border border-white/[0.08] border-t-2 border-t-[#2DD4BF]/30 bg-[#13112a] p-8 text-center max-w-xl mx-auto">
      {/* Document icon preview */}
      <div className="mx-auto mb-5 w-12 h-14 rounded-md border border-white/[0.1] bg-white/[0.03] flex flex-col items-center justify-center gap-1.5 p-2.5">
        <div className="w-full h-1 rounded-full bg-[#2DD4BF]/30" />
        <div className="w-3/4 h-1 rounded-full bg-white/10" />
        <div className="w-full h-1 rounded-full bg-white/10" />
        <div className="w-5/6 h-1 rounded-full bg-white/10" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3">{heading}</h3>
      <p className="text-foreground-60 mb-6">{description}</p>
      <EmailCapture placeholder={placeholder} buttonText={buttonText} />
    </div>
  );
}
