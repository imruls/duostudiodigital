// ─── WhatsApp ────────────────────────────────────────────
// Única fuente de verdad para el contacto por WhatsApp. No hardcodear el
// número ni la URL de "wa.me" en ningún otro archivo: importar desde acá.

export const whatsappNumber = "5491173636081";

export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export function getWhatsappLink(message?: string): string {
  return message
    ? `${whatsappUrl}?text=${encodeURIComponent(message)}`
    : whatsappUrl;
}

// ─── Email ───────────────────────────────────────────────
// Única fuente de verdad para el email de contacto. No hardcodear la
// dirección ni el "mailto:" en ningún otro archivo: importar desde acá.

export const contactEmail = "contacto@duostudiodigital.com";

export const contactEmailUrl = `mailto:${contactEmail}`;

// ─── Redes sociales ─────────────────────────────────────
// Única fuente de verdad para las URLs de redes. No hardcodear estas
// direcciones en ningún otro archivo: importar desde acá.

export const instagramUrl = "https://www.instagram.com/duostudio.digital/";

export const tiktokUrl = "https://www.tiktok.com/@duo.studio.digital";

// ─── Navbar ──────────────────────────────────────────────

// ---------- Accesibilidad ----------
// Texto del link "Saltar al contenido" (primer elemento enfocable).
export const skipLinkLabel = "Saltar al contenido";

// Texto oculto que acompaña a todo link externo (WCAG 3.2.5).
export const externalLinkHint = "(se abre en otra pestaña)";

// ---------- Textos de componentes UI (rediseño 2026) ----------
export const menuLabels = { abrir: "Menú", cerrar: "Cerrar" };

export const whatsappCta = {
  label: "Escribinos",
  ariaLabel: "Escribinos por WhatsApp",
  labelLargo: "Escribinos por WhatsApp",
  respuesta: "Te respondemos al toque",
  /** Landmark del botón flotante (axe: todo el contenido dentro de regiones). */
  regionLabel: "Contacto rápido",
};

export const reviewLabels = {
  tag: "Google",
  fuente: "Reseña de Google",
  leerMas: "Leer más",
  leerMenos: "Leer menos",
};

/** Texto que acompaña a las estrellas: "5 de 5" (WCAG 1.1.1 / 1.4.1). */
export function ratingLabel(rating: number, max = 5): string {
  return `${rating} de ${max}`;
}

export const carouselLabels = {
  anterior: "Reseña anterior",
  siguiente: "Siguiente reseña",
  irAPagina: (n: number) => `Ir a la página ${n}`,
  /** Indicador "x de y" (región aria-live). */
  estado: (actual: number, total: number) => `${actual} de ${total}`,
};

// Items de las marquesinas decorativas (aria-hidden).
export const marqueeItems = [
  "Branding",
  "Estrategia",
  "Diseño web",
  "Contenido para redes",
  "Auditoría de redes",
];

// Navegación (rediseño 2026): 5 links + 1 CTA (ley de Hick). "Novedades"
// deja de ser ítem: vive dentro de Tienda. El orden sigue al de la página.
export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Auditoría", href: "#auditoria" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Nosotras", href: "#nosotras" },
  { label: "Tienda", href: "#tienda" },
];

// Sexto link: solo en el menú mobile y el footer (en desktop lo cubre el CTA).
export const contactoLink = { label: "Contacto", href: "#contacto" };

// Link del logo al inicio (el logo es decorativo dentro del link).
export const logoLinkLabel = "Dúo Studio Digital, ir al inicio";
export const navAriaLabel = "Navegación principal";

// ─── Servicios ──────────────────────────────────────────

export const serviciosSeccion = {
  badge: "Servicios",
  titulo: { antes: "Potenciá tu marca con ", destacado: "servicios a medida" },
  bajada:
    "Elegí servicios individuales diseñados para llevar tu presencia digital al siguiente nivel.",
  incluye: "Incluye",
  consultar: "Consultar",
  consultarAria: (servicio: string) =>
    `Consultar por WhatsApp sobre ${servicio}`,
  mensajeWhatsapp: (servicio: string) =>
    `Hola, me interesa el servicio de ${servicio}, quiero más info`,
  /** Número de la card: "01". En mobile se suma " de 4". */
  numero: (n: number) => String(n).padStart(2, "0"),
  deTotal: (total: number) => ` de ${total}`,
  deslizar: "Deslizá para ver más",
  ayuda: {
    pregunta: "¿No sabés por dónde empezar?",
    link: "Empezá por la Auditoría de redes",
    href: "#auditoria",
  },
};

