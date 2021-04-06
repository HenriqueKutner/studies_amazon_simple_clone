import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJ9RLIQxMgWh9S6ERcdC8PR4OCKTqQh9M",
    authDomain: "challenge-da7e7.firebaseapp.com",
    projectId: "challenge-da7e7",
    storageBucket: "challenge-da7e7.appspot.com",
    messagingSenderId: "978438582717",
    appId: "1:978438582717:web:0e79bf1191362f025422d4",
    measurementId: "G-E16ZMEW3WP"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };