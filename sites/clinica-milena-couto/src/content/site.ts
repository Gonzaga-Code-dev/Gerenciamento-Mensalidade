// Conteúdo da prévia da Clínica Milena Couto.
// Itens marcados com TODO precisam ser confirmados com a cliente.

const message = encodeURIComponent("Olá, Milena! Vim pelo site e gostaria de agendar uma avaliação.");

export const site = {
  name: "Clínica Milena Couto",
  title: "Clínica Milena Couto | Estética facial no Jardim Brasília – SP",
  description:
    "Tratamentos faciais, dermaplaning, IPL e estética facial masculina no Jardim Brasília, Zona Leste de SP. Agende pelo WhatsApp.",
  phone: "(11) 96498-4443", // TODO: confirmar se é WhatsApp
  phoneE164: "+5511964984443",
  whatsapp: `https://wa.me/5511964984443?text=${message}`,
  rating: { value: "5,0", count: 131 },
  address: {
    street: "R. Saboeirana, 77",
    district: "Jardim Brasília",
    city: "São Paulo",
    state: "SP",
    zip: "03582-030",
  },
  mapEmbed: "https://www.google.com/maps?q=R.+Saboeirana,+77,+Jardim+Bras%C3%ADlia,+S%C3%A3o+Paulo&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=R.+Saboeirana,+77,+Jardim+Bras%C3%ADlia,+S%C3%A3o+Paulo+-+SP,+03582-030",
};

// Serviços listados no perfil público (Fresha). TODO: confirmar e completar.
export const services = [
  {
    title: "Tratamentos faciais",
    text: "Protocolos montados a partir da avaliação da sua pele, do seu momento e do resultado que você busca.",
  },
  {
    title: "Dermaplaning",
    text: "Esfoliação delicada que remove células mortas e a penugem, para uma pele mais uniforme e luminosa.",
  },
  {
    title: "Luz intensa pulsada (IPL)",
    text: "Tecnologia de luz usada para uniformizar o tom da pele, com indicação definida na avaliação.",
  },
  {
    title: "Estética facial masculina",
    text: "Cuidados faciais pensados para a pele masculina, práticos e sem complicação.",
  },
];

export const steps = [
  { n: "I", title: "Avaliação", text: "Conversa e análise da pele para entender o que você precisa." },
  { n: "II", title: "Indicação", text: "O tratamento é definido para o seu caso, com cada etapa explicada." },
  { n: "III", title: "Cuidado contínuo", text: "Acompanhamento para manter os resultados no dia a dia." },
];
