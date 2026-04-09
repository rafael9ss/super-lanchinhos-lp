import { useState, useEffect } from "react";
import { ChevronDown, Star, Zap, Clock, Smartphone, Infinity, ArrowRight } from "lucide-react";

export default function Upsell() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  useEffect(() => {
    const scriptUrl = "https://scripts.converteai.net/a930954b-410c-46a3-9750-318da063a52e/players/69d7a93834b9374d497d4153/v4/player.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const s = document.createElement("script");
      s.src = scriptUrl;
      s.async = true;
      document.head.appendChild(s);
    }
    // Initialize Wiapy Upsell
    const initWiapy = () => {
      // @ts-ignore
      if (window.initWiapyUpsell) {
        // @ts-ignore
        window.initWiapyUpsell({
            linkUrl: "https://pay.wiapy.com/checkout/69d80f0e93fbb1e7e714198e",
            linkText: "SIM, EU ACEITO ESSA OFERTA",
            styles: {
                backgroundColor: "#00d769",
                hoverBackgroundColor: "#00b85a",
                fontSize: "17px",
                borderRadius: "10px"
            },
            refusalLinkUrl: "https://superlanchinhosdown.netlify.app",
            refusalLinkText: "Recusar está oferta",
            refusalLinkColor: "#000000"
        });
      } else {
        setTimeout(initWiapy, 500);
      }
    };
    initWiapy();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] overflow-x-hidden font-sans">
      
      {/* Sticky Nav Pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="nav-pill px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#ccff00] brutal-border flex items-center justify-center font-display font-bold text-xl">
              N
            </span>
            <span className="font-display font-bold hidden sm:block">nutri_ai</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#offer" className="font-medium text-sm hover:underline hidden sm:block">o que é</a>
            <a href="#offer" className="font-medium text-sm hover:underline hidden sm:block">o que muda</a>
            <a 
              href="#checkout" 
              className="bg-[#0a0a0a] text-white px-6 py-2 rounded-full font-display font-bold text-sm brutal-shadow bouncy-scale wobble-hover"
            >
              pegar oferta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 bg-[#ccff00] relative overflow-hidden">
        {/* Decorative blur blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ff0099]/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-[#7000ff]/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Floating Stickers */}
        <div className="sticker sticker-delayed top-[60%] left-[5%] slant-3 text-4xl">🤖</div>
        <div className="sticker top-[15%] right-[45%] slant-2 text-4xl hidden lg:block">⚡</div>

        <div className="container max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-6 relative z-20">
              <p className="font-bold text-lg inline-block py-1 px-3 bg-white brutal-border brutal-shadow-sm w-max slant-n2">
                boa escolha!
              </p>
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] font-display font-bold">
                você acabou de investir na <span className="gradient-text">alimentação</span> do seu filho.
              </h1>
              
              <p className="text-xl font-medium max-w-lg mt-2">
                agora temos algo que vai tornar isso <strong>muito mais fácil no dia a dia</strong>. conheça sua assistente de lanches com IA, disponível a qualquer hora.
              </p>

              {/* VTurb Video */}
              <div className="mt-6 mb-2 w-full max-w-[400px] brutal-border brutal-shadow-sm bg-black overflow-hidden" style={{ borderRadius: '1rem' }}>
                <div dangerouslySetInnerHTML={{ __html: `<vturb-smartplayer id="vid-69d7a93834b9374d497d4153" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>` }} />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a 
                  href="#checkout" 
                  className="bg-[#0a0a0a] text-white px-8 py-5 text-center font-display font-bold text-xl brutal-shadow bouncy-scale"
                >
                  Sim, me mostra como funciona
                </a>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="sticker top-[10%] -right-8 z-30 text-5xl slant-3">🍓</div>
              <div className="sticker sticker-delayed bottom-[10%] -left-8 z-30 text-5xl slant-n2">🥦</div>
              
              <div className="phone-mockup w-full max-w-[320px] aspect-[9/19] bg-white relative p-4 flex flex-col slant-2 transform transition-transform hover:rotate-0 duration-500">
                <div className="absolute top-0 inset-x-0 h-6 bg-white z-20 flex justify-center rounded-t-3xl">
                  <div className="w-1/3 h-5 bg-[#0a0a0a] rounded-b-xl"></div>
                </div>
                
                <div className="flex-1 overflow-hidden mt-6 flex flex-col gap-3">
                  <div className="p-4 bg-[#f0f0f0] brutal-border brutal-shadow-sm rounded-xl slant-n1">
                    <p className="font-bold">eu tenho: banana, aveia e iogurte.</p>
                  </div>
                  <div className="p-4 bg-[#ccff00] brutal-border brutal-shadow-sm rounded-xl ml-4 slant-1">
                    <p className="font-display font-bold mb-2 flex items-center gap-2"><Zap size={16}/> nutri_ai diz:</p>
                    <p className="text-sm font-medium">aqui estão 3 opções de lanche em 2 min:</p>
                    <div className="mt-2 bg-white brutal-border p-2 text-xs font-bold">1. panqueca rápida de banana</div>
                    <div className="mt-2 bg-white brutal-border p-2 text-xs font-bold">2. parfait de iogurte com aveia</div>
                    <div className="mt-2 bg-white brutal-border p-2 text-xs font-bold">3. smoothie energético</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t-4 border-[#0a0a0a] flex justify-between items-center px-2">
                  <div className="w-8 h-8 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center"><Smartphone size={16}/></div>
                  <div className="px-4 py-2 bg-[#ff0099] text-white brutal-border font-bold text-xs bouncy-scale">gerar lanche</div>
                  <div className="w-8 h-8 rounded-full bg-transparent border-2 border-[#0a0a0a] flex items-center justify-center">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slanted Marquee */}
      <div className="bg-[#0a0a0a] text-white py-4 brutal-border border-x-0 border-white slant-1 scale-110 my-10 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="marquee-track flex gap-8 items-center font-display font-bold text-2xl uppercase whitespace-nowrap">
          <span>LANCHES EM SEGUNDOS</span>
          <span className="text-[#ccff00]">✿</span>
          <span>SEM LISTA DE COMPRAS</span>
          <span className="text-[#ff0099]">✿</span>
          <span>CARDÁPIO SEMANAL SOB DEMANDA</span>
          <span className="text-[#ccff00]">✿</span>
          <span>ADAPTAÇÃO AUTOMÁTICA</span>
          <span className="text-[#ff0099]">✿</span>
          <span>LANCHES EM SEGUNDOS</span>
          <span className="text-[#ccff00]">✿</span>
          <span>SEM LISTA DE COMPRAS</span>
          <span className="text-[#ff0099]">✿</span>
          <span>CARDÁPIO SEMANAL SOB DEMANDA</span>
          <span className="text-[#ccff00]">✿</span>
          <span>ADAPTAÇÃO AUTOMÁTICA</span>
          <span className="text-[#ff0099]">✿</span>
        </div>
      </div>

      {/* Comparison Bento */}
      <section className="py-24 px-4 container max-w-5xl" id="offer">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16">
          o que <span className="text-[#7000ff] bg-[#ccff00] px-2 brutal-border slant-n2 inline-block">muda</span> na sua rotina
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          {/* Item 1 - Left */}
          <div className="md:col-span-5 bg-white brutal-border brutal-shadow p-6 flex flex-col justify-center slant-n1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff0099] mb-2 drop-shadow-sm">sem a nutri</span>
            <p className="font-bold text-lg">Abre a geladeira e não sabe o que fazer com o que tem.</p>
          </div>
          <div className="hidden md:flex md:col-span-2 items-center justify-center">
            <ArrowRight size={40} className="text-[#0a0a0a]" />
          </div>
          {/* Item 1 - Right */}
          <div className="md:col-span-5 bg-[#ccff00] brutal-border brutal-shadow p-6 flex flex-col justify-center slant-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7000ff] mb-2 drop-shadow-sm">com a nutri</span>
            <p className="font-bold text-lg">Digita os ingredientes e recebe 3 opções de lanche em segundos.</p>
          </div>

          {/* Item 2 - Left */}
          <div className="md:col-span-5 bg-white brutal-border brutal-shadow p-6 flex flex-col justify-center slant-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff0099] mb-2 drop-shadow-sm">sem a nutri</span>
            <p className="font-bold text-lg">Passa minutos pesquisando receita e ainda não sabe se a criança vai aceitar.</p>
          </div>
          <div className="hidden md:flex md:col-span-2 items-center justify-center">
            <ArrowRight size={40} className="text-[#0a0a0a]" />
          </div>
          {/* Item 2 - Right */}
          <div className="md:col-span-5 bg-[#0a0a0a] text-white brutal-border brutal-shadow-white p-6 flex flex-col justify-center slant-n1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2 drop-shadow-sm">com a nutri</span>
            <p className="font-bold text-lg">Lanche pensado para o gosto e a faixa etária do seu filho.</p>
          </div>

           {/* Item 3 - Spanning bottom */}
           <div className="md:col-span-12 bg-[#ff0099] brutal-border brutal-shadow p-8 flex flex-col md:flex-row gap-8 items-center text-white mt-8">
            <div className="flex-1">
              <h3 className="font-display font-bold text-3xl mb-4">tudo resolvido em 1 clique</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-[#ccff00] mt-1">✓</span>
                  Em vez do "Domingo à noite sem ideia", você pede o cardápio e já planeja tudo.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccff00] mt-1">✓</span>
                  Restrição alimentar? A Nutri adapta automaticamente, sem você precisar pesquisar substitutos.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-white text-[#0a0a0a] brutal-border p-4 text-center transform slant-2 scale-105">
               <div className="font-display font-bold text-2xl mb-2">nutri_ai</div>
               <p className="text-sm font-medium">Sua paz mental custa menos que um lanche na rua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-100 border-y-4 border-[#0a0a0a]">
        <div className="container max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 uppercase">
            tudo que está incluso
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white brutal-border brutal-shadow p-6 bouncy-scale flex flex-col h-full">
              <div className="w-12 h-12 bg-[#ccff00] rounded-full brutal-border flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">lanche com o que tem em casa</h3>
              <p className="font-medium text-gray-700">informa os ingredientes da geladeira e a Nutri cria receitas saudáveis na hora — sem lista de compras obrigatória.</p>
            </div>
            
            <div className="bg-white brutal-border brutal-shadow p-6 bouncy-scale flex flex-col h-full">
               <div className="w-12 h-12 bg-[#7000ff] text-white rounded-full brutal-border flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">cardápio semanal sob demanda</h3>
              <p className="font-medium text-gray-700">um único pedido e você tem segunda a sexta planejado, com variedade e equilíbrio nutricional.</p>
            </div>
            
            <div className="bg-[#0a0a0a] text-white brutal-border brutal-shadow-white p-6 bouncy-scale flex flex-col h-full slant-1">
               <div className="w-12 h-12 bg-[#ff0099] rounded-full brutal-border flex items-center justify-center mb-4">
                <Star size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-[#ccff00]">adaptação para restrições</h3>
              <p className="font-medium">glúten, lactose, amendoim — a Nutri substitui e adapta qualquer receita sem você pesquisar.</p>
            </div>

            <div className="bg-white brutal-border brutal-shadow p-6 bouncy-scale flex flex-col h-full slant-n1">
               <div className="w-12 h-12 bg-[#ccff00] rounded-full brutal-border flex items-center justify-center mb-4 text-2xl font-bold">
                🧸
              </div>
              <h3 className="font-display font-bold text-xl mb-3">aceitação garantida</h3>
              <p className="font-medium text-gray-700">lanches que crianças de 4 a 10 anos realmente aceitam de acordo com textura, apresentação e sabor real — não só em nutrição.</p>
            </div>

            <div className="bg-white brutal-border brutal-shadow p-6 bouncy-scale flex flex-col h-full lg:col-span-2">
               <div className="w-12 h-12 bg-[#ff0099] text-white rounded-full brutal-border flex items-center justify-center mb-4">
                <Infinity size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">disponível a qualquer hora</h3>
              <p className="font-medium text-gray-700 text-lg">às 6h antes da escola ou às 22h planejando o dia seguinte — sem esperar, sem pesquisar, sem culpa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 container max-w-4xl text-center">
        <div className="relative inline-block">
          <div className="sticker -top-8 -left-8 text-4xl slant-n3">⭐</div>
          <div className="sticker -bottom-4 -right-10 text-4xl slant-2">⭐</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 relative z-10 px-8 py-4 bg-white brutal-border brutal-shadow slant-1 leading-snug">
            "Abri a geladeira, tinha banana, aveia e iogurte. Em 2 minutos eu tinha 3 opções fáceis. Isso nunca tinha acontecido com lanche saudável antes."
          </h2>
        </div>
        <p className="text-xl font-bold mt-8 inline-block bg-[#0a0a0a] text-white px-6 py-2 brutal-border slant-n1">
          Camila R. — mãe do Theo, 7 anos
        </p>
      </section>

      {/* Giant CTA & Footer */}
      <section id="checkout" className="pt-32 pb-20 px-4 bg-[#ff0099] border-t-8 border-[#0a0a0a] relative overflow-hidden flex flex-col items-center">
        {/* Massive background text */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden flex justify-center">
          <span className="text-[15vw] font-display font-black text-black/10 leading-none tracking-tighter whitespace-nowrap">
            NUTRI_AI
          </span>
        </div>

        <div className="relative z-10 w-full max-w-3xl bg-white brutal-border brutal-shadow p-8 md:p-12 text-center slant-n1">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase">
            Acesso <span className="text-[#7000ff]">Completo</span>
          </h2>
          <p className="text-2xl md:text-3xl font-display font-bold mb-8">
            à Nutri — assistente de lanches com IA
          </p>
          
          <div className="inline-block bg-[#ccff00] px-8 py-4 brutal-border brutal-shadow-sm mb-10 slant-2 font-display font-black text-6xl">
            R$ 49,90
          </div>
          
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-8">Pagamento único · Acesso vitalício</p>
          
          <div className="flex flex-col gap-5 w-full max-w-md mx-auto relative">
            <div className="sticker -left-12 top-4 text-4xl slant-n2">🔥</div>
            
            <div id="wiapy_upsell" className="w-full"></div>
          </div>
        </div>
      </section>
      
      {/* Footer minimalista brutalista */}
      <footer className="bg-white py-12 px-4 border-t-8 border-[#0a0a0a] text-center">
        <p className="font-bold font-display text-2xl mb-4">super lanchinhos</p>
        <p className="text-sm font-medium opacity-60">© {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
