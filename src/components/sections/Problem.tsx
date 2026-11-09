import { Building2, Tractor, X } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal/ScrollReveal';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import CountUp from '../reactbits/CountUp/CountUp';
import { marketStats, problems } from '../../data/content';

export default function Problem() {
  return (
    <section id="problema" className="relative bg-palha py-24 sm:py-28">
      <div className="container-va">
        <span className="eyebrow text-cerrado">O problema</span>

        <ScrollReveal
          containerClassName="mt-6 max-w-5xl"
          textClassName="font-display text-[clamp(2rem,4.6vw,3.9rem)]! leading-[1.1]! font-normal! tracking-[-0.02em] text-mata-900"
          baseOpacity={0.12}
          blurStrength={6}
          baseRotation={0}
          wordAnimationEnd="bottom 60%"
        >
          O mercado de carbono é uma oportunidade real para o agro brasileiro. Mas hoje ele fala uma língua que o pequeno e o médio produtor não entendem, e esconde a origem que as empresas precisam enxergar.
        </ScrollReveal>

        {/* Números do mercado */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-areia bg-areia md:grid-cols-3">
          {marketStats.map(s => (
            <div key={s.label} className="flex flex-col bg-palha-50 p-7 sm:p-8">
              <p className="font-display text-[clamp(2.75rem,5vw,4rem)] leading-none tracking-[-0.03em] text-mata-900">
                {s.prefix && <span className="text-[0.4em] font-light italic text-musgo">{s.prefix}</span>}
                <CountUp to={s.value} decimals={s.decimals} separator="." decimalSeparator="," duration={2} />
                <span className="text-[0.55em] text-musgo">{s.suffix}</span>
              </p>
              <p className="mt-4 text-tinta-soft">{s.label}</p>
              <p className="mt-auto pt-6 font-mono text-[10.5px] tracking-wider text-tinta-soft uppercase">
                <span className="font-semibold text-tinta">Fonte:</span> {s.source}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-tinta-soft">
          Potencial estimado não representa créditos disponíveis nem receita garantida. Ele depende de projetos
          estruturados, metodologia e verificação independente, e é nessa parte que o VerdAgro atua.
        </p>

        {/* Dores de cada lado */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {[
            { data: problems.produtor, Icon: Tractor },
            { data: problems.empresa, Icon: Building2 },
          ].map(({ data, Icon }, col) => (
            <AnimatedContent key={data.title} distance={60} duration={0.9} delay={col * 0.12} ease="power3.out">
              <article className="h-full rounded-[var(--radius-card)] border border-areia bg-palha-50 p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-mata-900 text-broto">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-2xl text-mata-900 sm:text-[1.75rem]">{data.title}</h3>
                </div>
                <ul className="mt-6 divide-y divide-areia">
                  {data.items.map(item => (
                    <li key={item} className="group flex items-start gap-4 py-3 text-tinta-soft">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-dashed border-cerrado text-cerrado transition-colors group-hover:bg-cerrado group-hover:text-palha-50">
                        <X size={11} strokeWidth={2.5} />
                      </span>
                      <span className="transition-colors group-hover:text-tinta">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
