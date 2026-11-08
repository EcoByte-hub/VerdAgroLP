import { Building2, Tractor, X } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal/ScrollReveal';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { problems } from '../../data/content';

export default function Problem() {
  return (
    <section id="problema" className="relative bg-palha py-28 sm:py-36">
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

        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          {[
            { data: problems.produtor, Icon: Tractor },
            { data: problems.empresa, Icon: Building2 },
          ].map(({ data, Icon }, col) => (
            <AnimatedContent key={data.title} distance={60} duration={0.9} delay={col * 0.12} ease="power3.out">
              <article className="h-full rounded-[var(--radius-card)] border border-areia bg-palha-50 p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-mata-900 text-broto">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-2xl text-mata-900 sm:text-[1.75rem]">{data.title}</h3>
                </div>
                <ul className="mt-8 divide-y divide-areia">
                  {data.items.map(item => (
                    <li key={item} className="group flex items-start gap-4 py-4 text-tinta-soft">
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
