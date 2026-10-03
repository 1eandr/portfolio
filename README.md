# Portfólio — Leandro De Lima Santos

Site pessoal com experiência, projetos, trilha, stack e próximos passos. Conteúdo em **português** e **inglês**, com dark mode padrão e alternância por clique.

Estética de **terminal/phosphor**: JetBrains Mono, verde fosforescente em fundo escuro (`#0A0E0B` / `#4ADE80`), prompt `>` nos títulos, cursor digitando no hero, sem gradientes nem sombras.

🔗 **Publicado em:** [https://1eandr.github.io/portfolio/](https://1eandr.github.io/portfolio/)

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (preflight) + CSS customizado (design tokens dark/light)
- Sem dependências de animação — efeito de digitação em vanilla JS + CSS, com suporte a `prefers-reduced-motion`

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local com HMR
npm run lint     # oxlint
npm run build    # typecheck (tsc -b) + build de produção em dist/
npm run preview  # serve o build de produção
```

## Estrutura

```
src/
├── App.tsx      # seções, header (tema + idioma), hero com efeito de digitação, footer
├── content.ts   # dicionário de conteúdo PT/EN + dados de perfil
└── index.css    # tokens de tema, layout e componentes
```

- **Tema** e **idioma** persistem em `localStorage` (`portfolio-theme`, `portfolio-lang`).
- O build usa `base: './'`, então funciona em qualquer subcaminho do GitHub Pages.

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy.yml` faz lint, build e publicação automática a cada push na branch `main`.

1. No repositório: **Settings → Pages → Source: GitHub Actions**.
2. Push na `branch main` — a action publica e o site fica em `https://<usuario>.github.io/<repo>/`.
