# Plex4Life
https://plex-4-life.firebaseapp.com/

## About
This project was generated with [Create React App](https://facebook.github.io/react/docs/installation.html#creating-a-new-application).

Used Technos
- [React](https://facebook.github.io/react/) for the front-end
- [Firebase](https://firebase.google.com/) for the back-end (Realtime database) and hosting
- [Travis-CI](https://travis-ci.org/) for Continious Integration and deployment
- [Recharts](http://recharts.org) to generate beautiful charts
- [Material-UI](http://www.material-ui.com) to implement Google's Material Design

## Objective
TODO

## TODOs
- [ ] Translation (english-french)
- [ ] Secure database

## How to
* `npm install -g create-react-app` to install create-react-app
* `create-react-app plex4life` to create a react app named `plex4life`

In the react app directory : 
* `npm install --save firebase` to install firebase and add it to the app dependencies (package.json)
* `npm install -g firebase-tools` to install firebase-tools (firebase CLI)
* `firebase init` to initialize firebase (setup database rules, hosting via firebase.json)
* `npm run build` to build the app
* `firebase deploy --token "$FIREBASE_TOKEN";` to deploy the app in firebase
* `npm start` to start the app locally (for testing purpose)