// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRbKo6uBudrK5MT5zQz0DrXzCmKuZz2ZA",
  authDomain: "gpt-movie-app.firebaseapp.com",
  projectId: "gpt-movie-app",
  storageBucket: "gpt-movie-app.appspot.com",
  messagingSenderId: "138652411954",
  appId: "1:138652411954:web:2ea32c26cdd81b51ed742b",
  measurementId: "G-4M32LVJTTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);