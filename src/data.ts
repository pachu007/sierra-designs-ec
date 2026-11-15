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

// Real photos of Sierra Designs work (optimized .webp in public/images/portfolio)
const photo = (name: string) => `/images/portfolio/${name}.webp`;

export const GUARANTEE = {
  ...copy.guarantee,
  renderImage: photo('anchor-render'),
  renderAlt: 'Render 3D de un medallón tallado con ancla y espigas, enviado al cliente para aprobar antes de cortar',
  realImage: photo('anchor'),
  realAlt: 'Medallón de madera tallado con CNC con ancla y espigas, la pieza terminada que coincide con el render 3D aprobado',
  cardImage: photo('anchor-card'),
  cardAlt: 'Medallón tallado terminado junto a la tarjeta de agradecimiento de Sierra Designs, Hecho en Ecuador',
  cta: waLink('Hola! Quiero ver un render 3D de mi diseño antes de cortar')
};

export const DISCOUNT = {
  image: photo('siete17-stack'),
  alt: 'Pila de tablas de madera sólida con el logotipo de un restobar grabado, un pedido de varias piezas para Siete17 Restobar',
  text: copy.discount.text,
  link: waLink(copy.discount.whatsappText)
};

// Clients shown in our photos (Fernando approved naming them)
export const CLIENTS = ["Siete17 Restobar", "Hostería Luis Antonio", "Dejabu Smoke Shop, Cuenca", "El Cangrejal del Yoyo"];

export const SHIPPING_NOTE = copy.shippingNote;

// "Así se hace" strip — real process photos
export const PROCESS_PHOTOS = [
  { src: photo('hosteria-router'), alt: 'Fresa CNC grabando el logotipo de una hostería en madera, en el taller de Sierra Designs', caption: 'La CNC grabando un logotipo' },
  { src: photo('terrain-side'), alt: 'Fresa CNC tallando un relieve de montaña en madera MDF', caption: 'Relieve tallado capa por capa' },
  { src: photo('bit'), alt: 'Fresa CNC haciendo cavidades en madera sólida con viruta', caption: 'Corte de precisión' },
  { src: photo('brush'), alt: 'Pincel aplicando acabado oscuro sobre madera a mano', caption: 'Acabado a mano' }
];

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
    image: photo('cangrejal-led')
  },
  {
    id: "l2",
    title: "Man caves",
    description: "Tu espacio, tu estilo. Diseños rebeldes, escudos de fútbol retro, marcas de whisky o tu propio logotipo personalizado.",
    badge: "100% Personalizado",
    image: photo('jd-cnc')
  },
  {
    id: "l3",
    title: "Marcas y negocios",
    description: "Rótulos y logotipos en PVC o madera que transmiten profesionalismo e innovación desde el primer vistazo.",
    badge: "Alta Precisión",
    image: photo('dejabu')
  }
];

export const LETREROS_CAROUSEL: CarouselItem[] = [
  {
    id: "lc1",
    src: photo('dejabu'),
    alt: "Letrero de madera con letras en relieve para Dejabu Smoke Shop, Cuenca, hecho por Sierra Designs",
    title: "Dejabu Smoke Shop, Cuenca",
    description: "Letras en relieve sobre madera, con el logotipo del local cortado a medida."
  },
  {
    id: "lc2",
    src: photo('cangrejal-led'),
    alt: "Letrero en madera con cangrejo en relieve y luz LED para El Cangrejal del Yoyo",
    title: "El Cangrejal del Yoyo",
    description: "Relieve pintado a mano con luz LED por detrás para destacar de noche."
  },
  {
    id: "lc3",
    src: photo('hosteria'),
    alt: "Letreros de madera tallados con logotipo para Hostería Luis Antonio",
    title: "Hostería Luis Antonio",
    description: "Una serie de letreros tallados en madera con el logotipo de la hostería."
  },
  {
    id: "lc4",
    src: photo('torero'),
    alt: "Cuadro de madera tallado en relieve de un torero, hecho con CNC por Sierra Designs",
    title: "Relieve artístico",
    description: "Tallado en relieve sobre madera sólida con acabado brillante."
  },
  {
    id: "lc5",
    src: photo('jd-harley'),
    alt: "Letrero de madera con forma de tapa de botella colgado en una pared, hecho por Sierra Designs",
    title: "Para tu bar en casa",
    description: "Pieza de bar en forma de tapa. Los diseños con marcas se hacen bajo encargo privado."
  },
  {
    id: "lc6",
    src: photo('harley'),
    alt: "Letrero de madera con diseño vintage de motociclismo mientras se pinta en el taller de Sierra Designs",
    title: "Diseño vintage en proceso",
    description: "El grabado terminado y pintado a mano, listo para colgar."
  }
];

const PRODUCT_IMAGES = [photo('siete17-board-card'), photo('siete17-tray-card'), photo('jd-cap-card')];

export const BANDEJAS_CARDS: ProductCard[] = copy.products.map((p, i) => ({
  id: `b${i + 1}`,
  title: p.title,
  description: p.description,
  badge: p.badge,
  price: p.price,
  image: PRODUCT_IMAGES[i],
  whatsapp: waLink(p.whatsappText)
}));

export const BANDEJAS_CAROUSEL: CarouselItem[] = [
  {
    id: "bc1",
    src: photo('siete17-stack'),
    alt: "Pila de tablas de madera sólida con el logotipo de Siete17 Restobar grabado, hechas en el taller de Sierra Designs",
    title: "Pedido para Siete17 Restobar",
    description: "Tablas de madera sólida grabadas para Siete17 Restobar. Desde 5 piezas hay precio especial."
  },
  {
    id: "bc2",
    src: photo('siete17-board'),
    alt: "Tabla de madera sólida con mango y el logotipo de Siete17 Restobar grabado, lista para entregar sobre papel de seda",
    title: "Tabla con mango",
    description: "Madera sólida con el logotipo grabado y acabado con aceites importados."
  },
  {
    id: "bc3",
    src: photo('siete17-tray-a'),
    alt: "Bandeja de madera sólida con asas de madera y logotipo grabado en el centro",
    title: "Bandeja con asas",
    description: "Bandeja de madera con asas y grabado en el centro, para servir en mesa."
  },
  {
    id: "bc4",
    src: photo('siete17-logo'),
    alt: "Detalle del grabado CNC de un logotipo sobre la veta de la madera",
    title: "El grabado de cerca",
    description: "Letras nítidas grabadas sobre la veta, con el acabado oscuro que resalta el diseño."
  },
  {
    id: "bc5",
    src: photo('cangrejal-board'),
    alt: "Tabla de madera ovalada con canal y relieve pintado, hecha por Sierra Designs en Riobamba",
    title: "Tabla ovalada con relieve",
    description: "Tabla de madera con canal y diseño en relieve pintado a mano."
  },
  {
    id: "bc6",
    src: photo('anchor-card'),
    alt: "Pieza tallada terminada junto a la tarjeta de agradecimiento de Sierra Designs",
    title: "Pieza terminada",
    description: "Tallada con CNC, acabada a mano y entregada con la tarjeta del taller."
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
    description: "Nos envías tu idea, logotipo o frase por WhatsApp. Te damos el precio y el costo de envío a tu ciudad antes de que pagues."
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
