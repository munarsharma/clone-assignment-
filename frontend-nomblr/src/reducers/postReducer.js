import {
  FETCH_ALL_POSTS,
  FETCHED_ALL_POSTS,
  FETCH_USER_POSTS,
  FETCHED_USER_POSTS,
  SET_POST_TYPE
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  fetching: false,
  postType: '',
  userPosts: [],
};

const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GOT_ERROR': {
      return { ...state, fetching: false };
    }

    case 'FETCH_ALL_POSTS': {
      return { ...state, fetching: true };
    }

    case 'FETCH_ALL_POSTS': {
      return { ...state, fetching: true };
    }

    case 'FETCHED_ALL_POSTS': {
      return { ...state, fetching: false, posts: action.payload };
    }

    case 'FETCHED_USER_POSTS': {
      return { ...state, fetching: false, userPosts: action.payload };
    }

    case 'SET_POST_TYPE': {
      return { ...state, postType: action.payload };
    }
  }

  return state;
};

export default postsReducers;
