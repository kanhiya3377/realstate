// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-3bb12.firebaseapp.com",
  projectId: "realestate-3bb12",
  storageBucket: "realestate-3bb12.appspot.com",
  messagingSenderId: "1044435370623",
  appId: "1:1044435370623:web:dfa2ef0ee237206949754a",
  measurementId: "G-R7K0E77RK5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);