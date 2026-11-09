import { useState } from 'react';
import { ArrowLeft, ArrowRight, BadgeCheck, Check, CircleDashed, Copy } from 'lucide-react';
import Logo, { LogoMark } from '../components/brand/Logo';
import ShinyText from '../components/reactbits/ShinyText/ShinyText';
import CountUp from '../components/reactbits/CountUp/CountUp';
import Magnet from '../components/reactbits/Magnet/Magnet';
import SpotlightCard from '../components/reactbits/SpotlightCard/SpotlightCard';
import StarBorder from '../components/reactbits/StarBorder/StarBorder';

type Swatch = { token: string; hex: string; use: string; dark?: boolean };

const GROUPS: { title: string; swatches: Swatch[] }[] = [
  {
    title: 'Base · Mata',
    swatches: [
      { token: 'mata-950', hex: '#08180F', use: 'Rodapé', dark: true },
      { token: 'mata-900', hex: '#0E2A1F', use: 'Seções escuras', dark: true },
      { token: 'mata-800', hex: '#153828', use: 'Cards no escuro', dark: true },
      { token: 'mata-700', hex: '#1F4A35', use: 'Bordas no escuro', dark: true },
      { token: 'musgo', hex: '#2E5E43', use: 'Ícones, ênfase', dark: true },
      { token: 'folha', hex: '#4F8A5B', use: 'Dados de vegetação', dark: true },
    ],
  },
  {
    title: 'Acento · Broto',
    swatches: [
      { token: 'broto', hex: '#C5F25C', use: 'CTA e certificado' },
      { token: 'broto-300', hex: '#D9F78F', use: 'Hover do CTA' },
      { token: 'broto-700', hex: '#56751A', use: 'Foco, texto lima', dark: true },
    ],
  },
  {
    title: 'Neutros quentes · Palha',
    swatches: [
      { token: 'palha-50', hex: '#FAF8F2', use: 'Cards no claro' },
      { token: 'palha', hex: '#F3EEE2', use: 'Fundo padrão' },
      { token: 'areia', hex: '#E6DCC6', use: 'Superfícies, divisores' },
      { token: 'argila', hex: '#B9AB8C', use: 'Bordas sutis' },
      { token: 'tinta-soft', hex: '#44524A', use: 'Texto de apoio', dark: true },
      { token: 'tinta', hex: '#101814', use: 'Texto principal', dark: true },
    ],
  },
  {
    title: 'Semântica · Cerrado',
    swatches: [
      { token: 'cerrado', hex: '#A34A26', use: 'Estimativa (claro)', dark: true },
      { token: 'cerrado-300', hex: '#E39A75', use: 'Estimativa (escuro)' },
    ],
  },
];

const MOTION = [
  ['SplitText', 'Título do hero'],
  ['RotatingText', 'Públicos no hero'],
  ['ShinyText', 'Selo HackBrasil'],
  ['Magnet', 'CTAs principais'],
  ['StarBorder', 'CTA final'],
  ['ClickSpark', 'Página inteira'],
  ['SpotlightCard', 'Módulos'],
  ['GlareHover', 'Modelo de negócio'],
  ['CountUp', 'Números de mercado'],
  ['ScrollReveal', 'Manifesto'],
  ['AnimatedContent', 'Entrada de blocos'],
];

