import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, FileText, Leaf, Loader2, MapPin, RotateCcw, Sparkles, Sprout } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import Magnet from '../reactbits/Magnet/Magnet';

const INPUTS = [
  { label: 'Localização', value: 'Rio Verde · GO', Icon: MapPin },
  { label: 'Área', value: '200 hectares', Icon: Leaf },
  { label: 'Cultura', value: 'Soja + milho safrinha', Icon: Sprout },
  { label: 'Manejo', value: 'Plantio direto há 6 anos', Icon: Check },
  { label: 'Histórico do solo', value: 'Pastagem degradada até 2017', Icon: FileText },
];

const STEPS = ['Lendo dados da propriedade', 'Cruzando dados climáticos', 'Analisando cobertura vegetal', 'Gerando recomendações'];

const RESULT = {
  indicators: [
    { label: 'Cobertura vegetal', value: '78%' },
    { label: 'NDVI médio', value: '0,64' },
    { label: 'Área elegível*', value: '~140 ha' },
  ],
  identified: ['Plantio direto consolidado', 'Rotação soja-milho'],
  opportunities: ['Culturas de cobertura na entressafra', 'Recuperação da área de pastagem'],
  docs: ['CAR regularizado', 'Notas de insumos (3 safras)', 'Registros de manejo', 'Imagens históricas'],
  next: ['Anexar evidências', 'Definir linha de base', 'Escolher metodologia'],
};

type Phase = 'idle' | 'running' | 'done';

