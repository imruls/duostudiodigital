@AGENTS.md

# Rediseño 2026 - Reglas para Claude Code

Este proyecto se está rediseñando a partir de un archivo de Figma. El diseño de Figma es la fuente de verdad visual. Si algo del código actual contradice al Figma, gana el Figma (salvo las reglas de AGENTS.md sobre contenido y estructura, que se mantienen).

## Fuente de diseño

- Archivo Figma: https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo
- Página: "Rediseño Landing"
- Frames: Desktop 1440 (node 19:31), Tablet 768 (node 54:2448), Mobile 390 (node 24:385), Mobile menú abierto (node 27:733)
- Componentes: tablero "Componentes" (node 17:3)
- Comportamiento: tablero "Estados de comportamiento" (node 58:3660)
- Fichas de referencia en la misma página: "Sistema de grillas", "Convención de estados", "Resumen del rediseño" y las notas de cumplimiento al costado de cada sección.

Antes de implementar una sección, leé su nodo con el MCP de Figma (get_design_context) y compará con un screenshot (get_screenshot). No implementes de memoria ni a partir de la versión anterior del sitio.

## Tokens

- Usá solo los tokens de `src/styles/global.css`. Nada de hex, px de color o sombras escritas a mano en los componentes.
- Los tokens salen de las variables de Figma de las colecciones "Dúo / ...". Cada variable tiene su nombre CSS en Code Syntax (ej. `var(--duo-bg-hero)`): usá exactamente ese nombre.
- Colores de marca (manual): verde #828F59, rosa #F8D0D8, crema #EFEDDC. Reemplazan a los colores viejos (--olive, --pink-light, --cream, etc.).
- El verde de marca (bg/brand, text/brand) solo va en fondos y textos de 40px o más. Títulos en text/accent (verde/600), texto en text/primary (verde/900).
- Tipografías: Poppins (texto, UI y títulos en 700) y Pacifico (solo la palabra destacada de los títulos). Ya están en @fontsource; no agregues otras.

## Grilla y layout

- Desktop (1024px o más): contenedor de 1200px, 12 columnas, gutter 24px, margen 120px.
- Tablet (768 a 1023px): 8 columnas, gutter 24px, margen 32px.
- Mobile (menos de 768px): 4 columnas, gutter 16px, margen 20px.
- Espaciado en múltiplos de 4/8 con los tokens space/*. Secciones: 96px (desktop), 80px (tablet), 64px (mobile) arriba y abajo.
- Cards de una misma fila con la misma altura (grid + align-items: stretch) y el CTA o el autor abajo (margin-top: auto).
- No recortes sombras: ningún contenedor de cards lleva overflow: hidden, salvo los carruseles (solo en horizontal, con padding-bottom para la sombra).

## Estados (ver ficha "Convención de estados")

- Hover -> :hover · Presionado -> :active · Foco -> :focus-visible · Deshabilitado -> [aria-disabled="true"] · Activo -> [aria-current] · Abierto/Cerrado -> [aria-expanded]
- Hover: fondo un tono más oscuro (tokens *-hover) y sombra dura de 3 a 5px con translate(-2px, -2px), 150ms ease-out.
- Foco: outline de 4px por fuera (verde/900 sobre claro, rosa sobre verde). Igual en todos los componentes. Nunca outline: none sin reemplazo.
- Todas las transiciones y la marquesina se desactivan con prefers-reduced-motion: reduce.

## Accesibilidad (WCAG 2.2 AA)

- Link "Saltar al contenido" como primer elemento enfocable, apuntando a #main.
- Stickers, grilla de fondo, cintas de cuadros y marquesinas con aria-hidden="true".
- Carruseles sin autoplay, con botones con aria-label, indicador "x de y" y región aria-live="polite".
- Menú mobile como diálogo: foco atrapado, Esc cierra, el foco vuelve al botón.
- Links externos: target="_blank" rel="noopener noreferrer" y texto oculto "(se abre en otra pestaña)".
- Áreas táctiles de 44px como mínimo.

## Contenido

- Todo el texto sigue viviendo en `src/data/dataSite.ts` (regla de AGENTS.md). Los textos nuevos del rediseño (badges de sección, fila de datos, "Ideal para empezar", "Respuesta rápida por WhatsApp", etc.) se agregan ahí.
- El botón flotante de WhatsApp (`src/components/ui/BotonFlotante.astro`) es pedido del cliente: se mantiene siempre en la página. Se reestiliza según Figma, pero no se elimina ni se reemplaza por otro componente.
- No inventes datos. "5,0 en Google · 6 reseñas" y "Cami & Mica, fundadoras" se cargan como constantes en dataSite.ts para confirmar con el estudio.

## Forma de trabajo

- Una sección por vez, en el orden del plan (PLAN-REDISENO.md). No hagas toda la página de una.
- Después de cada sección: `pnpm dev`, screenshots a 1440, 768 y 390 px, comparación con el nodo de Figma y corrección de diferencias antes de seguir.
- Al terminar cada sección corré `pnpm check`, `pnpm lint` y `pnpm check:content`.
- Commits chicos, uno por sección, en la rama `rediseno-2026`.
