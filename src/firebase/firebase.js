// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIRE_API_KEY,
  authDomain: process.env.VUE_APP_FIRE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRE_MESSENEGER_ID,
  appId: process.env.VUE_APP_FIRE_APP_ID,
  measurementId: process.env.VUE_APP_FIRE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
