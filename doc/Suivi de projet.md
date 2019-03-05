#Projet Picross par Romain et Maxime 

Etape 1: 
Intégration du puzzle "titanic" (voir ./doc/nonogram) de façon statique dans un tableau js.

1. Création d'un répertoire Git
2. Création de deux branches: fonctionnalite_click et fonctionnalite_validation 
2. Création fichier picross.html
3. Création fichier picross.css
4. Reproduction du CSS/HTML depuis la maquette (picross wireframe.png)
5. Création fichier picross.js
6. Déclaration des constantes
7. Déclaration des fonctions:
* getCanva(), getContext(), initialisation et disposition d'un tableau avec les fonctions SquaresInit() et SquaresDisplay(), utilisation de boucles for.
* Fonctions rappellées dans window.addEventListener()

### Mise en place des légendes:
1. Déclaration des fonctions rowText() et colText() et des constantes ROWS, COLUMNS (prisent dans le fichier .json), TEXT_ROW et TEXT_COL.
2. Utilisation de boucles for.
3. Réflexion sur l'incorporation des constantes dans les fonctions afin d'obtenir un positionnement juste.


## Mise en place de la première fonctionnalité :

1. Click gauche: 
* Mise en place de variables de positionnement x, y pour connaître les coordonnées des carrés cliqués. 
* Utilisation de if, else et de constantes déjà définies pour le positionnement.
* Rappel de la fonction leftClick(event) dans le load avec l'argument 'click' pour signaler que la fonction est appellée suite à un click gauche.

2. Click droit:
* Suppression du menu contextuel du clic droit
* Même principe que click gauche sauf que le rappel dans le load se fait avec l'argument "contextmenu" pour que la fonction rightClick soit appellée par un click droit. 
