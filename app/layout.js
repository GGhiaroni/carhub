import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "CarHub",
  description: "Encontre o seu próximo carro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
