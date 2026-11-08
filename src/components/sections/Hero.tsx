import { ArrowDownRight, ArrowRight } from 'lucide-react';
import SplitText from '../reactbits/SplitText/SplitText';
import ShinyText from '../reactbits/ShinyText/ShinyText';
import RotatingText from '../reactbits/RotatingText/RotatingText';
import Magnet from '../reactbits/Magnet/Magnet';
import HeroMap from './HeroMap';

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 lg:pb-32">
      {/* grade topográfica com fade */}
      <div
        className="bg-grid pointer-events-none absolute inset-0 text-mata-900 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 -right-40 size-[620px] rounded-full bg-broto/25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-va relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-mata-900/10 bg-palha-50/70 py-1.5 pr-4 pl-1.5 backdrop-blur">
            <span className="rounded-full bg-mata-900 px-2.5 py-1 font-mono text-[10px] font-medium tracking-widest text-broto uppercase">
              HackBrasil
            </span>
            <ShinyText
              text="Economia Verde · AgTech + ClimateTech"
              color="#44524a"
              shineColor="#0e2a1f"
              speed={3}
              className="text-[13px] font-semibold"
            />
          </div>

          <h1 className="mt-8 text-[clamp(3rem,8vw,6.5rem)] text-mata-900">
            <SplitText
              text="Do campo ao"
              tag="span"
              className="h-display block font-normal"
              textAlign="left"
              splitType="chars"
              delay={35}
              duration={1}
              trigger="load"
              mask
            />
            <SplitText
              text="crédito de carbono."
              tag="span"
              className="h-display block font-light italic text-musgo"
              textAlign="left"
              splitType="chars"
              delay={35}
              duration={1}
              trigger="load"
              mask
              hoverEffect="wave"
            />
          </h1>

          <p className="lead mt-8 max-w-xl">
            Inteligência ambiental e marketplace que conecta{' '}
            <RotatingText
              texts={['produtores rurais', 'cooperativas', 'empresas compradoras']}
              mainClassName="inline-flex overflow-hidden rounded-lg bg-mata-900 px-2 py-0.5 align-bottom font-semibold text-broto"
              staggerDuration={0.02}
              rotationInterval={2600}
              effect="slide"
            />{' '}
            ao mercado de carbono, com IA, mapas e rastreabilidade de ponta a ponta.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnet padding={60} magnetStrength={3}>
              <a href="#diagnostico" className="btn-primary group">
                Ver o diagnóstico
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnet>
            <a href="#solucao" className="btn-ghost text-mata-900">
              Como funciona <ArrowDownRight size={18} />
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-mata-900/10 pt-6">
            {[
              ['2', 'públicos, um ecossistema'],
              ['6', 'módulos integrados'],
              ['8', 'estágios rastreados'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-4xl text-mata-900">{n}</dd>
                <dd className="mt-1 text-xs leading-snug text-tinta-soft">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="px-4 sm:px-10 lg:px-4">
          <HeroMap />
        </div>
      </div>
    </section>
  );
}
