import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import signIn from './SignIn';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import '../styles/login.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInFormFinal = () => {
  // Declaring new state variables and setting them to an empty string
  const [email, setEmailValue] = useState('');
  const [password, setPasswordValue] = useState('');

  // Storing useHistory() in a variable
  const history = useHistory();

  //Try to signInWithEmailAndPassword, updating the state to the new email and pw
  // and finally pushing the user to the shopping screen 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      //this is typically where I would setState at
      setEmailValue('');
      setPasswordValue('');
      history.push('/shop-all');
    } catch (e) {
      console.log(e);
    }
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    try{
      history.push('/signup');
    } catch (e) {
      console.log(e)
    }
  }

  const signInWithGoogleTest = (e) => {
    try {
      auth.signInWithPopup(provider)
      history.push('/shop-all');
    } catch (e) {
      console.log(e)
    }
  }

  // Not in Use 
  // const onSignInWithGoogleClicked = async () => {
  //   await signInWithGoogle();
  //   history.push('/shop-all');
  // }

  // // Capturing the text entered into the inputs 
  // const handleChange = async (e) => {
  //   // Destructuring the name and value from what is typed in
  //   const { value, name } = e.target;
  //   // Attempting to update the state 
  //   this.setState({ [name]: value })
  // }

    return (
      <div className='page-container'>
        <div className='left-side-container'>
          <div className='image-container'>
            <img className='login-image' src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/login%2FcropLogin.png?alt=media&token=79e23924-0f00-46d7-98e8-a4132ad5e0d6' alt='store' />
          </div>
        </div>
        <div className='form-container'>
          <div className='login-form'>
            <form onSubmit={handleSubmit} className='customer-login' action='/shop-all'>
              <div className='title'>
                <h1 className='page-header'>Login</h1>
              </div>
              <div className='email-and-password'>
                <div className='email'>
                  <input
                    className='email-input'
                    name='email'
                    type='email'
                    value={email}
                    placeholder='Enter Email'
                    required
                    onChange={( e => setEmailValue(e.target.value))} />
                </div>
                <div className='password'>
                  <input
                    className='password-input'
                    name='password'
                    type='password'
                    value={password}
                    placeholder='Enter Password'
                    required
                    onChange={(e => setPasswordValue(e.target.value))} />
                  <label className='forgotten-password'>
                    <a className='forgotten-password-link' href='/signup'>Forgot your password?</a>
                  </label>
                </div>
              </div>
              <div className='form-button-area'>
                <button
                  className='button'
                  type='submit'
                  disabled={!email || !password}
                  onClick={handleSubmit}
                >Sign In
                </button>
              </div>
              <div className='form-button-area'>
                <button
                  className='button'
                  // onClick={signInWithGoogle}
                  onClick={signInWithGoogleTest}
                >Sign In With Google
                </button>
              </div>
              <div className='form-button-area'>
                <button
                  className='button'
                  onClick={handleCreate}
                > Create Account
                </button>
              </div>
              <div className='text-container title'>
                <p className='disclaimer'>
                  <b>Disclaimer:</b> To ensure optimal shopping experience, you are required
                  to log in before browsing. Don't worry, it's worth it. If you're a recruiter,
                  simply click the 'Sign In' button above. Welcome & Enjoy!</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SignInFormFinal
