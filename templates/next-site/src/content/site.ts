// Conteúdo do site. Textos, contatos e seções ficam aqui.

export const site = {
  name: "__NAME__",
  url: "https://example.com", // TODO: domínio real
  description: "TODO: descrição curta do negócio (até 160 caracteres).",
  whatsapp: "5500000000000", // TODO: 55 + DDD + número, só dígitos
  instagram: "", // TODO: @ sem o arroba
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
