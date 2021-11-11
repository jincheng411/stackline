import React from 'react';
import store from '../store';
import { useSelector } from 'react-redux';
import './ProductSummary.css';

const ProductSummary = () => {
  const getProduct = (state) => state.summary;
  const product = useSelector(getProduct);
  return (
    <div className="product_summary">
      <img src={product?.image}/>
      <h1>{product?.title}</h1>
      <small>{product?.subtitle}</small>
    </div>
  )
}

export default ProductSummary;