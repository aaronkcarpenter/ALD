import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>This is Home and can only be accessed when logged in!</h1>
      <a href='/logout'>Logout</a>
      <a href='/news'>News</a>
      <a href='/shop'>Shop</a>
      <a href='/lookbook'>Lookbook</a>
      <a href='/collections/:id'>Collections</a>
    </div>
  )
}

export default Home
