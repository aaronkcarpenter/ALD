import React, { Component } from 'react'
import '../styles/ShopAll.css'
import shop_all from '../test/shopAllData';


class ShopAll extends Component {
  constructor(props) {
    super(props)
  
    // collection is the array of items that displays on the page
    this.state = {
       collections: shop_all
    }
  }
  
  render() {
    return (
      <div>
        <div className='shop-all-container'>
          <div className='shop-all__header collection-control collection-control--w-filter'>
              <h1 className='collection-name collection-title'> Shop All
              <sup>193</sup>
              </h1>
            <div className='shop-all-header-container'>
              <div className='toolbar-right'>
                <div className='toolbar-mobile align-items-center d-lg-none'>
                  <div className='toolbar__columns-size'>
                    <svg xmlns='http://www.w3.org/2000/svg' />
                  </div>
                  <div className='toolbar__columns-size'>
                    <svg xmlns='http://www.w3.org/2000/svg' />
                  </div>
                </div>
                <div className='toolbar-desktop'>
                  <div className='toolbar-__columns-size'>
                    <svg xmlns='http://www.w3.org/2000/svg' />
                  </div>
                  <div className='toolbar-__columns-size'>
                    <svg xmlns='http://www.w3.org/2000/svg' />
                  </div>
                </div>
              </div>
              <a href='/shop-all' className='filter-dropdown'>
                <div className='filter-toggle'>
                  Show All
                  <span className='filter-toggle__remove-all'></span>
                </div>
              </a>
              
            </div>
          </div>

          {/* <div className='items-preview'>
            { items.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div> */}




          <div className='clothing-container'>
            <div className='products-collection grid-products grid-products--three'>
              <a href='/shop/1' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2FAimeLeonDore5f5793d73410e25f5793d734277.365138215f5793d734277_800x.jpg?alt=media&token=158f3495-8f5c-4579-b712-806c0e24b24d' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Sweatpants</h3>
                  <div className='product-price'>
                    <span className='money'>$185.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/1' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2FAimeLeonDore5f5793d7432e425f5793d7433cc.594992625f5793d7433cc_800x.jpg?alt=media&token=5ea3838b-84f8-44d0-b481-e7d7827c810d' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Sweatpants</h3>
                  <div className='product-price'>
                    <span className='money'>$185.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Fbottoms-3-13_800x.jpg?alt=media&token=a77abd96-8bc0-42bb-93dc-979dfa1a3b22' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Sweatpants</h3>
                  <div className='product-price'>
                    <span className='money'>$185.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ffw20-ne-resize-01_800x.jpg?alt=media&token=881bd474-e3a9-461c-91ff-266afd3363cc' alt='product'/>
                </div>
                <div className='short-desc'>
                  <div className='short-desc'>SOLD OUT</div>
                  <h3 className='product-title'>ALD / New Era Chain Stitch Yankee Hat</h3>
                  <div className='product-price'>
                    <span className='money'>$65.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ffw20-ne-resize-02_800x.jpg?alt=media&token=d33db2bb-7084-4e2d-9415-35d5cf6ea9b1' alt='product'/>
                </div>
                <div className='short-desc'>
                  <div className='short-desc'>SOLD OUT</div>
                  <h3 className='product-title'>ALD / New Era Chain Stitch Yankee Hat</h3>
                  <div className='product-price'>
                    <span className='money'>$65.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ffw20-ne-resize-05_800x.jpg?alt=media&token=8e21eeb2-0a94-4f56-bcd5-1bfe7d0adc04' alt='product'/>
                </div>
                <div className='short-desc'>
                  <div className='short-desc'>SOLD OUT</div>
                  <h3 className='product-title'>ALD / New Era Chain Stitch Yankee Hat</h3>
                  <div className='product-price'>
                    <span className='money'>$65.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-1-13_7ee0f84d-4285-48a3-b577-674a523bb523_800x.jpg?alt=media&token=fa279cb2-01cc-4a38-9b03-2d29bb2fe7b7' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Crewneck Sweatshirt</h3>
                  <div className='product-price'>
                    <span className='money'>$165.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-1-14_cff1f914-42db-4b7c-8ffd-b05d70b9fa86_800x.jpg?alt=media&token=6fcdbabf-d70b-4915-9981-2689c81f3140' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Crewneck Sweatshirt</h3>
                  <div className='product-price'>
                    <span className='money'>$165.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-1-15_d97a054b-6049-4682-b837-46a6039be8d5_800x.jpg?alt=media&token=2e66cebd-c9ed-4373-8d49-91fa0c4fe31e' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Crewneck Sweatshirt</h3>
                  <div className='product-price'>
                    <span className='money'>$165.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-2-17_4bde072a-4e4c-42bb-b781-010614386f1c_800x.jpg?alt=media&token=4a008c80-7bb9-4971-b8e8-a5b05da4431b' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD SS Uniform Logo Tee</h3>
                  <div className='product-price'>
                    <span className='money'>$85.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-2-18_20e07a0c-ad52-44b8-875f-a727ea5b72a2_800x.jpg?alt=media&token=d04dbc58-b2f8-4e1c-aa7a-5f49fb3795c9' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD SS Uniform Logo Tee</h3>
                  <div className='product-price'>
                    <span className='money'>$85.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-2-19_41012c98-41b5-40a7-b318-7c052aca101b_800x.jpg?alt=media&token=0b00352c-1361-4575-bd78-0e932d9213d0' alt='product'/>
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD SS Uniform Logo Tee</h3>
                  <div className='product-price'>
                    <span className='money'>$85.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-3-13_73ff6e81-c3d3-4524-b39c-9670afb4b0ba_800x.jpg?alt=media&token=cc66072e-5cb3-48e4-81d9-3a2b0c17da3d' alt='product' />
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Hoodie</h3>
                  <div className='product-price'>
                    <span className='money'>$185.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-3-14_af8824e3-f911-4f84-b0b7-c6c19c09d8da_800x.jpg?alt=media&token=60463b08-564c-43c3-8805-c32741ed8849' alt='product' />
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Hoodie</h3>
                  <div className='product-price'>
                    <span className='money'>$185.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
              <a href='/shop/:id' className='product-pic'>
                <div className='product-image square-image'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/app-academy-capstone-project.appspot.com/o/shopping%2Ftops-3-16_8def4006-2e6e-48d6-985a-c63c8b095526_800x.jpg?alt=media&token=3ff598db-3719-4b6c-b2cd-e641fe856e21' alt='product' />
                </div>
                <div className='short-desc'>
                  <h3 className='product-title'>ALD Uniform Hoodie</h3>
                  <div className='product-price'>
                    <span className='money'>$185.00</span>
                  </div>
                  <div className='colors-available'>6 Colors Available</div>
                </div>
              </a>
            </div>
            <div className='pagination'>
              <span className='prev'>
              <a href='google.com'></a>
              </span>
              <span className='page_current'>01</span>
            </div>
          </div>
        </div>

        
      </div>
    )
  }
}

export default ShopAll
