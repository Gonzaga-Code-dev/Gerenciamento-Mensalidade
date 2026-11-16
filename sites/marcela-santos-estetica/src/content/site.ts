// Conteúdo da prévia da MS Marcela Santos Estética e Saúde.
// Itens marcados com TODO precisam ser confirmados com a cliente.

const message = encodeURIComponent("Olá, Marcela! Vim pelo site e gostaria de agendar um horário.");

export const site = {
  name: "MS Marcela Santos Estética e Saúde",
  short: "Marcela Santos",
  title: "Marcela Santos Estética e Saúde | São Mateus – SP",
  description:
    "Estética e saúde em São Mateus, Zona Leste de SP. Atendimento individual, com avaliação antes de cada cuidado. Agende pelo WhatsApp.",
  phone: "(11) 95385-0114", // TODO: confirmar se é WhatsApp
  phoneE164: "+5511953850114",
  whatsapp: `https://wa.me/5511953850114?text=${message}`,
  rating: { value: "5,0", count: 91 },
  address: {
    street: "Av. Mateo Bei, 1575 – Sala 02",
    district: "São Mateus",
    city: "São Paulo",
    state: "SP",
  },
  mapEmbed: "https://www.google.com/maps?q=Av.+Mateo+Bei,+1575,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Av.+Mateo+Bei,+1575,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo+-+SP",
};

// TODO: serviços não encontrados em fontes públicas. Preencher com a cliente.
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
    q: "Quais procedimentos são realizados?",
    a: "Chame no WhatsApp e conte o que você quer cuidar. A equipe te explica as opções e indica o melhor caminho para o seu caso.",
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
