/*
 * Apparition du logo en quatre temps, partagée par l'écran de chargement et le menu mobile.
 */
import { gsap } from 'gsap';

/** Fait apparaître les quatre formes du logo l'une après l'autre. */
export function logoReveal(svg: Element) {
  // Ordre des formes dans le fichier SVG : bas gauche, haut gauche, haut droite, bas droite.
  // Ordre d'apparition voulu : haut gauche, bas droite, haut droite, bas gauche.
  const [bottomLeft, topLeft, topRight, bottomRight] = svg.querySelectorAll('path');
  return gsap.fromTo(
    [topLeft, bottomRight, topRight, bottomLeft],
    { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' },
    { opacity: 1, scale: 1, duration: 0.7, ease: 'expo.out', stagger: 0.16 },
  );
}
