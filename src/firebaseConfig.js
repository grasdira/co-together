// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkVYMsijWvC2e548kve48ju_sVTbAEfTE",
  authDomain: "co-together.firebaseapp.com",
  projectId: "co-together",
  storageBucket: "co-together.appspot.com",
  messagingSenderId: "432042984799",
  appId: "1:432042984799:web:a3dc5ffda839cd5fc922ea",
  measurementId: "G-K3SC474SKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
