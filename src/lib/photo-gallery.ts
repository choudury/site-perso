/*
 * Galerie « Derrière l'écran » : relie le sélecteur d'emojis à la grande photo.
 * Les photos défilent seules toutes les 3 secondes. Dès que le visiteur survole ou touche un emoji,
 * la photo correspondante s'affiche et le défilement automatique s'arrête.
 * Changement de photo façon carrousel : la nouvelle glisse par-dessus l'ancienne, qui part un peu
 * dans l'autre sens. Pas de défilement hors de l'écran ; changement immédiat si le visiteur
 * demande moins d'animations.
 */
import { gsap } from 'gsap';

const DELAY = 3000;

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((gallery) => {
  const slides = [...gallery.querySelectorAll<HTMLElement>('[data-slide]')];
  const picks = [...gallery.querySelectorAll<HTMLButtonElement>('[data-pick]')];
  if (slides.length < 2) return;
  let current = 0;
  let stopped = false;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  // direction : 1 = la nouvelle photo arrive par la droite, -1 = par la gauche.
  function show(index: number, direction = index > current ? 1 : -1) {
    if (index === current) return;
    const previous = slides[current];
    const next = slides[index];
    previous.removeAttribute('data-active');
    picks[current]?.setAttribute('aria-pressed', 'false');
    current = index;
    next.removeAttribute('data-leaving');
    next.setAttribute('data-active', '');
    picks[current]?.setAttribute('aria-pressed', 'true');

    gsap.killTweensOf([previous, next]);
    if (reduceMotion.matches) {
      gsap.set([previous, next], { clearProps: 'all' });
      return;
    }

    const ease = 'power3.inOut';
    previous.setAttribute('data-leaving', '');
    gsap.set(previous, { zIndex: 1 });
    gsap.to(previous, {
      xPercent: -30 * direction,
      duration: 0.9,
      ease,
      onComplete: () => {
        previous.removeAttribute('data-leaving');
        gsap.set(previous, { clearProps: 'all' });
      },
    });
    gsap.fromTo(next, { xPercent: 100 * direction, zIndex: 2 }, { xPercent: 0, duration: 0.9, ease });
  }

  picks.forEach((pick, index) => {
    const choose = () => {
      stopped = true;
      show(index);
    };
    pick.addEventListener('pointerenter', (event) => event.pointerType === 'mouse' && choose());
    pick.addEventListener('click', choose);
  });

  let visible = false;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(gallery);

  // Le défilement automatique avance toujours dans le même sens, y compris de la dernière à la première.
  setInterval(() => {
    if (stopped || !visible || document.hidden || reduceMotion.matches) return;
    show((current + 1) % slides.length, 1);
  }, DELAY);
});
