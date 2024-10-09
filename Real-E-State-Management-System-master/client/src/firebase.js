// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aman-4c2bd.firebaseapp.com",
  projectId: "aman-4c2bd",
  storageBucket: "aman-4c2bd.appspot.com",
  messagingSenderId: "58659242040",
  appId: "1:58659242040:web:c8b9ccc8be281404b6e6cd",
  measurementId: "G-DP93JGYL7Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
