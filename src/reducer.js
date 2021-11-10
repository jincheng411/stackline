function reducer(state = {}, action) {
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
    default:
      return state;
  }
}
export default reducer;