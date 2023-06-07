// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVU5iUHMPyiEtkcG6NZoQsXvm6LKMaj-E",
  authDomain: "fir-database-hosting-416d0.firebaseapp.com",
  projectId: "fir-database-hosting-416d0",
  storageBucket: "fir-database-hosting-416d0.appspot.com",
  messagingSenderId: "800528141462",
  appId: "1:800528141462:web:a8570aad0e151e8b0886b7",
  measurementId: "G-2SYTKB2KW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);