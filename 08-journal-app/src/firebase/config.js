// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_DATABASEURL,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
} = getEnvironments();
/*
//PROD
const firebaseConfig = {
    apiKey: "AIzaSyDZODZQFjuMYSxUt3gBwvtekMoK9FNVhtw",
    authDomain: "react-cursos-e588e.firebaseapp.com",
    projectId: "react-cursos-e588e",
    storageBucket: "react-cursos-e588e.appspot.com",
    messagingSenderId: "460338438553",
    appId: "1:460338438553:web:49dd725fc70ccbc5e2b308",
    measurementId: "G-VR5FF1D1D1"
};*/
//TESTING
/*const firebaseConfig = {
    apiKey: "AIzaSyAyp56-OntoEzCInrC2Cna1-1txlaTZKYU",
    authDomain: "prueba-25005.firebaseapp.com",
    databaseURL: "https://prueba-25005.firebaseio.com",
    projectId: "prueba-25005",
    storageBucket: "prueba-25005.appspot.com",
    messagingSenderId: "840502602486",
    appId: "1:840502602486:web:13a91500fa2793a9039ad7"
};*/

const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    databaseURL: VITE_DATABASEURL,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
};

console.log(firebaseConfig)

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseApp)
export const FirebaseBD = getFirestore(FireBaseApp);