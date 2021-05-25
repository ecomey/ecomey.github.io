importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBZSY-0RK5dqTRayYWljj9KEWLgdiILsq8",
    authDomain: "ecomey-165fd.firebaseapp.com",
    projectId: "ecomey-165fd",
    storageBucket: "ecomey-165fd.appspot.com",
    messagingSenderId: "550006335036",
    appId: "1:550006335036:web:d4c3e18c1a8efbfd500539",
    measurementId: "G-GTSKY22KS0"
  });
const messaging = firebase.messaging();