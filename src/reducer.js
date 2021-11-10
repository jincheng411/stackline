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
    case "SET_SALES":
    default:
      return state;
  }
}
export default reducer;