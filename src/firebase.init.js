// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyINphnHM7s9-xFJj6MYoYf11an6xZ5PE",
  authDomain: "red-onion-367f2.firebaseapp.com",
  projectId: "red-onion-367f2",
  storageBucket: "red-onion-367f2.appspot.com",
  messagingSenderId: "421950266770",
  appId: "1:421950266770:web:8d1ce723c10d87faaeb54b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;