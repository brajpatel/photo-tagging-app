import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABGVYM-8SSPnck9bcEUt3-7H3h61Ur98s",
  authDomain: "phototaggingapp-9587f.firebaseapp.com",
  projectId: "phototaggingapp-9587f",
  storageBucket: "phototaggingapp-9587f.appspot.com",
  messagingSenderId: "264459923884",
  appId: "1:264459923884:web:0db18a41f54aaf1fedca09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);