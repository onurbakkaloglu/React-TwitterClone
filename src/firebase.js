
import firebase from "firebase";
import 'firebase/database';
 const firebaseConfig = {
    apiKey: "AIzaSyCw8YNfUlpNKRTMyA2b8hllIWUp6D6EYP4",
    authDomain: "twitter-clone-9e615.firebaseapp.com",
    projectId: "twitter-clone-9e615",
    storageBucket: "twitter-clone-9e615.appspot.com",
    messagingSenderId: "68162169744",
    appId: "1:68162169744:web:48c6499d87ab9c476ae115",
    measurementId: "G-9TCYTLJE19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db= firebase.firestore();
  export default db;