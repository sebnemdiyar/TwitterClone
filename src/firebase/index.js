// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE6XkTt8C2K64ISiyocWx-h1WOashFMNg",
  authDomain: "twitter-clone-d40c1.firebaseapp.com",
  projectId: "twitter-clone-d40c1",
  storageBucket: "twitter-clone-d40c1.firebasestorage.app",
  messagingSenderId: "232504234100",
  appId: "1:232504234100:web:c779750d30beea3e07c121",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlayacısının kurulumunu yap
export const provider = new GoogleAuthProvider();

// firestore db referansını al
export const db = getFirestore(app);

// storage'ın referansını al
export const storage = getStorage(app);
