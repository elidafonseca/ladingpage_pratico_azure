import image_logomarca_SEM_EFEITO_3 from '@/imports/logomarca_SEM_EFEITO-3.png'
import { Sparkles, CheckCircle2, TrendingUp, Shield, ArrowRight, BarChart3, Zap, Activity } from 'lucide-react';

export default function Login({ onBackClick, onBetaClick, onForgotPasswordClick }: { onBackClick?: () => void; onBetaClick?: () => void; onForgotPasswordClick?: () => void }) {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#FCFCFD] via-white to-slate-50/30 overflow-x-hidden">

      {/* Elegant ambient background */}
      <div className="absolute inset-0">
        {/* Soft radial gradients */}
        <div className="absolute top-[12%] right-[18%] w-[650px] h-[650px] bg-gradient-to-br from-blue-50/35 via-blue-50/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] left-[12%] w-[480px] h-[480px] bg-gradient-to-tr from-slate-50/25 to-transparent rounded-full blur-3xl" />

        {/* Very subtle curved accents */}
        <svg className="absolute top-[25%] left-[8%] w-[280px] h-[280px] opacity-[0.012]" viewBox="0 0 280 280">
          <path d="M 0,140 Q 70,40 140,90 T 280,140" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-slate-900"/>
        </svg>
        <svg className="absolute bottom-[18%] right-[12%] w-[220px] h-[220px] opacity-[0.012]" viewBox="0 0 220 220">
          <path d="M 0,110 Q 55,180 110,130 T 220,110" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-slate-900"/>
        </svg>
      </div>

      <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1.2fr_0.95fr] gap-12 lg:gap-24 items-center max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* LEFT SIDE - Premium Branding Experience */}
        <div className="hidden lg:flex flex-col justify-center max-w-[580px] relative">

          {/* Logo */}
          <div className="mb-14 mt-[-60px]">
            <button onClick={onBackClick} className="inline-block">
              <img
                src={image_logomarca_SEM_EFEITO_3}
                alt="Prático Digital"
                className="h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </button>
          </div>

          {/* Premium headline with improved hierarchy */}
          <div className="mb-9">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[62px] leading-[1.08] tracking-[-0.023em] text-slate-900 mb-4 sm:mb-6 font-bold">Tecnologia fiscal<br />inteligente</h1>
            <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-600 max-w-[440px]">
              Automação, inteligência artificial e gestão fiscal em uma única plataforma.
            </p>
          </div>

          {/* Refined feature highlights */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-blue-50/30 border border-blue-100/60 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-[18px] h-[18px] text-blue-600" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] text-slate-700 font-medium">Conferência fiscal inteligente</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-50 to-purple-50/30 border border-purple-100/60 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-[18px] h-[18px] text-purple-600" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] text-slate-700 font-medium">Automação de processos</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-50/30 border border-emerald-100/60 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-[18px] h-[18px] text-emerald-600" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] text-slate-700 font-medium">Gestão para empresas e MEIs</span>
            </div>
          </div>

          {/* Floating dashboard preview snippets - Premium Diagonal Z-Composition */}

          {/* Analytics mini card - TOP RIGHT */}
          <div className="absolute top-[120px] right-[-180px] bg-white/85 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-4 shadow-[0_4px_24px_rgba(15,23,42,0.05)] w-[200px] hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm shadow-blue-500/20">
                <Activity className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] font-semibold text-slate-500 mb-1 uppercase tracking-wider">Conformidade</div>
                <div className="text-[20px] font-bold text-slate-900 leading-none tracking-tight mb-0.5">99.8%</div>
                <div className="text-[10px] text-slate-600">Análises aprovadas</div>
              </div>
            </div>
          </div>

          {/* Progress widget - CENTER LEFT */}
          <div className="absolute top-[260px] right-[-110px] bg-white/85 backdrop-blur-xl border border-slate-200/60 rounded-xl p-3.5 shadow-[0_4px_24px_rgba(15,23,42,0.05)] w-[220px] hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-slate-600">Processamento ativo</span>
              <span className="text-[10px] font-bold text-slate-900 tabular-nums">87%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '87%' }} />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-medium text-slate-500">2.847 documentos hoje</span>
            </div>
          </div>

          {/* Status badge - BOTTOM RIGHT */}
          <div className="absolute top-[380px] right-[-170px] bg-white/85 backdrop-blur-xl border border-slate-200/60 rounded-xl p-3 shadow-[0_4px_24px_rgba(15,23,42,0.05)] w-[160px] hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow">
            <div className="flex items-center gap-2 mb-2.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
              <span className="text-[10px] font-semibold text-slate-700">Sistema seguro</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-600">Economia</span>
                <span className="text-[10px] font-bold text-slate-900">R$ 78k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-600">Uptime</span>
                <span className="text-[10px] font-bold text-emerald-600">99.9%</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - Premium Login Form */}
        <div className="flex items-center justify-center lg:justify-end">

          <div className="w-full max-w-[450px] relative">

            {/* Subtle ambient glow */}
            <div className="absolute -inset-10 bg-gradient-to-br from-blue-50/20 via-transparent to-transparent rounded-3xl blur-3xl pointer-events-none" />

            {/* Premium login card */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200/70 rounded-[20px] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(15,23,42,0.08),0_1px_3px_rgba(255,255,255,0.9)_inset]">

              {/* Refined top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

              {/* Mobile logo */}
              <div className="lg:hidden mb-10 text-center">
                <button onClick={onBackClick} className="inline-block mx-auto mb-4">
                  <img
                    src="/src/imports/logomarca_SEM_EFEITO.png"
                    alt="Prático Digital"
                    className="h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </button>
              </div>

              {/* Premium title with refined hierarchy */}
              <div className="mb-9">
                <h2 className="text-[28px] font-bold text-slate-900 mb-3 tracking-[-0.015em] leading-[1.15]">
                  Entrar na plataforma
                </h2>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  Acesse sua conta para continuar
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4.5">

                {/* Email */}
                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-2.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-[14px] bg-white border border-slate-200/80 rounded-xl text-slate-900 text-[15px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] focus:bg-white focus:border-blue-400/60 focus:ring-[3px] focus:ring-blue-100/40 focus:outline-none transition-all"
                    placeholder="Digite seu e-mail"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-2.5">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-[14px] bg-white border border-slate-200/80 rounded-xl text-slate-900 text-[15px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] focus:bg-white focus:border-blue-400/60 focus:ring-[3px] focus:ring-blue-100/40 focus:outline-none transition-all"
                    placeholder="Digite sua senha"
                  />
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-[17px] h-[17px] rounded-md border-slate-300 text-blue-600 shadow-sm focus:ring-2 focus:ring-blue-100 focus:ring-offset-0 transition-all"
                    />
                    <span className="text-[13px] text-slate-600 group-hover:text-slate-900 transition-colors font-medium">
                      Lembrar acesso
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={onForgotPasswordClick}
                    className="text-[13px] text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    Esqueci minha senha
                  </button>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-[14px] bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all shadow-[0_4px_18px_rgba(37,99,235,0.22)] hover:shadow-[0_6px_26px_rgba(37,99,235,0.3)] font-semibold text-[15px] group"
                  >
                    <span>Entrar</span>
                    <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                  </button>
                </div>

                {/* Refined divider */}
                <div className="relative py-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200/70" />
                  </div>
                  <div className="relative flex justify-center text-[11px]">
                    <span className="px-4 bg-white text-slate-400 font-medium uppercase tracking-wider">ou</span>
                  </div>
                </div>

                {/* Sign up */}
                <div className="text-center">
                  <p className="text-[13px] text-slate-600 mb-3.5 font-medium">
                    Não possui conta?
                  </p>
                  <button
                    type="button"
                    onClick={onBetaClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-[12px] bg-slate-50 hover:bg-slate-100 border border-slate-200/70 hover:border-slate-300 text-slate-700 hover:text-slate-900 rounded-xl transition-all font-semibold text-[13px] shadow-sm hover:shadow-md"
                  >
                    Solicitar acesso
                  </button>
                </div>

              </form>

            </div>

            {/* Back to home link */}
            <div className="relative z-20 text-center mt-8 pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  console.log('Voltar para o site clicked');
                  if (onBackClick) {
                    console.log('Calling onBackClick');
                    onBackClick();
                  } else {
                    console.log('onBackClick is undefined!');
                  }
                }}
                className="inline-flex items-center gap-2 text-[13px] text-slate-500 hover:text-slate-700 transition-colors font-medium cursor-pointer"
              >
                <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar para o site
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
