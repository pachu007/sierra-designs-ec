import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  MapPin, 
  Truck, 
  Sparkles, 
  Hammer, 
  CheckCircle, 
  Cpu, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Layers3, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

import { 
  HERO_DATA, 
  LETREROS_CARDS, 
  LETREROS_CAROUSEL, 
  BANDEJAS_CARDS, 
  BANDEJAS_CAROUSEL, 
  TAMBIEN_HACEMOS, 
  PROCESS_STEPS, 
  CIUDADES_COBERTURA, 
  STATS 
} from './data';

import TiltCard from './components/TiltCard';
import AnimatedCounter from './components/AnimatedCounter';
import Carousel from './components/Carousel';
import ShippingTimeline from './components/ShippingTimeline';
import CustomCursor from './components/CustomCursor';

export function SierraLogo({ className = "w-10 h-10 text-dorado" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Outer double circle */}
      <circle cx="50" cy="50" r="46" strokeWidth="2" />
      <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="3 1.5" />
      
      {/* Saw teeth details inside the left/right arches */}
      <path d="M 16 34 L 12 39 L 17 41 L 12 47 L 17 49 L 12 55 L 17 57 L 13 63 M 13 63 L 17 65" strokeWidth="1" />
      <path d="M 84 34 L 88 39 L 83 41 L 88 47 L 83 49 L 88 55 L 83 57 L 87 63 M 87 63 L 83 65" strokeWidth="1" />

      {/* Spindle router in the top half */}
      <rect x="45" y="16" width="10" height="15" rx="1.5" strokeWidth="2.2" />
      <line x1="43" y1="20" x2="57" y2="20" strokeWidth="1.2" />
      <line x1="43" y1="24" x2="57" y2="24" strokeWidth="1.2" />
      <rect x="47" y="31" width="6" height="5" strokeWidth="1.5" />
      <path d="M 50 36 L 50 44 L 49 47 L 50 49 L 51 47 L 50 44" fill="currentColor" strokeWidth="1" />

      {/* Radiating carving rays */}
      <g strokeWidth="0.8" opacity="0.85">
        <line x1="50" y1="52" x2="50" y2="56" />
        <line x1="46" y1="51" x2="42" y2="53" />
        <line x1="54" y1="51" x2="58" y2="53" />
        <line x1="43" y1="44" x2="28" y2="38" />
        <line x1="41" y1="47" x2="26" y2="47" />
        <line x1="57" y1="44" x2="72" y2="38" />
        <line x1="59" y1="47" x2="74" y2="47" />
        <line x1="46" y1="38" x2="33" y2="30" />
        <line x1="54" y1="38" x2="67" y2="30" />
      </g>

      {/* Mountain outline representing 'Sierra' */}
      <path 
        d="M 18 69 L 34 56 L 41 61 L 50 49 L 63 60 L 71 54 L 82 69" 
        strokeWidth="2.2" 
      />
      <line x1="16" y1="69" x2="84" y2="69" strokeWidth="2" />
    </svg>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll detection for sticky header and hero parallax
  useEffect(() => {
    const handleScroll = () => {
      // Header sticky style
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Parallax sutil with performance checks and reduced motion support
      if (heroRef.current) {
        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!isReduced) {
          const rect = heroRef.current.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            const isMobile = window.innerWidth < 768;
            // On low-end or multi-core proxy check
            const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
            if (!(isMobile && isLowEnd)) {
              const speed = isMobile ? 0.15 : 0.35; // reduced parallax on mobile (15%) and desktop (35%)
              setParallaxOffset(window.scrollY * speed);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-verde-suave text-texto-oscuro relative overflow-x-hidden selection:bg-dorado/25 selection:text-negro-profundo">
      
      {/* Custom Cursor on Desktop */}
      <CustomCursor />

      {/* 1. NAV FIJA (STICKY) SIMPLE */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-verde-oscuro/95 backdrop-blur-md shadow-lg border-b border-verde-oscuro/50 py-3 text-crema' 
            : 'bg-transparent py-5 text-crema'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo - Sierra Designs horizontal custom wordmark */}
          <a href="#hero" className="flex items-center gap-2.5 group cursor-pointer" aria-label="Volver al inicio">
            <div className="bg-dorado group-hover:bg-dorado-hover text-negro-profundo p-2 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center">
              <SierraLogo className="w-8 h-8 text-negro-profundo transform group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-display font-extrabold text-lg md:text-xl tracking-wider text-dorado uppercase leading-none">SIERRA</span>
                <span className="font-cursive text-xl md:text-2xl text-crema relative -left-0.5 top-0.5 leading-none">Designs</span>
              </div>
              <span className="font-mono text-[8px] tracking-widest text-crema/60 block uppercase mt-0.5">ECUADOR</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#letreros" className="font-medium text-xs uppercase tracking-wider text-crema hover:text-dorado transition-all">Letreros</a>
            <a href="#bandejas" className="font-medium text-xs uppercase tracking-wider text-crema hover:text-dorado transition-all">Bandejas</a>
            <a href="#envios" className="font-medium text-xs uppercase tracking-wider text-crema hover:text-dorado transition-all">Envíos</a>
            <a href="#otros-productos" className="font-medium text-xs uppercase tracking-wider text-crema hover:text-dorado transition-all">Otros</a>
            <a href="#como-trabajamos" className="font-medium text-xs uppercase tracking-wider text-crema hover:text-dorado transition-all">Proceso</a>
            <a href="#contacto" className="font-medium text-xs uppercase tracking-wider text-crema hover:text-dorado transition-all">Contacto</a>
          </nav>

          {/* Desktop Call To Action (WhatsApp) */}
          <div className="hidden sm:block">
            <a 
              href={HERO_DATA.ctaWhatsApp}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dorado hover:bg-dorado-hover text-negro-profundo font-bold text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-black/20 active:scale-95 animate-whatsapp-pulse cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-crema hover:text-dorado hover:bg-verde-oscuro/50 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div 
          className={`lg:hidden fixed inset-x-0 top-[60px] bg-verde-oscuro/95 backdrop-blur-lg border-b border-verde-oscuro/30 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <a 
              href="#letreros" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-crema hover:text-dorado transition-colors py-2 border-b border-verde-oscuro/20"
            >
              Letreros tallados
            </a>
            <a 
              href="#bandejas" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-crema hover:text-dorado transition-colors py-2 border-b border-verde-oscuro/20"
            >
              Bandejas de madera
            </a>
            <a 
              href="#envios" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-crema hover:text-dorado transition-colors py-2 border-b border-verde-oscuro/20"
            >
              Envíos nacionales
            </a>
            <a 
              href="#otros-productos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-crema hover:text-dorado transition-colors py-2 border-b border-verde-oscuro/20"
            >
              Otros productos
            </a>
            <a 
              href="#como-trabajamos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-crema hover:text-dorado transition-colors py-2 border-b border-verde-oscuro/20"
            >
              Cómo trabajamos
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-crema hover:text-dorado transition-colors py-2"
            >
              Contacto
            </a>

            <a 
              href={HERO_DATA.ctaWhatsApp}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full justify-center inline-flex items-center gap-2 bg-dorado hover:bg-dorado-hover text-negro-profundo font-bold py-3 px-5 rounded-full transition-colors text-center shadow-lg"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Cotizar en WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO CON PARALLAX SUTIL */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-verde-oscuro"
      >
        {/* Parallax Background Layer with 10% green overlay blend */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-75 will-change-transform"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 16, 0.45), rgba(20, 20, 16, 0.8)), url('/src/assets/images/hero_wood_cnc_1783808468440.jpg')`,
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          }}
        />
        <div className="absolute inset-0 bg-verde-oscuro/10 z-0 pointer-events-none" />

        {/* Sawdust floating effect container */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none mix-blend-overlay opacity-30 z-1" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-verde-oscuro/80 backdrop-blur border border-dorado/30 rounded-full px-4 py-1.5 mb-6 text-dorado hover:scale-102 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-dorado animate-spin-slow" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase font-medium">
              LETREROS Y PIEZAS TALLADAS · SIERRA DESIGNS EC
            </span>
          </div>

          {/* Headline H1 */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-crema tracking-tight leading-tight mb-6">
            Dale a tu bar, negocio o espacio esa <span className="text-transparent bg-clip-text bg-gradient-to-r from-dorado via-crema to-dorado">pieza única</span> que nadie más tiene.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-crema/85 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Diseñamos y tallamos letreros personalizados en madera y PVC — tú apruebas el diseño antes de cortar, y lo recibes en tu domicilio en Quito, Cumbayá, Guayaquil o Cuenca en unos 5 días, envío incluido.
          </p>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={HERO_DATA.ctaWhatsApp}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-dorado hover:bg-dorado-hover text-negro-profundo font-extrabold text-base px-8 py-4.5 rounded-full shadow-lg shadow-black/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 animate-whatsapp-pulse cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Cotiza tu letrero por WhatsApp</span>
            </a>
            
            <a 
              href="#letreros" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-crema font-medium text-sm px-6 py-4.5 rounded-full border border-crema/20 transition-all duration-300 hover:scale-102 active:scale-95 backdrop-blur-sm"
            >
              <span>Ver catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core dynamic stats panel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-crema/15 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center p-2 rounded-xl hover:bg-white/5 transition-all duration-300">
                <span className="font-display text-2xl sm:text-3xl font-black text-dorado block mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-crema/80 font-medium block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-mono text-[9px] uppercase tracking-widest text-crema">Desliza para explorar</span>
          <div className="w-5 h-8 border-2 border-crema rounded-full p-1 flex justify-center">
            <div className="w-1 h-2 bg-crema rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN LETREROS TALLADOS (Fondo: --verde-suave para ritmo) */}
      <section id="letreros" className="py-20 px-4 sm:px-6 lg:px-8 bg-verde-suave w-full">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-verde-oscuro block mb-2">Nuestro producto insignia</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-verde-oscuro tracking-tight mb-4">Letreros que le dan carácter a tu espacio</h2>
            <div className="w-16 h-1 bg-dorado mx-auto rounded-full mb-6" />
            <p className="text-texto-oscuro text-sm sm:text-base leading-relaxed">
              Diseñamos y tallamos letreros en madera y PVC, pensados para bares, negocios y espacios personales que quieren destacar. Tú eliges el diseño, lo apruebas antes de cortar, y lo tallamos con precisión CNC — cada línea exactamente como la imaginaste.
            </p>
          </div>

          {/* Letreros 3 tarjetas de sub-nichos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {LETREROS_CARDS.map((card) => (
              <TiltCard key={card.id} className="group relative flex flex-col h-full bg-blanco border border-verde-suave rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-verde-oscuro">
                  <img 
                    src={card.image} 
                    alt={`${card.title} - taller CNC letreros personalizados Ecuador`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/80 via-transparent to-transparent opacity-60" />
                  {card.badge && (
                    <span className="absolute top-4 right-4 bg-verde-oscuro text-dorado text-[10px] font-mono uppercase tracking-wider font-extrabold px-3 py-1 rounded-full border border-dorado/20">
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-blanco">
                  <div>
                    <h3 className="font-display text-lg font-bold text-verde-oscuro mb-2 group-hover:text-dorado-hover transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-texto-oscuro text-xs sm:text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-verde-oscuro font-bold text-xs uppercase tracking-wider group-hover:text-dorado-hover transition-colors">
                    <span>Saber más</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Letreros Carrusel */}
          <div className="max-w-4xl mx-auto mb-16">
            <h4 className="font-display font-bold text-verde-oscuro text-center text-sm uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
              <span className="w-6 h-[1px] bg-verde-oscuro/20" />
              Galería de Diseños Recientes
              <span className="w-6 h-[1px] bg-verde-oscuro/20" />
            </h4>
            <Carousel items={LETREROS_CAROUSEL} id="letreros-carousel" />
          </div>

          {/* Refuerzo de confianza & CTA - Fondo diferenciado verde oscuro */}
          <div className="bg-verde-oscuro rounded-2xl border border-dorado/10 p-6 md:p-8 max-w-4xl mx-auto text-center relative overflow-hidden shadow-lg">
            <div className="absolute -right-16 -bottom-16 w-36 h-36 bg-verde-oscuro/30 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-crema text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-6">
                Cada letrero pasa por un boceto digital que apruebas antes de tocar la máquina — así no hay sorpresas. Recíbelo en tu domicilio en <span className="font-bold text-dorado">Quito, Cumbayá, Guayaquil o Cuenca</span> en unos 5 días, envío incluido.
              </p>
              <a 
                href="https://wa.me/593987654321?text=Hola!%20Me%20gustaria%20disenar%20y%20cotizar%20un%20letrero%20tallado"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dorado hover:bg-dorado-hover text-negro-profundo font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-102 active:scale-95 shadow cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Diseña tu letrero → Cotiza por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN BANDEJAS DE MADERA (Fondo: --blanco para alternar ritmo) */}
      <section id="bandejas" className="bg-blanco py-20 px-4 sm:px-6 lg:px-8 border-y border-verde-suave">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-verde-oscuro block mb-2">Tu segunda prioridad, la primera en detalle</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-verde-oscuro tracking-tight mb-4">Bandejas de madera con tu sello personal</h2>
            <div className="w-16 h-1 bg-dorado mx-auto rounded-full mb-6" />
            <p className="text-texto-oscuro text-sm sm:text-base leading-relaxed">
              Bandejas talladas en madera, pensadas para servir, decorar o regalar. Grabamos nombres, fechas o frases que convierten un objeto cotidiano en algo memorable — tú eliges el diseño, lo apruebas antes de cortar, y la hacemos con precisión CNC.
            </p>
          </div>

          {/* 3 Tarjetas Bandejas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {BANDEJAS_CARDS.map((card) => (
              <TiltCard key={card.id} className="group relative flex flex-col h-full bg-blanco border border-verde-suave rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-verde-oscuro">
                  <img 
                    src={card.image} 
                    alt={`${card.title} - bandejas personalizadas Ecuador`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/80 via-transparent to-transparent opacity-60" />
                  {card.badge && (
                    <span className="absolute top-4 right-4 bg-verde-oscuro text-dorado text-[10px] font-mono uppercase tracking-wider font-extrabold px-3 py-1 rounded-full border border-dorado/20">
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-blanco">
                  <div>
                    <h3 className="font-display text-lg font-bold text-verde-oscuro mb-2 group-hover:text-dorado-hover transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-texto-oscuro text-xs sm:text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-verde-oscuro font-bold text-xs uppercase tracking-wider group-hover:text-dorado-hover transition-colors">
                    <span>Ver detalles</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Trabajos Personalizados "Hazlo tuyo" (Fondo Diferenciado: --verde-oscuro, Texto: --crema, Ícono/acento: --dorado) */}
          <div className="bg-verde-oscuro text-crema rounded-2xl border border-dorado/20 p-6 md:p-8 max-w-4xl mx-auto mb-16 relative overflow-hidden shadow-xl">
            {/* Background pattern */}
            <div className="absolute -left-12 -top-12 w-48 h-48 bg-verde-oscuro/50 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-dorado/20 text-dorado p-4 rounded-full border border-dorado/30 flex-shrink-0">
                <Sparkles className="w-8 h-8 animate-pulse-slow text-dorado" />
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-dorado mb-2 flex items-center gap-2">
                  <span>Trabajos Personalizados</span>
                  <span className="bg-dorado text-negro-profundo font-mono text-[9px] font-black uppercase px-2 py-0.5 rounded">Hazlo Tuyo</span>
                </h3>
                <p className="text-crema/90 text-xs sm:text-sm leading-relaxed">
                  Además del diseño base, podemos grabar lo que tú quieras: el escudo de tu equipo, una marca vintage, o hasta una <span className="text-white font-semibold underline decoration-dorado underline-offset-4">caricatura hecha con IA</span> a partir de una foto — perfecta para regalarle a papá, a tu pareja o a un amigo. Cuéntanos tu idea por WhatsApp y la hacemos realidad.
                </p>
                <p className="text-crema/60 text-[10px] mt-2 italic font-mono">
                  * Nota: Los grabados de marcas son de carácter privado bajo encargo y no forman parte del catálogo comercial público.
                </p>
              </div>
            </div>
          </div>

          {/* Bandejas Carrusel */}
          <div className="max-w-4xl mx-auto mb-16">
            <h4 className="font-display font-bold text-verde-oscuro text-center text-sm uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
              <span className="w-6 h-[1px] bg-verde-oscuro/20" />
              Bandejas Recientemente Talladas
              <span className="w-6 h-[1px] bg-verde-oscuro/20" />
            </h4>
            <Carousel items={BANDEJAS_CAROUSEL} id="bandejas-carousel" />
          </div>

          {/* CTA Bandejas */}
          <div className="text-center">
            <a 
              href="https://wa.me/593987654321?text=Hola!%20Me%20gustaria%20personalizar%20una%20bandeja%20de%20madera"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-dorado hover:bg-dorado-hover text-negro-profundo font-bold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:scale-102 active:scale-95 shadow cursor-pointer animate-whatsapp-pulse"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-current" />
              <span>Personaliza tu bandeja → Cotiza por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. SECCIÓN ENVÍOS (timeline interactiva - Fondo: --verde-suave para ritmo) */}
      <section id="envios" className="py-20 px-4 sm:px-6 lg:px-8 bg-verde-suave w-full">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blanco border border-verde-suave rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-verde-suave/50 rounded-bl-full pointer-events-none" />
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-verde-oscuro block mb-2">Envío Garantizado de 5 Días</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-verde-oscuro tracking-tight mb-4">
                ENVÍOS A TODO EL ECUADOR, SIERRA, COSTA Y ORIENTE
              </h2>
              <div className="w-16 h-1 bg-dorado mx-auto rounded-full mb-6" />
              <p className="text-texto-oscuro text-sm sm:text-base leading-relaxed">
                Fabricamos cada pieza a mano en nuestro taller en Riobamba y la enviamos directo a tu puerta en <span className="font-bold text-verde-oscuro">Quito, Cumbayá, Guayaquil, Cuenca</span> y el resto del país vía <span className="text-verde-oscuro underline decoration-dorado font-semibold">Servientrega o Tramaco Express</span>. Desde que confirmas tu diseño hasta que la recibes en casa: aproximadamente 5 días laborables.
              </p>
            </div>

            {/* Timeline interactiva */}
            <div className="mb-8">
              <ShippingTimeline />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-verde-suave pt-8 mt-6">
              <div className="flex items-center gap-2 text-texto-oscuro">
                <Truck className="w-5 h-5 text-verde-oscuro" />
                <span className="text-xs sm:text-sm">Envíos asegurados y protegidos contra golpes</span>
              </div>
              <span className="hidden sm:inline text-verde-oscuro/30">•</span>
              <div className="flex items-center gap-2 text-texto-oscuro">
                <MapPin className="w-5 h-5 text-verde-oscuro" />
                <span className="text-xs sm:text-sm">Taller matriz en Riobamba, envíos nacionales diarios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN "TAMBIÉN HACEMOS" — casas para mascotas + celosías (Fondo: --blanco) */}
      <section id="otros-productos" className="bg-blanco py-20 px-4 sm:px-6 lg:px-8 border-t border-verde-suave">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-verde-oscuro block mb-2">Proyectos Especiales</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-verde-oscuro tracking-tight mb-4">También Diseñamos y Tallamos</h2>
            <div className="w-12 h-0.5 bg-verde-oscuro/40 mx-auto rounded-full mb-4" />
          </div>

          {/* 2 columnas compactas sin dorado destacado (como se solicitó) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mascotas */}
            <div className="bg-blanco border border-verde-suave rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md transition-all duration-300">
              <div className="w-full sm:w-2/5 h-44 sm:h-auto relative overflow-hidden bg-verde-oscuro">
                <img 
                  src={TAMBIEN_HACEMOS.mascotas.image} 
                  alt={TAMBIEN_HACEMOS.mascotas.alt} 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-blanco">
                <div>
                  <h3 className="font-display text-base font-bold text-verde-oscuro mb-2">
                    {TAMBIEN_HACEMOS.mascotas.title}
                  </h3>
                  <p className="text-texto-oscuro text-xs leading-relaxed mb-4">
                    {TAMBIEN_HACEMOS.mascotas.description}
                  </p>
                </div>
                <a 
                  href={TAMBIEN_HACEMOS.mascotas.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-verde-oscuro hover:text-dorado-hover font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  <span>Preguntar por WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Celosias */}
            <div className="bg-blanco border border-verde-suave rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md transition-all duration-300">
              <div className="w-full sm:w-2/5 h-44 sm:h-auto relative overflow-hidden bg-verde-oscuro">
                <img 
                  src={TAMBIEN_HACEMOS.celosias.image} 
                  alt={TAMBIEN_HACEMOS.celosias.alt} 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-blanco">
                <div>
                  <h3 className="font-display text-base font-bold text-verde-oscuro mb-2">
                    {TAMBIEN_HACEMOS.celosias.title}
                  </h3>
                  <p className="text-texto-oscuro text-xs leading-relaxed mb-4">
                    {TAMBIEN_HACEMOS.celosias.description}
                  </p>
                </div>
                <a 
                  href={TAMBIEN_HACEMOS.celosias.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-verde-oscuro hover:text-dorado-hover font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  <span>Preguntar por WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SECCIÓN CÓMO TRABAJAMOS (Mención Precisión CNC - Fondo: --verde-suave) */}
      <section id="como-trabajamos" className="py-20 px-4 sm:px-6 lg:px-8 bg-verde-suave w-full">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-verde-oscuro block mb-2">Calidad Artesanal y Alta Tecnología</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-verde-oscuro tracking-tight mb-4">Nuestro Proceso es Simple</h2>
            <div className="w-16 h-1 bg-dorado mx-auto rounded-full mb-6" />
            <p className="text-texto-oscuro text-sm sm:text-base leading-relaxed">
              Fusionamos el cariño y los acabados del trabajo hecho a mano con la consistencia milimétrica de fresadoras automatizadas.
            </p>
          </div>

          {/* 4 Pasos con íconos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="bg-blanco border border-verde-suave rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-all">
                <span className="absolute top-4 right-4 font-display font-black text-3xl text-verde-oscuro/10 tracking-tight select-none">
                  {step.step}
                </span>
                <div className="mb-4 text-verde-oscuro">
                  {step.step === "01" && <MessageSquare className="w-6 h-6" />}
                  {step.step === "02" && <Sparkles className="w-6 h-6" />}
                  {step.step === "03" && <Cpu className="w-6 h-6" />}
                  {step.step === "04" && <Truck className="w-6 h-6" />}
                </div>
                <h3 className="font-display text-base font-bold text-verde-oscuro mb-2">{step.title}</h3>
                <p className="text-texto-oscuro text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mención CNC destacada - Fondo: --verde-oscuro, acento: --dorado */}
          <div className="bg-verde-oscuro text-crema rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg border border-dorado/10">
            <div className="absolute right-0 top-0 w-64 h-64 bg-radial-gradient from-verde-oscuro/20 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-dorado text-negro-profundo p-3.5 rounded-2xl border border-dorado/30">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base md:text-lg text-crema mb-1">Precisión CNC Milimétrica</h3>
                <p className="text-crema/80 text-xs md:text-sm leading-relaxed max-w-2xl">
                  Cortamos con tecnología CNC (Control Numérico Computarizado) de precisión, así tu diseño queda exactamente como lo aprobaste — sin errores, sin asimetrías, con cortes limpios y limado final impecable.
                </p>
              </div>
            </div>
            
            <div className="flex-shrink-0 flex items-center gap-2">
              <Award className="w-5 h-5 text-dorado" />
              <span className="font-mono text-xs uppercase tracking-wider text-dorado font-bold">Tecnología Industrial + Cariño de Artesano</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER / CONTACTO - Fondo: --negro-profundo */}
      <footer id="contacto" className="bg-negro-profundo text-crema mt-auto pt-16 pb-8 px-4 border-t border-verde-oscuro/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Taller Info Col */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              
              {/* Logo Badge Completo versión dorada sobre negro */}
              <div className="flex flex-col items-center border border-dorado/30 p-5 rounded-2xl bg-negro-profundo max-w-xs text-center shadow-lg group">
                <SierraLogo className="w-16 h-16 text-dorado mb-3 transform group-hover:scale-105 transition-transform duration-300" />
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display font-black text-2xl tracking-wider text-dorado uppercase leading-none">SIERRA</span>
                  <span className="font-cursive text-2xl text-crema relative -left-0.5 top-0.5 leading-none">Designs</span>
                </div>
                <span className="font-mono text-[9px] tracking-widest text-dorado block uppercase mt-1">ECUADOR</span>
              </div>

              <p className="text-crema/80 text-xs sm:text-sm leading-relaxed max-w-sm">
                Diseñamos y tallamos letreros y bandejas de madera/PVC que le dan vida a tus ideas. Creamos bocetos digitales interactivos y enviamos con total seguridad a todo el Ecuador en unos 5 días hábiles.
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-crema/90">
                  <MapPin className="w-4.5 h-4.5 text-dorado flex-shrink-0" />
                  <span>Taller Matriz: Riobamba, Provincia de Chimborazo, Ecuador</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-crema/90">
                  <Truck className="w-4.5 h-4.5 text-dorado flex-shrink-0" />
                  <span>Envíos por Servientrega o Tramaco Express directos a domicilio</span>
                </div>
              </div>
            </div>

            {/* Cobertura Col */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-dorado">Ciudades de Cobertura</h3>
              <p className="text-crema/80 text-xs leading-relaxed mb-2">
                Entregas rápidas con envío incluido a las principales zonas y ciudades del Ecuador:
              </p>
              <div className="flex flex-wrap gap-1.5 max-w-md">
                {CIUDADES_COBERTURA.map((ciudad) => (
                  <span 
                    key={ciudad} 
                    className="bg-negro-profundo border border-dorado/20 text-crema text-[10px] font-medium font-mono px-2.5 py-1 rounded hover:text-white hover:border-dorado transition-colors"
                  >
                    {ciudad}
                  </span>
                ))}
                <span className="bg-negro-profundo border border-dorado/30 text-dorado text-[10px] font-medium font-mono px-2.5 py-1 rounded">
                  Todo el país
                </span>
              </div>
            </div>

            {/* WhatsApp Col - CTA final con botón de WhatsApp */}
            <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-dorado mb-3">¿Listo para cotizar?</h3>
                <p className="text-crema/85 text-xs leading-relaxed mb-4">
                  Cuéntanos tu idea, el tamaño aproximado y material que prefieres. Te responderemos en minutos.
                </p>
              </div>
              
              <a 
                href={HERO_DATA.ctaWhatsApp}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full justify-center inline-flex items-center gap-2.5 bg-dorado hover:bg-dorado-hover text-negro-profundo font-extrabold py-3.5 px-6 rounded-full transition-all duration-300 hover:scale-102 active:scale-95 text-sm animate-whatsapp-pulse cursor-pointer shadow-lg shadow-black/20"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Socials & Bottom Bar */}
          <div className="border-t border-verde-oscuro/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-crema/60 text-xs">
            <div>
              <p>© {new Date().getFullYear()} SIERRA DESIGNS EC. Todos los derechos reservados.</p>
              <p className="text-[10px] text-crema/40 mt-1">Precio final, sin sorpresas — envío incluido a nivel nacional.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-negro-profundo border border-dorado/15 rounded-lg hover:text-dorado hover:border-dorado transition-colors" aria-label="Síguenos en Instagram">
                <Instagram className="w-4 h-4 text-crema/80 hover:text-dorado" />
              </a>
              <a href="#" className="p-2 bg-negro-profundo border border-dorado/15 rounded-lg hover:text-dorado hover:border-dorado transition-colors" aria-label="Síguenos en Facebook">
                <Facebook className="w-4 h-4 text-crema/80 hover:text-dorado" />
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
