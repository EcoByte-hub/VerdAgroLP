import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../brand/Logo';
import { nav } from '../../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`container-va flex items-center justify-between rounded-full py-2.5 pr-2.5 pl-4 transition-all duration-500 sm:pl-5 ${
          scrolled || open
            ? 'border border-areia/80 bg-palha-50/80 shadow-[0_8px_30px_-12px_rgba(14,42,31,0.25)] backdrop-blur-xl'
            : 'border border-transparent'
        }`}
        aria-label="Navegação principal"
      >
        <a href="#topo" aria-label="VerdAgro, voltar ao topo">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-tinta-soft transition-colors hover:bg-mata-900/5 hover:text-tinta"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contato" className="btn-primary hidden px-5! py-2.5! text-sm sm:inline-flex">
            Conheça o projeto
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-tinta hover:bg-mata-900/5 lg:hidden"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-va mt-2 rounded-[var(--radius-card)] border border-areia bg-palha-50/95 p-3 shadow-xl backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {nav.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-medium text-tinta hover:bg-areia/50"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#contato" onClick={() => setOpen(false)} className="btn-primary w-full">
                Conheça o projeto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
