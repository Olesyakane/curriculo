// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVBu2d85ICuJC3IgvqB5L7dKq7gJiwDJ8",
  authDomain: "curriculum-olesya.firebaseapp.com",
  projectId: "curriculum-olesya",
  storageBucket: "curriculum-olesya.appspot.com",
  messagingSenderId: "530505190866",
  appId: "1:530505190866:web:7cd9d423796b2d3c5b0c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app); 


