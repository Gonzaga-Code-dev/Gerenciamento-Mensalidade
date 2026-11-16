// Conteúdo da prévia do Racha Burger.
// Fonte: perfil no Google Maps (print enviado pelo Hygor).
// Itens marcados com TODO dependem de dados da cliente.

const mapsQuery = encodeURIComponent("Racha Burger, R. Mário de Azevedo, 383 - Vila Santo Antônio, São Paulo - SP, 04811-100");

// Número do botão de WhatsApp do perfil no Maps (enviado pelo Hygor).
const whatsappNumber = "5511989277880";
const message = encodeURIComponent("Olá! Vim pelo site e quero fazer um pedido.");

export const site = {
  name: "Racha Burger",
  title: "Racha Burger | Hambúrguer na Vila Santo Antônio – SP",
  description:
    "Hamburgueria na Vila Santo Antônio, região do Grajaú, com nota 5,0 no Google. Veja o cardápio e peça pelo WhatsApp.",
  rating: { value: "5,0", count: 231 },
  priceRange: "R$ 20 a 40 por pessoa",
  opens: "A partir das 18h", // TODO: confirmar dias e horários
  address: {
    street: "R. Mário de Azevedo, 383",
    district: "Vila Santo Antônio",
    city: "São Paulo",
    state: "SP",
    zip: "04811-100",
  },
  mapLink: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  whatsappNumber,
  phone: "(11) 98927-7880",
};

// Enquanto não houver número, o pedido leva ao perfil do Maps (que tem o botão de WhatsApp).
export const orderLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${message}`
  : site.mapLink;

// TODO: substituir pelos itens reais do cardápio (nomes, descrições, preços e fotos).
// Só "Sobremesas" tem item confirmado: brownie com sorvete aparece nas fotos do perfil.
export const menu = [
  { title: "Burgers", text: "Os lanches da casa. Nomes, ingredientes e preços entram aqui." },
  { title: "Combos", text: "Lanche com acompanhamento e bebida, para pedir de uma vez." },
  { title: "Porções", text: "Os acompanhamentos que vão bem com o burger." },
  { title: "Sobremesas", text: "Brownie com sorvete, para fechar o pedido." },
];

export const photos = [
  {
    src: "/fotos/burgers-mesa.webp",
    alt: "Três hambúrgueres do Racha Burger servidos na mesa",
    caption: "Burgers da casa",
    w: 758,
    h: 758,
  },
  {
    src: "/fotos/sobremesas-logo.webp",
    alt: "Brownies com sorvete em frente ao logo do Racha Burger, num barril na parede de tijolos",
    caption: "Brownie com sorvete",
    w: 822,
    h: 1096,
  },
];

export const steps = [
  { n: "1", title: "Escolha o lanche", text: "Veja o cardápio e monte o seu pedido." },
  { n: "2", title: "Chame no WhatsApp", text: "Mande o pedido e combine os detalhes direto com a gente." },
  { n: "3", title: "É só aproveitar", text: "Seu lanche do jeito que você pediu." },
];
