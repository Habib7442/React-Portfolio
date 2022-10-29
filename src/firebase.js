import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const app = firebase.initializeApp({
  // apiKey: "AIzaSyD2bmyj0ZbPQ2PEjkLaI2HosH0xEHbRwp4",
  // authDomain: "portfolio-1706d.firebaseapp.com",
  // databaseURL: "https://portfolio-1706d-default-rtdb.firebaseio.com",
  // projectId: "portfolio-1706d",
  // storageBucket: "portfolio-1706d.appspot.com",
  // messagingSenderId: "198739054629",
  // appId: "1:198739054629:web:aa394c9d5505f13986efcc",
  // measurementId: "G-RYDK44CZTN",
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID,
});

export const auth = app.auth();
export const db = getFirestore();
export const storage = getStorage(app);
export default app;
