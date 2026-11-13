# Hygor Gonzaga · Sites e landing pages

Site profissional para venda de criação de landing pages, sites institucionais e
páginas de vendas para pequenas empresas e novos negócios.

Posicionamento: **tecnologia aplicada a negócios**.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4
- Sem banco de dados: o formulário de orçamento monta a mensagem e abre o WhatsApp.

## Editando o conteúdo

Todos os textos, planos, preços, projetos, perguntas e contatos ficam em
[`src/content/site.ts`](src/content/site.ts). Antes de publicar, revise os itens
marcados com `TODO`:

- `site.url`: domínio real
- `site.whatsapp`: número no formato `55DDDNUMERO`
- `site.instagram`: seu @
- `projects`: troque os projetos "Conceito" pelos reais quando estiverem no ar
- `plans`: confira os valores

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Deploy

Pronto para a Vercel: importe o repositório e faça o deploy, sem variáveis de ambiente.
