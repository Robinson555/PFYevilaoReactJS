// Sección BD Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNZq-pahpyQHVBfGjaM14s9dsbYUJ7Tx8",
  authDomain: "preactjsrobin.firebaseapp.com",
  projectId: "preactjsrobin",
  storageBucket: "preactjsrobin.appspot.com",
  messagingSenderId: "820457255768",
  appId: "1:820457255768:web:34d7a81e2c2e1134772b2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);