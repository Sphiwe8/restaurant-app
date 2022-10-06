// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz6z0DkuYpbwQh1ocUHpIfinLejZ29Pqw",
  authDomain: "restaurantapp-86347.firebaseapp.com",
  projectId: "restaurantapp-86347",
  storageBucket: "restaurantapp-86347.appspot.com",
  messagingSenderId: "510286001257",
  appId: "1:510286001257:web:e9835b538a0445328a1ef8",
  measurementId: "G-1V0NPBTV2N"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore()
export { auth, db};