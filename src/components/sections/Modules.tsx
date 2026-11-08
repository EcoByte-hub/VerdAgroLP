import { FolderKanban, Handshake, Map, Route, Sparkles, Store } from 'lucide-react';
import SpotlightCard from '../reactbits/SpotlightCard/SpotlightCard';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import ScrollVelocity from '../reactbits/ScrollVelocity/ScrollVelocity';
import { modules, practices } from '../../data/content';

const ICONS = {
  map: Map,
  sparkles: Sparkles,
  folder: FolderKanban,
  store: Store,
  handshake: Handshake,
  route: Route,
} as const;

export default function Modules() {
  return (
    <section id="plataforma" className="relative overflow-hidden bg-palha pt-28 pb-10 sm:pt-36">
      <div className="container-va">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-musgo">A plataforma</span>
            <h2 className="h-section mt-5 text-mata-900">
              Seis módulos, <em className="font-light text-musgo">uma jornada</em> só.
            </h2>
          </div>
          <p className="lead lg:pb-2">
            Do cadastro da propriedade à negociação com a empresa compradora, cada etapa conversa com a próxima e deixa
            um rastro verificável.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => {
            const Icon = ICONS[m.icon];
            return (
              <AnimatedContent key={m.n} distance={50} duration={0.9} delay={(i % 3) * 0.1}>
                <SpotlightCard
                  theme="dark"
                  spotlightColor="rgba(197, 242, 92, 0.22)"
                  className="group h-full rounded-[var(--radius-card)]! p-7! sm:p-8!"
                  style={
                    {
                      '--spotlight-card-surface': '#0e2a1f',
                      '--spotlight-card-border': 'rgba(197, 242, 92, 0.12)',
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-mata-700 bg-mata-800 text-broto transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs text-palha/35">Módulo {m.n}</span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl text-palha">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-palha/65">{m.text}</p>
                </SpotlightCard>
              </AnimatedContent>
            );
          })}
        </div>
      </div>

      {/* Faixa de práticas sustentáveis */}
      <div className="mt-24 border-y border-areia py-6" aria-label="Práticas sustentáveis que a plataforma ajuda a identificar">
        <ScrollVelocity
          texts={[practices.join('  ·  ')]}
          velocity={40}
          numCopies={4}
          fadeEdges
          outlineAlternate={false}
          fontSize="clamp(2rem, 5vw, 4rem)"
          fontWeight={300}
          color="#2e5e43"
          className="font-display italic"
          separator={<span className="mx-6 inline-block size-3 rounded-full bg-broto align-middle" />}
        />
      </div>
    </section>
  );
}
