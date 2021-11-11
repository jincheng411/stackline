import React from 'react';
import store from '../store';
import { useSelector } from 'react-redux';
import './SaleTable.css'

const SaleTable = () => {
  const getSales = (state) => state.sales;
  const sales = useSelector(getSales);
  const getCurrent = (state) => state.currentChart;
  const currentChart = useSelector(getCurrent);
  const handleClick = (chart,color) => {
    store.dispatch({
      type: 'SET_CURRENT_CHART',
      payload: {
        chart,
        description: chart.split(/(?=[A-Z])/).join(' ').toUpperCase(),
        color
      }
    })

  }
  return (
    <div className="sale_table">
       <table>
        <thead>
          <tr>
            <th>WEEK ENDING</th>
            <th onClick={() => handleClick('retailSales', 'blue')} className={currentChart.chart==='retailSales'?'selected':null}>RETAILS SALES</th>
            <th onClick={() => handleClick('wholesaleSales', 'red')} className={currentChart.chart==='wholesaleSales'?'selected':null}>WHOLESALE SALES</th>
            <th onClick={() => handleClick('unitsSold', 'gray')} className={currentChart.chart==='unitsSold'?'selected':null}>UNITS SOLD</th>
            <th onClick={() => handleClick('retailerMargin', 'brown')} className={currentChart.chart==='retailerMargin'?'selected':null}>RETAILER MARGIN</th>
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