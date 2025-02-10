// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgIwWOEkyt7j3wJuq6zbhmQLvIcH71FgU",
  authDomain: "synovate-pk.firebaseapp.com",
  projectId: "synovate-pk",
  storageBucket: "synovate-pk.firebasestorage.app",
  messagingSenderId: "360161969370",
  appId: "1:360161969370:web:75221d32a033b82e7491e3",
  measurementId: "G-Y7TQ9R2X0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);