import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { getSession } from "@/lib/auth";
import TopNav from "@/components/TopNav";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ilê Alaletu Axé Omim Odé Iboalamo — Mensalidades",
  description: "Gestão de mensalidades do terreiro",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();

  return (
    <html lang="pt-BR" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cinza-claro text-cinza-escuro">
        {session && <TopNav userName={session.name} />}
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
