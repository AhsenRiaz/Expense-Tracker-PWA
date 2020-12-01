import firebase from "firebase"

const config = {
    apiKey: "AIzaSyAoKkF4XqwBG9T5sZUcgVGzagczw9DOOc4",
    authDomain: "expensetracker-pwabyahsen.firebaseapp.com",
    databaseURL: "https://expensetracker-pwabyahsen.firebaseio.com",
    projectId: "expensetracker-pwabyahsen",
    storageBucket: "expensetracker-pwabyahsen.appspot.com",
    messagingSenderId: "1009638756473",
    appId: "1:1009638756473:web:49e5ac18d1f5072b6c44a8"
} ;

firebase.initializeApp(config);
export default firebase



