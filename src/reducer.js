function reducer(state = {}, action) {
  switch(action.type) {
    case "SET_SUMMARY":
      return {
        ...state,
        action.payload
      }
    case "SET_TAGS":
    case "SET_SALES":
    default:
      return state;
  }
}