function SwatchCard({ s }: { s: Swatch }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(s.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* área de transferência indisponível */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="group overflow-hidden rounded-2xl border border-areia bg-palha-50 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(14,42,31,0.4)]"
      aria-label={`Copiar ${s.token} ${s.hex}`}
    >
      <div className="relative h-24" style={{ background: s.hex }}>
        <span
          className={`absolute top-3 right-3 inline-flex items-center gap-1 rounded-full px-2 py-1 font-mono text-[10px] opacity-0 transition-opacity group-hover:opacity-100 ${
            s.dark ? 'bg-palha/15 text-palha' : 'bg-mata-900/10 text-mata-900'
          }`}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />} {copied ? 'Copiado' : 'Copiar'}
        </span>
      </div>
      <div className="p-3.5">
        <p className="font-mono text-xs font-medium text-tinta">{s.token}</p>
        <p className="font-mono text-[11px] text-tinta-soft">{s.hex}</p>
        <p className="mt-1.5 text-xs text-tinta-soft">{s.use}</p>
      </div>
    </button>
  );
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-areia py-16">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="font-mono text-xs text-musgo">{n}</p>
          <h2 className="mt-2 font-display text-3xl text-mata-900">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Styleguide() {
  return (
    <div className="min-h-screen bg-palha">
      <header className="sticky top-0 z-40 border-b border-areia bg-palha/85 backdrop-blur-xl">
        <div className="container-va flex items-center justify-between py-4">
          <Logo />
          <a href="#topo" className="btn-ghost px-4! py-2! text-sm text-mata-900">
            <ArrowLeft size={16} /> Voltar à landing
          </a>
        </div>
      </header>

      <main className="container-va pb-24">
        <div className="py-20">
          <span className="eyebrow text-musgo">Styleguide · v1.0</span>
          <h1 className="h-display mt-5 text-[clamp(3rem,8vw,6.5rem)] text-mata-900">
            Terra <em className="font-light text-musgo">Viva</em>
          </h1>
          <p className="lead mt-6 max-w-2xl">
            A identidade do VerdAgro fica entre o chão e o dado: a textura do campo (palha, terra, mata) com a precisão
            de um satélite (grids, coordenadas, mono). O acento <strong className="text-tinta">broto</strong> aparece
            pouco e, quando aparece, significa ação ou comprovado.
          </p>
        </div>

        <Block n="01" title="Logo">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex h-48 items-center justify-center rounded-[var(--radius-card)] border border-areia bg-palha-50">
              <Logo />
            </div>
            <div className="flex h-48 items-center justify-center rounded-[var(--radius-card)] bg-mata-900">
              <Logo variant="negative" />
            </div>
            <div className="flex h-48 items-center justify-center gap-6 rounded-[var(--radius-card)] border border-areia bg-palha-50 sm:col-span-2">
              <LogoMark className="size-20" />
              <LogoMark variant="negative" className="size-20" />
              <p className="max-w-xs text-sm text-tinta-soft">
                Folha formada por linhas de plantio: ao mesmo tempo folha e talhão visto de cima.
              </p>
            </div>
          </div>
        </Block>

        <Block n="02" title="Cores">
          <div className="space-y-10">
            {GROUPS.map(g => (
              <div key={g.title}>
                <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-tinta-soft uppercase">{g.title}</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {g.swatches.map(s => (
                    <SwatchCard key={s.token} s={s} />
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-tinta-soft uppercase">Proporção</p>
              <div className="flex h-14 overflow-hidden rounded-2xl">
                <div className="flex w-[55%] items-end bg-palha p-2 font-mono text-[10px] ring-1 ring-areia ring-inset">palha 55</div>
                <div className="flex w-[30%] items-end bg-mata-900 p-2 font-mono text-[10px] text-palha">mata 30</div>
                <div className="flex w-[10%] items-end bg-tinta p-2 font-mono text-[10px] text-palha">10</div>
                <div className="w-[4%] bg-broto" />
                <div className="w-[1%] bg-cerrado" />
              </div>
            </div>
          </div>
        </Block>

        <Block n="03" title="Estimativa ≠ certificado">
          <p className="max-w-2xl text-tinta-soft">
            O projeto exige diferenciar estimativas ambientais de créditos certificados. Isso virou regra visual:
            <strong className="text-tinta"> tracejado = ainda não é; sólido = comprovado.</strong>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="tag-estimativa">
              <CircleDashed size={12} /> Estimativa
            </span>
            <span className="tag border border-tinta/25 text-tinta-soft">Em verificação</span>
            <span className="tag-certificado">
              <BadgeCheck size={12} /> Certificado
            </span>
            <span className="tag-demo text-tinta-soft">Dados demonstrativos</span>
          </div>
        </Block>

        <Block n="04" title="Tipografia">
          <div className="space-y-8">
            <div className="rounded-[var(--radius-card)] border border-areia bg-palha-50 p-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-tinta-soft uppercase">Display · Fraunces</p>
              <p className="h-display mt-4 text-6xl text-mata-900 sm:text-7xl">
                Do campo ao <em className="font-light text-musgo">crédito.</em>
              </p>
              <p className="mt-4 font-mono text-xs text-tinta-soft">400–500 · opsz 144 · SOFT 50 · tracking −2% · itálico 300 para ênfase</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-card)] border border-areia bg-palha-50 p-8">
                <p className="font-mono text-[11px] tracking-[0.18em] text-tinta-soft uppercase">Texto · Manrope</p>
                <p className="mt-4 text-2xl font-semibold text-tinta">Inteligência ambiental para o agro.</p>
                <p className="mt-3 text-tinta-soft">
                  Corpo de texto em 16px, entrelinha 1.6. Peso 600 em botões, 700 em rótulos fortes.
                </p>
              </div>
              <div className="rounded-[var(--radius-card)] bg-mata-900 p-8 text-palha">
                <p className="font-mono text-[11px] tracking-[0.18em] text-palha/60 uppercase">Dados · JetBrains Mono</p>
                <p className="mt-4 font-mono text-2xl text-broto">LAT -17.7923</p>
                <p className="mt-3 font-mono text-sm text-palha/70">NDVI 0,64 · 200 ha · ESC 1:25.000</p>
              </div>
            </div>
            <div className="divide-y divide-areia rounded-[var(--radius-card)] border border-areia bg-palha-50 px-8">
              {[
                ['Display XL', '88–104px / 0.95', 'h-display text-5xl'],
                ['Section', '60px / 1.02', 'h-display text-4xl'],
                ['H3', '28px / 1.15', 'font-display text-[28px]'],
                ['Lead', '20px / 1.6', 'text-xl text-tinta-soft'],
                ['Body', '16px / 1.6', 'text-base text-tinta-soft'],
                ['Eyebrow', '11px mono', 'eyebrow text-musgo'],
              ].map(([name, spec, cls]) => (
                <div key={name} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className={`${cls} text-mata-900`}>{name}</span>
                  <span className="font-mono text-xs text-tinta-soft">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </Block>

        <Block n="05" title="Componentes">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-[var(--radius-card)] border border-areia bg-palha-50 p-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-tinta-soft uppercase">Botões</p>
              <div className="flex flex-wrap items-center gap-3">
                <Magnet padding={40} magnetStrength={3}>
                  <span className="btn-primary">
                    Primário <ArrowRight size={18} />
                  </span>
                </Magnet>
                <span className="btn-ghost text-mata-900">Secundário</span>
              </div>
              <p className="text-sm text-tinta-soft">Primário com Magnet. Só um primário por bloco.</p>
            </div>
            <div className="flex flex-col gap-5 rounded-[var(--radius-card)] bg-mata-900 p-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-palha/60 uppercase">Destaque máximo</p>
              <div>
                <StarBorder
                  as="span"
                  theme="dark"
                  backgroundColor="#153828"
                  textColor="#f3eee2"
                  borderColor="rgba(197,242,92,0.25)"
                  color="#c5f25c"
                  radius={999}
                  sparkle
                  className="font-semibold"
                >
                  StarBorder
                </StarBorder>
              </div>
              <p className="text-sm text-palha/70">Usado uma única vez na página, no CTA final.</p>
            </div>
            <SpotlightCard
              theme="dark"
              spotlightColor="rgba(197, 242, 92, 0.22)"
              className="rounded-[var(--radius-card)]! p-8!"
              style={{ '--spotlight-card-surface': '#0e2a1f' } as React.CSSProperties}
            >
              <p className="font-mono text-[11px] tracking-[0.18em] text-broto uppercase">SpotlightCard</p>
              <p className="mt-4 font-display text-2xl text-palha">Passe o mouse aqui</p>
              <p className="mt-2 text-sm text-palha/65">A luz segue o cursor como uma lanterna sobre o mapa.</p>
            </SpotlightCard>
            <div className="rounded-[var(--radius-card)] border border-areia bg-palha-50 p-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-tinta-soft uppercase">Dados</p>
              <p className="mt-3 font-display text-6xl text-mata-900">
                <CountUp to={314.3} decimals={1} separator="." decimalSeparator="," duration={2} replayOnHover />
                <span className="text-3xl text-musgo"> mi</span>
              </p>
              <ShinyText text="CountUp · passe o mouse para repetir" color="#44524a" shineColor="#0e2a1f" className="text-sm" />
            </div>
          </div>
        </Block>

        <Block n="06" title="Movimento">
          <p className="max-w-2xl text-tinta-soft">
            <strong className="text-tinta">O movimento revela dado, não decora.</strong> Easing padrão{' '}
            <code className="rounded bg-areia px-1.5 py-0.5 font-mono text-xs">cubic-bezier(0.22, 1, 0.36, 1)</code>.
            Todas as animações respeitam <code className="rounded bg-areia px-1.5 py-0.5 font-mono text-xs">prefers-reduced-motion</code>.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-areia bg-areia sm:grid-cols-2 lg:grid-cols-3">
            {MOTION.map(([c, where]) => (
              <div key={c} className="bg-palha-50 p-5">
                <p className="font-mono text-sm text-mata-900">{c}</p>
                <p className="mt-1 text-xs text-tinta-soft">{where}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-tinta-soft">Componentes de micro-interação do React Bits (reactbits.dev).</p>
        </Block>

        <Block n="07" title="Tom de voz">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius-card)] border border-broto-700/40 bg-palha-50 p-7">
              <p className="tag-certificado">Fazemos</p>
              <ul className="mt-5 space-y-2 text-tinta-soft">
                <li>Direto e acolhedor com o produtor</li>
                <li>Preciso e transparente com a empresa</li>
                <li>Diferenciamos estimativa de crédito emitido</li>
                <li>Citamos fontes e metodologias</li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-card)] border border-dashed border-cerrado/60 bg-palha-50 p-7">
              <p className="tag-estimativa">Evitamos</p>
              <ul className="mt-5 space-y-2 text-tinta-soft">
                <li>Prometer renda ou créditos garantidos</li>
                <li>Globo com folhas, mãos segurando muda</li>
                <li>Gradientes verde-azul genéricos</li>
                <li>Jargão técnico sem explicação</li>
              </ul>
            </div>
          </div>
        </Block>
      </main>
    </div>
  );
}
