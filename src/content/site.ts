// Todo o conteúdo do site fica aqui. Edite textos, preços e contatos
// sem precisar mexer nos componentes.

export const site = {
  name: "Hygor Gonzaga",
  role: "Tecnologia aplicada a negócios",
  url: "https://hygorgonzaga.com.br", // TODO: trocar pelo domínio real
  description:
    "Landing pages e sites sob medida para pequenas empresas e novos negócios. Rápidos, bem posicionados no Google e pensados para gerar clientes.",
  // Número no formato internacional, só dígitos (55 + DDD + número).
  whatsapp: "5500000000000", // TODO: trocar pelo seu número
  instagram: "hygorgonzaga", // TODO: confirmar o @
  city: "Atendimento em todo o Brasil",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const hero = {
  eyebrow: "Tecnologia aplicada a negócios",
  title: "Sites e páginas que trabalham pelo seu negócio.",
  subtitle:
    "Crio landing pages e sites sob medida para pequenas empresas e novos negócios. Cada página nasce com um objetivo claro: transformar visitas em conversas, e conversas em clientes.",
  highlights: [
    "Entrega em até 15 dias",
    "Pensado para celular",
    "Pronto para o Google",
  ],
};

export const thesis = {
  title: "Um site não é um cartão de visita. É um canal de vendas.",
  body: "A maioria dos sites de pequenas empresas existe só para constar. Bonitos, mas parados. O trabalho aqui começa pelo negócio: quem é o seu cliente, o que ele precisa ver para confiar em você e qual é o próximo passo que ele deve dar.",
  points: [
    {
      title: "Clareza antes de estética",
      text: "Em poucos segundos o visitante entende o que você faz, para quem e por que escolher você.",
    },
    {
      title: "Velocidade é conversão",
      text: "Páginas leves, que abrem rápido no 4G. Cada segundo a menos de espera é menos gente indo embora.",
    },
    {
      title: "Um próximo passo óbvio",
      text: "WhatsApp, agendamento ou formulário: o caminho até o contato fica sempre a um toque.",
    },
  ],
};

export const services = [
  {
    title: "Landing page",
    for: "Para lançar um serviço, captar contatos ou rodar anúncios.",
    items: [
      "Página única focada em uma ação",
      "Texto estruturado para conversão",
      "Integração com WhatsApp e formulários",
      "Pixel do Meta e Google Analytics",
    ],
  },
  {
    title: "Site institucional",
    for: "Para empresas que precisam de presença profissional e confiável.",
    items: [
      "Até 5 páginas (início, sobre, serviços, contato…)",
      "SEO básico para aparecer no Google",
      "Mapa, horários e canais de atendimento",
      "Domínio e hospedagem configurados",
    ],
  },
  {
    title: "Página de vendas",
    for: "Para vender um produto, curso ou serviço de ticket mais alto.",
    items: [
      "Estrutura de argumentação completa",
      "Prova social, garantias e perguntas frequentes",
      "Integração com checkout ou meios de pagamento",
      "Versões para testar o que converte melhor",
    ],
  },
  {
    title: "Evolução contínua",
    for: "Para quem já tem um site e quer que ele acompanhe o negócio.",
    items: [
      "Ajustes e novas seções sob demanda",
      "Monitoramento de velocidade e disponibilidade",
      "Relatório mensal de acessos",
      "Automações conforme o negócio cresce",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Uma conversa para entender o seu negócio, o seu cliente e o que a página precisa resolver.",
  },
  {
    step: "02",
    title: "Estrutura e texto",
    text: "Defino a ordem das informações e escrevo os textos junto com você. Nada de lorem ipsum.",
  },
  {
    step: "03",
    title: "Design e desenvolvimento",
    text: "Layout limpo, código próprio e performance alta. Você acompanha e aprova cada etapa.",
  },
  {
    step: "04",
    title: "Publicação e acompanhamento",
    text: "Coloco no ar com domínio, Google e métricas configurados, e acompanho os primeiros resultados.",
  },
];

// TODO: substituir pelos projetos reais assim que estiverem no ar.
// Enquanto isso, os itens ficam marcados como "Conceito".
export const projects = [
  {
    name: "Clínica odontológica",
    kind: "Landing page de agendamento",
    tag: "Conceito",
    summary:
      "Página focada em levar o paciente direto para o agendamento pelo WhatsApp, com especialidades, equipe e localização.",
  },
  {
    name: "Escritório de contabilidade",
    kind: "Site institucional",
    tag: "Conceito",
    summary:
      "Site de cinco páginas com serviços por perfil de cliente (MEI, pequenas empresas, profissionais liberais) e captação de contatos.",
  },
  {
    name: "Estúdio de treinamento",
    kind: "Página de vendas",
    tag: "Conceito",
    summary:
      "Página de matrícula com planos, depoimentos, perguntas frequentes e integração com pagamento recorrente.",
  },
];

// TODO: revisar valores antes de publicar.
export const plans = [
  {
    name: "Essencial",
    price: "R$ 1.200",
    note: "pagamento único",
    description: "Uma landing page completa para começar a captar clientes.",
    items: [
      "Landing page sob medida",
      "Textos escritos junto com você",
      "Botão de WhatsApp e formulário",
      "Publicação com domínio próprio",
      "30 dias de ajustes inclusos",
    ],
    featured: false,
  },
  {
    name: "Profissional",
    price: "R$ 2.500",
    note: "pagamento único",
    description: "Site institucional para quem quer ser encontrado e lembrado.",
    items: [
      "Até 5 páginas",
      "SEO básico e Google Meu Negócio",
      "Analytics e Pixel configurados",
      "Painel simples para editar textos",
      "60 dias de ajustes inclusos",
    ],
    featured: true,
  },
  {
    name: "Sob medida",
    price: "Sob consulta",
    note: "",
    description: "Páginas de vendas, sistemas e automações para o seu negócio.",
    items: [
      "Escopo definido após o diagnóstico",
      "Integrações com ferramentas que você já usa",
      "Automações de atendimento e cadastro",
      "Plano de evolução contínua",
    ],
    featured: false,
  },
];

export const faq = [
  {
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "Uma landing page fica pronta em até 15 dias. Um site institucional, entre 20 e 30 dias. O prazo começa quando os conteúdos (logo, fotos, informações) estão definidos.",
  },
  {
    q: "Eu não tenho textos nem fotos. E agora?",
    a: "Faz parte do processo. Eu escrevo os textos a partir da nossa conversa e indico bancos de imagem de qualidade ou como produzir fotos simples com o celular.",
  },
  {
    q: "Preciso pagar mensalidade?",
    a: "O site é seu. Os custos recorrentes são apenas o domínio (cerca de R$ 40 por ano) e, dependendo do projeto, a hospedagem. Manutenção contínua é opcional.",
  },
  {
    q: "Consigo editar o site depois?",
    a: "Sim. No plano Profissional você tem um painel simples para trocar textos e imagens. Para mudanças maiores, você me chama.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% para iniciar e 50% na entrega, via Pix ou cartão.",
  },
];

export const projectTypes = [
  "Landing page",
  "Site institucional",
  "Página de vendas",
  "Sistema ou automação",
  "Ainda não sei",
];
