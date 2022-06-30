import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDhJ88CymCTrUeDvE1I0Rgm4shVztN3qug",
  authDomain: "omgshoes-backend.firebaseapp.com",
  projectId: "omgshoes-backend",
  storageBucket: "omgshoes-backend.appspot.com",
  messagingSenderId: "763080339257",
  appId: "1:763080339257:web:77bcdebb1029a313c1c2e8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)