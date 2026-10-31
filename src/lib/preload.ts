/*
 * Fin de l'écran de chargement, attendue par les animations d'entrée (hero)
 * pour ne pas se jouer derrière lui.
 */
let resolve: () => void;

export const preloadDone = new Promise<void>((done) => {
  resolve = done;
});

export function finishPreload() {
  resolve();
}
