import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAczHDNVAyrfZHCSTp_O3m60jUi_2q4Er0",
  authDomain: "newcat-d02c0.firebaseapp.com",
  projectId: "newcat-d02c0",
  storageBucket: "newcat-d02c0.firebasestorage.app",
  messagingSenderId: "980860666498",
  appId: "1:980860666498:web:1f97e3951c3acbf17c6a9b",
  measurementId: "G-60HWMH9VM7"
};

export default firebaseConfig;


if (
  !firebaseConfig.apiKey ||
  !firebaseConfig.authDomain ||
  !firebaseConfig.projectId ||
  !firebaseConfig.storageBucket ||
  !firebaseConfig.messagingSenderId ||
  !firebaseConfig.appId
) {
  throw new Error("Missing Firebase configuration environment variables.");
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
