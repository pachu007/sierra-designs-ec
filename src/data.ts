import { ProductCard, CarouselItem, TimelineStep, ProcessStep } from './types';
import copy from './content/copy.es.json';

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

const waLink = (text: string) => `https://wa.me/593960053637?text=${encodeURIComponent(text)}`;

// Seasonal banner: set enabled to false (or delete) after the date passes. Nothing else depends on it.
export const SEASONAL_BANNER = {
  enabled: true,
  text: "Pedidos para Navidad: último día para ordenar, 15 de diciembre"
};

export const HERO_DATA = {
  eyebrow: "Regalos personalizados en madera · Riobamba, Ecuador",
  title: copy.hero.h1,
  answer: copy.hero.answer,
  proof: copy.hero.proof,
  ctaWhatsApp: waLink("Hola! Quiero cotizar un regalo personalizado en madera")
};

export const FAQ_ITEMS: { q: string; a: string }[] = copy.faq;

export const SITE_ADDRESS = copy.address;

export const LETREROS_CARDS: ProductCard[] = [
  {
    id: "l1",
    title: "Bares y restaurantes",
    description: "Letreros rústicos o modernos con identidad propia para tu local que atraen miradas y fotos de clientes.",
    badge: "Para locales",
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
    alt: "Letrero tallado en madera para cafetería, hecho en Riobamba, Ecuador",
    title: "Placa tallada para cafetería",
    description: "Estilo retro con logotipo tallado en relieve, perfecto para interiores con luz indirecta cálida."
  },
  {
    id: "lc2",
    src: carvedSignManCave,
    alt: "Letrero tallado en madera para man cave",
    title: "Letrero para Man Cave",
    description: "Diseño personalizado con carácter propio, tallado en madera con acabado oscuro para espacios personales."
  },
  {
    id: "lc3",
    src: letreroPvcNegocio,
    alt: "Logotipo corporativo cortado en PVC para un local comercial",
    title: "Logotipo corporativo en PVC",
    description: "Corte milimétrico en PVC de alta densidad con pintura automotriz de larga duración en acabado mate."
  },
  {
    id: "lc4",
    src: cncRouterCuttingPineWood,
    alt: "Fresa CNC cortando madera en el taller de Sierra Designs, Riobamba",
    title: "Proceso de grabado CNC",
    description: "La fresa CNC cortando capas milimétricas de madera de pino curada para una definición perfecta de los bordes."
  }
];

const PRODUCT_IMAGES = [cncRouterCuttingPineWood, bandejaWoodCustom, carvedSignManCave];

export const BANDEJAS_CARDS: ProductCard[] = copy.products.map((p, i) => ({
  id: `b${i + 1}`,
  title: p.title,
  description: p.description,
  badge: p.badge,
  image: PRODUCT_IMAGES[i],
  whatsapp: waLink(p.whatsappText)
}));

export const BANDEJAS_CAROUSEL: CarouselItem[] = [
  {
    id: "bc1",
    src: bandejaWoodCustom,
    alt: "Bandeja de madera con monograma grabado, diseño de referencia de Sierra Designs",
    title: "Bandeja con monograma",
    description: "Diseño de referencia: nombre o iniciales grabados en madera, con asas."
  },
  {
    id: "bc2",
    src: carvedSignManCave,
    alt: "Relieve tallado en madera con CNC, estilo vintage",
    title: "Relieve vintage tallado",
    description: "Ejemplo del tipo de tallado en relieve que podemos hacer sobre una tabla."
  },
  {
    id: "bc3",
    src: cncRouterCuttingPineWood,
    alt: "Fresa CNC tallando madera en el taller de Sierra Designs en Riobamba",
    title: "Así tallamos",
    description: "La fresa CNC cortando madera en nuestro taller de Riobamba."
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
    details: "Nuestra fresadora CNC talla los contornos con precisión. Luego lijamos a mano y aplicamos aceites importados y cera de naranja."
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
    alt: "Casa para mascota de madera con nombre grabado, línea Domo",
    link: "https://wa.me/593960053637?text=Hola!%20Me%20interesa%20la%20casa%20para%20mascotas%20personalizada"
  },
  celosias: {
    title: "Celosías decorativas",
    description: "Paneles divisores de ambiente tallados en MDF o madera sólida con patrones geométricos, árabes o minimalistas a la medida de tu espacio.",
    image: celosiaMadera,
    alt: "Celosía decorativa de madera tallada con CNC",
    link: "https://wa.me/593960053637?text=Hola!%20Quiero%20cotizar%20celosias%20de%20madera%20personalizadas"
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
    description: "Te enviamos un render 3D de tu pieza. No encendemos la máquina CNC hasta que lo apruebes."
  },
  {
    id: "p3",
    step: "03",
    title: "Tallado CNC y acabado a mano",
    description: "Tallamos tu pieza con fresadora CNC, la terminamos a mano con aceites importados y cera de naranja."
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
