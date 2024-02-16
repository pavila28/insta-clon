import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBq9FC2TwdCO49fN340OwCrqcgSEo_Opac",
  authDomain: "insta-clone-devf.firebaseapp.com",
  projectId: "insta-clone-devf",
  storageBucket: "insta-clone-devf.appspot.com",
  messagingSenderId: "616312283886",
  appId: "1:616312283886:web:df50157c744567faf949ff",
  measurementId: "G-TMJ81TM02F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
