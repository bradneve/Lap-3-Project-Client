const initialState = {
[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.payload, loading: false };
    case "WITHDRAW":
      return { ...state, balance: state.balance - action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true }
    default:
      return state;
  }
}

export default questionsReducer