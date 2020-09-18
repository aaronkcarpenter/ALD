import React from 'react'
import '../styles/checkoutModal.css';

const CheckoutModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
  return (
    <div  className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button className='modal-button' onClick={handleClose}>Got It</button>
      </section>
    </div>
  )
}

export default CheckoutModal