export interface Servicio {
  title: string;
  description: string;
  items: string[];
}

export const servicios: Servicio[] = [
  {
    title: "Branding",
    description:
      "Construimos una identidad visual que haga que tu marca sea coherente, profesional y memorable",
    items: [
      "Logos",
      "Tipografías",
      "Plantillas",
      "Paleta de colores",
      "Manual de marca",
      "Dirección visual",
    ],
  },
  {
    title: "Estrategia",
    description:
      "Dejamos de publicar “porque sí” y armamos contenido con intención",
    items: [
      "Banco de ideas",
      "Diagnóstico de tus redes",
      "Pilares de contenido",
      "Calendario mensual",
      "Formatos",
    ],
  },
  {
    title: "Diseño Web",
    description: "Webs que no solo se ven lindas. También convierten",
    items: [
      "Landing Pages",
      "SEO básico",
      "Optimización Mobile",
      "Tiendas Online",
      "Integraciones",
      "Diseños UX/UI",
    ],
  },
  {
    title: "Contenido para redes",
    description:
      "Creamos contenido pensado para conectar, vender y hacer crecer tu comunidad.",
    items: [
      "Carruseles",
      "Reels",
      "Diseño Canva",
      "Historias",
      "Copywriting",
      "Edición",
    ],
  },
];

// ─── Auditoría de Redes ─────────────────────────────────

/** Texto con versión corta opcional para tablet/mobile (Figma los acorta). */
export interface TextoAdaptable {
  largo: string;
  corto?: string;
}

export interface AuditoriaRedes {
  badge: string;
  titulo: { antes: string; destacado: string };
  bajada: string;
  tag: string;
  title: string;
  targetAudience: string;
  price: string;
  priceNote: string;
  /** Desktop: fila con reloj. Tablet/mobile: se une a priceNote. */
  entrega: string;
  ctaLabel: string;
  whatsappMensaje: string;
  includesLabel: string;
  includes: TextoAdaptable[];
  stepsLabel: string;
  steps: TextoAdaptable[];
}

export const auditoriaRedes: AuditoriaRedes = {
  badge: "Auditoría de redes",
  titulo: {
    antes: "¿Sentís que publicás mucho pero no obtenés ",
    destacado: "resultados?",
  },
  bajada:
    "Descubrí exactamente qué está frenando el crecimiento de tu marca y llevate un plan de acción listo para implementar.",
  tag: "Ideal para empezar",
  title: "Auditoría de Redes Sociales",
  targetAudience:
    "Ideal para emprendedores, marcas y empresas que quieren mejorar sus resultados en redes sociales antes de contratar un servicio mensual o potenciar la estrategia que ya tienen.",
  price: "$80.000 ARS",
  priceNote: "Pago único",
  entrega: "Informe en 48 h posteriores a la reunión",
  ctaLabel: "Quiero mi Auditoría",
  whatsappMensaje: "Hola, quiero reservar mi Auditoría de Redes Sociales",
  includesLabel: "Qué incluye",
  includes: [
    { largo: "Análisis completo del perfil de Instagram" },
    { largo: "Revisión de biografía, identidad visual y posicionamiento" },
    { largo: "Evaluación del contenido publicado, engagement y estrategia" },
    { largo: "Análisis de la competencia" },
    { largo: "Reunión personalizada de 30 minutos por Google Meet o Zoom" },
    {
      largo:
        "Informe en PDF con un diagnóstico completo y las 5 acciones prioritarias para mejorar la cuenta",
      corto:
        "Informe en PDF con diagnóstico completo y las 5 acciones prioritarias",
    },
  ],
  stepsLabel: "Cómo funciona",
  steps: [
    { largo: "Reservás y realizás el pago" },
    {
      largo: "Recibís un formulario previo para conocer tu negocio y objetivos",
      corto: "Recibís un formulario previo sobre tu negocio",
    },
    { largo: "Analizamos tu cuenta antes de la reunión" },
    {
      largo: "Hacemos una videollamada de 30 minutos",
      corto: "Videollamada de 30 minutos",
    },
    {
      largo:
        "En 48 horas te enviamos un informe personalizado en PDF con recomendaciones concretas",
      corto: "Informe personalizado en PDF en 48 horas",
    },
  ],
};

