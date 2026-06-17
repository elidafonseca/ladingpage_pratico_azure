import { CheckCircle2, Sparkles } from 'lucide-react';

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="relative bg-white pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Editorial Style */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full mb-6 sm:mb-8">
            <span className="text-[12px] text-slate-700 font-semibold tracking-tight">
              Sobre a plataforma
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] lg:text-[52px] leading-[1.1] tracking-tight text-slate-900 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Inteligência fiscal e financeira em escala
          </h2>

          <p className="text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.7] text-slate-600 max-w-2xl mx-auto px-4">
            Desenvolvemos uma plataforma de IA que automatiza operações fiscais e financeiras complexas,
            permitindo que empresas de todos os portes otimizem custos e operem com precisão estratégica.
          </p>
        </div>

        {/* Main Content - Clean Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24">

          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[24px] font-bold text-slate-900 tracking-tight mb-4">
                Nossa Visão
              </h3>
              <p className="text-[17px] leading-[1.8] text-slate-600 mb-6">
                A Prático Digital nasceu para transformar a forma como empresas e escritórios contábeis lidam com operações fiscais e financeiras.
              </p>
              <p className="text-[17px] leading-[1.8] text-slate-600 mb-6">
                Combinamos tecnologia, inteligência artificial e conhecimento especializado para transformar dados complexos em ações práticas e decisões mais rápidas.
              </p>
              <p className="text-[17px] leading-[1.8] text-slate-600">
                Nosso objetivo é reduzir riscos, recuperar oportunidades e aumentar a eficiência operacional das empresas brasileiras.
              </p>
            </div>

            {/* O que entregamos */}
            <div className="pt-4">
              <div className="text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-4">O que entregamos</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-slate-900">Clareza operacional</div>
                    <div className="text-[13px] text-slate-500 leading-relaxed">Transformamos dados fiscais e financeiros em informações fáceis de entender.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-slate-900">Direcionamento prático</div>
                    <div className="text-[13px] text-slate-500 leading-relaxed">Mostramos quais problemas exigem atenção e qual caminho seguir.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-slate-900">Ação com prioridade</div>
                    <div className="text-[13px] text-slate-500 leading-relaxed">Ajudamos empresas e contabilidades a focar primeiro no que gera mais impacto.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Key Stats */}
          <div className="lg:pt-12">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <div className="text-[48px] font-bold text-slate-900 tracking-tight mb-2">78%</div>
                <div className="text-[15px] text-slate-600 leading-relaxed">
                  Redução de tempo operacional médio
                </div>
              </div>

              <div>
                <div className="text-[48px] font-bold text-slate-900 tracking-tight mb-2">99.8%</div>
                <div className="text-[15px] text-slate-600 leading-relaxed">
                  Acurácia em processamento fiscal
                </div>
              </div>

              <div>
                <div className="text-[48px] font-bold text-slate-900 tracking-tight mb-2">+IA</div>
                <div className="text-[15px] text-slate-600 leading-relaxed">Automação inteligente integrada</div>
              </div>

              <div>
                <div className="text-[48px] font-bold text-slate-900 tracking-tight mb-2">24/7</div>
                <div className="text-[15px] text-slate-600 leading-relaxed">
                  Automação e monitoramento contínuo
                </div>
              </div>
            </div>

            {/* Subtle tech stack mention */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
                <div className="text-[13px] font-semibold text-slate-900">Stack Tecnológico</div>
              </div>
              <div className="text-[14px] text-slate-600 leading-relaxed">
                Machine Learning • Cloud Infrastructure • Process Automation • Advanced Analytics
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Refined */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl px-12 py-16 relative overflow-hidden max-w-5xl mx-auto">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />

          <div className="relative text-center max-w-2xl mx-auto">
            <h3 className="text-[40px] font-bold text-white mb-5 tracking-tight leading-[1.15]">
              Pronto para operar com inteligência fiscal?
            </h3>

            <p className="text-[18px] text-slate-300 mb-10 leading-relaxed">
              Explore como nossa plataforma transforma operações fiscais e financeiras em vantagem estratégica.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://wa.me/5581999299696"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 rounded-xl transition-all shadow-lg hover:shadow-xl font-semibold text-[15px]"
              >
                Agendar Demo
              </a>
              <a
                href="https://wa.me/5581999299696"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 text-white hover:bg-white/10 rounded-xl transition-all font-semibold text-[15px] border border-white/20 hover:border-white/30"
              >
                Falar com Time
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
