import React from 'react'
import { SignIn, signIn } from '../auth/SignIn'

const SignIn = () => {

  const onSignInClicked = async() => {
    await signIn(emailValue, passwordValue);
  }
  return (
    <div>
      <form>
        <label>Email</label>
        <input type='email' placeholder='Enter Email Address'/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password'/>
      </form>
      
    </div>
  )
}

export default SignIn
