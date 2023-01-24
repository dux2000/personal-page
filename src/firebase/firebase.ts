// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mojstranica.firebaseapp.com",
  projectId: "mojstranica",
  storageBucket: "mojstranica.appspot.com",
  messagingSenderId: "684156282945",
  appId: "1:684156282945:web:551e4e70d89737d398bec0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
