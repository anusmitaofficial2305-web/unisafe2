import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SOSButton } from "@/components/SOSButton";

interface LayoutProps {
  children: ReactNode;
  showFloatingSOS?: boolean;
}

export const Layout = ({ children, showFloatingSOS = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {showFloatingSOS && <SOSButton size="floating" />}
    </div>
  );
};
