import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, ShieldCheck, Lock, AlertTriangle, Sparkles, Heart, Clock3, Salad, CalendarDays, Apple } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CTAButton } from "@/components/CTAButton";
import { UpsellPopup } from "@/components/UpsellPopup";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ──── Animation Helpers ──── */

function RevealOnScroll({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.175, 0.885, 0.32, 1.275] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerChildren({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerItem = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] as const } },
} as const;

/* ──── Floating Sticker ──── */
function Sticker({ emoji, className, delayed }: { emoji: string; className?: string; delayed?: boolean }) {
  return <span className={`sticker ${delayed ? "sticker-delayed" : ""} ${className || ""}`}>{emoji}</span>;
}

/* ──── Marquee ──── */
function MarqueeSection() {
  const items = [
    "receitas fáceis ✦", "sem conservantes ✦", "crianças aprovam ✦",
    "lanches saudáveis ✦", "mães felizes ✦", "escola nota 10 ✦",
    "prático e rápido ✦", "nutrição de verdade ✦",
  ];
  return (
    <div className="relative py-4 bg-[#0a0a0a] border-y-4 border-white/20 overflow-hidden" style={{ transform: "rotate(-1.5deg)", margin: "0 -20px" }}>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white font-display font-bold text-lg md:text-2xl uppercase tracking-wider px-6 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──── FAQ Accordion ──── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <details className="brutal-accordion mb-4" open={isOpen} onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}>
      <summary>
        <span className="pr-4">{question}</span>
        <span className="text-2xl font-bold transition-transform duration-300 shrink-0" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </summary>
      <div className="accordion-content"><p>{answer}</p></div>
    </details>
  );
}

