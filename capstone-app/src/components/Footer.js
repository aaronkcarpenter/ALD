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
            <a href='https://github.com/aaronkcarpenter' target='_blank' className='footer-nav__link'>
              Github
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://aaronkcarpenter.com' target='_blank' className='footer-nav__link'>
              Portfolio
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://angel.co/u/aaron-carpenter-4' target='_blank' className='footer-nav__link'>
              AngelList
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://google.com' target='_blank' className='footer-nav__link'>
              Resume
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://linkedin.com/in/aaronkcarpenter' target='_blank' className='footer-nav__link'>
              LinkedIn
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
