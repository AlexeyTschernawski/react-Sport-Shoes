import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Вставьте сюда свою конфигурацию из Firebase Console → Project settings
const firebaseConfig = {
  apiKey: "AIzaSyDaj5RD-yHFxb7V78oDFhCCSLlB9YfKyWc",
  authDomain: "newproject01042024.firebaseapp.com",
  projectId: "newproject01042024",
  storageBucket: "newproject01042024.appspot.com",
  messagingSenderId: "703797664198",
  appId: "1:703797664198:web:5332ea9ba4855a05923ac7",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };