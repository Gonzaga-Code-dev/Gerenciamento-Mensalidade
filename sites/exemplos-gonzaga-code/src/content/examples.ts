import type { FontKey } from "./fonts";

// Portfólio de exemplos da Gonzaga Code.
// Todos os negócios são FICTÍCIOS. Nada aqui é cliente real: sem notas,
// avaliações, depoimentos ou números inventados.

export const contact = {
  // TODO: número do Hygor (55 + DDD + número, só dígitos)
  whatsapp: "5500000000000",
  brand: "Gonzaga Code",
};

export const whatsappFor = (nicho: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Olá, Hygor! Vi o exemplo de site de ${nicho} e quero um assim para o meu negócio.`,
  )}`;

export type Theme = {
  bg: string;
  surface: string;
  line: string;
  text: string;
  muted: string;
  accent: string;
  accentInk: string;
  radius: string;
  heading: FontKey;
  body: FontKey;
  hero: "split" | "centered";
  services: "cards" | "list";
  uppercaseHeadings?: boolean;
};

export type Example = {
  slug: string;
  nicho: string;
  name: string;
  kind: string;
  h1: [string, string];
  sub: string;
  cta: string;
  services: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  closing: [string, string];
  registro?: string;
  photo: string;
  theme: Theme;
};

export const examples: Example[] = [
  {
    slug: "barbearia",
    nicho: "barbearia",
    name: "Casa Brava",
    kind: "Barbearia",
    h1: ["Corte, barba", "e respeito ao horário"],
    sub: "Agende em segundos pelo WhatsApp e chegue na hora certa, sem fila.",
    cta: "Agendar meu horário",
    services: [
      { title: "Corte", text: "Clássico, degradê ou na tesoura." },
      { title: "Barba", text: "Desenho, toalha quente e acabamento." },
      { title: "Corte + barba", text: "O combo completo." },
      { title: "Sobrancelha", text: "Acabamento na navalha." },
      { title: "Pigmentação", text: "Para corte e barba." },
      { title: "Infantil", text: "Corte para os pequenos." },
    ],
    steps: [
      { title: "Escolha o horário", text: "Chame no WhatsApp e escolha o dia." },
      { title: "Chegue no horário", text: "Seu barbeiro já está te esperando." },
      { title: "Saia na régua", text: "E já deixa o próximo agendado." },
    ],
    faq: [
      { q: "Atendem sem horário marcado?", a: "Quando há encaixe, sim. Com horário marcado você não espera." },
      { q: "Quais formas de pagamento?", a: "Pix, cartão e dinheiro." },
    ],
    closing: ["Bora marcar", "o seu horário?"],
    photo: "Galeria de cortes",
    theme: {
      bg: "#141414", surface: "#1e1e1e", line: "#2e2e2e", text: "#f2eee8", muted: "#a8a29a",
      accent: "#c8893e", accentInk: "#141414", radius: "4px",
      heading: "oswald", body: "inter", hero: "split", services: "list", uppercaseHeadings: true,
    },
  },
  {
    slug: "nutricionista",
    nicho: "nutricionista",
    name: "Consultório Nutri Raiz",
    kind: "Nutrição clínica",
    h1: ["Comer bem", "sem complicar a rotina"],
    sub: "Plano alimentar feito para a sua vida real, com acompanhamento presencial ou online.",
    cta: "Agendar consulta",
    services: [
      { title: "Reeducação alimentar", text: "Hábitos possíveis, sem dietas impossíveis." },
      { title: "Nutrição esportiva", text: "Alimentação alinhada ao seu treino." },
      { title: "Saúde da mulher", text: "Cuidado em cada fase da vida." },
      { title: "Atendimento online", text: "A mesma consulta, de onde você estiver." },
    ],
    steps: [
      { title: "Primeira consulta", text: "Histórico, rotina, preferências e exames." },
      { title: "Plano alimentar", text: "Feito para você, explicado item por item." },
      { title: "Retornos", text: "Ajustes conforme a sua evolução." },
    ],
    faq: [
      { q: "Preciso levar exames?", a: "Se tiver exames recentes, leve. Se forem necessários, isso é orientado na consulta." },
      { q: "Atende online?", a: "Sim, com o mesmo acompanhamento da consulta presencial." },
    ],
    closing: ["Sua alimentação", "a seu favor"],
    registro: "CRN-3 00000 (exemplo)",
    photo: "Foto do consultório",
    theme: {
      bg: "#f7faf4", surface: "#eaf2e1", line: "#dce8cf", text: "#1f2a1c", muted: "#5c6b57",
      accent: "#4e7a2e", accentInk: "#ffffff", radius: "24px",
      heading: "nunito", body: "nunito", hero: "centered", services: "cards",
    },
  },
  {
    slug: "confeitaria",
    nicho: "confeitaria",
    name: "Doce Ateliê",
    kind: "Confeitaria artesanal",
    h1: ["Bolos que viram", "a lembrança da festa"],
    sub: "Bolos personalizados, doces finos e kits festa, feitos sob encomenda.",
    cta: "Pedir orçamento",
    services: [
      { title: "Bolos personalizados", text: "Do sabor ao acabamento, do seu jeito." },
      { title: "Doces finos", text: "Para casamentos e eventos." },
      { title: "Kit festa", text: "Bolo, docinhos e salgados." },
      { title: "Encomendas da semana", text: "Fatias e sobremesas para retirar." },
    ],
    steps: [
      { title: "Conte a ideia", text: "Data, tema e número de convidados." },
      { title: "Receba o orçamento", text: "Com sabores e opções de acabamento." },
      { title: "Retire ou receba", text: "No dia combinado." },
    ],
    faq: [
      { q: "Com quanto tempo de antecedência?", a: "O ideal é pedir com pelo menos uma semana." },
      { q: "Fazem entrega?", a: "Consulte a sua região pelo WhatsApp." },
    ],
    closing: ["Sua festa merece", "um bolo especial"],
    photo: "Galeria de bolos",
    theme: {
      bg: "#fcf5f2", surface: "#f5e4de", line: "#ebd3ca", text: "#3a2420", muted: "#7a5e57",
      accent: "#7b3f35", accentInk: "#ffffff", radius: "12px",
      heading: "playfair", body: "lato", hero: "split", services: "cards",
    },
  },
];
