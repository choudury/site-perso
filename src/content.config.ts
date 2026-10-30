/*
 * Collections de contenu.
 *   - projets : chaque fichier Markdown de src/content/projets/ est un projet (ajouter un projet = ajouter un fichier) ;
 *   - competences : les quatre groupes de la section « Ce que je fais », dans competences.yaml.
 * Le schéma vérifie au build que rien ne manque.
 */
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      /** Nom du projet, ex. « SawUp ». */
      name: z.string(),
      /** Mission de l'entreprise ou du projet, affichée sur la carte de l'accueil. */
      mission: z.string(),
      /** Rôles de Dorian, affichés en tags. */
      roles: z.array(z.string()).min(1),
      /** Position sur l'accueil (1 = premier). */
      order: z.number(),
      /** Projet toujours en cours. */
      inProgress: z.boolean().default(false),
      /** Dorian y est salarié aujourd'hui. */
      currentJob: z.boolean().default(false),
      /** Adresse du site, s'il existe. */
      url: z.url().optional(),
      /** Visuel de la carte. Tant qu'il manque, un emplacement neutre s'affiche. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const competences = defineCollection({
  loader: file('src/content/competences.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    tools: z.array(
      z.object({
        name: z.string(),
        /** Identifiant Iconify, ex. « logos:figma ». Absent : emplacement en attendant l'icône. */
        icon: z.string().optional(),
        /** Couleur officielle, pour les logos d'une seule couleur (« simple-icons:… »). */
        color: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { projets, competences };
