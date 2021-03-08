const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'DECREASE') {
    if (state.counter > 0) {
      return {
        ...state,
        counter: state.counter - 1
      }
    }
  }
  return state;
}

export default reducer;