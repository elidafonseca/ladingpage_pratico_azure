import { Building2, Users } from 'lucide-react';

export default function TamanhoMercado() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50/60 to-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full mb-4 sm:mb-6">
            <span className="text-[12px] text-slate-700 font-semibold tracking-tight">Mercado</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-tight text-slate-900 mb-3 sm:mb-4 px-4">
            Um mercado com milhões de oportunidades
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <div className="bg-white border border-slate-200/60 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
              <Building2 className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="text-[48px] font-bold text-slate-900 tracking-tight mb-2">+20M</div>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Empresas ativas no Brasil que dependem de processos fiscais e financeiros.
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/20">
              <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="text-[48px] font-bold text-slate-900 tracking-tight mb-2">+100K</div>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Escritórios contábeis que podem utilizar a plataforma para aumentar produtividade, reduzir riscos e ampliar serviços oferecidos aos clientes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
