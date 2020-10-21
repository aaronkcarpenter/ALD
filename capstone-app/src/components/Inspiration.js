import React, { Component } from 'react'
import inspiredBy from '../test/inspiration';
import InspiredPreview from '../auth/InspiredPreview'

class Inspiration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inspirational: inspiredBy,
    }
  }
  
  render() {
    const { inspirational } = this.state;
    return (
      
      <div className='page-container'>
        { <div className='inspired-preview'>
            { 
              inspirational.map(({ id, ...otherCollectionProps }) => (
                <InspiredPreview key={id} {...otherCollectionProps} />
              ))
            }
          </div> }
        <ul className='inspiration-list'>
          <li>
            <p>
              <img src='/' alt='inspirational content' />
            </p>
          </li>
        </ul>

      </div>
    )
  }
}

export default Inspiration;

