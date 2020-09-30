import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNKAWNpyUad4sMsk0LF_huB4FIjsfYH4Q",
    authDomain: "crwn-db-ae909.firebaseapp.com",
    databaseURL: "https://crwn-db-ae909.firebaseio.com",
    projectId: "crwn-db-ae909",
    storageBucket: "crwn-db-ae909.appspot.com",
    messagingSenderId: "717185935278",
    appId: "1:717185935278:web:82b37a46c040b7b85a4a3f",
    measurementId: "G-MTC2CNF30Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;