/* ══════════════════════════════════════ */
/*           MAIN HOME COMPONENT          */
/* ══════════════════════════════════════ */
export default function Home() {
  const [upsellOpen, setUpsellOpen] = useState(false);
  const vtubrContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = vtubrContainerRef.current;
    if (!container) return;

    // Create and insert the custom element
    const player = document.createElement("vturb-smartplayer");
    player.setAttribute("id", "vid-69d7c54734b9374d497d9c51");
    player.style.cssText = "display:block;margin:0 auto;width:100%;";
    container.appendChild(player);

    // Re-inject the player script so it initialises the newly added element
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/a930954b-410c-46a3-9750-318da063a52e/players/69d7c54734b9374d497d9c51/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (container.contains(player)) container.removeChild(player);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const scrollToOffer = () => {
    const el = document.getElementById("oferta");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  /* ── Ideal audience profiles ── */
  const idealFor = [
    { icon: "⏰", title: "Vive na correria", text: "Quer cuidar da alimentação do seu filho, mas quase não tem tempo para cozinhar no dia a dia." },
    { icon: "💔", title: "Sente culpa com junk food", text: "Acaba oferecendo lanches rápidos ou industrializados, mesmo sabendo que não é o ideal." },
    { icon: "🥗", title: "Busca praticidade com nutrição", text: "Quer receitas simples, rápidas e equilibradas, que façam bem e que seu filho realmente coma." },
    { icon: "📋", title: "Quer uma rotina organizada", text: "Deseja cardápios prontos, listas de compras e combinações práticas para não perder tempo pensando." },
    { icon: "🌱", title: "Quer ver seu filho comendo melhor", text: "Mais energia, menos 'birra', menos açúcar e mais saúde — sem briga e sem estresse na hora de comer." },
  ];

  /* ── Product features (main guide) ── */
  const mainFeatures = [
    "Mais de 200 receitas rápidas e nutritivas para café da manhã, almoço, jantar e lanchinhos pra escola.",
    "Cardápios semanais prontos + listas de compras econômicas.",
    "Sugestões de combinações pra café da manhã, lanche e jantar.",
    "Modo de preparo passo a passo e fácil de seguir.",
    "Lista de substituições saudáveis pra quando faltar algum ingrediente.",
    "Atualizações mensais gratuitas com novas receitas e cardápios.",
  ];

  /* ── 7 Bonuses ── */
  const bonuses = [
    {
      num: "01",
      emoji: "🍕",
      title: "Receitas de Pãozinhos e Pizzas sem Açúcar e Glúten",
      desc: "Faça versões saudáveis das comidas que seu filho ama. Sem açúcar, sem glúten e prontas em minutos. Assim, você mata a vontade dele de 'besteira' sem sair da alimentação saudável.",
      image: "/images/bonus-01.jpg"
    },
    {
      num: "02",
      emoji: "🗂️",
      title: "Guia Prático de Organização e Congelamento das Receitas",
      desc: "Aprenda a preparar tudo de uma vez e deixar a semana pronta em menos de 30 minutos. Ganhe tempo, evite desperdício e mantenha as receitas sempre fresquinhas e fáceis de servir.",
      image: "/images/bonus-02.jpg"
    },
    {
      num: "03",
      emoji: "🌿",
      title: "Receitas Especiais para Crianças com Alergias",
      desc: "Receitas seguras, gostosas e adaptadas para alergias comuns (leite, ovo, soja, amendoim). Mesmo sem alergias, é útil para variação de receitas e redução de alimentos inflamatórios.",
      image: "/images/bonus-03.jpg"
    },
    {
      num: "04",
      emoji: "🍬",
      title: "Doces Deliciosos e Saudáveis",
      desc: "Substitua os industrializados por doces saudáveis que seu filho vai amar, feitos com ingredientes naturais, sem culpa e com muito sabor.",
      image: "/images/bonus-04.jpg"
    },
    {
      num: "05",
      emoji: "💚",
      title: "Manual do Anti-Seletividade Alimentar",
      desc: "Não é sobre 'forçar a criança a comer'. São técnicas simples de adaptação alimentar gentil, já utilizadas e aprovadas por mães de crianças seletivas de verdade.",
      image: "/images/bonus-05.jpg"
    },
    {
      num: "06",
      emoji: "🍹",
      title: "Suquinhos Saudáveis e Fáceis de Fazer!",
      desc: "Receitas práticas de sucos naturais, nutritivos e gostosos para alegrar o dia do seu filho — perfeitos pra lancheira, café da manhã ou tarde.",
      image: "/images/bonus-suquinhos.jpg"
    },
    {
      num: "07",
      emoji: "🎒",
      title: "Guia Prático de Montagem de Lancheiras",
      desc: "Aprenda a montar lancheiras variadas, equilibradas e cheias de sabor, sem perder tempo pensando no que colocar todo dia.",
      image: "/images/bonus-07.jpg"
    },
  ];

  /* ── FAQs ── */
  const faqs = [
    { q: "Meu filho é muito chato pra comer, vai funcionar?", a: "Com certeza! As receitas foram testadas com crianças de todas as idades e gostos. São receitas que parecem 'besteira' mas são super saudáveis. Seu filho vai amar sem nem perceber que está comendo bem." },
    { q: "As receitas usam ingredientes caros ou difíceis de achar?", a: "Não! Todas as receitas usam ingredientes que você encontra em qualquer supermercado. Nada de ingrediente exótico ou caro. O objetivo é ser prático e acessível." },
    { q: "Preciso ter habilidade na cozinha?", a: "Zero! Cada receita tem o passo a passo com fotos e dicas. Se você sabe ligar o forno e usar uma colher, já é o suficiente. São receitas feitas para mães ocupadas, não para chefs." },
    { q: "Quanto tempo leva para preparar?", a: "A maioria das receitas leva de 10 a 15 minutos. Algumas podem ser preparadas no dia anterior. Também temos receitas de 5 minutos para emergências!" },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você recebe o acesso por e-mail. É 100% digital — acesse pelo celular, tablet ou computador, onde e quando quiser." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias inteiros para testar. Se por qualquer motivo não ficar satisfeita, basta enviar um único e-mail e devolvemos 100% do seu investimento, e você ainda pode ficar com o produto!" },
  ];

  /* ── Complete checklist for bundle ── */
  const bundleFeatures = [
    "Super Lanchinhos completo da alimentação infantil saudável.",
    "Mais de 200 receitas rápidas e nutritivas.",
    "Cardápios semanais prontos + listas de compras econômicas.",
    "Modo de preparo passo a passo e fácil de seguir.",
    "Lista de substituições saudáveis.",
    "Guia prático de organização e congelamento das receitas.",
    "Receitas especiais para crianças alérgicas.",
    "Receitas de doces deliciosos e saudáveis.",
    "Manual do anti-seletividade alimentar.",
    "Receitas de suquinhos saudáveis.",
    "Manual prático de montagem de lancheiras.",
    "Atualizações mensais gratuitas com novas receitas.",
    "Acesso vitalício, acesse quando e onde quiser.",
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#0a0a0a] overflow-x-hidden">

      {/* ====== STICKY NAV PILL ====== */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg">
        <div className="nav-pill px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ccff00] border-2 border-[#0a0a0a] rounded-full flex items-center justify-center font-display font-bold text-sm shadow-[2px_2px_0px_#000000] overflow-hidden">
              <img src="/images/logo-menu.png" alt="Super Lanchinhos logo" className="w-[90%] h-[90%] object-contain" />
            </div>
            <span className="font-display font-bold text-sm lowercase hidden sm:block">super lanchinhos</span>
          </div>
          <button onClick={scrollToOffer} className="bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full font-display font-bold text-xs lowercase border-2 border-[#0a0a0a] shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300 wobble-hover">
            quero agora 🔥
          </button>
        </div>
      </nav>

      {/* ====== URGENCY BAR ====== */}
      <div className="bg-[#0a0a0a] text-white font-bold text-center py-2.5 px-2 text-xs uppercase tracking-widest sticky top-0 z-40 border-b-4 border-[#ccff00]">
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <AlertTriangle className="w-4 h-4 text-[#ccff00] shrink-0" />
          <span className="font-display lowercase">oferta por tempo limitado:</span>
          <CountdownTimer />
          <AlertTriangle className="w-4 h-4 text-[#ccff00] shrink-0 hidden md:block" />
        </div>
      </div>

      {/* ====== HERO SECTION ====== */}
      <header className="relative bg-[#ccff00] overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute top-10 right-[-100px] w-[300px] h-[300px] rounded-full bg-[#ff0099]/20 blur-[80px] z-0" />
        <div className="absolute bottom-[-50px] left-[-80px] w-[250px] h-[250px] rounded-full bg-[#7000ff]/15 blur-[60px] z-0" />

        <div className="container mx-auto max-w-5xl relative z-10 px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
                className="inline-flex items-center gap-2 bg-[#0a0a0a] text-[#ccff00] px-4 py-1.5 font-display font-bold text-[11px] uppercase tracking-[0.15em] mb-5 border-4 border-[#0a0a0a] rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                guia completo de receitas infantis
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
                className="text-[clamp(2.2rem,7vw,4.5rem)] font-bold leading-[0.95] mb-5 tracking-[-0.05em] text-[#0a0a0a]"
              >
                Mais de{" "}
                <span className="gradient-text">200 ideias de lanchinhos</span>
                <br />
                simples e saudáveis —{" "}
                <br />
                porque cuidar de quem você ama não precisa ser complicado. 🍎
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg text-[#0a0a0a]/70 mb-8 max-w-md leading-relaxed"
              >
                Em menos de <strong className="text-[#0a0a0a]">15 minutos</strong>, com ingredientes baratos e fáceis
                de encontrar em qualquer mercado, você pode cuidar do seu filho mesmo com uma rotina corrida.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <CTAButton onClick={scrollToOffer} variant="black" className="flex-1">
                  🔥 QUERO ADQUIRIR O MEU
                </CTAButton>
              </div>
            </div>

            {/* Right: VTurb Video Player */}
            <div className="order-1 md:order-2 flex justify-center items-center relative w-full">
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
                className="relative w-full max-w-[420px]"
              >
                <div
                  ref={vtubrContainerRef}
                  className="brutal-card rounded-3xl overflow-hidden border-[#0a0a0a] bg-black min-h-[220px]"
                />
                <div className="mt-4 w-full">
                  <CTAButton onClick={scrollToOffer} variant="black" className="w-full">
                    🔥 QUERO ADQUIRIR O MEU
                  </CTAButton>
                </div>
              </motion.div>
              <Sticker emoji="🥑" className="top-[-10px] right-[10%] md:right-[5%]" />
              <Sticker emoji="🧁" className="bottom-[10%] left-[-5%] md:left-[0%]" delayed />
              <Sticker emoji="⭐" className="top-[20%] right-[-5%] md:right-[-10%]" />
            </div>
          </div>
        </div>
      </header>

      {/* ====== SLANTED MARQUEE ====== */}
      <MarqueeSection />

      {/* ====== STAT CALLOUT ====== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <RevealOnScroll>
            <div className="brutal-card bg-[#0a0a0a] text-white p-6 md:p-12 rounded-3xl" style={{ transform: "rotate(-0.5deg)" }}>
              <img src="/images/700-800.png" alt="700 a 800 lanches por ano" className="w-full max-w-2xl mx-auto rounded-2xl mb-6 shadow-[4px_4px_0px_#ccff00]" />
              <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4">
                Oferecer apenas biscoitos, salgadinhos ou suco de caixinha tantas vezes pode afetar o desenvolvimento e a saúde dele.
                Não é que você não se importa — <strong className="text-[#ccff00]">você só não tem tempo sobrando, nem cabeça para inventar lanche todos os dias.</strong>
              </p>
              <div className="mt-8 p-5 bg-white/10 border-2 border-white/20 rounded-2xl max-w-xl mx-auto">
                <p className="text-white/80 italic text-sm md:text-base">
                  "Eu sei que não é o ideal, mas hoje vai assim mesmo… <span className="text-[#ff0099] font-bold not-italic">de novo.</span>"
                </p>
              </div>
              <p className="mt-6 text-[#ccff00] font-display font-bold text-base md:text-lg">
                O Super Lanchinhos foi criado justamente para essas mães 💛
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="mt-8 max-w-sm mx-auto">
              <CTAButton onClick={scrollToOffer} variant="black" className="w-full">
                🔥 QUERO ADQUIRIR O MEU!
              </CTAButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ====== IDEAL FOR YOU ====== */}
      <section className="py-16 md:py-24 bg-[#f5f5f5] relative">
        <div className="container mx-auto max-w-4xl px-4">
          <RevealOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#ff0099]/10 text-[#ff0099] font-display font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 mb-4 border-4 border-[#0a0a0a] rounded-full shadow-[4px_4px_0px_#000000]">
                isso é pra você 👇
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
                Ideal para você, mamãe que:
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {idealFor.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="brutal-card bg-white p-5 rounded-2xl flex items-start gap-4 group"
                style={{ transform: `rotate(${index % 2 === 0 ? -0.8 : 0.8}deg)` }}
              >
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-sm md:text-base mb-1 font-display">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>

          <RevealOnScroll delay={0.2}>
            <div className="mt-12 bg-[#0a0a0a] rounded-3xl p-6 md:p-8 text-white max-w-3xl mx-auto border-4 border-[#0a0a0a]">
              <h3 className="font-display font-bold text-lg md:text-xl mb-4 text-[#ccff00]">
                Você consegue usar HOJE, mesmo se estiver exausta:
              </h3>
              <ul className="space-y-3">
                {[
                  "Receitas com poucos ingredientes e modo de preparo em 3–5 passos.",
                  "Sugestões prontas de combinações para café, lanche e jantar.",
                  "Cardápios semanais para não precisar pensar no que fazer amanhã.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-[#ccff00] p-1 border-2 border-white shrink-0 rounded-full mt-0.5">
                      <Check className="text-[#0a0a0a] w-3 h-3" />
                    </div>
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="mt-8 max-w-sm mx-auto">
              <CTAButton onClick={scrollToOffer} variant="pink" className="w-full">
                🔥 QUERO ADQUIRIR O MEU!
              </CTAButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ====== WHAT YOU RECEIVE — MAIN PRODUCT ====== */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#ccff00] text-[#0a0a0a] font-display font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 mb-4 border-4 border-[#ccff00] rounded-full">
                você vai receber 📦
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white">
                Tudo que você precisa<br />
                <span className="text-[#ccff00]">começa aqui</span>
              </h2>
            </div>
          </RevealOnScroll>

          {/* Main Product Card */}
          <RevealOnScroll>
            <div className="brutal-card bg-[#1a1a1a] border-4 border-[#ccff00] rounded-3xl p-6 md:p-10 mb-6" style={{ transform: "rotate(-0.5deg)" }}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="bg-[#ccff00] text-[#0a0a0a] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-[#0a0a0a] mb-3">
                    ITEM 01
                  </div>
                  <img src="/images/plano-basico.jpg" alt="Super Lanchinhos — Guia completo" className="w-[160px] md:w-[200px] h-auto object-contain rounded-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">Super Lanchinhos</h3>
                  <p className="text-[#ccff00] text-sm mb-4">Guia completo da alimentação infantil saudável.</p>
                  <ul className="space-y-2.5">
                    {mainFeatures.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="bg-[#ccff00] p-0.5 border-2 border-white/30 shrink-0 rounded-full mt-1">
                          <Check className="text-[#0a0a0a] w-3 h-3" />
                        </div>
                        <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2.5">
                      <div className="bg-[#ccff00] p-0.5 border-2 border-white/30 shrink-0 rounded-full mt-1">
                        <Check className="text-[#0a0a0a] w-3 h-3" />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">E muito mais…</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bonuses Header */}
          <RevealOnScroll>
            <div className="text-center my-10 md:my-14">
              <h3 className="text-xl md:text-2xl font-bold text-white/60 uppercase tracking-[0.15em] mb-3">
                E não para por aí…
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-[0.95] tracking-[-0.05em]">
                Você também vai receber<br />
                <span className="text-[#ff0099]">7 Bônus Exclusivos</span>
              </h2>
            </div>
          </RevealOnScroll>

          {/* Bonuses Grid */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonuses.map((bonus, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`bg-[#1a1a1a] border-4 rounded-2xl p-5 md:p-6 relative ${i === 0 ? "md:col-span-2 border-[#ff0099]" : "border-white/20"}`}
                style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="bg-[#ff0099] text-white font-display font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border-2 border-white mb-2 text-center whitespace-nowrap">
                      BÔNUS HOJE! #{bonus.num}
                    </div>
                    {bonus.image ? (
                        <img src={bonus.image} alt={bonus.title} className="w-[180px] md:w-[240px] shrink-0 object-cover rounded-xl mt-2 rotate-2 shadow-[4px_4px_0px_rgba(255,255,255,0.2)]" />
                    ) : (
                        <div className="text-4xl text-center">{bonus.emoji}</div>
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-white text-base md:text-lg font-display mb-2 leading-tight">{bonus.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{bonus.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="py-16 md:py-24 bg-[#f5f5f5] relative">
        <div className="container mx-auto max-w-4xl px-4">
          <RevealOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#ccff00] text-[#0a0a0a] font-display font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 mb-4 border-4 border-[#0a0a0a] rounded-full shadow-[4px_4px_0px_#000000]">
                resultados reais 💬
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
                Veja a opinião dessas mães<br />
                que usam o <span className="gradient-text">Super Lanchinhos!</span>
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[1, 2, 3, 4].map((num, i) => (
              <motion.div
                key={num}
                variants={staggerItem}
                className="brutal-card bg-white p-2 rounded-2xl hover:-translate-y-1"
                style={{ transform: `rotate(${[-1.5, 0.5, -0.5, 1][i]}deg)` }}
              >
                <img
                  src={`/images/depoimento${num}.png`}
                  alt={`Depoimento real de mãe ${num}`}
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ====== SECOND MARQUEE ====== */}
      <MarqueeSection />

      {/* ====== OFFER SECTION ====== */}
      <section id="oferta" className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block bg-[#ff0099]/10 text-[#ff0099] font-display font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 mb-4 border-4 border-[#0a0a0a] rounded-full shadow-[4px_4px_0px_#000000]">
                escolha a melhor opção para você
              </span>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.05em]">
                Comece a<br /> <span className="gradient-text">transformação</span> agora.
              </h2>
            </div>
          </RevealOnScroll>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto items-start">

            {/* PLANO BÁSICO */}
            <RevealOnScroll delay={0.1} className="w-full">
              <div className="brutal-card bg-white overflow-hidden rounded-3xl flex flex-col h-full" style={{ transform: "rotate(-1deg)" }}>
                <div className="bg-[#f5f5f5] p-5 text-center border-b-4 border-[#0a0a0a]">
                  <p className="font-display font-bold text-[11px] uppercase tracking-widest text-gray-400 mb-1">Plano</p>
                  <h3 className="text-2xl font-bold text-[#0a0a0a] tracking-[-0.03em] font-display">BÁSICO</h3>
                </div>
                <div className="p-6 md:p-8 flex flex-col items-center flex-1">
                  <img src="/images/plano-basico.jpg" alt="Plano Básico — Super Lanchinhos" className="w-[80%] h-auto mb-6 object-contain" />

                  <ul className="text-left w-full space-y-2 mb-6">
                    {[
                      "Super Lanchinhos completo da alimentação infantil saudável.",
                      "Mais de 200 receitas rápidas e nutritivas.",
                      "Cardápios semanais prontos + listas de compras econômicas.",
                      "Modo de preparo passo a passo e fácil de seguir.",
                      "Lista de substituições saudáveis.",
                      "Atualizações mensais gratuitas.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="bg-[#f0f0f0] p-0.5 border-2 border-[#0a0a0a] shrink-0 rounded-full mt-0.5">
                          <Check className="text-[#0a0a0a] w-3 h-3" />
                        </div>
                        <span className="text-gray-700 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mt-auto mb-5 w-full">
                    <div className="flex justify-center items-baseline">
                      <span className="text-xl font-bold text-[#0a0a0a] mr-1 font-display">R$</span>
                      <span className="text-5xl font-bold text-[#0a0a0a] tracking-tighter leading-none font-display">17</span>
                      <span className="text-xl font-bold text-[#0a0a0a] font-display">,90</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Ou 12x de R$ 1,85</p>
                  </div>

                  <CTAButton onClick={() => setUpsellOpen(true)} variant="white" className="w-full">
                    QUERO SOMENTE O BÁSICO
                  </CTAButton>

                  <div className="mt-4 text-center">
                    <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                      <Lock className="w-2.5 h-2.5" /> Compra 100% segura • Acesso Imediato • 7 dias de garantia
                    </p>
                  </div>

                  <div className="mt-4 bg-[#fff3cd] border-2 border-[#e6a900] rounded-xl p-3 w-full text-center">
                    <p className="text-[11px] font-bold text-[#8a6000]">
                      ⚠️ ATENÇÃO: Temos uma oferta ainda mais VANTAJOSA para você! Veja logo abaixo
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* PLANO COMPLETO - MAIS VENDIDO */}
            <RevealOnScroll delay={0.3} className="w-full">
              <div className="brutal-card bg-[#0a0a0a] overflow-hidden rounded-3xl flex flex-col h-full relative" style={{ transform: "rotate(1.5deg)" }}>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-[#ff0099] text-white px-3 py-1 font-bold font-display text-[10px] uppercase rounded-full border-2 border-white shadow-[2px_2px_0px_#ffffff] rotate-6 z-10">
                  Mais Vendido ⭐
                </div>

                <div className="bg-[#ccff00] p-5 text-center border-b-4 border-[#0a0a0a]">
                  <p className="font-display font-bold text-[11px] uppercase tracking-widest text-[#0a0a0a]/60 mb-1">Plano</p>
                  <h3 className="text-2xl font-bold text-[#0a0a0a] tracking-[-0.03em] font-display">COMPLETO</h3>
                </div>

                <div className="p-6 md:p-8 flex flex-col items-center flex-1">
                  <img src="/images/bundle-completo.jpg" alt="Plano Completo com todos os bônus" className="w-[90%] h-auto mb-6 object-contain hover:scale-105 transition-transform duration-500" />

                  <p className="text-[#ccff00] font-display font-bold text-xs uppercase tracking-widest mb-3 self-start">Resumo de tudo que você vai receber:</p>
                  <ul className="text-left w-full space-y-2 mb-5 text-white/90">
                    {bundleFeatures.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="bg-[#ccff00] p-0.5 border-2 border-white/30 shrink-0 rounded-full mt-0.5">
                          <Check className="text-[#0a0a0a] w-2.5 h-2.5" />
                        </div>
                        <span className="text-white/80 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price with strikethrough */}
                  <div className="text-center mt-auto mb-2 w-full">
                    <p className="text-gray-500 text-xs line-through mb-1">De R$ 97,90 por:</p>
                    <div className="flex justify-center items-baseline">
                      <span className="text-xl font-bold text-white mr-1 font-display">R$</span>
                      <span className="text-6xl font-bold text-white tracking-tighter leading-none font-display">37</span>
                      <span className="text-xl font-bold text-white font-display">,90</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Ou 12x de R$ 3,92</p>

                    <div className="mt-3 bg-[#ff0099]/20 border border-[#ff0099]/40 rounded-xl p-2.5">
                      <p className="text-[#ff0099] text-[11px] font-bold uppercase tracking-wide">
                        ⏰ OFERTA POR TEMPO LIMITADO: enquanto essa página estiver no ar, você economiza R$ 60 e ainda leva 7 bônus de presente.
                      </p>
                    </div>
                  </div>

                  <CTAButton href="https://pay.wiapy.com/2paum8xHse" variant="acid" className="w-full mt-4">
                    QUERO O PLANO COMPLETO 🔥
                  </CTAButton>

                  <p className="mt-3 text-[10px] text-gray-500 flex items-center justify-center gap-1 text-center">
                    <Lock className="w-2.5 h-2.5" /> Compra 100% segura • Receba instantaneamente por email • 7 dias de garantia
                  </p>

                  <div className="mt-3 bg-[#ccff00]/10 border border-[#ccff00]/30 rounded-xl p-2.5 w-full">
                    <p className="text-[#ccff00] text-[11px] font-bold text-center">
                      🚨 APROVEITE AGORA: Você não vai ver esse preço especial novamente!
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>

          {/* Payment methods badges */}
          <RevealOnScroll delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {["💳 Cartão de Crédito", "💰 PIX", "📄 Boleto", "🔒 100% Seguro"].map((badge, i) => (
                <div key={i} className="bg-[#f5f5f5] border-2 border-[#0a0a0a] rounded-full px-4 py-1.5 text-xs font-bold font-display">
                  {badge}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ====== GUARANTEE ====== */}
      <section className="py-16 md:py-20 bg-[#f5f5f5]">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <RevealOnScroll>
            <div className="brutal-card bg-white p-8 md:p-12 rounded-3xl flex flex-col items-center" style={{ transform: "rotate(-0.5deg)" }}>
              <div className="w-24 h-24 bg-[#ccff00] flex items-center justify-center mb-6 border-4 border-[#0a0a0a] rounded-2xl shadow-[6px_6px_0px_#000000] text-4xl">
                🛡️
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-[-0.05em] mb-4 font-display">
                Satisfação Garantida e Risco Zero!
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg text-sm md:text-base">
                Se você adquirir o Super Lanchinhos e por qualquer motivo não ficar satisfeita, você tem{" "}
                <strong className="text-[#0a0a0a]">7 dias inteiros</strong> para pedir seu reembolso.
              </p>
              <p className="text-gray-500 leading-relaxed max-w-lg text-sm md:text-base mt-3">
                Basta enviar um único e-mail e devolvemos <strong className="text-[#0a0a0a]">100% do seu investimento</strong>.{" "}
                <strong className="text-[#ff0099]">E você ainda pode ficar com o produto!</strong>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ====== BRUTALIST FAQ ====== */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto max-w-2xl px-4">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <span className="inline-block bg-[#7000ff]/10 text-[#7000ff] font-display font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 mb-4 border-4 border-[#0a0a0a] rounded-full shadow-[4px_4px_0px_#000000]">
                perguntas frequentes
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
                Dúvidas? <span className="gradient-text">tá na mão</span> ✌️
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ====== WHATSAPP CONTACT ====== */}
      <section className="py-10 bg-[#0a0a0a] text-white text-center">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white lowercase font-display">ficou com alguma dúvida? 💬</h3>
            <a
              href="https://wa.me/message/LOKQDTQ35F6CM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3 px-7
                       transition-all duration-300 border-4 border-[#0a0a0a] rounded-full shadow-[6px_6px_0px_#000000]
                       hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-0.5
                       text-sm uppercase tracking-wider font-display wobble-hover"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              fale conosco no whatsapp
            </a>
            <p className="mt-5 text-white/50 text-xs font-display lowercase">
              ou envie um e-mail para{" "}
              <a
                href="mailto:superlanchinhosoficial@gmail.com"
                className="text-[#ccff00] underline underline-offset-2 hover:text-white transition-colors"
              >
                superlanchinhosoficial@gmail.com
              </a>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-white text-gray-500 py-10 text-center text-sm border-t-[8px] border-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[15vw] font-display font-bold text-gray-100 uppercase whitespace-nowrap">super lanchinhos</span>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="mb-3 font-medium font-display lowercase">&copy; 2025 super lanchinhos. todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-xs lowercase">
            <a href="#" className="hover:text-[#0a0a0a] transition-colors underline underline-offset-2 font-display">termos de uso</a>
            <a href="#" className="hover:text-[#0a0a0a] transition-colors underline underline-offset-2 font-display">política de privacidade</a>
          </div>
          <p className="mt-6 text-[11px] text-gray-400 max-w-xl mx-auto leading-relaxed">
            Este produto não substitui orientação nutricional profissional. Consulte sempre um nutricionista para dietas específicas.
          </p>
        </div>
      </footer>
      <UpsellPopup isOpen={upsellOpen} onClose={() => setUpsellOpen(false)} />
    </div>
  );
}
