/*
 * Collections de contenu.
 *   - projets : chaque fichier Markdown de src/content/projets/ est un projet (ajouter un projet = ajouter un fichier) ;
 *   - competences : les quatre groupes de la section « Ma boîte à outils », dans competences.yaml ;
 *   - experiences et formations : le parcours de la page À propos, dans experiences.yaml et formations.yaml ;
 *   - culture : le carrousel de la page À propos, dans culture.yaml ;
 *   - labo : les expérimentations de la page Labo, dans labo.yaml.
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
      /** Visuel de la carte et grande image de la page projet. Sans visuel, un emplacement neutre s'affiche. */
      cover: image().optional(),
      coverAlt: z.string().optional(),

      // Page projet
      /** Phrase de contexte sous le titre de la page. */
      context: z.string(),
      /** Titre court orienté résultat. À défaut, la mission sert de titre. */
      headline: z.string().optional(),
      year: z.string().optional(),
      duration: z.string().optional(),
      tools: z.array(z.string()).optional(),
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

const experiences = defineCollection({
  loader: file('src/content/experiences.yaml'),
  schema: z.object({
    order: z.number(),
    role: z.string(),
    company: z.string(),
    contract: z.string(),
    start: z.string(),
    /** Absent quand le poste est toujours occupé (current: true). */
    end: z.string().optional(),
    current: z.boolean().default(false),
    summary: z.string(),
  }),
});

const formations = defineCollection({
  loader: file('src/content/formations.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    school: z.string(),
    /** Année d'obtention du diplôme. */
    year: z.string(),
    detail: z.string().optional(),
    /** Visuel du diplôme, chemin depuis src/assets/ (ex. « diplomes/master.jpg »). */
    mockup: z.string().optional(),
  }),
});

const culture = defineCollection({
  loader: file('src/content/culture.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    author: z.string().optional(),
    kind: z.enum(['Album', 'Livre', 'Film', 'Série']),
    /** Visuel portrait 3:4, chemin depuis src/assets/ (ex. « culture/anna-karenine.jpg »). */
    cover: z.string().optional(),
  }),
});

const labo = defineCollection({
  loader: file('src/content/labo.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    kind: z.string(),
    description: z.string(),
    /** Visuel, chemin depuis src/assets/ (ex. « labo/affiche-01.jpg »). */
    image: z.string().optional(),
    /** Vidéo courte en boucle, chemin depuis public/ (ex. « /labo/animation-01.mp4 »). */
    video: z.string().optional(),
    /** Format de l'emplacement tant qu'il n'y a ni image ni vidéo. */
    ratio: z.string().default('4 / 3'),
  }),
});

export const collections = { projets, competences, experiences, formations, culture, labo };
