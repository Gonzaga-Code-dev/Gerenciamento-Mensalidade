# Estúdio de sites · Hygor Gonzaga

Todos os sites e páginas que eu crio, em um só lugar. Cada pasta em `sites/` é
um projeto independente, com deploy e domínio próprios.

## Comandos (na raiz)

```bash
npm install                        # instala tudo uma vez
npm run new clinica-sorriso "Clínica Sorriso"   # cria um site novo
npm run dev clinica-sorriso        # roda localmente em http://localhost:3000
npm run build clinica-sorriso      # build de produção
npm run list                       # lista os sites
```

## Pedindo um site ao Claude

Descreva o negócio, o objetivo da página e o que já tiver (textos, cores, logo,
WhatsApp). O Claude cria `sites/<slug>`, preenche o `BRIEFING.md`, constrói o
site, valida no celular e no desktop e faz o commit. O fluxo completo está em
[`CLAUDE.md`](CLAUDE.md).

## Prompts de prévia por nicho

Modelos prontos para pedir prévias, um por nicho, em
[`prompts/previas-por-nicho.md`](prompts/previas-por-nicho.md).

## Deploy na Vercel

Para cada site: **Add New → Project**, escolha este repositório e defina o
**Root Directory** como `sites/<slug>`. Cada site vira um projeto com domínio
próprio.

## Sites

| Slug | Cliente | Tipo |
| --- | --- | --- |
| [`hygor-gonzaga`](sites/hygor-gonzaga) | Hygor Gonzaga | Site do serviço |
| [`dra-marcia-regina`](sites/dra-marcia-regina) | Dra. Márcia Regina | Landing page (prévia) |
| [`estetica-marilia-ferrari`](sites/estetica-marilia-ferrari) | Estética Marília Ferrari | Landing page (prévia) |
| [`clinica-milena-couto`](sites/clinica-milena-couto) | Clínica Milena Couto | Landing page (prévia) |
| [`marcela-santos-estetica`](sites/marcela-santos-estetica) | MS Marcela Santos Estética e Saúde | Landing page (prévia) |
