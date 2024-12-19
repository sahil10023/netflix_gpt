// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB23Wcb1sH-HdCn3hBpL2IbeRbs2llwiLk",
  authDomain: "sahil10023-netflixgpt.firebaseapp.com",
  projectId: "sahil10023-netflixgpt",
  storageBucket: "sahil10023-netflixgpt.firebasestorage.app",
  messagingSenderId: "901077512014",
  appId: "1:901077512014:web:7fd7a0cf2894190df6b81f",
  measurementId: "G-0WGJ12M36H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();