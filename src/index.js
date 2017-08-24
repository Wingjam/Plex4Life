import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWp2Xv5jKO_JU-GzjonSE94XKUysD_AxY",
  authDomain: "plex-4-life.firebaseapp.com",
  databaseURL: "https://plex-4-life.firebaseio.com",
  projectId: "plex-4-life",
  storageBucket: "plex-4-life.appspot.com",
  messagingSenderId: "521939421512"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
