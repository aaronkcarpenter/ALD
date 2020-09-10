import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import signIn from './SignIn';
import '../styles/login.css'
// import { ResetPasswordForm } from './ResetPasswordForm';

export const SignInForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const onSignInClicked = async () => {
    console.log('YES, YOU CLICKED IT');
    try{
      await signIn(emailValue, passwordValue);
      history.push('/home');
    } catch (e) {
      setErrorMessage(e.message);
    }
  }

  const onSignInWithGoogleClicked = async () => {
    // Firebase code goes here
  }

  return (
    <div className='form-container'>
        <div className='login-form'>
          {/* <form method='post' action='/home' className='customer-login'> */}
          <form className='customer-login'>
            <div className='title'>
              <h1 className='page-header'>Login</h1>
            </div>
            <div className='email-and-password'>
              <div className='email'>
                <input
                  className='email-input'
                  name='email'
                  value={emailValue}
                  placeholder='Email'
                  onChange={e => setEmailValue(e.target.value)} />
              </div>
              <div className='password'>
                <input
                  className='password-input'
                  name='password'
                  type='password'
                  value={passwordValue}
                  placeholder='Enter Password'
                  onChange={e => setPasswordValue(e.target.value)} />
                <label className='forgotten-password'>
                  <a className='forgotten-password-link' href='/recover'>Forgot your password?</a>
                </label>
              </div>
            </div>
            <div className='form-button-area'>
              <button
                className='button'
                disabled={!emailValue || !passwordValue}
                onClick={onSignInClicked}>Sign In
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}

export default SignInForm;