import React, { useState } from 'react'
// import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';
import { useHistory } from 'react-router-dom';


import '../styles/productPage.css'

const ProductPageTwo = () => {

  const [state, setState] = useState({ level: 'master' })

  const history = useHistory();

  const addToBag = (e) => {
    try {
      history.push('/checkout');
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e) => {
    try {
      setState('');
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='product-page-container pdp product d-lg-flex'>
      <div className='product__images'>
        <div className='product__mobile-desc d-lg-none'>
          <a className='link' href='/shop-all'>Hoodie</a>
          <h1 className='product__title'>ALD Uniform Hoodie</h1>
          <div className='product__pricing'>
            <span className='product__price money'>$185.00</span>
          </div>
        </div>
        <div className='product__carousel swiper-container'>
          <div className='swiper-wrapper'>
            <a href='/shop/:id' className='swiper-slide product__image-item'>
              <div className='image-square product__image'>
                <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct9.jpg?alt=media&token=c2af5c65-521d-4563-87e9-cc7640d1e0c3' alt='blue-sweats-model' />
              </div>
            </a>
            <a href='/shop/:id' className='swiper-slide product__image-item'>
              <div className='image-square product-image'>
                <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct8.jpg?alt=media&token=6e799fe7-5afe-44e0-a922-297ec0656c89' alt='ALD Uniform Hoodie' />
              </div>
            </a>
            <a href='/shop/:id' className='swiper-slide product__image-item'>
              <div className='image-square product-image'>
                <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct12.jpg?alt=media&token=c596c8b9-6109-47d5-ad10-748d93b68cc9' alt='Sweat Details' />
              </div>
            </a>
            <a href='/shop/:id' className='swiper-slide product__image-item'>
              <div className='image-square product-image'>
                <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct11.jpg?alt=media&token=ec8e0e18-a8d8-4920-82b2-cade586a4ca5' alt='Options' />
              </div>
            </a>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
      <div className='product__desc'>
        <div className='desc-wrapper'>
          <div className='product__desktop-desc d-none d-lg-block'>
            <a href='/shop-all' className='link'>Sweatpants</a>
            <h1 className='product__title'>ALD Uniform Sweatpants</h1>
            <div className='product__pricing'>
              <span className='product__price money'>$185.00</span>
            </div>
          </div>
          <div className='product__variants product__variants--colors'>
            <div className='product-variants-title color'>
              Select Color
              <span className='product__variants-count d-lg-none'>(6)</span>
            </div>
            <div className='swatch-colors swiper-container'>
              <div className='swiper-wrapper'>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img alt='hoodie-options' src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct2.jpg?alt=media&token=704886e9-4617-4a3c-be45-b0f681d8e429' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img alt='hoodie-options' src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct3.jpg?alt=media&token=8603a7a9-eece-4912-a515-13a023a58c92' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img alt='hoodie-options' src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct4.jpg?alt=media&token=a88fdd85-a9ae-4cb0-8b87-b46e4877bee8' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img alt='hoodie-options' src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct5.jpg?alt=media&token=eb37b81a-ce30-4219-930d-bcce18666ff2' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img alt='hoodie-options' src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct6.jpg?alt=media&token=f085dcb0-6d2a-4461-a632-b98c6a98b4eb' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img alt='hoodie-options' src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fshop-all-product-pictures%2Fblue-sweats%2Fbluesweatsproduct7.jpg?alt=media&token=e56024d0-a15a-4666-aafd-894593080e9f' />
                  </div>
                </a>
              </div>
              <div className='swiper-btn-next'></div>
              <div className='swiper-btn-prev'></div>
            </div>
            <form action='/cart/add' className='add-item-form'>
              <input type='hidden' name='quantity' value='1' />
              <input type='hidden' name='id' value='1' />
              <div className='product__variants'>
                <div className='product__variants-title'>
                  <span className='text-noerror size'>Select Size</span>
                </div>
                <div className='swatch-size grid-row grid-row--3 grid-row--lg-6'>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' checked={state.level === 'master'} onChange={handleChange} />
                    <label htmlFor='size-JET Black /XS' className='swatch-size__label'>XS</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label htmlFor='size-JET Black /XS' className='swatch-size__label'>S</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label htmlFor='size-JET Black /XS' className='swatch-size__label'>M</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label htmlFor='size-JET Black /XS' className='swatch-size__label'>L</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label htmlFor='size-JET Black /XS' className='swatch-size__label'>XL</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label htmlFor='size-JET Black /XS' className='swatch-size__label'>XXL</label>
                  </div>
                </div>
                <div className='atc-box'>
                  <button onClick={addToBag} type='submit' className='btn btn--dark btn--bag'>
                    <a className='checkout-link' href='/checkout'> Add to Bag </a>
                  </button>
                </div>
              </div>
            </form>
            <div className='panel'>
              <h4 className='panel__toggle'>
                Product Details and Sizing
              </h4>
              <div className='panel__content'>
                <ul>
                  <li>
                    <div>Navy</div>
                    <div>Embroidered logo </div>
                    <div>Adjustable waist with drawstring</div>
                    <div>Hip Pockets</div>
                    <div>Elastic scrunch hem</div>
                    <div>100% Cotton</div>
                    <div>Machine Wash</div>
                    <div>Made in Canada</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// })

export default ProductPageTwo