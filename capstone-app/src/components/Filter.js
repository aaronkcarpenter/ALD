import React from 'react';

const Filter = ({ value, handleChange }) => {
  return (
    <div>
      filter: <input value={value} onChange={handleChange} />
    </div>
  )
}

export default Filter