export default function Diagnostico() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [step, setStep] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    timers.current.forEach(clearTimeout);
    setPhase('running');
    setStep(0);
    STEPS.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setStep(i + 1), 550 * (i + 1)));
    });
    timers.current.push(window.setTimeout(() => setPhase('done'), 550 * (STEPS.length + 1)));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout);
    setPhase('idle');
    setStep(0);
  };

  return (
    <section id="diagnostico" className="relative bg-areia/45 py-28 sm:py-36">
      <div className="container-va">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-musgo">Funcionalidade destaque</span>
            <h2 className="h-section mt-5 text-mata-900">
              Diagnóstico <em className="font-light text-musgo">Inteligente</em> da Propriedade
            </h2>
          </div>
          <p className="lead lg:pb-2">
            O produtor informa o básico. A IA cruza dados geográficos e climáticos e devolve um mapa claro do que já
            existe, do que pode melhorar e do que precisa ser comprovado. <strong className="text-tinta">Sem prometer crédito antes da hora.</strong>
          </p>
        </div>

        <AnimatedContent distance={60} duration={1}>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-areia bg-palha-50 shadow-[0_40px_80px_-40px_rgba(14,42,31,0.35)]">
            {/* barra do "app" */}
            <div className="flex items-center justify-between border-b border-areia px-5 py-3.5 sm:px-7">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-areia" />
                <span className="size-2.5 rounded-full bg-areia" />
                <span className="size-2.5 rounded-full bg-areia" />
                <span className="ml-3 hidden font-mono text-[11px] tracking-wider text-tinta-soft sm:inline">verdagro.app/diagnostico</span>
              </div>
              <span className="tag-demo whitespace-nowrap text-tinta-soft">Dados demonstrativos</span>
            </div>

            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Entradas */}
              <div className="border-b border-areia p-6 sm:p-8 lg:border-r lg:border-b-0">
                <p className="font-mono text-[11px] tracking-[0.18em] text-tinta-soft uppercase">Entrada · Fazenda Boa Vista</p>
                <ul className="mt-5 space-y-2.5">
                  {INPUTS.map(({ label, value, Icon }) => (
                    <li key={label} className="flex items-center gap-3 rounded-2xl border border-areia bg-palha px-4 py-3">
                      <Icon size={16} className="shrink-0 text-musgo" />
                      <span className="text-xs text-tinta-soft">{label}</span>
                      <span className="ml-auto text-right text-sm font-semibold text-tinta">{value}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Magnet padding={40} magnetStrength={4}>
                    <button
                      type="button"
                      onClick={run}
                      disabled={phase === 'running'}
                      className="btn-primary disabled:cursor-wait disabled:opacity-70"
                    >
                      {phase === 'running' ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                      {phase === 'done' ? 'Gerar novamente' : 'Gerar diagnóstico'}
                    </button>
                  </Magnet>
                  {phase === 'done' && (
                    <button type="button" onClick={reset} className="btn-ghost px-4! text-tinta-soft" aria-label="Limpar diagnóstico">
                      <RotateCcw size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Saída */}
              <div className="relative min-h-[460px] bg-mata-900 p-6 text-palha sm:p-8">
                <div className="bg-grid pointer-events-none absolute inset-0 text-palha opacity-[0.04]" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  {phase === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative flex h-full min-h-[400px] flex-col items-center justify-center text-center"
                    >
                      <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-dashed border-broto/50 text-broto">
                        <Sparkles size={24} />
                      </span>
                      <p className="mt-5 max-w-xs text-palha/70">
                        Clique em <strong className="text-broto">Gerar diagnóstico</strong> para ver a análise da
                        propriedade demonstrativa.
                      </p>
                    </motion.div>
                  )}

                  {phase === 'running' && (
                    <motion.ul
                      key="running"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative flex h-full min-h-[400px] flex-col justify-center gap-4"
                      aria-live="polite"
                    >
                      {STEPS.map((s, i) => (
                        <li key={s} className={`flex items-center gap-3 transition-opacity ${i <= step ? 'opacity-100' : 'opacity-30'}`}>
                          <span
                            className={`inline-flex size-6 items-center justify-center rounded-full ${
                              i < step ? 'bg-broto text-mata-900' : 'border border-palha/30'
                            }`}
                          >
                            {i < step ? <Check size={13} strokeWidth={3} /> : i === step ? <Loader2 size={13} className="animate-spin" /> : null}
                          </span>
                          <span className="font-mono text-sm">{s}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {phase === 'done' && (
                    <motion.div
                      key="done"
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0 }}
                      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                      className="relative grid gap-4"
                      aria-live="polite"
                    >
                      <motion.div variants={item} className="flex items-center justify-between">
                        <p className="font-mono text-[11px] tracking-[0.18em] text-broto uppercase">Resumo ambiental</p>
                        <span className="tag border border-dashed border-cerrado-300 text-cerrado-300">Estimativa preliminar</span>
                      </motion.div>

                      <motion.div variants={item} className="grid grid-cols-3 gap-2.5">
                        {RESULT.indicators.map(ind => (
                          <div key={ind.label} className="rounded-2xl border border-mata-700 bg-mata-800 p-3.5">
                            <p className="font-display text-2xl text-broto sm:text-3xl">{ind.value}</p>
                            <p className="mt-1 text-[11px] leading-tight text-palha/60">{ind.label}</p>
                          </div>
                        ))}
                      </motion.div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <ResultList title="Práticas identificadas" items={RESULT.identified} solid />
                        <ResultList title="Oportunidades de melhoria" items={RESULT.opportunities} />
                        <ResultList title="Documentos necessários" items={RESULT.docs} icon="doc" />
                        <ResultList title="Próximas etapas" items={RESULT.next} icon="step" />
                      </div>

                      <motion.p variants={item} className="text-[11px] leading-relaxed text-palha/50">
                        * Indicadores ilustrativos. As recomendações têm caráter preliminar e não substituem estudos
                        técnicos, metodologias reconhecidas ou certificação independente.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

function ResultList({
  title,
  items,
  solid,
  icon,
}: {
  title: string;
  items: string[];
  solid?: boolean;
  icon?: 'doc' | 'step';
}) {
  return (
    <motion.div variants={item} className="rounded-2xl border border-mata-700 bg-mata-800/60 p-4">
      <p className="text-xs font-semibold text-palha/80">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((t, i) => (
          <li key={t} className="flex items-start gap-2.5 text-[13px] leading-snug">
            {icon === 'step' ? (
              <span className="mt-px font-mono text-[11px] text-broto">{i + 1}.</span>
            ) : icon === 'doc' ? (
              <FileText size={14} className="mt-px shrink-0 text-palha/50" />
            ) : (
              <span
                className={`mt-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-full ${
                  solid ? 'bg-broto text-mata-900' : 'border border-dashed border-cerrado-300'
                }`}
              >
                {solid && <Check size={9} strokeWidth={3.5} />}
              </span>
            )}
            <span className="text-palha/85">{t}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
