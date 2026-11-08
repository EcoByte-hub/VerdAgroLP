import { Check, Satellite, Sparkles } from 'lucide-react';

/** Gera valores determinísticos para o "NDVI" demonstrativo. */
function ndvi(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const NDVI_COLORS = ['#1f4a35', '#2e5e43', '#4f8a5b', '#7fb35f', '#c5f25c'];

const PROPERTY =
  'M118 170 L248 120 L380 150 L438 252 L404 372 L292 420 L168 392 L104 290 Z';

const CONTOURS = [
  'M-20 80 C 90 40, 200 110, 300 70 S 480 20, 580 70',
  'M-20 140 C 80 110, 180 180, 300 140 S 470 90, 580 140',
  'M-20 470 C 120 430, 210 500, 330 460 S 480 420, 580 470',
  'M-20 520 C 110 490, 220 560, 340 515 S 500 480, 580 520',
  'M470 -20 C 430 100, 520 200, 480 300 S 520 470, 500 580',
  'M40 -20 C 70 90, 10 200, 50 300 S 20 470, 60 580',
];

export default function HeroMap() {
  const cells: { x: number; y: number; c: string; o: number }[] = [];
  const size = 28;
  for (let y = 100; y < 440; y += size) {
    for (let x = 90; x < 460; x += size) {
      const v = ndvi(x * 7 + y * 13);
      // gradiente do centro para a borda + ruído
      const d = Math.hypot(x - 280, y - 270) / 220;
      const score = Math.min(0.999, Math.max(0, v * 0.55 + (1 - d) * 0.6));
      cells.push({ x, y, c: NDVI_COLORS[Math.floor(score * NDVI_COLORS.length)], o: 0.55 + v * 0.4 });
    }
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Cartão do mapa */}
      <div className="grain absolute inset-0 overflow-hidden rounded-[2rem] bg-mata-900 shadow-[0_40px_80px_-30px_rgba(8,24,15,0.7)] ring-1 ring-mata-700">
        <svg viewBox="0 0 560 560" className="absolute inset-0 size-full" role="img" aria-label="Mapa demonstrativo de uma propriedade de 200 hectares com índice de vegetação">
          <defs>
            <clipPath id="va-prop">
              <path d={PROPERTY} />
            </clipPath>
            <pattern id="va-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="#1f4a35" strokeWidth="0.6" />
            </pattern>
          </defs>

          <rect width="560" height="560" fill="url(#va-grid)" />

          {CONTOURS.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="#1f4a35" strokeWidth="1.2" />
          ))}

          {/* rio */}
          <path
            d="M-10 330 C 60 320, 90 360, 120 410 S 180 520, 230 580"
            fill="none"
            stroke="#3c7d8f"
            strokeOpacity="0.55"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* NDVI recortado pelos limites da propriedade */}
          <g clipPath="url(#va-prop)">
            {cells.map((cell, i) => (
              <rect
                key={i}
                x={cell.x}
                y={cell.y}
                width={size - 2}
                height={size - 2}
                rx="3"
                fill={cell.c}
                opacity={cell.o}
              />
            ))}
          </g>

          {/* Limite da propriedade (desenhado) */}
          <path
            d={PROPERTY}
            fill="none"
            stroke="#c5f25c"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeDasharray="1400"
            strokeDashoffset="1400"
            style={{ animation: 'va-dash 2.6s var(--ease-brota) 0.4s forwards' }}
          />
          {/* vértices */}
          {PROPERTY.match(/\d+ \d+/g)!.map((pt, i) => {
            const [x, y] = pt.split(' ').map(Number);
            return <circle key={i} cx={x} cy={y} r="4" fill="#0e2a1f" stroke="#c5f25c" strokeWidth="2" />;
          })}

          {/* Área de projeto proposta (estimativa → tracejado) */}
          <path
            d="M300 200 L392 222 L404 312 L330 340 L282 290 Z"
            fill="#e39a75"
            fillOpacity="0.08"
            stroke="#e39a75"
            strokeWidth="1.8"
            strokeDasharray="6 6"
          />

          {/* Coordenadas */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#4f8a5b" letterSpacing="1">
            <text x="24" y="34">LAT -17.7923</text>
            <text x="24" y="50">LON -50.9192</text>
            <text x="440" y="540">ESC 1:25.000</text>
          </g>
        </svg>

        {/* Linha de varredura do satélite */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-broto/10 to-broto/30"
          style={{ animation: 'va-scan 5s linear infinite' }}
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 bottom-0 h-px bg-broto/70" />
        </div>

        {/* Pin */}
        <div className="absolute top-[47%] left-[49%]" aria-hidden="true">
          <span className="absolute -inset-2 rounded-full bg-broto/60" style={{ animation: 'va-pulse 2s ease-out infinite' }} />
          <span className="relative block size-3 rounded-full bg-broto ring-4 ring-mata-900" />
        </div>

        <div className="absolute top-5 right-5 flex items-center gap-2 rounded-full bg-mata-950/70 px-3 py-1.5 font-mono text-[10px] tracking-widest text-broto uppercase backdrop-blur">
          <Satellite size={12} /> Sentinel · NDVI
        </div>
      </div>

      {/* Cartão flutuante: propriedade */}
      <div
        className="absolute -bottom-6 -left-2 w-[200px] rounded-2xl border border-areia bg-palha-50 p-4 shadow-[0_24px_50px_-20px_rgba(8,24,15,0.5)] sm:-left-10 sm:w-[240px]"
        style={{ animation: 'va-float 6s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-widest text-tinta-soft uppercase">Propriedade</span>
          <span className="tag-demo text-tinta-soft">Demo</span>
        </div>
        <p className="mt-2 font-display text-xl leading-tight font-medium text-tinta">Fazenda Boa Vista</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-xl bg-areia/60 p-2">
            <p className="text-tinta-soft">Área</p>
            <p className="font-semibold text-tinta">200 ha</p>
          </div>
          <div className="rounded-xl bg-areia/60 p-2">
            <p className="text-tinta-soft">Cultura</p>
            <p className="font-semibold text-tinta">Soja · Milho</p>
          </div>
        </div>
      </div>

      {/* Cartão flutuante: diagnóstico IA */}
      <div
        className="absolute -top-6 -right-2 w-[210px] rounded-2xl border border-mata-700 bg-mata-800/95 p-4 text-palha shadow-[0_24px_50px_-20px_rgba(8,24,15,0.7)] backdrop-blur sm:-right-8 sm:w-[250px]"
        style={{ animation: 'va-float 7s ease-in-out 1s infinite' }}
      >
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-broto uppercase">
          <Sparkles size={12} /> Diagnóstico IA
        </div>
        <ul className="mt-3 space-y-2 text-[13px]">
          {['Plantio direto', 'Rotação de culturas', 'Cobertura de solo'].map((p, i) => (
            <li key={p} className="flex items-center gap-2">
              <span
                className={`inline-flex size-4 items-center justify-center rounded-full ${
                  i < 2 ? 'bg-broto text-mata-900' : 'border border-dashed border-cerrado-300'
                }`}
              >
                {i < 2 && <Check size={10} strokeWidth={3} />}
              </span>
              <span className={i < 2 ? '' : 'text-palha/70'}>{p}</span>
            </li>
          ))}
        </ul>
        <span className="tag mt-3 border border-dashed border-cerrado-300 text-cerrado-300">Oportunidade · preliminar</span>
      </div>
    </div>
  );
}
