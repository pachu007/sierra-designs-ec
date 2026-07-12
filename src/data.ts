import { ProductCard, CarouselItem, TimelineStep, ProcessStep } from './types';

// Imports de imágenes locales — necesarios para que Vite las procese
// correctamente y respete el "base path" al publicar en GitHub Pages
import heroWoodCnc from './assets/images/hero_wood_cnc_1783808468440.jpg';
import letreroPvcNegocio from './assets/images/letrero_pvc_negocio_1783808509664.jpg';
import bandejaWoodCustom from './assets/images/bandeja_wood_custom_1783808488544.jpg';
import casaMascotaMadera from './assets/images/casa_mascota_madera_1783808519324.jpg';
import celosiaMadera from './assets/images/celosia_madera_1783808496152.jpg';

// Fotos reales subidas por el cliente
import carvedSignCoffeeShop from './assets/images/Carved_sign_on_coffee_shop.jpeg';
import carvedSignManCave from './assets/images/Carved_sign_in_man_cave.jpeg';
import cncRouterCuttingPineWood from './assets/images/CNC_router_cutting_pine_wood.jpeg';

export const HERO_DATA = {
  eyebrow: "Letreros y piezas talladas · Hecho en Ecuador, entregado en todo el país",
  title: "Dale a tu bar, negocio o espacio esa pieza que nadie más tiene.",
  subtext: "Diseñamos y tallamos letreros personalizados en madera y PVC — tú apruebas el diseño antes de cortar, y lo recibes en tu domicilio en Quito, Cumbayá, Guayaquil o Cuenca en unos 5 días, envío incluido.",
  ctaWhatsApp: "https://wa.me/593987654321?text=Hola!%20Quiero%20cotizar%20un%20letrero%20personalizado"
};

export const LETREROS_CARDS: ProductCard[] = [
  {
    id: "l1",
    title: "Bares y restaurantes",
    description: "Letreros rústicos o modernos con identidad propia para tu local que atraen miradas y fotos de clientes.",
    badge: "Más Vendido",
    image: carvedSignCoffeeShop
  },
  {
    id: "l2",
    title: "Man caves",
    description: "Tu espacio, tu estilo. Diseños rebeldes, escudos de fútbol retro, marcas de whisky o tu propio logotipo personalizado.",
    badge: "100% Personalizado",
    image: carvedSignManCave
  },
  {
    id: "l3",
    title: "Marcas y negocios",
    description: "Rótulos y logotipos en PVC o madera que transmiten profesionalismo e innovación desde el primer vistazo.",
    badge: "Alta Precisión",
    image: letreroPvcNegocio
  }
];

export const LETREROS_CAROUSEL: CarouselItem[] = [
  {
    id: "lc1",
    src: carvedSignCoffeeShop,
    alt: "letrero-tallado-madera-cafeteria-ecuador.jpg",
    title: "Placa tallada para cafetería",
    description: "Estilo retro con logotipo tallado en relieve, perfecto para interiores con luz indirecta cálida."
  },
  {
    id: "lc2",
    src: carvedSignManCave,
    alt: "letrero-tallado-madera-man-cave-ecuador.jpg",
    title: "Letrero para Man Cave",
    description: "Diseño personalizado con carácter propio, tallado en madera con acabado oscuro para espacios personales."
  },
  {
    id: "lc3",
    src: letreroPvcNegocio,
    alt: "letrero-pvc-personalizado-local-comercial-quito.jpg",
    title: "Logotipo corporativo en PVC",
    description: "Corte milimétrico en PVC de alta densidad con pintura automotriz de larga duración en acabado mate."
  },
  {
    id: "lc4",
    src: cncRouterCuttingPineWood,
    alt: "taller-cnc-madera-riobamba-proceso-grabado.jpg",
    title: "Proceso de grabado CNC",
    description: "La fresa CNC cortando capas milimétricas de madera de pino curada para una definición perfecta de los bordes."
  }
];

export const BANDEJAS_CARDS: ProductCard[] = [
  {
    id: "b1",
    title: "Regalo personalizado",
    description: "Sorprende con nombres, fechas memorables o frases cortas grabadas en madera fina. El regalo perfecto.",
    badge: "Excelente Regalo",
    image: bandejaWoodCustom
  },
  {
    id: "b2",
    title: "Uso en el hogar",
    description: "Bandejas para servir desayunos, café o asados con canales antiderrames y asas ergonómicas talladas.",
    badge: "Súper Práctico",
    image: "https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "b3",
    title: "Para negocios y cafés",
    description: "Bandejas con el logo de tu local grabado en bajorrelieve. Resiste el lavado constante y el trato diario.",
    badge: "Durabilidad Comercial",
    image: "https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&q=80&w=600"
  }
];

