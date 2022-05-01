// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwHo8c99n3uRoEMNx0ejt2LttF2okbMd4",
  authDomain: "monitor-mania-a3123.firebaseapp.com",
  projectId: "monitor-mania-a3123",
  storageBucket: "monitor-mania-a3123.appspot.com",
  messagingSenderId: "151841999323",
  appId: "1:151841999323:web:3a5fee4bb75a7355f53ffe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
