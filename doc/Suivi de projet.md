#Projet Picross par Romain et Maxime 

* Etape 1: 
Intégration du puzzle "titanic" (voir ./doc/nonogram) de façon statique dans un tableau js.

1. Création d'un répertoire Git
2. Création de deux branches: fonctionnalite_click et fonctionnalite_validation 
2. Création fichier picross.html
3. Création fichier picross.css
4. Reproduction du CSS/HTML depuis la maquette (picross wireframe.png)
5. Création fichier picross.js
6. Déclaration des constantes
7. Déclaration des fonctions:
* Fonctions rappellées dans window.addEventListener()
8. Ajout des règles dans l'html

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

## Mise en place de la deuxième fonctionnalité:

1. Validation:
* déclaration de deux variables: tabl et tableauCanvas. tabl=tableau solution et tableauCanvas= tableau utilisateur. 
* déclaration de la fonction juste(), utilisation de if else et de .join (pour transformer le tableau en chaîne de caractères). Si tableaux identiques: c'est gagné, sinon, c'est perdu.


