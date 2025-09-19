// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDElZCcx1DX6G1Mg0_oH6HpFcAW5pCCjE",
  authDomain: "food-suggestion-app-eb4aa.firebaseapp.com",
  projectId: "food-suggestion-app-eb4aa",
  storageBucket: "food-suggestion-app-eb4aa.firebasestorage.app",
  messagingSenderId: "460679526878",
  appId: "1:460679526878:web:6baee20e779a0f826fc54f",
  measurementId: "G-0CC7ESTZSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
