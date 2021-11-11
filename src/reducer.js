function reducer(state = {
  sales: [],
  currentChart:
    { chart: 'retailSales', description: 'RETAIL SALES', color: 'blue' }
},action) {
  switch (action.type) {
    case "SET_SUMMARY":
      return ({
        ...state,
        summary: {
          ...action.payload
        }
      })
    case "SET_TAGS":
      return ({
        ...state,
        tags: action.payload.tags
      })
    case "SET_SALES":
      return ({
        ...state,
        sales: action.payload.sales
      })
    case "SET_CURRENT_CHART":
      return ({
        ...state,
        currentChart: {
          chart: action.payload.chart,
          description: action.payload.description,
          color: action.payload.color
        }
      })
    default:
      return state;
  }
}
export default reducer;