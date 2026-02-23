import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCJ8TQ9WEMQwB1oKXdgLMUO5Wfve329X1c",
  authDomain: "printxdrop-firebase.firebaseapp.com",
  projectId: "printxdrop-firebase",
  storageBucket: "printxdrop-firebase.firebasestorage.app",
  messagingSenderId: "985021931711",
  appId: "1:985021931711:web:a2f28de342511bd436a60a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
