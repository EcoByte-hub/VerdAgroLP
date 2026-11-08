import Logo from '../brand/Logo';
import { nav } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-mata-950 py-16 text-palha">
      <div className="container-va">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo variant="negative" />
            <p className="mt-5 text-sm leading-relaxed text-palha/60">
              Plataforma de inteligência ambiental e comercialização de créditos de carbono no agronegócio.
            </p>
          </div>

          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-palha/70 transition-colors hover:text-broto">
                {n.label}
              </a>
            ))}
            <a href="#rastreabilidade" className="text-palha/70 transition-colors hover:text-broto">
              Rastreabilidade
            </a>
            <a href="#styleguide" className="text-palha/70 transition-colors hover:text-broto">
              Styleguide
            </a>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-mata-800 pt-8 text-xs text-palha/50 md:flex-row md:justify-between">
          <p>
            Projeto conceitual da equipe EcoByte para o HackBrasil. Dados e propriedades exibidos são demonstrativos.
          </p>
          <p>O VerdAgro não emite certificações de carbono.</p>
        </div>
      </div>
    </footer>
  );
}
