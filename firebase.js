import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWPGcfGYV9JjF38Ry7ohWf-oE9w_FsG9E",
  authDomain: "react-notes-53420.firebaseapp.com",
  projectId: "react-notes-53420",
  storageBucket: "react-notes-53420.appspot.com",
  messagingSenderId: "65635419339",
  appId: "1:65635419339:web:de49bfddd5c1e95477474e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");