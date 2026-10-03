# Portfólio — Leandro De Lima Santos

Site pessoal com experiência, trilha, tecnologias e próximos passos. Conteúdo em **português** e **inglês**, com dark mode padrão e alternância por clique.

🔗 **Publicado em:** [https://1eandr.github.io/portfolio/](https://1eandr.github.io/portfolio/)

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) + CSS customizado (design tokens dark/light)
- [React Bits](https://reactbits.dev/) — animações: SplitText, BlurText, Aurora, SpotlightCard, AnimatedContent, GradientText, CountUp, FadeContent, LogoLoop
- GSAP (ScrollTrigger), Motion, OGL

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
├── App.tsx          # seções, header (tema + idioma), hero, footer
├── content.ts       # dicionário de conteúdo PT/EN + dados de perfil
├── index.css        # tokens de tema, layout e componentes
├── react-bits.d.ts  # tipagens dos componentes .jsx do React Bits
└── components/      # componentes React Bits (JS/CSS)
```

- **Tema** e **idioma** persistem em `localStorage` (`portfolio-theme`, `portfolio-lang`).
- O build usa `base: './'`, então funciona em qualquer subcaminho do GitHub Pages.

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy.yml` faz lint, build e publicação automática a cada push na branch `main`.

1. No repositório: **Settings → Pages → Source: GitHub Actions**.
2. Push na `branch main` — a action publica e o site fica em `https://<usuario>.github.io/<repo>/`.
