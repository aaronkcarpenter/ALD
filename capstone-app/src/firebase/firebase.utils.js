import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import react from 'react';
import { useHistory } from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyCGtpXvKcsOpfhF_sRrhB4dQhoaKio89ds",
  authDomain: "app-academy-capstone-project.firebaseapp.com",
  databaseURL: "https://app-academy-capstone-project.firebaseio.com",
  projectId: "app-academy-capstone-project",
  storageBucket: "app-academy-capstone-project.appspot.com",
  messagingSenderId: "175261622378",
  appId: "1:175261622378:web:5edc8b65c2f3d1dcdbea13",
  measurementId: "G-BKYJ0WYRRN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;