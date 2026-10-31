/*
 * Galerie « Derrière l'écran » : relie le sélecteur d'emojis à la grande photo.
 * Les photos défilent seules toutes les 3 secondes. Dès que le visiteur survole ou touche un emoji,
 * la photo correspondante s'affiche et le défilement automatique s'arrête.
 * Pas de défilement hors de l'écran ni si le visiteur demande moins d'animations.
 */
const DELAY = 3000;

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((gallery) => {
  const slides = [...gallery.querySelectorAll<HTMLElement>('[data-slide]')];
  const picks = [...gallery.querySelectorAll<HTMLButtonElement>('[data-pick]')];
  if (slides.length < 2) return;
  let current = 0;
  let stopped = false;

  function show(index: number) {
    if (index === current) return;
    slides[current].removeAttribute('data-active');
    picks[current]?.setAttribute('aria-pressed', 'false');
    current = index;
    slides[current].setAttribute('data-active', '');
    picks[current]?.setAttribute('aria-pressed', 'true');
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
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  setInterval(() => {
    if (stopped || !visible || document.hidden || reduceMotion.matches) return;
    show((current + 1) % slides.length);
  }, DELAY);
});
