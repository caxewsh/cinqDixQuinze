// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from ""
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdFwpNbAh7Kl7mjZpLgI65lLZoKlzEnso",
  authDomain: "cinqdixquinze-6a841.firebaseapp.com",
  projectId: "cinqdixquinze-6a841",
  storageBucket: "cinqdixquinze-6a841.appspot.com",
  messagingSenderId: "778910413503",
  appId: "1:778910413503:web:9f511bdde643de04b3cc0a",
  measurementId: "G-9VMS0N7D51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);