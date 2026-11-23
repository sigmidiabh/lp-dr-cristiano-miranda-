import React, { useEffect, useRef, useState } from 'react';

export const BioimpedanceChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-6 rounded-2xl border border-brand-surface bg-white p-4 sm:p-5 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-brand-surface/70">
        <div>
          <p className="text-xs font-bold tracking-wide text-brand-navy uppercase">
            Evolução na Bioimpedância
          </p>
          <p className="text-[11px] text-brand-slate">
            Composição corporal ao longo das 3 fases do programa
          </p>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-medium">
          <span className="inline-flex items-center gap-1.5 text-brand-navy">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-navy" />
            Gordura corporal
          </span>
          <span className="inline-flex items-center gap-1.5 text-brand-navy">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-gold-bright" />
            Massa magra (preservada)
          </span>
        </div>
      </div>

      <div className="mt-3">
        <svg
          viewBox="0 0 480 184"
          className="w-full h-auto overflow-visible"
          role="img"
          aria-label="Gráfico ilustrativo mostrando redução gradual de gordura corporal e preservação da massa muscular nas fases do programa"
        >
          <defs>
            <linearGradient id="fatAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b2548" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#0b2548" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Linhas de grade sutis */}
          {[28, 64, 100, 136].map((yPos) => (
            <line
              key={yPos}
              x1="18"
              y1={yPos}
              x2="462"
              y2={yPos}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          ))}

          {/* Área sob a curva de gordura */}
          <path
            d="M 24 40 C 115 44, 175 86, 250 106 C 325 124, 385 128, 456 130 L 456 140 L 24 140 Z"
            fill="url(#fatAreaGrad)"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 900ms ease-out 300ms',
            }}
          />

          {/* Curva de Gordura Corporal (descendente) */}
          <path
            d="M 24 40 C 115 44, 175 86, 250 106 C 325 124, 385 128, 456 130"
            fill="none"
            stroke="#0b2548"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: 480,
              strokeDashoffset: visible ? 0 : 480,
              transition: 'stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />

          {/* Curva de Massa Magra (preservada e estável) */}
          <path
            d="M 24 92 C 115 90, 180 82, 250 78 C 325 74, 385 72, 456 70"
            fill="none"
            stroke="#FFB81F"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: 480,
              strokeDashoffset: visible ? 0 : 480,
              transition: 'stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1) 200ms',
            }}
          />

          {/* Marcadores finais */}
          <g
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 400ms ease-out 1200ms',
            }}
          >
            <circle cx="456" cy="130" r="4.5" fill="#0b2548" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="456" cy="70" r="4.5" fill="#FFB81F" stroke="#ffffff" strokeWidth="1.5" />
          </g>

          {/* Rótulos das fases em 2 linhas para evitar sobreposição */}
          <text x="24" y="158" fontSize="10" fill="#4c5b71" fontWeight="600">
            Início
          </text>

          <text x="165" y="158" fontSize="10" fill="#4c5b71" fontWeight="700" textAnchor="middle">
            Fase 1
            <tspan x="165" dy="13" fontWeight="500" fontSize="9.5">
              Perda
            </tspan>
          </text>

          <text x="305" y="158" fontSize="10" fill="#4c5b71" fontWeight="700" textAnchor="middle">
            Fase 2
            <tspan x="305" dy="13" fontWeight="500" fontSize="9.5">
              Manutenção
            </tspan>
          </text>

          <text x="456" y="158" fontSize="10" fill="#0b2548" fontWeight="700" textAnchor="end">
            Fase 3
            <tspan x="456" dy="13" fontWeight="500" fontSize="9.5">
              Estabilização
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};
