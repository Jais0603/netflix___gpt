 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFA8eyEPVToie8vagh99NBGHeQiRAZeGo",
  authDomain: "netflixgpt---0603.firebaseapp.com",
  projectId: "netflixgpt---0603",
  storageBucket: "netflixgpt---0603.appspot.com",
  messagingSenderId: "834980473",
  appId: "1:834980473:web:86a8b9a120c0272575a2a8",
  measurementId: "G-JVSKPP9P49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);