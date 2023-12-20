// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAE7_YJBtw3RyR63inqkaT6l_0X8lOoRT4",
	authDomain: "e-learning-4c3d8.firebaseapp.com",
	projectId: "e-learning-4c3d8",
	storageBucket: "e-learning-4c3d8.appspot.com",
	messagingSenderId: "596466730335",
	appId: "1:596466730335:web:1db1db5bd79570d058e2ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
