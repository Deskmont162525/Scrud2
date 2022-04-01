import { GET_CURSOS, GET_EMPRENDEDORES } from '../actions/constants'

var initialState = {
  cursos: [],
  emprendedores: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURSOS:
      return {
        ...state,
        cursos: action.payload,
      }
    case GET_EMPRENDEDORES:
      return {
        ...state,
        emprendedores: action.payload,
      }
    default:
      return state
  }
}
