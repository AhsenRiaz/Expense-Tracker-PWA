importScripts("https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAy7JfxFZ3lSGXIYTZ1NiXkWdTiVqtODmA",
    authDomain: "quizapp-pwabyahsen.firebaseapp.com",
    databaseURL: "https://quizapp-pwabyahsen.firebaseio.com",
    projectId: "quizapp-pwabyahsen",
    storageBucket: "quizapp-pwabyahsen.appspot.com",
    messagingSenderId: "210637958931",
    appId: "1:210637958931:web:25ae6d8b680ab8ef31b4e6"
});

firebase.messaging()