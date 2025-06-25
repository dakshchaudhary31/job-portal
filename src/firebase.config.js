// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWtNePzgMgq7-adcN3-q_FEkrea1OeTEs",
  authDomain: "jobboard-1101f.firebaseapp.com",
  projectId: "jobboard-1101f",
  storageBucket: "jobboard-1101f.firebasestorage.app",
  messagingSenderId: "556152519863",
  appId: "1:556152519863:web:65ebf1a62d234f9ba46132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};