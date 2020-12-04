import React, { Component } from 'react'
import CheckoutModal from './Checkout_Modal';
import '../styles/checkout.css'

class Checkout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show: false,
      cart_items: ''
    }
  }

  showModal = () => {
    this.setState({
      show: true
    });
  }

  hideModal = () => {
    this.setState({
      show: false
    })
  }
  
  render() {
    return (
      <div className='section'>
        <div>
          <h1>
            My Bag
            <span>(3)</span>
          </h1>
        </div>
        <form className='cart' action='/checkout'>
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
                    <a href='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-1-13_7ee0f84d-4285-48a3-b577-674a523bb523_800x.jpg?alt=media&token=fa279cb2-01cc-4a38-9b03-2d29bb2fe7b7' className='cart__image' target='_blank'>
                      <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops9-13_x100.jpg?v=1598194475' alt='waffle thermal' />
                    </a>
                    <div className='cart-extra-desc'>
                      <a href='/shop/:id' className='cart-item__name'>
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
              <tr className='cart-item'>
                <td className='car-item__desc'>
                  <div className='d-flex'>
                    <a href='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-1-13_7ee0f84d-4285-48a3-b577-674a523bb523_800x.jpg?alt=media&token=fa279cb2-01cc-4a38-9b03-2d29bb2fe7b7' className='cart__image' target='_blank'>
                      <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2FblackHoodie%2FcartBlackHoodie.jpg?alt=media&token=14b07cd2-b1ba-4b35-8b4c-ff75dba077d1' alt='black-hoodie' />
                    </a>
                    <div className='cart-extra-desc'>
                      <a href='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-1-13_7ee0f84d-4285-48a3-b577-674a523bb523_800x.jpg?alt=media&token=fa279cb2-01cc-4a38-9b03-2d29bb2fe7b7' className='cart-item__name'>
                        ALD Uniform Hoodie
                      </a>
                      <div className='extra-desc'>
                        <div> JET BLACK / L </div>
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
                  <span>$185.00</span>
                </td>
                <td className='cart-item__total-price'>
                  <span>$185.00</span>
                </td>
              </tr>
              <tr className='cart-item'>
                <td className='car-item__desc'>
                  <div className='d-flex'>
                    <a href='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-1-13_7ee0f84d-4285-48a3-b577-674a523bb523_800x.jpg?alt=media&token=fa279cb2-01cc-4a38-9b03-2d29bb2fe7b7' className='cart__image' target='_blank'>
                      <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2FblackHoodie%2FblueSweats.jpg?alt=media&token=e7b0f6ba-6bbc-4a60-b9be-cacbc05269fb' alt='blue-sweats' />
                    </a>
                    <div className='cart-extra-desc'>
                      <a href='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2FblackHoodie%2FblueSweats.jpg?alt=media&token=e7b0f6ba-6bbc-4a60-b9be-cacbc05269fb' className='cart-item__name'>
                        ALD Uniform Sweatpants
                      </a>
                      <div className='extra-desc'>
                        <div> SKY CAPTAIN / M </div>
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
                  <span>$185.00</span>
                </td>
                <td className='cart-item__total-price'>
                  <span>$185.00</span>
                </td>
              </tr>

            </tbody>
          </table>
          <div className='cart-footer'>
            <div className='cart-footer__item'>
              <span className='cart-subtotal__title'>SUBTOTAL :</span>
              <span className='cart-subtotal__price'>$770.23</span>
            </div>
            <div className='cart-footer__item'>
              <span>Shipping</span>
              <span>FREE SHIPPING ON ORDERS OVER $300</span>
            </div>
            <div className='cart-footer__item'>
              <span>
                <a href='shop-all'>Terms and Conditions</a>
              </span>
              <span>
                <input className='checkbox' type='checkbox'></input>
              </span>
            </div>
            <div className='cart-buttons'>
              <button type='submit' name='update' className='btn btn--light'>
                <a href='/shop-all'>Continue Shopping</a>
              </button>
              <CheckoutModal className='modal-container' show={this.state.show} handleClose={this.hideModal}>
                <div className='header-container'>
                  <h1 className='modal-h1'>CLONE ALERT</h1>
                </div>
                <div className='paragraph-header'>
                  <p className='modal-pari'>This is a clone, so the products in your cart can't be purchased from us. Instead, feel free
                  to browse the same products at 
                    <a href='https://www.aimeleondore.com/'> Aime Leon Dore</a>
                    . For my resumé, portfolio, and contact information, click the links below. Thanks for browsing.
                  </p>
                </div>
                <div className='links-container'>
                  <a href='https://github.com/aaronkcarpenter'>
                    <i className='fab fa-github fa-7x' /> 
                    <p className='profile-link'>Github</p>
                  </a>
                  <a href='https://linkedin.com/in/aaronkcarpenter'>
                    <i className='fab fa-linkedin-in fa-7x' />
                    <p className='profile-link'>LinkedIn</p>
                  </a>
                  <a href='https://angel.co/u/aaron-carpenter-4'>
                    <i className='fab fa-angellist fa-7x' /> 
                    <p className='profile-link'>AngelList</p>
                  </a>
                  <a href='https://drive.google.com/file/d/16iFr5Lm5A0wd0E9YwMRcWvwwZPIf99BM/view?usp=sharing'>
                    <i className='fab fas fa-newspaper fa-7x' /> 
                    <p className='profile-link resume'>Resumé</p>
                  </a>
                </div>
                <div>
                  <a href='mailto:aaronkcarpenter@gmail.com'>
                    <p className='profile-link email-contact'> 
                    <i className='fas fa-envelope fa-2x' />
                      Email Me
                    </p>
                  </a>
                </div>
              </CheckoutModal>
              <button 
              type='button' 
              name='checkout' 
              className='btn btn--dark ckout'
              onClick={this.showModal}
              >
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
