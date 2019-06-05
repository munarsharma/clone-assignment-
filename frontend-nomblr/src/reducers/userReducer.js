import {
  SET_LOGGEDIN_USER,
  GOT_ERROR,
  USER_INFO_UPDATED,
  SET_BLOG_NAME,
  SET_USER_IMG,
  SET_USER_BIO,
  SET_POST_TYPE
} from "../actions/actionTypes";

const initialState = {
  currentUser: null,
  loggedIn: false
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN_USER": {
      return { ...state, currentUser: action.payload, loggedIn: true };
    }
  }
  return state;
};

export default userReducers;
