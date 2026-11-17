# 📝 ToDo App Redux

Une application ToDo List construite avec React et Redux, permettant d'ajouter, modifier et filtrer des tâches.
Malgré le nom du dépôt, il s'agit bien d'une ToDo list.

## 🎯 Fonctionnalités

- Ajouter une nouvelle tâche
- Marquer une tâche comme effectuée / non effectuée
- Modifier la description d'une tâche
- Filtrer les tâches : Toutes / Effectuées / Non effectuées
- Gestion de l'état global avec Redux
- Architecture organisée : actions, reducers, store, constants

## 📁 Structure du projet

```
src/
├── JS/
│   ├── actions/taskActions.js
│   ├── constants/taskConstants.js
│   ├── reducers/taskReducers.js
│   └── store/store.js
├── components/
│   ├── AddTask.js
│   ├── Filter.js
│   ├── Task.js
│   └── TaskList.js
├── App.js
└── index.js
```

## ⚙️ Installation

```bash
git clone https://github.com/eliedvp/React-redux-blog.git
cd React-redux-blog
npm install
npm start
```

L'application s'ouvre automatiquement sur http://localhost:3000.

## 🛠️ Technologies utilisées

React 19, Redux (`createStore`), React-Redux 9 (`useSelector`, `useDispatch`), JavaScript ES6+, HTML & CSS (styles en ligne), Create React App.

## 💻 Utilisation

- **Ajouter une tâche** : saisir le texte dans le champ et cliquer sur Ajouter.
- **Marquer une tâche comme effectuée / non effectuée** : cliquer sur le bouton « Effectuée » (ou « Non effectuée ») de la tâche.
- **Modifier une tâche** : cliquer sur l'icône ✏️, modifier le texte et cliquer sur ✅ pour valider.
- **Filtrer les tâches** : cliquer sur Toutes, Effectuées ou Non effectuées.

## 🔧 Explication du code

- `actions/` : fonctions qui créent les actions Redux (`addTask`, `toggleTask`, `editTask`, `setFilter`)
- `reducers/` : le reducer (`taskReducers.js`) qui modifie l'état en fonction des actions
- `store/` : configuration du store Redux
- `constants/` : types d'actions, pour éviter les fautes de frappe
- `components/` : composants React ; `index.js` est le point d'entrée qui inclut le `Provider` Redux

## 🔍 Améliorations possibles

- Suppression d'une tâche (bouton 🗑️)
- Sauvegarde des tâches dans localStorage
- Priorités ou dates d'échéance
- Tests unitaires avec Jest ou React Testing Library

## 📝 Auteur

Elie Adiko — projet réalisé dans le cadre d'un apprentissage React + Redux pendant la formation GoMyCode.
