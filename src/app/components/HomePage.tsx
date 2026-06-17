import image_logomarca_SEM_EFEITO_2 from '@/imports/image-8.png';
import { useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, Zap, BarChart3, Activity, Shield, ArrowUpRight, Circle, Menu, X } from 'lucide-react';
import Ecosystem from './Ecosystem';
import QuemSomos from './QuemSomos';
import NossosServicos from './NossosServicos';
import Workflow from './Workflow';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import BetaAccess from './BetaAccess';
import ForgotPassword from './ForgotPassword';
import Diferenciais from './Diferenciais';

function Header({ onLoginClick, onBetaClick }: { onLoginClick: () => void; onBetaClick: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBetaClick = () => { onBetaClick(); setIsMobileMenuOpen(false); };
  const handleLoginClick = () => { onLoginClick(); setIsMobileMenuOpen(false); };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={image_logomarca_SEM_EFEITO_2} alt="Prático Digital" className="h-8 sm:h-10 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollToSection('ecosystem')} className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">Ecossistema</button>
            <button onClick={() => scrollToSection('quem-somos')} className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">Quem Somos</button>
            <button onClick={() => scrollToSection('servicos')} className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">Nossos Serviços</button>
            <button onClick={() => scrollToSection('contato')} className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">Contato</button>
            <button onClick={handleLoginClick} className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">Login</button>
            <button onClick={handleBetaClick} className="px-5 py-2 bg-[#0A7FB5] hover:bg-[#096A9A] text-white rounded-lg transition-colors text-[15px] font-medium">Teste Beta</button>
          </nav>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            <button onClick={() => scrollToSection('ecosystem')} className="block w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Ecossistema</button>
            <button onClick={() => scrollToSection('quem-somos')} className="block w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Quem Somos</button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Nossos Serviços</button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Contato</button>
            <button onClick={handleLoginClick} className="block w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Login</button>
            <button onClick={handleBetaClick} className="block w-full px-4 py-3 bg-[#0A7FB5] hover:bg-[#096A9A] text-white rounded-lg transition-colors text-[15px] font-medium text-center">Teste Beta</button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero({ onBetaClick }: { onBetaClick: () => void }) {
  return (
    <section className="relative lg:min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#E8F7FD] border border-[#BFE8F7] rounded-full mb-6 sm:mb-8">
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#188FC3] flex-shrink-0" />
              <span className="text-[12px] sm:text-[14px] text-[#188FC3] font-medium">Plataforma de Inteligência Fiscal e Financeira</span>
            </div>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[52px] leading-[1.15] tracking-tight mb-4 sm:mb-6">
              <span className="text-slate-900">Inteligência Operacional</span><br />
              <span className="text-slate-900">Tributária e Financeira</span><br />
              <span className="bg-gradient-to-r from-[#0A7FB5] to-[#188FC3] bg-clip-text text-transparent">em um único ecossistema.</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-slate-600 mb-8 sm:mb-10 max-w-xl">
              A Prático identifica inconsistências, mede impactos financeiros, orienta correções e mostra exatamente onde agir para reduzir riscos, recuperar oportunidades e aumentar a eficiência operacional.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button onClick={onBetaClick} className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-4 bg-[#0A7FB5] hover:bg-[#096A9A] text-white rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 group">
                <span className="text-[15px] sm:text-[16px] font-medium">Conhecer a Plataforma</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://wa.me/5581999327339" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-4 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-all text-center">
                <span className="text-[15px] sm:text-[16px] font-medium">Ver Demonstração</span>
              </a>
            </div>
          </div>

          <div className="relative lg:ml-4 hidden lg:block lg:scale-[0.88] lg:origin-right">
            <div className="absolute -inset-12 bg-gradient-to-br from-[rgba(24,143,195,0.07)] via-transparent to-[rgba(15,127,176,0.04)] rounded-[3rem] blur-3xl" />
            <div className="relative space-y-3">
              <div className="bg-white/95 backdrop-blur-xl rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#188FC3] to-[#0F7FB0] flex items-center justify-center shadow-lg shadow-[rgba(24,143,195,0.25)]">
                      <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-slate-900 tracking-[-0.01em]">Processamento Inteligente</div>
                      <div className="text-[11.5px] text-slate-500 mt-0.5">Atualizado há 37s</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11.5px] font-semibold text-emerald-700">Operacional</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mb-5">
                  <div className="space-y-1.5">
                    <div className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider">Docs Processados</div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-[26px] font-bold text-slate-900 tracking-tight">2.847</div>
                      <div className="flex items-center gap-0.5 text-[11.5px] font-semibold text-emerald-600">
                        <ArrowUpRight className="w-3 h-3" strokeWidth={3} /><span>12.4%</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-0.5 h-6 mt-1">
                      {[4,7,5,9,8,12,10,14,11,15,13,16].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-[rgba(24,143,195,0.8)] to-[rgba(58,173,212,0.6)] rounded-t-sm" style={{ height: `${(h/16)*100}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider">Taxa de Sucesso</div>
                    <div className="text-[26px] font-bold text-slate-900 tracking-tight">99.1%</div>
                    <div className="text-[11.5px] text-slate-600 mt-1">2.821 validados</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider">Economia Total</div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-[26px] font-bold text-slate-900 tracking-tight">R$ 847k</div>
                      <div className="flex items-center gap-0.5 text-[11.5px] font-semibold text-emerald-600">
                        <ArrowUpRight className="w-3 h-3" strokeWidth={3} /><span>34%</span>
                      </div>
                    </div>
                    <div className="text-[11.5px] text-slate-600 mt-1">vs. mês anterior</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 space-y-3.5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-medium text-slate-700">Apuração ICMS</span>
                        <span className="px-1.5 py-0.5 bg-[#E8F7FD] text-[10px] font-semibold text-[#188FC3] rounded border border-[#BFE8F7]">Em andamento</span>
                      </div>
                      <span className="text-[12px] font-bold text-slate-900 tabular-nums">87%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#188FC3] via-[#0F7FB0] to-[#188FC3] rounded-full" style={{ width: '87%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-medium text-slate-700">Validação PIS/COFINS</span>
                      <span className="text-[12px] font-bold text-slate-900 tabular-nums">94%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#188FC3] via-[#0F7FB0] to-[#188FC3] rounded-full" style={{ width: '94%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/95 backdrop-blur-xl rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-5 relative overflow-hidden">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#188FC3] to-[#0F7FB0] flex items-center justify-center">
                      <Activity className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-[13px] font-semibold text-slate-900">Atividade Recente</div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: 'NF-e #8471', time: 'há 2 min', status: 'Aprovado', color: 'emerald' },
                      { label: 'SPED Fiscal', time: 'há 5 min', status: 'Processando', color: 'blue' },
                      { label: 'Apuração ICMS', time: 'há 12 min', status: 'Concluído', color: 'emerald' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center ${item.color === 'emerald' ? 'bg-emerald-500' : 'bg-[#188FC3]'}`}>
                            {item.color === 'emerald'
                              ? <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                              : <Circle className="w-2 h-2 text-white animate-spin" strokeWidth={3} />}
                          </div>
                          <div>
                            <div className="text-[11.5px] font-medium text-slate-900">{item.label}</div>
                            <div className="text-[10px] text-slate-500">{item.time}</div>
                          </div>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-1 rounded-md ${item.color === 'emerald' ? 'text-emerald-700 bg-emerald-50' : 'text-[#188FC3] bg-[#E8F7FD] border border-[#BFE8F7]'}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-xl rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-5 relative overflow-hidden">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#188FC3] to-[#0F7FB0] flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-[13px] font-semibold text-slate-900">Conformidade</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold text-slate-600">Score Global</span>
                        <span className="text-[13px] font-bold text-slate-900 tabular-nums">99.2%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" style={{ width: '99.2%' }} />
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-100 space-y-2.5">
                      {[{ label: 'Aprovados', val: '2.821', dot: 'bg-emerald-500', valColor: 'text-slate-900' },
                        { label: 'Em revisão', val: '23', dot: 'bg-amber-500', valColor: 'text-amber-600' },
                        { label: 'Pendentes', val: '3', dot: 'bg-slate-300', valColor: 'text-slate-900' }].map((r, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${r.dot}`} />
                            <span className="text-[11px] text-slate-600">{r.label}</span>
                          </div>
                          <span className={`text-[11px] font-bold tabular-nums ${r.valColor}`}>{r.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 p-5 relative overflow-hidden">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#188FC3] to-[#0F7FB0] flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-[13px] font-semibold text-slate-900">Economia Acumulada</div>
                  <div className="ml-auto px-2 py-1 bg-slate-50 rounded-lg">
                    <span className="text-[10.5px] font-semibold text-slate-600">6M</span>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-1.5 h-32 px-1">
                  {[{h:58,m:'Jan'},{h:67,m:'Fev'},{h:52,m:'Mar'},{h:78,m:'Abr'},{h:88,m:'Mai'},{h:100,m:'Jun'}].map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gradient-to-t from-[#0F7FB0] via-[#188FC3] to-[#3AADD4] rounded-t-md" style={{ height: `${d.h}%` }} />
                      <span className="text-[10px] font-medium text-slate-500 mt-2">{d.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-200/70 p-4 max-w-[220px]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-slate-900 mb-1">Lote processado</div>
                  <div className="text-[10.5px] text-slate-600 leading-relaxed">847 documentos validados com sucesso</div>
                  <div className="text-[9.5px] text-slate-400 mt-1.5">Há 2 minutos</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-gradient-to-br from-[#188FC3] via-[#0F7FB0] to-[#0A6A95] rounded-2xl shadow-[0_20px_40px_rgba(24,143,195,0.25)] p-3.5">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                <div className="text-[12.5px] font-bold text-white tracking-tight">AI-Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'beta' | 'forgot-password'>('home');

  if (currentPage === 'login') {
    return <Login onBackClick={() => setCurrentPage('home')} onBetaClick={() => setCurrentPage('beta')} onForgotPasswordClick={() => setCurrentPage('forgot-password')} />;
  }
  if (currentPage === 'beta') {
    return <BetaAccess onBackClick={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'forgot-password') {
    return <ForgotPassword onBackClick={() => setCurrentPage('login')} />;
  }

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setCurrentPage('login')} onBetaClick={() => setCurrentPage('beta')} />
      <Hero onBetaClick={() => setCurrentPage('beta')} />
      <Ecosystem />
      <Diferenciais />
      <QuemSomos />
      <NossosServicos />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  );
}
