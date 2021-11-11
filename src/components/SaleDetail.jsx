import React from 'react';
import ProductSummary from'./ProductSummary.jsx';
import ProductTags from'./ProductTags.jsx';
import SaleChart from'./SaleChart.jsx';

const SaleDetail = () => {
  return (
    <div>
      <ProductSummary />
      <ProductTags />
      <SaleChart />
    </div>
  )
}

export default SaleDetail;