import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD74ltQtVPFz9JTyj2QpsdjTWi7d2p3ok8",
  authDomain: "saleswebapp-dd0a9.firebaseapp.com",
  projectId: "saleswebapp-dd0a9",
  storageBucket: "saleswebapp-dd0a9.appspot.com",
  messagingSenderId: "386043256724",
  appId: "1:386043256724:web:a67bdd331e0d12cba5b981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);