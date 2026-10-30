# BRIEF — Portfolio Dorian Lala-Clement (refonte 2026)

> Document de référence pour Claude Code. À placer à la racine du projet. Tout ce qui est écrit ici a été décidé avec Dorian : ne pas improviser en dehors, et poser une question en cas de doute.

---

## 1. Contexte et objectif

- **Qui** : Dorian Lala-Clement, créateur digital basé à Toulouse. Polyvalent : design et interfaces, web et CMS, acquisition, automation, IA. Rigoureux, curieux, aime apprendre en continu.
- **Quoi** : un site portfolio, **vitrine de marque personnelle**. Pas d'acquisition, pas de tunnel. Il sert de **rassurance** : quand quelqu'un rencontre Dorian via son réseau, il peut montrer le site en 30 secondes.
- **Ce que le visiteur doit retenir** : un créateur digital polyvalent, qui conçoit, construit et fait grandir des projets, du design à l'acquisition.
- **Repart d'une page blanche.** L'ancien portfolio (Astro + Tailwind + GSAP) n'avait pas de vrai design. Ne pas réutiliser son code ni ses styles.
- **Langue** : français uniquement au lancement. Isoler les textes dans des fichiers de contenu pour faciliter une version anglaise plus tard.

## 2. Stack technique

- **Astro** + **Tailwind CSS** + **GSAP** (avec ScrollTrigger).
- Contenu en **Markdown / content collections Astro** : ajouter un projet = ajouter un fichier.
- **Police : Geist** (famille variable), auto-hébergée (par exemple via Fontsource).
- Hébergement **Netlify**, déploiement automatique depuis Git.
- **Aucune statistique, aucun cookie, aucun formulaire** au lancement → pas de bandeau cookies.
- Domaine visé plus tard : `dorianlc.fr`. En attendant, l'adresse Netlify temporaire.
- Performance, accessibilité et SEO de base soignés (titres, balises meta, image de partage, favicon à partir du logo).

## 3. Direction artistique

**Mots-clés** : sobre, premium, tech, aéré, fond clair très froid, mise en page soignée.

**Références (à comprendre, pas à copier)** :
- mariavareva.com : accroche d'une ligne, projets en grandes cartes, heure locale et ville en footer, navigation minimale.
- romemichal.pl : phrase d'accroche assumée, chiffres clés, sections numérotées (01, 02, 03), tags de rôle sur les projets.
- koe.design : grille de projets très simple, présentation courte, coin « Explorations » personnel.

### Design system (à créer AVANT toute page)

Tout est défini en **variables CSS / thème Tailwind**. Aucune valeur de couleur ou de taille en dur dans les composants.

| Rôle | Valeur |
|---|---|
| Fond principal (blanc glacé) | `#FAFAFC` |
| Texte principal (noir quasi pur) | `#0A0A0B` |
| Surfaces / fonds de cartes | `#F1F1F4` |
| Texte secondaire | `#6B6B76` |
| Échelle de gris intermédiaires | à dériver entre `#F1F1F4` et `#6B6B76` |
| **Accent (violet profond)** | `#4C3A9E` |

- **Mode clair uniquement** au lancement. Les couleurs étant en variables, un mode sombre pourra être ajouté ensuite : un sélecteur (automatique / clair / sombre) dans le menu du hero (desktop) et dans le footer, **à traiter dans un second temps, après validation de la version claire**.
- **Typographie** : Geist uniquement, pas de mélange de familles. La hiérarchie passe par les **variations de graisse** (léger / moyen / semi-gras) et de **couleur** (noir vs violet).
- **Coins** : légèrement arrondis, **12 à 16 px** (cartes, images, boutons, champs).
- **Accent** : usage discret (liens, boutons, un mot dans un titre, le curseur). Jamais de couleur flashy.

### Interdits (importants)

- **Pas de letter-spacing** par défaut. Autorisé uniquement, et discrètement, sur les micro-détails (heure locale, numéros de section 01/02/03).
- **Pas de bordures décoratives.** Séparer par l'espace, par des fonds légèrement teintés, et très ponctuellement par un filet fin.
- Pas de mélange de familles de polices (pas de serif en accent, pas de monospace).
- Pas de couleurs flashy, pas de dégradés criards, pas d'effets « générés par IA » (blobs, glow, glassmorphism excessif).
- Pas de défilement horizontal de sections au scroll.

## 4. Animations (niveau intermédiaire)

