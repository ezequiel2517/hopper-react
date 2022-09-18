// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_vRfKa0APMT_fF3G10DVAkjnhCDeMaJ8",
  authDomain: "coder-comicsreact.firebaseapp.com",
  projectId: "coder-comicsreact",
  storageBucket: "coder-comicsreact.appspot.com",
  messagingSenderId: "308932475160",
  appId: "1:308932475160:web:15e8f2da38f3f2d2a3c66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);