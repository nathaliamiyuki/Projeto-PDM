import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAJG4SlehPBIWSY_Hd-uvmmII-B8Yyjj_s",
  authDomain: "projeto-pdm-firebase.firebaseapp.com",
  projectId: "projeto-pdm-firebase",
  storageBucket: "projeto-pdm-firebase.firebasestorage.app",
  messagingSenderId: "193996804367",
  appId: "1:193996804367:web:098340fcb92e0990e4ae7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth_mod = getAuth(app);