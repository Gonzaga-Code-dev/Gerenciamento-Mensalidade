import { Cormorant_Garamond, Inter, Lato, Nunito, Oswald, Playfair_Display } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const nunito = Nunito({ subsets: ["latin"], display: "swap" });
const oswald = Oswald({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], display: "swap" });

export const fonts = { cormorant, inter, lato, nunito, oswald, playfair };

export type FontKey = keyof typeof fonts;
