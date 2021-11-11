import React from 'react';
import store from '../store';
import './ProductSummary.css';
import './ProductTags.css';

const ProductTags = () => {
  const tags = store.getState().tags;
  return (
    <div className="product_tags">
      {
        tags?.map(tag => {
          return <span key={tag}>{tag}</span>
        })
      }
    </div>
  )
}

export default ProductTags;