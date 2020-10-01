import React from 'react'

const CollectionItems = ({ id, product_name, cost, imageUrl, number_available}) => {
  return (
    <div className='collection-item'>
      <div className='image-test'>
        <img src={imageUrl} alt='product-1'/>
      </div>
      <div className='name'>{product_name}</div>
      <div className='cost'>{cost}</div>
      <div className='number-available'>{number_available}</div>
    </div>
  )
}

export default CollectionItems