// ─── Novedades ───────────────────────────────────────────

export interface Novedad {
  badge: string;
  title: string;
  /** largo: desktop · corto: tablet/mobile (Figma). */
  description: TextoAdaptable;
  includesLabel: string;
  items: TextoAdaptable[];
  targetAudience: string;
  ctaLabel: string;
  ctaHref: string;
}

// Textos según Figma (Tienda, 22:327): la lista y el público se acortan
// respecto de la versión anterior del sitio.
export const novedadDuoSystemClient: Novedad = {
  badge: "Novedad",
  title: "Dúo System Client",
  description: {
    largo:
      "Un kit de 8 plantillas profesionales y 100% editables en Canva, pensado para ordenar toda la relación con tus clientes: desde el primer contacto hasta el cierre del proyecto. Sumá tu logo, colores y tipografías y empezá a usarlas sin necesitar experiencia en diseño.",
    corto:
      "Un kit de 8 plantillas profesionales y 100% editables en Canva para ordenar toda la relación con tus clientes, desde el primer contacto hasta el cierre del proyecto.",
  },
  includesLabel: "Incluye",
  items: [
    { largo: "Formulario estratégico de brief" },
    {
      largo: "Propuesta de trabajo lista para presentar",
      corto: "Propuesta de trabajo",
    },
    {
      largo: "Guía de bienvenida para nuevos clientes",
      corto: "Guía de bienvenida",
    },
    {
      largo: "Términos y condiciones del servicio",
      corto: "Términos y condiciones",
    },
    {
      largo: "Guía para planificar la reunión inicial",
      corto: "Guía para la reunión inicial",
    },
    {
      largo: "Plantilla de cotización de proyectos",
      corto: "Plantilla de cotización",
    },
    {
      largo: "Estructura de brandbook / identidad visual",
      corto: "Estructura de brandbook",
    },
    { largo: "Checklist de cierre de cliente", corto: "Checklist de cierre" },
  ],
  targetAudience:
    "Ideal para freelancers, diseñadoras, community managers, estudios, agencias, fotógrafas, videomakers y profesionales independientes que trabajan directo con clientes.",
  ctaLabel: "Ver Dúo System Client",
  ctaHref: "https://duostudioshop.com.ar/p/duo-system-client",
};

// ─── Shop ────────────────────────────────────────────────

export const shopHref = "https://duostudioshop.com.ar/";

export const tiendaSeccion = {
  badge: "Tienda",
  titulo: { antes: "Visitá nuestro ", destacado: "eshop" },
  bajada:
    "Encontrá recursos, plantillas y productos digitales pensados para ayudarte a crecer en redes sin perder tiempo empezando de cero.",
  recursosTitulo: "Recursos para crecer en redes",
  ctaLabel: "Ir a la tienda",
};

export const shopFeatures = [
  { icon: "shopping-bag", text: "Recursos y plantillas listas para usar" },
  { icon: "chart", text: "Estrategias probadas con resultados" },
  { icon: "rocket", text: "Todo lo que necesitás para crecer" },
  { icon: "info", text: "Contenido creado por nuestro equipo" },
];

// ─── Reseñas ─────────────────────────────────────────────

export interface ClientReview {
  rating: 1 | 2 | 3 | 4 | 5;
  name: string;
  text: string;
}

