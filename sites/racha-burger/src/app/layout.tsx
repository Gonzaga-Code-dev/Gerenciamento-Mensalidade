import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Archivo } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], display: "swap" });
const alfa = Alfa_Slab_One({
  variable: "--font-alfa",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: site.title,
  description: site.description,
  // Prévia: não indexar. Remover quando o site for publicado oficialmente.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#12100e",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: "Hambúrguer",
  priceRange: "R$ 20–40",
  telephone: "+55-11-98927-7880",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "231" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${alfa.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