export const BANDEJAS_CAROUSEL: CarouselItem[] = [
  {
    id: "bc1",
    src: bandejaWoodCustom,
    alt: "bandeja-madera-personalizada-grabada-monograma-ecuador.jpg",
    title: "Bandeja Monograma Premium",
    description: "Bandeja tallada con asas integradas y monograma familiar grabado con detalle fino en madera de canelo."
  },
  {
    id: "bc2",
    src: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&q=80&w=800",
    alt: "bandeja-madera-asado-rustico-cuenca.jpg",
    title: "Bandeja de Asados & Parrillas",
    description: "Madera dura de eucalipto curada con aceites minerales, ideal para cortar carnes y servir con estilo campestre."
  },
  {
    id: "bc3",
    src: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800",
    alt: "bandeja-madera-desayuno-cama-guayaquil.jpg",
    title: "Bandeja Desayunadora",
    description: "Modelo extra grande con patas plegables y grabado láser de frase motivacional en la superficie."
  },
  {
    id: "bc4",
    src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    alt: "servicio-cafeteria-bandeja-madera-riobamba.jpg",
    title: "Bandejas para Cafetería",
    description: "Lote personalizado para cafetería de especialidad, grabadas con su logotipo e identificador de mesa."
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Confirmas tu diseño",
    description: "Trabajamos sobre tu idea y creamos un boceto digital.",
    details: "Te enviamos una previsualización en 3D para que veas exactamente cómo lucirán los niveles de tallado y colores de tu pieza."
  },
  {
    step: 2,
    title: "Tallamos y pintamos",
    description: "Cortamos en madera o PVC con precisión CNC y detallamos a mano.",
    details: "Nuestras fresadoras CNC tallan los contornos con un margen de error menor a 0.1mm. Luego, nuestros artesanos lijan y aplican los selladores."
  },
  {
    step: 3,
    title: "Enviamos por courier",
    description: "Despachamos de forma segura mediante Servientrega o Tramaco Express.",
    details: "Embalamos cada producto en triple capa protectora de burbujas y cartón corrugado reforzado para que llegue impecable a tu destino."
  },
  {
    step: 4,
    title: "Recibes en tu puerta",
    description: "Llega a tu domicilio u oficina en aproximadamente 5 días hábiles.",
    details: "¡Listo para colgar o usar! Te enviamos el código de rastreo para que monitorees el paquete en tiempo real."
  }
];

export const TAMBIEN_HACEMOS = {
  mascotas: {
    title: "Casas para mascotas",
    description: "Casitas de madera de diseño moderno, térmicas y súper resistentes, con el nombre de tu mascota grabado sobre la entrada principal.",
    image: casaMascotaMadera,
    alt: "casa-mascota-madera-diseno-moderno-ecuador.jpg",
    link: "https://wa.me/593987654321?text=Hola!%20Me%20interesa%20la%20casa%20para%20mascotas%20personalizada"
  },
  celosias: {
    title: "Celosías decorativas",
    description: "Paneles divisores de ambiente tallados en MDF o madera sólida con patrones geométricos, árabes o minimalistas a la medida de tu espacio.",
    image: celosiaMadera,
    alt: "celosia-madera-paneles-decorativos-cnc-riobamba.jpg",
    link: "https://wa.me/593987654321?text=Hola!%20Quiero%20cotizar%20celosias%20de%20madera%20personalizadas"
  }
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "p1",
    step: "01",
    title: "Cotización instantánea",
    description: "Nos envías tu idea, logotipo o frase por WhatsApp. Te damos precio exacto con envío incluido de inmediato."
  },
  {
    id: "p2",
    step: "02",
    title: "Diseño y Aprobación",
    description: "Elaboramos un boceto digital en 2D/3D. No encendemos la máquina CNC hasta que estés 100% feliz con el boceto."
  },
  {
    id: "p3",
    step: "03",
    title: "Precisión CNC & Mano",
    description: "Tallamos tu pieza con fresadoras CNC de alta tecnología y le damos el acabado final a mano con lacas y tintes de primera."
  },
  {
    id: "p4",
    step: "04",
    title: "Envío Garantizado",
    description: "Embalamos con máxima protección y lo enviamos a cualquier rincón del Ecuador. Si algo le pasa en el camino, nos hacemos cargo."
  }
];

export const CIUDADES_COBERTURA = [
  "Quito", "Cumbayá", "Guayaquil", "Cuenca", "Riobamba", "Ambato", "Loja", 
  "Manta", "Portoviejo", "Ibarra", "Machala", "Santo Domingo", "Cayambe", "Latacunga"
];

export const STATS = [
  { value: 350, suffix: "+", label: "Letreros entregados" },
  { value: 200, suffix: "+", label: "Bandejas grabadas" },
  { value: 100, suffix: "%", label: "Clientes contentos" },
  { value: 5, suffix: " días", label: "Tiempo promedio" }
];
