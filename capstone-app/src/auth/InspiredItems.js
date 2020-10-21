import React from 'react'

const InspiredItems = ({ image }) => {
  return (
    <div className='inspo-item'>
      <div className='image-test'>
        <img src={image} alt='inspo-1' />
      </div>
    </div>
  )
}

export default InspiredItems