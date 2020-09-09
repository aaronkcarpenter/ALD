import firebase from 'firebase/app';

export const addAuthListener = (cb) => {
  const onChange = (user) => {
    if(user) {
      cb({})
    } else {
      cb(null);
    }
  }

  return firebase.auth().onAuthStateChanged(onChange);
}