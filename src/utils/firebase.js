// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxYOs4yPJh_TsrML1W1dH-0fg-oP2WN_0",
  authDomain: "ott-gpt-ace5e.firebaseapp.com",
  projectId: "ott-gpt-ace5e",
  storageBucket: "ott-gpt-ace5e.appspot.com",
  messagingSenderId: "820473425395",
  appId: "1:820473425395:web:3f0b009f81c18d06ebf686",
  measurementId: "G-C0N4LGGX8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
