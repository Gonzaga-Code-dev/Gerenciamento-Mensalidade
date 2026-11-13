// Conteúdo da prévia da Dra. Márcia Regina.
// Itens marcados com TODO precisam ser confirmados com a cliente.

export const site = {
  name: "Dra. Márcia Regina",
  role: "Tricologista e Biomédica Esteta",
  crbm: "[preencher]", // TODO: número do CRBM
  title: "Dra. Márcia Regina | Tricologista em São Mateus – SP",
  description:
    "Tricologista em São Mateus, Zona Leste de SP. Avaliação capilar e tratamento para queda de cabelo. Agende pelo WhatsApp.",
  // TODO: confirmar se o número é WhatsApp.
  phone: "+55 11 99374-8621",
  phoneE164: "+5511993748621",
  whatsapp:
    "https://wa.me/5511993748621?text=Ol%C3%A1%2C%20Dra.%20M%C3%A1rcia!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20capilar.",
  rating: { value: "5,0", count: 105 },
  address: {
    street: "Av. Mateo Bei, 2344 – Sala 01",
    district: "Cidade São Mateus",
    city: "São Paulo",
    state: "SP",
    zip: "03949-200",
  },
  geo: { lat: -23.6025988, lng: -46.4828285 },
  mapEmbed:
    "https://www.google.com/maps?q=Av.+Mateo+Bei,+2344,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Av.+Mateo+Bei,+2344,+S%C3%A3o+Mateus,+S%C3%A3o+Paulo+-+SP",
  hours: [
    { days: "Segunda a sexta", time: "9h às 18h" },
    { days: "Sábado", time: "9h às 16h" },
    { days: "Domingo", time: "Fechado" },
  ],
};

// Fotos: coloque os arquivos em public/fotos/ com estes nomes.
// Enquanto não existirem, a página mostra um espaço reservado elegante.
export const photos = {
  portrait: "/fotos/marcia.png", // retrato, de preferência com fundo removido (PNG)
  about: "/fotos/atendimento.jpg", // foto em atendimento ou do consultório
};

export const steps = [
  {
    n: "01",
    title: "Avaliação capilar",
    text: "Análise do couro cabeludo, dos fios e do seu histórico para identificar o que está causando a queda.",
  },
  {
    n: "02",
    title: "Plano de cuidado",
    text: "Um tratamento definido para o seu caso, com cada etapa explicada antes de começar.",
  },
  {
    n: "03",
    title: "Acompanhamento",
    text: "Retornos para acompanhar a evolução e ajustar o tratamento quando necessário.",
  },
];

// TODO: confirmar áreas de atendimento com a cliente.
export const areas = [
  "Avaliação e diagnóstico capilar",
  "Tratamento para queda de cabelo e alopecia",
  "Terapias aplicadas no couro cabeludo",
  "Cuidados com a pele",
];

export const faq = [
  {
    q: "Como funciona a primeira consulta?",
    a: "É uma avaliação completa do couro cabeludo e dos fios, com conversa sobre seu histórico, hábitos e exames, se você tiver.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Depende da causa e de cada organismo. O prazo esperado é explicado na avaliação, de acordo com o seu caso.",
  },
  {
    q: "Preciso levar exames?",
    a: "Se tiver exames recentes, leve. Se forem necessários novos, isso é orientado na consulta.",
  },
  {
    q: "Como faço para agendar?",
    a: "Pelo WhatsApp, no botão desta página. A resposta vem direto da clínica.",
  },
];
