// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb3XSX_QmXECRXj4ikIDDJ9fJzKyVqs8o",
  authDomain: "synovatepk.firebaseapp.com",
  projectId: "synovatepk",
  storageBucket: "synovatepk.firebasestorage.app",
  messagingSenderId: "904886932345",
  appId: "1:904886932345:web:780adf896adcb5269b95a8",
  measurementId: "G-GKD2QX4K2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };