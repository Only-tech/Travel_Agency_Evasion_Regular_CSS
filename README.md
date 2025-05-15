# Travel Agency - Evasion Voyage

## Description

Le projet **Evasion Voyage** est un site web conçu pour inspirer les voyageurs et les guider vers des destinations uniques et parfois méconnues. Il offre une plateforme pour découvrir des destinations de voyage originales, planifier des séjours, et accéder à divers services liés au voyage.

## Evolution
Le site a été conceptioné au départ avec le langage Tailwinds CSS, ensuite nous avons voulu en faire une variante en CSS regulier pour avoir plus la mains sur le design :
- Une réorganisation des fichiers et des contenus.
- L’ajout de fonctionnalités étendues comme la pré_visualisation d'une section dépuis le menu, le header changeant, le map tour, la météo ..., et le multilingue.
- Un effort particulier sur le design responsive pour garantir une expérience utilisateur optimale sur toutes les plateformes.

---

### Fonctionnalités principales

Le site "Evasion Voyage" propose les fonctionnalités suivantes :

* **Présentation de Destinations Exclusives :** 

Mise en avant de destinations telles que Socotra (Yémen), Yakoutsk (Sibérie), et le Danakil (Éthiopie), avec des descriptions détaillées et des informations pratiques.

* **Aperçu Rapide des Destinations, Blogs, Services et Locations :** 

La navigation principale offre des aperçus dynamiques de ces différentes sections.

* **Planification de Voyage :** 

Outils et informations pour aider les utilisateurs à organiser leurs séjours (recherche de voyage, menus déroulants pour séjours, vols, croisières, hôtels, locations).

* **Informations Pratiques :** 

Détails sur les escales touristiques, la météo, les conseils pratiques (santé, documents, etc.), et les aspects financiers (convertisseur de devises).

* **Galerie d'Images :** 

Carrousel d'images pour chaque destination afin de donner un aperçu visuel.

* **Avis Clients :** 

Témoignages de clients pour renforcer la confiance.
* **Formulaire de Contact :** 

Possibilité pour les visiteurs de laisser un message pour obtenir un devis ou des informations.

* **Services de Voyage :** 

Présentation des services offerts (voyages personnalisés, assurance voyage, locations, assistance 24/7, prix compétitifs).

----

### Technologies Utilisées

### Design

**Figma** : Outil de conception visuelle utilisé pour structurer et créer une maquette immersive, [consultable ici](https://www.figma.com/design/3r8dPGUnOGZVQdS22DewQV/Travel-Agency-Evasion?node-id=0-1&p=f&t=S94qixIGuJgdeIjD-0).

### Développement

* **HTML:** Structure des pages web.

* **CSS:** Styles et mise en page, incluant l'utilisation de Tailwind CSS pour la version avec Tailwind css **Projet_agence_voyage**.

* **JavaScript:** Interactivité et fonctionnalités dynamiques (navigation, carrousel, cartes, etc.).

* **Bibliothèques et APIs Externes:**

    * **Leaflet:** Pour l'intégration de cartes interactives.

    * **Weatherwidget.org:** Pour l'affichage des informations météorologiques.

## Projet_agence_voyage

* **Node.js :** 

* **Tailwind CSS :** 

-------

### Installation

Pour lancer le projet localement, suivez ces étapes :

1.  **Prérequis :  Node.js et npm (Node Package Manager) doivent être installés sur votre machine.**

2.  **Clonez le dépôt du projet :**

    ```bash
    git clone <https://github.com/GoneFullRedacted/Projet_agence_voyage>  
    ```

3.  **Accédez au dossier du projet :**

    ```bash
    cd <Projet_agence_voyage>
    ```

  **Si vous utilisez Tailwind CSS, exécutez la commande suivante dans votre terminal pour compiler les styles:**

    ```bash
    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
    ```
    (Note : Adaptez les chemins si votre structure de fichiers est différente)

4.  **Ouvrez le fichier `index.html` dans votre navigateur web.**

Pour les autres langues :
   - Accédez aux fichiers `en.html`, `jpn.html`, ou naviguez dans les différentes pages via **Langues** dans le footer.
   - Les styles universels sont appliqués via `css/styles.css`.

------

### Structure des fichiers
Voici une vue simplifiée de l'organisation du projet :
```
/
├── index.html (Page d'accueil)
├── socotra.html (Page de destination Socotra)
├── jpn.html (Page d'accueil version japonaise)
├── en.html (Page d'accueil version anglaise)
├── jpn_socotra.html (Page de destination Socotra version japonaise)
├── en_socotra.html (Page de destination Socotra version anglaise)
├── css/
│   ├── fonts.css (Styles pour les polices)
│   ├── socotra.css (Styles spécifiques à la page Socotra)
│   └── styles.css (Styles globaux)
├── img/    (Images du site)
├── js/
│   ├── carroussel.js   (Gestion du carrousel d'images)
│   ├── cookies.js      (Gestion des cookies - Commenté dans le code)
│   ├── currency.js     (Convertisseur de devises)
│   ├── dropdown.js     (Gestion des menus déroulants)
│   ├── expButton.js    (Bouton "Explorer")
│   ├── mapdisplay.js  (Affichage de la carte sur la page d'accueil)
│   ├── maptour.js      (Carte interactive sur la page Socotra)
│   ├── navpreview.js   (Aperçus de la navigation)
│   ├── navscroll.js    (Navigation au scroll)
│   ├── onTopButton.js  (Bouton "Retour en haut")
├── medias/   (Ressources multimédias - vidéos, logos)
│   └── bg_images/
│       └── bg-animated-yemen.mp4 (Vidéo de fond pour Socotra)
├── Projet_agence_voyage/   (version Tailwind CSS)
└── README.md (Ce fichier)
```

---

### Ressources

* **Inspiration Design :**
    * [Comptoir des voyages](https://www.comptoirdesvoyages.fr/)
    * [Havas voyages](https://www.havas-voyages.fr/)
* **Widget Météo :** [Widget Meteo](https://weatherwidget.org/fr/)
* **Cartes :** [Leaflet](https://leafletjs.com/)
* **Images :**
    * [Pexels](https://www.pexels.com/fr-fr/)
    * [Shopify Burst](https://www.shopify.com/stock-photos)
    * [Freepik](https://fr.freepik.com/)
    * [Pixabay](https://pixabay.com/fr/)
* **Logos :**
    * [Icones](https://icones8.fr/icons)
    * [PostMyWall](https://fr.postermywall.com/)

----------

### Améliorations Possibles

* **Optimisation du formulaire de contact avec une solution côté serveur.**
* **Ajout de fonctionnalités de réservation et de paiement.**
* **Création de pages de destination supplémentaires avec plus de détails et d'interactivité.**
* **Internationalisation du site.**
* **Amélioration de l'accessibilité.**

### Auteurs

* Cédrick & Sébastien

### Licence

* En reflexion.