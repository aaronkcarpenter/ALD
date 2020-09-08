import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import './index.css';
import App from './App';

  var firebaseConfig = {
    apiKey: "AIzaSyCGtpXvKcsOpfhF_sRrhB4dQhoaKio89ds",
    authDomain: "app-academy-capstone-project.firebaseapp.com",
    databaseURL: "https://app-academy-capstone-project.firebaseio.com",
    projectId: "app-academy-capstone-project",
    storageBucket: "app-academy-capstone-project.appspot.com",
    messagingSenderId: "175261622378",
    appId: "1:175261622378:web:5edc8b65c2f3d1dcdbea13",
    measurementId: "G-BKYJ0WYRRN"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


