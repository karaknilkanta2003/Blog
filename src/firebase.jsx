// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZjSxoQxjXY93wIU3YC2LmLT_sM21IIfg",
  authDomain: "nilkanta7-blog.firebaseapp.com",
  databaseURL: "https://nilkanta7-blog-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nilkanta7-blog",
  storageBucket: "nilkanta7-blog.appspot.com",
  messagingSenderId: "574032854343",
  appId: "1:574032854343:web:112292ea8aa02711c92062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);

export default app;