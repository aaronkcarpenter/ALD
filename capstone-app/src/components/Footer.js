import React from 'react'

import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer container'>
        <h4>Contact Me</h4>
        <ul className='footer-nav'>
          <li>
            <form className='email_signup' target='_blank'>
              <div className='form-group'>
                <a href='mailto:aaronkcarpenter@gmail.com'>
                <input className='form-control' type='email' name='email'
                placeholder='Click Here' />
                </a>
                <input to='#' type='submit' value='SUBMIT' className='submit-button' />
              </div>
            </form>
          </li>
          <li className='footer-nav_item'>
            <a href='https://github.com/aaronkcarpenter' target='_blank' rel='noopener noreferrer' className='footer-nav__link'>
              Github
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://aaronkcarpenter.github.io' target='_blank' rel='noopener noreferrer' className='footer-nav__link'>
              Portfolio
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://angel.co/u/aaron-carpenter-4' target='_blank' rel='noopener noreferrer' className='footer-nav__link'>
              AngelList
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://drive.google.com/file/d/16iFr5Lm5A0wd0E9YwMRcWvwwZPIf99BM/view?usp=sharing' rel='noopener noreferrer' target='_blank' className='footer-nav__link'>
              Resumé
            </a>
          </li>
          <li className='footer-nav_item'>
            <a href='https://linkedin.com/in/aaronkcarpenter' rel='noopener noreferrer' target='_blank' className='footer-nav__link'>
              LinkedIn
            </a>
          </li>
        </ul>
        <div className='copyright'>
          Aaron Carpenter
          <span>©</span>
          2020
        </div>
      </div>
      
    </div>
  )
}

export default Footer
