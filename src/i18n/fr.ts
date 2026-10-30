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
    title: 'Projets',
    inProgress: 'En cours',
    currentJob: 'Mon poste actuel',
    roles: 'Rôle',
  },
  caseStudy: {
    keyFacts: 'Infos clés',
    role: 'Rôle',
    year: 'Année',
    duration: 'Durée',
    tools: 'Outils',
    website: 'Site',
    comingSoon: 'Étude de cas bientôt disponible',
    comingSoonText: 'Le détail de ce projet arrive : le contexte, ce que j’ai fait et le résultat.',
    next: 'Projet suivant',
  },
  skills: {
    title: 'Ma boîte à outils',
    tools: 'Outils',
  },
  presentation: {
    title: 'Derrière l’écran',
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
  contact: {
    title: 'Un projet, une question ? Écrivez-moi.',
    emailLabel: 'M’écrire à',
  },
  footer: {
    label: 'Pied de page',
    links: 'Liens',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    newTab: '(nouvel onglet)',
    madeIn: 'Fabriqué en France',
    legal: 'Mentions légales',
  },
  legal: {
    title: 'Mentions légales',
    pending: 'Cette page est en cours de rédaction.',
    back: 'Retour à l’accueil',
  },
  status: {
    online: 'En ligne',
    offline: 'Hors ligne',
  },
  localTime: 'Heure locale à Toulouse',
  daypart: { day: 'Jour', night: 'Nuit' },
  weather: {
    label: 'Météo à Toulouse',
    sky: {
      'clear-day': 'Ensoleillé',
      'clear-night': 'Nuit claire',
      'partly-day': 'Éclaircies',
      'partly-night': 'Éclaircies',
      cloudy: 'Nuageux',
      fog: 'Brouillard',
      drizzle: 'Bruine',
      rain: 'Pluie',
      snow: 'Neige',
      storm: 'Orage',
    },
  },
} as const;
