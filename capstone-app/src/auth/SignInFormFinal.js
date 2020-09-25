import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import signIn from './SignIn';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import '../styles/login.css';

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
                  placeholder='Email'
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
                // disabled={!email || !password}
                onClick={signInWithGoogle}
              >Sign In With Google
              </button>
            </div>
            <div className='form-button-area'>
              <button
                className='button'
                disabled={!email || !password}
              // onClick={this.routeChange}
                onClick={handleCreate}
              > Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default SignInFormFinal
