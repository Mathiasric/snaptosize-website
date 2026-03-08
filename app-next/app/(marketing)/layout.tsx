import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import UTMPersistence from "@/components/UTMPersistence";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UTMPersistence />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
