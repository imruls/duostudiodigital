/**
 * Carrusel con scroll-snap (ficha "Convención de estados" + CLAUDE.md):
 * sin autoplay, indicador "x de y" en una región aria-live="polite",
 * puntos (CarouselDot) con aria-current y flechas opcionales que se
 * deshabilitan (aria-disabled) en la primera/última página.
 *
 * Marcado esperado dentro de `root`:
 *   [data-carrusel-pista]      contenedor que scrollea (hijos = ítems)
 *   [data-carrusel-punto]      botones de página (opcional)
 *   [data-carrusel-anterior] / [data-carrusel-siguiente] (opcional)
 *   [data-carrusel-estado]     región aria-live con data-plantilla="{a} de {t}"
 * Si la pista no scrollea (desktop en grilla) no hace nada visible.
 */
export function initCarrusel(root: HTMLElement): void {
  const pista = root.querySelector<HTMLElement>("[data-carrusel-pista]");
  if (!pista) return;
  const items = Array.from(pista.children) as HTMLElement[];
  const puntos = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-carrusel-punto]"),
  );
  const anterior = root.querySelector<HTMLElement>("[data-carrusel-anterior]");
  const siguiente = root.querySelector<HTMLElement>(
    "[data-carrusel-siguiente]",
  );
  const estado = root.querySelector<HTMLElement>("[data-carrusel-estado]");
  let paginaActual = -1;

  // Ítems visibles por página (1 en mobile, 2 o 3 en reseñas).
  const porPagina = () => {
    const primero = items[0];
    if (!primero) return 1;
    const gap = parseFloat(getComputedStyle(pista).columnGap) || 0;
    return Math.max(
      1,
      Math.round((pista.clientWidth + gap) / (primero.offsetWidth + gap)),
    );
  };

  const totalPaginas = () => Math.ceil(items.length / porPagina());

  const paginaVisible = () => {
    const pp = porPagina();
    const max = pista.scrollWidth - pista.clientWidth;
    if (max <= 1) return 0;
    if (pista.scrollLeft >= max - 2) return totalPaginas() - 1;
    const base = items[0]?.offsetLeft ?? 0;
    let indice = 0;
    let menor = Infinity;
    items.forEach((item, i) => {
      const d = Math.abs(item.offsetLeft - base - pista.scrollLeft);
      if (d < menor) {
        menor = d;
        indice = i;
      }
    });
    return Math.floor(indice / pp);
  };

  const irA = (pagina: number) => {
    const destino = items[pagina * porPagina()];
    const base = items[0]?.offsetLeft ?? 0;
    if (destino) {
      pista.scrollTo({ left: destino.offsetLeft - base, behavior: "smooth" });
    }
  };

  const actualizar = () => {
    const total = totalPaginas();
    const pagina = Math.min(paginaVisible(), total - 1);
    puntos.forEach((p, i) => {
      p.hidden = i >= total;
      if (i === pagina) p.setAttribute("aria-current", "true");
      else p.removeAttribute("aria-current");
    });
    anterior?.setAttribute("aria-disabled", String(pagina <= 0));
    siguiente?.setAttribute("aria-disabled", String(pagina >= total - 1));
    if (estado && pagina !== paginaActual) {
      const plantilla = estado.dataset.plantilla ?? "{a} / {t}";
      estado.textContent = plantilla
        .replace("{a}", String(pagina + 1))
        .replace("{t}", String(total));
    }
    paginaActual = pagina;
  };

  puntos.forEach((p, i) => p.addEventListener("click", () => irA(i)));
  anterior?.addEventListener("click", () => {
    if (anterior.getAttribute("aria-disabled") !== "true") {
      irA(paginaVisible() - 1);
    }
  });
  siguiente?.addEventListener("click", () => {
    if (siguiente.getAttribute("aria-disabled") !== "true") {
      irA(paginaVisible() + 1);
    }
  });

  let pendiente = false;
  pista.addEventListener(
    "scroll",
    () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        pendiente = false;
        actualizar();
      });
    },
    { passive: true },
  );
  new ResizeObserver(actualizar).observe(pista);
  actualizar();
}
