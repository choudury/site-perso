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
    // Photos de la galerie, dans l'ordre des fichiers : légende (lue par les lecteurs d'écran)
    // et emoji du sélecteur (nom Fluent Emoji, voir https://icon-sets.iconify.design/fluent-emoji-flat/).
    photos: [
      { label: 'En montagne', emoji: 'snow-capped-mountain' },
      { label: 'Toulouse', emoji: 'cityscape' },
      { label: 'À la mer', emoji: 'water-wave' },
      { label: 'Au stade, avec le Stade Toulousain', emoji: 'rugby-football' },
    ],
    gallery: 'Photos personnelles',
    showPhoto: (label: string) => `Afficher la photo : ${label}`,
  },
  about: {
    metaTitle: 'À propos',
    // Titre en deux temps, comme l'accroche de l'accueil : une affirmation, puis la suite plus légère.
    titleStrong: 'Comprendre comment ça fonctionne.',
    titleLight: 'Puis l’améliorer.',
    intro: [
      'Je m’appelle Dorian Lala-Clement, je vis et je travaille à Toulouse. Je suis responsable marketing numérique chez SawUp, une école en ligne de production musicale, où je suis arrivé en alternance en 2021.',
      'Ce qui m’anime, c’est de comprendre comment les choses fonctionnent, puis de les améliorer : l’expérience d’un utilisateur sur un site, un processus interne trop lourd, la façon dont une information circule dans une équipe.',
      'C’est ce qui m’a fait passer du graphisme au web, puis à l’acquisition et à l’automatisation. En parallèle, je mène des missions en freelance depuis 2020 : identités visuelles, supports de communication, sites web.',
      'Et je continue d’apprendre, par curiosité autant que par méthode.',
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
    responseTime: 'Réponse sous 48 heures',
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
