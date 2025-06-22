import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "CarHub",
  description: "Encontre o seu próximo carro.",
  icons: {
    icon: "/car-logo.svg",
  },
};

import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <Navbar />
        {children}
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
