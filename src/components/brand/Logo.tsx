type LogoProps = {
  variant?: 'positive' | 'negative';
  className?: string;
  showWordmark?: boolean;
};

/**
 * Símbolo VerdAgro: folha formada por linhas de plantio (talhão visto de cima).
 */
export function LogoMark({ variant = 'positive', className = 'size-9' }: Omit<LogoProps, 'showWordmark'>) {
  const bg = variant === 'positive' ? '#0e2a1f' : '#c5f25c';
  const leaf = variant === 'positive' ? '#c5f25c' : '#0e2a1f';
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill={bg} />
      <path d="M14 50C14 30 28 14 50 14c0 22-16 36-36 36Z" fill={leaf} />
      <path d="M14 50 40 24M22 50l18-18M14 42l18-18" stroke={bg} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ variant = 'positive', className = '', showWordmark = true }: LogoProps) {
  const text = variant === 'positive' ? 'text-tinta' : 'text-palha';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark variant={variant} />
      {showWordmark && (
        <span className={`font-display text-[1.6rem] leading-none tracking-[-0.03em] ${text}`}>
          <span className="font-semibold">Verd</span>
          <span className="italic font-normal">Agro</span>
        </span>
      )}
    </span>
  );
}
