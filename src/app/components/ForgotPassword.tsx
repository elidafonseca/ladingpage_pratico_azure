import { Mail, ArrowLeft, CheckCircle2, Shield, Clock, MailCheck } from 'lucide-react';
import { useState } from 'react';

export default function ForgotPassword({ onBackClick }: { onBackClick?: () => void }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleBackToLogin = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">

      {/* Subtle background composition */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-blue-50/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-slate-50 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-[480px]">

        {/* Optional trust indicator above card */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
            <Shield className="w-3.5 h-3.5 text-slate-600" strokeWidth={2} />
            <span className="text-[12px] text-slate-600 font-medium">Recuperação segura</span>
          </div>
        </div>

        {/* Main card */}
        <div className="relative bg-white border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">

          {/* Subtle top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="p-10">

            {!isSuccess ? (
              <>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/50 border border-blue-100/60 rounded-full mb-6">
                  <span className="text-[12px] text-blue-700 font-semibold tracking-tight">
                    Recuperação de acesso
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-[32px] leading-[1.15] tracking-tight text-slate-900 mb-3">
                  Esqueceu sua senha?
                </h1>

                {/* Description */}
                <p className="text-[15px] leading-[1.65] text-slate-600 mb-8">
                  Informe seu e-mail para receber as instruções de redefinição de senha.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Email input */}
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-2.5">
                      E-mail
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-[18px] h-[18px] text-slate-400" strokeWidth={2} />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[15px] placeholder-slate-400 focus:bg-slate-50/50 focus:border-blue-500/50 focus:outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 font-semibold text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <MailCheck className="w-[18px] h-[18px]" strokeWidth={2.5} />
                        <span>Enviar instruções</span>
                      </>
                    )}
                  </button>

                  {/* Secondary action */}
                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-slate-600 hover:text-slate-900 transition-colors font-medium text-[14px]"
                  >
                    <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
                    <span>Voltar para login</span>
                  </button>

                </form>

                {/* Security note */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-[12px] text-slate-500 text-center leading-relaxed">
                    Por segurança, o e-mail de recuperação só será enviado se o endereço estiver cadastrado em nosso sistema.
                  </p>
                </div>

              </>
            ) : (
              <div className="py-4 animate-[fadeIn_0.4s_ease-out]">

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-full blur-xl" />
                    {/* Icon circle */}
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-[26px] font-bold text-slate-900 text-center mb-3 tracking-tight">
                  Instruções enviadas
                </h2>

                {/* Description */}
                <p className="text-[15px] text-slate-600 text-center leading-relaxed mb-6 max-w-[400px] mx-auto">
                  Se o e-mail informado estiver vinculado a uma conta, você receberá as instruções de recuperação em alguns minutos.
                </p>

                {/* Trust highlights */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100/60 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Chegará em minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100/60 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Link seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-100/60 flex items-center justify-center flex-shrink-0">
                      <MailCheck className="w-3.5 h-3.5 text-purple-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Validade de 24h</span>
                  </div>
                </div>

                {/* Back to login button */}
                <button
                  onClick={handleBackToLogin}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 font-semibold text-[15px]"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
                  <span>Voltar para login</span>
                </button>

                {/* Additional help */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-[12px] text-slate-500 text-center leading-relaxed">
                    Não recebeu o e-mail? Verifique sua caixa de spam ou entre em contato com o suporte.
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* Bottom trust note */}
        {!isSuccess && (
          <div className="mt-6 text-center">
            <p className="text-[13px] text-slate-500">
              Precisa de ajuda? Entre em contato com{' '}
              <a href="#contato" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                nosso suporte
              </a>
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
