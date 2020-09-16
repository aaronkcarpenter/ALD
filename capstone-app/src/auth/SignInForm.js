// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import signIn from './SignIn';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import '../styles/login.css';

// import { signInWithGoogle } from '../index'
// import signInWithGoogle from './signInWithGoogle'
// import { ResetPasswordForm } from './ResetPasswordForm';

// export const SignInForm = () => {
//   const [emailValue, setEmailValue] = useState('');
//   const [passwordValue, setPasswordValue] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const history = useHistory();

//   const onSignInClicked = async () => {
//     console.log('YES, YOU CLICKED IT');
//     try{
//       await signIn(emailValue, passwordValue);
//       history.push('/shop-all');
//     } catch (e) {
//       setErrorMessage(e.message);
//     }
//   }

//   const onSignInWithGoogleClicked = async () => {
//     await signInWithGoogle();
//     history.push('/shop-all');
//   }

//   return (
//     <div className='form-container'>
//         <div className='login-form'>
//           {/* <form method='post' action='/home' className='customer-login'> */}
//           <form className='customer-login' action='/home'>
//             <div className='title'>
//               <h1 className='page-header'>Login</h1>
//             </div>
//             <div className='email-and-password'>
//               <div className='email'>
//                 <input
//                   className='email-input'
//                   name='email'
//                   value={emailValue}
//                   placeholder='Email'
//                   onChange={e => setEmailValue(e.target.value)} />
//               </div>
//               <div className='password'>
//                 <input
//                   className='password-input'
//                   name='password'
//                   type='password'
//                   value={passwordValue}
//                   placeholder='Enter Password'
//                   onChange={e => setPasswordValue(e.target.value)} />
//                 <label className='forgotten-password'>
//                   <a className='forgotten-password-link' href='/recover'>Forgot your password?</a>
//                 </label>
//               </div>
//             </div>
//             <div className='form-button-area'>
//               <button
//                 className='button'
//                 disabled={!emailValue || !passwordValue}
//                 onClick={onSignInClicked}
//                 >Sign In
//               </button>
//             </div>
//             <div className='form-button-area'>
//               <button
//                 className='button'
//                 // disabled={!emailValue || !passwordValue}
//                 onClick={signInWithGoogle}
//                 >Sign In With Google
//               </button>
//             </div>
//           </form>
//         </div>
//     </div>
//   );
// }

// export default SignInForm;

import React, { Component } from 'react'

class SignInForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''});
    } catch (e) {
      console.error(e);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }
  
  render() {
    return (
      <div className='form-container'>
        <div className='login-form'>
          {/* <form method='post' action='/home' className='customer-login'> */}
          <form onSubmit={this.handleSubmit} className='customer-login' action='/home'>
            <div className='title'>
              <h1 className='page-header'>Login</h1>
            </div>
            <div className='email-and-password'>
              <div className='email'>
                <input
                  className='email-input'
                  name='email'
                  value={this.state.email}
                  placeholder='Email'
                  required
                  onChange={this.handleChange} />
              </div>
              <div className='password'>
                <input
                  className='password-input'
                  name='password'
                  type='password'
                  value={this.state.password}
                  placeholder='Enter Password'
                  required
                  onChange={this.handleChange} />
                <label className='forgotten-password'>
                  <a className='forgotten-password-link' href='/recover'>Forgot your password?</a>
                </label>
              </div>
            </div>
            <div className='form-button-area'>
              <button
                className='button'
                type='submit'
                // disabled={!emailValue || !passwordValue}
                // onClick={onSignInClicked}
              >Sign In
              </button>
            </div>
            <div className='form-button-area'>
              <button
                className='button'
                // disabled={!emailValue || !passwordValue}
                onClick={signInWithGoogle}
              >Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignInForm
