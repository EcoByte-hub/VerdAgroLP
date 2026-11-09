import { ArrowRight, FolderGit2 } from 'lucide-react';
import StarBorder from '../reactbits/StarBorder/StarBorder';
import Magnet from '../reactbits/Magnet/Magnet';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent';
import { LogoMark } from '../brand/Logo';

const REPO = 'https://github.com/EcoByte-hub/VerdAgroLP';

export default function CTA() {
  return (
    <section id="contato" className="relative bg-palha pb-24 sm:pb-28">
      <div className="container-va">
        <AnimatedContent distance={60} scale={0.97} duration={1}>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-broto px-6 py-16 text-mata-900 sm:px-14 sm:py-24">
            <div className="bg-grid pointer-events-none absolute inset-0 text-mata-900 opacity-[0.07]" aria-hidden="true" />
            <LogoMark
              variant="positive"
              className="pointer-events-none absolute -right-16 -bottom-16 size-[340px] rotate-12 opacity-[0.08] sm:size-[460px]"
            />

            <div className="relative max-w-4xl">
              <span className="eyebrow">Missão</span>
              <h2 className="h-display mt-6 text-[clamp(2.5rem,6vw,5.25rem)]">
                Transformar sustentabilidade em <em className="font-light">oportunidade econômica</em> no campo.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mata-900/75">
                Nossa visão é ser a infraestrutura digital de referência para gestão e comercialização de projetos
                ambientais no agronegócio brasileiro, começando pelo produtor que hoje está fora do mercado de carbono.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <StarBorder
                  as="a"
                  href={REPO}
                  target="_blank"
                  rel="noreferrer"
                  theme="dark"
                  backgroundColor="#0e2a1f"
                  textColor="#f3eee2"
                  borderColor="rgba(197,242,92,0.25)"
                  color="#c5f25c"
                  radius={999}
                  duration={3.5}
                  sparkle
                  className="px-7! py-4! text-[15px] font-semibold"
                >
                  <FolderGit2 size={18} /> Ver repositório
                </StarBorder>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="#diagnostico" className="btn group border border-mata-900/25 hover:bg-mata-900/5">
                    Rever o diagnóstico
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnet>
              </div>
            </div>

            <div className="relative mt-16 flex flex-col gap-2 border-t border-mata-900/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-xl">
                Feito pela equipe <strong className="font-semibold">EcoByte</strong>
              </p>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase">HackBrasil · Economia Verde</p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
