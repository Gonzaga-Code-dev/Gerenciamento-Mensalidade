# Como atualizar o projeto "Exemplos" no Google AI Studio sem perder nada

## Antes de tudo
1. **Faça o merge do pull request** no GitHub:
   https://github.com/Gonzaga-Code-dev/Exemplos/pull/1
   Assim a versão completa e corrigida fica guardada na `main`.
2. **No AI Studio, não clique em salvar ou enviar para o GitHub antes de aplicar o
   prompt abaixo.** O projeto de lá ainda é a versão antiga. Se ele salvar por cima,
   as correções e os dois exemplos novos se perdem no GitHub (a versão publicada no
   site continua no ar, mas o código fica desatualizado).
3. Cole o prompt abaixo no AI Studio, de uma vez. Depois que ele aplicar, confira
   se os 5 exemplos aparecem na página inicial e só então salve no GitHub.
4. Me avise quando salvar, que eu confiro se nada se perdeu e republico.

Se o AI Studio tiver a opção de **importar o projeto do GitHub**, prefira: importe a
`main` depois do merge e você não precisa do prompt.

---

## Prompt para colar no AI Studio

````
Aplique as alterações abaixo no projeto. Não remova, renomeie nem reescreva nada que
não esteja listado aqui: mantenha todos os textos, cores, componentes e imagens atuais
dos exemplos barbearia, nutricionista e confeitaria exatamente como estão.

1) package.json — em devDependencies, troque "esbuild": "^0.25.0" por
   "esbuild": "^0.28.0" (o Vite 8 exige esbuild 0.27 ou mais novo; com 0.25 o
   npm install falha).

2) index.html
   - Logo abaixo de <meta charset="UTF-8" />, adicione:
     <meta name="robots" content="noindex, nofollow" />
   - Na meta description, troque "barbearia, nutricionista e confeitaria" por
     "estética, barbearia, odontologia, nutricionista e confeitaria".

3) metadata.json — na description, a mesma troca do item 2.

4) Crie o arquivo vercel.json na raiz com:
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }

5) src/components/BookingModal.tsx (o modal precisa rolar no celular)
   - Na div externa (role="dialog"), troque a className por:
     "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
   - Na div do cartão (a que tem "relative z-10 w-full max-w-lg rounded-2xl"),
     troque a className por:
     "relative z-10 my-auto w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl"

6) src/components/NichePreviewSite.tsx — na div com role="tablist", troque a
   className por:
   "flex max-w-full items-center gap-1 overflow-x-auto rounded-lg p-0.5"

7) src/components/ShowcaseHome.tsx — no parágrafo do topo, troque
   "Três exemplos de sites para negócios locais." por
   "Exemplos de sites para negócios locais."

8) src/index.css — antes da classe .font-bakery, adicione:
   .font-dental {
     font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
     font-weight: 600;
     letter-spacing: -0.02em;
   }

9) src/App.tsx — importe isNicheSlug de './data/niches' e, em
   parseRouteFromLocation, troque as duas comparações fixas
   (path === 'barbearia' || ...) e (hash === 'barbearia' || ...) por
   isNicheSlug(path) e isNicheSlug(hash).

