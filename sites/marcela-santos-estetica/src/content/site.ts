// Conteúdo da prévia da MS Marcela Santos Estética e Saúde.
// Itens marcados com TODO precisam ser confirmados com a cliente.

const message = encodeURIComponent("Olá, Marcela! Vim pelo site e gostaria de agendar um horário.");

export const site = {
  name: "MS Marcela Santos Estética e Saúde",
  short: "Marcela Santos",
  title: "Marcela Santos Estética e Saúde | São Mateus – SP",
  description:
    "Clínica de estética em São Mateus, Zona Leste de SP: limpeza de pele, microagulhamento, revitalização facial, massagem e depilação. Agende pelo WhatsApp.",
  phone: "(11) 95385-0114", // TODO: confirmar se é WhatsApp
  phoneE164: "+5511953850114",
  whatsapp: `https://wa.me/5511953850114?text=${message}`,
  rating: { value: "5,0", count: 91 },
  address: {
    street: "Av. Mateo Bei, 1575 – Sala 02",
    district: "São Mateus",
    city: "São Paulo",
    state: "SP",
    zip: "03949-100",
  },
  hours: "9h às 19h30", // TODO: confirmar dias da semana
  mapEmbed: "https://www.google.com/maps?q=Av.+Mateo+Bei,+1575,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Av.+Mateo+Bei,+1575,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo+-+SP",
};

// Procedimentos do catálogo do WhatsApp Business dela. Preços ficam de fora de propósito.
export const services = [
  {
    group: "Rosto",
    items: [
      { title: "Limpeza de pele personalizada", text: "Higienização profunda, ajustada ao tipo e ao momento da sua pele." },
      { title: "Revitalização facial", text: "Cuidado para devolver viço e luminosidade à pele." },
      { title: "Microagulhamento", text: "Tratamento para textura e qualidade da pele, indicado após avaliação." },
      { title: "Controle de manchas", text: "Protocolo para uniformizar o tom da pele, conforme o seu caso." },
      { title: "Injetáveis", text: "Tratamentos estéticos injetáveis, sempre a partir de uma avaliação." },
      { title: "Hidra Gloss", text: "Hidratação dos lábios, para lábios mais macios e com aspecto saudável." },
    ],
  },
  {
    group: "Corpo e bem-estar",
    items: [
      { title: "Massagem relaxante", text: "Sessão de 60 minutos para desacelerar e aliviar a tensão do dia a dia." },
      { title: "Depilação método espanhol", text: "Depilação com cera, feminina e masculina." },
    ],
  },
];

export const pillars = [
  {
    title: "Avaliação antes de tudo",
    text: "Cada atendimento começa entendendo você: sua rotina, seu histórico e o que você quer cuidar.",
  },
  {
    title: "Indicação para o seu caso",
    text: "O cuidado é escolhido para você, com cada etapa explicada antes de começar.",
  },
  {
    title: "Acompanhamento de perto",
    text: "Retornos para acompanhar a evolução e ajustar o que for preciso.",
  },
];

export const faq = [
  {
    q: "Não sei qual procedimento é o certo para mim. E agora?",
    a: "Chame no WhatsApp e conte o que você quer cuidar. A clínica te explica as opções e indica o melhor caminho para o seu caso.",
  },
  {
    q: "Vocês atendem homens?",
    a: "Sim. A depilação é feminina e masculina. Para os demais procedimentos, consulte pelo WhatsApp.",
  },
  {
    q: "Preciso de avaliação antes?",
    a: "Sim. A avaliação é o que garante que o cuidado indicado faz sentido para você.",
  },
  {
    q: "Como faço para agendar?",
    a: "Pelo WhatsApp, no botão desta página. A resposta vem direto do espaço.",
  },
];
