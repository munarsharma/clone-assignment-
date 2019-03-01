import { FETCH_USER, FETCHED_USER, GOT_ERROR } from './actionTypes';
import axios from 'axios';

export const gotError = err => {
  return {
    type: 'GOT_ERROR',
    payload: err,
  };
};

export const fetchUser = () => {
  console.log('fetch called');
  return { type: 'FETCH_USER' };
};

export const goFetchUser = () => dispatch => {
  // dispatch(fetchUsers());
  axios
    .get('/users/:id')
    .then(res => {
      console.log(res);
      dispatch({ type: 'FETCHED_USERS', payload: res.data.users });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
