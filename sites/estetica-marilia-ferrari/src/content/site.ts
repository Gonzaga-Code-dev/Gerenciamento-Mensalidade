// Conteúdo da prévia da Estética Marília Ferrari.
// Itens marcados com TODO precisam ser confirmados com a cliente.

const message = encodeURIComponent(
  "Olá, Marília! Vim pelo site e gostaria de agendar um horário.",
);

export const site = {
  name: "Estética Marília Ferrari",
  short: "Marília Ferrari",
  tagline: "Estética facial e Pilates em São Mateus",
  title: "Estética Marília Ferrari | Estética facial e Pilates em São Mateus – SP",
  description:
    "Tratamentos faciais, limpeza de pele, peeling e dermaplaning em São Mateus, Zona Leste de SP. Agende pelo WhatsApp.",
  // TODO: confirmar o número. Google: (11) 98773-1945 · Fresha: (11) 95704-6899.
  phone: "(11) 98773-1945",
  phoneE164: "+5511987731945",
  whatsapp: `https://wa.me/5511987731945?text=${message}`,
  rating: { value: "5,0", count: 126 },
  address: {
    street: "R. Min. Luís Sparano, 318",
    district: "São Mateus",
    city: "São Paulo",
    state: "SP",
    zip: "03970-050",
  },
  mapEmbed:
    "https://www.google.com/maps?q=R.+Ministro+Lu%C3%ADs+Sparano,+318,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=R.+Ministro+Lu%C3%ADs+Sparano,+318,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo+-+SP,+03970-050",
};

// Serviços listados no perfil público dela (Fresha). TODO: confirmar e completar.
export const facial = [
  {
    title: "Tratamentos faciais",
    text: "Protocolos definidos depois de entender a sua pele, o seu momento e o que você quer cuidar.",
  },
  {
    title: "Limpeza de pele",
    text: "Higienização profunda com extração, para uma pele mais limpa, leve e equilibrada.",
  },
  {
    title: "Peeling químico",
    text: "Renovação da superfície da pele, indicada conforme o tipo de pele e a sua rotina.",
  },
  {
    title: "Dermaplaning",
    text: "Esfoliação delicada que remove células mortas e a penugem, deixando a pele mais uniforme.",
  },
];

export const faq = [
  {
    q: "Qual tratamento é indicado para mim?",
    a: "Isso é definido no atendimento, depois de avaliar a sua pele. Se tiver dúvida, chame no WhatsApp e conte o que você quer cuidar.",
  },
  {
    q: "Como faço para agendar?",
    a: "Pelo WhatsApp, no botão desta página. A resposta vem direto do espaço.",
  },
  {
    q: "Onde fica o espaço?",
    a: "Na R. Min. Luís Sparano, 318, em São Mateus, Zona Leste de São Paulo.",
  },
];
