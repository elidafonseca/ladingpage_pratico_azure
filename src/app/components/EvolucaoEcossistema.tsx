import { Clock } from 'lucide-react';

const modulos = [
  {
    title: 'Apuração de ICMS',
    description: 'Automação e conferência de apurações tributárias.',
  },
  {
    title: 'Substituição Tributária',
    description: 'Identificação automática de produtos sujeitos à ST e validação de cálculos.',
  },
  {
    title: 'DIFAL',
    description: 'Monitoramento e validação do diferencial de alíquota.',
  },
  {
    title: 'Revisão Tributária',
    description: 'Identificação de oportunidades de recuperação tributária.',
  },
  {
    title: 'ICMS Frete',
    description: 'Validação e recuperação de créditos relacionados ao transporte.',
  },
  {
    title: 'Captura e Distribuição Fiscal',
    description: 'Centralização de NF-e, CT-e, MDF-e, NFS-e e eventos fiscais.',
  },
];

export default function EvolucaoEcossistema() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-slate-50/60 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full mb-4 sm:mb-6">
            <Clock className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.5} />
            <span className="text-[12px] text-slate-700 font-semibold tracking-tight">Em breve</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-tight text-slate-900 mb-3 sm:mb-4 px-4">
            Evolução do Ecossistema Prático
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-slate-600 max-w-2xl mx-auto px-4">
            Novos módulos em desenvolvimento para ampliar a inteligência operacional do ecossistema.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {modulos.map((modulo) => (
            <div
              key={modulo.title}
              className="group bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 hover:bg-white hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-400/60 mt-2 flex-shrink-0" />
                <h3 className="text-[16px] font-bold text-slate-900 tracking-tight">{modulo.title}</h3>
              </div>
              <p className="text-[14px] text-slate-600 leading-relaxed pl-5">{modulo.description}</p>
              <div className="mt-4 pl-5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200/60 rounded-lg text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                  <Clock className="w-3 h-3" strokeWidth={2.5} />
                  Em desenvolvimento
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
