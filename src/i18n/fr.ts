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
  preloader: {
    // « Bonjour » en occitan (Adishatz, salut gascon courant dans le Sud-Ouest), en français puis en anglais.
    hello: ['Adishatz', 'Bonjour', 'Hello'],
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
  availability: {
    // Le badge sert de titre de section.
    status: 'Disponible',
    textStrong: 'Partant pour de nouvelles missions,',
    textLight: 'en parallèle de mon poste actuel.',
    themesLabel: 'Mes sujets de prédilection',
    themes: [
      'Musique',
      'Culture',
      'Artisanat',
      'Sport',
      'Restauration',
      'Art et patrimoine',
      'Projets locaux à Toulouse et en Occitanie',
    ],
    // Ce qui viendra à l'emplacement de la vidéo ou du GIF, tant qu'il n'y en a pas.
    mediaLabel: 'Vidéo ou GIF : les sujets de prédilection en images',
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
    titleStrong: 'Analyser, comprendre.',
    titleLight: 'Puis améliorer.',
    intro: [
      'Ce qui m’anime, c’est de comprendre comment les choses fonctionnent, puis de les améliorer : l’expérience d’un utilisateur sur un site, un processus interne trop lourd, la façon dont une information circule dans une équipe.',
      'Concrètement, j’accompagne des projets sur quatre terrains : la création de sites web, le design, le marketing et la communication.',
      'Ma force, c’est ma polyvalence. J’adore apprendre : prendre en main de nouveaux outils, essayer de nouvelles technologies.',
    ],
    photoLabel: 'Photo en grand format',
    experience: {
      title: 'Parcours professionnel',
      current: 'Aujourd’hui',
      today: 'aujourd’hui',
      sticker: (company: string) => `Sticker ${company}`,
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
    intro: 'Des essais, des expérimentations, des projets en cours de route.',
    open: (title: string) => `Agrandir : ${title}`,
    viewer: 'Visionneuse',
    close: 'Fermer',
    previous: 'Précédent',
    next: 'Suivant',
  },
  contact: {
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
