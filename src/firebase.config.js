// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtKL3s6iGVhU2hB_X-0JmRhQ0DbwnQDUM",
  authDomain: "maltimart-c0593.firebaseapp.com",
  projectId: "maltimart-c0593",
  storageBucket: "maltimart-c0593.appspot.com",
  messagingSenderId: "503847856399",
  appId: "1:503847856399:web:3fa895da870b8b6578767a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
