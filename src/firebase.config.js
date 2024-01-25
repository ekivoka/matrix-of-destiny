// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCwjyNHh4kTIhzgoBD8zToV2vhZVcOla8",
  authDomain: "matrixofdestiny-2ee44.firebaseapp.com",
  projectId: "matrixofdestiny-2ee44",
  storageBucket: "matrixofdestiny-2ee44.appspot.com",
  messagingSenderId: "285248769844",
  appId: "1:285248769844:web:303290330280f7f7961f61",
  measurementId: "G-NGN99ZRLLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);