import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCwjMvOBzf0zxIcl6CKMybHLh8jSV_WOic",
  authDomain: "slack-clone-8dcd9.firebaseapp.com",
  projectId: "slack-clone-8dcd9",
  storageBucket: "slack-clone-8dcd9.appspot.com",
  messagingSenderId: "246548010339",
  appId: "1:246548010339:web:df520119c248aee3252f56",
  measurementId: "G-GQJ1M4PPEK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};