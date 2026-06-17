import image_logomarca_SEM_EFEITO_4 from '@/imports/logomarca_SEM_EFEITO-4.png'
import { ArrowRight, CheckCircle2, Shield, Zap, Activity, TrendingUp, Sparkles, Mail, Bell, Star, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { submitBetaAccess } from '../../utils/submissions';

export default function BetaAccess({ onBackClick }: { onBackClick?: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    position: '',
    cnpj: '',
    ddd: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const result = await submitBetaAccess(formData);

      if (result.success) {
        setIsLoading(false);
        setShowSuccessModal(true);
      } else {
        setIsLoading(false);
        setErrorMessage(result.error || 'Erro ao enviar solicitação. Tente novamente.');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Erro ao enviar solicitação. Tente novamente.');
      console.error('Beta access submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="beta-access" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/30 overflow-hidden flex items-center">

      {/* Sophisticated layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial gradients */}
        <div className="absolute top-[10%] right-[5%] w-[800px] h-[800px] bg-gradient-to-br from-blue-100/20 via-blue-50/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[5%] left-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-slate-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/8 to-transparent rounded-full blur-3xl" />

        {/* Subtle grid texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Elegant curved lines */}
        <svg className="absolute top-[15%] left-[5%] w-[400px] h-[400px] opacity-[0.02]" viewBox="0 0 400 400">
          <path d="M 0,200 Q 100,50 200,150 T 400,200" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600"/>
          <path d="M 0,220 Q 100,70 200,170 T 400,220" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-600"/>
        </svg>
        <svg className="absolute bottom-[10%] right-[8%] w-[350px] h-[350px] opacity-[0.02]" viewBox="0 0 350 350">
          <path d="M 0,175 Q 87.5,270 175,200 T 350,175" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-900"/>
        </svg>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">

        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <button onClick={onBackClick} className="inline-block">
            <img
              src={image_logomarca_SEM_EFEITO_4}
              alt="Prático Digital"
              className="h-8 sm:h-9 lg:h-10 w-auto hover:opacity-80 transition-opacity"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE - Editorial Presentation */}
          <div className="relative">

            {/* Main headline */}
            <div className="mb-8 sm:mb-10">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[58px] leading-[1.08] tracking-[-0.022em] font-bold text-slate-900 mb-4 sm:mb-5">
                Faça um teste da
                <br />
                <span className="bg-gradient-to-r from-[#0A7FB5] to-[#2DABE3] bg-clip-text text-transparent">
                  versão beta
                </span>
              </h1>
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] text-slate-600 max-w-[520px]">
                Seja um dos primeiros a experimentar a próxima geração de inteligência fiscal. Comece a usar em segundos.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-blue-50/40 border border-blue-100/50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-[18px] h-[18px] text-[#0A7FB5]" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] text-slate-700 font-medium">Vagas limitadas disponíveis</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-50/40 border border-emerald-100/50 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-[18px] h-[18px] text-emerald-600" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] text-slate-700 font-medium">Acesso antecipado ao ecossistema</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-50 to-purple-50/40 border border-purple-100/50 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-[18px] h-[18px] text-purple-600" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] text-slate-700 font-medium">Plataforma em evolução contínua</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - Premium Form Panel */}
          <div className="relative pt-6">

            {/* Subtle ambient glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-50/15 via-transparent to-transparent rounded-3xl blur-3xl" />

            {/* Badge - floating above form card */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-[13px] text-blue-900 font-semibold uppercase tracking-wider">
                  Acesso Antecipado
                </span>
              </div>
            </div>

            {/* Premium form card */}
            <div className="relative bg-white border border-slate-200/60 rounded-[24px] p-8 shadow-[0_8px_40px_rgba(15,23,42,0.08)]">

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(10,127,181,0.2)] to-transparent" />

              {/* Form header */}
              <div className="mb-6">
                <h3 className="text-[24px] font-bold text-slate-900 mb-1.5 tracking-[-0.015em]">
                  Solicitar acesso
                </h3>
                <p className="text-[13px] text-slate-600">
                  Preencha os dados para receber seu convite exclusivo
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full name */}
                <div>
                  <label className="block text-[12px] font-semibold text-slate-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[14px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.03)] focus:border-[#0A7FB5] focus:ring-[3px] focus:ring-[rgba(10,127,181,0.1)] focus:outline-none transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[12px] font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[14px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.03)] focus:border-[#0A7FB5] focus:ring-[3px] focus:ring-[rgba(10,127,181,0.1)] focus:outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Company name */}
                <div>
                  <label className="block text-[12px] font-semibold text-slate-700 mb-2">
                    Nome da empresa
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[14px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.03)] focus:border-[#0A7FB5] focus:ring-[3px] focus:ring-[rgba(10,127,181,0.1)] focus:outline-none transition-all"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-[12px] font-semibold text-slate-700 mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[14px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.03)] focus:border-[#0A7FB5] focus:ring-[3px] focus:ring-[rgba(10,127,181,0.1)] focus:outline-none transition-all"
                    placeholder="Seu cargo na empresa"
                  />
                </div>

                {/* CNPJ */}
                <div>
                  <label className="block text-[12px] font-semibold text-slate-700 mb-2">
                    CNPJ
                  </label>
                  <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[14px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.03)] focus:border-[#0A7FB5] focus:ring-[3px] focus:ring-[rgba(10,127,181,0.1)] focus:outline-none transition-all"
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                {/* Phone */}
                <div className="grid grid-cols-[100px_1fr] gap-3">
                  <div>
                    <label className="block text-[12px] font-semibold text-slate-700 mb-2">
                      DDD
                    </label>
                    <input
                      type="text"
                      name="ddd"
                      value={formData.ddd}
                      onChange={handleChange}
                      required
                      maxLength={2}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[14px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.03)] focus:border-[#0A7FB5] focus:ring-[3px] focus:ring-[rgba(10,127,181,0.1)] focus:outline-none transition-all"
                      placeholder="11"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-slate-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[14px] placeholder-slate-400 shadow-[inset_0_1px_2px_rgba(15,23,42,0.03)] focus:border-[#0A7FB5] focus:ring-[3px] focus:ring-[rgba(10,127,181,0.1)] focus:outline-none transition-all"
                      placeholder="00000-0000"
                    />
                  </div>
                </div>

                {/* Error message */}
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-[13px] text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-b from-[#0A7FB5] to-[#0B6A9A] hover:from-[#0B6A9A] hover:to-[#0A5A85] text-white rounded-xl transition-all shadow-[0_4px_18px_rgba(10,127,181,0.25)] hover:shadow-[0_6px_24px_rgba(10,127,181,0.35)] font-semibold text-[15px] group disabled:opacity-60 disabled:cursor-not-allowed"
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
                        <span>Comece agora</span>
                        <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy notice */}
                <p className="text-[11px] text-slate-500 text-center pt-2">
                  Ao solicitar acesso, você concorda com nossos termos de uso e política de privacidade.
                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-[fadeIn_0.3s_ease-out]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => {
              setShowSuccessModal(false);
              if (onBackClick) onBackClick();
            }}
          />

          {/* Modal */}
          <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-[24px] shadow-[0_24px_64px_rgba(15,23,42,0.15)] max-w-[520px] w-full p-10 animate-[scaleIn_0.3s_ease-out]">

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,127,181,0.3)] to-[rgba(45,171,227,0.3)] rounded-full blur-xl" />
                {/* Icon circle */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#0A7FB5] to-[#2DABE3] flex items-center justify-center shadow-lg shadow-[rgba(10,127,181,0.25)]">
                  <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[28px] font-bold text-slate-900 text-center mb-4 tracking-[-0.015em]">
              Solicitação enviada com sucesso
            </h2>

            {/* Description */}
            <p className="text-[15px] text-slate-600 text-center leading-relaxed mb-8 max-w-[420px] mx-auto">
              Você entrou para a lista de acesso antecipado da Prático.
              <br /><br />
              Nossa equipe analisará seu cadastro e entraremos em contato em breve.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100/60 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#0A7FB5]" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Convite prioritário</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-100/60 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-3.5 h-3.5 text-purple-600" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Atualizações antecipadas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100/60 flex items-center justify-center flex-shrink-0">
                  <Star className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Acesso ao beta</span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => {
                setShowSuccessModal(false);
                if (onBackClick) onBackClick();
              }}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-b from-[#0A7FB5] to-[#0B6A9A] hover:from-[#0B6A9A] hover:to-[#0A5A85] text-white rounded-xl transition-all shadow-[0_4px_18px_rgba(10,127,181,0.25)] hover:shadow-[0_6px_24px_rgba(10,127,181,0.35)] font-semibold text-[15px] group"
            >
              <span>Voltar para home</span>
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
