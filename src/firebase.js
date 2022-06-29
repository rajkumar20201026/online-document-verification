import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getDatabase } from "firebase/database";


const firebaseConfig = {

  apiKey: "AIzaSyAsXtNZ80zrT91tpmtP3XLSATDSi4vKUn0",
  authDomain: "authdemo-f4fb2.firebaseapp.com",
  databaseURL: "https://authdemo-f4fb2-default-rtdb.firebaseio.com",
  projectId: "authdemo-f4fb2",
  storageBucket: "authdemo-f4fb2.appspot.com",
  messagingSenderId: "836433452669",
  appId: "1:836433452669:web:84ee3e08d49932798e9b14"
};

const a = firebase.initializeApp(firebaseConfig);
const fireDB =getDatabase(a);
export default fireDB;