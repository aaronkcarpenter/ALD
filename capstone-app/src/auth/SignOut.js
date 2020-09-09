import firebase from 'firebase/app';

// Sign Out Wrapper Function
const signOut = async () => {
  try {
    await firebase.auth().signOut;

  } catch (e) {
    throw new Error ('Error while signing out');
  }
  
}

export default signOut