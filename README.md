## 0 - Le jeu de la vie

Le jeu de la vie est ce qu'on appelle un automate cellulaire.
 Il simule l'évolution de cellules dans un environnement donné.
C'est un jeu mathématique inventé par John Conway en 1970,
 défini par 4 règles simples supposées simuler des évolutions biologiques.

## 1 - Les règles du jeu

Le jeu de la vie comporte une grille de cellules, chaque cellule pouvant avoir deux états : morte ou vivante.
On initialise le jeu avec une grille remplie de cellules, et à  chaque tour, les cellules vieillissent, et se reproduisent/meurent selon ces règles :
* Si une cellule a moins de 2 cellules en vie autour d'elle, elle meurt de sous-population
* Si une cellule a 2 ou 3 cellules en vie autour d'elle, elle survit
* Si une cellule a plus de 3 cellules en vie autour d'elle, elle meurt de surpopulation
* Si une cellule morte a exactement 3 cellules en vie autour d'elle, elle devient une cellule vivante, par reproduction

## 2 - Lancer le serveur du projet 

Dans un émulateur de terminal ou PowerShell :
$> cd server && npm install # Installe les dépendances du projet, à n'exécuter qu'une seule fois
$> npm start # Lance le serveur
WebSocket Server :: listening on port 8080


## 3 - Travailler sur le client du projet


$> cd client && npm install # Permet d'installer les dépendances du client
$> npm start # "Compile" (transpile, pour être précis) votre code JavaScript ES6 en ES5
