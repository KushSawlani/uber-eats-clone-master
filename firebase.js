import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmVInYba8DYF8I8XHGdlMH7afqgB5-Ymw",
  authDomain: "uber-eats-clone-333005.firebaseapp.com",
  projectId: "uber-eats-clone-333005",
  storageBucket: "uber-eats-clone-333005.appspot.com",
  messagingSenderId: "582657621534",
  appId: "1:582657621534:web:6d29001817d12d6c27f80f",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
