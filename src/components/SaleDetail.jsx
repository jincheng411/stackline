import React from 'react';
import ProductSummary from './ProductSummary.jsx';
import ProductTags from './ProductTags.jsx';
import SaleChart from './SaleChart.jsx';
import SaleTable from './SaleTable.jsx';
import './ProductTags.css'

const SaleDetail = () => {
  return (
    <div className="sale_detail">
      <div className="sale_detail_left">
        <ProductSummary />
        <ProductTags />
        <span></span>
      </div>
      <div className="sale_detail_right">
        <SaleChart />
        <SaleTable />
      </div>
    </div>
  )
}

export default SaleDetail;