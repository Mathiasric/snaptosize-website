import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import UTMPersistence from "@/components/UTMPersistence";
import PostHogProvider from "@/components/PostHogProvider";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PostHogProvider>
      <UTMPersistence />
      <Header />
      <main>{children}</main>
      <Footer />
    </PostHogProvider>
  );
}
