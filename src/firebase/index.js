// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAINy1jspI819oo_79JzR1FuJEJGXqSfz4",
  authDomain: "whats-pup-thinkin.firebaseapp.com",
  projectId: "whats-pup-thinkin",
  storageBucket: "whats-pup-thinkin.appspot.com",
  messagingSenderId: "909730232185",
  appId: "1:909730232185:web:2acd9433a90bc387c9a1a8",
  measurementId: "G-STXKWL84Z7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
