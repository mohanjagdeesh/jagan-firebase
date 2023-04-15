// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD50PGvrZS0cEvjPNh2mAmC3HsYVmY-p5w",
  authDomain: "authenticationwithfireba-f0c1f.firebaseapp.com",
  projectId: "authenticationwithfireba-f0c1f",
  storageBucket: "authenticationwithfireba-f0c1f.appspot.com",
  messagingSenderId: "352324939019",
  appId: "1:352324939019:web:d6afe52bdaff7772b3860e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
