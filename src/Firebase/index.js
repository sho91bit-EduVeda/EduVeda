import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBc97fC5mzrhhvHnHVFwTOPpJohS_jkimo",
  authDomain: "eduveda-b62d6.firebaseapp.com",
  databaseURL: "https://eduveda-b62d6.firebaseio.com",
  projectId: "eduveda-b62d6",
  storageBucket: "eduveda-b62d6.appspot.com",
  messagingSenderId: "140147138108",
  appId: "1:140147138108:web:7821f79296bce6eac62d39",
  measurementId: "G-PKBCQVQMNZ"
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider as default };
