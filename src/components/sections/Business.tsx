import { ArrowUpRight, Building2, FolderKanban, Handshake, Tractor } from 'lucide-react';
import GlareHover from '../reactbits/GlareHover/GlareHover';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { business, differentials, expansion } from '../../data/content';

const ICONS = [Tractor, Building2, Handshake, FolderKanban];

export default function Business() {
  return (
    <section id="negocio" className="relative bg-palha py-24 sm:py-28">
      <div className="container-va">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-musgo">Modelo de negócio</span>
            <h2 className="h-section mt-5 text-mata-900">
              B2B2C: <em className="font-light text-musgo">gratuito para entrar</em>, rentável para escalar.
            </h2>
          </div>
          <p className="lead lg:pb-2">
            Atraímos produtores com cadastro e diagnóstico gratuitos e monetizamos principalmente serviços empresariais,
            gestão de projetos e intermediação.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {business.map((b, i) => {
            const Icon = ICONS[i];
            const entry = i === 0;
            return (
              <AnimatedContent key={b.who} distance={50} delay={i * 0.08} className="h-full">
                <GlareHover
                  width="100%"
                  height="100%"
                  background={entry ? '#c5f25c' : '#0e2a1f'}
                  borderColor={entry ? '#c5f25c' : '#1f4a35'}
                  borderRadius="1.5rem"
                  glareColor={entry ? '#ffffff' : '#c5f25c'}
                  glareOpacity={entry ? 0.6 : 0.25}
                  glareSize={260}
                  className="place-items-stretch!"
                >
                  <div className={`flex h-full flex-col p-7 ${entry ? 'text-mata-900' : 'text-palha'}`}>
                    <div className="flex items-center justify-between">
                      <Icon size={22} strokeWidth={1.5} className={entry ? 'text-mata-900' : 'text-broto'} />
                      {entry && (
                        <span className="rounded-full bg-mata-900 px-2.5 py-1 font-mono text-[10px] tracking-widest text-broto uppercase">
                          Porta de entrada
                        </span>
                      )}
                    </div>
                    <p className="mt-8 font-display text-2xl">{b.who}</p>
                    <ul className="mt-5 space-y-3 text-[14px] leading-snug">
                      {b.items.map(it => (
                        <li key={it} className="flex gap-2.5">
                          <span className={`mt-[7px] size-1.5 shrink-0 rounded-full ${entry ? 'bg-mata-900' : 'bg-broto'}`} />
                          <span className={entry ? 'text-mata-900/80' : 'text-palha/70'}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlareHover>
              </AnimatedContent>
            );
          })}
        </div>

        {/* Diferenciais */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow text-musgo">Diferenciais</span>
            <h3 className="mt-5 font-display text-4xl leading-[1.05] text-mata-900 sm:text-5xl">
              A estrutura que vem <em className="font-light text-musgo">antes do marketplace.</em>
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((d, i) => (
              <AnimatedContent key={d.title} distance={40} delay={i * 0.08} className="h-full">
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

        {/* Potencial de escala */}
        <div className="mt-14 flex flex-col gap-6 rounded-[var(--radius-card)] border border-areia bg-palha-50 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-musgo uppercase">Potencial de escala</p>
            <p className="mt-2 font-display text-2xl text-mata-900">Para onde o VerdAgro pode crescer</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {expansion.map(e => (
              <li
                key={e}
                className="group inline-flex items-center gap-1.5 rounded-full border border-areia px-4 py-2 text-sm text-tinta-soft transition-colors hover:border-musgo hover:text-musgo"
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
