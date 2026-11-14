// Tipo compartido entre Icon.astro y sus consumidores.
// Vive en un .ts separado porque exportar un type union desde el frontmatter
// de un .astro rompe el build de esbuild (aunque `astro check` lo acepta).
// Un nombre por cada SVG de src/assets/icons/ (tablero "Iconos" de Figma, 17:5).
export type IconName =
  | "arrow-right"
  | "bulb"
  | "chart"
  | "check"
  | "chevron-left"
  | "chevron-right"
  | "clock"
  | "close"
  | "external"
  | "heart"
  | "info"
  | "instagram"
  | "mail"
  | "menu"
  | "people"
  | "pin"
  | "pulse"
  | "rocket"
  | "shopping-bag"
  | "smile"
  | "sparkle"
  | "star"
  | "tiktok"
  | "whatsapp";
