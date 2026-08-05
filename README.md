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
- Prisma + **PostgreSQL** (pensado para rodar num banco gerenciado, como o
  Supabase)
- Autenticação simples por sessão (cookie assinado com `jose`, senha com
  `bcryptjs`)
- Extração de mensagens do WhatsApp: regras por regex, com opção de usar a
  Claude API para maior precisão
- Exportação de relatórios em PDF (`jspdf`) e CSV

## Como rodar localmente

Você precisa de um Postgres acessível (local ou o próprio Supabase de produção
apontado para desenvolvimento).

```bash
npm install
cp .env.example .env     # preencha DATABASE_URL, DIRECT_URL, SESSION_SECRET, ADMIN_*
npm run db:migrate       # cria as tabelas (prisma migrate dev)
npm run db:seed          # cria o usuário administrador (Pai de Santo)
npm run dev               # http://localhost:3000
```

Depois, entre em `/login` com o e-mail e senha definidos em `.env`.

## Deploy em produção (Vercel + Supabase)

1. **Criar o banco no Supabase.** Crie um projeto em [supabase.com](https://supabase.com),
   depois em *Project Settings > Database > Connection string* copie a
   **Connection pooling** (porta `6543`) e a **Direct connection** (porta
   `5432`) — são os valores de `DATABASE_URL` e `DIRECT_URL`.
2. **Importar o repositório na Vercel.** Em [vercel.com/new](https://vercel.com/new),
   importe este repositório do GitHub. A Vercel detecta o Next.js
   automaticamente (`vercel.json` já define a região `gru1`, São Paulo).
3. **Configurar as variáveis de ambiente** em *Project Settings > Environment
   Variables* da Vercel: `DATABASE_URL`, `DIRECT_URL`, `SESSION_SECRET`
   (gere com `openssl rand -base64 48`), `ADMIN_NAME`, `ADMIN_EMAIL`,
   `ADMIN_PASSWORD` (veja a tabela abaixo).
4. **Fazer o deploy.** O comando de build (`npm run build`) já roda
   `prisma migrate deploy` antes do `next build`, então as tabelas são criadas
   automaticamente no primeiro deploy.
5. **Criar o usuário administrador.** Na sua máquina, rode
   `vercel link` (uma vez) e depois `vercel env pull .env` para baixar as
   variáveis de produção, e então `npm run db:seed`. Depois, acesse a URL
   gerada pela Vercel e entre em `/login` com o `ADMIN_EMAIL`/`ADMIN_PASSWORD`
   configurados.

## Variáveis de ambiente / credenciais necessárias

Veja `.env.example`. As obrigatórias para produção são:

| Variável | Onde conseguir | Descrição |
| --- | --- | --- |
| `DATABASE_URL` | Supabase > Database > Connection pooling | Usada pela aplicação em tempo de execução |
| `DIRECT_URL` | Supabase > Database > Direct connection | Usada só para rodar as migrations |
| `SESSION_SECRET` | Gere com `openssl rand -base64 48` | Assina o cookie de login — nunca reutilize o valor de exemplo |
| `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Você define | Usados apenas por `npm run db:seed` para criar o login do Pai de Santo |

Opcionais:

| Variável | Descrição |
| --- | --- |
| `ANTHROPIC_API_KEY` | Ativa extração mais inteligente das mensagens coladas do WhatsApp (nomes com apelido, erros de digitação etc). Sem ela, o sistema usa regras por regex, que já cobrem os formatos mais comuns. |
| `WHATSAPP_VERIFY_TOKEN`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` | Ativam o webhook automático da WhatsApp Cloud API (`/api/whatsapp/webhook`). Sem elas, a rota fica desativada e o cadastro continua funcionando normalmente pela opção "Colar do WhatsApp". |

## Banco de dados / migrations

- `npm run db:migrate` — cria uma nova migration a partir de mudanças no
  `prisma/schema.prisma` (uso local/desenvolvimento).
- `npm run db:deploy` — aplica as migrations pendentes num banco existente
  (é o que roda automaticamente no build da Vercel).
- `npm run db:seed` — cria/atualiza o usuário administrador a partir de
  `ADMIN_NAME`/`ADMIN_EMAIL`/`ADMIN_PASSWORD`.
