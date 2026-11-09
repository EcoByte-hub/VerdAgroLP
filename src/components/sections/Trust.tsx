import { Scale, ShieldCheck } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { journey, trust } from '../../data/content';

export default function Trust() {
  return (
    <section id="confiabilidade" className="relative bg-palha py-28 sm:py-36">
      <div className="container-va">
        {/* Jornada da demonstração */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-musgo">A demonstração</span>
            <h2 className="h-section mt-5 text-mata-900">
              Uma jornada completa <em className="font-light text-musgo">em sete passos.</em>
            </h2>
          </div>
          <p className="lead lg:pb-2">
            No MVP, a demonstração vai do cadastro de uma propriedade até uma empresa manifestar interesse nela, com
            dados fictícios identificados como tal.
          </p>
        </div>

        <div role="list" className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {journey.map((j, i) => (
            <AnimatedContent key={j.step} distance={30} delay={i * 0.06} className="h-full">
              <div role="listitem" className="group relative flex h-full flex-col rounded-[1.25rem] border border-areia bg-palha-50 p-5 transition-colors duration-300 hover:border-mata-900 hover:bg-mata-900">
                <span className="font-mono text-[11px] text-musgo transition-colors group-hover:text-broto">
                  Etapa {i + 1}
                </span>
                <p className="mt-6 font-display text-xl text-mata-900 transition-colors group-hover:text-palha">{j.step}</p>
                <p className="mt-2 text-[13px] leading-snug text-tinta-soft transition-colors group-hover:text-palha/70">
                  {j.text}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Regulação */}
        <div className="mt-24 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedContent distance={40}>
            <div className="h-full rounded-[var(--radius-card)] border border-areia bg-palha-50 p-7 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-mata-900 text-broto">
                  <ShieldCheck size={20} strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-2xl text-mata-900 sm:text-[1.75rem]">Princípios de integridade</h3>
              </div>
              <p className="mt-5 text-tinta-soft">
                A plataforma foi pensada para respeitar as regras do mercado de carbono e nunca confundir estimativa com
                crédito certificado. Todo projeto é organizado em torno de:
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {trust.principles.map(p => (
                  <li key={p} className="rounded-full border border-areia bg-palha px-4 py-2 text-sm font-medium text-tinta">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={40} delay={0.1}>
            <div className="h-full rounded-[var(--radius-card)] bg-mata-900 p-7 text-palha sm:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-broto text-mata-900">
                  <Scale size={20} strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-2xl sm:text-[1.75rem]">Referências técnicas</h3>
              </div>
              <ul className="mt-7 divide-y divide-mata-700">
                {trust.references.map(r => (
                  <li key={r.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="font-mono text-sm text-broto">{r.name}</span>
                    <span className="text-sm text-palha/70 sm:text-right">{r.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
