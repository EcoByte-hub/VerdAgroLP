import { BadgeCheck, Building2, Sprout } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { carbonBasics } from '../../data/content';

const STEP_ICONS = [Sprout, BadgeCheck, Building2];

export default function CarbonCredit() {
  return (
    <section id="credito-de-carbono" className="grain relative overflow-hidden bg-mata-900 py-24 text-palha sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 text-palha opacity-[0.035]" aria-hidden="true" />

      <div className="container-va relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Definição */}
        <div>
          <span className="eyebrow text-broto">O básico</span>
          <h2 className="h-section mt-5">
            O que é um <em className="font-light text-broto">crédito de carbono</em>?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-palha/70">
            É um certificado que comprova que uma tonelada de gás carbônico, ou o equivalente em outros gases de efeito
            estufa, deixou de ser emitida ou foi retirada da atmosfera. Quem gera esse resultado pode vender o crédito,
            e quem compra usa para compensar parte das próprias emissões.
          </p>

          <AnimatedContent distance={40} duration={0.9}>
            <div className="mt-10 rounded-[var(--radius-card)] bg-broto p-6 text-mata-900 sm:p-8">
              <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-display leading-none">
                <span className="text-[clamp(2.25rem,4.5vw,3.25rem)]">1 crédito</span>
                <span className="text-[clamp(1.75rem,3vw,2.25rem)] font-light text-mata-900/60">=</span>
                <span className="text-[clamp(2.25rem,4.5vw,3.25rem)] italic">
                  1 t CO<sub className="text-[0.5em]">2</sub>e
                </span>
              </p>
              <p className="mt-3 text-sm text-mata-900/75">uma tonelada de dióxido de carbono equivalente</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {carbonBasics.kinds.map(k => (
                  <div key={k.title} className="rounded-2xl bg-mata-900/[0.07] p-4">
                    <p className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase">{k.title}</p>
                    <p className="mt-2 text-[14px] leading-snug text-mata-900/80">{k.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>

          <p className="mt-4 text-xs leading-relaxed text-palha/50">
            CO<sub>2</sub>e converte metano e óxido nitroso para a mesma unidade do CO<sub>2</sub>, de acordo com o
            potencial de aquecimento de cada gás.
          </p>
        </div>

        {/* Como funciona */}
        <ol className="grid content-center gap-4">
          {carbonBasics.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={s.title}>
                <AnimatedContent distance={40} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-mata-700 bg-mata-800/60 p-6 sm:flex-row sm:gap-5 sm:p-7">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-mata-700 bg-mata-900 text-broto">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] text-palha/40">0{i + 1}</p>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl">{s.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-palha/65">{s.text}</p>
                    </div>
                  </div>
                </AnimatedContent>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