export const clientReviews: ClientReview[] = [
  // Orden de Figma: la primera página muestra Karina, Alejandro y Flor.
  {
    rating: 5,
    name: "Karina Fernandez",
    text: "Super recomendables las chicas de Dúo! Trabajan súper profesional, súper modernas y cancheras!! Son un 10. Llevan mi emprendimiento adelante y estoy feliz con los resultados!",
  },
  {
    rating: 5,
    name: "Alejandro Cuello",
    text: "Excelente servicio el de Duo, siempre generando herramientas para que el cliente o el producto esté donde tiene que estar, la pasión y el profesionalismo de las chicas hacen la diferencia…. No duden en sumarse a este hermoso equipo!!!",
  },
  {
    rating: 5,
    name: "Flor Ruiz",
    text: "Excelente experiencia con Dúo. Cami y Mica son unas genias, súper profesionales, creativas y siempre atentas a cada detalle. Da gusto trabajar con ellas y los resultados hablan por sí solos. Las recomiendo totalmente!",
  },
  {
    rating: 5,
    name: "Ornella Colangelo",
    text: "Exelente atención, muy innovadoras con las publicaciones y siempre responden rápido a nuestros pedidos. Son lo mas",
  },
  {
    rating: 5,
    name: "German Svariati",
    text: "Son un dúo que le ponen garra a cada proyecto! Hacen un trabajo increible!",
  },
  {
    rating: 5,
    name: "Alexo Str",
    text: "Excelente Duo. Resolvieron mi inquietud de manera rápida y eficaz logrando aumentar la cantidad de gente a la que le llegó mi trabajo como entrenador. Hoy con mas trabajo que antes, por la amabilidad de Mica y de Cami...no dudo en pedirle ayuda a DÚO STUDIO DIGITAL. Gracias chicas!",
  },
];

export const resenasSeccion = {
  badge: "Reseñas",
  titulo: { antes: "Lo que dicen nuestros ", destacado: "clientes" },
  bajada: "Historias reales de personas que ya trabajaron con nosotras.",
  // A CONFIRMAR CON EL ESTUDIO (CLAUDE.md: no inventar datos).
  puntaje: "5,0",
  puntajeDetalle: "Promedio de 6 reseñas en Google",
  carruselLabel: "Reseñas de clientes",
  carruselRol: "carrusel",
  /** Indicador desktop; en tablet/mobile se usa carouselLabels.estado. */
  pagina: (actual: number, total: number) => `Página ${actual} de ${total}`,
  pregunta: "¿Ya trabajaste con nosotras?",
  ctaGoogle: "Dejanos tu reseña en Google",
};

export const googleReviewHref =
  "https://www.google.com/maps/place/D%C3%BAo+Studio+Digital/@-37.0323467,-65.3129713,6z/data=!3m1!4b1!4m6!3m5!1s0x64ba177cf6cee76b:0xf62dadc4ff0ba53d!8m2!3d-37.1498821!4d-60.0254816!16s%2Fg%2F11ms1qqxbr?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";

// ─── Hero (rediseño 2026) ───────────────────────────────
// El hero usa una bajada más corta que companyDescription (Figma: "se acorta
// el texto del hero"); companyDescription sigue en Nosotras.

export const hero = {
  badge: "Agencia de Marketing Digital",
  titulo: {
    antes: "Impulsamos tu marca con ",
    destacado: "estrategia",
    despues: " y creatividad",
  },
  bajada:
    "Branding, estrategia, diseño web y contenido para emprendedores, marcas personales y negocios que buscan crecer de manera auténtica, ordenada y profesional.",
  ctaPrincipal: { label: "Ver servicios", href: "#servicios" },
  ctaSecundario: { label: "Conocé al equipo", href: "#nosotras" },
  fotoAlt:
    "Cami y Mica, las fundadoras de Dúo Studio Digital, sonriendo juntas en el estudio",
  respuestaRapida: "Respuesta rápida por WhatsApp",
};

// A CONFIRMAR CON EL ESTUDIO (CLAUDE.md: no inventar datos).
export const googleRatingResumen = "5,0 en Google · 6 reseñas";
export const fundadorasLabel = "Cami & Mica, fundadoras";

// ─── Nosotras ───────────────────────────────────────────
// Descripción de la empresa (Nosotras.astro).

export const companyDescription =
  "Dúo Studio es un Mini Studio de Social Media creado por dos mejores amigas, emprendedoras, CM´s y Paid Media. Trabajamos con emprendedores, marcas personales y negocios que buscan crecer de manera auténtica, ordenada y profesional.";

