import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBjm3HL41lbwS3lFfPsLqwbnLs1ZUJWxQU",
    authDomain: "avi-system.firebaseapp.com",
    databaseURL: "https://avi-system.firebaseio.com",
    projectId: "avi-system",
    storageBucket: "avi-system.appspot.com",
    messagingSenderId: "158355638578",
    appId: "1:158355638578:web:b3c3d669b509b4759baf2b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}