// Conteúdo da prévia do Racha Burger.
// Fonte: perfil no Google Maps (print enviado pelo Hygor).
// Itens marcados com TODO dependem de dados da cliente.

const mapsQuery = encodeURIComponent("Racha Burger, R. Mário de Azevedo, 383 - Vila Santo Antônio, São Paulo - SP, 04811-100");

// TODO: número do WhatsApp (botão "WhatsApp" do perfil no Maps).
const whatsappNumber = "";
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
};

// Enquanto não houver número, o pedido leva ao perfil do Maps (que tem o botão de WhatsApp).
export const orderLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${message}`
  : site.mapLink;

// TODO: substituir pelos itens reais do cardápio (nomes, descrições, preços e fotos).
export const menu = [
  { title: "Burgers", text: "Os lanches da casa, com o pão, a carne e os molhos do Racha." },
  { title: "Combos", text: "Lanche, batata e bebida juntos, para pedir sem pensar." },
  { title: "Porções", text: "Batata, onion rings e o que mais acompanha bem." },
  { title: "Bebidas", text: "Refrigerantes, sucos e o que gela o pedido." },
];

export const steps = [
  { n: "1", title: "Escolha o lanche", text: "Veja o cardápio e monte o seu pedido." },
  { n: "2", title: "Chame no WhatsApp", text: "Mande o pedido e combine os detalhes direto com a gente." },
  { n: "3", title: "É só aproveitar", text: "Seu lanche do jeito que você pediu." },
];
