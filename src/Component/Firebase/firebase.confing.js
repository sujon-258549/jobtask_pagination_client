// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW2QzZGdhGWCDUAtsWNNQq4rSIep7Mwgc",
  authDomain: "unmok-task.firebaseapp.com",
  projectId: "unmok-task",
  storageBucket: "unmok-task.appspot.com",
  messagingSenderId: "886323054903",
  appId: "1:886323054903:web:781e7cbc812de200a0b2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;