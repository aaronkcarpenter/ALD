import React from 'react';
import { Redirect } from 'react-router-dom';
import signOut  from './SignOut';
import '../styles/logout.css'

const SignOutButton = () => {

  console.log('Sign Out Button Was Clicked')
  const onClickSignOut = async () => {
    try {
      await signOut();
      console.log('You are being signed out')      
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <>
      <h1>Click the button below to sign out</h1>
      <button onClick={onClickSignOut}>
      Sign Out
      </button>
    </>
  );
}

export default SignOutButton