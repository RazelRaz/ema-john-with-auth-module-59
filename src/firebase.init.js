// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmG578HognzOvue7DBc0gqxaCThk-7tgg",
  authDomain: "ema-john-simple-86bea.firebaseapp.com",
  projectId: "ema-john-simple-86bea",
  storageBucket: "ema-john-simple-86bea.appspot.com",
  messagingSenderId: "1025763569586",
  appId: "1:1025763569586:web:055409407643589f58beab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;