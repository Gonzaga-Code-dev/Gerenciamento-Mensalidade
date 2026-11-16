// Conteúdo da prévia do Racha Burger.
// Fonte: perfil no Google Maps (print enviado pelo Hygor).
// Itens marcados com TODO dependem de dados da cliente.

const mapsQuery = encodeURIComponent("Racha Burger, R. Mário de Azevedo, 383 - Vila Santo Antônio, São Paulo - SP, 04811-100");

// Número do botão de WhatsApp do perfil no Maps (enviado pelo Hygor).
const whatsappNumber = "5511989277880";
const message = encodeURIComponent("Olá! Vim pelo site e quero fazer um pedido.");

export const site = {
  name: "Racha Burger",
  tagline: "Hambúrguer artesanal",
  title: "Racha Burger | Hambúrguer artesanal na Vila Santo Antônio – SP",
  description:
    "Hambúrguer artesanal na Vila Santo Antônio, Zona Sul de SP. Burgers com nomes de circuitos do mundo, nota 5,0 no Google. Peça pelo WhatsApp.",
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

// Cardápio do catálogo do WhatsApp Business (prints enviados pelo Hygor).
// As descrições do catálogo aparecem cortadas: aqui fica só o que dá para ler.
export type MenuItem = { flag: string; name: string; text: string; price: string; tag?: string };

export const burgers: MenuItem[] = [
  { flag: "🇧🇷", name: "Interlagos", text: "Hambúrguer artesanal de fraldinha com panceta, feito na churrasqueira.", price: "R$ 34,90", tag: "Fraldinha" },
  { flag: "🇮🇹", name: "Monza", text: "Hambúrguer artesanal de linguiça toscana, 150 g, feito na churrasqueira.", price: "R$ 22,90" },
  { flag: "🇫🇷", name: "Paris", text: "Cheeseburger artesanal de costela feito na churrasqueira, com picles e maionese de mostarda e mel.", price: "R$ 22,90" },
  { flag: "🇩🇪", name: "Hockenheim", text: "Hambúrguer 100% carne de porco (eisbein com pernil), 150 g.", price: "R$ 22,90" },
  { flag: "🇨🇳", name: "Xangai", text: "Hambúrguer artesanal de frango empanado no pão semi-italiano.", price: "R$ 22,90" },
  { flag: "🇮🇹", name: "San Marino", text: "Hambúrguer de costela bovina com gorgonzola e rúcula.", price: "R$ 27,90", tag: "O famoso da casa" },
  { flag: "🇺🇸", name: "Daytona", text: "Hambúrguer artesanal de costela bovina com cebola caramelizada e creme de cheddar.", price: "R$ 27,90" },
  { flag: "🇦🇺", name: "Melbourne", text: "Hambúrguer de costela bovina, 150 g, com queijo, no pão australiano.", price: "R$ 27,90" },
  { flag: "🇯🇵", name: "Suzuka", text: "Hambúrguer artesanal de shimeji, shitake e cogumelos paris.", price: "R$ 27,90" },
  { flag: "🇨🇦", name: "Montreal", text: "Hambúrguer artesanal com duas carnes de costela de 150 g cada.", price: "R$ 38,90", tag: "Duplo" },
];

export const extras: MenuItem[] = [
  { flag: "🏁", name: "Combo 4 Amigos", text: "Quatro lanches para dividir com a turma.", price: "R$ 83,60" },
  { flag: "🥤", name: "Guaraná Antarctica 2 L", text: "Para acompanhar o pedido.", price: "R$ 16,00" },
  { flag: "🍫", name: "Brownie com sorvete", text: "Para fechar com sobremesa.", price: "Consulte" },
];

export const orderItemLink = (item: string) =>
  whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Vim pelo site e quero pedir: ${item}.`)}`
    : site.mapLink;

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
