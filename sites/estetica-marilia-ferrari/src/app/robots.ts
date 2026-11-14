import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Prévia: nada deve ser indexado.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
