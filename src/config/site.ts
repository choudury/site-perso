/*
 * Configuration du site : informations de contact et réglages.
 * Seul endroit où modifier l'adresse mail ou les liens des réseaux.
 */
export const site = {
  name: 'Dorian Lala-Clement',
  city: 'Toulouse',
  timeZone: 'Europe/Paris',
  // Coordonnées de Toulouse, pour la météo (service Open-Meteo, sans clé ni cookie).
  coordinates: { latitude: 43.6045, longitude: 1.444 },

  // Adresse provisoire : à remplacer par l'adresse définitive.
  email: 'contact@dorianlc.fr',

  socials: {
    // Liens à compléter.
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },

  // Voyant « en ligne » : de 8 h à 19 h, heure de Toulouse.
  // Jours concernés, du lundi (1) au dimanche (7) : tous les jours pour l'instant, à confirmer.
  online: { from: 8, to: 19, days: [1, 2, 3, 4, 5, 6, 7] },
} as const;
