import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTHDOMAIN,
  projectId: process.env.REACT_APP_API_PROJECTID,
  storageBucket: process.env.REACT_APP_API_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGINGSENDERIS,
  appId: process.env.REACT_APP_API_APPID,
  measurementId: process.env.REACT_APP_API_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const analytics = getAnalytics(app);

export {app,provider};