export default function PositionamentoFinal() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.15] tracking-tight text-slate-900 mb-6">
          A próxima geração das operações fiscais e financeiras
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-slate-600 max-w-2xl mx-auto">
          Não entregamos apenas dados. Entregamos clareza, prioridade e direcionamento para que empresas e contabilidades tomem decisões melhores todos os dias.
        </p>
      </div>
    </section>
  );
}
