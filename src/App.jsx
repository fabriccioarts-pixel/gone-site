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
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from 'framer-motion';
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
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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

// Base resting angle: tilted left
const PHONE_BASE_ROT_X = 5;
const PHONE_BASE_ROT_Y = -22;

const PhoneMockup = ({ children }) => {
  const containerRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
  const baseRotX = isMobile ? 0 : PHONE_BASE_ROT_X;
  const baseRotY = isMobile ? 0 : PHONE_BASE_ROT_Y;
  const [tilt, setTilt] = React.useState({ rotX: baseRotX, rotY: baseRotY, glareX: 30, glareY: 40, active: false });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);   // -1 → +1
    const dy = (e.clientY - cy) / (rect.height / 2);  // -1 → +1

    const maxTilt = 16;
    // Offset on top of the base angle
    const targetRotX = PHONE_BASE_ROT_X + (-dy * maxTilt);
    const targetRotY = PHONE_BASE_ROT_Y + (dx * maxTilt);
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ rotX: targetRotX, rotY: targetRotY, glareX, glareY, active: true });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTilt({ rotX: baseRotX, rotY: baseRotY, glareX: 30, glareY: 40, active: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '900px',
        perspectiveOrigin: '50% 50%',
        display: 'inline-block',
        cursor: 'default',
      }}
    >
      <div
        className="phone-mockup"
        style={{
          transform: `rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale(${tilt.active ? 1.04 : 1})`,
          transition: tilt.active
            ? 'transform 0.08s ease-out'
            : 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          willChange: 'transform',
          boxShadow: 'none',
        }}
      >
        {/* Specular glare highlight */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 20,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)`,
            opacity: tilt.active ? 1 : 0.4,
            transition: 'opacity 0.4s ease',
          }}
        />
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
    </div>
  );
};

const WhatsAppFeed = ({ inPhone = false }) => {
  const leads = [
    { name: 'Ana Paula', msg: 'Oi! Vi o anúncio, quero saber mais sobre os planos 😊', time: 'Agora', unread: 2, seed: 'ana' },
    { name: 'Carlos M.', msg: 'Olá! Qual o valor da consultoria?', time: '2 min', unread: 1, seed: 'carlos' },
    { name: 'Fernanda R.', msg: 'Gostei muito do conteúdo! Posso agendar?', time: '5 min', unread: 3, seed: 'fernanda' },
    { name: 'Rafael T.', msg: 'Vocês atendem empresa de serviços?', time: '9 min', unread: 1, seed: 'rafael' },
    { name: 'Juliana S.', msg: 'Preciso de ajuda com meu marketing digital!', time: '14 min', unread: 4, seed: 'juliana' },
    { name: 'Bruno A.', msg: 'Vi o post e me interessei, como funciona?', time: '18 min', unread: 1, seed: 'bruno' },
  ];

  const all = [...leads, ...leads];

  return (
    <div className={`ifood-feed-container ${inPhone ? 'in-phone' : ''}`} style={{ background: '#fff' }}>
      {/* Header */}
      <div style={{ background: '#075E54', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', flex: 1 }}>WhatsApp Business</span>
        <div style={{ background: '#25D366', borderRadius: '100px', padding: '2px 10px', fontSize: '0.65rem', color: '#fff', fontWeight: 700 }}>● AO VIVO</div>
      </div>

      {/* Search bar */}
      <div style={{ background: '#F0F2F5', padding: '6px 12px', flexShrink: 0 }}>
        <div style={{ background: '#fff', borderRadius: '20px', padding: '6px 14px', fontSize: '0.75rem', color: '#aaa' }}>🔍 Pesquisar conversa</div>
      </div>

      {/* Leads list */}
      <div className="feed-list" style={{ position: 'relative', background: '#fff' }}>
        <motion.div
          className="feed-scroller"
          animate={{ y: [0, -330] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {all.map((lead, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderBottom: '1px solid #f3f4f6' }}>
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${lead.seed}`}
                alt=""
                style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, background: '#eee' }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#111' }}>{lead.name}</span>
                  <span style={{ fontSize: '0.68rem', color: '#25D366', fontWeight: 600 }}>{lead.time}</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#666', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lead.msg}</p>
              </div>
              <div style={{ background: '#25D366', color: '#fff', borderRadius: '50%', width: '18px', height: '18px', fontSize: '0.6rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{lead.unread}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="feed-floating-capsule" style={{ zIndex: 10, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(5px)' }}>
        <div className="avatar-group">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=X" alt="" />
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Y" alt="" />
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Z" alt="" />
          <div className="avatar-count">+18 leads qualificados hoje</div>
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
        <h2>Quando escolher a Gone,<br /><span style={{ fontFamily: "'DakotaRough', sans-serif", color: 'var(--primary)' }}>FaZ ToTaL SeNTiDo.</span></h2>
        <p><strong>Escalar faturamento exige técnica, dados e processos claros.</strong><br className="desktop-only" />Se você se identifica com os pontos abaixo, estamos prontos para acelerar.</p>
      </div>

      <div className="qual-grid">
        <div className="qual-item">
          <div className="qual-title-card">
            <span className="qual-num">01</span>
            <h3>Faturamento</h3>
          </div>
          <div className="qual-info-card">
            <p className="qual-main">Seu negócio já fatura acima de R$ 30k e você busca o próximo nível de escala.</p>
            <img src="/faturamento.png" alt="Faturamento" style={{ width: '100%', maxHeight: '160px', objectFit: 'contain', margin: '1rem 0' }} />
            <p className="qual-footer">Faz sentido quando você entende que faturar mais exige investimento estratégico e dados.</p>
          </div>
        </div>

        <div className="qual-item">
          <div className="qual-title-card">
            <span className="qual-num">02</span>
            <h3>Mentalidade</h3>
          </div>
          <div className="qual-info-card">
            <p className="qual-main">Você entende que o digital não é 'postzinho', mas o principal canal de vendas do seu mercado.</p>
            <img src="/mentalidade.png" alt="Mentalidade" style={{ width: '100%', maxHeight: '160px', objectFit: 'contain', margin: '1rem 0' }} />
            <p className="qual-footer">Faz sentido quando você busca uma assessoria focada em ROI, não apenas em curtidas.</p>
          </div>
        </div>

        <div className="qual-item">
          <div className="qual-title-card">
            <span className="qual-num">03</span>
            <h3>Operação</h3>
          </div>
          <div className="qual-info-card">
            <p className="qual-main">Sua operação está pronta para o volume, mas o funil de vendas digital está travado.</p>
            <img src="/Operação.png" alt="Operação" style={{ width: '100%', maxHeight: '160px', objectFit: 'contain', margin: '1rem 0' }} />
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
    { q: "A agência atende qualquer tipo de negócio?", a: "Focamos em negócios que já faturam acima de R$ 30k e buscam escala. Atendemos diferentes segmentos: serviços, varejo, saúde, educação e mais." },
    { q: "Em quanto tempo vejo os primeiros resultados?", a: "Nos primeiros 30 dias otimizamos sua base. Entre 60 e 90 dias, o sistema de aquisição começa a rodar com previsibilidade e ROI positivo." },
    { q: "Eu preciso pagar os anúncios à parte?", a: "Sim. O valor da assessoria é pelo nosso serviço estratégico e operacional. O valor de investimento em anúncios vai direto para as plataformas (Google/Meta)." },
    { q: "Existe fidelidade ou multa de cancelamento?", a: "Não acreditamos em contratos que prendem pelo papel. Se não entregarmos evolução em 30 dias, você pode cancelar sem qualquer multa." }
  ];

  return (
    <div className="faq-container">
      <span className="tag">Dúvidas frequentes</span>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '2.5rem' }}>Perguntas <span style={{ fontFamily: "'DakotaRough', sans-serif", color: '#999' }}>CoMuNS</span></h2>
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
      title: <>Oferta & <br className="desktop-only" /> Conversão</>,
      desc: <>Otimização estratégica da oferta <br className="desktop-only" /> para maximizar a margem de lucro em cada venda.</>,
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
                        <span>Serviço perto de mim</span>
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
                <div className={isBranding ? 'branding-img-hover' : ''} style={isBranding ? { position: 'relative', zIndex: 1 } : {}}>
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
                </div>
              )}
              <p style={service.lava || isBranding ? { position: 'relative', zIndex: 1 } : {}}>{service.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="services-grid-bottom">
        {services.slice(3, 5).map((service, idx) => {
          const isAds = service.title === "Tráfego & Escala";
          const isSpecial = isAds || service.title === "Oferta & Conversão";
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
        <div className="ceo-content-wrap">
          <span className="ceo-tag">Fundador</span>
          <h2 className="ceo-name">Fabricio Alves</h2>
          <div className="ceo-copy">
            <p>
              Fundou a GONE® em 2025, ele entende que marketing não é uma ciência exata, mas a arte de entender pessoas.
              Trás consigo o proposito de transformar a presença digital dos seus clientes em uma máquina de vendas atrevés de estratégias certas.
              Com uma visão inovadora e ousada, ele busca constantemente desafiar o status quo e entregar resultados excepcionais para seus clientes.
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
    payload.append("message", `Detalhes do Agendamento:\n\nNegócio: ${formData.business}\nFaturamento Mensal: ${selectedOption}`);

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
              <h2>Agendar Consultoria <span style={{ fontFamily: "'DakotaRough', sans-serif", color: '#999' }}>GRaTuiTa</span></h2>
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
                  <label>Nome do Negócio</label>
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

const LogoReveal = () => {
  const [step, setStep] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => setStep(1), 300);
          setTimeout(() => setStep(2), 1700);
          setTimeout(() => setStep(3), 2400);
          setTimeout(() => setStep(4), 3800);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const tr = { duration: 0.65, ease: [0.23, 1, 0.32, 1] };

  const G = "M0 16.6196C0 14.2937 0.436987 12.1229 1.31096 10.1071C2.18493 8.0772 3.46065 6.31516 5.13812 4.82095C6.81558 3.32674 8.87365 2.14969 11.3123 1.28982C13.7651 0.429939 16.5703 0 19.7278 0C20.8696 0 22.0114 0.0634339 23.1532 0.190301C24.3091 0.303072 25.4439 0.486324 26.5575 0.740058C27.6852 0.993792 28.7777 1.31801 29.8349 1.71271C30.9062 2.09331 31.9212 2.55144 32.8797 3.0871L29.7926 8.16178C29.2147 7.82347 28.5592 7.5204 27.8262 7.25257C27.0932 6.97064 26.3038 6.73805 25.458 6.5548C24.6263 6.35745 23.7594 6.20944 22.8572 6.11076C21.9691 6.01209 21.074 5.96275 20.1719 5.96275C18.0856 5.96275 16.2249 6.23058 14.5897 6.76624C12.9545 7.28781 11.5731 8.02787 10.4454 8.98642C9.31768 9.93087 8.45781 11.0656 7.86576 12.3907C7.27371 13.7157 6.97769 15.1677 6.97769 16.7465C6.97769 18.3816 7.28781 19.8829 7.90805 21.2502C8.52829 22.6176 9.40931 23.7946 10.5511 24.7814C11.6929 25.7681 13.0744 26.5434 14.6954 27.1073C16.3165 27.657 18.1279 27.9319 20.1296 27.9319C21.7225 27.9319 23.1814 27.7557 24.5065 27.4033C25.8315 27.0368 26.9874 26.5223 27.9742 25.8597C28.9609 25.1972 29.7644 24.4008 30.3847 23.4704C31.0049 22.526 31.4137 21.4687 31.611 20.2987H20.0661V14.78H37.6372V14.8012L37.6584 14.78C38.0108 16.4716 38.1165 18.1208 37.9755 19.7278C37.8487 21.3207 37.4822 22.829 36.876 24.2528C36.284 25.6624 35.4664 26.9593 34.4233 28.1433C33.3801 29.3274 32.1326 30.3494 30.6807 31.2093C29.2288 32.0551 27.5795 32.7176 25.7329 33.1969C23.8863 33.6621 21.8634 33.8947 19.6644 33.8947C16.5914 33.8947 13.8356 33.4436 11.3969 32.5414C8.97232 31.6392 6.91426 30.4058 5.22269 28.8411C3.53113 27.2764 2.23427 25.4439 1.3321 23.3435C0.444035 21.2432 0 19.0019 0 16.6196Z";
  const O = "M60.2638 0.435198H60.8913H78.9005V16.6117L78.9062 16.9054L78.9038 17.1796L78.9005 17.4734C78.9005 18.5832 78.81 19.6472 78.6288 20.6721C78.4028 21.9516 78.0364 23.1658 77.5288 24.3148C76.6141 26.3842 75.3346 28.1533 73.6879 29.6286C72.0281 31.1235 70.0444 32.279 67.7376 33.095C66.5731 33.5063 65.3475 33.8131 64.0598 34.0154C62.7795 34.2178 61.438 34.3157 60.0353 34.3157L59.806 34.3223H41.1693L41.1701 17.4799C41.1701 14.9731 41.627 12.6687 42.541 10.5732C43.4557 8.4908 44.7426 6.70212 46.4031 5.19414C47.2387 4.43036 48.1616 3.75144 49.171 3.15739C49.8426 2.76571 50.5517 2.40667 51.3 2.08679C51.6435 1.93665 51.9944 1.79956 52.3534 1.669C54.675 0.839937 57.2356 0.422142 60.0353 0.422142L60.2638 0.435198ZM71.3035 12.8776C71.909 14.242 72.2109 15.7761 72.2109 17.4734C72.2109 19.1772 71.909 20.7048 71.3035 22.0561C70.685 23.4074 69.8339 24.5433 68.7502 25.4768C68.2517 25.9011 67.7139 26.2862 67.1362 26.6192C66.4434 27.0239 65.6943 27.3568 64.8889 27.6245C64.1863 27.8595 63.456 28.0358 62.6979 28.1533C62.0761 28.2512 61.4364 28.3165 60.7779 28.3426L60.0353 28.3622C58.2907 28.3622 56.6799 28.1206 55.2029 27.6245C53.7113 27.1349 52.4244 26.4168 51.3408 25.4768C50.8112 25.0198 50.3371 24.5171 49.9185 23.9623C49.6941 23.662 49.486 23.3486 49.2934 23.0222C49.1106 22.7154 48.9417 22.3955 48.7875 22.0561C48.4945 21.4163 48.271 20.7374 48.1167 20.0193C47.9446 19.2229 47.8589 18.3743 47.8589 17.4734L47.8785 16.7488L47.8956 16.4746L47.9478 15.9458C48.08 14.8426 48.3599 13.8177 48.7875 12.8776C48.8879 12.6557 48.9939 12.4403 49.1057 12.2314L49.4028 11.7091L49.5105 11.5329L49.7528 11.1673C49.9226 10.9192 50.0352 10.7691 50.2261 10.5406C50.3909 10.3382 50.5631 10.1424 50.7426 9.95308C50.9336 9.75071 51.1327 9.5614 51.3408 9.37209C52.4244 8.41899 53.7113 7.6748 55.2029 7.15908C56.6799 6.63684 58.2907 6.37572 60.0353 6.37572C61.7791 6.37572 63.3973 6.63684 64.8889 7.15908C66.3659 7.6748 67.6527 8.41899 68.7502 9.37209C69.8339 10.3448 70.685 11.5133 71.3035 12.8776Z";
  const N = "M84.2773 0.422363H90.9802L111.575 11.2061V0.422363H118.278V33.4712H111.575V18.3106L90.9802 7.59035V33.4712H84.2773V0.422363Z";
  const E = "M127.624 0.422363H155.767V6.30054H134.327V12.8976H153.315V18.4163H134.327V27.6142H156.211V33.4712H127.624V0.422363Z";
  const R = "M161.063 7.23558C161.063 6.57219 161.144 5.93308 161.306 5.31823C161.468 4.698 161.7 4.12091 162.002 3.58696C162.309 3.05302 162.679 2.56762 163.11 2.13076C163.547 1.69389 164.035 1.31905 164.575 1.00624C165.114 0.693424 165.702 0.45342 166.338 0.286225C166.975 0.113638 167.649 0.0273438 168.361 0.0273438C169.067 0.0273438 169.739 0.113638 170.375 0.286225C171.012 0.45342 171.599 0.693424 172.139 1.00624C172.683 1.31905 173.172 1.69389 173.603 2.13076C174.04 2.56762 174.409 3.05302 174.711 3.58696C175.013 4.12091 175.245 4.698 175.407 5.31823C175.574 5.93308 175.658 6.57219 175.658 7.23558C175.658 7.89896 175.577 8.53807 175.415 9.15292C175.253 9.76776 175.019 10.3422 174.711 10.8761C174.409 11.41 174.04 11.8981 173.603 12.3404C173.172 12.7773 172.686 13.1521 172.147 13.4649C171.608 13.7777 171.02 14.0204 170.383 14.193C169.747 14.3656 169.073 14.4519 168.361 14.4519C167.649 14.4519 166.975 14.3656 166.338 14.193C165.702 14.0204 165.111 13.7777 164.566 13.4649C164.027 13.1521 163.542 12.7773 163.11 12.3404C162.679 11.8981 162.309 11.41 162.002 10.8761C161.7 10.3422 161.468 9.76776 161.306 9.15292C161.144 8.53807 161.063 7.89896 161.063 7.23558ZM162.754 7.23558C162.754 7.76952 162.816 8.2765 162.94 8.7565C163.064 9.23112 163.242 9.67338 163.474 10.0833C163.712 10.4878 163.995 10.8545 164.324 11.1835C164.658 11.5125 165.033 11.793 165.448 12.0249C165.864 12.2568 166.317 12.4348 166.807 12.5588C167.298 12.6829 167.816 12.7449 168.361 12.7449C169.175 12.7449 169.925 12.6074 170.61 12.3323C171.3 12.0572 171.893 11.677 172.39 11.1916C172.886 10.7008 173.271 10.1183 173.546 9.44416C173.827 8.76999 173.967 8.03379 173.967 7.23558C173.967 6.44275 173.827 5.70925 173.546 5.03508C173.271 4.36091 172.886 3.77843 172.39 3.28763C171.893 2.79684 171.303 2.41391 170.618 2.13885C169.933 1.86378 169.18 1.72625 168.361 1.72625C167.541 1.72625 166.786 1.86378 166.095 2.13885C165.411 2.41391 164.82 2.79684 164.324 3.28763C163.828 3.77843 163.442 4.36091 163.167 5.03508C162.892 5.70925 162.754 6.44275 162.754 7.23558ZM165.286 3.77304H167.794C168.576 3.77304 169.224 3.83776 169.736 3.9672C170.248 4.09124 170.656 4.26114 170.958 4.47687C171.26 4.6926 171.47 4.94609 171.589 5.23733C171.713 5.52318 171.775 5.82791 171.775 6.15151C171.775 6.39421 171.742 6.62613 171.678 6.84725C171.618 7.06838 171.519 7.27333 171.378 7.4621C171.243 7.64547 171.068 7.80997 170.852 7.95559C170.637 8.10121 170.372 8.22526 170.06 8.32773L171.904 10.5444H169.906L168.288 8.60279H167.835L166.937 8.5947V10.5444H165.286V3.77304ZM167.819 7.24367C168.239 7.24367 168.593 7.22209 168.878 7.17895C169.17 7.13041 169.402 7.06299 169.574 6.97669C169.747 6.88501 169.871 6.77714 169.946 6.65309C170.022 6.52365 170.06 6.37803 170.06 6.21623C170.06 6.05982 170.022 5.9169 169.946 5.78746C169.876 5.65802 169.752 5.54745 169.574 5.45577C169.402 5.36408 169.17 5.29396 168.878 5.24542C168.593 5.19149 168.231 5.16452 167.794 5.16452H166.937V7.24367H167.819Z";

  return (
    <div ref={ref} style={{ height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#fff' }}>

      {/* GO — viewBox crops to just G+O */}
      <motion.svg
        viewBox="0 0 80 35"
        style={{ position: 'absolute', height: '95px', width: 'auto' }}
        animate={step === 0 ? { opacity: 0, y: 30 } : step === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={tr}
      >
        <path d={G} fill="#1E1E1E" />
        <path d={O} fill="#E03720" fillRule="evenodd" clipRule="evenodd" />
      </motion.svg>

      {/* ONE — viewBox crops to O+N+E */}
      <motion.svg
        viewBox="41 0 115 35"
        style={{ position: 'absolute', height: '95px', width: 'auto' }}
        animate={step < 3 ? { opacity: 0, y: 30 } : step === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={tr}
      >
        <path d={O} fill="#E03720" fillRule="evenodd" clipRule="evenodd" />
        <path d={N} fill="#1E1E1E" />
        <path d={E} fill="#1E1E1E" />
      </motion.svg>

      {/* GONE® — full logo */}
      <motion.svg
        viewBox="0 0 176 35"
        style={{ position: 'absolute', height: '62px', width: 'auto' }}
        animate={step >= 4 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
        transition={{ ...tr, duration: 0.8 }}
      >
        <path d={G} fill="#1E1E1E" />
        <path d={O} fill="#E03720" fillRule="evenodd" clipRule="evenodd" />
        <path d={N} fill="#1E1E1E" />
        <path d={E} fill="#1E1E1E" />
        <path d={R} fill="#1E1E1E" />
      </motion.svg>
    </div>
  );
};

const IntroScreen = ({ onComplete }) => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 1700);
    const t3 = setTimeout(() => setStep(3), 2400);
    const t4 = setTimeout(() => setStep(4), 3800);
    const t5 = setTimeout(() => onComplete(), 5400);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  const tr = { duration: 0.65, ease: [0.23, 1, 0.32, 1] };

  const G = "M0 16.6196C0 14.2937 0.436987 12.1229 1.31096 10.1071C2.18493 8.0772 3.46065 6.31516 5.13812 4.82095C6.81558 3.32674 8.87365 2.14969 11.3123 1.28982C13.7651 0.429939 16.5703 0 19.7278 0C20.8696 0 22.0114 0.0634339 23.1532 0.190301C24.3091 0.303072 25.4439 0.486324 26.5575 0.740058C27.6852 0.993792 28.7777 1.31801 29.8349 1.71271C30.9062 2.09331 31.9212 2.55144 32.8797 3.0871L29.7926 8.16178C29.2147 7.82347 28.5592 7.5204 27.8262 7.25257C27.0932 6.97064 26.3038 6.73805 25.458 6.5548C24.6263 6.35745 23.7594 6.20944 22.8572 6.11076C21.9691 6.01209 21.074 5.96275 20.1719 5.96275C18.0856 5.96275 16.2249 6.23058 14.5897 6.76624C12.9545 7.28781 11.5731 8.02787 10.4454 8.98642C9.31768 9.93087 8.45781 11.0656 7.86576 12.3907C7.27371 13.7157 6.97769 15.1677 6.97769 16.7465C6.97769 18.3816 7.28781 19.8829 7.90805 21.2502C8.52829 22.6176 9.40931 23.7946 10.5511 24.7814C11.6929 25.7681 13.0744 26.5434 14.6954 27.1073C16.3165 27.657 18.1279 27.9319 20.1296 27.9319C21.7225 27.9319 23.1814 27.7557 24.5065 27.4033C25.8315 27.0368 26.9874 26.5223 27.9742 25.8597C28.9609 25.1972 29.7644 24.4008 30.3847 23.4704C31.0049 22.526 31.4137 21.4687 31.611 20.2987H20.0661V14.78H37.6372V14.8012L37.6584 14.78C38.0108 16.4716 38.1165 18.1208 37.9755 19.7278C37.8487 21.3207 37.4822 22.829 36.876 24.2528C36.284 25.6624 35.4664 26.9593 34.4233 28.1433C33.3801 29.3274 32.1326 30.3494 30.6807 31.2093C29.2288 32.0551 27.5795 32.7176 25.7329 33.1969C23.8863 33.6621 21.8634 33.8947 19.6644 33.8947C16.5914 33.8947 13.8356 33.4436 11.3969 32.5414C8.97232 31.6392 6.91426 30.4058 5.22269 28.8411C3.53113 27.2764 2.23427 25.4439 1.3321 23.3435C0.444035 21.2432 0 19.0019 0 16.6196Z";
  const O = "M60.2638 0.435198H60.8913H78.9005V16.6117L78.9062 16.9054L78.9038 17.1796L78.9005 17.4734C78.9005 18.5832 78.81 19.6472 78.6288 20.6721C78.4028 21.9516 78.0364 23.1658 77.5288 24.3148C76.6141 26.3842 75.3346 28.1533 73.6879 29.6286C72.0281 31.1235 70.0444 32.279 67.7376 33.095C66.5731 33.5063 65.3475 33.8131 64.0598 34.0154C62.7795 34.2178 61.438 34.3157 60.0353 34.3157L59.806 34.3223H41.1693L41.1701 17.4799C41.1701 14.9731 41.627 12.6687 42.541 10.5732C43.4557 8.4908 44.7426 6.70212 46.4031 5.19414C47.2387 4.43036 48.1616 3.75144 49.171 3.15739C49.8426 2.76571 50.5517 2.40667 51.3 2.08679C51.6435 1.93665 51.9944 1.79956 52.3534 1.669C54.675 0.839937 57.2356 0.422142 60.0353 0.422142L60.2638 0.435198ZM71.3035 12.8776C71.909 14.242 72.2109 15.7761 72.2109 17.4734C72.2109 19.1772 71.909 20.7048 71.3035 22.0561C70.685 23.4074 69.8339 24.5433 68.7502 25.4768C68.2517 25.9011 67.7139 26.2862 67.1362 26.6192C66.4434 27.0239 65.6943 27.3568 64.8889 27.6245C64.1863 27.8595 63.456 28.0358 62.6979 28.1533C62.0761 28.2512 61.4364 28.3165 60.7779 28.3426L60.0353 28.3622C58.2907 28.3622 56.6799 28.1206 55.2029 27.6245C53.7113 27.1349 52.4244 26.4168 51.3408 25.4768C50.8112 25.0198 50.3371 24.5171 49.9185 23.9623C49.6941 23.662 49.486 23.3486 49.2934 23.0222C49.1106 22.7154 48.9417 22.3955 48.7875 22.0561C48.4945 21.4163 48.271 20.7374 48.1167 20.0193C47.9446 19.2229 47.8589 18.3743 47.8589 17.4734L47.8785 16.7488L47.8956 16.4746L47.9478 15.9458C48.08 14.8426 48.3599 13.8177 48.7875 12.8776C48.8879 12.6557 48.9939 12.4403 49.1057 12.2314L49.4028 11.7091L49.5105 11.5329L49.7528 11.1673C49.9226 10.9192 50.0352 10.7691 50.2261 10.5406C50.3909 10.3382 50.5631 10.1424 50.7426 9.95308C50.9336 9.75071 51.1327 9.5614 51.3408 9.37209C52.4244 8.41899 53.7113 7.6748 55.2029 7.15908C56.6799 6.63684 58.2907 6.37572 60.0353 6.37572C61.7791 6.37572 63.3973 6.63684 64.8889 7.15908C66.3659 7.6748 67.6527 8.41899 68.7502 9.37209C69.8339 10.3448 70.685 11.5133 71.3035 12.8776Z";
  const N = "M84.2773 0.422363H90.9802L111.575 11.2061V0.422363H118.278V33.4712H111.575V18.3106L90.9802 7.59035V33.4712H84.2773V0.422363Z";
  const E = "M127.624 0.422363H155.767V6.30054H134.327V12.8976H153.315V18.4163H134.327V27.6142H156.211V33.4712H127.624V0.422363Z";
  const R = "M161.063 7.23558C161.063 6.57219 161.144 5.93308 161.306 5.31823C161.468 4.698 161.7 4.12091 162.002 3.58696C162.309 3.05302 162.679 2.56762 163.11 2.13076C163.547 1.69389 164.035 1.31905 164.575 1.00624C165.114 0.693424 165.702 0.45342 166.338 0.286225C166.975 0.113638 167.649 0.0273438 168.361 0.0273438C169.067 0.0273438 169.739 0.113638 170.375 0.286225C171.012 0.45342 171.599 0.693424 172.139 1.00624C172.683 1.31905 173.172 1.69389 173.603 2.13076C174.04 2.56762 174.409 3.05302 174.711 3.58696C175.013 4.12091 175.245 4.698 175.407 5.31823C175.574 5.93308 175.658 6.57219 175.658 7.23558C175.658 7.89896 175.577 8.53807 175.415 9.15292C175.253 9.76776 175.019 10.3422 174.711 10.8761C174.409 11.41 174.04 11.8981 173.603 12.3404C173.172 12.7773 172.686 13.1521 172.147 13.4649C171.608 13.7777 171.02 14.0204 170.383 14.193C169.747 14.3656 169.073 14.4519 168.361 14.4519C167.649 14.4519 166.975 14.3656 166.338 14.193C165.702 14.0204 165.111 13.7777 164.566 13.4649C164.027 13.1521 163.542 12.7773 163.11 12.3404C162.679 11.8981 162.309 11.41 162.002 10.8761C161.7 10.3422 161.468 9.76776 161.306 9.15292C161.144 8.53807 161.063 7.89896 161.063 7.23558ZM162.754 7.23558C162.754 7.76952 162.816 8.2765 162.94 8.7565C163.064 9.23112 163.242 9.67338 163.474 10.0833C163.712 10.4878 163.995 10.8545 164.324 11.1835C164.658 11.5125 165.033 11.793 165.448 12.0249C165.864 12.2568 166.317 12.4348 166.807 12.5588C167.298 12.6829 167.816 12.7449 168.361 12.7449C169.175 12.7449 169.925 12.6074 170.61 12.3323C171.3 12.0572 171.893 11.677 172.39 11.1916C172.886 10.7008 173.271 10.1183 173.546 9.44416C173.827 8.76999 173.967 8.03379 173.967 7.23558C173.967 6.44275 173.827 5.70925 173.546 5.03508C173.271 4.36091 172.886 3.77843 172.39 3.28763C171.893 2.79684 171.303 2.41391 170.618 2.13885C169.933 1.86378 169.18 1.72625 168.361 1.72625C167.541 1.72625 166.786 1.86378 166.095 2.13885C165.411 2.41391 164.82 2.79684 164.324 3.28763C163.828 3.77843 163.442 4.36091 163.167 5.03508C162.892 5.70925 162.754 6.44275 162.754 7.23558ZM165.286 3.77304H167.794C168.576 3.77304 169.224 3.83776 169.736 3.9672C170.248 4.09124 170.656 4.26114 170.958 4.47687C171.26 4.6926 171.47 4.94609 171.589 5.23733C171.713 5.52318 171.775 5.82791 171.775 6.15151C171.775 6.39421 171.742 6.62613 171.678 6.84725C171.618 7.06838 171.519 7.27333 171.378 7.4621C171.243 7.64547 171.068 7.80997 170.852 7.95559C170.637 8.10121 170.372 8.22526 170.06 8.32773L171.904 10.5444H169.906L168.288 8.60279H167.835L166.937 8.5947V10.5444H165.286V3.77304ZM167.819 7.24367C168.239 7.24367 168.593 7.22209 168.878 7.17895C169.17 7.13041 169.402 7.06299 169.574 6.97669C169.747 6.88501 169.871 6.77714 169.946 6.65309C170.022 6.52365 170.06 6.37803 170.06 6.21623C170.06 6.05982 170.022 5.9169 169.946 5.78746C169.876 5.65802 169.752 5.54745 169.574 5.45577C169.402 5.36408 169.17 5.29396 168.878 5.24542C168.593 5.19149 168.231 5.16452 167.794 5.16452H166.937V7.24367H167.819Z";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', height: '120px', width: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.svg
          viewBox="0 0 80 35"
          style={{ position: 'absolute', height: '95px', width: 'auto' }}
          animate={step === 0 ? { opacity: 0, y: 30 } : step === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={tr}
        >
          <path d={G} fill="#1E1E1E" />
          <path d={O} fill="#E03720" fillRule="evenodd" clipRule="evenodd" />
        </motion.svg>

        <motion.svg
          viewBox="41 0 115 35"
          style={{ position: 'absolute', height: '95px', width: 'auto' }}
          animate={step < 3 ? { opacity: 0, y: 30 } : step === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={tr}
        >
          <path d={O} fill="#E03720" fillRule="evenodd" clipRule="evenodd" />
          <path d={N} fill="#1E1E1E" />
          <path d={E} fill="#1E1E1E" />
        </motion.svg>

        <motion.svg
          viewBox="0 0 176 35"
          style={{ position: 'absolute', height: '62px', width: 'auto' }}
          animate={step >= 4 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
          transition={{ ...tr, duration: 0.8 }}
        >
          <path d={G} fill="#1E1E1E" />
          <path d={O} fill="#E03720" fillRule="evenodd" clipRule="evenodd" />
          <path d={N} fill="#1E1E1E" />
          <path d={E} fill="#1E1E1E" />
          <path d={R} fill="#1E1E1E" />
        </motion.svg>
      </div>
    </motion.div>
  );
};

const PostsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const posts = [
    { img: '/posts/Frame 171.webp', tag: 'Conteúdo' },
    { img: '/posts/Frame 306.webp', tag: 'Branding' },
    { img: '/posts/Frame 346.webp', tag: 'Meta Ads' },
    { img: '/posts/Frame 423.webp', tag: 'Conteúdo' },
    { img: '/posts/Frame 424.webp', tag: 'Tráfego' },
    { img: '/posts/Frame 77.webp', tag: 'Identidade' },
    { img: '/posts/Group 225.webp', tag: 'Conteúdo' },
  ];

  const total = posts.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % total), 3500);
    return () => clearInterval(timer);
  }, []);

  const getCardProps = (i) => {
    let offset = i - current;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    const abs = Math.abs(offset);
    if (abs > 2) return null;
    return { offset, abs };
  };

  return (
    <div style={{ padding: '4rem 2rem 5rem', textAlign: 'center', overflow: 'hidden' }}>
      <span className="tag">Portfólio</span>
      <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '3.5rem', color: '#111', lineHeight: 1.2 }}>
        Conteúdo que já <span style={{ color: 'var(--primary)', fontFamily: "'DakotaRough', sans-serif" }}>ProDuZiMoS.</span>
      </h2>

      <div style={{ position: 'relative', perspective: '1200px', perspectiveOrigin: '50% 40%', height: '400px' }}>
        {posts.map((post, i) => {
          const props = getCardProps(i);
          if (!props) return null;
          const { offset, abs } = props;
          const rotateY = offset * -42;
          const translateX = offset * 270;
          const translateZ = -abs * 80;
          const scale = 1 - abs * 0.07;

          return (
            <div
              key={i}
              onClick={() => offset !== 0 && setCurrent(i)}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: '-140px',
                marginTop: '-180px',
                width: '280px',
                height: '360px',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#111',
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: 10 - abs,
                filter: `brightness(${1 - abs * 0.22})`,
                transition: 'all 0.65s cubic-bezier(0.23, 1, 0.32, 1)',
                cursor: offset !== 0 ? 'pointer' : 'default',
                boxShadow: abs === 0 ? '0 30px 80px rgba(0,0,0,0.18)' : '0 8px 24px rgba(0,0,0,0.1)',
              }}
            >
                <img
                src={post.img}
                alt={post.tag}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
        <button
          onClick={() => setCurrent(c => (c - 1 + total) % total)}
          style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid #e5e7eb', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)', color: '#111' }} />
        </button>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '22px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === current ? '#E03720' : '#e5e7eb',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent(c => (c + 1) % total)}
          style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid #e5e7eb', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ArrowRight size={16} style={{ color: '#111' }} />
        </button>
      </div>

    </div>
  );
};

const TOP_SERVICES = [
  { icon: <img src="/google-ads-icon.webp" alt="Google Ads" style={{ width: '40px' }} />, title: "Google Ads", desc: "O feijão com arroz que funciona: pare de perder vendas todo dia para o concorrente direto." },
  { icon: <img src="/meta.png" alt="Meta" style={{ width: '45px' }} />, title: "Meta Ads", desc: "Campanhas inteligentes no Instagram e Facebook com foco total em conversão e geração de leads." },
  { icon: <img src="/Google__G__logo.svg.png" alt="Google" style={{ width: '38px' }} />, title: "Google Search", desc: "Otimização técnica para que seu negócio seja a primeira opção quando o cliente está pronto para comprar." }
];

const TopServicesCarousel = () => {
  const trackRef = React.useRef(null);
  const x = useMotionValue(0);
  const isPaused = React.useRef(false);
  const dragStartX = React.useRef(0);

  useAnimationFrame((_, delta) => {
    if (isPaused.current || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    const next = x.get() - delta * 0.045;
    x.set(next <= -halfWidth ? next + halfWidth : next);
  });

  const doubled = [...TOP_SERVICES, ...TOP_SERVICES];

  return (
    <div className="top-carousel-outer">
      <motion.div
        ref={trackRef}
        className="top-carousel-track"
        style={{ x }}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => {
          isPaused.current = true;
          dragStartX.current = x.get();
        }}
        onDrag={() => {
          if (x.get() > dragStartX.current) x.set(dragStartX.current);
        }}
        onDragEnd={() => { isPaused.current = false; }}
      >
        {doubled.map((service, i) => (
          <div key={i} className="top-carousel-card">
            <div className="card-inner service-item">
              <div className="icon">{service.icon}</div>
              <h3 style={{ fontSize: '1.3rem' }}>{service.title.split(' ')[0]} <span>{service.title.split(' ')[1]}</span></h3>
              <p style={{ fontSize: '0.95rem' }}>{service.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [introComplete]);
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
      <AnimatePresence>
        {!introComplete && <IntroScreen onComplete={() => setIntroComplete(true)} />}
      </AnimatePresence>
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
            background: '#E03720',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <DitheringShader
              colorBack="#E03720"
              colorFront="#ffffff"
              shape="swirl"
              type="4x4"
              pxSize={2}
              speed={0.4}
              style={{ opacity: 0.15 }}
            />

            <div style={{ position: 'relative', zIndex: 10 }}>
              <span className="tag">Assessoria de marketing digital</span>
              <h1 style={{ fontSize: '4.2rem' }}>A fila começa no<br /><span>DIgITaL.</span></h1>
              <p style={{ fontSize: '1.15rem' }}>
                Vendemos atenção. Vendemos clientes. Vendemos crescimento.
                Transformamos seu negócio na principal referência do mercado em até 90 dias.
              </p>
              <div className="hero-btns">
                <button onClick={() => setIsFormOpen(true)} className="btn-bento">Garantir Raio-X Gratuito <ArrowUpRight size={18} /></button>
              </div>
            </div>

            <img
              src="/bio-bird.png"
              alt=""
              className="hero-bird"
            />
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* SPACING */}
        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card"></div>

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
              Sente que seu negócio está travado? <br />
              <span style={{ color: 'var(--primary)' }}>A Gone cria o plano</span> para você escalar de vez.
            </h2>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* ROW 4: Bottom 3 Solutions */}
        <div className="bento-card col-1 empty-card"></div>
        {[
          { desc: <>Já <strong>abaixou o preço</strong> pra vender mais e ainda assim <strong>não funcionou?</strong> O problema não é o preço — é como sua <span style={{color:'var(--primary)'}}>oferta está posicionada.</span></> },
          { desc: <>Já investiu em <strong>tráfego</strong>, trouxe visita, mas <strong>ninguém comprou?</strong> Sem funil, você só está <span style={{color:'var(--primary)'}}>pagando pra aquecer o concorrente.</span></> },
          { desc: <>Já tem clientes, mas eles <strong>compram uma vez e somem?</strong> Sua base é um ativo dormindo — <span style={{color:'var(--primary)'}}>e a gente acorda ela.</span></> }
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
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{service.desc}</p>
            </div>
          </motion.div>
        ))}
        <div className="bento-card col-1 empty-card"></div>

        {/* TURN ROW */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: '3.5rem 2rem', background: '#fff', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#111', fontWeight: 700, margin: 0, lineHeight: 1.2, textAlign: 'center' }}>
              Mas isso pode mudar.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#999', maxWidth: '400px', margin: 0, lineHeight: 1.6, textAlign: 'center' }}>
              Um diagnóstico gratuito é tudo que precisa para entender onde está o gargalo e o que fazer a seguir.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-bento"
              style={{ background: '#E03720', color: '#fff', marginTop: '0.5rem', width: 'auto', alignSelf: 'center' }}
            >
              Quero meu diagnóstico <ArrowUpRight size={16} />
            </button>
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
          <div className="card-inner ifood-feed-section" style={{ paddingTop: '2.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
            <div className="feed-info-text">
              <span className="tag">Tráfego para WhatsApp</span>
              <h2 className="section-title">Leads qualificados <br /><span className="highlight" style={{ fontFamily: "'DakotaRough', sans-serif" }}>No Seu ZaP.</span></h2>
              <div className="features-list">
                <div className="feature-item">
                  <Zap size={20} color="#E03720" className="feature-icon" />
                  <div className="feature-content">
                    <h4>Público Qualificado</h4>
                    <p>Anúncios que filtram e entregam só quem tem real interesse no seu negócio.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <MessageSquare size={20} color="#E03720" className="feature-icon" />
                  <div className="feature-content">
                    <h4>Entrada Direta no WhatsApp</h4>
                    <p>O lead clica no anúncio e já inicia uma conversa, reduzindo drasticamente a taxa de abandono no caminho.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <TrendingUp size={20} color="#E03720" className="feature-icon" />
                  <div className="feature-content">
                    <h4>Resultado Previsível</h4>
                    <p>Sabemos exatamente quantos leads gerar por real investido.</p>
                  </div>
                </div>
              </div>
            </div>

            <PhoneMockup>
              <WhatsAppFeed inPhone={true} />
            </PhoneMockup>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        {/* SPACING */}
        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card"></div>

        {/* ROW 3: Top 3 Solutions — desktop grid */}
        <div className="bento-card col-1 empty-card"></div>
        {TOP_SERVICES.map((service, i) => (
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
        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card"></div>


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
                <span style={{ color: 'var(--primary)', fontFamily: "'DakotaRough', sans-serif" }}>MuLTiPLiCaM SeuS&nbsp;ReSuLTaDoS.</span>
              </h2>

              {/* Animated Counter */}
              {(() => {
                const CounterBlock = () => {
                  const [count, setCount] = React.useState(100000);
                  const [started, setStarted] = React.useState(false);
                  const ref = React.useRef(null);

                  React.useEffect(() => {
                    const observer = new IntersectionObserver(
                      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
                      { threshold: 0.5 }
                    );
                    if (ref.current) observer.observe(ref.current);
                    return () => observer.disconnect();
                  }, [started]);

                  React.useEffect(() => {
                    if (!started) return;
                    const from = 100000, to = 500000, duration = 2200;
                    const startTime = performance.now();
                    const tick = (now) => {
                      const elapsed = now - startTime;
                      const progress = Math.min(elapsed / duration, 1);
                      // ease out cubic
                      const eased = 1 - Math.pow(1 - progress, 3);
                      setCount(Math.round(from + eased * (to - from)));
                      if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                  }, [started]);

                  const progress = Math.round(((count - 100000) / 400000) * 100);
                  const formatted = count >= 1000
                    ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'k'
                    : count.toString();

                  return (
                    <div ref={ref} style={{ marginTop: '2rem', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        fontSize: 'clamp(3rem, 10vw, 5.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                        fontVariantNumeric: 'tabular-nums',
                        backgroundImage: 'linear-gradient(to bottom, #E03720 20%, #ffffff 95%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}>
                        <span style={{ fontSize: '0.45em', fontWeight: 700, marginRight: '0.1em' }}>R$</span>{formatted}
                      </div>
                      <div style={{ width: 'min(320px, 80vw)', height: '4px', background: 'transparent', borderRadius: '100px', overflow: 'hidden' }}>
                        <motion.div
                          style={{
                            height: '100%',
                            background: '#E03720',
                            borderRadius: '100px'
                          }}
                          initial={{ width: '0%' }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.05 }}
                        />
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#E03720', fontWeight: 500 }}>
                        de R$100k → R$500k
                      </div>
                    </div>
                  );
                };
                return <CounterBlock />;
              })()}
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
        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card"></div>

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
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>Nossa metodologia é testada e aprovada por negócios de diferentes segmentos.</p>
            <div className="pilar-list">
              <li><CheckCircle2 color="#E03720" size={18} /> Conteúdo que desperta desejo.</li>
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
                  <div style={{ fontWeight: '700', fontSize: '1.1rem', lineHeight: '1', color: '#111' }}>+70 negócios</div>
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
                  text: "Depois que começamos a trabalhar com a GONE®, nossa agenda lotou. O digital finalmente virou canal de vendas de verdade.",
                  author: "Renata Lima",
                  role: "CEO da Vila Nobre",
                  avatar: "/avatars/courtney-turner.jpg"
                },
                {
                  text: "Antes a gente fazia tudo no chute. Agora temos estratégia, conteúdo que realmente engaja e campanhas que trazem resultado.",
                  author: "João Silva",
                  role: "Sócio da Drip Studio",
                  avatar: "/avatars/ethan-valdez.jpg"
                },
                {
                  text: "Com as estratégias da equipe, o Instagram virou minha maior fonte de novos clientes e negócios fechados.",
                  author: "Mariana Souza",
                  role: "CEO da Napoli Studio",
                  avatar: "/avatars/ava-bentley.jpg"
                },
                {
                  text: "Já trabalhei com outras agências antes, mas sempre pareciam perdidas no nosso segmento. A GONE® entende o negócio.",
                  author: "Lucas Mendes",
                  role: "Diretor da Mori Estética",
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


        {/* ROW: Posts Carousel */}
        <div className="bento-card col-1 empty-card"></div>
        <motion.div
          className="bento-card col-12 posts-carousel-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-inner" style={{ padding: 0, background: '#fafafa', overflow: 'visible' }}>
            <PostsCarousel />
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
          <div className="card-inner" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: '#fff' }}>
            <span className="tag">Certificações & Parcerias</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', color: '#111' }}>Credenciados pelas maiores plataformas do mundo</h2>
            <p style={{ fontSize: '0.95rem', color: '#888', maxWidth: '520px', margin: '0 auto 2.5rem' }}>
              Trabalhamos dentro dos padrões técnicos exigidos pelo Google e pela Meta — isso significa mais eficiência, menos desperdício e resultados auditados.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/Google-Meta.png" alt="Google e Meta" style={{ height: '140px', width: 'auto' }} />
            </div>
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
                Evolução nos resultados ou cancelamos sem qualquer multa. O risco é 100% nosso.
              </p>
              <button onClick={() => setIsFormOpen(true)} className="btn-bento" style={{ padding: '0.9rem 2.0rem', fontSize: '0.7rem', background: '#fff', color: '#000', borderRadius: '15px' }}>
                Diagnóstico Gratuito
              </button>
            </div>
          </div>
        </motion.div>
        <div className="bento-card col-1 empty-card"></div>

        <div className="bento-card col-1 empty-card"></div>
        <div className="bento-card col-12"><div className="card-inner" style={{ minHeight: '80px' }}></div></div>
        <div className="bento-card col-1 empty-card"></div>

        {/* ROW: Logo Reveal Animation */}
        <motion.div
          className="bento-card col-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <LogoReveal />
        </motion.div>

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
              &copy; 2025 GONE® Assessoria — Marketing Digital.
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
