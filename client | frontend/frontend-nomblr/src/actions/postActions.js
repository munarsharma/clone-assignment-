import {
  FETCH_ALL_POSTS,
  FETCHED_ALL_POSTS,
  FETCH_USER_POSTS,
  FETCHED_USER_POSTS,
  GOT_ERROR,
  ADD_POST,
  EDIT_POST,
  SET_POST_TYPE_IMG,
  SET_POST_TYPE_TEXT
} from './actionTypes';
import axios from 'axios';

export const gotError = err => {
  return {
    type: 'GOT_ERROR',
    payload: err,
  };
};

export const fetchAllPosts = () => {
  console.log('fetch called');
  return { type: 'FETCH_ALL_POSTS' };
};

// you dont need this but it is good to have. mateo uses it to change fetching in state from false to true and has something attached to the boolen.
export const fetchUserPosts = () => {
  return { type: ' FETCH_USER_POSTS' };
};

export const goFetchPosts = () => dispatch => {
  // dispatch(fetchUsers());
  axios
    .get('/posts')
    .then(res => {
      console.log(res);
      dispatch({ type: 'FETCHED_ALL_POSTS', payload: res.data.posts });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

export const goFetchUserPosts = () => dispatch => {
  // dispatch(fetchUsers());

  axios
    .get('/posts/users/:id')
    .then(res => {
      console.log(res);
      dispatch({ type: 'FETCHED_USER_POSTS', payload: res.data.posts });
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
