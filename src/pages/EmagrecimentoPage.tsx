import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Activity,
  HeartPulse,
  Sparkles,
  Award,
} from 'lucide-react';
import {
  CLINIC_INFO,
  COMPARISON_ROWS,
  CONSOLIDATION_PHASES,
  DELIVERABLES,
  FAQ_ITEMS,
  HERO_DATA,
  PHASE1_CONSULTATIONS,
  PILLARS,
  TARGET_AUDIENCE,
} from '../data/emagrecimentoData';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { BioimpedanceChart } from '../components/BioimpedanceChart';

export const EmagrecimentoPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-brand-navy pb-20 sm:pb-0">
      {/* Header minimalista sem links de fuga */}
      <header className="bg-brand-navy border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <img
            src="/brand/logo-facelift-branco.png"
            alt="Dr. Cristiano Miranda"
            className="h-5 w-auto max-w-[200px] object-contain sm:h-7 sm:max-w-[290px]"
          />
          <div className="text-right">
            <p className="text-xs font-medium text-brand-gold-light sm:text-sm">
              {CLINIC_INFO.crm} | {CLINIC_INFO.rqe}
            </p>
            <p className="text-[11px] text-slate-300 sm:text-xs">
              Presencial (BH) e Online.
            </p>
          </div>
        </div>
      </header>

      {/* Dobra 1: Hero Editorial com Atmosfera de Consultório de Alto Padrão */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <img
            src="/brand/consultorio-integrativo.jpg"
            alt="Consultório do Dr. Cristiano Miranda em Belo Horizonte"
            className="h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/92 lg:via-brand-navy/82 to-brand-navy/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-brand-navy/35" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-navy/80 backdrop-blur-sm px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-brand-gold-light uppercase">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold-bright" />
              {HERO_DATA.eyebrow}
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-[42px] sm:leading-[1.15]">
              {HERO_DATA.headline}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
              {HERO_DATA.subheadline}
            </p>

            <blockquote className="mt-6 border-l-2 border-brand-gold-bright pl-4 text-sm italic text-brand-gold-light sm:text-base">
              {HERO_DATA.quote}
            </blockquote>

            <div className="mt-8">
              <WhatsAppCTA
                label="Quero saber como funciona o programa"
                location="hero_primary"
                variant="gold"
              />
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="h-4 w-4 text-brand-gold-bright shrink-0" />
                <span>
                  Tire dúvidas sobre horários em BH, atendimento online e condições do programa com nossa equipe.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de Autoridade Imediata logo abaixo da Hero */}
      <section className="bg-brand-navy-dark border-y border-brand-gold/20 text-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-brand-gold-bright shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">+25 anos de experiência médica</p>
              <p className="text-[11px] text-slate-300">Cardiologia, UTI e Medicina Esportiva</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-brand-gold-bright shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Bioimpedância e Exames Inclusos</p>
              <p className="text-[11px] text-slate-300">Foco real em perda de gordura e massa magra</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <HeartPulse className="h-5 w-5 text-brand-gold-bright shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Nutrição + Suporte Emocional</p>
              <p className="text-[11px] text-slate-300">Sono, ansiedade e dieta anti-inflamatória</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 2: Para quem é + 4 Pilares + Bloco Editorial de Nutrição & Metabolismo */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-brand-surface bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-brand-navy sm:text-2xl">
              Para quem o Programa de Emagrecimento Consciente foi desenhado?
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {TARGET_AUDIENCE.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 border border-brand-surface shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" />
                  <p className="text-sm leading-relaxed text-brand-slate">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-wider text-brand-slate uppercase">
                METODOLOGIA INTEGRATIVA
              </span>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
                Os 4 Pilares que atuam na causa real do sobrepeso
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate sm:text-base">
                Combinando o rigor da cardiologia esportiva com a medicina funcional integrativa, o
                programa respeita sua individualidade biológica.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="flex flex-col rounded-2xl border border-brand-surface bg-white p-6 shadow-sm transition hover:border-brand-navy/30"
                >
                  <span className="text-xs font-bold tracking-widest text-brand-gold">
                    PILAR {pillar.number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-brand-navy leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco Editorial: Ciência da Dieta Anti-inflamatória */}
          <div className="mt-14 grid gap-8 items-center lg:items-stretch rounded-3xl border border-brand-surface bg-slate-50 p-6 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-5 flex">
              <div className="overflow-hidden rounded-2xl shadow-md w-full h-72 sm:h-80 lg:h-full">
                <img
                  src="/brand/nutricao-metabolismo.jpg"
                  alt="Vitalidade, disposição e preservação muscular"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-wider text-brand-gold uppercase">
                CIÊNCIA METABÓLICA & PRESERVAÇÃO MUSCULAR
              </span>
              <h3 className="mt-2 text-2xl font-bold text-brand-navy">
                Desinflamar o organismo enquanto protege sua massa magra
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate sm:text-base">
                O sobrepeso atua como um estado de inflamação subclínica contínua. Iniciar com a
                Dieta Anti-inflamatória diminui citocinas inflamatórias, restabelece a sensibilidade
                hormonal e devolve vitalidade celular.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate sm:text-base">
                Ao mesmo tempo, a bioimpedância e a suplementação estratégica garantem que o corpo
                elimine gordura preservando a musculatura ativa — evitando a queda metabólica típica
                de dietas restritivas.
              </p>
              <BioimpedanceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 3: 1ª Fase - As 3 Consultas */}
      <section className="bg-slate-50 py-14 sm:py-20 border-y border-brand-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-wider text-brand-navy uppercase">
              1ª FASE DO PROGRAMA • PERDA DE PESO
            </span>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              Acompanhamento clínico rigoroso em cada etapa
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate sm:text-base">
              Avaliações laboratoriais detalhadas, bioimpedância e ajustes nutricionais para que a
              eliminação de gordura ocorra sem comprometer sua saúde cardiovascular ou massa magra.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PHASE1_CONSULTATIONS.map((step) => (
              <div
                key={step.badge}
                className={`rounded-2xl border border-brand-surface border-t-4 ${step.accentColor} bg-white p-6 shadow-sm`}
              >
                <span className="inline-block rounded-md bg-brand-navy/5 px-2.5 py-1 text-xs font-bold text-brand-navy">
                  {step.badge}
                </span>
                <h3 className="mt-3 text-xl font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-1 text-xs font-medium text-brand-slate">{step.subtitle}</p>
                <ul className="mt-5 space-y-2.5">
                  {step.items.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-brand-slate">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fases 2 e 3: Fim do efeito sanfona */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CONSOLIDATION_PHASES.map((cp) => (
              <div
                key={cp.phase}
                className="rounded-2xl border border-brand-navy/15 bg-white p-6 sm:p-8 shadow-sm"
              >
                <span className="text-xs font-bold tracking-wider text-brand-gold uppercase">
                  {cp.phase}
                </span>
                <h3 className="mt-2 text-xl font-bold text-brand-navy">{cp.title}</h3>
                <p className="mt-1 text-xs font-medium text-brand-slate">{cp.duration}</p>
                <ul className="mt-4 space-y-2">
                  {cp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-brand-slate">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center text-center">
            <WhatsAppCTA
              label="Conversar com nossa equipe sobre o meu caso"
              location="after_phases"
              variant="navy"
            />
            <p className="mt-2.5 text-xs text-brand-slate">
              Atendimento acolhedor para entender seus objetivos e explicar formatos e datas disponíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Dobra 4: Comparativo (Cards no Mobile, Tabela no Desktop) + Entregáveis */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-brand-slate uppercase">
              POR QUE É DIFERENTE
            </span>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              Métodos tradicionais vs. Emagrecimento Consciente
            </h2>
          </div>

          {/* Versão Mobile: Cards empilhados sem rolagem horizontal */}
          <div className="mt-8 space-y-4 md:hidden">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-brand-surface bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-brand-navy">{row.aspect}</p>
                <div className="mt-3 rounded-xl bg-slate-50 p-3 border border-brand-surface">
                  <span className="text-[10px] font-bold tracking-wider text-brand-slate uppercase">
                    Dietas Restritivas Comuns
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-brand-slate">{row.traditional}</p>
                </div>
                <div className="mt-2.5 rounded-xl bg-brand-navy/5 p-3 border border-brand-navy/15">
                  <span className="text-[10px] font-bold tracking-wider text-brand-navy uppercase">
                    Emagrecimento Consciente
                  </span>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-brand-navy">
                    {row.conscious}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Versão Desktop: Tabela comparativa */}
          <div className="mt-8 hidden md:block overflow-hidden rounded-2xl border border-brand-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="px-5 py-4 font-bold">Aspecto do Tratamento</th>
                  <th className="px-5 py-4 font-bold text-slate-300">Dietas Restritivas Comuns</th>
                  <th className="px-5 py-4 font-bold text-brand-gold-light">
                    Programa de Emagrecimento Consciente
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-surface">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="px-5 py-4 font-bold text-brand-navy">{row.aspect}</td>
                    <td className="px-5 py-4 text-brand-slate">{row.traditional}</td>
                    <td className="px-5 py-4 font-medium text-brand-navy">{row.conscious}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Entregáveis */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
              O que está incluso no ecossistema do programa
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {DELIVERABLES.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-surface bg-slate-50 p-6"
                >
                  <h4 className="text-base font-bold text-brand-navy">{item.title}</h4>
                  <p className="mt-2 text-sm text-brand-slate">{item.detail}</p>
                  <p className="mt-3 text-xs font-bold text-brand-navy">
                    Benefício: <span className="font-medium text-brand-slate">{item.benefit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 5: Autoridade Médica com Retrato Editorial Natural + Localização */}
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-brand-gold/30 shadow-2xl">
                <img
                  src="/brand/dr-cristiano-editorial.jpg"
                  alt="Dr. Cristiano Miranda com estetoscópio"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="text-xs font-bold tracking-wider text-brand-gold-light uppercase">
                DIREÇÃO MÉDICA E EXPERIÊNCIA
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {CLINIC_INFO.doctorName}
              </h2>
              <p className="mt-1 text-sm font-medium text-brand-gold-light">
                {CLINIC_INFO.crm} | {CLINIC_INFO.rqe} • {CLINIC_INFO.specialtyLine}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">
                Com mais de 25 anos de experiência médica, o Dr. Cristiano Miranda une sólida
                vivência em Terapia Intensiva (UTI) e Cardiologia Esportiva com formação em
                Medicina Funcional Integrativa, Psicologia e Terapia do Esquema — oferecendo um
                cuidado que enxerga metabolismo, coração e emoções como um único sistema.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 border border-white/10">
                  <Stethoscope className="h-5 w-5 text-brand-gold-bright shrink-0" />
                  <span className="text-xs text-slate-200">+25 anos de prática clínica</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 border border-white/10">
                  <HeartPulse className="h-5 w-5 text-brand-gold-bright shrink-0" />
                  <span className="text-xs text-slate-200">Cardiologia & UTI</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 border border-white/10">
                  <Activity className="h-5 w-5 text-brand-gold-bright shrink-0" />
                  <span className="text-xs text-slate-200">Medicina Esportiva</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <MapPin className="h-5 w-5 text-brand-gold-bright shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-white">Consultório</p>
                    <p className="mt-0.5">{CLINIC_INFO.address}</p>
                    <a
                      href={CLINIC_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-brand-gold-light underline hover:text-white"
                    >
                      Ver localização no Google Maps
                    </a>
                  </div>
                </div>

                <div className="shrink-0">
                  <WhatsAppCTA
                    label="Falar com a equipe no WhatsApp"
                    location="authority_card"
                    variant="gold"
                  />
                  <p className="mt-2 text-center text-[11px] text-slate-300">
                    Resposta rápida para dúvidas e agendamento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-brand-navy sm:text-3xl">
            Dúvidas frequentes sobre o programa
          </h2>

          <div className="mt-8 space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-brand-surface bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-brand-navy hover:bg-slate-50"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-slate transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-brand-surface bg-slate-50/50 px-5 py-4 text-sm leading-relaxed text-brand-slate">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rodapé com identificação médica obrigatória (CFM) */}
      <footer className="border-t border-brand-surface bg-slate-50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div>
            <p className="text-sm font-bold text-brand-navy">
              {CLINIC_INFO.doctorName} — {CLINIC_INFO.crm} | {CLINIC_INFO.rqe}
            </p>
            <p className="mt-1 text-xs text-brand-slate">{CLINIC_INFO.address}</p>
          </div>
          <p className="text-xs text-brand-slate">
            Conteúdo informativo conforme diretrizes do Conselho Federal de Medicina.
          </p>
        </div>
      </footer>

      {/* Barra fixa mobile para conversão em 1 toque */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-surface bg-white/95 p-3 backdrop-blur sm:hidden">
        <WhatsAppCTA
          label="Falar com a equipe no WhatsApp"
          location="mobile_sticky_bar"
          variant="gold"
          fullWidth
          className="py-3 text-sm"
        />
      </div>
    </div>
  );
};
