import React from 'react'
import {auth } from '../firebase/firebase.utils';

import '../styles/navStatic.css'

const NavStatic = ({ currentUser }) => {
  return (
    <div className='container h-100'>
      <div className='d-flex justify-content-between align-items-center h-lg-100'>
        <nav className='nav'>
          <div className='nav-wrapper'>
            <ul className='main-nav'>
              <li className='main-nav__item'>
                <a href='/shop-all' className='main-nav__link toggle-submenu'>Shop</a>
              </li>
              <li className='main-nav__item'>
                <a href='/collections' className='main-nav__link toggle-submenu'>Collections</a>
              </li>
              <li className='main-nav__item'>
                <a href='/archive' className='main-nav__link toggle-submenu'>Archive</a>
              </li>
              <li className='main-nav__item'>
                <a href='/brand' className='main-nav__link toggle-submenu'>Brand</a>
              </li>
            </ul>
          </div>
        </nav>
        <a href='/' className='site-name'>
          <img src='https://cdn.shopify.com/s/files/1/0302/7829/t/112/assets/logo.svg?v=3313057350077726060' alt='Aimé Leon Dore' />
        </a>
        <div className='navbar-wrapper d-lg-flex'>
          <ul className='navbar'>
            <li className='main-nav__item'>
              <a href='/search' className='main-nav__link toggle-submenu'>Search</a>
              <form action='/search' className='search-form form-group search-desktop'>
                <button type='button' className='search-close' />
                <input type='text' className='form-control search-field' placeholder='search for' autoComplete='off' />
                <input type='hidden' name='type' value='product' />
                <button type='submit' className='btn-search' />
              </form>
              {/* <li className='main-nav__item'>
                <a href='/logout' className='main-nav__link toggle-submenu'>Log Out</a>
              </li> */}
              { currentUser ? (
                <div className='main-nav__link option' onClick={() => auth.signOut()} >
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
            <li className='main-nav__item'>
              <a href='profile/:id' className='main-nav__link toggle-submenu'>Account</a>
            </li>
            <li className='main-nav__item'>
              <a href='/cart' className='main-nav__link toggle-submenu'>My Bag</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavStatic
