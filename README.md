📝 ToDo App Redux

Une application ToDo List construite avec React et Redux, permettant d’ajouter, modifier et filtrer des tâches.

🎯 Fonctionnalités

Ajouter une nouvelle tâche

Marquer une tâche comme effectuée / non effectuée

Modifier la description d’une tâche

Supprimer une tâche

Filtrer les tâches : Toutes / Effectuées / Non effectuées

Gestion de l’état global avec Redux

Architecture organisée : actions, reducers, store, constants

📁 Structure du projet
src/
│
├── js/
│   ├── actions/
│   │   └── taskActions.js
│   │
│   ├── reducers/
│   │   └── taskReducer.js
│   │
│   ├── store/
│   │   └── store.js
│   │
│   └── constants/
│       └── taskConstants.js
│
├── components/
│   ├── AddTask.js
│   ├── TaskList.js
│   ├── Task.js
│   └── Filter.js
│
├── App.js
└── index.js

⚙️ Installation

Cloner le projet :

git clone <URL_DU_PROJET>
cd todolist


Installer les dépendances :

npm install


Lancer le projet :

npm start


L’application s’ouvre automatiquement sur http://localhost:3000

🛠️ Technologies utilisées

React 18+

Redux

React-Redux

JavaScript ES6+

HTML & CSS

💻 Utilisation

Ajouter une tâche

Saisir le texte dans le champ et cliquer sur Ajouter.

Marquer une tâche comme effectuée / non effectuée

Cliquer sur la description de la tâche.

Modifier une tâche

Cliquer sur l’icône ✏️, modifier le texte et cliquer ✅ pour valider.

Supprimer une tâche

Cliquer sur l’icône 🗑️ à côté de la tâche.

Filtrer les tâches

Cliquer sur Toutes, Effectuées ou Non effectuées pour afficher le filtre désiré.

🔧 Explication du code

actions/ : contient les fonctions qui créent les actions Redux (addTask, toggleTask, editTask, deleteTask, setFilter)

reducers/ : contient le reducer (taskReducer.js) qui modifie l’état en fonction des actions

store/ : configuration du store Redux et connexion avec Redux DevTools

constants/ : définition des types d’actions pour éviter les erreurs

components/ : tous les composants React (AddTask, TaskList, Task, Filter)

App.js : container principal qui inclut tous les composants

index.js : point d’entrée, inclut le Provider Redux

🔍 Améliorations possibles

Sauvegarde des tâches dans localStorage

Ajout de priorités ou dates d’échéance

Support pour Undo / Restore après suppression

Amélioration du design / UX avec Tailwind ou Bootstrap

Tests unitaires avec Jest ou React Testing Library

📝 Auteur

Elie Adiko

Projet réalisé dans le cadre d’un apprentissage React + Redux
