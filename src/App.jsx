import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  Target,
  Users,
  Layers,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Maximize2,
  Lock,
  Zap,
  Layout,
  BarChart3,
  Search,
  MessageSquare,
  Globe,
  Award,
  ClipboardList,
  Calendar,
  DollarSign,
  UtensilsCrossed,
  Clock,
  Truck,
  Utensils,
  MousePointer2,
  ShoppingBag,
  Palette,
  Type,
  Sparkles,
  Fingerprint
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DitheringShader } from '@/components/ui/dithering-shader';
import AnimatedGradient from '@/components/ui/animated-gradient';

const GrowthSystem = () => {
  const [activePhrase, setActivePhrase] = useState(0);
  const phrases = [
    "Tráfego entrando...",
    "Dados sendo analisados...",
    "Conversões acontecendo...",
    "Clientes retornando..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="growth-container" style={{ paddingTop: 0 }}>
      <div className="growth-grid-bg"></div>

      {/* Floating Text Capsule */}
      <div className="phrase-capsule">
        <AnimatePresence mode="wait">
          <motion.span
            key={activePhrase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[activePhrase]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="scene-wrapper">
        <svg className="growth-svg" viewBox="0 0 800 400">
          <defs>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E03720" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E03720" stopOpacity="0" />
            </radialGradient>

            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#E03720" />
            </marker>
          </defs>

          {/* Connection Lines (Paths) - Now flowing DOWN into the core */}
          <motion.path
            className="connection-path"
            d="M 280,80 Q 280,220 400,270"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.path
            className="connection-path"
            d="M 400,60 L 400,270"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          />
          <motion.path
            className="connection-path"
            d="M 520,80 Q 520,220 400,270"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          />

          {/* Particles */}
          {[1, 2, 3].map((_, i) => (
            <React.Fragment key={i}>
              <circle r="3" fill="#E03720">
                <animateMotion
                  path={i === 0 ? "M 280,80 Q 280,220 400,270" : i === 1 ? "M 400,60 L 400,270" : "M 520,80 Q 520,220 400,270"}
                  dur={`${2 + Math.random()}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.7}s`}
                />
              </circle>
            </React.Fragment>
          ))}

        </svg>

        {/* Central Core (Moved Down) */}
        <motion.div
          className="growth-core"
          style={{ position: 'absolute', top: '67.5%', left: '50%' }}
          animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 20px rgba(224,55,32,0.3)", "0 0 50px rgba(224,55,32,0.6)", "0 0 20px rgba(224,55,32,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <DollarSign size={32} color="#fff" />
        </motion.div>

        <motion.div className="growth-node" style={{ top: '20%', left: '35%' }} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <img src="/Google__G__logo.svg.png" alt="Google" style={{ width: '28px', height: 'auto' }} />
        </motion.div>
        <motion.div className="growth-node" style={{ top: '15%', left: '50%' }} animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
          <img src="/meta.png" alt="Meta" style={{ width: '32px', height: 'auto' }} />
        </motion.div>
        <motion.div className="growth-node" style={{ top: '20%', left: '65%' }} animate={{ x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <img src="/google-ads-icon.webp" alt="Google Ads" style={{ width: '28px', height: 'auto' }} />
        </motion.div>
      </div>
    </div>
  );
};

const PhoneMockup = ({ children }) => {
  return (
    <div className="phone-mockup">
      <div className="phone-dynamic-island"></div>
      <div className="phone-home-indicator"></div>
      <div className="phone-screen">
        <div className="phone-status-bar">
          <div className="time">9:41</div>
          <div className="status-right">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
              <path d="M14 2H2V9H14V2Z" stroke="black" strokeWidth="1.2" />
              <path d="M15.5 4.5V6.5" stroke="black" strokeWidth="1.2" />
              <path d="M4 4H12V7H4V4Z" fill="black" />
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

const IFoodFeed = ({ inPhone = false }) => {
  const orders = [
    { id: '#4910', customer: 'Ricardo M.', items: '1x Hamburguer Gourmet + Batata', time: 'Agora', price: 'R$ 64,80', icon: <Clock size={16} color="#F59E0B" /> },
    { id: '#4909', customer: 'Mariana S.', items: '2x Pizza Calabresa G + Refri', time: 'Há 5 min', price: 'R$ 112,00', icon: <Truck size={16} color="#3b82f6" /> },
    { id: '#4908', customer: 'Carlos A.', items: '1x Yakisoba Misto Grande', time: 'Há 12 min', price: 'R$ 42,50', icon: <CheckCircle2 size={16} color="#10b981" /> },
    { id: '#4907', customer: 'Juliana P.', items: '3x Temaki Salmão + Joy', time: 'Há 15 min', price: 'R$ 89,90', icon: <CheckCircle2 size={16} color="#10b981" /> },
    { id: '#4906', customer: 'Mateus K.', items: '1x Combo Casal (32 peças)', time: 'Há 20 min', price: 'R$ 124,00', icon: <CheckCircle2 size={16} color="#10b981" /> }
  ];

  // Duplicate for seamless scroll
  const scrollOrders = [...orders, ...orders];

  return (
    <div className={`ifood-feed-container ${inPhone ? 'in-phone' : ''}`}>
      <div className="feed-header" style={{ zIndex: 10 }}>
        {!inPhone && (
          <div className="mac-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        )}
        <div className="feed-app-icon">
          <img src="/ifood.jpg" alt="iFood" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="feed-app-info">

        </div>
        <div className="feed-stats">
          <TrendingUp size={14} /> <span>Live Sales</span>
        </div>
      </div>

      <div className="feed-list" style={{ position: 'relative' }}>
        <motion.div
          className="feed-scroller"
          animate={{ y: [0, -350] }} /* Height of one full set of orders approx */
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {scrollOrders.map((order, idx) => (
            <div key={idx} className="feed-item">
              <div className="item-status-icon">{order.icon}</div>
              <div className="item-content">
                <div className="item-title">
                  <span>{order.customer}</span> <strong>{order.items}</strong>
                </div>
                <div className="item-subtitle">
                  {order.id} • {order.time} • <span>{order.price}</span>
                </div>
              </div>
              <div className="item-avatar">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.customer + idx}`} alt="" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="feed-floating-capsule" style={{ zIndex: 10, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(5px)' }}>
        <div className="avatar-group">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" alt="" />
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" alt="" />
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=C" alt="" />
          <div className="avatar-count">+14 novos no bairro agora</div>
        </div>
      </div>
    </div>
  );
};

const RestaurantOptimization = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [revenue, setRevenue] = useState(128450.00);
  const stages = [
    { text: "Otimização de Cardápio & UX", value: "+R$ 38,4k", target: 166850, progress: 32, status: "Base Consolidada" },
    { text: "Recuperação de Clientes Inativos", value: "+R$ 52,2k", target: 219050, progress: 65, status: "Fluxo Otimizado" },
    { text: "Escala via Canais Próprios", value: "+R$ 75,5k", target: 294550, progress: 100, status: "Escala Máxima" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let start = revenue;
    let end = stages[activeStage].target;
    let duration = 2500;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + ease * (end - start);
      setRevenue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [activeStage]);

  // Curve spans full width and hits bottom more aggressively
  const curvePath = "M 0,380 C 150,380 350,300 450,240 C 600,160 750,80 900,40";

  return (
    <div className="optimizer-container v3" style={{ justifyContent: 'center' }}>
      <div className="bg-grid-subtle"></div>

      <div className="strategy-column" style={{ width: '100%', maxWidth: '480px', alignItems: 'center' }}>
        {/* Strategy Metrics Panel Combined with Chart */}
        <div className="strategy-panel glass v3" style={{ maxWidth: '100%', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>

          <div style={{ padding: '2.5rem 2.5rem 0 2.5rem', position: 'relative', zIndex: 10, width: '100%' }}>
            <div className="panel-status-row">
              <div className="status-dot"></div>
              <span className="panel-header">CRESCIMENTO PROJETADO</span>
            </div>

            <div className="narrative-box">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStage}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="panel-text"
                >
                  {stages[activeStage].text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="metrics-box">
              <div className="metric-row">
                <span className="metric-label">Faturamento </span>
                <div className="metric-value-box">
                  <span className="metric-up">↑ {stages[activeStage].value}</span>
                  <span className="metric-main" style={{ fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>
                    {revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
              </div>
              <div className="progress-bg">
                <motion.div
                  className="progress-fill"
                  animate={{ width: `${stages[activeStage].progress}%` }}
                  transition={{ duration: 2, ease: "easeOut" }}
                ></motion.div>
              </div>
              <div className="status-indicator">
                <span className="status-label">Fase do Projeto</span>
                <span className="status-tag">{stages[activeStage].status}</span>
              </div>
            </div>
          </div>

          <div className="chart-wrapper" style={{ position: 'relative', width: '100%', height: '160px', marginTop: '-1rem' }}>
            <svg className="growth-chart-svg" viewBox="0 0 900 400" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
              <defs>
                <linearGradient id="area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E03720" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#E03720" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FEE2E2" />
                  <stop offset="50%" stopColor="#E03720" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
              </defs>

              {/* Area under the curve */}
              <motion.path
                d={curvePath + " L 900,400 L 0,400 Z"}
                fill="url(#area-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />

              {/* Main Growth Line */}
              <motion.path
                d={curvePath}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>

        <div className="optimizer-mantra-v3" style={{ textAlign: 'center', marginTop: '1.2rem', maxWidth: 'none' }}>
          “Você não precisa vender mais. Precisa vender melhor o que já tem.”
        </div>
      </div>
    </div>
  );
};



const LeadQualification = () => {
  return (
    <div className="qualification-container">
      <div className="qual-header">
        <span className="tag-pill">Por que nos escolher</span>
        <h2>Quando escolher a Gone, <span>faz total sentido.</span></h2>
        <p><strong>Escalar faturamento exige técnica, dados e processos claros.</strong><br className="desktop-only" />Se você se identifica com os pontos abaixo, estamos prontos para acelerar.</p>
      </div>

      <div className="qual-grid">
        <div className="qual-item">
          <div className="qual-title-card">
            <span className="qual-num">01</span>
            <h3>Faturamento</h3>
          </div>
          <div className="qual-info-card">
            <p className="qual-main">Seu restaurante já fatura acima de R$ 30k e você busca o próximo nível de escala.</p>
            <p className="qual-footer">Faz sentido quando você entende que faturar mais exige investimento estratégico e dados.</p>
          </div>
        </div>

        <div className="qual-item">
          <div className="qual-title-card">
            <span className="qual-num">02</span>
            <h3>Mentalidade</h3>
          </div>
          <div className="qual-info-card">
            <p className="qual-main">Você entende que o digital não é 'postzinho', mas o principal canal de vendas do bairro.</p>
            <p className="qual-footer">Faz sentido quando você busca uma assessoria focada em ROI, não apenas em curtidas.</p>
          </div>
        </div>

        <div className="qual-item">
          <div className="qual-title-card">
            <span className="qual-num">03</span>
            <h3>Operação</h3>
          </div>
          <div className="qual-info-card">
            <p className="qual-main">Sua cozinha está pronta para o volume, mas o funil de vendas digital está travado.</p>
            <p className="qual-footer">Faz sentido quando o gargalo do negócio não é a produção, mas a aquisição de novos clientes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "A agência atende qualquer tipo de restaurante?", a: "Focamos em negócios que já faturam acima de R$ 30k e buscam escala. Atendemos desde delivery puro até redes de restaurantes com salão." },
    { q: "Em quanto tempo vejo os primeiros resultados?", a: "Nos primeiros 30 dias otimizamos sua base. Entre 60 e 90 dias, o sistema de aquisição começa a rodar com previsibilidade e ROI positivo." },
    { q: "Eu preciso pagar os anúncios à parte?", a: "Sim. O valor da assessoria é pelo nosso serviço estratégico e operacional. O valor de investimento em anúncios vai direto para as plataformas (Google/Meta)." },
    { q: "Existe fidelidade ou multa de cancelamento?", a: "Não acreditamos em contratos que prendem pelo papel. Se não entregarmos evolução em 30 dias, você pode cancelar sem qualquer multa." }
  ];

  return (
    <div className="faq-container">
      <span className="tag">Dúvidas frequentes</span>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '2.5rem' }}>Perguntas <span>Comuns</span></h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <div className="faq-question">
              <span>{faq.q}</span>
              <ArrowRight size={18} style={{ transform: openIndex === i ? 'rotate(90deg)' : 'none', transition: '0.3s' }} />
            </div>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="faq-answer"
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const MinimalBrandingSystem = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const items = [
    { label: "Cores", radius: isMobile ? 80 : 140, duration: 45, startAngle: 0 },
    { label: "Tipografia", radius: isMobile ? 130 : 260, duration: 65, startAngle: 72 },
    { label: "Essência", radius: isMobile ? 110 : 200, duration: 55, startAngle: 144 },
    { label: "Arquétipo", radius: isMobile ? 160 : 380, duration: 85, startAngle: 216 },
    { label: "Estratégia", radius: isMobile ? 140 : 320, duration: 75, startAngle: 288 }
  ];

  const ringRadii = isMobile
    ? [80, 110, 140, 170, 200]
    : [80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440];

  return (
    <div
      className="orbital-wrapper"
      style={{
        zIndex: 0,
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)'
      }}
    >
      {ringRadii.map((radius, i) => (
        <motion.div
          key={radius}
          className="orbital-ring"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          style={{
            width: radius * 2,
            height: radius * 2,
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#94A3B8'
          }}
        />
      ))}

      {items.map((item, idx) => (
        <motion.div
          key={idx}
          style={{
            position: 'absolute',
            width: item.radius * 2,
            height: item.radius * 2,
            left: '50%',
            top: '50%',
            marginLeft: -item.radius,
            marginTop: -item.radius,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: -((item.startAngle / 360) * item.duration)
          }}
        >
          <motion.div
            className="minimal-badge"
            style={{
              fontSize: '10px',
              fontWeight: 500,
              color: '#475569',
              letterSpacing: '0.01em',
              padding: '4px 14px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '100px',
              /* Firecrawl-style gap effect */
              boxShadow: '0 0 0 6px #FFFFFF',
              whiteSpace: 'nowrap',
              pointerEvents: 'auto'
            }}
            animate={{ rotate: [0, -360] }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: -((item.startAngle / 360) * item.duration)
            }}
          >
            {item.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};



const CartAnimationBadge = () => {
  return (
    <div className="cart-badge-container">
      <div className="cart-badge-item">
        <div className="item-info">
          <span className="name">Double Cheese Burger</span>
          <span className="price">R$ 38,90</span>
        </div>
        <motion.button
          className="add-btn"
          animate={{ scale: [1, 0.94, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            times: [0, 0.45, 0.55],
            delay: 1.2
          }}
        >
          <ShoppingBag size={14} /> Adicionar
        </motion.button>
      </div>

      <motion.div
        className="cursor-container"
        initial={{ x: 100, y: 100, opacity: 0 }}
        animate={{
          x: [100, 20, 20, 100],
          y: [100, 15, 15, 100],
          opacity: [0, 1, 1, 0],
          scale: [1, 1, 0.85, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          times: [0, 0.35, 0.55, 0.8],
          delay: 0.5
        }}
      >
        <MousePointer2 size={22} className="cursor-icon" fill="white" />
      </motion.div>
    </div>
  );
};

const FileExplorerServices = () => {
  const services = [
    {
      title: "Sites de Conversão",
      desc: "Plataformas rápidas e otimizadas que convertem visitantes em clientes 24/7.",
      lava: true
    },
    {
      title: "SEO Estratégico",
      desc: "Posicionamento no topo das buscas locais para atrair clientes prontos para comprar.",
      video: "/lupa 360° looping.mp4"
    },
    {
      title: "Identidade & Branding",
      desc: "Design premium que gera desejo e aumenta o valor percebido do seu negócio.",
      image: "/selo-gone.png"
    },
    {
      title: "Tráfego & Escala",
      desc: <>Anúncios precisos no Google e Meta <br className="desktop-only" /> focados em lucro e previsibilidade.</>,
      image: "/ads-service.png"
    },
    {
      title: <>Engenharia de <br className="desktop-only" /> Cardápio</>,
      desc: <>Otimização estratégica da oferta <br className="desktop-only" /> para maximizar a margem de lucro em cada pedido.</>,
      image: "/bird-menu.png"
    }
  ];

  return (
    <div className="services-clean-container">
      <div className="services-grid-top">
        {services.slice(0, 3).map((service, idx) => {
          const isBranding = service.title === "Identidade & Branding";
          return (
            <div key={`top-${idx}`} className={`service-clean-card${service.lava ? ' lava-card' : ''}`}>
              {service.lava && (
                <AnimatedGradient config={{
                  preset: 'custom',
                  color1: '#fae1de',
                  color2: '#fae1de',
                  color3: '#FFFFFF',
                  rotation: 114,
                  proportion: 100,
                  scale: 0.52,
                  speed: 30,
                  distortion: 7,
                  swirl: 18,
                  swirlIterations: 20,
                  softness: 1,
                  offset: 717,
                  shape: 'Edge',
                  shapeSize: 12,
                }} pixelSize={2} ditherType="4x4" style={{ zIndex: 0 }} />
              )}
              <h4 style={service.lava || isBranding ? { position: 'relative', zIndex: 1 } : {}}>{service.title}</h4>

              {service.lava && <CartAnimationBadge />}

              {service.video && (
                <div className="video-container-relative">
                  {service.title === "SEO Estratégico" && (
                    <div className="search-badge-animation">
                      <div className="search-badge-inner">
                        <Search size={14} />
                        <span>Restaurante perto de mim</span>
                      </div>
                    </div>
                  )}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="service-card-video"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                </div>
              )}

              {service.image && (
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="service-card-image"
                  style={isBranding ? { position: 'relative', zIndex: 1 } : {}}
                  initial={isBranding ? { scale: 0, opacity: 0 } : {}}
                  animate={isBranding ? {
                    rotate: 360,
                    scale: [0, 1.1, 1],
                    opacity: 1
                  } : {}}
                  transition={isBranding ? {
                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] },
                    opacity: { duration: 0.5, delay: 1.2 }
                  } : {}}
                />
              )}
              <p style={service.lava || isBranding ? { position: 'relative', zIndex: 1 } : {}}>{service.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="services-grid-bottom">
        {services.slice(3, 5).map((service, idx) => {
          const isAds = service.title === "Tráfego & Escala";
          const isSpecial = isAds || service.title === "Engenharia de Cardápio";
          return (
            <div key={`bot-${idx}`} className={`service-clean-card${isSpecial ? ' traffic-card' : ''}${isAds ? ' ads-card-bg' : ''}`}>
              {isAds ? (
                <>
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-image ads-image"
                    />
                  )}
                  <div className="ads-card-text-wrapper">
                    <h4 style={{ position: 'relative', zIndex: 1, marginBottom: '0.5rem' }}>{service.title}</h4>
                    <p style={{ position: 'relative', zIndex: 1 }}>{service.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <h4 style={{ position: 'relative', zIndex: 1 }}>{service.title}</h4>
                  {service.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`service-card-video${isSpecial ? ' traffic-video' : ''}`}
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                  )}
                  {service.image && (
                    <div className="bird-container">
                      {idx === 1 && (
                        <div className="speech-bubble">Piu Piu!</div>
                      )}
                      <img
                        src={service.image}
                        alt="Service"
                        className={`service-card-image${isAds ? ' ads-image' : (isSpecial ? ' traffic-video' : '')}${idx === 1 ? " bird-image" : ""}`}
                      />
                    </div>
                  )}
                  <p style={{ position: 'relative', zIndex: 1 }}>{service.desc}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CEOSection = () => {
  return (
    <div className="ceo-row-card">
      <div className="ceo-info-side">
        {/* Technical Grid Background */}
        <div className="ceo-grid-bg"></div>

        {/* Crossing Lines Elements */}
        <div className="ceo-line-h ceo-line-top"></div>
        <div className="ceo-line-h ceo-line-bottom"></div>
        <div className="ceo-line-v ceo-line-left"></div>
        <div className="ceo-line-v ceo-line-right"></div>

        <div className="ceo-content-wrap">
          <span className="ceo-tag">Fundador</span>
          <h2 className="ceo-name">Fabricio Alves</h2>
          <div className="ceo-copy">
            <p>
              Fundei a GONE® em 2025 e estudo marketing há 6 anos.
              Nosso foco é transformar sua presença digital em uma máquina de vendas previsível.
            </p>
          </div>
        </div>
      </div>
      <div className="ceo-image-side">
        <img src="/CEO Fabricio Alves.png" alt="Fabricio Alves" />
      </div>
    </div>
  );
};

const ContactForm = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({ name: '', email: '', business: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const options = ["Até R$ 30k", "R$ 30k — R$ 100k", "Acima de R$ 100k"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("access_key", "cf909772-bb1a-4e29-a207-d0c725b6af43");
    payload.append("subject", "🚀 Novo Lead da GONE");
    payload.append("from_name", "Consultoria GONE");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", `Detalhes do Agendamento:\n\nRestaurante: ${formData.business}\nFaturamento Mensal: ${selectedOption}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({ name: '', email: '', business: '' });
          setSelectedOption("");
          onClose();
        }, 2000);
      } else {
        console.error("API error:", data);
      }
    } catch (error) {
      console.error("Erro de requisição:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}><X size={24} /></button>
            <div className="form-header">
              <span className="tag">Inicie sua escala hoje</span>
              <h2>Agendar Consultoria <span>Gratuita</span></h2>
              <p>Preencha os dados abaixo e entraremos em contato em até 24h.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Nome Completo</label>
                <input type="text" placeholder="Seu nome" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="input-group">
                <label>Seu E-mail</label>
                <input type="email" placeholder="seu@email.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Nome do Restaurante</label>
                  <input type="text" placeholder="Nome do seu negócio" required value={formData.business} onChange={(e) => setFormData({ ...formData, business: e.target.value })} />
                </div>
                <div className="input-group" style={{ position: 'relative' }}>
                  <label>Faturamento Mensal</label>
                  <input type="hidden" required value={selectedOption} />
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{
                      padding: '12px 16px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: selectedOption ? '#111' : '#64748b',
                      fontSize: '0.95rem',
                      userSelect: 'none'
                    }}
                  >
                    {selectedOption || "Selecione..."}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          marginTop: '6px',
                          background: '#fff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                          zIndex: 50,
                          overflow: 'hidden'
                        }}
                      >
                        {options.map((opt, idx) => (
                          <div
                            key={opt}
                            onClick={() => { setSelectedOption(opt); setIsDropdownOpen(false); }}
                            style={{
                              padding: '12px 16px',
                              cursor: 'pointer',
                              color: selectedOption === opt ? 'var(--primary)' : '#334155',
                              fontWeight: selectedOption === opt ? '700' : '500',
                              fontSize: '0.95rem',
                              borderBottom: idx !== options.length - 1 ? '1px solid #f1f5f9' : 'none',
                              transition: 'background 0.2s',
                              background: '#fff'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#f8fafc'}
                            onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
                          >
                            {opt}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <button type="submit" className="btn-bento full" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                {submitSuccess ? "Recebido! Entraremos em contato" : isSubmitting ? "Enviando..." : "Garantir meu Diagnóstico"} <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5561996351852" /* Substituir pelo número real */
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ fill: '#fff' }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="tooltip">Falar no WhatsApp</span>
    </a>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <nav className={`nav-fixed ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="logo">
            <img src="/logo.svg" alt="GONE®" style={{ height: '22px', width: 'auto' }} />
          </a>

          <div className="nav-links desktop-only">
            <a href="#solutions">Soluções</a>
            <a href="#method">Metodologia</a>
            <a href="#testimonials">Depoimentos</a>
            <button onClick={() => setIsFormOpen(true)} className="nav-cta-btn">Agendar Consultoria</button>
          </div>

          <button className="mobile-menu-btn mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', background: '#fff', zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '5rem 2rem' }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', color: '#111', cursor: 'pointer', padding: '8px' }}
              >
                <X size={32} />
              </button>
              <div className="drawer-links" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
                <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2rem', fontWeight: 800, color: '#111', textDecoration: 'none' }}>Soluções</a>
                <a href="#method" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2rem', fontWeight: 800, color: '#111', textDecoration: 'none' }}>Metodologia</a>
                <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2rem', fontWeight: 800, color: '#111', textDecoration: 'none' }}>Depoimentos</a>
                <button
                  className="nav-cta-btn mobile"
                  style={{ marginTop: '2rem' }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsFormOpen(true);
                  }}
                >
                  Agendar Consultoria
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="bento-wrapper">



        {/* ROW 2: Hero */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="card-inner hero-bento" style={{
            padding: '5rem 2rem',
            border: 'none',
            background: '#fff',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <DitheringShader
              colorBack="#ffffff"
              colorFront="#E03720"
              shape="swirl"
              type="4x4"
              pxSize={2}
              speed={0.4}
              style={{ opacity: 0.15 }}
            />

            <div style={{ position: 'relative', zIndex: 10 }}>
              <span className="tag">Assessoria de markerting para restaurantes</span>
              <h1 style={{ fontSize: '4.2rem' }}>A fila começa no<br /><span>digital.</span></h1>
              <p style={{ fontSize: '1.15rem' }}>
                Vendemos movimento. Vendemos mesa. Vendemos tranquilidade.
                Transformamos seu restaurante na principal autoridade do bairro em até 90 dias.
              </p>
              <div className="hero-btns">
                <button onClick={() => setIsFormOpen(true)} className="btn-bento">Garantir Raio-X Gratuito <ArrowUpRight size={18} /></button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* SPACING */}
        <div className="bento-card col-1 empty-card desktop-only"></div>
        <div className="bento-card col-12 desktop-only"><div className="card-inner" style={{ minHeight: '20px' }}></div></div>
        <div className="bento-card col-1 empty-card desktop-only"></div>

        {/* ROW 3: Top 3 Solutions */}
        <div className="bento-card col-1 empty-card"></div>
        {[
          { icon: <img src="/google-ads-icon.webp" alt="Google Ads" style={{ width: '40px' }} />, title: "Google Ads", desc: "O feijão com arroz que funciona: pare de perder vendas todo dia para o concorrente direto." },
          { icon: <img src="/meta.png" alt="Meta" style={{ width: '45px' }} />, title: "Meta Ads", desc: "Campanhas inteligentes para salão ou delivery com foco em conversão no cardápio digital." },
          { icon: <img src="/Google__G__logo.svg.png" alt="Google" style={{ width: '38px' }} />, title: "Google Search", desc: "Otimização técnica para que seu restaurante seja a primeira opção quando alguém busca por onde comer." }
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bento-card col-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-inner service-item">
              <div className="icon">{service.icon}</div>
              <h3 style={{ fontSize: '1.3rem' }}>{service.title.split(' ')[0]} <span>{service.title.split(' ')[1]}</span></h3>
              <p style={{ fontSize: '0.95rem' }}>{service.desc}</p>
            </div>
          </motion.div>
        ))}
        <div className="bento-card col-1 empty-card"></div>

        {/* SPACING */}
        <div className="bento-card col-1 empty-card desktop-only"></div>
        <div className="bento-card col-12 desktop-only"><div className="card-inner" style={{ minHeight: '20px' }}></div></div>
        <div className="bento-card col-1 empty-card desktop-only"></div>

        {/* GROWTH SYSTEM TITLE */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: '2rem 1.5rem', textAlign: 'center', background: '#fcfffe', borderBottom: 'none' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', display: 'block' }}
            >
              <source src="/bird-bio.mp4" type="video/mp4" />
            </video>
            <h2 style={{ fontSize: 'clamp(1.3rem, 5vw, 2.6rem)', lineHeight: '1.2', maxWidth: '820px', margin: '0 auto', textWrap: 'balance' }}>
              Não são serviços separados. <br />
              <span style={{ color: 'var(--primary)' }}>É um sistema</span> que transforma atenção em faturamento&nbsp;recorrente.
            </h2>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* GROWTH SYSTEM ANIMATION */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ minHeight: '360px', background: '#fcfffe', display: 'block', padding: 0 }}>
            <GrowthSystem />
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>


        {/* IFood FEED SECTION */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-inner ifood-feed-section" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
            <div className="feed-info-text">
              <span className="tag">Entrega & Performance</span>
              <h2 className="section-title">O movimento que <br /><span className="highlight">gera lucro.</span></h2>
              <div className="features-list">
                <div className="feature-item">
                  <Zap size={20} color="#E03720" className="feature-icon" />
                  <div className="feature-content">
                    <h4>Setup de Tráfego</h4>
                    <p>Campanhas otimizadas para levar o cliente direto ao seu cardápio.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Layout size={20} color="#E03720" className="feature-icon" />
                  <div className="feature-content">
                    <h4>Engenharia UX</h4>
                    <p>Design focado em reduzir atrito e aumentar o ticket médio.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <TrendingUp size={20} color="#E03720" className="feature-icon" />
                  <div className="feature-content">
                    <h4>Escala Assistida</h4>
                    <p>Acompanhamento diário para garantir vazão e novos pedidos.</p>
                  </div>
                </div>
              </div>
            </div>

            <PhoneMockup>
              <IFoodFeed inPhone={true} />
            </PhoneMockup>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* SPACING */}
        <div className="bento-card col-1 empty-card desktop-only"></div>
        <div className="bento-card col-12 desktop-only"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card desktop-only"></div>

        {/* ROW 4: Bottom 3 Solutions */}
        <div className="bento-card col-1 empty-card"></div>
        {[
          { icon: <ClipboardList size={26} />, title: "Cardápio Estratégico", desc: "Maximize sua margem líquida com engenharia de cardápio focada nos itens de maior rentabilidade." },
          { icon: <Calendar size={26} />, title: "Baixo Movimento", desc: "Elimine a ociosidade da cozinha com campanhas inteligentes para dias e horários de baixo fluxo." },
          { icon: <UtensilsCrossed size={26} />, title: "Canais Internos", desc: "Aumente o faturamento por cliente com técnicas de upselling e experiência de compra otimizada." }
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bento-card col-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-inner service-item">
              <div className="icon">{service.icon}</div>
              <h3 style={{ fontSize: '1.3rem' }}>{service.title.split(' ')[0]} <span>{service.title.split(' ')[1]}</span></h3>
              <p style={{ fontSize: '0.95rem' }}>{service.desc}</p>
            </div>
          </motion.div>
        ))}
        <div className="bento-card col-1 empty-card"></div>

        {/* SPACING */}
        <div className="bento-card col-1 empty-card desktop-only"></div>
        <div className="bento-card col-12 desktop-only"><div className="card-inner" style={{ minHeight: '20px' }}></div></div>
        <div className="bento-card col-1 empty-card desktop-only"></div>

        {/* RESTAURANT OPTIMIZATION COMBINED SECTION */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: '3rem 0', background: 'rgb(252, 252, 252)', display: 'block', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', display: 'block' }}
              >
                <source src="/bird-bio-front.mp4" type="video/mp4" />
              </video>
              <h2 style={{ fontSize: 'clamp(1.3rem, 5vw, 2.5rem)', lineHeight: '1.2', maxWidth: '850px', margin: '0 auto', textWrap: 'balance' }}>
                Ajustes estratégicos que <br />
                <span style={{ color: '#E03720' }}>multiplicam seus&nbsp;resultados.</span>
              </h2>
            </div>
            {false && (
              <div style={{ minHeight: '400px', position: 'relative', marginTop: '2rem' }}>
                <RestaurantOptimization />
              </div>
            )}
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* SOLUTIONS SECTION - FILE EXPLORER STYLE */}
        <div className="bento-card col-1 empty-card" id="solutions"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: 0, overflow: 'visible', background: 'transparent', borderRadius: 0 }}>
            <FileExplorerServices />
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* LEAD QUALIFICATION SECTION */}
        <div className="bento-card col-1 empty-card desktop-only"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ background: '#fff', padding: '4rem 2rem' }}>
            <LeadQualification />
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card desktop-only"></div>

        {/* SPACING */}
        <div className="bento-card col-1 empty-card desktop-only"></div>
        <div className="bento-card col-12 desktop-only"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card desktop-only"></div>

        {/* ROW 5: Method Section */}
        <div className="bento-card col-1 empty-card" id="method"></div>
        <motion.div
          className="bento-card col-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-inner">
            <span className="tag">Os 4 pilares da Gone®</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111' }}>Além do post.<br />Focamos em Pessoas.</h2>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>Nossa metodologia é testada e aprovada pelo mercado de gastronomia.</p>
            <div className="pilar-list">
              <li><CheckCircle2 color="#E03720" size={18} /> Conteúdo que desperta fome.</li>
              <li><CheckCircle2 color="#E03720" size={18} /> Identidade Visual Premium.</li>
              <li><CheckCircle2 color="#E03720" size={18} /> Gestão de Reputação Ativa.</li>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bento-card col-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: 0, overflow: 'hidden' }}>
            <img src="/image-01.jpg" alt="Análise preditiva de demanda" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* ROW 6: Feedbacks / Testimonials */}
        <div className="bento-card col-1 empty-card" id="testimonials"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner testimonials-section" style={{
            padding: '5rem 1.5rem',
            background: '#fff',
            border: 'none',
            textAlign: 'center',
            color: '#111',
            borderRadius: '0'
          }}>
            <div className="testimonials-header" style={{ marginBottom: '4rem' }}>
              <div className="avatar-stack" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', marginRight: '1rem' }}>
                  {['/avatars/courtney-turner.jpg', '/avatars/ethan-valdez.jpg', '/avatars/ava-bentley.jpg', '/avatars/nicolas-trevino.jpg'].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Client"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        marginLeft: i === 0 ? 0 : '-12px',
                        objectFit: 'cover',
                        background: '#eee'
                      }}
                    />
                  ))}
                </div>
                <div style={{ textAlign: 'left', borderLeft: '1px solid #eee', paddingLeft: '1rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem', lineHeight: '1', color: '#111' }}>+70 restaurantes</div>
                  <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '4px' }}>Tiveram seus resultados transformados.</div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <span className="tag-pill" style={{
                  background: 'rgba(224, 55, 32, 0.05)',
                  border: '1px solid rgba(224, 55, 32, 0.1)',
                  color: '#E03720',
                  letterSpacing: '0.05em',
                  padding: '8px 20px',
                  display: 'inline-block',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}>DEPOIMENTOS</span>
              </div>

              <h2 style={{ fontSize: '2.8rem', maxWidth: '850px', margin: '0 auto', color: '#111', lineHeight: '1.1' }}>O Que Falam Sobre a <span style={{ color: '#E03720' }}>GONE®</span></h2>
            </div>

            <div className="testimonials-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
              textAlign: 'left',
              border: '0.5px solid #f3f4f6',
              borderBottom: 'none'
            }}>
              {[
                {
                  text: "Depois que começamos a trabalhar com a GONE®, nosso salão começou a encher até em dias que antes eram um deserto.",
                  author: "Renata Lima",
                  role: "CEO da Vila Nobre",
                  avatar: "/avatars/courtney-turner.jpg"
                },
                {
                  text: "Antes a gente fazia tudo no chute. Agora temos estratégia, conteúdo que realmente engaja e campanhas que trazem resultado.",
                  author: "João Silva",
                  role: "Sócio da Drip Café",
                  avatar: "/avatars/ethan-valdez.jpg"
                },
                {
                  text: "Com as fotos e estratégias criadas pela equipe, o Instagram virou minha maior fonte de novos clientes e reservas.",
                  author: "Mariana Souza",
                  role: "CEO da Fomeria Napoli",
                  avatar: "/avatars/ava-bentley.jpg"
                },
                {
                  text: "Já trabalhei com outras agências antes, mas sempre pareciam perdidas no nosso segmento. A GONE® entende o negócio.",
                  author: "Lucas Mendes",
                  role: "Diretor do Sushi Mori",
                  avatar: "/avatars/nicolas-trevino.jpg"
                }
              ].map((t, idx) => (
                <div key={idx} className="test-card" style={{
                  background: '#fff',
                  padding: '2.5rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '0.5px solid #f3f4f6',
                  margin: '-0.25px',
                  minHeight: '320px'
                }}>
                  <p style={{ color: '#444', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <img src={t.avatar} alt={t.author} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', background: '#eee' }} />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#111' }}>{t.author}</div>
                      <div style={{ fontSize: '0.75rem', color: '#999' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>


        {/* ROW: Google Partner Badge */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: '3rem 2rem', textAlign: 'center', background: '#fff' }}>
            <span className="tag">Selo de Qualidade</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#111' }}>Agência Parceira do Google</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0' }}>
              <img src="/logo-google_partner-min.png" alt="Google Partner Badge" style={{ height: '70px', width: 'auto' }} />
            </div>
            <p style={{ fontSize: '0.95rem', color: '#666', maxWidth: '500px', margin: '0 auto' }}>
              Estar no programa Google Partners significa que nossa agência é reconhecida por maximizar o sucesso de campanhas de nossos clientes e demonstrar expertise em Google Ads.
            </p>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card"></div>


        {/* ROW: CEO Section */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: 0, background: '#fff', border: 'none' }}>
            <CEOSection />
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card"></div>



        {/* ROW 6: Final CTA */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner footer-card" style={{
            padding: '5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--primary)',
            border: 'none'
          }}>
            <DitheringShader
              colorBack="#E03720"
              colorFront="#ffffff"
              shape="ripple"
              type="8x8"
              pxSize={3}
              speed={0.6}
              style={{ opacity: 0.3 }}
            />

            <div style={{ position: 'relative', zIndex: 10 }}>
              <span className="tag" style={{ color: '#fff', fontSize: '0.7rem' }}>Risco zero</span>
              <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem' }}>Garantia de 30 Dias.</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                Evolução nos pedidos ou cancelamos sem qualquer multa. O risco é 100% nosso.
              </p>
              <button onClick={() => setIsFormOpen(true)} className="btn-bento" style={{ padding: '0.9rem 2.0rem', fontSize: '0.7rem', background: '#fff', color: '#000', borderRadius: '15px' }}>
                Diagnóstico Gratuito
              </button>
            </div>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        <div className="bento-card col-1 empty-card desktop-only"></div>
        <div className="bento-card col-12 desktop-only"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card desktop-only"></div>

        {/* ROW: FAQ Section (Full Width) */}
        <motion.div
          className="bento-card col-14 faq-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner faq-card-inner" style={{ background: '#fff', padding: '6rem 4rem' }}>
            <FAQ />
          </div>
        </motion.div>

        {/* ROW 7: Footer info */}
        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12">
          <div className="card-inner" style={{ minHeight: 'auto', padding: '2rem', textAlign: 'center', background: '#fafafa' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.5rem' }}>
              &copy; 2025 GONE® Assessoria — Marketing Gastronômico.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.7rem', color: '#bbb' }}>
              <a href="#">Política de Privacidade</a>
              <span>•</span>
              <a href="#">Termos de Uso</a>
            </div>
          </div>
        </div>
        <div className="bento-card col-1 empty-card"></div>

      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <WhatsAppButton />
    </>
  );
}

export default App;
