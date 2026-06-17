import { Sparkles, Building2, User, TrendingUp } from 'lucide-react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-b from-slate-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full mb-4 sm:mb-6">
            <span className="text-[12px] text-slate-700 font-semibold tracking-tight">
              Ecossistema
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-tight text-slate-900 mb-3 sm:mb-4 px-4">
            Uma plataforma, múltiplas soluções
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-slate-600 max-w-2xl mx-auto px-4">
            Módulos inteligentes que se conectam para automatizar toda a operação fiscal e financeira da sua empresa
          </p>
        </div>

        {/* Ecosystem modules */}
        <div className="space-y-4 max-w-4xl mx-auto">

          {/* Prático */}
          <div className="group bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-5 sm:p-6 lg:p-8 hover:bg-white hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="relative mt-1 flex-shrink-0">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-[#188FC3] to-[#0F7FB0] flex items-center justify-center shadow-lg shadow-[rgba(24,143,195,0.20)] group-hover:shadow-[rgba(24,143,195,0.30)] transition-shadow">
                  <Building2 className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={2.5} />
                  <div className="absolute -inset-1 bg-gradient-to-br from-[rgba(24,143,195,0.2)] to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-slate-900 tracking-tight">Prático Tributário</h3>
                  <div className="px-2.5 py-1 bg-blue-50 rounded-md">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-blue-700 uppercase tracking-wide">Empresas</span>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] text-slate-600">
                  Identifique erros fiscais, inconsistências tributárias e oportunidades de recuperação antes que gerem prejuízos financeiros. A plataforma mostra o problema, o impacto, como corrigir e onde agir.
                </p>
              </div>

              {/* Subtle indicator */}
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tax MEI */}
          <div className="group bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-5 sm:p-6 lg:p-8 hover:bg-white hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="relative mt-1 flex-shrink-0">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-shadow">
                  <User className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={2.5} />
                  <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-slate-900 tracking-tight">Prático MEI</h3>
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">MEI</span>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] text-slate-600">
                  Gestão simplificada para MEIs e pequenos empreendedores. Controle faturamento, DAS, limite anual, obrigações fiscais e indicadores do negócio em um único aplicativo.
                </p>
              </div>

              {/* Subtle indicator */}
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Lucrum.IA */}
          <div className="group bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-5 sm:p-6 lg:p-8 hover:bg-white hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="relative mt-1 flex-shrink-0">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-shadow">
                  <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={2.5} />
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-400/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-slate-900 tracking-tight">Prático Financeiro</h3>
                  <div className="px-2.5 py-1 bg-purple-50 rounded-md">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-purple-700 uppercase tracking-wide">Financeiro</span>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] text-slate-600">
                  Centralize indicadores financeiros, lançamentos, fluxo de caixa e análises inteligentes em uma única plataforma. Receba alertas, previsões e recomendações para melhorar a saúde financeira do negócio.
                </p>
              </div>

              {/* Subtle indicator */}
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle connector */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-50 border border-slate-200/60 rounded-xl">
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-slate-600 flex-shrink-0" strokeWidth={2.5} />
            <span className="text-[12px] sm:text-[13px] text-slate-700 font-medium">
              Totalmente integrados e potencializados por IA
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