10) src/data/niches.ts
   a) Troque o tipo NicheSlug por:
      export type NicheSlug =
        | 'estetica'
        | 'barbearia'
        | 'odontologia'
        | 'nutricionista'
        | 'confeitaria';
   b) Dentro de NICHES, ANTES de "barbearia:", adicione estes dois objetos
      exatamente como estão:

  estetica: {
    slug: 'estetica',
    filterCategory: 'estilo',
    categoryLabel: 'estética',
    brandName: 'Atelier Lúmina',
    tagline: 'Estética facial e corporal',
    locationLabel: 'Estética · Zona Leste de São Paulo',
    address: 'Rua Exemplo, 321 — Tatuapé, São Paulo · SP (endereço fictício)',
    hours: [
      { label: 'Segunda a sexta', time: '09:00 – 19:00' },
      { label: 'Sábado', time: '09:00 – 15:00' },
      { label: 'Domingo', time: 'Fechado' },
    ],
    heroKicker: 'Estética facial e corporal · Zona Leste de São Paulo',
    heroHeadline: 'Sua pele cuidada com calma e critério',
    heroDescription:
      'Tratamentos faciais e corporais definidos a partir de uma avaliação do que a sua pele realmente precisa.',
    primaryCta: 'Agendar avaliação',
    heroImage: '/src/assets/images/estetica_atelier_lumina.svg',
    heroImageAlt: 'Ilustração em tons de lilás de um espaço de estética com arco e frascos',
    galleryCaption: 'Avaliação antes de cada tratamento',
    servicesEyebrow: 'Serviços',
    servicesTitle: 'O que fazemos',
    services: [
      {
        index: '01',
        name: 'Limpeza de pele',
        description: 'Higienização profunda, ajustada ao seu tipo de pele.',
        meta: '60 min · Avaliação inclusa',
      },
      {
        index: '02',
        name: 'Revitalização facial',
        description: 'Cuidado para devolver viço e luminosidade.',
        meta: '50 min',
      },
      {
        index: '03',
        name: 'Microagulhamento',
        description: 'Para textura e qualidade da pele, indicado após avaliação.',
        meta: '60 min · Após avaliação',
      },
      {
        index: '04',
        name: 'Design de sobrancelhas',
        description: 'Desenho pensado para o formato do seu rosto.',
        meta: '30 min',
      },
      {
        index: '05',
        name: 'Drenagem linfática',
        description: 'Leveza e bem-estar para o corpo.',
        meta: '60 min',
      },
      {
        index: '06',
        name: 'Massagem relaxante',
        description: 'Uma pausa para aliviar a tensão do dia a dia.',
        meta: '60 min',
      },
    ],
    stepsEyebrow: 'Como funciona',
    stepsTitle: 'Primeiro entender, depois cuidar',
    steps: [
      {
        step: '1',
        title: 'Avaliação',
        description: 'Conversa e análise da pele para entender o que você quer cuidar.',
      },
      {
        step: '2',
        title: 'Indicação',
        description: 'O tratamento certo para o seu caso, explicado antes de começar.',
      },
      {
        step: '3',
        title: 'Acompanhamento',
        description: 'Retornos para manter os resultados no dia a dia.',
      },
    ],
    faqEyebrow: 'Dúvidas',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        question: 'Qual tratamento é indicado para mim?',
        answer:
          'Isso é definido na avaliação. Conte pelo WhatsApp o que você quer cuidar que orientamos o melhor caminho.',
      },
      {
        question: 'Preciso de avaliação antes?',
        answer:
          'Sim. A avaliação garante que o tratamento indicado faz sentido para a sua pele.',
      },
      {
        question: 'Quais formas de pagamento?',
        answer: 'Pix, cartão de débito e crédito.',
      },
    ],
    finalCtaTitle: 'Um cuidado feito para você',
    bookingFieldLabel: 'O que você quer cuidar? (opcional)',
    bookingFieldPlaceholder: 'Ex.: Manchas no rosto, pele oleosa, primeira vez',
    bookingPeriods: ['Manhã', 'Tarde', 'Noite', 'Sábado'],
    theme: {
      bg: '#F7F4F7',
      surface: '#ECE4EE',
      surfaceAlt: '#FFFFFF',
      text: '#2A2130',
      muted: '#6B5F70',
      accent: '#6E4A72',
      accentText: '#FFFFFF',
      border: '#E2D7E4',
      swatches: ['#6E4A72', '#ECE4EE', '#2A2130'],
      displayFontClass: 'font-editorial',
      bodyFontClass: 'font-body-jakarta',
      uppercaseDisplay: false,
      isDark: false,
    },
  },

  odontologia: {
    slug: 'odontologia',
    filterCategory: 'saude',
    categoryLabel: 'odontologia',
    brandName: 'Odonto Prisma',
    tagline: 'Clínica odontológica',
    locationLabel: 'Odontologia · Zona Leste de São Paulo',
    address: 'Rua Exemplo, 654, Sala 2 — Tatuapé, São Paulo · SP (endereço fictício)',
    hours: [
      { label: 'Segunda a sexta', time: '08:00 – 20:00' },
      { label: 'Sábado', time: '08:00 – 13:00' },
      { label: 'Domingo', time: 'Fechado' },
    ],
    heroKicker: 'Odontologia · Zona Leste de São Paulo',
    heroHeadline: 'Cuidado com o seu sorriso, do check-up ao tratamento',
    heroDescription:
      'Clínica geral e especialidades, com avaliação e explicação de cada etapa antes de começar.',
    primaryCta: 'Agendar avaliação',
    heroImage: '/src/assets/images/odontologia_odonto_prisma.svg',
    heroImageAlt: 'Ilustração em tons de azul de um consultório odontológico',
    galleryCaption: 'Planejamento explicado antes de cada tratamento',
    servicesEyebrow: 'Tratamentos',
    servicesTitle: 'O que fazemos',
    services: [
      {
        index: '01',
        name: 'Clínica geral',
        description: 'Limpeza, restaurações e prevenção.',
        meta: 'Consulta de avaliação',
      },
      {
        index: '02',
        name: 'Ortodontia',
        description: 'Aparelhos fixos e alinhadores.',
        meta: 'Após avaliação',
      },
      {
        index: '03',
        name: 'Implantes',
        description: 'Reabilitação com planejamento.',
        meta: 'Planejamento individual',
      },
      {
        index: '04',
        name: 'Clareamento',
        description: 'Em consultório ou caseiro, com acompanhamento.',
        meta: 'Após avaliação',
      },
      {
        index: '05',
        name: 'Odontopediatria',
        description: 'Atendimento adaptado para os pequenos.',
        meta: 'Crianças a partir de 3 anos',
      },
      {
        index: '06',
        name: 'Urgência',
        description: 'Dor de dente e imprevistos, no mesmo dia quando possível.',
        meta: 'Consulte pelo WhatsApp',
      },
    ],
    stepsEyebrow: 'Como funciona',
    stepsTitle: 'Simples do começo ao fim',
    steps: [
      {
        step: '1',
        title: 'Avaliação',
        description: 'Exame clínico e conversa sobre o que te incomoda.',
      },
      {
        step: '2',
        title: 'Plano de tratamento',
        description: 'Etapas e prazos explicados antes de começar.',
      },
      {
        step: '3',
        title: 'Acompanhamento',
        description: 'Retornos e manutenção para cuidar do resultado.',
      },
    ],
    faqEyebrow: 'Dúvidas',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        question: 'Atendem convênio?',
        answer: 'Consulte pelo WhatsApp os convênios aceitos.',
      },
      {
        question: 'Atendem crianças?',
        answer: 'Sim, com atendimento adaptado para os pequenos.',
      },
      {
        question: 'Como funciona a primeira consulta?',
        answer:
          'É uma avaliação completa, com exame clínico e explicação do que for indicado para o seu caso.',
      },
    ],
    finalCtaTitle: 'Comece pela sua avaliação',
    footerExtra: 'Responsável técnico: CRO-SP 00000 (exemplo)',
    bookingFieldLabel: 'O que te incomoda? (opcional)',
    bookingFieldPlaceholder: 'Ex.: Dor ao mastigar, quero fazer uma limpeza',
    bookingPeriods: ['Manhã', 'Tarde', 'Noite', 'Sábado manhã'],
    theme: {
      bg: '#FFFFFF',
      surface: '#EEF5FB',
      surfaceAlt: '#F7FAFD',
      text: '#0F2338',
      muted: '#52667A',
      accent: '#1F6FB2',
      accentText: '#FFFFFF',
      border: '#DCE8F3',
      swatches: ['#1F6FB2', '#EEF5FB', '#0F2338'],
      displayFontClass: 'font-dental',
      bodyFontClass: 'font-body-jakarta',
      uppercaseDisplay: false,
      isDark: false,
    },
  },

   c) Troque NICHE_LIST e adicione a função isNicheSlug logo abaixo:
      export const NICHE_LIST: NicheConfig[] = [
        NICHES.estetica,
        NICHES.barbearia,
        NICHES.odontologia,
        NICHES.nutricionista,
        NICHES.confeitaria,
      ];

      export function isNicheSlug(value: string): value is NicheSlug {
        return Object.prototype.hasOwnProperty.call(NICHES, value);
      }
   d) Nos endereços dos exemplos existentes, use endereços fictícios:
      - barbearia: "Rua Exemplo, 123 — Tatuapé, São Paulo · SP (endereço fictício)"
      - nutricionista: "Rua Exemplo, 456, Sala 1 — Tatuapé, São Paulo · SP (endereço fictício)"
      - confeitaria: "Rua Exemplo, 789 — Vila Gomes Cardim, São Paulo · SP (endereço fictício)"

11) Gere duas imagens novas, no mesmo estilo fotográfico das imagens atuais (luz
    natural, tons suaves, sem pessoas reconhecíveis e sem texto na imagem), e use
    como heroImage:
    - estética (Atelier Lúmina): sala de estética clean em tons de lilás e branco,
      maca com toalha, frascos de vidro e plantas. Salve em
      src/assets/images/estetica_atelier_lumina.jpg e troque o heroImage para
      '/src/assets/images/estetica_atelier_lumina.jpg'.
    - odontologia (Odonto Prisma): consultório odontológico moderno, claro, em
      branco e azul, cadeira odontológica e janela com luz natural. Salve em
      src/assets/images/odontologia_odonto_prisma.jpg e troque o heroImage para
      '/src/assets/images/odontologia_odonto_prisma.jpg'.
    Atualize também os heroImageAlt descrevendo as fotos novas.

Regras: o exemplo de odontologia não pode mostrar preços (regra do CFO) e mantém
o rodapé "Responsável técnico: CRO-SP 00000 (exemplo)". O de estética não pode ter
fotos de antes e depois. Não altere o número de WhatsApp (5511982627309).
````
