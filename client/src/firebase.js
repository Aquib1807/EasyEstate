// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'easy-estate-1ff3a.firebaseapp.com',
  projectId: 'easy-estate-1ff3a',
  storageBucket: 'easy-estate-1ff3a.appspot.com',
  messagingSenderId: '581068812629',
  appId: '1:581068812629:web:2ac1778979af52d7ebbfdc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
