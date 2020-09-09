import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import signIn from './SignIn';
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
    <div>
      <label>Email</label>
      <input
        name='email'
        value={emailValue}
        placeholder='Enter Email Address'
        onChange={e => setEmailValue(e.target.value)} />
      <input
        name='password'
        type='password'
        value={passwordValue}
        placeholder='Enter Password'
        onChange={e => setPasswordValue(e.target.value)} />
      <button
        disabled={!emailValue || !passwordValue}
        onClick={onSignInClicked}
      >Sign In</button>

    </div>
  );
}

export default SignInForm;