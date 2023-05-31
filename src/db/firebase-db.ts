// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQd5D0z4pJtQOQC7nlVEIus3QT6kr4i9c",
  authDomain: "elixrdev-school.firebaseapp.com",
  projectId: "elixrdev-school",
  storageBucket: "elixrdev-school.appspot.com",
  messagingSenderId: "84620010538",
  appId: "1:84620010538:web:6029d7ab86b5782134cf53",
  measurementId: "G-FD2TGKTP9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fstore = getFirestore(app);