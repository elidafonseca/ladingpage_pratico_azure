import { FileText, Sparkles, CheckCircle2, TrendingUp, Shield, Zap, AlertCircle } from 'lucide-react';

export default function Workflow() {
  return (
    <section className="relative bg-gradient-to-b from-[#041C32] via-[#063B5B] to-[#041C32] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Radial glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[rgba(11,92,122,0.2)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[rgba(6,59,91,0.3)] rounded-full blur-3xl" />

        {/* Accent particles */}
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full blur-sm" />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-cyan-400/30 rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-cyan-400/20 rounded-full blur-sm" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
            <span className="text-[12px] text-white/90 font-semibold tracking-tight">
              Automação Inteligente
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] lg:text-[52px] leading-[1.1] tracking-tight text-white mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
            Como a Prático funciona
          </h2>

          <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] text-slate-300 max-w-2xl mx-auto px-4">
            Sistemas tradicionais mostram informações. A Prático orienta decisões.
          </p>
        </div>

        {/* Workflow Visualization */}
        <div className="relative">

          {/* Connection lines - SVG - Hidden on mobile */}
          <div className="hidden lg:block absolute inset-0 lg:flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Flowing connection paths */}
              <path
                d="M 150 200 Q 300 180, 450 200"
                stroke="url(#gradient-flow-1)"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <path
                d="M 450 200 Q 600 180, 750 200"
                stroke="url(#gradient-flow-2)"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <path
                d="M 750 200 Q 900 180, 1050 200"
                stroke="url(#gradient-flow-3)"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.3"
              />

              <defs>
                <linearGradient id="gradient-flow-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient-flow-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient-flow-3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Workflow Steps */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 items-stretch">

            {/* Step 1: Capturamos os dados */}
            <div className="group h-full">
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all hover:scale-105 duration-300 flex flex-col">
                {/* Mini floating document card */}
                <div className="mb-6 relative h-32 flex-shrink-0">
                  <div className="absolute top-0 left-0 w-20 h-24 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg shadow-lg shadow-cyan-500/10 transform rotate-[-8deg] group-hover:rotate-[-12deg] transition-transform">
                    <div className="p-2 space-y-1">
                      <div className="h-1 bg-cyan-400/40 rounded w-3/4" />
                      <div className="h-1 bg-cyan-400/30 rounded w-1/2" />
                      <div className="h-1 bg-cyan-400/20 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-8 w-20 h-24 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg shadow-lg shadow-cyan-500/10 transform rotate-[4deg] group-hover:rotate-[8deg] transition-transform">
                    <div className="p-2 space-y-1">
                      <div className="h-1 bg-cyan-400/40 rounded w-2/3" />
                      <div className="h-1 bg-cyan-400/30 rounded w-3/4" />
                      <div className="h-1 bg-cyan-400/20 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="text-center mt-auto">
                  <h3 className="text-[15px] font-bold text-white mb-2">Capturamos os dados</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">
                    NF-e, CT-e, SPED, planilhas, ERPs e outras fontes fiscais.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Identificamos problemas */}
            <div className="group h-full">
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all hover:scale-105 duration-300 flex flex-col">
                <div className="mb-6 relative h-32 flex-shrink-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center relative overflow-hidden">
                      <Sparkles className="w-7 h-7 text-blue-400 relative z-10" strokeWidth={2.5} />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-pulse" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  </div>
                </div>

                <div className="text-center mt-auto">
                  <h3 className="text-[15px] font-bold text-white mb-2">Identificamos problemas</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">
                    Inconsistências tributárias, erros operacionais e riscos fiscais.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Calculamos impactos */}
            <div className="group h-full">
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all hover:scale-105 duration-300 flex flex-col">
                <div className="mb-6 relative h-32 flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-amber-400/30 rounded-xl p-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <div className="flex-1 space-y-1">
                        <div className="h-1 bg-amber-400/40 rounded w-full" />
                        <div className="h-1 bg-amber-400/30 rounded w-3/4" />
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <div className="flex-1 space-y-1">
                        <div className="h-1 bg-emerald-400/40 rounded w-full" />
                        <div className="h-1 bg-emerald-400/30 rounded w-2/3" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="text-center mt-auto">
                  <h3 className="text-[15px] font-bold text-white mb-2">Calculamos impactos</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">
                    Mostramos valores envolvidos, riscos e oportunidades.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Orientamos a correção */}
            <div className="group h-full">
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all hover:scale-105 duration-300 flex flex-col">
                <div className="mb-6 relative h-32 flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-3">
                    <div className="flex items-end justify-between gap-1 h-16 mb-2">
                      {[40, 60, 45, 75, 55, 85, 70, 90].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-emerald-500/60 to-emerald-400/40 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 font-semibold">+34%</span>
                      <TrendingUp className="w-3 h-3 text-emerald-400" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="text-center mt-auto">
                  <h3 className="text-[15px] font-bold text-white mb-2">Orientamos a correção</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">
                    Explicamos o que precisa ser feito e onde realizar o ajuste.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5: Acompanhamos a resolução */}
            <div className="group h-full">
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all hover:scale-105 duration-300 flex flex-col">
                <div className="mb-6 relative h-32 flex-shrink-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center relative">
                      <Shield className="w-10 h-10 text-emerald-400" strokeWidth={2.5} />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-2xl" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-auto">
                  <h3 className="text-[15px] font-bold text-white mb-2">Acompanhamos a resolução</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">
                    Monitoramos o processo até a conclusão.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom metrics */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-[36px] font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                99.8%
              </div>
              <div className="text-[13px] text-slate-400">Precisão na análise</div>
            </div>
            <div className="text-center">
              <div className="text-[36px] font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                78%
              </div>
              <div className="text-[13px] text-slate-400">Redução de tempo</div>
            </div>
            <div className="text-center">
              <div className="text-[36px] font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-[13px] text-slate-400">Monitoramento contínuo</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
