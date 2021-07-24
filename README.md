# ZeMovieQuiz

The best movie game ever made up. At least it will be.

(cet exo est inspiré d'un test d'evaluation que j'ai moi même passé)

## Présentation

Je t'invite à coder un jeu génial nommé *Ze Movie Quizz*, qui teste la culture cinématographique du joueur. Le principe de base est ultra simple:

Dans un temps imparti (let's say 60 secondes), le jeu présente au joueur sous forme de rounds un acteur et une affiche de film. Le joueur doit dire si l'acteur a joué dans le film présenté ou non.

Le jeu s'arrête au bout du temps imparti ou à la première erreur, et donne le score à l'utilisateur. Il a la possibilité de rejouer pour tenter de battre son meilleur score.

Et voilà, plutôt basique, mais efficace et fun.


## Enoncé

#### Pré-requis

- Se baser sur Expo(react-native) obviously. C'est le plus simple pour bootstraper un projet react-native.

- Dans cette app, on a besoin d'une source de données sur le cinéma pour y faire des calls.
je te conseille fortement d'utiliser l'API de The Movie Database.

    Tu peux utiliser cette API KEY: `a2f7de1a4da4393a6721d045a1ff9e63` (mais ne la diffuse pas en dehors de cet exercice) ou en demander une depuis ton profil TMDB, onglet API. Ca s'obtient très vite et très facilement. Si tu préfères une autre API, no problem ;)

- Côté DB, pas de pré-requis: il est fortement conseillé d'utiliser Redux ou le local storage mais *pas de backend* et ne perds pas de temps sur cette partie, au détriment de la partie Front.
- côté navigation , bien que le jeu pourrait être fait sans navigation ce serait un plus d'utiliser react-navigation.
- pour les icons , boutons, ou autre éléments UI il est fortement recommendé d'utiliser "react native elements".

#### Le jeu (/play)

##### Etat initial

- Le jeu est arrêté, on affiche seulement un bouton Play. Dès que le joueur clique dessus, le jeu commence (obviously)

##### Jeu en cours

- Un timer, implacable, affiche le temps qui s'écoule pendant toute la durée du jeu.

- Juste en dessous, on présente aléatoirement un acteur et une affiche de film.

- Le joueur doit dire si l'acteur a joué dans ce film (des boutons OUI / NON ou icons Croix / Coeur suffiront ici).

_Hint 1_: Pour une meilleure expérience de jeu, il est préférable de se baser sur des données "populaires" de la base de données de films.

_Hint 2_: Toujours dans le même but d'améliorer l'expérience de jeu, il faudrait éviter le fait que la bonne réponse soit majoritairement "non", mais essayer d'équilibrer à 50/50 les "oui" et les "non".

##### Fin de partie

- La partie s'arrête lorsque le timer arrive à sa fin.

- On affiche le nombre de bonnes réponses du joueur, qu'on store localement.

- Un bouton "Play again" permet de rejouer afin d'améliorer son highscore.


#### Livrable

Réalise le tout dans un repo git pour qu'on puisse ensuite voir comment tu organises tes commits, faire les codes reviews nécessaires, etc..

On s'en tape s'il n'y a pas d'attention au front/css, on va vraiment ici juger si le jeu est fonctionnel, React/React-native bien utilisé, les calls à l'API intelligents, la randomness respectée, etc.. on juge le js only et l'archi du jeu / gameplay :)

