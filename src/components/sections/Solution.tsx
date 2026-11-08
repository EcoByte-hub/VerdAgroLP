import { useState } from 'react';
import { ArrowUpRight, Building2, Check, Tractor } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { audiences } from '../../data/content';

type Key = keyof typeof audiences;

const TABS: { key: Key; Icon: typeof Tractor }[] = [
  { key: 'produtor', Icon: Tractor },
  { key: 'empresa', Icon: Building2 },
];

export default function Solution() {
  const [active, setActive] = useState<Key>('produtor');
  const data = audiences[active];

  return (
    <section id="solucao" className="grain relative overflow-hidden bg-mata-900 py-28 text-palha sm:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 text-palha opacity-[0.04]" aria-hidden="true" />

      <div className="container-va relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="eyebrow text-broto">A solução</span>
            <h2 className="h-section mt-5 max-w-3xl">
              Uma plataforma, <em className="font-light text-broto">dois lados</em> do mercado.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-palha/70">
              O VerdAgro organiza as informações, identifica oportunidades ambientais, facilita a estruturação dos
              projetos e aproxima quem produz de quem quer investir em sustentabilidade.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Escolha o público"
            className="relative inline-flex w-fit rounded-full border border-mata-700 bg-mata-950/50 p-1.5"
          >
            {TABS.map(({ key, Icon }) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={`relative z-10 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-300 sm:px-5 ${
                  active === key ? 'text-mata-900' : 'text-palha/70 hover:text-palha'
                }`}
              >
                {active === key && (
                  <motion.span
                    layoutId="va-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-broto"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={16} className="hidden sm:block" />
                {audiences[key].label}
              </button>
            ))}
          </div>
        </div>

        <AnimatedContent distance={50} duration={1}>
          <div className="mt-16 grid gap-6 rounded-[2rem] border border-mata-700 bg-mata-800/60 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={active + '-head'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between gap-10"
              >
                <div>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-broto uppercase">
                    Ambiente · {data.label}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight sm:text-[2.6rem]">{data.headline}</h3>
                  <p className="mt-5 text-palha/70">{data.text}</p>
                </div>
                <a
                  href="#plataforma"
                  className="group inline-flex w-fit items-center gap-2 border-b border-broto/40 pb-1 text-sm font-semibold text-broto hover:border-broto"
                >
                  Ver módulos da plataforma
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.ul
                key={active + '-list'}
                className="grid gap-3"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              >
                {data.items.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-4 rounded-2xl border border-mata-700 bg-mata-900/70 px-5 py-4 transition-colors hover:border-broto/40"
                  >
                    <span className="font-mono text-xs text-palha/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 text-[15px]">{item}</span>
                    <Check size={16} className="text-broto" />
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
