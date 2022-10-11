const initialState = { questions: [], answers: [], correct_answers: []}

const questionReducer = (state = initialState, action) => {
  switch(action.type){
    case 'STORE_QUESTIONS':
      return { ...state, questions: action.payload }
    case 'STORE_ANSWERS':
      return { ...state, answers: action.payload }
    case 'STORE_CORRECT_ANSWERS':
      return { ...state, correct_answers: action.payload }
    default:
      return state
  }
}

export default questionReducer