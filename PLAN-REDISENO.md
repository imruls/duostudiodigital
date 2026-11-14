# Plan de implementación del rediseño - prompts para Claude Code

Copiá cada prompt en Claude Code, en orden. Esperá a que termine, revisá el resultado en el navegador y recién ahí pasá al siguiente.

Archivo de Figma: https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo

## Paso 0 - Preparación

```
Creá la rama rediseno-2026. Leé CLAUDE.md y AGENTS.md. Después leé con el MCP de Figma la página "Rediseño Landing" del archivo https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo y las fichas "Sistema de grillas", "Convención de estados" y "Resumen del rediseño". No escribas código todavía: devolveme un resumen de lo que entendiste y la lista de archivos que vas a crear o modificar.
```

## Paso 1 - Tokens

```
Leé las variables de Figma de las colecciones "Dúo / Primitives", "Dúo / Color", "Dúo / Dimensions" y "Dúo / Typography", los estilos de texto "Dúo/..." y los estilos de efecto "Dúo/Shadow/...". Reescribí los :root de src/styles/global.css con esos tokens, usando el nombre de Code Syntax de cada variable. Reemplazá los colores viejos y actualizá los usos en todo el proyecto. Agregá las clases de tipografía (.section-title con su span en Pacifico, .badge-section, etc.) según los estilos de texto. Mostrame el diff antes de seguir.
```

## Paso 2 - Grilla y layout base

```
Implementá el sistema de grillas de la ficha "Sistema de grillas": .container y una utilidad de grilla para desktop (12 col), tablet (8 col, desde 768px) y mobile (4 col). Breakpoints: 768px y 1024px. Aplicá los paddings de sección (96/80/64). Agregá el link "Saltar al contenido" (componente "Saltar al contenido") y el id="main" en el <main>.
```

## Paso 3 - Componentes

Links a los componentes:
- Botón: https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=17-118
- Card contacto: https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=51-2341
- Card reseña: https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=51-2400
- Link nav: https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=52-2351
- Tablero completo de componentes: https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=17-3

```
Implementá los componentes del tablero "Componentes" (node 17:3) en src/components/ui/: Button (4 estilos, todos los estados), IconButton, Tag, BadgeSection, ListItem, Stars, ReviewCard (Completa/Recortada/Expandida con "Leer más"), ContactCard, Sticker (exportá los 7 stickers como SVG a src/assets/stickers/), Marquee, CheckerDivider, GridBackground, NavLink, MenuButton, MobileMenuLink, CarouselDot, TextLink, SocialButton y SkipLink. El botón flotante de WhatsApp NO se crea de cero ni se borra (es pedido del cliente): se mantiene src/components/ui/BotonFlotante.astro y se reestiliza con el componente "Boton flotante WhatsApp" de Figma y sus estados. Cada estado de Figma tiene que mapear a su pseudo-clase o atributo según la ficha "Convención de estados". Hacé una página temporal src/pages/_componentes.astro que muestre todos los componentes con sus estados, para revisarlos.
```

## Paso 4 - Secciones (una por prompt)

Usá este prompt modelo y cambiá la sección y los links:

```
Implementá la sección <SECCIÓN> en src/components/sections/<Archivo>.astro usando los componentes del paso 3 y los tokens. Desktop: <LINK DESKTOP>. Tablet: <LINK TABLET>. Mobile: <LINK MOBILE>. Leé también la nota de cumplimiento de esa sección en la misma página. Todo el texto va en dataSite.ts. Cuando termines, levantá pnpm dev, sacá screenshots a 1440, 768 y 390 px y comparalos con los nodos de Figma; corregí las diferencias y mostrame las capturas finales.
```

| Orden | Sección | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| 1 | Navbar (+ menú mobile) | [53:2488](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=53-2488) | [57:3677](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=57-3677) | [57:3663](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=57-3663) · menú [27:733](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=27-733) |
| 2 | Hero | [19:51](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=19-51) | [54:2455](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2455) | [24:396](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=24-396) |
| 3 | Servicios | [19:95](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=19-95) | [54:2479](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2479) | [24:433](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=24-433) |
| 4 | Auditoría | [21:160](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=21-160) | [54:2527](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2527) | [25:452](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=25-452) |
| 5 | Reseñas | [21:252](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=21-252) | [54:2576](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2576) | [25:528](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=25-528) |
| 6 | Nosotras | [22:270](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=22-270) | [54:2600](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2600) | [25:609](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=25-609) |
| 7 | Tienda (Novedades + Shop) | [22:327](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=22-327) | [54:2647](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2647) | [27:549](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=27-549) |
| 8 | Contacto | [23:333](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=23-333) | [54:2688](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2688) | [27:640](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=27-640) |
| 9 | Footer + botón flotante | [23:394](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=23-394) | [54:2699](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=54-2699) | [27:689](https://www.figma.com/design/NzGh7oc7UasKwAPXQZmzFj/Duo?node-id=27-689) |

Notas por sección:
- Navbar: implementá también el estado "Con scroll" (después de 80px) y el scroll-spy con aria-current.
- Tienda: reemplaza a Novedades.astro y Shop.astro. Actualizá index.astro y navLinks en dataSite.ts (sale "Novedades", entra "Auditoría").
- Entre secciones van los divisores (marquesina o cinta de cuadros) en el orden del frame desktop.
- Footer + botón flotante: el botón flotante es pedido del cliente y se mantiene. Se reestiliza src/components/ui/BotonFlotante.astro según Figma (pill "Escribinos" en desktop, círculo de 60px con aria-label en tablet/mobile); no se reemplaza ni se elimina.

## Paso 5 - Comportamiento

```
Leé el tablero "Estados de comportamiento" (node 58:3660) e implementá: navbar con scroll, carruseles con última página (flecha deshabilitada), "Leer más" en reseñas largas, marquesina (40px/s, pausa con hover, foco y prefers-reduced-motion) y el botón flotante existente (BotonFlotante.astro, se mantiene por pedido del cliente) que se oculta cuando el footer es visible (IntersectionObserver).
```

## Paso 6 - Control final

```
Revisión final: 1) screenshots de la página completa a 1440, 768 y 390 px comparadas con los frames de Figma (19:31, 54:2448, 24:385); 2) Lighthouse y axe para accesibilidad, y corregí todo lo que sea AA; 3) navegá toda la página solo con teclado y confirmá el foco visible y el orden; 4) pnpm build, pnpm check, pnpm lint y pnpm check:content sin errores. Borrá la página temporal _componentes.astro. Dame un resumen de lo que quedó distinto al Figma y por qué.
```
