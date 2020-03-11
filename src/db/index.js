import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase
  .initializeApp({
    apiKey: "AIzaSyDd06biZPGiVs3q4W6Dl7TpxAUDLXya43Y",
    authDomain: "servicesudemy.firebaseapp.com",
    databaseURL: "https://servicesudemy.firebaseio.com",
    projectId: "servicesudemy",
    storageBucket: "servicesudemy.appspot.com",
    messagingSenderId: "650358370352",
    appId: "1:650358370352:web:e3a623699e46419f92bdf5"
  })
  .firestore();

export default db;

export const {Timestamp} = firebase.firestore;

