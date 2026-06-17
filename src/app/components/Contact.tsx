import { MapPin, Mail, Phone, ArrowUpRight, Send, CheckCircle2, MessageSquare, Clock, MailCheck, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { submitContactMessage } from '../../utils/submissions';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const result = await submitContactMessage(formData);

      if (result.success) {
        setIsLoading(false);
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        setErrorMessage(result.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
      console.error('Contact message submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNewMessage = () => {
    setIsSuccess(false);
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="relative bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Subtle background composition */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-slate-50 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full mb-4 sm:mb-6">
            <span className="text-[12px] text-slate-700 font-semibold tracking-tight">
              Entre em Contato
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.15] tracking-tight text-slate-900 mb-4 sm:mb-5">
            Vamos transformar sua operação
          </h2>

          <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.65] text-slate-600 max-w-2xl mx-auto">
            Fale com nosso time e descubra como automação inteligente, IA e tecnologia fiscal
            podem reduzir erros, acelerar processos e aumentar o controle da sua empresa.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-10 items-start max-w-5xl mx-auto">

          {/* LEFT SIDE - Contact Information */}
          <div className="space-y-4">

            {/* Contact cards */}
            <div className="space-y-3">

              {/* Location */}
              <div className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      Localização
                    </div>
                    <p className="text-[15px] leading-[1.6] text-slate-700">
                      Ed Luciano Costa<br />
                      R. Dona Maria César, 170 - Sala 203 A<br />
                      Recife, PE, 50030-140
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      Email
                    </div>
                    <a
                      href="mailto:gestao@digitalpratico.com.br"
                      className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors inline-flex items-center gap-1 group/link"
                    >contato@praticodigital.com<ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" strokeWidth={2} /></a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      Telefone
                    </div>
                    <a
                      href="https://wa.me/5581999299696"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors inline-flex items-center gap-1 group/link"
                    >
                      +55 (81) 9 9929-9696
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Trust indicator */}
            <div className="bg-blue-50/50 border border-blue-100/60 rounded-xl p-5">
              <div className="text-[13px] text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Resposta em até 24h</span> · Seus dados são protegidos e não compartilhados
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - Premium Form */}
          <div className="relative">

            {/* Form container */}
            <div className="relative bg-white border border-slate-200/60 rounded-2xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name and Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-2.5">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[15px] placeholder-slate-400 focus:bg-slate-50/50 focus:border-blue-500/50 focus:outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-2.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[15px] placeholder-slate-400 focus:bg-slate-50/50 focus:border-blue-500/50 focus:outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-2.5">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[15px] placeholder-slate-400 focus:bg-slate-50/50 focus:border-blue-500/50 focus:outline-none transition-all"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-2.5">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message || ''}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-[15px] placeholder-slate-400 focus:bg-slate-50/50 focus:border-blue-500/50 focus:outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seus desafios e objetivos..."
                  />
                </div>

                {/* Error message */}
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-[13px] text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#188FC3] to-[#0F7FB0] hover:from-[#1279A8] hover:to-[#0A6A95] text-white rounded-xl transition-all shadow-lg shadow-[rgba(24,143,195,0.20)] hover:shadow-[rgba(24,143,195,0.30)] font-semibold text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
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
                        <Send className="w-4 h-4" strokeWidth={2.5} />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </div>

                  {/* Privacy note */}
                  <p className="text-[12px] text-slate-500 text-center pt-2">
                    Ao enviar, você concorda com nossa política de privacidade
                  </p>

                </form>
              ) : (
                <div className="py-8 animate-[fadeIn_0.4s_ease-out]">

                  {/* Success Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-xl" />
                      {/* Icon circle */}
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[26px] font-bold text-slate-900 text-center mb-3 tracking-tight">
                    Mensagem enviada com sucesso
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-slate-600 text-center leading-relaxed mb-8 max-w-[440px] mx-auto">
                    Recebemos sua mensagem e nossa equipe retornará em breve.
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100/60 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Resposta prioritária</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-100/60 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-3.5 h-3.5 text-purple-600" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Contato empresarial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100/60 flex items-center justify-center flex-shrink-0">
                        <MailCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] text-slate-700 font-medium whitespace-nowrap">Retorno por e-mail</span>
                    </div>
                  </div>

                  {/* New Message Button */}
                  <button
                    onClick={handleNewMessage}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 rounded-xl transition-all font-medium text-[14px]"
                  >
                    <Send className="w-4 h-4" strokeWidth={2.5} />
                    <span>Enviar nova mensagem</span>
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
