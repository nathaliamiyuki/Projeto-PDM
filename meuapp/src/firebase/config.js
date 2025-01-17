
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey:  "AIzaSyB7D1gZ0AUJgSBlTl15949hFKVywOzhVsA",
  authDomain: "projeto-pdm-es47a.firebaseapp.com",
  projectId:  "projeto-pdm-es47a",
  storageBucket: "projeto-pdm-es47a.firebasestorage.app",
  messagingSenderId: "514691912402",
  appId:   "1:514691912402:web:abe137781ed0e9fbe8130b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth_mod = getAuth(app);