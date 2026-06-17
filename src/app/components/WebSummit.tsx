import React from 'react';
import logoImg from '@/imports/image-8.png';
import logoSymbol from '@/imports/image-6.png';
import logoFooter from '@/imports/image-11.png';
import { CheckCircle2, MessageSquare, Headphones, TrendingUp, Building2, Users, BarChart3, ChevronRight, Phone, Mail, Linkedin, Globe, Zap, Search, Scale, Wrench, ArrowUpRight, type LucideIcon } from 'lucide-react';

/* Tiny sparkline SVG for Mercado card */
function SparkLine() {
  return (
    <svg viewBox="0 0 120 40" className="w-full h-10" fill="none">
      <polyline
        points="0,35 15,28 30,30 45,20 60,22 75,12 90,8 105,5 120,2"
        stroke="#188FC3"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="0,35 15,28 30,30 45,20 60,22 75,12 90,8 105,5 120,2 120,40 0,40"
        fill="url(#sparkGrad)"
        opacity="0.18"
      />
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#188FC3" />
          <stop offset="100%" stopColor="#188FC3" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Small QR code made from SVG rects */
function QRCode() {
  const cells = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1],
    [0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0],
    [1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1],
    [0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1],
    [1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0],
    [1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1],
  ];
  const size = 4;
  return (
    <svg viewBox={`0 0 ${cells[0].length * size} ${cells.length * size}`} className="w-20 h-20">
      {cells.map((row, r) => row.map((cell, c) =>
        cell ? <rect key={`${r}-${c}`} x={c * size} y={r * size} width={size} height={size} fill="#1a1a2e" /> : null
      ))}
    </svg>
  );
}

function VisionStep({ label, last, children }: { label: string; last: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 24 24" fill="none" stroke="#188FC3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">{children}</svg>
        <span className="text-[8.5px] text-slate-600 text-center whitespace-nowrap">{label}</span>
      </div>
      {!last && (
        <svg viewBox="0 0 16 10" className="w-4 h-2.5 flex-shrink-0 mb-3" fill="none">
          <path d="M1,5 L13,5 M10,2 L13,5 L10,8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
}

function StatCard({ Icon, num, label }: { Icon: LucideIcon; num: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5 bg-[#EEF6FB] border border-[#DCEFFC] rounded-xl p-3">
      <Icon className="w-5 h-5 text-[#188FC3]" />
      <div className="text-[20px] font-black text-[#0A7FB5] leading-none">{num}</div>
      <div className="text-[10px] text-slate-500 leading-snug">{label}</div>
    </div>
  );
}

function MobileOrbCard({ Icon, label, desc }: { Icon: LucideIcon; label: string; desc: string }) {
  return (
    <div className="bg-white border border-[#BCDBF0] rounded-xl shadow-sm p-3">
      <Icon className="w-5 h-5 text-[#0A7FB5] mb-1.5" />
      <div className="text-[9px] font-bold text-[#188FC3] uppercase tracking-widest">Prático</div>
      <div className="text-[13px] font-bold text-slate-900 mb-1">{label}</div>
      <p className="text-[9.5px] text-slate-500 leading-snug">{desc}</p>
    </div>
  );
}

function ProductCard({ color, label, Icon, desc, tags, note }: {
  color: string; label: string; Icon: LucideIcon;
  desc: string; tags: string[]; note?: string;
}) {
  return (
    <div className="p-4 flex flex-col gap-2 border-l border-slate-100">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="text-[9px] font-bold uppercase tracking-widest" style={{ color }}>Prático</div>
      <div className="text-[12px] font-bold text-slate-900">{label}</div>
      <p className="text-[10px] text-slate-500 leading-snug flex-1">{desc}</p>
      <div className="space-y-1">
        {tags.map((t, ti) => (
          <div key={ti} className="flex items-center gap-1.5">
            <CheckCircle2 className="w-2.5 h-2.5 flex-shrink-0" style={{ color }} />
            <span className="text-[9px] text-slate-500">{t}</span>
          </div>
        ))}
      </div>
      {note && <p className="text-[8.5px] text-slate-400 italic border-t border-slate-100 pt-1.5">{note}</p>}
      <div className="flex items-center gap-1 mt-auto pt-1">
        <span className="text-[9px] font-semibold text-[#188FC3]">Saiba mais</span>
        <ArrowUpRight className="w-3 h-3 text-[#188FC3]" />
      </div>
    </div>
  );
}

export default function WebSummit() {
  return (
    <div className="min-h-screen bg-[#EEF6FB] text-slate-800 overflow-x-hidden">

      {/* ═══════════ TOP BAR — brand only ═══════════ */}
      <div className="bg-white border-b border-slate-100 px-6 sm:px-10 py-3 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-5">
        <img src={logoImg} alt="Prático Digital" className="h-10 sm:h-11 w-auto object-contain" />
        <div className="hidden sm:block w-px h-7 bg-slate-200 flex-shrink-0" />
        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] text-center sm:text-left">
          AI-Native Fiscal &amp; Financial Operations
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 py-3 space-y-2.5">

        {/* ═══════════ ROW 1: HEADLINE + ECOSSISTEMA ═══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-2.5">

          {/* Left: Headline + Stats */}
          <div className="bg-white rounded-xl border border-slate-100 p-5 sm:p-6">
            <h1 className="mb-3 leading-[1.1] tracking-[-0.02em]">
              <span className="block text-[28px] sm:text-[36px] lg:text-[42px] text-slate-900">Encontramos o <span className="text-[#188FC3]">problema</span>.</span>
              <span className="block text-[28px] sm:text-[36px] lg:text-[42px] text-slate-900">Medimos o <span className="text-[#188FC3]">impacto</span>.</span>
              <span className="block text-[28px] sm:text-[36px] lg:text-[42px] text-slate-900">Mostramos como <span className="text-[#188FC3]">resolver</span>.</span>
            </h1>
            <p className="text-[12px] text-slate-500 leading-relaxed mb-5 max-w-xl">
              Plataforma de inteligência operacional que transforma dados fiscais e financeiros em decisões seguras e resultados reais.
            </p>

            {/* Market stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <StatCard Icon={Building2}  num="24,2 mi"   label="Empresas potencialmente expostas a riscos operacionais tributários" />
              <StatCard Icon={Users}      num="16,1 mi"   label="MEIs ativos no Brasil (+18 mi novos MEIs em 2025)" />
              <StatCard Icon={BarChart3}  num="18 mil+"   label="Escritórios contábeis processando rotinas fiscais mensalmente" />
              <StatCard Icon={TrendingUp} num="R$ 233 bi" label="Em autuações aplicadas pela Receita Federal em 2024" />
            </div>
          </div>

          {/* Right: Ecossistema — orbital layout */}
          <div className="relative bg-white rounded-xl border border-[#BCDBF0] shadow-sm pt-7 pb-4 px-3">

            {/* Floating title pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0D2B45] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
              Nosso Ecossistema
            </div>

            {/* ── Desktop orbital layout ── */}
            <div className="hidden sm:block relative" style={{ height: '360px' }}>

              {/* SVG curved dashed arrows — drawn behind cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 620 360" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker id="eco-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                    <path d="M0,0.5 L0,6.5 L6,3.5 z" fill="#188FC3" />
                  </marker>
                </defs>
                {/* Tributário (right edge ~190,110) → Hub left tangent (285,158) */}
                <path d="M 190,110 C 245,72 280,118 285,158"
                  stroke="#188FC3" strokeWidth="1.5" strokeDasharray="5,4" fill="none"
                  markerEnd="url(#eco-arrow)" />
                {/* Financeiro (left edge ~430,110) → Hub right tangent (335,158) */}
                <path d="M 430,110 C 375,72 340,118 335,158"
                  stroke="#188FC3" strokeWidth="1.5" strokeDasharray="5,4" fill="none"
                  markerEnd="url(#eco-arrow)" />
                {/* Hub right (360,170) → MEI top center (340,258) — wide rightward arc clears center text */}
                <path d="M 360,170 C 460,175 460,248 340,258"
                  stroke="#188FC3" strokeWidth="1.5" strokeDasharray="5,4" fill="none"
                  markerEnd="url(#eco-arrow)" />
              </svg>

              {/* Tributário — top left */}
              <div className="absolute bg-white border border-[#BCDBF0] rounded-xl shadow-sm p-3" style={{ left: 8, top: 22, width: 182 }}>
                <Scale className="w-5 h-5 text-[#0A7FB5] mb-1.5" />
                <div className="text-[9px] font-bold text-[#188FC3] uppercase tracking-widest leading-none">Prático</div>
                <div className="text-[13px] font-bold text-slate-900 mb-1 leading-tight">Tributário</div>
                <p className="text-[9.5px] text-slate-500 leading-snug">Inteligência operacional tributária que identifica riscos, prioriza ações e orienta correções.</p>
              </div>

              {/* Financeiro — top right */}
              <div className="absolute bg-white border border-[#BCDBF0] rounded-xl shadow-sm p-3" style={{ right: 8, top: 22, width: 182 }}>
                <TrendingUp className="w-5 h-5 text-[#0A7FB5] mb-1.5" />
                <div className="text-[9px] font-bold text-[#188FC3] uppercase tracking-widest leading-none">Prático</div>
                <div className="text-[13px] font-bold text-slate-900 mb-1 leading-tight">Financeiro</div>
                <p className="text-[9.5px] text-slate-500 leading-snug">Inteligência financeira que transforma eventos fiscais em impacto financeiro e previsibilidade.</p>
              </div>

              {/* Central hub */}
              <div className="absolute flex flex-col items-center" style={{ left: '50%', top: 110, transform: 'translateX(-50%)' }}>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A7CB5] to-[#2BA8DF] flex items-center justify-center shadow-lg border-2 border-[#BCDBF0]">
                  <img src={logoSymbol} alt="Prático" className="w-12 h-12 object-contain" />
                </div>
                <p className="mt-2 text-center text-[9.5px] text-slate-600 leading-snug max-w-[150px]">
                  Integração fiscal, financeira e operacional com inteligência contextual.
                </p>
              </div>

              {/* MEI — bottom center */}
              <div className="absolute bg-white border border-[#BCDBF0] rounded-xl shadow-sm p-3" style={{ left: '50%', top: 258, transform: 'translateX(-50%)', width: 200 }}>
                <Users className="w-5 h-5 text-[#0A7FB5] mb-1.5" />
                <div className="text-[9px] font-bold text-[#188FC3] uppercase tracking-widest leading-none">Prático</div>
                <div className="text-[13px] font-bold text-slate-900 mb-1 leading-tight">MEI</div>
                <p className="text-[9.5px] text-slate-500 leading-snug">Copiloto Operacional do MEI que simplifica obrigações, evita erros e acompanha o crescimento.</p>
              </div>

            </div>

            {/* ── Mobile stacked layout ── */}
            <div className="sm:hidden flex flex-col gap-3">
              {/* Hub */}
              <div className="flex flex-col items-center gap-2 py-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A7CB5] to-[#2BA8DF] flex items-center justify-center shadow-lg border-2 border-[#BCDBF0]">
                  <img src={logoSymbol} alt="Prático" className="w-10 h-10 object-contain" />
                </div>
                <p className="text-center text-[10px] text-slate-600 leading-snug max-w-[200px]">
                  Integração fiscal, financeira e operacional com inteligência contextual.
                </p>
              </div>
              <MobileOrbCard Icon={Scale}      label="Tributário" desc="Inteligência operacional tributária que identifica riscos, prioriza ações e orienta correções." />
              <MobileOrbCard Icon={TrendingUp} label="Financeiro"  desc="Inteligência financeira que transforma eventos fiscais em impacto financeiro e previsibilidade." />
              <MobileOrbCard Icon={Users}      label="MEI"         desc="Copiloto Operacional do MEI que simplifica obrigações, evita erros e acompanha o crescimento." />
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            LINHA 1: DIFERENCIAL (3 cols) | CHAT IA | SUPORTE
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr_1fr] gap-2.5">

          {/* NOSSO DIFERENCIAL */}
          <div className="bg-[#0D2B45] rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-[#188FC3] rounded-full" />
              <span className="text-[10px] font-bold text-[rgba(255,255,255,0.7)] uppercase tracking-[0.15em]">Nosso Diferencial</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {([
                { Icon: Search,   n: '01', title: 'Encontramos',             desc: 'Riscos fiscais e financeiros antes que causem problemas.' },
                { Icon: Scale,    n: '02', title: 'Medimos',                 desc: 'O impacto financeiro real de cada problema com precisão.' },
                { Icon: BarChart3,n: '03', title: 'Priorizamos',             desc: 'Pelo critério de impacto financeiro e risco operacional.' },
                { Icon: Wrench,   n: '04', title: 'Mostramos onde resolver', desc: 'O processo, período e documento onde agir.' },
                { Icon: Zap,      n: '05', title: 'Mostramos como resolver', desc: 'O passo a passo para corrigir e prevenir reincidência.' },
              ] as Array<{ Icon: LucideIcon; n: string; title: string; desc: string }>).map((d, i) => (
                <div key={i} className="relative bg-[rgba(255,255,255,0.1)] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#188FC3] to-[#2BA8DF] flex items-center justify-center flex-shrink-0">
                      <d.Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[9px] font-bold text-[rgba(255,255,255,0.4)] tracking-widest">{d.n}</span>
                  </div>
                  <div className="text-[11px] font-bold text-white leading-tight mb-1">{d.title}</div>
                  <div className="text-[9.5px] text-[rgba(255,255,255,0.6)] leading-snug">{d.desc}</div>
                  {i < 4 && (
                    <ChevronRight className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-[rgba(24,143,195,0.6)] z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CHAT IA */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#188FC3] flex items-center justify-center mb-3 flex-shrink-0">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div className="text-[9px] font-bold text-[#188FC3] uppercase tracking-widest mb-0.5">Prático</div>
            <div className="text-[13px] font-bold text-slate-900 mb-2">Chat IA</div>
            <p className="text-[10px] text-slate-500 leading-snug flex-1">
              Tira dúvidas fiscais e financeiras com inteligência. Respostas contextualizadas ao negócio do cliente.
            </p>
            <div className="mt-3 space-y-1.5">
              {['Sugestão de objetivos','Explicações amplas e confiáveis','Orientação centralizada','Baseado nas regras oficiais'].map((t) => (
                <div key={t} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#188FC3] flex-shrink-0 mt-px" />
                  <span className="text-[9px] text-slate-500 leading-snug">{t}</span>
                </div>
              ))}
            </div>
            <p className="text-[8px] text-slate-400 italic mt-2 pt-2 border-t border-slate-100">A IA apoia decisões — não substitui regras oficiais.</p>
          </div>

          {/* SUPORTE ESPECIALIZADO */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#0A7FB5] flex items-center justify-center mb-3 flex-shrink-0">
              <Headphones className="w-4 h-4 text-white" />
            </div>
            <div className="text-[9px] font-bold text-[#188FC3] uppercase tracking-widest mb-0.5">Prático</div>
            <div className="text-[13px] font-bold text-slate-900 mb-2">Suporte Especializado</div>
            <p className="text-[10px] text-slate-500 leading-snug flex-1">
              Fale com especialistas quando precisar. Atendimento humano e consultivo para situações complexas.
            </p>
            <div className="mt-3 space-y-1.5">
              {['Especialistas tributários','Especialistas financeiros','Ajuda a encontrar a solução','Apoio em casos complexos'].map((t) => (
                <div key={t} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#0A7FB5] flex-shrink-0 mt-px" />
                  <span className="text-[9px] text-slate-500 leading-snug">{t}</span>
                </div>
              ))}
            </div>
            <p className="text-[8px] text-slate-400 italic mt-2 pt-2 border-t border-slate-100">Tecnologia quando possível. Especialistas quando necessário.</p>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════
            LINHA 2: NOSSOS PRODUTOS | TRIB | FIN | MEI | EXPANSÃO
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 bg-white rounded-xl border border-slate-100 overflow-hidden">

          {/* Intro */}
          <div className="p-4 flex flex-col gap-3">
            <div className="w-1 h-5 bg-[#188FC3] rounded-full" />
            <div className="text-[13px] font-bold text-slate-700 uppercase tracking-[0.1em] leading-tight">Nossos Produtos</div>
            <p className="text-[11px] text-slate-500 leading-relaxed flex-1">
              Um ecossistema composto por Prático Tributário, Prático Financeiro e Prático MEI, trabalhando de forma integrada para gerar inteligência operacional fiscal e financeira.
            </p>
          </div>

          {/* Tributário */}
          <ProductCard color="#0A7FB5" label="Tributário" Icon={Scale}
            desc="Inteligência Operacional Tributária. Identifica riscos, prioriza ações e orienta correções operacionais."
            tags={['Conferência fiscal','Reconciliação','Alertas de risco']} />

          {/* Financeiro */}
          <ProductCard color="#188FC3" label="Financeiro" Icon={TrendingUp}
            desc="Inteligência Financeira Operacional. Transforma eventos fiscais em impacto financeiro, projeções e previsibilidade."
            tags={['Impacto financeiro','Projeções','Previsibilidade']} />

          {/* MEI */}
          <ProductCard color="#1A92C6" label="MEI" Icon={Users}
            desc="Copiloto Operacional do MEI que simplifica obrigações, evita problemas e acompanha o crescimento."
            tags={['Obrigações fiscais','Alertas de risco','Crescimento seguro']} />

          {/* EXPANSÃO */}
          <div className="p-4 flex flex-col gap-2 border-l border-slate-100">
            <div className="w-7 h-7 rounded-lg bg-[#EEF6FB] border border-[#DCEFFC] flex items-center justify-center flex-shrink-0">
              <Zap className="w-3.5 h-3.5 text-[#188FC3]" />
            </div>
            <div className="text-[9px] font-bold text-[#188FC3] uppercase tracking-widest">Expansão</div>
            <div className="text-[12px] font-bold text-slate-900 leading-tight">Inteligência Operacional</div>
            <p className="text-[9.5px] text-slate-400 leading-snug flex-1">Novos módulos em roadmap para ampliar inteligência, automação e previsibilidade.</p>
            <div className="flex flex-wrap gap-1 mt-auto">
              {(['Automação','IA generativa','Projeção','BI','Multi-empresa','ERP','Compliance','API'] as const).map((label, i) => (
                <span key={i} className="text-[8px] bg-[#EEF6FB] border border-[#DCEFFC] text-slate-600 rounded px-1.5 py-0.5 whitespace-nowrap">{label}</span>
              ))}
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════
            LINHA 3: MERCADO | VISÃO | VAMOS CONVERSAR | QR
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.95fr] gap-2.5">

          {/* MERCADO EM MOVIMENTO */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col">
            <div className="mb-2">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-[0.08em]">Mercado em Movimento</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-snug mb-3">
              A demanda por inteligência fiscal e financeira nunca foi tão grande.
            </p>
            {/* Area chart — main visual element */}
            <div className="flex-1 min-h-[90px]">
              <svg viewBox="0 0 280 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#188FC3" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#188FC3" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d="M0,92 C20,88 35,85 50,80 C65,75 75,72 90,65 C105,58 115,54 130,46 C145,38 155,33 170,26 C185,19 195,14 210,10 C225,6 240,5 260,3 C265,2.5 270,2 280,1.5 L280,100 L0,100 Z"
                  fill="url(#areaGrad)"
                />
                {/* Line */}
                <path
                  d="M0,92 C20,88 35,85 50,80 C65,75 75,72 90,65 C105,58 115,54 130,46 C145,38 155,33 170,26 C185,19 195,14 210,10 C225,6 240,5 260,3 C265,2.5 270,2 280,1.5"
                  fill="none"
                  stroke="#188FC3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrow at end */}
                <polygon points="278,0 272,4 276,5" fill="#188FC3" />
              </svg>
            </div>
          </div>

          {/* NOSSA VISÃO */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col">
            <div className="mb-2">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-[0.08em]">Nossa Visão</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-snug mb-4">
              Ser a plataforma líder em inteligência operacional fiscal e financeira do Brasil, empoderando empresas e empreendedores a crescerem com segurança, previsibilidade e inteligência.
            </p>
            {/* Horizontal process flow */}
            <div className="flex items-start justify-between gap-1 mt-auto">
              <VisionStep label="Dados" last={false}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></VisionStep>
              <VisionStep label="Eventos" last={false}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></VisionStep>
              <VisionStep label="Inteligência" last={false}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 8A2.5 2.5 0 0 1 17 10.5v9a2.5 2.5 0 0 1-5 0v-9A2.5 2.5 0 0 1 14.5 8z"/><path d="M4.5 14A2.5 2.5 0 0 1 7 16.5v3a2.5 2.5 0 0 1-5 0v-3A2.5 2.5 0 0 1 4.5 14z"/></VisionStep>
              <VisionStep label="Decisão" last={false}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></VisionStep>
              <VisionStep label="Resultado" last={true}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></VisionStep>
            </div>
          </div>

          {/* VAMOS CONVERSAR */}
          <div className="bg-gradient-to-b from-[#0A7FB5] to-[#0D2B45] rounded-xl p-4 flex flex-col">
            <div className="text-[13px] font-bold text-white mb-1">Vamos conversar?</div>
            <p className="text-[10px] text-[rgba(255,255,255,0.75)] leading-snug mb-3">
              Transforme resultados com inteligência operacional fiscal e financeira.
            </p>
            <div className="space-y-2 flex-1">
              <a href="https://wa.me/5581999299696" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[rgba(37,211,102,0.2)] hover:bg-[rgba(37,211,102,0.3)] border border-[rgba(37,211,102,0.3)] rounded-lg px-2.5 py-2 transition-colors">
                <Phone className="w-3 h-3 text-[#25D366] flex-shrink-0" />
                <span className="text-[10px] font-semibold text-white">WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/company/pr%C3%A1tico-digital/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[rgba(10,102,194,0.2)] hover:bg-[rgba(10,102,194,0.3)] border border-[rgba(10,102,194,0.3)] rounded-lg px-2.5 py-2 transition-colors">
                <Linkedin className="w-3 h-3 text-[#4FC3F7] flex-shrink-0" />
                <span className="text-[10px] font-semibold text-white">LinkedIn</span>
              </a>
              <a href="mailto:contato@praticodigital.com"
                className="flex items-center gap-2 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] rounded-lg px-2.5 py-2 transition-colors">
                <Mail className="w-3 h-3 text-[rgba(255,255,255,0.8)] flex-shrink-0" />
                <span className="text-[10px] font-semibold text-white">E-mail</span>
              </a>
              <a href="https://www.praticodigital.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] rounded-lg px-2.5 py-2 transition-colors">
                <Globe className="w-3 h-3 text-[rgba(255,255,255,0.8)] flex-shrink-0" />
                <span className="text-[10px] font-semibold text-white">praticodigital.com</span>
              </a>
            </div>
          </div>


        </div>

      </div>

      {/* ═══════════ FOOTER ═══════════ */}
      <div className="bg-gradient-to-r from-[#0A7FB5] to-[#2BA8DF] mt-3 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <img src={logoFooter} alt="Prático Digital" className="h-7 w-auto" />
          <span className="text-[10px] text-[rgba(255,255,255,0.8)]">Inteligência operacional que encontra o problema, mede o impacto e mostra como resolver.</span>
        </div>
        <div className="text-[10px] text-[rgba(255,255,255,0.6)]">© 2025 Prático Digital. Todos os direitos reservados.</div>
      </div>

    </div>
  );
}
