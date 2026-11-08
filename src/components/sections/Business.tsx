import { ArrowUpRight, Building2, FolderKanban, Handshake, Tractor } from 'lucide-react';
import GlareHover from '../reactbits/GlareHover/GlareHover';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { business, expansion } from '../../data/content';

const ICONS = [Tractor, Building2, Handshake, FolderKanban];

export default function Business() {
  return (
    <section id="negocio" className="grain relative overflow-hidden bg-mata-900 py-28 text-palha sm:py-36">
      <div
        className="pointer-events-none absolute -bottom-60 -left-40 size-[560px] rounded-full bg-broto/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-va relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-broto">Modelo de negócio</span>
            <h2 className="h-section mt-5">
              B2B2C: <em className="font-light text-broto">gratuito para entrar</em>, rentável para escalar.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-palha/70 lg:pb-2">
            Atraímos produtores com cadastro e diagnóstico gratuitos e monetizamos principalmente serviços empresariais,
            gestão de projetos e intermediação.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {business.map((b, i) => {
            const Icon = ICONS[i];
            return (
              <AnimatedContent key={b.who} distance={50} delay={i * 0.08} className="h-full">
                <GlareHover
                  width="100%"
                  height="100%"
                  background={i === 0 ? '#c5f25c' : '#153828'}
                  borderColor={i === 0 ? '#c5f25c' : '#1f4a35'}
                  borderRadius="1.5rem"
                  glareColor={i === 0 ? '#ffffff' : '#c5f25c'}
                  glareOpacity={i === 0 ? 0.6 : 0.25}
                  glareSize={260}
                  className="place-items-stretch!"
                >
                  <div className={`flex h-full flex-col p-7 ${i === 0 ? 'text-mata-900' : ''}`}>
                    <div className="flex items-center justify-between">
                      <Icon size={22} strokeWidth={1.5} className={i === 0 ? 'text-mata-900' : 'text-broto'} />
                      {i === 0 && (
                        <span className="rounded-full bg-mata-900 px-2.5 py-1 font-mono text-[10px] tracking-widest text-broto uppercase">
                          Porta de entrada
                        </span>
                      )}
                    </div>
                    <p className="mt-10 font-display text-2xl">{b.who}</p>
                    <ul className="mt-5 space-y-3 text-[14px] leading-snug">
                      {b.items.map(it => (
                        <li key={it} className="flex gap-2.5">
                          <span className={`mt-[7px] size-1.5 shrink-0 rounded-full ${i === 0 ? 'bg-mata-900' : 'bg-broto'}`} />
                          <span className={i === 0 ? 'text-mata-900/80' : 'text-palha/70'}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlareHover>
              </AnimatedContent>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col gap-6 rounded-[var(--radius-card)] border border-mata-700 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-broto uppercase">Potencial de escala</p>
            <p className="mt-2 font-display text-2xl">Para onde o VerdAgro pode crescer</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {expansion.map(e => (
              <li
                key={e}
                className="group inline-flex items-center gap-1.5 rounded-full border border-mata-700 px-4 py-2 text-sm text-palha/80 transition-colors hover:border-broto hover:text-broto"
              >
                {e}
                <ArrowUpRight size={14} className="opacity-40 transition-opacity group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
