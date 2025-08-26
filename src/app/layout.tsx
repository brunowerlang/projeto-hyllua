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
      <body className=" bg-white text-gray-900">
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
