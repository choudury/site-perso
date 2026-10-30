/*
 * Textes de l'interface en français.
 * Une version anglaise reprendra la même structure dans en.ts.
 */
export const fr = {
  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    projects: 'Projets',
    about: 'À propos',
    contact: 'Contact',
    open: 'Menu',
    close: 'Fermer',
  },
  brand: {
    logoAlt: 'Logo de Dorian Lala-Clement',
  },
  hero: {
    // L'accroche est découpée pour appliquer une graisse ou une couleur à chaque partie.
    titleStrong: 'Créateur digital.',
    titleLight: 'Du design à l’',
    titleAccent: 'acquisition',
    titleEnd: '.',
    photoAlt: 'Portrait de Dorian Lala-Clement',
  },
  projects: {
    title: 'Projets sélectionnés',
    inProgress: 'En cours',
    roles: 'Rôle',
  },
  skills: {
    title: 'Ce que je fais',
    tools: 'Outils',
  },
  presentation: {
    title: 'Je m’appelle Dorian.',
    paragraphs: [
      'Je vis et je travaille à Toulouse. Je conçois des sites, je les fais vivre, je fais venir du monde.',
      'Je passe du design au code, puis aux campagnes et aux automatisations. Ce qui relie tout ça : de la rigueur, et l’envie d’apprendre ce que je ne sais pas encore faire.',
    ],
    cta: 'En savoir plus sur moi',
    collage: {
      toulouse: 'Photo de Toulouse',
      album: 'Pochette d’album',
      book: 'Couverture de livre',
      poster: 'Affiche de film',
      mountain: 'Photo de montagne',
    },
  },
  status: {
    online: 'En ligne',
    offline: 'Hors ligne',
  },
  localTime: 'Heure locale à Toulouse',
} as const;
