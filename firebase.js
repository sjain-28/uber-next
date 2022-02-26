// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYosF3QeqzrWiPznfC_fyJBjPMfKsoESo",
    authDomain: "uber-next-clone-28.firebaseapp.com",
    projectId: "uber-next-clone-28",
    storageBucket: "uber-next-clone-28.appspot.com",
    messagingSenderId: "99052977879",
    appId: "1:99052977879:web:185a5c9d6014f9c91efa92",
    measurementId: "G-PB7BMYGCT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth }