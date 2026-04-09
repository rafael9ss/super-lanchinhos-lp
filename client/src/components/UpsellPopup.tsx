import { Check, X } from "lucide-react";

interface UpsellPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpsellPopup({ isOpen, onClose }: UpsellPopupProps) {
  if (!isOpen) return null;

  const basicFeatures = [
    "Receitas de lanches saudáveis",
  ];

  const completeFeatures = [
    "Receitas de lanches saudáveis",
    "Cardápio semanal pronto",
    "Guia anti-seletividade alimentar",
    "Suquinhos e doces saudáveis",
    "Guia de montagem de lancheiras",
  ];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(10,10,10,0.85)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-md bg-white border-4 border-[#0a0a0a] rounded-3xl overflow-hidden"
        style={{ boxShadow: "10px 10px 0px #000000", animation: "bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 bg-[#f5f5f5] hover:bg-[#e0e0e0] border-2 border-[#0a0a0a] rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000]"
        >
          <X className="w-4 h-4 text-[#0a0a0a]" />
        </button>

        {/* Header */}
        <div className="bg-[#ccff00] border-b-4 border-[#0a0a0a] px-6 pt-6 pb-5">
          <p className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-[#0a0a0a]/50 mb-1">
            Antes de continuar
          </p>
          <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a0a] leading-tight tracking-[-0.04em]">
            Por R$ 10 a mais, você leva muito mais do que receitas.
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            O plano básico é ótimo. Mas o{" "}
            <strong className="text-[#0a0a0a]">Plano Completo</strong> foi feito para a mãe que quer resolver a alimentação do filho de vez — não só ter ideias de lanche.
          </p>

          {/* Comparison Table */}
          <div className="border-4 border-[#0a0a0a] rounded-2xl overflow-hidden mb-5 shadow-[4px_4px_0px_#000000]">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_auto_auto] bg-[#0a0a0a] text-white">
              <div className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest font-display"></div>
              <div className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-widest font-display text-center border-l-2 border-white/20 text-gray-400">
                Básico
              </div>
              <div className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-widest font-display text-center border-l-2 border-white/20 text-[#ccff00]">
                Completo
              </div>
            </div>

            {/* Rows */}
            {completeFeatures.map((feature, i) => {
              const inBasic = i === 0;
              return (
                <div
                  key={i}
                  className={`grid grid-cols-[1fr_auto_auto] items-center ${i % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"} border-t-2 border-[#0a0a0a]`}
                >
                  <div className="px-4 py-2.5 text-xs font-medium text-[#0a0a0a] leading-snug">
                    {feature}
                  </div>
                  <div className="px-5 py-2.5 flex justify-center border-l-2 border-[#0a0a0a]">
                    {inBasic ? (
                      <Check className="w-4 h-4 text-[#0a0a0a]" strokeWidth={3} />
                    ) : (
                      <span className="text-gray-300 text-sm font-bold">—</span>
                    )}
                  </div>
                  <div className="px-5 py-2.5 flex justify-center border-l-2 border-[#0a0a0a]">
                    <Check className="w-4 h-4 text-[#00b800]" strokeWidth={3} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Price Callout */}
          <div className="bg-[#0a0a0a] rounded-2xl p-4 mb-4 border-4 border-[#0a0a0a] shadow-[4px_4px_0px_#000000] text-center">
            <p className="text-gray-400 text-[11px] line-through mb-0.5">De R$ 37,90 por R$ 27,90</p>
            <p className="text-[#ccff00] font-display font-bold text-lg">
              só R$ 10 a mais
            </p>
          </div>

          {/* CTA — Complete Plan */}
          <a
            href="https://pay.wiapy.com/tpMyTiuVl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex flex-col items-center justify-center bg-[#ccff00] text-[#0a0a0a] border-4 border-[#0a0a0a] rounded-full px-6 py-4 font-display font-bold uppercase tracking-wide text-base shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-0.5 active:shadow-[2px_2px_0px_#000000] active:translate-y-1 transition-all duration-300 mb-3 overflow-hidden wobble-hover animate-pulse-slow"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            <span className="relative z-10">Quero o plano completo por R$ 27,90</span>
          </a>

          {/* Refusal Link */}
          <a
            href="https://pay.wiapy.com/cUChn5mjNW"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-xs text-[#0a0a0a]/50 hover:text-[#0a0a0a] underline underline-offset-2 transition-colors py-1 font-medium"
          >
            Não, prefiro continuar com o plano básico
          </a>
        </div>
      </div>
    </div>
  );
}
