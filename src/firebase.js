// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIRVDGsVo5kLSpz45nUiziQvK3uJxgrLs",
  authDomain: "todo-app-5c40b.firebaseapp.com",
  projectId: "todo-app-5c40b",
  storageBucket: "todo-app-5c40b.appspot.com",
  messagingSenderId: "299613338663",
  appId: "1:299613338663:web:a0ca43da7df75a1bc0a202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)