// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQDtKlQQVY0pX2U9Z9hsNKqYTkKNFBFTM",
  authDomain: "matrixims-web.firebaseapp.com",
  projectId: "matrixims-web",
  storageBucket: "matrixims-web.firebasestorage.app",
  messagingSenderId: "304381743258",
  appId: "1:304381743258:web:57f86570b74ad098d5cf23",
  measurementId: "G-XGJ46XRG0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);