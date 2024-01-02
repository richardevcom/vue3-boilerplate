// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjytjsU127rFruPMTCUt3ShJbOOUUmVuU",
  authDomain: "angular-library-53cfa.firebaseapp.com",
  projectId: "angular-library-53cfa",
  storageBucket: "angular-library-53cfa.appspot.com",
  messagingSenderId: "982191143157",
  appId: "1:982191143157:web:1bdebadbe26af043c0edbc",
  measurementId: "G-JEHRET4S7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
