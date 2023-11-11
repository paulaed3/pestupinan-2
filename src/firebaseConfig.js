
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9rvuWb4X2OWhqslKhbQxZFzzU-gRGB3U",
  authDomain: "novatech-b7280.firebaseapp.com",
  projectId: "novatech-b7280",
  storageBucket: "novatech-b7280.appspot.com",
  messagingSenderId: "19298894740",
  appId: "1:19298894740:web:6bf8e1d3dc0961a89c8581"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)