- **Titres** : apparition mot par mot, rapide.
- **Sections** : apparition douce au scroll.
- **Images** : parallaxe légère.
- **Survols** : effets discrets sur cartes et liens.
- **Transitions de page** fluides.
- **Curseur personnalisé** : simple, arrondi, avec un contour violet (`#4C3A9E`). **Desktop uniquement** (`pointer: fine`), jamais sur tactile.
- **Respect de `prefers-reduced-motion`** : coupe les animations, la parallaxe, l'auto-défilement du carrousel.
- **Moment le plus travaillé : l'accroche du hero.**

## 5. Structure du site

Pages : **Accueil**, **4 pages projet**, **À propos**, **Contact**, **Mentions légales** (lien dans le footer, page vide pour l'instant, Dorian la traitera lui-même plus tard).

Navigation minimale. Sur mobile, menu déplié avec **le logo de Dorian** affiché.

### 5.1 Accueil, de haut en bas

**1. Hero**
- Accroche : **« Créateur digital. Du design à l'acquisition. »** — « Créateur digital. » en graisse moyenne, « Du design à l' » en graisse plus fine, **« acquisition » en violet**.
- **Photo de profil** carrée, coins légèrement arrondis, avec un **indicateur de statut** :
  - **voyant vert « en ligne »** entre **8h et 19h, heure de Toulouse (Europe/Paris)**, calculé sur le fuseau de Toulouse et non celui du visiteur ;
  - **petite lune** (inactif) en dehors de ces horaires.
- **Desktop** : nom **« Dorian Lala-Clement »** à côté de la photo (trait d'union, sans accent sur Clement). **Mobile** : photo seule. Menu en haut à droite.
- **Toulouse + heure locale** affichées dans le hero.
- Le logo de Dorian est dans le footer et dans le menu mobile déplié (pas obligatoire dans le hero si manque de place).

**2. Projets sélectionnés**
- 4 grandes cartes : SawUp, L'Heure du Soir, Vivid Gallery, Zensei.
- Chaque carte : visuel (emplacement neutre tant que non fourni), titre court, tag(s) de rôle.

**3. Ce que je fais**
- 4 groupes de compétences, chacun avec un titre court, une phrase concrète, et la liste des outils sous forme d'**icônes en couleurs d'origine avec le nom en dessous** (pas de monochrome forcé) :
  1. **Design et création visuelle** : Figma, Adobe (Photoshop, Illustrator…), Affinity, DaVinci Resolve
  2. **Web et CMS** : Webflow, WordPress, Thinkific, Astro
  3. **Acquisition et marketing** : Meta Ads, Google Ads, HubSpot, Calendly
  4. **Automation et IA** : Make, Notion, Claude, ChatGPT
- Si une icône manque dans les bibliothèques gratuites (Adobe notamment), **demander à Dorian de la fournir**, en mettant un emplacement en attendant.

**4. Présentation (aperçu vers À propos)**
- Un court texte posé sur Dorian (parcours, Toulouse, ce qu'il fait), un **appel à l'action vers la page À propos**.
- **Collage libre** de visuels qui se chevauchent légèrement : **5 images sur desktop**, **3 sur mobile** (Toulouse, un album, une couverture de livre).
- Pour garder le côté premium : rotations de **2 à 4° maximum**, mêmes coins arrondis que le reste, ombre douce, chevauchements limités.
- Visuels candidats : un album, une couverture de livre, une affiche de film, une photo de Toulouse, une photo de montagne, un mock-up de diplôme. Emplacements neutres en attendant.

**5. Contact + footer**
- Appel simple à écrire, puis footer : **heure locale + « Toulouse » avec le logo de l'Occitanie**, logo de Dorian, liens, lien vers les mentions légales.

### 5.2 Pages projet (même modèle pour les 4)

Contenu en Markdown, une page par projet. Structure :
1. **En-tête** : titre court orienté résultat, tag(s) de rôle, année, une phrase de contexte.
2. **Image principale** en grand format.
3. **Infos clés** : rôle, durée, outils, lien du site s'il existe.
4. **Contexte et défi** : texte court.
5. **Ce que j'ai fait** : texte et visuels en alternance.
6. **Résultat** : chiffres ou retours si disponibles.
7. **Projet suivant** : lien pour enchaîner.

**Tant qu'une page est vide : afficher « Étude de cas bientôt disponible »** avec les infos de base (titre, rôle, contexte).

Les 4 projets et le rôle de Dorian :

| Projet | Rôle de Dorian |
|---|---|
| **SawUp** (sawup.fr, plateforme e-learning de production musicale) | Design, web, acquisition, contenu, marketing, com, réseaux sociaux. Projet le plus polyvalent. |
| **L'Heure du Soir** (agence de direction musicale et production live B2B) | Design du site et design global, un peu de com. **En cours**, rôle appelé à grandir. |
| **Vivid Gallery** (galerie d'art en ligne d'Ordinals, sur Bitcoin) | Design du site, landing pages, pages de collection. |
| **Zensei** (zensei.com, IA pour piloter des investissements) | Branding : logo, couleurs, typographie. |

Aucun projet sous NDA. Dorian fournira les visuels plus tard.

### 5.3 À propos (ordre, du plus professionnel au plus personnel)

1. **Introduction** : photo, texte court et humain (qui il est, d'où il vient, ce qui l'anime).
2. **Parcours** : expériences pro en **frise chronologique** (poste, structure, dates, une ligne sur ce qu'il y a fait). Ambiance « pro ».
3. **Formations** : style **diplôme universitaire**, avec mock-ups de diplômes. Ambiance **distincte** de la section parcours.
4. **« La soif d'apprendre »** : thèmes sur lesquels il se forme en ce moment, livres en cours. Traduit son trait de caractère : apprendre en continu.
5. **Culture** : section plus détente. **Carrousel manuel** (glisser au doigt ou à la souris, flèches) mêlant musique, livres, films, séries ; environ une dizaine d'items, chaque carte comme une petite pochette avec son titre. **Auto-défilement léger toutes les 30 secondes**, mis en pause au survol ou au toucher.
6. **Contact**.

### 5.4 Contact

- **Lien `mailto:`** simple, adresse en gros, aucun formulaire.
- Liens : **LinkedIn** et **Instagram**. (GitHub exclu pour l'instant.)
- Adresse mail **générique/placeholder** pour l'instant, centralisée dans **un seul fichier de configuration**.

## 6. Ton des textes

- Voix **posée et précise**, entre le direct-sobre et l'éditorial. Phrases courtes, rythme soigné.
- Première personne. Dire ce que Dorian fait et ce que ça produit, sans adjectifs de vente.
- Pas extraverti, pas de grands sourires dans le ton. La chaleur vient des éléments concrets de la page À propos (culture, lectures, apprentissage), pas du ton.
- Exemple de registre : « Je conçois des sites, je les fais vivre, je fais venir du monde. »
- **Mots et tournures à bannir** : passionné, expert, solutions innovantes, sur-mesure, booster, « au service de », et formules creuses du même genre.
- Quand un texte est nécessaire, proposer un brouillon et le soumettre à Dorian. Ne jamais inventer de chiffres, résultats ou références.

## 7. Ressources (sur l'ordinateur de Dorian)

À lui demander au moment voulu, avec emplacement en attendant :
- Photo de profil (carrée ou recadrable)
- Logo de Dorian (SVG idéalement, versions claire et sombre si elles existent)
- Logo de l'Occitanie
- Icônes manquantes de la section outils
- Visuels des projets, album, livre, affiche, photos Toulouse et montagne, mock-ups de diplômes
- Contenus de la page À propos : parcours, formations, culture, apprentissage

## 8. Méthode de travail (à respecter)

La première version précédente était « moche » faute de méthode. Cette fois :

1. **Design system d'abord** : variables de couleurs, échelle typographique Geist, espacements, rayons, composants de base (bouton, carte, tag, lien). Validation avec Dorian avant de continuer.
2. **Construire section par section**, dans l'ordre : hero, projets, ce que je fais, présentation, footer ; puis pages projet ; puis À propos ; puis contact.
3. **Valider visuellement chaque section** avant la suivante, avec captures d'écran en desktop et mobile.
4. **Un seul sujet à la fois.** Ne pas anticiper les sujets prévus plus tard.
5. **Expliquer** à quoi sert chaque manipulation technique et son impact, pas seulement les commandes.
6. Vérifier avant de livrer : responsive (mobile d'abord), `prefers-reduced-motion`, performance, accessibilité (contrastes, navigation clavier, textes alternatifs).

## 9. À confirmer avec Dorian pendant la construction

- Statut en ligne (8h-19h) : appliquer **tous les jours**, ou seulement en semaine ?
- Choix final des 5 visuels du collage (desktop) parmi les 6 candidats.
- Titres courts des 4 cartes de projet.
- Phrase d'introduction de chaque groupe d'outils.
- Adresse mail définitive, date d'achat du domaine `dorianlc.fr`.
- Mentions légales (Dorian s'en charge, lien déjà prévu dans le footer).
- Mode sombre et sélecteur : second temps.

---

## Message de démarrage à coller dans Claude Code

> Lis `BRIEF.md` en entier. Ne code rien tout de suite. Résume-moi en dix lignes ce que tu as compris, liste les points flous éventuels, puis propose le plan de travail. Commence ensuite uniquement par le design system (section 3), et attends ma validation avant de passer au hero.
