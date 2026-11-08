import CountUp from '../reactbits/CountUp/CountUp';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { differentials } from '../../data/content';

const STATS = [
  {
    value: 5.07,
    decimals: 2,
    prefix: '',
    suffix: ' mi',
    label: 'estabelecimentos agropecuários no Brasil',
    source: 'IBGE, Censo Agropecuário 2017',
  },
  {
    value: 77,
    decimals: 0,
    prefix: '',
    suffix: '%',
    label: 'deles são de agricultura familiar, o público que mais fica de fora',
    source: 'IBGE, Censo Agropecuário 2017',
  },
  {
    value: 314.3,
    decimals: 1,
    prefix: 'até ',
    suffix: ' mi',
    label: 'créditos de carbono que o agro pode gerar entre 2025 e 2035 (cenário integral)',
    source: 'ABAG / Carbonn Nature, Instituto Equilíbrio e IEAg, 2026',
  },
];

export default function Market() {
  return (
    <section id="mercado" className="relative bg-palha py-28 sm:py-36">
      <div className="container-va">
        <span className="eyebrow text-musgo">Oportunidade</span>
        <h2 className="h-section mt-5 max-w-4xl text-mata-900">
          O potencial é gigante. <em className="font-light text-musgo">O acesso, ainda não.</em>
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-areia bg-areia md:grid-cols-3">
          {STATS.map(s => (
            <div key={s.label} className="flex flex-col bg-palha-50 p-8 sm:p-10">
              <p className="font-display text-[clamp(3rem,6vw,4.75rem)] leading-none tracking-[-0.03em] text-mata-900">
                {s.prefix && <span className="text-[0.4em] font-light italic text-musgo">{s.prefix}</span>}
                <CountUp to={s.value} decimals={s.decimals} separator="." decimalSeparator="," duration={2} />
                <span className="text-[0.55em] text-musgo">{s.suffix}</span>
              </p>
              <p className="mt-5 text-tinta-soft">{s.label}</p>
              <p className="mt-auto pt-8 font-mono text-[10.5px] tracking-wider text-tinta-soft uppercase">
                <span className="font-semibold text-tinta">Fonte:</span> {s.source}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-tinta-soft">
          Potencial estimado não representa créditos disponíveis nem receita garantida. Ele depende de projetos
          estruturados, metodologia e verificação independente, exatamente a lacuna que o VerdAgro ataca.
        </p>

        {/* Diferenciais */}
        <div className="mt-28 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow text-musgo">Diferenciais</span>
            <h3 className="mt-5 font-display text-4xl leading-[1.05] text-mata-900 sm:text-5xl">
              Não é só um marketplace.{' '}
              <em className="font-light text-musgo">É a infraestrutura antes dele.</em>
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((d, i) => (
              <AnimatedContent key={d.title} distance={40} delay={i * 0.08}>
                <div className="group h-full rounded-[1.25rem] border border-areia bg-palha-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-musgo/30 hover:shadow-[0_20px_40px_-24px_rgba(14,42,31,0.35)]">
                  <span className="font-mono text-xs text-musgo">0{i + 1}</span>
                  <p className="mt-3 font-display text-xl text-mata-900">{d.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-tinta-soft">{d.text}</p>
                  <span className="mt-5 block h-0.5 w-8 rounded-full bg-broto-700 transition-all duration-500 group-hover:w-16" />
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
