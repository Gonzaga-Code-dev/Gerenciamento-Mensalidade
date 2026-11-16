import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta HTML/CSS/JS estático em out/: carrega rápido e publica em qualquer lugar.
  output: "export",
  // Gera /barbearia/index.html: abre direto em qualquer hospedagem estática.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
