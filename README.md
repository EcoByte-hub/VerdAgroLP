# VerdAgro · Landing Page

Landing page do **VerdAgro**, plataforma de inteligência ambiental e comercialização de créditos de carbono no agronegócio. Projeto da equipe **EcoByte** para o **HackBrasil** (categoria Economia Verde · AgTech + ClimateTech).

> Conecta produtores rurais a empresas compradoras de créditos de carbono por meio de IA, análise geográfica, monitoramento e rastreabilidade, com foco em democratizar o acesso de pequenos e médios produtores.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em /dist
npm run preview  # serve o build
npm run lint     # oxlint
```

Requer Node 20+.

## Stack da landing page

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4** (tokens de design em `@theme`, arquivo `src/index.css`)
- **[React Bits](https://reactbits.dev)** para micro-interações (variante TS + Tailwind, copiadas do registry oficial)
- **GSAP** e **Motion** (dependências dos componentes React Bits)
- **lucide-react** para ícones

> As tecnologias citadas no documento de concepção do produto (Next.js, Supabase, Mapbox etc.) ainda estão em avaliação e **não** fazem parte desta landing page.

## Estrutura

```
src/
├── components/
│   ├── brand/Logo.tsx          # símbolo e wordmark VerdAgro
│   ├── layout/                 # Navbar, Footer
│   ├── reactbits/              # componentes React Bits
│   └── sections/               # seções da landing
├── data/content.ts             # todo o conteúdo textual
├── pages/Styleguide.tsx        # styleguide navegável (/#styleguide)
└── index.css                   # tokens "Terra Viva" + utilitários
```

### Seções

| # | Seção | Micro-interações |
|---|---|---|
| 1 | Hero com mapa de satélite demonstrativo | SplitText, RotatingText, ShinyText, Magnet |
| 2 | O que é crédito de carbono: definição, redução × remoção, como o campo gera, verificação e quem compra | AnimatedContent |
| 3 | Problema: manifesto, números de mercado e dores de produtor × empresa | ScrollReveal, CountUp, AnimatedContent |
| 4 | Solução: os dois ambientes e os seis módulos da plataforma | Abas animadas (Motion), SpotlightCard |
| 5 | **Diagnóstico inteligente da propriedade** (demo interativa) e jornada da demo em 7 passos | Magnet, AnimatePresence |
| 6 | Rastreabilidade em 8 estágios, princípios de integridade e referências técnicas | Trilho ligado ao scroll |
| 7 | Modelo de negócio B2B2C, diferenciais e potencial de escala | GlareHover |
| 8 | CTA final (missão e visão) | StarBorder, Magnet |
| — | Página inteira | ClickSpark |

## Styleguide

A identidade **"Terra Viva"** está documentada em [`STYLEGUIDE.md`](STYLEGUIDE.md) (pesquisa de mercado, paleta, tipografia, regras de uso) e pode ser vista ao vivo em **`/#styleguide`**.

Resumo:

- **Cores:** `mata` (verde profundo) · `broto` (lima, CTA e "certificado") · `palha` (creme, fundo) · `cerrado` (terra, "estimativa")
- **Tipografia:** Fraunces (display) · Manrope (texto) · JetBrains Mono (dados)
- **Regra de ouro:** estimativa usa contorno **tracejado**, crédito certificado usa preenchimento **sólido**.

## Fontes dos dados exibidos

- IBGE, Censo Agropecuário 2017: 5,07 milhões de estabelecimentos, 77% de agricultura familiar.
- ABAG, estudo *Agro ITMOs* (Carbonn Nature, Instituto Equilíbrio e IEAg), 2026: até 314,3 milhões de créditos potenciais entre 2025 e 2035 no cenário integral.

A propriedade "Fazenda Boa Vista" e todos os indicadores do diagnóstico são **demonstrativos**.

---

Equipe **EcoByte** · HackBrasil
