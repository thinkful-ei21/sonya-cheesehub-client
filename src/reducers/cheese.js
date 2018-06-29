import {
  FETCH_REQUEST,
  FETCH_SUCCESS, 
  FETCH_ERROR
} from '../actions/cheese'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export function reducer(state=initialState, action) {

  if(action.type === FETCH_REQUEST) {
    console.log('request being made')
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  else if(action.type === FETCH_SUCCESS) {
    console.log('successful request')
    return {
      ...state,
      loading: false,
      error: null,
      cheeses: action.data
    }
  }
  else if(action.type === FETCH_ERROR) {
    console.log('there was an error with the request')
    return {
      ...state,
      loading: false,
      error: action.err,
    }
  }
  return state;
}