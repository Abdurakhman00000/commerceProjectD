import { initializeApp } from "firebase/app"; 
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr2P55vaSCw-9DmSx1thXnzvhASOMPMsM",
  authDomain: "bikemysite.firebaseapp.com",
  projectId: "bikemysite",
  storageBucket: "bikemysite.appspot.com",
  messagingSenderId: "181799516811",
  appId: "1:181799516811:web:909717b38d7abdfc1cf28e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;