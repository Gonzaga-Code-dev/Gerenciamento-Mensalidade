@AGENTS.md

# Estúdio de sites do Hygor Gonzaga

Este repositório guarda **todos os sites e páginas** que o Hygor cria para si e
para clientes. Cada pasta em `sites/` é um projeto Next.js independente, com
deploy próprio na Vercel (Root Directory = `sites/<slug>`).

O Claude atua como **criador de páginas e sites**: o Hygor descreve o que
precisa e o Claude entrega o site pronto, revisado e publicado na branch.

## Estrutura

- `sites/<slug>/`: um site por pasta (`src/content/site.ts` = conteúdo,
  `BRIEFING.md` = briefing do cliente, `public/` = imagens e logo).
- `templates/next-site/`: ponto de partida de todo site novo.
- `scripts/new-site.mjs`: `npm run new <slug> "Nome"` copia o template.
- `npm run dev|build|lint <slug>`: roda o comando naquele site.

## Fluxo ao receber um pedido de site ou página

1. **Novo site:** `npm run new <slug> "Nome do Negócio"`. Slug curto, em
   minúsculas e com hífens (ex.: `clinica-sorriso`). **Página nova num site
   existente:** crie a rota dentro de `sites/<slug>/src/app/`.
2. Registre no `BRIEFING.md` tudo que o Hygor informou. O que faltar, proponha
   e marque com `TODO` no código; liste esses itens na resposta final.
3. Leve o conteúdo para `src/content/site.ts` e construa as seções em
   `src/app/page.tsx` e `src/components/`.
4. Dê a cada cliente identidade própria: paleta nos tokens de `globals.css`,
   fontes em `layout.tsx`, layout e ritmo de seções pensados para o segmento.
   Não repita o visual de outro site do repositório.
5. Valide: `npm install` (raiz), `npm run lint <slug>`, `npm run build <slug>`
   e capturas de tela no desktop (1440px) e no celular, sem rolagem lateral.
6. Commit em português descrevendo o site, push na branch de trabalho, e envie
   as capturas ao Hygor.

## Padrões de qualidade

- Português do Brasil, texto claro e profissional, sem linguagem de guru ou
  clichês de marketing. Cada página tem uma ação principal óbvia (geralmente
  WhatsApp com mensagem pré-preenchida).
- Mobile primeiro: a maior parte do tráfego vem do Instagram.
- Nada inventado como se fosse real: depoimentos, números, clientes e
  certificações só se o Hygor fornecer. Exemplos ficam marcados ("Conceito",
  `TODO`).
- Sem dados pessoais de terceiros além do que o cliente forneceu para publicar.
- Performance: páginas estáticas, imagens com `next/image`, sem bibliotecas
  pesadas sem necessidade. Metadata, Open Graph, `robots.ts` e `sitemap.ts`
  em todo site.
- Acessibilidade: contraste AA, `alt` em imagens, foco visível, respeito a
  `prefers-reduced-motion`.

## Sites

| Slug | Cliente | Tipo | Status |
| --- | --- | --- | --- |
| `hygor-gonzaga` | Hygor Gonzaga (próprio) | Site do serviço | Revisar `TODO`s |
| `dra-marcia-regina` | Dra. Márcia Regina (tricologista) | Landing page, prévia (noindex) | Aguardando pendências da cliente |
| `estetica-marilia-ferrari` | Estética Marília Ferrari (estética facial e Pilates) | Landing page, prévia (noindex) | Publicada, aguardando abordagem |
| `clinica-milena-couto` | Clínica Milena Couto (estética facial) | Landing page, prévia (noindex) | Descartada: cliente já tem site |
