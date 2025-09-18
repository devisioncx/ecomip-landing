import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECOMIP - Controle de Pragas e Dedetização em São Paulo",
  description:
    "Soluções profissionais em controle de pragas com garantia de resultado. Dedetização residencial e comercial na Grande São Paulo. Atendimento especializado!",
  icons: {
    icon: "/faviconEcomip2.png",
    shortcut: "/faviconEcomip2.png",
    apple: "/faviconEcomip2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
