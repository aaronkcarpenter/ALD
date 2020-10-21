import React from 'react'

import InspiredItems from './InspiredItems'

const InspiredPreview = ({ items }) => {
  return (
    <div>
      <div className='collection-specific'>
        {items.map(({ id, ...otherItemProps }) => (
          <InspiredItems key={id}{...otherItemProps} />
        ))}
      </div>
    </div>
  )
}

export default InspiredPreview