// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZODZQFjuMYSxUt3gBwvtekMoK9FNVhtw",
    authDomain: "react-cursos-e588e.firebaseapp.com",
    projectId: "react-cursos-e588e",
    storageBucket: "react-cursos-e588e.appspot.com",
    messagingSenderId: "460338438553",
    appId: "1:460338438553:web:49dd725fc70ccbc5e2b308",
    measurementId: "G-VR5FF1D1D1"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseApp)
export const FirebaseBD = getFirestore(FireBaseApp);