import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCugJnbeI0o0YgEfN84RyUMoYig4j44B1g",
  authDomain: "reduxfirebase-c0d43.firebaseapp.com",
  projectId: "reduxfirebase-c0d43",
  storageBucket: "reduxfirebase-c0d43.firebasestorage.app",
  messagingSenderId: "782339968476",
  appId: "1:782339968476:web:5072e9c6bc5b2fe1d4d319"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
