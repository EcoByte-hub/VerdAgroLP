# VerdAgro — Styleguide "Terra Viva"

> Identidade visual da landing page do **VerdAgro**, desenvolvida pela equipe **EcoByte**.
> Os tokens vivem em [`src/index.css`](src/index.css) e há uma versão navegável na rota `#styleguide` da landing page.

---

## 1. Pesquisa de mercado: como o setor se comunica

Analisamos a comunicação visual de empresas de **AgTech + ClimateTech** e de plataformas de crédito de carbono, nacionais e internacionais (Pachama, Agreena, Indigo Ag, Sylvera, Moss, re.green e outras):

| Padrão observado | O que comunica | Como aplicamos |
|---|---|---|
| **Verde profundo** como base (floresta, não "verde-bandeira") | Natureza, seriedade, confiança institucional | `mata-900` como cor de fundo das seções de impacto |
| **Acento elétrico** (lima, chartreuse, neon) | Tecnologia, crescimento, "algo novo" | `broto` reservado a CTAs e ao estado **certificado** |
| **Neutros quentes** (creme, areia, terra) | Agro de verdade, chão, longe do "tech frio" | `palha` como fundo padrão; `areia` em superfícies |
| **Serifa editorial** + **sans geométrica** | Credibilidade de revista/ciência + clareza de produto | Fraunces + Manrope |
| **Mono para dados** | Precisão técnica, satélite, coordenadas | JetBrains Mono em rótulos, métricas e selos |
| **Imagem de satélite, curvas de nível, grids** | Monitoramento, rastreabilidade, "dados, não promessas" | Mapa vetorial da propriedade no hero, grid topográfico |
| **Linguagem de transparência** (metodologia, verificação, registro) | Combate ao *greenwashing* | Selos `estimativa` × `certificado` em toda a página |

**O que evitamos (clichês do setor):** globo com folhas, mãos segurando muda, gradientes verde-azul genéricos, fotos de banco de imagem com aperto de mão, promessas de "renda garantida".

**Tom de voz:** direto, acolhedor com o produtor, preciso com a empresa. Nunca promete crédito ou receita antes da comprovação técnica.

---

## 2. Conceito: "Terra Viva"

O VerdAgro fica **entre o chão e o dado**. A identidade mistura a textura do campo (palha, terra roxa, mata) com a precisão de um satélite (grids, coordenadas, tipografia mono). O acento `broto` é a "planta que nasce": aparece pouco, e sempre que aparece, significa **ação** ou **comprovado**.

---

## 3. Cores

### Base

| Token | Hex | Uso |
|---|---|---|
| `mata-950` | `#08180F` | Rodapé, sombras profundas |
| `mata-900` | `#0E2A1F` | Fundo de seções escuras, texto de títulos sobre claro |
| `mata-800` | `#153828` | Cards sobre fundo escuro |
| `mata-700` | `#1F4A35` | Bordas e divisores em fundo escuro |
| `musgo` | `#2E5E43` | Ícones, gráficos, estados secundários |
| `folha` | `#4F8A5B` | Dados de vegetação (NDVI médio) |

### Acento

| Token | Hex | Uso |
|---|---|---|
| `broto` | `#C5F25C` | **CTA primário** e estado **certificado/emitido** |
| `broto-300` | `#D9F78F` | Hover do CTA |
| `broto-700` | `#56751A` | Foco (`:focus-visible`), texto lima sobre claro (4.6:1) |

### Neutros quentes

| Token | Hex | Uso |
|---|---|---|
| `palha-50` | `#FAF8F2` | Cards sobre `palha` |
| `palha` | `#F3EEE2` | **Fundo padrão** da página |
| `areia` | `#E6DCC6` | Superfícies, divisores sobre claro |
| `argila` | `#B9AB8C` | Texto terciário, bordas sutis |
| `tinta` | `#101814` | Texto principal |
| `tinta-soft` | `#44524A` | Texto de apoio (lead, descrições) |

### Terra (semântica)

| Token | Hex | Uso |
|---|---|---|
| `cerrado` | `#A34A26` | Estado **estimativa/preliminar**. Remete à terra roxa e ao cerrado |
| `cerrado-300` | `#E39A75` | Variação sobre fundo escuro |

### Proporção recomendada

`palha` 55% · `mata` 30% · `tinta` 10% · `broto` 4% · `cerrado` 1%

### Contraste (WCAG)

| Combinação | Razão | Nível |
|---|---|---|
| `tinta` sobre `palha` | 15.6:1 | AAA |
| `palha` sobre `mata-900` | 13.2:1 | AAA |
| `broto` sobre `mata-900` / `mata-900` sobre `broto` | 11.9:1 | AAA |
| `tinta-soft` sobre `palha` | 7.1:1 | AAA |
| `musgo` sobre `palha` | 6.5:1 | AA |
| `cerrado` sobre `palha` | 5.1:1 | AA |
| `cerrado-300` sobre `mata-900` | 6.7:1 | AA |
| `broto-700` sobre `palha` | 4.6:1 | AA |

**Nunca** usar `broto` como texto sobre `palha` (1.1:1). Use `broto-700` ou `musgo`.

---

## 4. Regra de ouro: estimativa ≠ certificado

O projeto exige diferenciar estimativas ambientais de créditos efetivamente certificados. Isso virou linguagem visual:

| Estado | Visual | Classe |
|---|---|---|
| **Estimativa / preliminar** | Contorno **tracejado** `cerrado`, sem preenchimento | `.tag-estimativa` |
| **Certificado / emitido** | Preenchimento **sólido** `broto` | `.tag-certificado` |
| **Dado demonstrativo** | Contorno sutil na cor do texto | `.tag-demo` |

Tracejado = "ainda não é". Sólido = "comprovado". A regra vale para tags, linhas de mapa e etapas da linha do tempo.

---

## 5. Tipografia

| Papel | Fonte | Configuração |
|---|---|---|
| **Display** (títulos) | [Fraunces](https://fonts.google.com/specimen/Fraunces) | Peso 400–500, `opsz 144`, `SOFT 50`, tracking −2%. *Itálico* para a palavra de ênfase |
| **Texto / UI** | [Manrope](https://fonts.google.com/specimen/Manrope) | 400 (corpo), 600 (botões), 700 (labels fortes) |
| **Dados / rótulos** | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | 500, CAIXA ALTA, tracking +18% em eyebrows |

### Escala

| Nome | Tamanho (desktop) | Line-height |
|---|---|---|
| Display XL (hero) | 88–104px | 0.95 |
| Section (`.h-section`) | 60px | 1.02 |
| H3 | 28px | 1.15 |
| Lead (`.lead`) | 20px | 1.6 |
| Body | 16px | 1.6 |
| Eyebrow (`.eyebrow`) | 11px mono | — |

---

## 6. Forma, espaço e textura

- **Raios:** cards `28px` (`--radius-card`), botões e tags em pílula.
- **Grid:** container máx. `1240px`, gutter `20/32px`.
- **Ritmo vertical:** seções com `py-28` a `py-36` (112–144px).
- **Texturas:** grid topográfico (`.bg-grid`, 56px) com opacidade 4–8%; granulado (`.grain`) a 6% sobre fundos escuros.
- **Iconografia:** traço de 1.5px, cantos arredondados, sem preenchimento (estilo *line*).

---

## 7. Movimento: micro-interações (React Bits)

Princípio: **o movimento revela dado, não decora.** Easing padrão `--ease-brota: cubic-bezier(0.22, 1, 0.36, 1)`. Todas as animações respeitam `prefers-reduced-motion`.

| Componente | Onde | Por quê |
|---|---|---|
| `SplitText` | Título do hero | A mensagem "brota" letra a letra |
| `RotatingText` | Hero ("produtor / empresa / cooperativa") | Mostra os vários lados do mercado |
| `ShinyText` | Selo do HackBrasil | Brilho discreto em informação de status |
| `Magnet` | CTAs principais | Convida ao clique sem ser agressivo |
| `StarBorder` | CTA final | Destaque máximo, uma única vez na página |
| `ClickSpark` | Página inteira (faíscas `broto`) | Feedback tátil ao clicar |
| `SpotlightCard` | Módulos da plataforma | Luz segue o cursor, como uma lanterna sobre o mapa |
| `GlareHover` | Cards de modelo de negócio | Reflexo sutil ao passar o mouse |
| `CountUp` | Números de mercado | Dados ganham peso ao entrar na tela |
| `ScrollReveal` | Manifesto | Leitura guiada pelo scroll |
| `AnimatedContent` | Entrada de blocos | Revelação consistente em toda a página |

---

## 8. Logo

Símbolo: **folha formada por linhas de plantio** (três sulcos diagonais) dentro de uma forma orgânica, que remete ao mesmo tempo a uma folha e a um talhão visto de cima.

- Versão positiva: símbolo `mata-900` + acento `broto`, wordmark `tinta`.
- Versão negativa: símbolo `broto` sobre `mata-900`, wordmark `palha`.
- Wordmark: **Verd** em Fraunces 600 + **Agro** em Fraunces itálico 400.
- Área de proteção: altura do "V" em todos os lados.
