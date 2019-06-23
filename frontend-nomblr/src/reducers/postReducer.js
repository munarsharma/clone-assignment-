import {
  FETCH_ALL_POSTS,
  FETCHED_ALL_POSTS,
  FETCH_USER_POSTS,
  FETCHED_USER_POSTS,
  SET_POST_TYPE,
  FETCH_POSTS_BY_POPULARITY,
  FETCH_LIKED_POSTS
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  fetching: false,
  postType: '',
  userPosts: [],
  likedPosts: [],
  byPopularity: [],
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

    case 'FETCHED_USER_POSTS': {
      return { ...state, fetching: false, userPosts: action.payload };
    }

    case 'FETCH_POSTS_BY_POPULARITY': {
      return { ...state, fetching: false, byPopularity: action.payload };
    }

    case 'FETCH_LIKED_POSTS': {
      return { ...state, fetching: false, likedPosts: action.payload };
    }

    case 'SET_POST_TYPE': {
      return { ...state, postType: action.payload };
    }
  }

  return state;
};

export default postsReducers;
