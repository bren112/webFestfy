import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Festfy",
  description: "Sistema de ingressos",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="pt-BR">
      <body>
      <Header />
      </body>
      </html>
  );
}