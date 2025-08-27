import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Importando os componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Clínica Hyllua",
  description: "Cuidando da sua saúde e bem-estar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
       
        <main className="mx-auto ">
           <Header />
          {children}</main>
        <Footer />
      </body>
    </html>
  );
}