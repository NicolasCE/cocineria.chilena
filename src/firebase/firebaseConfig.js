// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPzM3WPffhKpWsKekf1_HyalZ2tqpm1Mg",
  authDomain: "cocina-nico.firebaseapp.com",
  projectId: "cocina-nico",
  storageBucket: "cocina-nico.appspot.com",
  messagingSenderId: "717870843332",
  appId: "1:717870843332:web:e264488c656cafb8e01091",
  measurementId: "G-LJWMT1QMJQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };