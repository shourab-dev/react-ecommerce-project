// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrp0imkfRv8FlaT2HB8FFkh0rk6FsntsA",
  authDomain: "test-ecommerce-2d7c7.firebaseapp.com",
  projectId: "test-ecommerce-2d7c7",
  storageBucket: "test-ecommerce-2d7c7.appspot.com",
  messagingSenderId: "496608894148",
  appId: "1:496608894148:web:26960fc29e9103a3e6fd91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//* EXPORT DEFAULTS
export {auth,provider}
export default app;
