import React, { Component } from 'react'
import '../styles/checkout.css'

class Checkout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cart_items: ''
    }
  }
  
  render() {
    return (
      <div className='section'>
        <form className='cart' action='/cart'>
          <div className='title'>
            <h1>
              My Bag
              <span>(1)</span>
            </h1>
          </div>
          <table className='cart-table'>
            <thead className='cart-table__heading'>
              <tr>
                <th className='cart-table-product'>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className='cart__list'>
              <tr className='cart-item'>
                <td className='car-item__desc'>
                  <div className='d-flex'>
                    <a href='https://www.aimeleondore.com/collections/all/products/ls-waffle-tee-1?variant=31782577897569' className='cart__image'>
                      <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops9-13_x100.jpg?v=1598194475' alt='waffle thermal' />
                    </a>
                    <div className='cart-extra-desc'>
                      <a href='https://www.aimeleondore.com/products/ls-waffle-tee-1?variant=31782577897569' className='cart-item__name'>
                        Waffle Thermal
                      </a>
                      <div className='extra-desc'>
                        <div> PARMESAN / L </div>
                      </div>
                      <div></div>
                      <a href='/cart/change?line=1&quantity=0' className='cart__remove'>
                        <small>Remove</small>
                      </a>
                    </div>
                  </div>
                </td>
                <td className='cart-item__quantity'>
                  <label className='qtylabel'>
                    <small>QTY</small>
                  </label>
                  <input type='number' className='cart-quantity' value='1'/>
                </td>
                <td className='cart-item__price'>
                  <span>$400.23</span>
                </td>
                <td className='cart-item__total-price'>
                  <span>$400.23</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='cart-footer'>
            <div className='cart-footer__item'>
              <span className='cart-subtotal__title'>SUBTOTAL :</span>
              <span className='cart-subtotal__price'>$400.23</span>
            </div>
            <div className='cart-footer__item'>
              <span>SHIPPING</span>
              <span>FREE SHIPPING ON ORDERS OVER $300</span>
            </div>
            <div className='cart-footer__item'>
              <span>
                <a href='shop-all'>TERMS AND CONDITIONS</a>
              </span>
              <span>
                {/* <input type='checkbox'>::after</input> */}
              </span>
            </div>
            <div className='cart-buttons'>
              <button type='submit' name='update' className='btn btn--light'>
                Update Cart
              </button>
              <button type='submit' name='checkout' className='btn btn--dark ckout'>
                Check Out
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Checkout
