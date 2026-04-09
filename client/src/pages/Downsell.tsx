import { useEffect } from "react";

export default function Downsell() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden relative selection:bg-[#ccff00] selection:text-black pb-32">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..1000;1,9..40,400..1000&family=Space+Grotesk:wght@300..700&display=swap');

        .font-space {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.05em;
        }

        .font-dm {
          font-family: 'DM Sans', sans-serif;
        }

        .brutal-border {
          border: 4px solid #0a0a0a;
        }
        
        .brutal-white-border {
          border: 4px solid #ffffff;
        }

        .brutal-shadow {
          box-shadow: 6px 6px 0px #0a0a0a;
        }
        
        .brutal-white-shadow {
          box-shadow: 6px 6px 0px #ffffff;
        }

        .bouncy-hover {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .bouncy-hover:hover {
          transform: scale(1.05) rotate(-2deg);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .animate-float-1 { animation: float 6s ease-in-out infinite; }
        .animate-float-2 { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float 8s ease-in-out infinite 2s; }

        @keyframes wobble {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
          75% { transform: rotate(-2deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-wobble:hover {
          animation: wobble 0.5s ease-in-out;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />

      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#7000ff] opacity-40 blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ff0099] opacity-30 blur-[120px] -z-10 pointer-events-none"></div>

      {/* Sticky Nav Pill */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/95 backdrop-blur-sm text-black border-2 border-black rounded-full px-2 py-2 flex items-center justify-between" style={{boxShadow: '6px 6px 0px #0a0a0a'}}>
        <div className="flex items-center gap-4 px-4">
          <div className="w-8 h-8 bg-[#ccff00] rounded-full flex items-center justify-center font-space font-bold border-2 border-black">
            N
          </div>
          <span className="font-space font-bold text-sm tracking-tighter lowercase hidden sm:block">nutri — downsell</span>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full font-space font-bold text-sm uppercase bouncy-hover border-2 border-transparent hover:bg-[#ff0099] hover:border-black hover:text-black transition-colors">
          garantir agora
        </button>
      </div>

      <main className="pt-32 px-4 sm:px-8 max-w-7xl mx-auto font-dm">
        
        {/* Anti-Safe Harbor Header */}
        <div className="relative mb-24">
          <div className="absolute -top-10 -left-10 text-6xl animate-float-1 z-10 hidden md:block">
            <div className="bg-white p-2 border-2 border-black" style={{boxShadow: '4px 4px 0px rgba(0,0,0,1)', transform: 'rotate(-10deg)'}}>
              🫣
            </div>
          </div>

          <div className="bg-[#ccff00] border-4 border-black p-6 md:p-12 transform -rotate-1 relative overflow-hidden" style={{boxShadow: '8px 8px 0px #0a0a0a'}}>
            <h1 className="font-space text-black text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] lowercase mb-6 relative z-10 w-full md:w-[85%]">
              tudo bem, sabemos que <span className="bg-gradient-to-r from-[#7000ff] to-[#ff0099] text-transparent bg-clip-text">nem sempre</span> é o momento certo.
            </h1>
            <p className="font-dm text-black font-medium text-xl md:text-2xl max-w-2xl relative z-10 mt-8 mb-4 bg-white inline-block p-2 border-2 border-black transform rotate-1">
              mas antes de ir, deixa a gente te fazer uma proposta diferente.
            </p>
          </div>
        </div>

        {/* Slanted Marquee */}
        <div className="bg-white border-y-4 border-black py-4 my-16 transform rotate-2 w-[110%] -ml-[5%] overflow-hidden relative z-20 flex">
          <div className="flex animate-marquee shrink-0">
            {[...Array(4)].map((_, i) => (
              <div key={`m1-${i}`} className="flex items-center gap-8 px-4 font-space font-black text-2xl text-black uppercase whitespace-nowrap shrink-0">
                <span>CONDIÇÃO ÚNICA E EXCLUSIVA</span>
                <span className="text-[#ff0099]">✦</span>
                <span>NÃO FECHE A PÁGINA</span>
                <span className="text-[#7000ff]">✦</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee shrink-0" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
              <div key={`m2-${i}`} className="flex items-center gap-8 px-4 font-space font-black text-2xl text-black uppercase whitespace-nowrap shrink-0">
                <span>CONDIÇÃO ÚNICA E EXCLUSIVA</span>
                <span className="text-[#ff0099]">✦</span>
                <span>NÃO FECHE A PÁGINA</span>
                <span className="text-[#7000ff]">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 my-20">
          
          {/* Main Value Prop */}
          <div className="md:col-span-7 bg-[#7000ff] brutal-border p-8 md:p-10 transform rotate-1 flex flex-col justify-center relative brutal-shadow">
            <h2 className="font-space font-bold text-4xl sm:text-5xl leading-none mb-6 lowercase">
              a nutri foi desenvolvida para tornar o seu dia a dia mais <span className="bg-[#ccff00] text-black px-2 inline-block -rotate-2">leve</span>
            </h2>
            <p className="text-xl md:text-2xl font-dm">
              por isso, não queremos que o valor seja o que vai ficar entre você e isso.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="md:col-span-5 bg-white text-black brutal-border p-8 md:p-10 transform -rotate-2 flex flex-col relative" style={{boxShadow: '8px 8px 0px #ff0099'}}>
            <div className="font-space font-bold text-lg mb-2 uppercase tracking-tight text-[#7000ff]">Nutri — assistente de lanches com IA</div>
            
            <div className="flex flex-col mb-8 mt-4">
              <span className="line-through text-gray-400 font-space text-2xl">de R$ 49,90</span>
              <div className="font-space font-black text-6xl text-black leading-none mt-1">
                <span className="text-3xl relative top-[-1.5rem]">r$</span>29,90
              </div>
            </div>

            <ul className="space-y-4 mb-10 font-bold">
              <li className="flex items-start gap-3">
                <span className="text-[#ff0099] text-xl mt-1">✓</span>
                <span>lanches com o que tem na geladeira</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff0099] text-xl mt-1">✓</span>
                <span>cardápio semanal sob demanda</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff0099] text-xl mt-1">✓</span>
                <span>adaptação para restrições alimentares</span>
              </li>
            </ul>

            <div className="mt-auto space-y-4">
              <button onClick={() => alert('Checkout')} className="w-full bg-[#ccff00] text-black border-4 border-black py-4 px-6 font-space font-bold text-xl uppercase tracking-tighter bouncy-hover animate-wobble" style={{boxShadow: '4px 4px 0px #0a0a0a'}}>
                quero aproveitar por R$ 29,90
              </button>
              <button onClick={() => alert('No thanks')} className="w-full bg-transparent text-gray-500 border-2 border-dashed border-gray-400 py-3 px-6 font-dm font-medium text-sm hover:text-black hover:border-black transition-colors rounded-none">
                não, quero sair sem o assistente
              </button>
            </div>
          </div>

          {/* Guarantee Span */}
          <div className="md:col-span-12 bg-[#ff0099] brutal-border brutal-shadow p-8 flex flex-col md:flex-row items-center justify-between transform rotate-1 mt-8">
            <div className="font-space text-3xl sm:text-4xl text-black font-black uppercase max-w-2xl text-center md:text-left mb-6 md:mb-0">
              GARANTIA DE 7 DIAS. <br/><span className="text-white text-2xl">SE NÃO GOSTAR, DEVOLVEMOS TUDO.</span>
            </div>
            
            <div className="bg-black text-white p-6 brutal-white-border brutal-white-shadow transform -rotate-3 text-center">
              <div className="font-space font-black text-xs opacity-70 mb-1">PAGAMENTO ÚNICO</div>
              <div className="font-space font-bold text-xl text-[#ccff00]">ACESSO VITALÍCIO.</div>
              <div className="mt-4 font-dm text-sm underline decoration-wavy decoration-[#ff0099]">Essa condição aparece só aqui e só agora.</div>
            </div>
          </div>

        </div>
      </main>

      {/* Massive Graphic Footer */}
      <footer className="mt-32 pt-20 pb-10 border-t-8 border-black bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
          <h2 className="text-[12vw] font-space font-black text-black opacity-[0.03] leading-none whitespace-nowrap">NUTRI AGORA</h2>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-black">
          <div className="font-space font-bold text-2xl mb-4 md:mb-0">
            nutri.
          </div>
          <p className="font-dm text-sm opacity-60 text-center md:text-right">
            © 2026 Super Lanchinhos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
