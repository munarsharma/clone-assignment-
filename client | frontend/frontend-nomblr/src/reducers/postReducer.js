import { FETCH_ALL_POSTS, FETCHED_ALL_POSTS } from '../actions/actionTypes';

const initialState = {
  posts: [],
  fetching: false,
};

const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GOT_ERROR': {
      return { ...state, fetching: false };
    }

    case 'FETCH_ALL_POSTS': {
      return { ...state, fetching: true };
    }

    case 'FETCHED_ALL_POSTS': {
      return { ...state, fetching: false, posts: action.payload };
    }
  }
  return state;
};

export default postsReducers;
