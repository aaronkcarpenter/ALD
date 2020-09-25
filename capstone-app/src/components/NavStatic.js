import React from 'react'
import {auth } from '../firebase/firebase.utils';
import { useHistory } from 'react-router-dom';


import '../styles/navStatic.css'
import cartDropdown from './CartDropdown';

const NavStatic = ({ currentUser }) => {

  const history = useHistory();

  const redirectNav = async (event) => {
    event.preventDefault();
    try {
      auth.signOut();
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div className='container h-100'>
      <div className='d-flex justify-content-between align-items-center h-lg-100'>
        <nav className='nav'>
          <div className='nav-wrapper'>
            <ul className='main-nav'>
              <li className='main-nav__item'>
                <a href='/shop-all' className='main-nav__link toggle-submenu nav'>Shop</a>
              </li>
              <li className='main-nav__item'>
                <a href='/shop-all' className='main-nav__link toggle-submenu nav'>Collections</a>
              </li>
              <li className='main-nav__item'>
                <a href='/shop-all' className='main-nav__link toggle-submenu nav'>Archive</a>
              </li>
              <li className='main-nav__item'>
                <a href='/shop-all' className='main-nav__link toggle-submenu nav'>Brand</a>
              </li>
            </ul>
          </div>
        </nav>
        <a href='/' className='site-name'>
          <img src='https://cdn.shopify.com/s/files/1/0302/7829/t/112/assets/logo.svg?v=3313057350077726060' alt='Aimé Leon Dore' />
        </a>
        <div className='navbar-wrapper d-lg-flex'>
          <ul className='navbar'>
            <li className='main-nav__item nav'>
              <a href='/search' className='main-nav__link toggle-submenu'>Search</a>
              <form action='/search' className='search-form form-group search-desktop'>
                {/* <button type='submit' className='search-close' /> */}
                <input type='text' className='form-control search-field' placeholder='search for' autoComplete='off' />
                <input type='hidden' name='type' value='product' />
                <button type='submit' className='btn-search' />
              </form>
              {/* <li className='main-nav__item'>
                <a href='/logout' className='main-nav__link toggle-submenu'>Log Out</a>
              </li> */}
              { currentUser ? (
                // <div className='main-nav__link option' onClick={() => auth.signOut()} >
                <div className='main-nav__link option' onClick={redirectNav} >
                  Log Out
                </div>
              ) : ( 
                <a href='/' className='main-nav__link option'>
                  Log In
                </a>
              )}
            </li>
          </ul>
          <ul>
            <li className='main-nav__item nav'>
              <a href='profile/:id' className='main-nav__link toggle-submenu'>Account</a>
            </li>
            <li className='main-nav__item'>
              <a href='/checkout' className='main-nav__link toggle-submenu my-bag nav '>My Bag</a>
              <cartDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavStatic
