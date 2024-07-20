import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAar8kCZwz2fibj-Ijkbo5Yuc3CCAYpeq8",
  authDomain: "link-ae899.firebaseapp.com",
  databaseURL: "https://link-ae899-default-rtdb.firebaseio.com",
  projectId: "link-ae899",
  storageBucket: "link-ae899.appspot.com",
  messagingSenderId: "278334915041",
  appId: "1:278334915041:web:4f7090809e773fab6c92a0",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

/* export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp();
  }
} */
