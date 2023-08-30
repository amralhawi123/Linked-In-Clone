import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIERBASE_API_KEY || "AIzaSyDQNaYLJqlBKS9IFPWWq-zjuKd-G2x98QU",
   authDomain: process.env.REACT_APP_FIERBASE_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_FIERBASE_PROJECT_ID,
   storageBucket: process.env.REACT_APP_FIERBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_FIERBASE_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_FIERBASE_APP_ID,
 };

 const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()
const storage = getStorage()
  
export {auth, db, provider, storage}