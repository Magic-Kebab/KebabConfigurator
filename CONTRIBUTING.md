###### Structure du projet

**index.css:** Fichier CSS utilisé pour le style de toute l'application.

**index.js:** Fichier js point d'entrée du projet, inclut le composant App

**App.js:** Inclut le composant de navigation Router

**Router.js:** Inclut un BrowserRouter avec un switch, qui permet de switcher entre les différentes pages du projet

**Question.js:** Comporte la logique principale du projet: une liste de questions avec le panier qui s'update au fur et à mesure du déroulement des étapes. Lorsque le panier est affiché, l'utilisateur a la possibilité d'ajouter de nouveaux kebabs à son panier ou de confirmer sa commande. Ce sera ce fichier qu'il faudra modifier pour améliorer la logique existante de l'app.

**questionList.js:** Contient les questions, noms d'ingrédients et leur image associée 
pour chaque étape de création de Kebab. Les données d'éventuelles étapes supplémentaires seront donc à ajouter dans ce fichier.

**Panier.js:** Prend en entrée une liste de kebabs, permet d'afficher les différents Kebabs ajoutés au panier et contient un bouton permettant d'accéder à la future page de confirmation de commande.

**Recap.js:** Le but de ce composant est d'obtenir un récapitulatif visuel des 
ingrédients du kebab qui ont été choisis, puis de passer à l'affichage du panier.

Pour travailler sur ce projet, il faudra développer les nouvelles fonctionnalités sur une branche séparée, s'assurer que la fonction est opérationnelle puis la merge avec la branche principale magic-kebab.
Des commits réguliers, avec messages de commits clairs et concis sont encouragés.

Happy coding!