import React from 'react';
import ProductSummary from'./ProductSummary.jsx'
const SaleDetail = ({product}) => {
  return (
    <div>
      <ProductSummary product={product}/>
    </div>
  )
}

export default SaleDetail;