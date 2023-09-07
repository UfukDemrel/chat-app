// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

console.log(process.env.API_KEY);
console.log(process.env.AUTH_DOMAIN);
console.log(process.env.PROJECT_ID);
console.log(process.env.STORAGE_BUCKET);
console.log(process.env.MESSAGING_SENDER_ID);
console.log(process.env.APP_ID);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf2JtoGy9CXdQfZPk-IPm-uOWwnU3yOeg",
  authDomain: "chatapp-ef55d.firebaseapp.com",
  projectId: "chatapp-ef55d",
  storageBucket: "chatapp-ef55d.appspot.com",
  messagingSenderId: "487636633347",
  appId: "1:487636633347:web:44df70f1610a0647d08b36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

export { auth, db };