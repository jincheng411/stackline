import React from 'react';
import store from '../store'
const ProductTags = () => {
  const tags = store.getState().tags;
  return (
    <div>
      {
        tags?.map(tag => {
          return <span>{tag}</span>
        })
      }
    </div>
  )
}

export default ProductTags;