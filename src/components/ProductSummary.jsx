import React from 'react';
import store from '../store'
const ProductSummary = () => {
  const product = store.getState().summary;
  return (
    <div>
      <img src={product?.image}/>
      <h1>{product?.title}</h1>
      <small>{product?.subtitle}</small>
    </div>
  )
}

export default ProductSummary;