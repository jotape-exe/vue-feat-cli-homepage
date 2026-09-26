# vue-feat-cli — homepage

Landing page do [vue-feat-cli](https://github.com/jotape-exe/vue-feat-cli):
scaffolding opinativo feature-based para Vue 3
(`service → composable → store → view`).

Posicionamento honesto da página: o CLI impõe uma arquitetura opinativa.
Faz sentido para times novos, projetos grandes ou múltiplas squads.
Para uma pokedex de fim de semana, o scaffolding padrão do Vite basta.

## Stack

| Camada | Tech |
|---|---|
| Framework | Vue 3.5 + Vite 6 + TypeScript |
| Estilo | Tailwind CSS v4 (tokens via `@theme` em `src/theme.css`) |
| Ícones | Iconify + Phosphor (`@iconify/vue`, prefixo `ph:`) |
| Estrutura de pastas | Convenções do `vue-feat-cli` (`vf.config.json`, `src/features/`, `src/shared/`) |
| i18n | `vue-i18n` (`en` padrão, `es`, `pt`) |
| Rotas | `vue-router` com prefixo de idioma (`/en`, `/es`, `/pt`) |

O `prototipo.html` e o `design.md` na raiz são a referência visual
a partir da qual a página foi construída. O "Quadro Tático" do protótipo
(metáfora de futebol) foi substituído por um explorador de arquitetura
direto: presets reais do CLI + file-tree + fluxo entre camadas.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173 (redireciona para /en)
npm run build    # typecheck (vue-tsc) + build Vite → dist/
npm run preview  # serve o dist
```

## Estrutura

```
src/
├── app/
│   ├── App.vue          # <RouterView/>
│   ├── i18n.ts          # vue-i18n (default: en, fallback: en)
│   ├── router.ts        # / → /:lang, beforeEach valida e aplica o locale
│   └── locales/         # en.ts, es.ts, pt.ts (160 chaves, paridade total)
├── features/
│   └── landing/
│       ├── components/  # Hero, ArchitectureExplorer, Benefits, Comparison, Agents, Cta, Footer, QuickStart
│       ├── data/        # metas universais (comandos, arquivos, ícones — sem tradução)
│       ├── types/       # tipos das metas + textos traduzidos
│       └── views/       # LandingView.vue
├── shared/
│   ├── http/client.ts   # httpClient fetch (contrato do vf init)
│   └── ui/              # CopyCommand, GithubStars, LangSwitcher, SectionTag
├── main.ts
└── theme.css            # design tokens + scrollbars discretas
```

Textos traduzíveis vivem só em `src/app/locales/`. Comandos, paths e nomes
de arquivo ficam em `src/features/landing/data/` (universais).
Listas traduzidas são consumidas via `t()`/`tm()` do `vue-i18n`.

## Deploy

É uma SPA com rotas `/:lang`: o host precisa de fallback para `index.html`
(ex.: `_redirects` com `/* /index.html 200` no Netlify, ou `rewrites` na Vercel).
Sem isso, acesso direto a `/pt` retorna 404.

## Licença

MIT — ver [LICENSE](./LICENSE).