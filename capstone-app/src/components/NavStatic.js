import React, { useState, useEffect } from 'react'
import {auth } from '../firebase/firebase.utils';
import { useHistory } from 'react-router-dom';


import '../styles/navStatic.css'
import CartDropdown from './CartDropdown';

const shopping = [
  'https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2FAimeLeonDore5f5793d73410e25f5793d734277.365138215f5793d734277_800x.jpg?alt=media&token=158f3495-8f5c-4579-b712-806c0e24b24d',
  'https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2FAimeLeonDore5f5793d7432e425f5793d7433cc.594992625f5793d7433cc_800x.jpg?alt=media&token=5ea3838b-84f8-44d0-b481-e7d7827c810d',
  'https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fbottoms-3-13_800x.jpg?alt=media&token=a77abd96-8bc0-42bb-93dc-979dfa1a3b22',
]

const NavStatic = ({ currentUser }) => {
  
  const [ search, setSearch ] = useState('');
  const [ searchResults, setSearchResults ] = useState('');
  
  useEffect(() => {
    const results = shopping.filter(sweater => 
      sweater.toLowerCase().includes(search)
    ); 
    setSearchResults(results);
  }, [search]);

  // When user begins to search, set the state of the search to what is entered 
  // and when enter is pressed, it will alert user search is occuring 
  const onSubmit = e => {
    e.preventDefault();
    setSearch(search);
    alert(`Submitting search for ${search}`);
  }

  const handleChange = word => {
    // setSearch(e.target.value);
    setSearch(word);
    console.log("searching for:", word);
  };

  // Works as well 
  const handleChangeTwo = value => {
    setSearch(value);
    console.log("value", value);
  };

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

  // const stopUser = async (e) => {
  //   e.preventDefault();
  //   if
  // }
  
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
              <a href='/search' className='main-nav__link toggle-submenu search-word'>Search</a>
              <form onSubmit={onSubmit} action='/search' className='search-form form-group search-desktop'>
                {/* <button type='submit' className='search-close' /> */}
                {/* <input type='text' value={search} onChange={handleChange} className='form-control search-field' placeholder='search for' autoComplete='off' /> */}
                <input type='text' value={search} onChange={e => handleChange(e.target.value)} className='form-control search-field' placeholder='search for' autoComplete='off' />
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
              <CartDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavStatic
