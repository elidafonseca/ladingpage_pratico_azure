import { Building2, User, TrendingUp, Check, Sparkles, ArrowRight, Zap, Wrench, Code2, Database } from 'lucide-react';

export default function NossosServicos() {
  return (
    <section id="servicos" className="relative bg-gradient-to-b from-white via-slate-50/30 to-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Cinematic atmospheric background */}
      <div className="absolute inset-0">
        {/* Primary gradient glow - top center */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-100/30 via-blue-50/20 to-transparent rounded-full blur-3xl" />

        {/* Secondary accent - left side */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-slate-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl" />

        {/* Tertiary accent - right side */}
        <div className="absolute top-2/3 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-50/25 via-transparent to-transparent rounded-full blur-3xl" />

        {/* Subtle top rim light */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-200/20 to-transparent" />

        {/* Floating subtle orbs for depth */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-tr from-blue-300/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full mb-6 sm:mb-8">
            <span className="text-[12px] text-slate-700 font-semibold tracking-tight">Nossos Serviços</span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] lg:text-[52px] leading-[1.1] tracking-tight text-slate-900 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Ecossistema modular orientado por IA
          </h2>

          <p className="text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.7] text-slate-600 max-w-2xl mx-auto px-4">
            Plataformas inteligentes que operam de forma independente ou combinada, escalando com as necessidades do seu negócio.
          </p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">

          {/* Prático Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-7 relative overflow-hidden hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow group">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#188FC3] to-[#0F7FB0] flex items-center justify-center shadow-lg shadow-[rgba(24,143,195,0.25)] group-hover:shadow-[rgba(24,143,195,0.35)] transition-shadow">
                <Building2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                <div className="absolute -inset-1 bg-gradient-to-br from-[rgba(24,143,195,0.3)] to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <h3 className="text-[26px] font-bold text-slate-900 tracking-tight">Prático Tributário</h3>
                <div className="px-2.5 py-1 bg-blue-50 rounded-md flex-shrink-0">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide">Empresas</span>
                </div>
              </div>
              <p className="text-[15px] leading-[1.75] text-slate-600">
                Identifique erros fiscais, inconsistências tributárias e oportunidades de recuperação antes que gerem prejuízos financeiros. A plataforma mostra o problema, o impacto, como corrigir e onde agir.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Análise fiscal automatizada</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Detecção de inconsistências</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Validação tributária</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Monitoramento operacional</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Apoio à conformidade fiscal</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5581999327339"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl transition-all text-[14px] font-semibold group/btn"
            >
              <span>Saiba mais</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Tax MEI Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-7 relative overflow-hidden hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow group">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/35 transition-shadow">
                <User className="w-7 h-7 text-white" strokeWidth={2.5} />
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <h3 className="text-[26px] font-bold text-slate-900 tracking-tight">Prático MEI</h3>
                <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex-shrink-0">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">MEI</span>
                </div>
              </div>
              <p className="text-[15px] leading-[1.75] text-slate-600">
                Gestão simplificada para MEIs e pequenos empreendedores. Controle faturamento, DAS, limite anual, obrigações fiscais e indicadores do negócio em um único aplicativo.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Emissão simplificada</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Controle de obrigações</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Gestão financeira básica</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Suporte fiscal inteligente</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Experiência simplificada</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5581999327339"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl transition-all text-[14px] font-semibold group/btn"
            >
              <span>Saiba mais</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Lucrum.IA Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-7 relative overflow-hidden hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow group">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            {/* AI Badge */}
            <div className="absolute top-7 right-7">
              <div className="px-2.5 py-1 bg-purple-50 border border-purple-100 rounded-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" strokeWidth={2.5} />
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">Integrável</span>
              </div>
            </div>

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/35 transition-shadow">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={2.5} />
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-400/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <h3 className="text-[26px] font-bold text-slate-900 tracking-tight">Prático Financeiro</h3>
                <div className="px-2.5 py-1 bg-purple-50 rounded-md flex-shrink-0">
                  <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">Financeiro</span>
                </div>
              </div>
              <p className="text-[15px] leading-[1.75] text-slate-600">
                Centralize indicadores financeiros, lançamentos, fluxo de caixa e análises inteligentes em uma única plataforma. Receba alertas, previsões e recomendações para melhorar a saúde financeira do negócio.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Organização financeira inteligente</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Indicadores automatizados</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Dashboards operacionais</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Insights financeiros</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Análises orientadas por IA</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5581999327339"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl transition-all text-[14px] font-semibold group/btn"
            >
              <span>Saiba mais</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Soluções Personalizadas Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-7 relative overflow-hidden hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow group">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center shadow-lg shadow-slate-500/25 group-hover:shadow-slate-500/35 transition-shadow">
                <Wrench className="w-7 h-7 text-white" strokeWidth={2.5} />
                <div className="absolute -inset-1 bg-gradient-to-br from-slate-600/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <div className="flex items-center flex-wrap gap-2.5 mb-3">
                <h3 className="text-[26px] font-bold text-slate-900 tracking-tight">Sob Medida</h3>
                
              </div>
              <p className="text-[15px] leading-[1.75] text-slate-600">
                Projetos sob medida para automação operacional, integrações corporativas, inteligência artificial e otimização de processos.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-slate-700" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Integrações com ERPs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-slate-700" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">APIs corporativas</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-slate-700" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Automação de processos</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-slate-700" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">IA aplicada à operação</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-slate-700" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-slate-600 leading-relaxed">Soluções sob demanda</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5581999327339"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl transition-all text-[14px] font-semibold group/btn"
            >
              <span>Saiba mais</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Ecosystem Integration Visualization */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-slate-900 tracking-tight mb-3 px-4">
              Configurações modulares do ecossistema
            </h3>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-slate-600 px-4">
              Combine plataformas de forma independente ou integrada, escalando conforme sua operação evolui
            </p>
          </div>

          {/* Visual Ecosystem Map */}
          <div className="relative">
            {/* Connection lines background - Hidden on mobile */}
            <div className="hidden md:block absolute inset-0 md:flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Line from Prático to Lucrum.IA */}
                <path d="M 200 150 Q 300 100, 400 150" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                {/* Line from Tax MEI to Lucrum.IA */}
                <path d="M 200 150 Q 300 200, 400 150" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0A7FB5" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Module nodes */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">

              {/* Prático Node */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200/60 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-gradient-to-br from-[#188FC3] to-[#0F7FB0] flex items-center justify-center shadow-sm shadow-[rgba(24,143,195,0.25)] flex-shrink-0">
                    <Building2 className="w-4 sm:w-5 h-4 sm:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-[15px] sm:text-[16px] font-bold text-slate-900">Prático Tributário</div>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Automação fiscal completa
                </p>
              </div>

              {/* Lucrum.IA Node - Center Intelligence Layer */}
              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200/60 rounded-2xl p-5 sm:p-6 shadow-xl relative">
                {/* AI indicator */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-white" strokeWidth={2.5} />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Camada IA</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3 mt-2">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
                    <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-[15px] sm:text-[16px] font-bold text-slate-900">Prático Financeiro</div>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Inteligência financeira conectada
                </p>
              </div>

              {/* Tax MEI Node */}
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-200/60 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-sm flex-shrink-0">
                    <User className="w-4 sm:w-5 h-4 sm:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-[15px] sm:text-[16px] font-bold text-slate-900">Prático MEI</div>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Gestão simplificada para MEI
                </p>
              </div>

            </div>

            {/* Modular combinations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 md:mt-10">
              <div className="text-center p-3.5 bg-blue-50/40 border border-blue-100/60 rounded-xl hover:bg-blue-50/60 transition-colors">
                <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-1">Módulo único</div>
                <div className="text-[12px] text-slate-700 font-medium">Apenas Prático Tributário</div>
              </div>
              <div className="text-center p-3.5 bg-emerald-50/40 border border-emerald-100/60 rounded-xl hover:bg-emerald-50/60 transition-colors">
                <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1">Módulo único</div>
                <div className="text-[12px] text-slate-700 font-medium">Apenas Prático MEI</div>
              </div>
              <div className="text-center p-3.5 bg-purple-50/40 border border-purple-100/60 rounded-xl hover:bg-purple-50/60 transition-colors">
                <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wider mb-1">Camada IA</div>
                <div className="text-[12px] text-slate-700 font-medium">Apenas Prático Financeiro</div>
              </div>
              <div className="text-center p-3.5 bg-gradient-to-br from-blue-50/40 to-purple-50/40 border border-blue-100/60 rounded-xl hover:from-blue-50/60 hover:to-purple-50/60 transition-colors">
                <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Integrado</div>
                <div className="text-[12px] text-slate-700 font-medium">Prático Tributário + Financeiro</div>
              </div>
              <div className="text-center p-3.5 bg-gradient-to-br from-emerald-50/40 to-purple-50/40 border border-emerald-100/60 rounded-xl hover:from-emerald-50/60 hover:to-purple-50/60 transition-colors">
                <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Integrado</div>
                <div className="text-[12px] text-slate-700 font-medium">Prático MEI + Financeiro</div>
              </div>
              <div className="text-center p-3.5 bg-slate-100/80 border border-slate-200/60 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Enterprise</div>
                <div className="text-[12px] text-slate-700 font-medium">Soluções customizadas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl px-10 py-12 relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-300" strokeWidth={2.5} />
                <span className="text-[12px] text-white/90 font-semibold tracking-tight">
                  Acesso Antecipado
                </span>
              </div>

              <h3 className="text-[36px] font-bold text-white mb-4 tracking-tight leading-tight">
                Configure seu ecossistema inteligente
              </h3>

              <p className="text-[16px] text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto">
                Entre em contato para conhecer as plataformas e configurar a solução ideal para sua operação
              </p>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://wa.me/5581999327339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 rounded-xl transition-all shadow-lg hover:shadow-xl font-semibold text-[15px] inline-flex items-center gap-2 group"
                >
                  <span>Falar com especialista</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/5581999327339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 text-white hover:bg-white/10 rounded-xl transition-all font-semibold text-[15px] border border-white/20 hover:border-white/30"
                >
                  Conhecer o ecossistema
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
