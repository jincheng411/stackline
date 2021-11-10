import React from 'react';
import store from '../store'
const ProductSummary = () => {
  console.log(store)
  return (
    <div>
      <h1>{store.getState().summary?.id}</h1>
    </div>
  )
}

export default ProductSummary;