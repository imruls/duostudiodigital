/**
 * Controles con aria-disabled="true" (ficha "Convención de estados"):
 * no se ocultan ni pierden el foco, pero no deben activarse.
 * Un único listener en fase de captura bloquea clicks y Enter/Espacio.
 */
let installed = false;

export function initAriaDisabledGuard(): void {
  if (installed) return;
  installed = true;
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      if (target?.closest('[aria-disabled="true"]')) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true,
  );
}
