import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta HTML/CSS/JS estático em out/: carrega rápido e publica em qualquer lugar.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
