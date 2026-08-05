# Sistema de Gestão de Mensalidades

Plataforma simples para o **Ilê Alaletu Axé Omim Odé Iboalamo (Casa de Oxossi)**
gerenciar a arrecadação de mensalidades do terreiro. Interface pensada para o
Pai de Santo (50+ anos): botões grandes, textos claros, poucas opções por tela.

## O que o sistema faz

- **Dashboard**: total arrecadado no mês, quantas pessoas pagaram, gráfico dos
  últimos 6 meses e navegação entre meses.
- **Adicionar Pagamento**: duas formas de cadastrar
  - **Colar do WhatsApp**: cole as mensagens do grupo e o sistema identifica
    nome, valor e data automaticamente (usando IA, se configurada, ou regras
    simples como reserva).
  - **Digitar Manualmente**: nome, valor e data, com botão para adicionar
    vários pagamentos em sequência rapidamente.
- **Ver Lista**: pagamentos do mês, com filtro por status e edição/exclusão
  tocando em qualquer linha.
- **Relatório**: total, número de pagantes, valor médio, comparação com o mês
  anterior, lista de quem pagou, histórico de meses anteriores e exportação em
  PDF e CSV.
- **WhatsApp automático (opcional)**: rota de webhook pronta para a WhatsApp
  Cloud API (Meta); fica inativa até que as credenciais sejam configuradas.

## Stack técnico

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- TailwindCSS 4, com paleta de cores inspirada em Oxossi
- Prisma + SQLite (arquivo local, sem infraestrutura externa necessária)
- Autenticação simples por sessão (cookie assinado com `jose`, senha com
  `bcryptjs`)
- Extração de mensagens do WhatsApp: regras por regex, com opção de usar a
  Claude API para maior precisão
- Exportação de relatórios em PDF (`jspdf`) e CSV

## Como rodar localmente

```bash
npm install
cp .env.example .env   # edite ADMIN_EMAIL e ADMIN_PASSWORD
npm run db:push        # cria o banco SQLite a partir do schema
npm run db:seed        # cria o usuário administrador (Pai de Santo)
npm run dev            # http://localhost:3000
```

Depois, entre em `/login` com o e-mail e senha definidos em `.env`.

## Variáveis de ambiente

Veja `.env.example`. As obrigatórias são:

| Variável | Descrição |
| --- | --- |
| `DATABASE_URL` | Caminho do banco SQLite (padrão `file:./dev.db`) |
| `SESSION_SECRET` | String longa e aleatória para assinar o login |
| `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Usados apenas por `npm run db:seed` |

Opcionais:

| Variável | Descrição |
| --- | --- |
| `ANTHROPIC_API_KEY` | Ativa extração mais inteligente das mensagens coladas do WhatsApp (nomes com apelido, erros de digitação etc). Sem ela, o sistema usa regras por regex, que já cobrem os formatos mais comuns. |
| `WHATSAPP_VERIFY_TOKEN`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` | Ativam o webhook automático da WhatsApp Cloud API (`/api/whatsapp/webhook`). Sem elas, a rota fica desativada e o cadastro continua funcionando normalmente pela opção "Colar do WhatsApp". |

## Produção

Para usar um banco diferente de SQLite (ex: PostgreSQL/Supabase), troque o
`provider` em `prisma/schema.prisma` e ajuste `DATABASE_URL`. Defina uma
`SESSION_SECRET` forte e única em produção.

```bash
npm run build
npm run start
```
