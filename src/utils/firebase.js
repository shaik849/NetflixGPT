// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQNlgl6LoGq8iJ7nLpt7j61bMIFTix_2M",
  authDomain: "netflix-gpt-e8563.firebaseapp.com",
  projectId: "netflix-gpt-e8563",
  storageBucket: "netflix-gpt-e8563.appspot.com",
  messagingSenderId: "943835228033",
  appId: "1:943835228033:web:7dbd49b66a40a867c82a80",
  measurementId: "G-VVWMG3P3YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();