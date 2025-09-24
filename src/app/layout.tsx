import type { Metadata } from "next";
import { Lato, Bodoni_Moda_SC } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

const bodoniModaSC = Bodoni_Moda_SC({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Portfólio | Luciana Menezes - Arquitetura & Engenharia",
  description: "Portfólio de Luciana Menezes, arquiteta especializada em projetos arquitetônicos e engenharia estrutural. Explore criações únicas que unem estética, funcionalidade e identidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${lato.variable} ${bodoniModaSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
