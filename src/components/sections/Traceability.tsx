import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { BadgeCheck, CircleDashed, ShieldCheck } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { stages } from '../../data/content';

const KIND = {
  estimativa: {
    label: 'Estimativa',
    dot: 'border-2 border-dashed border-cerrado-300 bg-mata-900 text-cerrado-300',
    text: 'text-cerrado-300',
  },
  processo: {
    label: 'Em verificação',
    dot: 'border-2 border-palha/40 bg-mata-900 text-palha/80',
    text: 'text-palha/70',
  },
  certificado: {
    label: 'Certificado',
    dot: 'bg-broto text-mata-900 shadow-[0_0_0_6px_rgba(197,242,92,0.15)]',
    text: 'text-broto',
  },
} as const;

export default function Traceability() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 45%'] });
  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 120, damping: 30 });

  return (
    <section id="rastreabilidade" className="grain relative overflow-hidden bg-mata-900 py-28 text-palha sm:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 text-palha opacity-[0.035]" aria-hidden="true" />
      <div className="container-va relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-broto">Rastreabilidade</span>
            <h2 className="h-section mt-5">
              Estimativa não é crédito.{' '}
              <em className="font-light text-broto">E a gente mostra a diferença.</em>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-palha/70 lg:pb-2">
            Cada projeto carrega uma linha do tempo pública com oito estágios. Qualquer pessoa sabe exatamente em que
            ponto ele está, e o que ainda é estimativa nunca aparece como crédito emitido.
          </p>
        </div>

        {/* Legenda */}
        <div className="mt-12 flex flex-wrap gap-3">
          <span className="tag border border-dashed border-cerrado-300 text-cerrado-300">
            <CircleDashed size={12} /> Estimativa ambiental
          </span>
          <span className="tag border border-palha/30 text-palha/80">
            <ShieldCheck size={12} /> Em validação / verificação
          </span>
          <span className="tag-certificado">
            <BadgeCheck size={12} /> Crédito certificado e emitido
          </span>
        </div>

        {/* Linha do tempo */}
        <div ref={ref} className="relative mt-16">
          {/* trilho (desktop: horizontal / mobile: vertical) */}
          <div className="absolute top-5 right-[6%] left-[6%] hidden h-px bg-mata-700 lg:block" aria-hidden="true">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-gradient-to-r from-cerrado-300 via-palha/60 to-broto" />
          </div>
          <div className="absolute top-2 bottom-2 left-5 w-px bg-mata-700 lg:hidden" aria-hidden="true">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-gradient-to-b from-cerrado-300 via-palha/60 to-broto" />
          </div>

          <ol className="relative grid gap-8 lg:grid-cols-8 lg:gap-3">
            {stages.map((s, i) => {
              const k = KIND[s.kind];
              return (
                <li key={s.title} className="flex items-start gap-5 lg:flex-col lg:items-center lg:text-center">
                  <AnimatedContent distance={20} duration={0.6} delay={i * 0.07} scale={0.6}>
                    <span
                      className={`relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-medium ${k.dot}`}
                    >
                      {i + 1}
                    </span>
                  </AnimatedContent>
                  <div className="pt-1.5 lg:pt-4">
                    <p className="font-display text-lg leading-tight">{s.title}</p>
                    <p className={`mt-1.5 font-mono text-[10px] tracking-widest uppercase ${k.text}`}>{k.label}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <AnimatedContent distance={40}>
          <p className="mt-16 max-w-3xl border-l-2 border-broto pl-5 text-palha/75">
            O VerdAgro <strong className="text-palha">não emite certificações próprias</strong>. Organizamos
            informações, apoiamos a estruturação dos projetos, facilitamos o monitoramento e conectamos os
            participantes do mercado. A validação e a verificação são sempre independentes.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
}
