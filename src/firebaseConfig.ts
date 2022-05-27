// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3ad6cXKu7vjZNqL21VRDrnpOHm9fgbRM",
  authDomain: "auth-demo-nobeen.firebaseapp.com",
  projectId: "auth-demo-nobeen",
  storageBucket: "auth-demo-nobeen.appspot.com",
  messagingSenderId: "850690571373",
  appId: "1:850690571373:web:41ca5be8ea0b1f5e6e1364"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
