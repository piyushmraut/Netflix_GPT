// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDleV6ZZbdQI_5ePrH5IfMalKuTHJYeVjA",
  authDomain: "netflixgpt-a2975.firebaseapp.com",
  projectId: "netflixgpt-a2975",
  storageBucket: "netflixgpt-a2975.firebasestorage.app",
  messagingSenderId: "1067810259835",
  appId: "1:1067810259835:web:11a339b442fb02a4cb73de"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth();