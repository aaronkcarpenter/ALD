import firebase from 'firebase/app';


// Sign In Wrapper Function-GOOD
const signIn = async(email, password) => {
  try{
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (e) {
      throw new Error('Error signing in');
  }

}

export default signIn
