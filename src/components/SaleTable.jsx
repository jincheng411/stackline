import React from 'react';
import store from '../store';
import './SaleTable.css'

const SaleTable = () => {
  const sales = store.getState().sales || [];

  return (
    <div className="sale_table">
       <table>
        <thead>
          <tr>
            <th>WEEK ENDING</th>
            <th>RETAILS SALES</th>
            <th>WHOLESALE SALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {sales?.map((s) => {
            return (
              <tr key={s.weekEnding}>
                <td>{s.weekEnding}</td>
                <td>{s.retailSales}</td>
                <td>{s.wholesaleSales}</td>
                <td>{s.unitsSold}</td>
                <td>{s.retailerMargin}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SaleTable;