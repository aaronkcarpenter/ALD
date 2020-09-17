import React from 'react'

import '../styles/navigation.css';

const Navigation = () => {
  return (
    <div className='page-container'>
      <div className='header-container'>
        <div className='center-content'>
          <nav className='nav-left'>
            <div className='nav-left__wrapper'>
              <ul className='main-nav'>
                <li className='main-nav__item'>
                  <a href='#' className='main-nav__link'> Shop </a>
                  <div className='subnav-wrapper'>
                    <span className='main-item-back'>Shop</span>
                    <ul className='submenu'>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          Shop All
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          TEES & POLOS
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          SWEATSHIRTS
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          SHIRTING
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          SWEATERS
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          PANTS
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          SWEATPANTS
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          OUTERWEAR
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          FOOTWEAR
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          HEADWEAR
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          ACCESSORIES
                        </a>
                      </li>
                      <li className='submenu__item'>
                        <a href='/collections/shop-all' className='submenu__link'>
                          GIFTCARDS
                        </a>
                      </li>
                    </ul>
                    <div className='submenu__secondary'>
                      <div className='grid-row__3'>
                        <a href='/shop' className='submenu_secondary__item'>
                          <div className='product-image_-1'>
                            <img src='https://www.google.com' />
                          </div>
                          <div className='small-desc'>
                            <h3>Waffle Thermal</h3>
                            <div className='cta-link'>Shop Now</div>
                          </div>
                        </a>
                        <a href='/shop' className='submenu_secondary__item'>
                          <div className='product-image_-1'>
                            <img src='https://www.google.com' />
                          </div>
                          <div className='small-desc'>
                            <h3>Waffle Thermal</h3>
                            <div className='cta-link'>Shop Now</div>
                          </div>
                        </a>
                        <a href='/shop' className='submenu_secondary__item'>
                          <div className='product-image_-1'>
                            <img src='https://www.google.com' />
                          </div>
                          <div className='small-desc'>
                            <h3>Waffle Thermal</h3>
                            <div className='cta-link'>Shop Now</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default Navigation
