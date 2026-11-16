import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "Exemplos de sites por nicho | Gonzaga Code", template: "%s | Exemplos Gonzaga Code" },
  description:
    "Exemplos de sites para pequenos negócios: estética, barbearia, saúde, pet shop, confeitaria, escolas e mais. Tecnologia aplicada a negócios.",
  // Negócios fictícios: não indexar.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Gonzaga Code",
    title: "Exemplos de sites por nicho | Gonzaga Code",
    description: "Veja como pode ficar o site do seu negócio.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