export const values = [
  {
    icon: "smile",
    title: "Cercanía",
    description:
      "Trabajamos codo a codo con cada cliente, como parte de su equipo.",
  },
  {
    icon: "bulb",
    title: "Creatividad",
    description: "Cada idea nace con propósito. Creamos contenido que enamora.",
  },
  {
    icon: "pulse",
    title: "Resultados",
    description:
      "Medimos todo. Cada acción está orientada a objetivos concretos.",
  },
  {
    icon: "people",
    title: "Comunidad",
    description:
      "No buscamos seguidores, construimos comunidades que perduran.",
  },
];

// ─── Nosotras (rediseño 2026) ───────────────────────────
export const nosotrasSeccion = {
  badge: "Nosotras",
  titulo: { antes: "Somos tu ", destacado: "partner creativo" },
  tarjeta: { titulo: "Mini Studio", texto: "creado por dos mejores amigas" },
  // Fila de datos (solo tablet/mobile en Figma). El 5,0 está A CONFIRMAR.
  datos: [
    { valor: resenasSeccion.puntaje, etiqueta: "En Google" },
    { valor: String(servicios.length), etiqueta: "Servicios" },
    { valor: "48 h", etiqueta: "Informe" },
  ],
  cta: "Hablemos de tu proyecto",
};

// ─── Social Links ───────────────────────────────────────

// SVG del ícono de WhatsApp compartido entre `socialLinks`, `BotonFlotante.astro`
// y `Contacto.astro`: única fuente para no desincronizar el trazo si cambia.

// Botones sociales del footer (componente "Social" de Figma): ícono,
// color de fondo por red y aria-label "X de Dúo".
export const socialLinks = [
  {
    label: "Instagram de Dúo",
    href: instagramUrl,
    external: true,
    icon: "instagram",
    fondo: "rosa",
  },
  {
    label: "TikTok de Dúo",
    href: tiktokUrl,
    external: true,
    icon: "tiktok",
    fondo: "crema",
  },
  {
    label: "WhatsApp de Dúo",
    href: whatsappUrl,
    external: true,
    icon: "whatsapp",
    fondo: "verde",
  },
  {
    label: "Email de Dúo",
    href: contactEmailUrl,
    external: false,
    icon: "mail",
    fondo: "blanco",
  },
] as const;

export const footerSeccion = {
  marca: "Dúo Studio Digital",
  tagline:
    "Tu partner creativo para impulsar tu marca en el mundo digital con estrategia y autenticidad.",
  navLabel: "Navegación",
  navAriaLabel: "Navegación del footer",
  conectemos: "Conectemos",
  copyright: (anio: number) =>
    `© ${anio} Dúo Studio Digital · Hecho con amor y mucha estrategia`,
  volverArriba: "Volver arriba",
};

// ─── Contacto ───────────────────────────────────────────

export const contactoSeccion = {
  badge: "Contacto",
  titulo: { antes: "¿Charlamos? ", destacado: "Escribinos" },
  bajada: "Elegí el canal que más te guste y hablemos sobre tu proyecto.",
};

// Ubicación del estudio (fila de datos de Contacto y footer).
export const ubicacion = "Buenos Aires, Argentina";

// `destacado`: canal recomendado, en rosa (Figma: "te respondemos al toque").
export const contactChannels = [
  {
    name: "WhatsApp",
    description: "Escribinos directo y te respondemos al toque.",
    href: whatsappUrl,
    icon: "whatsapp",
    externo: true,
    destacado: true,
  },
  {
    name: "Email",
    description: "Para consultas, propuestas o lo que necesites.",
    href: contactEmailUrl,
    icon: "mail",
    externo: false,
    destacado: false,
  },
  {
    name: "Instagram",
    description: "Seguinos y mirá nuestro día a día creativo.",
    href: instagramUrl,
    icon: "instagram",
    externo: true,
    destacado: false,
  },
  {
    name: "TikTok",
    description: "Tips, tendencias y detrás de escena.",
    href: tiktokUrl,
    icon: "tiktok",
    externo: true,
    destacado: false,
  },
] as const;
