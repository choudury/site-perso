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
    lab: 'Labo',
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
    comingSoonText: 'Le détail de ce projet arrive : le contexte, ce que j’ai fait et le résultat.',
    next: 'Projet suivant',
  },
  skills: {
    title: 'Ma boîte à outils',
    tools: 'Outils',
    showAll: (group: string) => `Afficher tous les outils : ${group}`,
  },
  presentation: {
    title: 'Derrière l’écran',
    paragraphs: [
      'Je vis et je travaille à Toulouse. Je conçois des sites, je les fais vivre, je fais venir du monde.',
      'Je passe du design au code, puis aux campagnes et aux automatisations. Ce qui relie tout ça : de la rigueur, et l’envie d’apprendre ce que je ne sais pas encore faire.',
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
  about: {
    metaTitle: 'À propos',
    title: 'Enchanté, moi c’est Dorian.',
    intro: [
      'Je vis et je travaille à Toulouse. Depuis mon DUT, je passe d’un métier du digital à l’autre : graphisme, sites web, communication, puis acquisition.',
      'Ce qui m’anime : comprendre comment les choses fonctionnent, et apprendre ce que je ne sais pas encore faire.',
    ],
    photoLabel: 'Photo en grand format',
    experience: {
      title: 'Parcours professionnel',
      current: 'Aujourd’hui',
      today: 'aujourd’hui',
    },
    education: {
      title: 'Études supérieures',
      mockup: 'Mock-up du diplôme',
    },
    culture: {
      title: 'En ce moment',
      carousel: 'Carrousel culture',
      item: 'élément',
      position: (index: number, total: number) => `${index} sur ${total}`,
      previous: 'Précédent',
      next: 'Suivant',
    },
  },
  lab: {
    metaTitle: 'Labo',
    title: 'Labo',
    intro: 'Des essais, des expérimentations, des projets en cours de route : ce que je fabrique pour apprendre.',
    open: (title: string) => `Agrandir : ${title}`,
    viewer: 'Visionneuse',
    close: 'Fermer',
    previous: 'Précédent',
    next: 'Suivant',
  },
  contact: {
    label: 'Contact',
    titleStrong: 'Un projet en tête ?',
    titleLight: 'Parlons-en.',
    text: 'Une idée, une question, une mission : écrivez-moi.',
    emailLabel: 'M’écrire à',
    responseTime: 'Réponse sous 48 h',
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
