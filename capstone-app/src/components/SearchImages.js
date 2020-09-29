import React from 'react'
import shop_all from '../test/shopAllData'
import NavStatic from '../components/NavStatic'

const SearchImages = (props) => {

  // const images = props.shop_all.filter((image) =>{
  //   return <img key={image.id} alt={image.name} src={shop_all.imageURL} />
  // });

  return (
    <div>
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default SearchImages
