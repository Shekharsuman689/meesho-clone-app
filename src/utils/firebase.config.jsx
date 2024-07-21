// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBIoPkPFdRE-nEas2zwpgeeQXlmjShpSuY",
  authDomain: "meesho-clone-72557.firebaseapp.com",
  projectId: "meesho-clone-72557",
  storageBucket: "meesho-clone-72557.appspot.com",
  messagingSenderId: "282626465811",
  appId: "1:282626465811:web:ef16610b7cc2c7a8579fe6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default firebaseConfig;