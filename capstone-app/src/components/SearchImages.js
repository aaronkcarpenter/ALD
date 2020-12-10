import React, { useState, useEffect } from 'react'
import shop_all from '../test/shopAllData'
import NavStatic from '../components/NavStatic'

const SearchImages = (props) => {

  let shopping = [
    'AC',
    'Dee',
    'Addi',
    'Jordy',
    'Family'
  ];
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  
  useEffect(() => {
    const results = shopping.filter(garment => 
      garment.toLowerCase().includes(searchTerm.toLowerCase())
    ); 
    setSearchResults(results);
  }, [searchTerm]);

  // const images = props.shop_all.filter((image) =>{
  //   return <img key={image.id} alt={image.name} src={shop_all.imageURL} />
  // });

  return (
    <div>
      {/* <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>      
      
    </div>
  )
}

export default SearchImages
