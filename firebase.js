// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX1kyDVtCNLj7ZTyIxX0AMauXKg1ybObE",
  authDomain: "inventory-management-e3ff1.firebaseapp.com",
  projectId: "inventory-management-e3ff1",
  storageBucket: "inventory-management-e3ff1.appspot.com",
  messagingSenderId: "135568906089",
  appId: "1:135568906089:web:2f52f12366c66fdb610ff8",
  measurementId: "G-LWZL0TPT32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };