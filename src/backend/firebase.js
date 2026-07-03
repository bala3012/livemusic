// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBahrz0PHLFjUD-2MQCKhG7Wlxb0Kg2LoI",
  authDomain: "livemusic77-e87e3.firebaseapp.com",
  projectId: "livemusic77-e87e3",
  storageBucket: "livemusic77-e87e3.firebasestorage.app",
  messagingSenderId: "129113078442",
  appId: "1:129113078442:web:7ccb72bd97b817df756ed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const __AUTH=getAuth(app)
export const __DB=getFirestore(app)
