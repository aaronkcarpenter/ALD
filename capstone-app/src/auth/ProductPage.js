import React from 'react'

import '../styles/productPage.css'

const ProductPage = () => {
  return (
    <div className='product-page-container pdp product d-lg-flex'>
      <div className='product__images'>
        <div className='product__mobile-desc d-lg-none'>
          <a className='link'>Hoodie</a>
          <h1 className='product__title'>ALD Uniform Hoodie</h1>
          <div className='product__pricing'>
            <span className='product__price money'>$185.00</span>
          </div>
        </div>
        <div className='product__carousel swiper-container'>
          <div className='swiper-wrapper'>
            <a href='#' className='swiper-slide product__image-item'>
              <div className='image-square product__image'>
                <img src= 'https://cdn.shopify.com/s/files/1/0302/7829/products/tops-3-14_af8824e3-f911-4f84-b0b7-c6c19c09d8da_800x.jpg?v=1599677036' alt='ALD Uniform Hoodie' />
              </div>
            </a>
            <a href='#' className='swiper-slide product__image-item'>
              <div className='image-square product-image'>
                <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/Aime_FW20_Uniform_Lifestyle_R20058_1600x.jpg?v=1599696678' alt='ALD Uniform Hoodie' />
              </div>
            </a>
            <a href='#' className='swiper-slide product__image-item'>
              <div className='image-square product-image'>
                <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/Aime_FW20_Uniform_Lifestyle_R20089_800x.jpg?v=1599696678' alt='ALD Uniform Hoodie' />
              </div>
            </a>
            <a href='#' className='swiper-slide product__image-item'>
              <div className='image-square product-image'>
                <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/Aime_FW20_Uniform_Lifestyle_0786_fd44da17-720a-4ce5-a558-7f3484a575e8_1600x.jpg?v=1599743621' alt='ALD Uniform Hoodie' />
              </div>
            </a>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
      <div className='product__desc'>
        <div className='desc-wrapper'>
          <div className='product__desktop-desc d-none d-lg-block'>
            <a className='link'>Hoodie</a>
            <h1 className='product__title'>ALD Uniform Hoodie</h1>
            <div className='product__pricing'>
              <span className='product__price money'>$185.00</span>
            </div>
          </div>
          <div className='product__variants product__variants--colors'>
            <div className='product-variants-title'>
              Select Color
              <span className='product__variants-count d-lg-none'>(6)</span>
            </div>
            <div className='swatch-colors swiper-container'>
              <div className='swiper-wrapper'>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops-3-18_1947b4f8-f026-48db-81dd-2db247e8ebcb.jpg?v=1599677086' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops-3-18_1947b4f8-f026-48db-81dd-2db247e8ebcb.jpg?v=1599677086' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops-3-18_1947b4f8-f026-48db-81dd-2db247e8ebcb.jpg?v=1599677086' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops-3-18_1947b4f8-f026-48db-81dd-2db247e8ebcb.jpg?v=1599677086' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops-3-18_1947b4f8-f026-48db-81dd-2db247e8ebcb.jpg?v=1599677086' />
                  </div>
                </a>
                <a href='products/:id' className='swiper-slide swatch-colors__item'>
                  <div className='image-square product-image'>
                    <img src='https://cdn.shopify.com/s/files/1/0302/7829/products/tops-3-18_1947b4f8-f026-48db-81dd-2db247e8ebcb.jpg?v=1599677086' />
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
                  <span className='text-noerror'>Select Size</span>
                  <span className='text-error'>Please Select Your Size</span>
                </div>
                <div className='swatch-size grid-row grid-row--3 grid-row--lg-6'>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label for='size-JET Black /XS' className='swatch-size__label'>XS</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label for='size-JET Black /XS' className='swatch-size__label'>S</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label for='size-JET Black /XS' className='swatch-size__label'>M</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label for='size-JET Black /XS' className='swatch-size__label'>L</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label for='size-JET Black /XS' className='swatch-size__label'>XL</label>
                  </div>
                  <div className='swatch-size__item'>
                    <input type='radio' name='single-name-option' className='swatch-size__control' />
                    <label for='size-JET Black /XS' className='swatch-size__label'>XXL</label>
                  </div>
                </div>
                <div className='atc-box'>
                  <button type='submit' className='btn btn--dark btn--bag'>
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
                    <div>Black</div> 
                    <div>Black</div> 
                    <div>Black</div> 
                    <div>Black</div> 
                    <div>Black</div> 
                    <div>Black</div> 
                    <div>Black</div> 
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

export default ProductPage
