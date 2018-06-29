import {API_BASE_URL} from '../config';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST
})

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  data
})

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (err) => ({
  type: FETCH_ERROR,
  err
})

export const fetchCheeses = () => dispatch => {
  console.log('fetchCheeses was called');
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/cheeses`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return(res.json())
    })
    .then(cheeses => dispatch(fetchSuccess(cheeses)))
    .catch(err => dispatch(fetchError(err)))
  }
