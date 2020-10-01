import React from 'react'

import CollectionItems from './CollectionItems'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-all'>
      <h1 className='title'>{title}</h1>
      <div className='collection-specific'>
        {items.map(({ id, ...otherItemProps}) => (
            <CollectionItems key={id}{...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
