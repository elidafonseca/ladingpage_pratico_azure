import { Search, TrendingUp, Lightbulb, MapPin, Star, Sparkles } from 'lucide-react';

const diferenciais = [
  {
    icon: Search,
    title: 'Encontramos o problema',
    description: 'Identificamos automaticamente inconsistências fiscais e tributárias.',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Medimos o impacto',
    description: 'Calculamos riscos, perdas financeiras e oportunidades.',
    color: 'purple',
  },
  {
    icon: Lightbulb,
    title: 'Mostramos como resolver',
    description: 'Orientações práticas e contextualizadas para cada situação.',
    color: 'amber',
  },
  {
    icon: MapPin,
    title: 'Indicamos onde agir',
    description: 'ERP, documento fiscal, cadastro ou processo operacional.',
    color: 'emerald',
  },
  {
    icon: Star,
    title: 'Priorizamos ações',
    description: 'Foque primeiro no que gera maior retorno financeiro.',
    color: 'orange',
  },
  {
    icon: Sparkles,
    title: 'Inteligência especializada',
    description: 'IA treinada para cenários fiscais, tributários e financeiros.',
    color: 'cyan',
  },
];

const colorMap: Record<string, { bg: string; icon: string; ring: string }> = {
  blue:    { bg: 'bg-blue-50',    icon: 'text-blue-600',    ring: 'border-blue-100' },
  purple:  { bg: 'bg-purple-50',  icon: 'text-purple-600',  ring: 'border-purple-100' },
  amber:   { bg: 'bg-amber-50',   icon: 'text-amber-600',   ring: 'border-amber-100' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', ring: 'border-emerald-100' },
  orange:  { bg: 'bg-orange-50',  icon: 'text-orange-600',  ring: 'border-orange-100' },
  cyan:    { bg: 'bg-cyan-50',    icon: 'text-cyan-600',    ring: 'border-cyan-100' },
};

export default function Diferenciais() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50/60 to-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full mb-4 sm:mb-6">
            <span className="text-[12px] text-slate-700 font-semibold tracking-tight">Diferenciais</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-tight text-slate-900 mb-3 sm:mb-4 px-4">
            Sistemas tradicionais mostram informações.<br className="hidden sm:block" /> A Prático orienta decisões.
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-slate-600 max-w-2xl mx-auto px-4">
            A maioria das soluções apenas exibe dados, relatórios e alertas. A Prático vai além — identifica problemas, calcula impactos, prioriza ações e orienta exatamente como resolver cada situação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {diferenciais.map((item) => {
            const c = colorMap[item.color];
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-slate-300/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all"
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.ring} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} strokeWidth={2.5} />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
