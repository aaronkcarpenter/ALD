import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


// import signIn from './SignIn';
import '../styles/login.css';
import signIn from '../auth/SignIn';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

export const SignUpFormFinal = () => {
  const [email, setEmailValue] = useState('');
  const [password, setPasswordValue] = useState('');
  const [confirmPassword, setConfirmPasswordValue] = useState('');

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Don't Match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { email });
      
      setEmailValue('');
      setPasswordValue('');
      setConfirmPasswordValue('');
      history.push('shop-all');
    } catch (error) {
      console.error(error);
    }
  }

    return (
      <div className='form-container'>
        <div className='login-form'>
          <form onSubmit={handleSubmit} className='customer-login'>
            <div className='title'>
              <h1 className='page-header'>Sign Up</h1>
            </div>
            <div className='email-and-password'>
              <div className='email'>
                <input
                  className='email-input'
                  name='email'
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
              </div>
              <div className='password'>
                <input
                  className='password-input'
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  placeholder='Confirm Password'
                  label='Confirm Password'
                  required
                  onChange={(e => setConfirmPasswordValue(e.target.value))} />
              </div>
            </div>
            <div className='form-button-area'>
              <button
                className='button'
              // disabled={!emailValue || !passwordValue}
              // onClick={onSignInClicked}
              >Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}


export default SignUpFormFinal

// class SignUp extends Component {
//   constructor() {
//     super()

//     this.state = {
//       email: '',
//       password: '',
//       confirmPassword: ''
//     }
//   }

//   handleSubmit = async event => {
//     event.preventDefault();

//     const { email, password, confirmPassword } = this.state;

//     if(password !== confirmPassword){
//       alert("Passwords Don't Match");
//       return;
//     }

//     try{
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email, 
//         password
//       );

//       await createUserProfileDocument(user, { email });
//       // await createUserProfileDocument(user);

//       this.setState({
//         email: '',
//         password: '',
//         confirmPassword: ''
//       });
//     } catch(error) {
//       console.error(error);
//     }
//   }

//   handleChange = e => {
//     const { value, name } = e.target;

//     this.setState({ [name]: value })
//   }

//   render() {
//     const { email, password, confirmPassword } = this.state
//     return (
//       <div className='form-container'>
//         <div className='login-form'>
//           <form onSubmit={this.handleSubmit} className='customer-login' action='/home'>
//             <div className='title'>
//               <h1 className='page-header'>Sign Up</h1>
//             </div>
//             <div className='email-and-password'>
//               <div className='email'>
//                 <input
//                   className='email-input'
//                   name='email'
//                   value={email}
//                   placeholder='Email'
//                   required
//                   onChange={this.handleChange} />
//               </div>
//               <div className='password'>
//                 <input
//                   className='password-input'
//                   name='password'
//                   type='password'
//                   value={password}
//                   placeholder='Enter Password'
//                   required
//                   onChange={this.handleChange} />
//               </div>
//               <div className='password'>
//                 <input
//                   className='password-input'
//                   name='confirmPassword'
//                   type='password'
//                   value={confirmPassword}
//                   placeholder='Confirm Password'
//                   label='Confirm Password'
//                   required
//                   onChange={this.handleChange} />
//               </div>
//             </div>
//             <div className='form-button-area'>
//               <button
//                 className='button'
//               // disabled={!emailValue || !passwordValue}
//               // onClick={onSignInClicked}
//               >Create Account
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default SignUpFormFinal