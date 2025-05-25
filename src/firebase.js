// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:   "AIzaSyARoAVISsn_lkfTaukFCy_6vAca5yDzQpQ",
  authDomain: "bhutanese-connect.firebaseapp.com",
  projectId:  "bhutanese-connect",
  storageBucket: "bhutanese-connect.firebasestorage.app",
  messagingSenderId: "619371392650",
  appId: "1:619371392650:web:e40ad4c823ffd874760773",
  measurementId: "G-2WHK1M6E39"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize and export Firestore
export const db = getFirestore(app);
