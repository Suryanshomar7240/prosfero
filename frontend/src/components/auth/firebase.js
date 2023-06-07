// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAodH2OOFaBJmTNCgQPWOLxTVQ3NEazj8A",
  authDomain: "prosfero-1236781.firebaseapp.com",
  projectId: "prosfero-1236781",
  storageBucket: "prosfero-1236781.appspot.com",
  messagingSenderId: "408937674360",
  appId: "1:408937674360:web:ebd3818b7d0ca76315df8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getAuth(app);