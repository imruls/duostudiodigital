<div align="center">

<img src="./src/assets/images/isotipo.png" alt="Dúo Studio Digital — Isotipo" width="120" />

# Dúo Studio Digital

**Sitio web oficial de Dúo Studio Digital** — agencia de marketing digital y branding.
Una landing single-page construida con Astro 5, optimizada para performance, accesibilidad y SEO.

🌐 **[duostudiodigital.com.ar](https://duostudiodigital.com.ar)**

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![pnpm](https://img.shields.io/badge/pnpm-11.1.1-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node](https://img.shields.io/badge/Node-%E2%89%A520.10-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)

</div>

---

<div align="center">
  <img src="./public/og-image.png" alt="Preview del sitio Dúo Studio Digital" width="720" />
</div>

---

## Tabla de contenidos

- [Sobre el proyecto](#sobre-el-proyecto)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Sistema de diseño](#sistema-de-diseño)
- [Secciones de la web](#secciones-de-la-web)
- [Empezando](#empezando)
- [Scripts disponibles](#scripts-disponibles)
- [Editar contenido](#editar-contenido)
- [Configuración y seguridad](#configuración-y-seguridad)
- [Deployment](#deployment)
- [Performance & SEO](#performance--seo)
- [Contacto](#contacto)

---

## Sobre el proyecto

**Dúo Studio Digital** es una agencia argentina especializada en estrategia de marca, contenido y crecimiento digital. Este repositorio contiene el código fuente de su sitio web institucional.

El sitio está diseñado como una **landing single-page** que comunica los servicios individuales (branding, estrategia, diseño web y contenido para redes), un ebook descargable y recursos gratuitos.

**Características principales:**

- 🎨 Diseño 100% custom con sistema de tokens (colores, tipografías, espaciados, radios y motion).
- ⚡ Astro 5 con generación estática (SSG) e imágenes optimizadas con `sharp`.
- ♿ Accesibilidad nativa: roles ARIA, navegación por teclado, focus management.
- 📱 Responsive de mobile-first con scroll-snap horizontal en cards.
- 🔍 SEO + sitemap + Open Graph + JSON-LD (generado dinámicamente desde `dataSite.ts`) listos.
- 📊 Vercel Web Analytics (vía adapter) + Speed Insights (componente) integrados.
- 🔐 Supply chain endurecido: pnpm con hash pinning y allowlist de scripts.
- 🤖 `AGENTS.md` con convenciones del proyecto para agentes de IA (Cursor, etc.).

---

## Stack tecnológico

| Herramienta                                                                                                     | Versión  | Rol                                  |
| --------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------ |
| [Astro](https://astro.build)                                                                                    | `^5.x`   | Framework SSG/SSR                    |
| [TypeScript](https://www.typescriptlang.org)                                                                    | `^5.9`   | Tipado estático                      |
| [pnpm](https://pnpm.io)                                                                                         | `11.1.1` | Package manager (pinned con SHA-512) |
| [Node.js](https://nodejs.org)                                                                                   | `≥20.10` | Runtime                              |
| [Vercel](https://vercel.com) (`@astrojs/vercel`)                                                                | `^9.0`   | Hosting + adapter                    |
| [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)                            | `^3.7`   | Generación de `sitemap.xml`          |
| [`@astrojs/check`](https://docs.astro.build/en/guides/typescript/)                                              | `^0.9`   | Type checking de `.astro`            |
| [`sharp`](https://sharp.pixelplumbing.com)                                                                      | `^0.34`  | Optimización nativa de imágenes      |
| [`@fontsource/poppins`](https://fontsource.org/fonts/poppins)                                                   | `^5.2`   | Tipografía body (self-hosted)        |
| [`@fontsource/pacifico`](https://fontsource.org/fonts/pacifico)                                                 | `^5.2`   | Tipografía display (self-hosted)     |
| [`@vercel/speed-insights`](https://vercel.com/docs/speed-insights)                                              | `^1.3`   | Core Web Vitals reales               |
| [ESLint](https://eslint.org) + [`eslint-plugin-astro`](https://ota-meshi.github.io/eslint-plugin-astro/)        | `^9`     | Lint de `.ts`/`.astro`               |
| [Prettier](https://prettier.io) + [`prettier-plugin-astro`](https://github.com/withastro/prettier-plugin-astro) | `^3`     | Formato consistente                  |

> **Nota:** `@vercel/analytics` no es una dependencia directa — el Web Analytics de Vercel
> ya se inyecta automáticamente vía `webAnalytics: { enabled: true }` en `astro.config.mjs`
> (ver [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/)).
> Speed Insights sí requiere el componente `<SpeedInsights />`, agregado en `Layout.astro`.

---

## Estructura del proyecto

```
astro-duo/
├── public/                      # Assets estáticos (servidos tal cual)
│   ├── favicon.ico / favicon-192.png / favicon-512.png
│   ├── og-image.png             # Open Graph / preview en redes
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── icons/               # 24 íconos SVG del tablero "Iconos" de Figma
│   │   ├── stickers/            # 7 stickers decorativos (SVG con sombra incluida)
│   │   └── images/              # Imágenes optimizadas por sharp en build
│   │       ├── logo-duo-studio-digital.png
│   │       ├── isotipo.png / isotipo-d-cursor.png
│   │       ├── foto-cami-y-mica.jpg
│   │       └── sello-duo-studio-digital.png
│   │
│   ├── components/
│   │   ├── sections/            # Secciones full-width de la home (orden de la página)
│   │   │   ├── Navbar.astro     # + menú mobile (<dialog>)
│   │   │   ├── Hero.astro
│   │   │   ├── Servicios.astro
│   │   │   ├── Auditoria.astro
│   │   │   ├── Resenas.astro
│   │   │   ├── Nosotras.astro
│   │   │   ├── Tienda.astro
│   │   │   ├── Contacto.astro
│   │   │   └── Footer.astro
│   │   └── ui/                  # Componentes del tablero "Componentes" de Figma
│   │       ├── Button, IconButton, Tag, BadgeSection, ListItem, Stars
│   │       ├── ReviewCard, ContactCard, Sticker, Icon
│   │       ├── Marquee, MarqueeDivider, CheckerDivider, GridBackground
│   │       ├── NavLink, MenuButton, MobileMenuLink, CarouselDot
│   │       ├── TextLink, SocialButton, SkipLink
│   │       └── BotonFlotante.astro  # WhatsApp fijo (pedido del cliente)
│   │
│   ├── data/
│   │   └── dataSite.ts          # ⚙️ Single source of truth de contenido
│   │
│   ├── layouts/
│   │   └── Layout.astro         # Layout base (head, fonts, JSON-LD, SkipLink)
│   │
│   ├── pages/
│   │   └── index.astro          # Home — compone secciones y divisores
│   │
│   ├── scripts/
│   │   ├── carousel.ts          # Carruseles: scroll-snap, puntos, flechas, aria-live
│   │   └── ariaDisabled.ts      # Bloquea la activación de controles aria-disabled
│   │
│   └── styles/
│       └── global.css           # Tokens Dúo + reset + grilla + tipografía
│
├── scripts/
│   └── check-content-drift.mjs  # Verifica que no haya datos de contacto hardcodeados
│
├── CLAUDE.md / AGENTS.md        # Convenciones del proyecto para agentes de IA
├── PLAN-REDISENO.md             # Plan de implementación del rediseño 2026
└── astro.config.mjs, tsconfig.json, eslint.config.js, .prettierrc.json, ...
```

### Path aliases

Configurados en `tsconfig.json` para evitar imports relativos largos:

```ts
import { servicios } from "@data/dataSite";
import Layout from "@layouts/Layout.astro";
import Hero from "@sections/Hero.astro";
import Button from "@ui/Button.astro";
import isotipo from "@images/isotipo.png";
import { initCarrusel } from "@scripts/carousel";
```

---

## Sistema de diseño

El diseño sale del archivo de Figma "Duo" (página "Rediseño Landing"), que es la
fuente de verdad visual. Todos los tokens viven en
[`src/styles/global.css`](./src/styles/global.css) como CSS custom properties con
el nombre de Code Syntax de cada variable de Figma (`--duo-*`).

### 🎨 Color

- **Primitivos** (`Dúo / Primitives`): escalas `--duo-color-verde-*`, `--duo-color-rosa-*`,
  `--duo-color-crema-*` y `--duo-color-blanco`. Colores de marca: verde `#828F59`,
  rosa `#F8D0D8`, crema `#EFEDDC`.
- **Semánticos** (`Dúo / Color`): `--duo-bg-*`, `--duo-text-*`, `--duo-border-*`,
  `--duo-action-*` (con variantes `-hover` y `disabled`) y `--duo-card-*`.
- Los componentes usan solo tokens semánticos: nada de hex, rgba ni sombras a mano.

### ✍️ Tipografía

- **Poppins** para texto, UI y títulos (700) y **Pacifico** solo para la palabra
  destacada de los títulos. Self-hosted vía `@fontsource` (sin requests a Google
  Fonts); las fuentes del primer pantallazo se precargan en `Layout.astro`.
- Tamaños `--duo-fs-*` (`Dúo / Typography`); los títulos cambian por breakpoint
  según los estilos `Dúo/Tablet/...` y `Dúo/Mobile/...`.

### 📐 Espaciado, grilla y sombras

- Espaciado `--duo-space-1` a `--duo-space-10` (4 a 96px) y radios `--duo-radius-*`.
- Grilla: 12 columnas / 1200px en desktop (≥1024), 8 en tablet (≥768) y 4 en mobile.
  Utilidades `.container`, `.section` (padding 96/80/64) y `.grid` con `.span-*`.
- Sombras duras de los estilos `Dúo/Shadow/*` (`--duo-shadow-card`, `-cta`, `-hover`…).
- Estados según la ficha "Convención de estados": `:hover`, `:active`,
  `:focus-visible` (anillo de 4px), `[aria-disabled]`, `[aria-current]`, `[aria-expanded]`.

---

## Secciones de la web

| #   | Sección        | Componente            | Función                                                                 |
| --- | -------------- | --------------------- | ----------------------------------------------------------------------- |
| 1   | Navbar         | `Navbar.astro`        | Sticky con estado "con scroll", scroll-spy y menú mobile como diálogo   |
| 2   | Hero           | `Hero.astro`          | Propuesta de valor, CTAs y prueba social                                |
| 3   | Servicios      | `Servicios.astro`     | 4 servicios con lo que incluyen (carrusel en mobile) y link a Auditoría |
| 4   | Auditoría      | `Auditoria.astro`     | Oferta de entrada: precio, qué incluye y cómo funciona                  |
| 5   | Reseñas        | `Resenas.astro`       | Carrusel de reseñas de Google con "Leer más"                            |
| 6   | Nosotras       | `Nosotras.astro`      | Quiénes somos y valores                                                 |
| 7   | Tienda         | `Tienda.astro`        | Producto destacado (Dúo System Client) + eshop                          |
| 8   | Contacto       | `Contacto.astro`      | Canales de contacto (WhatsApp destacado)                                |
| 9   | Footer         | `Footer.astro`        | Navegación, redes y "Volver arriba"                                     |
| ➕  | Botón flotante | `BotonFlotante.astro` | WhatsApp siempre accesible; se oculta cuando el footer está visible     |

Entre secciones van divisores decorativos (`MarqueeDivider` y `CheckerDivider`) en
el orden del frame desktop de Figma.

---

## Empezando

### Prerrequisitos

- **Node.js** ≥ `20.10.0` ([nvm recomendado](https://github.com/nvm-sh/nvm))
- **pnpm** ≥ `11.1.1` — se autoinstala desde el `packageManager` field si tenés [Corepack](https://nodejs.org/api/corepack.html) habilitado:

  ```bash
  corepack enable
  ```

### Instalación

```bash
git clone https://github.com/<tu-usuario>/astro-duo.git
cd astro-duo
pnpm install
```

> El primer install ejecutará los lifecycle scripts permitidos (`sharp`, `esbuild`) para compilar binarios nativos. Cualquier otro script de instalación de dependencias transitivas queda bloqueado por seguridad.

### Levantar servidor de desarrollo

```bash
pnpm dev
```

Abre `http://localhost:4321` con hot reload.

### Build de producción

```bash
pnpm build
```

Genera `dist/` y `.vercel/output/` con todo optimizado: HTML estático, imágenes en WebP responsive, sitemap, robots.txt.

### Preview del build

```bash
pnpm preview
```

---

## Scripts disponibles

| Script          | Comando                                | Descripción                                                                                 |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| `dev`           | `astro dev`                            | Servidor de desarrollo con HMR                                                              |
| `build`         | `astro build`                          | Build de producción                                                                         |
| `preview`       | `astro preview`                        | Sirve el build localmente                                                                   |
| `check`         | `astro check`                          | Type check de archivos `.astro` y `.ts`                                                     |
| `lint`          | `eslint .`                             | Lint de `.ts`/`.astro`                                                                      |
| `format`        | `prettier --write .`                   | Formatea todo el proyecto                                                                   |
| `format:check`  | `prettier --check .`                   | Verifica formato sin escribir (útil en CI)                                                  |
| `check:content` | `node scripts/check-content-drift.mjs` | Falla si hay datos de contacto (WhatsApp, email, redes) hardcodeados fuera de `dataSite.ts` |

---

## Editar contenido

**Toda la copy del sitio vive en [`src/data/dataSite.ts`](./src/data/dataSite.ts)**. Es el único archivo que necesitás tocar para actualizar:

- `whatsappNumber` / `whatsappUrl` / `getWhatsappLink(mensaje?)` — número y helpers de contacto. No hardcodear `"https://wa.me/..."` en componentes.
- `contactEmail` / `contactEmailUrl` — email de contacto. No hardcodear `"mailto:..."` en componentes.
- `instagramUrl` / `tiktokUrl` — URLs de redes sociales, reusadas en `socialLinks`, `contactChannels` y el JSON-LD de `Layout.astro`.
- `navLinks` / `contactoLink` — items del navbar, menú mobile y footer
- `hero`, `serviciosSeccion`, `auditoriaRedes`, `resenasSeccion`, `nosotrasSeccion`,
  `tiendaSeccion`, `contactoSeccion`, `footerSeccion` — textos de cada sección
- `servicios` — cards de servicios (título, descripción y listado de items)
- `clientReviews` — reseñas de Google (el orden es el del carrusel)
- `companyDescription` y `values` — sección Nosotras
- `novedadDuoSystemClient`, `shopHref`, `shopFeatures` — sección Tienda
- `contactChannels`, `ubicacion`, `socialLinks` — contacto y redes
- Textos de UI compartidos: `whatsappCta`, `menuLabels`, `reviewLabels`,
  `carouselLabels`, `externalLinkHint`, `marqueeItems`
- Algunos textos tienen versión `largo` / `corto` (`TextoAdaptable`): la corta se
  usa en tablet y mobile, como en Figma.
- **A confirmar con el estudio:** `googleRatingResumen`, `resenasSeccion.puntaje`
  y `fundadorasLabel`.

### Añadir un nuevo servicio

```ts
// src/data/dataSite.ts
export const servicios: Servicio[] = [
  // ...
  {
    title: "Mi nuevo servicio",
    description: "Descripción breve del servicio.",
    items: ["Item 1", "Item 2", "Item 3"],
  },
];
```

Cada card renderiza automáticamente un CTA **"Más info"** que abre WhatsApp con un mensaje preestablecido basado en el `title` del servicio. En desktop las cards se muestran todas en un grid; en mobile forman un carrusel horizontal con scroll-snap y dots de navegación.

### Editar la Auditoría de Redes Sociales

```ts
// src/data/dataSite.ts
export const auditoriaRedes: AuditoriaRedes = {
  title: "Auditoría de Redes Sociales",
  price: "$80.000 ARS",
  priceNote: "Pago único",
  includes: ["..."], // checklist de "¿Qué incluye?"
  steps: ["..."], // pasos numerados de "¿Cómo funciona?"
  targetAudience: "...", // "¿Para quién es?"
  deliveryTime: "48 horas posteriores a la reunión",
  ctaLabel: "Quiero mi Auditoría",
  finalCta: "...", // copy de cierre antes del botón
};
```

Se renderiza como una subsección destacada al final de `Servicios.astro` (fuera del carrusel/grid), con checklist, pasos numerados y un único CTA a WhatsApp generado con `getWhatsappLink(...)`.

### Añadir una imagen optimizada

1. Coloca el archivo en `src/assets/images/`.
2. Importalo y usá el componente `<Image>` de Astro:

   ```astro
   ---
   import { Image } from "astro:assets";
   import miImagen from "@images/mi-imagen.png";
   ---

   <Image
     src={miImagen}
     alt="..."
     widths={[400, 800]}
     sizes="100vw"
     format="webp"
   />
   ```

`sharp` se encarga de generar variantes WebP responsive en build.

---

## Configuración y seguridad

Este proyecto aplica varias medidas de **supply chain security** para prevenir ataques vía dependencias maliciosas.

### `package.json`

```json
{
  "packageManager": "pnpm@11.1.1+sha512.d1fdf5f7…",
  "engines": {
    "node": ">=20.10.0",
    "pnpm": ">=11.1.1"
  }
}
```

El **hash SHA-512** del binario de pnpm está pineado: Corepack rechaza cualquier ejecutable que no coincida exactamente, mitigando la sustitución del package manager.

### `pnpm-workspace.yaml`

```yaml
allowBuilds:
  esbuild: true
  sharp: true
```

Solo estos paquetes pueden ejecutar `preinstall`/`install`/`postinstall`. Cualquier otra dependencia (incluso transitiva) tiene sus scripts **bloqueados por defecto** → neutraliza el principal vector de ataques de supply chain (postinstall malicioso).

### `.npmrc` (endurecido)

| Setting                           | Valor  | Propósito                                         |
| --------------------------------- | ------ | ------------------------------------------------- |
| `engine-strict`                   | `true` | Rechaza Node/pnpm fuera de rango                  |
| `frozen-lockfile`                 | `true` | Falla si el lockfile está desincronizado          |
| `verify-store-integrity`          | `true` | Verifica integridad de tarballs vs lockfile       |
| `strict-ssl`                      | `true` | Solo HTTPS al registry                            |
| `manage-package-manager-versions` | `true` | pnpm autogestiona su versión vía `packageManager` |
| `auto-install-peers`              | `true` | Instala peer deps automáticamente                 |

### Auditoría rápida

```bash
pnpm audit                # Vulnerabilidades conocidas
pnpm outdated             # Versiones desactualizadas
pnpm licenses list        # Licencias de todas las deps
```

---

## Deployment

El proyecto está configurado para **Vercel** vía [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/).

### Deploy automático

Cualquier push a la rama por defecto despliega automáticamente. Vercel detecta `pnpm` por la presencia de `pnpm-lock.yaml` y respeta el `packageManager` field.

### Deploy manual

```bash
pnpm dlx vercel --prod
```

### Variables de entorno

No requiere variables sensibles para el build (todo el contenido es estático). Si añadís integraciones (formularios, CMS, etc.) usá `.env` (ya está en `.gitignore`).

---

## Performance & SEO

| Característica        | Implementación                                                               |
| --------------------- | ---------------------------------------------------------------------------- |
| **Imágenes**          | Optimización automática vía `sharp` → WebP responsive con `widths` y `sizes` |
| **Fonts**             | Self-hosted vía Fontsource → cero requests a Google Fonts                    |
| **Sitemap**           | Generado automáticamente por `@astrojs/sitemap`                              |
| **Robots**            | `public/robots.txt` con referencia al sitemap                                |
| **Open Graph**        | `public/og-image.png` (1200×630)                                             |
| **JSON-LD**           | Structured data inyectado en `Layout.astro`                                  |
| **Lazy loading**      | Imágenes below-the-fold con `loading="lazy"`                                 |
| **Preload critical**  | Hero e isotipo con `loading="eager"`                                         |
| **Reveal animations** | IntersectionObserver con `prefers-reduced-motion` respetado                  |
| **Web Analytics**     | Vercel Web Analytics (adapter) + Speed Insights (componente, CWV reales)     |

---

## Contacto

<div align="center">

<img src="./src/assets/images/isotipo.png" alt="Dúo Studio Digital" width="80" />

**Dúo Studio Digital**
Agencia de Marketing Digital

[🌐 Web](https://duostudiodigital.com.ar) ·
[📸 Instagram](https://www.instagram.com/duostudio.digital/) ·
[🎵 TikTok](https://www.tiktok.com/@duo.studio.digital) ·
[💬 WhatsApp](https://wa.me/5491173636081) ·
[✉️ Email](mailto:contacto@duostudiodigital.com)

</div>
