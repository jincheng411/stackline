import React from 'react';
import store from '../store';
import { useSelector } from 'react-redux';
import './ProductTags.css';

const ProductTags = () => {
  const getTags = (state) => state.tags;
  const tags = useSelector(getTags);
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