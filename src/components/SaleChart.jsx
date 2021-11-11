import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import store from '../store';
import * as d3 from 'd3';
import './SaleChart.css';

const SaleChart = () => {
  const getSales = (state) => state.sales;
  const getCurrent = (state) => state.currentChart;
  const sales = useSelector(getSales);
  const currentChart = useSelector(getCurrent);
  const parsedData = sales.map(sale => {
    return {
      ...sale,
      weekEnding: new Date(sale.weekEnding)
    }
  })
  drawChart(parsedData)
  function drawChart(data) {
    const svgWidth = 1300, svgHeight = 400;
    const margin = { top: 60, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    const svg = d3.select('svg')
      .attr("width", svgWidth)
      .attr("height", svgHeight);
    const g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    const x = d3.scaleTime().rangeRound([0, width]);
    const y = d3.scaleLinear().rangeRound([height, 0]);
    const line = d3.line()
      .x(function (d) { return x(d.weekEnding) })
      .y(function (d) { return y(d[currentChart.chart]) })
    x.domain(d3.extent(data, function (d) { return d.weekEnding }));
    y.domain(d3.extent(data, function (d) { return d[currentChart.chart] }));
    g.append("g")
      .attr("transform", "translate(20," + height + ")")
      .call(d3.axisBottom(x))
      .attr("font-size", "1.1em")
      .attr("color", "grey")
      .select(".domain")
      .remove();
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", currentChart.color)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", line);

  }
  return (
    <div className="sale_chart">
      <h1 style={{color: currentChart.color}}>{currentChart.description}</h1>
      <svg />
    </div>
  )
}

export default SaleChart;