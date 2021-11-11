import React, { useEffect, useRef } from 'react';
import store from '../store';
import * as d3 from 'd3';
import './SaleChart.css';

const SaleChart = () => {
  const sales = store.getState().sales || [];
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
      .y(function (d) { return y(d.retailSales) })
    x.domain(d3.extent(data, function (d) { return d.weekEnding }));
    y.domain(d3.extent(data, function (d) { return d.retailSales }));
    g.append("g")
      .attr("transform", "translate(20," + height + ")")
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();
    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("x", 150)
      .attr("font-size", "2.5em")
      .attr("y", -80)
      .attr("dy", "3em")
      .attr("text-anchor", "end")
      .text("Retail Sales");
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", line);
  }
  return (
    <div className="sale_chart">
      <svg />
    </div>
  )
}

export default SaleChart;