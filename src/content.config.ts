/*
 * Collections de contenu : chaque fichier Markdown de src/content/projets/ est un projet.
 * Ajouter un projet = ajouter un fichier. Le schéma vérifie au build que rien ne manque.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      /** Nom du projet, ex. « SawUp ». */
      name: z.string(),
      /** Titre court affiché sur la carte de l'accueil. */
      cardTitle: z.string(),
      /** Rôles de Dorian, affichés en tags. */
      roles: z.array(z.string()).min(1),
      /** Position sur l'accueil (1 = premier). */
      order: z.number(),
      /** Projet toujours en cours. */
      inProgress: z.boolean().default(false),
      /** Adresse du site, s'il existe. */
      url: z.url().optional(),
      /** Visuel de la carte. Tant qu'il manque, un emplacement neutre s'affiche. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { projets };
