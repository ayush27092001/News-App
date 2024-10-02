// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmNchoh5GmS7hKznbS9jpBKJYwImJ5r3k",
  authDomain: "news-app-42a61.firebaseapp.com",
  projectId: "news-app-42a61",
  storageBucket: "news-app-42a61.appspot.com",
  messagingSenderId: "785985179828",
  appId: "1:785985179828:web:7475f2e78b3f1a132487e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

    
export const storage = getStorage(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);