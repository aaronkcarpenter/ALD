import React from 'react'

import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer container'>
        <h4>Mailing List</h4>
        <ul className='footer-nav'>
          <li>
            <form className='email_signup' target='_blank'>
              <div className='form-group'>
                <input className='form-control' type='email' name='email'
                placeholder='Your Email' />
                <input type='submit' value='SUBMIT' className='submit-button' />
              </div>
            </form>
          </li>
          <li className='footer-nav_item'>
            <a href='https://google.com' className='footer-nav__link'>
              Contact Us
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://google.com' className='footer-nav__link'>
              Shipping and Policies
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://google.com' className='footer-nav__link'>
              FAQ
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://google.com' className='footer-nav__link'>
              Instagram
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://google.com' className='footer-nav__link'>
              Contact Me
            </a>
          </li>
        </ul>
        <div className='copyright'>
          Aime Leon Dore Clone
          <span>©</span>
          2020
        </div>
      </div>
      
    </div>
  )
}

export default Footer
