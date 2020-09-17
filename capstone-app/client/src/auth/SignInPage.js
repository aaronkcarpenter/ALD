import React from 'react'
import { SignIn } from './SignIn'
import { SignInForm } from './SignInForm';

const SignInF = () => {

  return (
    <div>
      <form>
        <label>Email</label>
        <input type='email' placeholder='Enter Email Address'/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password'/>
      </form>
      <button type='submit'>Submit</button>
      
    </div>
  )
}

// NOT IN USE

export default SignInF
